import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import { app } from ".././config/firebase";
import {useHistory} from 'react-router-dom';




const db = app.firestore();

export default function EditProduct() {
    const {id}=useParams();
    const [getData,setData]=useState({});
    const history=useHistory();








    const [fileUrls, setFileUrls] =useState(null);
  const [titles,setTitles]=useState('');
  const [categorys,setCategorys]=useState('');
  const [prices,setPrices]=useState('');
  const [fullNames,setFullNames]=useState('');
  const [phones,setPhones]=useState('');
  const [descs,setDescs]=useState('');
  const [provinces,setProvinces]=useState('');
  const [locations,setLocations]=useState('');



      
    useEffect(()=>{
        const fetchData=async()=>{
            const res=await db.collection("noman").doc(id).get();
        setData(res.data())
        }
        fetchData();
    },[])









  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrls(await fileRef.getDownloadURL());
  };









    const submitHandler=async (e)=>{
        e.preventDefault();


        const firebaseData={
            title: titles,
            avatar: fileUrls,
            category:categorys,
            price:prices,
            fullName:fullNames,
            phone:phones,
            desc:descs,
            province:provinces,
            location:locations
          }
      
          try{
              const res=await db.collection("noman").doc(id).update(firebaseData);
              console.log("res",res)
              history.push('/')
          }
          catch(err){
            console.log(err)
          }
    }
    return (
        <div>
            <div style={{marginTop:"200px",marginLeft:"150px"}}>
            <h1>Edit Producut</h1> 
            <form>
            <input type="file" onChange={onFileChange}></input>
            <input type="text" placeholder={getData.title} onChange={(e)=>setTitles(e.target.value)}></input>
            <input type="text" placeholder={getData.desc} onChange={(e)=>setDescs(e.target.value)}></input>
            <input type="text"  placeholder={getData.category} onChange={(e)=>setCategorys(e.target.value)}></input>
            <input type="text"  placeholder={getData.fullName} onChange={(e)=>setFullNames(e.target.value)}></input>
            <input type="text"  placeholder={getData.location} onChange={(e)=>setLocations(e.target.value)}></input>
            <input type="text" placeholder={getData.phone} onChange={(e)=>setPhones(e.target.value)}></input>
            <input type="text" placeholder={getData.price} onChange={(e)=>setPrices(e.target.value)}></input>
            <input type="text"  placeholder={getData.province} onChange={(e)=>setProvinces(e.target.value)}></input>
            </form>
            <button type="submit" onClick={submitHandler}>Update Products</button>
            </div>
        </div>
    )
}

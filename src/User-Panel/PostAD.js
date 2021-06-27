import React,{useState,useEffect} from 'react'
import background from "../Assets/images/banner1.jpg";
import {useHistory} from 'react-router-dom';
import { app } from ".././config/firebase";

const db = app.firestore();

const PostAD = () => {
  const history=useHistory();
  const [fileUrl, setFileUrl] =useState(null);
  const [title,setTitle]=useState('');
  const [category,setCategory]=useState('');
  const [price,setPrice]=useState('');
  const [fullName,setFullName]=useState('');
  const [phone,setPhone]=useState('');
  const [desc,setDesc]=useState('');
  const [province,setProvince]=useState('');
  const [location,setLocation]=useState('');



 



  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
  };




  const onSubmit = async (e) => {
    e.preventDefault();

    const firebaseData={
      title: title,
      avatar: fileUrl,
      category:category,
      price:price,
      fullName:fullName,
      phone:phone,
      desc:desc,
      province:province,
      location:location
    }

    try{
      if (!title || !fileUrl || !category || !price || !fullName || !phone || !desc || !province || !location) {
        return;
      }else{
        const res=await db.collection("noman").add(firebaseData);
        console.log("res",res)
      }
    }
    catch(err){
      console.log(err)
    }
  };







  const submitData=async (e)=>{
    e.preventDefault();

    
    const firebaseData={
      title: title,
      avatar: fileUrl,
      category:category,
      price:price,
      fullName:fullName,
      phone:phone,
      desc:desc,
      province:province,
      location:location
    }



    console.log(title,category,price,fullName,phone,desc,price,fileUrl,location,province)

    try{
      if (!title || !fileUrl || !category || !price || !fullName || !phone || !desc || !province || !location) {
        return;
      }else{
        const res=await db.collection("noman").add(firebaseData);
        console.log("res",res)
        history.push('/my-ads')
      }
    }
    catch(err){
      console.log(err)
    }
  }





    return (
        <>

<div
        class="page-header"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="breadcrumb-wrapper">
                <h2 class="product-title">Post an AD</h2>
                <ol class="breadcrumb">
                  <li>
                    <a href="#">Home /</a>
                  </li>
                  <li class="current">Post-AD</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>


<div id="content" className="section-padding">
<div className="container">

<div className="row">
<div className="col-sm-12 col-md-8 col-lg-12 m-auto">
<div className="row page-content">
<div className="col-xs-12 col-sm-12 col-md-12 col-lg-7">
<div className="inner-box">
<div className="dashboard-box">
<h2 className="dashbord-title">Ad Detail</h2>
</div>
               <form onSubmit={submitData}>
              <input type="text" placeholder="title" onChange={(e)=>setTitle(e.target.value)}></input>
              <select onChange={(e)=>setCategory(e.target.value)}>
                  <option>Category</option>
                  <option>TextBook</option>
                  <option>Novel</option>
                  <option>Magazine</option>
                  <option>Lectures</option>
              </select>
              <input type="text" placeholder="price" onChange={(e)=>setPrice(e.target.value)}></input>
              <textarea placeholder="description" onChange={(e)=>setDesc(e.target.value)}></textarea>
              <input type="file" onChange={onFileChange}></input>
              <input type="text" placeholder="Name" onChange={(e)=>setFullName(e.target.value)}></input>
              <input type="text" placeholder="Number" onChange={(e)=>setPhone(e.target.value)}></input>
              <select onChange={(e)=>setProvince(e.target.value)}>
                  <option>Province</option>
                  <option>Punjab</option>
                  <option>Sindh</option>
                  <option>Balochistan</option>
              </select>
              <select onChange={(e)=>setLocation(e.target.value)}>
                  <option>City</option>
                  <option>Lahore</option>
                  <option>Faislabad</option>
                  <option>Kamalia</option>
              </select>
              <button type="submit">submit</button>
            </form> 
</div>
</div>
</div>
</div>
</div>
</div>
</div>

        </>
    )
}

export default PostAD

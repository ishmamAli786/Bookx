import React,{useState,useEffect} from "react";
import background from "../Assets/images/banner1.jpg";
import { app } from ".././config/firebase";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import  { Redirect } from 'react-router-dom'

const db = app.firestore();


const MyADs = () => {
  const [product,setProduct]=useState([{}]);
  const history=useHistory();


  useEffect(()=>{
    const ctaFetchHandler=async ()=>{
      try{
        let data=await db.collection("noman").get();
        let students=[];
        data.forEach((doc)=>{
          console.log("id",doc.id)
          students.push({...doc.data(),docId:doc.id});
        })
        console.log("data",students);
        setProduct(students)
      }
      catch(err){
        console.log(err)
      }
    }
    ctaFetchHandler();
  },[])








  const deleteData=async (id)=>{
    try{
      const res=await db.collection("noman").doc(id).delete();
      return <Redirect to='/my-ads'  />
    }
    catch(err){
      console.log(err)
    }
  }
  return (
    <div>
      <div className="page-header" style={{ backgroundImage: `url(${background})` }} >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="breadcrumb-wrapper">
                <h2 className="product-title">My ADs</h2>
                <ol className="breadcrumb">
                  <li>
                    <a href="#">Home /</a>
                  </li>
                  <li className="current">My-ADs</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="content" class="section-padding">
        <div style={{marginLeft:"200px"}}>
        <table border="1">
          <thead>
             <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Desc</th>
            <th>Full Name</th>
            <th>Location</th>
            <th>Phone</th>
            <th>Province</th>
            <th>Actions</th>
            
            
          </thead>
          <tbody>
            {
              product.map((data)=>(
                <tr>
                  <td><img src={data.avatar} height="80px" width="80px"></img></td>
                  <td>{data.title}</td>
                  <td>{data.price}</td>
                  <td>{data.category}</td>
                  <td>{data.desc}</td>
                  <td>{data.fullName}</td>
                  <td>{data.location}</td>
                  <td>{data.phone}</td>
                  <td>{data.province}</td>
                  <td><Link to={`/editProduct/${data.docId}`}><EditIcon/></Link></td>
                  <td onClick={()=>deleteData(data.docId)} style={{cursor:"pointer"}}><DeleteIcon/></td>
                </tr>
              ))
            }
          </tbody>
        </table>
        </div>
</div>
</div>

  );
};

export default MyADs;

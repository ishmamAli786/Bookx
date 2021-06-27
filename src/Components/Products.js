import React,{useState,useEffect} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Img1 from '../Assets/images/featured-img1.jpg';
import { app } from ".././config/firebase";
import {useSelector,useDispatch} from 'react-redux';
import {fetchProducts,filterProduct,allProducts} from '../store/actions/useAction';




const db = app.firestore();







const Products = () => {
  const [product,setProduct]=useState([{}]);
  const [loading, setLoading] = useState(false);
  const {data} = useSelector(state => state.userReducer);
  console.log(data)
  const dispatch=useDispatch();





  useEffect(()=>{
    dispatch(fetchProducts(setLoading))
  },[])



  // useEffect(()=>{
  //   const ctaFetchHandler=async ()=>{
  //     try{
  //       let data=await db.collection("noman").get();
  //       let students=[];
  //       data.forEach((doc)=>{
  //         console.log("id",doc.id)
  //         students.push({...doc.data(),docId:doc.id});
  //       })
  //       console.log("data",students);
  //       setProduct(students)
  //     }
  //     catch(err){
  //       console.log(err)
  //     }
  //   }
  //   ctaFetchHandler();
  // },[setProduct])



//   const filterItem = (categItem) => {
//      const updatedItems = product.filter((curElem) => {
//             return curElem.category === categItem;
//         });

//         setProduct(updatedItems);
    
// }



  return (
    <Router>
    <>
    <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                  <div className="icon-box">
                    <div className="icon">
                      <i class="lni lni-graduation"></i>
                    </div>
                    <button className="btn btn-warning" onClick={()=>dispatch(filterProduct('TextBook'))}>Textbooks</button>
                  </div>
              </div>
    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                  <div className="icon-box">
                    <div className="icon">
                      <i class="lni lni-heart"></i>
                    </div>
                    <button className="btn btn-warning" onClick={()=>dispatch(filterProduct('Novel'))}>Novels</button>
                  </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                  <div className="icon-box">
                    <div className="icon">
                      <i className="lni-book"></i>
                    </div>
                    <button className="btn btn-warning" onClick={()=>dispatch(filterProduct('Magazine'))}>Magazines</button>
                  </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                  <div className="icon-box">
                    <div className="icon">
                      <i className="lni-video"></i>
                    </div>
                    <button className="btn btn-warning" onClick={()=>dispatch(filterProduct('Lectures'))}>Lectures</button>
                  </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                  <div className="icon-box">
                    <div className="icon">
                      <i className="lni-video"></i>
                    </div>
                    <button className="btn btn-warning" onClick={()=>dispatch(allProducts(setLoading))}>All</button>
                  </div>
              </div>
              
            </div>
          </div>




    <div className="container">
    <h1 className="section-title">Latest Products</h1>
<div className="row">
  {
    data.map((products)=>(
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-4">
<div className="featured-box">
<figure>
{/* <div className="icon">
<i className="lni-heart"></i>
</div> */}
<a href="/product-details"><img className="img-fluid" src={products.avatar} alt="" height="200px" width="200px" /></a>
</figure>
<div className="feature-content">
<div className="product">
<a href="#"><i className="lni-folder"></i> {products.category}</a>
</div>
<h4><a href="ads-details.html">{products.title}</a></h4>
{/* <span>Last Updated: 1 hours ago</span> */}
<ul className="address">
<li>
<a href="#"><i className="lni-map-marker"></i> {products.location}</a>
</li>
<li>
<a href="#"><i className="lni-alarm-clock"></i> {products.phone}</a>
</li>
<li>
<a href="#"><i className="lni-user"></i> {products.province}</a>
</li>
<li>
<a href="#"><i className="lni-package"></i> {products.fullName}</a>
</li>
</ul>
<div className="listing-bottom">
<h3 className="price float-left">${products.price}</h3>
{/* <a href="account-myads.html" className="btn-verified float-right"><i className="lni-check-box"></i> Verified Ad</a> */}
</div>
</div>
</div>
</div>
    ))
  }
</div>
</div>
    </>
    {/* <Switch>
      <Route exact path="/product-details">
        <ProductDetails/>
      </Route>
    </Switch> */}
    </Router>
  );
};

export default Products;

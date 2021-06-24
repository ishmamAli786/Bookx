import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Img1 from '../Assets/images/featured-img1.jpg';
import ProductDetails from './ProductDetails';

const Products = () => {
  return (
    <Router>
    <div>
<div className="container">
<h1 className="section-title">Latest Products</h1>
<div className="row">

<div className="col-xs-6 col-sm-6 col-md-6 col-lg-4">
<div className="featured-box">
<figure>
{/* <div className="icon">
<i className="lni-heart"></i>
</div> */}
<a href="/product-details"><img className="img-fluid" src={Img1} alt="" /></a>
</figure>
<div className="feature-content">
<div className="product">
<a href="#"><i className="lni-folder"></i> Books</a>
</div>
<h4><a href="ads-details.html">Learn React JS</a></h4>
{/* <span>Last Updated: 1 hours ago</span> */}
<ul className="address">
<li>
<a href="#"><i className="lni-map-marker"></i> City Here</a>
</li>
<li>
<a href="#"><i className="lni-alarm-clock"></i> Feb 18, 2018</a>
</li>
<li>
<a href="#"><i className="lni-user"></i> Town Here</a>
</li>
<li>
<a href="#"><i className="lni-package"></i> Used</a>
</li>
</ul>
<div className="listing-bottom">
<h3 className="price float-left">$200.00</h3>
{/* <a href="account-myads.html" className="btn-verified float-right"><i className="lni-check-box"></i> Verified Ad</a> */}
</div>
</div>
</div>
</div>

</div>
</div>


    </div>
    {/* <Switch>
      <Route exact path="/product-details">
        <ProductDetails/>
      </Route>
    </Switch> */}
    </Router>
  );
};

export default Products;

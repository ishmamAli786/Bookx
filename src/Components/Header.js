import React from 'react';
import background from '../Assets/images/banner1.jpg';

const Header = () => {
    return (
<header id="header-wrap">

<div id="hero-area"  style={{backgroundImage: `url(${background})`}}>
<div className="overlay"></div>
<div className="container">
<div className="row">
<div className="col-md-12 col-lg-12 col-xs-12 text-center">
<div className="contents">
<h1 className="head-title">Welcome to <span className="year">BookX</span></h1>
<p>Buy, Sell, Lend and Donate <br/> Books | Novels | Magazines | and More</p>
<div className="search-bar">
<div className="search-inner">
<form className="search-form">
<div className="form-group inputwithicon">
<i className="lni-tag"></i>
<input type="text" name="customword" className="form-control" placeholder="Enter Product Keyword" />
</div>
<div className="form-group inputwithicon">
<i className="lni-map-marker"></i>
<div className="select">
<select>
<option value="none">Locations</option>
<option value="none"> Faisalabad</option>
<option value="none">Lahore</option>
<option value="none">Multan</option>
<option value="none">Islamabad</option>
<option value="none">Karachi</option>
</select>
</div>
</div>
<div className="form-group inputwithicon">
<i className="lni-menu"></i>
<div className="select">
<select>
<option value="none">Categories</option>
<option value="none">Notebook</option>
<option value="none">Novel</option>
<option value="none">Magazine</option>
<option value="none">Lecture</option>
</select>
</div>
</div>
<button className="btn btn-common" type="button"><i className="lni-search"></i> Search Now</button>
</form>
</div>
</div>
</div>
</div>
</div>
</div>
 </div>

</header>
    )
}

export default Header

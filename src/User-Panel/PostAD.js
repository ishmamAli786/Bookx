import React from 'react'
import background from "../Assets/images/banner1.jpg";

const PostAD = () => {
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
<div className="dashboard-wrapper">
<div className="form-group mb-3">
<label className="control-label">Product Title</label>
<input className="form-control input-md" name="Title" placeholder="Title" type="text" />
</div>
<div className="form-group mb-3 tg-inputwithicon">
<label className="control-label">Category</label>
<div className="tg-select form-control">
<select>
<option value="none">Select Categories</option>
<option value="none">NoteBook</option>
<option value="none">Novel</option>
<option value="none">Magazine</option>
<option value="none">Lecture Notes</option>
</select>
</div>
</div>
<div className="form-group mb-3">
<label className="control-label">Price</label>
<input className="form-control input-md" name="price" placeholder="Ad your Price" type="text" />
</div>
<div className="form-group mb-3">
<label className="control-label">Description</label>
<textarea class="form-control" rows="5" id="description" placeholder="Add Details"></textarea>
{/* <input className="form-control input-md" name="description" placeholder="Ad your Price" type="text" /> */}
</div>
<div className="form-group md-3">
</div>
<label className="tg-fileuploadlabel" for="tg-photogallery">
<span>Drop files anywhere to upload</span>
<span>Or</span>
<span className="btn btn-common">Select Files</span>
<span>Maximum upload file size: 500 KB</span>
<input id="tg-photogallery" className="tg-fileinput" type="file" name="file" />
</label>
</div>
</div>
</div>
<div className="col-xs-12 col-sm-12 col-md-12 col-lg-5">
<div className="inner-box">
<div className="tg-contactdetail">
<div className="dashboard-box">
<h2 className="dashbord-title">Contact Detail</h2>
</div>
<div className="dashboard-wrapper">
<div className="form-group mb-3">
<label className="control-label">Full Name*</label>
<input className="form-control input-md" name="name" type="text" />
</div>
<div className="form-group mb-3">
<label className="control-label">Mobile Number *</label>
<input className="form-control input-md" name="phone" type="text" />
</div>
<div className="form-group mb-3 tg-inputwithicon">
<label className="control-label">Province</label>
<div className="tg-select form-control">
<select>
<option value="none">Punjab</option>
<option value="none">KPK</option>
<option value="none">Sindh</option>
<option value="none">Baluchistan</option>
</select>
</div>
</div>
<div className="form-group mb-3 tg-inputwithicon">
<label className="control-label">City</label>
<div className="tg-select form-control">
<select>
<option value="none">Faisalabad</option>
<option value="none">Lahore</option>
<option value="none">Karachi</option>
<option value="none">Islamabad</option>
</select>
</div>
</div>
<div className="tg-checkbox">
<div className="custom-control custom-checkbox">
<input type="checkbox" className="custom-control-input" id="tg-agreetermsandrules" />
<label className="custom-control-label" for="tg-agreetermsandrules">I agree to all <a href="javascript:void(0);">Terms of Use &amp; Posting Rules</a></label>
</div>
</div>
<button className="btn btn-common" type="button">Post Ad</button>
</div>
</div>
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

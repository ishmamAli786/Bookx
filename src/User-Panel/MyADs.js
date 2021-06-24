import React from "react";
import ProductImage1 from "../Assets/images/product-img1.jpg";
import ProductImage2 from "../Assets/images/product-img2.jpg";
import ProductImage3 from "../Assets/images/product-img3.jpg";
import ProductImage4 from "../Assets/images/product-img4.jpg";
import ProductImage5 from "../Assets/images/product-img5.jpg";
import background from "../Assets/images/banner1.jpg";

const MyADs = () => {
  return (
    <>
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
<div class="container">
<div class="row">
      <div className="col-sm-12 col-md-8 col-lg-12 m-auto">
        <div className="page-content">
          <div className="inner-box">
            <div className="dashboard-box">
              <h2 className="dashbord-title">My Ads</h2>
            </div>
            <div className="dashboard-wrapper">
              <nav className="nav-table">
                <ul>
                  <li className="active">
                    <a href="#">All Ads (5)</a>
                  </li>
                  {/* <li>
                    <a href="#">Published (88)</a>
                  </li>
                  <li>
                    <a href="#">Featured (12)</a>
                  </li>
                  <li>
                    <a href="#">Sold (02)</a>
                  </li>
                  <li>
                    <a href="#">Active (42)</a>
                  </li>
                  <li>
                    <a href="#">Expired (01)</a>
                  </li> */}
                </ul>
              </nav>
              <table className="table table-responsive dashboardtable tablemyads">
                <thead>
                  <tr>
                    <th>
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="checkedall"
                        />
                        <label
                          className="custom-control-label"
                          for="checkedall"
                        ></label>
                      </div>
                    </th>
                    <th>Photo</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Ad Status</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr data-category="active">
                    <td>
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="adone"
                        />
                        <label
                          className="custom-control-label"
                          for="adone"
                        ></label>
                      </div>
                    </td>
                    <td className="photo">
                      <img className="img-fluid" src={ProductImage1} alt="" />
                    </td>
                    <td data-title="Title">
                      <h3>HP Laptop 6560b core i3 3nd generation</h3>
                      <span>Ad ID: ng3D5hAMHPajQrM</span>
                    </td>
                    <td data-title="Category">
                      <span className="adcategories">Laptops &amp; PCs</span>
                    </td>
                    <td data-title="Ad Status">
                      <span className="adstatus adstatusactive">active</span>
                    </td>
                    <td data-title="Price">
                      <h3>139$</h3>
                    </td>
                    <td data-title="Action">
                      <div className="btns-actions">
                        <a className="btn-action btn-view" href="#">
                          <i className="lni-eye"></i>
                        </a>
                        <a className="btn-action btn-edit" href="#">
                          <i className="lni-pencil"></i>
                        </a>
                        <a className="btn-action btn-delete" href="#">
                          <i className="lni-trash"></i>
                        </a>
                      </div>
                    </td>
                  </tr>

                  <tr data-category="inactive">
                    <td>
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="adthree"
                        />
                        <label
                          className="custom-control-label"
                          for="adthree"
                        ></label>
                      </div>
                    </td>
                    <td className="photo">
                      <img className="img-fluid" src={ProductImage2} alt="" />
                    </td>
                    <td data-title="Title">
                      <h3>Furniture Straps 4-Pack, TV Anti-Tip Metal Wall </h3>
                      <span>Ad ID: ng3D5hAMHPajQrM</span>
                    </td>
                    <td data-title="Category">Real Estate</td>
                    <td>
                      <span className="adstatus adstatusinactive">
                        Inactive
                      </span>
                    </td>
                    <td data-title="Price">
                      <h3>$69</h3>
                    </td>
                    <td data-title="Action">
                      <div className="btns-actions">
                        <a className="btn-action btn-view" href="#">
                          <i className="lni-eye"></i>
                        </a>
                        <a className="btn-action btn-edit" href="#">
                          <i className="lni-pencil"></i>
                        </a>
                        <a className="btn-action btn-delete" href="#">
                          <i className="lni-trash"></i>
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr data-category="sold">
                    <td>
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="adfour"
                        />
                        <label
                          className="custom-control-label"
                          for="adfour"
                        ></label>
                      </div>
                    </td>
                    <td className="photo">
                      <img className="img-fluid" src={ProductImage3} alt="" />
                    </td>
                    <td data-title="Title">
                      <h3>
                        Apple iPhone X, Fully Unlocked 5.8", 64 GB - Black
                      </h3>
                      <span>Ad ID: ng3D5hAMHPajQrM</span>
                    </td>
                    <td data-title="Category">Mobile</td>
                    <td data-title="Ad Status">
                      <span className="adstatus adstatussold">Sold</span>
                    </td>
                    <td data-title="Price">
                      <h3>$89</h3>
                    </td>
                    <td data-title="Action">
                      <div className="btns-actions">
                        <a className="btn-action btn-view" href="#">
                          <i className="lni-eye"></i>
                        </a>
                        <a className="btn-action btn-delete" href="#">
                          <i className="lni-trash"></i>
                        </a>
                      </div>
                    </td>
                  </tr>

                  <tr data-category="expired">
                    <td>
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="adseven"
                        />
                        <label
                          className="custom-control-label"
                          for="adseven"
                        ></label>
                      </div>
                    </td>
                    <td className="photo">
                      <img className="img-fluid" src={ProductImage4} alt="" />
                    </td>
                    <td data-title="Title">
                      <h3>Essential Phone 8GB Unlocked with Dual Camera</h3>
                      <span>Ad ID: ng3D5hAMHPajQrM</span>
                    </td>
                    <td data-title="Category">Mobile</td>
                    <td data-title="Ad Status">
                      <span className="adstatus adstatusexpired">Expired</span>
                    </td>
                    <td data-title="Price">
                      <h3>$89</h3>
                    </td>
                    <td data-title="Action">
                      <div className="btns-actions">
                        <a className="btn-action btn-view" href="#">
                          <i className="lni-eye"></i>
                        </a>
                        <a className="btn-action btn-edit" href="#">
                          <i className="lni-pencil"></i>
                        </a>
                        <a className="btn-action btn-delete" href="#">
                          <i className="lni-trash"></i>
                        </a>
                      </div>
                    </td>
                  </tr>

                  <tr data-category="deleted">
                    <td>
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="adten"
                        />
                        <label
                          className="custom-control-label"
                          for="adten"
                        ></label>
                      </div>
                    </td>
                    <td className="photo">
                      <img className="img-fluid" src={ProductImage5} alt="" />
                    </td>
                    <td data-title="Title">
                      <h3>Apple iMac Pro 27" All-in-One Desktop, Space Gray</h3>
                      <span>Ad ID: ng3D5hAMHPajQrM</span>
                    </td>
                    <td data-title="Category">Apple iMac</td>
                    <td data-title="Ad Status">
                      <span className="adstatus adstatusdeleted">Deleted</span>
                    </td>
                    <td data-title="Price">
                      <h3>$389</h3>
                    </td>
                    <td data-title="Action">
                      <div className="btns-actions">
                        <a className="btn-action btn-view" href="#">
                          <i className="lni-eye"></i>
                        </a>
                        <a className="btn-action btn-edit" href="#">
                          <i className="lni-pencil"></i>
                        </a>
                        <a className="btn-action btn-delete" href="#">
                          <i className="lni-trash"></i>
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
</div>
</div>
</div>

    </>
  );
};

export default MyADs;

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Logo from "./Assets/images/img-logo.png";
// import Nav from './Components/Nav';
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
import FAQ from "./Pages/FAQ";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Footer from "./Components/Footer";
import ErroPage from "./Pages/404";
import Books from "./Categories/Books";
import PostAD from "./User-Panel/PostAD";
import MyADs from "./User-Panel/MyADs";
import ProductDetails from "./Components/ProductDetails";
import ImageUpload from './Components/ImageUpload';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
      {/* <Nav/> */}
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route  path="/contact-us">
            <ContactUs />
          </Route>
          <Route  path="/about-us">
            <AboutUs />
          </Route>
          <Route  path="/frequently-asked-questions">
            <FAQ />
          </Route>
          <Route  path="/login">
            <Login />
          </Route>
          <Route  path="/register">
            <Register />
          </Route>
          <Route  path="/post-ads">
            <PostAD />
          </Route>
          {/* <Route exact path="/books">
            <Books/>
          </Route> */}
          <Route  path="/my-ads">
            <MyADs />
          </Route>
          <Route exact path="/product-details">
            <ProductDetails />
          </Route>

          <Route exact path="">
            <ErroPage />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

import React, { useContext } from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";
import { DataContext } from "../DataProvider/DataProvider";


const Header = () => {

const [{basket},dispatch] = useContext(DataContext)
  return (
    
      <section className={classes.fixed}>
        <section>
          <div className={classes.header_container}>
            {/* Logo and Delivery section */}
            <div className={classes.logo_container}>
              <Link to="/">
                <img
                  src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                  alt="amazon logo"
                />
              </Link>
              <div className={classes.delivery}>
                <span>
                  <SlLocationPin />
                </span>
                <div>
                  <p>Delivered to</p>
                  <span>Ethiopia</span>
                </div>
              </div>
            </div>

            {/* Search section */}
            <div className={classes.search}>
              <select>
                <option value="">All</option>
              </select>
              <input type="text" placeholder="Search product" />
              <BsSearch size={25} />
            </div>

            {/* Orders, Language, Cart Section */}
            <div className={classes.order_container}>
              <Link to="#" className={classes.language}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Hopkinson_Flag_of_the_United_States_Navy.svg/330px-Hopkinson_Flag_of_the_United_States_Navy.svg.png"
                  alt="US Flag"
                />
                <select>
                  <option value="">EN</option>
                </select>
              </Link>

              {/* Account Sign In */}
              <Link to="#">
                <p>Sign In</p>
                <span>Account & Lists</span>
              </Link>

              {/* Orders Section */}
              <Link to="/orders">
                <p>returns</p>
                <span>& Orders</span>
              </Link>

              {/* Cart Section */}
              <Link to="/cart" className={classes.cart}>
                <BiCart size={35} />
                <span>{basket.length}</span>
              </Link>
            </div>
          </div>
        </section>
        <LowerHeader />
      </section>
    
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import "../static/css/header.css";

const Header = (props) => {
  return (
    <div className="topbar">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="full">
          <button type="button" id="sidebarCollapse" className="sidebar_toggle">
            <i className="fa fa-bars"></i>
          </button>
          <div className="logo_section">
            <a href="index.html">
              <img
                className="img-responsive"
                src="../static/images/logo/logo.png"
                alt="#"
              />
            </a>
          </div>
          <div className="right_topbar">
            <div className="icon_info">
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-bell-o"></i>
                    <span className="badge">2</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-question-circle"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-envelope-o"></i>
                    <span className="badge">3</span>
                  </a>
                </li>
              </ul>
              <ul className="user_profile_dd">
                {props.isAuthenticated ? (
                  <li>
                    <a className="dropdown-toggle" data-toggle="dropdown">
                      <img
                        className="img-responsive rounded-circle"
                        src="images/layout_img/user_img.jpg"
                        alt="#"
                      />
                      <span className="name_user">John David</span>
                    </a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="profile.html">
                        My Profile
                      </a>
                      <a className="dropdown-item" href="settings.html">
                        Settings
                      </a>
                      <a className="dropdown-item" href="help.html">
                        Help
                      </a>
                      <a className="dropdown-item" href="#">
                        <span>Sign Out</span> <i className="fa fa-sign-out"></i>
                      </a>
                    </div>
                  </li>
                ) : (
                  <div className="login-btn-section">
                    <Link className="login-btn" to="login">
                      <span>Login</span>
                      {/* <i className="fa fa-sign-out"></i> */}
                    </Link>
                  </div>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

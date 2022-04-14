import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <p>All Rights Reserved. Company Name © 2018</p>
            </div>
            <div className="col-md-4">
              <ul className="list-inline socials">
                <li>
                  <a href="">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
              <ul className="right-flag">
                <li>
                  <a href="#">
                    {/* <img src="images/flag.png" alt="" /> <span>Change</span> */}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

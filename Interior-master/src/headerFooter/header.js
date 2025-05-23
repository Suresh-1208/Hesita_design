// import { Link } from "react-router-dom";
// import logo from "../images/logo.png";
// import "./header.css";
// import "../Admin/AdminLogin.js";
// import "../Booking/InteriorDesignBooking.js";
// import "../com/ReviewPage.js";
// export function Header() {
//   return (
//     <div className="header">
//       <div className="header-logo-text">
//         <Link style={{display:"flex"}} to="/">
//           <div className="header-logo">
//             <img src={logo} alt="logo"></img>
//           </div>
//           <div className="header-text">
//             <p><h5>Hestia Design Studio</h5></p>
//           </div>
//         </Link>
//       </div>
//       <div className="header-pages">
//         <ul>
//             <li><Link to={`/`}>Home</Link></li>
//             <li><Link to={`team`}>Team</Link></li>
//             <li><Link to={`/services`}>Services</Link></li>
//             <li><Link to={`/projects`}>Projects</Link></li>
//             <li><Link to={`/blog`}>Blog</Link></li>
//             <li><Link to={`/contact`}>Contact</Link></li>
//             <li><Link to={`/admin/login`}>Admin</Link></li>
//             <li><Link to={`/booking`}>Booking</Link></li>
//             <li><Link to={`/comment`}>Reviews</Link></li>
//         </ul>
        
//       </div>
//     </div>
//   );
// }

import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "./header.css";
import "../Admin/AdminLogin.js";
import "../Booking/InteriorDesignBooking.js";
import "../com/ReviewPage.js";

export function Header() {
  return (
    <div className="header">
      <div className="header-logo-text">
        <Link style={{ display: "flex", alignItems: "center" }} to="/">
          <div className="header-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="header-text">
            <h5>Hestia Design Studio</h5>
          </div>
        </Link>
      </div>
      <div className="header-pages">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/team">Team</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/admin/login">Admin</Link></li>
          <li><Link to="/booking">Booking</Link></li>
          <li><Link to="/comment">Reviews</Link></li>
        </ul>
      </div>
    </div>
  );
}

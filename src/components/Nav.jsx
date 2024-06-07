import { Link } from "react-router-dom";
import { FcHome } from "react-icons/fc";
import { FcAddressBook } from "react-icons/fc";
import { GiCakeSlice } from "react-icons/gi";
function Nav() {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        backgroundColor: "red",
      }}
    >
      <div>
        <FcHome style={{ marginRight: "2px" }} />
        <Link style={{ color: "white" }} to="/">
          Home
        </Link>
      </div>
      <div>
        <FcAddressBook style={{ marginRight: "2px" }} />
        <Link style={{ color: "white" }} to="/Contacto">
          Contacto
        </Link>
      </div>
      <div style={{ marginLeft: "1000px" }}>
        <GiCakeSlice style={{ color: "white" }} />
        <Link style={{ color: "white" }} to="/">
          Happy Cake
        </Link>
      </div>
    </div>
  );
}

export default Nav;

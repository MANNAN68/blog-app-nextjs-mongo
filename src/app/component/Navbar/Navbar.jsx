import Image from "next/image";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div
        className="navbar-wrapper "
        style={{ height: "100px", background: "#201b6d" }}
      >
        <div className="container-fluid h-100">
          <div className="navbar h-100">
            <div className="navbar-brand">
              <Image src="/logo.svg" alt="brand logo" width={168} height={32} />
            </div>
            <h6>sgksdh</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

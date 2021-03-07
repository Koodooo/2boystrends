import Logo from "../../assets/images/logo-small.png";

function Header() {
  return (
      <nav className="navbar navbar-light bg-dark py-3">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src={Logo}
              alt=""
              width="35"
              height="30"
              className="d-inline-block align-center"
            />
           <a className="d-inline-block align-center" style={{textDecoration:'none',color:'#fff',fontSize:"1em"}}> Two Boys Men's Colours</a>
          </a>
        </div>
      </nav>
  );
}

export default Header;

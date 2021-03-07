function Footer() {
  return (
    <footer className="page-footer font-small  pt-4 bg-dark mt-10">
      {/* <!-- Footer Links --> */}
      <div className="container-fluid text-center">
        {/* <!-- Grid row --> */}
        <div className="row">
          <div className="col-md-12 mt-md-0 mt-3 mb-2">
            <h5 className="text-uppercase text-white">Two Boys Men's Colours</h5>
            <p className="text-white">8/2828C, Samuthaya Kuda Street</p>
            <p className="text-white">Pandian nagar</p>
            <p className="text-white">Tiruppur-641602</p>
            <p className="text-white">7867802399, 9345453521</p>
            <p className="text-white">email : 2boyscolour@gmail.com</p>
          </div>

          <hr className="clearfix w-100 d-md-none pb-3" />
          {/* <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase text-white">Links</h5>

            <ul className="list-unstyled">
              <li>
                <a href="#">Go to Top</a>
              </li>
            </ul>
          </div> */}
        </div>
        <ul className="list-unstyled list-inline text-center">
          <li className="list-inline-item">
            <a className="btn-floating btn-fb mx-1">
              <i className="fab fa-facebook-f"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-tw mx-1">
              <i className="fab fa-twitter"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-gplus mx-1">
              <i className="fab fa-google-plus-g"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-li mx-1">
              <i className="fab fa-linkedin-in"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-dribbble mx-1">
              <i className="fab fa-dribbble"> </i>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-copyright text-center py-3 text-white">
        ©2021 Copyright: 
        <a href="https://2boystrends.com/"> 2boystrends.com</a>
      </div>
    </footer>
  );
}

export default Footer;

const DressTypes = [
  "Sleeveless",
  "printed Shirt",
  "Tshirts",
  "Striped Shirt",
  "Pants",
];

function NavMenu() {
  return (
    <ul className="nav justify-content-end py-3">
      {DressTypes.map((dT) => {
        return (
          <li className="nav-item">
            <a
              className="nav-link text-dark text-uppercase font-weight-bold"
              href="#"
            >
              {dT}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default NavMenu;

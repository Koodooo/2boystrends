import Carousel from "../../components/carousel";

const row1 = [
  {
    path: "Sleeveless",
    prefixName: "sleeveless",
    length: 19,
  },
  {
    path: "Printedshirt",
    prefixName: "printedshirt",
    length: 37,
    name:'Printed Shirt'
  },
  {
    path: "Tshirts",
    prefixName: "tshirts",
    length: 28,
  },
];

const row2=[
  {
    path: "Stripedshirt",
    prefixName: "stripedshirt",
    length: 16,
    name:'Striped Shirt'
  },
  {
    path: "Pants",
    prefixName: "pant",
    length: 12,
  },
 
]

function Home() {

  return (
    <div className="container  mt-10">
      <div className="row">
        {row1.map((dress,i) => {
          return (
            <div className="col-4 border">
              <Carousel
                carouselId={`row1-${i}`}
                path={dress.path}
                prefixName={dress.prefixName}
                length={dress.length}
              />
            </div>
          );
        })}
      </div>
      <div className="row justify-content-center top30">
      {row2.map((dress,i) => {
          return (
            <div className="col-5 border">
              <Carousel
                carouselId={`row2-${i}`}
                path={dress.path}
                prefixName={dress.prefixName}
                length={dress.length}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;

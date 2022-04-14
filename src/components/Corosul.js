import React, { useEffect, useState } from "react";
import { Carousel, Image } from "react-bootstrap";
const Corosul = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts([
      {
        id: 1,
        image:
          "https://cdn.pixabay.com/photo/2020/07/15/18/26/footwear-5408643_960_720.jpg",
      },
      {
        id: 2,
        image:
          "https://cdn.pixabay.com/photo/2017/04/08/16/16/kicks-2213619_960_720.jpg",
      },
      {
        id: 3,
        image:
          "https://cdn.pixabay.com/photo/2016/03/23/12/26/football-1274661_960_720.jpg",
      },
      {
        id: 4,
        image:
          "https://cdn.pixabay.com/photo/2014/04/03/10/07/converse-309846_960_720.png",
      },
      //   "https://cdn.pixabay.com/photo/2017/04/08/16/16/kicks-2213619_960_720.jpg",
      //   "https://cdn.pixabay.com/photo/2016/03/23/12/26/football-1274661_960_720.jpg",
      //   "https://cdn.pixabay.com/photo/2014/04/03/10/07/converse-309846_960_720.png",
    ]);
    return () => {
      setProducts([]);
    };
  }, []);

  return (
    <Carousel pause="hover" className="bg-dark">
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <Image
            src={product.image}
            alt={product.name}
            fluid
            style={{ height: "450px", width: "100%" }}
          />
          <Carousel.Caption className="carousel-caption"></Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Corosul;

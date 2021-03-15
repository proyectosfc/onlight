import React from "react";

const ItemDetailContainer = () => {
  const sigleProduct = [
    {
      id: 100001,
      title: "Led 10w",
      description: "Luz led bajo consumo",
      price: "50.000",
      pictureUrl:
        "https://www.miamishop.com.uy/imgs/productos/productos31_158989.jpg",
    },
  ];

  const [product, setProduct] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setTimeout(() => {
          setProduct(sigleProduct);
        }, 2000);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div>
      <h2>Desde ItemDetailContainer</h2>
    </div>
  );
};

export default ItemDetailContainer;

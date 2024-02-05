import Loader from "../components/Loader";
import Card from "../components/Card";
// 1) bir context yapısına abone olmamızı sağlar.
import { useContext } from "react";
// 2) abone olmak istediğimiz context'i çağıracağız.
import { ProductContext } from "../context/ProductContext";

const HomePage = () => {
  // context yapısında tutulan bir veriye projedeki bileşnler içerisinden erişmek istiyorsak bileşenden ilgili context yapısına abone oluruz.
  const { products, category } = useContext(ProductContext);
  return (
    <div className="container">
      <h2 className="my-4">{category && category}</h2>
      <div className="d-flex flex-wrap justify-content-center justify-content-md-between gap-3 gap-md-4 my-5">
        {/* ürünler yoksa(ünlem yoksa anlamına gelir) yükleniyor göster */}
        {!products && <Loader />}

        {/* ürünler varsa (soru işareti varsa anlamına gelir) her biri için kart bas */}
        {products?.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;

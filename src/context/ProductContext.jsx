import { createContext, useState, useEffect } from "react";
import axios from "axios";

/*
 * CONTEXT API
 * Uygulamada birden çok bileşenin ihtiyacı olan verileri bileşenlerden bağımsız bir şekilde konumlanan merkezlerde yönetmeye yarar.
 
 * Context yapısı içerisinde verilerin state'ini ve verileri değiştirmeye yarayan fonksiyonlar tutulabilir
 
 * Context, tuttuğumuz değişkenleri bileşenlere doğrudan aktarım yapabilen merkezi yönetim aracıdır.
 */

//! Context yapısının temelini oluşturma
export const ProductContext = createContext();

//! Sağlayıcı ve onun tuttuğu verileri tanımla
export function ProductProvider({ children }) {
  const [products, setProducts] = useState(null);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    // önceki ürünleri kaldırm  yükleniyoru tetikler
    setProducts(null);
    // hangi url'e istek atacağını belirle
    const url =
      category === "all"
        ? "https://fakestoreapi.com/products"
        : `https://fakestoreapi.com/products/category/${category}`;

    // api isteği at
    axios
      .get(url)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, [category]);

  //   context yapısında tuttuğumuz verileri bileşenlere sağlayacağız
  //   value olarak eklenen veriler bütün projedeki bütün bileşnler tarafından erişilebilir olur.
  return (
    <ProductContext.Provider value={{ products, category, setCategory }}>
      {children}
    </ProductContext.Provider>
  );
}

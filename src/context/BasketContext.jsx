import { useState } from "react";
import { createContext } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { toast } from "react-toastify";

// 1) context yapısı tanımla
export const BasketContext = createContext();

// 2) context'te tutulan verileri uygulamaya aktaracak bir sağlayıcı bileşeni tanımla
export function BasketProvider({ children }) {
  const [basket, setBasket] = useLocalStorage("basket", []);

  //   sepete ürün ekler
  const addToBasket = (newProduct) => {
    // 1) bu üründen sepette var mı kontrol et
    const found = basket.find((i) => i.id === newProduct.id);

    if (found) {
      // 2) ürün sepette varsa > adeti 1 artttır
      // a) bulunan ürünün miktarını 1 arttır
      const updated = { ...found, amount: found.amount + 1 };

      // b) sepet dizisindeki eski ürünün yerine güncel halini koy
      const newBasket = basket.map((item) =>
        item.id === updated.id ? updated : item
      );

      // c) state'i güncelle
      setBasket(newBasket);

      toast.info(`Product quantity increased (${updated.amount})`);
    } else {
      // 3) ürün sepette yksa > ürünü sepete ekle (miktarı 1'e eşitle)
      setBasket([...basket, { ...newProduct, amount: 1 }]);

      toast.success("Product added to cart");
    }
  };

  // ürünü sepetten kaldır
  const removeFromBasket = (delete_id) => {
    // sepetteki ürünü bul
    const found = basket.find((i) => i.id === delete_id);

    if (found.amount > 1) {
      // miktarı 1 den fazlaysa > miktarı 1 eksilt
      const updated = { ...found, amount: found.amount - 1 };

      const newBasket = basket.map((i) => (i.id === updated.id ? updated : i));

      setBasket(newBasket);

      toast.info(`Product quantity reduced (${updated.amount})`);
    } else {
      // eğer ki miktarı 1'e eşitte > ürünü diziden kaldır
      const filtred = basket.filter((i) => i.id !== delete_id);

      setBasket(filtred);

      toast.error("Product removed from cart");
    }
  };
  return (
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket }}>
      {children}
    </BasketContext.Provider>
  );
}

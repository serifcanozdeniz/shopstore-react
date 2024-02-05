import { useState } from "react";
import Modal from "./components/Modal";

const Hoc = () => {
  const [isOpen, setIsOpen] = useState(null);

  const close = () => {
    setIsOpen(null);
  };
  return (
    <div className="d-flex flex-column gap-5">
      <h1>AnaSayfa</h1>

      <h1>Kategoriler</h1>

      <a href="">Elektronik</a>
      <a href="">Giyim</a>
      <a href="">Teknoloji</a>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
        voluptatum ullam? Magnam repudiandae, voluptate obcaecati ea, non quas
        sit explicabo quae magni numquam deserunt perferendis, exercitationem
        quia? Sequi, molestiae id necessitatibus voluptatem quibusdam quae rem
        ea, et architecto illum voluptate tenetur ipsum nostrum cumque
        consequuntur, ex maiores quam. Eaque, porro.
      </p>

      <button onClick={() => setIsOpen("login")} className="btn btn-success">
        Giriş Yap
      </button>
      <button onClick={() => setIsOpen("mode")} className="btn btn-dark">
        Koyu Mod
      </button>
      <button onClick={() => setIsOpen("warn")} className="btn btn-warning">
        Uyarı
      </button>

      {/* HOC bileşen kullanımı */}
      {isOpen === "login" ? (
        <Modal close={close}>
          <form>
            <input type="text" />
            <input type="text" />
          </form>
        </Modal>
      ) : isOpen === "warn" ? (
        <Modal close={close}>
          <h3>Silmek istediğinize emin misiniz?</h3>
        </Modal>
      ) : isOpen === "mode" ? (
        <Modal close={close}>
          <label>Koyu Mod</label>
          <input type="checkbox" />
        </Modal>
      ) : (
        ""
      )}

      {/* normal bileşen kullanımı */}
      {/* <Modal /> */}
    </div>
  );
};

export default Hoc;

import "./ModalWithForm.css";

function ModalWithForm() {
  return (
    <div className="modal">
      <div className="modal__content">
      <h2 className="modal__title">New Garment</h2>
        <button className="modal__close"></button>
        <form action="" className="modal__form">
          <label htmlFor="name" className="modal__label">
            Name{" "}
            <input
              type="text"
              className="modal__input"
              id="name"
              placeholder="Name"
            />
          </label>
          <label htmlFor="imageUrl" className="modal__label">
            Link{" "}
            <input
              type="url"
              className="modal__input"
              id="imageUrl"
              placeholder="Image Url"
            />
          </label>
          <fieldset className="modal__radio-buttons">
            <legend className="modal__legend">Select the weather type:</legend>
            <label
              htmlFor="hot"
              className="modal__label_type_radio"
            >
              <input id="hot" type="radio" className="modal__input-radio" /> Hot
            </label>
            <label
              htmlFor="warm"
              className="modal__label_type_radio"
            >
              <input id="warm" type="radio" className="modal__input-radio" />{" "}
              Warm
            </label>
            <label
              htmlFor="cold"
              className="modal__label_type_radio"
            >
              <input id="cold" type="radio" className="modal__input-radio" />{" "}
              Cold
            </label>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;

import { useEffect, useState } from "react";

import "./App.css";
import { coordinates, APIkey } from "../../utils/constants.js";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer.jsx";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import { getWeather, filterWeatherData } from "../../utils/weatherApi.js";

function App() {
  const [weatherData, setWeatherData] = useState({ 
    type: "", 
    temp: { F: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState ("");
  const [selectedCard, setSelectedCard] = useState({});

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
    .then((data) => {
       const filteredData = filterWeatherData(data);
       setWeatherData(filteredData);
    }).catch(console.error);
  }, []) ;

  return (
    <div className="page">
      <div className="page__content">
        <Header handleAddClick={handleAddClick} weatherData={weatherData} />
        <Main weatherData={weatherData} handleCardClick={handleCardClick} />
        <Footer />
      </div>
      <ModalWithForm 
      title="New garment" 
      buttonText="Add garment" 
      isOpen={activeModal === "add-garment"}
      onClose={closeActiveModal}
      >
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
          <label htmlFor="hot" className="modal__label_type_radio">
            <input id="hot" type="radio" name="weatherType" className="modal__input-radio" /> Hot
          </label>
          <label htmlFor="warm" className="modal__label_type_radio">
            <input id="warm" type="radio" name="weatherType" className="modal__input-radio" /> Warm
          </label>
          <label htmlFor="cold" className="modal__label_type_radio">
            <input id="cold" type="radio" name="weatherType" className="modal__input-radio" /> Cold
          </label>
        </fieldset>
      </ModalWithForm>
      <ItemModal 
      activeModal={activeModal} 
      card={selectedCard} 
      onClose={closeActiveModal} 
      />
    </div>
  );
}

export default App;

import React from "react";
//import './App.css';
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(
    false
  );
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(
    false
  );
  
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }
  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
        
      />
      <Footer />
      <ImagePopup
        link={selectedCard.link}
        name={selectedCard.name}
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
      />
      <PopupWithForm
        name="profile-edit"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <fieldset
          className="popup__fieldset popup__fieldset_profile-edit"
          noValidate
        >
          {/*<label htmlFor="profile-name"></label>*/}
          <input
            id="profile-name"
            type="text"
            name="ProfileName"
            className="popup__input popup__input_assignment_author-name"
            required
            minLength="2"
            maxLength="40"
            placeholder="Имя"
          />
          <span
            id="profile-name-error"
            className="popup__input-error popup__input-error_author-name"
          ></span>
          {/*<label htmlFor="profile-job"></label>*/}
          <input
            id="profile-job"
            type="text"
            name="ProfileJob"
            className="popup__input popup__input_assignment_author-job"
            required
            minLength="2"
            maxLength="200"
            placeholder="Занятие"
          />
          <span
            id="profile-job-error"
            className="popup__input-error popup__input-error_author-job"
          ></span>
        </fieldset>
        <button
          type="submit"
          className="popup__submit popup__submit_profile-edit popup__submit_active"
          aria-label="save"
        >
          Сохранить
        </button>
      </PopupWithForm>

      <PopupWithForm
        name="profile-add"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <fieldset
          className="popup__fieldset popup__fieldset_profile-add"
          noValidate
        >
          {/*<label htmlFor="place-name"></label>*/}
          <input
            id="place-name"
            type="text"
            name="PlaceName"
            className="popup__input popup__input_assignment_place-name"
            placeholder="Название"
            minLength="2"
            maxLength="30"
            required
            noValidate
          />
          <span
            id="place-name-error"
            className="popup__input-error popup__input-error_place-name"
          ></span>
          {/*<label htmlFor="place-link"></label>*/}
          <input
            id="place-link"
            type="url"
            name="PlaceLink"
            className="popup__input popup__input_assignment_place-link"
            placeholder="Ссылка на картинку"
            required
            noValidate
          />
          <span
            id="place-link-error"
            className="popup__input-error popup__input-error_place-link"
          ></span>
        </fieldset>
        <button
          type="submit"
          className="popup__submit popup__create popup__submit_active"
          aria-label="create"
        >
          Создать
        </button>
      </PopupWithForm>

      <PopupWithForm name="profile-image-delete" title="Вы уверены?">
        <button type="submit" className="popup__submit popup__yes">
          Да
        </button>
      </PopupWithForm>

      <PopupWithForm
        name="profile-avatar-edit"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        {/*<lable htmlFor="avatar-profile"></lable>*/}
        <input
          id="avatar-profile"
          type="url"
          name="AvatarProfile"
          className="popup__input popup__input_assigment_avatar-edit"
          placeholder="Ссылка на аватар"
          required
          noValidate
        />
        <span
          id="avatar-profile-error"
          className="popup__input-error popup__input-error-avatar-edit"
        ></span>
        <button
          type="submit"
          className="popup__submit popup__submit_active popup__avatar-save"
        >
          Сохранить
        </button>
      </PopupWithForm>
    </div>
  );
}

export default App;


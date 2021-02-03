import React from "react";
import api from "../utils/api.js";
import Card from "./Card.js";

function Main(props) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);
  React.useEffect(() => {
    api
      .getUserInformation()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => console.log(err));
  }, []);
  React.useEffect(() => {
    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => console.log(err));
  }, []); 


  return (
    <main className="content">
      <section className="profile">
        <div
          className="profile__avatar"
          style={{ backgroundImage: `url(${userAvatar})` }}
        >
          <button
            onClick={props.onEditAvatar}
            type="button"
            className="profile__avatar-overlay"
          ></button>
        </div>
        <div className="profile__info">
          <div className="profile__title">
            <h1 className="profile__name">{userName}</h1>
            <button
              onClick={props.onEditProfile}
              type="button"
              className="profile__button-edit"
              aria-label="edit"
            ></button>
          </div>
          <p className="profile__job">{userDescription}</p>
        </div>
        <button
          onClick={props.onAddPlace}
          type="button"
          className="profile__button-add"
          aria-label="add"
        ></button>
      </section>
      <section className="elements">
        <ul className="elements__list">
          {cards.map((item) => (
            <Card key={item._id} {...item} onCardClick={props.onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
/*  React.useEffect(() => {
    api
      .getInitialCards()
      .then((res) => {
        const cards = res.map((card) => {
          return {
            name: card.name,
            link: card.link,
            likes: card.likes.length,
            _id: card._id,
          };
        });
        setCards(cards);
      })
      .catch((err) => console.log(err));
  }, []); */
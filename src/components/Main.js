import React, { useState } from 'react';
import api from '../utils/Api.js';
import Card from './Card.js';

function Main(props) {

    const [userName, setUserName] = useState("");
    const [userDescription, setUserDescription] = useState("");
    const [userAvatar, setUserAvatar] = useState("");
    const [cards, setCards] = useState([]);

    React.useEffect(() => {
        api.getUserInformation()
        .then(data => {
            setUserName(data.name);
            setUserDescription(data.about);
            setUserAvatar(data.avatar);
        })
        .catch(err => { 
            console.error(err);
        });
    }, []);

    React.useEffect(() => {
        api.getInitialCards()
        .then(cardsList => { 
            setCards(cardsList.map(item => {
                return(<Card onCardClick={props.onCardClick} key={item._id} card={item}/>);
            })
            );
        })
        .catch(err => {
            console.error(err);
        });
    }, []);
            
    return(
        <main>
            <section className="profile">
                <div className="profile__avatar-overlay" onClick={props.onEditAvatar}>
                    <div className="profile__change-avatar-icon"></div>
                </div> 
                <img className="profile__avatar" src={userAvatar} alt="аватар пользователя"/>
                <div className="profile__intro">
                    <h1 className="profile__name">{userName}</h1>
                    <button 
                    className="profile__edit" 
                    type="button" 
                    aria-label="Редактировать профиль"
                    onClick={props.onEditProfile}>
                    </button>
                    <p className="profile__description">{userDescription}</p>
                </div>
                <button 
                className="profile__add-element" 
                type="button" 
                aria-label="Добавить карточку"
                onClick = {props.onAddPlace}>
                </button>
            </section>

            <section className="cards">
                {cards}
            </section>
        </main>
    );
}

export default Main;
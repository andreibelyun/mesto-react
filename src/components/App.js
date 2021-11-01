import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import React from 'react';
import ImagePopup from './ImagePopup';

function App() {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({});

    const handleEditAvatarClick = () => {
        setIsEditAvatarPopupOpen(true);
    };

    const handleEditProfileClick = () => {
        setIsEditProfilePopupOpen(true);
    };

    const handleAddPlaceClick = () => {
        setIsAddPlacePopupOpen(true);
    };

    const closeAllPopups = () => {
        setIsEditProfilePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setSelectedCard({});
    };

    const handleCardClick = (card) => {
        setSelectedCard(card);
    };
    
    return (
            <div className="page__container">
                <Header />
                <Main 
                onEditAvatar = {handleEditAvatarClick}
                onEditProfile = {handleEditProfileClick}
                onAddPlace = {handleAddPlaceClick}
                onCardClick = {handleCardClick}
                />
                <Footer />

                <PopupWithForm title="Редактировать профиль" name="edit-profile" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} >
                    <>
                        <div className="popup__section">
                            <input id="name-input" name="name" className="popup__input popup__input_type_name" type="text" placeholder="Имя" required minLength="2" maxLength="40" />
                            <span className="popup__input-error name-input-error"></span>
                        </div>

                        <div className="popup__section">
                            <input id="description-input" name="about" className="popup__input popup__input_type_description" type="text" placeholder="Описание" required minLength="2" maxLength="200" />
                            <span className="popup__input-error description-input-error"></span>
                        </div>
                    </>
                </PopupWithForm>

                <PopupWithForm 
                title="Новое место" 
                name="create-place" 
                isOpen={isAddPlacePopupOpen} 
                onClose={closeAllPopups} >
                    <>
                        <div className="popup__section">
                            <input id="place-name-input" name="name" className="popup__input popup__input_type_name" type="text" placeholder="Название" required minLength="2" maxLength="30" />
                            <span className="popup__input-error place-name-input-error"></span>
                        </div>

                        <div className="popup__section">
                            <input id="link-input" name="link" className="popup__input popup__input_type_description" type="url" placeholder="Ссылка на картинку" required />
                            <span className="popup__input-error link-input-error"></span>
                        </div>
                    </>
                </PopupWithForm>

                <PopupWithForm 
                title="Обновить аватар" 
                name="change-avatar" 
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups} >
                    <>
                        <div className="popup__section">
                            <input id="avatar-link-input" name="link" className="popup__input popup__input_type_description" type="url" placeholder="Ссылка на картинку" required />
                            <span className="popup__input-error avatar-link-input-error"></span>
                        </div>
                    </>
                </PopupWithForm>

                <PopupWithForm 
                title="Вы уверены?"
                name="delete-confirm"
                isOpen={false} />

                <ImagePopup card={selectedCard} onClose={closeAllPopups}/>

            </div>
    );
}

export default App;
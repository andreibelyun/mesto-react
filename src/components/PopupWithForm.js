function PopupWithForm(props) {

    return(
        <div className={`popup popup_type_${props.name} ${props.isOpen && 'popup_opened'}`}>
            <div className="popup__container">
                <button className="popup__close"type="button" aria-label="Закрыть окно" onClick={props.onClose}></button>
                <h2 className="popup__title">{props.title}</h2>
                <form className="popup__form" name={props.name} noValidate autoComplete="off">
                    <div>{props.children}</div>
                    <button className="popup__save" type="submit">Создать</button>
                </form>
            </div>
        </div>
    );
}

export default PopupWithForm;
// Считаю, было бы хорошим опытом поработать не только с функциональными компонентами.
// Кто знает какие проекты придётся поддерживать в реальной работе.
// А state, думаю, здесь в скором времени появится.
import React from "react";

class Card extends React.Component {

    handleClick = () => {
        this.props.onCardClick(this.props.card);
    }

    render() {
        return (
            <article className="card">
                <img className="card__photo" src={this.props.card.link} alt={this.props.card.name} onClick={this.handleClick}/>
                <button className="card__remove" type="button" aria-label="Удалить карточку"></button>
                <div className="card__info">
                    <h2 className="card__title">{this.props.card.name}</h2>
                    <div className="card__like-group">
                        <button className="card__like" type="button" aria-label="Поставить лайк"></button>
                        <p className="card__likes-count">{this.props.card.likes.length}</p>
                    </div>
                </div> 
            </article>
        );
    }
}

export default Card;
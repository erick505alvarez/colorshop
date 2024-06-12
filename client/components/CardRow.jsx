import React from 'react';
import Card from './Card.jsx';

const CardRow = ({ elementList }) => {

    const cards = []
    elementList.forEach((elm) => {
        cards.push(
            <Card elm={elm}/>
        )
    })

    return <div class='card-row'>
        {cards}
    </div>
}


export default CardRow;
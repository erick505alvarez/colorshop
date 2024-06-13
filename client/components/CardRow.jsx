import React from 'react';
import Card from './Card.jsx';

const CardRow = ({ elementList }) => {

    const cards = []
    elementList.forEach((elm) => {
        cards.push(
            <Card key={crypto.randomUUID()} elm={elm}/>
        )
    })

    return <div className='card-row'>
        {cards}
    </div>
}


export default CardRow;
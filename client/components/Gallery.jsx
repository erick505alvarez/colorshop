import React from 'react';
import { useSelector } from 'react-redux';

import CardRow from './CardRow.jsx';

const Gallery = () => {

    const documents = useSelector((state) => state.documents)

    let element;
    let ROW_LENGTH = 3;
    const elementList = [];
    const cardRows = [];
    console.log('Gallery documents:', documents)

    // iterate over elements to organize into rows
    for (let i = 0; i < documents.length; i++) {
        element = documents[i];
        elementList.push(element);  // add elmeent to elementList
        if (elementList.length === ROW_LENGTH) {
            // create new CardsRow with current list of elements
            cardRows.push(
                <CardRow elementList={elementList}/>
            )
            elementList = [];  // reset elementsList
        }
    }
    if (elementList.length) {
        // create new CardsRow with current elementsList
        cardRows.push(
            <CardRow elementList={elementList}/>
        );
        elementList = [];  // reset elementsList
    }

    return (
        <main className='gallery'>
            {cardRows}
        </main>
    )
}

export default Gallery;
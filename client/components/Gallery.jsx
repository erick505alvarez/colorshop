import React from 'react';
import { useSelector } from 'react-redux';


// import CardRow from './CardRow.jsx';
import Card from './Card.jsx';

const Gallery = () => {

    const docs = useSelector((state) => state.documents.docs)

    // let element;
    // let ROW_LENGTH = 3;
    // let elementList = [];
    // const cardRows = [];
    // console.log('Gallery documents:', docs)

    // // iterate over elements to organize into rows
    // for (let i = 0; i < docs.length; i++) {
    //     element = docs[i];
    //     elementList.push(element);  // add elmeent to elementList
    //     if (elementList.length === ROW_LENGTH) {
    //         // create new CardsRow with current list of elements
    //         cardRows.push(
    //             <CardRow key={crypto.randomUUID()} elementList={elementList}/>
    //         )
    //         elementList = [];  // reset elementsList
    //     }
    // }
    // if (elementList.length) {
    //     // create new CardsRow with current elementsList
    //     cardRows.push(
    //         <CardRow key={crypto.randomUUID()} elementList={elementList}/>
    //     );
    //     elementList = [];  // reset elementsList
    // }
    // console.log('docs:', docs)
    const cards = docs.map((elm) => {
        // console.log('card:', elm);
        return <Card key={crypto.randomUUID()} elm={elm} />
    });

    return (
        // <div className="gallery-container">
            <main className='gallery'>
                {cards}
            </main>
        // </div>
    )
}

export default Gallery;
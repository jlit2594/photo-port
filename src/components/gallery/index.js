import React from 'react';
import PhotoList from '../gallery/PhotoList';

function Gallery({ currentCategory }) {
    const { title, description } = currentCategory;

    return(
        <section>
            <h1 data-testid="h1tag">{title}</h1>
            <p>{description}</p>
            <PhotoList category={currentCategory.title}/>
        </section>
    );
}

export default Gallery;
import React, { useState } from 'react';
import photo from '../../assets/small/commercial/0.jpg';

const PhotoList = (props) => {
    const [photos] = useState([
        {
          title: 'Grocery aisle',
          category: 'commercial',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          title: 'Grocery booth',
          category: 'commercial',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          title: 'Building exterior',
          category: 'commercial',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          title: 'Restaurant table',
          category: 'commercial',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          title: 'Cafe interior',
          category: 'commercial',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          title: 'Cat green eyes',
          category: 'portraits',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          title: 'Green parrot',
          category: 'portraits',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          title: 'Yellow macaw',
          category: 'portraits',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          title: 'Pug smile',
          category: 'portraits',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          title: 'Pancakes',
          category: 'food',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          title: 'Burrito',
          category: 'food',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          title: 'Scallop pasta',
          category: 'food',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          title: 'Burger',
          category: 'food',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          title: 'Fruit bowl',
          category: 'food',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          title: 'Green river',
          category: 'landscape',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          title: 'Docks',
          category: 'landscape',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          title: 'Panoramic village by sea',
          category: 'landscape',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          title: 'Domestic landscape',
          category: 'landscape',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          title: 'Park bench',
          category: 'landscape',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
      ]);

      const currentPhotos = photos.filter((photo) => photo.category === category);

    return (
        <div>
            <div className='flex-row'>
                {currentPhotos.map((image, i) => (
                    <img
                        src={require(`../../assets/small/${category}/${i}.jpg`).default}
                        alt={image.name}
                        className="img-thumbnail mx-1"
                        key={image.name}
                    />
                ))}
            </div>
        </div>
    )
}

export default PhotoList;
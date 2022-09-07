import React from 'react';

function Nav() {
    const categories = [
        {
            title: "commercial",
            description: "Photos of grocery stores, food trucks, and other commercial properties"
        },
        {
            title: 'portraits',
            description: 'Portraits of people in my life'
        },
        {
            title: 'food',
            description: 'Delicious'
        },
        {
            title: 'landscape',
            description: 'Fields, farmhouses, waterfalls, and the beauty of nature'
        }
    ];

    function categorySelected() {
        console.log(`clicked`)
    }

    return (
        <header>
            <h2>
                <a href="/">
                    <span role="img" aria-label="camera"></span> Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className='flex-row'>
                    <li className='mx-2'>
                        <a href='#about'>About me</a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    {categories.map((category) => (
                        <li className="mx-1"
                        key={category.title}
                        >
                            <span onClick={() => categorySelected(category.title)}>
                                {category.title}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Nav;
import React, { useEffect } from 'react';

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
    } = props;

    useEffect(() => {
        document.title = currentCategory.title;
    }, [currentCategory]);

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
                        <li className={`mx-1 ${
                            currentCategory.title === category.title && 'navActive'
                        }`} key={category.title}>
                            <span
                                onClick={() => {
                                    setCurrentCategory(category)
                                }}
                            >
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
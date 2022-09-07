import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Gallery from '..';

const portrait = {title: 'portraits', description: 'people'};

afterEach(cleanup);

describe('Gallery is rendering', () => {
    it('renders', () => {
        render(<Gallery currentCategory={portrait} />)
    })
})
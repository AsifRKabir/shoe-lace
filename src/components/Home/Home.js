import React from 'react';
import Shoe from '../Shoe/Shoe';
import './Home.css';

const Home = () => {
    return (
        <div className="home bg-dark text-light">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-5">
                    <Shoe></Shoe>
                    <Shoe></Shoe>
                    <Shoe></Shoe>
                    <Shoe></Shoe>
                    <Shoe></Shoe>
                    <Shoe></Shoe>
                    <Shoe></Shoe>
                    <Shoe></Shoe>
                </div>
            </div>
        </div>
    );
};

export default Home;
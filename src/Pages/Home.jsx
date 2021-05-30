import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div>
            <h1>Welcome HOME !</h1>
            <Link exact to="/beers">
                All Beers
            </Link>
            <br></br>
            <Link exact to="/random-beer">
                Random Beer
            </Link>
            <br></br>
            <Link exact to="/new-beer">
                Create a Beer
            </Link>
        </div>
    )
}

export default Home;

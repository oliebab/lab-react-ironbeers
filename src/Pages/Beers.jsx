import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

class Beers extends Component {

    state = {
        beers: [],  
    }

    componentDidMount() {
        axios
          .get("https://ih-beers-api2.herokuapp.com/beers")
          .then((res) => {
            console.log(res.data);
            this.setState({
                beers: res.data,
              });
          })
          .catch((error) => {
            console.log(error);
          });
      }

    //   handleAddBeer = (beer) => {
    //     const newBeers = [beer, ...this.state.beers];
    
    //     this.setState({
    //       beers: newBeers,
    //     });
    //   };
    

    render() {
        return (
            <div>
                <h1>All Beers !!</h1>
                <div>
                    {this.state.beers.map((beer) => {
                        return <div>
                            <Link to={`/beers/${beer._id}`}>{beer.name}</Link>
                            {/* <img src={`${beer.image_url}`} alt="beer-pic" ></img> */}
                            <p>{beer.tagline}</p>
                            <p>Created by : {beer.contributed_by}</p>
                            <hr></hr>
                            </div>
                    })}
                </div>
            </div>
        )
    }
}

export default Beers;
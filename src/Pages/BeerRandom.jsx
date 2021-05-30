import React, { Component } from 'react';
import axios from 'axios';

export default class RandomBeer extends Component {
  state = {
    beer: null,
  };

  componentDidMount() {

    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
          console.log(response)
        this.setState({
          beer: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {

    if (!this.state.beer) {
        return <div>Error</div>;
      }

    return (
      <div>
        {/* <pre>{JSON.stringify(props, null, 4)}</pre> */}
        <h1>Beer details !</h1>
        <h3>Beer name : {this.state.beer && this.state.beer.name}</h3>
        {this.state.beer && (
          <img src={this.state.beer.image_url} alt={this.state.beer.name} />
        )}
        <p>{this.state.beer && this.state.beer.tagline}</p>
        <p>First brewed in {this.state.beer && this.state.beer.first_brewed}</p>
        <p>Attenuation level : {this.state.beer && this.state.beer.attenuation_level}</p>
        <p>Description : {this.state.beer && this.state.beer.description}</p>
        <p>Contributed by : {this.state.beer && this.state.beer.contributed_by}</p>
      </div>
    );
  }
}

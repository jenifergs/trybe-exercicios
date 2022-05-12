import Pokemons from './data';
import React from 'react';

class Card extends React.Component {
render() {
    const { name, type, averageWeight } = Pokemons;
    return (
        <div>
            <h6>{name}</h6>
            <p>{type}</p>
            <p>{averageWeight.value}</p>
        </div>
    )
}
}

export default Card;
import Card from './Card';
import React from 'react';
import './App.css';
import Pokemons from './data';



class App extends React.Component{
  render(){
    return (
      <div className='cards'>
        {
          Pokemons.map((pokemon) => (
            <Card 
            name={pokemon.name}
            type={pokemon.type}
            averageWeight={pokemon.averageWeight.value}
            image={pokemon.image}
            />
          )
          )
        }
      </div>
    )
  }
}

export default App;

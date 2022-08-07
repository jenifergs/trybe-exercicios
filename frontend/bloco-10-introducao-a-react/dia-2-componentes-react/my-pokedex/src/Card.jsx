import React from 'react';
import PropTypes from 'prop-types'


class Card extends React.Component {
render() {
    const { name, type, averageWeight, image } = this.props;
    return (
        <div className='card'>
            <h6>{name}</h6>
            <p>{type}</p>
            <p>{averageWeight}</p>
            <img src={image} alt={`Pokemom: ${name}`} />
        </div>
    )
}
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default Card;
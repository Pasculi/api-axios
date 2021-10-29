import React from 'react'

const Pokemons = ({ id, name, image, type }) => {
    const styles = `card-container ${type}`
    return (
        <div className={styles}>
            <div className="number">
            <small>#{id}</small>
                <img src={image} alt={name} />
                <div className="detail-wrapper">
                    <h3>{name}</h3>
                    <p>Tipo: {type}</p>
                </div>
            </div>
        </div>
    )
}

export default Pokemons

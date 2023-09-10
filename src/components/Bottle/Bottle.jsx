import './Bottle.css'
import PropTypes from 'prop-types' 
const Bottle = ({bottle , handleAddToCart}) => {
    const {name , img , price} =bottle;
    return (
        <div className="bottle">
            <h3>Bottle : {name}</h3>
            <img src={img} alt="" />
            <p>Pirce: {price}$</p>
            <button onClick={() => handleAddToCart(bottle)}>Purchase</button>
        </div>
    );
};

Bottle.PropTypes = {
    bottle: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired
}

export default Bottle;
import React, {useContext, useState} from "react"
import { Context } from "../Context"
import PropTypes from "prop-types"

function Image({className, img}) {
    const [hovered, setHovered] = useState(false)

    const {toggleFav, addToCart, cartItems,removeFromCart} = useContext(Context)
    
    function heartIcon() {
        if(img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFav(img.id)}></i> 
        } else if(hovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFav(img.id)}></i>
        }
    }

    function cartIcon() {
        const alreadyInCart = cartItems.some(item => item.id === img.id)
        if(alreadyInCart) {
            return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img.id)}></i>
        } else if(hovered) {
            return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
        }
    }
    
    return (
        <div 
            className={`${className} image-container`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img src={img.url} className="image-grid"/>
            {heartIcon()}
            {cartIcon()}
        </div>
    )
}

Image.propTypes = {
    class: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image
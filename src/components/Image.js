import {useState, useContext} from 'react'
import {Context} from '../Context'
import PropTypes from 'prop-types'
import useHover from '../hooks/useHover'

function Image({className, photo}) {
    // const [isHovered, setIsHovered] = useState(false)
    const[isHovered, hoveredRef] = useHover()
    const {toggleFavorite, addToCart, cartItems, removeFromCart} = useContext(Context)
    
    const heartIcon = () => {
        if (photo.isFavorite) {
            return <i className="ri-heart-fill favorite"
                      onClick={() => toggleFavorite(photo.id)}></i>
        } else if (isHovered && !photo.isFavorite) {
            return <i  className="ri-heart-line favorite"
                       onClick={() => toggleFavorite(photo.id)}></i>
        } 
    }

    const cartIcon = () => {
        const alreadyInCart = cartItems.some(item => item.id === photo.id)
        if(alreadyInCart) {
            return  <i className="ri-add-circle-fill cart"
                        onClick={() => removeFromCart(photo.id)}></i>
        } else if(isHovered) {
            return <i className="ri-add-circle-line cart"
               onClick={() => addToCart(photo)}></i>
        } 
    }

    return (
        <div ref={hoveredRef}
            className={`${className} image-container`}
        >
            <img 
              src={photo.url} alt='' 
              className="image-grid"
              />
            {heartIcon()}
            {cartIcon()}
            
        </div>

    )
}
Image.propTypes = {
    className: PropTypes.string,
    photo: PropTypes.shape({
        url: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool,
    }),
}

export default Image
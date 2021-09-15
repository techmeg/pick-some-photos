import {useContext} from 'react'
import {Context} from '../Context'
import PropTypes from 'prop-types'
import useHover from '../hooks/useHover'

function CartItem ({item}) {
    const {removeFromCart} = useContext(Context)
    // const [isHovered, setIsHovered] = useState(false) // replaced by useHover hook
    const[isHovered, hoveredRef] = useHover()

    const iconClass = isHovered ? "fill" : "line"
    return (
        <div className="cart-item">
            <i className={`ri-delete-bin-${iconClass}`}
                ref={hoveredRef}
                onClick={() => removeFromCart(item.id)}></i>
            <img src={item.url} alt=""  width="130px"/>
            <p>$5.99</p>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CartItem
import {Link} from 'react-router-dom'
import {Context} from '../Context'
import {useContext} from 'react'

function Header() {

    const {cartItems} = useContext(Context)
    const cartClass = (cartItems.length > 0) ? 'fill' : 'line'

    return (
        <header>
            <Link to="/">
                <div className="logo">Pic Some</div>
            </Link>
            <Link to="/cart">
                <i className={`ri-shopping-cart-${cartClass} ri-fw ri-2x`}></i>
            </Link>
        </header>
    )
}

export default Header
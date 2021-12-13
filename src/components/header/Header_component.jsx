import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import { auth } from '../firebase/firebase_untils'
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/Cart_selector';
import { selectCurrentUser } from '../../redux/userReducer/user_selector';

import CartIcon from '../cart_icon/Cart-icon_component';
import CartDropdown from '../cart-drop_down/Cart-drop-down_component';
import { ReactComponent as Logo } from '../../assets/crown.svg'
import './Header_component-style.scss'


const HeaderComponent = ({ currentUser, hidden }) => {
    return (
        <div className="header">
            <Link className="logo-container" to='/'>
                <Logo className="logo" />
            </Link>
            <div className="options">

                <Link className="option" to='/shop'>
                    SHOP
                </Link>
                <Link className="option" to='/contact'>
                    CONTACT
                </Link>
                
                {
                    currentUser ?
                    <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className="option" to='/signin'>SIGN UP</Link>
                }
                <CartIcon />
            </div>
            {
                hidden ? null : <CartDropdown />
            }
            
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
})
export default connect(mapStateToProps)(HeaderComponent)

import { connect } from 'react-redux';
import CartItems from './Cart_items';
import { fetchCartItems, fetchCartItem, createCartItem, deleteCartItem, clearCart } from '../../actions/cart_items_actions';

const mapStateToProps = state => ({
    currentUser: state.session.id,
    currCartItems: state.entities.cartItems,
});


const mapDispatchToProps = dispatch => ({
    fetchCartItems: () => dispatch(fetchCartItems()),
    fetchCartItem: cartItemId => dispatch(fetchCartItem(cartItemId)),
    createCartItem: cartItem => dispatch(createCartItem(cartItem)),
    deleteCartItem: cartItemId => dispatch(deleteCartItem(cartItemId)),
    clearCart: () => dispatch(clearCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItems);
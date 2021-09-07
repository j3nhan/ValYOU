import { connect } from 'react-redux';
import CartItems from './Cart_items';
import { fetchCartItem, clearCart } from '../../actions/cart_items_actions';
import { deleteItem } from '../../actions/item_actions';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    cartItems: state.entities.cartItems,
    items: state.entities.cartItems.items
});


const mapDispatchToProps = dispatch => ({
    fetchCartItem: cartItemId => dispatch(fetchCartItem(cartItemId)),
    deleteItem: itemId => dispatch(deleteItem(itemId)),
    clearCart: () => dispatch(clearCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItems);
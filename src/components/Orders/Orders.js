import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products)
    // ekane parameter lagbe karon kuntake click kora hobe ta bujher jonno eta dite hoy
    const hanleRemoveProduct = product => {
        console.log(product)
        const rest = cart.filter(pd => pd.id !== product.id)
        setCart(rest)

    }
    return (
        <div className='shop-container'>
            <div className="review-items-container">
                {
                    cart.map(product => <ReviewItem key={product.id}
                        product={product}
                        hanleRemoveProduct={hanleRemoveProduct}>

                    </ReviewItem>)
                }

            </div>

            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to='/inventory'>
                        <button>proceed checkout</button>
                    </Link>

                </Cart>
            </div>


        </div>
    );
};

export default Orders;
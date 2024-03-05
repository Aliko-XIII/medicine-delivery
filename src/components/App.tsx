import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SetStateAction, useState } from 'react';
import NavigationBar from './NavigationBar/NavigationBar';
import Shop from './Shop/Shop';
import Cart from './Cart/Cart';

const App = ({ dataFetchers }) => {
    const [page, setPage] = useState('shop')
    const [cart, setCart] = useState([]);

    function handlePageChange(newPage: string) {
        setPage(newPage);
    };

    function addCartItem(newItem) {
        const itemIndex = cart.findIndex(item =>
            item.shop === newItem.shop && item.name === newItem.name);

        const newCart = [...cart];
        if (itemIndex === -1) {
            newCart.push(newItem)
        }
        else {
            if (newItem.caller == 'cart') {
                newCart[itemIndex].amount = newItem.amount;
            }
            else {
                newCart[itemIndex].amount++;
            }
        }
        setCart(newCart);
    }

    function clearEmptyItems() {
        setCart(cart.filter(item => item.amount != 0));

    }

    return (
        <div className='appWrapper'>
            <NavigationBar onPageChange={handlePageChange} clearEmptyItems={clearEmptyItems} current={page} />
            <div className='content'>
                {page == 'shop' && <Shop getShops={dataFetchers.getShops} getPrices={dataFetchers.getShopsPrices} addCartItem={addCartItem} />}
                {page == 'cart' && <Cart getPrices={dataFetchers.getShopsPrices} addCartItem={addCartItem} cart={cart} />}
            </div>
        </div>
    );
}


export default App;
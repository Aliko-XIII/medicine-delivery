import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SetStateAction, createContext, useState } from 'react';
import NavigationBar from './NavigationBar/NavigationBar';
import Shop from './Shop/Shop';
import Cart from './Cart/Cart';

export const ShopContext = createContext({
    page: '',
    cart: [],
    addCartItem: (item) => { },
    clearEmptyItems: () => { },
    
});

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
        <ShopContext.Provider value={{ cart: cart, page: page, addCartItem: addCartItem, clearEmptyItems: clearEmptyItems }}>
            <div className='appWrapper'>
                <NavigationBar onPageChange={handlePageChange} clearEmptyItems={clearEmptyItems} current={page} />
                <div className='content'>
                    {page == 'shop' && <Shop getShops={dataFetchers.getShops} getPrices={dataFetchers.getShopsPrices} />}
                    {page == 'cart' && <Cart getPrices={dataFetchers.getShopsPrices} />}
                </div>
            </div>
        </ShopContext.Provider >
    );
}


export default App;
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

    function handleCartChange(newCart) {
        setCart(newCart);
    }

    return (
        <div className='appWrapper'>
            <NavigationBar onPageChange={handlePageChange} />
            <div className='content'>
                {page == 'shop' && <Shop getShops={dataFetchers.getShops} getPrices={dataFetchers.getShopsPrices} handleCartChange={handleCartChange}/>}
                {page == 'cart' && <Cart getPrices={dataFetchers.getShopsPrices} handleCartChange={handleCartChange}/>}
            </div>
        </div>
    );
}


export default App;
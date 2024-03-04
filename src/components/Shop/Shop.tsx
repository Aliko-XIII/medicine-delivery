import { useEffect, useState } from "react";
import Medicines from "./Medicines/Medicines";
import ShopsNav from "./ShopsNav/ShopsNav";

const Shop = ({ getShops, getPrices, handleCartChange }) => {
    const [selectedShop, setSelectedShop] = useState('');
    function handleShopSelection(newShop: string) {
        setSelectedShop(newShop);
    }
    return <div className='shopWrapper'>
        <ShopsNav getShops={getShops} handleShopSelection={handleShopSelection} />
        <Medicines getPrices={getPrices} shop={selectedShop} />
    </div>
}
export default Shop;
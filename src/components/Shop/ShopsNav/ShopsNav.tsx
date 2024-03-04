import { useEffect, useState } from "react";
import ShopItem from "./ShopItem/ShopItem";

const ShopsNav = ({ getShops, handleShopSelection }) => {
    const [shops, setShops] = useState([]);
    useEffect(() => {
        getShops().then((data) => {
            setShops(data);
        });
    }, []);
    return (
        <div className='shopsNav'>
            <h2>Shops:</h2>
            <ul className='shopsList'>
                {shops.length > 0 ?
                    shops.map((shop) => <ShopItem name={shop.name} key={shop.name} handleShopSelection={handleShopSelection} />)
                    : 'Loading...'}
            </ul>
        </div>
    );
}
export default ShopsNav;
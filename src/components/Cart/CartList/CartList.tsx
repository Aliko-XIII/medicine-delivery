import { useContext } from "react";
import { ShopContext } from "../../App";
import CartItem from "./CartItem/CartItem";


const CartList = ({ }) => {
    const { cart } = useContext(ShopContext);

    const medicines = [...cart];
    let i = 0;
    return <div className="cartListWrapper">
        <ul className="cartList">
            {medicines.map((medicine) =>
                <CartItem name={medicine.name} shop={medicine.shop}
                    price={medicine.price} amount={medicine.amount} key={i++} />)}
        </ul>
    </div>
}

export default CartList;
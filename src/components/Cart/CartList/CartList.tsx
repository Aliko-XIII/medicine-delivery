import CartItem from "./CartItem/CartItem";


const CartList = ({ getPrices, cart, addCartItem }) => {
    const medicines = [...cart];
    let i = 0;
    return <div className="cartListWrapper">
        <ul className="cartList">
            {medicines.map((medicine) =>
                <CartItem name={medicine.name} shop={medicine.shop}
                    price={medicine.price} amount={medicine.amount}
                    addCartItem={addCartItem} key={i++} />)}
        </ul>
    </div>
}

export default CartList;
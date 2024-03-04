import CartItem from "./CartItem/CartItem";

const medicines = [
    { name: 'med1', },
    { name: 'med2', },
    { name: 'med3', },
    { name: 'med4', },
    { name: 'med5', },
    { name: 'med6', },
    { name: 'med2', },
    { name: 'med3', },
    { name: 'med4', },
    { name: 'med5', },
    { name: 'med6', },
]

const CartList = ({ getPrices }) => {
    return <div className="cartListWrapper">
        <ul className="cartList">
            {medicines.map((medicine) => <CartItem name={medicine.name} price={111} />)}
        </ul>
    </div>
}

export default CartList;
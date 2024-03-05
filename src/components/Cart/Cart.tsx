import { useState } from "react";
import BuyerInfo from "./BuyerInfo/BuyerInfo";
import CartList from "./CartList/CartList";
import ResultFooter from "./ResultFooter/ResultFooter";

const Cart = ({ getPrices, addCartItem, cart }) => {

    const [formData, setFormData] = useState({
        userName: '',
        email: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${formData.userName}`)
    }

    return (
        <form onSubmit={handleSubmit} className="cartForm">
            <BuyerInfo handleInputChange={handleInputChange} />
            <CartList getPrices={getPrices} cart={cart} addCartItem={addCartItem}/>
            <ResultFooter total={[...cart].reduce((total, item) => total + item.price * item.amount, 0)} />
        </form>
    );
}
export default Cart;
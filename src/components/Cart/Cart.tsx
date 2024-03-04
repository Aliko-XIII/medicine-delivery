import { useState } from "react";
import BuyerInfo from "./BuyerInfo/BuyerInfo";
import CartList from "./CartList/CartList";
import ResultFooter from "./ResultFooter/ResultFooter";

const Cart = ({ getPrices, handleCartChange }) => {

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
            <CartList getPrices={getPrices}/>
            <ResultFooter />
        </form>
    );
}
export default Cart;
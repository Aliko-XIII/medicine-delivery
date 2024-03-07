import { useContext, useState } from "react";
import BuyerInfo from "./BuyerInfo/BuyerInfo";
import CartList from "./CartList/CartList";
import ResultFooter from "./ResultFooter/ResultFooter";
import { ShopContext } from "../App";

const Cart = ({ getPrices, }) => {

    const { cart } = useContext(ShopContext);

    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        phone: '',
        address: '',
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
        if (cart.length == 0) {
            alert('Please, choose something to buy');
            return;
        }
        let cartResult = '\n';
        cart.forEach(item => {
            cartResult += `${item.name} from ${item.shop} for ${item.price}: ${item.amount};\n`
        });
        let total = [...cart].reduce((total, item) => total + item.price * item.amount, 0);
        alert(`
        Thanks, ${formData.userName}, for buying: ${cartResult}
        Your total is ${total}
        Check your info:
        email: ${formData.email}
        phone: ${formData.phone}
        Your purchase will be delivered to ${formData.address}`)
    }

    return (
        <form onSubmit={handleSubmit} className="cartForm">
            <BuyerInfo handleInputChange={handleInputChange} />
            <CartList />
            <ResultFooter total={[...cart].reduce((total, item) => total + item.price * item.amount, 0)} />
        </form>
    );
}
export default Cart;
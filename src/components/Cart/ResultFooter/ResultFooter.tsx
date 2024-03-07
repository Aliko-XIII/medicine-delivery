import { useContext } from "react";
import { ShopContext } from "../../App";

const ResultFooter = ({ total }) => {
    const { clearEmptyItems } = useContext(ShopContext);

    return <footer className="resultFooter">
        <div className="totalPrice">Total price: {total}</div>
        <button className="submitBtn"
            onClick={clearEmptyItems}
            type="submit" value={'Submit'}>Submit</button>
    </footer>;
}

export default ResultFooter;
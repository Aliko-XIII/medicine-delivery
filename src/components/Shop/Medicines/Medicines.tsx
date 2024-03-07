import { useContext, useEffect, useState } from "react";
import MedicineItem from "./MedicineItem/MedicineItem";

const Medicines = ({ getPrices, shop }) => {
    const [medicines, setMedicines] = useState([]);
    useEffect(() => {
        getPrices().then(data => {
            setMedicines(data);
            console.log(data);
        });
    }, []);
    let i = 0;
    let medicineElements = medicines
        .filter(data => data.shopname == shop)
        .map(data => <MedicineItem name={data.medicinename} shop={data.shopname} price={data.price} key={i++} />);
    return (
        <div className="medicinesGrid">
            {medicineElements.length > 0 ?
                medicineElements
                : <b>Choose some shop</b>}
        </div>)
}
export default Medicines;
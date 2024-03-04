const BuyerInfo = ({ handleInputChange }) => {
    return <div className="buyerInfo">
        <label htmlFor="userName">Name:</label><br />
        <input type="text" name="userName" id='userName' onChange={handleInputChange} required={true} /><br />

        <label htmlFor="email">Email:</label><br />
        <input type="email" name="email" id='email' onChange={handleInputChange} required={true} /><br />

        <label htmlFor="phone">Phone:</label><br />
        <input type="tel" name="phone" id='phone' onChange={handleInputChange} required={true} /><br />

        <label htmlFor="address">Address:</label><br />
        <input type="text" name="address" id='address' onChange={handleInputChange} required={true} /><br />
    </div>
}

export default BuyerInfo;
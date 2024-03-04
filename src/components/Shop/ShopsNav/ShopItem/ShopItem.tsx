const ShopItem = ({ name, handleShopSelection }) => {
    return (<li className='shopItem' onClick={() => { handleShopSelection(name) }}>
        <div className="shopItemContent">{name}</div>
    </li>);
}
export default ShopItem;
const ResultFooter = ({total}) => {
    return <footer className="resultFooter">
        <div className="totalPrice">Total price: {total}</div>
        <button className="submitBtn" type="submit" value={'Submit'}>Submit</button>
    </footer>;
}

export default ResultFooter;
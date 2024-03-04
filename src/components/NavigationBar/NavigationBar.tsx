import NavigationBtn from "./NavigationBtn/NavigationBtn";

const NavigationBar = (props) => {
    const handleClick = (page) => {
        props.onPageChange(page);
    };

    return (
        <div className='navigationBar'>
            <NavigationBtn handleClick={handleClick} page={'shop'} />
            <NavigationBtn handleClick={handleClick} page={'cart'} />
        </div>
    );
}

export default NavigationBar;
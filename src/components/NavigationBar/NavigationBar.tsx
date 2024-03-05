import NavigationBtn from "./NavigationBtn/NavigationBtn";

const NavigationBar = ({ onPageChange, current, clearEmptyItems }) => {

    const sitePages = ['shop', 'cart']

    const handleClick = (page) => {
        onPageChange(page);
    };

    return (
        <div className='navigationBar'>
            {sitePages.map(sitePage =>
                <NavigationBtn handleClick={handleClick} page={sitePage} isCurrent={current === sitePage} clearEmptyItems={clearEmptyItems} />
            )}
        </div>
    );
}

export default NavigationBar;
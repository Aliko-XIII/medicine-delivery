const NavigationBtn = ({ handleClick, page, isCurrent, clearEmptyItems }) => {
    let pageName: string = page;
    return <a className={'navigationBtn ' + (isCurrent ? 'current' : '')}
        onClick={() => {
            handleClick(pageName.toLowerCase());
            clearEmptyItems();
        }}>
        {pageName}
    </a>
}

export default NavigationBtn;
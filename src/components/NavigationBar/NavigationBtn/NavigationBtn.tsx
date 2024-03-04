const NavigationBtn = ({ handleClick, page }) => {
    let pageName: string = page;
    return <a className="navigationBtn" onClick={() => handleClick(pageName.toLowerCase())}>{pageName}</a>
}

export default NavigationBtn;
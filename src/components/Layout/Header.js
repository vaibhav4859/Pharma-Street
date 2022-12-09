import { Fragment } from "react";

import classes from './Header.module.css';
import headerImg from '../../assets/headerImg.jpg';
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>Pharma Street</h1>
            <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
            <img src={headerImg} alt=""></img>
        </div>
    </Fragment>
};

export default Header;
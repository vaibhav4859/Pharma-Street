import { Fragment } from "react";

import ItemsSummary from './ItemsSummary';
import AvailableItems from "./AvailableItems";


const Items = () => {
    return (
        <Fragment>
            <ItemsSummary />
            <AvailableItems />
        </Fragment>
    );
};

export default Items;
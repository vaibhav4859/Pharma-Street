
import { useEffect, useState } from 'react';
import { getItems } from '../../lib/api';
import Card from '../UI/Card';
import classes from './AvailableItems.module.css';
import ItemsList from './ItemsList/ItemsList';

const AvailableItems = props => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => { // this function of useEffect shouldn't be async as it return a cleanup function for an async task we shoud create a async function internally
        const fetchItems = async () => {
            let item = await getItems();
            if (!item) {
                throw new Error("Something went wrong!");
            }
            setItems(item);
            setIsLoading(false);
        }

        fetchItems().catch(error => {
            setIsLoading(false);
            setError(error.message);
        });
    }, []);

    if (isLoading) {
        return (
            <section className={classes.itemsLoading}>
                <p>Loading...</p>
            </section>
        )
    }

    if (error) {
        return (
            <section className={classes.itemsError}>
                <p>{error}</p>
            </section>
        )
    }

    const itemList = items.map(item => <ItemsList key={item.id} id={item.id} name={item.name} description={item.description} price={item.price} />)

    return (
        <section className={classes.items}>
            <Card>
                <ul>
                    {itemList}
                </ul>
            </Card>
        </section>
    );
};

export default AvailableItems;
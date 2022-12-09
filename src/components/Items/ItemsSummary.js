import classes from './ItemsSummary.module.css';

const ItemsSummary = () => {
    return (
        <section className={classes.summary}>
            <h2>Make sure you feel as good as you look.</h2>
            <p>
                Your one-stop healthcare shop. Exclusive discounts all year round. India Ki Pharmacy.
                Buy medicines online on Pharma Street and get flat 20% off on medicines.
            </p>
            <p>
                Use code MEDS20. PAN India Delivery.
                Flat 25% Off on 1st order. Discounts On All Orders. Anywhere India Delivery.
            </p>
        </section>
    );
};

export default ItemsSummary;
import { useRef } from 'react';
import Input from '../../UI/Input';
import classes from './ItemListForm.module.css';

const ItemListForm = props => {

  const amountInputRef = useRef();

  const submitHandler = event => {
    event.preventDefault();

    const eneteredAmount = amountInputRef.current.value;
    const eneteredAmountNumber = +eneteredAmount;
    if (eneteredAmount.trim().length === 0 || eneteredAmountNumber < 1 || eneteredAmountNumber > 5) {
      return;
    }

    props.onAddToCart(eneteredAmountNumber);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input label="Amount"
        ref={amountInputRef}
        input={{
          id: 'amount',
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1'
        }} />
      <button>+ Add</button>
    </form>
  );
};

export default ItemListForm;
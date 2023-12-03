/* eslint-disable react/prop-types */
// updateItemsQuantity.jsx
import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";
import PropTypes from 'prop-types';

function UpdateItemsQuantity({ id, currentQuantity }) {
    const dispatch = useDispatch();

    return (
        <div className="flex gap-1 items-center md:gap-2">
            <Button
                type="round"
                onClick={() => dispatch(decreaseItemQuantity({ id }))}
            >
                -
            </Button>
            <span className=" font-semibold text-sm">{currentQuantity}</span>
            <Button
                type="round"
                onClick={() => dispatch(increaseItemQuantity({ id }))}
            >
                +
            </Button>
        </div>
    );
}

UpdateItemsQuantity.propTypes ={
    id: PropTypes.number.isRequired
}

export default UpdateItemsQuantity;

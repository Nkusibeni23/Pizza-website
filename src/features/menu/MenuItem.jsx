/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem } from "../cart/cartSlice";

function MenuItem({ pizza }) {
  const dispatch = useDispatch()
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  function handleAddToCart() {
    const newItem = {
      id: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
  }; 

    dispatch(addItem(newItem));
  }

  return (
    <li className="flex gap-3 py-2">
      <img src={imageUrl} alt={name} className={`h-28 ${soldOut ? "opacity-70 grayscale" : ""}`} />
      <div className="flex flex-col grow pt-1">
        <p className=" font-medium">{name}</p>
        <p className="text-sm italic text-stone-500 capitalize">{ingredients.join(", ")}</p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p className="text-sm uppercase font-medium text-stone-500">Sold out</p>}

          {!soldOut && <Button type="small" onClick={handleAddToCart}>Add To cart</Button>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;

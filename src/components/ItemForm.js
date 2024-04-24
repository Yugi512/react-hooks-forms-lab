import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [itemCategory, setItemCategory] = useState("Produce")
  const [nameOfItem, setNameOfItem] = useState("")


  function handleSubmit(event){
    event.preventDefault()

    const newItem = {
      id: uuid(),
      name: nameOfItem,
      category: itemCategory,
    }
    return onItemFormSubmit(newItem)
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit} >
      <label>
        Name:
        <input type="text" name="name" onChange={(e) => setNameOfItem(e.target.value)} value={nameOfItem} />
      </label>

      <label>
        Category:
        <select  name="category" onChange={(e) => setItemCategory(e.target.value)} value={itemCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;

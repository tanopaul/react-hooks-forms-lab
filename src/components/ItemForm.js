import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  const [form, setForm] = useState({
    id: uuid(),
    name:'',
    category: 'Produce'
  })

  function handleForm(e) {
    let name = e.target.name;
    let value = e.target.value;

    setForm({
      ...form,
      [name]: value
    })
    
  }

function handleSubmit(e) {
  e.preventDefault();
  onItemFormSubmit(form);
  
}


  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" onChange={handleForm} name="name" value={form.name}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleForm}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;

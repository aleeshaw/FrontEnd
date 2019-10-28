import React, { useState } from 'react'
import { itemData } from './itemData';

const AddItemForm = props => {
	const initialFormState = { id: null, name: '', description: '', price:'', location:'',URL: 'https://images.unsplash.com/photo-1472141521881-95d0e87e2e39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80' }
	const [ item, setItem ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

    setItem({ ...item, [name]: value });
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!item.name || !item.description) return

				props.addItem(item)
        setItem(initialFormState)
        itemData.push(item);
        console.log(itemData);
			}}
		>
      <div>
      <label>Location</label>
        <select name="location" value={item.location} onChange={handleInputChange}>
          <option>Select A Location</option>
          <option value="Rwanda">Rwanda</option>
          <option value="Uganda">Uganda</option>
          <option value="Kenya">Kenya</option>
        </select>
      </div>
			<label>Item Name</label>
			<input type="text" name="name" value={item.name} onChange={handleInputChange} />
			<label>Description</label>
			<input type="text" name="description" value={item.description} onChange={handleInputChange} />
			<label>Price</label>
			<input type="text" name="price" value={item.price} onChange={handleInputChange} />
      <input className="img-hide" type="text" name="URL" value="https://images.unsplash.com/photo-1472141521881-95d0e87e2e39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80" />
      <button>Add new item</button>
		</form>
	)
}

export default AddItemForm
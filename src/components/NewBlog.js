import { React } from 'react'

const NewBlog = ({ handleCreate, newBlog, setNewBlog }) => {

	const handleChange = e => {
		const { name, value } = e.target
		setNewBlog({ ...newBlog, [name]: value })
	}

	return (
		<form onSubmit={handleCreate}>
			<div>
				<label>title:</label>
				<input type='text' name='title' onChange={handleChange}></input>
			</div>
			<div>
				<label>author:</label>
				<input type='text' name='author' onChange={handleChange}></input>
			</div>
			<div>
				<label>url:</label>
				<input type='text' name='url' onChange={handleChange}></input>
			</div>
			<br></br>
			<button type='submit'>create</button>
		</form>
	)
}

export default NewBlog
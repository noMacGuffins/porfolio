function Form() {
	const registerUser = event => {
	  event.preventDefault() // don't redirect the page
	  console.log(event.target.name.value)
	}
  
	return (
		<form onSubmit={registerUser}>
			<label htmlFor="name">Name</label>
			<input id="name" type="text" autoComplete="name" required />
			<button type="submit">Register</button>
	  	</form>
	)
}
export default Form
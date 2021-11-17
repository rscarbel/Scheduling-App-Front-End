const Form = () => {
  return <>
  <form>
    <h1>Create Account</h1>
    <div className='name-fields'>
      <label>
        First Name
        <input name='firstName' type='text' placeholder='first name'></input>
      </label>
      <label>
        Last Name
        <input name='lastName' type='text' placeholder='last name'></input>
      </label>
    </div>
    <label>
        Email
        <input name='email' type='text' placeholder='email'></input>
      </label>
      <label>
        Password
        <input name='password' type='text' placeholder='password'></input>
      </label>
  </form>
  </>
};

export default Form;
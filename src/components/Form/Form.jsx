import './Form.css';
const Form = () => {
  return (
    <form
      className='form-container'
      netlify='true'
      name='contact'
      method='POST'
    >
      <input type='hidden' name='form-name' value='contact' />
      <label>
        Tu nombre
        <input
          name='name'
          type='text'
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Tu correo
        <input
          name='email'
          type='email'
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Asunto
        <textarea
          name='message'
          type='text'
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>

      <button className='form-button' type='submit'>
        Enviar
      </button>
    </form>
  );
};

export default Form;

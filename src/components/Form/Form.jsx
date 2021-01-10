import './Form.css';
const Form = () => {
  return (
    <form
      className='form-container'
      netlify='true'
      name='contact'
      method='POST'
    >
      <label>
        Tu nombre
        <input
          name='text'
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
          name='text'
          type='text'
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>

      <button className='form-button'>Enviar</button>
    </form>
  );
};

export default Form;

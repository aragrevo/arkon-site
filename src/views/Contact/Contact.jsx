import Form from '../../components/Form/Form';
import { useNearScreen } from '../../hooks/useNearScreen';

const Contact = () => {
  const [isVisible, element] = useNearScreen();
  console.log(isVisible);
  if (isVisible) {
    console.log(element.current.style.backgroundColor);
  }
  return (
    <section
      id='contact'
      className='contact'
      style={{ backgroundColor: '#ffa62b' }}
      ref={element}
    >
      Contáctanos
      <Form />
    </section>
  );
};

export default Contact;

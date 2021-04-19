import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import FirstStepForm from '../../components/FirstStepForm';
import { useHistory } from 'react-router-dom';
import CustomersModal from '../../components/CustomerModal';
import '../../styles/firstStep.css';

const FirstStepScreen = (props: any) => {
  let history = useHistory();

  const onSubmit = (event: any) => {
    event.preventDefault();
    history.push('/b');
  };
  const [modalShow, setModalShow] = useState(false);

  const [arrayForms, setArrayForms] = useState([]);

  useEffect(() => {
    let array: any = [];
    for (let index = 0; index < 2; index++) {
      array.push(<FirstStepForm key={index + 1} numero={index + 1} id={index + 1} />);
    }
    setArrayForms(array);
  }, []);

  return (
    <div className="containerFirstStep">
      <Form onSubmit={onSubmit} className="formFirstStepContainer">
        {arrayForms}
        <Button variant="primary" type="submit">
          Ver Reparto
        </Button>
      </Form>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Ver clientes
      </Button>

      <CustomersModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default FirstStepScreen;

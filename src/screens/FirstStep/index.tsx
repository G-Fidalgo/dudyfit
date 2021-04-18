import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import FirstStepForm from '../../components/FirstStepForm';
import { useHistory } from 'react-router-dom';

const FirstStepScreen = (props: any) => {
  const onSubmit = (event: any) => {
    event.preventDefault();
    history.push('/b');
  };
  let history = useHistory();
  const [arrayForms, setArrayForms] = useState([]);

  useEffect(() => {
    let array: any = [];
    for (let index = 0; index < 2; index++) {
      array.push(<FirstStepForm key={index + 1} numero={index + 1} id={index + 1} />);
    }
    setArrayForms(array);
  }, []);

  return (
    <Form onSubmit={onSubmit}>
      {arrayForms}
      <Button variant="primary" type="submit">
        Submit
      </Button>
      ,
    </Form>
  );
};

export default FirstStepScreen;

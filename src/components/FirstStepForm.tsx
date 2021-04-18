import { useRef, useContext } from 'react';
import { Form } from 'react-bootstrap';
import Context from '../utils/context';

const FirstStepForm = (props: any) => {
  const { context, setContext } = useContext<any>(Context);
  const inputName = useRef<any>(null);
  const inputReputation = useRef<any>(null);
  const inputLimit = useRef<any>(null);

  const filterContext = (data: any) => {
    var elementPos = data
      .map(function (x: any) {
        return x.id;
      })
      .indexOf(props.id);
    return elementPos;
  };

  const setItem = () => {
    const values = {
      id: props.id,
      name: inputName.current!.value,
      reputation: inputReputation.current!.value,
      customersLimit: inputLimit.current!.value,
    };

    let itemPos = filterContext(context);

    if (itemPos !== -1) {
      let b = context;
      b.splice(itemPos, 1);
      b.push(values);
      setContext(b);
    } else {
      let a = [...context, values];
      setContext(a);
    }
  };
  return (
    <>
      <p>Entrenador {props.numero}</p>
      <Form.Group controlId="formTrainerName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" ref={inputName} placeholder="Arsène Wenger" onChange={(e) => setItem()} />
      </Form.Group>

      <Form.Group controlId="formTrainerReputation">
        <Form.Label>Valoración</Form.Label>
        <Form.Control ref={inputReputation} type="number" step={0.1} min="0" max="5" onChange={(e) => setItem()} />
      </Form.Group>

      <Form.Group controlId="formTrainerCustomerCapacity">
        <Form.Label>Máximo número de clientes</Form.Label>
        <Form.Control ref={inputLimit} type="number" step={1} min="0" onChange={(e) => setItem()} />
      </Form.Group>
    </>
  );
};
export default FirstStepForm;

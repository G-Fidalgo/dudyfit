import { useEffect, useRef, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import * as data from '../services/mocks/customers.json';
import '../styles/customer-modal.css';
const CustomersModal = (props: any) => {
  const [customersList, setCustomersList] = useState();
  const customersListRef = useRef<any>(null);

  useEffect(() => {
    let list: any = data.customers.map((customer: any, i: number) => {
      return (
        <div key={i} className="customerContainerModal">
          <span className="customerModal">
            <p>{customer.fullName}</p> <p>{customer.preferences.coachReputation}</p>
          </span>
        </div>
      );
    });
    setCustomersList(list);
  }, []);

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered ref={customersListRef}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Clientes en busqueda de un entrenador</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>{customersList}</div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomersModal;

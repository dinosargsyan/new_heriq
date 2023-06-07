import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { t } from "i18next";

function MyVerticallyCenteredModal(props) {
  // console.log("propner",props);
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.post.category} 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{t('language')==='am' ? props.post.name_am : props.post.name_en  }</h4>
          <p>
            {t('language')==='am' ?  props.post.description_am : props.post.description_en}
          </p>
        </Modal.Body>
        <Modal.Footer>
         <Button onClick={src="https://app.wotnot.io/chat-widget/54LCJmop2JKm110343696901torWRzks.js" defer>{t('close')}</Button> 
         <Button onClick={props.onHide}>{t('close')}</Button> 
        </Modal.Footer>
      </Modal>
    );
  }
  export default MyVerticallyCenteredModal;
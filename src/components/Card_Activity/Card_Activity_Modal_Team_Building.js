import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { t } from "i18next";
import Lines from '../Lines/Lines';

function ModalTeamBuilding(props) {
    // console.log("propner",props);
    let sura = "";
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
                <h4>{(t('language') === "am") ? props.post.name_am : props.post.name_en}</h4>

                <p>
                    {(t('language') === "am") ? props.post.description_am : props.post.description_en}
                </p>

                <h6>{t('participants_amount')}</h6> <span>{props.post.amount}</span>
                <Lines />
                <h6>{t('duration')} </h6> <span>{(t('language') === "am") ? props.post.duration : props.post.duration_en}</span>
                <Lines />
                <h6>{t('purpose')}</h6> <span>{(t('language') === "am") ? props.post.purpose : props.post.purpose_en}</span>
                <Lines />
                <h6>{t('how_to_play')}</h6> <span>{(t('language') === "am") ? props.post.rules : props.post.rules_en}</span>
                <Lines />
                <h6>{t('strategy')}</h6> <span>{(t('language') === "am") ? props.post.strategy : props.post.strategy_en}</span>
                
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>{t('close')}</Button>
            </Modal.Footer>
        </Modal>
    );
}
export default ModalTeamBuilding;
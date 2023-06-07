import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
//import { Button, CardActionArea, CardActions } from '@mui/material';
import './Card_Activity.scss';
import data_mockup from '../Data_mockup/data_mockup';
import { Link } from 'react-router-dom';
import Ngo_Details from '../Ngo_Details/Ngo_Details';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import MyVerticallyCenteredModal from './Card_Activity_Modal';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import ModalTeamBuilding from './Card_Activity_Modal_Team_Building';
import { useTranslation } from 'react-i18next';
import i18next, { t } from 'i18next';

const Card_Activity_Team_Buildings = ({ className, key, post }) => {


  const truncate = (str, n) => {
		return str?.length > n ? str.substr(0, n - 1) + "..." : str;
	};
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      {/* <Link className="link" > */}
        {/* to={`/activity/${post.id}`}> */}
        {/* <Card className={className} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {post.name}
              </Typography>
            </CardContent>
            <div className='hr_div'>
              <hr></hr>
            </div>
            <div className='address'>
              <PinDropIcon /> <span>{post.address}</span>
            </div>
            <div className='phone'>
              <LocalPhoneIcon /><span>{post.phone}</span>
            </div>
          </CardActionArea>

        </Card>  */}

        <div className='card_activity'>
          <div className='card_activity_title'>
            <span> {(t('language') === "am") ? truncate(post.name_am, 30) : truncate(post.name_en, 30)}</span>
          </div>
          <div>
            <span> {(t('language') === "am") ? truncate(post.description_am, 100) : truncate(post.description_en, 170)}</span>
          </div>
          <Link  to={'team_buildings'}  onHide={() => setModalShow(true)}>  <Button className="team_building_button" placement="bottom" variant="primary" onClick={() => setModalShow(true)}>
           {t('open')}
          </Button></Link>
        </div>
      {/* </Link> */}
      
      <ModalTeamBuilding
        show={modalShow}
        onHide={() => setModalShow(false)}
        post={post}
      />
    
    </div>
  )
}

export default Card_Activity_Team_Buildings;
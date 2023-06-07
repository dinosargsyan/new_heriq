import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import PinDropIcon from '@mui/icons-material/PinDrop';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './Card.scss';
import data_mockup from '../Data_mockup/data_mockup';
import { Link } from 'react-router-dom';
import Ngo_Details from '../Ngo_Details/Ngo_Details';

const Cards = ({className, key,post}) => {
 
    return (
        <div>
          <Link  className="link" to={`/ngo_base/${post.id}`}>
                <Card  className={className} sx={{ maxWidth: 345 }}>
         <CardActionArea> 
        <CardContent>
          <Typography  gutterBottom variant="h5" component="div">
         {post.name}
          </Typography>
        </CardContent>
        <div className='hr_div'>
        <hr></hr>
        </div>
          <div className='address'>
           <PinDropIcon/> <span>{post.address}</span>
           </div>
           <div className='phone'>
             <LocalPhoneIcon/><span>{post.phone}</span>
             </div> 
      
      </CardActionArea>
     
    </Card> </Link>
        </div>
    )
}

export default Cards

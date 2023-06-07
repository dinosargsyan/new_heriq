import React, { Component } from 'react';
import fbService from '../../api/fbService';
import Cards from '../Card/Card';
import PinDropIcon from '@mui/icons-material/PinDrop';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import './Ngo_details.scss';

class PostDetails extends Component {
  constructor(props) {
      super(props);
      console.log(this.props);
    

      this.state = {
          post: '',
          isOpenEditPopUp: false,
          titleValue: '',
          bodyValue: ''
      }
  }
  componentDidMount() {
      fbService.getPost(this.props.match.params.ngoId)
          .then(data => {
              this.setState({
                  post: data,
              })
          })
  }

  
  

  render() {
      const { post, isOpenEditPopUp, titleValue,bodyValue } = this.state;
      console.log("poster", post);
      if (!post) {
        
          return (<div class="loader">
          <div class="outer"></div>
          <div class="middle"></div>
          <div class="inner"></div>
        </div>)
      }
      return (
          <div className="app-post__post-details">
              <h2>{post.name}</h2>
              <div className='app-post__post-details_about'>
            <span className='post_about'>{post.about}</span>
             {/* // <Cards post={post} className="card_details"  /> */}
             <hr className='app-post__post-details_about_hr' ></hr>
                <div className='app-post__post-details_about_icons'>
             <div className='address'>
           <PinDropIcon/> <span>{post.address}</span>
           </div>
           <div className='phone'>
             <LocalPhoneIcon/><span>{post.phone}</span>
             </div> 
           <div className='email'>
           {post.email ?  <><EmailIcon/><span>{post.email}</span> </>: <></>}    
             </div> 
             <div className='facebook'>
             {post.fbname ?<> <FacebookIcon/><a href={post.facebook}>{post.fbname}</a></> : <></>}
             </div>
             <span className='depo'>Տվյալները վերցված են hkdepo.am կայքից</span>
             </div>
             </div>
          </div>
      )
  }
}

export default PostDetails;


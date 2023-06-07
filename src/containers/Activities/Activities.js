import React, { Component } from 'react';
import Card_Activity from '../../components/Card_Activity/Card_Activity';
import fbService from '../../api/fbService';
import {t} from 'i18next';
import i18n from '../../i18n';
//import Cards from '../../components/Card/Card';
const limit = 5;
export class Activities extends Component {

    state = {
        posts: [],
        startAt: 0,
        title: "",
        body: "",
        uid: "",
        hasMore: false,
        loading: false
    }
    
    componentDidMount(){
        fbService.getAllEnergizers()
        .then(resJson=>{
            this.setState({
                posts: resJson,          
            })
            })  
        }   
        render() {
            return (
            <div className='ngo_layout'>
        <div className="ngo">     
                {
                    
                    this.state.posts?.map(post =>{
                        return (
                        <Card_Activity 
                        key={post.id}
                        post={post}
                        className={'card'}/>
                        )
                    })
                   }
                
            </div>
                   </div>   
        )
    }

}
export default Activities;

import React, { Component } from 'react';
import Card_Activity from '../../components/Card_Activity/Card_Activity';
import fbService from '../../api/fbService';
import Card_Activity_Team_Buildings from '../../components/Card_Activity/Card_Activity_Team_Buildings';
//import Cards from '../../components/Card/Card';
const limit = 5;
export class Team_buildings extends Component {

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
        fbService.getAllTeamBuildings()
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
                        <Card_Activity_Team_Buildings 
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
export default Team_buildings;

import React, { Component } from 'react';
import fbService from '../../api/fbService';
import Cards from '../../components/Card/Card';
import './Ngo.scss';



const limit = 5;
export class Ngo extends Component {
    
    
    state = {
        posts: [],
        startAt: 0,
        title: "",
        body: "",
        uid: "",
        hasMore: false,
        loading: false,
        checked: ''
    }
    componentDidMount(){
        fbService.getAllPosts()
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
                            <>
                        <Cards className="ngo_cards"
                           key={post.id}
                           post={post}
                           className={'card'}
                           
                        />
                      
                      </>
                        )
                    })
                   }
                
            </div>
                   </div>   
        )
    }
}

export default Ngo;

import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { useTranslation } from 'react-i18next';
import { Translation } from 'react-i18next';
import firebaseConfig from './fbConfig';
import i18next, { t } from 'i18next';
import i18n from '../i18n';




class FbService{
  constructor(){
    firebase.initializeApp(firebaseConfig);     
  }
  getAllEnergizers = async () =>{
   
    console.log("lezun",i18n.language);
    const res = await firebase.database().ref(`activities_am`).get();
    return res.val();
  
    }
    getAllTeamBuildings = async () =>{
    const res = await firebase.database().ref("team_buildings_am").get();
    return res.val();
    }
    getActivity = async (id) =>{
      const res = await firebase.database().ref(`ngo/${id}`).get();
      return res.val();
    }
    getAllPosts = async () =>{
      const res = await firebase.database().ref("ngo").get();
      return res.val();
    }
    getPost = async (id) => {
      const res = await firebase.database().ref(`ngo/${id}`).get();
      return res.val();
   }

    createPost = async (postData) => {
    
      const res = await firebase.database().ref('messages').orderByKey().limitToLast(1).get();
      const lastItemJson = res.toJSON();
      const lastItem = Object.values(lastItemJson)[0];
      const { id } = lastItem;
    
      const newItem = {
          ...postData
          
      }
    
      await firebase.database().ref(`messages/${id}`).set(newItem);
      return newItem;

  }
}
const fbService = new FbService();
export default fbService;
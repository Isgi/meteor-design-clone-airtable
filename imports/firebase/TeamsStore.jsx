
import * as firebase from "firebase";
import {Config} from '/config/lib/Config';

class TeamsStore {

  constructor(){
     firebase.initializeApp(Config.firebase);
     this.teams = firebase.database().ref('teams');
  }

  findAll(callback){
    this.teams.on('value', (snapshot)=>{
      callback(snapshot.val())
    });
  }

  insert(data){
    return this.teams.push(data).key;
  }

  update(teamId, data){
    return firebase.database().ref('teams/'+teamId).set(data);
  }

  delete(teamId){
    return firebase.database().ref('teams/'+teamId).remove();
  }

}

const teamsStore = new TeamsStore();
export default teamsStore;

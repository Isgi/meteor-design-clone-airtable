import {firebase} from '/config';
import {observable} from 'mobx';

const path = "teams"; //@UPDATEME ini dibuat singular!

class Team {

  @observable models = [];

  find(){
    const self = this;
    firebase.database().ref(path).on('value', (snapshot)=>{
      if(snapshot){
        self.models = snapshot;
      }
    });
  }

  insert(data){
    return firebase.database().ref(path).push(data).key;
  }

  update(id, data){
    return firebase.database().ref(path + '/' + id).set(data);
  }

  delete(id){
    return firebase.database().ref(path + '/' + id).remove();
  }

}

const team = new Team();
export default team;

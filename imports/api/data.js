import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Data = new Mongo.Collection('data');

if (Meteor.isServer) {
  Meteor.publish('data', (doc) => {
    const selector = doc.selector || {};
    const options = doc.options || {};
    return Data.find(selector,options);
  });
}

Meteor.methods({
  'data.insert'(data) {
    Data.insert(data);
  },
  'data.update'(data) {
    Data.update(data._id, data);
  },
  'data.remove'(id) {
    Data.remove(id);
  }
});

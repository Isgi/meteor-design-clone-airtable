import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Teams = new Mongo.Collection('teams');

if (Meteor.isServer) {
    Meteor.publish('teams', (doc) => {
        const selector = doc.selector || {};
        const options = doc.options || {};
        return Teams.find(selector,options);
    });
}

Teams.allow({
    insert() { return true; },
    update() { return true; },
    remove() { return true; },
});

// Teams.deny({
//     insert() { return true; },
//     update() { return true; },
//     remove() { return true; },
// });
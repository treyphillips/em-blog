import Ember from 'ember';

export function initialize(/* container, application */) {
  Ember.$.ajaxSetup ({
     headers: {
       "X-Parse-Application-Id": 'cxbiwGrpUPAhUhQ5npB98g4Qf40mJVXh6VFVF5Y4',
       "X-Parse-REST-API-Key": '0ydLRX7Bi990irc8RU2UDeMRaqTXZ7HxBj8fePzo'
     }
});
}

export default {
  name: 'parse',
  initialize: initialize
};

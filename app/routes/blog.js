import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return Ember.$.ajax("https://api.parse.com/1/classes/posts").then(function(response) {
      return response.results;

    });
  }
});

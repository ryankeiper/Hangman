var ViewsCollection = Backbone.Collection.extend({
  initialize: function(){
    console.log("guesses collection created")
  },
  model: GuessModel,
  url: '/'
})

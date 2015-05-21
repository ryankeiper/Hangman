var GuessesListView = Backbone.View.extend({
  el: '#characters',

  initialize: function(){
    console.log("guesses list view created")
    this.listenTo(this.collection, 'reset', this.renderAll);
    this.listenTo(this.collection, 'add', this.renderOne);
  },

  renderOne: function(guess){
    var currentView = new GuessView({
      model: guess});
    this.$el.append(currentView.$el);
  },

  renderAll: function(){
    this.$el.empty();
    this.collection.each(this.renderOne.bind(this));
  }

})

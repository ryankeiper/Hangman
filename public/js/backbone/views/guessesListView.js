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

  // render: function() {
  //     var chars = this.characters({letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']})
  //     this.el.html(chars).show();
  // },
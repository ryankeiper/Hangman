var GuessView = Backbone.View.extend({
  className: "guess",
  tagName: "span",

  events: {
    'click.button#submit_guess': 'guessLetter'
  },

  initialize: function(){
    console.log("new guess view instantiated");
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },

  render: function(){
    console.log(this)
  },

  guessLetter: function() {
    console.log("GUESSING LETTER")
  }

})

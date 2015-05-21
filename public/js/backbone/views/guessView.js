var GuessView = Backbone.View.extend({
  className: "guess",
  tagName: "span",

  initialize: function(){
    console.log("new guess view instantiated")
  },

  this.listenTo(this.model, 'change' this.render),

  this.render(),

  render: function(){
    this.$el.append(this.model.get("value"))
  }

})

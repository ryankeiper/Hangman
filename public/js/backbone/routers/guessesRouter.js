
var GuessesRouter = Backbone.Router.extend({
    routes: {
        "guesses": "guesses",
    },

    initialize: function initialize (){
        console.log("router is working");
        collection = new GuessesCollection();
        listView = new GuessesListView({collection: guess});
        collection.fetch({reset: true});
    },

    guesses: function guesses (){
        collection.fetch({reset: true});
    }
});
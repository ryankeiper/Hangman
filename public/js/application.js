$(document).ready(loadHangman);

function loadHangman(){
  // mainCollection = new GuessesCollection();
  // mainCollectionView = new GuessesListView({
  //   collection: mainCollection});
  // mainCollection.fetch();
  new GuessesRouter();
  Backbone.history.start({pushState: true}); //pushState changes your /#guesses url to /guesses

}

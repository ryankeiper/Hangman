$(document).ready(loadHangman);

function loadHangman(){
  mainCollection = new GuessesCollection();
  mainCollectionView = new GuessesListView({
    collection: mainCollection});
  mainCollection.fetch();

}

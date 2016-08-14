(function() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCnn4_5aNnLz277CGEN_49iog5k71bRYrM",
    authDomain: "web-hello-world.firebaseapp.com",
    databaseURL: "https://web-hello-world.firebaseio.com",
    storageBucket: "web-hello-world.appspot.com",
  };
  firebase.initializeApp(config);

  //get elements
  const preObject = document.getElementById('object');

  //Create Db reference
  const dbRefObject = firebase.database().ref().child('object');
  /*
  * Ref gets you to the root of the database
  * child then creates or finds the node specified
  */

  //Synch Object changes pushed from db
  //event type
  //event type controls when call back is called
  dbRefObject.on('value', snap => {
    preObject.innerText = JSON.stringify(snap.val(), null, 3);
    });

}());

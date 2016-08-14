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
  const listObject = document.getElementById('hobbies');

  //Create Db reference
  const dbRefObject = firebase.database().ref().child('object');
  const dbRefList = dbRefObject.child('hobbies');
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

  //Using child events to sync when a a child is added
  dbRefList.on('child_added', snap => {
    const li = document.createElement('li');
    li.innerText = snap.val();
    li.id = snap.key;
    listObject.appendChild(li);
  });

  //check when children are updated
  dbRefList.on('child_changed', snap => {
    const liChanged = document.getElementById(snap.key);
    liChanged.innerText = snap.val();
  });
  //check when children are deleted
  dbRefList.on('child_removed', snap => {
    const liToremove = document.getElementById(snap.key);
    liToremove.remove();
  });


}());

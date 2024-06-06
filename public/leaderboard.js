window.onload = function() {

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
      apiKey: "AIzaSyBSDW1sgJfpk0PAsbp7JRLHT14-CSL8F_0",
      authDomain: "erhsfblaweb.firebaseapp.com",
      databaseURL: "https://erhsfblaweb-default-rtdb.firebaseio.com",
      projectId: "erhsfblaweb",
      storageBucket: "erhsfblaweb.appspot.com",
      messagingSenderId: "123112557466",
      appId: "1:123112557466:web:6dd4db634f9dee8c378823",
      measurementId: "G-8RT2TZHY8B"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var db = firebase.database();

  function create_body() {
    // Create a div to hold the leaderboard
    var leaderboard = document.createElement('div')
    leaderboard.id = 'leaderboard'
    document.body.appendChild(leaderboard)

    leaderboard.innerHTML = '<h2>Leaderboard</h2>'
    // Get the firebase database value
    db.ref('leaderboard/').once('value', function(message_object) {
      // This index is mortant. It will help organize the chat in order
      var index = parseFloat(message_object.numChildren()) + 1
      for (var i, i = 1; (i < index); i++) {
        db.ref('leaderboard/' + `person_${i}/name` ).get().then((snapshot) => {
          console.log(i)
          var lead = document.createElement('div')
          var lead_in = document.createElement('h2')
          lead_in.innerHTML = snapshot.val() + ": "
          lead.innerHTML = lead_in.innerHTML
          document.body.appendChild(lead)
        })
        db.ref('leaderboard/' + `person_${i}/score` ).get().then((snapshot) => {
          var lead = document.createElement('div')
          var lead_in = document.createElement('h2')
          lead_in.innerHTML = snapshot.val()
          lead.innerHTML = lead_in.innerHTML
          document.body.appendChild(lead)
        })
      }
    })
  }

  // First clear the body before adding in
  // a title and the join form
  create_body()


}

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js';
import { getDatabase, ref, get, child } from 'https://www.gstatic.com/firebasejs/9.1.1/firebase-database.js';

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  

  function create_body() {
    
    console.log("Creating body");
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
  var app = initializeApp(firebaseConfig);
  var db = getDatabase(app);
    // Create a div to hold the leaderboard
    var leaderboard = document.createElement('div')
    leaderboard.id = 'leaderboard'
    document.body.appendChild(leaderboard)

    leaderboard.innerHTML = '<h2>Leaderboard</h2>'
    // Get the firebase database value
    get(child(ref(db), `leaderboard/`)).then((snapshot) => {
      if (snapshot.exists()) {
        var num = snapshot.size + 1
        for (var i, i = 1; (i < num); i++) {
          get(child(ref(db, 'leaderboard/'), `person_${i}/name`)).then((snapshot) => {
            if (snapshot.exists()) {
              var lead = document.createElement('div')
              var lead_in = document.createElement('h2')
              lead_in.innerHTML = snapshot.val() + ": "
              lead.innerHTML = lead_in.innerHTML
              document.body.appendChild(lead)
            } else {
              console.log("No data available");
            }
          }).catch((error) => {
            console.error(error);
          });
      
          get(child(ref(db, 'leaderboard/'), `person_${i}/score`)).then((snapshot) => {
            if (snapshot.exists()) {
              var lead = document.createElement('div')
              var lead_in = document.createElement('h2')
              lead_in.innerHTML = snapshot.val()
              lead.innerHTML = lead_in.innerHTML
              document.body.appendChild(lead)
            } else {
              console.log("No data available");
            }
          }).catch((error) => {
            console.error(error);
          });
        }
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });

    

    
}

  // First clear the body before adding in
  // a title and the join form
  window.addEventListener("load", create_body);



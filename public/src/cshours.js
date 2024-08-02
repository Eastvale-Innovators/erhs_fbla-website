import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js';
import { getDatabase, ref, get, child } from 'https://www.gstatic.com/firebasejs/9.1.1/firebase-database.js';


  function create_body() {
    var lead_over_data = []
    

    // Create a div to hold the leaderboard
    var leaderboard = document.createElement('div')
    leaderboard.id = 'leaderboard'
    document.body.appendChild(leaderboard)

    // Get the firebase database value
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

    get(child(ref(db), `10m2nmbbruES_Femj-myVdpo_pfH0fzlZP15ILy775b4/Sheet1`)).then((snapshot) => {
      if (snapshot.exists()) {
        var num = snapshot.size + 1
        var lead_data = []

        for (var i, i = 1; (i < num); i++) {
          var j = 1;

          get(child(ref(db, '10m2nmbbruES_Femj-myVdpo_pfH0fzlZP15ILy775b4/'), `Sheet1/${i}/First and Last Name`)).then((snapshot) => {
            if (snapshot.exists()) {
              /*var lead = document.createElement('div')
              var lead_in = document.createElement('h2')
              lead.setAttribute("style", "display: inline-block; width: 50%")
              lead_in.innerHTML = j + " " + snapshot.val()
              lead.innerHTML = lead_in.innerHTML
              document.body.appendChild(lead)
              j++*/
              if (snapshot.val() != "") {
                lead_data.push(snapshot.val())
              }
            } else {
              console.log("No data available");
            }
          }).catch((error) => {
            console.error(error);
          });
      
          get(child(ref(db, '10m2nmbbruES_Femj-myVdpo_pfH0fzlZP15ILy775b4/'), `Sheet1/${i}/Hours`)).then((snapshot) => {
            if (snapshot.exists()) {
              /*var lead = document.createElement('div')
              var lead_in = document.createElement('h2')
              lead_in.innerHTML = snapshot.val()
              lead.setAttribute("style", "display: inline-block; width: 50%")
              lead.innerHTML = lead_in.innerHTML
              document.body.appendChild(lead)
              */
              if (snapshot.val() != "") {
                lead_data.push(snapshot.val())
              }
              j++;
              if (j == (num-1)) {

              var lead_over_container = document.createElement('div')
              lead_over_container.setAttribute('class', 'tabs_content')
              lead_over_container.setAttribute('data-tab', '2')
              var label_container = document.createElement('div')
                label_container.setAttribute('style', 'margin-left: 10%; margin-right: 15%; font-weight: bold')

                var left_label_container = document.createElement('div')                
                var place_label = document.createElement('p')
                place_label.setAttribute('style', 'display: inline; padding-right: 65px; color: black; margin-bottom: 20px !important;')
                place_label.innerHTML = "Rank"
                var name_label = document.createElement('p')
                name_label.setAttribute('style', 'display: inline; color: black; margin-bottom: 20px !important;')
                name_label.innerHTML = "Name"
                left_label_container.setAttribute('style', 'float: left')
                left_label_container.append(place_label, name_label)

                var right_label_container = document.createElement('div')
                var hours_label = document.createElement('p')
                hours_label.setAttribute('style', 'color: black; margin-bottom: 20px !important;')
                hours_label.innerHTML = "Hours"
                right_label_container.setAttribute('style', 'text-align: right;')
                right_label_container.append(hours_label)            

                label_container.append(left_label_container, right_label_container)
              lead_over_container.append(label_container)

              for (var i = 0; i < lead_data.length; i+=3) {
                lead_over_data.push(lead_data[i])
                lead_over_data.push(lead_data[i+1])
                lead_over_data.push(lead_data[i+2])
              }


              var rank = 1
              for (var i = 0; i < lead_over_data.length; i+=2) {
                var lead = document.createElement('div')
                lead.setAttribute('style', 'outline: 1px solid grey; margin-left: 10%;  outline-offset: 10px; margin-right: 15%; border-radius: 1px')
                /*var lead_in = document.createElement('h2')
                lead_in.setAttribute("style", "text-align: center")
                lead_in.innerHTML = rank + " " + lead_over_data[i] + " " + lead_over_data[i+1] + ": " + lead_over_data[i+2]
                lead.innerHTML = lead_in.innerHTML
                document.body.appendChild(lead)*/


                var left_container = document.createElement('div')
                var place = document.createElement('p')
                place.setAttribute('style', 'display: inline; padding-right: 100px; color: black; margin-bottom: 40px !important;')
                place.innerHTML = rank
                var name = document.createElement('p')
                name.setAttribute('style', 'display: inline; color: black; margin-bottom: 40px !important;')
                name.innerHTML = lead_over_data[i]

                left_container.setAttribute('style', 'float: left')
                left_container.append(place, name)


                var right_container = document.createElement('div')
                var hours = document.createElement('p')
                hours.setAttribute('style', 'color: black; margin-bottom: 40px !important;')
                hours.innerHTML = Math.floor(lead_over_data[i+1])
                right_container.setAttribute('style', 'text-align: right;')
                right_container.append(hours)

                lead.append(left_container, right_container)
                lead_over_container.append(lead)
                rank++
              }
              const content = document.getElementById("content")
              content.appendChild(lead_over_container)
            }
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

  window.addEventListener("load", create_body());



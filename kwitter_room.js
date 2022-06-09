
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDwMuJpwhDLwnQWmYWslAq3OQPy55ryslE",
      authDomain: "practice-1ea51.firebaseapp.com",
      databaseURL: "https://practice-1ea51-default-rtdb.firebaseio.com",
      projectId: "practice-1ea51",
      storageBucket: "practice-1ea51.appspot.com",
      messagingSenderId: "1014681240613",
      appId: "1:1014681240613:web:3a3f1d55a0df0cf570ebcc"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       room_names = childKey;
      //Start code
      console.log("room Name - "+ room_names);
      row = "<div class='room_names' id="+room_names+" onclck='redirectToroomName(this.id)' >#"+room_names+"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function addRoom (){
      room_names = document.getElementById("room_names").value;

      firebase.database().ref("/").child(room_names).update({
            purpose: "adding user name"
      });

      localStorage.setItem("room_names", room_names);

      window.location = "kwitter_page.html";
}

function redierctToRoomName(name){
      console.log(name);
      localStorage.setItem("room_names", name);
      window.location = "kwitter_room.html";
}



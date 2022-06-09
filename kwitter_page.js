//YOUR FIREBASE LINKS

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
  
    
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
      console.log(firebase_message_id);
      console.log(message_data);
      name =message_data['name'];
      message =message_data['message'];
      like = message_data['like'];
      name_with_tag = "<h4>" + name +"<img class='user-tick' src='tick.png'></h4>";
      message_with_tag = "h4 class='message_h4>" + message + "</h4>";
      like_button = "<button class= 'btb btn-warning' id="+firebase_message_id+"value="+like+"onclick='updateLike(this.id)'>";
      span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";

      row = name_with_tag + message_with_tag +like_button +span_with_tag;
      document.getElementById("output").innerHTML +=row;


//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

function updateLike(message_id){
      console.log("clicked on the like button - "+ message_id);
      button_id= message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes)+ 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
}

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_names).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value="";
}

var firebaseConfig = {
    apiKey: "AIzaSyCKfrrk7JLtcQ9rWARUqqHj0G9J3ZI0PKI",
    authDomain: "let-s-chat-web-app-a6b8c.firebaseapp.com",
    databaseURL: "https://let-s-chat-web-app-a6b8c-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-web-app-a6b8c",
    storageBucket: "let-s-chat-web-app-a6b8c.appspot.com",
    messagingSenderId: "822058065692",
    appId: "1:822058065692:web:d5a6a9ebe14c7f4f6d64d9",
    measurementId: "G-3GBBS5G8YZ"
  };

  firebase.initializeApp(firebaseConfig);
  user_save1=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome "+user_save1+"!";
  function add_room(){
    room_name=document.getElementById("pls_type_sir").value;
    firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.HTML"
  }
  
  function getData()
  { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("div_output").innerHTML = "";
  snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; Room_names = childKey; console.log("Room Name - " + Room_names); row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; document.getElementById("output").innerHTML += row; }); }); }
  getData();
  
  function redirectToRoomName(name) {
     console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
     }
     function logOut(){
           localStorage.removeItem("user_name");
           localStorage.removeItem("room_name");
           window.location="index.html";
     }
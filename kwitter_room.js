var firebaseConfig = {
    apiKey: "AIzaSyCHAizjpnzgNrZ2rQZtKOtpRS0h0RS6gaQ",
    authDomain: "covid19bot-gxul.firebaseapp.com",
    databaseURL: "https://covid19bot-gxul-default-rtdb.firebaseio.com",
    projectId: "covid19bot-gxul",
    storageBucket: "covid19bot-gxul.appspot.com",
    messagingSenderId: "757999173122",
    appId: "1:757999173122:web:2906e6b4fe774747e2f11b",
    measurementId: "G-1SYCXTMC3H"
  };

  firebase.initializeApp(firebaseConfig);
  user_save1=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="welcome"+user_save1+"!";
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
     function get_out(){
           localStorage.removeItem("user_name");
           localStorage.removeItem("room_name");
           window.location="index.html";
     }

const firebaseConfig = {
    apiKey: "AIzaSyCZhloo91sSD3D1eelr4eCCFJ4Ju8ppnYU",
    authDomain: "project-c41-c2c20.firebaseapp.com",
    databaseURL: "https://project-c41-c2c20-default-rtdb.firebaseio.com",
    projectId: "project-c41-c2c20",
    storageBucket: "project-c41-c2c20.appspot.com",
    messagingSenderId: "860363650864",
    appId: "1:860363650864:web:3470fce11cacbdce393af5",
    measurementId: "G-JVXDXQKE23"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send()
  {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
      });

      document.getElementById("msg").value = "";
  }

  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot)
  {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot)
      {childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose")
      {
          firebase_message_id = childKey;
          message_data = childData;
//Start Code
    console.log(firebase_message_id);
    console.log(message_data);
    name = message_data['name'];
    message = message_data['message'];
    like
  } 

  function logout() 
{ 
      localStorage.removeItem("user_name"); 
      localStorage.removeItem("room_name"); 
      window.location.replace("kwitter.html"); 
}

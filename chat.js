// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyDss5wF1WvfXxwzsyd-idq3-nrwly0DZrA",
    authDomain: "project-100-dad04.firebaseapp.com",
    projectId: "project-100-dad04",
    storageBucket: "project-100-dad04.appspot.com",
    messagingSenderId: "1035711694649",
    appId: "1:1035711694649:web:e64f81e9700b7deebb0ae8"
  };
  
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}




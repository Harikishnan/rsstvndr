  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBRA9-4dop49r_TuWVAxRPWMAPbJwZmIyo",
    authDomain: "rsstvndr.firebaseapp.com",
    databaseURL:"https://rsstvndr.firebaseio.com",
    projectId: "rsstvndr",
    storageBucket: "rsstvndr.appspot.com",
    messagingSenderId: "636963472977",
    appId: "1:636963472977:web:ced69c78ce4df7379e9a70",
    measurementId: "G-JRZH1XJL83"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const firestore = firebase.firestore();
  const docRef = firestore.collection("needblood");

document.getElementById('needblood').addEventListener('submit' , function submitForm (e){

    e.preventDefault();
    document.getElementById('sbn').innerHTML = "Please Wait..";
    document.getElementById('conform').style.display="block";

    var name = document.getElementById('fname');
    var place = document.getElementById('pl');
    var phone = document.getElementById('ph');
    var blood = document.getElementById('bd');
    var text = document.getElementById('pr');
    var duedate = document.getElementById('duedate'); 

    docRef.doc().set({
        name : name.value,
        place : place.value,
        blood : blood.value,
        phone : phone.value,
        text  : text.value,
        duedate : duedate.value
    }).then(()=>{
        console.log("data saved");
        window.location.href="success.html";
    }).catch((error)=>{
        console.log(error);
        alert("Error Occured");
        });


});

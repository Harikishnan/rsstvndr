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
  const docRef = firestore.collection("karyakari");

document.getElementById('karyakari').addEventListener('submit' , function submitForm (e){

    e.preventDefault();
    document.getElementById('sbn').innerHTML = "Please Wait..";
    document.getElementById('conform').style.display="block";

    var name = document.getElementById('fname');
    var date = document.getElementById('dt');
    var place = document.getElementById('pl');
    var numpeople = document.getElementById('num');
    var role = document.getElementById('role');
    var shaka = document.getElementById('shaka');
    var pepnames = document.getElementById('pr');
    var text =  document.getElementById('tx'); 

    docRef.doc('details').set({
        name : name.value,
        date : date.value,
        place : place.value,
        numpeople : numpeople.value,
        role  : role.value,
        shaka  :shaka.value , 
        pepnames : pepnames.value,
        text  : text.value
    }).then(()=>{
        console.log("data saved");
        window.location.href="success.html";
    }).catch((error)=>{
        console.log(error);
        alert("Error Occured");
        });


});


function getKaryakariDetails(){
  docRef.doc('details').get().then(function (doc) {
    if(doc && doc.exists){
      document.getElementById('loading').style.display="none";
      const Data1 = doc.data();
      document.getElementById('text1').innerText +=  "കാര്യകാരി: " + Data1.shaka;
      document.getElementById('text2').innerText += "തീയതി: " +  Data1.date;
      document.getElementById('text3').innerText += "വരേണ്ടത്: " + Data1.numpeople;
      document.getElementById('text4').innerText += "പങ്കെടുത്തവരുടെ പേര്: " + Data1.pepnames;
      document.getElementById('text5').innerText += "നിശ്ചയിച്ച കാര്യങ്ങൾ: " + Data1.text;
      document.getElementById('text6').innerText += "Posted By:" + Data1.name;
    }
  }).catch((error)=>{
    alert('Error Occured' + error)
  });
}


getKaryakariDetails();


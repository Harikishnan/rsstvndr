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
  const docRef1 = firestore.collection("samyukthavidyardhivrittam");
  const docRef2 = firestore.collection("tharunavidhyardhishakavrittam");
  const docRef3 = firestore.collection("tharunavyavasayivrittam");


document.getElementById('tharunavyavasayivrittam').addEventListener('submit' , function submitForm (e){

    e.preventDefault();
    document.getElementById('sbn11').innerHTML = "Please Wait..";
    document.getElementById('conform11').style.display="block";

    var name1 = document.getElementById('fname11');
    var phone1 = document.getElementById('ph11');
    var role1 = document.getElementById('role11');
    var total1 = document.getElementById('total11');
    var recent1 = document.getElementById('recent11');
    var students1 =  document.getElementById('students11'); 
    var karyakarinum11 =  document.getElementById('karyakarinum11');
    var karyakarinum111 =  document.getElementById('karyakarinum111');
    var karyakarinum21 =  document.getElementById('karyakarinum211'); 
    var manadalnum11 =  document.getElementById('manadalnum111'); 
    var manadalnum21 =  document.getElementById('manadalnum211'); 
    var manadalnum31 =  document.getElementById('manadalnum311');  
    var manadalnum41 =  document.getElementById('manadalnum411');   
    var manadalnum51 =  document.getElementById('manadalnum511');
    var gangajali111 =  document.getElementById('gangajali111');   
    var gangajali1111 =  document.getElementById('gangajali1111');
    var sevanam1 =  document.getElementById('sevanam11');
    var yes1 = document.getElementById('yes11'); 
    var sharirik11 = document.getElementById('sharirik11');
    var bhawdhik11 = document.getElementById('bhawdhik11');  
   

   

    docRef3.doc('details').set({
        name1 : name1.value,
        phone1 : phone1.value,
        role1 : role1.value,
        total1 : total1.value,
        recent1: recent1.value,
        students1 : students1.value,
        karyakarinum11 : karyakarinum11.value,
        karyakarinum111 : karyakarinum111.value,
        karyakarinum21 : karyakarinum21.value,
        manadalnum11 : manadalnum11.value,
        manadalnum21 : manadalnum21.value,
        manadalnum31 : manadalnum31.value,
        manadalnum41 : manadalnum41.value,
        manadalnum51: manadalnum51.value,
        gangajali111 : gangajali111.value,
        gangajali1111 : gangajali1111.value,
        sevanam1 : sevanam1.value,
        yes1 : yes1.value,
        sharirik11 : sharirik11.value,
        bhawdhik11 : bhawdhik11.value
    }).then(()=>{
        console.log("data saved");
        window.location.href="success.html";
    }).catch((error)=>{
        console.log(error);
        alert("Error Occured");
        });


});

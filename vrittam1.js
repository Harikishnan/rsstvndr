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


document.getElementById('tharunavidhyardhivrittam').addEventListener('submit' , function submitForm (e){

    e.preventDefault();
    document.getElementById('sbn1').innerHTML = "Please Wait..";
    document.getElementById('conform1').style.display="block";

    var name1 = document.getElementById('fname1');
    var phone1 = document.getElementById('ph1');
    var role1 = document.getElementById('role1');
    var total1 = document.getElementById('total1');
    var recent1 = document.getElementById('recent1');
    var students1 =  document.getElementById('students1'); 
    var karyakarinum1 =  document.getElementById('karyakarinum112');
    var karyakarinum11 =  document.getElementById('karyakarinum1112');
    var karyakarinum21 =  document.getElementById('karyakarinum21'); 
    var manadalnum11 =  document.getElementById('manadalnum11'); 
    var manadalnum21 =  document.getElementById('manadalnum21'); 
    var manadalnum31 =  document.getElementById('manadalnum31');  
    var manadalnum41 =  document.getElementById('manadalnum41');   
    var manadalnum51 =  document.getElementById('manadalnum51');
    var gangajali1 =  document.getElementById('gangajali12');   
    var gangajali11 =  document.getElementById('gangajali11');
    var sevanam1 =  document.getElementById('sevanam1');
    var yes1 = document.getElementById('yes1');  
    var sharirik1 = document.getElementById('sharirik1'); 
    var bhawdhik1 = document.getElementsByName('bhawdhik123');
   

   

    docRef2.doc('details').set({
        name1 : name1.value,
        phone1 : phone1.value,
        role1 : role1.value,
        total1 : total1.value,
        recent1: recent1.value,
        students1 : students1.value,
        karyakarinum1 : karyakarinum1.value,
        karyakarinum11 : karyakarinum11.value,
        karyakarinum21 : karyakarinum21.value,
        manadalnum11 : manadalnum11.value,
        manadalnum21 : manadalnum21.value,
        manadalnum31 : manadalnum31.value,
        manadalnum41 : manadalnum41.value,
        manadalnum51: manadalnum51.value,
        gangajali1 : gangajali1.value,
        gangajali11 : gangajali11.value,
        sevanam1 : sevanam1.value,
        yes1 : yes1.value,
        sharirik1 : sharirik1.value

    }).then(()=>{
        console.log("data saved");
        window.location.href="success.html";
    }).catch((error)=>{
        console.log(error);
        alert("Error Occured");
        });


});

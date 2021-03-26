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


  function getDetailsSamyuktha (){
    docRef1.doc('details').get().then(function (doc){
        if(doc && doc.exists){
            const myData = doc.data();
            document.getElementById('smtotal').innerText += " : " + myData.total;
            document.getElementById('smrecent').innerText += " : " + myData.recent;
            document.getElementById('smstudents').innerText += " : " + myData.students;
            document.getElementById('smkids').innerText += " : " + myData.kids;
            document.getElementById('smkaryakarinum').innerText += " : " + myData.karyakarinum;
            document.getElementById('smkaryakarinum1').innerText += " : " + myData.karyakarinum1;
            document.getElementById('smkaryakarinum2').innerText += " : " + myData.karyakarinum2;
            document.getElementById('smmanadalnum1').innerText += " : " + myData.manadalnum1;
            document.getElementById('smmanadalnum2').innerText += " : " + myData.manadalnum2;
            document.getElementById('smmanadalnum3').innerText += " : " + myData.manadalnum3;
            document.getElementById('smmanadalnum4').innerText += " : " + myData.manadalnum4;
            document.getElementById('smmanadalnum5').innerText += " : " + myData.manadalnum5;
            document.getElementById('smmanadalnum6').innerText += " : " + myData.manadalnum6;
            document.getElementById('smgangajali').innerText += " : " + myData.gangajali;
            document.getElementById('smgangajali1').innerText += " : " + myData.gangajali1;
            document.getElementById('smsevanam').innerText += " : " + myData.sevanam;
            document.getElementById('smyes').innerText += " : " + myData.yes;
            document.getElementById('smsharirik').innerText += " : " + myData.sharirik;
            document.getElementById('smbhawdhik').innerText += " : " + myData.bhawdhik;

        }
    }).catch((error)=>{
      alert("Error Occured!..   Details:" + error)
    })
}


getDetailsSamyuktha();







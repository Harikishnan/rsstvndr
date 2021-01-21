  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyC9GD-CbEpZZV6lDcN1hKxScLjPx62fzao",
    authDomain: "rss-tvndr-website.firebaseapp.com",
    projectId: "rss-tvndr-website",
    storageBucket: "rss-tvndr-website.appspot.com",
    messagingSenderId: "1083164061796",
    appId: "1:1083164061796:web:4f0e46c9d365323556ef71",
    measurementId: "G-7WGKWDVT4E"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  


document.getElementById('formReg').addEventListener('submit',function(e){
e.preventDefault();
  
  
var button = document.getElementById("sbn");

button.innerHTML='Please Wait';

// var user2 = document.getElementById('email');
// var pass = document.getElementById('password');
var phone = document.getElementById('ph')
var userName = document.getElementById('fname');
var age = document.getElementById('age');
var blood = document.getElementById('bld')
var dataemail =document.getElementById('dataemail');
var role =document.getElementById('role');
var shaka =document.getElementById('shaka');
firebase.auth().signInAnonymously().then(function(response){
  firebase.database().ref('users').push({
    userName: userName.value,
    age:age.value,
    blood:blood.value,
    role:role.value,
    shaka:shaka.value,
    userId:firebase.auth().currentUser.uid,
    phone : phone.value})
    // email:firebase.auth().currentUser.email})
    success();

    firebase.auth().signOut();
    userName.value='';
    age.value='';
    blood.value='';
    phone.value='';
    role.value='';
    shaka.value='';
  
}).catch(function(error){
  var errorCode= error.code;
  var errorMessage=error.message;
  console.log(errorCode);
  console.log(errorMessage);
  alert(errorMessage);
});


});


firebase.database().ref('users').on('value' , (data)=>{
  let users=data.val();
  document.getElementById('tableUsers').innerHTML='';
  for (const user in users){
    document.getElementById('tableUsers').innerHTML+=`
    <tr>
    <td><h5>${users[user].userName}</h5></td>
    <td><h5>${users[user].age}</h5></td>
    <td><h5>${users[user].blood}</h5></td>
    <td><h5>${users[user].role}</h5></td>
    </tr>
    `;
     document.getElementById('loading').style.display="none";
  }
  //username=${users[user].userId}




})

function success(){
  window.location.href="success.html"
}










// { <tr>
// <td>${users[user].userId}</td>
// <td>${users[user].userName}</td>
// <td id="dataemail">${users[user].email}</td>
// <td>${users[user].role}</td>
// </tr> }

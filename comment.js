  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBijS5Jqo857jo7VDEE73ZzfwqiXgY0C6I",
    authDomain: "comment-sections-of-websites.firebaseapp.com",
    databaseURL: "https://comment-sections-of-websites-default-rtdb.firebaseio.com",
    projectId: "comment-sections-of-websites",
    storageBucket: "comment-sections-of-websites.appspot.com",
    messagingSenderId: "351600926676",
    appId: "1:351600926676:web:c26dfeb92aa4a48da4c041",
    measurementId: "G-SL8CPNHWKT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

document.getElementById('formReg').addEventListener('submit',function(e){
e.preventDefault();


var button = document.getElementById("sbn");

button.innerHTML='Please Wait';




// var user2 = document.getElementById('email');
// var pass = document.getElementById('password');
var phone = document.getElementById('ph');
var userName = document.getElementById('fname');
var comment = document.getElementById('comment');
var reply = document.getElementById('reply');
// var age = document.getElementById('age');
// var blood = document.getElementById('bld');
var dataemail =document.getElementById('dataemail');
firebase.auth().signInAnonymously().then(function(response){
  firebase.database().ref('rsstvndrcom').push({
    userName: userName.value,
    comment:comment.value,
    reply:reply.value,
    userId:firebase.auth().currentUser.uid,
    phone : phone.value});
    // email:firebase.auth().currentUser.email})
    success();

    firebase.auth().signOut();
    userName.value='';
    phone.value='';
    comment.value='';
    reply.value='';
    
  
}).catch(function(error){
  var errorCode= error.code;
  var errorMessage=error.message;
  console.log(errorCode);
  console.log(errorMessage);
  alert(errorMessage);
});


});


firebase.database().ref('rsstvndrcom').on('value' , (data)=>{
  let users=data.val();
  var userName1 = document.getElementById('fname');
  document.getElementById('screen').innerHTML='';
  for (const user in users){
      document.getElementById('screen').innerHTML+=`
      <p style="font-size:12px; font-weight:200;">Username: ${users[user].userName}</p>
      <p style="font-size:20px; font-weight:200;">Question: ${users[user].comment}</p>
      <p  style="font-size:15px; font-weight:200;">Reply: ${users[user].reply}</p>
      <hr>
      `
    // document.getElementById('tableUsers').innerHTML+=`
    // <tr>
    // <td><h5 class="text12">${users[user].userName}</h5></td>
    // <td><h5 class="text13">${users[user].age}</h5></td>
    // <td><h5 class="text14">${users[user].blood}</h5></td>
    // </tr>
    // `;
    document.getElementById('loading').style.display="none";

    
  }
  //username=${users[user].userId}



})

function success(){
  window.location.reload();
}










{/* <tr>
 <td>${users[user].userId}</td>
<td>${users[user].userName}</td>
<td id="dataemail">${users[user].email}</td>
<td>${users[user].role}</td>
</tr> 
WithEmailAndPassword  */}

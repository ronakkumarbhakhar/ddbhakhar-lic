
'use strict'

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js'
// Add Firebase products that you want to use
import { getAuth,onAuthStateChanged,signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js'



const firebaseConfig = {
apiKey: "AIzaSyBzDRHsIpuPeayzcT3Anrr8WtCCpcBudws",
authDomain: "deendayal-bhakhar.firebaseapp.com",
projectId: "deendayal-bhakhar",
storageBucket: "deendayal-bhakhar.appspot.com",
messagingSenderId: "794996716332",
appId: "1:794996716332:web:64e056169d9085eb3f7289",
measurementId: "G-PF5T84KXQZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


let submit=document.querySelector("#Submit");

onAuthStateChanged(auth, (user) => {
  if (user) {
        const uid = user.uid;
        console.log(uid);
        window.location.assign("../admin/index.html");
    } else {
        console.log("not logged in")
  }
});

submit.addEventListener('click',(e)=>{
    let email=document.querySelector("#Email");
    let password=document.querySelector("#Password");
    let loader=document.querySelector('.loader_container');
    let modal=document.querySelector('.modal_container');
    loader.classList.add('loader_container-visible');
    if(email.value!="" && password.value!=""){
        signInWithEmailAndPassword(auth, email.value, password.value)
            .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            window.location.assign("../admin/index.html");
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            modal.children[0].innerHTML=`LOG IN FAILED`;
            email.value=" ";
            password.value="";
            loader.classList.remove('loader_container-visible');
            modal.classList.add('modal_container-visible');
            setTimeout(()=>{
                modal.classList.remove('modal_container-visible');
            },1500)
        });
    }
    else{
        loader.classList.remove('loader_container-visible');
    }
});
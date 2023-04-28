
'use strict'

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js'

// If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.20.0/firebase-analytics.js'

// Add Firebase products that you want to use
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js'
import { getFirestore ,doc, addDoc,setDoc, collection } from 'https://www.gstatic.com/firebasejs/9.20.0/firebase-firestore.js'


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
const db = getFirestore(app);



//------------------------------ fetch and delete logic-------------------------------//
// let loader=document.querySelector('.loader_container');
// let modal=document.querySelector('.modal_container');
// let form =document.getElementById('form')
// let mobile_input=document.querySelector('#mobile');
// mobile_input.value="+91";
// mobile_input=mobile_input.value;

// let submit= document.getElementById('submit');
// submit.addEventListener('click',async (e)=>{
//     console.log('submited');
//     let first_name=document.querySelector('#first_name').value;
//     let last_name=document.querySelector('#last_name').value;
//     let mobile=document.querySelector('#mobile').value;
//     let mobile_input=document.querySelector('#mobile');
//     const formData = new FormData(form);
//     let no_len=true;
//     console.log(mobile.length)
//     if(mobile.length!=13 ){
//         no_len=false;
//         if(mobile.length==10 && isFinite(Number(mobile))){
//             console.log(isFinite(Number(mobile)))
//             if(first_name==" " || last_name==" " || mobile=="+91" ){
//                 console.log("poor job validation 1 0")
//             }
//             else if(mobile[0]=='+' && mobile[1]=='9' && mobile[2]=='1')
//             {
//                 mobile_input.setCustomValidity("enter valid mobile number");
//                 console.log("poor job validation 1 1");
//             }
//             else{
//                 mobile_input.value=`+91${mobile}`;
//                 console.log("good job 1")
//                 loader.classList.add('loader_container-visible');
//             try {
//                 const docRef = await setDoc(doc(collection(db, "users"),`${formData.get('first_name')}-${formData.get('last_name')}-${formData.get('mobile')}`), {
//                     mobile:formData.get('mobile'),
//                     first_name:formData.get('first_name'),
//                     last_name:formData.get('last_name'),
//                     email:formData.get('email'),
//                     choice:formData.get('choice'),
//                 }).then(function(d){
//                     loader.classList.remove('loader_container-visible');
//                     modal.children[0].innerHTML="Registration successful";
//                     modal.classList.add('modal_container-visible');
//                     setTimeout(()=>{
//                         modal.classList.remove('modal_container-visible');
//                     },2500)
//                     console.log("docref:",d);
//                 });
//                 console.log("registration successfull");
//             }
//             catch (error) {
//                 modal.children[0].innerHTML="Registration failed";
//                 modal.children[0].style.backgroundColor='tomato';
//                 modal.classList.add('modal_container-visible');
//                 setTimeout(()=>{
//                     modal.classList.remove('modal_container-visible');
//                 },2500)
//                 console.error("Error adding document: ", error);
//             }
//             }
//         }
//         else{
//             mobile_input.setCustomValidity("enter valid mobile number");
//             console.log("poor job validation 1 2");
//         }
//     }
//     else if(first_name==" " || last_name==" " || mobile=="+91" ){
//         console.log("poor job validation 2 0")
//     }
//     else{
//         console.log("good job 2")
//         if(mobile[0]=='+' && mobile[1]=='9' && mobile[2]=='1')
//         {
//             loader.classList.add('loader_container-visible');
//             try {
//                 const docRef = await setDoc(doc(collection(db, "users"),`${formData.get('first_name')}-${formData.get('last_name')}-${formData.get('mobile')}`), {
//                     mobile:formData.get('mobile'),
//                     first_name:formData.get('first_name'),
//                     last_name:formData.get('last_name'),
//                     email:formData.get('email'),
//                     choice:formData.get('choice'),

                
//                 }).then(function(doc){
//                     loader.classList.remove('loader_container-visible');
//                     modal.children[0].innerHTML="Registration successful";
//                     modal.classList.add('modal_container-visible');
//                     setTimeout(()=>{
//                         modal.classList.remove('modal_container-visible');
//                     },3000)
//                     console.log("docref:",doc);
//                 });
//                 console.log("Document written with ID: ", docRef);
//             }
//             catch (error) {
//                 modal.children[0].innerHTML="Registration failed";
//                 modal.children[0].style.backgroundColor='tomato';
//                 modal.classList.add('modal_container-visible');
//                 setTimeout(()=>{
//                     modal.classList.remove('modal_container-visible');
//                 },2500)
//                 console.error("Error adding document: ", error);
//             }
//         }
//         else{
//             console.log(" poor job validation 3 0")
//         }
//     }
    
// });

// --------------------------------btn and table container manipulation logic-----------------------//

let policy_btn=document.querySelector("#policy_btn");
console.log(policy_btn)
let agent_btn=document.querySelector("#agent_btn");
console.log(agent_btn)
let policy_container=document.querySelector(".policy_container");
console.log(policy_container)
let agent_container=document.querySelector(".agent_container");
console.log(agent_container)

policy_btn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(!policy_btn.classList.contains('btn_active')){
        policy_btn.classList.add('btn_active');
    }
    if(agent_btn.classList.contains('btn_active')){
        agent_btn.classList.remove('btn_active');
    }
    if(!policy_container.classList.contains('container_visible')){
        policy_container.classList.add('container_visible');
    }
    if(agent_container.classList.contains('container_visible')){
        agent_container.classList.remove('container_visible');
    }
});

agent_btn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(!agent_btn.classList.contains('btn_active')){
        agent_btn.classList.add('btn_active');
    }
    if(policy_btn.classList.contains('btn_active')){
        policy_btn.classList.remove('btn_active');
    }
    if(!agent_container.classList.contains('container_visible')){
        agent_container.classList.add('container_visible');
    }
    if(policy_container.classList.contains('container_visible')){
        policy_container.classList.remove('container_visible');
    }
});
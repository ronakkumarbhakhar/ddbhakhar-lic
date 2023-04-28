
'use strict'

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js'

// If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.20.0/firebase-analytics.js'

// Add Firebase products that you want to use
import { getAuth,onAuthStateChanged,signOut } from 'https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js'
import { getFirestore ,doc, addDoc,setDoc,getDocs, collection ,query, where} from 'https://www.gstatic.com/firebasejs/9.20.0/firebase-firestore.js';


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

const auth = getAuth(app);


let auth_btn1=document.querySelector("#auth_btn1");
let auth_btn2=document.querySelector("#auth_btn2");
let auth_parent1=auth_btn1.parentElement;
let auth_parent2=auth_btn2.parentElement;

let agent_row_content="";
let policy_row_content="";

onAuthStateChanged(auth, async (user) => {
    if (user) {
    
        const uid = user;
        console.log(user.uid)
        
        let loader=document.querySelector('.loader_container');
        let modal=document.querySelector('.modal_container');

        //------------------------------ fetch and delete logic-------------------------------//
        let ref=collection(db,"users");
        const agentQuery = query(ref, where("choice", "==", "Agent"));
        const agentSnapshot = await getDocs(agentQuery);
        await agentSnapshot.forEach((doc) => {
            agent_row_content+=`<tr class="row" id="">
            <td class="col name_data">${doc.data().first_name} ${doc.data().last_name}</td>
            <td class="col"><a class="link_data" href="tel:${doc.data().mobile}">${doc.data().mobile}</a></td>
            <td class="col"><a class="link_data" href="mailto:${doc.data().email}">${doc.data().email}</a></td>
            </tr>`
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
        let agent_table=document.querySelector('.agent_container');
        agent_table.innerHTML+=`<table class="table policy_table">
        <tr class="row heading_row">
          <th class="column_heading">Agent Name</th>
          <th class="column_heading">Contact</th>
          <th class="column_heading">Email</th>
        </tr>
        ${agent_row_content}
        </table>`;
        
        const policyQuery = query(ref, where("choice", "==", "Policy"));
        const policySnapshot = await getDocs(policyQuery);
        await policySnapshot.forEach((doc) => {
            policy_row_content+=`<tr class="row" id="">
            <td class="col name_data">${doc.data().first_name} ${doc.data().last_name}</td>
            <td class="col"><a class="link_data" href="tel:${doc.data().mobile}">${doc.data().mobile}</a></td>
            <td class="col"><a class="link_data" href="mailto:${doc.data().email}">${doc.data().email}</a></td>
            </tr>`
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
        let policy_table=document.querySelector('.policy_container');
        policy_table.innerHTML+=`<table class="table policy_table">
        <tr class="row heading_row">
          <th class="column_heading">Policy Buyer Name</th>
          <th class="column_heading">Contact</th>
          <th class="column_heading">Email</th>
        </tr>
        ${policy_row_content}
        </table>`;
        loader.classList.remove("loader_container-visible"); 
        // ------------------------------------logic end--------------------------------------//

        auth_btn2.addEventListener("click",async (e)=>{
            signOut(auth).then(() => {
                console.log("Sign-out successful.");
              }).catch((error) => {
                console.log("Sign-out failed error",error);
              });
        });
        auth_btn1.addEventListener("click",async (e)=>{
            signOut(auth).then(() => {
                console.log("Sign-out successful.");
              }).catch((error) => {
                console.log("Sign-out failed error",error);
              });
        });
    
        // --------------------------------btn and table container manipulation logic-----------------------//

        let policy_btn=document.querySelector("#policy_btn");
        let agent_btn=document.querySelector("#agent_btn");
        let policy_container=document.querySelector(".policy_container");
        let agent_container=document.querySelector(".agent_container");

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
    } else {
        auth_parent1.removeChild(auth_btn1);
        auth_parent2.removeChild(auth_btn2);
        window.location.assign("../authentication/index.html");
        console.log("not logged in")
  }
});
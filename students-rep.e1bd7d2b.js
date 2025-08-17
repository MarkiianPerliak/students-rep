const e=document.getElementById("add-student-form");document.querySelector(".submit-btn");const t=document.getElementById("get-students-btn");document.querySelector(".modal2");const l=document.querySelector(".backdrop2"),n=document.querySelector(".close-modal2"),d=document.querySelector(".datasend2"),a=document.querySelector(".modal-form2");t.addEventListener("click",e=>{fetch("http://localhost:3000/students").then(e=>e.json()).then(e=>{let t=document.querySelector(".thbody");e.forEach(e=>{let l="";l=!0===e.isEnrolled?"Online":"Offline";let n=`
    <tr>
      <td class="id">${e.id}</td>
      <td>${e.name}</td>
      <td>${e.age}</td>
      <td>${e.course}</td>
      <td>${e.skills}</td>
      <td>${e.email}</td>
      <td>${l}</td>
      <td><button class="delete">Delete</button><button class="update">Update</button></td>
    </tr>        
        `;t.insertAdjacentHTML("afterbegin",n)});let n=document.querySelectorAll(".delete"),d=document.querySelectorAll(".update");n.forEach(e=>{e.addEventListener("click",t=>{var l;l=e.parentElement.parentElement.querySelector(".id").textContent,fetch(`http://localhost:3000/students/${l}`,{method:"DELETE"})})}),d.forEach(e=>{e.addEventListener("click",t=>{l.classList.remove("hidden"),a.addEventListener("submit",t=>{var l;t.preventDefault();let n=e.parentElement.parentElement.querySelector(".id").textContent,d=t.target.elements.name.value,a=t.target.elements.age.value,s=t.target.elements.course.value,r=t.target.elements.skills.value.split(",").map(e=>e.trim());console.log(r);let o=t.target.elements.email.value,c=t.target.elements.enrolled,m="";m=!!c.checked,l={name:`${d}`,age:Number(a),course:`${s}`,skills:r,email:`${o}`,isEnrolled:m},fetch(`http://localhost:3000/students/${n}`,{method:"PATCH",body:JSON.stringify(l),headers:{"Content-Type":"application/json; charset=UTF-8"}})})})})})}),n.addEventListener("click",e=>{l.classList.add("hidden")}),d.addEventListener("click",e=>{l.classList.add("hidden")}),e.addEventListener("submit",e=>{e.preventDefault();let t=e.target.elements.name.value,l=e.target.elements.age.value,n=e.target.elements.course.value,d=e.target.elements.skills.value.split(",").map(e=>e.trim()),a=e.target.elements.email.value,s=e.target.elements.enrolled,r="";r=!!s.checked,fetch("http://localhost:3000/students",{method:"POST",body:JSON.stringify({name:`${t}`,age:Number(l),course:`${n}`,skills:d,email:`${a}`,isEnrolled:r}),headers:{"Content-Type":"application/json; charset=UTF-8"}})});
//# sourceMappingURL=students-rep.e1bd7d2b.js.map

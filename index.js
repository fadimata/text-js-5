// -console.log(datas);
// Structure de datas:
// - fullname: string
// - profil: string
// - email : string
// - description : string
// - socials : [Social, Social, ...]
// - works : [Work, Work, ...]
// - experience : [Experience, Experience, ...]

// Structure de Social:
// name : string
// url : string
// link : string

// Structure de Work:
// name: string,
// url: string,
// technology: [Techo, Techno, ...],
// preview: string

// Structure de Experience:
// name: string,
// link: string,
// technology: [Techo, Techno, ...]

// 1.
const title1 = (document.getElementById("fullName").textContent ="Hey, I'm " + datas.fullname);
// 2.
const title2 = (document.getElementById("profil").textContent = datas.profil);
// 3.
const paragraphe = (document.getElementById("description").textContent = datas.description);
// 4.
const image = (document.querySelector(".img-fluid").src = datas.picture);
// 5.
const elementSocial = document.getElementsByClassName("socials");
for (let i = 0; i < elementSocial.length; i++) {
  elementSocial[i].innerHTML = "";
  for (let f = 0; f < datas.socials.length; f++) {
    let objet = datas.socials[f];
    elementSocial[i].innerHTML += `<li><a href=${objet.url} ><img src=${objet.link}  alt=${objet.name} ></a></li>`;
  }
}
// 6.
/* 
const elementWorks = document.querySelector('#works');
for (let i = 0; i < datas.works.length; i++) { 
   for (let f = 0; f < datas.works[i].technology.length; f++) {
    const technology = datas.works[i].technology;
    console.log(technology);
    elementWorks.innerHTML += `
    <div class="col-xl-4 col-lg-4 col-sm-6 col-12 my-2">
   <div class="card">
     <img class="card-img-top" src=${datas.works[i].preview} alt=${datas.works[i].name}>
     <div class="card-body w-100 px-0">
       <h2 class="card-title mt-0 mb-4 text-center">${datas.works[i].name}</h2>
       <ul class="ctlist list-unstyled w-100 d-flex justify-content-center flex-wrap ">
            <li>
             <span class="card-link">${technology}</span>
           </li>
       </ul>
       <div class="row w-100">
         <div class="d-flex justify-content-center">
           <a href=${datas.works[i].url} class="text-decoration-none px-4 py-3 mt-2 rounded">See Project</a>
         </div>
       </div>
     </div>
   </div>
 </div>
 `
}
}
 */

const elementWorks = document.querySelector("#works");

for (let i = 0; i < datas.works.length; i++) {
  const element = datas.works[i];

  const div1 = document.createElement("div");
  div1.classList = "col-xl-4 col-lg-4 col-sm-6 col-12 my-2";

  const card = document.createElement("div");
  card.classList = "card";
  const image = document.createElement("img");
  image.src = element.preview;
  image.alt = element.name
  image.classList = "card-img-top";

  const cardBody = document.createElement("div");
  cardBody.classList = "card-body w-100 px-0";

  const h2 = document.createElement("h2");
  h2.classList = "card-title mt-0 mb-4 text-center";
  h2.textContent = element.name;

  const ul = document.createElement("ul");
  ul.classList = "list-unstyled w-100 d-flex justify-content-center flex-wrap ";

  div1.appendChild(card);
  card.appendChild(image);
  card.appendChild(cardBody);
  cardBody.appendChild(h2);
  cardBody.appendChild(ul);
  elementWorks.appendChild(div1);
  for (let f = 0; f < element.technology.length; f++) {
    const C = element.technology[f];

    const li = document.createElement("li");
    const spane = document.createElement("span");
    spane.classList = "card-link";
    spane.textContent = C;

    ul.appendChild(li);
    li.appendChild(spane);
  }

  const divRow = document.createElement("div");
  const divButton = document.createElement("div");
  const lien = document.createElement("a");
  lien.href = element.url;
  lien.classList = "text-decoration-none px-4 py-3 mt-2 rounded";
  lien.textContent = "See project";
  divButton.appendChild(lien);
  divRow.appendChild(divButton);
  divButton.classList = "d-flex justify-content-center";
  divRow.classList = "row w-100";

  const divEnd = document.createElement("div");
  divEnd.classList = "d-flex justify-content-center";
  cardBody.appendChild(divRow);
  divRow.append(divEnd);
}

// 7.
const elementPossèdant = document.querySelector("#experiences");
for (let i = 0; i < datas.experiences.length; i++) {
  const experience = datas.experiences[i];
  const div0 = document.createElement("div");
  div0.classList = "col-xl-4 col-lg-4 col-sm-6 col-12 my-2";
  const divCard = document.createElement("div");
  divCard.classList = "card h-100";
  const img = document.createElement("img");
  img.src = experience.link;
  img.classList = "card-img-top";
  const divCardBody = document.createElement("div");
  divCardBody.classList = "card-body w-100 px-0";
  const h2 = document.createElement("h2")
  h2.textContent = experience.name;
  h2.classList = "card-title mt-0 mb-4 text-center";
  divCardBody.appendChild(h2);
  const ul = document.createElement("ul");
  ul.classList = "list-unstyled w-100 d-flex justify-content-center flex-wrap";

  for (let j = 0; j < experience.technology.length; j++) {
    const b = experience.technology[j];
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.classList = "card-link";
    li.appendChild(span);
    ul.appendChild(li);
    span.textContent = b ;
  }

  div0.appendChild(divCard);
  divCard.appendChild(img);
  divCardBody.appendChild(ul);
  divCard.appendChild(divCardBody);
 

  elementPossèdant.appendChild(div0)
}

/* const elementPossèdant = document.querySelector("#experiences");
for (let m = 0; m < 2; m++) {
  elementPossèdant.innerHTML += `
  <div class="col-xl-4 col-lg-4 col-sm-6 col-12 my-2">
   <div class="card h-100">
     <img class="card-img-top" src=${datas.experiences[m].link} alt= ${datas.experiences[m].name}>
     <div class="card-body w-100 px-0">
       <h2 class="card-title mt-0 mb-4 text-center">${datas.experiences[m].name} </h2>
       <ul class="list-unstyled w-100 d-flex justify-content-center flex-wrap">
         
           <li>
             <span class="card-link">${datas.experiences[m].technology[0]} </span>
             <span class="card-link">${datas.experiences[m].technology[1]} </span>
             <span class="card-link">${datas.experiences[m].technology[2]} </span>
             <span class="card-link">${datas.experiences[m].technology[3]}  </span>
           </li>
         
       </ul>
     </div>
   </div>
 </div>
    `;
}
for (let m = 2; m < 3; m++) {
  elementPossèdant.innerHTML += `
    <div class="col-xl-4 col-lg-4 col-sm-6 col-12 my-2">
     <div class="card h-100">
       <img class="card-img-top" src=${datas.experiences[m].link} alt= ${datas.experiences[m].name}>
       <div class="card-body w-100 px-0">
         <h2 class="card-title mt-0 mb-4 text-center">${datas.experiences[m].name} </h2>
         <ul class="list-unstyled w-100 d-flex justify-content-center flex-wrap">
           
             <li>
               <span class="card-link">${datas.experiences[m].technology[0]} </span>
               <span class="card-link">${datas.experiences[m].technology[1]} </span>
               <span class="card-link">${datas.experiences[m].technology[2]} </span>
               <span class="card-link">${datas.experiences[m].technology[3]}  </span>
               <span class="card-link">${datas.experiences[m].technology[4]}  </span>
             </li>
           
         </ul>
       </div>
     </div>
   </div>
      `;
}  */

// 8.
const email = document.getElementById("mail");
email.textContent = datas.email;








const tab = {
  c: [1, 2, 3, 4],
  a: [
    {
      5: "abc",
      6: "def",
      7: "ghi",
      8: ["a", "b", "c", "d", "e", "f"],
      9: {
        fadi: ["ab", "cd", "ef", "gh", "ij"],
      },
    },
  ],
};

//for (let i = 0; i < tab.c.length; i++) {
//console.log(tab.c[i]);
//}
/* console.log(tab.c[0]);
console.log(tab.c[1]);
console.log(tab.c[2]);
console.log(tab.c[3]);
 */

/* for (let f = 0; f < tab.a.length; f++) {
  console.log(tab.a[f]['5']);
  console.log(tab.a[f][6]);
  console.log(tab.a[f][7]);
}
for (let f = 0; f < tab.a.length; f++) {
  for (let i = 0; i < tab.a[0][9].fadi.length; i++) {
   
    console.log(tab.a[f][9].fadi[i]);
    
  }
 
} */
// console.log(tab.a[0][5]);
// console.log(tab.a[0][6]);
// console.log(tab.a[0][7]);

/* for (let j = 0; j < tab.a[0][8].length; j++) {
  //console.log(tab.a[0][8].length);
  console.log(tab.a[0][8][j]);
  
}
// console.log(tab.a[0][8][0]);
// console.log(tab.a[0][8][1]);
// console.log(tab.a[0][8][2]);
// console.log(tab.a[0][8][3]);
// console.log(tab.a[0][8][4]);
// console.log(tab.a[0][8][5]);

for (let m = 0; m < tab.a[0][9].fadi.length; m++) {
  console.log(tab.a[0][9].fadi[m]);
  
} */
/* console.log(tab.a[0][9].fadi[0]);
console.log(tab.a[0][9].fadi[1]);
console.log(tab.a[0][9].fadi[2]);
console.log(tab.a[0][9].fadi[3]);
console.log(tab.a[0][9].fadi[4]); */

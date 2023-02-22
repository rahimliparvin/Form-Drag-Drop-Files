"use strict";

// let formElem = document.querySelector("form");

// //console.log(formElem);

// formElem.addEventListener("submit", function (e) {
//     // console.log("Salam Elekber");
//     e.preventDefault();
//     //document.querySelector("h1").innerText="Hello";

//     if (document.getElementById("exampleInputEmail1").value != "") {
//         document.querySelector("span").classList.add("d-none");
//         writeWord(document.getElementById("exampleInputEmail1").value);

//     } else {
//         document.querySelector("span").classList.remove("d-none");
//     }
// });

// function writeWord(word){
//     document.querySelector("h1").innerText = word
// };


// document.querySelector("a").addEventListener("click",function(e){
//     e.preventDefault();
//     console.log("clicked a");
// });


// let dragElems = document.querySelectorAll(".item");
// let dropElem = document.getElementById("drop-elem");

// dragElems.forEach(element => element.ondragstart = (e) => {
//         e.dataTransfer.setData("id", element.getAttribute("id"));
// });

// dropElem.ondragover = (e) => e.preventDefault();

// dropElem.ondrop = (e) => {
//     dropElem.append(document.getElementById(e.dataTransfer.getData("id")))
// }

// console.log(dragElem);

// dragElem.ondragstart = (e) => {
//    e.dataTransfer.setData("id",dragElem.getAttribute("id"));
// }

// dragElem.ondrag = () => {
//     console.log("dragging");
// }

// dragElem.ondragend = () => {
//     console.log("dragend");
// }



//File upload


//let uploadElem = document.querySelector(".upload");

let uploadIcon = document.querySelector("i");

let table = document.querySelector(".table");


uploadIcon.addEventListener("click", function () {

    this.nextElementSibling.click();
})


//console.log(uploadElem);

uploadIcon.nextElementSibling.addEventListener("change", function (e) {

    for (const file of e.target.files) {
        // console.log(file);

        let reader = new FileReader();

        reader.onloadend = (event) => {
            let filebase64 = event.currentTarget.result;

            table.classList.remove("d-none");
            table.innerHTML += `  <tr>
              <th scope="row">${file.name}</th>
              <td>${(file.size / 1024).toFixed(0)}Kb</td>
              <td>
              <div class="img">
              <img src="${filebase64}" alt="">
              </div>
              </td>
              </tr>`

            //document.querySelector("img").setAttribute("src", filebase64);

        }

        reader.readAsDataURL(file);
    }

});



let file;

let dropArea = document.querySelector(".drag-upload-area");

dropArea.addEventListener("dragover", function (event) {
    event.preventDefault();
    dropArea.classList.add("active");
})

dropArea.addEventListener("dragleave", function () {
    dropArea.classList.remove("active");
})

dropArea.addEventListener("drop", function (event) {
    event.preventDefault();
    file = event.dataTransfer.files[0];
    let fileType = file.type;

    let validExtensions = ["image/jpeg", "image/jpg", "image/png"];
    if (validExtensions.includes(fileType)) {
        let reader = new FileReader();

        reader.onloadend = (event) => {
            let filebase64 = event.currentTarget.result;
            table.classList.remove("d-none");
            table.innerHTML += `  <tr>
              <th scope="row">${file.name}</th>
              <td>${(file.size / 1024).toFixed(0)}Kb</td>
              <td>
              <div class="img">
              <img src="${filebase64}" alt="">
              </div>
              </td>
              </tr>`
        }
        reader.readAsDataURL(file);
    } else {
        alert("This is not an Image File");
        dropArea.classList.remove("active");
    }
})

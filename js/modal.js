alert(
    "Test"
)

// Modal 1

const openButton1 = document.querySelector("#openModal1");

const myModal = document.querySelector("#myModal1");

const modalContent1 = document.querySelector("#modalContent1");

const backCover1 = document.querySelector("#backCover1")

const modalHeader = document.querySelector("#modalTitle1");

const modalText1 = document.querySelector("#modalText1");

const closeButton = document.querySelector("#close1");

const greenEarthBtn1 = document.querySelector("#greenEarthBtn1");

const frontImage1 = document.querySelector("#frontImage1");



openButton.addEventListener("click", () => {
  myModal.style.display = "block";
  // modalText1.style.display = "block";
  frontImage1.style.display = "block";
  closeButton.style.display = "block";
});

greenEarthBtn1.addEventListener("click", ()=> {
  backCover1.style.display = "Block"
  frontImage1.style.display = "none"
  greenEarthBtn1.style.display = "none"
});

closeButton.addEventListener("click", () => {
  myModal.style.display = "none";
  modalText1.style.display = "none";
  modalHeader.style.display = "none";
  closeButton.style.display = "none";
});

// Modal 2 

const openModal2 = document.querySelector("#openModal2");

const myModal2 = document.querySelector("#myModal2");

const modalText2 = document.querySelector("#modalText2");

const closeButton2 = document.querySelector("#close2");

const greenEarthBtn2 = document.querySelector("#greenEarthBtn2");

const frontImage2 = document.querySelector("#frontImage2")

const backCover2 = document.querySelector("#backCover2")

openModal2.addEventListener("click", () => {
  myModal2.style.display = "block";
  modalText2.style.display = "block";
  modalHeader.style.display = "block";
  closeButton2.style.display = "block";
});


closeButton2.addEventListener("click", () => {
  myModal2.style.display = "none";
  modalText2.style.display = "none";
  modalHeader.style.display = "none";
  closeButton2.style.display = "none";
});

greenEarthBtn2.addEventListener("click", ()=> {
  backCover2.style.display = "Block"
  frontImage2.style.display = "none"
  greenEarthBtn2.style.display = "none"
})












  





 




























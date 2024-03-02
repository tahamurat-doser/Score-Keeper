let scor1 = 0;
let scor2 = 0;
let span1 = document.querySelector(".spn-p-1");
let span2 = document.querySelector(".spn-p-2");
let input = document.querySelector(".score-input");
const kazanan = document.querySelector(".sec-score-1-h1 h2")
//   Birinci score
document.querySelector(".ft-div-1").disabled = true
document.querySelector(".ft-div-2").disabled = true
document.querySelector(".ft-div-3").disabled = true
function enableBtons() {
  document.querySelector('.ft-div-1').removeAttribute('disabled')
  document.querySelector('.ft-div-2').removeAttribute('disabled')
  document.querySelector('.ft-div-3').removeAttribute('disabled')
  }
input.addEventListener('change', enableBtons)
if (scor1 <= input.value && scor2 <= input.value) {
  document.querySelector(".ft-div-1").onclick = () => {
    scor1 = scor1 + 1;
    span1.textContent = scor1;
    console.log(input.value);
    if (scor1 == input.value) {
      span1.style.color = "green";
      span2.style.color = "red";
      document.querySelector(".ft-div-1").disabled = true
      document.querySelector(".ft-div-2").disabled = true
      kazanan.textContent = `${document.querySelector('.harwey').textContent} hocam oyunu siz kazandiniz!`
    }
    }
  document.querySelector(".ft-div-2").onclick = () => {
    scor2 = scor2 + 1;
    span2.textContent = scor2;
    if (scor2 == input.value) {
      span2.style.color = "green";
      span1.style.color = "red";
      document.querySelector(".ft-div-1").disabled = true
      document.querySelector(".ft-div-2").disabled = true
      kazanan.textContent = `${document.querySelector('.felix').textContent} hocam oyunu siz kazandiniz!`
    }
  };
};
document.querySelector('.ft-div-3').onclick = () => {
  document.querySelector(".ft-div-1").disabled = true
  document.querySelector(".ft-div-2").disabled = true
  span1.textContent = 0
  span2.textContent = 0
  input.value = ""
  span2.style.color = "black";
  span1.style.color = "black";
  kazanan.textContent = "SCORES"
}
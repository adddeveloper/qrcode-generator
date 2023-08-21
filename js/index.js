new QRCode(document.getElementById('card__1'), "https://scanswiftly.netlify.app");

function newentry(){
  if(document.getElementById("url_text").value != ""){
    document.getElementById('card__1').innerHTML = "";
    new QRCode(document.getElementById('card__1'), document.getElementById("url_text").value);
  } else {
    new QRCode(document.getElementById('card__1'), "https://scanswiftly.netlify.app");
  }
}
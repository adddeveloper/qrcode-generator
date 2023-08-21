function downloadImageAsFormat(src, format) {
  var link = document.createElement('a');
  link.href = src;
  link.download = 'image.' + format;
  link.click();
}

function createdownloader(src){
  // Create the parent div element
  var divElement = document.createElement('div');
  divElement.className = 'my-1';

  // Create the PNG download button
  var pngButton = document.createElement('button');
  pngButton.style.backgroundColor = 'white';
  pngButton.style.border = '1px solid black';
  pngButton.style.borderRadius = '0 !important';
  pngButton.classList.add("mx-1");
  pngButton.textContent = 'Download as PNG';
  pngButton.addEventListener("click", ()=>{
    downloadImageAsFormat(document.getElementById('card__1').children[1].src, "png")
  });

  // Create the JPG download button
  var jpgButton = document.createElement('button');
  jpgButton.style.backgroundColor = 'white';
  jpgButton.style.border = '1px solid black';
  jpgButton.style.borderRadius = '0 !important';
  jpgButton.textContent = 'Download as JPG';
  jpgButton.addEventListener("click", ()=>{
    downloadImageAsFormat(document.getElementById('card__1').children[1].src, "jpg")
  });

  // Append buttons to the parent div
  divElement.appendChild(pngButton);
  divElement.appendChild(jpgButton);

  src.appendChild(divElement)
}
document.getElementById('card__1').innerHTML = "";
new QRCode(document.getElementById('card__1'), "https://scanswiftly.netlify.app");
createdownloader(document.getElementById('card__1'))

function newentry(){
  if(document.getElementById("url_text").value != ""){
    document.getElementById('card__1').innerHTML = "";
    new QRCode(document.getElementById('card__1'), document.getElementById("url_text").value);
    createdownloader(document.getElementById('card__1'))
  } else {
    document.getElementById('card__1').innerHTML = "";
    new QRCode(document.getElementById('card__1'), "https://scanswiftly.netlify.app");
    createdownloader(document.getElementById('card__1'))
  }
}


const btnImg = document.getElementById("btnImg");
const rainbowImg = document.querySelector("img")

btnImg.addEventListener("click", function(){

    rainbowImg.style.width = '75%';

    const br = document.createElement("br");

    document.body.insertBefore(br, rainbowImg);

    btnImg.style.display = 'none';

})
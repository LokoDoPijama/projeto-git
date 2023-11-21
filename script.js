const btnImg = document.getElementById("btnImg");
const btnJungle = document.getElementById("btnJungle");
const rainbowImg = document.querySelector("img");

btnImg.addEventListener("click", function(){

    rainbowImg.style.width = '75%';

    const br = document.createElement("br");

    document.body.insertBefore(br, rainbowImg);

    btnImg.style.display = 'none';

})

btnJungle.addEventListener("click", function(){

    const btnClone = btnJungle.cloneNode(1);

    document.body.appendChild(btnClone);

})
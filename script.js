const btnImg = document.getElementById("btnImg");
const btnJungle = document.getElementById("btnJungle");
const rainbowImg = document.querySelector("img");

function adicionarEvento(btn){

    btn.addEventListener("click", function(){

        const btnClone = btn.cloneNode(1);
    
        document.body.appendChild(btnClone);

        adicionarEvento(btnClone);
    
    })

}

btnImg.addEventListener("click", function(){

    rainbowImg.style.width = '75%';

    const br = document.createElement("br");

    document.body.insertBefore(br, rainbowImg);

    btnImg.style.display = 'none';

})

adicionarEvento(btnJungle);
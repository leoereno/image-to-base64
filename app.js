const imageInput = document.getElementById("image-input");
const placaInput = document.getElementById("placa-input");
const okBtn = document.getElementById("ok-btn");
const btnCopy = document.getElementById("btn-copy");
const textResult = document.getElementById("text-result");
const form = document.getElementById("form");
const result = document.getElementById("result");


function converteBase64(event){
    event.preventDefault();
    var files = imageInput.files;
    if (FileReader && files && files.length) {
        var fr = new FileReader();
        fr.onload = function () {
            let base64 = fr.result.split(',')[1];
            const data = `{ "FotoBase64": "${base64}", "Placa": "${String(placaInput.value).toUpperCase()}" }`
            navigator.clipboard.writeText(data);
            textResult.innerText = data;
            result.innerHTML = "Copiado!";
            okBtn.style.display = "flex;";
            }
        fr.readAsDataURL(files[0]);
    }

    else {
        console.log("erro");
    }

}

form.addEventListener("submit", converteBase64);




  





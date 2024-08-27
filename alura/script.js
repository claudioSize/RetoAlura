function encriptar() {
    const texto = document.getElementById("texto").value;
    const tituloMensaje = document.getElementById("titulo-mensaje");
    const parrafo = document.getElementById("parrafo");
    const muñeco = document.getElementById("muñeco");
    const btnCopy = document.getElementById("copyBtn");
    const copyTexts = document.getElementById("copyText");

  
    const textoCifrado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
    if (texto.length !== 0) {
      document.getElementById("copyText").value = textoCifrado;
      tituloMensaje.textContent = "";
      btnCopy.style.display = "block";
      parrafo.textContent = "";
      muñeco.style.display = "none";
      copyTexts.style.display = "block";

    } else {
      muñeco.src = "./assets/pj.png";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      swal("Ooops!", "Debes ingresar un texto", "warning");
    }
  }
  
  function desencriptar() {
    const texto = document.getElementById("texto").value;
    const tituloMensaje = document.getElementById("titulo-mensaje");
    const parrafo = document.getElementById("parrafo");
    const muñeco = document.getElementById("muñeco");
  
    const textoCifrado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
  
    if (texto.length !== 0) {
      document.getElementById("copyText").value = textoCifrado;
      tituloMensaje.textContent = "";
      btnCopy.style.display = "block";
      parrafo.textContent = "";
      muñeco.style.display = "none";
      copyTexts.style.display = "block";
    } else {
      muñeco.src = "./assets/pj.png";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      swal("Ooops!", "Debes ingresar un texto", "warning");
    }
  }
function copy(){
  const text = document.getElementById("copyText").value;
  navigator.clipboard.writeText(text);
}
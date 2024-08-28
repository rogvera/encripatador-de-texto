const textoIngresado = document.getElementById('texto-ingresado');
const textoEncriptado = document.getElementById('texto-encriptado');
const btnEncriptar = document.getElementById('btn-encriptar');
const btnDesencriptar = document.getElementById('btn-desencriptar');
const btnCopiar = document.getElementById('btn-copiar');
const divMensajeNoEncontrado = document.getElementById('section-resultado-informacion');
const imagenMunieco = document.getElementById('imagen-muñeco');

function validarTexto(texto) {
    const regex = /^[a-z\s]+$/;
    return regex.test(texto);
}

function encriptarTexto() {

    if (!validarTexto(textoIngresado.value)) {
        alert('El texto solo puede contener letras minusculas y sin acentos.');
        return;
    }
    
    textoEncriptado.value = textoIngresado.value
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    
    textoEncriptado.style.display = "block";
    btnCopiar.style.display = "inline";
    imagenMunieco.style.display = "none"
    divMensajeNoEncontrado.style.display = "none"
}

function desencriptarTexto() {

    if (!validarTexto(textoIngresado.value)) {
        alert('El texto solo puede contener letras minusculas y sin acentos.');
        return;
    }

     textoEncriptado.value = textoIngresado.value
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    
}

function copiarTexto() {
    const textoEncriptado = document.getElementById('texto-encriptado');
    textoEncriptado.select();
    textoEncriptado.setSelectionRange(0, 99999);
    document.execCommand('copy');
    alert('Texto copiado');
}

btnEncriptar.addEventListener('click', encriptarTexto);
btnDesencriptar.addEventListener('click', desencriptarTexto);
btnCopiar.addEventListener('click', copiarTexto);
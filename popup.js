var loader = function() {
    var fd = document.getElementById("fdenuncia");
    try {
        var formulario = fd.contentDocument;
        // TODO: pre-fill the URL fields
    } catch (e) {
        alert(e.message);
    }
};
window.onload = loader;

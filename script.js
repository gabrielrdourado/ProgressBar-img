var i = 0;
window.onload = function() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        var txtPorcentagem = document.getElementById("txtPorcentagem");
        var width = 0;
        var id = setInterval(frame, 100);
        function frame() {
            if (width >= 35) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
                txtPorcentagem.innerHTML = width + "%";
            }
        }
    }
}
document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById('menu-selector').addEventListener('change', function () {
        var pagina = self.location.href.match(/\/([^/]+)$/)[1];
        location.href = "../" + this.value + "/" + pagina;
    });
});

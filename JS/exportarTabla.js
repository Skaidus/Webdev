
document.getElementById("exportarTabla").addEventListener("click", exportarTabla);
function exportarTabla() {
        var url = 'data:application/vnd.ms-excel,' + encodeURIComponent($('#califications').html())
        location.href = url
        return false
}

function downloadFile(data, type){
    var blob = new Blob([data], { type: type.toString() });
    var url = window.URL.createObjectURL(blob);
    window.open(url);
}


function loadFile(filePath) {
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    xmlhttp.send();
    if (xmlhttp.status==200) {
        result = xmlhttp.responseText;
    }
    return result;
}

console.log(loadFile("downloads/test.txt"))
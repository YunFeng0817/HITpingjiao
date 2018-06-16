/**
 * 评课评教材部分的代码
 */
var iframeDocument = document.getElementById('iframename').contentWindow.document;
var table = iframeDocument.getElementsByTagName('table')[1].tBodies[0];
for (var i = 6; i < table.childNodes.length; i += 2) {
    var tr = table.childNodes[i]
    tr.childNodes[11].childNodes[1].value = 67;
    tr.childNodes[13].childNodes[1].value = 71;
    tr.childNodes[15].childNodes[1].value = 75;
    tr.childNodes[17].childNodes[1].value = 78;
}

/**
 * 评价教与学状态的代码
 */
var iframeDocument = document.getElementById('iframename').contentWindow.document;
var table = iframeDocument.getElementsByTagName('table')[1].tBodies[0];
for (var i = 6; i < table.childNodes.length; i += 2) {
    tr = table.childNodes[i];
    for (var j = 15; j < tr.childNodes.length - 4; j += 2) {
        tr.childNodes[j].childNodes[1].value = 1;
    }
}

/**
 * 评价实验课
 */
var iframeDocument = document.getElementById('iframename').contentWindow.document;
var table = iframeDocument.getElementsByTagName('table')[1].tBodies[0];
for (var i = 6; i < table.childNodes.length; i += 2) {
    tr = table.childNodes[i];
    for (var j = 11; j < tr.childNodes.length - 4; j += 2) {
        tr.childNodes[j].childNodes[1].value = 1;
    }
}
// CHANGE COLOR
function changecolor1(){
    document.getElementById("mbody").style.backgroundColor = "#33ccff";
}
function changecolor2(){
    document.getElementById("mbody").style.backgroundColor = "#2db300";
}
function changecolor3(){
    document.getElementById("mbody").style.backgroundColor = "#cd853f";
}
function changecolor4(){
    document.getElementById("mbody").style.backgroundColor = "#92a8d1";
}
function changecolor5(){
    document.getElementById("mbody").style.backgroundColor = "#dfcfbe";
}
// CHANGE COLOR

// .navbar a, .about, .skills, .news-input, .news-input input, .news-scroll
// CHANGE SIZE
function changefontsize(size){
    var collection = document.getElementsByClassName("text");
    for(var i=0;i<collection.length;i++){
        collection[i].style.fontSize = size+"px";
    }
}
// CHANGE SIZE


// NEWS-UPDATE
function updateRow(){
    var table = document.getElementById("news-table");
    var newrow1 = table.insertRow(0);
    var date_cell = newrow1.insertCell(0);
    var name_cell = newrow1.insertCell(1);
    var newrow2 = table.insertRow(1);
    var update_cell = newrow2.insertCell(0);
    update_cell.setAttribute("colspan", "2");
    // UPDATE VALUES
    date_cell.innerHTML = document.getElementById("date-text").value;
    name_cell.innerHTML = document.getElementById("name-text").value;
    update_cell.innerHTML = document.getElementById("update-text").value;
    window.localStorage.setItem('update-key',table.innerHTML);
}

function refreshPageNews() {
    var table = document.getElementById("news-table");
    table.innerHTML=window.localStorage.getItem('update-key');
}

refreshPageNews();
// NEWS-UPDATE

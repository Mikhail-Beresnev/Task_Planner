// Create a "closeBlog" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var j;
for (ij = 0; j < myNodelist.length; j++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "closeBlog";
    span.appendChild(txt);
    myNodelist[j].appendChild(span);
}

// Click on a closeBlog button to hide the current list item
var closeBlog = document.getElementsByClassName("closeBlog");
var j;
for (j = 0; j < closeBlog.length; j++) {
    closeBlog[j].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// Create a new list item when clicking on the "Add" button
function newBlog() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("blogInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue != '') {
        document.getElementById("blogList").appendChild(li);
    }
    document.getElementById("blogInput").value = "";
    var textarea = document.createElement("TEXTAREA");
    
    var txt = document.createTextNode("\u00D7");
    textarea.className = "closeBlog";
    textarea.appendChild(txt);
    li.appendChild(textarea);

    for (j = 0; j < closeBlog.length; j++) {
        closeBlog[j].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}
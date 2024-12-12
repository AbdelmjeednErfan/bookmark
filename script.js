var bookmark = document.getElementById("bookmark");
var bookmarkurl = document.getElementById("bookmarkurl");
var data = document.getElementById("data");
var sub = document.getElementById("sub");
var booksContainer = [];
var regex ={
    bookmark:{
        value:/^[a-z0-9_-]{3,15}$/,
        isValid:false,

    },
    bookmarkurl:{
        value:/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/,
        isValid:false,
    },
}


if(localStorage.getItem('booksContainer')!=null){
booksContainer = JSON.parse(localStorage.getItem('booksContainer'))
displaybooks(booksContainer)
}

function addbooks () {

    console.log("hiii");
    
    var books ={
        site:bookmark.value,
        url:bookmarkurl.value,
    }
    
booksContainer.push(books);
localStorage.setItem("booksContainer",JSON.stringify(booksContainer))
displaybooks(booksContainer)
clear()
sub.disabled = true

}



function displaybooks(list) {
    cartona = '';

    for (var i = 0; i < list.length; i++) {
      cartona +=`
       <div class="col-md-12">
                            <tr>
                    <td>${1+i}</td>
                    <td>${list[i].site}</td>
                    <td><a class="btn btn-success" onclick="visitor(${i})" target="_blank"  href="${list[i].url}"> <span><i class="fa-solid fa-eye pe-3"></i></span>visit</a></td>
                    <td><button class="btn btn-danger" onclick="deletebooks(${i})"> <span><i class="fa-solid fa-trash-can pe-3"></i></span> Delete</button></td>
                            </tr>
                        </div>
      `
        
    }
    document.getElementById("data").innerHTML=cartona
}


function clear() {
    bookmark.value ="";
    bookmarkurl.value="";
    
}

function deletebooks(bl7) {
    booksContainer.splice(bl7,1)
    displaybooks(booksContainer)
    localStorage.setItem("booksContainer",JSON.stringify(booksContainer))
}


function validution(element){

if (regex[element.id].value.test(element.value)) {
    element.classList.add("is-valid")
    element.classList.remove("is-invalid")
    regex[element.id].isValid = true

}else{
    element.classList.remove("is-valid")
    element.classList.add("is-invalid")
    regex[element.id].isValid = false


}
cheackvalied()
}

function cheackvalied() {
    if (regex.bookmark.isValid && regex.bookmarkurl.isValid) {
        sub.disabled = false
    }else{
        sub.disabled = true

    }
}














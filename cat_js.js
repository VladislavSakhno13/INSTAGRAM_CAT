var cats = [];
var catsfavorites = [];

var xhr = new XMLHttpRequest();

xhr.open('GET', 'catsstore.json', true);

xhr.onload = function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            console.log('good!!!');
            cats = JSON.parse(xhr.responseText);
            for (var i = 0; i < cats.length; i++) {
                createCat(cats[i]);
            }
            document.getElementById('saveimg').onclick = function() {addNewCat(cats)};
            
        
        } else {
            console.log(xhr.status);

        }
    }
};


function addNewCat (cats) {
   
   if(document.getElementById('urlimg').value === ""){
       alert("URL not defined!!!");
       return false;  
   }
    const cat = {
        "id": cats.length + 1,
        "title": document.getElementById('nameforcat').value,
        "url": document.getElementById('urlimg').value,
        "likes": 0
    }
    cats.push(cat);
    createCat(cat);
    document.getElementById('img-cat-create').src = "";
    document.getElementById('urlimg').value = "";
    document.getElementById('nameforcat').value = "";

    if(document.getElementById('checktrue').checked) {
        catsfavorites.push(cat);
        createfavoritCat(cat);
        
    }
}

xhr.send();

function createCat(cat) {
    const divElement = createCatHtml(cat,true);
    document.getElementById('cats-main-box').appendChild(divElement);
    updateCatHtml(divElement, cat);
}

function createfavoritCat(cat) {
    const divElement = createCatHtml(cat,false);
    document.getElementById('favorites').appendChild(divElement);
   
    updateCatHtml(divElement, cat);
}


function createCatHtml(cat,isFavorites) {
    const div = document.createElement('div');
    if(isFavorites == true){
    div.id = 'cat_' + cat.id;
    }
    else div.id = 'favor_' + cat.id;
    

    const p = document.createElement('p');
    div.appendChild(p);

    const img = document.createElement('img');
    img.src = cat.url;
    p.appendChild(img);

    const like = document.createElement('input');
    like.type = "button";
    like.value = "Like";
    like.id = "like";
    div.appendChild(like);

    const span = document.createElement('span');
    span.id = "count";
    div.appendChild(span);

    if(isFavorites == true){
    const input = document.createElement('input');
    input.id = "text";
    div.appendChild(input);

    const save = document.createElement('input');
    save.type = "button";
    save.value = "Save";
    save.id = "save";
    div.appendChild(save);

    save.onclick = function() {
        var e = input.value;
        cat.title = e;
        updateCatHtml(this.parentElement, cat);
    }
    }

    const nameCat = document.createElement('span');
    nameCat.id = "nameImg";
    div.appendChild(nameCat);

    if(isFavorites == true){
    const favoritImg = document.createElement('input');
    favoritImg.type = "button";
    favoritImg.id = 'favoritIMG_' + cat.id;
    favoritImg.value = "favorits";
    favoritImg.className = "getCat";
    div.appendChild(favoritImg);
    favoritImg.onclick = function() {addToFaforitesList(favoritImg)};
    }

    

    like.onclick = function () {
        cat.likes++;
        updateCatHtml(this.parentElement, cat);
        like.style.background = 'red';
    }
     
      function addToFaforitesList(favoritImg) {
        favoritImg.style.background = 'red';
        var index;
        for(var i = 0; i< cats.length;i++){
            if(cat == catsfavorites[i]){
                index = i;
            }
            
        }
        if (index != undefined){
            console.log('cat found');
            var perent = document.getElementById('favorites');
            var child = document.getElementById('favor_' + cat.id);
            perent.removeChild(child);
            catsfavorites.splice(index,1);
            favoritImg.style.background = null;
            return;
        }
        catsfavorites.push(cat);
        {createfavoritCat(cat)};
       
        
    } 
    
       
    
    return div;
}
function updateCatHtml(divElement, cat) {
    divElement.querySelector('#count').innerText = cat.likes;
    divElement.querySelector('#nameImg').innerText = cat.title;
    

}
document.getElementById('show').onclick = function () {
    let urlnew = document.getElementById('urlimg').value;
    document.getElementById('img-cat-create').src = urlnew;
}



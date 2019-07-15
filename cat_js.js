var cats = [];
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
        "likes": 0,
        "favorcat" : false
    }
    cats.push(cat);
    document.getElementById('img-cat-create').src = "https://highloadcup.ru/static/core/img/placeholder_200.png";
    document.getElementById('urlimg').value = "";
    document.getElementById('nameforcat').value = "";
    createCat(cat);
    if(document.getElementById('checktrue').checked) {
        cat.favorcat = true;
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

    const like = document.createElement('img');
    like.id = "like";
    div.appendChild(like);

    const span = document.createElement('span');
    span.id = "count";
    div.appendChild(span);

    if(isFavorites == true){
    const input = document.createElement('input');
    input.id = "text";
    div.appendChild(input);

    const save = document.createElement('p');
    save.innerText = "Save";
    save.id = "save";
    save.className = "saveNameCat"
    div.appendChild(save);

    save.onclick = function() {
        cat.title = input.value;
        updateCatHtml(this.parentElement, cat);
    }
    }

    const nameCat = document.createElement('span');
    nameCat.id = "nameImg";
    div.appendChild(nameCat);

    if(isFavorites == true){
    const favoritImg = document.createElement('img');
    favoritImg.id = 'favoritIMG_' + cat.id;
    favoritImg.className = "getCat";
    div.appendChild(favoritImg);
    favoritImg.onclick = function() {
        addToFaforitesList(this)};
    }
    like.onclick = function () {
        if (cat.likedByMe) {
            cat.likedByMe = false;
            cat.likes--;
            updateCatHtml(this.parentElement, cat);
            return;
        } else {
            cat.likedByMe = true;
            cat.likes++;
            updateCatHtml(this.parentElement, cat);
        }
        
       
        
    }    
      function addToFaforitesList(favoritImg) { 
          if(cat.favorcat === true){
            var perent = document.getElementById('favorites');
            var child = document.getElementById('favor_' + cat.id);
            perent.removeChild(child);
            cat.favorcat = false;
            updateCatHtml(favoritImg.parentElement,cat);
            return;
          }
        cat.favorcat = true;
        createfavoritCat(cat);
       
        
    }    
    return div;
    
}
function updateCatHtml(divElement, cat) {
    divElement.querySelector('#count').innerText = cat.likes;
    divElement.querySelector('#nameImg').innerText = cat.title;
    divElement.querySelector('#like').src = cat.likedByMe ? "https://files.slack.com/files-pri/T0B1MT8Q4-FL6QF03TP/favorites_on.jpg" : "https://files.slack.com/files-pri/T0B1MT8Q4-FKVCCHFH9/favorites_off.jpg";
    document.querySelector("#cat_" + cat.id).querySelector("#favoritIMG_" + cat.id).src = cat.favorcat === false ? "https://st3.depositphotos.com/8511412/19063/i/1600/depositphotos_190634290-stock-photo-star-icon-outline-vector.jpg" : "https://cdn.pixabay.com/photo/2016/08/11/18/09/star-1586412_1280.png";
}
document.getElementById('show').onclick = function () {
    if(document.getElementById('urlimg').value === ""){
        alert("URL not defined!!!");
        return false;  
    }
    let urlnew = document.getElementById('urlimg').value;
    document.getElementById('img-cat-create').src = urlnew;
}



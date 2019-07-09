

var xhr = new XMLHttpRequest();

xhr.open('GET', 'catsstore.json', true);

xhr.onload = function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            const cats = JSON.parse(xhr.responseText);
            for (var i = 0; i < cats.length; i++) {
                createCat(cats[i]);
            }
            document.getElementById('saveimg').onclick = function() {assignHandlers(cats)};
            
        
        } else {
            console.log(xhr.status);

        }
    }
};


    


function assignHandlers (cats) {
   
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
        createfavoritCat(cat);
    }
}

xhr.send();

function createCat(cat) {
    const divElement = createCatHtml(cat);
    document.getElementById('cats-main-box').appendChild(divElement);
    updateCatHtml(divElement, cat);
}

function createfavoritCat(cat) {
    const divElement = createCatHtml(cat);
    document.getElementById('favorites').appendChild(divElement);
    updateCatHtml(divElement, cat);
}


function createCatHtml(cat) {
    const div = document.createElement('div');
    div.id = 'cat_' + cat.id;

    const p = document.createElement('p');

    const img = document.createElement('img');
    img.src = cat.url;

    const like = document.createElement('input');

    like.type = "button";
    like.value = "Like";
    like.id = "like";

    const span = document.createElement('span');
    span.id = "count";

    const input = document.createElement('input');
    input.id = "text";

    const save = document.createElement('input');
    save.type = "button";
    save.value = "Save";
    save.id = "save";

    const nameCat = document.createElement('span');
    nameCat.id = "nameImg";

    const favoritImg = document.createElement('input');
    favoritImg.type = "button";
    favoritImg.id = 'favoritIMG_' + cat.id;
    favoritImg.value = "favorits";
    favoritImg.className = "getCat";

    div.appendChild(p);
    p.appendChild(img);
    div.appendChild(like);
    div.appendChild(span);
    div.appendChild(input);
    div.appendChild(save);
    div.appendChild(nameCat);
    div.appendChild(favoritImg);

    like.onclick = function () {
        cat.likes++;
        updateCatHtml(this.parentElement, cat);
    }
    save.onclick = function () {
        var e = input.value;
        cat.title = e;
        updateCatHtml(this.parentElement, cat);
    }
    favoritImg.onclick = function(){
        const box = document.createElement('div');
        box.id = 'cat-' + cat.id;
        const par = document.createElement('p');
        const favoritCat = document.createElement('img');
        favoritCat.src = img.src;

        par.appendChild(favoritCat);
        box.appendChild(par);
        document.getElementById('favorites').appendChild(box);
    }
    return div;
}
function updateCatHtml(divElement, cat) {
    document.querySelector("#cat_" + cat.id).querySelector('#count').innerText = cat.likes;
    document.querySelector("#cat_" + cat.id).querySelector('#nameImg').innerText = cat.title;

}
document.getElementById('show').onclick = function () {
    let urlnew = document.getElementById('urlimg').value;
    document.getElementById('img-cat-create').src = urlnew;
}



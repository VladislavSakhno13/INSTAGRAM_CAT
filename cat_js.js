const cats = [
    { "id": 1, "title": "cat 1", "url": "https://http.cat/200", "likes": 0 },
    { "id": 2, "title": "cat 2", "url": "https://http.cat/404", "likes": 0 },
    { "id": 3, "title": "cat 3", "url": "https://http.cat/500", "likes": 0 },
    { "id": 4, "title": "cat 4", "url": "https://http.cat/400", "likes": 0 }];

/*var luk = 0; 
function lk () { 
luk++; 
var elem = document.getElementById('cout').innerHTML = luk; 
 
}*/

/*function newName (){ 
var new_name = document.getElementById('text').value; 
document.getElementById('nameImg').innerHTML = new_name; 
}*/
//document.getElementById('like').onclick = lk; 
//document.getElementById('save').onclick = newName; 


function createCat(cat) {
    const divElement = createCatHtml(cat);
    document.body.appendChild(divElement);
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
    //span.innerText = cat.likes;

    const input = document.createElement('input');
    input.id = "text";

    const save = document.createElement('input');
    save.type = "button";
    save.value = "Save";
    save.id = "save";

    const nameCat = document.createElement('span');
    nameCat.id = "nameImg";
    //nameCat.innerText = cat.title;

    div.appendChild(p);
    p.appendChild(img);
    div.appendChild(like);
    div.appendChild(span);
    div.appendChild(input);
    div.appendChild(save);
    div.appendChild(nameCat);


    like.onclick = function () {
        cat.likes++;
        updateCatHtml(this.parentElement, cat);
    }
    save.onclick = function(){
         var e = input.value;
         cat.title = e;
         updateCatHtml(this.parentElement,cat);
    }

    return div;
}

function updateCatHtml(divElement, cat) {
    document.querySelector("#cat_" + cat.id).querySelector('#count').innerText = cat.likes;
    document.querySelector("#cat_" + cat.id).querySelector('#nameImg').innerText = cat.title;

}


var luk = 0;
function doMagic(cat) {
    const div = document.createElement('div');
    div.id = cat.id;

    const p = document.createElement('p');

    const img = document.createElement('img');
    img.src = cat.url;

    const like = document.createElement('input');
    like.type = "button";
    like.value = "Like";
    like.id = "like";

    const span = document.createElement('span');
    span.id = "count";
    span.innerText = cat.likes;

    const input = document.createElement('input');
    const save = document.createElement('input');
    input.id = "text";
    save.type = "button";
    save.value = "Save";
    save.id = "save";

    const nameCat = document.createElement('span');
    nameCat.id = "nameImg";
    nameCat.innerText = cat.title;

    div.appendChild(p);
    p.appendChild(img);
    div.appendChild(like);
    div.appendChild(span);
    div.appendChild(input);
    div.appendChild(save);
    div.appendChild(nameCat);
    document.body.appendChild(div);

    like.onclick = function () {
        div.remove();
        const newDiv = document.createElement("div");
        newDiv.id = cat.id;

        const newp = document.createElement('p');

        const newImg = document.createElement('img');
        newImg.src = cat.url;

        /*const Newlike = document.createElement('input'); 
            Newlike.type = "button"; 
            Newlike.value = "Like"; 
            Newlike.id = "like";

        newDiv.appendChild(Newlike);*/
        newp.appendChild(newImg);
        newDiv.appendChild(newp);
        document.body.appendChild(newDiv);

    }
    save.onclick = newName;

    function lk() {
        luk++;
        var a = document.getElementById('count');
        a.innerHTML = luk;

    }
    function newName() {
        var new_name = document.getElementById('text').value;
        document.getElementById('nameImg').innerHTML = new_name;
    }

}

for (var i = 0; i < cats.length; i++) {
    createCat(cats[i]);
}

    //cats.forEach(cat => doMagic(cat));
var xhr = new XMLHttpRequest();

      xhr.open('GET', 'catsstore.json', false);
      xhr.send();

      if (xhr.status != 200) {
        // обработать ошибку
        alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
      } else {
        // вывести результат
        alert(xhr.responseText);
      }
    



const cats = [
    { "id": 1, "title": "cat 1", "url": "https://http.cat/200", "likes": 0 },
    { "id": 2, "title": "cat 2", "url": "https://http.cat/404", "likes": 0 },
    { "id": 3, "title": "cat 3", "url": "https://http.cat/500", "likes": 0 },
    { "id": 4, "title": "cat 4", "url": "https://http.cat/400", "likes": 0 }];




function createCat(cat) {
    const divElement = createCatHtml(cat);
    document.getElementsByClassName('mainBox')[0].appendChild(divElement);
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



for (var i = 0; i < cats.length; i++) {
    createCat(cats[i]);
}
document.getElementById('show').onclick = function () {
   let urlnew =  document.getElementById('urlimg').value;
   document.getElementById('cartinka').src = urlnew;
}
document.getElementById('saveimg').onclick = function () {
    const cat = {
        "id": cats.length + 1, 
        "title": document.getElementById('nameforcat').value, 
        "url": document.getElementById('urlimg').value, 
        "likes": 0
    }
    cats.push(cat);
    createCat(cat);
    document.getElementById('cartinka').src = "";
    document.getElementById('urlimg').value = "";
    document.getElementById('nameforcat').value = "";

} 
 
 
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

xhr.send();

let controler = {

}; 



let view = function createHtml (cat,isFavorit){
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
            input.value = "";
            if(cat.favorcat === true){
                document.querySelector('#favor_' + cat.id).querySelector('#nameImg').innerHTML = cat.title;
            }
        }
        }

        const nameCat = document.createElement('span');
        nameCat.id = "nameImg";
        div.appendChild(nameCat);

        if(isFavorites == true){
            const favoritImg = document.createElement('img');
            favoritImg.id = 'favoritIMG_' ;
            favoritImg.className = "getCat";
            div.appendChild(favoritImg);
            }
};


let model = {

    

};


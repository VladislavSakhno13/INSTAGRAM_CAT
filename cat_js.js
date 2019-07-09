

var xhr = new XMLHttpRequest();

xhr.open('GET', 'catsstore.json', true);

xhr.onload = function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            console.log('good!!!');
            window.cats = JSON.parse(xhr.responseText);
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
   
   if(document.getElementById('urlimg').value === ""){
       alert("URL not defined!!!");
       return false;  
   }
    const cat = {
        "id": cats.length + 1,
        "title": document.getElementById('nameforcat').value,
        "url": document.getElementById('urlimg').value || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAACWCAMAAACsAjcrAAAAIVBMVEX////i4uLu7u78/Pzm5ubn5+fz8/P5+fn29vbq6urw8PBAcW/MAAADoUlEQVR4nO2c54KrIBCFXUEs7//AN0WawCDsyij3fD9jEufIFKrDAAAAAAAAAAAAAAAAAAD8l8yLUuMHpWbBbU0dQq3Tz4FpXB6mZhnlUYQRs83c1p1l3pIqdi3qCe0yr7SKL+PdpSxBXDxSijjVGpqN29wkW4mMF3LhtjjKHIS4XDc1f8uHeFWUMWyvkdvoCOpg46oiaXY5JjR5u1w8evYRCXY+lBjV0sosfpRPGd/3Y+lOMS/cpCvzz1h47XefQBGOs8hzD9iTchclro7zZc5NcvdQ4vpVSeS6cXWLOLH2lObSse4JXIS1ZiruPTm1h72eLMaUteLXNlAkcx/SBnqNDldJ3e//DBMg5X71xbYoa5io33uGVcLoXNaxvFjNWeRfNx0WxmoyRt1ilrRJYvLjYYo+jZaIaKC+45dS8i6g3g/M30yXWHkC0yCur3zzUFrJtyPg2WwijWnEaJ6k28HQ+TSlRHdoPCXauZhSsG4Q6Xxm60Jcie2Yufl65o2SSKTnurRuB9NVshK/uRzt2W6DeLNaoVXeAMx9AKaYcNSSNbTHG5qESkRaZ+zPGmFC3f+UUELoMM3LEO4qahChhNJhA669b2lnOOb+lBJah0mB7UvJfmMZXIgryegw4d48b83pG8eU5HQQD+ZidIjE0kyoJK/DuGrrINE+Ha3FRyUndJjefOsg0abFrx6UnNBhgqR1JdktTfW8RXIZMRXNRNBdicjdNqUkbef+hcYlUQtJTxHGlRDPO9PGF6EdgfDomBLKb/ZAapx/dWhSOSZUQvr/elshgRI6jnVC/1M7s5wSYkd+Z7z/xkJ6aZFHxMgFWYtHSDd1pJvKrp9f6rblfa18G18DXYcPvV9ybmWHq/dbNh45oWSj/vBCCkeIeSVcI8TSMXtWyQ/pqxciUzdOzKJklLDNopTPa9FK+Oa1ymcaSSX6YvuZxoq5X+Ia49xvzWx8+irjbHzV+oinxF0g0p+xrLXHDMqtWDnXb7NiVbeGKGM6TIPwLOvWrerKUAf3qm7lOrsMdHCvs1uPKNv5IA+jJ/6dD7V7UaRv8crdIB3tDupmv1Y/O+j62dPYzS7Tfvb9ejuxC5Xcayd2P3vjuzmt0M/5kX5O9By3aDz3jNXQzam3oZ9ziOmToZ+LDzoZOnRzVnfo5/T00M159jedvGHgTSfvfPhAvIVDPuctHF+EWgMxz3sviuZVPTb9ppqnagAAAAAAAAAAAAAAAAAAwM4/A+QXYer2JhAAAAAASUVORK5CYII=",
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
    favoritImg.onclick =  function() {
       
        {createfavoritCat(cat)};

    } 
        
       /* const box = document.createElement('div');
        box.id = 'cat-' + cat.id;
        const par = document.createElement('p');
        const favoritCat = document.createElement('img');
        favoritCat.src = img.src;

        par.appendChild(favoritCat);
        box.appendChild(par);
        document.getElementById('favorites').appendChild(box);*/
    
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

let cont = 0;

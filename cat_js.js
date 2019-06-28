const cats = [  
    {    "id": 1,    "title": "cat 1",    "url": "https://http.cat/200",    "likes": 0   },    
    {    "id": 2,    "title": "cat 2",    "url": "https://http.cat/404",    "likes": 0   },    
    {    "id": 3,    "title": "cat 3",    "url": "https://http.cat/500",    "likes": 0   },    
    {    "id": 4,    "title": "cat 4",    "url": "https://http.cat/400","likes": 0   }];

var luk = 0;
function lk () {
    luk++;
    var elem = document.getElementById('cout').innerHTML = luk;
    
}

function newName (){
    var new_name = document.getElementById('text').value;
    document.getElementById('nameImg').innerHTML = new_name;
}
document.getElementById('like').onclick = lk;
document.getElementById('save').onclick = newName;


function doMagic(cat)
{
    const catElement = document.createElement('span');
    catElement.innerText = cat.title;
    const img = document.createElement('img');
    img.src = cat.url;
    catElement.appendChild(img);
    document.body.appendChild(catElement);
    console.log(cat);
}

for (var i = 0; i < cats.length; i ++) {
    doMagic(cats[i]);
}

//cats.forEach(cat => doMagic(cat));
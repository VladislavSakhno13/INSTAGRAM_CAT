const cats = [ 
    { "id": 1, "title": "cat 1", "url": "https://http.cat/200", "likes": 0 }, 
    { "id": 2, "title": "cat 2", "url": "https://http.cat/404", "likes": 0 }, 
    { "id": 3, "title": "cat 3", "url": "https://http.cat/500", "likes": 0 }, 
    { "id": 4, "title": "cat 4", "url": "https://http.cat/400","likes": 0 }]; 
    
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
    
    var luk = 0; 
    function doMagic(cat) 
    { 
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
    like.onclick = lk;
    save.onclick = newName; 
    
    function lk () { 
    luk++; 
    var a = document.getElementById('count'); 
    a.innerHTML = luk; 
    
    } 
    function newName (){ 
    var new_name = document.getElementById('text').value; 
    document.getElementById('nameImg').innerHTML = new_name; 
    } 
    
    } 
    
    for (var i = 0; i < cats.length; i ++) { 
    doMagic(cats[i]); 
    } 
    
    //cats.forEach(cat => doMagic(cat));
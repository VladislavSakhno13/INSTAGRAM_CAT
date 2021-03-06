let catmodel ={
    init:function(){
    
        this.cats = [
            {
                "id": 1,
                "title": "cat 1",
                "url": "https://http.cat/200",
                "likes": 0,
                "favorcat" : false
            },
            {
                "id": 2,
                "title": "cat 2",
                "url": "https://http.cat/404",
                "likes": 0,
                "favorcat" : false
            },
            {
                "id": 3,
                "title": "cat 3",
                "url": "https://http.cat/500",
                "likes": 0,
                "favorcat" : false
            },
            {
                "id": 4,
                "title": "cat 4",
                "url": "https://http.cat/400",
                "likes": 0,
                "favorcat" : false
            }
            
          ]
          
          
     },
     

    
    getAll: function(){
     return this.cats;
    },
    getFavorite:function(){
        return this.cats.filter(x=>x.favorcat);
    },

    add: function(url,title,id,or){
        const cat = {
            "id": id,
            "title": title ,
            "url": url,
            "likes": 0,
            "favorcat" : or
        }
        
        
        this.cats.push(cat);
    },
    addLike(i){
     this.cats[i].likes++;
        
    }

} 



let controler = {
    init:  function(model,view,viewform){
        this.model=model;
        this.view = view;
        this.viewform = viewform;
        model.init();
        view.init();
        viewform.initform();
    },
 show: function(){
    const cats = this.model.getAll();
     view.render(cats);
     viewform.renderform();
     
    let knopka = viewform.getElement();
    knopka.addEventListener('click',this.addCat);

   


     
     
    
    //view.getElement().addEventListener('click',view.getIdCount);
    
    },

    addCat:  function(){
        let url = viewform.getUrl();
        let title = viewform.getName();
        let id = controler.model.getAll().length+1;
        let or = false;
        if(viewform.getBox().checked){
            or = true;
        }
        controler.model.add(url,title,id,or);
        const cat = controler.model.getAll();
        view.render(cat);
        const favorCats = controler.model.getFavorite();
        view.renderfavorits(favorCats);
    },

    removeViewWithLike: function(){
        
        controler.model.addLike(0);
        const remowe = controler.model.getAll();
        view.render(remowe);
    }
     
     
     

    
 
}; 



let view = {
    
    render: function (cats){
    
       
    var perent = document.getElementById('cats-main-box');
    perent.innerHTML = "";
     
        
   const forward =  document.createElement('input');
   forward.type = "button";
   forward.value = "forward";
   document.getElementById('cats-main-box').appendChild(forward);

   const back =  document.createElement('input');
   back.type = "button";
   back.value = "back";
   document.getElementById('cats-main-box').appendChild(back);
   


    for(var i = 0; i < cats.length; i++){

    const div = document.createElement('div');
    div.id = 'cat_' + cats[i].id;
    div.className = "AllCats";
    
    const p = document.createElement('p');
    div.appendChild(p);

    const img = document.createElement('img');
    img.src = cats[i].url;
    p.appendChild(img);

    const like = document.createElement('img');
    like.id =  cats[i].id - 1;
    like.src = "like.png";
    like.className = "butlike";
    div.appendChild(like);

    const span = document.createElement('span');
    span.id = "count";
    span.className = "countlike";
    span.innerHTML = cats[i].likes;
    div.appendChild(span);

   
    const input = document.createElement('input');
    input.id = "text";
    div.appendChild(input);

    const save = document.createElement('p');
    save.innerText = "Save";
    save.id = "save";
    save.className = "saveNameCat"
    div.appendChild(save);
   

    const nameCat = document.createElement('span');
    nameCat.id = "nameImg";
    nameCat.innerHTML = cats[i].title;
    div.appendChild(nameCat);


    const favoritImg = document.createElement('img');
    favoritImg.id = 'favoritIMG_' ;
    favoritImg.className = "getCat";
    div.appendChild(favoritImg);

    document.getElementById('cats-main-box').appendChild(div);
    }               
    },
   getElement: function(){
       
       return document.getElementsByClassName('butlike');
   },

    getIdCount: function(){
       console.log(this.id);
    },



    renderfavorits: function (cats){
        var perent = document.getElementById('favorites');
        perent.innerHTML = "";

        for(var i = 0; i < cats.length; i++){
    
        const div = document.createElement('div');
        div.id = 'cat_' + cats[i].id;
        
        const p = document.createElement('p');
        div.appendChild(p);
    
        const img = document.createElement('img');
        img.src = cats[i].url;
        p.appendChild(img);
    
        const like = document.createElement('img');
        like.id = "like";
        
        like.src = "like.png";
        div.appendChild(like);
    
        const span = document.createElement('span');
        span.id = "count";
        span.valur = cats[i].likes;
        div.appendChild(span);
       

        const nameCat = document.createElement('span');
        nameCat.id = "nameImg";
        div.appendChild(nameCat);
    
        document.getElementById('favorites').appendChild(div);
        }
        
   
                    
        },

       init: function(){
            
       } 
       
}
 let viewform = {
     renderform: function(){
    const formdiv = document.createElement('div');

    const pForm = document.createElement('p');
    pForm.id="idImg";
    formdiv.appendChild(pForm);

    const imgForm = document.createElement('img');
    imgForm.id="img-cat-create";
    pForm.appendChild(imgForm);

    const UrlForm = document.createElement('input');
    UrlForm.id="urlimg";
    UrlForm.placeholder = "URL";
    formdiv.appendChild(UrlForm);

    const nameForm = document.createElement('input');
    nameForm.id="nameforcat";
    nameForm.placeholder = "name";
    formdiv.appendChild(nameForm);

    const showForm = document.createElement('p');
    showForm.className = "saveNameCat";
    showForm.innerText = "show";
    formdiv.appendChild(showForm);

    const saveForm = document.createElement('p');
    saveForm.className = "saveNameCat";
    saveForm.innerText = "Save";
    saveForm.id = "saveCat";
    formdiv.appendChild(saveForm);

    const box = document.createElement('input');
    box.type = "checkbox";
    box.id = "yesOrno";
    formdiv.appendChild(box);

    
    document.getElementsByClassName('BoxUrl')[0].appendChild(formdiv);
     },

     getUrl: function(){
       return document.getElementById('urlimg').value;
     },
     getName: function(){
         return document.getElementById('nameforcat').value; 
     },
    getElement: function(){
        return document.getElementById('saveCat');
    },
    getBox: function(){
        return document.getElementById('yesOrno');
    },
    
     initform: function(){

     }
 }


controler.init(catmodel,view,viewform);
controler.show();
//controler.removeViewWithLike();









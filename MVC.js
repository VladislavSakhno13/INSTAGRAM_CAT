let model ={
    init:function(){
    
        this.cats = [
            {
                "id": 1,
                "title": "cat 1",
                "url": "https://http.cat/200",
                "likes": 0,
                "favorcat" : true
            },
            {
                "id": 2,
                "title": "cat 2",
                "url": "https://http.cat/404",
                "likes": 0,
                "favorcat" : true
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

    add: function(url,title,id){
        const cat = {
            "id": id,
            "title": title ,
            "url": url,
            "likes": 0,
            "favorcat" : false
        }
        
        
        this.cats.push(cat);
    }
} 



let controler = {
    init:  function(model){
        model.init();
        view.init();
    },
 show: function(){
    const cats = model.getFavorite();
    view.render(cats);
 },
 addFavorie
    

}; 



let view = {
        render: function (cats){
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
    div.appendChild(like);

    const span = document.createElement('span');
    span.id = "count";
    span.valur = cats[i].likes;
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
    div.appendChild(nameCat);


    const favoritImg = document.createElement('img');
    favoritImg.id = 'favoritIMG_' ;
    favoritImg.className = "getCat";
    div.appendChild(favoritImg);

    document.getElementById('cats-main-box').appendChild(div);
    }
                
    },
       init: function(){
            
       } 
       
}


controler.init();
controler.show();








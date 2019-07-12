var cats = [];
var catsfavorites = [];

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
        "likes": 0
    }
    cats.push(cat);
    document.getElementById('img-cat-create').src = "https://highloadcup.ru/static/core/img/placeholder_200.png";
    document.getElementById('urlimg').value = "";
    document.getElementById('nameforcat').value = "";

    if(document.getElementById('checktrue').checked) {

        catsfavorites.push(cat);
        createfavoritCat(cat);
        
    }
    createCat(cat);

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
    div.appendChild(save);

    save.onclick = function() {
        var e = input.value;
        cat.title = e;
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
    favoritImg.onclick = function() {addToFaforitesList(favoritImg)};
    }
    like.onclick = function () {
        
        if (cat.likedByMe == false) {
            cat.likedByMe = true;
            cat.likes--;
            updateCatHtml(this.parentElement, cat,cat.likedByMe);
            return;
        } else {
            cat.likedByMe = false;
            cat.likes++;
            updateCatHtml(this.parentElement, cat,cat.likedByMe);
        }
        
       
        
    }    
      function addToFaforitesList(favoritImg) {
        favoritImg.src = "data:image/jpeg;base64,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";
        var index;
        for(var i = 0; i< cats.length;i++){
            if(cat == catsfavorites[i]){
                index = i;
            }     
        }
        if (index != undefined){
            var perent = document.getElementById('favorites');
            var child = document.getElementById('favor_' + cat.id);
            perent.removeChild(child);
            catsfavorites.splice(index,1);
            favoritImg.src = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPDw8NDQ8PDQ8PDw8QEA8PDw8NDxYNFREWFhYRFxUYHSggGBolGxUVITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGhAQGC0dHR8rLS0rKysrKysrLSstLS0tLS0tLS0tLSstNy0tLS0tLS03LS0tLS0tNy0tLS0tKysrLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEBAAIDAQEAAAAAAAAAAAAAAQYHBAUIAwL/xAA+EAABAwICBQkGBQMFAQEAAAABAAIDBBEFBwYSEyExIkFRYXGBkaGxFDJCYoLBIzNScqJTc7IkQ0SS0bM0/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAIBA//EACERAQEAAgMAAwADAQAAAAAAAAABAhESITEyQVETIkID/9oADAMBAAIRAxEAPwDeKiIgqKIgqiIgqiIgIl0QEREBdHppjYoKKapuNcN1Ih0zO3N/97l3i0lnHju3q2UUbvw6UXeAdxqHgf4iw+oqcrqNxm6z3LHSA1tC0Su156c7KUne5w4tee0eYKzBefMtMc9hxBgeS2KotBKDuAJPIeesO3djivQSYXcblNVURFSRERAREQEREBERAREQVFFUERVEBERAREQRVEQFFUQQohRB1Wk+MNoaSaqf/tsOqP1Snc1vebLRug2EOxPEm7a72B5qKhx5wHXt9TiB2XWR50Y9tJo8OjPIhAlmtzzOvqt7m7/q6lleUuAey0XtDxaar1ZHX4iEX2bfAk/Uud/tlp0nWO2B5uYB7NWipjGrFVgu3cBO33h37j3lbOy7x726gie43mi/Bm6ddo3O7xYr6afYCK+hlhAvKz8WE8+1aDu7wSO9apypx00leIJDqw1X4Tr8GzC+o7x5P1J8cj3FvlFAqujmIiICIiAiIgIiICIiAiIgqKKoCKIgqIogqKIgqIogq4GOYmykp5qqT3YmOdbhcgbm95sFzlqbOvHt8WGxnhaae38GH/LwU5XUbJusM0aw+TFsTaJbu2sjp6h3MIg65HZwaO0L0VGwNAa0AAAAAcABwC19k5gOwpHVkjbSVRuzpFO33fE3PZZbDWYTpud7LLQWaGBmixB0sY1Iqm88ZG7VlvywOw7+9b9WJZl4D7bh8mzF5oPxouk6vvM72377Lc5uGN1XP0IxwV9DDUEjaW1JQOaZu4+PHvXfLR+T+P8As9WaOQ2jq7Bt+AqBw8RceC3gmN3DKaqqIipIiIgIiIKiiICqiICIiAqERAREQQqoiCIiICIiDjYlWsp4ZKiU6rImOe49QF155oIJcZxQa19apmL5Dx1YRx8GgAdy2BnTj+pFHh0Z5UtpZrHhEDyWntO/uX7yWwLUgkxB4s6cmOK437Frt7h2uH8Qud7ulzqbbIp4WxsbGwarGNDWgcA0CwC+iIuiBCiIPPWn+DOw7EnOi5DHuFTTuG7VOtew/a4ei3dorjLa6jgqm8Xss8fplG5zfFdBmvgPtVA6ZgvLSa0zbC5MVvxG+G/6Vh+TGPbOeTD5Hcif8SK5/wB5o3t72j+K5zrJ0veLcyIi6OYiIgIiIFksqiD8oqUQRFUQEVUQFVEugqiE9K4FXjdJDvmqYIv3ysb91mxz0WKVmYuFxf8AKEh6ImPl8wLea6Srzeom/lQVEvaGRjzKzlG8a2MvlVTtijfLIQ1kbXPcTwDQLkrUdXnFOd0FHEzoMkj5PIAeqxrHcwa+sifTzPiZFILPZHGGXbfhckmyy/8ASKmFcaeSXGcUNr61VPZo/RADu8GDxuvQ+H0jIIo4IhqsiY1jR8rRYLWWS2AECXEZGkF34MNxY6m4vf3mw7itqphPszoiIrQIiIPy9oIsRcHcQeg8y866WYbJhWJOEHI1JGz0zubUJu0dxBHcvRiwDODAfaKQVcbby0puQBcmBxs4dxse4qM5uKxuqy/AsUZWU0NVH7srA63GzuDm9xuF2C85aO6a1uHx7CmkZs9cu2cjA8Bx425wsoo84altttSQSdJY98R8DdZM59tuFblRa2pM4KV1ttTVEXSWlkg9QV3VHmThcnGoMR6JY3s87W81XKJ41l6LraPSCim/Jq6eT9szCfVdi1wO8EEdI3hUxVVEQEURBUSyIMQxnMegpJHwSbd0sZ1XMbC4b+11hbrWOVmccYvsKKR3QZZWs8mgrItPtC2YlHtI9WOrjb+HJwDm/wBN/V0HmWj4Im01Ts6+nc9sTy2aDWdE+w3GzmkG/OOlcsrlHTGSxmVZm5XO/Kipoeuz5D5ldNUaeYtObNqpBf4YGNZ5tF/NbY0b0bwaWGOpo6SCRjhcOeHTOB52nXJII6FlFPRxR7ooo4/2Ma30W8bfs5SfTzw3DcXq95ZiFRfnldO4eLzZdhR5ZYpJvdDHD1yytv8Axut/InBnNpykyeqDbbVcMfVGx8h87Bd3R5QUjbGaoqZT0N2cTfQnzWyEWzCM51iVJlvhUf8Axtr1yySSeV13dHo/RQfkUdNF1sgiafEC67JFWozdRrQNwsOoCyqItYIiICIiAoQqiDgVmC0s+6elp5v7kMUnqF0tXl5hUl/9I2M9MTnxeQNvJZUizUbutdVmUNE65imqYTzDWZI3zbfzXR1eTsw/IrI39UkToz4tJW4EWcI3lWhKzK7E497Y4Zv7coB8HALrJMDxek3iGvgt8ULpR5xlejkU/wAcbzrztBppi1PuNVUbuadok8S8X813FHm1Xs/MZTT9rHMP8St2z00bxaRjHj52td6roMY0XwrUfLVUlMxjGlz5NXY2aBvJc2xTjf05T8YZR5xt4T0Th0mKUO8nAeq77Ds0sPmLWEVEb3EBrTCXkuPADVutOY/JSyVLhhsD4oL6sbC+SZ7zf3rOJIvzBbay30DFGBWVjQ6rcOQziImn1f0nm4BZjcrW5SSM79p+V/8A1KL7WRdO3MKwzMDQlmIx7aG0dZG3kO4Ne0fA/wCx5lmaiWbbLp550T0lqMHqXRyNfs9fVqKd24gj4h0OHTzrfeF4jFVQsqKd4kjkFw4eYPQR0LFMxNB24gw1FOAysY3ceAlaPgd19BWsdDtKZ8IqHRyteYS/VqKd25zXDcXtB4OHn4LnLx6q7/bt6FRcXDa6KoiZPA8SRyAFrgeb7FcpdXMREQEREBERARVEERVEERVEERVRARVRARLr5zztY1z3kMa0FznONgGjiSUEqahkbHSSODGMBc5zjYBo5yVonMDTV+JSez0+s2ka4BjQDrSvvYOcBx38G/dfTMPTh+IPNLTazaRrrbr60zwdziP034DvWW5aaA+z6lfXNvOReGJw/LH6z8/oudvLqOknGbr6ZbaBilDa2tbepcLxxmxETSOJ+f0Wxksqrk0i3YiItYiKqICwPMXQZte01VMAysY3sbKwfCfm6D3dmeIVlm2y6efdCNLZsJndFM15p3PtPAffY8bi9oPBw5xzrfVBWRzxsmhe2SOQBzXNNwQVhGZGggrWmrpGhtW0cpgsBM0cx+ccx7lr/QXTGXC5jDOHupXOIliIOvG+9i9o5iOdvP2rnLx6q7Jl3G/0Xxo6qOaNk0LxJHI0OY9u8Fp519l1cxERAREQEVRBFURBEVRBFURBFUX4kkABc4gAAkk7gAOJKCTSNY0ucQ1rQSXE2AA5yVo/MbTp1c40lIXNpGus5w3GZ45/2dA5+K+mZGnZrHOo6NxFK0kPeLgzOB/wHmu7yz0B1NTEK9nL96CBwHJ6JXD9XQObiuVvK6jpJruvrlnoDstSvr2finlQQuHuC257wfi6BzdvDZ4CqLpJpFu0VRFrBERBEREBERBCFr3MnQQVYdWUbQKpovJGNwlaB/mPNbDRZZtsumg9AdNJMNl2FRrOpXOIkYQdeJ/O9oPXxb91velqWSsbLE5skb2hzHtILS08CCteZlaB+0h1dRN/1AF5Ymi21aPiHzjzWKZYaWzUtRFh8gdLBUStja34o5XutrC/Nc7x3rnLcbqrs5TcbzRAi6uYiIgIiICIqggREQEVUQfl7wASTYAXJJsAOlaWzJ08NUXUNE61MDaWUHfK4HgD+j17Fzs29LpRLJhcOtExrWGeS9i8OYHBg+Wx39JTLLQLX1MQrmcnc6ngcPe5xK8dHQO9c8rvqLk1N19cstAfcxCvZ0Op4HjvErwe6w7+hbYsgRXJpNu1REWsREVQEREEREQFVEQVRVRBxcVqNlTzyk22cUj79jSVoXLCnM2L0zjv1DJMe0MP3cFt3Mur2WE1jud8bYh0/iSNYfJxWvskKXWrKmYj8uANB+Z7/wDxpXPLvKRePxtboREXRAiIgqKJdBUUS6CqJdLoCFFUGkM66TVxCKXmmpmj6mOI9CPBbO0Bq9thlE+9zsWsPazk/ZYdnnS3io5wPdkkjJ6nNBA/iV2mS9Xr4a6P+hUyst8rg2Qebyuc6yXe8WfIoi6IVFEQVFEugqKKoIiIgKqIgIiINe52VWrQRRf1alvgxrnetlxcjaXVpqqcjfJO1g/axl/VxXW551V5aKAfCyWRw7S1rfRyy/Kil2eE0555TLL/ANnm3ouc7yX/AJZeiIuiBERBUURBUURAVUVQEUVQYTm/S7TCpHAXMMsUg7NbVJ8HFY3kXVb62D+1KP5NP2WwNMaXbYfWRfqp5SO0NJ+y1Hk1V6mJ7MndNTyN+ppa4eQcud+S58W9kURdEKiiqAiiqAiIgiIiAqoiAiIg0Jm/V6+KSC+6GGKPyLj5uK3RozSbCipITuMdPE0/u1BfzutC4672zGZhx2tcIvpEgZ6BejGiwA6BZc8PavLyRURF0QIix3SbTOjw8ETSbSW26CKz5T277NHWVluhkV1hulWYtHQ3jjPtdQLjZRu5IPzv4DuuVrPSXT+txB2yi1qeFxsIYS4vdfmc4b3HqFlz9FsrqmotLWn2SE2OpxncOzgztO/qUXK3xfHXrMdFc0KWqtFVgUUx4FztaFx6n/D2HxWeteCARYg7wQbiy07pTlTLHeXDXbdnEwSENlA+V3B3YbLG8B0uxDCpNjdxYw2fS1AdYdl97O7ckys9OMvj0OFViOi2YFHX2ZrezVB3bGYgXPyO4O9epZYFcu0WafpEUWj8TMDmuad4c0g9hFl530PeaXGKdrt2zq3QuPaXRlei1510zZ7LjFS4D3Kps47yJFzz+l4fceikX4geHNa8cHNDh3i6+i6IEUVQEURBUURBVFUQRVEQRfGtnEcckh4Mje89jWk/ZfdY9p9V7HDK197HYuYO1/J+6yjS+XsJnxikvv8AxpJnHrax8l/EDxXohaRyUpNavlmtuhpnD6nuaPQFbjxLFIKWMzVMrIYx8T3Btz0AcSeoKMPF5+uUurx7SKloGbSrmbHu5LBd8jj0NYN59FrbSnNhztaLDGag3j2iUcrtYzm7T4LE8F0axDFpDLZ7muPLqpy7U7nH3uwJc/wmH67vSjNGpqNaKiBpITca9wZ3Dt4M7vFdfozl/W4gRNKDTwuNzNNcvd0lrTvPabBbO0Vy8o6LVkePaqgWO0lHJDvkZwHbvKzGyTHfpcpPGO6M6G0eHgGGPXl+KeSzpD2H4R1BZEFUVyaQLptINGaWvZqVUQcbWbI3kyt7Hfbgu5RboaK0pyyq6S8tJeshFzyQBO0DnLfi+nwXx0YzGrKEiKe9XC3cWSkiVvUHnf3Fb6IWM6T6D0eIXdIzZTc08Vmv+rmd3rncPxcy/XI0a0to8QH+nlAktyoX8iUd3OOsXXfArz5pHoPXYa7bNDpomm4qKcOu3rcBvZ28OtdzotmpPBqxV7TVRCw2rbCcDpPM/wBUmf6XH8brWic5qXUxMPtumpYn3+YOew+TW+K3HgmPU1bHtaSZko+IA8tp6HN4t71rnPSl/wDxVA5ttET26rh6Fbn4Yes+0Lqtth1FLxJp4wf3NGqfMFd2sIyfq9phbGX3wyyx9gvrDycs3VTxN9ERFrBERAREQRERAREQFgWdFXqYa2P+vVRM+lrXSerAs9WsM44JqmWgoqaN80h2suqwX3cloJ6Bx3lTl4rH1guiWlzsMjqdhE188+oGyP8AcYxt/hG9xuV8YKfEcanuNpVPB3vcbQxg9futHUN6zvRbKdo1ZcTfrnj7NGSG9j38T2BbNoqOOFjYoWNijaLNYxoa0dwUTC31VykvTAtF8raen1Za4isl46lrQA9nxd+7qWwmMDQGtAaALAAAADoAX6UsukkiLbVS6WSy1giIgIiICIiCELCdKct6Os1pYQKOc3OtGBs3O6XM+4ss3RZZtsunnPFcDxDB5RKdeGxsyphcdmerW5uwrk6Qaby4hRMpauNrpo5WvZOzkggAghzenfxC9ATRNe0se0Pa4Wc1wDmkHmIPFa60pyqgm1pcPcKaQ79kbmEnq52ei53Gzxcyl9cPIqruyup/0vglH1tc0/8Azb4rai1Bldh1Th+KS01XE6IzU7w0nexxY5pu13A7iVt9Xh4nL0RVQqkiIiAiqIIUCqIIVURBCuN/vO/tj/Ioiytjkqoi1iIERBUREBERAREQEREBERAX5KIg49R78X7nf4rkoiyCoiLQREQEREH/2Q==";
            return;
        }
        catsfavorites.push(cat);
        {createfavoritCat(cat)};
       
        
    }    
    return div;
    
}
function updateCatHtml(divElement, cat, likedByMe) {
    divElement.querySelector('#count').innerText = cat.likes;
    divElement.querySelector('#nameImg').innerText = cat.title;
    divElement.querySelector('#like').src = likedByMe == false ? "https://files.slack.com/files-pri/T0B1MT8Q4-FL6QF03TP/favorites_on.jpg" : "https://files.slack.com/files-pri/T0B1MT8Q4-FKVCCHFH9/favorites_off.jpg";
    //divElement.querySelector('.getCat').src ="https://images.ua.prom.st/918272149_w40_h40_shejker-osnova-zvyozdochka.jpg";
}
document.getElementById('show').onclick = function () {
    if(document.getElementById('urlimg').value === ""){
        alert("URL not defined!!!");
        return false;  
    }
    let urlnew = document.getElementById('urlimg').value;
    document.getElementById('img-cat-create').src = urlnew;
}



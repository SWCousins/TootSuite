

/*====== Model ======*/

var model = {

    currentCat : null,

    cats : [
        {   
            name : "Tiger",
            count : 0,
            imgSrc : "Assets/tiger.jpg"
        },
        
        {   
            name : "Selene",
            count : 0,
            imgSrc : "./Assets/selene.jpg"
        },
        
        {   
            name : "Rosco",
            count : 0,
            imgSrc : "./Assets/rosco.jpg"
        },
        
        {
            name : "Regis",
            count : 0,
            imgSrc : "./Assets/regis.jpg"
        },
        
        {
            name : "Sir Pennington",
            count : 0,
            imgSrc : "./Assets/sir_pennington.jpg"
        },
        {
            name : "Zorro",
            count : 0,
            imgSrc : "./Assets/zorro.jpeg"
        },
        {
            name : "Raindrop",
            count : 0,
            imgSrc : "./Assets/raindrop.jpeg"
        }
    ]

};

/*======= View (2 parts, list and cat) =======*/
       

var catView = {
    
    init : function () {

        catView.catElem = document.getElementById("cat");
        catView.catNameElem = document.getElementById("cat-name");
        catView.catImgElem = document.getElementById("cat-pic");
        
        this.catImgElem.addEventListener('click', function(){
            control.incrementCounter();
        }, false);
        
        catView.render();
        console.log("View init called")
    },
        
    render : function () {
        var currentCat = control.getCurrentCat();
        catView.catNameElem.innerHTML = currentCat.name+": "+currentCat.count; 
        catView.catNameElem.style.textAlign = "center";
        catView.catImgElem.src = currentCat.imgSrc;
        catView.catImgElem.height = 550;
        catView.catElem.style.float = "right";
    }


};

var catListView = {

    init : function () {
        this.catListElem = document.getElementById('cat-list');
        catListView.render();
        
        },

render : function () {
    
    //Create empty variable to hold a cat object, 
    //  <li> DOM element and increment counter for the for function
        var cat, elem, i;
    //Create a variable to hold the array of cat objects
        var cats = control.getCats();
    
    //Calling the cat list <ul> element set up in the init function
        this.catListElem.innerHTML = '';
        this.catListElem.style.float = "left";
    
    //The for loop to go over each cat in the array and create 
    //  new clickable item for each cat
    
    for (i=0; i< cats.length; i++) {
        //First grab the cat object at the current index
        cat = cats[i];
        
        //Create a new list item and set it to the current Cat name
        elem = document.createElement('li');
        elem.textContent = cat.name;
        //And add some style
        elem.style.cursor = "pointer";
        elem.style.listStyle = "none";
        elem.style.backgroundImage = "url("+cat.imgSrc+")";
        elem.style.backgroundSize = "40px";
        elem.style.backgroundRepeat = "no-repeat";
        elem.style.backgroundPosition = "left center";
        elem.style.margin = "0";
        elem.style.padding = "16px 0 16px 64px";
        
        //Event listener for the <li> element take a copy of the cat at
        //  index i and calls control to change the model and update the view
        elem.addEventListener('click', (function(catCopy) {
               return function() {
            control.setCurrentCat(catCopy);
            catView.render();
                   
/*===This v RIGHT HERE v is what I had trouble with before I added the
                                        'false' bool value to create the bubbling context.====*/
               };
        })(cat), false);
        
        
        //Add the cat the the list
        this.catListElem.appendChild(elem);
        }
}
};

/*======Controller=======*/

var control = {

    init : function () {
        model.currentCat = model.cats[0];
        catView.init();
        catListView.init();
        console.log("init called")
        },

    getCats : function () {
        return model.cats;
        },
        
    getCurrentCat : function () {
        return model.currentCat;
        },

    setCurrentCat : function (cat) {
        
        model.currentCat = cat;
        },
            
    incrementCounter : function () {
        model.currentCat.count++;
        catView.render();
    }


};

control.init();
class Food{
    constructor(){
        this.image = loadImage("images/Milk.png");
        this.image1 = loadImage("images/Bed Room.png");
        this.image2 = loadImage("images/Garden.png");
        this.image3 = loadImage("images/Wash Room.png");
    }

    getFoodStock(){
        var foodStockRef = database.ref('foodStock');
        foodStockRef.on("value",function(data){
            foodS = data.val();
        });
    }

    updateFoodStock(s){
        database.ref('/').update({
            foodStock: s
        });
    }

    display(){

        var x = 80, y = 100;
        imageMode(CENTER);
        image(this.image,700,300,70,70);

        if (foodS !== 0){
            for (var i=0; i<foodS; i++){

                if (i%10 === 0){
                    y = y+50;
                    x = 80;
                }
                image(this.image,x,y,50,50);
                x = x+30;
            }
        }
        bedroom(){
            this.image1(this.image,600,200,1200,400);
        } 
        garden(){
            this.image2(this.image,600,200,1200,400);
        } 
        washroom(){
            this.image3(this.image,600,200,1200,400);
        }


    }
}


document.querySelector("button").addEventListener("click", getCocktail)


function getCocktail(){
    document.querySelector("#ingredients").innerText= ""
    let drink = document.querySelector("input").value
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res=> res.json())
    .then(data=> {
        let randomDrink = data.drinks[Math.floor(Math.random()*data.drinks.length)]
        console.log(randomDrink)
        document.querySelector("img").src = randomDrink.strDrinkThumb
        document.querySelector("h2").innerText = randomDrink.strDrink
        document.querySelector("h3").innerText = randomDrink.strInstructions
        Object.keys(randomDrink).forEach(key => {
            if(key.includes("Ingredient")){
                let value = randomDrink[key]
                if(value != null){
                    document.querySelector("#ingredients").innerText += value + "\n"
                    console.log(value)
                }
                
                
                
            }
            
        })
        // for(i=1;i<=20;i++){
        //     if(randomDrink.strIngredient[i]){
        //         console.log(randomDrink.strIngredient)
        //     }
            
        // }
    
        
    })
    .catch(err=> {
        console.log(`error ${err}`)
    })
}


document.querySelector("button").addEventListener("click", getCocktail)


function getCocktail(){
    document.querySelector("#ingredients").innerText= ""
    let drink = document.querySelector("input").value
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res=> res.json())
    .then(data=> {
        let randomDrink = data.drinks[Math.floor(Math.random()*data.drinks.length)]
        console.log(randomDrink)
        document.querySelector("h3").innerText = 'For your drink you will need:'
        document.querySelector("h4").innerText = 'Instructions'

        document.querySelector("img").src = randomDrink.strDrinkThumb
        document.querySelector("h2").innerText = randomDrink.strDrink
        document.querySelector("#how-to").innerText = randomDrink.strInstructions

        Object.keys(randomDrink).forEach(key => {
            if(key.includes("Ingredient")){
                let value = randomDrink[key]
                if(value != null){
                    //make a new list elements
                    const node = document.createElement("li");
                    const img = document.createElement("img")
                    img.src = `https://www.thecocktaildb.com/images/ingredients/${value}-Medium.png`
                    img.className = 'single-ingredient';
                    img.alt = value
                    console.log(node)
                    const textnode = document.createTextNode(value);
                    node.appendChild(textnode);
                    
                    //adding ingredients to the list and display them in the dom
                    
                    document.getElementById("ingredients").appendChild(node);
                    node.appendChild(img);
                    
                    console.log('#ingredients')

                }
            }
            
        })

        
    })
    .catch(err=> {
        console.log(`error ${err}`)
    })
 
}


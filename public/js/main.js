document.querySelector('button').addEventListener('click', requestAPI)

async function requestAPI(){
    const drink = document.querySelector('input').value
    try{
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        const data = await response.json()
        const drinkData = data.drinks
        // 6 lines below clears dom when button click
        document.querySelector('#drinkDetail').style.display = 'none'
        document.querySelector('#ingredientsMeasure').innerHTML = ''
        document.querySelector('#drinkName').innerHTML = ''
        document.querySelector('#instructions').innerHTML = ''
        document.querySelector('img').src = ''
        document.querySelector('#initalListOfDrinks').innerHTML = ''
        for(let i = 0; i < drinkData.length; i++){
            const li = document.createElement('li')
            li.textContent = drinkData[i].strDrink
            document.querySelector('#initalListOfDrinks').appendChild(li).setAttribute('onclick', 'drinkDetail')
            li.classList = 'initalList'
            li.onclick = function(){
                document.querySelector('#initalListOfDrinks').innerHTML = ''
                for (let index = 1; index < 16; index++) {
                    if(drinkData[i][`strIngredient${index}`] || drinkData[i][`strMeasure${index}`]){
                        const li = document.createElement('li')
                        if(drinkData[i][`strMeasure${index}`] == null){
                            li.textContent = drinkData[i][`strIngredient${index}`]
                        }else{
                            li.textContent = drinkData[i][`strIngredient${index}`] + ": " + drinkData[i][`strMeasure${index}`]
                        }
                        document.querySelector('#drinkDetail').style.display = 'block'
                        document.querySelector('#ingredientsMeasure').appendChild(li)
                        document.querySelector('#drinkName').innerHTML = drinkData[i].strDrink
                        document.querySelector('#instructions').innerHTML = drinkData[i].strInstructions
                        document.querySelector('img').src = data.drinks[i].strDrinkThumb
                  }
            } 
        }
    }
    }catch(error){
        console.log(error)
    }
}


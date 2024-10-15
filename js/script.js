//                    1.
categories = document.querySelector('#categories')
categoriesList = categories.children
categoriesNum = categoriesList.length
console.log("У списку " + categoriesNum / 2 + ' категорій')
nameCategories = ''
for(let i=0;i < categoriesNum;i++){
    node = categoriesList[i]
    if (node.nodeName == 'H2'){
        nameCategories = node.textContent
    }
    else{
        console.log('Катогорія: ' + nameCategories)
        nodesChildrens = node.children
        let i = 0
        for(element of nodesChildrens){
            i++
        }
        console.log('Кількість елементів: ' + i)   
    }
}
//                    2.
const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
   ];
ingredientsListHtml = document.querySelector('#ingredients')
for(element of ingredients){
    lielement = document.createElement('li')
    textelement = document.createElement('h3')
    textelement.textContent = element
    lielement.append(textelement)
    ingredientsListHtml.append(lielement)
}
//                  3.
galleryListHtml = document.querySelector('#gallery')
const images = [
    {
     url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
     alt: 'White and Black Long Fur Cat',
    },
    {
     url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
     url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
     alt: 'Group of Horses Running',
    },
   ];
for(element of images){
    lielement = document.createElement('li')
    textelement = document.createElement('img')
    textelement.alt = element['alt']
    textelement.src = element['url']
    textelement.style.width = '30%'
    lielement.append(textelement)
    galleryListHtml.append(lielement)
}
//                    4.
outputNum = document.querySelector('#value')
plusButton = document.querySelector('button[data-action="increment"]')
minusButton = document.querySelector('button[data-action="decrement"]')
counterValue  = 0
increment = () => {
    counterValue++
    outputNum.textContent = counterValue
}
decrement  = () => {
    counterValue--
    outputNum.textContent = counterValue
}
plusButton.setAttribute('onclick','increment()')
minusButton.setAttribute('onclick','decrement()')
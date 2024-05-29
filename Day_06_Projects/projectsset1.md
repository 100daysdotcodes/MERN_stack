# projects related to DOM

## Projects Link
[click here](linkhere)


### solution code

## Project 01 : Color switcher

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button){
  console.log(button)
  button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)

    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'purple'){
      body.style.backgroundColor = e.target.id
    }




  });
});

 ```

 ## Project 2 BMI Calculator

 ```Javascript
 const form = document.querySelector('form')
form.addEventListener('submit',function(e){
e.preventDefault()

const height = parseInt(document.querySelector('#height').value)
const weight = parseInt(document.querySelector('#weight').value)
const results = document.querySelector('#results')

if(height === '' || height <= 0 || isNaN(height)){
  results.innerHTML = `please give valid height ${height}`;
} else if(weight === '' || weight <= 0 || isNaN(weight)){
  results.innerHTML = `please give valid height ${weight}`;
}
else{
  const BMI = (weight/(height*height/10000)).toFixed(2)
  
  if(BMI <= 18.6){
    results.innerHTML = `<span> your BMI is ${BMI} and you are under weight </span>`
  }
  if(BMI > 18.6 && BMI <= 24.9){
    results.innerHTML = `<span> your BMI is ${BMI} and you are normal  </span>`
  }
  if(BMI > 24.9){
    results.innerHTML = `<span> your BMI is ${BMI} and you are over weight </span>`
  }
}


})

 
 ```

## Project 3 
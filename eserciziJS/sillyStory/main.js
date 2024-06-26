const customName = document.getElementById('customname');//campo di testo
const randomize = document.querySelector('.randomize');//bottone
const story = document.querySelector('.story');//paragrafo storia

function randomValueFromArray(array){   // seleziona un elemento casuale in un array
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

//testo della storia
const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.'

//array da cui prendere i vaolri random
const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

//lancia la funzione quando viene premuto il tasto
randomize.addEventListener('click', result);

//funzione
function result(){
  let newStory = storyText;
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);
  newStory = newStory.replaceAll(':insertx:', xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);
  
  if(customName.value !== ''){
    const name = customName.value;
    newStory = newStory.replace('Bob',name);
  }

  if(document.getElementById("uk").checked){
    const weight = `${Math.round(300/14)} stones`;
    const temperature = `${Math.round(((94-32)*5)/9)} celsius`;
    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

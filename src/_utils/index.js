const shuffle = originalArray => {
  var array = [].concat(originalArray);
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const random = {
	pick: array => array[Math.floor(Math.random()*array.length)]
}

const colors = {
	correct: '#5ad258',
	wrong: '#d25858'
}

export {
	shuffle,
	random,
	colors
}

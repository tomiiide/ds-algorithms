function bubblesort(array) {
  for (let j = 0; j < array.length; j++) {
    for (let index = 0; index < array.length; index++) {
      let first = array[index];
      let second = array[index + 1];

      if (first > second) {
        array[index + 1] = first;
        array[index] = second;
      }
    }
  }
  return array;
}

console.log(bubblesort([9, 4, 6, 7, 6]));

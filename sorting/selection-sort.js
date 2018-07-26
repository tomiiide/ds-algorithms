function selectionsort(array) {
  function findLargest(array) {
    let largest = array[0];
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      if (element > largest) largest = element;
    }
    return largest;
  }

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
  }
}

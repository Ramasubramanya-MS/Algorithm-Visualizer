/* export const getMergeSortAnimations

export const mergeSort = (array, animations = []) => {
  if (array.length === 1) return array;
  const middleIdx = Math.floor(array.length / 2);
  const firstHalf = mergeSort(array.slice(0, middleIdx));
  const secondHalf = mergeSort(array.slice(middleIdx));
  const sortedArray = [];
  let i = 0;
  let j = 0;
  while (i < firstHalf.length && j < secondHalf.length) {
    if (firstHalf[i] < secondHalf[j]){
      sortedArray.push(firstHalf[i++]);
    }else {
      sortedArray.push(secondHalf[j++]);
    }
  }
  while (i < firstHalf.length) sortedArray.push(firstHalf[i++]);
  while (j < secondHalf.length) sortedArray.push(secondHalf[j++]);
  return sortedArray;
};
*/

export function getMergeSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxillaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxillaryArray, animations);
  return animations
}

function mergeSortHelper(
  mainArray,
  startIdx,
  endIdx,
  auxillaryArray,
  animations,
){
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxillaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxillaryArray, middleIdx+1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxillaryArray, animations);
}

function doMerge(
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxillaryArray,
  animations,
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while ( i <= middleIdx && j <= endIdx) {
    animations.push([i,j]);
    animations.push([i,j]);

    if (auxillaryArray[i] <= auxillaryArray[j]){
      animations.push([k,auxillaryArray[i]]); //Overwriting the value @ k from auxArr @ i
      mainArray[k++] = auxillaryArray[i++];
    }else{
      animations.push([k,auxillaryArray[i]]);
      mainArray[k++] = auxillaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    animations.push([i,i]);
    animations.push([i,i]);
    animations.push([k, auxillaryArray[i]]);
    mainArray[k++] = auxillaryArray[i++];
  }
  while (j <= endIdx) {
    animations.push([j, j]);
    animations.push([j, j]);
    animations.push([k, auxillaryArray[j]]);
    mainArray[k++] = auxillaryArray[j++];

  }
}


function swap(items=[], leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function partition(items=[], left, right, animations=[]) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //swapping two elements
            animations.push([i,j, items[i], items[j]]);
            animations.push([i,j, items[i], items[j]]);
            animations.push([i,j, items[i], items[j]]);
            i++;
            j--;
        }
    }
    return i;
}

export function quickSort(items=[], left, right, animations=[]) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right, animations); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1, animations);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right, animations);
        }
    }
    return items;
}

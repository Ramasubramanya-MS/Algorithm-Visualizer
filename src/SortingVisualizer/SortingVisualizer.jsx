import React from 'react';
import {getMergeSortAnimations} from '../sortingAlgorithms/sortingAlgorithms.js';
import {quickSort} from '../sortingAlgorithms/sortingAlgorithms.js';
import {bubbles} from '../sortingAlgorithms/bubblesort.js';
import './SortingVisualizer.css';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 310;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

const NUMER_OF_BARS=175;
const DEFAULT_COLOR= 'yellow';
const COLOR_CHANGE= 'red';
const COLOR_DIFF='yellow';
const ANIMATION_SPEED=15;

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < 130; i++) {
      array.push(randomIntFromInterval(5, 500));
    }
    this.setState({array});
  }

  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? 'red' : 'yellow';
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 15);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * 15);
      }
    }
  }

  quicksort(){

    const animations=[];  //stores all the swaps to be done
     quickSort(this.state.array, 0, this.state.array.length-1, animations);

     for(let i=0;i<animations.length;i++){
      const arraybars= document.getElementsByClassName('array-bar');
        const ischange = i%3!==2;
        if(ischange){
          const [firstidx, secondidx, firsth, secondh]= animations[i];
          let color1;
          let color2;
          if(i%3===0){
              color1=COLOR_CHANGE;
              color2= COLOR_DIFF;
          }
          else{
              color1= DEFAULT_COLOR;
              color2= DEFAULT_COLOR;
          }
            setTimeout(()=>{

              arraybars[firstidx].style.backgroundColor= color1;
              arraybars[secondidx].style.backgroundColor= color2;

            }, i*ANIMATION_SPEED);
        }
        else {
          setTimeout(()=>{
            const [firstidx, secondidx, firsth, secondh]= animations[i];
            const firststyle= arraybars[firstidx].style;
            const secondstyle= arraybars[secondidx].style;
            firststyle.height=`${firsth}px`;
            secondstyle.height=`${secondh}px`;
               }, i*ANIMATION_SPEED);
        }


    }

  }

  heapSort() {

  }

  bubblesort(){


    const animations= bubbles(this.state.array);

    for(let i=0;i<animations.length;i++){
      const arraybars= document.getElementsByClassName('array-bar');
        const ischange = i%3!==2;
        if(ischange){
          const [firstidx, secondidx, firsth, secondh]= animations[i];
          let color1;
          let color2;
          if(i%3===0){
              color1=COLOR_CHANGE;
              color2= COLOR_DIFF;
          }
          else{
              color1= DEFAULT_COLOR;
              color2= DEFAULT_COLOR;
          }
            setTimeout(()=>{

              arraybars[firstidx].style.backgroundColor= color1;
              arraybars[secondidx].style.backgroundColor= color2;

            }, i*ANIMATION_SPEED);
        }
        else {
          setTimeout(()=>{
            const [firstidx, secondidx, firsth, secondh]= animations[i];
            const firststyle= arraybars[firstidx].style;
            const secondstyle= arraybars[secondidx].style;
            firststyle.height=`${firsth}px`;
            secondstyle.height=`${secondh}px`;
               }, i*ANIMATION_SPEED);
        }


    }


  }

  testSortingAlgorithms() {
    for (let i = 0; i < 100; i++) {
      const array = [];
      const length = randomIntFromInterval(1, 1000);
      for (let i = 0; i < length; i++) {
        array.push(randomIntFromInterval(-1000, 1000));
      }
      const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
      const mergeSortedArray = getMergeSortAnimations(array.slice());
      console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
    }
  }

  render() {
    const {array} = this.state;

    return (
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              backgroundColor: 'turquoise',
              height: `${value}px`,
            }}></div>
        ))}
        <div className="Options">
        <button onClick={() => this.resetArray()}><b>Generate New Array</b></button>
        <button onClick={() => this.mergeSort()}><b>Merge Sort</b></button>
        <button onClick={()=>this.quicksort()}><b>Quick Sort</b></button>
        <button onClick={()=>this.bubblesort()}><b>Bubble Sort</b></button>
        <button onClick={() => this.heapSort()}>Heap Sort</button>

        </div>
      </div>
    );
  }
}

// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
}

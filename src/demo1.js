
// druhy parametr for each je klic
  const maAnonymniFunkce2 = (element, key) => {
    console.log('element 2',element);
    console.log('element 2',key);
  }


function first(numberOne, secondNumber) {

  const maAnonymniFunkce = (element) => {
    console.log('element',element);
  }

// // druhy parametr for each je klic
// //  const maAnonymniFunkce2 = (element, key) => {
// //    console.log('element 2',element);
//     console.log('element 2',key);
//   }

  // treni parametr for each je cele to pole
    const maAnonymniFunkce2 = (element, key, attr3) => {
      console.log('element 2',element);
      console.log('element 2',key);
    }

console.log('NUMBER ONE => ', numberOne);
console.log('NUMBER SECOND => ', secondNumber);
const obj = { atr: 'nevim' }
const myArray = [2,'aaa',obj]
console.log ( myArray)

// forEach momoci funkde
myArray.forEach(function(element) {
  console.log('pvek pole:',element)

})
// forEach momoci anonimni funkde
myArray.forEach((element) => {
  console.log('pvek pole:',element)

})

// forEach momoci anonimni funkde definovane venku
myArray.forEach(maAnonymniFunkce)

//volani anonymniFunkce
//maAnonymniFunkce()

// filter vytvori nove pole, ktere bude podle moji podminky vyfiltrovane, tak6e kdyz chci se zbavit tak musim returnem oyna4it, ze je to false
  const smazatArray = myArray.filter((element) => {
    if (element === 'aaa') {
      return false;
    }
    return true;

  })

}



export function second(someText, someNumber) {

const result = `${someText}  -- ${someNumber}`;

return result;

}



export default first;

// forEach 

// double Values

const double = ([5,1,2,3,10]) 

const doble = double.forEach((value, index, arr)  => {


    arr[index] = value * 2;
});

console.log(double);




// onlyeEvenValues

const values = [5,1,2,3,10]

function onlyEvenValues(arr) {

    let result = [];
    arr.forEach(value => {

        if (value % 2 === 0) {

            result.push(value);
        }
    });
    return result;
}

const evenValues = onlyEvenValues(values);
console.log(evenValues);

// showFirstAndLast

const firstLast = ['colt','matt','tim','test']

 function showFirstAndLast(arr) {

    let result = []

    arr.forEach(element => {

        if (typeof element === 'string' && element.length > 0) {

            const firstLetter = element[0];
            const lastLetter = element[element.length - 1];
            result.push(firstLetter +  lastLetter);
            
        }


    });

    return result;
 }

 const lastFirst = showFirstAndLast(firstLast);

 console.log(lastFirst);

//  addKeyAndValue

const addName = [
    {name : 'ELIE'},
     {name: 'TIM'},
      {name : 'MATT'},
       {name: 'COLT'}
    ];

  function addTitle(arr) {
 arr.forEach(person => {
    person.title = 'instructor';
});

    }
    addTitle(addName);
    console.log(addName);

    // vowelCount

    const  vowel = ('I am awesome and so are you');
 
    // Create this function it only counts how many, but it does not separete the vowels!!!
    // function vowelCount(str) {

    //     const vowels = ("aeiouAEIOU");
    //     let count = 0

    //     Array.from(str).forEach(char => {
    //         if (vowels.includes(char)) {

    //             count++;
    //         }
    //     });
    //     return count;
    // }

    // console.log(vowelCount(vowel));

    function vowelCount(str) {

        const vowels =('aeiou');
        const vowelNumbers = {a:0, e:0, i:0, o:0, u:0};

        Array.from(str.toLowerCase()).forEach(char => {

            if(vowels.includes(char)) {

                vowelNumbers[char]++;
            }

        });

        Object.keys(vowelNumbers).forEach(key => {

            if (vowelNumbers[key] === 0) {
                delete vowelNumbers[key];
            }
        });

        return vowelNumbers;
    }

    console.log(vowelCount(vowel));

    // map
    // doubleValuesWithMap

    const valuesMap = [1,-2,-3 ];

const doubleValue = (value) => value * 2;
const doubledArray = valuesMap.map(doubleValue);

console.log(doubledArray);

// valTimesIndex

const timeIndex = [1, 2, 3];

function valIndex(arr) {

return arr.map((element, index) => element * index);


}

const resultArray = valIndex(timeIndex);
console.log(resultArray);

// extractKey

const extraKey = [

{name: 'ELIE'},
{name: 'TIM'},
{name: 'MATT'},
{name: 'COLT'}
];
function extractName(arr){
return arr.map(item => item.name);

}
const outNames = extractName(extraKey)

console.log(outNames);

// extractFullName

const fullName = [

    {first: 'Elie', last:"Schoppik"},
    {first: 'Tim', last:"Garcia"},
    {first: 'Matt', last:"Lane"},
    {first: 'Colt', last:"Steele"}
];

function removeItems (arr) {
return arr.map(function(val){

    return val.first +' ' + val.last;


});


}

const funcDelete = removeItems(fullName);
console.log(funcDelete);

// filter
// filterByValue

const catOwner = [
{first: 'Elie', last:"Schoppik"},
  {first: 'Tim', last:"Garcia", isCatOwner: true},
  {first: 'Matt', last:"Lane"},
  {first: 'Colt', last:"Steele", isCatOwner: true}
]


function catPeople(arr){

return arr.filter(person => person.isCatOwner === true);

}

const funcCat = catPeople(catOwner);

console.log(funcCat);

// find

const findNum = ([1,2,3,4,5]);
const findThis = [3];


function findThree (arr,val) {

return arr.find(element => element === val);

}

const funcThree = findThree(findNum,3);

const fakeFunc = findThree(findNum,6);

console.log(funcThree);
// just using this as example.
console.log(fakeFunc);

// findInObj

const foundFirst = [
{first: 'Elie', last:"Schoppik"},
{first: 'Tim', last:"Garcia", isCatOwner: true},
{first: 'att', last:"Lane"},
{first: 'Colt', last:"Steele", isCatOwner: true}
];

function firstServe(arr,key,val) {

return arr.find(obj => obj[key] === val);

}

const gimmeFirst = firstServe(foundFirst,'isCatOwner',true);

console.log(gimmeFirst);

// removeVowels

const byeVowels = ('ELIE');
const vowelBye =('aeiouAEIOU');

function removeLetters(str) {

const newStr = Array.from(str)
    .filter(char => ! vowelBye.includes(char))
    .join('');

return newStr;
}

const byeByeVowels = removeLetters(byeVowels);
console.log(byeByeVowels);

// doubleOddNumbers

const oddNumbers = [1,2,3,4,5];

function ranOutNames(arr){

const doubledOdds = arr
.filter(num => num % 2 !== 0)
.map(num => num * 2);

    return doubledOdds;

}

const finalFunc =ranOutNames(oddNumbers);

console.log(finalFunc);

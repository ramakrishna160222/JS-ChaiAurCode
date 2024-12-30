//for of

const arr=[1,2,3,4,5]

// for (const element of arr) {
//     console.log(element);
// }

const greetings="Hello world"
for (const element of greetings) {
    //console.log(element)
}

//Maps

const map=new Map()
map.set('IN','India')
map.set('US','United States of America')
map.set('FR','FRANCE')

//console.log(map);
for ( const [key,value] of map){
    //console.log(key, ': ',value);  
}

const myObject ={
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}



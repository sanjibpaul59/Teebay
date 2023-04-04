export default function capitalize(str) { 
 const arr = str.split(' ');
 const newArr = arr.map(word => word[ 0 ].toUpperCase() + word.slice(1));
 return newArr.join(' ');
}
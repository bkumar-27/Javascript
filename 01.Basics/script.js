var a = "Sachin";
// console.log(`value :'a', typeof a`);
console.log('value:', a, 'dataType:', typeof a)


var b = 40;
console.log('value:', a, 'datype:', typeof b);

var c = true;
console.log('value:', a, 'DataType', typeof c);

var d = [10, 2, 3, 45, 39];
console.log('Value:', d, 'DataType', typeof d);

var e = {
	name: 'Kumar',
	age: 30
}

console.log('value :', e, 'DataType', typeof e);


var ab;
console.log('Value:', 'DataType', typeof ab);

var k = null;
console.log('value:', k, 'DataType', typeof k);


var g = [1, 2, 3]

console.log('value:', g, ', datatype:', typeof g)
console.log(Array.isArray(g))


var h = () => {

	var x = 100
}


// console.log('value:', h, ', datatype:', typeof h)

console.log('DataType:', typeof h)

//  Here any function Data type  allways be a Function in DataType only

console.log(h());  // undefined  bz of no Return any value





// Here  DataType :
/* 1.string
 2. Number
 3.Boolean
 4.Array
 5.Object
 6.funcation // function
 7.null
 8.Undefined // undefined */

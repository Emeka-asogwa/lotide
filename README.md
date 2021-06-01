# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @emeka-asogwa/lotide`

**Require it:**

`const _ = require('@emeka-asogwa/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Returns the first element of the array.
* `tail(array)`: Returns the whole element except the first element in the array.
* `middle(array)`: Returns the middle element(s) in the array.
* `assertEqual(value1,value2)`: Checks if the two values are equal or not.
* `assertArraysEqual(array1,array2)`: Checks if the two arrays are equal or not.
* `eqArrays(array1,array2)`: Checks if the two arrays are equal, then do a recursive for arrays within the arrays. 
* `assertObjectsEqual(object1,object2)`: Checks if the two objects are equal or not.
* `countLetters(string)`: Returns the count and the associated letters of the string.
* `countOnly(array, object)`: Returns the count of the occurrence of the object in the array.
* `eqObjects(object1, object2)`: Checks equality between the two objects, also do a recursive for objects within objects.  
* `findKey(object,callback)`: Returns the first key for the callback after scanning through the object.
* `findKeyByValue(object,objectValue)`: Returns the key of the object value.
* `letterPositions(string)`: Returns all the indices of each elements in the string.
* `map(array, condition)`: Returns a new array after performing the condition on the array. 
* `reverse(string)`: Returns a reverse of the characters of the string.
* `without(array1,array2)`: Returns the elements that are not in the array2 where array2 is the exclusion array.
* `flatten(array)`: Returns the elements in the array or the elements in the nested array(s).


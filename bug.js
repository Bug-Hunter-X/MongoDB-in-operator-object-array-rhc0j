```javascript
// Incorrect use of $in operator with an array containing an object
db.collection.find({ field: { $in: [{ value: 'a' }] } });
```
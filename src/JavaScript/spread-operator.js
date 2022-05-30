

const first = ['1', '2','3'];
const second = ['4','5','6'];

combined = first.concat(second); // old way to concat the two arrays.

combined = [...first,'a', ...second, 'b']; // using the spread operator.We can easily add the elements in the front, middle or at the end of the two arrays.
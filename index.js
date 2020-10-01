
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];

document.write("a is an " + typeof a);
document. write("<br>");
document.write("b is a " + typeof b);
document. write("<br><br>");
//TODO


// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
a.forEach(function(entry) {
  document. write(entry + " ");
});
document. write("<br>");
a.forEach(function(entry) {
  document. write(entry * 2 + " ");
});



// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
var str;
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
document. write("<br>");
document.write("<br>case 1: ");
document.write(colors.join(' '))

document.write("<br>case 2: ");
document.write(colors.join('+'))

document.write("<br>case 3: ");
document.write(colors.join(','))

// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
a.sort(function(b, c){return c-b});   
document. write("<br><br>");
document.write(a.join(' '))
//TODO should output: [10,8,5,4,1]


// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var mostFrequent = 1, ctr = 0;
var chr;

for (var i=0; i<a.length; i++){
    for (var j=i; j<a.length; j++){
            if (a[i] == a[j]){
            ctr++;
			}
            if (mostFrequent<ctr){
                mostFrequent=ctr; 
                chr = a[i];
            }
        }
    ctr=0;
}
document.write("<br><br>");
document.write(chr+" is the most frequent, it showed up " +mostFrequent +" times ") ;
//TODO should output: 'a'
let oldoldf = 1;
let oldf = 1;
let newf = 0;
let n = +prompt("Input n:");
if (isNaN(n)) {
  alert("Not a Number");
}
document.write(oldoldf + " " + oldf);
for (let i = 0; i < n - 2; i++) {
  newf = oldoldf + oldf;
  document.write(" " + newf);
  oldoldf = oldf;
  oldf = newf;
}

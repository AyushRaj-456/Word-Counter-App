   const countword = () => {

let count = document.getElementById('word').value;

count = count.match( /\w+/g );
count = count.length;

document.getElementById("result").innerHTML = "Total Words : " + count;
}
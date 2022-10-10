// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);

// console.log(document.forms);
// console.log(document.links);

// console.log(document.getElementById('header-title'));
//let header = document.getElementById('header-title');
// header.textContent ='Hello';
// header.innerText ='Thanks';
// header.innerHTML='<h6>goodbye</h6>'; 
// let mainheader =document.getElementById('main-header');
// console.log(header.textContent);
// console.log(header.innerText);
// console.log(header.innerHTML);

// header.style.borderBottom= 'solid 3px #000';
// mainheader.style.borderBottom= 'solid 3px #000';

// let additem = document.getElementById('additem');
// additem.style.color = 'green';
// additem.style.fontWeight=500;
// console.log('hello');

// var items = document.getElementsByClassName('list-group-item');

// items[1].textContent='hello 2';
// //items[1].style.fontWeight ='bold';
// items[2].style.backgroundColor='green';

// for(var i=0;i<items.length;i++) {
//     items[i].style.fontWeight='bold';
// }

var li = document.getElementsByTagName('li');

li[1].textContent='hello 2';
//li[1].style.fontWeight ='bold';
li[2].style.backgroundColor='green';

for(var i=0;i<li.length;i++) {
    li[i].style.fontWeight='bold';
}
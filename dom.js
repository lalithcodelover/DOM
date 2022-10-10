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

// getElementsByTagName

// var li = document.getElementsByTagName('li');

// li[1].textContent='hello 2';
// //li[1].style.fontWeight ='bold';
// li[2].style.backgroundColor='green';

// for(var i=0;i<li.length;i++) {
//     li[i].style.fontWeight='bold';
// }

// QuerySelector

// var header= document.querySelector('#main-header');
// header.style.borderBottom='solid 4px #ccc';

// var input = document.querySelector('input');
// input.value='Hello World';

// var submit= document.querySelector('input[type="submit"]');
// submit.value='SEND';

// var item= document.querySelector('.list-group-item');
// item.style.color='red';

// var seconditem = document.querySelector('.list-group-item:nth-child(2)');
// seconditem.style.color='blue';

//QuerySelectorAll
// var titles = document.querySelectorAll('.title');
// titles[0].textContent= "hello";

// Task
// var secondItem= document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor ='green';

// var thirditem= document.querySelector('.list-group-item:nth-child(3)');
// thirditem.style.display='none';

// Task Queryselectorall
// var secondItem= document.querySelectorAll('li:nth-child(2)');
// secondItem.style.color ='green';

// var odd= document.querySelectorAll('li:nth-child(odd)');
// for(var i=0; i<odd.length;i++) {
//     odd[i].style.backgroundColor ='green';

// } 

 // TRAVERSING THE DOM
 
var itemlist = document.querySelector('#items');
// parentNode
// console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundColor ='green'

// parentElement same
// console.log(itemlist.parentElement);
// itemlist.parentElement.style.backgroundColor ='#f4f4f4'
 

//childNodes (includes line breaks)

// console.log(itemlist.childNodes);

//children (does not include linebreaks)

//console.log(itemlist.children);
// console.log(itemlist.children);
// console.log(itemlist.children[1]);
// itemlist.children[1].style.backgroundColor='yellow';

//firstchild
// console.log(itemlist.firstchild);

//firstelementchild
// console.log(itemlist.firstElementChild);
// itemlist.firstElementChild.textContent='hello';

//lastchild
//console.log(itemlist.lastchild);

//lastelementchild
//console.log(itemlist.lastElementChild);
//itemlist.lastElementChild.textContent='hello';

//nextsibling
//console.log(itemlist.nextSibling);

//nextElementsibling
//console.log(itemlist.nextElementSibling);

//prev Sibling
// console.log(itemlist.previousSibling);

//prevElementSibling
// console.log(itemlist.previousElementSibling);
// itemlist.previousElementSibling.style.color='green';

// createElement
//create a Div
var newDiv = document.createElement('div');

//Add class
newDiv.className='hello';

//Add id
newDiv.id='hello1';

// Add attr
newDiv.setAttribute('title','hello div');

//create text node
var newDivText = document.createTextNode('hello world');

//Add text to Div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
container.insertBefore(newDiv,h1);
//console.log(newDiv);

//create div before item1
var newitem = document.createElement('div');
newitem.className='newitem';
newitem.setAttribute('title','newitem');
var newitemtext = document.createTextNode('hello world');
newitem.appendChild(newitemtext);

var ul = document.querySelector('ul')
var list1 = document.querySelector('li:nth-child(1)');
ul.insertBefore(newitem,list1);
console.log(newitem);

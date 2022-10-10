

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter'); 
//Form submit event
form.addEventListener('submit', addItem);
//Delete Event
itemList.addEventListener('click',removeItem);
//Filter Event
filter.addEventListener('keyup',filterItems);

//Add item
function addItem(e){
    e.preventDefault();
  
// Get input value
var newItem= document.getElementById('item').value;
//Get input description
var newdescription= document.getElementById('description').value;

// create new li element
var li= document.createElement('li');
//Add class
li.className='list-group-item';
// Add text node with input value
li.appendChild(document.createTextNode(newItem));
li.appendChild(document.createTextNode(` ${newdescription}`));
// Create Edit button
var editbtn = document.createElement('button');
editbtn.className='btn btn-dark btn-sm float-right edit';
editbtn.appendChild(document.createTextNode('Edit'));
li.appendChild(editbtn);
itemList.appendChild(li);

//Create delete button element
var deletebtn = document.createElement('button');

//Add classes to del btn
deletebtn.className= 'btn btn-danger btn-sm float-right delete';

// Append textNode
deletebtn.appendChild(document.createTextNode('X'));

//Append button to li
li.appendChild(deletebtn )

//Append li to list
itemList.appendChild(li);


}


// Remove Item
function removeItem(e) {
    if(e.target.classList.contains('delete')) {
        if(confirm('Are you Sure')) {
            var li= e.target.parentElement;
            itemList.removeChild(li);
        }

    }
}

//Filter Items
function filterItems(e) {
    //convert text to lowercase
    var text= e.target.value.toLowerCase();
    //Get lis
    var items =itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
        var itemName= item.firstChild.textContent;
        //description text content
        var description= item.childNodes[1].textContent;
        if(itemName.toLowerCase().indexOf(text) != -1 || description.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }
        else {
            item.style.display = 'none';
        }
    });
}
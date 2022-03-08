/* document.addEventListener('DOMContentLoaded', () => {
  const tBody = document.getElementById('tBody');

  Array.prototype.forEach.call(tBody.children, (tr) => {
    console.log(tr);
  });
}); */

//Updated from Pro JavaScript Techniques (2015), p. 59-60.
//Pass an HTMLCollection to the function with the following line:
//console.log(text(document.getElementsByTagName('li')));

function text(e) {
  var t = [];
  // If an element was passed, get its children,
  // otherwise assume it's an array
  e = e.childNodes || e;
  // Look through all child nodes
  for (var j = 0; j < e.length; j++) {
    // If it’s not an element, append its text value to array t (using shorthand ternary operator ? )
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
    // Otherwise, recurse through all the element's childNodes
    // In pseudo-code: append the childNode value if it is not 1, else continue to its childNode and check, and so forth.
    // Log to console to see where high-level nodes (1) are passed over and nodes of value 3 are pushed to the array.
    // console.log(e[j].nodeType);
    t.push(e[j].nodeType != 1 ?
      e[j].nodeValue : text(e[j].childNodes));
    }
    // Return the matched text
    return t;
  };

  var elm = document.getElementById('firstParagraph');
  console.log(elm.innerHTML);
  console.log(elm.attributes);

  //p.61, doesn't work?
  function hasAttribute(elm, name) {
    return elm.getAttribute(name) != null;
  }

  //a function to set attribute values.
  function attr(elem, name, value) {
    // Make sure that a valid name was provided
    if (!name || name.constructor != String) return '';
    // Figure out if the name is one of the weird naming cases
    name = { 'for': 'htmlFor', 'className': 'class' }[name] || name;
    // If the user is setting a value, also
    if (typeof value != 'undefined') {
      // Set the quick way first
      elem[name] = value;
      // If we can, use setAttribute
      if (elem.setAttribute)
      elem.setAttribute(name, value);
    }
    // Return the value of the attribute
    return elem[name] || elem.getAttribute(name) || '';
  }
  //attr(document.getElementsByTagName('p')[0], 'class', 'header' );

  //uses the previous function attr() to iterate through all elements to assign value to an attribute
  // e.g. attrs('p', 'class', 'main');
  function attrs(elem, attribute, value) {
    var elem = document.getElementsByTagName(elem);
    console.log(elem);
    for (var i = 0; i < elem.length; i++) {
      console.log(elem[i]);
      attr(elem[i], attribute, value);
    }
  }

  // A function to create an element
  // Call it with a version of this: var div = create('div');
  // Then add the new div to the dom after created.
  // var parentNode = document.getElementById('mainContainer');
  // parentNode.insertBefore(create('div'), document.getElementById('titleBlock'));
  function create(elem) {
    return document.createElementNS ?
    document.createElementNS('http://www.w3.org/1999/xhtml', elem) :
    document.createElement(elem);
  }

  //Manually inject HTML into the DOM
  //var listHtml = document.getElementById('monthList').innerHTML = document.getElementById('monthList').innerHTML + "<li>April</li>";

  //Function to add a new list item.
  function appendNode() {
    //get the <li>s that exist and make a new one.
    //how to target a specific list? see next function.
    var listItems = document.getElementsByTagName('li');
    var newListItem = document.createElement('li');
    //append a new text node
    newListItem.appendChild(document.createTextNode('Mouse trap.'));
    //append to existing list as the new 4th item
    listItems[2].appendChild(newListItem);
  }

  // this is a good exercise for class: given an <ol> let the user add an item.
  // event listener leverages (e) parameter for a button click
  // the function adds a new item to the list.
  // the new item is provided by the user.
  document.getElementById('addItem').addEventListener('click', addNode);
  function addNode(e) {
    //get the whole list
    var orderedList = document.getElementById('monthList');
    //get all the <li>s
    var listItems = orderedList.getElementsByTagName('li');
    //make a new <li> and attach text node
    var newListItem = document.createElement('li');
    var newUserInput = prompt("Next list item?");
    newListItem.appendChild(document.createTextNode(newUserInput));
    //add to list, pushing the 2nd one down to 3rd
    orderedList.insertBefore(newListItem, listItems[listItems.length+1]);
  }

  // Two functions used to remove all children on an element
  // Event listener on a button
  function remove(elem) {
    if (elem) elem.parentNode.removeChild(elem);
  }

  document.getElementById('clearList').addEventListener('click', empty);
  function empty(e) {
    var elem = document.getElementById('monthList');
    while (elem.firstChild)
    remove(elem.firstChild);
  }

  // A series of functions to aid DOM navigation
  // Chain together as useful: next( first( document.body ) )
  // These work fine, but I wonder if they ever produce
  // anything different from .nextElementSibling and related.
  function prev(elem) {
    do {
      elem = elem.previousSibling;
    } while (elem && elem.nodeType != 1);
    return elem;
  }

  function next(elem) {
    do {
      elem = elem.nextSibling;
    } while (elem && elem.nodeType != 1);
    return elem;
  }

  function first(elem) {
    elem = elem.firstChild;
    return elem && elem.nodeType != 1 ?
    next(elem) : elem;
  }

  function last(elem) {
    elem = elem.lastChild;
    return elem && elem.nodeType != 1 ?
    prev(elem) : elem;
  }

  function parent(elem, num) {
    num = num || 1;
    for (var i = 0; i < num; i++)
    if (elem != null) elem = elem.parentNode;
    return elem;
  }

  // Event-handling

  // Traditional Method: Retrieve the firstName element
  //var firstName = document.getElementById('firstName');
  // Attach the event handler
  //firstName.onclick = function (e) {
  //  console.log('You clicked in the ' + e.target.id + ' field!');
  //  e.target.style.background = 'yellow';
  //};

  // W3C Method
  // Retrieve the firstName element
  var firstName = document.getElementById('firstName');
  // Attach the event handler
  firstName.addEventListener('click', function (e) {
    // console.log(e);
    // console.log(e.target);
    // console.log('You clicked in the ' + e.target.id + ' field!');
    e.target.style.background = 'yellow';
  });

  // Stop event propagation example
  document.getElementById('disclaimer').addEventListener('click', function (e) {
    // When clicking on the disclaimer, highlight it by making it bold
    e.target.style.fontWeight = 'bold';
    // The parent element wants to hide itself if this element is clicked on. We need to prevent that behavior
    e.stopPropagation();
  });
  document.getElementById('welcome-content').addEventListener('click', function (e) {
    e.target.style.visibility = 'hidden';
  });

  // More event propagation stopping
  // Better examples on MDN
  // https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#bubbling_and_capturing_explained
  // Event handling functions
  function mouseOverHandler(e) {
    //e.target.style.border = '1px solid red';
    e.stopPropagation();
  }
  function mouseOutHandler(e) {
    //this.style.border = '0px';
    e.stopPropagation();
  }

  // Locate, and traverse, all the elements in the DOM
  var all = document.getElementsByTagName('*');
  for (var i = 0; i < all.length; i++) {
    // Watch for when the user moves the mouse over the element
    // and add a red border around the element
    all[i].addEventListener('mouseover', mouseOverHandler);
    // Watch for when the user moves back out of the element
    // and remove the border that we added
    all[i].addEventListener('mouseout', mouseOutHandler);
  }

  // a sequence of three functions that address every element in the DOM
/* var all = document.getElementsByTagName('*');
for (var i = 0; i < all.length; i++) {
  all[i].addEventListener('mouseover', mouseOverHandler);
  all[i].addEventListener('mouseout', mouseOutHandler);
}
function mouseOverHandler(e) {
  e.target.style.border = '1px solid red';
}
function mouseOutHandler(e) {
  e.target.style.border = '0px';
} */

  // The difference between currentTarget and target
  function clickHandler(e) {
    console.log('Handled at ' + e.currentTarget.id);
    console.log('Emitted by ' + e.target.id);
  }
  var navbar = document.getElementById('navbar');
  navbar.addEventListener('click', clickHandler);

  // Event properties for a button click
  var eventButton = document.getElementById('eventButton');
  eventButton.addEventListener('click', function(e) {
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX);
    console.log(e.clientY);
    console.log(e.button);
    console.log(e.relatedTarget);
  });

  // Chain function and event on button to change color randomly.
  // Notice truncated strategy for invoking arrow function.
  // Try changing event to focus or blur, then tab to the button.
  // controller.abort(); removes any/all event handlers associated with this controller
const btn = document.getElementById('mathButton');
const controller = new AbortController();

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener('click', () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}, { signal: controller.signal });

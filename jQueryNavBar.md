# Load a navbar on multiple pages.
This method uses jQuery to load a file called nav.html on multiple pages. Write the nav.html file once and load it on as many pages as you like. See my github repo and site for an example.

## Write the nav.html file
This is not a complete HTML file. It is *only* the fragment of HTML code that represents the nav bar. The first line of code in this file should be the opening ```<nav>``` element. I recommend creating a Bootstrap nav in this file. Save this html file as a sibling to the index.html file.
```html
<nav class="navbar navbar-expand-lg navbar-dark container-fluid">
  THE REST OF YOUR NAV BAR GOES HERE
</nav>
```

## Add jQuery to every page where you plan to load the nav bar.
Inside the ```<head>``` section on each page (e.g., index.html), add the jQuery CDN call.
<!--jQuery CDN Link-->
  ```html
  <script src="https://code.jquery.com/jquery-3.5.0.js"></script>
  ```

## Create a div on the page to contain the nav bar
On each page where you want to add the nav bar, add a div within the page body:
```html
<body>
  <div id="nav-placeholder"></div>
  ```

## Load the JS file
On each page where you want to add the nav bar, load the nav.js file.
```html
  <script src="js/nav.js"></script>
</body>
```

## The nav.js file
There is a single jQuery function that references the placeholder div by Id, then loads the separate nav.html file in that location.
```JavaScript
$(function () {$("#nav-placeholder").load("nav.html");});
```

## What does this little script do?
Add this to the end of the nav.html file. See if you can figure out what it is doing.
```html
  <script>
    var pathname = window.location.pathname;
    var cleanPath = pathname.substring(pathname.lastIndexOf('/') + 1);
    $('[href*="' + cleanPath + '"]').addClass('active');
  </script>
</nav>
```

# Inferno Calendar
Calendar component to be used with inferno applications.

# Example
``` html
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
    <div id="app"></div>
    <script src="https://unpkg.com/inferno@5.0.5/dist/inferno.js"></script>
    <script src="https://unpkg.com/inferno-create-element@5.0.5/dist/inferno-create-element.min.js"></script> 
    <script src="../dist/inferno-calendar.js"></script>
    <script type="text/javascript">
      var container = document.getElementById('app');
	    var render = Inferno.render;
      render(Inferno.createElement(InfernoCalendar, {
        calendarStyle: {
          width: '50%',
          height: '500px'
        }
      }), container);
    </script>
  </body>
</html>
```
# Getting Started
1. Clone this repo 
2. Do an npm install
``` bash
npm install
```
3. Run it
``` bash
npm start
```
4. Build it for distribution
``` bash
npm run build
```

If you just want to use it then download inferno-calendar.js from the dist folder.
Additional features to be added :)
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

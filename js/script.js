fetch("./header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("header").innerHTML = data;
  });

fetch("./footer.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("footer").innerHTML = data;
    });

    
    $( document ).ready(function() {
      console.log( "document loaded" );
  });

  $( window ).on( "load", function() {
      console.log( "window loaded" );
  });
  document.getElementById("demo").addEventListener("click", myFunction);
  
  function myFunction() {
      console.log("clicked");
    document.getElementById("sidebar").style.display = "block";
  }
function something()
{
  alert("Hello!!!");
}

function addToCart(id) 
{
  var x  = window.localStorage.getItem('product_' + id);
  x = x * 1 + 1;
  window.localStorage.setItem('product_' + id, x); 
}

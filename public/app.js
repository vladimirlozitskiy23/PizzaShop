function test()
{
  alert("test");
}

function something()
{
  alert("Hello!!!");
}

function addToCart(id) 
{
  var x  = window.localStorage.getItem('product_' + id);
  x = x * 1 + 1;
  window.localStorage.setItem('product_' + id, x); 
  alert("Items in your cart" + cartNumberGetItem());
}

function cartNumberGetItem()
{
  cnt = 0;
  for(i = 0; i < window.localStorage.length; i++)
  {
    var key = window.localStorage.key(i);
    var value = window.localStorage.getItem(key);
    if (key.indexOf('product_') == 0)
    {
      cnt = cnt + value * 1 ;
    }
  }
  return cnt;
}


function cartGetOrders()
{
  orders = '';
  for(i = 0; i < window.localStorage.length; i++)
  {
    var key = window.localStorage.key(i);
    var value = window.localStorage.getItem(key);
    if (key.indexOf('product_') == 0)
    {
      orders = orders + key + '=' + value + ',';
    }
  }
  return orders;
}

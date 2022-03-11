
var a=0,b=0,c=0;
var d;
function my_value1()
{
  const x=document.getElementById('item1').value;
  const y=document.getElementById('qty1').value;
  if(x == 'Full Meals')
  {
    a=150*y;
    document.getElementById('price1').textContent=a;
  }
  else if (x == 'Birayani')
  {
    a=220*y;
    document.getElementById('price1').textContent=a;
  }
  else if(x == "Egg Rice")
  {
    a=140*y;
    document.getElementById('price1').textContent=a;
  }
  else
  {
    document.getElementById('price1').textContent=0;
  }
}
function my_value2()
{
  const x=document.getElementById('item2').value;
  const y=document.getElementById('qty2').value;
  if(x == 'Full Meals')
  {
    b=150*y;
    document.getElementById('price2').textContent=b;
  }
  else if (x == 'Birayani')
  {
    b=220*y;
    document.getElementById('price2').textContent=b;
  }
  else if(x == "Egg Rice")
  {
    b=140*y;
    document.getElementById('price2').textContent=b;
  }
  else
  {
    document.getElementById('price2').textContent=0;
  }
}
function my_value3()
{
  const x=document.getElementById('item3').value;
  const y=document.getElementById('qty3').value;
  if(x == 'Full Meals')
  {
    c=150*y;
    document.getElementById('price3').textContent=c;
  }
  else if (x == 'Birayani')
  {
    c=220*y;
    document.getElementById('price3').textContent=c;
  }
  else if(x == "Egg Rice")
  {
    c=140*y;
    document.getElementById('price3').textContent=c;
  }
  else
  {
    document.getElementById('price3').textContent=0;
  }
}
function total()
{
    document.getElementById('total_price').textContent=a+b+c;
}
function tip_value()
{
  var x=document.getElementById('tips').value;
  if(x == '5%')
  {
    var y=a+b+c;
    y=y*0.05;
    document.getElementById('tip_total').textContent=y;
    var z=y+a+b+c;
    document.getElementById('sub_total').textContent=z;
  }
  else if(x == '10%')
  {
    var y=a+b+c;
    y=y*0.1;
    document.getElementById('tip_total').textContent=y;
    var z=y+a+b+c;
    document.getElementById('sub_total').textContent=z;
  }else if(x == '15%')
  {
    var y=a+b+c;
    y=y*0.15;
    document.getElementById('tip_total').textContent=y;
    var z= parseInt(y+a+b+c);
    document.getElementById('sub_total').textContent=z;
  }
  else
  {
    document.getElementById('tip_total').textContent=0;
  }
}
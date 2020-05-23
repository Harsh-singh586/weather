function icon1(ts1,des1)
{
ts=ts1
if(ts<20)
{
document.getElementById("itemp").setAttribute("src","cold.jpg")
}
else if(ts>=20 && ts<30)
{
document.getElementById("itemp").setAttribute("src","moderate.jpg")
}
else
{
document.getElementById("itemp").setAttribute("src","hot.png")
}
if(des1=="clear sky")
{
document.getElementById("ides").setAttribute("src","sky.jpg")
}
else if(des1=="few clouds" || des1=="scattered clouds" || des1=="broken clouds")
{
document.getElementById("ides").setAttribute("src","cloud.png")
}
else if(des1="rain" || des1=="shower rain")
{
document.getElementById("ides").setAttribute("src","rain.png")
}
else if(des1="thunderstorm")
{
document.getElementById("ides").setAttribute("src","thund.jpg")
}
else if(des1="snow")
{
document.getElementById("ides").setAttribute("src","snow.jpg")
}
}
function Times(t) 
{
var dt = new Date(t*1000);
var hr = dt.getHours();
var m = "0" + dt.getMinutes();
var s = "0" + dt.getSeconds();
return hr+ ':' + m.substr(-2) + ':' + s.substr(-2); 
} 
function conv(y)
{
return y-273.15 
}
function fn()
{
document.getElementById("sh").style.visibility="visible"
var min_temp;
var max_temp;
var des;
var sunrise;
var sunset;
var temp1;
var city=document.getElementById("enter").value
fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=8a989e2936c9f19c4d83b4c8e19c29fe').then(response => response.json()).then(data => {
min_temp= data['main']['temp_min'];
temp1= data['main']['temp'];
max_temp= data['main']['temp_max'];
des= data['weather']['0']['description'];
sunrise=data['sys']['sunrise'];
sunset=data['sys']['sunset'];
max_temp=conv(max_temp)
min_temp=conv(min_temp)
temp1=conv(temp1)
sunrise= Times(sunrise)
sunset= Times(sunset)
icon1(temp1,des)
document.getElementById("maxtemp").innerHTML="Max Temp:"+max_temp;
document.getElementById("mintemp").innerHTML="Min Temp:"+min_temp;
document.getElementById("sunrise").innerHTML="sunrise:"+sunrise;
document.getElementById("des").innerHTML=des;
document.getElementById("sunset").innerHTML="sunset:"+sunset;
document.getElementById("temp").innerHTML="Temp:"+temp1;
})
}

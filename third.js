 /*
 document.querySelector('button').addEventListener('click',()=>{
    const place=document.getElementById('location').value;
    
    //function create karo 
    function updateTemp(data)
    {
       const element=document.getElementById('weatherinfo');
        element.innerHTML=`today's temperature: ${data.current.temp_c}`;
    }

   const prom=fetch(`http://api.weatherapi.com/v1/current.json?key=4a16d866316945f680654854251204&q=${place}&aqi=no`)

   prom
   .then(response=>response.json())
   .then(data=> updateTemp(data));


})

*/

document.querySelector("button").addEventListener('click',()=>{

   const place=document.getElementById('location').value;


   function updateTemp(data)
   {
      const element=document.getElementById('weatherinfo');
      element.innerText=`Today's temperature: ${data.current.temp_c} degree and wind direction:${data.current.wind_dir}`;
   }


   const prom=fetch(`http://api.weatherapi.com/v1/current.json?key=4a16d866316945f680654854251204&q=${place}&aqi=no`)

   prom.then((response)=>{
         return response.json();
   }).then((data)=>{
        updateTemp(data);
         
   })
   
})



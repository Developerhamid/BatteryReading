    const temp = document.querySelector('#temp');

    const thermoReading = () =>{
        temp.innerHTML = '&#xf244';
        
        setTimeout(() => {
            temp.innerHTML = '&#xf243';   
            temp.style.color = '#ffeb3b';
        }, 1000);

        setTimeout(() => {
            temp.innerHTML = '&#xf242';            
        }, 2000);

        setTimeout(() => {
            temp.innerHTML = '&#xf241';            
        }, 3000);

        setTimeout(() => {
            temp.innerHTML = '&#xf240'; 
            temp.style.color = '#ff9800';           
        }, 4000);

    }




    thermoReading();

    setInterval(thermoReading, 5000);
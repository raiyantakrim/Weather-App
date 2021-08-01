const locationDisplay = document.querySelector("#locationDisplay")
const errorMsz = document.querySelector("#errorMsz")
const showBtn = document.querySelector("#show-btn")
const showPosition = (position)=>{
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    getData(latitude,longitude)
    
}

async function getData(lat,lon) {
    // const dataStream = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat}, ${lon}&key=AIzaSyCCMXl7c-o7zW91-0QEJHfs0Lju8FremHE`)
    const dataStream = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=3cccf35c27065e000b2710d7dcd7df72&units=metric`)

    const data = await dataStream.json();
    // console.log(data.weather[0].main);
    locationDisplay.textContent = `Location: ${data.name}`
}

const showError = (error)=>{
    errorMsz.textContent = `ErrorID ${error.code}: ${error.message}`;
}

const options = {
    enableHighAccuracy: true,
    // timeout: 5000
}

const getLocation = ()=>{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition,showError,options)
    }else{
        console.log("location is not supported by your browser");
    }
}
// getLocation()



// let city = "Dhaka"
// method 1

// fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3cccf35c27065e000b2710d7dcd7df72&units=metric`)
// .then(x => x.json())
// .then(y => console.log(y.weather[0].main))

// method 2

// getData()
// async function getData() {

//     let dataStream = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3cccf35c27065e000b2710d7dcd7df72&units=metric`)

//     let json = await dataStream.json()

//     console.log(json.weather[0].main);
// }
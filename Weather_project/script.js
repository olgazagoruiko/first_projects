fetch('http://api.openweathermap.org/data/2.5/weather?id=703448&appid=92b7348cce912b2aec9d0363ce0f58a0')
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.city-name').textContent = data.name;
        document.querySelector('.temperature').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        document.querySelector('.vlazhnost').innerHTML = 'Vlazhnost: '+ data.main.humidity+ '%';
        document.querySelector('.wind').innerHTML = 'Wind: '+data.wind.speed + ' м/с';
        document.querySelector('.osadki').textContent = data.weather[0]['main'];
       document.querySelector('.features').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    })
    .catch(function () {
        // catch any errors
    });
    fetch('http://api.openweathermap.org/data/2.5/weather?id=698740&appid=92b7348cce912b2aec9d0363ce0f58a0')
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.city-name-2').textContent = data.name;
        document.querySelector('.temperature-2').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        document.querySelector('.vlazhnost-2').innerHTML = 'Vlazhnost: '+data.main.humidity+ '%';
        document.querySelector('.wind-2').innerHTML = 'Wind: '+data.wind.speed + ' м/с';
        document.querySelector('.osadki-2').textContent = data.weather[0]['main'];
       document.querySelector('.features-2').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    })
    .catch(function () {
        // catch any errors
    });
    fetch('http://api.openweathermap.org/data/2.5/weather?id=702550&appid=92b7348cce912b2aec9d0363ce0f58a0')
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.city-name-3').textContent = data.name;
        document.querySelector('.temperature-3').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        document.querySelector('.vlazhnost-3').innerHTML = 'Vlazhnost: '+data.main.humidity+ '%';
        document.querySelector('.wind-3').innerHTML = 'Wind: '+data.wind.speed + ' м/с';
        document.querySelector('.osadki-3').textContent = data.weather[0]['main'];
       document.querySelector('.features-3').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    })
    .catch(function () {
        // catch any errors
    });
    fetch('http://api.openweathermap.org/data/2.5/weather?id=702658&appid=92b7348cce912b2aec9d0363ce0f58a0')
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.city-name-4').textContent = data.name;
        document.querySelector('.temperature-4').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        document.querySelector('.vlazhnost-4').innerHTML ='Vlazhnost: '+ data.main.humidity+ '%';
        document.querySelector('.wind-4').innerHTML ='Wind: ' +data.wind.speed + ' м/с';
        document.querySelector('.osadki-4').textContent = data.weather[0]['main'];
       document.querySelector('.features-4').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    })
    .catch(function () {
        // catch any errors
    });
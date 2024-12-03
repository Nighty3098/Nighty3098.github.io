function getCityByCoordinates(latitude, longitude) {
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(`City: ${data.address.city || 'Not found'}`);
            console.log(`Country: ${data.address.country || 'Not found'}`);
            document.getElementById('city').innerText = `City: ${data.address.city || 'Not found'}`;
            document.getElementById('country').innerText = `Country: ${data.address.country || 'Not found'}`;
        })
        .catch(error => console.error('Network error:', error));
}

function getDeviceName() {
    const userAgent = navigator.userAgent;
    let deviceName = "Unknown Device";

    if (/iPad|iPhone|iPod/.test(userAgent)) {
        deviceName = "iOS Device";
    }
    else if (/Android/.test(userAgent)) {
        const androidVersion = userAgent.match(/Android\s([0-9\.]+)/);
        deviceName = `Android Device: ${androidVersion ? androidVersion[1] : 'Unknown Version'}`;
    }
    else if (/Windows/.test(userAgent)) {
        deviceName = "Windows Device";
    }
    else if (/Macintosh/.test(userAgent)) {
        deviceName = "Mac Device";
    }

    document.getElementById('device').innerText = `Device: ${deviceName}`;
}

function getClientInfo() {
    fetch('https://api.ipify.org?format=json')
        .then(res => res.json())
        .then(ipData => {
            const ipAddress = ipData.ip;
            console.log(`IP: ${ipAddress}`);
            document.getElementById('ip').innerText = `IP: ${ipAddress}`;

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    function (position) {
                        const latitude = position.coords.latitude;
                        const longitude = position.coords.longitude;
                        getCityByCoordinates(latitude, longitude);
                        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
                        document.getElementById('coordinates').innerText = `Latitude: ${latitude}, Longitude: ${longitude}`;
                    },
                    function (error) {
                        console.error('Error:', error);
                    }
                );
            } else {
                console.log('Geo != browser.');
            }

            console.log('Browser:', navigator.userAgent);
            console.log('Platform:', navigator.platform);
            console.log('Country: ', navigator.country);
            console.log('Lang: ', navigator.language);
            console.log('Plugins: ', navigator.plugins);


            document.getElementById('lang').innerText = `Lang: ${navigator.language}`;
            document.getElementById('platform').innerText = `Platform: ${navigator.platform}`;
            document.getElementById('browser').innerText = `Browser: ${navigator.userAgent}`;
        })
        .catch(error => {
            console.error('IP Error:', error);
        });
}

function hideUnusedElements() {
    Array.from(document.getElementsByClassName("client_username_request")).forEach(element => {
        element.style.display = 'none';
    });
    Array.from(document.getElementsByClassName("client_data")).forEach(element => {
        element.style.display = 'flex';
    });
}



function start_fun() {
    hideUnusedElements();
    getClientInfo();
    getDeviceName();
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('submitButton').addEventListener('click', start_fun);
});

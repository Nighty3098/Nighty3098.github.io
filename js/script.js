function getDeviceName() {
    const userAgent = navigator.userAgent;
    let deviceName = "Unknown Device";

    if (/iPad|iPhone|iPod/.test(userAgent)) {
        deviceName = "iOS Device";
    } else if (/Android/.test(userAgent)) {
        const androidVersion = userAgent.match(/Android\s([0-9\.]+)/);
        deviceName = `Android Device: ${androidVersion ? androidVersion[1] : 'Unknown Version'}`;
    } else if (/Windows/.test(userAgent)) {
        deviceName = "Windows Device";
    } else if (/Macintosh/.test(userAgent)) {
        deviceName = "Mac Device";
    }

    document.getElementById('device').innerText = `Device: ${deviceName}`;
}

function getClientInfo() {
    console.log('Browser:', navigator.userAgent);
    console.log('Platform:', navigator.platform);
    console.log('Country: ', navigator.country);
    console.log('Lang: ', navigator.language);
    console.log('Plugins: ', navigator.plugins);
    document.getElementById('lang').innerText = `Lang: ${navigator.language}`;
    document.getElementById('platform').innerText = `Platform: ${navigator.platform}`;
    document.getElementById('browser').innerText = `Browser: ${navigator.userAgent}`;
}

function getClientIpInfo() {
    fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
            console.log(`IP: ${data.ip}`);
            console.log(`City: ${data.city}`);
            console.log(`Country: ${data.country_name}`);
            console.log(`lat: ${data.latitude}, long: ${data.longitude}`);

            document.getElementById('ip').innerText = `IP: ${data.ip}`;
            document.getElementById('city').innerText = `City: ${data.city}`;
            document.getElementById('org_client').innerText = `${data.org}`;
            document.getElementById('country').innerText = `Country: ${data.country_name}`;
            document.getElementById('coordinates').innerText = `Lat: ${data.latitude}, Lon: ${data.longitude}`;
        })
        .catch(error => console.error('Error:', error));
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
    getClientIpInfo();
    getClientInfo();
    getDeviceName();
}

document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submitButton');
    if (submitButton) { // Check if the element exists
        submitButton.addEventListener('click', start_fun);
    } else {
        console.error('Element with ID "submitButton" not found.');
    }
});

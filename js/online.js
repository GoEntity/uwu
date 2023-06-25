fetch('0')
    .then(response => response.text())
    .then(data => {
        let statusElement = document.getElementById('status');

        statusElement.textContent = data;

        if (data.includes('ONLINE')) {
            statusElement.style.color = 'rgb(6, 190, 0)';
        } else if (data.includes('OFFLINE')) {
            statusElement.style.color = 'rgb(158, 0, 0)';
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });

fetch('onlineTime')
    .then(response => response.text())
    .then(data => {
        let onlineTime = new Date(data);
        let currentTime = new Date();
        let minutesPassed = Math.round((currentTime - onlineTime) / 60000);
        document.getElementById('timeSinceOnline').textContent = `since ${minutesPassed} minutes ago`;
    })
    .catch((error) => {
        console.error('Error:', error);
    });

fetch('offlineTime')
    .then(response => response.text())
    .then(data => {
        let offlineTime = new Date(data);
        let currentTime = new Date();
        let minutesPassed = Math.round((currentTime - offlineTime) / 60000);
        document.getElementById('timeSinceOffline').textContent = `since ${minutesPassed} minutes ago`;
    })
    .catch((error) => {
        console.error('Error:', error);
    });

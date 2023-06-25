fetch('0')
    .then(response => response.text())
    .then(data => {
        let statusElement = document.getElementById('status');
        let sinceElement = document.getElementById('since');

        statusElement.textContent = data;

        if (data.includes('ONLINE')) {
            statusElement.style.color = 'rgb(6, 190, 0)';
        } else if (data.includes('OFFLINE')) {
            statusElement.style.color = 'rgb(158, 0, 0)';
        }

        return fetch('lastStatusChangeTime');
    })
    .then(response => response.text())
    .then(data => {
        let lastChangeTime = new Date(data);
        let currentTime = new Date();
        let minutesPassed = Math.round((currentTime - lastChangeTime) / 60000);
        sinceElement.textContent = ` (since ${minutesPassed} minutes ago)`;
    })
    .catch((error) => {
        console.error('Error:', error);
    });

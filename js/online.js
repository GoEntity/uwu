function updateStatus() {
    fetch('0?' + new Date().getTime())
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
            document.getElementById('status').textContent = `Fetch error: ${error}`;
        });
}

function updateTimePassed() {
    fetch('timePassed?' + new Date().getTime())
        .then(response => response.text())
        .then(data => {
            let onlineTime = new Date(data);
            let currentTime = new Date();
            let minutesPassed = Math.round((currentTime - onlineTime) / 60000);
            document.getElementById('timePassed').textContent = `since ${minutesPassed} minutes ago`;
        })
        .catch((error) => {
            console.error('Error:', error);
            document.getElementById('timePassed').textContent = `Fetch error: ${error}`;
        });
}

updateStatus();
updateTimePassed();

setInterval(updateStatus, 60000);
setInterval(updateTimePassed, 60000);

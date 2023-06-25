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

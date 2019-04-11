window.addEventListener('load', init);

function init() {
    var fetchButton = document.getElementById('fetchButton');
    var fetchContainer = document.getElementById('fetchResult');

    var xhrButton = document.getElementById('xhrButton');
    var xhrContainer = document.getElementById('xhrResult');

    fetchButton.addEventListener('click', () => {
        var headers = new Headers();

        headers.append('Content-Type', 'application/json');

        fetch('/test-post', {
            method: 'post', 
            body: JSON.stringify({testData: 10}),
            headers: headers
        }).then(function(response){
            if (response.ok) {
                return response.json();
            }
        }).then(function(json){
            fetchContainer.innerHTML = 'This response is got by fetch: ' + JSON.stringify(json);
        });
    });

    xhrButton.addEventListener('click', () => {
        new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();

            xhr.addEventListener('readystatechange', () => {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve(xhr.response);
                }
            });

            xhr.open('post', '/test-post');
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify({testData: 10}));

        }).then(function(response) {
            xhrContainer.innerHTML = 'This response is got by XMLHttpRequest: ' + response;
        });
    });
}
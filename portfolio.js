fetch('about.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('content').innerHTML = html;
    })
    .catch(error => console.error('Error loading page:', error));
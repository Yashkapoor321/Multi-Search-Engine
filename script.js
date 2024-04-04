function googleSearch(query) {
    const apiKey = "AIzaSyByWgIJ-fKevEI4OCirouPmKSEbisnVXls";
    const cx = 'c10187e22a55b452b';

    const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${query}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        document.querySelector('.results').innerHTML = '';

        data.items.forEach(item => {
            const resultDiv = document.createElement('div');
            resultDiv.classList.add('result');

            const title = document.createElement('h3');
            title.innerHTML = `<a href="${item.link}" target="_blank">${item.title}</a>`;

            const snippet = document.createElement('p');
            snippet.textContent = item.snippet;

            resultDiv.appendChild(title);
            resultDiv.appendChild(snippet);

            document.querySelector('.results').appendChild(resultDiv);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
}
document.querySelector('.btn').addEventListener('click', function() {
    const query = document.querySelector('input[type="search"]').value;
    googleSearch(query);
  });
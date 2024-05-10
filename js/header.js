document.addEventListener('DOMContentLoaded', function() {
    const headerContainer = document.getElementById('header-container');
    const footerContainer = document.getElementById('footer-container');

    const headerUrl = 'https://ootomonaiso.github.io/stemtest/header.html';
    const footerUrl = 'https://ootomonaiso.github.io/stemtest/footer.html';

    // ヘッダーを読み込む
    fetch(headerUrl)
        .then(response => response.text())
        .then(html => {
            headerContainer.innerHTML = html; // ヘッダーを挿入
        })
        .catch(error => console.error('Header fetch error:', error));

    // フッターを読み込む
    fetch(footerUrl)
        .then(response => response.text())
        .then(html => {
            footerContainer.innerHTML = html; // フッターを挿入
        })
        .catch(error => console.error('Footer fetch error:', error));
});
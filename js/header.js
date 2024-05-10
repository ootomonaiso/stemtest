document.addEventListener('DOMContentLoaded', function() {
    const headerContainer = document.getElementById('header-container');
    const footerContainer = document.getElementById('footer-container');

    const HeaderUrl = 'https://ootomonaiso.github.io/stemtest/header.html';
    const FooterUrl = 'https://ootomonaiso.github.io/stemtest/footer.html';

    // ヘッダーを読み込む
    fetch(HeaderUrl) // PC版のみ
        .then(response => response.text())
        .then(html => {
            headerContainer.innerHTML = html; // コンテナに内容を挿入
        })
        .catch(error => console.error('Header fetch error:', error));

    // フッターを読み込む
    fetch(FooterUrl) // PC版のみ
        .then(response => response.text())
        .then(html => {
            footerContainer.innerHTML = html; // コンテナに内容を挿入
        })
        .catch(error => console.error('Footer fetch error:', error));
});
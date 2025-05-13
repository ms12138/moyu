// ==UserScript==
// @name Block fanqienovel.com Elements
// @match https://fanqienovel.com/*
// @run-at document-end
// ==/UserScript==

(function() {
    // 屏蔽具有类名 reader-toolbar-item 的元素
    const readerToolbarItems = document.querySelectorAll('.reader-toolbar-item');
    readerToolbarItems.forEach(item => {
        item.style.display = 'none';
    });

    // 屏蔽具有类名 reader-toolbar-item-font 的元素
    const readerToolbarItemFont = document.querySelector('.reader-toolbar-item-font');
    if (readerToolbarItemFont) {
        readerToolbarItemFont.style.display = 'none';
    }
})();
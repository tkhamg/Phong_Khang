const userLang = navigator.language.slice(0, 2);
let langFile = 'en.json';

if (userLang === 'vi') {
    langFile = 'vi.json';
} else if (userLang === 'ko') {
    langFile = 'ko.json';
}

console.log('Language file:', langFile);

fetch(langFile)
    .then(response => response.json())
    .then(lang => {
        console.log(lang);

        
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (lang[key]) {
                el.innerText = lang[key];
            }
        });
    })
    .catch(error => {
        console.error('Failed to load language file:', error);
    });

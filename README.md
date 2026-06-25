# ГСК Березка-2 Digital — React + Vite v2.1

## Как обновить сайт

1. Распакуйте ZIP.
2. В репозитории GitHub удалите старые файлы или загрузите эти файлы поверх старых.
3. Важно: должна загрузиться папка `.github/workflows/deploy.yml`.
4. Settings → Pages → Source: GitHub Actions.
5. После commit откройте вкладку Actions и дождитесь зеленой галочки.

## Если белый экран

Проверьте:
- в репозитории есть папка `.github/workflows/deploy.yml`;
- во вкладке Actions последний workflow зеленый;
- сайт открыт по адресу `https://leonissimo-pod.github.io/gsk-berezka2/`.

## Где менять данные

- `src/data/content.js` — председатель, решения собрания, проекты.
- `src/data/debtors.js` — обезличенный список боксов-должников.
- `src/main.jsx` — структура страниц.
- `src/styles.css` — дизайн.

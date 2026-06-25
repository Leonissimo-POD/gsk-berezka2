# ГСК Березка-2 Digital — React + Vite

## Что это
Новая версия сайта на React + Vite для GitHub Pages.

## Как загрузить
1. Распакуйте ZIP.
2. Удалите старые файлы в репозитории или загрузите новые поверх старых.
3. В GitHub откройте Settings → Pages.
4. В разделе Build and deployment выберите Source: **GitHub Actions**.
5. После commit откройте вкладку Actions и дождитесь успешного deploy.

## Что важно
- Это уже не набор отдельных HTML-страниц.
- Основной код находится в `src/App.jsx`.
- Данные по должникам находятся в `src/data/debtors.js`.
- Данные по решениям собрания и проектам находятся в `src/data/content.js`.

## Локальный запуск
Если установлен Node.js:
```bash
npm install
npm run dev
```

## Сборка
```bash
npm run build
```

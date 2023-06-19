![Node.js](https://img.shields.io/badge/Node-v18.12.1-green)  ![languages](https://img.shields.io/github/languages/count/alheym/middle.messenger.praktikum.yandex) ![typescript](https://img.shields.io/github/languages/top/alheym/middle.messenger.praktikum.yandex)
[![Netlify Status](https://api.netlify.com/api/v1/badges/1c371761-603d-4972-9ae5-ee46d9d61831/deploy-status)](https://app.netlify.com/sites/bucolic-custard-91416d/deploys)

# Веб-приложение "Чат"

Учебный проект по курсу Яндекс.Практикум - чат без использования фреймворков.
Веб-приложение представляет собой полноценный мессенджер, поддерживающий как личную переписку, так и групповые чаты. 
Для доступа к чатам необходимо авторизоваться или зарегистрироваться, заполнив обязательные поля.
После авторизации/регистрации пользователю будет доступен главный экран чата, а так же страница с личными данными, которые были указаны при регистрации.
Все данные можно изменить, а так же предоставляется возможность добавления и изменения аватарки профиля.
Для удобства использования присутствует поиск по чатам, а так же по всем пользователям, зарегистрированным в мессенджере.
Можно как добавлять, так и удалять новых пользователей из чатов, а так же и сами чаты, если все участники удалены.

На первых этапах веб приложение реализовано на JavaScript, но в дальнейшем полностью переведено на TypeScript, сторонние фреймворки в работе не использовались.

## Стек
<div>
	<img src="https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-original.svg" title="TS" alt="TS" width="40" height="40"/>&nbsp;
  	<img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" title="JS" alt="JS" width="40" height="40"/>&nbsp;
	<img src="https://github.com/devicons/devicon/blob/master/icons/handlebars/handlebars-original.svg" title="Handlebars" alt="Handlebars" width="40" height="40"/>&nbsp;
	<img src="https://github.com/devicons/devicon/blob/master/icons/sass/sass-original.svg" title="Sass" alt="Sass" width="40" height="40"/>&nbsp;
	<img src="https://github.com/devicons/devicon/blob/master/icons/mocha/mocha-plain.svg" title="Mocha" alt="Mocha" width="40" height="40"/>&nbsp;
	<img src="https://github.com/devicons/devicon/blob/master/icons/webpack/webpack-original.svg" title="Webpack" alt="Webpack" width="40" height="40"/>&nbsp;
	<img src="https://parceljs.org/avatar.b1be591d.avif" title="Parcel" alt="Parcel" width="40"/>&nbsp;
	<img src="https://github.com/devicons/devicon/blob/master/icons/docker/docker-original.svg" title="Docker" alt="Docker" width="40" height="40"/>&nbsp;
	<img src="https://github.com/devicons/devicon/blob/master/icons/eslint/eslint-original.svg" title="ESLint" alt="ESLint" width="40" height="40"/>&nbsp;
	<img src="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-original.svg" title="NodeJS" alt="NodeJS" width="40" height="40"/>&nbsp;
</div>

pre-commit: husky 🐶

## Установка

установка зависимостей:

```bash
npm i
```
запуск сборки с использованием webpack:

```bash
npm run build
```

запуск проекта с наблюдением за файлами (Hot Reloading):

```bash
npm run dev
```

запуск тестов

```bash
npm run test
```

## UI
[Макет](https://www.figma.com/file/yADVuj8HwHwK5jsdOhMwFK/messenger.yandex.praktikum?node-id=0%3A1&t=EUFbIzlvOysRbPEG-0)

## Netlify
[Netlify](https://messenger-practikum.netlify.app/)

Приложение запустится на странице авторизации, если пользователь авторизован то происходит редирект на страницу чатов

##

[Sprint 1](https://github.com/alheym/middle.messenger.praktikum.yandex/pull/2)

[Sprint 2](https://github.com/alheym/middle.messenger.praktikum.yandex/pull/5)

[Sprint 3](https://github.com/alheym/middle.messenger.praktikum.yandex/pull/6)

[Sprint 4](https://github.com/alheym/middle.messenger.praktikum.yandex/pull/7)


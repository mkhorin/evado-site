'use strict';

window.sideMenuItems = [{
    name: 'intro',
    label: 'Introduction',
    ru: 'Вступление'
}, {
    name: 'install-environment',
    label: 'Install environment',
    ru: 'Установка окружения'
}, {
    name: 'server-start',
    label: 'Server start',
    ru: 'Старт сервера'
}, {
    name: 'main-page',
    label: 'Main page',
    ru: 'Главная старница'
}, {
    name: 'studio-module',
    label: 'Studio module',
    ru: 'Модуль Студия'
}, {
    name: 'article-class',
    label: 'Article class',
    ru: 'Класс Статья'
}, {
    name: 'office-module',
    label: 'Office module',
    ru: 'Модуль Офис'
}, {
    name: 'photo-class',
    label: 'Photo class',
    ru: 'Класс Фотография'
}, {
    name: 'article-photos',
    label: 'Article photos',
    ru: 'Фотографии статьи'
}, {
    name: 'comment-class',
    label: 'Comment class',
    ru: 'Класс Комментария'
}, {
    name: 'category-class',
    label: 'Category class',
    ru: 'Класс Категории'
}, {
    name: 'navigation',
    label: 'Navigation',
    ru: 'Навигация'
}, {
    name: 'workflow',
    label: 'Workflow',
    ru: 'Бизнес-процесс'
}, {
    name: 'access-control',
    label: 'Access control',
    ru: 'Контроль доступа'
}, {
    name: 'ajax-api',
    label: 'AJAX API',
    ru: 'AJAX API'
}];

window.codeMap = {
    'install-environment': [`node --version
mongod --version`, `cd /blog
npm install`],
    'server-start': [`module.exports = {
    title: 'Blog',
    components: {
        'db': {
            settings: {
                'database': process.env.MONGO_NAME || 'evado-blog',
            }
        },
        'cookie': {
            secret: 'blog.evado'
        },
        'session': {
            secret: 'blog.evado'
        }
    }
};`, `NODE_ENV=development node console/start`, `set NODE_ENV=development
node console/start`, `node console/install
node console/start`],
    'main-page': [`a@a.a
123456`],
    'category-class': [`["$query", "count", "publicList.article", null, {"categories": ".$key"}]`],
    'ajax-api': [`jQuery.post('/api/base/data/list', {
    class: 'article',
    view: 'publicList',
    start: 0,
    length: 10
}).done(data => {});`, `jQuery.post('/api/base/data/read', {
    class: 'article',
    view: 'publicView',
    id: '5e1ffece8887001d74fc9df3'
}).done(data => {});`, `jQuery.post('/api/base/data/create', {
    class: 'someClass',
    view: 'someView',
    data: {
        someAttrName: 'someValue'
    }
}).done(id => {});`, `jQuery.post('/api/base/data/update', {
    class: 'someClass',
    view: 'someView',
    id: 'someObjectId',
    data: {
        someAttrName: 'someValue'
    }
}).done(id => {});`, `jQuery.post('/api/base/data/delete', {
    class: 'someClass',
    view: 'someView',
    id: 'someObjectId'
}).done(id => {});`]
};
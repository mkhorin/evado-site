'use strict';

window.sideMenuItems = [{
    name: 'intro',
    label: 'Introduction',
    ru: 'Вступление'
}, {
    name: 'installation-launch',
    label: 'Installation and launch',
    ru: 'Установка и запуск'
}, {
    name: 'main-entities',
    label: 'Main entities',
    ru: 'Основные сущности'
}];

window.codeMap = {
    'installation-launch': [`cd /shop
npm install`, `module.exports = {
    title: 'Shop',
    components: {
        'db': {
            settings: {
                'database': process.env.MONGO_NAME || 'evado-shop',
            }
        },
        'cookie': {
            secret: 'shop.evado'
        },
        'session': {
            secret: 'shop.evado'
        }
    }
};`, `node console/install
node console/start`, `a@a.a
123456`]
};
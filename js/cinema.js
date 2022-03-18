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
}, {
    name: 'additional-relations',
    label: 'Additional relations',
    ru: 'Дополнительные связи'
}];

window.codeMap = {
    'installation-launch': [`cd /cinema
npm install`, `module.exports = {
    title: 'Cinema',
    components: {
        'db': {
            settings: {
                'database': process.env.MONGO_NAME || 'evado-cinema',
            }
        },
        'cookie': {
            secret: 'cinema.evado'
        },
        'session': {
            secret: 'cinema.evado'
        }
    }
};`, `node console/install
node console/start`, `a@a.a
123456`]
};
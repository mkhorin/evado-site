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
    'installation-launch': [`cd /expert
npm install`, `module.exports = {
    title: 'Expert',
    components: {
        'db': {
            settings: {
                'database': process.env.MONGO_NAME || 'evado-expert',
            }
        },
        'cookie': {
            secret: 'expert.evado'
        },
        'session': {
            secret: 'expert.evado'
        }
    }
};`, `node console/install
node console/start`, `a@a.a
123456`]
};
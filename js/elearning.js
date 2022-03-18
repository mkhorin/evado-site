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
    name: 'workflow',
    label: 'Workflow',
    ru: 'Бизнес-процесс'
}, {
    name: 'access-security',
    label: 'Access security',
    ru: 'Безопасность доступа'
}];

window.codeMap = {
    'installation-launch': [`cd /elearning
npm install`, `module.exports = {
    title: 'eLearning',
    components: {
        'db': {
            settings: {
                'database': process.env.MONGO_NAME || 'evado-elearning',
            }
        },
        'cookie': {
            secret: 'elearning.evado'
        },
        'session': {
            secret: 'elearning.evado'
        }
    }
};`, `node console/install
node console/start`, `a@a.a
123456`],
    'access-security': [`const Base = require('evado/component/meta/rbac/rule/BaseRule');

module.exports = class TaskCommentReaderRule extends Base {

    execute () {
        return this.isObjectTarget() ? this.checkReader() : this.isAllowType();
    }

    async checkReader () {
        const model = this.getTarget();
        const meta = model.class.meta;
        const student = await meta.getClass('task').findById(model.get('task')).scalar('student');
        const user = await meta.getClass('student').findById(student).scalar('user');
        const matched = this.isUser(user);
        return this.isAllowType() ? matched : !matched;
    }

    async getObjectFilter () { // filter objects in list
        const meta = this.getBaseMeta();
        const user = this.getUserId();
        const student = await meta.getClass('student').find({user}).id();
        const task = await meta.getClass('task').find({student}).ids();
        return {task};
    }
};`]
};
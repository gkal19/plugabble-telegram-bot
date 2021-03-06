import adminIds from '../../admins';

const notifyAdmins = (bot, txt) => adminIds
    .forEach(id => bot.sentMessage(id, txt, {parse_mode: 'Markdown'}));

const isAdmin = userId => adminIds.indexOf(userId) >= 0;

export {
    notifyAdmins,
    isAdmin
};
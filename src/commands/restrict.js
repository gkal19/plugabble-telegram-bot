/**
 * Repete, em negrito, a mensagem enviada pelo usuário. Uso restrito a administradores
 */
export default {
    regex: /\/restrict (.*)/
    , run: (session, msg, match) =>
        new Promise(res =>
            res({text: `*${match[1]}*`, options: {parse_mode: 'Markdown'}}))
    , adminOnly: true
    , isSlashCommand: true
    , helpText: 'Repete a mensagem enviada em negrito'
};

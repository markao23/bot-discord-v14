const { getVoiceConnection } = require('@discordjs/voice');

module.exports = {
    name: 'leave',
    description: 'Leave the voice channel',
    async execute(message, args) {
        const connection = getVoiceConnection(message.guild.id);

        if (!connection) {
            return message.reply('Eu não estou em nenhum canal de voz.');
        }

        connection.destroy();
        message.reply('Eu saí do canal de voz.');
    },
};

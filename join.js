const { joinVoiceChannel } = require('@discordjs/voice');

module.exports = {
    name: 'join',
    description: 'Join the voice channel',
    async execute(message, args) {
        if (!message.member.voice.channel) {
            return message.reply('Você precisa estar em um canal de voz para usar este comando.');
        }

        const channel = message.member.voice.channel;

        const connection = joinVoiceChannel({
            channelId: channel.id,
            guildId: channel.guild.id,
            adapterCreator: channel.guild.voiceAdapterCreator,
        });

        message.reply('Eu entrei no canal de voz!');
    },
};

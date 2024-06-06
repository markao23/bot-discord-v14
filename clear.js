module.exports = {
    name: 'clear',
    description: 'Clear a specified number of messages',
    async execute(message, args) {
        // Verificar se o usuário tem permissões para gerenciar mensagens
        if (!message.member.permissions.has('MANAGE_MESSAGES')) {
            return message.reply('Você não tem permissão para usar esse comando.');
        }

        // Verificar se o número de mensagens a ser apagado foi especificado
        const amount = parseInt(args[0]);

        if (isNaN(amount)) {
            return message.reply('Por favor, forneça um número válido de mensagens para apagar.');
        } else if (amount < 1 || amount > 100) {
            return message.reply('Você precisa especificar um número entre 1 e 100.');
        }

        // Apagar as mensagens
        try {
            await message.channel.bulkDelete(amount, true);
            message.channel.send(`Apaguei ${amount} mensagens com sucesso.`).then(msg => {
                setTimeout(() => msg.delete(), 5000);
            });
        } catch (error) {
            console.error(error);
            message.reply('Houve um erro ao tentar apagar as mensagens neste canal.');
        }
    },
};

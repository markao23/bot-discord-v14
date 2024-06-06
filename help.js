module.exports = {
    name: 'help',
    description: 'List all available commands or get details about a specific command',
    execute(message, args) {
        const { commands } = message.client;

        if (!args.length) {
            // Listar todos os comandos disponíveis
            const commandNames = commands.map(command => command.name).join(', ');
            return message.channel.send(`Aqui está uma lista de todos os meus comandos:\n\`${commandNames}\`\nVocê pode enviar \`!help [nome do comando]\` para obter informações sobre um comando específico!`);
        }

        // Informações detalhadas sobre um comando específico
        const name = args[0].toLowerCase();
        const command = commands.get(name);

        if (!command) {
            return message.reply('Esse comando não existe.');
        }

        let reply = `**Nome:** ${command.name}\n`;

        if (command.description) reply += `**Descrição:** ${command.description}\n`;
        if (command.usage) reply += `**Uso:** ${prefix}${command.name} ${command.usage}\n`;

        message.channel.send(reply);
    },
};

module.exports = {
    name: "ping",
    data: {
        name: "ping",
        description: "See how long it takes to ping the bot.",
    },
    execute(interaction) {
        
        var embed = new Discord.MessageEmbed()
            .setTitle("Pong!")
            .setDescription("There is the latency of the bot")
            .setColor("ORANGE")
            .setThumbnail(utente.displayAvatarURL())
            .addField("Ping", `${client.ws.ping}ms`)
            .setTimestamp()
        interaction.reply({ embeds: [embed], ephemeral: true })
    }
}
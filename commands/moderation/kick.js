module.exports = {
    name: "kick",
    data: {
        name: "kick",
        description: "The kick command kicks a user from the server.",
        options: [
            {
                name: "user",
                description: "The user to kick.",
                type: "USER",
                required: true
            },
            {
                name: "reason",
                description: "The reason for the kick.",
                type: "STRING",
                required: false
            }
        ]
    },
    execute(interaction) {
        if (!interaction.member.permissions.has("KICK_MEMBERS")) {
            return interaction.reply({ content: "You don't have permission to perform this command.", ephemeral: true })
        }
        var utente = interaction.options.getUser("user")
        var reason = interaction.options.getString("reason") || "No reason given"
        var member = interaction.guild.members.cache.get(utente.id)
        var author = interaction.user.id
        if (!member?.kickable) {
            return interaction.reply({ content: "I can't kick this user.", ephemeral: true })
        }
       
        member.kick()

        var embed = new Discord.MessageEmbed()
            .setTitle("User kicked")
            .setThumbnail(utente.displayAvatarURL())
            .addField("User", utente.toString())
            .addField("Moderator", "<@" + author + ">")
            .addField("Reason", reason)
            .setColor("RED")
            .setTimestamp()
        interaction.reply({ embeds: [embed] })
    }
}
const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", ()=> {
    console.log("I am ready!");
});

client.on('voiceStateUpdate', (oldMember, newMember) => {
    let newUserChannel = newMember.voiceChannel;
    let oldUserChannel = oldMember.voiceChannel;


    var channel = client.channels.get('486282607580020787');
if(oldUserChannel === undefined && newUserChannel !== undefined) {

    const embed = new Discord.RichEmbed()
        .setAuthor(newMember.displayName + "#" +  newMember.user.discriminator, newMember.user.avatarURL)
        .setColor(0x00AE86)
        .setTimestamp()
        .addField("\u200b", "<@" + newMember.user.id + ">" + " has joined " + newUserChannel, true);
    channel.send(embed);

    channel.sendMessage(newMember.displayName + ' has joined ' + newMember.voiceChannel, {
        tts: true
    });


} else if(newUserChannel === undefined){

    const embed = new Discord.RichEmbed()
        .setAuthor(newMember.displayName + "#" +  newMember.user.discriminator, newMember.user.avatarURL)
        .setColor(0x00AE86)
        .setTimestamp()
        .addField("\u200b", "<@" + newMember.user.id + ">" + " has left " + oldUserChannel, true);
    channel.send(embed);

    channel.sendMessage(oldMember.displayName + ' has left ' + oldMember.voiceChannel, {
        tts: true
    });
}
});

client.login("");
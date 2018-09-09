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
    channel.sendMessage(newMember.displayName + ' has joined ' + newMember.voiceChannel, {
        tts: true
    });

} else if(newUserChannel === undefined){
    channel.sendMessage(oldMember.displayName + ' has left ' + oldMember.voiceChannel, {
        tts: true
    });
}
});

client.login("");

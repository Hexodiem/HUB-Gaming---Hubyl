const Discord = require('discord.js');
const {TOKEN, PREFIX} = require("./config");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	if (msg.author.bot) return;

	if(msg.content.startsWith(`${PREFIX}` + "annonce")) {

	var args = msg.content.split(" ").slice(1);
	var msg = args.join(' ');

	const annonces = client.channels.find(r => r.id === '635663308208209944')

	annonces.send(msg);	
	}
});

client.login(TOKEN);
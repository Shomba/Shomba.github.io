import { SlashCommandBuilder } from '@discordjs/builders';
import axios from 'axios';
import { ButtonInteraction, CommandInteraction, MessageActionRow } from 'discord.js';
module.exports = {
	data: new SlashCommandBuilder()
		.setName('inspirobot')
		.setDescription('poetico'),
	async execute(interaction: CommandInteraction) {
		const url = await axios.get("https://inspirobot.me/api?generate=true")
		console.log(url.data)
		return interaction.reply({
			embeds: [{
				"type": "rich",
				"title": "",
				"description": "",
				"color": 0x00FFFF,
				"image": {
					"url": url.data,
					"height": 0,
					"width": 0
				},
			}],
			components: [{
				type:1,
				components:[
					{
						type:2,
						style:1,
						label:"novo",
						customId:"inspirobot"
					}
				]
			}]
		})
	},

};
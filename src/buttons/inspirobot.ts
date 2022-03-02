import { SlashCommandBuilder } from '@discordjs/builders';
import { ButtonInteraction } from 'discord.js';
import axios from "axios"
module.exports = {
	async execute(interaction: ButtonInteraction) {
		const url = await axios.get("https://inspirobot.me/api?generate=true")
		console.log(url.data)
		return interaction.message.edit({
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
				type: 1,
				components: [
					{
						type: 2,
						style: 1,
						label: "novo",
						customId: "inspirobot"
					}
				]
			}]
		})
	},
};
import { SlashCommandBuilder } from '@discordjs/builders';
import { ButtonInteraction } from 'discord.js';

module.exports = {
	async execute(interaction:ButtonInteraction) {
		return interaction.reply({
            content:"Pong!",
            components: [
				{
				  type: 1,
				  components: [
					{
						label:"PING",
					  style: 1,
					  type: 2,
					  customId:"ping"
					}
				  ]
				}
			  ],
        });
	},
};
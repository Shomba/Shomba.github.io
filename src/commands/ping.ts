import { SlashCommandBuilder } from '@discordjs/builders';

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Pong'),
	async execute(interaction) {
		return interaction.reply('Pong!');
	},
};
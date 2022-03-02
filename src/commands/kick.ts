import { SlashCommandBuilder } from '@discordjs/builders';
import {CommandInteraction} from 'discord.js';

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kick')
		.setDescription('kick user')
        .addUserOption(opt=>
            opt
            .setName("user")
            .setDescription("user to kick")
            .setRequired(true)
            ),
	async execute(interaction:CommandInteraction) {
        const user = interaction.options.get("user",true).user
        console.log(`${user.toString()} removed`)
        interaction.guild.members.kick(user)
		return interaction.reply(`${user.toString()} was removed`);
	},
};
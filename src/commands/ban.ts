import { SlashCommandBuilder } from '@discordjs/builders';
import {CommandInteraction} from 'discord.js';

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ban')
		.setDescription('ban user')
        .addUserOption(opt=>
            opt
            .setName("user")
            .setDescription("user to ban")
            .setRequired(true)
            ),
	async execute(interaction:CommandInteraction) {
        const user = interaction.options.get("user",true).user
        console.log(`${user.toString()} removed by ${user.toString()}`)
        interaction.guild.bans.create(interaction.options.get("user",true).user)
		return interaction.reply(`${user.toString()} was removed`);
	},
};
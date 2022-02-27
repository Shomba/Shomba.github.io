'use strict';

import { readdir } from "fs"
import {REST} from "@discordjs/rest"
import {Routes} from "discord-api-types/v9"
import { Client, Intents, Collection, Message,Options, Interaction, CommandInteraction, Command } from "discord.js"
const { token, prefix } = require("../config.json")
import { ActivityTypes } from "discord.js/typings/enums";
console.log(require('discord.js').version)
const print = console.log
const client = new Client({ 
    intents: [new Intents(32767)],
    makeCache: Options.cacheEverything(),
    presence:{
        activities:[{
            name:"você",
            type:ActivityTypes.WATCHING
        }]
    }
});
const commands:object[] = []
client.commands = new Collection()
readdir('./commands', (err, files) => {
    if (err) { print(err) }
    files.filter(file => file.endsWith('.ts'));
    for (const file of files) {
        const com = require(`./commands/${file}`)
        commands.push(com.data.toJSON())
        client.commands.set(com.data.name,com)
    }
})

/*
var commands = {
    "ping": {
        desc: "makes a ping",
        usage: "",
        run: (msg: Message) => {
            console.log("pinged")
            msg.channel.send("pong");
        }
    },
    "kick": {
        desc: "kicks a member out of the server",
        usage: "<user>",
        run: (msg: Message) => {
            if (msg.mentions) {
                let target = msg.mentions.users.first()
                msg.guild.members.kick(target)
                msg.channel.send(`${target.username}#${target.discriminator} kicked`)
            }
            else {
                msg.reply("no user mentioned")
            }
        }
    },
    "ban": {
        desc: "ban a member",
        usage: "<user>",
        run: (msg: Message) => {
            if (msg.mentions) {
                let target = msg.mentions.users.first()
                msg.guild.members.kick(target)
                msg.channel.send(`${target.username}#${target.discriminator} kicked`)
            }
            else {
                msg.reply("no user mentioned")
            }
        }
    }
}
*/
client.once('ready', () => {
    console.log('Ready!');
    const CLIENT_ID = client.user.id
    const rest = new REST({
        version:"9",
    }).setToken(token);

    (async ()=>{
        try{
                print("sending command")
                await rest.put(Routes.applicationGuildCommands(CLIENT_ID,"742515639499096216"),{
                    body:commands
                })
                print("command registred")
        }catch(err){if(err)print(err)}
    })()
});
client.on("interactionCreate",async (inter)=>{
    if(!inter.isCommand()) return
    const command = client.commands.get(inter.commandName)
    print(inter.commandName)
    if(!command) return
    try{
        print(command)
        await command.execute(inter)
    }catch(err){if(err){print(err)}}
})
client.on("messageCreate", (msg:Message) => {

});
client.login(token);
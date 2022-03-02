'use strict';

import { readdir } from "fs"
import {REST} from "@discordjs/rest"
import {Routes} from "discord-api-types/v9"
import { Client, Intents, Collection, Message,Options, Interaction, CommandInteraction, Command, ButtonInteraction } from "discord.js"
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
interface Buttons{
    [key:string]:{
        execute:(button:ButtonInteraction) =>  Promise<any>
    }
}
const commands:object[] = []
client.commands = new Collection()
readdir('./commands', (err, files) => {
    if (err) { print(err) }
    files.filter(file => file.endsWith('.ts'));
    for (const file of files) {
        //print(file+": "+typeof require(`./commands/${}`))
        const com = require(`./commands/${file}`)
        commands.push(com.data.toJSON())
        client.commands.set(com.data.name,com)
    }
})
const buttons:Buttons= {}
readdir('./buttons', (err, files) => {
    if (err) { print(err) }
    files.filter(file => file.endsWith('.ts'));
    for (const file of files) {
        //print(file+": "+typeof require(`./buttons/${}`))
        const but = require(`./buttons/${file}`)
        print(`||${typeof but}||: ${but}`)
        buttons[file.split(".")[0]]= but
    }
    print(buttons)
})

client.once('ready', () => {
    console.log('Ready!');
    const CLIENT_ID = client.user.id
    const rest = new REST({
        version:"9",
    }).setToken(token);

    (async ()=>{
        try{
                print("sending local")
                await rest.put(Routes.applicationGuildCommands(CLIENT_ID,"742515639499096216"),{
                    body:commands
                })
                await rest.put(Routes.applicationGuildCommands(CLIENT_ID,"758777369900744721"),{
                    body:commands
                })
                print("local registred")
                print("sending global")
                await rest.put(Routes.applicationCommands(CLIENT_ID),{
                    body:commands
                })
                print("global registred")
        }catch(err){if(err)print(err)}
    })()
});
client.on("interactionCreate",async (inter)=>{
    if(inter.isCommand()){
        const command = client.commands.get(inter.commandName)
    print(inter.commandName)
    if(!command) return
    try{
        //print(command)
        await command.execute(inter)
    }catch(err){if(err){print(err)}}
    }
    else if(inter.isButton()){
        try{
            //print(command)
            await buttons[inter.customId].execute(inter)
        }catch(err){if(err){print(err)}}
    }
    
})
client.on("messageCreate", (msg:Message) => {

});
client.login(token);
const {Telegraf} = require("telegraf");

const TOKEN = '5899270719:AAEXUSEDmcp1z6Hwkrc1IWXJcW8oqB71Vg8';
const bot = new Telegraf(TOKEN);

let badarr = ['рома говно', 'a'];

bot.on('new_chat_members', (ctx)=>{
    ctx.sendMessage('hi');
});
bot.start((ctx) => {
    ctx.reply('рома');
});
bot.hears('рома',(ctx) => {
    ctx.reply('рома');
});
bot.hears('Рома',(ctx) => {
    ctx.reply('Кто такой Рома?');
});
bot.hears(badarr, (ctx) => {
    ctx.sendMessage('Иди нафиг!!');
});
bot.launch();
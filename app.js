const { Telegraf } = require('telegraf');

const TOKEN = '5899270719:AAEXUSEDmcp1z6Hwkrc1IWXJcW8oqB71Vg8';
const bot = new Telegraf(TOKEN);

let badarr = ['рома говно', 'a'];

bot.start((ctx) => {
    ctx.reply('рома');
})

bot.hears('рома',(ctx) => {
    ctx.reply('рома');
    ctx.forwardMessage(-1001730772840);
})
bot.hears('Рома',(ctx) => {
    ctx.reply('Кто такой Рома?');
})
bot.hears(badarr, (ctx) => {
    ctx.sendMessage('Иди нафиг!!');
})

bot.launch();
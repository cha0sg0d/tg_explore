"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const grammy_1 = require("grammy");
const menu_1 = require("@grammyjs/menu");
require("dotenv/config");
// Create an instance of the `Bot` class and pass your bot token to it.
if (!process.env.TG_BOT_KEY)
    throw new Error(`Need TG_BOT_KEY in .env`);
const bot = new grammy_1.Bot(process.env.TG_BOT_KEY); // <-- put your bot token between the ""
// You can now register listeners on your bot object `bot`.
// grammY will call the listeners when users send messages to your bot.
// Handle the /start command.
bot.command('start', (ctx) => ctx.reply('Welcome! Up and running.'));
// Handle other messages.
const menu = new menu_1.Menu('my-menu-identifier')
    .text('A', (ctx) => ctx.reply('You pressed A!'))
    .row()
    .webApp('Launch web', 'https://127.0.0.1:5173/')
    .row()
    .text('B', (ctx) => ctx.reply('You pressed B!'));
// Make it interactive.
bot.use(menu);
bot.command('menu', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    // Send the menu.
    yield ctx.reply('Check out this menu:', { reply_markup: menu });
}));
bot.on('message', (ctx) => console.log(`Received message`, ctx.message));
// Now that you specified how to handle messages, you can start your bot.
// This will connect to the Telegram servers and wait for messages.
// Start the bot.
bot.start();

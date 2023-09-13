import { Bot } from 'grammy';

import { Menu } from '@grammyjs/menu';

import 'dotenv/config';

// Create an instance of the `Bot` class and pass your bot token to it.
if (!process.env.TG_BOT_KEY) throw new Error(`Need TG_BOT_KEY in .env`);
const bot = new Bot(process.env.TG_BOT_KEY); // <-- put your bot token between the ""

// You can now register listeners on your bot object `bot`.
// grammY will call the listeners when users send messages to your bot.

// Handle the /start command.
bot.command('start', (ctx) => ctx.reply('Welcome! Up and running.'));
// Handle other messages.

const menu = new Menu('my-menu-identifier')
	.text('A', (ctx) => ctx.reply('You pressed A!'))
	.row()
	.webApp('Launch web', 'https://127.0.0.1:5173/')
	.row()
	.text('B', (ctx) => ctx.reply('You pressed B!'));

// Make it interactive.
bot.use(menu);

bot.command('menu', async (ctx) => {
	// Send the menu.
	await ctx.reply('Check out this menu:', { reply_markup: menu });
});

bot.on('message', (ctx) => console.log(`Received message`, ctx.message));

// Now that you specified how to handle messages, you can start your bot.
// This will connect to the Telegram servers and wait for messages.

// Start the bot.
bot.start();

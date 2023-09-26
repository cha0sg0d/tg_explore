import { Bot } from 'grammy';

import { Menu, MenuRange } from '@grammyjs/menu';

import 'dotenv/config';

// Create an instance of the `Bot` class and pass your bot token to it.
if (!process.env.TG_BOT_KEY) throw new Error(`Need TG_BOT_KEY in .env`);
const bot = new Bot(process.env.TG_BOT_KEY); // <-- put your bot token between the ""

// You can now register listeners on your bot object `bot`.
// grammY will call the listeners when users send messages to your bot.

// Handle the /start command.
bot.command('start', (ctx) => ctx.reply('Welcome! Up and running.'));
// Handle other messages.

// const url = 'https://deploy-preview-1--tg-cha0s.netlify.app';
// const url =
// 	'https://pcdpass.xyz/#/prove?request=%7B%22type%22%3A%22Get%22%2C%22returnUrl%22%3A%22https%3A%2F%2Fapi.pcdpass.xyz%2Ftelegram%2Fmessage%3Fmessage%3Dasdasdad%22%2C%22args%22%3A%7B%22ticket%22%3A%7B%22argumentType%22%3A%22PCD%22%2C%22pcdType%22%3A%22eddsa-ticket-pcd%22%2C%22userProvided%22%3Atrue%7D%2C%22identity%22%3A%7B%22argumentType%22%3A%22PCD%22%2C%22pcdType%22%3A%22semaphore-identity-pcd%22%2C%22userProvided%22%3Atrue%7D%2C%22fieldsToReveal%22%3A%7B%22argumentType%22%3A%22Object%22%2C%22value%22%3A%7B%22revealEventId%22%3Atrue%7D%2C%22userProvided%22%3Afalse%7D%2C%22watermark%22%3A%7B%22argumentType%22%3A%22String%22%2C%22value%22%3A%2217010157454246064611%22%2C%22userProvided%22%3Afalse%7D%7D%2C%22pcdType%22%3A%22zk-eddsa-ticket-pcd%22%2C%22options%22%3A%7B%22genericProveScreen%22%3Atrue%2C%22title%22%3A%22ZK-EdDSA%20Ticket%20Request%22%2C%22description%22%3A%22Generate%20a%20ZK%20proof%20that%20you%20have%20a%20ticket%20for%20the%20research%20workshop!%20Select%20your%20ticket%20from%20the%20dropdown%20below.%22%7D%7D';

const url = 'https://pcdpass.xyz';
// const url = 'https://zk-tg.com';

const menu = new Menu('my-menu-identifier');

const menuDynamic = new Menu(`Dynamic`);

let a = 'wee loo';

const setMenuRange = () => {
	const range = new MenuRange();
	range.webApp(a, url).row();
	range.text(`Click me`, (ctx) => {
		ctx.reply(`You clicked me`);
		console.log(`CLICKED MUthAAFA`);
	});
	return range;
};

// Make it interactive.
menuDynamic.dynamic(setMenuRange);
bot.use(menuDynamic);

bot.use(menu);

bot.command('menu', async (ctx) => {
	// Send the menu.
	console.log(`Hot reloading...`);
	await ctx.reply('Check out this menu:', { reply_markup: menu.webApp('launch url', url) });
});

bot.command('dynamic', async (ctx) => {
	// Send the menu.

	console.log(`Hot reloading...`);
	a = 'poo pee';
	await ctx.reply('Check out this menu:', { reply_markup: menuDynamic });
});

bot.on('message', (ctx) => console.log(`Received message`, ctx.message));

// Now that you specified how to handle messages, you can start your bot.
// This will connect to the Telegram servers and wait for messages.

// Start the bot.
bot.start();

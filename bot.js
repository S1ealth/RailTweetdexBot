const TelegramBot = require('node-telegram-bot-api');
// replace the value below with the Telegram token you receive from @BotFather
const token = require('./token').token;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message
  console.log(msg);
  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});
// echo
bot.onText(/echo@RailTweetdexBot (.+)/, (msg, match) => {
  console.log('match');
  console.log(msg);
  const chatId = msg.chat.id;
  const resp = match[1];
  const originalMsg = msg.message_id;
  bot.sendMessage(chatId, resp,{reply_to_message_id:originalMsg});
});
//is bot
bot.onText(/isbot@RailTweetdexBot (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const username = match[1];
  const originalMsg = msg.message_id;
  console.log(msg);
  console.log(username);
  bot.getChatMember(chatId,username)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
});
// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  // console.log(msg);
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  // bot.sendMessage(chatId, 'Received your message');
});
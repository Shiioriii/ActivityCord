let discord = require("discord.js-selfbot-v11");
const chalk = require("chalk");
let rpcGenerator = require("discordrpcgenerator");
const dotenv = require("dotenv");
const TOKEN = process.env.TOKEN;
let client = new discord.Client();

CLIENT_ID = "The bot's client id's";
IMAGE_NAME = "The name/key of the images";
LARGE_TEXT = "Large text on the status";
SMALL_TEXT = "Small text on the status";
LINK = "A twitch link (Example: https://twitch.tv/rinzxxdc)";

client.on("ready", () => {
  rpcGenerator
    .getRpcImage(CLIENT_ID, IMAGE_NAME)
    .then((image) => {
      let presence = new rpcGenerator.Rpc()
        .setName("twitch")
        .setUrl(LINK)
        .setType("STREAMING")
        .setApplicationId(CLIENT_ID)
        .setAssetsLargeImage(image.id)
        .setAssetsLargeText(SMALL_TEXT)
        .setDetails(LARGE_TEXT);

      client.user.setPresence(presence.toDiscord());
    })
    .catch(console.error);
  console.log(
    "[" +
      chalk.magentaBright.bold("STREAMING") +
      "]" +
      ` Successfully logged in as ${client.user.username} (${client.user.id})on Discord!`
  );
});

client.login(TOKEN);

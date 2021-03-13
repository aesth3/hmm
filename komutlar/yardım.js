const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("BLUE")
.setTitle(" <a:tick:778172222220271626> Night Yardım Menüsü Sizlerle <a:tick:778172222220271626>")

 .setTimestamp()

.setDescription(":zap: | **-eğlence** = __Eğlence komutlarını görüntülersiniz.__ \n :boom: | **-moderasyon** = __Moderasyon komutlarını görüntülersiniz.__ \n :rocket: | **-kullanıcı** = __Kullanıcı komutlarını görüntülersiniz.__ \n :bridge_at_night: | **-logo** = __Logo komutlarını görüntülersiniz.__")
.setImage("https://cdn.discordapp.com/attachments/744536225230094360/751100899836821534/Night_Sky_Mountain_Decorative_Border_Youtube_Thumbnail.png")
message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["help","y"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'yardım',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!yardım'
}
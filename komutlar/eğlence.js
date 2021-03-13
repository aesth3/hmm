const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Night v12 Sürümü Sizlerle")
.setTitle(":gem: Gece Botu Eğlence Komutuları:gem:")
.setTimestamp()
.setDescription("<a:rar:778181734126452766> **-tersyazı** = Bir Yazıyı Bot Ters Yazar.<a:hyper:777896660210024449> \n <a:rar:778181734126452766>  **-mcskin** = Yazdığınız ismin minecraft görünüşünü atar. <a:hyper:777896660210024449>\n <a:rar:778181734126452766> **-fbi** = Bot FBi Gif Atar. <a:hyper:777896660210024449> \n <a:rar:778181734126452766> **-token** = Tokenimi Öğrenmek İstemezmisin? <a:hyper:777896660210024449> \n <a:rar:778181734126452766> **-düello** = Düello Atarsın. <a:hyper:777896660210024449> \n <a:rar:778181734126452766> **-wasted** = Polis tarafından yakalanırsın. <a:hyper:777896660210024449> \n <a:rar:778181734126452766> **-atatürk** = Dene ve gör... (1881-1938) <a:hyper:777896660210024449>")
.setImage("https://cdn.discordapp.com/attachments/744536225230094360/751100899836821534/Night_Sky_Mountain_Decorative_Border_Youtube_Thumbnail.png")
message.channel.send(eğlence)
  
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'eğlence',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!eğlence'
}
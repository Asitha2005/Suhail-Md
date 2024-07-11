const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="asithagunarathna9@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "net/?retryWrites=true&w=majorityrv://"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail1.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ASITHA_MD" 


global.devs = "94789123880" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94789123880";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_24_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDYsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjM0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAxLFxuICAgICAgICA2MixcbiAgICAgICAgMjIsXG4gICAgICAgIDAsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDQ1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzksXG4gICAgICAgIDczLFxuICAgICAgICAyMyxcbiAgICAgICAgMTE1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTg4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDk5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTU1LFxuICAgICAgICA1MSxcbiAgICAgICAgMjAxLFxuICAgICAgICA2MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzksXG4gICAgICAgIDY5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDksXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjIyLFxuICAgICAgICA4NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjksXG4gICAgICAgIDI2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM3LFxuICAgICAgICA4NyxcbiAgICAgICAgMjAzLFxuICAgICAgICA1MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjEsXG4gICAgICAgIDk0LFxuICAgICAgICA1OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDQsXG4gICAgICAgIDg3LFxuICAgICAgICAyNixcbiAgICAgICAgMjE4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTE1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxODQsXG4gICAgICAgIDk5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTczLFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyMixcbiAgICAgICAgNTMsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDY4LFxuICAgICAgICA5MixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTYwLFxuICAgICAgICAxODYsXG4gICAgICAgIDIzNixcbiAgICAgICAgOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY1LFxuICAgICAgICAzMixcbiAgICAgICAgMTksXG4gICAgICAgIDExOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDY2LFxuICAgICAgICA1NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTksXG4gICAgICAgIDc2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDU1LFxuICAgICAgICA5MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDMwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTExLFxuICAgICAgICA5NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTcwLFxuICAgICAgICA4NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDgxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTcxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzksXG4gICAgICAgIDkxLFxuICAgICAgICAzNyxcbiAgICAgICAgMCxcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOUZkSWJCL05GUmcwVnp0VlR0eEZ4OVBFRXZCZUdpRkRENUppeW4rL0NmUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDcxNDg1NzMyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOTUwQkU3MzVCNzlDRjc1RUI5Mzg0N0JFQ0FEMzQzNjFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNjY4MjYyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjE3TzRTdXZuUzJxTVdVQXNFcC0zclFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjBiYzc3NmYtYjI5Yy00NTZhLThiMzctMjFlM2QwOTBlMjg2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMyxcbiAgICAgIDE5NSxcbiAgICAgIDE4LFxuICAgICAgMyxcbiAgICAgIDE3MCxcbiAgICAgIDg0LFxuICAgICAgNjksXG4gICAgICAxNTQsXG4gICAgICAyMTMsXG4gICAgICAyMTksXG4gICAgICAyMDAsXG4gICAgICAyMzQsXG4gICAgICAxNzIsXG4gICAgICAzLFxuICAgICAgMTMxLFxuICAgICAgMjE0LFxuICAgICAgMTE5LFxuICAgICAgMTg5LFxuICAgICAgMzUsXG4gICAgICA3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMSxcbiAgICAgIDQ1LFxuICAgICAgMTczLFxuICAgICAgMixcbiAgICAgIDExNCxcbiAgICAgIDE2LFxuICAgICAgMzUsXG4gICAgICAxMDcsXG4gICAgICAyMjQsXG4gICAgICAyMjAsXG4gICAgICAxOTksXG4gICAgICA1NyxcbiAgICAgIDEzLFxuICAgICAgMjIxLFxuICAgICAgMjI5LFxuICAgICAgMTE2LFxuICAgICAgMzAsXG4gICAgICAxMzcsXG4gICAgICAxNTgsXG4gICAgICAyNTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUk1aM1ZKSFhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzE0ODU3MzIzOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIxNDQ5NTQxNDc3MTg0MDo1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09IZDk5MEZFTitndmJRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidzVnZFpUQkZtVzlUSHMrNVg0SXBUMUZ6Z3ZLMHBBaGxWT2xYUUJyYm8zTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJoUzNvSDViay8va2RuR1ExV1dkS3dOd3JQRXhUZ21jU0lWVERlWW9YalQvZlp1a1F2Rm9teU9mUFozOEprV3dmL0tzNUlPUDlKVmc1T3VkeVR4ME5EUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJDYVdrN1lUMmRCcm5UZEozNS9IdkFieWhIUDFJUitsNmdOZ21FTWlCQk5LK0JOOXpkbWtoZlUyWVhHcGdZNVVxVC93bjRMY24wdzV0N1d6QWJQdm1nQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDcxNDg1NzMyMzo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNjY4MjU4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSDVBXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFINUEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJlK05wMkZIa0ROR0NHaklPMEZaRFluOGdveDZhQWN3ZTZXUHYwMDNiT1lZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1MzkxNzQxMTIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA2MzA3Mzc4ODNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "`ASITHA_MD`",
  ownername:process.env.OWNER_NAME|| "ASITHA",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public ",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

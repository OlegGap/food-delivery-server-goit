const dbUser = "oleggnap";
const dbPassword = "gnap04gnap";
module.exports = {
  port: process.env.PORT || 3001,
  dbUser,
  dbPassword,
  databaseUrl: `mongodb+srv://oleggnap:${dbPassword}@cluster0-yyaqj.mongodb.net/test`
};
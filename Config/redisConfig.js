/**
* @fileoverview Redis connect config
* @author Jithin Zacharia
*/

var redis = require("redis");
const redisUrl = "127.0.0.1";
const redisPort = "6379";

/**
* @exports connectRedis
* @desc Makes a connection to Redis Cache Server
*/
exports.connectRedis = ()=> {
  var client = redis.createClient(redisUrl, redisPort);
  client.on("ready",()=> {
    console.log(`Redis connected`);
  });
  
  client.on("error",()=> {
    console.log(`Redis connection failed`);
  });
}
/*
 * @Author: Ankang
 * @Date: 2023-08-20 14:50:35
 * @LastEditors: Ankang
 * @LastEditTime: 2023-08-20 14:50:36
 * @Description: NodeJS开发实战
 */
const glob = require("glob");

var result = null;

result = glob.sync(__dirname + "/**/*");

console.log(result);

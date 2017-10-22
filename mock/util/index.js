/**
 * Created by SONG on 2017/10/17.
 */
let fs = require('fs');
function read(callback) {
  fs.readFile('./warehouse/fruits.json','utf-8',function (err,data) {
    if(err||data.length===''){
      return callback([])
    }else {
      callback(JSON.parse(data))
    }
  })
}
function write(data,callback) {
  fs.writeFile('./warehouse/fruits.json',JSON.stringify(data),callback)
}
function readUsers(callback) {
  fs.readFile('./warehouse/users.json','utf-8',function (err,data) {
    if(err||data.length===''){
      return callback ([])
    }else {
      callback(JSON.parse(data))
    }
  })
}
function writeUsers(data,callback) {
  fs.writeFile('./warehouse/users.json',JSON.stringify(data),callback)
}
function readCars(callback) {
  fs.readFile('./warehouse/carts.json','utf-8',function (err,data) {
    if(err||data.length===''){
      return callback([])
    }else {
      callback(JSON.parse(data))
    }
  })
}
function writeCars(data,callback) {
  fs.writeFile('./warehouse/carts.json',JSON.stringify(data),callback)
}
module.exports = {
  read,
  write,
  readUsers,
  writeUsers,
  readCars,
  writeCars
};

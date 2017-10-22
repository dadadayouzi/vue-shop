let express = require('express');
let router = express.Router();
let {readUsers,writeUsers} = require('../util');
let {checkNotLogin,checkLogin} = require('../util/auth');
router.post('/signup',checkNotLogin,function (req,res) {
  let user = req.body;
  console.log(user);
  readUsers(function (users) {
    let OldUser = users.find(item=>item.username==user.username);
    if(OldUser){
      res.json({code:1,error:'用户名重复'})
    }else {
      user.id = users.length>0?users[users.length-1]['id']+1:1;
      console.log(user);
      users.push(user);
      writeUsers(users,function () {
        res.json({code:0,success:'用户注册成功'})
      })
    }
  })

});
router.post('/signin',checkNotLogin,function (req,res) {
  let user = req.body;
  console.log(user);
  readUsers(function (users) {
    let oldUser = users.find((item=>item.username==user.username&&item.password==user.password));
    if(oldUser){
      req.session.user = oldUser;
      res.json({code:0,success:'登录成功！',oldUser})
    }else {
      res.json({code:1,error:'登录失败'})
    }
  })
});
router.get('/signout',checkLogin,function (req,res) {
  req.session.user = null;
  res.json({code:0,success:'退出成功'})
});
module.exports=router;

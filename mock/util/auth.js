/**
 * Created by SONG on 2017/10/17.
 */
exports.checkNotLogin = function (req,res,next) {
  if(req.session.user){
    res.redirect('/')
  }else {
    next()
  }
};
exports.checkLogin = function (req,res,next) {
  if(req.session.user){
    next()
  }else {
    res.json({code:false,error:'亲，你还没有请登录哦！'})
  }
};

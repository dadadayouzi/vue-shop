/**
 * Created by SONG on 2017/10/17.
 */
let express = require('express');
let router = express.Router();
let {checkLogin} = require('../util/auth');
let {readCars,writeCars} = require('../util');
router.get('/list',checkLogin,function (req,res) {
    readCars(function (fruits) {
        res.json({code:true,fruits})
    })

});
//添加购物车
router.post('/add',checkLogin,function (req,res) {
  let car = req.body;
  readCars(function (carts) {
    console.log(carts.length);
    if(carts.length<=0){
        car._id = req.session.user.id;
        car.count = 1;
      car.isSelected= true;
      carts.push(car);
      writeCars(carts,function () {
          res.json({code:true,success:'加入购物车成功'})
        })
    }else{
      let furit = carts.find(item=>item.id==car.id);
      if(furit){
        carts =carts.map(cart=>{
          if(cart.bookName==car.bookName&&cart._id==req.session.user.id){
            car._id = req.session.user.id;
            car.count = parseInt(cart.count)+1;
            return car;
          }
          return cart;
        });
        writeCars(carts,function () {
          res.json({code:true,success:'加入购物车成功'})
        })
      }else {
        car._id = req.session.user.id;
        car.count = 1;
        car.isSelected= true;
        carts.push(car);
        writeCars(carts,function () {
          res.json({code:true,success:'加入购物车成功'})
        })
      }
    }

  })

});
//删除购物车
router.get('/delete',function (req,res) {
  let id = req.query.id;
  readCars(function (carts) {
     carts = carts.filter(car=>car.id!=id);
    writeCars(carts,function () {
       res.json({code:true,success:'删除成功！'})
     })
  })
});

module.exports = router;

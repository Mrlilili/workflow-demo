/**
 * Created by admin-b on 2016/3/31.
 * fas
 */
define(function (require, exports, module) {
    var $ = require('jquery');
    var t = require('./DrawLottery');
   var test =  new t('lotteryContainer', 'start');
    test.rollSetting.index = 0;
    test.rollSetting.speed = 50;
    test.rollSetting.times = 2;
    test.rollSetting.prize = 6;
});

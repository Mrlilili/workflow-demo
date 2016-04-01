/**
 * Created by admin-b on 2016/4/1.
 * fas
 */
define(function (require, exports, module) {
    var $ = require('jquery');
    var dialog = require('dialog');
    //var t = require('./dialogFuc');
    var d = dialog({
        title: '欢迎',
        content: '欢迎使用 artDialog 对话框组件！'
    });
    d.show();
    console.log($().jquery);
});

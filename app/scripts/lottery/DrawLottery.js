define(function (require, exports, module) {
    /**
     * 多宫格抽奖插件
     * @param lotteryContainer 奖项容器
     * @param startBtn  开始抽奖按钮
     * @constructor
     */
    function DrawLottery(lotteryContainer, startBtn) {
        this.$LC = $('.' + lotteryContainer);//获取容器Dom
        this.$SB = $('.' + startBtn);//获取开始按钮Dom
        this.rollSetting = {
            index: -1,//当前转动的位置
            speed: 50,//初始转动速度
            times: 5,//转动次数
            prize: 5,//中奖位置
        };
        this.init();//初始化
    };
    DrawLottery.prototype = {
        init: function () {
            var self = this;
            this.t = function () {
                self.action();
                self.$SB.unbind('click', self.t);
            };
            self.$SB.bind('click', self.t);
        },
        /**
         * 抽奖交互事件
         */
        action: function () {
            console.log('action');
            var self = this;
            var $LC_child = self.$LC.find('div');//获得奖项容器里面的元素数组
            var $LC_childLength = $LC_child.length;//容器子元素个数
            var setting = {}//配置参数
            $.extend(setting, self.rollSetting);//copy 配置对象
            /**
             * 实现交互
             */
            function roll() {
                setting.index += 1;//移动当前奖项位置
                if (setting.times < 3) {//还剩最后传动次数三次的时候转速递增翻倍
                    setting.speed += 10 * setting.times;
                } else {
                    setting.speed += 5;
                }
                setting.index == $LC_childLength ? setting.times += -1 : setting.times = setting.times;//当前位置等于最大位置的时候代表转完一圈，转动次数减一
                setting.index == $LC_childLength ? setting.index = 0 : setting.index = setting.index;//当前位置等于最大子元素数的时候，初始化当前位置
                $LC_child.removeClass('active').eq(setting.index).addClass('active');//调整选中位置
                if (setting.times == 1) {//最后一圈的时候，如果位置等于奖品位置停止旋转
                    if (setting.index != setting.prize) {
                        setTimeout(roll, setting.speed);
                    } else {
                        self.$SB.bind('click', self.t);
                    }
                } else {
                    setTimeout(roll, setting.speed);
                }
            }

            roll();
        }
    };
    module.exports = DrawLottery;
});

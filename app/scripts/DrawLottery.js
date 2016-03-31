define(function (require, exports, module) {
    function DrawLottery(lotteryContainer, startBtn) {
        this.$LC = $('.' + lotteryContainer);
        this.$SB = $('.' + startBtn);
        this.rollSetting = {
            index: -1,//当前转动的位置
            speed: 50,//初始转动速度
            times: 5,//转动次数
            prize: 5,//中奖位置
        }
        this.init();
    };
    DrawLottery.prototype = {
        init: function () {
            var self = this;
            this.$SB.on('click', function () {
                self.action();
            });
        },
        action: function () {
            var self = this;
            var $LC_child = self.$LC.find('div');
            var $LC_childLength = $LC_child.length;
            var setting = self.rollSetting;
            function roll() {
                setting.index += 1;
                if (setting.times < 3) {
                    setting.speed += 10 * setting.times;
                } else {
                    setting.speed += 5;
                }
                setting.index == $LC_childLength ? setting.times += -1 : setting.times = setting.times;
                setting.index == $LC_childLength ? setting.index = 0 : setting.index = setting.index;
                $LC_child.removeClass('active');
                $LC_child.eq(setting.index).addClass('active');
                if (setting.times == 1) {
                    if (setting.index != setting.prize) {
                        setTimeout(roll, setting.speed);
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

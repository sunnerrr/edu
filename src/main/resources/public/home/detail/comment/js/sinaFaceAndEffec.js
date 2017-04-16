/**
 * @author 夏の寒风
 * @time 2012-12-14
 */

//自定义hashtable
function Hashtable() {
    this._hash = new Object();
    this.put = function(key, value) {
        if (typeof (key) != "undefined") {
            if (this.containsKey(key) == false) {
                this._hash[key] = typeof (value) == "undefined" ? null : value;
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
    this.remove = function(key) { delete this._hash[key]; }
    this.size = function() { var i = 0; for (var k in this._hash) { i++; } return i; }
    this.get = function(key) { return this._hash[key]; }
    this.containsKey = function(key) { return typeof (this._hash[key]) != "undefined"; }
    this.clear = function() { for (var k in this._hash) { delete this._hash[k]; } }
}


var emotions = new Array();
var categorys = new Array();// 分组
var uSinaEmotionsHt = new Hashtable();

// 初始化缓存，页面仅仅加载一次就可以了
$(function() {
	
var data = jQuery.parseJSON('[{"phrase":"[坏笑]","type":"face","url":"comment/img/pcmoren_huaixiao_org.png","hot":false,"common":true,"category":"","icon":"comment/img/pcmoren_huaixiao_thumb.png","value":"[坏笑]","picid":""},{"phrase":"[舔屏]","type":"face","url":"comment/img/pcmoren_tian_org.png","hot":false,"common":true,"category":"","icon":"comment/img/pcmoren_tian_thumb.png","value":"[舔屏]","picid":""},{"phrase":"[污]","type":"face","url":"comment/img/pcmoren_wu_org.png","hot":false,"common":true,"category":"","icon":"comment/img/pcmoren_wu_thumb.png","value":"[污]","picid":""},{"phrase":"[微笑]","type":"face","url":"comment/img/huanglianwx_org.gif","hot":false,"common":true,"category":"","icon":"comment/img/huanglianwx_thumb.gif","value":"[微笑]","picid":""},{"phrase":"[嘻嘻]","type":"face","url":"comment/img/tootha_org.gif","hot":false,"common":true,"category":"","icon":"comment/img/tootha_thumb.gif","value":"[嘻嘻]","picid":""},{"phrase":"[哈哈]","type":"face","url":"comment/img/laugh.gif","hot":false,"common":true,"category":"","icon":"comment/img/laugh.gif","value":"[哈哈]","picid":""},{"phrase":"[可爱]","type":"face","url":"comment/img/tza_org.gif","hot":false,"common":true,"category":"","icon":"comment/img/tza_thumb.gif","value":"[可爱]","picid":""},{"phrase":"[可怜]","type":"face","url":"comment/img/kl_org.gif","hot":false,"common":true,"category":"","icon":"comment/img/kl_thumb.gif","value":"[可怜]","picid":""},{"phrase":"[挖鼻]","type":"face","url":"mtp://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/0b/wabi_org.gif","hot":false,"common":true,"category":"","icon":"comment/img/wabi_thumb.gif","value":"[挖鼻]","picid":""},{"phrase":"[吃惊]","type":"face","url":"comment/img/cj_org.gif","hot":false,"common":true,"category":"","icon":"comment/img/cj_thumb.gif","value":"[吃惊]","picid":""},{"phrase":"[害羞]","type":"face","url":"comment/img/shamea_org.gif","hot":false,"common":true,"category":"","icon":"comment/img/shamea_thumb.gif","value":"[害羞]","picid":""},{"phrase":"[挤眼]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/c3/zy_org.gif","hot":false,"common":true,"category":"","icon":"comment/img/zy_thumb.gif","value":"[挤眼]","picid":""},{"phrase":"[闭嘴]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/29/bz_org.gif","hot":false,"common":true,"category":"","icon":"comment/img/bz_thumb.gif","value":"[闭嘴]","picid":""},{"phrase":"[鄙视]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/71/bs2_org.gif","hot":false,"common":true,"category":"","icon":"comment/img/bs2_thumb.gif","value":"[鄙视]","picid":""},{"phrase":"[爱你]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/6d/lovea_org.gif","hot":false,"common":true,"category":"","icon":"comment/img/lovea_thumb.gif","value":"[爱你]","picid":""},{"phrase":"[泪]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/9d/sada_org.gif","hot":false,"common":true,"category":"","icon":"comment/img/sada_thumb.gif","value":"[泪]","picid":""},{"phrase":"[偷笑]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/19/heia_org.gif","hot":false,"common":true,"category":"","icon":"comment/img/heia_thumb.gif","value":"[偷笑]","picid":""},{"phrase":"[亲亲]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/8f/qq_org.gif","hot":false,"common":true,"category":"","icon":"comment/img/qq_thumb.gif","value":"[亲亲]","picid":""},{"phrase":"[生病]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/b6/sb_org.gif","hot":false,"common":true,"category":"","icon":"comment/img/sb_thumb.gif","value":"[生病]","picid":""},{"phrase":"[太开心]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/58/mb_org.gif","hot":false,"common":true,"category":"","icon":"comment/img/mb_thumb.gif","value":"[太开心]","picid":""},{"phrase":"[白眼]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/d9/landeln_org.gif","hot":false,"common":true,"category":"","icon":"comment/img/landeln_thumb.gif","value":"[白眼]","picid":""},{"phrase":"[右哼哼]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/98/yhh_org.gif","hot":false,"common":true,"category":"","icon":"comment/img/yhh_thumb.gif","value":"[右哼哼]","picid":""},{"phrase":"[左哼哼]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/6d/zhh_org.gif","hot":false,"common":true,"category":"","icon":"comment/img/zhh_thumb.gif","value":"[左哼哼]","picid":""},{"phrase":"[嘘]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/a6/x_org.gif","hot":false,"common":true,"category":"","icon":"comment/img/x_thumb.gif","value":"[嘘]","picid":""},{"phrase":"[衰]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/af/cry.gif","hot":false,"common":true,"category":"","icon":"comment/img/cry.gif","value":"[衰]","picid":""},{"phrase":"[委屈]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/73/wq_org.gif","hot":false,"common":true,"category":"","icon":"comment/img/wq_thumb.gif","value":"[委屈]","picid":""},{"phrase":"[吐]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/9e/t_org.gif","hot":false,"common":true,"category":"","icon":"comment/img/t_thumb.gif","value":"[吐]","picid":""},{"phrase":"[哈欠]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/cc/haqianv2_org.gif","hot":false,"common":true,"category":"","icon":"comment/img/haqianv2_thumb.gif","value":"[哈欠]","picid":""},{"phrase":"[抱抱_旧]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/27/bba_org.gif","hot":false,"common":true,"category":"","icon":"comment/img/bba_thumb.gif","value":"[抱抱_旧]","picid":""},{"phrase":"[怒]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/7c/angrya_org.gif","hot":false,"common":true,"category":"","icon":"comment/img/angrya_thumb.gif","value":"[怒]","picid":""},{"phrase":"[疑问]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/5c/yw_org.gif","hot":false,"common":true,"category":"","icon":"comment/img/yw_thumb.gif","value":"[疑问]","picid":""},{"phrase":"[馋嘴]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/a5/cza_org.gif","hot":false,"common":true,"category":"","icon":"comment/img/cza_thumb.gif","value":"[馋嘴]","picid":""},{"phrase":"[拜拜]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/70/88_org.gif","hot":false,"common":true,"category":"","icon":"comment/img/88_thumb.gif","value":"[拜拜]","picid":""},{"phrase":"[思考]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/e9/sk_org.gif","hot":false,"common":true,"category":"","icon":"comment/img/sk_thumb.gif","value":"[思考]","picid":""},{"phrase":"[汗]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/24/sweata_org.gif","hot":false,"common":true,"category":"","icon":"comment/img/sweata_thumb.gif","value":"[汗]","picid":""},{"phrase":"[困]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/40/kunv2_org.gif","hot":false,"common":true,"category":"","icon":"comment/img/kunv2_thumb.gif","value":"[困]","picid":""},{"phrase":"[睡]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/96/huangliansj_org.gif","hot":false,"common":true,"category":"","icon":"comment/img/huangliansj_thumb.gif","value":"[睡]","picid":""},{"phrase":"[钱]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/90/money_org.gif","hot":false,"common":true,"category":"","icon":"comment/img/money_thumb.gif","value":"[钱]","picid":""},{"phrase":"[失望]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/0c/sw_org.gif","hot":false,"common":true,"category":"","icon":"comment/img/sw_thumb.gif","value":"[失望]","picid":""},{"phrase":"[酷]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/40/cool_org.gif","hot":false,"common":true,"category":"","icon":"comment/img/cool_thumb.gif","value":"[酷]","picid":""},{"phrase":"[色]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/20/huanglianse_org.gif","hot":false,"common":true,"category":"","icon":"comment/img/huanglianse_thumb.gif","value":"[色]","picid":""},{"phrase":"[哼]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/49/hatea_org.gif","hot":false,"common":true,"category":"","icon":"comment/img/hatea_thumb.gif","value":"[哼]","picid":""},{"phrase":"[鼓掌]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/36/gza_org.gif","hot":false,"common":true,"category":"","icon":"comment/img/gza_thumb.gif","value":"[鼓掌]","picid":""},{"phrase":"[晕]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/d9/dizzya_org.gif","hot":false,"common":true,"category":"","icon":"comment/img/dizzya_thumb.gif","value":"[晕]","picid":""},{"phrase":"[悲伤]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/1a/bs_org.gif","hot":false,"common":true,"category":"","icon":"comment/img/bs_thumb.gif","value":"[悲伤]","picid":""},{"phrase":"[抓狂]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/62/crazya_org.gif","hot":false,"common":true,"category":"","icon":"comment/img/crazya_thumb.gif","value":"[抓狂]","picid":""},{"phrase":"[黑线]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/91/h_org.gif","hot":false,"common":true,"category":"","icon":"comment/img/h_thumb.gif","value":"[黑线]","picid":""},{"phrase":"[阴险]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/6d/yx_org.gif","hot":false,"common":true,"category":"","icon":"comment/img/yx_thumb.gif","value":"[阴险]","picid":""},{"phrase":"[怒骂]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/60/numav2_org.gif","hot":false,"common":true,"category":"","icon":"comment/img/numav2_thumb.gif","value":"[怒骂]","picid":""},{"phrase":"[互粉]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/89/hufen_org.gif","hot":false,"common":true,"category":"","icon":"comment/img/hufen_thumb.gif","value":"[互粉]","picid":""},{"phrase":"[心]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/40/hearta_org.gif","hot":false,"common":true,"category":"","icon":"comment/img/hearta_thumb.gif","value":"[心]","picid":""},{"phrase":"[伤心]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/ea/unheart.gif","hot":false,"common":true,"category":"","icon":"comment/img/unheart.gif","value":"[伤心]","picid":""},{"phrase":"[猪头]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/58/pig.gif","hot":false,"common":true,"category":"","icon":"comment/img/pig.gif","value":"[猪头]","picid":""},{"phrase":"[熊猫]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/6e/panda_org.gif","hot":false,"common":true,"category":"","icon":"comment/img/panda_thumb.gif","value":"[熊猫]","picid":""},{"phrase":"[兔子]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/81/rabbit_org.gif","hot":false,"common":true,"category":"","icon":"comment/img/rabbit_thumb.gif","value":"[兔子]","picid":""},{"phrase":"[ok]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/d6/ok_org.gif","hot":false,"common":true,"category":"","icon":"comment/img/ok_thumb.gif","value":"[ok]","picid":""},{"phrase":"[耶]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/d9/ye_org.gif","hot":false,"common":true,"category":"","icon":"comment/img/ye_thumb.gif","value":"[耶]","picid":""},{"phrase":"[good]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/d8/good_org.gif","hot":false,"common":true,"category":"","icon":"comment/img/good_thumb.gif","value":"[good]","picid":""},{"phrase":"[NO]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/ae/buyao_org.gif","hot":false,"common":true,"category":"","icon":"comment/img/buyao_org.gif","value":"[NO]","picid":""},{"phrase":"[赞]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/d0/z2_org.gif","hot":false,"common":true,"category":"","icon":"comment/img/z2_thumb.gif","value":"[赞]","picid":""},{"phrase":"[来]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/40/come_org.gif","hot":false,"common":true,"category":"","icon":"comment/img/come_thumb.gif","value":"[来]","picid":""},{"phrase":"[ppb鼓掌]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/7e/ppbguzhang_org.gif","hot":true,"common":false,"category":"","icon":"comment/img/ppbguzhang_thumb.gif","value":"[ppb鼓掌]","picid":""},{"phrase":"[din推撞]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/dd/dintuizhuang_org.gif","hot":true,"common":false,"category":"","icon":"comment/img/dintuizhuang_thumb.gif","value":"[din推撞]","picid":""},{"phrase":"[moc转发]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/cb/moczhuanfa_org.gif","hot":true,"common":false,"category":"","icon":"comment/img/moczhuanfa_thumb.gif","value":"[moc转发]","picid":""},{"phrase":"[lt切克闹]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/73/ltqiekenao_org.gif","hot":true,"common":false,"category":"","icon":"comment/img/ltqiekenao_thumb.gif","value":"[lt切克闹]","picid":""},{"phrase":"[江南style]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/67/gangnamstyle_org.gif","hot":true,"common":false,"category":"","icon":"comment/img/gangnamstyle_thumb.gif","value":"[江南style]","picid":""},{"phrase":"[笑哈哈]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/32/lxhwahaha_org.gif","hot":true,"common":false,"category":"","icon":"comment/img/lxhwahaha_thumb.gif","value":"[笑哈哈]","picid":""},{"phrase":"[挤眼]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/c3/zy_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/zy_thumb.gif","value":"[挤眼]","picid":""},{"phrase":"[亲亲]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/8f/qq_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/qq_thumb.gif","value":"[亲亲]","picid":""},{"phrase":"[太开心]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/58/mb_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/mb_thumb.gif","value":"[太开心]","picid":""},{"phrase":"[生病]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/b6/sb_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/sb_thumb.gif","value":"[生病]","picid":""},{"phrase":"[书呆子]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/61/sdz_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/sdz_thumb.gif","value":"[书呆子]","picid":""},{"phrase":"[失望]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/0c/sw_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/sw_thumb.gif","value":"[失望]","picid":""},{"phrase":"[可怜]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/af/kl_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/kl_thumb.gif","value":"[可怜]","picid":""},{"phrase":"[黑线]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/91/h_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/h_thumb.gif","value":"[黑线]","picid":""},{"phrase":"[吐]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/9e/t_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/t_thumb.gif","value":"[吐]","picid":""},{"phrase":"[委屈]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/73/wq_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/wq_thumb.gif","value":"[委屈]","picid":""},{"phrase":"[思考]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/e9/sk_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/sk_thumb.gif","value":"[思考]","picid":""},{"phrase":"[哈哈]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/6a/laugh.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/laugh.gif","value":"[哈哈]","picid":""},{"phrase":"[嘘]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/a6/x_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/x_thumb.gif","value":"[嘘]","picid":""},{"phrase":"[右哼哼]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/98/yhh_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/yhh_thumb.gif","value":"[右哼哼]","picid":""},{"phrase":"[左哼哼]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/6d/zhh_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/zhh_thumb.gif","value":"[左哼哼]","picid":""},{"phrase":"[疑问]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/5c/yw_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/yw_thumb.gif","value":"[疑问]","picid":""},{"phrase":"[阴险]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/6d/yx_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/yx_thumb.gif","value":"[阴险]","picid":""},{"phrase":"[顶]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/91/d_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/d_thumb.gif","value":"[顶]","picid":""},{"phrase":"[钱]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/90/money_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/money_thumb.gif","value":"[钱]","picid":""},{"phrase":"[悲伤]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/1a/bs_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/bs_thumb.gif","value":"[悲伤]","picid":""},{"phrase":"[鄙视]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/71/bs2_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/bs2_thumb.gif","value":"[鄙视]","picid":""},{"phrase":"[拜拜]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/70/88_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/88_thumb.gif","value":"[拜拜]","picid":""},{"phrase":"[吃惊]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/f4/cj_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/cj_thumb.gif","value":"[吃惊]","picid":""},{"phrase":"[闭嘴]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/29/bz_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/bz_thumb.gif","value":"[闭嘴]","picid":""},{"phrase":"[衰]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/af/cry.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/cry.gif","value":"[衰]","picid":""},{"phrase":"[愤怒]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/bd/fn_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/fn_thumb.gif","value":"[愤怒]","picid":""},{"phrase":"[感冒]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/a0/gm_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/gm_thumb.gif","value":"[感冒]","picid":""},{"phrase":"[酷]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/40/cool_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/cool_thumb.gif","value":"[酷]","picid":""},{"phrase":"[来]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/40/come_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/come_thumb.gif","value":"[来]","picid":""},{"phrase":"[good]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/d8/good_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/good_thumb.gif","value":"[good]","picid":""},{"phrase":"[haha]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/13/ha_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/ha_thumb.gif","value":"[haha]","picid":""},{"phrase":"[ok]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/d6/ok_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/ok_thumb.gif","value":"[ok]","picid":""},{"phrase":"[拳头]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/cc/o_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/o_thumb.gif","value":"[拳头]","picid":""},{"phrase":"[弱]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/d8/sad_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/sad_thumb.gif","value":"[弱]","picid":""},{"phrase":"[握手]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/0c/ws_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/ws_thumb.gif","value":"[握手]","picid":""},{"phrase":"[赞]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/d0/z2_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/z2_thumb.gif","value":"[赞]","picid":""},{"phrase":"[耶]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/d9/ye_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/ye_thumb.gif","value":"[耶]","picid":""},{"phrase":"[最差]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/3e/bad_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/bad_thumb.gif","value":"[最差]","picid":""},{"phrase":"[NO]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/ae/buyao_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/buyao_org.gif","value":"[NO]","picid":""},{"phrase":"[怒骂]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/60/numav2_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/numav2_thumb.gif","value":"[怒骂]","picid":""},{"phrase":"[困]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/40/kunv2_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/kunv2_thumb.gif","value":"[困]","picid":""},{"phrase":"[哈欠]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/cc/haqianv2_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/haqianv2_thumb.gif","value":"[哈欠]","picid":""},{"phrase":"[微笑]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/5c/huanglianwx_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/huanglianwx_thumb.gif","value":"[微笑]","picid":""},{"phrase":"[白眼]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/d9/landeln_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/landeln_thumb.gif","value":"[白眼]","picid":""},{"phrase":"[睡]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/96/huangliansj_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/huangliansj_thumb.gif","value":"[睡]","picid":""},{"phrase":"[色]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/20/huanglianse_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/huanglianse_thumb.gif","value":"[色]","picid":""},{"phrase":"[挖鼻]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/0b/wabi_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/wabi_thumb.gif","value":"[挖鼻]","picid":""},{"phrase":"[傻眼]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/2b/shayan_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/shayan_thumb.gif","value":"[傻眼]","picid":""},{"phrase":"[打脸]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/32/dalian_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/dalian_thumb.gif","value":"[打脸]","picid":""},{"phrase":"[作揖]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/06/zuoyi_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/zuoyi_thumb.gif","value":"[作揖]","picid":""},{"phrase":"[笑cry]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/34/xiaoku_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/xiaoku_thumb.gif","value":"[笑cry]","picid":""},{"phrase":"[红丝带]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/59/red_band_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/red_band_thumb.gif","value":"[红丝带]","picid":""},{"phrase":"[绿丝带]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/9b/green_band_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/green_band_thumb.gif","value":"[绿丝带]","picid":""},{"phrase":"[可爱]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/14/tza_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/tza_thumb.gif","value":"[可爱]","picid":""},{"phrase":"[嘻嘻]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/0b/tootha_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/tootha_thumb.gif","value":"[嘻嘻]","picid":""},{"phrase":"[汗]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/24/sweata_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/sweata_thumb.gif","value":"[汗]","picid":""},{"phrase":"[害羞]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/6e/shamea_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/shamea_thumb.gif","value":"[害羞]","picid":""},{"phrase":"[泪]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/9d/sada_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/sada_thumb.gif","value":"[泪]","picid":""},{"phrase":"[爱你]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/6d/lovea_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/lovea_thumb.gif","value":"[爱你]","picid":""},{"phrase":"[偷笑]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/19/heia_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/heia_thumb.gif","value":"[偷笑]","picid":""},{"phrase":"[心]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/40/hearta_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/hearta_thumb.gif","value":"[心]","picid":""},{"phrase":"[哼]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/49/hatea_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/hatea_thumb.gif","value":"[哼]","picid":""},{"phrase":"[鼓掌]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/36/gza_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/gza_thumb.gif","value":"[鼓掌]","picid":""},{"phrase":"[晕]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/d9/dizzya_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/dizzya_thumb.gif","value":"[晕]","picid":""},{"phrase":"[馋嘴]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/a5/cza_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/cza_thumb.gif","value":"[馋嘴]","picid":""},{"phrase":"[抓狂]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/62/crazya_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/crazya_thumb.gif","value":"[抓狂]","picid":""},{"phrase":"[抱抱_旧]","type":"face","url":"http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/27/bba_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/bba_thumb.gif","value":"[抱抱_旧]","picid":""},{"phrase":"[怒]","type":"face","url":"comment/img/angrya_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/angrya_thumb.gif","value":"[怒]","picid":""},{"phrase":"[右抱抱]","type":"face","url":"comment/img/right_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/right_thumb.gif","value":"[右抱抱]","picid":""},{"phrase":"[左抱抱]","type":"face","url":"comment/img/left_org.gif","hot":false,"common":false,"category":"心情","icon":"comment/img/left_thumb.gif","value":"[左抱抱]","picid":""}]');
        
				for ( var i in data) {
				if (data[i].category == '') {
					data[i].category = '默认';
				}
				if (emotions[data[i].category] == undefined) {
					emotions[data[i].category] = new Array();
					categorys.push(data[i].category);
				}
				emotions[data[i].category].push( {
					name : data[i].phrase,
					icon : data[i].icon
				});
				uSinaEmotionsHt.put(data[i].phrase, data[i].icon);
			}

});

//替换
function AnalyticEmotion(s) {
	if(typeof (s) != "undefined") {
		var sArr = s.match(/\[.*?\]/g);
		if(null!=sArr && '' != sArr){
			for(var i = 0; i < sArr.length; i++){
				if(uSinaEmotionsHt.containsKey(sArr[i])) {
					var reStr = "<img src=\"" + uSinaEmotionsHt.get(sArr[i]) + "\" height=\"22\" width=\"22\" />";
					s = s.replace(sArr[i], reStr);
				}
			}
		}
		
	}
	return s;
}

(function($){
	$.fn.SinaEmotion = function(target){
		var cat_current;
		var cat_page;
		$(this).click(function(event){
			event.stopPropagation();
			var eTop = target.offset().top + target.height() + 15;
			var eLeft = target.offset().left - 1;
			
			if($('#emotions .categorys')[0]){
				$('#emotions').css({top: eTop, left: eLeft});
				$('#emotions').toggle();
				return;
			}
			$('body').append('<div id="emotions"></div>');
			$('#emotions').css({top: eTop, left: eLeft});
			$('#emotions').html('<div>正在加载，请稍候...</div>');
			$('#emotions').click(function(event){
				event.stopPropagation();
			});
			$('#emotions').html('<div style="float:right"><a href="javascript:void(0);" id="prev">&laquo;</a><a href="javascript:void(0);" id="next">&raquo;</a></div><div class="categorys"></div><div class="container"></div>');
			$('#emotions #prev').click(function(){
				showCategorys(cat_page - 1);
			});
			$('#emotions #next').click(function(){
				showCategorys(cat_page + 1);
			});
			showCategorys();
			showEmotions();
			
		});
		$('body').click(function(){
			$('#emotions').remove();
		});
		$.fn.insertText = function(text){
			this.each(function() {
				if(this.tagName !== 'INPUT' && this.tagName !== 'TEXTAREA') {return;}
				if (document.selection) {
					this.focus();
					var cr = document.selection.createRange();
					cr.text = text;
					cr.collapse();
					cr.select();
				}else if (this.selectionStart || this.selectionStart == '0') {
					var 
					start = this.selectionStart,
					end = this.selectionEnd;
					this.value = this.value.substring(0, start)+ text+ this.value.substring(end, this.value.length);
					this.selectionStart = this.selectionEnd = start+text.length;
				}else {
					this.value += text;
				}
			});        
			return this;
		}
		function showCategorys(){
			var page = arguments[0]?arguments[0]:0;
			if(page < 0 || page >= categorys.length / 5){
				return;
			}
			$('#emotions .categorys').html('');
			cat_page = page;
			for(var i = page * 5; i < (page + 1) * 5 && i < categorys.length; ++i){
				$('#emotions .categorys').append($('<a href="javascript:void(0);">' + categorys[i] + '</a>'));
			}
			$('#emotions .categorys a').click(function(){
				showEmotions($(this).text());
			});
			$('#emotions .categorys a').each(function(){
				if($(this).text() == cat_current){
					$(this).addClass('current');
				}
			});
		}
		function showEmotions(){
			var category = arguments[0]?arguments[0]:'默认';
			var page = arguments[1]?arguments[1] - 1:0;
			$('#emotions .container').html('');
			cat_current = category;
			for(var i = 0;  i < emotions[category].length; ++i){
				$('#emotions .container').append($('<a href="javascript:void(0);" title="' + emotions[category][i].name + '"><img src="' + emotions[category][i].icon + '" alt="' + emotions[category][i].name + '" width="22" height="22" /></a>'));
			}
			$('#emotions .container a').click(function(){
				target.insertText($(this).attr('title'));
				$('#emotions').remove();
			});
			 
			$('#emotions .categorys a.current').removeClass('current');
			$('#emotions .categorys a').each(function(){
				if($(this).text() == category){
					$(this).addClass('current');
				}
			});
		}
	}
})(jQuery);
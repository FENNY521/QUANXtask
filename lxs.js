/*
微信公众号：ios黑科技
官方网站：s7aa.cn

QX:

#乐小说解锁会员
^http:\/\/user\.kdmfxs\.com\/api\/v1\/user url script-response-body lxs.js

乐小说商店搜索下载

[mitm]
hostname = user.kdmfxs.com
*/

var obj = JSON.parse($response.body);
obj.data.nickname = "ios黑科技";
obj.data.vipExpireDate = 4092579678;
obj.data.vip = true;

$done({body: JSON.stringify(obj)}); 

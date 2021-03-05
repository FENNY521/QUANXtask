/*
微信公众号：ios黑科技
官方网站：s7aa.cn

优选小视频 无限规则+去除启动广告+系统公告
下载地址:

https://xc3.app/index.html?package=va_100&shareCode=w8uhja

圈X

[rewrite_local]

#优选小视频本地脚本
^https:\/\/vip07\.tr102\.com(\/api\/notice\/notice|\/api\/advertise\/getStartUp|\/api\/user) url script-response-body youxuanxsp.js


MITM =vip07.tr102.com
*/


var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);


const p1 = '/api/notice/notice';
const p2 = '/api/advertise/getStartUp';
const p3 = '/api/user/';

var myQR;
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?a3c0d937c858fbe264753596e485cd38";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

// 百度自动推送代码
(function(){
	if (location.href != "http://www.w3cschool.cn/" || location.href != "https://www.w3cschool.cn/") {
	    var bp = document.createElement('script');
	    var curProtocol = window.location.protocol.split(':')[0];
	    if (curProtocol === 'https') {
	        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';        
	    }
	    else {
	        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
	    }
	    var s = document.getElementsByTagName("script")[0];
	    s.parentNode.insertBefore(bp, s);
	}
})();

/**添加到收藏**/
function addFavoriteTool() {
    var url = window.location || '//www.w3cschool.cn';
    var title = document.title;
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf("360se") > -1) {
        alert("由于360浏览器功能限制，请按 Ctrl+D 手动收藏！");
    }
    else if (ua.indexOf("msie 8") > -1) {
        window.external.AddToFavoritesBar(url, title); //IE8
    }
    else if (document.all) {
		try{
		window.external.addFavorite(url, title);
		}catch(e){
		alert('您的浏览器不支持,请按 Ctrl+D 手动收藏!');
		}
    }
    else if (window.sidebar) {
        window.sidebar.addPanel(title, url, "");
    }
    else {
  		alert('您的浏览器不支持,请按 Ctrl+D 手动收藏!');
    }
}
/**加载VIP弹窗**/
function loadvip(){
	var tpl = '<div class="vip-area">'+
	'<div class="vip-bg"></div>'+
	'<div class="vip-main">'+
		'<span class="close-btn"></span>'+
		'<a href="/vip?fcode=popup"><img src="//7nsts.w3cschool.cn/images/w3c/vip-dialog.png?t=1904" alt="升级为会员，尊享更多会员特权" class="vip-dialog"/></a>'+
	'</div>'+
'</div>';

$("body").append(tpl);

$(".vip-main .close-btn").on("click",function(){
	$(".vip-area").hide();
});
	
}

var logintype = false;
var getncbytar;

/**返回顶部**/
$(function(){
	var $body=$(document.body);
	var $bottomTools=$(".bottom-tools");
	var $qrTools=$(".qr-tool");
	var qrImg=$(".qr-img");
	$(window).scroll(function(){var scrollHeight=$(document).height();var scrollTop=$(window).scrollTop();var $footerHeight=$(".page-footer").outerHeight(true);var $windowHeight=$(window).innerHeight();scrollTop>50?$("#scrollUp").fadeIn(200).css("display","block"):$("#scrollUp").fadeOut(200);$bottomTools.css("bottom",scrollHeight-scrollTop-$footerHeight>$windowHeight?40:$windowHeight+scrollTop+$footerHeight+40-scrollHeight)});$("#scrollUp").click(function(e){e.preventDefault();$("html,body,.main-container").animate({scrollTop:0})});$qrTools.hover(function(){var href = window.location.href.replace("http://www.w3cschool.cn","https://m.w3cschool.cn").replace("http://w3cschool.cn","https://m.w3cschool.cn");if(href == "https://m.w3cschool.cn/"){$(">img", qrImg).attr("src", "/statics/images/w3c/mp-qrcode.png");}else{$(">img", qrImg).attr("src", "/qrapi?text=" + href + "&size=150&level=L");}qrImg.fadeIn()},function(){qrImg.fadeOut()})

	var	temp;
	var html = '';
	var datatype = '';
	var headerType = 0;
	if(typeof $('.quick-content') != 'undefined'){
		headerType = 1;
	}

	var webdomain = typeof domain == 'undefined'?'//www.w3cschool.cn':domain;
	datatype = $.cookie('the_cookie');
	$.ajaxdo({
		type : "POST",
		url  : "/index/checkHeader",
		dataType : "json", 
		data : {headerType:headerType},
		success : function(data){
			var arr = eval(data);
			var info = arr.data;
			var tipexpire = '';

			if(typeof info.uid != 'undefined'){
				logintype = true;
			}
			if(typeof apppath != 'undefined'){
				if(isMobile()){
					//移动端访问
					if(arr.statusCode == '200' && typeof info.username != 'undefined'){
						html += '<div class="header-navbar header-navbar-entry">'
						        +'<div class="header-btn">'
						        +'<a href="https://m.w3cschool.cn/appDownload" class="btn-download">下载APP</a>'
						        +'</div>'
						        +'<a href="/my" class="header-avator">'
							    +'<img src="';
							    if(!info.avatar){
							    	html += '//7n.w3cschool.cn/statics/images/avatar_0.jpg';
							    }else{
							    	html += '//7n.w3cschool.cn/attachments/avatar2/'+info.avatar;
							    }
							    html += '" alt="'+info.nickname+'" />'
							    +'</a>'
							    if(info.viptype == 1){
									html += '<a href="'+webdomain+'/vip?fcode=headeruser" class="vip-sicon vip-sicon1"></a>'; 
								}else if(info.viptype == 2){
									html += '<a href="'+webdomain+'/vip?fcode=headeruser" class="vip-sicon vip-sicon2"></a>'; 
								}else{
									html += '<a href="'+webdomain+'/vip?fcode=headeruser" class="vip-sicon vip-sicon0"></a>';
								}
							    html +='</div>';
					}else{
					    html += '<div class="header-navbar">'
					        +'<div class="header-btn">'
					            +'<a href="https://m.w3cschool.cn/appDownload" class="btn-download">下载APP</a>'
					            +'<span class="spacing">|</span>'
					            +'<a href="/login?refer='+window.location.pathname+'" class="btn-login">登录</a>'
					        +'</div>'
						+'</div>';
					}
					$('.header-mobile').append(html);
				}else{
					//PC端访问
					if(arr.statusCode == '200' && typeof info.username != 'undefined'){
						if(info.viplevel < 1 && info.vipad == 1 ){
						 	loadvip();
						}				
						html = html + '<div id="header_notification_bar" class="dropdown"><a data-close-others="true" data-hover="dropdown" data-toggle="dropdown" class="dropdown-toggle-list" href="#">'
						+'<i class="notice-icon"></i>'
						+'<span class="badge ';
						if(info.num != 0){
							html = html +'badge-danger'; 
						}
						html = html + ' notification-num">'+info.num+'</span>'
						+'</a>'
						+'<div id="dropdown-feed-menu" class="dropdown-content extended notification" style="display: none;">'
						+'<span class="j"></span>'
						+'<ul class="dropdown-feed-list">'
						+'<li>'
						+'<p>你有'+info.num+'条新通知</p>'
						+'</li>'
						+'<li>'
						+'<ul class="dropdown-menu-list scroller notifyList">';
						if(info.list.length != 0 ){
							for(var o in info.list){
								html += '<li><a href="/my#inbox/'+info.list[o].type+'">'+info.list[o].title;
								if(info.list[o].num != 0){
									html += '<span class="badge badge-danger">'+info.list[o].num+'</span>';
								}
								html += '</a></li>';
							}
						}
						html = html + '</ul>'
						+'</li>'
						+'<li class="external">'
						+'</li>'
						+'</ul>'
						+'</div>'
						+'</div>';
																																																																		
						html = html + '<div id="dropdown-user" class="dropdown-user">'
						+'<div class="dropdown-toggle-list" data-close-others="true">'
						+'<a href="'+webdomain+'/my" class="user-avatar" title="个人中心"><img src="//7n.w3cschool.cn/attachments/avatar2/'+info.avatar+'" alt="个人头像" /></a>';

						if(info.viptype == 1){
							tipexpire = typeof info.tipexpire != 'undefined' ? ', 到期时间:'+info.tipexpire : '';
							html += '<a href="'+webdomain+'/vip?fcode=headeruser" class="vip-sicon vip-sicon1" title="您是VIP用户'+tipexpire+'"></a>'; 
						}else if(info.viptype == 2){
							tipexpire = typeof info.tipexpire != 'undefined' ? ', 到期时间:'+info.tipexpire : '';
							html += '<a href="'+webdomain+'/vip?fcode=headeruser" class="vip-sicon vip-sicon2" title="您是高级VIP用户'+tipexpire+'"></a>'; 
						}else{
							html += '<a href="'+webdomain+'/vip?fcode=headeruser" class="vip-sicon vip-sicon0" title="点击成为VIP"></a>';
						}

						html += '<i class="down-icon1 angle-down-icon"></i>'
						+'</div>'
						+'<div id="dropdown-menu" class="dropdown-content" style="display: none;">'
						+'<span class="j"></span>'
						+'<ul class="dropdown-list">'
						+'<li><a href="'+webdomain+'/u/'+info.uid+'"><i class="sns-icon home-icon"></i> 我的主页</a></li>'
						+'<li><a href="'+webdomain+'/job/mycv" target="_blank"><i class="sns-icon mycv-icon"></i> 我的简历</a></li>'
						+'<li><a href="'+webdomain+'/my#setting"><i class="sns-icon cog-icon"></i> 个人设置</a></li>'
						+'<li class="divider"></li>'
						+'<li><a href="'+webdomain+'/logout?refer='+apppath+'"><i class="sns-icon signout-icon"></i> 退出</a></li>' 
						+'</ul>'
						+'</div>'
						+'</div>';
						$('.sig-box').html(html);
						$(document).on("mouseover",function(e) {	
					        $("#dropdown-menu").hide();
					        $("#dropdown-feed-menu").hide();
					        e = e||event; stopFunc(e);
					    });
					    $("#dropdown-user").on("mouseover",function(e) {	
					        $("#dropdown-menu").show();
					        $("#dropdown-feed-menu").hide();
					        e = e||event; stopFunc(e);
					    });
					    $("#header_notification_bar").on("mouseover",function(e) {	
					        $("#dropdown-feed-menu").show();
					        $("#dropdown-menu").hide();
					        e = e||event; stopFunc(e);
					    });
					 	//if(typeof info.nowUType != 'undefined' && info.nowUType == 1){
						// 	checkUserType();
						// }
						if(info.viplevel > 0){
							$('.abox-item').hide();
						}
					} else {

						var _widgetCookie = localStorage.getItem('widget_box_cookie');
						var timestamp = Date.parse(new Date());
						html = html + '<div class="sig-box-info">'
								+'<a href="'+webdomain+'/register?refer='+apppath+'" class="login-bg">注册</a>'
								+'<span class="sig-line">|</span>'
								+'<a href="'+webdomain+'/login?refer='+apppath+'">登录</a>'
								+'</div>'
						$('.sig-box').html(html);
						if((timestamp-_widgetCookie) >= 86400000){
							var dict = $('.widget-body').html();
							if(typeof dict != 'undefined'){
								var type = $('.widget-body').attr('data-type');
								var widget = '';
								if(type == 'index'){
									widget = widget + '<div class="widget-main widget-main-banner" data-type="index" style="display: none;"><a href="/register?refer='+apppath+'" class="widget-main-img" title="新人专享优惠券"></a><a class="widget-box-close" href="javascript:;" title="关闭">X</a></div>';
								}else{
									widget = widget + '<div class="widget-main" style="display: none;"><div class="widget-box"><div class="slogn"><a href="/register">免费注册w3cschool，收藏您感兴趣的教程手册！</a></div><div class="quicklogin quick-box">'
								    +'<a href="/register?refer='+apppath+'" class="reg-btn">注册w3cschool</a><span>或直接</span><a href="/auth" class="qq-btn"><i class="pop-sns icons-qq-widget"></i>QQ登录</a>'
								    +'<a href="javascript:;" onclick="wechatqr();" class="weixina"><i class="pop-sns icons-weixin-widget"></i>微信登录</a><a href="/auth?platform=weibo" class="weibo-btn"><i class="pop-sns icons-weibo-widget"></i>微博登录</a>'
								    +'</div><div class="sig-group"><a href="/login?refer='+apppath+'">已有账号，登录</a></div></div><a class="widget-box-close" href="javascript:;" title="关闭">X</a></div>';
								}
								$('.widget-body').html(widget);
							}
						}
					}
				}
				
			}

			if(headerType == 1){
	            html = '';
	            var check = $(".quick-item");
	            if(typeof check != 'undefined'){
	                if(arr.statusCode == '200' && typeof info.username != 'undefined'){
	                    html += '<div class="personino-item"><div class="personino-box"><div class="user-box">'
	                            +'<img src="//7n.w3cschool.cn/attachments/avatar2/'+info.avatar+'" alt="'+info.nickname+'" class="avatar-img" />'
	                            +'<div class="user-info"><a href="/u/'+info.uid+'" target="_blank" class="nickname">'+info.nickname+'</a>';

	                    if(info.viptype == 1){
	                    	html += '<a href="/vip?fcode=indexuser" class="vip-sicon vip-sicon1" title="您是VIP用户"></a>';
	                    }else if(info.viptype == 2){
	                        html += '<a href="/vip?fcode=indexuser" class="vip-sicon vip-sicon2" title="您是高级VIP用户"></a>';
	                    }

	                    html += '<span>学号：'+info.uid+'</span></div></div><div class="user-desc"><span>等级：LV'+info.level+'</span>'
	                            +'<span>经验值：'+info.exp+'</span></div></div><div class="quicklogin quick-box">'
	                            +'<a href="/my"><i class="pop-sns icons-user"></i>个人中心</a>'
	                            +'</div>'
	                            +'<div class="record-box"><h3>我最近学习的教程：</h3><ul>';
	                            var projectinfo = info.projectinfo;
	                            for (var i = 0; i < projectinfo.length ; i++) {
	                                html += '<li><a href="/'+projectinfo[i]['ename']+'/" title="'+projectinfo[i]['bookname']+'">'+projectinfo[i]['bookname']+'</a></li>';
	                            }
	                            html += '</ul></div><a href="/vip?fcode=indexquick" target="_blank" class="vipclub-btn">会员中心 »</a></div>';
	                    $('.quick-item').remove();
	                    $('.quick-content').prepend(html);
	                }else{
	                	if(info == true){
	                		isscode = info;
	                		$('.pop-login-sns').hide();
	                		$('#input-wrap-scode').show();
	                	}else{
	                		$('#input-wrap-scode').hide();
	                	}
	                }
	            }
			}

			//有生成apikey,存储在本地
			var storage = window.localStorage;
			if(arr.statusCode == 200){
				if(arr.data.apikey.length != 0){
					storage.apikey  = arr.data.apikey;
					storage.apiauth = arr.data.apiauth;
				}
			}else{
				storage.removeItem("apikey");
				storage.removeItem("apiauth");
			}
		}
	});

	$(".onlinenote").on('click',function(e){
		if(logintype){// 已经登录
			showNoteDialog();
		}else{
			toastr.warning("请先登录!");
		}
		
	});

	// 发布文章
	$(".create-btn").on('click',function(e){
		if(logintype){// 已经登录
			showNavDialog(true);
		}else{
			showNavDialog(false);
			//window.location = '/login';
		}
	});

	getncbytar = function(){
		var tarkename = kn.kename;
		var tarpename = kn.pename;
		var initcontent = '';
		$.ajax({
			url:"/my/note/getncbytar",
			type:"post",
			data:{tarkename:tarkename,tarpename:tarpename},
			dataType:"json",
			success:function(msg){

				if(msg.statusCode < 300){
					var ncinfo = msg.data.nc_info;
					$("#fbw3cDtitle").show();
					$("#w3cDtitle").show();
					$(".ntitle").val(ncinfo.ntitle);
					initcontent = ncinfo.ncontent;
					if(typeof kn != 'undefined' && typeof kn.codenote != 'undefined' && kn.codenote != ''){

						initcontent += '\n```\n'+kn.codenote+'\n```';
						kn.codenote = '';
					}

					mdeditor.setMarkdown(initcontent);
					

				}else{
					if(msg.statusCode != 405){ // 405 表示没有找到笔记不显示	
						toastr.warning(msg.message);
					}else{
					    
					    $("#fbw3cDtitle").show();
						$("#w3cDtitle").show();
					    $(".ntitle").val($(".content-top h1").text());
                        if(mdeditor != null){
                        	if(typeof kn != 'undefined' && typeof kn.codenote != 'undefined' && kn.codenote != ''){
								initcontent = '\n```\n'+kn.codenote+'\n```';
								kn.codenote = '';
							}
                            mdeditor.setMarkdown(initcontent);
                        }
					    
					    
					}
				}
			}
		});

	}

	//显示笔记模态框
	function showNoteDialog(){
		
		if(typeof editormd == 'undefined'){
			var link1=document.createElement("link");  
			link1.type="text/css";
			link1.rel="stylesheet"; 
			link1.href="/plugins/markdown/editormd.css";  
			document.getElementsByTagName('head')[0].appendChild(link1);

			$.getScript('/statics/js/w3cdialog.js',function(){
				loadmdjs();
			});
			
		}else{
			
			if($("#w3cDtitle").is(":hidden")){
				$("#fbw3cDtitle").show();
				$("#w3cDtitle").show();
				getncbytar(); //重新获取笔记
			}else{
				$("#fbw3cDtitle").hide();
		        $("#w3cDtitle").hide();
			}
			
		}
		 
	}

	//显示引导模态框
	function showNavDialog(loginflag){
		
		if($("#dialogProxy").length == 0){
			var link1=document.createElement("link");  
			link1.type="text/css";
			link1.rel="stylesheet"; 
			link1.href="/statics/css/dialog.css";  
			document.getElementsByTagName('head')[0].appendChild(link1);
			link1.onload = function(){
				$.get("/statics/plugins/template/index_dialog.html",function(info){
					$("body").append(info);
					if(typeof AjaxDo == 'undefined'){
						$.getScript('/statics/core/ajaxdo.core.js',function(){
							if(loginflag){
								getDialogScript();
							}else{
								$.getScript('/statics/core/dialog.core.js',function(){
									$("#loadNav").after('<a id="unLoginDialog" style="display: none;"  href="/index/offlineCreateDialog" target="dialog"  rel="quick-add" mask="true" height="430" width="720" class="btn btn-default"><i class="icon-plus"></i> 发布</a>');
									AjaxDo.initUI();
									$("#unLoginDialog").trigger("click");
								});
							}
							
						});
					}else{
						if(loginflag){
							getDialogScript();
						}else{ // 未登录
							$.getScript('/statics/core/dialog.core.js',function(){
								$("#loadNav").after('<a id="unLoginDialog" style="display: none;"  href="/index/offlineCreateDialog" target="dialog"  rel="quick-add" mask="true" height="430" width="720" class="btn btn-default"><i class="icon-plus"></i> 发布</a>');
								AjaxDo.initUI();
								$("#unLoginDialog").trigger("click");
							});
							
						}
					}
					
				});
			};

		}else{ // 不需要加载了
			if(loginflag){
				AjaxDo.initUI();
				loadNav();
			}else{ // 未登录
				if($("#unLoginDialog").length == 0){
					$("#loadNav").after('<a id="unLoginDialog" style="display: none;"  href="/index/offlineCreateDialog" target="dialog"  rel="quick-add" mask="true" height="430" width="720" class="btn btn-default"><i class="icon-plus"></i> 发布</a>');
				}

				AjaxDo.initUI();
				$("#unLoginDialog").trigger("click");
				
				
			}
			
			//console.log("不需要加载了!!");
			
		}
		 
	}

	function getDialogScript(){
		$.getScript('/statics/core/dialog.core.js',function(){
			//AjaxDo.initEnv(); 
			AjaxDo.initUI();
			loadNav();
		});
	}

	var mdeditor = null;
	// 加载markdown 编辑器的js
	function loadmdjs(){
		$.getScript("/plugins/markdown/editormd.js",function(msg){
				var prentitle = $("title").text().replace('_w3cschool','');
				$(".ntitle").val(prentitle);
				mdeditor = editormd("editorarea", {
			        mode:"markdown",
			        width   : "100%",
			        height  : 300,
			        syncScrolling : "single",
			        saveHTMLToTextarea : true,    // 保存 HTML 到 Textarea
			        watch : false,                // 关闭实时预览:true,
			        path    : "/plugins/markdown/lib/",
			        toolbarIcons : function() {
			            return editormd.toolbarModes['mini']; // full, simple, mini
			            
			        },
			        onload : function() {
			        	getncbytar(); // 获取笔记
			        }
		    });
			});
	}


	// 加载引导
	function loadNav(){
		$("#loadNav").trigger("click");
	}

	// 关闭笔记
	$(document).on('click',".closenote",function(){
		$("#fbw3cDtitle").hide();
		$("#w3cDtitle").hide();
	});

	// 保存笔记
	$(document).on('click',".notesubmit",function(){
		var tarkename = kn.kename;
		var tarpename = kn.pename;
		var ktitle = $('.ntitle').val();
		var kcontent = $('.ncontent').val();
		var isOpenNote = $('input[name="isOpenNote"]:checked').val();
		$.ajax({
			url:"/my/note/savenote",
			type:"post",
			data:{
				ntitle:ktitle,
				ncontent:kcontent,
				tarkename:tarkename,
				tarpename:tarpename,
				isOpenNote:isOpenNote,
				cfrom:'frontnote',
				editflag:'mdeditor',
				ktype:'kn'
			},
			dataType:"json",
			success:function(msg){
				if(msg.statusCode < 300){
					if(isOpenNote == 1){
					    toastr.success("保存成功,审核通过后,将公布在该文章底部");
					}else{
						toastr.success("保存成功!");
					}
					
				}else{
					toastr.warning(msg.message);
				}
			}
		});
	});
});

if(typeof jQuery.cookie == 'undefined'){
	$.cookie = jQuery.cookie = function(name, value, options) {
	    if (typeof value != 'undefined') { // name and value given, set cookie
	        options = options || {};
	        if (value === null) {
	            value = '';
	            options.expires = -1;
	        }
	        var expires = '';
	        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
	            var date;
	            if (typeof options.expires == 'number') {
	                date = new Date();
	                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
	            } else {
	                date = options.expires;
	            }
	            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
	        }
	        var path = options.path ? '; path=' + options.path : '';
	        var domain = options.domain ? '; domain=' + options.domain : '';
	        var secure = options.secure ? '; secure' : '';
	        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
	    } else { // only name given, get cookie
	        var cookieValue = null;
	        if (document.cookie && document.cookie != '') {
	            var cookies = document.cookie.split(';');
	            for (var i = 0; i < cookies.length; i++) {
	                var cookie = jQuery.trim(cookies[i]);
	                // Does this cookie string begin with the name we want?
	                if (cookie.substring(0, name.length + 1) == (name + '=')) {
	                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
	                    break;
	                }
	            }
	        }
	        return cookieValue;
	    }
	};
}

(function() {

	// 判断是否登录
	var ypre_uid = $.cookie('ypre_uid');
	if(ypre_uid != null){
		
		$.getScript("/statics/js/w3ctj.js", function(){
			logTjData();
		});
	}

})();

// 获取get
(function($) {
$.extend({       
urlGet:function()
{
    var aQuery = window.location.href.split("?");  //取得Get参数
    var aGET = new Array();
    if(aQuery.length > 1)
    {
        var aBuf = aQuery[1].split("&");
        for(var i=0, iLoop = aBuf.length; i<iLoop; i++)
        {
            var aTmp = aBuf[i].split("=");  //分离key与Value
            aGET[aTmp[0]] = aTmp[1];
        }
     }
     return aGET;
 }
});
})(jQuery);


var GET = $.urlGet(); //获取URL的Get参数
var tnid = GET['tnid']; //取得id的值
if(typeof tnid != 'undefined') {
	$.cookie('ypre_tnid',tnid, {'path':'/', 'domain': 'w3cschool.cn'});

}
var tnvip = GET['tnvip']; // 获取vip来源
if(typeof tnvip != 'undefined') {
	$.cookie('ypre_tnvip',tnvip, {'path':'/', 'domain': 'w3cschool.cn'});
}
var channel = GET['channel']; // 获取渠道来源
if(typeof channel != 'undefined') {
	$.cookie('ypre_channel',channel, {'path':'/', 'domain': 'w3cschool.cn'});
}
var tn = GET['tn']; // 获取vip来源
if(typeof tn != 'undefined') {
	$.cookie('ypre_tn',tn, {'path':'/', 'domain': 'w3cschool.cn'});
	localStorage.setItem('tn', tn);
}

var recmd = GET['recmd']; // 获取vip来源
if(typeof recmd != 'undefined') {
	$.cookie('ypre_recmd',recmd, {'path':'/', 'domain': 'w3cschool.cn'});
	localStorage.setItem('recmd', recmd);
}

// 防CSRF攻击
(function($){
	$.extend({
		ajaxdo:function(param){
			if(typeof param.type != 'undefined' && param.type.toLowerCase() == 'post'){
				if(typeof param.data == "undefined"){
					param.data = {};
				}
				param.data['_hash'] = $.cookie("ypre_saltkey");
			}else{
				param.url = param.url + (/\?/.test(param.url) ? "&" : "?")+ "_hash=" + $.cookie("ypre_saltkey");
			}
			$.ajax(param);
		}
	});

})(jQuery);

function stopFunc(e){
    e.stopPropagation?e.stopPropagation():e.cancelBubble = true;       
}

function checkUserType(){
	$.ajaxdo({
		type : "POST",
		url  : "/index/checkUserType",
		dataType : "json", 
		data : {},
		success : function(data) {
			var arr = eval(data);

			if(arr.statusCode == '200'){
				var info = arr.data;
				if(data.statusCode == '200' && typeof info.username != 'undefined'){
					$("#register-Box").attr('style','display:black;');
					$(".register-cover").attr('src','/attachments/avatar2/'+info.avatar);
					$(".register-userinfo-title span").html(info.nickname+' (学号：'+info.uid+')');
				}
			}
		}
	});
}
$(window).on("scroll",function(e){
 	var height = $('.item-content').height();
 	var now = $(document).scrollTop();
 	var type = $('.widget-body').attr('data-type');
 	if(type == 'index'){
	 	if(now > height){
			$('.widget-main').slideDown();
 		}
 	}else{
		$('.widget-main').slideDown();
 	}
});
$('.widget-body').on('click','.widget-box-close',function(){
	
	var timestamp = Date.parse(new Date());
	localStorage.setItem('widget_box_cookie',timestamp);

	$('.widget-main').remove();
});




//显示举报模态框
function showDialogBox (obj){

	var tid    = $(obj).attr("data-tid");
	var module = $(obj).attr("data-module");
	$(".feedback-Box").attr("data-tid",tid);
	$(".feedback-Box").attr("data-module",module);
	$("body").attr("style","overflow:hidden;");
	$(".feedback-Box").attr("style","display:block;");

	var checkScript = $("[src$='html2markdown.js']").attr('src');
	if(typeof checkScript == "undefined"){

		var script1=document.createElement("script");  
		script1.type="text/javascript";  
		script1.src="/plugins/xheditor/xheditor-1.2.2.min.js";  
		document.getElementsByTagName('head')[0].appendChild(script1);  

		var script2=document.createElement("script");  
		script2.type="text/javascript";  
		script2.src="/plugins/xheditor/xheditor_plugins/marked.min.js";  
		document.getElementsByTagName('head')[0].appendChild(script2);  

		var script3=document.createElement("script");  
		script3.type="text/javascript";  
		script3.src="/plugins/xheditor/xheditor_plugins/html2markdown.js";  
		document.getElementsByTagName('head')[0].appendChild(script3);  

		var script4=document.createElement("script");  
		script4.type="text/javascript";  
		script4.src="/statics/js/feedbackMarkdown.js";  
		document.getElementsByTagName('head')[0].appendChild(script4); 

	}
}
//关闭意见模态框
function closeDialogBox (obj){

	$(".feedback-text").attr("value","");
	$("body").attr("style","");
	$(".feedback-Box").attr("style","display:none;");
	$(".register-Box").attr("style","display:none;");
	$('.feedback-box input:radio:checked').removeAttr('checked');
	$('.register-box input:radio:checked').removeAttr('checked');
}

function dialogSubmit (obj){

	var ftid = $(".comment_replys_show_box").attr("data-tid");
	var fpid = $(".comment_replys_show_box").attr("data-pid");
	var ftype = $(".comment_replys_show_box").attr("data-type");
	var fusername = $(".comment_replys_show_box").attr("data-username");
	var tid     = $(".feedback-Box").attr("data-tid");
	var module  = $(".feedback-Box").attr("data-module");
 	var url     = window.location.href;
 	var content = $(".feedback-text").val();
 	var contact = $("#reportAddress").val();
 	var type    = $('#feedbackRadio').attr("data-value");
 	var fbtype  = $('#selecttype').val();
	if( content.length == 0 || content == 'codecamp:' || content == '<p>codecamp:</p>'){
		alert("反馈内容不能为空");
		return;
	}

 	$.ajaxdo({
		type:"post",
	    url:"/comment/feedback",
	    async: false,
	    data: {tid:tid,kename:ftid,pename:fpid,module:module,url:url,content:content,type:type,contact:contact,fbtype:fbtype},
	    success:function(data){
	    	var arr = eval("("+data+")");
	    	alert(arr['message']);
    		$(".feedback-text").attr("value","");
    		$("body").attr("style","");
    		$(".feedback-Box").attr("style","display:none;");
    		$('.feedback-box input:radio:checked').removeAttr('checked');
	    }
	});
}

function wechatqr(){
	var qrcode = sessionStorage.getItem('scanpullcode');
	if(qrcode == null){
		qrcode = Math.floor((Math.random()*4294967295)+1);
		sessionStorage.setItem('scanpullcode',qrcode);
	}

	$.ajaxdo({
        url: "/auth?platform=weixin",
        type: "post",
        dataType: 'json',
        data: {"sign":qrcode},
        success: function (data) {
            if(data.statusCode == 200){
                $(".quick-item").hide();
                var html = '<div class="wechatqr"><img width="100%" height="100%" src="https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket='+data.data+'" /><a href="javascript:;" onclick="closewechatqr();">使用其他方式登录</a></div>';
                $(".quick-content").append(html);
                myQR = setInterval(function(){ setscanpull() }, 3000);
                
            }
        }
    });
}
function closewechatqr(){
	clearInterval(myQR);
	sessionStorage.removeItem('scanpullcode');
	$(".wechatqr").remove();
	$(".quick-item").show();
}
function setscanpull(){
	var code = sessionStorage.getItem('scanpullcode');
	if(code != null){
		$.ajaxdo({
	        url: "/auth/scanpull",
	        type: "post",
	        dataType: 'json',
	        data: {sign:code},
	        success: function (data) {
	            if(data.statusCode == 200){
	            	sessionStorage.removeItem('scanpullcode');
	            	if(data.message == "bind"){
	            		window.location.href = "/auth/mplogin?sign="+code;
	            	}else{
	            		var htmlstr = '<h2 class="quick-title">绑定已有账号</h2>'+
						    '<div class="login-item">'+
						    	'<form action="/auth/checklogin?sign='+code+'" method="post">'+
						            '<div class="input-wrap">'+
						                '<label class="pass-label pass-user"></label>'+
						                '<input id="username" autofocus="autofocus" autocomplete="off" placeholder="学号/手机/邮箱" name="username" class="input-box input-user" type="text">'+
						            '</div>'+
						            '<div class="input-wrap">'+
						                '<label class="pass-label pass-pwd"></label>'+
						                '<input id="password" autocomplete="off" placeholder="登录密码" name="password" class="input-box input-pwd" type="password">'+
						            '</div>'+
						            '<div class="btn-wrap">'+
						                '<button type="submit" class="form-button" >确认绑定</button>'+
						            '</div>'+
						        '</form>'+
						        '<a class="form-button" href="/auth/quickreg?sign='+code+'" >快捷注册</a>'+
						    '</div>';
	            		$(".quick-content").empty();
		                $(".quick-content").append(htmlstr);
	            	}
	            }
	        }
	    });
	}
}

$(function(){
	$('.search-set input').attr('value',1);
});
$('.search-sort-item').on('click',function(){
	var view = $(".search-sort-list").attr('view');
	if(view == 'hide'){
		$(".search-sort-list").show();
		$(".search-sort-list").attr('view','show');
	}else{
		$(".search-sort-list").attr('view','hide');
		$(".search-sort-list").hide();
	}
	
});
$('.search-sort-item ul li').on('click',function(){
	var type = $(this).attr('type');
	var text = $(this).html();
	$('.search-sort-item ul li').show();
	$(this).hide();
	$('.search-set input').attr('value',type);
	$('.search-set span').html(text);
});
 function getNotelist(){
    	 $.ajax({
			url:"/index/getNotelist",
			type:"post",
			data:{
				pename:book.pename,
				kename:kn.kename,
			},
			dataType:"json",
			success:function(msg){
			 var ob = eval(msg.data.notelist);
			 if(ob.length>0){
			 	  $('#notelist_content').show();
			      $('.notelist-box').show();
			 	  var str='<ul>';
			 	  var kmids='0';
	              for(var o in ob){  
	                str+='<li class="notelist-item"><div class="notelist-author"><a href="/u/'+ob[o].uid+'"><img src="/attachments/avatar2/avatar_'+ob[o].uid+'.jpg" class="avatar"><span class="name">'+ob[o].creator+'</span></a>';
	                str+='<span class="islike"><a class="btn-thumbs-up" href="javascript:;" onclick="islikeNote(this,'+ob[o].kmid+')"><i class="icon-thumbs-up" id="b'+ob[o].kmid+'" ></i> <span id="a'+ob[o].kmid+'">赞</span>(<span id="like'+ob[o].kmid+'">'+ob[o].likecount+'</span>)</a>';
	                if(msg.data.power==5){
	                	    str+='<span onclick="setop('+ob[o].kmid+')">&nbsp;&nbsp;置顶</span>';
	                }
	            
	      
	                str+='</span></div>';
	                str+='<div class="notelist-wrap content-intro">'+ob[o].kcontent+'</div>';
	                kmids+=','+ob[o].kmid;
	              }
	              str+='</ul>';  
	              $("#notelist_content").html(str);
	              getislikeNote(kmids);
                  AjaxDo.bindDialog();
			 }else{
			 	 $('.notelist-box').hide();
			 }
		   }
		});
    }
    //获取点赞情况，
    function getislikeNote(kmids){
    	 $.ajax({
			url:"/my/note/getlikeNote",
			type:"post",
			data:{
				kmids:kmids
			},
			dataType:"json",
			success:function(msg){
			 var ob = JSON.parse(msg.data);
			 for(var o in ob){
			 	 if($('#like'+o)){
			 	 	$('#like'+o).text(ob[o].length);
			 	 	if(ob[o].islike == 1){
			 	 		$('#a'+o).text('已赞');
			 	 		$('#b'+o).addClass('isdone');
			 	 	}
			 	 }
			 }
		   }
		});
    }

     //笔记点赞
    function islikeNote(obj,kmid){
    	
    	 $.ajax({
			url:"/my/note/islikeNote",
			type:"post",
			data:{
				kmid : kmid,
				pename:book.pename,
				kename:kn.kename,                                                       
			},
			dataType:"json",
			success:function(msg){
				if(msg.statusCode == 200){
					$('#a'+kmid).text('已赞');
			 	 	$('#b'+kmid).addClass('isdone');
			 	 	countlike = $('#like'+kmid).text();
			 	 	$('#like'+kmid).text(parseInt(countlike)+1);
					toastr.success(msg.message);
				}else{
					toastr.warning(msg.message);
				}
		   }
		});
    }

    //判断是否移动端   true为移动端
	function isMobile() {
		var sUserAgent = navigator.userAgent.toLowerCase();
		var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
		var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
		var bIsMidp = sUserAgent.match(/midp/i) == "midp";
		var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
		var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
		var bIsAndroid = sUserAgent.match(/android/i) == "android";
		var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
		var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";

		if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
			return true;
		} else {
			return false;
		}
	}

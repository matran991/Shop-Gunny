/* Script run shop gunny for Forumorion by markai30 - matran999 (viethoagame.forumvi.com) */
function get_id(t,e){var a=obj_set[t],d=e.find('#profile-advanced-details dl dt:contains("'+t+'")').parent(),p=d.find(".field_editable .inputbox");a.name=p.attr("name"),a.value=d.find(".field_uneditable").text(),a.number=p.attr("name").match(/.+_(\d)$/)[1],obj_set.post=e.find("#field_id-6 .field_uneditable").text(),obj_set.point=e.find("#field_id-13 .field_uneditable").text(),obj_set.thank=e.find("#field_id-14 .field_uneditable").text(),obj_set.color=e.find("h1 span").attr("style")}function draw_img(){for(var t=9,e=0,a=0;t>a;a++)object_num[a]=new Image,object_num[a].src=object_img[a],object_num[a].onload=function(){e++,e==t&&allLoaded()}}function allLoaded(){context.drawImage(object_num[0],170,0),context.drawImage(object_num[1],182,27),context.drawImage(object_num[2],170,0),context.drawImage(object_num[3],170,0),context.drawImage(object_num[4],170,0),context.drawImage(object_num[5],170,0),context.drawImage(object_num[6],170,0),context.drawImage(object_num[7],5,40),context.drawImage(object_num[8],45,30)}function draw_text(t,e,a,d,p){context.font="bold "+d+"px Sans-serif",context.strokeStyle=p,context.lineWidth=2,context.lineJoin="miter",context.miterLimit=1,context.strokeText(t,e,a),context.fillStyle="white",context.fillText(t,e,a)}function clearCanvas(){context.clearRect(0,0,canvas.width,canvas.height);var t=canvas.width;canvas.width=1,canvas.width=t}function set_link_img(t,e,a,d){var p="";a>d&&(a=d);for(var o=e;a>o;o++){if("Mat"==t||"Toc"==t||"Ao"==t)var m=object_item.Gt;else m="Nam";var l=link_img+"/"+m+"/"+t+"/img/"+o+".png",h=item_value[o],g=h.gold,g=Math.floor(Number(g)*item_check[t][2]),f="",n=item_value[o],k=item_check[t];if(0==k[1])var f='<div><span class="tip_color">'+item_check.text[k[0]]+': </span><span class="number_color number_'+k[0]+'">'+n[k[0]]+"</span></div>";else for(var i=0;i<k[0].length;i++){var c=k[0][i],_=item_check.text[c],r=n[c],s='<div><span class="tip_color">'+_+': </span><span class="number_color number_'+k[0]+'">'+r+"</span></div>";f+=s}var u='<div class="item_tip"><span class="tip_arrow"></span><div class="tip_text">'+f+'<div><span class="tip_color">Giá: </span><span class="number_color">'+g+"</span></div></div></div>",b='<div class="item_shop">';b+='<div class="img_shop" gold="'+g+'" local="'+t+'" data="'+o+'" onclick="preview_avata.call(this)">',b+='<img  onload="load_end.call(this)" src="'+l+'" />'+u+"</div>",b+='<div class="sell_gold">'+g+"</div></div>",p+=b}max_number=Math.floor(d/24+1),result='<div class="block_shop">'+p+"</div>",$("#shop_avata").html(result),0==e&&set_page(t,d)}function set_page(t,e){for(var a="",d=0,p=24,o=0;o<max_number;o++){var m='<div class="number_page" onclick="set_link_img(\''+t+"',"+d+","+p+","+e+');set_active.call(this)">'+o+"</div>";a+=m,d+=24,p+=24}html_page='<div class="table_page">'+a+"</div>",$("#page_item").html(html_page)}function load_end(){$(this).parent().addClass("active")}function set_active(){$(this).parent().find(".active").removeClass("active"),$(this).addClass("active")}function add_avata(t,e){if("Vong"==t||"Canh"==t){var a="_wing="+object_item.Canh+"&circle="+object_item.Vong,d='<embed src="https://cdn.rawgit.com/matran991/Shop-Gunny/master/Nam/profile.swf" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" play="true" loop="true" scale="showall" wmode="transparent" name="gnAvatar" menu="true" allowfullscreen="false" allowscriptaccess="always" salign="" flashvars="'+a+'" type="application/x-shockwave-flash" height="200px" width="300px" align="middle">';$("#Canh").html(d)}else"Nen"==t&&$("#avata").attr("style","background: url(https://cdn.rawgit.com/matran991/Shop-Gunny/master/Nam/Nen/"+e+".png) center center;")}function draw_bo(t,e,a,d){var p=t,o=p,o=new Image;o.src=e,o.onload=function(){"Pet"==t?pet_auto=setInterval(function(){anime(t,o,a,d)},200):anime_auto=setInterval(function(){anime(t,o,a,d)},300)}}function anime(t,e,a,d){if("Pet"==t){var p=80,o=68;context.clearRect(80,68,82,82)}else{var p=170,o=0;context.clearRect(170,0,120,150)}context.drawImage(e,a*currentFrame,0,a,d,p,o,a,d),3==currentFrame?currentFrame=0:currentFrame++}function set_element(){0==item_bo?(object_item.def=item_value[object_item.Ao].def+item_value[object_item.Non].def+item_value[object_item.Vong].def+item_value[object_item.Nen].def,object_item.atk=item_value[object_item.Vk].atk+item_value[object_item.Ts].atk+item_value[object_item.Vong].atk+item_value[object_item.Canh].atk,object_item.hp=item_value[object_item.Pet].hp+item_value[object_item.Ts].hp+item_value[object_item.Kinh].hp+item_value[object_item.Vong].hp+item_value[object_item.Mat].hp,object_item.mp=item_value[object_item.Pet].mp+item_value[object_item.Ts].mp+item_value[object_item.Canh].mp+item_value[object_item.Vong].mp+item_value[object_item.Mat].mp+item_value[object_item.Toc].mp):(object_item.def=item_value[object_item.Bo].def,object_item.atk=item_value[object_item.Bo].atk,object_item.hp=item_value[object_item.Bo].hp,object_item.mp=item_value[object_item.Bo].mp)}function canvas_run(){if(0==item_bo)object_img={0:"https://cdn.rawgit.com/matran991/Shop-Gunny/master/Nam/Vk/"+object_item.Vk+".png",1:"https://cdn.rawgit.com/matran991/Shop-Gunny/master/"+object_item.Gt+"/Mat/"+object_item.Mat+".png",2:"https://cdn.rawgit.com/matran991/Shop-Gunny/master/"+object_item.Gt+"/Toc/"+object_item.Toc+".png",3:"https://cdn.rawgit.com/matran991/Shop-Gunny/master/Nam/Non/"+object_item.Non+".png",4:"https://cdn.rawgit.com/matran991/Shop-Gunny/master/"+object_item.Gt+"/Ao/"+object_item.Ao+".png",5:"https://cdn.rawgit.com/matran991/Shop-Gunny/master/Nam/Ts/"+object_item.Ts+".png",6:"https://cdn.rawgit.com/matran991/Shop-Gunny/master/Nam/Kinh/"+object_item.Kinh+".png",7:"https://cdn.rawgit.com/matran991/Shop-Gunny/master/Nam/Lv/lv.png",8:"https://cdn.rawgit.com/matran991/Shop-Gunny/master/Nam/Lv/"+level+".png"},draw_img(),object_item.Pet>0&&draw_bo("Pet","https://cdn.rawgit.com/matran991/Shop-Gunny/master/Nam/Pet/"+object_item.Pet+".png",80,100);else{var t="https://cdn.rawgit.com/matran991/Shop-Gunny/master/Nam/Bo/"+object_item.Bo+".png";draw_bo("Bo",t,120,150);var e=new Image;e.src="https://cdn.rawgit.com/matran991/Shop-Gunny/master/Nam/Lv/lv.png",e.onload=function(){context.drawImage(e,5,40)};var a=new Image;a.src="https://cdn.rawgit.com/matran991/Shop-Gunny/master/Nam/Lv/"+level+".png",a.onload=function(){context.drawImage(a,45,30)}}draw_text("ATK :",5,85,14,"darkcyan"),draw_text(object_item.atk,45,85,16,"red"),draw_text("DEF :",5,105,14,"darkmagenta"),draw_text(object_item.def,45,105,16,"red"),draw_text("HP :",5,125,14,"darkred"),draw_text(object_item.hp,45,125,16,"red"),draw_text("MP :",5,145,14,"darkturquoise"),draw_text(object_item.mp,45,145,16,"red")}function preview_avata(){clearInterval(pet_auto),obj_set.g!=xu_ht&&(xu_ht=obj_set.g),clearCanvas(),folther=$(this).attr("local"),gold=Number($(this).attr("gold")),number=Number($(this).attr("data")),$(".item_shop").removeClass("active"),$(this).parent().addClass("active"),object_item[folther]=number,object_avata[folther]=gold,add_avata(folther,number),"Bo"==folther?(total_gold=gold,$("#avata .item").hide(),$("#Bo").show(),item_bo=!0):("Nen"!=folther&&($("#avata .item").show(),$("#Bo").hide()),total_gold=Number(object_avata.Ao)+Number(object_avata.Canh)+Number(object_avata.Hu)+Number(object_avata.Kinh)+Number(object_avata.Mat)+Number(object_avata.Non)+Number(object_avata.Toc)+Number(object_avata.Ts)+Number(object_avata.Vong)+Number(object_avata.Vk),item_bo=!1),$("#total_buy").text(total_gold),total_gold>xu_ht?($("#total_alert").show(),$(".wrap_alert").html("Bạn không đủ tiền để mua!"),close_check=!0,$("#buy_all,.total_info").css("opacity","0")):$("#buy_all,.total_info").css("opacity","1"),set_element(),canvas_run(),exp_bar()}function exp_bar(){var t=0;context.fillStyle="black",context.fillRect(10,10,100,15);var e=setInterval(function(){exp>t?(context.fillStyle="darkorange",context.fillRect(10,10,t,15),t+=10):(clearInterval(e),draw_text("EXP: "+exp+" %",35,22,12,"red"))},100)}function alert_close(){1==close_check&&($("#total_alert").hide(),$(".wrap_alert").text(""))}function avata_gt(){var t=$(this).attr("data");$(".gt_btt").removeClass("active"),$(this).addClass("active"),$(".tab_gt").hide(),$(".tab_"+t).attr("style","display:inline-block"),object_item.Gt=t,gt_avata=t}function begin_set(){if(level == 0){level = 1}canvas_run(),exp_bar(),add_avata("Nen",object_item.Nen),add_avata("Vong",object_item.Vong),add_avata("Canh",object_item.Canh),$('.gt_btt[data*="'+object_item.Gt+'"]').addClass("active")}var obj_set=new Object;obj_set[text_xu]=new Object,obj_set[text_gunny]=new Object;var max_page=24,link_img="https://cdn.rawgit.com/matran991/Shop-Gunny/master/",start=0,max_item=79,item_bo=!1,gt_avata="Nam",currentFrame=1,anime_auto=!0,canvas=document.getElementById("Gunny"),context=canvas.getContext("2d"),pet_auto="",anime_auto="";close_check=!1;var level=1,exp=1,max_level=99,item_value={0:{gold:0,def:0,atk:0,hp:0,mp:0},1:{gold:13,def:3,atk:13,hp:3,mp:3},2:{gold:14,def:4,atk:14,hp:4,mp:4},3:{gold:11,def:9,atk:11,hp:5,mp:7},4:{gold:18,def:8,atk:18,hp:8,mp:8},5:{gold:13,def:3,atk:13,hp:3,mp:3},6:{gold:14,def:4,atk:14,hp:4,mp:4},7:{gold:14,def:4,atk:14,hp:4,mp:4},8:{gold:15,def:5,atk:15,hp:5,mp:5},9:{gold:16,def:6,atk:16,hp:6,mp:6},10:{gold:53,def:43,atk:53,hp:33,mp:33},11:{gold:73,def:63,atk:73,hp:53,mp:53},12:{gold:83,def:73,atk:83,hp:63,mp:43},13:{gold:93,def:83,atk:93,hp:73,mp:53},14:{gold:94,def:84,atk:94,hp:74,mp:54},15:{gold:15,def:5,atk:15,hp:5,mp:5},16:{gold:12,def:2,atk:12,hp:2,mp:2},17:{gold:19,def:9,atk:19,hp:9,mp:9},18:{gold:16,def:6,atk:16,hp:6,mp:6},19:{gold:13,def:3,atk:13,hp:3,mp:3},20:{gold:10,def:8,atk:10,hp:7,mp:5},21:{gold:17,def:7,atk:17,hp:7,mp:7},22:{gold:14,def:4,atk:14,hp:4,mp:4},23:{gold:11,def:1,atk:11,hp:1,mp:1},24:{gold:18,def:8,atk:18,hp:8,mp:8},25:{gold:15,def:5,atk:15,hp:5,mp:5},26:{gold:12,def:2,atk:12,hp:2,mp:2},27:{gold:19,def:9,atk:19,hp:9,mp:9},28:{gold:16,def:6,atk:16,hp:6,mp:6},29:{gold:23,def:13,atk:23,hp:3,mp:13},30:{gold:20,def:12,atk:20,hp:8,mp:10},31:{gold:27,def:17,atk:27,hp:7,mp:17},32:{gold:24,def:14,atk:24,hp:4,mp:14},33:{gold:21,def:11,atk:21,hp:1,mp:11},34:{gold:28,def:18,atk:28,hp:8,mp:18},35:{gold:25,def:15,atk:25,hp:5,mp:15},36:{gold:22,def:12,atk:22,hp:2,mp:12},37:{gold:29,def:19,atk:29,hp:9,mp:19},38:{gold:26,def:16,atk:26,hp:6,mp:16},39:{gold:23,def:13,atk:23,hp:3,mp:13},40:{gold:20,def:14,atk:20,hp:7,mp:10},41:{gold:27,def:17,atk:27,hp:7,mp:17},42:{gold:24,def:14,atk:24,hp:4,mp:14},43:{gold:31,def:21,atk:31,hp:11,mp:21},44:{gold:38,def:28,atk:38,hp:18,mp:28},45:{gold:35,def:25,atk:35,hp:15,mp:25},46:{gold:32,def:22,atk:32,hp:12,mp:22},47:{gold:39,def:29,atk:39,hp:19,mp:29},48:{gold:36,def:26,atk:36,hp:16,mp:26},49:{gold:33,def:23,atk:33,hp:13,mp:23},50:{gold:45,def:35,atk:45,hp:25,mp:35},51:{gold:25,def:15,atk:25,hp:5,mp:15},52:{gold:46,def:36,atk:46,hp:26,mp:36},53:{gold:67,def:57,atk:67,hp:47,mp:47},54:{gold:87,def:77,atk:87,hp:67,mp:47},55:{gold:38,def:28,atk:38,hp:18,mp:28},56:{gold:29,def:19,atk:29,hp:9,mp:19},57:{gold:49,def:39,atk:49,hp:29,mp:39},58:{gold:60,def:50,atk:60,hp:40,mp:40},59:{gold:81,def:71,atk:81,hp:61,mp:41},60:{gold:12,def:2,atk:12,hp:2,mp:2},61:{gold:22,def:12,atk:22,hp:2,mp:12},62:{gold:43,def:33,atk:43,hp:23,mp:33},63:{gold:64,def:54,atk:64,hp:44,mp:44},64:{gold:84,def:74,atk:84,hp:64,mp:44},65:{gold:45,def:35,atk:45,hp:25,mp:35},66:{gold:26,def:16,atk:26,hp:6,mp:16},67:{gold:46,def:36,atk:46,hp:26,mp:36},68:{gold:67,def:57,atk:67,hp:47,mp:47},69:{gold:88,def:78,atk:88,hp:68,mp:48},70:{gold:29,def:19,atk:29,hp:9,mp:19},71:{gold:29,def:19,atk:29,hp:9,mp:19},72:{gold:40,def:30,atk:40,hp:20,mp:30},73:{gold:61,def:51,atk:61,hp:41,mp:41},74:{gold:81,def:71,atk:81,hp:61,mp:41},75:{gold:32,def:22,atk:32,hp:12,mp:22},76:{gold:23,def:13,atk:23,hp:3,mp:13},77:{gold:43,def:33,atk:43,hp:23,mp:33},78:{gold:64,def:54,atk:64,hp:44,mp:44},79:{gold:85,def:75,atk:85,hp:65,mp:45},80:{gold:46,def:36,atk:46,hp:26,mp:36},81:{gold:26,def:16,atk:26,hp:6,mp:16},82:{gold:47,def:37,atk:47,hp:27,mp:37},83:{gold:68,def:58,atk:68,hp:48,mp:48},84:{gold:88,def:78,atk:88,hp:68,mp:48},85:{gold:79,def:69,atk:79,hp:59,mp:59},86:{gold:20,def:15,atk:22,hp:9,mp:13},87:{gold:40,def:30,atk:40,hp:20,mp:30},88:{gold:61,def:51,atk:61,hp:41,mp:41},89:{gold:82,def:72,atk:82,hp:62,mp:42},90:{gold:83,def:73,atk:83,hp:63,mp:43},91:{gold:23,def:13,atk:23,hp:3,mp:13},92:{gold:44,def:34,atk:44,hp:24,mp:34},93:{gold:65,def:55,atk:65,hp:45,mp:45},94:{gold:85,def:75,atk:85,hp:65,mp:45},95:{gold:106,def:96,atk:106,hp:76,mp:56},96:{gold:127,def:117,atk:127,hp:97,mp:77},97:{gold:147,def:137,atk:147,hp:11,mp:97},98:{gold:168,def:158,atk:168,hp:13,mp:118},99:{gold:189,def:179,atk:189,hp:15,mp:139},100:{gold:100,def:90,atk:100,hp:70,mp:50},101:{gold:120,def:110,atk:120,hp:90,mp:70},102:{gold:141,def:131,atk:141,hp:11,mp:91},103:{gold:162,def:152,atk:162,hp:13,mp:112},104:{gold:182,def:172,atk:182,hp:15,mp:132},105:{gold:53,def:43,atk:53,hp:33,mp:33},106:{gold:24,def:14,atk:24,hp:4,mp:14},107:{gold:44,def:34,atk:44,hp:24,mp:34},108:{gold:65,def:55,atk:65,hp:45,mp:45},109:{gold:86,def:76,atk:86,hp:66,mp:46},110:{gold:27,def:17,atk:27,hp:7,mp:17},111:{gold:27,def:17,atk:27,hp:7,mp:17},112:{gold:48,def:38,atk:48,hp:28,mp:38},113:{gold:69,def:59,atk:69,hp:49,mp:49},114:{gold:89,def:79,atk:89,hp:69,mp:49},115:{gold:30,def:20,atk:30,hp:10,mp:20},116:{gold:21,def:11,atk:21,hp:1,mp:11},117:{gold:41,def:31,atk:41,hp:21,mp:31},118:{gold:62,def:52,atk:62,hp:42,mp:42},119:{gold:83,def:73,atk:83,hp:63,mp:43},120:{gold:104,def:94,atk:104,hp:74,mp:54},121:{gold:24,def:14,atk:24,hp:4,mp:14},122:{gold:45,def:35,atk:45,hp:25,mp:35},123:{gold:66,def:56,atk:66,hp:46,mp:46},124:{gold:86,def:76,atk:86,hp:66,mp:46},125:{gold:107,def:97,atk:107,hp:77,mp:57},126:{gold:28,def:18,atk:28,hp:8,mp:18},127:{gold:48,def:38,atk:48,hp:28,mp:38},128:{gold:69,def:59,atk:69,hp:49,mp:49},129:{gold:80,def:70,atk:80,hp:60,mp:40},130:{gold:101,def:91,atk:101,hp:71,mp:51},131:{gold:21,def:11,atk:21,hp:1,mp:11},132:{gold:142,def:132,atk:142,hp:11,mp:92},133:{gold:163,def:153,atk:163,hp:13,mp:113},134:{gold:183,def:173,atk:183,hp:17,mp:133},135:{gold:104,def:94,atk:104,hp:74,mp:54},136:{gold:125,def:115,atk:125,hp:95,mp:75},137:{gold:145,def:135,atk:145,hp:11,mp:95},138:{gold:166,def:156,atk:166,hp:13,mp:116},139:{gold:187,def:177,atk:187,hp:15,mp:137},140:{gold:108,def:98,atk:108,hp:78,mp:58},141:{gold:128,def:118,atk:128,hp:98,mp:78},142:{gold:49,def:39,atk:49,hp:29,mp:39},143:{gold:61,def:51,atk:61,hp:41,mp:41},144:{gold:88,def:78,atk:88,hp:68,mp:48},145:{gold:66,def:56,atk:66,hp:46,mp:46},146:{gold:27,def:17,atk:27,hp:7,mp:17},147:{gold:45,def:35,atk:45,hp:25,mp:35},148:{gold:66,def:56,atk:66,hp:46,mp:46},149:{gold:89,def:79,atk:89,hp:69,mp:49},150:{gold:43,def:33,atk:43,hp:23,mp:33},151:{gold:20,def:16,atk:24,hp:7,mp:7},152:{gold:46,def:36,atk:46,hp:26,mp:36},153:{gold:67,def:57,atk:67,hp:47,mp:47},154:{gold:85,def:75,atk:85,hp:65,mp:45},155:{gold:86,def:76,atk:86,hp:66,mp:46},156:{gold:29,def:19,atk:29,hp:9,mp:19},157:{gold:43,def:33,atk:43,hp:23,mp:33},158:{gold:61,def:51,atk:61,hp:41,mp:41},159:{gold:81,def:71,atk:81,hp:61,mp:41},160:{gold:101,def:91,atk:101,hp:71,mp:51},161:{gold:21,def:11,atk:21,hp:1,mp:11},162:{gold:41,def:31,atk:41,hp:21,mp:31},163:{gold:61,def:51,atk:61,hp:41,mp:41},164:{gold:81,def:71,atk:81,hp:61,mp:41},165:{gold:101,def:91,atk:101,hp:71,mp:51},166:{gold:121,def:111,atk:121,hp:91,mp:71},167:{gold:141,def:131,atk:141,hp:11,mp:91},168:{gold:161,def:151,atk:161,hp:13,mp:111},169:{gold:181,def:171,atk:181,hp:15,mp:131},170:{gold:101,def:91,atk:101,hp:71,mp:51},171:{gold:121,def:111,atk:121,hp:91,mp:71},172:{gold:142,def:132,atk:142,hp:11,mp:92},173:{gold:162,def:152,atk:162,hp:13,mp:112},174:{gold:182,def:172,atk:182,hp:15,mp:132},175:{gold:102,def:92,atk:102,hp:72,mp:52},176:{gold:122,def:112,atk:122,hp:92,mp:72},177:{gold:42,def:32,atk:42,hp:22,mp:32},178:{gold:62,def:52,atk:62,hp:42,mp:42},179:{gold:82,def:72,atk:82,hp:62,mp:42},180:{gold:102,def:92,atk:102,hp:72,mp:52},181:{gold:22,def:12,atk:22,hp:2,mp:12},182:{gold:42,def:32,atk:42,hp:22,mp:32},183:{gold:62,def:52,atk:62,hp:42,mp:42},184:{gold:82,def:72,atk:82,hp:62,mp:42},185:{gold:102,def:92,atk:102,hp:72,mp:52},186:{gold:23,def:13,atk:23,hp:3,mp:13},187:{gold:43,def:33,atk:43,hp:23,mp:33},188:{gold:63,def:53,atk:63,hp:43,mp:43},189:{gold:83,def:73,atk:83,hp:63,mp:43},190:{gold:103,def:93,atk:103,hp:73,mp:53},191:{gold:23,def:13,atk:23,hp:3,mp:13},192:{gold:43,def:33,atk:43,hp:23,mp:33},193:{gold:63,def:53,atk:63,hp:43,mp:43},194:{gold:83,def:73,atk:83,hp:63,mp:43},195:{gold:103,def:93,atk:103,hp:73,mp:53},196:{gold:23,def:13,atk:23,hp:3,mp:13},197:{gold:43,def:33,atk:43,hp:23,mp:33},198:{gold:63,def:53,atk:63,hp:43,mp:43},199:{gold:83,def:73,atk:83,hp:63,mp:43},200:{gold:104,def:94,atk:104,hp:74,mp:54},201:{gold:24,def:14,atk:24,hp:4,mp:14},202:{gold:44,def:34,atk:44,hp:24,mp:34},203:{gold:64,def:54,atk:64,hp:44,mp:44},204:{gold:84,def:74,atk:84,hp:64,mp:44},205:{gold:104,def:94,atk:104,hp:74,mp:54},206:{gold:24,def:14,atk:24,hp:4,mp:14},207:{gold:44,def:34,atk:44,hp:24,mp:34},208:{gold:64,def:54,atk:64,hp:44,mp:44},209:{gold:84,def:74,atk:84,hp:64,mp:44},210:{gold:104,def:94,atk:104,hp:74,mp:54},211:{gold:24,def:14,atk:24,hp:4,mp:14},212:{gold:44,def:34,atk:44,hp:24,mp:34},213:{gold:64,def:54,atk:64,hp:44,mp:44},214:{gold:84,def:74,atk:84,hp:64,mp:44},215:{gold:105,def:95,atk:105,hp:75,mp:55},216:{gold:25,def:15,atk:25,hp:5,mp:15},217:{gold:45,def:35,atk:45,hp:25,mp:35},218:{gold:65,def:55,atk:65,hp:45,mp:45},219:{gold:85,def:75,atk:85,hp:65,mp:45},220:{gold:105,def:95,atk:105,hp:75,mp:55},221:{gold:25,def:15,atk:25,hp:5,mp:15},222:{gold:45,def:35,atk:45,hp:25,mp:35},223:{gold:65,def:55,atk:65,hp:45,mp:45},224:{gold:85,def:75,atk:85,hp:65,mp:45},225:{gold:105,def:95,atk:105,hp:75,mp:55},226:{gold:25,def:15,atk:25,hp:5,mp:15},227:{gold:45,def:35,atk:45,hp:25,mp:35},228:{gold:65,def:55,atk:65,hp:45,mp:45},229:{gold:86,def:76,atk:86,hp:66,mp:46},230:{gold:106,def:96,atk:106,hp:76,mp:56},231:{gold:26,def:16,atk:26,hp:6,mp:16},232:{gold:246,def:226,atk:246,hp:21,mp:196},233:{gold:266,def:246,atk:266,hp:13,mp:216},234:{gold:286,def:266,atk:286,hp:15,mp:236},235:{gold:206,def:186,atk:206,hp:17,mp:156},236:{gold:226,def:206,atk:226,hp:19,mp:176},237:{gold:246,def:226,atk:246,hp:21,mp:196},238:{gold:266,def:246,atk:266,hp:23,mp:216},239:{gold:286,def:266,atk:286,hp:15,mp:236},240:{gold:206,def:186,atk:206,hp:17,mp:156},241:{gold:226,def:206,atk:226,hp:19,mp:176},242:{gold:246,def:226,atk:246,hp:21,mp:196},243:{gold:267,def:247,atk:267,hp:23,mp:237},244:{gold:87,def:77,atk:87,hp:67,mp:47},245:{gold:107,def:97,atk:107,hp:77,mp:57},246:{gold:27,def:17,atk:27,hp:7,mp:17},247:{gold:47,def:37,atk:47,hp:27,mp:37},248:{gold:167,def:147,atk:167,hp:13,mp:117},249:{gold:187,def:167,atk:187,hp:15,mp:137},250:{gold:107,def:97,atk:107,hp:77,mp:57},251:{gold:127,def:107,atk:127,hp:97,mp:77},252:{gold:147,def:137,atk:147,hp:11,mp:97},253:{gold:167,def:147,atk:167,hp:13,mp:117},254:{gold:187,def:167,atk:187,hp:15,mp:137},255:{gold:107,def:97,atk:107,hp:77,mp:57},256:{gold:27,def:17,atk:27,hp:7,mp:17},257:{gold:47,def:37,atk:47,hp:27,mp:37},258:{gold:68,def:58,atk:68,hp:48,mp:48},259:{gold:88,def:78,atk:88,hp:68,mp:48},260:{gold:108,def:98,atk:108,hp:78,mp:58},261:{gold:28,def:18,atk:28,hp:8,mp:18},262:{gold:48,def:38,atk:48,hp:28,mp:38},263:{gold:68,def:58,atk:68,hp:48,mp:48},264:{gold:88,def:78,atk:88,hp:68,mp:48},265:{gold:108,def:98,atk:108,hp:78,mp:58},266:{gold:28,def:18,atk:28,hp:8,mp:18},267:{gold:48,def:38,atk:48,hp:28,mp:38},268:{gold:68,def:58,atk:68,hp:48,mp:48},269:{gold:88,def:78,atk:88,hp:68,mp:48},270:{gold:108,def:98,atk:108,hp:78,mp:58},271:{gold:28,def:18,atk:28,hp:8,mp:18},272:{gold:49,def:39,atk:49,hp:29,mp:39},273:{gold:69,def:59,atk:69,hp:49,mp:49},274:{gold:189,def:169,atk:189,hp:15,mp:139},275:{gold:109,def:99,atk:109,hp:79,mp:59},276:{gold:129,def:109,atk:129,hp:99,mp:79},277:{gold:149,def:139,atk:149,hp:11,mp:99},278:{gold:169,def:149,atk:169,hp:13,mp:119},279:{gold:189,def:169,atk:189,hp:15,mp:139},280:{gold:109,def:99,atk:109,hp:79,mp:59},281:{gold:129,def:109,atk:129,hp:99,mp:79},282:{gold:149,def:139,atk:149,hp:11,mp:99},283:{gold:169,def:69,atk:169,hp:69,mp:119},284:{gold:89,def:79,atk:89,hp:69,mp:49},285:{gold:109,def:109,atk:109,hp:89,mp:59},286:{gold:26,def:16,atk:26,hp:6,mp:16},287:{gold:48,def:38,atk:48,hp:28,mp:38},288:{gold:64,def:54,atk:64,hp:44,mp:44},289:{gold:86,def:76,atk:86,hp:66,mp:46},290:{gold:100,def:88,atk:102,hp:86,mp:57},291:{gold:27,def:17,atk:27,hp:7,mp:17},292:{gold:43,def:33,atk:43,hp:23,mp:33},293:{gold:61,def:51,atk:61,hp:41,mp:41},294:{gold:86,def:76,atk:86,hp:66,mp:46},295:{gold:102,def:102,atk:102,hp:82,mp:52},296:{gold:28,def:18,atk:28,hp:8,mp:18},297:{gold:49,def:39,atk:49,hp:29,mp:39},298:{gold:64,def:54,atk:64,hp:44,mp:44},299:{gold:85,def:75,atk:85,hp:65,mp:45},300:{gold:101,def:91,atk:101,hp:81,mp:51},301:{gold:21,def:11,atk:21,hp:1,mp:11},302:{gold:41,def:31,atk:41,hp:21,mp:31},303:{gold:61,def:51,atk:61,hp:41,mp:41},304:{gold:81,def:71,atk:81,hp:61,mp:41},305:{gold:101,def:61,atk:101,hp:31,mp:51},306:{gold:21,def:11,atk:21,hp:1,mp:11},307:{gold:41,def:31,atk:41,hp:21,mp:31},308:{gold:61,def:51,atk:61,hp:41,mp:41},309:{gold:81,def:71,atk:81,hp:61,mp:41},310:{gold:101,def:91,atk:101,hp:81,mp:51},311:{gold:21,def:11,atk:21,hp:1,mp:11},312:{gold:41,def:31,atk:41,hp:21,mp:31},313:{gold:61,def:51,atk:61,hp:41,mp:41},314:{gold:81,def:71,atk:81,hp:61,mp:41},315:{gold:102,def:72,atk:105,hp:62,mp:52},316:{gold:22,def:12,atk:22,hp:2,mp:12},317:{gold:42,def:32,atk:42,hp:22,mp:32},318:{gold:62,def:52,atk:62,hp:42,mp:42},319:{gold:82,def:72,atk:82,hp:62,mp:42},320:{gold:102,def:102,atk:102,hp:82,mp:52},321:{gold:22,def:12,atk:22,hp:2,mp:12},322:{gold:42,def:32,atk:42,hp:22,mp:32},323:{gold:62,def:52,atk:62,hp:42,mp:42},324:{gold:82,def:72,atk:82,hp:62,mp:42},325:{gold:102,def:72,atk:98,hp:92,mp:57},326:{gold:22,def:12,atk:22,hp:2,mp:12},327:{gold:42,def:32,atk:42,hp:22,mp:32},328:{gold:62,def:52,atk:62,hp:42,mp:42},329:{gold:83,def:73,atk:83,hp:63,mp:43},330:{gold:103,def:103,atk:103,hp:83,mp:53},331:{gold:23,def:13,atk:23,hp:3,mp:13},332:{gold:43,def:33,atk:43,hp:23,mp:33},333:{gold:63,def:53,atk:63,hp:43,mp:43},334:{gold:83,def:73,atk:83,hp:63,mp:43},335:{gold:103,def:83,atk:63,hp:73,mp:53},336:{gold:23,def:13,atk:23,hp:3,mp:13},337:{gold:43,def:33,atk:43,hp:23,mp:33},338:{gold:63,def:53,atk:63,hp:43,mp:43},339:{gold:83,def:73,atk:83,hp:63,mp:43},340:{gold:103,def:103,atk:103,hp:83,mp:53},341:{gold:23,def:13,atk:23,hp:3,mp:13},342:{gold:43,def:33,atk:43,hp:23,mp:33},343:{gold:64,def:54,atk:64,hp:44,mp:44},344:{gold:84,def:74,atk:84,hp:64,mp:44},345:{gold:104,def:74,atk:97,hp:84,mp:54},346:{gold:24,def:14,atk:24,hp:4,mp:14},347:{gold:44,def:34,atk:44,hp:24,mp:34}},object_avata={Ao:0,Canh:0,Hu:0,Kinh:0,Mat:0,Non:0,Toc:0,Ts:0,Vk:0,Vong:0,Pet:0,Nen:0,Gt:"Nam",atk:0,def:0,hp:0,mp:0},object_item={Ao:0,Canh:0,Hu:0,Kinh:0,Mat:0,Non:0,Toc:0,Ts:0,Vk:0,Vong:0,Pet:0,Nen:0,Gt:"Nam",atk:0,def:0,hp:0,mp:0},object_default={Ao:0,Canh:0,Hu:0,Kinh:0,Mat:0,Non:0,Toc:0,Ts:0,Vk:0,Vong:0,Pet:0,Nen:0,Gt:"Nam",atk:0,def:0,hp:0,mp:0},item_check={Ao:{0:"def",1:!1,2:1},Canh:{0:{0:"atk",1:"mp",length:2},1:!0,2:1.5},Kinh:{0:"hp",1:!1,2:1.3},Mat:{0:{0:"hp",1:"mp",length:2},1:!0,2:2},Non:{0:"def",1:!1,2:1.4},Toc:{0:"mp",1:!1,2:1.6},Ts:{0:{0:"atk",1:"hp",2:"mp",length:3},1:!0,2:2.5},Vk:{0:"atk",1:!1,2:1.7},Vong:{0:{0:"def",1:"atk",2:"hp",3:"mp",length:4},1:!0,2:3},Pet:{0:{0:"hp",1:"mp",length:2},1:!0,2:2.7},Nen:{0:"def",1:!1,2:1.9},text:{def:"Phòng Ngự",atk:"Tấn Công",hp:"Máu",mp:"Mana"}},object_num={0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0};if($(".tab_item").click(function(){$(".tab_item").removeClass("active"),$(this).addClass("active")}),1==_userdata.session_logged_in){var tid=$('a[href*="/login?logout=1&tid"]').attr("href").match(/.+tid\=(.+)\&.+/)[1];$.get("/u"+_userdata.user_id).done(function(t){var e=$(t);get_id(text_xu,e),get_id(text_gunny,e),obj_set.g=Number(obj_set.point)-Number(obj_set[text_xu].value),xu_ht=obj_set.g;var a=obj_set[text_gunny].value;level=Math.ceil((obj_set.post+obj_set.thank)/max_level),level>max_level&&(level=max_level),exp=Math.round(100/max_level*(obj_set.post%max_level)),"string"==typeof a&&a.indexOf("Ao")>-1&&(object_item=JSON.parse(a),begin_set()),$(".gold_user span").text(xu_ht),$(".username span").html('<a style="'+obj_set.color+'" href="/u'+_userdata.user_id+'">'+_userdata.username+"</a>"),$("#total_alert").hide()}),$("#buy_all").click(function(){if(obj_set[text_xu].value=Number(total_gold)+Number(obj_set[text_xu].value),1==item_bo){var t=object_item.Bo,e=object_item.Nen;object_avata.Bo;object_item=object_default,object_item.Bo=t,object_item.Nen=e,object_item.Gt="Nam",data=JSON.stringify(object_item)}else object_item.Gt=gt_avata,object_item.Bo=0,data=JSON.stringify(object_item);xu_ht-=obj_set[text_xu].value,$(".wrap_alert").html('<i class="fa fa-spinner fa-pulse"></i><span> Đang xử lý, xin vui lòng chờ...</span>'),close_check=!1,$("#total_alert").show(),$.post("/ajax_profile.forum?jsoncallback=?",{id:obj_set[text_gunny].number,user:_userdata.user_id,active:"1",content:'[["'+obj_set[text_gunny].name+'","'+data.replace(/\"/gi,'\\"')+'"]]',tid:tid},{},"json").done(function(t){$.post("/ajax_profile.forum?jsoncallback=?",{id:obj_set[text_xu].number,user:_userdata.user_id,active:"1",content:'[["'+obj_set[text_xu].name+'","'+obj_set[text_xu].value+'"]]',tid:tid},{},"json").done(function(t){obj_set.g=xu_ht,$(".wrap_alert").html("Mua bán thành công!"),$(".gold_user span").text(xu_ht),close_check=!0,total_gold=0,$("#total_buy").text(total_gold),$("#buy_all,.total_info").css("opacity","0"),object_avata=object_default})})})}else xu_ht=1e3,begin_set(),$(".total_info,#buy_all").remove(),$(".gold_user span").text(xu_ht),$(".username span").html('<a href="/u'+_userdata.user_id+'">'+_userdata.username+"</a>"),$(".wrap_alert").html("Xin lỗi, bạn không phải là thành viên của diễn đàn.<br>Do đó bạn chỉ được cấp 1000 xu ảo để thử nghiệm."),close_check=!0;

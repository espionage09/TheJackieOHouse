//tealium universal tag - utag.495 ut4.0.201903141552, Copyright 2019 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={"id":id};utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}
if(utag.ut.loader===undefined){u.loader=function(o){var b,c,l,a=document;if(o.type==="iframe"){b=a.createElement("iframe");o.attrs=o.attrs||{"height":"1","width":"1","style":"display:none"};for(l in utag.loader.GV(o.attrs)){b.setAttribute(l,o.attrs[l]);}b.setAttribute("src",o.src);}else if(o.type=="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";for(l in utag.loader.GV(o.attrs)){b[l]=o.attrs[l];}b.src=o.src;}if(o.id){b.id=o.id};if(typeof o.cb=="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb()},false);}else{b.onreadystatechange=function(){if(this.readyState=='complete'||this.readyState=='loaded'){this.onreadystatechange=null;o.cb()}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l=="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b)}}}}else{u.loader=utag.ut.loader;}
u.encode=function(a,b){b="";try{b=encodeURIComponent(a)}catch(e){utag.DB(e);}if(b==""){b=escape(a);}return b}
u.ev={"view":1};u.rp=function(a,b){if(typeof a!=="undefined"&&a.indexOf("@@")>0){a=a.replace(/@@([^@]+)@@/g,function(m,d){if(b[d]){return u.encode(b[d]);}else{return"";}});}
return a;};u.map={"zz_look_action2id":"ev","zz_generic_id":"cd[suggested_hotels]","zz_generic_id2":"cd[content_ids]","action":"cd[action]","dest_ufi":"cd[destination_ids]","user_location":"cd[user_cc1]","currency":"cd[currency]","ttv_uc":"cd[purchase_value]","date_in":"cd[checkin_date]","date_out":"cd[checkout_date]","rooms":"cd[rooms]","nights":"cd[nights]","hr":"cd[hotel_rank]","rid":"cd[order_id]","p1":"cd[value]","adults":"cd[num_adults]","children":"cd[num_children]","city_name":"cd[city]","country_name":"cd[country]","dest_name":"cd[destination]","region_name":"cd[region]","ai":"cd[aid]","preferred_neighborhoods":"cd[preferred_neighborhoods]","preferred_star_ratings":"cd[preferred_star_ratings]","seed":"cd[val1]","site":"cd[site]","sid":"cd[val2]","channel_id":"cd[val3]","exp_andy":"cd[andy]","idfa":"ud[madid]","stid":"cd[site_type_id]","exp_rmkt_test":"cd[rmk_inc]","famem":"ud[em]","famfn":"ud[fn]","fampn":"ud[ph]","logged_in":"cd[gwcul]","genis":"cd[gwcug]","gwcur":"cd[gwcur]","gwcuc":"cd[gwcuc]","bem":"cd[bem]","bip":"cd[bip]"};u.extend=[function(a,b,c,d,e,f,g){d=b['action'];if(typeof d=='undefined')return;c=[{'searchresults':'Search'},{'hotel':'ViewContent'},{'book':'InitiateCheckout'},{'confirmation':'Purchase'},{'myreservations':'Purchase'}];var m=false;for(e=0;e<c.length;e++){for(f in c[e]){if(d==f){b['zz_look_action2id']=c[e][f];m=true};};if(m)break};if(!m)b['zz_look_action2id']='PageView';},function(a,b){if(b.children&&b.children<0){b.children=undefined;}
if(b.adults&&b.adults<0){b.adults=undefined;}
if(b.region_name&&b.region_name=='-1'){b.region_name=undefined;}
if(b.dest_ufi&&b.dest_ufi=='-1'){b.dest_ufi=undefined;}
if(b.date_in&&b.date_in=='-1'){b.date_in=undefined;}
if(b.date_out&&b.date_out=='-1'){b.date_out=undefined;}
if(b.rooms&&b.rooms=='-1'){b.rooms=undefined;}
if(b.nights&&b.nights=='-1'){b.nights=undefined;}
if(b.hr&&b.hr=='-1'){b.hr=undefined;}
if(b.city_name&&b.city_name=='-1'){b.city_name=undefined;}
if(b.country_name&&b.country_name=='-1'){b.country_name=undefined;}
if(b.dest_name&&b.dest_name=='-1'){b.dest_name=undefined;}
var hotel_id=b.hotel_id&&b.hotel_id>0?b.hotel_id:undefined;var hotel_id_list=b.hotel_id_list;if(!hotel_id_list){hotel_id_list=hotel_id;}else{var hotel_id_list_raw=hotel_id_list.split(",");hotel_id_list=[];for(var i=0;i<hotel_id_list_raw.length;i++){var id=parseInt(hotel_id_list_raw[i].trim(),10);if(!isNaN(id)){hotel_id_list.push(id);}}
hotel_id_list=JSON.stringify(hotel_id_list);}
if(b.action==='hotel'){b.zz_generic_id2=hotel_id;if(b.compset){b.zz_generic_id=JSON.stringify(b.compset.map(function(hotel_id){return hotel_id.toString();}));}else{b.zz_generic_id=hotel_id_list;}}else{b.zz_generic_id=hotel_id_list;b.zz_generic_id2=hotel_id;}
var preferred_neighborhoods=b.district_name&&b.district_name!='-1'?[b.district_name]:b.preferred_neighborhoods;if(preferred_neighborhoods){b.preferred_neighborhoods=JSON.stringify(preferred_neighborhoods);}
if(b.preferred_star_ratings){b.preferred_star_ratings=JSON.stringify(b.preferred_star_ratings);}},function(a,b){utag.ut.sha256=function(h,s){var f={},t=f.lib={},g=function(){},j=t.Base={extend:function(a){g.prototype=this;var c=new g;a&&c.mixIn(a);c.hasOwnProperty("init")||(c.init=function(){c.$super.init.apply(this,arguments)});c.init.prototype=c;c.$super=this;return c},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var c in a)a.hasOwnProperty(c)&&(this[c]=a[c]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.init.prototype.extend(this)}},q=t.WordArray=j.extend({init:function(a,c){a=this.words=a||[];this.sigBytes=c!=s?c:4*a.length},toString:function(a){return(a||u).stringify(this)},concat:function(a){var c=this.words,d=a.words,b=this.sigBytes;a=a.sigBytes;this.clamp();if(b%4)for(var e=0;e<a;e++)c[b+e>>>2]|=(d[e>>>2]>>>24-8*(e%4)&255)<<24-8*((b+e)%4);else if(65535<d.length)for(e=0;e<a;e+=4)c[b+e>>>2]=d[e>>>2];else c.push.apply(c,d);this.sigBytes+=a;return this},clamp:function(){var a=this.words,c=this.sigBytes;a[c>>>2]&=4294967295<<32-8*(c%4);a.length=h.ceil(c/4)},clone:function(){var a=j.clone.call(this);a.words=this.words.slice(0);return a},random:function(a){for(var c=[],d=0;d<a;d+=4)c.push(4294967296*h.random()|0);return new q.init(c,a)}}),v=f.enc={},u=v.Hex={stringify:function(a){var c=a.words;a=a.sigBytes;for(var d=[],b=0;b<a;b++){var e=c[b>>>2]>>>24-8*(b%4)&255;d.push((e>>>4).toString(16));d.push((e&15).toString(16))}return d.join("")},parse:function(a){for(var c=a.length,d=[],b=0;b<c;b+=2)d[b>>>3]|=parseInt(a.substr(b,2),16)<<24-4*(b%8);return new q.init(d,c/2)}},k=v.Latin1={stringify:function(a){var c=a.words;a=a.sigBytes;for(var d=[],b=0;b<a;b++)d.push(String.fromCharCode(c[b>>>2]>>>24-8*(b%4)&255));return d.join("")},parse:function(a){for(var c=a.length,d=[],b=0;b<c;b++)d[b>>>2]|=(a.charCodeAt(b)&255)<<24-8*(b%4);return new q.init(d,c)}},l=v.Utf8={stringify:function(a){try{return decodeURIComponent(escape(k.stringify(a)))}catch(c){throw Error("Malformed UTF-8 data");}},parse:function(a){return k.parse(unescape(encodeURIComponent(a)))}},x=t.BufferedBlockAlgorithm=j.extend({reset:function(){this._data=new q.init;this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=l.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(a){var c=this._data,d=c.words,b=c.sigBytes,e=this.blockSize,f=b/(4*e),f=a?h.ceil(f):h.max((f|0)-this._minBufferSize,0);a=f*e;b=h.min(4*a,b);if(a){for(var m=0;m<a;m+=e)this._doProcessBlock(d,m);m=d.splice(0,a);c.sigBytes-=b}return new q.init(m,b)},clone:function(){var a=j.clone.call(this);a._data=this._data.clone();return a},_minBufferSize:0});t.Hasher=x.extend({cfg:j.extend(),init:function(a){this.cfg=this.cfg.extend(a);this.reset()},reset:function(){x.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);return this._doFinalize()},blockSize:16,_createHelper:function(a){return function(c,d){return(new a.init(d)).finalize(c)}},_createHmacHelper:function(a){return function(c,d){return(new w.HMAC.init(a,d)).finalize(c)}}});var w=f.algo={};return f}(Math);(function(h){for(var s=utag.ut.sha256,f=s.lib,t=f.WordArray,g=f.Hasher,f=s.algo,j=[],q=[],v=function(a){return 4294967296*(a-(a|0))|0},u=2,k=0;64>k;){var l;a:{l=u;for(var x=h.sqrt(l),w=2;w<=x;w++)if(!(l%w)){l=!1;break a}l=!0}l&&(8>k&&(j[k]=v(h.pow(u,0.5))),q[k]=v(h.pow(u,1/3)),k++);u++}var a=[],f=f.SHA256=g.extend({_doReset:function(){this._hash=new t.init(j.slice(0))},_doProcessBlock:function(c,d){for(var b=this._hash.words,e=b[0],f=b[1],m=b[2],h=b[3],p=b[4],j=b[5],k=b[6],l=b[7],n=0;64>n;n++){if(16>n)a[n]=c[d+n]|0;else{var r=a[n-15],g=a[n-2];a[n]=((r<<25|r>>>7)^(r<<14|r>>>18)^r>>>3)+a[n-7]+((g<<15|g>>>17)^(g<<13|g>>>19)^g>>>10)+a[n-16]}r=l+((p<<26|p>>>6)^(p<<21|p>>>11)^(p<<7|p>>>25))+(p&j^~p&k)+q[n]+a[n];g=((e<<30|e>>>2)^(e<<19|e>>>13)^(e<<10|e>>>22))+(e&f^e&m^f&m);l=k;k=j;j=p;p=h+r|0;h=m;m=f;f=e;e=r+g|0}b[0]=b[0]+e|0;b[1]=b[1]+f|0;b[2]=b[2]+m|0;b[3]=b[3]+h|0;b[4]=b[4]+p|0;b[5]=b[5]+j|0;b[6]=b[6]+k|0;b[7]=b[7]+l|0},_doFinalize:function(){var a=this._data,d=a.words,b=8*this._nDataBytes,e=8*a.sigBytes;d[e>>>5]|=128<<24-e%32;d[(e+64>>>9<<4)+14]=h.floor(b/4294967296);d[(e+64>>>9<<4)+15]=b;a.sigBytes=4*d.length;this._process();return this._hash},clone:function(){var a=g.clone.call(this);a._hash=this._hash.clone();return a}});s.SHA256=g._createHelper(f);s.HmacSHA256=g._createHmacHelper(f)})(Math);try{if(typeof b['idfa']!='undefined'&&b['idfa']!=''){b['idfa']=utag.ut.sha256.SHA256(b['idfa']).toString();}}catch(e){}},function(a,b){try{if(b['exp_rmkt_test'].toString().toLowerCase()=='on'.toLowerCase()){try{b['exp_rmkt_test']=''}catch(e){}}}catch(e){utag.DB(e)}},function(a,b){try{if(b['exp_rmkt_test'].toString().toLowerCase()=='de_off'.toLowerCase()||b['exp_rmkt_test'].toString().toLowerCase()=='de_on'.toLowerCase()){b['exp_rmkt_test']='c00'}}catch(e){utag.DB(e)}},function(a,b){try{if(b['exp_rmkt_test'].toString().toLowerCase()=='fr_off'.toLowerCase()||b['exp_rmkt_test'].toString().toLowerCase()=='fr_on'.toLowerCase()){b['exp_rmkt_test']='d00'}}catch(e){utag.DB(e)}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f;u.data={"qsp_delim":"&"||"&","kvp_delim":"="||"=","qs_delim":"?"||"?","tag_type":"img","base_url":"https://www.facebook.com/tr","secure_base_url":"","static_params":"id=405133399621612&cd[content_type]=hotel&noscript=1","cachebust":"disabled","cachevar":""||"_rnd"};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){if(typeof utag_err!='undefined'){utag_err.push({e:'extension error:'+e,s:utag.cfg.path+'utag.'+id+'.js',l:c,t:'ex'})}}};utag.DB("send:495:EXTENSIONS");utag.DB(b);c=[];for(d in utag.loader.GV(u.map)){if(typeof b[d]!=="undefined"&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){if(!u.data.hasOwnProperty(e[f])){c.push(e[f]+"##kvp_delim##"+u.encode(b[d]));}
u.data[e[f]]=b[d];}}}
if(!u.data.base_url){if(!u.data.secure_base_url){utag.DB("Error: No Base URL or Secure HTTPS Override Provided.");return;}else{u.data.base_url=u.data.secure_base_url;utag.DB("No Base URL provided, using Secure HTTPS Override.");}}
u.data.secure_base_url=u.data.secure_base_url||u.data.base_url;u.data.url=(location.protocol==="https:"?u.data.secure_base_url:u.data.base_url);if(u.data.url.indexOf("http")!==0&&u.data.url.indexOf("/")!==0){u.data.url=location.protocol+"//"+u.data.url;}
if(u.data.static_params){c.push(u.data.static_params);}
var cb_check=new RegExp("(\\"+u.data.qs_delim+"|"+u.data.qsp_delim+")"+u.data.cachevar+"=");if(u.data.cachebust==="enabled"&&!cb_check.test(u.data.url)){c.push([u.data.cachevar,Math.random()].join(u.data.kvp_delim));}
if(c.length>0){if(u.data.url.indexOf(u.data.qs_delim)<0){u.data.url+=u.data.qs_delim;}else if(u.data.url.indexOf(u.data.qs_delim)!==(u.data.url.length-1)){u.data.url+=u.data.qsp_delim;}}
u.data.url=u.rp(u.data.url,b)+u.rp(c.join(u.data.qsp_delim),b);u.data.url=u.data.url.replace(/##kvp_delim##/g,u.data.kvp_delim);u.callback=u.callback||function(){};u.loader({"type":u.data.tag_type,"src":u.data.url,"loc":"script","id":"utag_495","cb":u.callback});utag.DB("send:495:COMPLETE");}};utag.o[loader].loader.LOAD(id);}("495","booking.com.main"));}catch(error){utag.DB(error);}

"use strict";!function o(a,c,r){function l(e,t){if(!c[e]){if(!a[e]){var n="function"==typeof require&&require;if(!t&&n)return n(e,!0);if(u)return u(e,!0);var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}var i=c[e]={exports:{}};a[e][0].call(i.exports,function(t){return l(a[e][1][t]||t)},i,i.exports,o,a,c,r)}return c[e].exports}for(var u="function"==typeof require&&require,t=0;t<r.length;t++)l(r[t]);return l}({1:[function(t,e,n){"use strict";e.exports=function(){$(".main-header form").on("submit",function(t){t.preventDefault(),window.location="/"+this.term.value}),$.get("/no-cache/profileSystem/getProfile").done(function(t){t.IsUserDefined?($("#acc").show("inline-block"),$(".sidebar #login").hide()):($("#acc").hide(),$(".sidebar #login").show("inline-block"))}),$("body").on("click",".menu-toggle",function(){$(".sidebar, .main-header .navigation").addClass("once-opened"),$(".sidebar, .main-header .navigation").toggleClass("opened"),$("body").toggleClass("menu-opened")}),vtexjs.checkout.getOrderForm().done(function(t){return $(".topbar__cart--amount").text(t.items.length)})}},{}],2:[function(t,e,n){"use strict";var s=[],i={init:function(){$("#buy-together").append(['<div class="acs-wrapper">','<div class="acs-products"></div>','<div class="acs-values">','<span class="acs-price"></span>','<button class="buy-btn acs-button">',"Comprar o look",'<div class="spinner">','<div class="double-bounce1"></div>','<div class="double-bounce2"></div>',"</div>","</button>","</div>","</div>"].join(" ")),o.init()}},o=function(){var t=vtexjs.catalog.getCurrentProductWithVariations();function s(t,e,n,s){var i,o,a,c,r=e?$(".product-photos img:first").attr("src"):s,l=['<div class="acs-product" data-current="'+e+'" data-skus="'+(i=t.skus,i.map(function(t){return t.sku}))+'">','<div class="image-wrapper">','<img src="'+r+'" alt="" />',n?'<a href="'+n+'" class="acs-link"><i class="icon-search"></i></a>':"",n?'<label for=""></label>':"","</div>",'<span class="name">'+t.name+"</span>",'<span class="price">'+(a=t.skus,c=[],a.map(function(t,e,n){t.available&&c.push(t.bestPriceFormated)}),c[0])+"</span>",'<select class="size-selector">',e?"":'<option value="0"></option>',(o=t.skus,o.map(function(t,e,n){var s=n.filter(function(t){return t.available})[0],i=t.sku===s.sku?"selected":"";if(t.available)return'<option value="'+t.sku+'" '+i+">"+t.dimensions.Tamanho+"</option>"})),"</select>","</div>"];$("#buy-together .acs-products").append(l.join("")),$(".buy-product-checkbox").each(function(){var t=$(this);$(".acs-product").each(function(){-1<$(this).data("skus").toString().indexOf(t.attr("rel"))&&$(this).find("label").attr("for",t.attr("id"))})}),$(".acs-product label").on("click",function(){var t=$(this).closest(".acs-product");t.toggleClass("checked"),t.hasClass("checked")||t.find("select.size-selector").val("0").change()}),$("select.size-selector").on("change",function(){var t=$(this).parent().find("label").attr("for"),e=$('[id="'+t+'"]');0==this.value?e.prop("checked",!1).click():e.prop("checked",!0).click(),g.update(),u()}),$(".buy-product-checkbox").on("change",u),$(".acs-button").on("click",d),u()}function u(){var t=window.totalPriceBatchBuy,e=0,n=2;20100<=t&&t<30100&&(n=2),30100<=t&&t<40100&&(n=3),40100<=t&&t<50100&&(n=4),50100<=t&&(n=5),e+=t/n/100,$(".acs-price").html("Por "+$(".selected-value").text()+'<br /><small style="font-size: 0.7em;">'+n+"X de "+e.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})+"</small>"),g.update()}function d(){$('.acs-product[data-current="false"].checked select').each(function(){g.add()})}function e(){$(".acs-product label").each(function(){this.click()}),u(),$(document).off("ajaxStop",e)}return{init:function(){t.done(function(t){s(t,!0),$("#buy-together .productImage").each(function(){var t,e,n;t=$(this).data("id"),e=$(this).attr("href"),n=$(this).find("img").attr("src"),vtexjs.catalog.getProductWithVariations(t).done(function(t){s(t,!1,e,n)})})}),$(document).on("ajaxStop",e)},price:u}}(),g={update:function(){s=[],$("select.size-selector").each(function(){0!=$(this).val()&&s.push({id:$(this).val(),quantity:1,seller:1})})},add:function(){$(".acs-values").addClass("loading"),vtexjs.checkout.getOrderForm().done(function(){vtexjs.checkout.addToCart(s,null,1).done(function(t){vtexjs.checkout.getOrderForm().done(function(t){return $(".topbar__cart--amount").text(t.items.length)}),$(".acs-values").toggleClass("loading added"),setTimeout(function(){$(".acs-values").removeClass("added")},5e3)})})}};e.exports=i},{}],3:[function(t,e,n){"use strict";var o,s,i=vtexjs.catalog.getCurrentProductWithVariations(),a=t("./app/common"),c=t("./app/components/accessories"),r=(o=function(t){for(var e in t)$(".product-photos .images").append('<a href="/arquivos/ids/'+t[e].id+"/"+t[e].name+'""><img src="/arquivos/ids/'+t[e].id+"/"+t[e].name+'" /></a>');var n=$(".product-photos .images");n.on("init",function(){$(".product-photos .slick-track").lightGallery({thumbnail:!1,download:!1,autoplayControls:!1}),s(),0<$("#buy-together .acs-shelf").length&&c.init()}),n.slick({dots:!0,arrows:!1,appendDots:$(".thumbs"),infinite:!1,draggable:!1})},s=function(){var e=$(".slick-slide").not(".slick-cloned").find("img");$(".thumbs li").each(function(t){$(this).css("background-image","url("+e[t].src+")")}),5<$(".thumbs li").length&&$(".thumbs .slick-dots").slick({slidesToShow:7,slidesToScroll:1,dots:!1,arrows:!0,vertical:!0,infinite:!1,prevArrow:'<button class="slick-prev vertical"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="100%" height="100%" viewBox="0 0 284.929 284.929" style="enable-background:new 0 0 284.929 284.929;"xml:space="preserve"><g><path d="M282.082,195.285L149.028,62.24c-1.901-1.903-4.088-2.856-6.562-2.856s-4.665,0.953-6.567,2.856L2.856,195.285C0.95,197.191,0,199.378,0,201.853c0,2.474,0.953,4.664,2.856,6.566l14.272,14.271c1.903,1.903,4.093,2.854,6.567,2.854c2.474,0,4.664-0.951,6.567-2.854l112.204-112.202l112.208,112.209c1.902,1.903,4.093,2.848,6.563,2.848c2.478,0,4.668-0.951,6.57-2.848l14.274-14.277c1.902-1.902,2.847-4.093,2.847-6.566C284.929,199.378,283.984,197.188,282.082,195.285z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg></button>',nextArrow:'<button class="slick-next vertical"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 284.929 284.929" style="enable-background:new 0 0 284.929 284.929;" xml:space="preserve"><g><path d="M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441   L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082   c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647   c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg></button>',responsive:[{breakpoint:1366,settings:{slidesToShow:6}},{breakpoint:1200,settings:{slidesToShow:5}},{breakpoint:600,settings:"unslick"}]})},{init:function(){i.done(function(t){var e,n=t.skus[0].sku;e=n,$.get("/produto/sku/"+e).done(function(t){for(var e=t[0].Images,n={},s=0;s<e.length;s++){var i=e[s][0].Path.split("/");n[s]={id:e[s][0].IdArchive,name:i.slice(-1)[0]}}o(n)})})}});$(document).ready(function(){r.init(),a(),$(".inner-shelf .main-shelf h2").each(function(){$(this).prependTo($(this).closest(".inner-shelf"))})})},{"./app/common":1,"./app/components/accessories":2}]},{},[3]);

parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Tr5J":[function(require,module,exports) {
$(document).ready(function(){$(".gallery__slider").slick({adaptiveHeight:!0,slidesToShow:1,responsive:[{breakpoint:480,settings:{arrows:!1}}]}),$(".masonry__item-img-1").click(function(i){$(".gallery__slider").slick("goTo",0)}),$(".masonry__item-img-2").click(function(i){$(".gallery__slider").slick("goTo",1)}),$(".masonry__item-img-3").click(function(i){$(".gallery__slider").slick("goTo",2)}),$(".masonry__item-img-4").click(function(i){$(".gallery__slider").slick("goTo",3)}),$(".masonry__item-img-5").click(function(i){$(".gallery__slider").slick("goTo",4)}),$(".masonry__item-img-6").click(function(i){$(".gallery__slider").slick("goTo",5)}),$(".masonry__item-img-7").click(function(i){$(".gallery__slider").slick("goTo",6)}),$(".masonry__item-img-8").click(function(i){$(".gallery__slider").slick("goTo",7)}),$(".masonry__item-img-9").click(function(i){$(".gallery__slider").slick("goTo",8)}),$(".masonry__item-img-10").click(function(i){$(".gallery__slider").slick("goTo",9)}),$(".masonry__item-img-11").click(function(i){$(".gallery__slider").slick("goTo",10)})});
},{}]},{},["Tr5J"], null)
//# sourceMappingURL=/group-project-18-html-css/gallery-slider.a0665656.js.map
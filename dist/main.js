(()=>{"use strict";function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}(new(function(){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.status=document.querySelector(".status"),this.API_KEY=config.api}var n,o,i;return n=e,(o=[{key:"init",value:function(){this.getLocationInfo()}},{key:"getLocationInfo",value:function(){var t=navigator.geolocation;t?t.getCurrentPosition(this.success):this.status.textContent="ブラウザがGeolocationに対応していません。"}},{key:"success",value:function(t){return document.querySelector(".status").textContent="",{latitude:t.coords.latitude,longitude:t.coords.longitude}}},{key:"test",value:function(){}},{key:"fetchSearchData",value:function(t){return fetch("http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=".concat(this.API_KEY,"&lat=").concat(t.latitude,"&lng=").concat(t.longitude)).then((function(t){})).catch((function(t){}))}}])&&t(n.prototype,o),i&&t(n,i),Object.defineProperty(n,"prototype",{writable:!1}),e}())).init()})();
//# sourceMappingURL=main.js.map
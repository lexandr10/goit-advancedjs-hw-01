import"./assets/common-75a3e929.js";import{P as r,l as a}from"./assets/vendor-d78ab9e0.js";const e="videoplayer-current-time",l=document.querySelector("#vimeo-player"),t=new r(l),n=function(o){localStorage.setItem(e,o.seconds)};t.on("timeupdate",a(n,1e3));t.setCurrentTime(localStorage.getItem(e)||0);
//# sourceMappingURL=commonHelpers2.js.map

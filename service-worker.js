if(!self.define){let e,i={};const d=(d,a)=>(d=new URL(d+".js",a).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let c={};const b=e=>d(e,s),f={module:{uri:s},exports:c,require:b};i[s]=Promise.all(a.map((e=>f[e]||b(e)))).then((e=>(r(...e),c)))}}define(["./workbox-b77dd8d1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"922f122d0908246db09c5da041e73b87"},{url:"about/index.html",revision:"64844c8e5cedd22248f804cb13b50cbd"},{url:"archive/index.html",revision:"2bef0eb576b54ea1031153dcfb9f2070"},{url:"archives/2022/07/index.html",revision:"3735da691d01af85bb3969f35f085a78"},{url:"archives/2022/index.html",revision:"ac041cc5e7dd0e9054deeedb11f801f9"},{url:"archives/index.html",revision:"2ae6fc7c216a519f620b401a9ed7ae66"},{url:"bangumis/index.html",revision:"999120a00c81afd0189e0cd8b5578916"},{url:"books/index.html",revision:"0d65c2680d3e78c759af46c853d2a840"},{url:"categories/index.html",revision:"d8a7c962573b74fa4efb23ef2e757969"},{url:"census/index.html",revision:"f6d5b9937021ad9b580b7c9313d97130"},{url:"charts/index.html",revision:"06e03012fb80c0fb475efe52e1daa4c5"},{url:"cinemas/index.html",revision:"ce97b75a00bdf21a84600ab1ad1492b2"},{url:"css/background.css",revision:"ddd350481b1e033c40986fdf41ef2c76"},{url:"css/custom/custom-1.css",revision:"600420315078734b6a2457e052b8a0ee"},{url:"css/index.css",revision:"ee4189f7d1a772ac0b3335768b5c9249"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"dataStatistics/index.html",revision:"d255a5d9bc2afd7ed01e107d9900da1a"},{url:"friendsCircle/index.html",revision:"7d3cdcefc45ec26954ee2b92d0a73a5c"},{url:"gallery/index.html",revision:"367d9d67208401ee66da5a75e13d8d82"},{url:"games/index.html",revision:"b13c249c8e249d43b271b1b2becdcea8"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/archive.jpg",revision:"275a6439e0010d418f59d616f70fa6d7"},{url:"img/avatar.png",revision:"d94283fc6c1eaca81d6112537d22ed39"},{url:"img/background.jpg",revision:"caa86da9abcac2993826a902ec7f33f9"},{url:"img/bangumi-loading.gif",revision:"ec2266d693fafcd16d73bf422bf7dc05"},{url:"img/book_top_img.png",revision:"4abfee900569b3fb5bc9a2a2a78c3ffd"},{url:"img/category_img.jpg",revision:"d32d47120df00f3021bcdbb50b56be13"},{url:"img/category_per_img.jpg",revision:"7d8b544575f89876f9c8c94849bc8feb"},{url:"img/default_top_img.jpg",revision:"49e6554b5c18f706b5909c4eae3eb679"},{url:"img/dmusic_top_img.png",revision:"ddbbc22e3dca0f5b9f8488213f3fda6f"},{url:"img/favicon.png",revision:"644065fb2929579bb2fef8df60a8dd04"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/game_top_img.png",revision:"849d4acda5b3f56d85877b07b98741d0"},{url:"img/icon.png",revision:"88d274b1fc79e1ef9235413489b83e7b"},{url:"img/ICPba.png",revision:"3b2b0bd5e31ce9cd12bdfa157df5e07a"},{url:"img/loading.gif",revision:"8ba9bcf894e97e2286ff277a051a16ee"},{url:"img/movie_top_img.png",revision:"f9c6a4eea668aa83b33df998bc3f82a7"},{url:"img/shuoshuo.jpg",revision:"a5df3040b230a54ff0c92e89ca3df472"},{url:"img/tag_img.jpg",revision:"cbe040bd1990720752b9400626847a26"},{url:"img/tag_per_img.jpg",revision:"615dfe024b5d09609da0322e5ceb716a"},{url:"img/waline_bg.gif",revision:"9ece449df7218e927b249d65a96b2460"},{url:"index.html",revision:"490c4f3fac824ffbef12c7ff95fbae80"},{url:"js/census.js",revision:"aa2be4ec4b1375fbae554b255694a0da"},{url:"js/custom/custom-1.js",revision:"70479a901feabe1ac170c628db4ba10f"},{url:"js/diytitle.js",revision:"405e65bc3a211b60fa56f7f578eb474b"},{url:"js/fishes.js",revision:"d7498b7d186aa147c2173a0cf0b4aaab"},{url:"js/grayscale.js",revision:"362feca3293c66db1463810e3f93783d"},{url:"js/jquery.min.js",revision:"f832e36068ab203a3f89b1795480d0d7"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"51f450e09a46a6c7f054e462a7a70147"},{url:"live2d-widget/assets/screenshot-1.png",revision:"30b70e6cd9be9812adcb347536f0da85"},{url:"live2d-widget/assets/screenshot-2.png",revision:"1295844e29a6d6dc3a4aa0db8faa7da7"},{url:"live2d-widget/assets/screenshot-3.png",revision:"4aa1995daf77bc19803648fe6a65c33e"},{url:"live2d-widget/autoload.js",revision:"8596d664408abde040106b1f9e125189"},{url:"live2d-widget/demo/demo.html",revision:"c3739fe6dc739932b79f9bb2dabf1c02"},{url:"live2d-widget/demo/login.html",revision:"a3786e750803a5e2d2b583c6f74e048c"},{url:"live2d-widget/live2d.min.js",revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7"},{url:"live2d-widget/README.html",revision:"6ae6f27d2375c49ae1a68b89b04b5f57"},{url:"live2d-widget/waifu-tips.js",revision:"93a9d7348151878beb55616e1882521f"},{url:"live2d-widget/waifu.css",revision:"79c648a33a8749b787a348bc61d4c2b0"},{url:"messageboard/index.html",revision:"512327f0b8df0df6fd75682693f08234"},{url:"movies/index.html",revision:"8361b03b5c09daf7cc472a88af5cf2e5"},{url:"music/index.html",revision:"b355b4f6125ab49ec0bbadf5c94ceb42"},{url:"post/4a17b156/index.html",revision:"df42e8492be6e938abaac69b7a0a682c"},{url:"shuoshuo/index.html",revision:"c46ee646ff4e0218b783e5cad30ee2d8"},{url:"tags/index.html",revision:"c0cc9273ce86b060d3e20b2d8563a4ae"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map

!function(c){function t(t){for(var e,o,n=t[0],i=t[1],r=t[2],s=0,a=[];s<n.length;s++)o=n[s],Object.prototype.hasOwnProperty.call(d,o)&&d[o]&&a.push(d[o][0]),d[o]=0;for(e in i)Object.prototype.hasOwnProperty.call(i,e)&&(c[e]=i[e]);for(p&&p(t);a.length;)a.shift()();return u.push.apply(u,r||[]),l()}function l(){for(var t,e=0;e<u.length;e++){for(var o=u[e],n=!0,i=1;i<o.length;i++){var r=o[i];0!==d[r]&&(n=!1)}n&&(u.splice(e--,1),t=s(s.s=o[0]))}return t}var o={},d={6:0},u=[];function s(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return c[t].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=c,s.c=o,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(o,n,function(t){return e[t]}.bind(null,n));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var e=window.webpackJsonp=window.webpackJsonp||[],n=e.push.bind(e);e.push=t,e=e.slice();for(var i=0;i<e.length;i++)t(e[i]);var p=n;u.push([468,1,16]),l()}({191:function(t,e,o){(function(e){e.fn.howToBlockSlider=function(){this.options={selectors:{container:".rwl-read-slider__inner",illustration:".rwl-read-slider__illustration",item:".rwl-read-slide",left:".rwl-read-slider__nav-item.rwl-read-slider__nav-item--prev",right:".rwl-read-slider__nav-item.rwl-read-slider__nav-item--next"},activeSlide:null,slidesCount:null};var o=this;return this.events={init:function(){this.initArrows()},initArrows:function(){o.$("left").on("click",o.methods.slideLeft),o.$("right").on("click",o.methods.slideRight)}},this.methods={init:function(){o.options.activeSlide=0,o.options.slidesCount=o.$("item").length,this.initArrows(),this.initActiveItem(),this.initIllustration()},slideRight:function(){o.options.activeSlide++,o.methods.moveSliderWrapper()},slideLeft:function(){o.options.activeSlide--,o.methods.moveSliderWrapper()},initIllustration:function(){0===o.options.activeSlide?o.$("illustration").removeClass("is-hidden"):o.$("illustration").addClass("is-hidden")},moveSliderWrapper:function(){o.methods.initArrows(),o.methods.initActiveItem(),o.methods.initIllustration();var t=o.$("item").first().outerWidth(),e=o.options.activeSlide*t;o.$("container").css({transform:"rtl"===document.dir?"translateX("+e+"px)":"translateX(-"+e+"px)"})},initActiveItem:function(){o.$("item").removeClass("is-active").eq(o.options.activeSlide).addClass("is-active")},initArrows:function(){if(0===o.options.slidesCount)return o.$("left").hide(),void o.$("right").hide();o.options.activeSlide<o.options.slidesCount-1?o.$("right").show():o.$("right").hide(),0<o.options.activeSlide?o.$("left").show():o.$("left").hide(),o.options.activeSlide<o.options.slidesCount-1?o.$("right").addClass("is-wide"):o.$("right").removeClass("is-wide"),o.options.activeSlide===o.options.slidesCount-1?o.$("left").addClass("is-wide"):o.$("left").removeClass("is-wide")}},this.$=function(t){if(!(t in o.options.selectors))throw new Error('Element "'+t+'" is not found.');return e(o.options.selectors[t],o)},o.methods.init(),o.events.init(),o}}).call(this,o(9))},468:function(t,e,o){o(469),o(471),o(473),o(474),o(475),o(476),o(477),o(478),t.exports=o(479)},469:function(t,e,o){var n=o(470);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,o(3).default)("5e4fbd30",n,!1,{})},470:function(t,e,o){},471:function(t,e,o){var n=o(472);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,o(3).default)("43fe5d06",n,!1,{})},472:function(t,e,o){},473:function(t,e,o){(function(c,t){c(function(){var a=this;this.selectors={cryptoCurrenciesList:'[data-selector="rbcc-scroll-item"]',cryptoRate:'[data-selector="crypto-rate"]',cryptoRateChange:'[data-selector="crypto-rate-change"]'},this.currency=window.site_currency||"USD",this.initGlobalEventListener=function(){window.addEventListener("currency-updated",function(t){t.detail&&"currency"in t.detail&&a.methods.setCurrency(t.detail.currency),a.methods.updateRates()},!1)},this.methods={setCryptoRates:function(s){c(a.selectors.cryptoCurrenciesList).each(function(){var t=c(a.selectors.cryptoRate,this),e=t.data("coin");if(e in s){c(this).show();var o=t.data("value-"+a.currency),n=parseFloat(s[e]),i=100*(1-o/n),r=Math.ceil(100*i)/100;!isNaN(r)&&0<Math.abs(r)&&c(a.selectors.cryptoRateChange,this).html((0<r?"+":"")+r+"%"),t.data("value-"+a.currency,n).html(a.methods.format(n,a.currency))}else c(this).hide()})},format:function(t,e){var o={style:"currency",currency:e};return t<1&&(o.minimumFractionDigits=5),Number(t).toLocaleString(void 0,o)},remapRatesObject:function(o){var n={};return Object.keys(o).forEach(function(t){var e=o[t];a.currency in e&&(n[t]=e[a.currency])}),n},updateRates:function(){if(!(t.cryptoRatesObject&&"prices"in t.cryptoRatesObject))throw new Error("No crypto rates are loaded.");a.methods.setCryptoRates(a.methods.remapRatesObject(t.cryptoRatesObject.prices))},setCurrency:function(t){a.currency=t||a.currency}},this.initGlobalEventListener()})}).call(this,o(9),o(25))},474:function(t,e,o){"use strict";o.r(e),function(t){o(191);t(document).ready(function(){t("#fiat-rates-block").ratesBlockFiatSelector(),t("#crypto-rates-block").ratesBlockCryptoCarousel(),t("#how-it-works-block").howToBlockSlider()})}.call(this,o(9))},475:function(t,e,o){(function(a){a.fn.generateCustomFields=function(r,t){if(!t||!jq.isArray(t)||!t.length)return!1;var e=a(this),s=a("#transaction-account").attr("tabindex"),o={init:function(){e.show().html(""),a(t.sort(o.sortByPosition)).each(function(){e.append(o.generateField(this))})},generateField:function(t){var e="custom_field-"+t.id,o=a("<label>",{class:"control-label",for:e}).text(t.name),n=a("<div>",{id:e+"-em",class:"errorMessage"});switch(t.type){case"text":case"email":case"decimal":case"integer":case"date":var i=a("<input>",{id:e,class:"form-control",name:r+"[data][custom_fields]["+t.id+"]",type:t.type,placeholder:t.hint});"decimal"===t.type?i.attr({type:"number",step:"0.01"}):"integer"===t.type?i.attr({type:"text"}):"date"===t.type?i.kvDatepicker({autoclose:!0,startView:"decade",weekStart:1,format:"yyyy-mm-dd",defaultViewDate:"1982-01-01",changeMonth:!0,changeYear:!0}):"text"===t.type&&t.max_length&&i.attr({maxLength:t.max_length});break;case"select":i=a("<select>",{id:e,class:"form-control",name:r+"[data][custom_fields]["+t.id+"]"}).html(t.default_value.split(",").map(function(t){return'<option value="'+t+'">'+t+"</option>"}))}return s++,a("<div>",{class:"form-group show-input col-xs-12"}).append(o).append(i.attr({tabindex:s})).append(n)},sortByPosition:function(t,e){return t.position<e.position?-1:t.position>e.position?1:0}};o.init()}}).call(this,o(9))},476:function(t,e,o){(function(e){e.fn.ratesBlockCryptoCarousel=function(){this.options={selectors:{scrollContainerInner:'[data-selector="rbcc-scroll-container-inner"]',scrollItems:'[data-selector="rbcc-scroll-item"]:visible',dotsContainer:'[data-selector="rbcc-carousel-dots"]',dots:'[data-selector="rbcc-carousel-dots"] > button'},isEnabled:!1,intervalId:null,dots:0,slide:1,offset:0,scrollStart:0,slideEverySeconds:10,hovered:!1};var a=this;return this.events={init:function(){this.onResize(),this.dots(),this.onMouseDrag(),this.autoSlide(),window.addEventListener("resize",a.methods.onResize)},onResize:function(){e(window).off("resize.ratesBlockCryptoCarousel").on("resize.ratesBlockCryptoCarousel",a.methods.onResize)},autoSlide:function(){a.off("mouseover").on("mouseover",function(){a.options.hovered=!0}).off("mouseout").on("mouseout",function(){a.options.hovered=!1}),clearInterval(a.intervalId),a.intervalId=setInterval(function(){a.options.hovered||a.methods.nextSlide()},1e3*a.options.slideEverySeconds)},dots:function(){a.$("dots").off("click").on("click",function(){a.methods.handleSlide(e(this).data("index"))}),e(window).off("update-crypto-slider resize.ratesBlockCryptoCarousel").on("update-crypto-slider resize.ratesBlockCryptoCarousel",a.methods.resetSlider)},onMouseDrag:function(){a.$("scrollContainerInner").on("mousedown",function(t){e(window).on("mousemove.ratesBlockCryptoCarousel",a.methods.handleDrag),e(window).on("mouseup.ratesBlockCryptoCarousel",a.methods.handleDragEnd),a.methods.handleMousedown(t)})},offMouseDrag:function(){e(window).off("mousemove.ratesBlockCryptoCarousel"),e(window).off("mouseup.ratesBlockCryptoCarousel")}},this.methods={init:function(){this.generateDots(),this.onResize()},onResize:function(){if(a.methods.toggleMobileScript(),window.innerWidth<1e3)return a.methods.destroySlides();a.options.dots=a.methods.getDotCount(),a.$("dots").show()},nextSlide:function(){a.options.dots<=1||(a.options.slide=a.options.slide<a.options.dots?a.options.slide+1:1,a.methods.handleSlide(a.options.slide))},resetSlider:function(){a.methods.generateDots(),a.methods.toggleMobileScript(),a.methods.handleSlide(1)},handleSlide:function(t){if(!(!a.isEnabled||t>a.options.dots||t<0)){var e=(t-1)*a.width();t===a.methods.getDotCount()&&(e=a.methods.getReducedSlideDistance(e)),a.$("scrollContainerInner").css("transform","rtl"===document.dir?"translateX(".concat(e,"px)"):"translateX(-".concat(e,"px)")),a.$("dots").show().removeClass("is-active").filter("[data-index="+t+"]").addClass("is-active"),a.options.slide=t,a.events.autoSlide()}},getReducedSlideDistance:function(t){var e=a.width(),o=a.$("scrollItems").length,n=a.$("scrollItems").eq(0).outerWidth(!0),i=parseInt(e/n),r=o%i;if(0==r)return t;var s=t-(i-r)*n;return 0<s?s:0},destroySlides:function(){a.options.dots=0,a.options.slide=1,a.$("scrollContainerInner").removeAttr("style"),a.$("dots").hide(),a.events.init()},getDotCount:function(){var t=a.width(),e=a.$("scrollContainerInner").width();return Math.ceil(e/t)},generateDots:function(){var t=a.$("dots").eq(0).clone(),e=a.methods.getDotCount();a.$("dots").remove();for(var o=1;o<=e;o++)a.$("dotsContainer").append(t[1===o?"addClass":"removeClass"]("is-active").attr({"data-index":o}).text(o).clone());a.options.dots=a.$("dots").length,a.events.dots()},handleMousedown:function(t){a.$("scrollContainerInner").addClass("is-dragging");var e=a.$("scrollContainerInner").css("transform").replace(/[^0-9\-.,]/g,"").split(","),o=e[12]||e[4]||0;a.options.offset=o-t.clientX,a.options.scrollStart=o},handleDragEnd:function(){a.$("scrollContainerInner").removeClass("is-dragging"),a.events.offMouseDrag();var t=a.$("scrollContainerInner").css("transform").replace(/[^0-9\-.,]/g,"").split(","),e=t[12]||t[4]||0,o=0,n=a.options.slide+1,i=a.options.slide-1<=0?1:a.options.slide-1;if(parseInt(a.options.scrollStart)>parseInt(e))o="rtl"===document.dir?i:n;else{if(!(parseInt(a.options.scrollStart)<parseInt(e)))return;o="rtl"===document.dir?n:i}a.methods.handleSlide(o)},handleDrag:function(t){if(a.$("scrollContainerInner").hasClass("is-dragging")&&a.isEnabled){t.preventDefault();var e=t.clientX+a.options.offset;if("rtl"===document.dir){if(e<0||e>a.width()*(a.options.dots-1))return}else if(0<e||e<a.width()*(a.options.dots-1)*-1)return;a.$("scrollContainerInner").css({transform:"translateX("+e+"px)"})}},toggleMobileScript:function(){a.isEnabled=a.$("dotsContainer").is(":visible")}},this.$=function(t){if(!(t in a.options.selectors))throw new Error('Element "'+t+'" is not found.');return e(a.options.selectors[t],a)},a.methods.init(),void a.events.init()}}).call(this,o(9))},477:function(t,e,o){(function(n){n.fn.ratesBlockFiatSelector=function(){this.options={selectors:{favoriteFiatCurrency:'[data-selector="favorite-fiat-currency-default"]',additionalFavoriteFiatCurrency:'button[data-temporary="true"]',togglePopupButton:'[data-selector="toggle-popup-button"]',otherFiatCurrencies:'[data-selector="choose-other-fiat-currency"]',otherFiatCurrenciesDropdown:'[data-selector="other-fiat-currencies-dropdown"]',otherFiatCurrenciesList:'[data-selector="other-fiat-currencies-list"]',slider:"#crypto-rates-block"},isOpened:!1,currency:window.site_currency||"USD"};var i=this;return this.events={init:function(){return this.togglePopup(),this.addFavoriteCurrency(),this.chooseCurrency(),this},togglePopup:function(){i.$("togglePopupButton").off("click").on("click",function(t){t.stopPropagation(),i.methods.togglePopup()})},bindClosePopup:function(){i.options.isOpened&&n("body").on("click.ratesBlockFiatSelector",i.methods.closePopup)},unbindClosePopup:function(){n("body").off("click.ratesBlockFiatSelector")},addFavoriteCurrency:function(){i.$("otherFiatCurrencies").off("click.addFavoriteCurrency").on("click.addFavoriteCurrency",function(){i.methods.addFavoriteCurrency(this),i.$("togglePopupButton").trigger("click"),i.events.init()})},chooseCurrency:function(){n([i.options.selectors.favoriteFiatCurrency,i.options.selectors.otherFiatCurrencies].join(",")).off("click.chooseCurrency").on("click.chooseCurrency",function(){var t=n(this).data("currency");i.methods.chooseCurrency(t)})}},this.methods={togglePopup:function(){i.options.isOpened=i.$("togglePopupButton").toggleClass("is-open").hasClass("is-open"),i.$("otherFiatCurrenciesList")[i.methods.dropdownVerticalPosition()?"addClass":"removeClass"]("to-top");var t=i.methods.dropdownHorizontalPosition();i.$("otherFiatCurrenciesList").css({left:t.left}),i.$("otherFiatCurrenciesList").css({right:t.right}),i.events[i.options.isOpened?"bindClosePopup":"unbindClosePopup"]()},closePopup:function(){i.$("togglePopupButton").removeClass("is-open"),i.options.isOpened=!1,i.events.unbindClosePopup()},dropdownVerticalPosition:function(){return n(window).scrollTop()+window.innerHeight-n('[data-selector="toggle-popup-button"]').offset().top<i.$("otherFiatCurrenciesList").height()},dropdownHorizontalPosition:function(){var t,e,o=i.$("otherFiatCurrenciesList").width();if(o<window.innerWidth/2.5)t=e="";else{var n=i.$("otherFiatCurrenciesDropdown").position().left;t=window.innerWidth/2-n-o/2+"px",e="auto"}return{left:t,right:e}},addFavoriteCurrency:function(t){var e=n(t);i.$("additionalFavoriteFiatCurrency").remove(),i.$("favoriteFiatCurrency").first().clone().removeClass("is-selected").removeAttr("data-selector").attr({"data-currency":e.data("currency"),"data-selector":"choose-other-fiat-currency","data-temporary":!0}).html(e.data("currency")).insertBefore(i.$("otherFiatCurrenciesDropdown"))},chooseCurrency:function(t){var e='[data-currency="'+t+'"]';n([i.options.selectors.favoriteFiatCurrency,i.options.selectors.otherFiatCurrencies].join(",")).removeClass("is-selected"),n(e).addClass("is-selected"),i.methods.updateCurrencyPopup(),i.methods.updateCryptoRates(t),n(i.options.selectors.slider).trigger("update-crypto-slider")},updateCryptoRates:function(t){window.dispatchEvent(new CustomEvent("currency-updated",{detail:{currency:t}}))},updateCurrencyPopup:function(){var t=i.$("otherFiatCurrenciesList").find(i.options.selectors.otherFiatCurrencies),e=1===t.length&&i.$("additionalFavoriteFiatCurrency").data("currency")===t.eq(0).data("currency"),o=i.$("togglePopupButton");e?o.hide():o.show()}},this.$=function(t){if(!(t in i.options.selectors))throw new Error('Element "'+t+'" is not found.');return n(i.options.selectors[t],i)},window.addEventListener("update-crypto-rates",function(t){var e=i.$("favoriteFiatCurrency").map(function(){return n(this).data("currency")}).toArray(),o=t.detail&&t.detail.currency?t.detail.currency:i.options.currency;e.indexOf(o)<0&&(i.methods.addFavoriteCurrency('[data-currency="'+o+'"]'),i.events.init()),i.methods.chooseCurrency(o)}),this.events.init()}}).call(this,o(9))},478:function(t,e,o){(function(t){window.transactionsDailyVolumeOptions={selectors:{updateForElements:'[data-selector="iexb-currencies"] input[type=radio]'},defaultCurrency:"USD",dailyVolume:0,init:function(t){return this.dailyVolume=t.amount,this.defaultCurrency=t.currency,this}},t.fn.updateTransactionsDailyVolume=function(o){o=o||window.transactionsDailyVolumeOptions,this.amount=this.eq(0);var n=this;return this.init=function(){return n.bindLocalEventListener(),n.renderHtml(n.getSelectedCurrency()),n},this.bindGlobalEventListener=function(){t(window).on("update-transactions-daily-volume",n.init)},this.bindLocalEventListener=function(){t(o.selectors.updateForElements).on("change.updateTransactionsDailyVolume",function(){n.renderHtml(this.value)})},this.getExchangeRate=function(t){if(o.defaultCurrency===t)return 1;if(!(o.defaultCurrency in exchangeRatesJSON&&t in exchangeRatesJSON[o.defaultCurrency]))throw new Error("No exchange rate provided to calculate transactions daily volume");return exchangeRatesJSON[o.defaultCurrency][t]},this.renderHtml=function(t){var e=n.getExchangeRate(t);n.amount.html(Math.round(e*o.dailyVolume)+"&nbsp;"+t)},this.getSelectedCurrency=function(){return t(o.selectors.updateForElements).filter(":checked").val()},this.bindGlobalEventListener()},t(function(){t("#transactions-daily-volume").updateTransactionsDailyVolume()})}).call(this,o(9))},479:function(t,e,o){"use strict";o.r(e),function(t){o(190);t(function(){t(".trust-reviews-display .VueCarousel").slick({dots:!0,adaptiveHeight:!0,slidesToShow:3,slidesToScroll:3,prevArrow:".VueCarousel-navigation-prev",nextArrow:".VueCarousel-navigation-next",appendDots:".VueCarousel-pagination",rtl:"rtl"===document.dir,responsive:[{breakpoint:1e3,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}]})})}.call(this,o(9))}});
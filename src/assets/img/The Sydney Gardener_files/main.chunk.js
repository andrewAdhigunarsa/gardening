(window["webpackJsonpmaterial-kit-react"] = window["webpackJsonpmaterial-kit-react"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/assets/scss/material-kit-react.scss?v=1.8.0":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--6-oneOf-5-3!./node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-4!./src/assets/scss/material-kit-react.scss?v=1.8.0 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*!\n\n =========================================================\n * Material Kit React v1.8.0 based on Material Kit Free - v2.0.2 (Bootstrap 4.0.0 Final Edition)\n =========================================================\n\n * Product Page: https://www.creative-tim.com/product/material-kit-react\n * Copyright 2019 Creative Tim (https://www.creative-tim.com)\n * Licensed under MIT (https://github.com/creativetimofficial/material-kit-react/blob/master/LICENSE.md)\n\n * Coded by Creative Tim\n\n =========================================================\n\n * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\n */\nhtml * {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nbody {\n  font-size: 1rem; }\n\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-weight: 300;\n  line-height: 1.5em; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  color: inherit; }\n\nh1,\nh2,\nh3 {\n  margin-top: 20px;\n  margin-bottom: 10px; }\n\nh4,\nh5,\nh6 {\n  margin-top: 10px;\n  margin-bottom: 10px; }\n\nh1 {\n  font-size: 3.3125rem;\n  line-height: 1.15em; }\n\nh2 {\n  font-size: 2.25rem;\n  line-height: 1.5em; }\n\nh3 {\n  font-size: 1.5625rem;\n  line-height: 1.4em; }\n\nh4 {\n  font-size: 1.125rem;\n  line-height: 1.5em; }\n\nh5 {\n  font-size: 1.0625rem;\n  line-height: 1.55em; }\n\nh6 {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  font-weight: 500; }\n\np {\n  font-size: 14px;\n  margin: 0 0 10px; }\n\nhtml {\n  font-family: sans-serif;\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  -ms-overflow-style: scrollbar;\n  -webkit-tap-highlight-color: transparent; }\n\nbody {\n  background-color: #e5e5e5;\n  color: #3c4858;\n  margin: 0;\n  font-size: 1rem;\n  text-align: left; }\n\nlegend {\n  border-bottom: 0; }\n\n* {\n  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\n  -webkit-tap-highlight-color: transparent;\n  box-sizing: border-box; }\n  *:focus {\n    outline: 0; }\n\na {\n  color: #9c27b0;\n  text-decoration: none;\n  background-color: transparent; }\n  a:hover, a:focus {\n    color: #89229b;\n    text-decoration: none; }\n\nlabel {\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #aaaaaa;\n  font-weight: 400; }\n\nsmall {\n  font-size: 75%;\n  color: #777;\n  font-weight: 400; }\n\nimg {\n  vertical-align: middle;\n  border-style: none; }\n\nform {\n  margin-bottom: 1.125rem; }\n\n/*! nouislider - 14.0.2 - 6/28/2019 */\n/* Functional styling;\n * These styles are required for noUiSlider to function.\n * You don't need to change these rules to apply your design.\n */\n/*\n\nThis file was modified by Creative-Tim\n\n*/\n.noUi-target,\n.noUi-target * {\n  -webkit-touch-callout: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-user-select: none;\n  touch-action: none;\n  user-select: none;\n  box-sizing: border-box; }\n\n.noUi-target {\n  position: relative;\n  direction: ltr; }\n\n.noUi-base,\n.noUi-connects {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 1; }\n\n/* Wrapper for all connect elements.\n */\n.noUi-connects {\n  overflow: hidden;\n  z-index: 0; }\n\n.noUi-connect,\n.noUi-origin {\n  will-change: transform;\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  -ms-transform-origin: 0 0;\n  -webkit-transform-origin: 0 0;\n  -webkit-transform-style: preserve-3d;\n  transform-origin: 0 0;\n  transform-style: flat; }\n\n.noUi-connect {\n  height: 100%;\n  width: 100%; }\n\n.noUi-origin {\n  height: 10%;\n  width: 10%; }\n\n/* Offset direction\n */\nhtml:not([dir=\"rtl\"]) .noUi-horizontal .noUi-origin {\n  left: auto;\n  right: 0; }\n\n/* Give origins 0 height/width so they don't interfere with clicking the\n * connect elements.\n */\n.noUi-vertical .noUi-origin {\n  width: 0; }\n\n.noUi-horizontal .noUi-origin {\n  height: 0; }\n\n.noUi-handle {\n  backface-visibility: hidden;\n  position: absolute; }\n\n.noUi-touch-area {\n  height: 100%;\n  width: 100%; }\n\n.noUi-state-tap .noUi-connect,\n.noUi-state-tap .noUi-origin {\n  transition: transform 0.3s; }\n\n.noUi-state-drag * {\n  cursor: inherit !important; }\n\n/* Slider size and handle placement;\n */\n.noUi-horizontal {\n  height: 2px;\n  margin: 15px 0; }\n\n.noUi-horizontal .noUi-handle {\n  box-sizing: border-box;\n  width: 14px;\n  height: 14px;\n  left: -10px;\n  top: -6px;\n  cursor: pointer;\n  border-radius: 100%;\n  transition: all .2s ease-out;\n  border: 1px solid #9c27b0;\n  background: #fff;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2); }\n\n.noUi-vertical {\n  width: 18px; }\n\n.noUi-vertical .noUi-handle {\n  width: 15px;\n  height: 15px;\n  left: 0px;\n  top: -7px; }\n\nhtml:not([dir=\"rtl\"]) .noUi-horizontal .noUi-handle {\n  right: -4px;\n  left: auto; }\n\n/* Styling;\n * Giving the connect element a border radius causes issues with using transform: scale\n */\n.noUi-target {\n  background-color: #c8c8c8;\n  border-radius: 3px; }\n\n.noUi-connects {\n  border-radius: 3px; }\n\n/* Handles and cursors;\n */\n.noUi-draggable {\n  cursor: ew-resize; }\n\n.noUi-vertical .noUi-draggable {\n  cursor: ns-resize; }\n\n.noUi-handle {\n  border-radius: 3px;\n  background: #FFF;\n  cursor: default;\n  box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #EBEBEB, 0 3px 6px -3px #BBB; }\n\n.noUi-active {\n  box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #DDD, 0 3px 6px -3px #BBB; }\n\n/* Disabled state;\n */\n[disabled] .noUi-connect {\n  background: #B8B8B8; }\n\n[disabled].noUi-target,\n[disabled].noUi-handle,\n[disabled] .noUi-handle {\n  cursor: not-allowed; }\n\n/* Base;\n *\n */\n.noUi-pips,\n.noUi-pips * {\n  box-sizing: border-box; }\n\n.noUi-pips {\n  position: absolute;\n  color: #999; }\n\n/* Values;\n *\n */\n.noUi-value {\n  position: absolute;\n  white-space: nowrap;\n  text-align: center; }\n\n.noUi-value-sub {\n  color: #ccc;\n  font-size: 10px; }\n\n/* Markings;\n *\n */\n.noUi-marker {\n  position: absolute;\n  background: #CCC; }\n\n.noUi-marker-sub {\n  background: #AAA; }\n\n.noUi-marker-large {\n  background: #AAA; }\n\n/* Horizontal layout;\n *\n */\n.noUi-pips-horizontal {\n  padding: 10px 0;\n  height: 80px;\n  top: 100%;\n  left: 0;\n  width: 100%; }\n\n.noUi-value-horizontal {\n  transform: translate(-50%, 50%); }\n\n.noUi-rtl .noUi-value-horizontal {\n  transform: translate(50%, 50%); }\n\n.noUi-marker-horizontal.noUi-marker {\n  margin-left: -1px;\n  width: 2px;\n  height: 5px; }\n\n.noUi-marker-horizontal.noUi-marker-sub {\n  height: 10px; }\n\n.noUi-marker-horizontal.noUi-marker-large {\n  height: 15px; }\n\n/* Vertical layout;\n *\n */\n.noUi-pips-vertical {\n  padding: 0 10px;\n  height: 100%;\n  top: 0;\n  left: 100%; }\n\n.noUi-value-vertical {\n  transform: translate(0, -50%);\n  padding-left: 25px; }\n\n.noUi-rtl .noUi-value-vertical {\n  transform: translate(0, 50%); }\n\n.noUi-marker-vertical.noUi-marker {\n  width: 5px;\n  height: 2px;\n  margin-top: -1px; }\n\n.noUi-marker-vertical.noUi-marker-sub {\n  width: 10px; }\n\n.noUi-marker-vertical.noUi-marker-large {\n  width: 15px; }\n\n.noUi-tooltip {\n  display: block;\n  position: absolute;\n  border: 1px solid #D9D9D9;\n  border-radius: 3px;\n  background: #fff;\n  color: #000;\n  padding: 5px;\n  text-align: center;\n  white-space: nowrap; }\n\n.noUi-horizontal .noUi-tooltip {\n  transform: translate(-50%, 0);\n  left: 50%;\n  bottom: 120%; }\n\n.noUi-vertical .noUi-tooltip {\n  transform: translate(0, -50%);\n  top: 50%;\n  right: 120%; }\n\n.noUi-target .noUi-handle {\n  border: 1px solid #333; }\n\n.noUi-target.slider-primary .noUi-connect, .noUi-target.slider-primary.noUi-connect {\n  background-color: #9c27b0; }\n\n.noUi-target.slider-primary .noUi-handle {\n  border-color: #9c27b0; }\n\n.noUi-target.slider-info .noUi-connect, .noUi-target.slider-info.noUi-connect {\n  background-color: #00bcd4; }\n\n.noUi-target.slider-info .noUi-handle {\n  border-color: #00bcd4; }\n\n.noUi-target.slider-success .noUi-connect, .noUi-target.slider-success.noUi-connect {\n  background-color: #4caf50; }\n\n.noUi-target.slider-success .noUi-handle {\n  border-color: #4caf50; }\n\n.noUi-target.slider-warning .noUi-connect, .noUi-target.slider-warning.noUi-connect {\n  background-color: #ff9800; }\n\n.noUi-target.slider-warning .noUi-handle {\n  border-color: #ff9800; }\n\n.noUi-target.slider-danger .noUi-connect, .noUi-target.slider-danger.noUi-connect {\n  background-color: #f44336; }\n\n.noUi-target.slider-danger .noUi-handle {\n  border-color: #f44336; }\n\n.noUi-target.slider-rose .noUi-connect, .noUi-target.slider-rose.noUi-connect {\n  background-color: #e91e63; }\n\n.noUi-target.slider-rose .noUi-handle {\n  border-color: #e91e63; }\n\n/*!\n* https://github.com/YouCanBookMe/react-datetime\n*/\n.rdt {\n  position: relative; }\n  .rdt .rdtPicker {\n    transition: all 150ms linear;\n    margin-top: -20px;\n    visibility: hidden;\n    display: block;\n    opacity: 0; }\n  .rdt.rdtOpen .rdtPicker {\n    opacity: 1;\n    visibility: visible;\n    margin-top: 0; }\n  .rdt input.form-control {\n    border: 0;\n    background-image: linear-gradient(#9c27b0, #9c27b0), linear-gradient(#d2d2d2, #d2d2d2);\n    background-size: 0 2px, 100% 1px;\n    background-repeat: no-repeat;\n    background-position: center bottom, center calc(100% - 1px);\n    background-color: rgba(0, 0, 0, 0);\n    transition: background 0s ease-out;\n    float: none;\n    box-shadow: none;\n    border-radius: 0;\n    font-weight: 400;\n    width: 100%;\n    height: 36px;\n    padding: 7px 0;\n    font-size: 14px;\n    font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n    font-weight: 400;\n    line-height: 1.42857;\n    display: block;\n    width: 100%;\n    color: #555; }\n  .rdt input.form-control:focus {\n    outline: none;\n    background-image: linear-gradient(#9c27b0, #9c27b0), linear-gradient(#d2d2d2, #d2d2d2);\n    background-size: 100% 2px, 100% 1px;\n    box-shadow: none;\n    transition-duration: 0.3s; }\n\n.rdtPicker {\n  display: none;\n  position: absolute;\n  width: 260px;\n  padding: 4px;\n  margin-top: 1px;\n  z-index: 99999 !important;\n  background: #fff;\n  border-radius: 0.125rem;\n  box-shadow: 0px 10px 50px 0px rgba(0, 0, 0, 0.2);\n  background-clip: padding-box;\n  min-width: 160px; }\n  .rdtPicker:before {\n    display: inline-block;\n    position: absolute;\n    width: 0;\n    height: 0;\n    vertical-align: middle;\n    content: \"\";\n    top: -5px;\n    left: 10px;\n    right: auto;\n    color: #ffffff;\n    border-bottom: 0.4em solid;\n    border-right: 0.4em solid transparent;\n    border-left: 0.4em solid transparent; }\n  .rdtPicker:after {\n    border-bottom: 0.4em solid #ffffff;\n    border-right: 0.4em solid transparent;\n    border-left: 0.4em solid transparent;\n    content: \"\";\n    display: inline-block;\n    position: absolute;\n    top: -5px;\n    left: 10px; }\n\n.rdtPicker {\n  display: block;\n  top: 40px; }\n\n.rdtStatic .rdtPicker {\n  box-shadow: none;\n  position: static; }\n\n.rdtPicker .rdtTimeToggle {\n  text-align: center;\n  padding: 5px;\n  border-radius: 4px; }\n\n.rdtPicker table {\n  width: 100%;\n  margin: 0;\n  border-color: #fff !important;\n  border-collapse: collapse; }\n\n.rdtPicker td,\n.rdtPicker th {\n  text-align: center;\n  padding: 1px; }\n\n.rdtPicker td {\n  cursor: pointer; }\n\n.rdtDay {\n  height: 30px;\n  line-height: 33px;\n  width: 30px;\n  text-align: center;\n  padding: 0px;\n  border-radius: 50%; }\n  .rdtDay.rdtToday.rdtActive, .rdtDay.rdtActive, .rdtDay.rdtActive:hover {\n    background-color: #9c27b0 !important;\n    color: #fff;\n    box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.2), 0 13px 24px -11px rgba(156, 39, 176, 0.6); }\n\n.rdtDays tr .dow {\n  border-bottom: 1px solid #e3e3e3;\n  text-align: center;\n  font-size: 12px;\n  text-transform: uppercase;\n  font-weight: inherit;\n  padding-bottom: 5px;\n  padding-top: 10px; }\n\n.rdtDays tr .rdtOld,\n.rdtDays tr .rdtNew {\n  color: #bdbdbd; }\n\n.rdtPicker td.rdtDay:hover,\n.rdtPicker td.rdtHour:hover,\n.rdtPicker td.rdtMinute:hover,\n.rdtPicker td.rdtSecond:hover,\n.rdtPicker .rdtTimeToggle:hover {\n  background: #eeeeee;\n  cursor: pointer; }\n\n.rdtPicker td.rdtToday {\n  position: relative; }\n\n.rdtPicker td.rdtActive.rdtToday:before {\n  border-bottom-color: #fff; }\n\n.rdtPicker td.rdtDisabled,\n.rdtPicker td.rdtDisabled:hover {\n  background: none;\n  color: #999999;\n  cursor: not-allowed; }\n\n.rdtPicker td span.rdtOld {\n  color: #999999; }\n\n.rdtPicker td span.rdtDisabled,\n.rdtPicker td span.rdtDisabled:hover {\n  background: none;\n  color: #999999;\n  cursor: not-allowed; }\n\n.rdtPicker .dow {\n  width: 14.2857%;\n  border-bottom: none; }\n\n.rdtPicker th.rdtSwitch {\n  width: 50px;\n  padding: 5px;\n  border-radius: 4px; }\n\n.rdtPicker th.rdtNext,\n.rdtPicker th.rdtPrev {\n  font-size: 21px;\n  vertical-align: top;\n  border-radius: 50%;\n  line-height: 33px; }\n\n.rdtPicker .dow,\n.rdtPicker th.rdtSwitch,\n.rdtPicker th.rdtNext,\n.rdtPicker th.rdtPrev,\n.rdtPicker .rdtTimeToggle {\n  color: #9c27b0; }\n\n.rdtPrev span,\n.rdtNext span {\n  display: block;\n  -webkit-touch-callout: none;\n  /* iOS Safari */\n  /* Chrome/Safari/Opera */\n  /* Konqueror */\n  /* Firefox */\n  /* Internet Explorer/Edge */\n  user-select: none; }\n\n.rdtPicker th.rdtDisabled,\n.rdtPicker th.rdtDisabled:hover {\n  background: none;\n  color: #999999;\n  cursor: not-allowed; }\n\n.rdtPicker thead tr:first-child th {\n  cursor: pointer; }\n\n.rdtPicker thead tr:first-child th:hover {\n  background: #eeeeee; }\n\n.rdtPicker button {\n  border: none;\n  background: none;\n  cursor: pointer; }\n\n.rdtPicker button:hover {\n  background-color: #eee; }\n\n.rdtPicker thead button {\n  width: 100%;\n  height: 100%; }\n\ntd.rdtMonth,\ntd.rdtYear {\n  height: 50px;\n  width: 25%;\n  cursor: pointer; }\n\ntd.rdtMonth:hover,\ntd.rdtYear:hover {\n  background: #eee; }\n\n.rdtCounters {\n  display: inline-block; }\n\n.rdtCounters > div {\n  float: left;\n  width: 40px;\n  font-weight: inherit;\n  margin: 3px;\n  border-radius: 50%; }\n\n.rdtCounters .rdtCounterSeparator {\n  width: 0;\n  border: 1px solid transparent; }\n\n.rdtCounter {\n  height: 100px; }\n\n.rdtCounter {\n  width: 40px; }\n  .rdtCounter .rdtCount {\n    padding: 7px;\n    height: 40px;\n    border: 1px solid transparent; }\n\n.rdtCounters .rdtCounter:last-child .rdtCount {\n  color: #9c27b0;\n  border-radius: 50%;\n  border: 1px solid #9c27b0; }\n\n.rdtCounterSeparator {\n  padding: 7px;\n  line-height: 100px; }\n\n.rdtCounter .rdtBtn {\n  line-height: 40px;\n  cursor: pointer;\n  display: block;\n  border-radius: 50%;\n  color: #eee;\n  transition: all 60ms ease-in;\n  -webkit-touch-callout: none;\n  /* iOS Safari */\n  /* Chrome/Safari/Opera */\n  /* Konqueror */\n  /* Firefox */\n  /* Internet Explorer/Edge */\n  user-select: none; }\n\n.rdtCounter .rdtBtn:hover {\n  background: #eee;\n  color: #797979; }\n\n.rdtCounter .rdtCount {\n  font-size: inherit;\n  line-height: 25px; }\n\n.rdtMilli {\n  vertical-align: middle;\n  padding-left: 8px;\n  width: 48px; }\n\n.rdtMilli input {\n  width: 100%;\n  font-size: inherit;\n  margin-top: 37px; }\n\n.rdtMonths,\n.rdtYears {\n  padding-bottom: 10px; }\n  .rdtMonths .rdtMonth,\n  .rdtMonths .rdtYear,\n  .rdtYears .rdtMonth,\n  .rdtYears .rdtYear {\n    display: inline-block;\n    width: 56px;\n    height: 56px;\n    line-height: 56px;\n    margin: 3px 3px;\n    cursor: pointer;\n    border-radius: 50%;\n    text-align: center; }\n    .rdtMonths .rdtMonth.rdtActive,\n    .rdtMonths .rdtYear.rdtActive,\n    .rdtYears .rdtMonth.rdtActive,\n    .rdtYears .rdtYear.rdtActive {\n      background-color: #9c27b0 !important;\n      color: #fff; }\n\n/* Slider */\n.slick-slider {\n  position: relative;\n  display: block;\n  box-sizing: border-box;\n  user-select: none;\n  -webkit-touch-callout: none;\n  -khtml-user-select: none;\n  touch-action: pan-y;\n  -webkit-tap-highlight-color: transparent; }\n  @media (min-width: 768px) {\n    .slick-slider .slick-caption {\n      display: block !important; } }\n  .slick-slider .slick-caption {\n    padding-bottom: 45px;\n    position: absolute;\n    right: 15%;\n    bottom: 20px;\n    left: 15%;\n    z-index: 10;\n    padding-top: 20px;\n    color: #ffffff;\n    text-align: center;\n    z-index: 3;\n    display: none; }\n  .slick-slider .slick-slide > div:first-child {\n    position: relative; }\n  .slick-slider .slick-icons {\n    position: relative;\n    top: 5px; }\n  .slick-slider .slick-image {\n    width: 100% !important;\n    display: inline-flex !important; }\n\n.slick-list {\n  position: relative;\n  display: block;\n  overflow: hidden;\n  margin: 0;\n  padding: 0; }\n\n.slick-list:focus {\n  outline: none; }\n\n.slick-list.dragging {\n  cursor: pointer;\n  cursor: hand; }\n\n.slick-slider .slick-track,\n.slick-slider .slick-list {\n  transform: translate3d(0, 0, 0); }\n\n.slick-track {\n  position: relative;\n  top: 0;\n  left: 0;\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n\n.slick-track:before,\n.slick-track:after {\n  display: table;\n  content: \"\"; }\n\n.slick-track:after {\n  clear: both; }\n\n.slick-loading .slick-track {\n  visibility: hidden; }\n\n.slick-slide {\n  display: none;\n  float: left;\n  height: 100%;\n  min-height: 1px; }\n\n[dir=\"rtl\"] .slick-slide {\n  float: right; }\n\n.slick-slide img {\n  display: block; }\n\n.slick-slide.slick-loading img {\n  display: none; }\n\n.slick-slide.dragging img {\n  pointer-events: none; }\n\n.slick-initialized .slick-slide {\n  display: block; }\n\n.slick-loading .slick-slide {\n  visibility: hidden; }\n\n.slick-vertical .slick-slide {\n  display: block;\n  height: auto;\n  border: 1px solid transparent; }\n\n.slick-arrow.slick-hidden {\n  display: none; }\n\nbutton.slick-arrow.slick-prev,\nbutton.slick-arrow.slick-next {\n  font-size: 0;\n  line-height: 0;\n  position: absolute;\n  top: 50%;\n  display: block;\n  height: 100%;\n  padding: 0;\n  transform: translateY(-50%);\n  cursor: pointer;\n  border: none;\n  color: transparent;\n  outline: none;\n  background: transparent;\n  width: 15%;\n  z-index: 2;\n  opacity: 0.5; }\n\n.slick-prev {\n  left: 0; }\n  .slick-prev::before {\n    content: \"\\f053\";\n    font-weight: 600;\n    font-family: Font Awesome\\ 5 Free;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    display: inline-block;\n    font-style: normal;\n    font-variant: normal;\n    text-rendering: auto;\n    line-height: 1;\n    color: white;\n    font-size: 30px;\n    width: 100%; }\n\n.slick-next {\n  right: 0; }\n  .slick-next::before {\n    content: \"\\f054\";\n    font-weight: 600;\n    font-family: Font Awesome\\ 5 Free;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    display: inline-block;\n    font-style: normal;\n    font-variant: normal;\n    text-rendering: auto;\n    line-height: 1;\n    color: #fff;\n    font-size: 30px;\n    width: 100%; }\n\n.slick-list {\n  z-index: 1; }\n\n.slick-dots {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  position: absolute;\n  bottom: 5px;\n  width: 100%;\n  padding: 0;\n  list-style: none;\n  text-align: center;\n  z-index: 3; }\n\n.slick-dots li,\n.slick-dots li button {\n  width: 20px;\n  height: 20px;\n  cursor: pointer; }\n\n.slick-dots li {\n  position: relative;\n  display: inline-block;\n  margin: 0 5px;\n  padding: 0; }\n\n.slick-dots li button {\n  font-size: 0;\n  line-height: 0;\n  display: block;\n  padding: 5px;\n  color: transparent;\n  border: 0;\n  outline: none;\n  background: transparent; }\n  .slick-dots li button::before {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 10px;\n    height: 10px;\n    content: \"\\2022\";\n    text-align: center;\n    opacity: 1;\n    background-color: #fff;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n    border-radius: 2px;\n    transition: all 300ms linear; }\n\n.slick-dots li.slick-active button:before {\n  width: 15px;\n  height: 15px;\n  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);\n  top: -3px; }\n", ""]);



/***/ }),

/***/ "./src/assets/img/bg.jpg":
/*!*******************************!*\
  !*** ./src/assets/img/bg.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/bg.e5241971.jpg";

/***/ }),

/***/ "./src/assets/img/bg2.jpg":
/*!********************************!*\
  !*** ./src/assets/img/bg2.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/bg2.84378183.jpg";

/***/ }),

/***/ "./src/assets/img/bg3.jpg":
/*!********************************!*\
  !*** ./src/assets/img/bg3.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/bg3.e76de24b.jpg";

/***/ }),

/***/ "./src/assets/img/bg4.jpg":
/*!********************************!*\
  !*** ./src/assets/img/bg4.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/bg4.199e9ec1.jpg";

/***/ }),

/***/ "./src/assets/img/bg7.jpg":
/*!********************************!*\
  !*** ./src/assets/img/bg7.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/bg7.b08234a2.jpg";

/***/ }),

/***/ "./src/assets/img/examples/clem-onojegaw.jpg":
/*!***************************************************!*\
  !*** ./src/assets/img/examples/clem-onojegaw.jpg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/clem-onojegaw.c058841b.jpg";

/***/ }),

/***/ "./src/assets/img/examples/clem-onojeghuo.jpg":
/*!****************************************************!*\
  !*** ./src/assets/img/examples/clem-onojeghuo.jpg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/clem-onojeghuo.216ef03c.jpg";

/***/ }),

/***/ "./src/assets/img/examples/cynthia-del-rio.jpg":
/*!*****************************************************!*\
  !*** ./src/assets/img/examples/cynthia-del-rio.jpg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/cynthia-del-rio.9813593c.jpg";

/***/ }),

/***/ "./src/assets/img/examples/mariya-georgieva.jpg":
/*!******************************************************!*\
  !*** ./src/assets/img/examples/mariya-georgieva.jpg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/mariya-georgieva.4575c40b.jpg";

/***/ }),

/***/ "./src/assets/img/examples/olu-eletu.jpg":
/*!***********************************************!*\
  !*** ./src/assets/img/examples/olu-eletu.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/olu-eletu.4112cbc1.jpg";

/***/ }),

/***/ "./src/assets/img/examples/studio-1.jpg":
/*!**********************************************!*\
  !*** ./src/assets/img/examples/studio-1.jpg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/studio-1.ae0150c0.jpg";

/***/ }),

/***/ "./src/assets/img/examples/studio-2.jpg":
/*!**********************************************!*\
  !*** ./src/assets/img/examples/studio-2.jpg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/studio-2.76e2987e.jpg";

/***/ }),

/***/ "./src/assets/img/examples/studio-3.jpg":
/*!**********************************************!*\
  !*** ./src/assets/img/examples/studio-3.jpg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/studio-3.1d5451ce.jpg";

/***/ }),

/***/ "./src/assets/img/examples/studio-4.jpg":
/*!**********************************************!*\
  !*** ./src/assets/img/examples/studio-4.jpg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/studio-4.e064d090.jpg";

/***/ }),

/***/ "./src/assets/img/examples/studio-5.jpg":
/*!**********************************************!*\
  !*** ./src/assets/img/examples/studio-5.jpg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/studio-5.ef5c30ea.jpg";

/***/ }),

/***/ "./src/assets/img/faces/avatar.jpg":
/*!*****************************************!*\
  !*** ./src/assets/img/faces/avatar.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/avatar.f1d71f77.jpg";

/***/ }),

/***/ "./src/assets/img/faces/christian.jpg":
/*!********************************************!*\
  !*** ./src/assets/img/faces/christian.jpg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/christian.56633ed3.jpg";

/***/ }),

/***/ "./src/assets/img/faces/kendall.jpg":
/*!******************************************!*\
  !*** ./src/assets/img/faces/kendall.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/kendall.e0508cc9.jpg";

/***/ }),

/***/ "./src/assets/img/landing-bg.jpg":
/*!***************************************!*\
  !*** ./src/assets/img/landing-bg.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/landing-bg.df8fd3ef.jpg";

/***/ }),

/***/ "./src/assets/img/landing.jpg":
/*!************************************!*\
  !*** ./src/assets/img/landing.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/landing.08e18cb9.jpg";

/***/ }),

/***/ "./src/assets/img/lawnFence.jpeg":
/*!***************************************!*\
  !*** ./src/assets/img/lawnFence.jpeg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/lawnFence.cc64c0da.jpeg";

/***/ }),

/***/ "./src/assets/img/profile-bg.jpg":
/*!***************************************!*\
  !*** ./src/assets/img/profile-bg.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/profile-bg.baf6b40a.jpg";

/***/ }),

/***/ "./src/assets/img/profile.jpg":
/*!************************************!*\
  !*** ./src/assets/img/profile.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/profile.090a5aab.jpg";

/***/ }),

/***/ "./src/assets/img/sign.jpg":
/*!*********************************!*\
  !*** ./src/assets/img/sign.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/sign.cf8b686b.jpg";

/***/ }),

/***/ "./src/assets/jss/material-kit-react.js":
/*!**********************************************!*\
  !*** ./src/assets/jss/material-kit-react.js ***!
  \**********************************************/
/*! exports provided: drawerWidth, transition, container, conatinerFluid, boxShadow, card, defaultFont, primaryColor, warningColor, dangerColor, successColor, infoColor, roseColor, grayColor, primaryBoxShadow, infoBoxShadow, successBoxShadow, warningBoxShadow, dangerBoxShadow, roseBoxShadow, warningCardHeader, successCardHeader, dangerCardHeader, infoCardHeader, primaryCardHeader, roseCardHeader, cardActions, cardHeader, defaultBoxShadow, title, cardTitle, cardLink, cardSubtitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawerWidth", function() { return drawerWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transition", function() { return transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "container", function() { return container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conatinerFluid", function() { return conatinerFluid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boxShadow", function() { return boxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "card", function() { return card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultFont", function() { return defaultFont; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primaryColor", function() { return primaryColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warningColor", function() { return warningColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dangerColor", function() { return dangerColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successColor", function() { return successColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoColor", function() { return infoColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roseColor", function() { return roseColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grayColor", function() { return grayColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primaryBoxShadow", function() { return primaryBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoBoxShadow", function() { return infoBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successBoxShadow", function() { return successBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warningBoxShadow", function() { return warningBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dangerBoxShadow", function() { return dangerBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roseBoxShadow", function() { return roseBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warningCardHeader", function() { return warningCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successCardHeader", function() { return successCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dangerCardHeader", function() { return dangerCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoCardHeader", function() { return infoCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primaryCardHeader", function() { return primaryCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roseCardHeader", function() { return roseCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardActions", function() { return cardActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardHeader", function() { return cardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultBoxShadow", function() { return defaultBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "title", function() { return title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardTitle", function() { return cardTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardLink", function() { return cardLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardSubtitle", function() { return cardSubtitle; });
/* harmony import */ var _Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");


/*!

 =========================================================
 * Material Kit React - v1.8.0 based on Material Kit - v2.0.2
 =========================================================

 * Product Page: https://www.creative-tim.com/product/material-kit-react
 * Copyright 2019 Creative Tim (https://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/material-kit-react/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
// ##############################
// // // Variables - Styles that are used on more than one component
// #############################
var drawerWidth = 260;
var transition = {
  transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
};
var conatinerFluid = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto",
  width: "100%"
};

var container = Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, conatinerFluid, {
  "@media (min-width: 576px)": {
    maxWidth: "540px"
  },
  "@media (min-width: 768px)": {
    maxWidth: "720px"
  },
  "@media (min-width: 992px)": {
    maxWidth: "960px"
  },
  "@media (min-width: 1200px)": {
    maxWidth: "1140px"
  }
});

var boxShadow = {
  boxShadow: "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
};
var card = {
  display: "inline-block",
  position: "relative",
  width: "100%",
  margin: "25px 0",
  boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
  borderRadius: "3px",
  color: "rgba(0, 0, 0, 0.87)",
  background: "#fff"
};
var defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: "300",
  lineHeight: "1.5em"
};
var primaryColor = "#9c27b0";
var warningColor = "#ff9800";
var dangerColor = "#f44336";
var successColor = "#4caf50";
var infoColor = "#00acc1";
var roseColor = "#e91e63";
var grayColor = "#999999";
var primaryBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)"
};
var infoBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)"
};
var successBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)"
};
var warningBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)"
};
var dangerBoxShadow = {
  boxShadow: "0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)"
};
var roseBoxShadow = {
  boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4)"
};

var warningCardHeader = Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
  color: "#fff",
  background: "linear-gradient(60deg, #ffa726, #fb8c00)"
}, warningBoxShadow);

var successCardHeader = Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
  color: "#fff",
  background: "linear-gradient(60deg, #66bb6a, #43a047)"
}, successBoxShadow);

var dangerCardHeader = Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
  color: "#fff",
  background: "linear-gradient(60deg, #ef5350, #e53935)"
}, dangerBoxShadow);

var infoCardHeader = Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
  color: "#fff",
  background: "linear-gradient(60deg, #26c6da, #00acc1)"
}, infoBoxShadow);

var primaryCardHeader = Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
  color: "#fff",
  background: "linear-gradient(60deg, #ab47bc, #8e24aa)"
}, primaryBoxShadow);

var roseCardHeader = Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
  color: "#fff",
  background: "linear-gradient(60deg, #ec407a, #d81b60)"
}, roseBoxShadow);

var cardActions = Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
  margin: "0 20px 10px",
  paddingTop: "10px",
  borderTop: "1px solid #eeeeee",
  height: "auto"
}, defaultFont);

var cardHeader = {
  margin: "-30px 15px 0",
  borderRadius: "3px",
  padding: "15px"
};
var defaultBoxShadow = {
  border: "0",
  borderRadius: "3px",
  boxShadow: "0 10px 20px -12px rgba(0, 0, 0, 0.42), 0 3px 20px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  padding: "10px 0",
  transition: "all 150ms ease 0s"
};
var title = {
  color: "#3C4858",
  margin: "1.75rem 0 0.875rem",
  textDecoration: "none",
  fontWeight: "700",
  fontFamily: "\"Roboto Slab\", \"Times New Roman\", serif"
};

var cardTitle = Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, title, {
  marginTop: ".625rem"
});

var cardLink = {
  "& + $cardLink": {
    marginLeft: "1.25rem"
  }
};
var cardSubtitle = {
  marginBottom: "0",
  marginTop: "-.375rem"
};


/***/ }),

/***/ "./src/assets/jss/material-kit-react/components/badgeStyle.js":
/*!********************************************************************!*\
  !*** ./src/assets/jss/material-kit-react/components/badgeStyle.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/jss/material-kit-react.js */ "./src/assets/jss/material-kit-react.js");

var badgeStyle = {
  badge: {
    marginRight: "3px",
    borderRadius: "12px",
    padding: "5px 12px",
    textTransform: "uppercase",
    fontSize: "10px",
    fontWeight: "500",
    lineHeight: "1",
    color: "#fff",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "baseline",
    display: "inline-block"
  },
  primary: {
    backgroundColor: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"]
  },
  warning: {
    backgroundColor: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"]
  },
  danger: {
    backgroundColor: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"]
  },
  success: {
    backgroundColor: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["successColor"]
  },
  info: {
    backgroundColor: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"]
  },
  rose: {
    backgroundColor: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"]
  },
  gray: {
    backgroundColor: "#6c757d"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (badgeStyle);

/***/ }),

/***/ "./src/assets/jss/material-kit-react/components/buttonStyle.js":
/*!*********************************************************************!*\
  !*** ./src/assets/jss/material-kit-react/components/buttonStyle.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/jss/material-kit-react.js */ "./src/assets/jss/material-kit-react.js");

var buttonStyle = {
  button: {
    minHeight: "auto",
    minWidth: "auto",
    backgroundColor: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"],
    color: "#FFFFFF",
    boxShadow: "0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12)",
    border: "none",
    borderRadius: "3px",
    position: "relative",
    padding: "12px 30px",
    margin: ".3125rem 1px",
    fontSize: "12px",
    fontWeight: "400",
    textTransform: "uppercase",
    letterSpacing: "0",
    willChange: "box-shadow, transform",
    transition: "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    lineHeight: "1.42857143",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    touchAction: "manipulation",
    cursor: "pointer",
    "&:hover,&:focus": {
      color: "#FFFFFF",
      backgroundColor: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"],
      boxShadow: "0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      position: "relative",
      display: "inline-block",
      top: "0",
      fontSize: "1.1rem",
      marginRight: "4px",
      verticalAlign: "middle"
    },
    "& svg": {
      position: "relative",
      display: "inline-block",
      top: "0",
      width: "18px",
      height: "18px",
      marginRight: "4px",
      verticalAlign: "middle"
    },
    "&$justIcon": {
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        marginRight: "0px",
        position: "absolute",
        width: "100%",
        transform: "none",
        left: "0px",
        top: "0px",
        height: "100%",
        lineHeight: "41px",
        fontSize: "20px"
      }
    }
  },
  fullWidth: {
    width: "100%"
  },
  primary: {
    backgroundColor: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"],
    boxShadow: "0 2px 2px 0 rgba(156, 39, 176, 0.14), 0 3px 1px -2px rgba(156, 39, 176, 0.2), 0 1px 5px 0 rgba(156, 39, 176, 0.12)",
    "&:hover,&:focus": {
      backgroundColor: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"],
      boxShadow: "0 14px 26px -12px rgba(156, 39, 176, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(156, 39, 176, 0.2)"
    }
  },
  info: {
    backgroundColor: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"],
    boxShadow: "0 2px 2px 0 rgba(0, 188, 212, 0.14), 0 3px 1px -2px rgba(0, 188, 212, 0.2), 0 1px 5px 0 rgba(0, 188, 212, 0.12)",
    "&:hover,&:focus": {
      backgroundColor: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"],
      boxShadow: "0 14px 26px -12px rgba(0, 188, 212, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 188, 212, 0.2)"
    }
  },
  success: {
    backgroundColor: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["successColor"],
    boxShadow: "0 2px 2px 0 rgba(76, 175, 80, 0.14), 0 3px 1px -2px rgba(76, 175, 80, 0.2), 0 1px 5px 0 rgba(76, 175, 80, 0.12)",
    "&:hover,&:focus": {
      backgroundColor: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["successColor"],
      boxShadow: "0 14px 26px -12px rgba(76, 175, 80, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(76, 175, 80, 0.2)"
    }
  },
  warning: {
    backgroundColor: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"],
    boxShadow: "0 2px 2px 0 rgba(255, 152, 0, 0.14), 0 3px 1px -2px rgba(255, 152, 0, 0.2), 0 1px 5px 0 rgba(255, 152, 0, 0.12)",
    "&:hover,&:focus": {
      backgroundColor: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"],
      boxShadow: "0 14px 26px -12px rgba(255, 152, 0, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(255, 152, 0, 0.2)"
    }
  },
  danger: {
    backgroundColor: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"],
    boxShadow: "0 2px 2px 0 rgba(244, 67, 54, 0.14), 0 3px 1px -2px rgba(244, 67, 54, 0.2), 0 1px 5px 0 rgba(244, 67, 54, 0.12)",
    "&:hover,&:focus": {
      backgroundColor: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"],
      boxShadow: "0 14px 26px -12px rgba(244, 67, 54, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(244, 67, 54, 0.2)"
    }
  },
  rose: {
    backgroundColor: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"],
    boxShadow: "0 2px 2px 0 rgba(233, 30, 99, 0.14), 0 3px 1px -2px rgba(233, 30, 99, 0.2), 0 1px 5px 0 rgba(233, 30, 99, 0.12)",
    "&:hover,&:focus": {
      backgroundColor: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"],
      boxShadow: "0 14px 26px -12px rgba(233, 30, 99, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(233, 30, 99, 0.2)"
    }
  },
  white: {
    "&,&:focus,&:hover,&:visited": {
      backgroundColor: "#FFFFFF",
      color: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"]
    }
  },
  twitter: {
    backgroundColor: "#55acee",
    color: "#fff",
    boxShadow: "0 2px 2px 0 rgba(85, 172, 238, 0.14), 0 3px 1px -2px rgba(85, 172, 238, 0.2), 0 1px 5px 0 rgba(85, 172, 238, 0.12)",
    "&:hover,&:focus,&:visited": {
      backgroundColor: "#55acee",
      color: "#fff",
      boxShadow: "0 14px 26px -12px rgba(85, 172, 238, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(85, 172, 238, 0.2)"
    }
  },
  facebook: {
    backgroundColor: "#3b5998",
    color: "#fff",
    boxShadow: "0 2px 2px 0 rgba(59, 89, 152, 0.14), 0 3px 1px -2px rgba(59, 89, 152, 0.2), 0 1px 5px 0 rgba(59, 89, 152, 0.12)",
    "&:hover,&:focus": {
      backgroundColor: "#3b5998",
      color: "#fff",
      boxShadow: "0 14px 26px -12px rgba(59, 89, 152, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(59, 89, 152, 0.2)"
    }
  },
  google: {
    backgroundColor: "#dd4b39",
    color: "#fff",
    boxShadow: "0 2px 2px 0 rgba(221, 75, 57, 0.14), 0 3px 1px -2px rgba(221, 75, 57, 0.2), 0 1px 5px 0 rgba(221, 75, 57, 0.12)",
    "&:hover,&:focus": {
      backgroundColor: "#dd4b39",
      color: "#fff",
      boxShadow: "0 14px 26px -12px rgba(221, 75, 57, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(221, 75, 57, 0.2)"
    }
  },
  github: {
    backgroundColor: "#333333",
    color: "#fff",
    boxShadow: "0 2px 2px 0 rgba(51, 51, 51, 0.14), 0 3px 1px -2px rgba(51, 51, 51, 0.2), 0 1px 5px 0 rgba(51, 51, 51, 0.12)",
    "&:hover,&:focus": {
      backgroundColor: "#333333",
      color: "#fff",
      boxShadow: "0 14px 26px -12px rgba(51, 51, 51, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(51, 51, 51, 0.2)"
    }
  },
  simple: {
    "&,&:focus,&:hover,&:visited": {
      color: "#FFFFFF",
      background: "transparent",
      boxShadow: "none"
    },
    "&$primary": {
      "&,&:focus,&:hover,&:visited": {
        color: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"]
      }
    },
    "&$info": {
      "&,&:focus,&:hover,&:visited": {
        color: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"]
      }
    },
    "&$success": {
      "&,&:focus,&:hover,&:visited": {
        color: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["successColor"]
      }
    },
    "&$warning": {
      "&,&:focus,&:hover,&:visited": {
        color: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"]
      }
    },
    "&$rose": {
      "&,&:focus,&:hover,&:visited": {
        color: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"]
      }
    },
    "&$danger": {
      "&,&:focus,&:hover,&:visited": {
        color: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"]
      }
    },
    "&$twitter": {
      "&,&:focus,&:hover,&:visited": {
        color: "#55acee"
      }
    },
    "&$facebook": {
      "&,&:focus,&:hover,&:visited": {
        color: "#3b5998"
      }
    },
    "&$google": {
      "&,&:focus,&:hover,&:visited": {
        color: "#dd4b39"
      }
    },
    "&$github": {
      "&,&:focus,&:hover,&:visited": {
        color: "#333333"
      }
    }
  },
  transparent: {
    "&,&:focus,&:hover,&:visited": {
      color: "inherit",
      background: "transparent",
      boxShadow: "none"
    }
  },
  disabled: {
    opacity: "0.65",
    pointerEvents: "none"
  },
  lg: {
    padding: "1.125rem 2.25rem",
    fontSize: "0.875rem",
    lineHeight: "1.333333",
    borderRadius: "0.2rem"
  },
  sm: {
    padding: "0.40625rem 1.25rem",
    fontSize: "0.6875rem",
    lineHeight: "1.5",
    borderRadius: "0.2rem"
  },
  round: {
    borderRadius: "30px"
  },
  block: {
    width: "100% !important"
  },
  link: {
    "&,&:hover,&:focus": {
      backgroundColor: "transparent",
      color: "#999999",
      boxShadow: "none"
    }
  },
  justIcon: {
    paddingLeft: "12px",
    paddingRight: "12px",
    fontSize: "20px",
    height: "41px",
    minWidth: "41px",
    width: "41px",
    "& .fab,& .fas,& .far,& .fal,& svg,& .material-icons": {
      marginRight: "0px"
    },
    "&$lg": {
      height: "57px",
      minWidth: "57px",
      width: "57px",
      lineHeight: "56px",
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        fontSize: "32px",
        lineHeight: "56px"
      },
      "& svg": {
        width: "32px",
        height: "32px"
      }
    },
    "&$sm": {
      height: "30px",
      minWidth: "30px",
      width: "30px",
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        fontSize: "17px",
        lineHeight: "29px"
      },
      "& svg": {
        width: "17px",
        height: "17px"
      }
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (buttonStyle);

/***/ }),

/***/ "./src/assets/jss/material-kit-react/components/cardBodyStyle.js":
/*!***********************************************************************!*\
  !*** ./src/assets/jss/material-kit-react/components/cardBodyStyle.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var cardBodyStyle = {
  cardBody: {
    padding: "0.9375rem 1.875rem",
    flex: "1 1 auto"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (cardBodyStyle);

/***/ }),

/***/ "./src/assets/jss/material-kit-react/components/cardFooterStyle.js":
/*!*************************************************************************!*\
  !*** ./src/assets/jss/material-kit-react/components/cardFooterStyle.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var cardFooterStyle = {
  cardFooter: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "transparent",
    padding: "0.9375rem 1.875rem"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (cardFooterStyle);

/***/ }),

/***/ "./src/assets/jss/material-kit-react/components/cardHeaderStyle.js":
/*!*************************************************************************!*\
  !*** ./src/assets/jss/material-kit-react/components/cardHeaderStyle.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/jss/material-kit-react.js */ "./src/assets/jss/material-kit-react.js");

var cardHeaderStyle = {
  cardHeader: {
    borderRadius: "3px",
    padding: "1rem 15px",
    marginLeft: "15px",
    marginRight: "15px",
    marginTop: "-30px",
    border: "0",
    marginBottom: "0"
  },
  cardHeaderPlain: {
    marginLeft: "0px",
    marginRight: "0px"
  },
  warningCardHeader: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["warningCardHeader"],
  successCardHeader: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["successCardHeader"],
  dangerCardHeader: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["dangerCardHeader"],
  infoCardHeader: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["infoCardHeader"],
  primaryCardHeader: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["primaryCardHeader"]
};
/* harmony default export */ __webpack_exports__["default"] = (cardHeaderStyle);

/***/ }),

/***/ "./src/assets/jss/material-kit-react/components/cardStyle.js":
/*!*******************************************************************!*\
  !*** ./src/assets/jss/material-kit-react/components/cardStyle.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var cardStyle = {
  card: {
    border: "0",
    marginBottom: "30px",
    marginTop: "30px",
    borderRadius: "6px",
    color: "rgba(0, 0, 0, 0.87)",
    background: "#fff",
    width: "100%",
    boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
    fontSize: ".875rem",
    transition: "all 300ms linear"
  },
  cardPlain: {
    background: "transparent",
    boxShadow: "none"
  },
  cardCarousel: {
    overflow: "hidden"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (cardStyle);

/***/ }),

/***/ "./src/assets/jss/material-kit-react/components/customDropdownStyle.js":
/*!*****************************************************************************!*\
  !*** ./src/assets/jss/material-kit-react/components/customDropdownStyle.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/jss/material-kit-react.js */ "./src/assets/jss/material-kit-react.js");




var customDropdownStyle = function customDropdownStyle(theme) {
  return {
    popperClose: {
      pointerEvents: "none"
    },
    dropdown: {
      borderRadius: "3px",
      border: "0",
      boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.26)",
      top: "100%",
      zIndex: "1000",
      minWidth: "160px",
      padding: "5px 0",
      margin: "2px 0 0",
      fontSize: "14px",
      textAlign: "left",
      listStyle: "none",
      backgroundColor: "#fff",
      backgroundClip: "padding-box"
    },
    menuList: {
      padding: "0"
    },
    popperResponsive: Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      zIndex: "1200"
    }, theme.breakpoints.down("sm"), {
      zIndex: "1640",
      position: "static",
      "float": "none",
      width: "auto",
      marginTop: "0",
      backgroundColor: "transparent",
      border: "0",
      boxShadow: "none",
      color: "black"
    }),
    dropdownItem: Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_2__["defaultFont"], {
      fontSize: "13px",
      padding: "10px 20px",
      margin: "0 5px",
      borderRadius: "2px",
      position: "relative",
      transition: "all 150ms linear",
      display: "block",
      clear: "both",
      fontWeight: "400",
      height: "fit-content",
      color: "#333",
      whiteSpace: "nowrap",
      minHeight: "unset"
    }),
    blackHover: {
      "&:hover": {
        boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(33, 33, 33, 0.4)",
        backgroundColor: "#212121",
        color: "#fff"
      }
    },
    primaryHover: {
      "&:hover": Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
        backgroundColor: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_2__["primaryColor"],
        color: "#FFFFFF"
      }, assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_2__["primaryBoxShadow"])
    },
    infoHover: {
      "&:hover": Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
        backgroundColor: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_2__["infoColor"],
        color: "#FFFFFF"
      }, assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_2__["infoBoxShadow"])
    },
    successHover: {
      "&:hover": Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
        backgroundColor: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_2__["successColor"],
        color: "#FFFFFF"
      }, assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_2__["successBoxShadow"])
    },
    warningHover: {
      "&:hover": Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
        backgroundColor: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_2__["warningColor"],
        color: "#FFFFFF"
      }, assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_2__["warningBoxShadow"])
    },
    dangerHover: {
      "&:hover": Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
        backgroundColor: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_2__["dangerColor"],
        color: "#FFFFFF"
      }, assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_2__["dangerBoxShadow"])
    },
    roseHover: {
      "&:hover": Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
        backgroundColor: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_2__["roseColor"],
        color: "#FFFFFF"
      }, assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_2__["roseBoxShadow"])
    },
    dropdownItemRTL: {
      textAlign: "right"
    },
    dropdownDividerItem: {
      margin: "5px 0",
      backgroundColor: "rgba(0, 0, 0, 0.12)",
      height: "1px",
      overflow: "hidden"
    },
    buttonIcon: {
      width: "20px",
      height: "20px"
    },
    caret: {
      transition: "all 150ms ease-in",
      display: "inline-block",
      width: "0",
      height: "0",
      marginLeft: "4px",
      verticalAlign: "middle",
      borderTop: "4px solid",
      borderRight: "4px solid transparent",
      borderLeft: "4px solid transparent"
    },
    caretActive: {
      transform: "rotate(180deg)"
    },
    caretRTL: {
      marginRight: "4px"
    },
    dropdownHeader: {
      display: "block",
      padding: "0.1875rem 1.25rem",
      fontSize: "0.75rem",
      lineHeight: "1.428571",
      color: "#777",
      whiteSpace: "nowrap",
      fontWeight: "inherit",
      marginTop: "10px",
      minHeight: "unset",
      "&:hover,&:focus": {
        backgroundColor: "transparent",
        cursor: "auto"
      }
    },
    noLiPadding: {
      padding: "0"
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (customDropdownStyle);

/***/ }),

/***/ "./src/assets/jss/material-kit-react/components/customInputStyle.js":
/*!**************************************************************************!*\
  !*** ./src/assets/jss/material-kit-react/components/customInputStyle.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/jss/material-kit-react.js */ "./src/assets/jss/material-kit-react.js");


var customInputStyle = {
  disabled: {
    "&:before": {
      borderColor: "transparent !important"
    }
  },
  underline: {
    "&:hover:not($disabled):before,&:before": {
      borderColor: "#D2D2D2 !important",
      borderWidth: "1px !important"
    },
    "&:after": {
      borderColor: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__["primaryColor"]
    }
  },
  underlineError: {
    "&:after": {
      borderColor: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__["dangerColor"]
    }
  },
  underlineSuccess: {
    "&:after": {
      borderColor: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__["successColor"]
    }
  },
  whiteUnderline: {
    "&:hover:not($disabled):before,&:before": {
      borderColor: "#FFFFFF"
    },
    "&:after": {
      borderColor: "#FFFFFF"
    }
  },
  labelRoot: Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__["defaultFont"], {
    color: "#AAAAAA !important",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "1.42857",
    top: "10px",
    letterSpacing: "unset",
    "& + $underline": {
      marginTop: "0px"
    }
  }),
  labelRootError: {
    color: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__["dangerColor"] + " !important"
  },
  labelRootSuccess: {
    color: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__["successColor"] + " !important"
  },
  formControl: {
    margin: "0 0 17px 0",
    paddingTop: "27px",
    position: "relative",
    "& svg,& .fab,& .far,& .fal,& .fas,& .material-icons": {
      color: "#495057"
    }
  },
  input: {
    color: "#495057",
    height: "unset",
    "&,&::placeholder": {
      fontSize: "14px",
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: "400",
      lineHeight: "1.42857",
      opacity: "1"
    },
    "&::placeholder": {
      color: "#AAAAAA"
    }
  },
  whiteInput: {
    "&,&::placeholder": {
      color: "#FFFFFF",
      opacity: "1"
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (customInputStyle);

/***/ }),

/***/ "./src/assets/jss/material-kit-react/components/customLinearProgressStyle.js":
/*!***********************************************************************************!*\
  !*** ./src/assets/jss/material-kit-react/components/customLinearProgressStyle.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/jss/material-kit-react.js */ "./src/assets/jss/material-kit-react.js");

var customLinearProgressStyle = {
  root: {
    height: "4px",
    marginBottom: "20px",
    overflow: "hidden"
  },
  bar: {
    height: "4px"
  },
  primary: {
    backgroundColor: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"]
  },
  warning: {
    backgroundColor: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"]
  },
  danger: {
    backgroundColor: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"]
  },
  success: {
    backgroundColor: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["successColor"]
  },
  info: {
    backgroundColor: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"]
  },
  rose: {
    backgroundColor: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"]
  },
  gray: {
    backgroundColor: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"]
  },
  primaryBackground: {
    background: "rgba(156, 39, 176, 0.2)"
  },
  warningBackground: {
    background: "rgba(255, 152, 0, 0.2)"
  },
  dangerBackground: {
    background: "rgba(244, 67, 54, 0.2)"
  },
  successBackground: {
    background: "rgba(76, 175, 80, 0.2)"
  },
  infoBackground: {
    background: "rgba(0, 188, 212, 0.2)"
  },
  roseBackground: {
    background: "rgba(233, 30, 99, 0.2)"
  },
  grayBackground: {
    background: "rgba(221, 221, 221, 0.2)"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (customLinearProgressStyle);

/***/ }),

/***/ "./src/assets/jss/material-kit-react/components/customTabsStyle.js":
/*!*************************************************************************!*\
  !*** ./src/assets/jss/material-kit-react/components/customTabsStyle.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var customTabsStyle = {
  cardTitle: {
    "float": "left",
    padding: "10px 10px 10px 0px",
    lineHeight: "24px"
  },
  cardTitleRTL: {
    "float": "right",
    padding: "10px 0px 10px 10px !important"
  },
  displayNone: {
    display: "none !important"
  },
  tabsRoot: {
    minHeight: "unset !important"
  },
  tabRootButton: {
    minHeight: "unset !important",
    minWidth: "unset !important",
    width: "unset !important",
    height: "unset !important",
    maxWidth: "unset !important",
    maxHeight: "unset !important",
    padding: "10px 15px",
    borderRadius: "3px",
    lineHeight: "24px",
    border: "0 !important",
    color: "#fff !important",
    marginLeft: "4px",
    fontWeight: "500",
    fontSize: "12px",
    "&:last-child": {
      marginLeft: "0px"
    }
  },
  tabSelected: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    transition: "0.2s background-color 0.1s"
  },
  tabWrapper: {
    display: "inline-block",
    minHeight: "unset !important",
    minWidth: "unset !important",
    width: "unset !important",
    height: "unset !important",
    maxWidth: "unset !important",
    maxHeight: "unset !important",
    "& > svg": {
      verticalAlign: "middle",
      margin: "-1.55px 5px 0 0 !important"
    },
    "&,& *": {
      letterSpacing: "normal !important"
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (customTabsStyle);

/***/ }),

/***/ "./src/assets/jss/material-kit-react/components/footerStyle.js":
/*!*********************************************************************!*\
  !*** ./src/assets/jss/material-kit-react/components/footerStyle.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/jss/material-kit-react.js */ "./src/assets/jss/material-kit-react.js");

var footerStyle = {
  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block"
  },
  left: {
    "float": "left!important",
    display: "block"
  },
  right: {
    padding: "15px 0",
    margin: "0",
    "float": "right!important"
  },
  footer: {
    padding: "0.9375rem 0",
    textAlign: "center",
    display: "flex",
    zIndex: "2",
    position: "relative"
  },
  a: {
    color: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"],
    textDecoration: "none",
    backgroundColor: "transparent"
  },
  footerWhiteFont: {
    "&,&:hover,&:focus": {
      color: "#FFFFFF"
    }
  },
  container: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["container"],
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  icon: {
    width: "18px",
    height: "18px",
    position: "relative",
    top: "3px"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (footerStyle);

/***/ }),

/***/ "./src/assets/jss/material-kit-react/components/headerLinksStyle.js":
/*!**************************************************************************!*\
  !*** ./src/assets/jss/material-kit-react/components/headerLinksStyle.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/jss/material-kit-react.js */ "./src/assets/jss/material-kit-react.js");
/* harmony import */ var assets_jss_material_kit_react_tooltipsStyle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/jss/material-kit-react/tooltipsStyle.js */ "./src/assets/jss/material-kit-react/tooltipsStyle.js");





var headerLinksStyle = function headerLinksStyle(theme) {
  return Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({
    list: Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_2__["defaultFont"], {
      fontSize: "14px",
      margin: 0,
      paddingLeft: "0",
      listStyle: "none",
      paddingTop: "0",
      paddingBottom: "0",
      color: "inherit"
    }),
    listItem: Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      "float": "left",
      color: "inherit",
      position: "relative",
      display: "block",
      width: "auto",
      margin: "0",
      padding: "0"
    }, theme.breakpoints.down("sm"), {
      width: "100%",
      "&:after": {
        width: "calc(100% - 30px)",
        content: '""',
        display: "block",
        height: "1px",
        marginLeft: "15px",
        backgroundColor: "#e5e5e5"
      }
    }),
    listItemText: {
      padding: "0 !important"
    },
    navLink: Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      color: "inherit",
      position: "relative",
      padding: "0.9375rem",
      fontWeight: "400",
      fontSize: "12px",
      textTransform: "uppercase",
      borderRadius: "3px",
      lineHeight: "20px",
      textDecoration: "none",
      margin: "0px",
      display: "inline-flex",
      "&:hover,&:focus": {
        color: "inherit",
        background: "rgba(200, 200, 200, 0.2)"
      }
    }, theme.breakpoints.down("sm"), {
      width: "calc(100% - 30px)",
      marginLeft: "15px",
      marginBottom: "8px",
      marginTop: "8px",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "flex-start"
      }
    }),
    notificationNavLink: {
      color: "inherit",
      padding: "0.9375rem",
      fontWeight: "400",
      fontSize: "12px",
      textTransform: "uppercase",
      lineHeight: "20px",
      textDecoration: "none",
      margin: "0px",
      display: "inline-flex",
      top: "4px"
    },
    registerNavLink: {
      top: "3px",
      position: "relative",
      fontWeight: "400",
      fontSize: "12px",
      textTransform: "uppercase",
      lineHeight: "20px",
      textDecoration: "none",
      margin: "0px",
      display: "inline-flex"
    },
    navLinkActive: {
      color: "inherit",
      backgroundColor: "rgba(255, 255, 255, 0.1)"
    },
    icons: {
      width: "20px",
      height: "20px",
      marginRight: "3px"
    },
    socialIcons: {
      position: "relative",
      fontSize: "20px !important",
      marginRight: "4px"
    },
    dropdownLink: {
      "&,&:hover,&:focus": {
        color: "inherit",
        textDecoration: "none",
        display: "block",
        padding: "10px 20px"
      }
    }
  }, assets_jss_material_kit_react_tooltipsStyle_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    marginRight5: {
      marginRight: "5px"
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (headerLinksStyle);

/***/ }),

/***/ "./src/assets/jss/material-kit-react/components/headerStyle.js":
/*!*********************************************************************!*\
  !*** ./src/assets/jss/material-kit-react/components/headerStyle.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/jss/material-kit-react.js */ "./src/assets/jss/material-kit-react.js");


var headerStyle = {
  appBar: {
    display: "flex",
    border: "0",
    borderRadius: "3px",
    padding: "0.625rem 0",
    marginBottom: "20px",
    color: "#555",
    width: "100%",
    backgroundColor: "#fff",
    boxShadow: "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)",
    transition: "all 150ms ease 0s",
    alignItems: "center",
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
    position: "relative",
    zIndex: "unset"
  },
  absolute: {
    position: "absolute",
    zIndex: "1100"
  },
  fixed: {
    position: "fixed",
    zIndex: "1100"
  },
  container: Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__["container"], {
    minHeight: "50px",
    flex: "1",
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    flexWrap: "nowrap"
  }),
  flex: {
    flex: 1
  },
  title: Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__["defaultFont"], {
    lineHeight: "30px",
    fontSize: "18px",
    borderRadius: "3px",
    textTransform: "none",
    color: "inherit",
    padding: "8px 16px",
    letterSpacing: "unset",
    "&:hover,&:focus": {
      color: "inherit",
      background: "transparent"
    }
  }),
  appResponsive: {
    margin: "20px 10px"
  },
  primary: {
    backgroundColor: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__["primaryColor"],
    color: "#FFFFFF",
    boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(156, 39, 176, 0.46)"
  },
  info: {
    backgroundColor: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__["infoColor"],
    color: "#FFFFFF",
    boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(0, 188, 212, 0.46)"
  },
  success: {
    backgroundColor: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__["successColor"],
    color: "#FFFFFF",
    boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(76, 175, 80, 0.46)"
  },
  warning: {
    backgroundColor: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__["warningColor"],
    color: "#FFFFFF",
    boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(255, 152, 0, 0.46)"
  },
  danger: {
    backgroundColor: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__["dangerColor"],
    color: "#FFFFFF",
    boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(244, 67, 54, 0.46)"
  },
  rose: {
    backgroundColor: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__["roseColor"],
    color: "#FFFFFF",
    boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(233, 30, 99, 0.46)"
  },
  transparent: {
    backgroundColor: "transparent !important",
    boxShadow: "none",
    paddingTop: "25px",
    color: "#FFFFFF"
  },
  dark: {
    color: "#FFFFFF",
    backgroundColor: "#212121 !important",
    boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(33, 33, 33, 0.46)"
  },
  white: {
    border: "0",
    padding: "0.625rem 0",
    marginBottom: "20px",
    color: "#555",
    backgroundColor: "#fff !important",
    boxShadow: "0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)"
  },
  drawerPaper: Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
    border: "none",
    bottom: "0",
    transitionProperty: "top, bottom, width",
    transitionDuration: ".2s, .2s, .35s",
    transitionTimingFunction: "linear, linear, ease",
    width: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__["drawerWidth"]
  }, assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__["boxShadow"], {
    position: "fixed",
    display: "block",
    top: "0",
    height: "100vh",
    right: "0",
    left: "auto",
    visibility: "visible",
    overflowY: "visible",
    borderTop: "none",
    textAlign: "left",
    paddingRight: "0px",
    paddingLeft: "0"
  }, assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__["transition"])
};
/* harmony default export */ __webpack_exports__["default"] = (headerStyle);

/***/ }),

/***/ "./src/assets/jss/material-kit-react/components/infoStyle.js":
/*!*******************************************************************!*\
  !*** ./src/assets/jss/material-kit-react/components/infoStyle.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/jss/material-kit-react.js */ "./src/assets/jss/material-kit-react.js");

var infoStyle = {
  infoArea: {
    maxWidth: "360px",
    margin: "0 auto",
    padding: "0px"
  },
  iconWrapper: {
    "float": "left",
    marginTop: "24px",
    marginRight: "10px"
  },
  primary: {
    color: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"]
  },
  warning: {
    color: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"]
  },
  danger: {
    color: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"]
  },
  success: {
    color: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["successColor"]
  },
  info: {
    color: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"]
  },
  rose: {
    color: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"]
  },
  gray: {
    color: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"]
  },
  icon: {
    width: "36px",
    height: "36px"
  },
  descriptionWrapper: {
    color: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"],
    overflow: "hidden"
  },
  title: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["title"],
  description: {
    color: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"],
    overflow: "hidden",
    marginTop: "0px",
    fontSize: "14px"
  },
  iconWrapperVertical: {
    "float": "none"
  },
  iconVertical: {
    width: "61px",
    height: "61px"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (infoStyle);

/***/ }),

/***/ "./src/assets/jss/material-kit-react/components/navPillsStyle.js":
/*!***********************************************************************!*\
  !*** ./src/assets/jss/material-kit-react/components/navPillsStyle.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/jss/material-kit-react.js */ "./src/assets/jss/material-kit-react.js");



var navPillsStyle = function navPillsStyle(theme) {
  return {
    root: {
      marginTop: "20px",
      paddingLeft: "0",
      marginBottom: "0",
      overflow: "visible !important",
      lineHeight: "24px",
      textTransform: "uppercase",
      fontSize: "12px",
      fontWeight: "500",
      position: "relative",
      display: "block",
      color: "inherit"
    },
    flexContainer: Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, theme.breakpoints.down("xs"), {
      display: "flex",
      flexWrap: "wrap"
    }),
    displayNone: {
      display: "none !important"
    },
    fixed: {
      overflow: "visible !important"
    },
    horizontalDisplay: {
      display: "block"
    },
    pills: {
      "float": "left",
      position: "relative",
      display: "block",
      borderRadius: "30px",
      minWidth: "100px",
      textAlign: "center",
      transition: "all .3s",
      padding: "10px 15px",
      color: "#555555",
      height: "auto",
      opacity: "1",
      maxWidth: "100%",
      margin: "0 5px"
    },
    pillsWithIcons: {
      borderRadius: "4px"
    },
    tabIcon: {
      width: "30px",
      height: "30px",
      display: "block",
      margin: "15px 0 !important",
      "&, & *": {
        letterSpacing: "normal !important"
      }
    },
    horizontalPills: {
      width: "100%",
      "float": "none !important",
      "& + button": {
        margin: "10px 0"
      }
    },
    contentWrapper: {
      marginTop: "20px"
    },
    primary: {
      "&,&:hover": {
        color: "#FFFFFF",
        backgroundColor: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__["primaryColor"],
        boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(156, 39, 176, 0.4)"
      }
    },
    info: {
      "&,&:hover": {
        color: "#FFFFFF",
        backgroundColor: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__["infoColor"],
        boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(76, 175, 80, 0.4)"
      }
    },
    success: {
      "&,&:hover": {
        color: "#FFFFFF",
        backgroundColor: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__["successColor"],
        boxShadow: "0 2px 2px 0 rgba(76, 175, 80, 0.14), 0 3px 1px -2px rgba(76, 175, 80, 0.2), 0 1px 5px 0 rgba(76, 175, 80, 0.12)"
      }
    },
    warning: {
      "&,&:hover": {
        color: "#FFFFFF",
        backgroundColor: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__["warningColor"],
        boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(255, 152, 0, 0.4)"
      }
    },
    danger: {
      "&,&:hover": {
        color: "#FFFFFF",
        backgroundColor: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__["dangerColor"],
        boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(255, 152, 0, 0.4)"
      }
    },
    rose: {
      "&,&:hover": {
        color: "#FFFFFF",
        backgroundColor: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__["roseColor"],
        boxShadow: "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4)"
      }
    },
    alignCenter: {
      alignItems: "center",
      justifyContent: "center"
    },
    tabWrapper: {
      color: "inherit",
      position: "relative",
      fontSize: "12px",
      lineHeight: "24px",
      fontWeight: "500",
      textTransform: "uppercase",
      "&,& *": {
        letterSpacing: "normal"
      }
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (navPillsStyle);

/***/ }),

/***/ "./src/assets/jss/material-kit-react/components/paginationStyle.js":
/*!*************************************************************************!*\
  !*** ./src/assets/jss/material-kit-react/components/paginationStyle.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/jss/material-kit-react.js */ "./src/assets/jss/material-kit-react.js");

var paginationStyle = {
  pagination: {
    display: "inline-block",
    paddingLeft: "0",
    margin: "0 0 20px 0",
    borderRadius: "4px"
  },
  paginationItem: {
    display: "inline"
  },
  paginationLink: {
    ":first-of-type": {
      marginleft: "0"
    },
    letterSpacing: "unset",
    border: "0",
    borderRadius: "30px !important",
    transition: "all .3s",
    padding: "0px 11px",
    margin: "0 3px",
    minWidth: "30px",
    height: "30px",
    minHeight: "auto",
    lineHeight: "30px",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    background: "transparent",
    position: "relative",
    "float": "left",
    textDecoration: "none",
    boxSizing: "border-box",
    "&,&:hover,&:focus": {
      color: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"]
    },
    "&:hover,&:focus": {
      zIndex: "3",
      backgroundColor: "#eee",
      borderColor: "#ddd"
    },
    "&:hover": {
      cursor: "pointer"
    }
  },
  primary: {
    "&,&:hover,&:focus": {
      backgroundColor: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"],
      borderColor: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"],
      color: "#FFFFFF",
      boxShadow: "0 4px 5px 0 rgba(156, 39, 176, 0.14), 0 1px 10px 0 rgba(156, 39, 176, 0.12), 0 2px 4px -1px rgba(156, 39, 176, 0.2)"
    },
    "&:hover,&:focus": {
      zIndex: "2",
      cursor: "default"
    }
  },
  info: {
    "&,&:hover,&:focus": {
      backgroundColor: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"],
      borderColor: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["infoColor"],
      color: "#FFFFFF",
      boxShadow: "0 4px 5px 0 rgba(0, 188, 212, 0.14), 0 1px 10px 0 rgba(0, 188, 212, 0.12), 0 2px 4px -1px rgba(0, 188, 212, 0.2)"
    },
    "&:hover,&:focus": {
      zIndex: "2",
      cursor: "default"
    }
  },
  success: {
    "&,&:hover,&:focus": {
      backgroundColor: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["successColor"],
      borderColor: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["successColor"],
      color: "#FFFFFF",
      boxShadow: "0 4px 5px 0 rgba(76, 175, 80, 0.14), 0 1px 10px 0 rgba(76, 175, 80, 0.12), 0 2px 4px -1px rgba(76, 175, 80, 0.2)"
    },
    "&:hover,&:focus": {
      zIndex: "2",
      cursor: "default"
    }
  },
  warning: {
    "&,&:hover,&:focus": {
      backgroundColor: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"],
      borderColor: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["warningColor"],
      color: "#FFFFFF",
      boxShadow: "0 4px 5px 0 rgba(255, 152, 0, 0.14), 0 1px 10px 0 rgba(255, 152, 0, 0.12), 0 2px 4px -1px rgba(255, 152, 0, 0.2)"
    },
    "&:hover,&:focus": {
      zIndex: "2",
      cursor: "default"
    }
  },
  danger: {
    "&,&:hover,&:focus": {
      backgroundColor: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"],
      borderColor: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"],
      color: "#FFFFFF",
      boxShadow: "0 4px 5px 0 rgba(244, 67, 54, 0.14), 0 1px 10px 0 rgba(244, 67, 54, 0.12), 0 2px 4px -1px rgba(244, 67, 54, 0.2)"
    },
    "&:hover,&:focus": {
      zIndex: "2",
      cursor: "default"
    }
  },
  disabled: {
    "&,&:hover,&:focus": {
      color: "#777",
      cursor: "not-allowed",
      backgroundColor: "#fff",
      borderColor: "#ddd"
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (paginationStyle);

/***/ }),

/***/ "./src/assets/jss/material-kit-react/components/parallaxStyle.js":
/*!***********************************************************************!*\
  !*** ./src/assets/jss/material-kit-react/components/parallaxStyle.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var parallaxStyle = {
  parallax: {
    height: "60vh",
    maxHeight: "1000px",
    overflow: "hidden",
    position: "relative",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    margin: "0",
    padding: "0",
    border: "0",
    display: "flex",
    alignItems: "center"
  },
  filter: {
    "&:before": {
      background: "rgba(0, 0, 0, 0.5)"
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  small: {
    height: "380px"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (parallaxStyle);

/***/ }),

/***/ "./src/assets/jss/material-kit-react/components/snackbarContentStyle.js":
/*!******************************************************************************!*\
  !*** ./src/assets/jss/material-kit-react/components/snackbarContentStyle.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/jss/material-kit-react.js */ "./src/assets/jss/material-kit-react.js");


var snackbarContentStyle = {
  root: Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__["defaultFont"], {
    position: "relative",
    padding: "20px 15px",
    lineHeight: "20px",
    marginBottom: "20px",
    fontSize: "14px",
    backgroundColor: "white",
    color: "#555555",
    borderRadius: "0px",
    maxWidth: "100%",
    minWidth: "auto",
    boxShadow: "0 12px 20px -10px rgba(255, 255, 255, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 255, 255, 0.2)"
  }),
  info: Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
    backgroundColor: "#00d3ee",
    color: "#ffffff"
  }, assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__["infoBoxShadow"]),
  success: Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
    backgroundColor: "#5cb860",
    color: "#ffffff"
  }, assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__["successBoxShadow"]),
  warning: Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
    backgroundColor: "#ffa21a",
    color: "#ffffff"
  }, assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__["warningBoxShadow"]),
  danger: Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
    backgroundColor: "#f55a4e",
    color: "#ffffff"
  }, assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__["dangerBoxShadow"]),
  primary: Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
    backgroundColor: "#af2cc5",
    color: "#ffffff"
  }, assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__["primaryBoxShadow"]),
  message: {
    padding: "0",
    display: "block",
    maxWidth: "89%",
    "&,& *": {
      letterSpacing: "normal"
    }
  },
  close: {
    width: "14px",
    height: "14px"
  },
  iconButton: {
    width: "24px",
    height: "24px",
    "float": "right",
    fontSize: "1.5rem",
    fontWeight: "500",
    lineHeight: "1",
    position: "absolute",
    right: "-4px",
    top: "0",
    padding: "0"
  },
  icon: {
    display: "block",
    "float": "left",
    marginRight: "1.071rem"
  },
  container: Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__["container"], {
    position: "relative"
  })
};
/* harmony default export */ __webpack_exports__["default"] = (snackbarContentStyle);

/***/ }),

/***/ "./src/assets/jss/material-kit-react/components/typographyStyle.js":
/*!*************************************************************************!*\
  !*** ./src/assets/jss/material-kit-react/components/typographyStyle.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/jss/material-kit-react.js */ "./src/assets/jss/material-kit-react.js");


var typographyStyle = {
  defaultFontStyle: Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__["defaultFont"], {
    fontSize: "14px"
  }),
  defaultHeaderMargins: {
    marginTop: "20px",
    marginBottom: "10px"
  },
  quote: {
    padding: "10px 20px",
    margin: "0 0 20px",
    fontSize: "17.5px",
    borderLeft: "5px solid #eee"
  },
  quoteText: {
    margin: "0 0 10px",
    fontStyle: "italic"
  },
  quoteAuthor: {
    display: "block",
    fontSize: "80%",
    lineHeight: "1.42857143",
    color: "#777"
  },
  mutedText: {
    color: "#777"
  },
  primaryText: {
    color: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__["primaryColor"]
  },
  infoText: {
    color: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__["infoColor"]
  },
  successText: {
    color: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__["successColor"]
  },
  warningText: {
    color: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__["warningColor"]
  },
  dangerText: {
    color: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__["dangerColor"]
  },
  smallText: {
    fontSize: "65%",
    fontWeight: "400",
    lineHeight: "1",
    color: "#777"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (typographyStyle);

/***/ }),

/***/ "./src/assets/jss/material-kit-react/customCheckboxRadioSwitch.js":
/*!************************************************************************!*\
  !*** ./src/assets/jss/material-kit-react/customCheckboxRadioSwitch.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/jss/material-kit-react.js */ "./src/assets/jss/material-kit-react.js");

var customCheckboxRadioSwitch = {
  checkRoot: {
    padding: "12px",
    "&:hover": {
      backgroundColor: "unset"
    }
  },
  radioRoot: {
    padding: "12px",
    "&:hover": {
      backgroundColor: "unset"
    }
  },
  labelRoot: {
    marginLeft: "-14px"
  },
  checkboxAndRadio: {
    position: "relative",
    display: "block",
    marginTop: "10px",
    marginBottom: "10px"
  },
  checkboxAndRadioHorizontal: {
    position: "relative",
    display: "block",
    "&:first-child": {
      marginTop: "10px"
    },
    "&:not(:first-child)": {
      marginTop: "-14px"
    },
    marginTop: "0",
    marginBottom: "0"
  },
  checked: {
    color: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"] + "!important"
  },
  checkedIcon: {
    width: "20px",
    height: "20px",
    border: "1px solid rgba(0, 0, 0, .54)",
    borderRadius: "3px"
  },
  uncheckedIcon: {
    width: "0px",
    height: "0px",
    padding: "9px",
    border: "1px solid rgba(0, 0, 0, .54)",
    borderRadius: "3px"
  },
  disabledCheckboxAndRadio: {
    opacity: "0.45"
  },
  label: {
    cursor: "pointer",
    paddingLeft: "0",
    color: "rgba(0, 0, 0, 0.26)",
    fontSize: "14px",
    lineHeight: "1.428571429",
    fontWeight: "400",
    display: "inline-flex",
    transition: "0.3s ease all",
    letterSpacing: "unset"
  },
  labelHorizontal: {
    color: "rgba(0, 0, 0, 0.26)",
    cursor: "pointer",
    display: "inline-flex",
    fontSize: "14px",
    lineHeight: "1.428571429",
    fontWeight: "400",
    paddingTop: "39px",
    marginRight: "0",
    "@media (min-width: 992px)": {
      "float": "right"
    }
  },
  labelHorizontalRadioCheckbox: {
    paddingTop: "22px"
  },
  labelLeftHorizontal: {
    color: "rgba(0, 0, 0, 0.26)",
    cursor: "pointer",
    display: "inline-flex",
    fontSize: "14px",
    lineHeight: "1.428571429",
    fontWeight: "400",
    paddingTop: "22px",
    marginRight: "0"
  },
  labelError: {
    color: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["dangerColor"]
  },
  radio: {
    color: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"] + "!important"
  },
  radioChecked: {
    width: "16px",
    height: "16px",
    border: "1px solid " + assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"],
    borderRadius: "50%"
  },
  radioUnchecked: {
    width: "0px",
    height: "0px",
    padding: "7px",
    border: "1px solid rgba(0, 0, 0, .54)",
    borderRadius: "50%"
  },
  inlineChecks: {
    marginTop: "8px"
  },
  iconCheckbox: {
    height: "116px",
    width: "116px",
    color: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["grayColor"],
    "& > span:first-child": {
      borderWidth: "4px",
      borderStyle: "solid",
      borderColor: "#CCCCCC",
      textAlign: "center",
      verticalAlign: "middle",
      borderRadius: "50%",
      color: "inherit",
      margin: "0 auto 20px",
      transition: "all 0.2s"
    },
    "&:hover": {
      color: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"],
      "& > span:first-child": {
        borderColor: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"]
      }
    }
  },
  iconCheckboxChecked: {
    color: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"],
    "& > span:first-child": {
      borderColor: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["roseColor"]
    }
  },
  iconCheckboxIcon: {
    fontSize: "40px",
    lineHeight: "111px"
  },
  switchBase: {
    color: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["primaryColor"] + "!important"
  },
  switchIcon: {
    boxShadow: "0 1px 3px 1px rgba(0, 0, 0, 0.4)",
    color: "#FFFFFF !important",
    border: "1px solid rgba(0, 0, 0, .54)"
  },
  switchBar: {
    width: "30px",
    height: "15px",
    backgroundColor: "rgb(80, 80, 80)",
    borderRadius: "15px",
    opacity: "0.7!important"
  },
  switchChecked: {
    "& + $switchBar": {
      backgroundColor: "rgba(156, 39, 176, 1) !important"
    },
    "& $switchIcon": {
      borderColor: "#9c27b0"
    }
  },
  switchRoot: {
    height: "48px"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (customCheckboxRadioSwitch);

/***/ }),

/***/ "./src/assets/jss/material-kit-react/imagesStyles.js":
/*!***********************************************************!*\
  !*** ./src/assets/jss/material-kit-react/imagesStyles.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var imagesStyles = {
  imgFluid: {
    maxWidth: "100%",
    height: "auto"
  },
  imgRounded: {
    borderRadius: "6px !important"
  },
  imgRoundedCircle: {
    borderRadius: "50% !important"
  },
  imgRaised: {
    boxShadow: "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  imgGallery: {
    width: "100%",
    marginBottom: "2.142rem"
  },
  imgCardTop: {
    width: "100%",
    borderTopLeftRadius: "calc(.25rem - 1px)",
    borderTopRightRadius: "calc(.25rem - 1px)"
  },
  imgCardBottom: {
    width: "100%",
    borderBottomLeftRadius: "calc(.25rem - 1px)",
    borderBottomRightRadius: "calc(.25rem - 1px)"
  },
  imgCard: {
    width: "100%",
    borderRadius: "calc(.25rem - 1px)"
  },
  imgCardOverlay: {
    position: "absolute",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    padding: "1.25rem"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (imagesStyles);

/***/ }),

/***/ "./src/assets/jss/material-kit-react/modalStyle.js":
/*!*********************************************************!*\
  !*** ./src/assets/jss/material-kit-react/modalStyle.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var modalStyle = {
  modal: {
    borderRadius: "6px"
  },
  modalHeader: {
    borderBottom: "none",
    paddingTop: "24px",
    paddingRight: "24px",
    paddingBottom: "0",
    paddingLeft: "24px",
    minHeight: "16.43px"
  },
  modalTitle: {
    margin: "0",
    lineHeight: "1.42857143"
  },
  modalCloseButton: {
    color: "#999999",
    marginTop: "-12px",
    WebkitAppearance: "none",
    padding: "0",
    cursor: "pointer",
    background: "0 0",
    border: "0",
    fontSize: "inherit",
    opacity: ".9",
    textShadow: "none",
    fontWeight: "700",
    lineHeight: "1",
    "float": "right"
  },
  modalClose: {
    width: "16px",
    height: "16px"
  },
  modalBody: {
    paddingTop: "24px",
    paddingRight: "24px",
    paddingBottom: "16px",
    paddingLeft: "24px",
    position: "relative"
  },
  modalFooter: {
    padding: "15px",
    textAlign: "right",
    paddingTop: "0",
    margin: "0"
  },
  modalFooterCenter: {
    marginLeft: "auto",
    marginRight: "auto"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (modalStyle);

/***/ }),

/***/ "./src/assets/jss/material-kit-react/popoverStyles.js":
/*!************************************************************!*\
  !*** ./src/assets/jss/material-kit-react/popoverStyles.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var popoverStyles = {
  popover: {
    padding: "0",
    boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    lineHeight: "1.5em",
    background: "#fff",
    border: "none",
    borderRadius: "3px",
    display: "block",
    maxWidth: "276px",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontStyle: "normal",
    fontWeight: "400",
    textAlign: "start",
    textDecoration: "none",
    textShadow: "none",
    textTransform: "none",
    letterSpacing: "normal",
    wordBreak: "normal",
    wordSpacing: "normal",
    whiteSpace: "normal",
    lineBreak: "auto",
    fontSize: "0.875rem",
    wordWrap: "break-word"
  },
  popoverBottom: {
    marginTop: "5px"
  },
  popoverHeader: {
    backgroundColor: "#fff",
    border: "none",
    padding: "15px 15px 5px",
    fontSize: "1.125rem",
    margin: "0",
    color: "#555",
    borderTopLeftRadius: "calc(0.3rem - 1px)",
    borderTopRightRadius: "calc(0.3rem - 1px)"
  },
  popoverBody: {
    padding: "10px 15px 15px",
    lineHeight: "1.4",
    color: "#555"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (popoverStyles);

/***/ }),

/***/ "./src/assets/jss/material-kit-react/tooltipsStyle.js":
/*!************************************************************!*\
  !*** ./src/assets/jss/material-kit-react/tooltipsStyle.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var tooltipsStyle = {
  tooltip: {
    padding: "10px 15px",
    minWidth: "130px",
    color: "#555555",
    lineHeight: "1.7em",
    background: "#FFFFFF",
    border: "none",
    borderRadius: "3px",
    boxShadow: "0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2)",
    maxWidth: "200px",
    textAlign: "center",
    fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
    fontSize: "0.875em",
    fontStyle: "normal",
    fontWeight: "400",
    textShadow: "none",
    textTransform: "none",
    letterSpacing: "normal",
    wordBreak: "normal",
    wordSpacing: "normal",
    wordWrap: "normal",
    whiteSpace: "normal",
    lineBreak: "auto"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (tooltipsStyle);

/***/ }),

/***/ "./src/assets/jss/material-kit-react/views/components.js":
/*!***************************************************************!*\
  !*** ./src/assets/jss/material-kit-react/views/components.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/jss/material-kit-react.js */ "./src/assets/jss/material-kit-react.js");

var componentsStyle = {
  container: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["container"],
  brand: {
    color: "#FFFFFF",
    textAlign: "left"
  },
  title: {
    fontSize: "4.2rem",
    fontWeight: "600",
    display: "inline-block",
    position: "relative"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px 0 0"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  link: {
    textDecoration: "none"
  },
  textCenter: {
    textAlign: "center"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (componentsStyle);

/***/ }),

/***/ "./src/assets/jss/material-kit-react/views/componentsSections/basicsStyle.js":
/*!***********************************************************************************!*\
  !*** ./src/assets/jss/material-kit-react/views/componentsSections/basicsStyle.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/jss/material-kit-react.js */ "./src/assets/jss/material-kit-react.js");
/* harmony import */ var assets_jss_material_kit_react_customCheckboxRadioSwitch_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/jss/material-kit-react/customCheckboxRadioSwitch.js */ "./src/assets/jss/material-kit-react/customCheckboxRadioSwitch.js");




var basicsStyle = Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
  sections: {
    padding: "70px 0"
  },
  container: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__["container"],
  title: Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__["title"], {
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  }),
  space50: {
    height: "50px",
    display: "block"
  },
  space70: {
    height: "70px",
    display: "block"
  },
  icons: {
    width: "17px",
    height: "17px",
    color: "#FFFFFF"
  }
}, assets_jss_material_kit_react_customCheckboxRadioSwitch_js__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (basicsStyle);

/***/ }),

/***/ "./src/assets/jss/material-kit-react/views/componentsSections/carouselStyle.js":
/*!*************************************************************************************!*\
  !*** ./src/assets/jss/material-kit-react/views/componentsSections/carouselStyle.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/jss/material-kit-react.js */ "./src/assets/jss/material-kit-react.js");

var carouselStyle = {
  section: {
    padding: "70px 0"
  },
  container: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["container"],
  marginAuto: {
    marginLeft: "auto !important",
    marginRight: "auto !important"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (carouselStyle);

/***/ }),

/***/ "./src/assets/jss/material-kit-react/views/componentsSections/completedStyle.js":
/*!**************************************************************************************!*\
  !*** ./src/assets/jss/material-kit-react/views/componentsSections/completedStyle.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var assets_jss_material_kit_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/jss/material-kit-react */ "./src/assets/jss/material-kit-react.js");


var completedStyle = {
  section: {
    padding: "70px 0"
  },
  container: Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, assets_jss_material_kit_react__WEBPACK_IMPORTED_MODULE_1__["container"], {
    textAlign: "center !important"
  })
};
/* harmony default export */ __webpack_exports__["default"] = (completedStyle);

/***/ }),

/***/ "./src/assets/jss/material-kit-react/views/componentsSections/downloadStyle.js":
/*!*************************************************************************************!*\
  !*** ./src/assets/jss/material-kit-react/views/componentsSections/downloadStyle.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/jss/material-kit-react.js */ "./src/assets/jss/material-kit-react.js");

var downloadStyle = {
  section: {
    padding: "70px 0"
  },
  container: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["container"],
  textCenter: {
    textAlign: "center"
  },
  sharingArea: {
    marginTop: "80px"
  },
  socials: {
    maxWidth: "24px",
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    fontSize: "20px",
    marginRight: "4px"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (downloadStyle);

/***/ }),

/***/ "./src/assets/jss/material-kit-react/views/componentsSections/exampleStyle.js":
/*!************************************************************************************!*\
  !*** ./src/assets/jss/material-kit-react/views/componentsSections/exampleStyle.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/jss/material-kit-react.js */ "./src/assets/jss/material-kit-react.js");
/* harmony import */ var assets_jss_material_kit_react_imagesStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/jss/material-kit-react/imagesStyles.js */ "./src/assets/jss/material-kit-react/imagesStyles.js");




var exampleStyle = Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
  section: {
    padding: "70px 0"
  },
  container: Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__["conatinerFluid"], {
    textAlign: "center !important"
  })
}, assets_jss_material_kit_react_imagesStyles_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
  link: {
    textDecoration: "none"
  }
});

/* harmony default export */ __webpack_exports__["default"] = (exampleStyle);

/***/ }),

/***/ "./src/assets/jss/material-kit-react/views/componentsSections/javascriptStyles.js":
/*!****************************************************************************************!*\
  !*** ./src/assets/jss/material-kit-react/views/componentsSections/javascriptStyles.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/jss/material-kit-react.js */ "./src/assets/jss/material-kit-react.js");
/* harmony import */ var assets_jss_material_kit_react_modalStyle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/jss/material-kit-react/modalStyle.js */ "./src/assets/jss/material-kit-react/modalStyle.js");
/* harmony import */ var assets_jss_material_kit_react_tooltipsStyle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/jss/material-kit-react/tooltipsStyle.js */ "./src/assets/jss/material-kit-react/tooltipsStyle.js");
/* harmony import */ var assets_jss_material_kit_react_popoverStyles_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/jss/material-kit-react/popoverStyles.js */ "./src/assets/jss/material-kit-react/popoverStyles.js");






var javascriptStyles = Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
  section: {
    padding: "70px 0 0"
  },
  container: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__["container"],
  title: Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__["title"], {
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  }),
  icon: {
    width: "17px",
    height: "17px",
    marginRight: "4px"
  }
}, assets_jss_material_kit_react_modalStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
  label: {
    color: "rgba(0, 0, 0, 0.26)",
    cursor: "pointer",
    display: "inline-flex",
    fontSize: "14px",
    transition: "0.3s ease all",
    lineHeight: "1.428571429",
    fontWeight: "400",
    paddingLeft: "0",
    letterSpacing: "normal"
  }
}, assets_jss_material_kit_react_tooltipsStyle_js__WEBPACK_IMPORTED_MODULE_3__["default"], {}, assets_jss_material_kit_react_popoverStyles_js__WEBPACK_IMPORTED_MODULE_4__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (javascriptStyles);

/***/ }),

/***/ "./src/assets/jss/material-kit-react/views/componentsSections/loginStyle.js":
/*!**********************************************************************************!*\
  !*** ./src/assets/jss/material-kit-react/views/componentsSections/loginStyle.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/jss/material-kit-react.js */ "./src/assets/jss/material-kit-react.js");
/* harmony import */ var assets_img_sign_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/img/sign.jpg */ "./src/assets/img/sign.jpg");
/* harmony import */ var assets_img_sign_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assets_img_sign_jpg__WEBPACK_IMPORTED_MODULE_1__);


var loginStyle = {
  section: {
    minHeight: "110vh",
    maxHeight: "1600px",
    overflow: "hidden",
    padding: "70px 0",
    backgroundPosition: "top center",
    backgroundSize: "cover",
    margin: "0",
    border: "0",
    display: "flex",
    alignItems: "center",
    backgroundImage: "url(" + assets_img_sign_jpg__WEBPACK_IMPORTED_MODULE_1___default.a + ")"
  },
  container: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["container"],
  form: {
    margin: "0"
  },
  cardHeader: {
    width: "auto",
    textAlign: "center",
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "-40px",
    padding: "20px 0",
    marginBottom: "15px"
  },
  socialIcons: {
    maxWidth: "24px",
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px"
  },
  divider: {
    marginTop: "30px",
    marginBottom: "0px",
    textAlign: "center"
  },
  cardFooter: {
    paddingTop: "0rem",
    border: "0",
    borderRadius: "6px",
    justifyContent: "center !important"
  },
  socialLine: {
    marginTop: "1rem",
    textAlign: "center",
    padding: "0"
  },
  inputIconsColor: {
    color: "#495057"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (loginStyle);

/***/ }),

/***/ "./src/assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js":
/*!************************************************************************************!*\
  !*** ./src/assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/jss/material-kit-react.js */ "./src/assets/jss/material-kit-react.js");
/* harmony import */ var assets_jss_material_kit_react_components_headerLinksStyle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/jss/material-kit-react/components/headerLinksStyle.js */ "./src/assets/jss/material-kit-react/components/headerLinksStyle.js");




var navbarsStyle = function navbarsStyle(theme) {
  return Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
    section: {
      padding: "70px 0",
      paddingTop: "0"
    },
    container: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__["container"],
    title: Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__["title"], {
      marginTop: "30px",
      minHeight: "32px",
      textDecoration: "none"
    }),
    navbar: {
      marginBottom: "-20px",
      zIndex: "100",
      position: "relative",
      overflow: "hidden",
      "& header": {
        borderRadius: "0"
      }
    },
    navigation: {
      backgroundPosition: "center center",
      backgroundSize: "cover",
      marginTop: "0",
      minHeight: "740px"
    },
    formControl: {
      margin: "0 !important",
      paddingTop: "0"
    },
    inputRootCustomClasses: {
      margin: "0!important"
    },
    searchIcon: {
      width: "20px",
      height: "20px",
      color: "inherit"
    }
  }, Object(assets_jss_material_kit_react_components_headerLinksStyle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(theme), {
    img: {
      width: "40px",
      height: "40px",
      borderRadius: "50%"
    },
    imageDropdownButton: {
      padding: "0px",
      top: "4px",
      borderRadius: "50%",
      marginLeft: "5px"
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (navbarsStyle);

/***/ }),

/***/ "./src/assets/jss/material-kit-react/views/componentsSections/notificationsStyles.js":
/*!*******************************************************************************************!*\
  !*** ./src/assets/jss/material-kit-react/views/componentsSections/notificationsStyles.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/jss/material-kit-react.js */ "./src/assets/jss/material-kit-react.js");


var notificationsStyles = {
  section: {
    backgroundColor: "#FFFFFF",
    display: "block",
    width: "100%",
    position: "relative",
    padding: "0"
  },
  title: Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__["title"], {
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  }),
  container: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__["container"]
};
/* harmony default export */ __webpack_exports__["default"] = (notificationsStyles);

/***/ }),

/***/ "./src/assets/jss/material-kit-react/views/componentsSections/pillsStyle.js":
/*!**********************************************************************************!*\
  !*** ./src/assets/jss/material-kit-react/views/componentsSections/pillsStyle.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/jss/material-kit-react.js */ "./src/assets/jss/material-kit-react.js");


var pillsStyle = {
  section: {
    padding: "70px 0"
  },
  container: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__["container"],
  title: Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__["title"], {
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  })
};
/* harmony default export */ __webpack_exports__["default"] = (pillsStyle);

/***/ }),

/***/ "./src/assets/jss/material-kit-react/views/componentsSections/tabsStyle.js":
/*!*********************************************************************************!*\
  !*** ./src/assets/jss/material-kit-react/views/componentsSections/tabsStyle.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/jss/material-kit-react.js */ "./src/assets/jss/material-kit-react.js");

var tabsStyle = {
  section: {
    background: "#EEEEEE",
    padding: "70px 0"
  },
  container: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_0__["container"],
  textCenter: {
    textAlign: "center"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (tabsStyle);

/***/ }),

/***/ "./src/assets/jss/material-kit-react/views/componentsSections/typographyStyle.js":
/*!***************************************************************************************!*\
  !*** ./src/assets/jss/material-kit-react/views/componentsSections/typographyStyle.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/jss/material-kit-react.js */ "./src/assets/jss/material-kit-react.js");
/* harmony import */ var assets_jss_material_kit_react_imagesStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/jss/material-kit-react/imagesStyles.js */ "./src/assets/jss/material-kit-react/imagesStyles.js");




var typographyStyle = Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
  section: {
    padding: "70px 0"
  },
  container: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__["container"],
  space50: {
    height: "50px",
    display: "block"
  },
  title: Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__["title"], {
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  }),
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative",
    width: "100%"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px"
  },
  marginLeft: {
    marginLeft: "auto !important"
  }
}, assets_jss_material_kit_react_imagesStyles_js__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (typographyStyle);

/***/ }),

/***/ "./src/assets/jss/material-kit-react/views/landingPage.js":
/*!****************************************************************!*\
  !*** ./src/assets/jss/material-kit-react/views/landingPage.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/jss/material-kit-react.js */ "./src/assets/jss/material-kit-react.js");


var landingPageStyle = {
  container: Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
    zIndex: "12",
    color: "#FFFFFF"
  }, assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__["container"]),
  title: Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__["title"], {
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#FFFFFF",
    textDecoration: "none"
  }),
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (landingPageStyle);

/***/ }),

/***/ "./src/assets/jss/material-kit-react/views/landingPageSections/productStyle.js":
/*!*************************************************************************************!*\
  !*** ./src/assets/jss/material-kit-react/views/landingPageSections/productStyle.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/jss/material-kit-react.js */ "./src/assets/jss/material-kit-react.js");


var productStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  title: Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__["title"], {
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  }),
  description: {
    color: "#999"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (productStyle);

/***/ }),

/***/ "./src/assets/jss/material-kit-react/views/landingPageSections/teamStyle.js":
/*!**********************************************************************************!*\
  !*** ./src/assets/jss/material-kit-react/views/landingPageSections/teamStyle.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/jss/material-kit-react.js */ "./src/assets/jss/material-kit-react.js");
/* harmony import */ var assets_jss_material_kit_react_imagesStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/jss/material-kit-react/imagesStyles.js */ "./src/assets/jss/material-kit-react/imagesStyles.js");




var teamStyle = Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  title: Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__["title"], {
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  })
}, assets_jss_material_kit_react_imagesStyles_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  cardTitle: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__["cardTitle"],
  smallTitle: {
    color: "#6c757d"
  },
  description: {
    color: "#999"
  },
  justifyCenter: {
    justifyContent: "center !important"
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999"
  },
  margin5: {
    margin: "5px"
  }
});

/* harmony default export */ __webpack_exports__["default"] = (teamStyle);

/***/ }),

/***/ "./src/assets/jss/material-kit-react/views/landingPageSections/workStyle.js":
/*!**********************************************************************************!*\
  !*** ./src/assets/jss/material-kit-react/views/landingPageSections/workStyle.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/jss/material-kit-react.js */ "./src/assets/jss/material-kit-react.js");


var workStyle = {
  section: {
    padding: "70px 0"
  },
  title: Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__["title"], {
    marginBottom: "50px",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center"
  }),
  description: {
    color: "#999",
    textAlign: "center"
  },
  textCenter: {
    textAlign: "center"
  },
  textArea: {
    marginRight: "15px",
    marginLeft: "15px"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (workStyle);

/***/ }),

/***/ "./src/assets/jss/material-kit-react/views/loginPage.js":
/*!**************************************************************!*\
  !*** ./src/assets/jss/material-kit-react/views/loginPage.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/jss/material-kit-react.js */ "./src/assets/jss/material-kit-react.js");


var signupPageStyle = {
  container: Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__["container"], {
    zIndex: "2",
    position: "relative",
    paddingTop: "20vh",
    color: "#FFFFFF",
    paddingBottom: "200px"
  }),
  cardHidden: {
    opacity: "0",
    transform: "translate3d(0, -60px, 0)"
  },
  pageHeader: {
    minHeight: "100vh",
    height: "auto",
    display: "inherit",
    position: "relative",
    margin: "0",
    padding: "0",
    border: "0",
    alignItems: "center",
    "&:before": {
      background: "rgba(0, 0, 0, 0.5)"
    },
    "&:before,&:after": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: '""'
    },
    "& footer li a,& footer li a:hover,& footer li a:active": {
      color: "#FFFFFF"
    },
    "& footer": {
      position: "absolute",
      bottom: "0",
      width: "100%"
    }
  },
  form: {
    margin: "0"
  },
  cardHeader: {
    width: "auto",
    textAlign: "center",
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "-40px",
    padding: "20px 0",
    marginBottom: "15px"
  },
  socialIcons: {
    maxWidth: "24px",
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px"
  },
  divider: {
    marginTop: "30px",
    marginBottom: "0px",
    textAlign: "center"
  },
  cardFooter: {
    paddingTop: "0rem",
    border: "0",
    borderRadius: "6px",
    justifyContent: "center !important"
  },
  socialLine: {
    marginTop: "1rem",
    textAlign: "center",
    padding: "0"
  },
  inputIconsColor: {
    color: "#495057"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (signupPageStyle);

/***/ }),

/***/ "./src/assets/jss/material-kit-react/views/profilePage.js":
/*!****************************************************************!*\
  !*** ./src/assets/jss/material-kit-react/views/profilePage.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/jss/material-kit-react.js */ "./src/assets/jss/material-kit-react.js");
/* harmony import */ var assets_jss_material_kit_react_imagesStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/jss/material-kit-react/imagesStyles.js */ "./src/assets/jss/material-kit-react/imagesStyles.js");




var profilePageStyle = Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
  container: assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__["container"],
  profile: {
    textAlign: "center",
    "& img": {
      maxWidth: "160px",
      width: "100%",
      margin: "0 auto",
      transform: "translate3d(0, -50%, 0)"
    }
  },
  description: {
    margin: "1.071rem auto 0",
    maxWidth: "600px",
    color: "#999",
    textAlign: "center !important"
  },
  name: {
    marginTop: "-80px"
  }
}, assets_jss_material_kit_react_imagesStyles_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  title: Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, assets_jss_material_kit_react_js__WEBPACK_IMPORTED_MODULE_1__["title"], {
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  }),
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999"
  },
  navWrapper: {
    margin: "20px auto 50px auto",
    textAlign: "center"
  }
});

/* harmony default export */ __webpack_exports__["default"] = (profilePageStyle);

/***/ }),

/***/ "./src/assets/scss/material-kit-react.scss?v=1.8.0":
/*!*********************************************************!*\
  !*** ./src/assets/scss/material-kit-react.scss?v=1.8.0 ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-4!./material-kit-react.scss?v=1.8.0 */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/assets/scss/material-kit-react.scss?v=1.8.0");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-4!./material-kit-react.scss?v=1.8.0 */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/assets/scss/material-kit-react.scss?v=1.8.0",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../../node_modules/sass-loader/lib/loader.js??ref--6-oneOf-5-4!./material-kit-react.scss?v=1.8.0 */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/assets/scss/material-kit-react.scss?v=1.8.0");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/Badge/Badge.js":
/*!***************************************!*\
  !*** ./src/components/Badge/Badge.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Badge; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var assets_jss_material_kit_react_components_badgeStyle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/jss/material-kit-react/components/badgeStyle.js */ "./src/assets/jss/material-kit-react/components/badgeStyle.js");
var _jsxFileName = "/Users/adhigunarsa/Web-Development/gardening-site/src/components/Badge/Badge.js";
 // nodejs library to set properties for components

 // @material-ui/core components



var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(assets_jss_material_kit_react_components_badgeStyle_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
function Badge(props) {
  var classes = useStyles();
  var color = props.color,
      children = props.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classes.badge + " " + classes[color],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, children);
}
Badge.defaultProps = {
  color: "gray"
};
Badge.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(["primary", "warning", "danger", "success", "info", "rose", "gray"]),
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};

/***/ }),

/***/ "./src/components/Card/Card.js":
/*!*************************************!*\
  !*** ./src/components/Card/Card.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Card; });
/* harmony import */ var _Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var assets_jss_material_kit_react_components_cardStyle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/jss/material-kit-react/components/cardStyle.js */ "./src/assets/jss/material-kit-react/components/cardStyle.js");


var _jsxFileName = "/Users/adhigunarsa/Web-Development/gardening-site/src/components/Card/Card.js";
 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // @material-ui/core components

 // @material-ui/icons
// core components


var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(assets_jss_material_kit_react_components_cardStyle_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
function Card(props) {
  var _classNames;

  var classes = useStyles();

  var className = props.className,
      children = props.children,
      plain = props.plain,
      carousel = props.carousel,
      rest = Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className", "children", "plain", "carousel"]);

  var cardClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()((_classNames = {}, Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.card, true), Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.cardPlain, plain), Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.cardCarousel, carousel), Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, className, className !== undefined), _classNames));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object.assign({
    className: cardClasses
  }, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }), children);
}
Card.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  plain: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  carousel: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node
};

/***/ }),

/***/ "./src/components/Card/CardBody.js":
/*!*****************************************!*\
  !*** ./src/components/Card/CardBody.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CardBody; });
/* harmony import */ var _Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var assets_jss_material_kit_react_components_cardBodyStyle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/jss/material-kit-react/components/cardBodyStyle.js */ "./src/assets/jss/material-kit-react/components/cardBodyStyle.js");


var _jsxFileName = "/Users/adhigunarsa/Web-Development/gardening-site/src/components/Card/CardBody.js";
 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // @material-ui/core components

 // @material-ui/icons
// core components


var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(assets_jss_material_kit_react_components_cardBodyStyle_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
function CardBody(props) {
  var _classNames;

  var classes = useStyles();

  var className = props.className,
      children = props.children,
      rest = Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className", "children"]);

  var cardBodyClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()((_classNames = {}, Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.cardBody, true), Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, className, className !== undefined), _classNames));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object.assign({
    className: cardBodyClasses
  }, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }), children);
}
CardBody.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node
};

/***/ }),

/***/ "./src/components/Card/CardFooter.js":
/*!*******************************************!*\
  !*** ./src/components/Card/CardFooter.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CardFooter; });
/* harmony import */ var _Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var assets_jss_material_kit_react_components_cardFooterStyle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/jss/material-kit-react/components/cardFooterStyle.js */ "./src/assets/jss/material-kit-react/components/cardFooterStyle.js");


var _jsxFileName = "/Users/adhigunarsa/Web-Development/gardening-site/src/components/Card/CardFooter.js";
 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // @material-ui/core components

 // @material-ui/icons
// core components


var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(assets_jss_material_kit_react_components_cardFooterStyle_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
function CardFooter(props) {
  var _classNames;

  var classes = useStyles();

  var className = props.className,
      children = props.children,
      rest = Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className", "children"]);

  var cardFooterClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()((_classNames = {}, Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.cardFooter, true), Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, className, className !== undefined), _classNames));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object.assign({
    className: cardFooterClasses
  }, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }), children);
}
CardFooter.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node
};

/***/ }),

/***/ "./src/components/Card/CardHeader.js":
/*!*******************************************!*\
  !*** ./src/components/Card/CardHeader.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CardHeader; });
/* harmony import */ var _Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var assets_jss_material_kit_react_components_cardHeaderStyle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/jss/material-kit-react/components/cardHeaderStyle.js */ "./src/assets/jss/material-kit-react/components/cardHeaderStyle.js");


var _jsxFileName = "/Users/adhigunarsa/Web-Development/gardening-site/src/components/Card/CardHeader.js";
 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // @material-ui/core components

 // @material-ui/icons
// core components


var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(assets_jss_material_kit_react_components_cardHeaderStyle_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
function CardHeader(props) {
  var _classNames;

  var classes = useStyles();

  var className = props.className,
      children = props.children,
      color = props.color,
      plain = props.plain,
      rest = Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className", "children", "color", "plain"]);

  var cardHeaderClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()((_classNames = {}, Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.cardHeader, true), Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes[color + "CardHeader"], color), Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.cardHeaderPlain, plain), Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, className, className !== undefined), _classNames));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object.assign({
    className: cardHeaderClasses
  }, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }), children);
}
CardHeader.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  color: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(["warning", "success", "danger", "info", "primary"]),
  plain: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node
};

/***/ }),

/***/ "./src/components/Clearfix/Clearfix.js":
/*!*********************************************!*\
  !*** ./src/components/Clearfix/Clearfix.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Clearfix; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
var _jsxFileName = "/Users/adhigunarsa/Web-Development/gardening-site/src/components/Clearfix/Clearfix.js";
 // mterial-ui components


var styles = {
  clearfix: {
    "&:after,&:before": {
      display: "table",
      content: '" "'
    },
    "&:after": {
      clear: "both"
    }
  }
};
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(styles);
function Clearfix() {
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.clearfix,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 10
    }
  });
}
Clearfix.propTypes = {};

/***/ }),

/***/ "./src/components/CustomButtons/Button.js":
/*!************************************************!*\
  !*** ./src/components/CustomButtons/Button.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles/makeStyles */ "./node_modules/@material-ui/core/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var assets_jss_material_kit_react_components_buttonStyle_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/jss/material-kit-react/components/buttonStyle.js */ "./src/assets/jss/material-kit-react/components/buttonStyle.js");




var _this = undefined,
    _jsxFileName = "/Users/adhigunarsa/Web-Development/gardening-site/src/components/CustomButtons/Button.js";

 // nodejs library to set properties for components

 // nodejs library that concatenates classes

 // @material-ui/core components


 // core components


var makeComponentStyles = _material_ui_core_styles_makeStyles__WEBPACK_IMPORTED_MODULE_6___default()(function () {
  return Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, assets_jss_material_kit_react_components_buttonStyle_js__WEBPACK_IMPORTED_MODULE_8__["default"]);
});
var RegularButton = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (props, ref) {
  var _classNames;

  var color = props.color,
      round = props.round,
      children = props.children,
      fullWidth = props.fullWidth,
      disabled = props.disabled,
      simple = props.simple,
      size = props.size,
      block = props.block,
      link = props.link,
      justIcon = props.justIcon,
      className = props.className,
      rest = Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["color", "round", "children", "fullWidth", "disabled", "simple", "size", "block", "link", "justIcon", "className"]);

  var classes = makeComponentStyles();
  var btnClasses = classnames__WEBPACK_IMPORTED_MODULE_5___default()((_classNames = {}, Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.button, true), Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes[size], size), Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes[color], color), Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.round, round), Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.fullWidth, fullWidth), Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.disabled, disabled), Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.simple, simple), Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.block, block), Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.link, link), Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.justIcon, justIcon), Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, className, className), _classNames));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({}, rest, {
    ref: ref,
    className: btnClasses,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }), children);
});
RegularButton.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(["primary", "info", "success", "warning", "danger", "rose", "white", "facebook", "twitter", "google", "github", "transparent"]),
  size: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(["sm", "lg"]),
  simple: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  round: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  fullWidth: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  block: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  link: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  justIcon: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (RegularButton);

/***/ }),

/***/ "./src/components/CustomDropdown/CustomDropdown.js":
/*!*********************************************************!*\
  !*** ./src/components/CustomDropdown/CustomDropdown.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomDropdown; });
/* harmony import */ var _Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/MenuList */ "./node_modules/@material-ui/core/esm/MenuList/index.js");
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ClickAwayListener */ "./node_modules/@material-ui/core/esm/ClickAwayListener/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Grow */ "./node_modules/@material-ui/core/esm/Grow/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Icon */ "./node_modules/@material-ui/core/esm/Icon/index.js");
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Popper */ "./node_modules/@material-ui/core/esm/Popper/index.js");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./src/components/CustomButtons/Button.js");
/* harmony import */ var assets_jss_material_kit_react_components_customDropdownStyle_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! assets/jss/material-kit-react/components/customDropdownStyle.js */ "./src/assets/jss/material-kit-react/components/customDropdownStyle.js");


var _jsxFileName = "/Users/adhigunarsa/Web-Development/gardening-site/src/components/CustomDropdown/CustomDropdown.js";
 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // @material-ui/core components









 // core components



var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(assets_jss_material_kit_react_components_customDropdownStyle_js__WEBPACK_IMPORTED_MODULE_15__["default"]);
function CustomDropdown(props) {
  var _classNames,
      _classNames2,
      _classNames3,
      _this = this;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(null),
      _React$useState2 = Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var handleClick = function handleClick(event) {
    if (anchorEl && anchorEl.contains(event.target)) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  var handleClose = function handleClose(param) {
    setAnchorEl(null);

    if (props && props.onClick) {
      props.onClick(param);
    }
  };

  var handleCloseAway = function handleCloseAway(event) {
    if (anchorEl.contains(event.target)) {
      return;
    }

    setAnchorEl(null);
  };

  var classes = useStyles();
  var buttonText = props.buttonText,
      buttonIcon = props.buttonIcon,
      dropdownList = props.dropdownList,
      buttonProps = props.buttonProps,
      dropup = props.dropup,
      dropdownHeader = props.dropdownHeader,
      caret = props.caret,
      hoverColor = props.hoverColor,
      left = props.left,
      rtlActive = props.rtlActive,
      noLiPadding = props.noLiPadding;
  var caretClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()((_classNames = {}, Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.caret, true), Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.caretActive, Boolean(anchorEl)), Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.caretRTL, rtlActive), _classNames));
  var dropdownItem = classnames__WEBPACK_IMPORTED_MODULE_3___default()((_classNames2 = {}, Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, classes.dropdownItem, true), Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, classes[hoverColor + "Hover"], true), Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, classes.noLiPadding, noLiPadding), Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, classes.dropdownItemRTL, rtlActive), _classNames2));
  var icon = null;

  switch (typeof buttonIcon) {
    case "object":
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(props.buttonIcon, {
        className: classes.buttonIcon,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 14
        }
      });
      break;

    case "string":
      icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_12__["default"], {
        className: classes.buttonIcon,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 14
        }
      }, props.buttonIcon);
      break;

    default:
      icon = null;
      break;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_14__["default"], Object.assign({
    "aria-label": "Notifications",
    "aria-owns": anchorEl ? "menu-list" : null,
    "aria-haspopup": "true"
  }, buttonProps, {
    onClick: handleClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }), icon, buttonText !== undefined ? buttonText : null, caret ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("b", {
    className: caretClasses,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 20
    }
  }) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_13__["default"], {
    open: Boolean(anchorEl),
    anchorEl: anchorEl,
    transition: true,
    disablePortal: true,
    placement: dropup ? left ? "top-start" : "top" : left ? "bottom-start" : "bottom",
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_classNames3 = {}, Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames3, classes.popperClose, !anchorEl), Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames3, classes.popperResponsive, true), _classNames3)),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  }, function () {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_10__["default"], {
      "in": Boolean(anchorEl),
      id: "menu-list",
      style: dropup ? {
        transformOrigin: "0 100% 0"
      } : {
        transformOrigin: "0 0 0"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__["default"], {
      className: classes.dropdown,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onClickAway: handleCloseAway,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_7__["default"], {
      role: "menu",
      className: classes.menuList,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 17
      }
    }, dropdownHeader !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onClick: function onClick() {
        return handleClose(dropdownHeader);
      },
      className: classes.dropdownHeader,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 21
      }
    }, dropdownHeader) : null, dropdownList.map(function (prop, key) {
      if (prop.divider) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_11__["default"], {
          key: key,
          onClick: function onClick() {
            return handleClose("divider");
          },
          className: classes.dropdownDividerItem,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 25
          }
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        key: key,
        onClick: function onClick() {
          return handleClose(prop);
        },
        className: dropdownItem,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 23
        }
      }, prop);
    })))));
  }));
}
CustomDropdown.defaultProps = {
  caret: true,
  hoverColor: "primary"
};
CustomDropdown.propTypes = {
  hoverColor: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(["black", "primary", "info", "success", "warning", "danger", "rose"]),
  buttonText: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,
  buttonIcon: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string]),
  dropdownList: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array,
  buttonProps: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
  dropup: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  dropdownHeader: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,
  rtlActive: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  caret: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  left: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  noLiPadding: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  // function that retuns the selected item
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
};

/***/ }),

/***/ "./src/components/CustomInput/CustomInput.js":
/*!***************************************************!*\
  !*** ./src/components/CustomInput/CustomInput.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomInput; });
/* harmony import */ var _Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/esm/Input/index.js");
/* harmony import */ var assets_jss_material_kit_react_components_customInputStyle_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/jss/material-kit-react/components/customInputStyle.js */ "./src/assets/jss/material-kit-react/components/customInputStyle.js");

var _jsxFileName = "/Users/adhigunarsa/Web-Development/gardening-site/src/components/CustomInput/CustomInput.js";
 // nodejs library to set properties for components

 // nodejs library that concatenates classes

 // @material-ui/core components






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(assets_jss_material_kit_react_components_customInputStyle_js__WEBPACK_IMPORTED_MODULE_8__["default"]);
function CustomInput(props) {
  var _classNames, _classNames2, _classNames4;

  var classes = useStyles();
  var formControlProps = props.formControlProps,
      labelText = props.labelText,
      id = props.id,
      labelProps = props.labelProps,
      inputProps = props.inputProps,
      error = props.error,
      white = props.white,
      inputRootCustomClasses = props.inputRootCustomClasses,
      success = props.success;
  var labelClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()((_classNames = {}, Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, " " + classes.labelRootError, error), Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, " " + classes.labelRootSuccess, success && !error), _classNames));
  var underlineClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()((_classNames2 = {}, Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, classes.underlineError, error), Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, classes.underlineSuccess, success && !error), Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, classes.underline, true), Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, classes.whiteUnderline, white), _classNames2));
  var marginTop = classnames__WEBPACK_IMPORTED_MODULE_3___default()(Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, inputRootCustomClasses, inputRootCustomClasses !== undefined));
  var inputClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()((_classNames4 = {}, Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames4, classes.input, true), Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames4, classes.whiteInput, white), _classNames4));
  var formControlClasses;

  if (formControlProps !== undefined) {
    formControlClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()(formControlProps.className, classes.formControl);
  } else {
    formControlClasses = classes.formControl;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({}, formControlProps, {
    className: formControlClasses,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }), labelText !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({
    className: classes.labelRoot + " " + labelClasses,
    htmlFor: id
  }, labelProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }), labelText) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({
    classes: {
      input: inputClasses,
      root: marginTop,
      disabled: classes.disabled,
      underline: underlineClasses
    },
    id: id
  }, inputProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  })));
}
CustomInput.propTypes = {
  labelText: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
  labelProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  inputProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  formControlProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  inputRootCustomClasses: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  error: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  success: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  white: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};

/***/ }),

/***/ "./src/components/CustomLinearProgress/CustomLinearProgress.js":
/*!*********************************************************************!*\
  !*** ./src/components/CustomLinearProgress/CustomLinearProgress.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomLinearProgress; });
/* harmony import */ var _Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/LinearProgress */ "./node_modules/@material-ui/core/esm/LinearProgress/index.js");
/* harmony import */ var assets_jss_material_kit_react_components_customLinearProgressStyle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/jss/material-kit-react/components/customLinearProgressStyle.js */ "./src/assets/jss/material-kit-react/components/customLinearProgressStyle.js");

var _jsxFileName = "/Users/adhigunarsa/Web-Development/gardening-site/src/components/CustomLinearProgress/CustomLinearProgress.js";
 // nodejs library to set properties for components

 // @material-ui/core components


 // core components


var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(assets_jss_material_kit_react_components_customLinearProgressStyle_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
function CustomLinearProgress(props) {
  var classes = useStyles();

  var color = props.color,
      rest = Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["color"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, rest, {
    classes: {
      root: classes.root + " " + classes[color + "Background"],
      bar: classes.bar + " " + classes[color]
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }));
}
CustomLinearProgress.defaultProps = {
  color: "gray"
};
CustomLinearProgress.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(["primary", "warning", "danger", "success", "info", "rose", "gray"])
};

/***/ }),

/***/ "./src/components/CustomTabs/CustomTabs.js":
/*!*************************************************!*\
  !*** ./src/components/CustomTabs/CustomTabs.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomTabs; });
/* harmony import */ var _Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Tabs */ "./node_modules/@material-ui/core/esm/Tabs/index.js");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Tab */ "./node_modules/@material-ui/core/esm/Tab/index.js");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Icon */ "./node_modules/@material-ui/core/esm/Icon/index.js");
/* harmony import */ var components_Card_Card_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/Card/Card.js */ "./src/components/Card/Card.js");
/* harmony import */ var components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/Card/CardBody.js */ "./src/components/Card/CardBody.js");
/* harmony import */ var components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/Card/CardHeader.js */ "./src/components/Card/CardHeader.js");
/* harmony import */ var assets_jss_material_kit_react_components_customTabsStyle_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! assets/jss/material-kit-react/components/customTabsStyle.js */ "./src/assets/jss/material-kit-react/components/customTabsStyle.js");


var _jsxFileName = "/Users/adhigunarsa/Web-Development/gardening-site/src/components/CustomTabs/CustomTabs.js";
 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // material-ui components




 // core components





var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(assets_jss_material_kit_react_components_customTabsStyle_js__WEBPACK_IMPORTED_MODULE_12__["default"]);
function CustomTabs(props) {
  var _classNames,
      _this = this;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(0),
      _React$useState2 = Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var handleChange = function handleChange(event, value) {
    setValue(value);
  };

  var classes = useStyles();
  var headerColor = props.headerColor,
      plainTabs = props.plainTabs,
      tabs = props.tabs,
      title = props.title,
      rtlActive = props.rtlActive;
  var cardTitle = classnames__WEBPACK_IMPORTED_MODULE_3___default()((_classNames = {}, Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.cardTitle, true), Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.cardTitleRTL, rtlActive), _classNames));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Card_Card_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
    plain: plainTabs,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
    color: headerColor,
    plain: plainTabs,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, title !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: cardTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 32
    }
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_6__["default"], {
    value: value,
    onChange: handleChange,
    classes: {
      root: classes.tabsRoot,
      indicator: classes.displayNone
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, tabs.map(function (prop, key) {
    var icon = {};

    if (prop.tabIcon) {
      icon = {
        icon: typeof prop.tabIcon === "string" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_8__["default"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 21
          }
        }, prop.tabIcon) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(prop.tabIcon, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 21
          }
        })
      };
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({
      classes: {
        root: classes.tabRootButton,
        label: classes.tabLabel,
        selected: classes.tabSelected,
        wrapper: classes.tabWrapper
      },
      key: key,
      label: prop.tabName
    }, icon, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 15
      }
    }));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, tabs.map(function (prop, key) {
    if (key === value) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        key: key,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 20
        }
      }, prop.tabContent);
    }

    return null;
  })));
}
CustomTabs.propTypes = {
  headerColor: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(["warning", "success", "danger", "info", "primary", "rose"]),
  title: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  tabs: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    tabName: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired,
    tabIcon: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
    tabContent: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node.isRequired
  })),
  rtlActive: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  plainTabs: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool
};

/***/ }),

/***/ "./src/components/Footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/Footer/Footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var _Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "./node_modules/@material-ui/icons/Favorite.js");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_jss_material_kit_react_components_footerStyle_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/jss/material-kit-react/components/footerStyle.js */ "./src/assets/jss/material-kit-react/components/footerStyle.js");

var _jsxFileName = "/Users/adhigunarsa/Web-Development/gardening-site/src/components/Footer/Footer.js";

/*eslint-disable*/
 // nodejs library to set properties for components

 // nodejs library that concatenates classes

 // material-ui core components


 // @material-ui/icons



var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(assets_jss_material_kit_react_components_footerStyle_js__WEBPACK_IMPORTED_MODULE_7__["default"]);
function Footer(props) {
  var _classNames, _classNames2;

  var classes = useStyles();
  var whiteFont = props.whiteFont;
  var footerClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()((_classNames = {}, Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.footer, true), Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.footerWhiteFont, whiteFont), _classNames));
  var aClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()((_classNames2 = {}, Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, classes.a, true), Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, classes.footerWhiteFont, whiteFont), _classNames2));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer", {
    className: footerClasses,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.left,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["List"], {
    className: classes.list,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItem"], {
    className: classes.inlineBlock,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://www.creative-tim.com/?ref=mkr-footer",
    className: classes.block,
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }, "Creative Tim")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItem"], {
    className: classes.inlineBlock,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://www.creative-tim.com/presentation?ref=mkr-footer",
    className: classes.block,
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }, "About us")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItem"], {
    className: classes.inlineBlock,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "http://blog.creative-tim.com/?ref=mkr-footer",
    className: classes.block,
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }, "Blog")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItem"], {
    className: classes.inlineBlock,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://www.creative-tim.com/license?ref=mkr-footer",
    className: classes.block,
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 15
    }
  }, "Licenses")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.right,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, "\xA9 ", 1900 + new Date().getYear(), " , made with", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: classes.icon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }), " by", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://www.creative-tim.com?ref=mkr-footer",
    className: aClasses,
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, "Creative Tim"), " ", "for a better web.")));
}
Footer.propTypes = {
  whiteFont: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};

/***/ }),

/***/ "./src/components/Grid/GridContainer.js":
/*!**********************************************!*\
  !*** ./src/components/Grid/GridContainer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GridContainer; });
/* harmony import */ var _Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");

var _jsxFileName = "/Users/adhigunarsa/Web-Development/gardening-site/src/components/Grid/GridContainer.js";
 // nodejs library to set properties for components

 // @material-ui/core components



var styles = {
  grid: {
    marginRight: "-15px",
    marginLeft: "-15px",
    width: "auto"
  }
};
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(styles);
function GridContainer(props) {
  var classes = useStyles();

  var children = props.children,
      className = props.className,
      rest = Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["children", "className"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({
    container: true
  }, rest, {
    className: classes.grid + " " + className,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }), children);
}
GridContainer.defaultProps = {
  className: ""
};
GridContainer.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};

/***/ }),

/***/ "./src/components/Grid/GridItem.js":
/*!*****************************************!*\
  !*** ./src/components/Grid/GridItem.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GridItem; });
/* harmony import */ var _Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");

var _jsxFileName = "/Users/adhigunarsa/Web-Development/gardening-site/src/components/Grid/GridItem.js";
 // nodejs library to set properties for components

 // @material-ui/core components



var styles = {
  grid: {
    position: "relative",
    width: "100%",
    minHeight: "1px",
    paddingRight: "15px",
    paddingLeft: "15px",
    flexBasis: "auto"
  }
};
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(styles);
function GridItem(props) {
  var classes = useStyles();

  var children = props.children,
      className = props.className,
      rest = Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["children", "className"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({
    item: true
  }, rest, {
    className: classes.grid + " " + className,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }), children);
}
GridItem.defaultProps = {
  className: ""
};
GridItem.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};

/***/ }),

/***/ "./src/components/Header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/Header/Header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var _Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Hidden */ "./node_modules/@material-ui/core/esm/Hidden/index.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var assets_jss_material_kit_react_components_headerStyle_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! assets/jss/material-kit-react/components/headerStyle.js */ "./src/assets/jss/material-kit-react/components/headerStyle.js");


var _jsxFileName = "/Users/adhigunarsa/Web-Development/gardening-site/src/components/Header/Header.js";
 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // @material-ui/core components







 // @material-ui/icons

 // core components


var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(assets_jss_material_kit_react_components_headerStyle_js__WEBPACK_IMPORTED_MODULE_13__["default"]);
function Header(props) {
  var _classNames;

  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState2 = Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      mobileOpen = _React$useState2[0],
      setMobileOpen = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    if (props.changeColorOnScroll) {
      window.addEventListener("scroll", headerColorChange);
    }

    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener("scroll", headerColorChange);
      }
    };
  });

  var handleDrawerToggle = function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  };

  var headerColorChange = function headerColorChange() {
    var color = props.color,
        changeColorOnScroll = props.changeColorOnScroll;
    var windowsScrollTop = window.pageYOffset;

    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body.getElementsByTagName("header")[0].classList.remove(classes[color]);
      document.body.getElementsByTagName("header")[0].classList.add(classes[changeColorOnScroll.color]);
    } else {
      document.body.getElementsByTagName("header")[0].classList.add(classes[color]);
      document.body.getElementsByTagName("header")[0].classList.remove(classes[changeColorOnScroll.color]);
    }
  };

  var color = props.color,
      rightLinks = props.rightLinks,
      leftLinks = props.leftLinks,
      brand = props.brand,
      fixed = props.fixed,
      absolute = props.absolute;
  var appBarClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()((_classNames = {}, Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.appBar, true), Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes[color], color), Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.absolute, absolute), Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.fixed, fixed), _classNames));
  var brandComponent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 26
    }
  }, brand);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: appBarClasses,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, leftLinks !== undefined ? brandComponent : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.flex,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, leftLinks !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_10__["default"], {
    smDown: true,
    implementation: "css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, leftLinks) : brandComponent), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_10__["default"], {
    smDown: true,
    implementation: "css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, rightLinks), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_10__["default"], {
    mdUp: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    color: "inherit",
    "aria-label": "open drawer",
    onClick: handleDrawerToggle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_10__["default"], {
    mdUp: true,
    implementation: "js",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "temporary",
    anchor: "right",
    open: mobileOpen,
    classes: {
      paper: classes.drawerPaper
    },
    onClose: handleDrawerToggle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.appResponsive,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  }, leftLinks, rightLinks))));
}
Header.defaultProp = {
  color: "white"
};
Header.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(["primary", "info", "success", "warning", "danger", "transparent", "white", "rose", "dark"]),
  rightLinks: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,
  leftLinks: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,
  brand: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  fixed: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  absolute: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  // this will cause the sidebar to change the color from
  // props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // props.color (see above)
  changeColorOnScroll: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    height: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number.isRequired,
    color: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(["primary", "info", "success", "warning", "danger", "transparent", "white", "rose", "dark"]).isRequired
  })
};

/***/ }),

/***/ "./src/components/Header/HeaderLinks.js":
/*!**********************************************!*\
  !*** ./src/components/Header/HeaderLinks.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeaderLinks; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "./node_modules/@material-ui/core/esm/Tooltip/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var components_CustomDropdown_CustomDropdown_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/CustomDropdown/CustomDropdown.js */ "./src/components/CustomDropdown/CustomDropdown.js");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./src/components/CustomButtons/Button.js");
/* harmony import */ var assets_jss_material_kit_react_components_headerLinksStyle_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/jss/material-kit-react/components/headerLinksStyle.js */ "./src/assets/jss/material-kit-react/components/headerLinksStyle.js");
var _jsxFileName = "/Users/adhigunarsa/Web-Development/gardening-site/src/components/Header/HeaderLinks.js";

/*eslint-disable*/
 // react components for routing our app without refresh

 // @material-ui/core components




 // @material-ui/icons

 // core components




var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(assets_jss_material_kit_react_components_headerLinksStyle_js__WEBPACK_IMPORTED_MODULE_9__["default"]);
function HeaderLinks(props) {
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.list,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.listItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomDropdown_CustomDropdown_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    noLiPadding: true,
    buttonText: "Our Services",
    buttonProps: {
      className: classes.navLink,
      color: "transparent"
    },
    buttonIcon: _material_ui_icons__WEBPACK_IMPORTED_MODULE_6__["Apps"],
    dropdownList: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/all",
      className: classes.dropdownLink,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }
    }, "All components"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/about",
      className: classes.dropdownLink,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }
    }, "About us")],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.listItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "instagram-facebook",
    title: "Follow us on facebook",
    placement: window.innerWidth > 959 ? "top" : "left",
    classes: {
      tooltip: classes.tooltip
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    color: "transparent",
    href: "https://www.facebook.com/garden.sydney.33",
    target: "_blank",
    className: classes.navLink,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: classes.socialIcons + " fab fa-facebook",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.listItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "instagram-tooltip",
    title: "Follow us on instagram",
    placement: window.innerWidth > 959 ? "top" : "left",
    classes: {
      tooltip: classes.tooltip
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    color: "transparent",
    href: "https://www.instagram.com/thesydeygardener/",
    target: "_blank",
    className: classes.navLink,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: classes.socialIcons + " fab fa-instagram",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  })))));
}

/***/ }),

/***/ "./src/components/InfoArea/InfoArea.js":
/*!*********************************************!*\
  !*** ./src/components/InfoArea/InfoArea.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InfoArea; });
/* harmony import */ var _Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var assets_jss_material_kit_react_components_infoStyle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/jss/material-kit-react/components/infoStyle.js */ "./src/assets/jss/material-kit-react/components/infoStyle.js");

var _jsxFileName = "/Users/adhigunarsa/Web-Development/gardening-site/src/components/InfoArea/InfoArea.js";
 // nodejs library to set properties for components

 // nodejs library that concatenates classes

 // @material-ui/core components



var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(assets_jss_material_kit_react_components_infoStyle_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
function InfoArea(props) {
  var _classNames, _classNames2;

  var classes = useStyles();
  var title = props.title,
      description = props.description,
      iconColor = props.iconColor,
      vertical = props.vertical;
  var iconWrapper = classnames__WEBPACK_IMPORTED_MODULE_3___default()((_classNames = {}, Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.iconWrapper, true), Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes[iconColor], true), Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.iconWrapperVertical, vertical), _classNames));
  var iconClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()((_classNames2 = {}, Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, classes.icon, true), Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, classes.iconVertical, vertical), _classNames2));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.infoArea,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: iconWrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(props.icon, {
    className: iconClasses,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.descriptionWrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: classes.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, description)));
}
InfoArea.defaultProps = {
  iconColor: "gray"
};
InfoArea.propTypes = {
  icon: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  description: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  iconColor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(["primary", "warning", "danger", "success", "info", "rose", "gray"]),
  vertical: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};

/***/ }),

/***/ "./src/components/NavPills/NavPills.js":
/*!*********************************************!*\
  !*** ./src/components/NavPills/NavPills.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavPills; });
/* harmony import */ var _Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-swipeable-views */ "./node_modules/react-swipeable-views/lib/index.js");
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_views__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Tabs */ "./node_modules/@material-ui/core/esm/Tabs/index.js");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Tab */ "./node_modules/@material-ui/core/esm/Tab/index.js");
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./src/components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./src/components/Grid/GridItem.js");
/* harmony import */ var assets_jss_material_kit_react_components_navPillsStyle_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! assets/jss/material-kit-react/components/navPillsStyle.js */ "./src/assets/jss/material-kit-react/components/navPillsStyle.js");


var _jsxFileName = "/Users/adhigunarsa/Web-Development/gardening-site/src/components/NavPills/NavPills.js";
 // nodejs library that concatenates classes

 // nodejs library to set properties for components


 // @material-ui/core components



 // core components




var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(assets_jss_material_kit_react_components_navPillsStyle_js__WEBPACK_IMPORTED_MODULE_11__["default"]);
function NavPills(props) {
  var _classNames,
      _this = this;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(props.active),
      _React$useState2 = Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      active = _React$useState2[0],
      setActive = _React$useState2[1];

  var handleChange = function handleChange(event, active) {
    setActive(active);
  };

  var handleChangeIndex = function handleChangeIndex(index) {
    setActive(index);
  };

  var classes = useStyles();
  var tabs = props.tabs,
      direction = props.direction,
      color = props.color,
      horizontal = props.horizontal,
      alignCenter = props.alignCenter;
  var flexContainerClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()((_classNames = {}, Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.flexContainer, true), Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.horizontalDisplay, horizontal !== undefined), _classNames));
  var tabButtons = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_7__["default"], {
    classes: {
      root: classes.root,
      fixed: classes.fixed,
      flexContainer: flexContainerClasses,
      indicator: classes.displayNone
    },
    value: active,
    onChange: handleChange,
    centered: alignCenter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, tabs.map(function (prop, key) {
    var _classNames2;

    var icon = {};

    if (prop.tabIcon !== undefined) {
      icon["icon"] = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(prop.tabIcon, {
        className: classes.tabIcon,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 26
        }
      });
    }

    var pillsClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()((_classNames2 = {}, Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, classes.pills, true), Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, classes.horizontalPills, horizontal !== undefined), Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames2, classes.pillsWithIcons, prop.tabIcon !== undefined), _classNames2));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_8__["default"], Object.assign({
      label: prop.tabButton,
      key: key
    }, icon, {
      classes: {
        root: pillsClasses,
        selected: classes[color],
        wrapper: classes.tabWrapper
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }
    }));
  }));
  var tabContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.contentWrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_swipeable_views__WEBPACK_IMPORTED_MODULE_5___default.a, {
    axis: direction === "rtl" ? "x-reverse" : "x",
    index: active,
    onChangeIndex: handleChangeIndex,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }, tabs.map(function (prop, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: classes.tabContent,
      key: key,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 13
      }
    }, prop.tabContent);
  })));
  return horizontal !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], Object.assign({}, horizontal.tabsGrid, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }
  }), tabButtons), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], Object.assign({}, horizontal.contentGrid, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }), tabContent)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 5
    }
  }, tabButtons, tabContent);
}
NavPills.defaultProps = {
  active: 0,
  color: "primary"
};
NavPills.propTypes = {
  // index of the default active pill
  active: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  tabs: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    tabButton: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
    tabIcon: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
    tabContent: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node
  })).isRequired,
  color: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(["primary", "warning", "danger", "success", "info", "rose"]),
  direction: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  horizontal: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    tabsGrid: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
    contentGrid: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object
  }),
  alignCenter: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool
};

/***/ }),

/***/ "./src/components/Pagination/Pagination.js":
/*!*************************************************!*\
  !*** ./src/components/Pagination/Pagination.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pagination; });
/* harmony import */ var _Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var assets_jss_material_kit_react_components_paginationStyle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/jss/material-kit-react/components/paginationStyle.js */ "./src/assets/jss/material-kit-react/components/paginationStyle.js");

var _jsxFileName = "/Users/adhigunarsa/Web-Development/gardening-site/src/components/Pagination/Pagination.js";
 // nodejs library to set properties for components

 // nodejs library that concatenates classes

 // @material-ui/core components




var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(assets_jss_material_kit_react_components_paginationStyle_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
function Pagination(props) {
  var _this = this;

  var classes = useStyles();
  var pages = props.pages,
      color = props.color;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: classes.pagination,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, pages.map(function (prop, key) {
    var _classNames;

    var paginationLink = classnames__WEBPACK_IMPORTED_MODULE_3___default()((_classNames = {}, Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.paginationLink, true), Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes[color], prop.active), Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, classes.disabled, prop.disabled), _classNames));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: classes.paginationItem,
      key: key,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 11
      }
    }, prop.onClick !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      onClick: prop.onClick,
      className: paginationLink,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 15
      }
    }, prop.text) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      onClick: function onClick() {
        return alert("you've clicked " + prop.text);
      },
      className: paginationLink,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 15
      }
    }, prop.text));
  }));
}
Pagination.defaultProps = {
  color: "primary"
};
Pagination.propTypes = {
  pages: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    active: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
    disabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
    text: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(["PREV", "NEXT", "..."])]).isRequired,
    onClick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
  })).isRequired,
  color: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(["primary", "info", "success", "warning", "danger"])
};

/***/ }),

/***/ "./src/components/Parallax/Parallax.js":
/*!*********************************************!*\
  !*** ./src/components/Parallax/Parallax.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Parallax; });
/* harmony import */ var _Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var assets_jss_material_kit_react_components_parallaxStyle_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/jss/material-kit-react/components/parallaxStyle.js */ "./src/assets/jss/material-kit-react/components/parallaxStyle.js");



var _jsxFileName = "/Users/adhigunarsa/Web-Development/gardening-site/src/components/Parallax/Parallax.js";
 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // @material-ui/core components

 // core components


var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(assets_jss_material_kit_react_components_parallaxStyle_js__WEBPACK_IMPORTED_MODULE_7__["default"]);
function Parallax(props) {
  var _classNames;

  var windowScrollTop;

  if (window.innerWidth >= 768) {
    windowScrollTop = window.pageYOffset / 3;
  } else {
    windowScrollTop = 0;
  }

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState("translate3d(0," + windowScrollTop + "px,0)"),
      _React$useState2 = Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      transform = _React$useState2[0],
      setTransform = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {
    if (window.innerWidth >= 768) {
      window.addEventListener("scroll", resetTransform);
    }

    return function cleanup() {
      if (window.innerWidth >= 768) {
        window.removeEventListener("scroll", resetTransform);
      }
    };
  });

  var resetTransform = function resetTransform() {
    var windowScrollTop = window.pageYOffset / 3;
    setTransform("translate3d(0," + windowScrollTop + "px,0)");
  };

  var filter = props.filter,
      className = props.className,
      children = props.children,
      style = props.style,
      image = props.image,
      small = props.small;
  var classes = useStyles();
  var parallaxClasses = classnames__WEBPACK_IMPORTED_MODULE_4___default()((_classNames = {}, Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, classes.parallax, true), Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, classes.filter, filter), Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, classes.small, small), Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, className, className !== undefined), _classNames));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: parallaxClasses,
    style: Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, style, {
      backgroundImage: "url(" + image + ")",
      transform: transform
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, children);
}
Parallax.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  filter: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.node,
  style: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  image: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  small: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool
};

/***/ }),

/***/ "./src/components/Snackbar/SnackbarContent.js":
/*!****************************************************!*\
  !*** ./src/components/Snackbar/SnackbarContent.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SnackbarContent; });
/* harmony import */ var _Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_SnackbarContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/SnackbarContent */ "./node_modules/@material-ui/core/esm/SnackbarContent/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Icon */ "./node_modules/@material-ui/core/esm/Icon/index.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_jss_material_kit_react_components_snackbarContentStyle_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/jss/material-kit-react/components/snackbarContentStyle.js */ "./src/assets/jss/material-kit-react/components/snackbarContentStyle.js");

var _jsxFileName = "/Users/adhigunarsa/Web-Development/gardening-site/src/components/Snackbar/SnackbarContent.js";
 // nodejs library to set properties for components

 // @material-ui/core components




 // @material-ui/icons

 // core components


var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(assets_jss_material_kit_react_components_snackbarContentStyle_js__WEBPACK_IMPORTED_MODULE_8__["default"]);
function SnackbarContent(props) {
  var message = props.message,
      color = props.color,
      close = props.close,
      icon = props.icon;
  var classes = useStyles();
  var action = [];

  var closeAlert = function closeAlert() {
    setAlert(null);
  };

  if (close !== undefined) {
    action = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: classes.iconButton,
      key: "close",
      "aria-label": "Close",
      color: "inherit",
      onClick: closeAlert,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_7___default.a, {
      className: classes.close,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }
    }))];
  }

  var snackIcon = null;

  switch (typeof icon) {
    case "object":
      snackIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(props.icon, {
        className: classes.icon,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 19
        }
      });
      break;

    case "string":
      snackIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: classes.icon,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 19
        }
      }, props.icon);
      break;

    default:
      snackIcon = null;
      break;
  }

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_SnackbarContent__WEBPACK_IMPORTED_MODULE_4__["default"], {
    message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }
    }, snackIcon, message, close !== undefined ? action : null),
    classes: {
      root: classes.root + " " + classes[color],
      message: classes.message + " " + classes.container
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  })),
      _React$useState2 = Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      alert = _React$useState2[0],
      setAlert = _React$useState2[1];

  return alert;
}
SnackbarContent.propTypes = {
  message: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired,
  color: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(["info", "success", "warning", "danger", "primary"]),
  close: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string])
};

/***/ }),

/***/ "./src/components/Typography/Danger.js":
/*!*********************************************!*\
  !*** ./src/components/Typography/Danger.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Danger; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var assets_jss_material_kit_react_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/jss/material-kit-react/components/typographyStyle.js */ "./src/assets/jss/material-kit-react/components/typographyStyle.js");
var _jsxFileName = "/Users/adhigunarsa/Web-Development/gardening-site/src/components/Typography/Danger.js";
 // nodejs library to set properties for components

 // @material-ui/core components

 // core components


var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(assets_jss_material_kit_react_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
function Danger(props) {
  var classes = useStyles();
  var children = props.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.defaultFontStyle + " " + classes.dangerText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, children);
}
Danger.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};

/***/ }),

/***/ "./src/components/Typography/Info.js":
/*!*******************************************!*\
  !*** ./src/components/Typography/Info.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Info; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var assets_jss_material_kit_react_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/jss/material-kit-react/components/typographyStyle.js */ "./src/assets/jss/material-kit-react/components/typographyStyle.js");
var _jsxFileName = "/Users/adhigunarsa/Web-Development/gardening-site/src/components/Typography/Info.js";
 // nodejs library to set properties for components

 // @material-ui/core components

 // core components


var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(assets_jss_material_kit_react_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
function Info(props) {
  var classes = useStyles();
  var children = props.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.defaultFontStyle + " " + classes.infoText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, children);
}
Info.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};

/***/ }),

/***/ "./src/components/Typography/Muted.js":
/*!********************************************!*\
  !*** ./src/components/Typography/Muted.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Muted; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var assets_jss_material_kit_react_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/jss/material-kit-react/components/typographyStyle.js */ "./src/assets/jss/material-kit-react/components/typographyStyle.js");
var _jsxFileName = "/Users/adhigunarsa/Web-Development/gardening-site/src/components/Typography/Muted.js";
 // nodejs library to set properties for components

 // @material-ui/core components

 // core components


var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(assets_jss_material_kit_react_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
function Muted(props) {
  var classes = useStyles();
  var children = props.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.defaultFontStyle + " " + classes.mutedText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, children);
}
Muted.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};

/***/ }),

/***/ "./src/components/Typography/Primary.js":
/*!**********************************************!*\
  !*** ./src/components/Typography/Primary.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Primary; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var assets_jss_material_kit_react_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/jss/material-kit-react/components/typographyStyle.js */ "./src/assets/jss/material-kit-react/components/typographyStyle.js");
var _jsxFileName = "/Users/adhigunarsa/Web-Development/gardening-site/src/components/Typography/Primary.js";
 // nodejs library to set properties for components

 // @material-ui/core components

 // core components


var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(assets_jss_material_kit_react_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
function Primary(props) {
  var classes = useStyles();
  var children = props.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.defaultFontStyle + " " + classes.primaryText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, children);
}
Primary.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};

/***/ }),

/***/ "./src/components/Typography/Quote.js":
/*!********************************************!*\
  !*** ./src/components/Typography/Quote.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Quote; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var assets_jss_material_kit_react_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/jss/material-kit-react/components/typographyStyle.js */ "./src/assets/jss/material-kit-react/components/typographyStyle.js");
var _jsxFileName = "/Users/adhigunarsa/Web-Development/gardening-site/src/components/Typography/Quote.js";
 // nodejs library to set properties for components

 // @material-ui/core components

 // core components


var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(assets_jss_material_kit_react_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
function Quote(props) {
  var text = props.text,
      author = props.author;
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("blockquote", {
    className: classes.defaultFontStyle + " " + classes.quote,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: classes.quoteText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: classes.quoteAuthor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, author));
}
Quote.propTypes = {
  text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  author: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};

/***/ }),

/***/ "./src/components/Typography/Small.js":
/*!********************************************!*\
  !*** ./src/components/Typography/Small.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Small; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var assets_jss_material_kit_react_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/jss/material-kit-react/components/typographyStyle.js */ "./src/assets/jss/material-kit-react/components/typographyStyle.js");
var _jsxFileName = "/Users/adhigunarsa/Web-Development/gardening-site/src/components/Typography/Small.js";
 // nodejs library to set properties for components

 // @material-ui/core components

 // core components


var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(assets_jss_material_kit_react_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
function Small(props) {
  var classes = useStyles();
  var children = props.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.defaultFontStyle + " " + classes.smallText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, children);
}
Small.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};

/***/ }),

/***/ "./src/components/Typography/Success.js":
/*!**********************************************!*\
  !*** ./src/components/Typography/Success.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Success; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var assets_jss_material_kit_react_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/jss/material-kit-react/components/typographyStyle.js */ "./src/assets/jss/material-kit-react/components/typographyStyle.js");
var _jsxFileName = "/Users/adhigunarsa/Web-Development/gardening-site/src/components/Typography/Success.js";
 // nodejs library to set properties for components

 // @material-ui/core components

 // core components


var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(assets_jss_material_kit_react_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
function Success(props) {
  var classes = useStyles();
  var children = props.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.defaultFontStyle + " " + classes.successText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, children);
}
Success.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};

/***/ }),

/***/ "./src/components/Typography/Warning.js":
/*!**********************************************!*\
  !*** ./src/components/Typography/Warning.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Warning; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var assets_jss_material_kit_react_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/jss/material-kit-react/components/typographyStyle.js */ "./src/assets/jss/material-kit-react/components/typographyStyle.js");
var _jsxFileName = "/Users/adhigunarsa/Web-Development/gardening-site/src/components/Typography/Warning.js";
 // nodejs library to set properties for components

 // @material-ui/core components

 // core components


var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(assets_jss_material_kit_react_components_typographyStyle_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
function Warning(props) {
  var classes = useStyles();
  var children = props.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.defaultFontStyle + " " + classes.warningText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, children);
}
Warning.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var assets_scss_material_kit_react_scss_v_1_8_0__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/scss/material-kit-react.scss?v=1.8.0 */ "./src/assets/scss/material-kit-react.scss?v=1.8.0");
/* harmony import */ var assets_scss_material_kit_react_scss_v_1_8_0__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_scss_material_kit_react_scss_v_1_8_0__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var views_Components_Components_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! views/Components/Components.js */ "./src/views/Components/Components.js");
/* harmony import */ var views_LandingPage_LandingPage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! views/LandingPage/LandingPage.js */ "./src/views/LandingPage/LandingPage.js");
/* harmony import */ var views_ProfilePage_ProfilePage_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! views/ProfilePage/ProfilePage.js */ "./src/views/ProfilePage/ProfilePage.js");
/* harmony import */ var views_LoginPage_LoginPage_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! views/LoginPage/LoginPage.js */ "./src/views/LoginPage/LoginPage.js");
/* harmony import */ var _views_HomePage_HomePage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/HomePage/HomePage */ "./src/views/HomePage/HomePage.js");
/* harmony import */ var _views_ContactPage_ContactPage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/ContactPage/ContactPage */ "./src/views/ContactPage/ContactPage.js");
var _jsxFileName = "/Users/adhigunarsa/Web-Development/gardening-site/src/index.js";




 // pages for this product







var hist = Object(history__WEBPACK_IMPORTED_MODULE_2__["createBrowserHistory"])();
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Router"], {
  history: hist,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
  path: "/landing-page",
  component: views_LandingPage_LandingPage_js__WEBPACK_IMPORTED_MODULE_6__["default"],
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 13
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
  path: "/profile-page",
  component: views_ProfilePage_ProfilePage_js__WEBPACK_IMPORTED_MODULE_7__["default"],
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 13
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
  path: "/contact-us",
  component: _views_ContactPage_ContactPage__WEBPACK_IMPORTED_MODULE_10__["default"],
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 13
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
  path: "/login-page",
  component: views_LoginPage_LoginPage_js__WEBPACK_IMPORTED_MODULE_8__["default"],
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 13
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
  path: "/all",
  component: views_Components_Components_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 13
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
  path: "/",
  component: _views_HomePage_HomePage__WEBPACK_IMPORTED_MODULE_9__["default"],
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 13
  }
}))), document.getElementById("root"));

/***/ }),

/***/ "./src/views/Components/Components.js":
/*!********************************************!*\
  !*** ./src/views/Components/Components.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Components; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var components_Header_Header_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Header/Header.js */ "./src/components/Header/Header.js");
/* harmony import */ var components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Footer/Footer.js */ "./src/components/Footer/Footer.js");
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./src/components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./src/components/Grid/GridItem.js");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./src/components/CustomButtons/Button.js");
/* harmony import */ var components_Parallax_Parallax_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/Parallax/Parallax.js */ "./src/components/Parallax/Parallax.js");
/* harmony import */ var components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/Header/HeaderLinks.js */ "./src/components/Header/HeaderLinks.js");
/* harmony import */ var _Sections_SectionBasics_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Sections/SectionBasics.js */ "./src/views/Components/Sections/SectionBasics.js");
/* harmony import */ var _Sections_SectionNavbars_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Sections/SectionNavbars.js */ "./src/views/Components/Sections/SectionNavbars.js");
/* harmony import */ var _Sections_SectionTabs_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Sections/SectionTabs.js */ "./src/views/Components/Sections/SectionTabs.js");
/* harmony import */ var _Sections_SectionPills_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Sections/SectionPills.js */ "./src/views/Components/Sections/SectionPills.js");
/* harmony import */ var _Sections_SectionNotifications_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Sections/SectionNotifications.js */ "./src/views/Components/Sections/SectionNotifications.js");
/* harmony import */ var _Sections_SectionTypography_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Sections/SectionTypography.js */ "./src/views/Components/Sections/SectionTypography.js");
/* harmony import */ var _Sections_SectionJavascript_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Sections/SectionJavascript.js */ "./src/views/Components/Sections/SectionJavascript.js");
/* harmony import */ var _Sections_SectionCarousel_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Sections/SectionCarousel.js */ "./src/views/Components/Sections/SectionCarousel.js");
/* harmony import */ var _Sections_SectionCompletedExamples_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Sections/SectionCompletedExamples.js */ "./src/views/Components/Sections/SectionCompletedExamples.js");
/* harmony import */ var _Sections_SectionLogin_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Sections/SectionLogin.js */ "./src/views/Components/Sections/SectionLogin.js");
/* harmony import */ var _Sections_SectionExamples_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Sections/SectionExamples.js */ "./src/views/Components/Sections/SectionExamples.js");
/* harmony import */ var _Sections_SectionDownload_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Sections/SectionDownload.js */ "./src/views/Components/Sections/SectionDownload.js");
/* harmony import */ var assets_jss_material_kit_react_views_components_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! assets/jss/material-kit-react/views/components.js */ "./src/assets/jss/material-kit-react/views/components.js");
var _jsxFileName = "/Users/adhigunarsa/Web-Development/gardening-site/src/views/Components/Components.js";
 // nodejs library that concatenates classes

 // react components for routing our app without refresh

 // @material-ui/core components

 // @material-ui/icons
// core components






 // sections for this page















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(assets_jss_material_kit_react_views_components_js__WEBPACK_IMPORTED_MODULE_23__["default"]);
function Components(props) {
  var classes = useStyles();
  var rest = Object.assign({}, props);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Header_Header_js__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({
    brand: "Material Kit React",
    rightLinks: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 21
      }
    }),
    fixed: true,
    color: "transparent",
    changeColorOnScroll: {
      height: 400,
      color: "white"
    }
  }, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Parallax_Parallax_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
    image: __webpack_require__(/*! assets/img/bg4.jpg */ "./src/assets/img/bg4.jpg"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.brand,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, "Material Kit React."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: classes.subtitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, "A Badass Material-UI Kit based on Material Design.")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.main, classes.mainRaised),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Sections_SectionBasics_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Sections_SectionNavbars_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Sections_SectionTabs_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Sections_SectionPills_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Sections_SectionNotifications_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Sections_SectionTypography_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Sections_SectionJavascript_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Sections_SectionCarousel_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Sections_SectionCompletedExamples_js__WEBPACK_IMPORTED_MODULE_19__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Sections_SectionLogin_js__WEBPACK_IMPORTED_MODULE_20__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    md: 12,
    className: classes.textCenter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/login-page",
    className: classes.link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    color: "primary",
    size: "lg",
    simple: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, "View Login Page"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Sections_SectionExamples_js__WEBPACK_IMPORTED_MODULE_21__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Sections_SectionDownload_js__WEBPACK_IMPORTED_MODULE_22__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/views/Components/Sections/SectionBasics.js":
/*!********************************************************!*\
  !*** ./src/views/Components/Sections/SectionBasics.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SectionBasics; });
/* harmony import */ var _Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/distribute/nouislider.js");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "./node_modules/@material-ui/core/esm/InputAdornment/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js");
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Radio */ "./node_modules/@material-ui/core/esm/Radio/index.js");
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Switch */ "./node_modules/@material-ui/core/esm/Switch/index.js");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "./node_modules/@material-ui/icons/Favorite.js");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/People */ "./node_modules/@material-ui/icons/People.js");
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Check */ "./node_modules/@material-ui/icons/Check.js");
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_FiberManualRecord__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/FiberManualRecord */ "./node_modules/@material-ui/icons/FiberManualRecord.js");
/* harmony import */ var _material_ui_icons_FiberManualRecord__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FiberManualRecord__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./src/components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./src/components/Grid/GridItem.js");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./src/components/CustomButtons/Button.js");
/* harmony import */ var components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! components/CustomInput/CustomInput.js */ "./src/components/CustomInput/CustomInput.js");
/* harmony import */ var components_CustomLinearProgress_CustomLinearProgress_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! components/CustomLinearProgress/CustomLinearProgress.js */ "./src/components/CustomLinearProgress/CustomLinearProgress.js");
/* harmony import */ var components_Pagination_Pagination_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! components/Pagination/Pagination.js */ "./src/components/Pagination/Pagination.js");
/* harmony import */ var components_Badge_Badge_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! components/Badge/Badge.js */ "./src/components/Badge/Badge.js");
/* harmony import */ var assets_jss_material_kit_react_views_componentsSections_basicsStyle_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! assets/jss/material-kit-react/views/componentsSections/basicsStyle.js */ "./src/assets/jss/material-kit-react/views/componentsSections/basicsStyle.js");


var _jsxFileName = "/Users/adhigunarsa/Web-Development/gardening-site/src/views/Components/Sections/SectionBasics.js";
 // plugin that creates slider

 // @material-ui/core components






 // @material-ui/icons




 // core components









var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(assets_jss_material_kit_react_views_componentsSections_basicsStyle_js__WEBPACK_IMPORTED_MODULE_21__["default"]);
function SectionBasics() {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState([24, 22]),
      _React$useState2 = Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      checked = _React$useState2[0],
      setChecked = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState("b"),
      _React$useState4 = Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      selectedEnabled = _React$useState4[0],
      setSelectedEnabled = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(true),
      _React$useState6 = Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState5, 2),
      checkedA = _React$useState6[0],
      setCheckedA = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState8 = Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState7, 2),
      checkedB = _React$useState8[0],
      setCheckedB = _React$useState8[1];

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    if (!document.getElementById("sliderRegular").classList.contains("noUi-target")) {
      nouislider__WEBPACK_IMPORTED_MODULE_3___default.a.create(document.getElementById("sliderRegular"), {
        start: [40],
        connect: [true, false],
        step: 1,
        range: {
          min: 0,
          max: 100
        }
      });
    }

    if (!document.getElementById("sliderDouble").classList.contains("noUi-target")) {
      nouislider__WEBPACK_IMPORTED_MODULE_3___default.a.create(document.getElementById("sliderDouble"), {
        start: [20, 60],
        connect: [false, true, false],
        step: 1,
        range: {
          min: 0,
          max: 100
        }
      });
    }

    return function cleanup() {};
  });

  var handleToggle = function handleToggle(value) {
    var currentIndex = checked.indexOf(value);

    var newChecked = Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(checked);

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.sections,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, "Basic Elements")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    id: "buttons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, "Buttons", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("small", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 15
    }
  }, "Pick your style"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    justify: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    xs: 12,
    sm: 12,
    md: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 15
    }
  }, "Default"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    color: "primary",
    round: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 15
    }
  }, "round"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    color: "primary",
    round: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_10___default.a, {
    className: classes.icons,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }
  }), " with icon"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    justIcon: true,
    round: true,
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_10___default.a, {
    className: classes.icons,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    color: "primary",
    simple: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 15
    }
  }, "simple"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("small", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 15
    }
  }, "Pick your size"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    justify: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    xs: 12,
    sm: 12,
    md: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    color: "primary",
    size: "sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 15
    }
  }, "Small"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 15
    }
  }, "Regular"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    color: "primary",
    size: "lg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 15
    }
  }, "Large"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("small", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 15
    }
  }, "Pick your color"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    justify: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    xs: 12,
    sm: 12,
    md: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 15
    }
  }, "Default"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 15
    }
  }, "Primary"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    color: "info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 15
    }
  }, "Info"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    color: "success",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 15
    }
  }, "Success"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    color: "warning",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 15
    }
  }, "Warning"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    color: "danger",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 15
    }
  }, "Danger"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    color: "rose",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 15
    }
  }, "Rose")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.space50,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    id: "inputs",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }
  }, "Inputs")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    xs: 12,
    sm: 4,
    md: 4,
    lg: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    id: "regular",
    inputProps: {
      placeholder: "Regular"
    },
    formControlProps: {
      fullWidth: true
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 15
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    xs: 12,
    sm: 4,
    md: 4,
    lg: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    labelText: "With floating label",
    id: "float",
    formControlProps: {
      fullWidth: true
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 15
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    xs: 12,
    sm: 4,
    md: 4,
    lg: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    labelText: "Success input",
    id: "success",
    success: true,
    formControlProps: {
      fullWidth: true
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 15
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    xs: 12,
    sm: 4,
    md: 4,
    lg: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    labelText: "Error input",
    id: "error",
    error: true,
    formControlProps: {
      fullWidth: true
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 15
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    xs: 12,
    sm: 4,
    md: 4,
    lg: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    labelText: "With material Icons",
    id: "material",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      endAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_5__["default"], {
        position: "end",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_11___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 23
        }
      }))
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 15
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    xs: 12,
    sm: 4,
    md: 4,
    lg: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    labelText: "With Font Awesome Icons",
    id: "font-awesome",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      endAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_5__["default"], {
        position: "end",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
        className: "fas fa-users",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 23
        }
      }))
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 15
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.space70,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    id: "checkRadios",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    xs: 12,
    sm: 6,
    md: 4,
    lg: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 17
    }
  }, "Checkboxes")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7__["default"], {
      tabIndex: -1,
      onClick: function onClick() {
        return handleToggle(21);
      },
      checkedIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_12___default.a, {
        className: classes.checkedIcon,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 36
        }
      }),
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_12___default.a, {
        className: classes.uncheckedIcon,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 29
        }
      }),
      classes: {
        checked: classes.checked,
        root: classes.checkRoot
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 21
      }
    }),
    classes: {
      label: classes.label,
      root: classes.labelRoot
    },
    label: "Unchecked",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7__["default"], {
      tabIndex: -1,
      onClick: function onClick() {
        return handleToggle(22);
      },
      checked: checked.indexOf(22) !== -1 ? true : false,
      checkedIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_12___default.a, {
        className: classes.checkedIcon,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259,
          columnNumber: 36
        }
      }),
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_12___default.a, {
        className: classes.uncheckedIcon,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260,
          columnNumber: 29
        }
      }),
      classes: {
        checked: classes.checked,
        root: classes.checkRoot
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 21
      }
    }),
    classes: {
      label: classes.label,
      root: classes.labelRoot
    },
    label: "Checked",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
    disabled: true,
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7__["default"], {
      tabIndex: -1,
      checkedIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_12___default.a, {
        className: classes.checkedIcon,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 36
        }
      }),
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_12___default.a, {
        className: classes.uncheckedIcon,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284,
          columnNumber: 29
        }
      }),
      classes: {
        checked: classes.checked,
        root: classes.checkRoot
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 21
      }
    }),
    classes: {
      label: classes.label,
      disabled: classes.disabledCheckboxAndRadio,
      root: classes.labelRoot
    },
    label: "Disabled Unchecked",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
    disabled: true,
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7__["default"], {
      tabIndex: -1,
      checked: checked.indexOf(24) !== -1 ? true : false,
      checkedIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_12___default.a, {
        className: classes.checkedIcon,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312,
          columnNumber: 36
        }
      }),
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_12___default.a, {
        className: classes.uncheckedIcon,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313,
          columnNumber: 29
        }
      }),
      classes: {
        checked: classes.checked,
        root: classes.checkRoot
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 309,
        columnNumber: 21
      }
    }),
    classes: {
      label: classes.label,
      disabled: classes.disabledCheckboxAndRadio,
      root: classes.labelRoot
    },
    label: "Disabled Checked",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 17
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    xs: 12,
    sm: 6,
    md: 4,
    lg: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 17
    }
  }, "Radio Buttons")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_8__["default"], {
      checked: selectedEnabled === "a",
      onChange: function onChange() {
        return setSelectedEnabled("a");
      },
      value: "a",
      name: "radio button enabled",
      "aria-label": "A",
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_FiberManualRecord__WEBPACK_IMPORTED_MODULE_13___default.a, {
        className: classes.radioUnchecked,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349,
          columnNumber: 25
        }
      }),
      checkedIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_FiberManualRecord__WEBPACK_IMPORTED_MODULE_13___default.a, {
        className: classes.radioChecked,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352,
          columnNumber: 25
        }
      }),
      classes: {
        checked: classes.radio,
        root: classes.radioRoot
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 342,
        columnNumber: 21
      }
    }),
    classes: {
      label: classes.label,
      root: classes.labelRoot
    },
    label: "First Radio",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_8__["default"], {
      checked: selectedEnabled === "b",
      onChange: function onChange() {
        return setSelectedEnabled("b");
      },
      value: "b",
      name: "radio button enabled",
      "aria-label": "B",
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_FiberManualRecord__WEBPACK_IMPORTED_MODULE_13___default.a, {
        className: classes.radioUnchecked,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383,
          columnNumber: 25
        }
      }),
      checkedIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_FiberManualRecord__WEBPACK_IMPORTED_MODULE_13___default.a, {
        className: classes.radioChecked,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386,
          columnNumber: 25
        }
      }),
      classes: {
        checked: classes.radio,
        root: classes.radioRoot
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 376,
        columnNumber: 21
      }
    }),
    classes: {
      label: classes.label,
      root: classes.labelRoot
    },
    label: "Second Radio",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
    disabled: true,
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_8__["default"], {
      checked: false,
      value: "a",
      name: "radio button disabled",
      "aria-label": "B",
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_FiberManualRecord__WEBPACK_IMPORTED_MODULE_13___default.a, {
        className: classes.radioUnchecked,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 417,
          columnNumber: 25
        }
      }),
      checkedIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_FiberManualRecord__WEBPACK_IMPORTED_MODULE_13___default.a, {
        className: classes.radioChecked,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 420,
          columnNumber: 25
        }
      }),
      classes: {
        checked: classes.radio,
        disabled: classes.disabledCheckboxAndRadio,
        root: classes.radioRoot
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 411,
        columnNumber: 21
      }
    }),
    classes: {
      label: classes.label,
      root: classes.labelRoot
    },
    label: "Disabled Unchecked Radio",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
    disabled: true,
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_8__["default"], {
      checked: true,
      value: "b",
      name: "radio button disabled",
      "aria-label": "B",
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_FiberManualRecord__WEBPACK_IMPORTED_MODULE_13___default.a, {
        className: classes.radioUnchecked,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 452,
          columnNumber: 25
        }
      }),
      checkedIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_FiberManualRecord__WEBPACK_IMPORTED_MODULE_13___default.a, {
        className: classes.radioChecked,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 455,
          columnNumber: 25
        }
      }),
      classes: {
        checked: classes.radio,
        disabled: classes.disabledCheckboxAndRadio,
        root: classes.radioRoot
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 446,
        columnNumber: 21
      }
    }),
    classes: {
      label: classes.label,
      root: classes.labelRoot
    },
    label: "Disabled Checked Radio",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443,
      columnNumber: 17
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    xs: 12,
    sm: 6,
    md: 4,
    lg: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 469,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471,
      columnNumber: 17
    }
  }, "Toggle Buttons")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 473,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_9__["default"], {
      checked: checkedA,
      onChange: function onChange(event) {
        return setCheckedA(event.target.checked);
      },
      value: "checkedA",
      classes: {
        switchBase: classes.switchBase,
        checked: classes.switchChecked,
        thumb: classes.switchIcon,
        track: classes.switchBar
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 476,
        columnNumber: 21
      }
    }),
    classes: {
      label: classes.label
    },
    label: "Toggle is on",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 474,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 494,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_9__["default"], {
      checked: checkedB,
      onChange: function onChange(event) {
        return setCheckedB(event.target.checked);
      },
      value: "checkedB",
      classes: {
        switchBase: classes.switchBase,
        checked: classes.switchChecked,
        thumb: classes.switchIcon,
        track: classes.switchBar
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 497,
        columnNumber: 21
      }
    }),
    classes: {
      label: classes.label
    },
    label: "Toggle is off",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 495,
      columnNumber: 17
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.space70,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 518,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    id: "progress",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 519,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 520,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 522,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 523,
      columnNumber: 17
    }
  }, "Progress Bars")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_CustomLinearProgress_CustomLinearProgress_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
    variant: "determinate",
    color: "primary",
    value: 30,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 525,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_CustomLinearProgress_CustomLinearProgress_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
    variant: "determinate",
    color: "info",
    value: 60,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 530,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_CustomLinearProgress_CustomLinearProgress_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
    variant: "determinate",
    color: "success",
    value: 100,
    style: {
      width: "35%",
      display: "inline-block"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 535,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_CustomLinearProgress_CustomLinearProgress_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
    variant: "determinate",
    color: "warning",
    value: 100,
    style: {
      width: "20%",
      display: "inline-block"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 541,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_CustomLinearProgress_CustomLinearProgress_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
    variant: "determinate",
    color: "danger",
    value: 25,
    style: {
      width: "45%",
      display: "inline-block"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 547,
      columnNumber: 15
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 554,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 555,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 556,
      columnNumber: 17
    }
  }, "Pagination")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Pagination_Pagination_js__WEBPACK_IMPORTED_MODULE_19__["default"], {
    pages: [{
      text: 1
    }, {
      text: "..."
    }, {
      text: 5
    }, {
      text: 6
    }, {
      active: true,
      text: 7
    }, {
      text: 8
    }, {
      text: 9
    }, {
      text: "..."
    }, {
      text: 12
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Pagination_Pagination_js__WEBPACK_IMPORTED_MODULE_19__["default"], {
    pages: [{
      text: "PREV"
    }, {
      text: 1
    }, {
      text: 2
    }, {
      active: true,
      text: 3
    }, {
      text: 4
    }, {
      text: 5
    }, {
      text: "NEXT"
    }],
    color: "info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 571,
      columnNumber: 15
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    id: "sliders",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 586,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 587,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 588,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 589,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 590,
      columnNumber: 17
    }
  }, "Sliders")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    id: "sliderRegular",
    className: "slider-primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 592,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 593,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    id: "sliderDouble",
    className: "slider-info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 594,
      columnNumber: 15
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 596,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 597,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 598,
      columnNumber: 17
    }
  }, "Badges")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Badge_Badge_js__WEBPACK_IMPORTED_MODULE_20__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 600,
      columnNumber: 15
    }
  }, "default"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Badge_Badge_js__WEBPACK_IMPORTED_MODULE_20__["default"], {
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 601,
      columnNumber: 15
    }
  }, "primary"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Badge_Badge_js__WEBPACK_IMPORTED_MODULE_20__["default"], {
    color: "info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 602,
      columnNumber: 15
    }
  }, "info"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Badge_Badge_js__WEBPACK_IMPORTED_MODULE_20__["default"], {
    color: "success",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 603,
      columnNumber: 15
    }
  }, "success"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Badge_Badge_js__WEBPACK_IMPORTED_MODULE_20__["default"], {
    color: "warning",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 604,
      columnNumber: 15
    }
  }, "warning"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Badge_Badge_js__WEBPACK_IMPORTED_MODULE_20__["default"], {
    color: "danger",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 605,
      columnNumber: 15
    }
  }, "danger"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Badge_Badge_js__WEBPACK_IMPORTED_MODULE_20__["default"], {
    color: "rose",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 606,
      columnNumber: 15
    }
  }, "rose"))))));
}

/***/ }),

/***/ "./src/views/Components/Sections/SectionCarousel.js":
/*!**********************************************************!*\
  !*** ./src/views/Components/Sections/SectionCarousel.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SectionCarousel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/LocationOn */ "./node_modules/@material-ui/icons/LocationOn.js");
/* harmony import */ var _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./src/components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./src/components/Grid/GridItem.js");
/* harmony import */ var components_Card_Card_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Card/Card.js */ "./src/components/Card/Card.js");
/* harmony import */ var assets_img_bg_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/img/bg.jpg */ "./src/assets/img/bg.jpg");
/* harmony import */ var assets_img_bg_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_img_bg_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_img_bg2_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/img/bg2.jpg */ "./src/assets/img/bg2.jpg");
/* harmony import */ var assets_img_bg2_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_img_bg2_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var assets_img_bg3_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/img/bg3.jpg */ "./src/assets/img/bg3.jpg");
/* harmony import */ var assets_img_bg3_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(assets_img_bg3_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var assets_jss_material_kit_react_views_componentsSections_carouselStyle_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! assets/jss/material-kit-react/views/componentsSections/carouselStyle.js */ "./src/assets/jss/material-kit-react/views/componentsSections/carouselStyle.js");
var _jsxFileName = "/Users/adhigunarsa/Web-Development/gardening-site/src/views/Components/Sections/SectionCarousel.js";
 // react component for creating beautiful carousel

 // @material-ui/core components

 // @material-ui/icons

 // core components








var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(assets_jss_material_kit_react_views_componentsSections_carouselStyle_js__WEBPACK_IMPORTED_MODULE_10__["default"]);
function SectionCarousel() {
  var classes = useStyles();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.section,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    xs: 12,
    sm: 12,
    md: 8,
    className: classes.marginAuto,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Card_Card_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    carousel: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, Object.assign({}, settings, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: assets_img_bg_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: "First slide",
    className: "slick-image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 19
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "slick-caption",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "slick-icons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 23
    }
  }), "Yellowstone National Park, United States"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: assets_img_bg2_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
    alt: "Second slide",
    className: "slick-image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 19
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "slick-caption",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "slick-icons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 23
    }
  }), "Somewhere Beyond, United States"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: assets_img_bg3_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,
    alt: "Third slide",
    className: "slick-image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 19
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "slick-caption",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "slick-icons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 23
    }
  }), "Yellowstone National Park, United States")))))))));
}

/***/ }),

/***/ "./src/views/Components/Sections/SectionCompletedExamples.js":
/*!*******************************************************************!*\
  !*** ./src/views/Components/Sections/SectionCompletedExamples.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SectionCompletedExamples; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./src/components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./src/components/Grid/GridItem.js");
/* harmony import */ var assets_jss_material_kit_react_views_componentsSections_completedStyle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/jss/material-kit-react/views/componentsSections/completedStyle.js */ "./src/assets/jss/material-kit-react/views/componentsSections/completedStyle.js");
var _jsxFileName = "/Users/adhigunarsa/Web-Development/gardening-site/src/views/Components/Sections/SectionCompletedExamples.js";
 // @material-ui/core components

 // @material-ui/icons
// core components




var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(assets_jss_material_kit_react_views_componentsSections_completedStyle_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
function SectionCompletedExamples() {
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.section,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    justify: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    xs: 12,
    sm: 12,
    md: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, "Completed with examples"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, "The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you", "'", "re good to go. More importantly, looking at them will give you a picture of what you can build with this powerful kit.")))));
}

/***/ }),

/***/ "./src/views/Components/Sections/SectionDownload.js":
/*!**********************************************************!*\
  !*** ./src/views/Components/Sections/SectionDownload.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SectionDownload; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./src/components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./src/components/Grid/GridItem.js");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./src/components/CustomButtons/Button.js");
/* harmony import */ var assets_jss_material_kit_react_views_componentsSections_downloadStyle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/jss/material-kit-react/views/componentsSections/downloadStyle.js */ "./src/assets/jss/material-kit-react/views/componentsSections/downloadStyle.js");
var _jsxFileName = "/Users/adhigunarsa/Web-Development/gardening-site/src/views/Components/Sections/SectionDownload.js";

/*eslint-disable*/
 // @material-ui/core components

 // @material-ui/icons



 // core components


var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(assets_jss_material_kit_react_views_componentsSections_downloadStyle_js__WEBPACK_IMPORTED_MODULE_5__["default"]);
function SectionDownload() {
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.section,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.textCenter,
    justify: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    xs: 12,
    sm: 12,
    md: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, "Do you love this UI Kit?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, "Cause if you do, it can be yours for FREE. Hit the buttons below to navigate to our website where you can find the kit. We also have the Bootstrap 4 version on plain HTML. Start a new project or give an old Bootstrap project a new look!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    xs: 12,
    sm: 8,
    md: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: "primary",
    size: "lg",
    href: "https://www.creative-tim.com/product/material-kit-react?ref=mkr-download-section",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, "Free React Download"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: "primary",
    size: "lg",
    href: "https://www.creative-tim.com/product/material-kit?ref=mkr-download-section",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, "Free HTML Downoad"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.textCenter,
    justify: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    xs: 12,
    sm: 12,
    md: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, "Want more?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, "We", "'", "ve launched", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.creative-tim.com/product/material-kit-pro-react?ref=mkr-download-section",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }, "Material Kit PRO React", " "), ".It has a huge number of components, sections and example pages. Start Your Development With A Badass Material-UI nspired by Material Design.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    xs: 12,
    sm: 8,
    md: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: "rose",
    size: "lg",
    href: "https://www.creative-tim.com/product/material-kit-pro-react?ref=mkr-download-section",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, "Material Kit PRO"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: "rose",
    size: "lg",
    href: "https://www.creative-tim.com/product/material-dashboard-pro-react?ref=mkr-download-section",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, "Material Dashboard PRO"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.textCenter + " " + classes.sharingArea,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    justify: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }, "Thank you for supporting us!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: "twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: classes.socials + " fab fa-twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }), " Tweet"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: "facebook",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: classes.socials + " fab fa-facebook-square",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }), " Share"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: "google",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: classes.socials + " fab fa-google-plus-g",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }), "Share"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: "github",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: classes.socials + " fab fa-github",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }), " Star"))));
}

/***/ }),

/***/ "./src/views/Components/Sections/SectionExamples.js":
/*!**********************************************************!*\
  !*** ./src/views/Components/Sections/SectionExamples.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SectionExamples; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./src/components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./src/components/Grid/GridItem.js");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./src/components/CustomButtons/Button.js");
/* harmony import */ var assets_img_landing_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/img/landing.jpg */ "./src/assets/img/landing.jpg");
/* harmony import */ var assets_img_landing_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_img_landing_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_img_profile_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/img/profile.jpg */ "./src/assets/img/profile.jpg");
/* harmony import */ var assets_img_profile_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_img_profile_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_jss_material_kit_react_views_componentsSections_exampleStyle_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/jss/material-kit-react/views/componentsSections/exampleStyle.js */ "./src/assets/jss/material-kit-react/views/componentsSections/exampleStyle.js");
var _jsxFileName = "/Users/adhigunarsa/Web-Development/gardening-site/src/views/Components/Sections/SectionExamples.js";
 // react components for routing our app without refresh

 // @material-ui/core components

 // @material-ui/icons
// core components







var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(assets_jss_material_kit_react_views_componentsSections_exampleStyle_js__WEBPACK_IMPORTED_MODULE_8__["default"]);
function SectionExamples() {
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.section,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    justify: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "landing-page",
    className: classes.link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: assets_img_landing_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "...",
    className: classes.imgRaised + " " + classes.imgRounded + " " + classes.imgFluid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: "primary",
    size: "lg",
    simple: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }, "View landing page"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "profile-page",
    className: classes.link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: assets_img_profile_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: "...",
    className: classes.imgRaised + " " + classes.imgRounded + " " + classes.imgFluid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: "primary",
    size: "lg",
    simple: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 15
    }
  }, "View profile page"))))));
}

/***/ }),

/***/ "./src/views/Components/Sections/SectionJavascript.js":
/*!************************************************************!*\
  !*** ./src/views/Components/Sections/SectionJavascript.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SectionJavascript; });
/* harmony import */ var _Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_datetime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-datetime */ "./node_modules/react-datetime/DateTime.js");
/* harmony import */ var react_datetime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_datetime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Slide */ "./node_modules/@material-ui/core/esm/Slide/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "./node_modules/@material-ui/core/esm/Tooltip/index.js");
/* harmony import */ var _material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Popover */ "./node_modules/@material-ui/core/esm/Popover/index.js");
/* harmony import */ var _material_ui_icons_LibraryBooks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/LibraryBooks */ "./node_modules/@material-ui/icons/LibraryBooks.js");
/* harmony import */ var _material_ui_icons_LibraryBooks__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LibraryBooks__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./src/components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./src/components/Grid/GridItem.js");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./src/components/CustomButtons/Button.js");
/* harmony import */ var assets_jss_material_kit_react_views_componentsSections_javascriptStyles_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! assets/jss/material-kit-react/views/componentsSections/javascriptStyles.js */ "./src/assets/jss/material-kit-react/views/componentsSections/javascriptStyles.js");

var _jsxFileName = "/Users/adhigunarsa/Web-Development/gardening-site/src/views/Components/Sections/SectionJavascript.js";
 // react plugin for creating date-time-picker

 // @material-ui/core components











 // @material-ui/icons


 // core components





var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(assets_jss_material_kit_react_views_componentsSections_javascriptStyles_js__WEBPACK_IMPORTED_MODULE_19__["default"]);
var Transition = react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(function Transition(props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({
    direction: "down",
    ref: ref
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 10
    }
  }));
});
Transition.displayName = "Transition";
function SectionJavascript() {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null),
      _React$useState2 = Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      anchorElLeft = _React$useState2[0],
      setAnchorElLeft = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null),
      _React$useState4 = Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      anchorElTop = _React$useState4[0],
      setAnchorElTop = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null),
      _React$useState6 = Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState5, 2),
      anchorElBottom = _React$useState6[0],
      setAnchorElBottom = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null),
      _React$useState8 = Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState7, 2),
      anchorElRight = _React$useState8[0],
      setAnchorElRight = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState10 = Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState9, 2),
      classicModal = _React$useState10[0],
      setClassicModal = _React$useState10[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.section,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, "Javascript components")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }, "Modal")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    lg: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
    color: "primary",
    block: true,
    onClick: function onClick() {
      return setClassicModal(true);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_LibraryBooks__WEBPACK_IMPORTED_MODULE_14___default.a, {
    className: classes.icon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 19
    }
  }), "Classic"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6__["default"], {
    classes: {
      root: classes.center,
      paper: classes.modal
    },
    open: classicModal,
    TransitionComponent: Transition,
    keepMounted: true,
    onClose: function onClose() {
      return setClassicModal(false);
    },
    "aria-labelledby": "classic-modal-slide-title",
    "aria-describedby": "classic-modal-slide-description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "classic-modal-slide-title",
    disableTypography: true,
    className: classes.modalHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.modalCloseButton,
    key: "close",
    "aria-label": "Close",
    color: "inherit",
    onClick: function onClick() {
      return setClassicModal(false);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_15___default.a, {
    className: classes.modalClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 23
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: classes.modalTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 21
    }
  }, "Modal title")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: "classic-modal-slide-description",
    className: classes.modalBody,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 21
    }
  }, "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.modalFooter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
    color: "transparent",
    simple: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 21
    }
  }, "Nice Button"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
    onClick: function onClick() {
      return setClassicModal(false);
    },
    color: "danger",
    simple: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 21
    }
  }, "Close"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    xs: 12,
    sm: 12,
    md: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 17
    }
  }, "Datetime Picker")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: classes.label,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 19
    }
  }, "Datetime Picker"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 19
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_11__["default"], {
    fullWidth: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_datetime__WEBPACK_IMPORTED_MODULE_2___default.a, {
    inputProps: {
      placeholder: "Datetime Picker Here"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 21
    }
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 15
    }
  }, "Popovers")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
    onClick: function onClick(event) {
      return setAnchorElLeft(event.currentTarget);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 13
    }
  }, "On left"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_13__["default"], {
    classes: {
      paper: classes.popover
    },
    open: Boolean(anchorElLeft),
    anchorEl: anchorElLeft,
    onClose: function onClose() {
      return setAnchorElLeft(null);
    },
    anchorOrigin: {
      vertical: "center",
      horizontal: "left"
    },
    transformOrigin: {
      vertical: "center",
      horizontal: "right"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: classes.popoverHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 15
    }
  }, "Popover on left"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.popoverBody,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 15
    }
  }, "Here will be some very useful information about his popover. Here will be some very useful information about his popover.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
    onClick: function onClick(event) {
      return setAnchorElTop(event.currentTarget);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 13
    }
  }, "On top"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_13__["default"], {
    classes: {
      paper: classes.popover
    },
    open: Boolean(anchorElTop),
    anchorEl: anchorElTop,
    onClose: function onClose() {
      return setAnchorElTop(null);
    },
    anchorOrigin: {
      vertical: "top",
      horizontal: "center"
    },
    transformOrigin: {
      vertical: "bottom",
      horizontal: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: classes.popoverHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 15
    }
  }, "Popover on top"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.popoverBody,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 15
    }
  }, "Here will be some very useful information about his popover.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
    onClick: function onClick(event) {
      return setAnchorElBottom(event.currentTarget);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 13
    }
  }, "On bottom"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_13__["default"], {
    classes: {
      paper: classes.popover
    },
    open: Boolean(anchorElBottom),
    anchorEl: anchorElBottom,
    onClose: function onClose() {
      return setAnchorElBottom(null);
    },
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "center"
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: classes.popoverHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 15
    }
  }, "Popover on bottom"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.popoverBody,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 15
    }
  }, "Here will be some very useful information about his popover.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
    onClick: function onClick(event) {
      return setAnchorElRight(event.currentTarget);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 13
    }
  }, "On right"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_13__["default"], {
    classes: {
      paper: classes.popover
    },
    open: Boolean(anchorElRight),
    anchorEl: anchorElRight,
    onClose: function onClose() {
      return setAnchorElRight(null);
    },
    anchorOrigin: {
      vertical: "center",
      horizontal: "right"
    },
    transformOrigin: {
      vertical: "center",
      horizontal: "left"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: classes.popoverHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 15
    }
  }, "Popover on right"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.popoverBody,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 15
    }
  }, "Here will be some very useful information about his popover.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 15
    }
  }, "Tooltips")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "tooltip-left",
    title: "Tooltip on left",
    placement: "left",
    classes: {
      tooltip: classes.tooltip
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 15
    }
  }, "On left")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "tooltip-top",
    title: "Tooltip on top",
    placement: "top",
    classes: {
      tooltip: classes.tooltip
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 15
    }
  }, "On top")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "tooltip-bottom",
    title: "Tooltip on bottom",
    placement: "bottom",
    classes: {
      tooltip: classes.tooltip
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 15
    }
  }, "On bottom")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "tooltip-right",
    title: "Tooltip on right",
    placement: "right",
    classes: {
      tooltip: classes.tooltip
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_18__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 15
    }
  }, "On right")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 11
    }
  }, "Carousel"))));
}

/***/ }),

/***/ "./src/views/Components/Sections/SectionLogin.js":
/*!*******************************************************!*\
  !*** ./src/views/Components/Sections/SectionLogin.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SectionLogin; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "./node_modules/@material-ui/core/esm/InputAdornment/index.js");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Icon */ "./node_modules/@material-ui/core/esm/Icon/index.js");
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/People */ "./node_modules/@material-ui/icons/People.js");
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Email */ "./node_modules/@material-ui/icons/Email.js");
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./src/components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./src/components/Grid/GridItem.js");
/* harmony import */ var components_Card_Card_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/Card/Card.js */ "./src/components/Card/Card.js");
/* harmony import */ var components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/Card/CardHeader.js */ "./src/components/Card/CardHeader.js");
/* harmony import */ var components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/Card/CardBody.js */ "./src/components/Card/CardBody.js");
/* harmony import */ var components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/Card/CardFooter.js */ "./src/components/Card/CardFooter.js");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./src/components/CustomButtons/Button.js");
/* harmony import */ var components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/CustomInput/CustomInput.js */ "./src/components/CustomInput/CustomInput.js");
/* harmony import */ var assets_jss_material_kit_react_views_componentsSections_loginStyle_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! assets/jss/material-kit-react/views/componentsSections/loginStyle.js */ "./src/assets/jss/material-kit-react/views/componentsSections/loginStyle.js");
var _jsxFileName = "/Users/adhigunarsa/Web-Development/gardening-site/src/views/Components/Sections/SectionLogin.js";
 // @material-ui/core components



 // @material-ui/icons


 // core components










var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(assets_jss_material_kit_react_views_componentsSections_loginStyle_js__WEBPACK_IMPORTED_MODULE_14__["default"]);
function SectionLogin() {
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.section,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    justify: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    xs: 12,
    sm: 12,
    md: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Card_Card_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: classes.form,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
    color: "primary",
    className: classes.cardHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 19
    }
  }, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.socialLine,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
    justIcon: true,
    href: "#pablo",
    target: "_blank",
    color: "transparent",
    onClick: function onClick(e) {
      return e.preventDefault();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: classes.socialIcons + " fab fa-twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 23
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
    justIcon: true,
    href: "#pablo",
    target: "_blank",
    color: "transparent",
    onClick: function onClick(e) {
      return e.preventDefault();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: classes.socialIcons + " fab fa-facebook",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 23
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
    justIcon: true,
    href: "#pablo",
    target: "_blank",
    color: "transparent",
    onClick: function onClick(e) {
      return e.preventDefault();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: classes.socialIcons + " fab fa-google-plus-g",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 23
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: classes.divider,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, "Or Be Classical"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
    labelText: "First Name...",
    id: "first",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      type: "text",
      endAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_2__["default"], {
        position: "end",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 25
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_4___default.a, {
        className: classes.inputIconsColor,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 27
        }
      }))
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 19
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
    labelText: "Email...",
    id: "email",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      type: "email",
      endAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_2__["default"], {
        position: "end",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 25
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_5___default.a, {
        className: classes.inputIconsColor,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 27
        }
      }))
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 19
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
    labelText: "Password",
    id: "pass",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      type: "password",
      endAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_2__["default"], {
        position: "end",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 25
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: classes.inputIconsColor,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 27
        }
      }, "lock_outline")),
      autoComplete: "off"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 19
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: classes.cardFooter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
    simple: true,
    color: "primary",
    size: "lg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 19
    }
  }, "Get started"))))))));
}

/***/ }),

/***/ "./src/views/Components/Sections/SectionNavbars.js":
/*!*********************************************************!*\
  !*** ./src/views/Components/Sections/SectionNavbars.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SectionNavbars; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Icon */ "./node_modules/@material-ui/core/esm/Icon/index.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Search */ "./node_modules/@material-ui/icons/Search.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Email */ "./node_modules/@material-ui/icons/Email.js");
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Face__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Face */ "./node_modules/@material-ui/icons/Face.js");
/* harmony import */ var _material_ui_icons_Face__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Face__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ "./node_modules/@material-ui/icons/AccountCircle.js");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Explore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Explore */ "./node_modules/@material-ui/icons/Explore.js");
/* harmony import */ var _material_ui_icons_Explore__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Explore__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./src/components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./src/components/Grid/GridItem.js");
/* harmony import */ var components_Header_Header_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/Header/Header.js */ "./src/components/Header/Header.js");
/* harmony import */ var components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/CustomInput/CustomInput.js */ "./src/components/CustomInput/CustomInput.js");
/* harmony import */ var components_CustomDropdown_CustomDropdown_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/CustomDropdown/CustomDropdown.js */ "./src/components/CustomDropdown/CustomDropdown.js");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./src/components/CustomButtons/Button.js");
/* harmony import */ var assets_img_bg_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! assets/img/bg.jpg */ "./src/assets/img/bg.jpg");
/* harmony import */ var assets_img_bg_jpg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(assets_img_bg_jpg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var assets_img_faces_avatar_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! assets/img/faces/avatar.jpg */ "./src/assets/img/faces/avatar.jpg");
/* harmony import */ var assets_img_faces_avatar_jpg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(assets_img_faces_avatar_jpg__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var assets_jss_material_kit_react_views_componentsSections_navbarsStyle_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js */ "./src/assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js");
var _jsxFileName = "/Users/adhigunarsa/Web-Development/gardening-site/src/views/Components/Sections/SectionNavbars.js";
 // @material-ui/core components




 // @material-ui/icons





 // core components










var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(assets_jss_material_kit_react_views_componentsSections_navbarsStyle_js__WEBPACK_IMPORTED_MODULE_18__["default"]);
function SectionNavbars() {
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.section,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }, "Menu")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Header_Header_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
    brand: "Menu",
    color: "primary",
    leftLinks: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: classes.list,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: classes.listItem,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
      href: "#pablo",
      className: classes.navLink,
      onClick: function onClick(e) {
        return e.preventDefault();
      },
      color: "transparent",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 21
      }
    }, "Link")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: classes.listItem,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
      href: "#pablo",
      className: classes.navLink,
      onClick: function onClick(e) {
        return e.preventDefault();
      },
      color: "transparent",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 21
      }
    }, "Link")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: classes.listItem,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomDropdown_CustomDropdown_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
      buttonText: "Dropdown",
      dropdownHeader: "Dropdown Header",
      buttonProps: {
        className: classes.navLink,
        color: "transparent"
      },
      dropdownList: ["Action", "Another action", "Something else here", {
        divider: true
      }, "Separated link", {
        divider: true
      }, "One more separated link"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 21
      }
    }))),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 15
    }
  }, "Menu with Icons")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Header_Header_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
    brand: "Icons",
    color: "info",
    rightLinks: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: classes.list,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: classes.listItem,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
      color: "transparent",
      className: classes.navLink,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_6___default.a, {
      className: classes.icons,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 23
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: classes.listItem,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
      color: "transparent",
      className: classes.navLink,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Face__WEBPACK_IMPORTED_MODULE_7___default.a, {
      className: classes.icons,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 23
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: classes.listItem,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomDropdown_CustomDropdown_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
      left: true,
      hoverColor: "info",
      dropdownHeader: "Dropdown Header",
      buttonIcon: "settings",
      buttonProps: {
        className: classes.navLink,
        color: "transparent"
      },
      dropdownList: ["Action", "Another action", "Something else here", {
        divider: true
      }, "Separated link", {
        divider: true
      }, "One more separated link"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 21
      }
    }))),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 11
    }
  }, "Navigation"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "navbar",
    className: classes.navbar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.navigation,
    style: {
      backgroundImage: "url(" + assets_img_bg_jpg__WEBPACK_IMPORTED_MODULE_16___default.a + ")"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Header_Header_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
    brand: "Brand",
    color: "rose",
    leftLinks: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: classes.list,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: classes.listItem,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
      href: "#pablo",
      className: classes.navLink,
      onClick: function onClick(e) {
        return e.preventDefault();
      },
      color: "transparent",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 19
      }
    }, "Link")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: classes.listItem,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
      href: "#pablo",
      className: classes.navLink,
      onClick: function onClick(e) {
        return e.preventDefault();
      },
      color: "transparent",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 19
      }
    }, "Link"))),
    rightLinks: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
      white: true,
      inputRootCustomClasses: classes.inputRootCustomClasses,
      formControlProps: {
        className: classes.formControl
      },
      inputProps: {
        placeholder: "Search",
        inputProps: {
          "aria-label": "Search",
          className: classes.searchInput
        }
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
      justIcon: true,
      round: true,
      color: "white",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_5___default.a, {
      className: classes.searchIcon,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 19
      }
    }))),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Header_Header_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
    brand: "Info Color",
    color: "info",
    rightLinks: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: classes.list,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: classes.listItem,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
      href: "#pablo",
      className: classes.navLink + " " + classes.navLinkActive,
      onClick: function onClick(e) {
        return e.preventDefault();
      },
      color: "transparent",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 19
      }
    }, "Discover")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: classes.listItem,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
      href: "#pablo",
      className: classes.navLink,
      onClick: function onClick(e) {
        return e.preventDefault();
      },
      color: "transparent",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 19
      }
    }, "Profile")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: classes.listItem,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
      href: "#pablo",
      className: classes.navLink,
      onClick: function onClick(e) {
        return e.preventDefault();
      },
      color: "transparent",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 19
      }
    }, "Settings"))),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Header_Header_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
    brand: "Primary Color",
    color: "primary",
    rightLinks: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: classes.list,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: classes.listItem,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
      href: "#pablo",
      className: classes.navLink + " " + classes.navLinkActive,
      onClick: function onClick(e) {
        return e.preventDefault();
      },
      color: "transparent",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Explore__WEBPACK_IMPORTED_MODULE_9___default.a, {
      className: classes.icons,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 21
      }
    }), " Discover")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: classes.listItem,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
      href: "#pablo",
      className: classes.navLink,
      onClick: function onClick(e) {
        return e.preventDefault();
      },
      color: "transparent",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_8___default.a, {
      className: classes.icons,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 21
      }
    }), " Profile")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: classes.listItem,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
      href: "#pablo",
      className: classes.navLink,
      onClick: function onClick(e) {
        return e.preventDefault();
      },
      color: "transparent",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: classes.icons,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 21
      }
    }, "settings"), " Settings"))),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Header_Header_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
    brand: "Navbar with notifications",
    color: "dark",
    rightLinks: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: classes.list,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: classes.listItem,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
      href: "#pablo",
      className: classes.navLink,
      onClick: function onClick(e) {
        return e.preventDefault();
      },
      color: "transparent",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 19
      }
    }, "Discover")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: classes.listItem,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
      href: "#pablo",
      className: classes.navLink,
      onClick: function onClick(e) {
        return e.preventDefault();
      },
      color: "transparent",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 19
      }
    }, "Wishlist")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: classes.listItem,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
      justIcon: true,
      round: true,
      href: "#pablo",
      className: classes.notificationNavLink,
      onClick: function onClick(e) {
        return e.preventDefault();
      },
      color: "rose",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 291,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_6___default.a, {
      className: classes.icons,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 299,
        columnNumber: 21
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: classes.listItem,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 302,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomDropdown_CustomDropdown_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
      left: true,
      caret: false,
      hoverColor: "black",
      dropdownHeader: "Dropdown Header",
      buttonText: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: assets_img_faces_avatar_jpg__WEBPACK_IMPORTED_MODULE_17___default.a,
        className: classes.img,
        alt: "profile",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309,
          columnNumber: 23
        }
      }),
      buttonProps: {
        className: classes.navLink + " " + classes.imageDropdownButton,
        color: "transparent"
      },
      dropdownList: ["Me", "Settings and other stuff", "Sign out"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 303,
        columnNumber: 19
      }
    }))),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Header_Header_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
    brand: "Navbar with profile",
    rightLinks: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: classes.list,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 333,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: classes.listItem,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 334,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
      href: "#pablo",
      className: classes.navLink,
      onClick: function onClick(e) {
        return e.preventDefault();
      },
      color: "transparent",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 335,
        columnNumber: 19
      }
    }, "Discover")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: classes.listItem,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 344,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
      href: "#pablo",
      className: classes.navLink,
      onClick: function onClick(e) {
        return e.preventDefault();
      },
      color: "transparent",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 345,
        columnNumber: 19
      }
    }, "Wishlist")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: classes.listItem,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 354,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
      href: "#pablo",
      className: classes.registerNavLink,
      onClick: function onClick(e) {
        return e.preventDefault();
      },
      color: "rose",
      round: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 355,
        columnNumber: 19
      }
    }, "Register"))),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Header_Header_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
    brand: "Transparent",
    color: "transparent",
    rightLinks: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: classes.list,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 372,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: classes.listItem,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 373,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
      color: "transparent",
      className: classes.navLink + " " + classes.socialIconsButton,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 374,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: classes.socialIcons + " " + classes.marginRight5 + " fab fa-twitter",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 380,
        columnNumber: 21
      }
    }), " ", "Twitter")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: classes.listItem,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 391,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
      color: "transparent",
      className: classes.navLink + " " + classes.socialIconsButton,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 392,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: classes.socialIcons + " " + classes.marginRight5 + " fab fa-facebook",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 398,
        columnNumber: 21
      }
    }), " ", "Facebook")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: classes.listItem,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 409,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
      color: "transparent",
      className: classes.navLink + " " + classes.socialIconsButton,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 410,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: classes.socialIcons + " " + classes.marginRight5 + " fab fa-instagram",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 416,
        columnNumber: 21
      }
    }), " ", "Instagram"))),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 11
    }
  }))));
}

/***/ }),

/***/ "./src/views/Components/Sections/SectionNotifications.js":
/*!***************************************************************!*\
  !*** ./src/views/Components/Sections/SectionNotifications.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SectionNotifications; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Check */ "./node_modules/@material-ui/icons/Check.js");
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Warning */ "./node_modules/@material-ui/icons/Warning.js");
/* harmony import */ var _material_ui_icons_Warning__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Warning__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_Snackbar_SnackbarContent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Snackbar/SnackbarContent.js */ "./src/components/Snackbar/SnackbarContent.js");
/* harmony import */ var components_Clearfix_Clearfix_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Clearfix/Clearfix.js */ "./src/components/Clearfix/Clearfix.js");
/* harmony import */ var assets_jss_material_kit_react_views_componentsSections_notificationsStyles_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/jss/material-kit-react/views/componentsSections/notificationsStyles.js */ "./src/assets/jss/material-kit-react/views/componentsSections/notificationsStyles.js");
var _jsxFileName = "/Users/adhigunarsa/Web-Development/gardening-site/src/views/Components/Sections/SectionNotifications.js";
 // @material-ui/core components

 // @material-ui/icons


 // core components




var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(assets_jss_material_kit_react_views_componentsSections_notificationsStyles_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
function SectionNotifications() {
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.section,
    id: "notifications",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, "Notifications"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Snackbar_SnackbarContent_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }
    }, "INFO ALERT:"), " You", "'", "ve got some friends nearby, stop looking at your phone and find them..."),
    close: true,
    color: "info",
    icon: "info_outline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Snackbar_SnackbarContent_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 13
      }
    }, "SUCCESS ALERT:"), " You", "'", "ve got some friends nearby, stop looking at your phone and find them..."),
    close: true,
    color: "success",
    icon: _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_2___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Snackbar_SnackbarContent_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 13
      }
    }, "WARNING ALERT:"), " You", "'", "ve got some friends nearby, stop looking at your phone and find them..."),
    close: true,
    color: "warning",
    icon: _material_ui_icons_Warning__WEBPACK_IMPORTED_MODULE_3___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Snackbar_SnackbarContent_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 13
      }
    }, "DANGER ALERT:"), " You", "'", "ve got some friends nearby, stop looking at your phone and find them..."),
    close: true,
    color: "danger",
    icon: "info_outline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Clearfix_Clearfix_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/views/Components/Sections/SectionPills.js":
/*!*******************************************************!*\
  !*** ./src/views/Components/Sections/SectionPills.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SectionPills; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Dashboard */ "./node_modules/@material-ui/icons/Dashboard.js");
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Schedule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Schedule */ "./node_modules/@material-ui/icons/Schedule.js");
/* harmony import */ var _material_ui_icons_Schedule__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Schedule__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/List */ "./node_modules/@material-ui/icons/List.js");
/* harmony import */ var _material_ui_icons_List__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_List__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./src/components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./src/components/Grid/GridItem.js");
/* harmony import */ var components_NavPills_NavPills_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/NavPills/NavPills.js */ "./src/components/NavPills/NavPills.js");
/* harmony import */ var assets_jss_material_kit_react_views_componentsSections_pillsStyle_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/jss/material-kit-react/views/componentsSections/pillsStyle.js */ "./src/assets/jss/material-kit-react/views/componentsSections/pillsStyle.js");
var _jsxFileName = "/Users/adhigunarsa/Web-Development/gardening-site/src/views/Components/Sections/SectionPills.js";
 // @material-ui/core components

 // @material-ui/icons



 // core components





var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(assets_jss_material_kit_react_views_componentsSections_pillsStyle_js__WEBPACK_IMPORTED_MODULE_8__["default"]);
function SectionPills() {
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.section,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "navigation-pills",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, "Navigation Pills")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 15
    }
  }, "With Icons"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    xs: 12,
    sm: 12,
    md: 8,
    lg: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_NavPills_NavPills_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    color: "primary",
    tabs: [{
      tabButton: "Dashboard",
      tabIcon: _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_2___default.a,
      tabContent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 23
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 25
        }
      }, "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 25
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 25
        }
      }, "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 25
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 25
        }
      }, "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."))
    }, {
      tabButton: "Schedule",
      tabIcon: _material_ui_icons_Schedule__WEBPACK_IMPORTED_MODULE_3___default.a,
      tabContent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 23
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 25
        }
      }, "Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 25
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 25
        }
      }, "Dramatically maintain clicks-and-mortar solutions without functional solutions. Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."))
    }, {
      tabButton: "Tasks",
      tabIcon: _material_ui_icons_List__WEBPACK_IMPORTED_MODULE_4___default.a,
      tabContent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 23
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 25
        }
      }, "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 25
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 25
        }
      }, "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 25
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 25
        }
      }, "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."))
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_NavPills_NavPills_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    color: "rose",
    horizontal: {
      tabsGrid: {
        xs: 12,
        sm: 4,
        md: 4
      },
      contentGrid: {
        xs: 12,
        sm: 8,
        md: 8
      }
    },
    tabs: [{
      tabButton: "Dashboard",
      tabIcon: _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_2___default.a,
      tabContent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 23
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 25
        }
      }, "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 25
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 25
        }
      }, "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 25
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 25
        }
      }, "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."))
    }, {
      tabButton: "Schedule",
      tabIcon: _material_ui_icons_Schedule__WEBPACK_IMPORTED_MODULE_3___default.a,
      tabContent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 23
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 25
        }
      }, "Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 25
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 25
        }
      }, "Dramatically maintain clicks-and-mortar solutions without functional solutions. Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."))
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 15
    }
  }))))));
}

/***/ }),

/***/ "./src/views/Components/Sections/SectionTabs.js":
/*!******************************************************!*\
  !*** ./src/views/Components/Sections/SectionTabs.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SectionTabs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons_Face__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Face */ "./node_modules/@material-ui/icons/Face.js");
/* harmony import */ var _material_ui_icons_Face__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Face__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Chat */ "./node_modules/@material-ui/icons/Chat.js");
/* harmony import */ var _material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Build__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Build */ "./node_modules/@material-ui/icons/Build.js");
/* harmony import */ var _material_ui_icons_Build__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Build__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./src/components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./src/components/Grid/GridItem.js");
/* harmony import */ var components_CustomTabs_CustomTabs_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/CustomTabs/CustomTabs.js */ "./src/components/CustomTabs/CustomTabs.js");
/* harmony import */ var assets_jss_material_kit_react_views_componentsSections_tabsStyle_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/jss/material-kit-react/views/componentsSections/tabsStyle.js */ "./src/assets/jss/material-kit-react/views/componentsSections/tabsStyle.js");
var _jsxFileName = "/Users/adhigunarsa/Web-Development/gardening-site/src/views/Components/Sections/SectionTabs.js";
 // @material-ui/core components

 // @material-ui/icons



 // core components





var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(assets_jss_material_kit_react_views_componentsSections_tabsStyle_js__WEBPACK_IMPORTED_MODULE_8__["default"]);
function SectionTabs() {
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.section,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "nav-tabs",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, "Navigation Tabs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, "Tabs with Icons on Card")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomTabs_CustomTabs_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    headerColor: "primary",
    tabs: [{
      tabName: "Profile",
      tabIcon: _material_ui_icons_Face__WEBPACK_IMPORTED_MODULE_2___default.a,
      tabContent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: classes.textCenter,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 23
        }
      }, "I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it\u2019s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.")
    }, {
      tabName: "Messages",
      tabIcon: _material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_3___default.a,
      tabContent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: classes.textCenter,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 23
        }
      }, "I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.")
    }, {
      tabName: "Settings",
      tabIcon: _material_ui_icons_Build__WEBPACK_IMPORTED_MODULE_4___default.a,
      tabContent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: classes.textCenter,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 23
        }
      }, "think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it\u2019s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.")
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 15
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }, "Tabs on Plain Card")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomTabs_CustomTabs_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    plainTabs: true,
    headerColor: "danger",
    tabs: [{
      tabName: "Home",
      tabContent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: classes.textCenter,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 23
        }
      }, "I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it\u2019s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.")
    }, {
      tabName: "Updates",
      tabContent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: classes.textCenter,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 23
        }
      }, "I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.")
    }, {
      tabName: "History",
      tabContent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: classes.textCenter,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 23
        }
      }, "think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it\u2019s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.")
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 15
    }
  }))))));
}

/***/ }),

/***/ "./src/views/Components/Sections/SectionTypography.js":
/*!************************************************************!*\
  !*** ./src/views/Components/Sections/SectionTypography.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SectionTypography; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./src/components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./src/components/Grid/GridItem.js");
/* harmony import */ var components_Typography_Small_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Typography/Small.js */ "./src/components/Typography/Small.js");
/* harmony import */ var components_Typography_Danger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Typography/Danger.js */ "./src/components/Typography/Danger.js");
/* harmony import */ var components_Typography_Warning_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Typography/Warning.js */ "./src/components/Typography/Warning.js");
/* harmony import */ var components_Typography_Success_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Typography/Success.js */ "./src/components/Typography/Success.js");
/* harmony import */ var components_Typography_Info_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/Typography/Info.js */ "./src/components/Typography/Info.js");
/* harmony import */ var components_Typography_Primary_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/Typography/Primary.js */ "./src/components/Typography/Primary.js");
/* harmony import */ var components_Typography_Muted_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/Typography/Muted.js */ "./src/components/Typography/Muted.js");
/* harmony import */ var components_Typography_Quote_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/Typography/Quote.js */ "./src/components/Typography/Quote.js");
/* harmony import */ var assets_img_faces_avatar_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! assets/img/faces/avatar.jpg */ "./src/assets/img/faces/avatar.jpg");
/* harmony import */ var assets_img_faces_avatar_jpg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(assets_img_faces_avatar_jpg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var assets_jss_material_kit_react_views_componentsSections_typographyStyle_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! assets/jss/material-kit-react/views/componentsSections/typographyStyle.js */ "./src/assets/jss/material-kit-react/views/componentsSections/typographyStyle.js");
var _jsxFileName = "/Users/adhigunarsa/Web-Development/gardening-site/src/views/Components/Sections/SectionTypography.js";
 // @material-ui/core components

 // @material-ui/icons
// core components













var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(assets_jss_material_kit_react_views_componentsSections_typographyStyle_js__WEBPACK_IMPORTED_MODULE_13__["default"]);
function SectionTypography() {
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.section,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "typography",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, "Typography")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.typo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.note,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }, "Header 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }, "The Life of Material Kit")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.typo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.note,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  }, "Header 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }, "The Life of Material Kit")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.typo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.note,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }, "Header 3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  }, "The Life of Material Kit")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.typo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.note,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  }, "Header 4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  }, "The Life of Material Kit")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.typo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.note,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 15
    }
  }, "Header 5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }, "The Life of Material Kit")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.typo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.note,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  }, "Header 6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 15
    }
  }, "The Life of Material Kit")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.typo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.note,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  }, "Header 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 15
    }
  }, "The Life of Material Kit")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.typo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.note,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  }, "Header 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  }, "The Life of Material Kit")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.typo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.note,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 15
    }
  }, "Header 3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 15
    }
  }, "The Life of Material Kit")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.typo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.note,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 15
    }
  }, "Header 4"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 15
    }
  }, "The Life of Material Kit")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.typo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.note,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }, "Paragraph"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  }, "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.typo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.note,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 15
    }
  }, "Quote"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Typography_Quote_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
    text: "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.",
    author: " Kanye West, Musician",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 15
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.typo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.note,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 15
    }
  }, "Muted Text"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Typography_Muted_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 15
    }
  }, "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.typo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.note,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 15
    }
  }, "Primary Text"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Typography_Primary_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 15
    }
  }, "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.typo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.note,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 15
    }
  }, "Info Text"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Typography_Info_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 15
    }
  }, "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.typo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.note,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 15
    }
  }, "Success Text"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Typography_Success_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 15
    }
  }, "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.typo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.note,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 15
    }
  }, "Warning Text"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Typography_Warning_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 15
    }
  }, "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.typo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.note,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 15
    }
  }, "Danger Text"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Typography_Danger_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 15
    }
  }, "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.typo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.note,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 15
    }
  }, "Small Tag"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 15
    }
  }, "Header with small subtitle", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Typography_Small_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 17
    }
  }, "Use ", '"Small"', " tag for the headers"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.space50,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "images",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 13
    }
  }, "Images")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    xs: 12,
    sm: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 15
    }
  }, "Rounded Image"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: assets_img_faces_avatar_jpg__WEBPACK_IMPORTED_MODULE_12___default.a,
    alt: "...",
    className: classes.imgRounded + " " + classes.imgFluid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 15
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    xs: 12,
    sm: 2,
    className: classes.marginLeft,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 15
    }
  }, "Circle Image"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: assets_img_faces_avatar_jpg__WEBPACK_IMPORTED_MODULE_12___default.a,
    alt: "...",
    className: classes.imgRoundedCircle + " " + classes.imgFluid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 15
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    xs: 12,
    sm: 2,
    className: classes.marginLeft,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 15
    }
  }, "Rounded Raised"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: assets_img_faces_avatar_jpg__WEBPACK_IMPORTED_MODULE_12___default.a,
    alt: "...",
    className: classes.imgRaised + " " + classes.imgRounded + " " + classes.imgFluid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 15
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    xs: 12,
    sm: 2,
    className: classes.marginLeft,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 15
    }
  }, "Circle Raised"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: assets_img_faces_avatar_jpg__WEBPACK_IMPORTED_MODULE_12___default.a,
    alt: "...",
    className: classes.imgRaised + " " + classes.imgRoundedCircle + " " + classes.imgFluid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 15
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.space50,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 9
    }
  })));
}

/***/ }),

/***/ "./src/views/ContactPage/ContactPage.js":
/*!**********************************************!*\
  !*** ./src/views/ContactPage/ContactPage.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContactPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var components_Header_Header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Header/Header.js */ "./src/components/Header/Header.js");
/* harmony import */ var components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Header/HeaderLinks.js */ "./src/components/Header/HeaderLinks.js");
/* harmony import */ var components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Footer/Footer.js */ "./src/components/Footer/Footer.js");
/* harmony import */ var assets_img_bg7_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/img/bg7.jpg */ "./src/assets/img/bg7.jpg");
/* harmony import */ var assets_img_bg7_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_img_bg7_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_jss_material_kit_react_views_loginPage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/jss/material-kit-react/views/loginPage.js */ "./src/assets/jss/material-kit-react/views/loginPage.js");
/* harmony import */ var _Sections_ContactForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Sections/ContactForm */ "./src/views/ContactPage/Sections/ContactForm.js");
var _jsxFileName = "/Users/adhigunarsa/Web-Development/gardening-site/src/views/ContactPage/ContactPage.js";
 // @material-ui/core components

 // core components







var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(_assets_jss_material_kit_react_views_loginPage_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
function ContactPage(props) {
  var classes = useStyles();
  var rest = Object.assign({}, props);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Header_Header_js__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({
    absolute: true,
    color: "transparent",
    brand: "Material Kit React",
    rightLinks: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 29
      }
    })
  }, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.pageHeader,
    style: {
      backgroundImage: "url(" + assets_img_bg7_jpg__WEBPACK_IMPORTED_MODULE_5___default.a + ")",
      backgroundSize: "cover",
      backgroundPosition: "top center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Sections_ContactForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    whiteFont: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  })));
}

/***/ }),

/***/ "./src/views/ContactPage/Sections/ContactForm.js":
/*!*******************************************************!*\
  !*** ./src/views/ContactPage/Sections/ContactForm.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContactForm; });
/* harmony import */ var _Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emailjs-com */ "./node_modules/emailjs-com/source/index.js");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "./node_modules/@material-ui/core/esm/InputAdornment/index.js");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Icon */ "./node_modules/@material-ui/core/esm/Icon/index.js");
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Email */ "./node_modules/@material-ui/icons/Email.js");
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/People */ "./node_modules/@material-ui/icons/People.js");
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/Grid/GridContainer.js */ "./src/components/Grid/GridContainer.js");
/* harmony import */ var _components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/Grid/GridItem.js */ "./src/components/Grid/GridItem.js");
/* harmony import */ var _components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/CustomButtons/Button.js */ "./src/components/CustomButtons/Button.js");
/* harmony import */ var _components_Card_Card_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/Card/Card.js */ "./src/components/Card/Card.js");
/* harmony import */ var _components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/Card/CardBody.js */ "./src/components/Card/CardBody.js");
/* harmony import */ var _components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/Card/CardHeader.js */ "./src/components/Card/CardHeader.js");
/* harmony import */ var _components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../components/Card/CardFooter.js */ "./src/components/Card/CardFooter.js");
/* harmony import */ var _components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../components/CustomInput/CustomInput.js */ "./src/components/CustomInput/CustomInput.js");
/* harmony import */ var _assets_jss_material_kit_react_views_loginPage_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../assets/jss/material-kit-react/views/loginPage.js */ "./src/assets/jss/material-kit-react/views/loginPage.js");

var _jsxFileName = "/Users/adhigunarsa/Web-Development/gardening-site/src/views/ContactPage/Sections/ContactForm.js";

 // @material-ui/core components



 // @material-ui/icons


 // core components










var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(_assets_jss_material_kit_react_views_loginPage_js__WEBPACK_IMPORTED_MODULE_16__["default"]);
function ContactForm() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("cardHidden"),
      _React$useState2 = Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      cardAnimaton = _React$useState2[0],
      setCardAnimation = _React$useState2[1];

  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  var classes = useStyles();

  function sendEmail(e) {
    e.preventDefault();
    emailjs_com__WEBPACK_IMPORTED_MODULE_2___default.a.sendForm('gmail', 'template_nBPVOlal', e.target, 'user_y6S4Mel3oZRuqVXEnXP6G').then(function (result) {
      console.log(result.text);
    }, function (error) {
      console.log(error.text);
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    justify: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
    xs: 12,
    sm: 12,
    md: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Card_Card_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: classes[cardAnimaton],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    className: "contact-form ".concat(classes.form),
    onSubmit: sendEmail,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
    color: "primary",
    className: classes.cardHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 33
    }
  }, "Contact us")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "hidden",
    name: "contact_number",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 29
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    labelText: "First Name...",
    id: "first",
    type: "text",
    name: "user_name",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      type: "text",
      endAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_4__["default"], {
        position: "end",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 45
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_7___default.a, {
        className: classes.inputIconsColor,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 49
        }
      }))
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 33
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    labelText: "Email...",
    id: "email",
    type: "email",
    name: "user_email",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      type: "email",
      endAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_4__["default"], {
        position: "end",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 45
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_6___default.a, {
        className: classes.inputIconsColor,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 49
        }
      }))
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 33
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    labelText: "Message",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      type: "text",
      endAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_4__["default"], {
        position: "end",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 45
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: classes.inputIconsColor,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 49
        }
      }, "lock_outline")),
      autoComplete: "off"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 33
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.cardFooter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    simple: true,
    color: "primary",
    size: "lg",
    type: "submit",
    value: "Send",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 33
    }
  }, "Get started"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "submit",
    value: "Send",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 33
    }
  }))))));
}

/***/ }),

/***/ "./src/views/HomePage/HomePage.js":
/*!****************************************!*\
  !*** ./src/views/HomePage/HomePage.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomePage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _components_Header_Header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Header/Header.js */ "./src/components/Header/Header.js");
/* harmony import */ var _components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Footer/Footer.js */ "./src/components/Footer/Footer.js");
/* harmony import */ var _components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Grid/GridContainer.js */ "./src/components/Grid/GridContainer.js");
/* harmony import */ var _components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Grid/GridItem.js */ "./src/components/Grid/GridItem.js");
/* harmony import */ var _components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/CustomButtons/Button.js */ "./src/components/CustomButtons/Button.js");
/* harmony import */ var _components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Header/HeaderLinks.js */ "./src/components/Header/HeaderLinks.js");
/* harmony import */ var _components_Parallax_Parallax_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Parallax/Parallax.js */ "./src/components/Parallax/Parallax.js");
/* harmony import */ var _assets_jss_material_kit_react_views_landingPage_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/jss/material-kit-react/views/landingPage.js */ "./src/assets/jss/material-kit-react/views/landingPage.js");
var _jsxFileName = "/Users/adhigunarsa/Web-Development/gardening-site/src/views/HomePage/HomePage.js";
 // nodejs library that concatenates classes
// @material-ui/core components

 // core components








 // Sections for this page
// @material-ui/icons

var dashboardRoutes = [];
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(_assets_jss_material_kit_react_views_landingPage_js__WEBPACK_IMPORTED_MODULE_9__["default"]);
function HomePage(props) {
  var classes = useStyles();
  var rest = Object.assign({}, props);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header_Header_js__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({
    color: "transparent",
    routes: dashboardRoutes,
    brand: "TheSydneyGardener.com.au",
    rightLinks: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 29
      }
    }),
    fixed: true,
    changeColorOnScroll: {
      height: 400,
      color: "white"
    }
  }, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Parallax_Parallax_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    filter: true,
    image: __webpack_require__(/*! assets/img/lawnFence.jpeg */ "./src/assets/img/lawnFence.jpeg"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 29
    }
  }, "Your Garden Story Starts With Us."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 29
    }
  }, "Every garden needs tender loving care, when you treat your garden with Love it will flourish."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 29
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: "danger",
    size: "lg",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 29
    }
  }, "Contact us"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, "testing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }));
}

/***/ }),

/***/ "./src/views/LandingPage/LandingPage.js":
/*!**********************************************!*\
  !*** ./src/views/LandingPage/LandingPage.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LandingPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var components_Header_Header_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Header/Header.js */ "./src/components/Header/Header.js");
/* harmony import */ var components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Footer/Footer.js */ "./src/components/Footer/Footer.js");
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./src/components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./src/components/Grid/GridItem.js");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./src/components/CustomButtons/Button.js");
/* harmony import */ var components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/Header/HeaderLinks.js */ "./src/components/Header/HeaderLinks.js");
/* harmony import */ var components_Parallax_Parallax_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/Parallax/Parallax.js */ "./src/components/Parallax/Parallax.js");
/* harmony import */ var assets_jss_material_kit_react_views_landingPage_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! assets/jss/material-kit-react/views/landingPage.js */ "./src/assets/jss/material-kit-react/views/landingPage.js");
/* harmony import */ var _Sections_ProductSection_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Sections/ProductSection.js */ "./src/views/LandingPage/Sections/ProductSection.js");
/* harmony import */ var _Sections_TeamSection_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Sections/TeamSection.js */ "./src/views/LandingPage/Sections/TeamSection.js");
/* harmony import */ var _Sections_WorkSection_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Sections/WorkSection.js */ "./src/views/LandingPage/Sections/WorkSection.js");
var _jsxFileName = "/Users/adhigunarsa/Web-Development/gardening-site/src/views/LandingPage/LandingPage.js";
 // nodejs library that concatenates classes

 // @material-ui/core components

 // @material-ui/icons
// core components








 // Sections for this page




var dashboardRoutes = [];
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(assets_jss_material_kit_react_views_landingPage_js__WEBPACK_IMPORTED_MODULE_10__["default"]);
function LandingPage(props) {
  var classes = useStyles();
  var rest = Object.assign({}, props);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Header_Header_js__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({
    color: "transparent",
    routes: dashboardRoutes,
    brand: "Material Kit React",
    rightLinks: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 21
      }
    }),
    fixed: true,
    changeColorOnScroll: {
      height: 400,
      color: "white"
    }
  }, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Parallax_Parallax_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
    filter: true,
    image: __webpack_require__(/*! assets/img/landing-bg.jpg */ "./src/assets/img/landing-bg.jpg"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }, "Your Story Starts With Us."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 15
    }
  }, "Every landing page needs a small description after the big bold title, that", "'", "s why we added this text here. Add here all the information that can make you or your product create the first impression."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    color: "danger",
    size: "lg",
    href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-play",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }), "Watch video"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.main, classes.mainRaised),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Sections_ProductSection_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Sections_TeamSection_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Sections_WorkSection_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/views/LandingPage/Sections/ProductSection.js":
/*!**********************************************************!*\
  !*** ./src/views/LandingPage/Sections/ProductSection.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Chat */ "./node_modules/@material-ui/icons/Chat.js");
/* harmony import */ var _material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_VerifiedUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/VerifiedUser */ "./node_modules/@material-ui/icons/VerifiedUser.js");
/* harmony import */ var _material_ui_icons_VerifiedUser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VerifiedUser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Fingerprint */ "./node_modules/@material-ui/icons/Fingerprint.js");
/* harmony import */ var _material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./src/components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./src/components/Grid/GridItem.js");
/* harmony import */ var components_InfoArea_InfoArea_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/InfoArea/InfoArea.js */ "./src/components/InfoArea/InfoArea.js");
/* harmony import */ var assets_jss_material_kit_react_views_landingPageSections_productStyle_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/jss/material-kit-react/views/landingPageSections/productStyle.js */ "./src/assets/jss/material-kit-react/views/landingPageSections/productStyle.js");
var _jsxFileName = "/Users/adhigunarsa/Web-Development/gardening-site/src/views/LandingPage/Sections/ProductSection.js";
 // @material-ui/core components

 // @material-ui/icons



 // core components





var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(assets_jss_material_kit_react_views_landingPageSections_productStyle_js__WEBPACK_IMPORTED_MODULE_8__["default"]);
function ProductSection() {
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.section,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    justify: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    xs: 12,
    sm: 12,
    md: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, "Let", "'", "s talk product"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: classes.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, "This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn", "'", "t scroll to get here. Add a button if you want the user to see more."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    xs: 12,
    sm: 12,
    md: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_InfoArea_InfoArea_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: "Free Chat",
    description: "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
    icon: _material_ui_icons_Chat__WEBPACK_IMPORTED_MODULE_2___default.a,
    iconColor: "info",
    vertical: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    xs: 12,
    sm: 12,
    md: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_InfoArea_InfoArea_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: "Verified Users",
    description: "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
    icon: _material_ui_icons_VerifiedUser__WEBPACK_IMPORTED_MODULE_3___default.a,
    iconColor: "success",
    vertical: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    xs: 12,
    sm: 12,
    md: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_InfoArea_InfoArea_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: "Fingerprint",
    description: "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
    icon: _material_ui_icons_Fingerprint__WEBPACK_IMPORTED_MODULE_4___default.a,
    iconColor: "danger",
    vertical: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  })))));
}

/***/ }),

/***/ "./src/views/LandingPage/Sections/TeamSection.js":
/*!*******************************************************!*\
  !*** ./src/views/LandingPage/Sections/TeamSection.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TeamSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./src/components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./src/components/Grid/GridItem.js");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./src/components/CustomButtons/Button.js");
/* harmony import */ var components_Card_Card_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Card/Card.js */ "./src/components/Card/Card.js");
/* harmony import */ var components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Card/CardBody.js */ "./src/components/Card/CardBody.js");
/* harmony import */ var components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/Card/CardFooter.js */ "./src/components/Card/CardFooter.js");
/* harmony import */ var assets_jss_material_kit_react_views_landingPageSections_teamStyle_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/jss/material-kit-react/views/landingPageSections/teamStyle.js */ "./src/assets/jss/material-kit-react/views/landingPageSections/teamStyle.js");
/* harmony import */ var assets_img_faces_avatar_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! assets/img/faces/avatar.jpg */ "./src/assets/img/faces/avatar.jpg");
/* harmony import */ var assets_img_faces_avatar_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(assets_img_faces_avatar_jpg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var assets_img_faces_christian_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! assets/img/faces/christian.jpg */ "./src/assets/img/faces/christian.jpg");
/* harmony import */ var assets_img_faces_christian_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(assets_img_faces_christian_jpg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var assets_img_faces_kendall_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! assets/img/faces/kendall.jpg */ "./src/assets/img/faces/kendall.jpg");
/* harmony import */ var assets_img_faces_kendall_jpg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(assets_img_faces_kendall_jpg__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "/Users/adhigunarsa/Web-Development/gardening-site/src/views/LandingPage/Sections/TeamSection.js";
 // nodejs library that concatenates classes

 // @material-ui/core components

 // @material-ui/icons
// core components











var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(assets_jss_material_kit_react_views_landingPageSections_teamStyle_js__WEBPACK_IMPORTED_MODULE_9__["default"]);
function TeamSection() {
  var classes = useStyles();
  var imageClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.section,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, "Here is our team"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    xs: 12,
    sm: 12,
    md: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Card_Card_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    plain: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    className: classes.itemGrid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: assets_img_faces_avatar_jpg__WEBPACK_IMPORTED_MODULE_10___default.a,
    alt: "...",
    className: imageClasses,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: classes.cardTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 15
    }
  }, "Gigi Hadid", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: classes.smallTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, "Model")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: classes.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#pablo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 24
    }
  }, "links"), " for people to be able to follow them outside the site.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: classes.justifyCenter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    justIcon: true,
    color: "transparent",
    className: classes.margin5,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: classes.socials + " fab fa-twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 19
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    justIcon: true,
    color: "transparent",
    className: classes.margin5,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: classes.socials + " fab fa-instagram",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 19
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    justIcon: true,
    color: "transparent",
    className: classes.margin5,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: classes.socials + " fab fa-facebook",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 19
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    xs: 12,
    sm: 12,
    md: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Card_Card_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    plain: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    className: classes.itemGrid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: assets_img_faces_christian_jpg__WEBPACK_IMPORTED_MODULE_11___default.a,
    alt: "...",
    className: imageClasses,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: classes.cardTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }
  }, "Christian Louboutin", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: classes.smallTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }, "Designer")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: classes.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }, "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#pablo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 24
    }
  }, "links"), " for people to be able to follow them outside the site.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: classes.justifyCenter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    justIcon: true,
    color: "transparent",
    className: classes.margin5,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: classes.socials + " fab fa-twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 19
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    justIcon: true,
    color: "transparent",
    className: classes.margin5,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: classes.socials + " fab fa-linkedin",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 19
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    xs: 12,
    sm: 12,
    md: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Card_Card_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    plain: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    className: classes.itemGrid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: assets_img_faces_kendall_jpg__WEBPACK_IMPORTED_MODULE_12___default.a,
    alt: "...",
    className: imageClasses,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: classes.cardTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 15
    }
  }, "Kendall Jenner", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: classes.smallTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 17
    }
  }, "Model")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: classes.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 17
    }
  }, "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#pablo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 24
    }
  }, "links"), " for people to be able to follow them outside the site.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: classes.justifyCenter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    justIcon: true,
    color: "transparent",
    className: classes.margin5,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: classes.socials + " fab fa-twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 19
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    justIcon: true,
    color: "transparent",
    className: classes.margin5,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: classes.socials + " fab fa-instagram",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 19
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    justIcon: true,
    color: "transparent",
    className: classes.margin5,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: classes.socials + " fab fa-facebook",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 19
    }
  }))))))));
}

/***/ }),

/***/ "./src/views/LandingPage/Sections/WorkSection.js":
/*!*******************************************************!*\
  !*** ./src/views/LandingPage/Sections/WorkSection.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WorkSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./src/components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./src/components/Grid/GridItem.js");
/* harmony import */ var components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/CustomInput/CustomInput.js */ "./src/components/CustomInput/CustomInput.js");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./src/components/CustomButtons/Button.js");
/* harmony import */ var assets_jss_material_kit_react_views_landingPageSections_workStyle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/jss/material-kit-react/views/landingPageSections/workStyle.js */ "./src/assets/jss/material-kit-react/views/landingPageSections/workStyle.js");
var _jsxFileName = "/Users/adhigunarsa/Web-Development/gardening-site/src/views/LandingPage/Sections/WorkSection.js";
 // @material-ui/core components

 // @material-ui/icons
// core components






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(assets_jss_material_kit_react_views_landingPageSections_workStyle_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
function WorkSection() {
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.section,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    justify: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    cs: 12,
    sm: 12,
    md: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, "Work with us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: classes.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, "Divide details about your product or agency work into parts. Write a few lines about each one and contact us about any further collaboration. We will responde get back to you in a couple of hours."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    labelText: "Your Name",
    id: "name",
    formControlProps: {
      fullWidth: true
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    labelText: "Your Email",
    id: "email",
    formControlProps: {
      fullWidth: true
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    labelText: "Your Message",
    id: "message",
    formControlProps: {
      fullWidth: true,
      className: classes.textArea
    },
    inputProps: {
      multiline: true,
      rows: 5
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    justify: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    xs: 12,
    sm: 12,
    md: 4,
    className: classes.textCenter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 19
    }
  }, "Send Message"))))))));
}

/***/ }),

/***/ "./src/views/LoginPage/LoginPage.js":
/*!******************************************!*\
  !*** ./src/views/LoginPage/LoginPage.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginPage; });
/* harmony import */ var _Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "./node_modules/@material-ui/core/esm/InputAdornment/index.js");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Icon */ "./node_modules/@material-ui/core/esm/Icon/index.js");
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Email */ "./node_modules/@material-ui/icons/Email.js");
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/People */ "./node_modules/@material-ui/icons/People.js");
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var components_Header_Header_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Header/Header.js */ "./src/components/Header/Header.js");
/* harmony import */ var components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/Header/HeaderLinks.js */ "./src/components/Header/HeaderLinks.js");
/* harmony import */ var components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/Footer/Footer.js */ "./src/components/Footer/Footer.js");
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./src/components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./src/components/Grid/GridItem.js");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./src/components/CustomButtons/Button.js");
/* harmony import */ var components_Card_Card_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/Card/Card.js */ "./src/components/Card/Card.js");
/* harmony import */ var components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/Card/CardBody.js */ "./src/components/Card/CardBody.js");
/* harmony import */ var components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/Card/CardHeader.js */ "./src/components/Card/CardHeader.js");
/* harmony import */ var components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! components/Card/CardFooter.js */ "./src/components/Card/CardFooter.js");
/* harmony import */ var components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! components/CustomInput/CustomInput.js */ "./src/components/CustomInput/CustomInput.js");
/* harmony import */ var assets_jss_material_kit_react_views_loginPage_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! assets/jss/material-kit-react/views/loginPage.js */ "./src/assets/jss/material-kit-react/views/loginPage.js");
/* harmony import */ var assets_img_bg7_jpg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! assets/img/bg7.jpg */ "./src/assets/img/bg7.jpg");
/* harmony import */ var assets_img_bg7_jpg__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(assets_img_bg7_jpg__WEBPACK_IMPORTED_MODULE_19__);

var _jsxFileName = "/Users/adhigunarsa/Web-Development/gardening-site/src/views/LoginPage/LoginPage.js";
 // @material-ui/core components



 // @material-ui/icons


 // core components














var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(assets_jss_material_kit_react_views_loginPage_js__WEBPACK_IMPORTED_MODULE_18__["default"]);
function LoginPage(props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("cardHidden"),
      _React$useState2 = Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      cardAnimaton = _React$useState2[0],
      setCardAnimation = _React$useState2[1];

  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  var classes = useStyles();
  var rest = Object.assign({}, props);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Header_Header_js__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({
    absolute: true,
    color: "transparent",
    brand: "Material Kit React",
    rightLinks: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 21
      }
    })
  }, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.pageHeader,
    style: {
      backgroundImage: "url(" + assets_img_bg7_jpg__WEBPACK_IMPORTED_MODULE_19___default.a + ")",
      backgroundSize: "cover",
      backgroundPosition: "top center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    justify: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
    xs: 12,
    sm: 12,
    md: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Card_Card_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: classes[cardAnimaton],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    className: classes.form,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    color: "primary",
    className: classes.cardHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  }, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.socialLine,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
    justIcon: true,
    href: "#pablo",
    target: "_blank",
    color: "transparent",
    onClick: function onClick(e) {
      return e.preventDefault();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 23
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "fab fa-twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
    justIcon: true,
    href: "#pablo",
    target: "_blank",
    color: "transparent",
    onClick: function onClick(e) {
      return e.preventDefault();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 23
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "fab fa-facebook",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
    justIcon: true,
    href: "#pablo",
    target: "_blank",
    color: "transparent",
    onClick: function onClick(e) {
      return e.preventDefault();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 23
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "fab fa-google-plus-g",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 25
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: classes.divider,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 19
    }
  }, "Or Be Classical"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    labelText: "First Name...",
    id: "first",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      type: "text",
      endAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_3__["default"], {
        position: "end",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 27
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_6___default.a, {
        className: classes.inputIconsColor,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 29
        }
      }))
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    labelText: "Email...",
    id: "email",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      type: "email",
      endAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_3__["default"], {
        position: "end",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 27
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_5___default.a, {
        className: classes.inputIconsColor,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 29
        }
      }))
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_17__["default"], {
    labelText: "Password",
    id: "pass",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      type: "password",
      endAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_3__["default"], {
        position: "end",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 27
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: classes.inputIconsColor,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 29
        }
      }, "lock_outline")),
      autoComplete: "off"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: classes.cardFooter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
    simple: true,
    color: "primary",
    size: "lg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 21
    }
  }, "Get started"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
    whiteFont: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 9
    }
  })));
}

/***/ }),

/***/ "./src/views/ProfilePage/ProfilePage.js":
/*!**********************************************!*\
  !*** ./src/views/ProfilePage/ProfilePage.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProfilePage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons_Camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Camera */ "./node_modules/@material-ui/icons/Camera.js");
/* harmony import */ var _material_ui_icons_Camera__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Camera__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Palette__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Palette */ "./node_modules/@material-ui/icons/Palette.js");
/* harmony import */ var _material_ui_icons_Palette__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Palette__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "./node_modules/@material-ui/icons/Favorite.js");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_Header_Header_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Header/Header.js */ "./src/components/Header/Header.js");
/* harmony import */ var components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Footer/Footer.js */ "./src/components/Footer/Footer.js");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./src/components/CustomButtons/Button.js");
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./src/components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./src/components/Grid/GridItem.js");
/* harmony import */ var components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/Header/HeaderLinks.js */ "./src/components/Header/HeaderLinks.js");
/* harmony import */ var components_NavPills_NavPills_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/NavPills/NavPills.js */ "./src/components/NavPills/NavPills.js");
/* harmony import */ var components_Parallax_Parallax_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/Parallax/Parallax.js */ "./src/components/Parallax/Parallax.js");
/* harmony import */ var assets_img_faces_christian_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! assets/img/faces/christian.jpg */ "./src/assets/img/faces/christian.jpg");
/* harmony import */ var assets_img_faces_christian_jpg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(assets_img_faces_christian_jpg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var assets_img_examples_studio_1_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! assets/img/examples/studio-1.jpg */ "./src/assets/img/examples/studio-1.jpg");
/* harmony import */ var assets_img_examples_studio_1_jpg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(assets_img_examples_studio_1_jpg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var assets_img_examples_studio_2_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! assets/img/examples/studio-2.jpg */ "./src/assets/img/examples/studio-2.jpg");
/* harmony import */ var assets_img_examples_studio_2_jpg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(assets_img_examples_studio_2_jpg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var assets_img_examples_studio_3_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! assets/img/examples/studio-3.jpg */ "./src/assets/img/examples/studio-3.jpg");
/* harmony import */ var assets_img_examples_studio_3_jpg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(assets_img_examples_studio_3_jpg__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var assets_img_examples_studio_4_jpg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! assets/img/examples/studio-4.jpg */ "./src/assets/img/examples/studio-4.jpg");
/* harmony import */ var assets_img_examples_studio_4_jpg__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(assets_img_examples_studio_4_jpg__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var assets_img_examples_studio_5_jpg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! assets/img/examples/studio-5.jpg */ "./src/assets/img/examples/studio-5.jpg");
/* harmony import */ var assets_img_examples_studio_5_jpg__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(assets_img_examples_studio_5_jpg__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var assets_img_examples_olu_eletu_jpg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! assets/img/examples/olu-eletu.jpg */ "./src/assets/img/examples/olu-eletu.jpg");
/* harmony import */ var assets_img_examples_olu_eletu_jpg__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(assets_img_examples_olu_eletu_jpg__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var assets_img_examples_clem_onojeghuo_jpg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! assets/img/examples/clem-onojeghuo.jpg */ "./src/assets/img/examples/clem-onojeghuo.jpg");
/* harmony import */ var assets_img_examples_clem_onojeghuo_jpg__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(assets_img_examples_clem_onojeghuo_jpg__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var assets_img_examples_cynthia_del_rio_jpg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! assets/img/examples/cynthia-del-rio.jpg */ "./src/assets/img/examples/cynthia-del-rio.jpg");
/* harmony import */ var assets_img_examples_cynthia_del_rio_jpg__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(assets_img_examples_cynthia_del_rio_jpg__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var assets_img_examples_mariya_georgieva_jpg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! assets/img/examples/mariya-georgieva.jpg */ "./src/assets/img/examples/mariya-georgieva.jpg");
/* harmony import */ var assets_img_examples_mariya_georgieva_jpg__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(assets_img_examples_mariya_georgieva_jpg__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var assets_img_examples_clem_onojegaw_jpg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! assets/img/examples/clem-onojegaw.jpg */ "./src/assets/img/examples/clem-onojegaw.jpg");
/* harmony import */ var assets_img_examples_clem_onojegaw_jpg__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(assets_img_examples_clem_onojegaw_jpg__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var assets_jss_material_kit_react_views_profilePage_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! assets/jss/material-kit-react/views/profilePage.js */ "./src/assets/jss/material-kit-react/views/profilePage.js");
var _jsxFileName = "/Users/adhigunarsa/Web-Development/gardening-site/src/views/ProfilePage/ProfilePage.js";
 // nodejs library that concatenates classes

 // @material-ui/core components

 // @material-ui/icons



 // core components





















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(assets_jss_material_kit_react_views_profilePage_js__WEBPACK_IMPORTED_MODULE_25__["default"]);
function ProfilePage(props) {
  var classes = useStyles();
  var rest = Object.assign({}, props);
  var imageClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid);
  var navImageClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.imgRounded, classes.imgGallery);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Header_Header_js__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({
    color: "transparent",
    brand: "Material Kit React",
    rightLinks: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 21
      }
    }),
    fixed: true,
    changeColorOnScroll: {
      height: 200,
      color: "white"
    }
  }, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Parallax_Parallax_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
    small: true,
    filter: true,
    image: __webpack_require__(/*! assets/img/profile-bg.jpg */ "./src/assets/img/profile-bg.jpg"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.main, classes.mainRaised),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
    justify: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    xs: 12,
    sm: 12,
    md: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.profile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: assets_img_faces_christian_jpg__WEBPACK_IMPORTED_MODULE_14___default.a,
    alt: "...",
    className: imageClasses,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: classes.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  }, "Christian Louboutin"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 21
    }
  }, "DESIGNER"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    justIcon: true,
    link: true,
    className: classes.margin5,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fab fa-twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 23
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    justIcon: true,
    link: true,
    className: classes.margin5,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fab fa-instagram",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 23
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    justIcon: true,
    link: true,
    className: classes.margin5,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fab fa-facebook",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 23
    }
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 15
    }
  }, "An artist of considerable range, Chet Faker \u2014 the name taken by Melbourne-raised, Brooklyn-based Nick Murphy \u2014 writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure.", " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
    justify: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    xs: 12,
    sm: 12,
    md: 8,
    className: classes.navWrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_NavPills_NavPills_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
    alignCenter: true,
    color: "primary",
    tabs: [{
      tabButton: "Studio",
      tabIcon: _material_ui_icons_Camera__WEBPACK_IMPORTED_MODULE_3___default.a,
      tabContent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
        justify: "center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 25
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
        xs: 12,
        sm: 12,
        md: 4,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 27
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        alt: "...",
        src: assets_img_examples_studio_1_jpg__WEBPACK_IMPORTED_MODULE_15___default.a,
        className: navImageClasses,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 29
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        alt: "...",
        src: assets_img_examples_studio_2_jpg__WEBPACK_IMPORTED_MODULE_16___default.a,
        className: navImageClasses,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 29
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
        xs: 12,
        sm: 12,
        md: 4,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 27
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        alt: "...",
        src: assets_img_examples_studio_5_jpg__WEBPACK_IMPORTED_MODULE_19___default.a,
        className: navImageClasses,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 29
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        alt: "...",
        src: assets_img_examples_studio_4_jpg__WEBPACK_IMPORTED_MODULE_18___default.a,
        className: navImageClasses,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 29
        }
      })))
    }, {
      tabButton: "Work",
      tabIcon: _material_ui_icons_Palette__WEBPACK_IMPORTED_MODULE_4___default.a,
      tabContent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
        justify: "center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 25
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
        xs: 12,
        sm: 12,
        md: 4,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 27
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        alt: "...",
        src: assets_img_examples_olu_eletu_jpg__WEBPACK_IMPORTED_MODULE_20___default.a,
        className: navImageClasses,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 29
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        alt: "...",
        src: assets_img_examples_clem_onojeghuo_jpg__WEBPACK_IMPORTED_MODULE_21___default.a,
        className: navImageClasses,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 29
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        alt: "...",
        src: assets_img_examples_cynthia_del_rio_jpg__WEBPACK_IMPORTED_MODULE_22___default.a,
        className: navImageClasses,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 29
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
        xs: 12,
        sm: 12,
        md: 4,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 27
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        alt: "...",
        src: assets_img_examples_mariya_georgieva_jpg__WEBPACK_IMPORTED_MODULE_23___default.a,
        className: navImageClasses,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 29
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        alt: "...",
        src: assets_img_examples_clem_onojegaw_jpg__WEBPACK_IMPORTED_MODULE_24___default.a,
        className: navImageClasses,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 29
        }
      })))
    }, {
      tabButton: "Favorite",
      tabIcon: _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_5___default.a,
      tabContent: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
        justify: "center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 25
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
        xs: 12,
        sm: 12,
        md: 4,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 27
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        alt: "...",
        src: assets_img_examples_mariya_georgieva_jpg__WEBPACK_IMPORTED_MODULE_23___default.a,
        className: navImageClasses,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 29
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        alt: "...",
        src: assets_img_examples_studio_3_jpg__WEBPACK_IMPORTED_MODULE_17___default.a,
        className: navImageClasses,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 29
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
        xs: 12,
        sm: 12,
        md: 4,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 27
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        alt: "...",
        src: assets_img_examples_clem_onojeghuo_jpg__WEBPACK_IMPORTED_MODULE_21___default.a,
        className: navImageClasses,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 29
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        alt: "...",
        src: assets_img_examples_olu_eletu_jpg__WEBPACK_IMPORTED_MODULE_20___default.a,
        className: navImageClasses,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 29
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        alt: "...",
        src: assets_img_examples_studio_1_jpg__WEBPACK_IMPORTED_MODULE_15___default.a,
        className: navImageClasses,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 29
        }
      })))
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 17
    }
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/adhigunarsa/Web-Development/gardening-site/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/adhigunarsa/Web-Development/gardening-site/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map
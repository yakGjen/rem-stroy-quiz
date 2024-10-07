/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/app.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("try {\n  $(document).ready(() => {\n    $(\"img\").on(\"dragstart\", event => {\n      event.preventDefault();\n    });\n    $('.pop-up').hide();\n    $('.pop-up-thnx').hide();\n    $('.pop-up-exit').hide(); // $('.pop-up-exit, .pop-up').click((e) => {\n\n    $('.pop-up-background').click(e => {\n      // if ($(e.target).hasClass('pop-up-exit') || $(e.target).hasClass('pop-up')) {\n      if ($(e.target).hasClass('pop-up-background')) {\n        $('.pop-up-background').hide();\n        $('.pop-up').hide();\n        $('.pop-up-thnx').hide();\n        $('.pop-up-exit').hide();\n      }\n    });\n    $('.header__btn').click(() => {\n      $('.pop-up-background').show();\n      $('.pop-up').show();\n    });\n    /** pop-up before exit */\n\n    let init = false;\n    const initQuitFn = $(window).height() / 2;\n\n    const handlerMove1 = e => {\n      const top = e.screenY;\n      if (top > initQuitFn) init = true;\n\n      if (init && top < 110) {\n        console.log('ok');\n        $('.pop-up-background').show();\n        $('.pop-up-exit').show();\n        $(document).unbind('mousemove', handlerMove1);\n      }\n    };\n\n    $(document).bind('mousemove', handlerMove1);\n    /** end pop-up before exit */\n\n    const questSlider = new Swiper('.quiz__question-wrap', {\n      allowTouchMove: false,\n      autoHeight: true,\n      effect: 'fade',\n      fadeEffect: {\n        crossFade: true\n      }\n    });\n    const quiz = new Swiper('.quiz__slides-wrap', {\n      spaceBetween: 10,\n      allowTouchMove: false,\n      autoHeight: true,\n\n      /*navigation: {\r\n        nextEl: '.quiz__btn_next',\r\n        prevEl: '.quiz__btn_prev',\r\n      },*/\n      effect: 'fade',\n      fadeEffect: {\n        crossFade: true\n      }\n    });\n    const lines = Array.from($('.quiz__progress-line'));\n    const slides = Array.from($('.quiz__slide'));\n    $('.current-slide').text(quiz.activeIndex + 1);\n    $('.all-slides').text(slides.length);\n    const permission = [];\n    $('.quiz__slide').on('input', e => {\n      if (permission[quiz.activeIndex] === undefined) {\n        permission.push(true);\n      }\n    });\n    $('.quiz__btn_prev').click(e => {\n      quiz.slidePrev();\n    });\n\n    const showNote = () => {\n      $('.note-next').addClass('note-next_active');\n      setTimeout(() => $('.note-next').removeClass('note-next_active'), 1000);\n    };\n\n    $('.quiz__btn_next').click(e => {\n      if (permission[quiz.activeIndex]) {\n        quiz.slideNext();\n      } else {\n        showNote();\n      }\n    });\n    quiz.on('slideChange', function () {\n      $('.quiz__progress-line').each((i, el) => {\n        $(el).removeClass('quiz__progress-line_active');\n      });\n      $(lines[quiz.activeIndex]).addClass('quiz__progress-line_active');\n      $('.current-slide').text(quiz.activeIndex + 1);\n\n      if (quiz.activeIndex > 0 && quiz.activeIndex < slides.length) {\n        $('.quiz__btn_prev').removeClass('quiz__btn_hide');\n      } else if (quiz.activeIndex >= slides.length) {\n        $('.quiz-static').hide();\n        $('.quiz__question-wrap').hide();\n        $('.quiz__progress').hide();\n        $('.quiz__btns').hide();\n        $('.quiz').addClass('quiz_width');\n      } else {\n        $('.quiz__btn_prev').addClass('quiz__btn_hide');\n      }\n    });\n    quiz.on('slideNextTransitionStart', e => {\n      questSlider.slideNext();\n    });\n    quiz.on('slidePrevTransitionStart', () => {\n      questSlider.slidePrev();\n    });\n  });\n} catch (e) {\n  console.log(e);\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ 0:
/*!*******************************************!*\
  !*** multi ./src/index.js ./src/app.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! D:\\tmp\\projects\\квиз-строительство/src/index.js */\"./src/index.js\");\nmodule.exports = __webpack_require__(/*! D:\\tmp\\projects\\квиз-строительство/src/app.scss */\"./src/app.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js_./src/app.scss?");

/***/ })

/******/ });
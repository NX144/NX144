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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.addEventListener("DOMContentLoaded", function () {
  // RUS AND KAZ LANGUAGE

  const body = document.body;
  const language = document.querySelector(".language");
  const languageValue = document.querySelectorAll(".language__value");
  const closeDropdown = () => {
    if (language.classList.contains('language-active')) {
      language.classList.remove('language-active');
    }
  };
  let countLang = 0;
  body.addEventListener('click', e => {
    if (e.target.classList.contains('language') || e.target.parentNode.classList.contains('language')) {
      // console.log(e.target.parentNode.classList.contains('language'));
      language.classList.add("language-active");
      if (countLang == 2) {
        countLang = 0;
        closeDropdown();
      }
    } else {
      closeDropdown();
    }
  });
  language.addEventListener("click", e => {
    countLang++;
    // e.stopPropagation();
    if (!e.target.classList.contains("language__value-active")) {
      languageValue.forEach(item => item.classList.remove("language__value-active"));
      e.target.classList.add("language__value-active");
      if (e.target.getAttribute("data-lang") == "Kaz") {
        language.insertBefore(languageValue[1], languageValue[0]);
      } else {
        language.insertBefore(languageValue[0], languageValue[1]);
      }
    }
  });

  // MENU HAMBURGER

  if (document.querySelector(".wrap-menu")) {
    const burgerBtn = document.querySelector(".hamburger");
    const menu = document.querySelector(".wrap-menu");
    // const menuClose = document.querySelector(".hamburger-active");

    burgerBtn.addEventListener("click", e => {
      if (burgerBtn.classList.contains("hamburger-active")) {
        menu.classList.remove("header-menu-active");
        burgerBtn.classList.remove("hamburger-active");
      } else {
        burgerBtn.classList.add("hamburger-active");
        menu.classList.add("header-menu-active");
      }
    });
  }

  // HEADER SCRIPT MENU

  const headerLinksItem = document.querySelectorAll("header .menu__item");
  headerLinksItem.forEach(item => {
    item.addEventListener("click", e => {
      if (window.innerWidth <= 786) {
        e.preventDefault();
        if (e.target && e.target.classList.contains("menu__item_link")) {
          e.target.nextElementSibling.classList.toggle("menu__item-links-active");
          e.target.lastChild.previousSibling.classList.toggle("arrow-active");
        } else if (e.target && e.target.parentNode.classList.contains("menu__item_link")) {
          e.target.classList.toggle("arrow-active");
          e.target.parentNode.nextElementSibling.classList.toggle("menu__item-links-active");
        }
      }
    });
  });
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map
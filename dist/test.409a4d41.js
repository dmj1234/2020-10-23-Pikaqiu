// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n  *{\n        margin: 0;\n        padding: 0;\n    }\n    \n li {\n    list-style: none;\n}\n\n.pikaqiu {\n    background: rgb(255, 219, 0);\n   \n    height: 100vh;\n    position: relative;\n}\n\n.nose {\n    display: block;\n    border: 10px solid #2e2e2e;\n    position: relative;\n    width: 0;\n    height: 0;\n    margin: 0 auto;\n    top: 270px;\n    border-width: 15px;\n    border-color: #2e2e2e transparent transparent transparent;\n    z-index: 888;\n}\n\n@keyframes wave {\n    0% {\n        transform: rotate(0deg);\n}\n    33% {\n        transform: rotate(15deg);\n}\n    66% {\n        transform: rotate(-15deg);\n}\n    100% {\n        transform: rotate(0deg);\n}\n}\n\n.nose:hover {\n    transform-origin: center;\n    animation: wave 300ms infinite linear;\n}\n\n.yuan {\n    position: absolute;\n    border: 1px solid #2e2e2e;\n    width: 28px;\n    height: 8px;\n    top: 50%;\n    left: 50%;\n    margin-left: -15px;\n    margin-top: -21px;\n    border-radius: 50%;\n    background: #2e2e2e;\n}\n\n.eye {\n    position: absolute;\n    border: 2px solid rgb(46, 46, 46);\n    width: 74px;\n    height: 74px;\n    left: 50%;\n    margin-top: 228px;\n    margin-left: -37px;\n    border-radius: 50%;\n    background: rgb(46, 46, 46);\n}\n\n.eye.left::after {\n    content: ' ';\n    display: block;\n    border: 1px solid black;\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    background: #ffffff;\n    margin-left: 10px;\n    margin-top: 4px;\n    box-shadow: 15px 4px 28px #9090AA;\n}\n\n.eye.right::before {\n    content: ' ';\n    display: block;\n    border: 1px solid black;\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    background: #ffffff;\n    margin-left: 10px;\n    margin-top: 4px;\n    box-shadow: 15px 4px 28px #9090AA;\n}\n\n.eye.left {\n    transform: translateX(-173px);\n}\n\n.eye.right {\n    transform: translateX(168px);\n}\n\n.mouth {\n    width: 200px;\n    height: 200px;\n    left: 50%;\n    top: 50%;\n    position: absolute;\n    margin-left: -101px;\n    top: 340px;\n    z-index: 100;\n}\n\n.mouth .up .lip {\n    position: absolute;\n    display: block;\n    border: 5px solid #2e2e2e;\n    background: rgb(255, 219, 0);\n    width: 125px;\n    height: 80px;\n    border-radius: 50%;\n    border-top: none;\n    border-left: none;\n    border-right: none;\n    margin-top: -70px;\n    z-index: 999;\n}\n\n.mouth .up .lip.left {\n    transform: rotate(10deg);\n    margin-left: 98px;\n}\n\n.mouth .up .lip.right {\n    transform: rotate(350deg);\n    margin-left: -25px;\n}\n\n.mouth .down {\n    position: absolute;\n    background: rgb(255, 219, 0);\n    height: 158px;\n    width: 100%;\n    top: -28px;\n    overflow: hidden;\n}\n\n.mouth .down .she {\n    position: absolute;\n    border: 1px solid red;\n    background-color: rgb(150, 5, 19);\n    width: 150px;\n    height: 600px;\n    left: 50%;\n    bottom: 0;\n    margin-left: -75px;\n    border-radius: 75px/300px;\n    overflow: hidden;\n}\n\n.mouth .down .she .tou {\n    position: absolute;\n    border: 1px solid red;\n    width: 150px;\n    height: 600px;\n    left: 50%;\n    top: 50%;\n    background-color: rgb(252, 74, 98);\n    margin-top: 193px;\n    margin-left: -75px;\n    bottom: 0;\n    border-radius: 240px/300px;\n}\n\n.face {\n    position: absolute;\n    border: 4px solid #222222;\n    width: 100px;\n    height: 100px;\n    top: 350px;\n    left: 50%;\n    margin-left: -50px;\n}\n\n\n.face.left {\n    transform: translateX(-240px);\n    border-radius: 50%;\n    background: rgb(252, 13, 28);\n}\n\n.face.right {\n    transform: translateX(230px);\n    background: rgb(252, 13, 28);\n    border-radius: 50%;\n}\n";
var _default = string;
exports.default = _default;
},{}],"HdJB":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  id: undefined,
  time: 100,
  ui: {
    demo: document.querySelector('#demo'),
    demo2: document.querySelector('#demo2')
  },
  n: 1,
  init: function init() {
    player.ui.demo.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.play();
    player.bindEvents();
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > _css.default.length) {
      window.clearInterval(id);
      return;
    }

    console.log(player.n + ':' + _css.default.substr(0, player.n));
    player.ui.demo.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  play: function play() {
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 200;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 90;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init();
},{"./css.js":"K4Xi"}]},{},["HdJB"], null)
//# sourceMappingURL=test.409a4d41.js.map
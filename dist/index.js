"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

// var _hslToRgb = require("");
//
// var _hslToRgb2 = _interopRequireDefault(_hslToRgb);

// var _rgbToHsl = require("");
//
// var _rgbToHsl2 = _interopRequireDefault(_rgbToHsl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// var _class = function () {
//   function _class(hex) {
//     _classCallCheck(this, _class);
//
//     this.color = (0, _rgbToHsl2.default)(this.hexToRgb(hex));
//   }

  _createClass(_class, [{
    key: "darken",
    value: function darken(percent) {
      this.color[2] -= percent;
      if (this.color[2] < 0) {
        this.color[2] = 0;
      }
      return this;
    }
  }, {
    key: "decreaseHue",
    value: function decreaseHue(percent) {
      percent *= 3.6;
      this.color[0] -= percent;
      if (this.color[0] < 0) {
        this.color[0] = 0;
      }
      return this;
    }
  }, {
    key: "decreaseSaturation",
    value: function decreaseSaturation(percent) {
      this.color[1] -= percent;
      if (this.color[1] < 0) {
        this.color[1] = 0;
      }
      return this;
    }
  }, {
    key: "hexToRgb",
    value: function hexToRgb(hex) {
      hex = hex.replace(/^#/, "");

      if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
      }

      var num = parseInt(hex, 16);

      return [num >> 16, num >> 8 & 255, num & 255];
    }
  }, {
    key: "increaseHue",
    value: function increaseHue(percent) {
      percent *= 3.6;
      this.color[0] += percent;
      if (this.color[0] > 360) {
        this.color[0] = 360;
      }
      return this;
    }
  }, {
    key: "increaseSaturation",
    value: function increaseSaturation(percent) {
      this.color[1] += percent;
      if (this.color[1] > 100) {
        this.color[1] = 100;
      }
      return this;
    }
  },
  // {
  //   key: "isDark",
  //   value: function isDark() {
  //     var rgb = (0, _hslToRgb2.default)(this.color);
  //     return (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000 < 128;
  //   }
  // },
   {
    key: "isLight",
    value: function isLight() {
      return !this.isDark();
    }
  }, {
    key: "lighten",
    value: function lighten(percent) {
      this.color[2] += percent;
      if (this.color[2] > 100) {
        this.color[2] = 100;
      }
      return this;
    }
  },
  //  {
  //   key: "toHex",
  //   value: function toHex() {
  //     var rgb = (0, _hslToRgb2.default)(this.color);
  //     var red = rgb[0];
  //     var green = rgb[1];
  //     var blue = rgb[2];
  //
  //     return "#" + (blue | green << 8 | red << 16 | 1 << 24).toString(16).slice(1).toUpperCase();
  //   }
  // }
]);

  return _class;
}();

exports.default = _class;

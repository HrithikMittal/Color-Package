// import HSLToRGB;
// import RGBToHSL;

// export default class{
//   constructor(hex) {
//     this.color = RGBToHSL(this.hexToRgb(hex));
//   }

  darken(percent) {
    this.color[2] -= percent;
    if(this.color[2] < 0) {
      this.color[2] = 0;
    }
    return(this);
  }

  decreaseHue(percent) {
    percent *= 3.6;
    this.color[0] -= percent;
    if(this.color[0] < 0) {
      this.color[0] = 0;
    }
    return(this);
  }

  decreaseSaturation(percent) {
    this.color[1] -= percent;
    if(this.color[1] < 0) {
      this.color[1] = 0;
    }
    return(this);
  }

  // hexToRgb(hex) {
  //   hex = hex.replace(/^#/, "");
  //
  //   if(hex.length === 3) {
  //     hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  //   }
  //
  //   let num = parseInt(hex, 16);
  //
  //   return([num >> 16, num >> 8 & 255, num & 255]);
  // }

  increaseHue(percent) {
    percent *= 3.6;
    this.color[0] += percent;
    if(this.color[0] > 360) {
      this.color[0] = 360;
    }
    return(this);
  }

  increaseSaturation(percent) {
    this.color[1] += percent;
    if(this.color[1] > 100) {
      this.color[1] = 100;
    }
    return(this);
  }

  isDark() {
    const rgb = HSLToRGB(this.color);
    return(((rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000) < 128);
  }

  isLight() {
    return(!this.isDark());
  }

  lighten(percent) {
    this.color[2] += percent;
    if(this.color[2] > 100) {
      this.color[2] = 100;
    }
    return(this);
  }

  toHex() {
    const rgb = HSLToRGB(this.color);
    const red = rgb[0];
    const green = rgb[1];
    const blue = rgb[2];

    return("#" + ((blue | green << 8 | red << 16) | 1 << 24).toString(16).slice(1).toUpperCase());
  }
}

import { momentCalculator } from "../../lib/utils/mathFunction";

// fix replaceAll function ecma script 2020
if (typeof String.prototype.replaceAll === "undefined") {
  String.prototype.replaceAll = function (match, replace) {
    return this.replace(new RegExp(match, 'g'), () => replace);
  }
}

// fix includes
if (typeof String.prototype.includes === "undefined") {
  String.prototype.includes = function (str) {
    var returnValue = false;
    if (this.indexOf(str) !== -1) {
      returnValue = true;
    }
    return returnValue;
  }
}
// // ✅ Provide fallback in place
// Your node version doesn't support ecmascript6 features, such as String.prototype.startsWith(). Node's latest version is 6.9.2 / 7.3.0 at the time of writing this, so you should consider upgrading node to the latest version as yours is pretty old.
//However, if that's not possible for you, you can use the polyfill found on mdn:
//
/*if (!String.prototype.startsWith) {
  String.prototype.startsWith = function(searchString, position) {
    position = position || 0;
    return this.indexOf(searchString, position) === position;
  };
}*/
//
export const htmlDecode = (input: string) => {
  input = String(input);
  if (typeof (document) === "undefined") {
    return serverDecode(input);
  }

  var e = document.createElement('div');
  e.innerHTML = input;
  return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}

export const serverDecode = (str: string) => {
  str = String(str);
  return str = str.replaceAll("&amp;", `&`).replaceAll("&#39;", `'`).replaceAll("&lt;", `<`).replaceAll("&gt;", `>`).replaceAll("&#34;", `"`);
}

export function replaceSpace(slug: string) {
  return slug.replace(/\s+/g, '-')
}

export function replaceDash(slug: string) {
  return slug.replace(/-/g, ' ')
}

export const capitalizeFirstLetter = (string) => {
  const t = string.toLowerCase()
  return t.toLowerCase().charAt(0).toUpperCase() + t.slice(1);
}
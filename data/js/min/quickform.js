/*
 HTML_QuickForm2 client-side validation library
 Package version 2.2.0
 https://pear.php.net/package/HTML_QuickForm2

 Copyright 2006-2020, Alexey Borzov, Bertrand Mansion
 Licensed under BSD 3-Clause License
 https://opensource.org/licenses/BSD-3-Clause
*/
var qf=qf||{};qf.elements=qf.elements||{};
qf.typeOf=function(a){var b=typeof a;if("function"==b&&"undefined"==typeof a.call)return"object";if("object"==b)if(a){if(a instanceof Array||!(a instanceof Object||"[object Array]"!=Object.prototype.toString.call(a)||"number"!=typeof a.length||"undefined"==typeof a.splice||"undefined"==typeof a.propertyIsEnumerable||a.propertyIsEnumerable("splice")))return"array";if(!(a instanceof Object||"[object Function]"!=Object.prototype.toString.call(a)&&("undefined"==typeof a.call||"undefined"==typeof a.propertyIsEnumerable||
a.propertyIsEnumerable("call"))))return"function"}else return"null";return b};qf.addNamespace=function(a){a=a.split(".");for(var b=window,c;a.length&&(c=a.shift());)b=b[c]?b[c]:b[c]={}};qf.Map=function(a){this._map={};this._keys=[];this._count=0;a&&this.merge(a)};
qf.Map.prototype=function(){function a(c,d){return Object.prototype.hasOwnProperty.call(c,d)}function b(){if(this._count!=this._keys.length){for(var c=0,d=0,e={};c<this._keys.length;){var f=this._keys[c];a(this._map,f)&&!a(e,f)&&(this._keys[d++]=f,e[f]=!0);c++}this._keys.length=d}}return{hasKey:function(c){return a(this._map,c)},length:function(){return this._count},getValues:function(){b.call(this);for(var c=[],d=0;d<this._keys.length;d++)c.push(this._map[this._keys[d]]);return c},getKeys:function(){b.call(this);
return this._keys.concat()},isEmpty:function(){return 0==this._count},clear:function(){this._map={};this._count=this._keys.length=0},remove:function(c){if(!a(this._map,c))return!1;delete this._map[c];this._count--;this._keys.length>2*this._count&&b.call(this);return!0},get:function(c,d){return a(this._map,c)?this._map[c]:d},set:function(c,d){a(this._map,c)||(this._count++,this._keys.push(c));this._map[c]=d},merge:function(c,d){var e=0;if(c instanceof qf.Map){var f=c.getKeys();var g=c.getValues()}else{f=
[];g=[];for(var h in c)f[e]=h,g[e++]=c[h]}c=d||qf.Map.mergeReplace;for(e=0;e<f.length;e++)this.hasKey(f[e])?this.set(f[e],c(this.get(f[e]),g[e])):this.set(f[e],g[e])}}}();qf.Map.mergeReplace=function(a,b){return b};qf.Map.mergeKeep=function(a,b){return a};qf.Map.mergeArrayConcat=function(a,b){"array"!=qf.typeOf(a)&&(a=[a]);"array"!=qf.typeOf(b)&&(b=[b]);return a.concat(b)};qf.form=function(){return{getValue:function(a){"string"==typeof a&&(a=document.getElementById(a));if(!(a&&"type"in a))return null;switch(a.type.toLowerCase()){case "checkbox":case "radio":return a.checked?a.value:null;case "select-one":var b=a.selectedIndex;return-1==b?null:a.options[b].value;case "select-multiple":b=[];for(var c=0;c<a.options.length;c++)a.options[c].selected&&b.push(a.options[c].value);return b;default:return"undefined"==typeof a.value?null:a.value}},getSubmitValue:function(a){"string"==
typeof a&&(a=document.getElementById(a));if(!(a&&"type"in a)||a.disabled)return null;switch(a.type.toLowerCase()){case "reset":case "button":return null;default:return qf.form.getValue(a)}},getContainerSubmitValue:function(){for(var a,b,c=new qf.Map,d=0;d<arguments.length;d++)if(arguments[d]instanceof qf.Map)c.merge(arguments[d],qf.Map.mergeArrayConcat);else if("object"==qf.typeOf(arguments[d])?(a=arguments[d].name,b=arguments[d].value):(a=document.getElementById(arguments[d]).name,b=qf.form.getSubmitValue(arguments[d])),
null!==b){var e={};e[a]=b;c.merge(e,qf.Map.mergeArrayConcat)}return c},setValue:function(a,b){"string"==typeof a&&(a=document.getElementById(a));if(a&&"type"in a)switch(a.type.toLowerCase()){case "checkbox":case "radio":a.checked=!!b;break;case "select-one":a:{a.selectedIndex=-1;for(var c,d=0;c=a.options[d];d++)if(c.value==b){c.selected=!0;break a}}break;case "select-multiple":"array"!=qf.typeOf(b)&&(b=[b]);for(d=0;c=a.options[d];d++){c.selected=!1;for(var e=0,f=b.length;e<f;e++)c.value==b[e]&&(c.selected=
!0)}break;default:a.value=b}}}}();qf.$v=qf.form.getSubmitValue;qf.$cv=qf.form.getContainerSubmitValue;qf.classes={add:function(a,b){"string"==qf.typeOf(b)&&(b=b.split(/\\s+/));if(a.className){for(var c=" "+a.className+" ",d=a.className,e=0,f=b.length;e<f;e++)b[e]&&0>c.indexOf(" "+b[e]+" ")&&(d+=" "+b[e]);a.className=d}else a.className=b.join(" ")},remove:function(a,b){if(a.className){"string"==qf.typeOf(b)&&(b=b.split(/\\s+/));for(var c=(" "+a.className+" ").replace(/[\n\t\r]/g," "),d=0,e=b.length;d<e;d++)b[d]&&(c=c.replace(" "+b[d]+" "," "));a.className=c.replace(/^\s+/,"").replace(/\s+$/,"")}},
has:function(a,b){return-1<(" "+a.className+" ").replace(/[\n\t\r]/g," ").indexOf(" "+b+" ")}};qf.events={test:function(){var a={submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1},b=document.createElement("div");if(b.attachEvent)for(var c in{submit:!0,change:!0,focusin:!0}){var d="on"+c,e=d in b;e||(b.setAttribute(d,"return;"),e="function"===typeof b[d]);a[c+"Bubbles"]=e}return a}(),addListener:function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent("on"+b,c)},removeListener:function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent("on"+b,c)},
fixEvent:function(a){a=a||window.event;a.preventDefault=a.preventDefault||function(){this.returnValue=!1};a.stopPropagation=a.stopPropagation||function(){this.cancelBubble=!0};a.target||(a.target=a.srcElement);!a.relatedTarget&&a.fromElement&&(a.relatedTarget=a.fromElement==a.target?a.toElement:a.fromElement);if(null==a.pageX&&null!=a.clientX){var b=document.documentElement,c=document.body;a.pageX=a.clientX+(b&&b.scrollLeft||c&&c.scrollLeft||0)-(b.clientLeft||0);a.pageY=a.clientY+(b&&b.scrollTop||
c&&c.scrollTop||0)-(b.clientTop||0)}!a.which&&a.button&&(a.which=a.button&1?1:a.button&2?3:a.button&4?2:0);return a},addLiveValidationHandler:function(a,b){this.test.changeBubbles?this.addListener(a,"change",b,!0):this.addListener(a,"beforeactivate",function(c){c=qf.events.fixEvent(c).target;/^(?:textarea|input|select)$/i.test(c.nodeName)&&!c._onchange_attached&&("checkbox"!==c.type&&"radio"!==c.type?qf.events.addListener(c,"change",b):(qf.events.addListener(c,"propertychange",function(d){"checked"===
qf.events.fixEvent(d).propertyName&&(this._checked_changed=!0)}),qf.events.addListener(c,"click",function(d){this._checked_changed&&(d=qf.events.fixEvent(d),d._type="change",this._checked_changed=!1,b(d))})),c._onchange_attached=!0)});qf.events.test.focusinBubbles?this.addListener(a,"focusout",b,!0):this.addListener(a,"blur",b,!0)}};qf.Rule=function(a,b,c,d){this.callback=a;this.owner=b;this.message=c;this.chained=d||[[]]};qf.LiveRule=function(a,b,c,d,e){qf.Rule.call(this,a,b,c,e);this.triggers=d};qf.LiveRule.prototype=new qf.Rule;qf.LiveRule.prototype.constructor=qf.LiveRule;
qf.Validator=function(a,b){this.rules=b||[];this.errors=new qf.Map;a.validator=this;qf.events.addListener(a,"submit",qf.Validator.submitHandler);b=0;for(var c;c=this.rules[b];b++)if(c instanceof qf.LiveRule){qf.events.addLiveValidationHandler(a,qf.Validator.liveHandler);break}};qf.Validator.submitHandler=function(a){a=qf.events.fixEvent(a);var b=a.target;b.validator&&!b.validator.run(b)&&a.preventDefault()};
qf.Validator.liveHandler=function(a){a=qf.events.fixEvent(a);if(a.target.form&&a.target.form.validator){var b=a.target.id,c=a.target.form.validator;"change"!==(a._type||a.type)&&c._lastTarget&&b===c._lastTarget||c.runLive(a);c._lastTarget=b}};
qf.Validator.prototype={classes:{error:"error",valid:"valid",message:"error",ancestor:"element"},onStart:function(a){a=0;for(var b;b=this.rules[a];a++)this.removeRelatedErrors(b)},onFieldError:function(a,b){if(a=this.findAncestor(a)){qf.classes.add(a,this.classes.error);var c=document.createElement("span");c.className=this.classes.message;c.appendChild(document.createTextNode(b));c.appendChild(document.createElement("br"));"fieldset"!=a.nodeName.toLowerCase()?a.insertBefore(c,a.firstChild):(b=a.getElementsByTagName("legend"),
0==b.length?a.insertBefore(c,a.firstChild):b[b.length-1].parentNode.insertBefore(c,b[b.length-1].nextSibling))}},onFieldValid:function(a){(a=this.findAncestor(a))&&qf.classes.add(a,this.classes.valid)},onFormValid:function(){},onFormError:function(){},run:function(a){this.onStart(a);this.errors.clear();a=0;for(var b;b=this.rules[a];a++)this.errors.hasKey(b.owner)||this.validate(b);if(this.errors.isEmpty())return this.onFormValid(),!0;this.onFormError();return!1},runLive:function(a){a=" "+a.target.id+
" ";for(var b=new qf.Map,c=-1;b.length()>c;){c=b.length();for(var d=0,e;e=this.rules[d];d++)if(e instanceof qf.LiveRule&&!b.hasKey(d))for(var f=0,g;g=e.triggers[f];f++)if(-1<a.indexOf(" "+g+" ")){b.set(d,!0);this.removeRelatedErrors(e);a+=e.triggers.join(" ")+" ";break}}for(d=0;e=this.rules[d];d++)b.hasKey(d)&&!this.errors.hasKey(e.owner)&&this.validate(e)},validate:function(a){for(var b=!1,c=a.callback.call(this),d=0,e;e=a.chained[d];d++){for(var f=0,g;(g=e[f])&&(c=c&&this.validate(g),c);f++);if(b=
b||c)break;c=!0}if(!b&&a.message&&!this.errors.hasKey(a.owner))this.errors.set(a.owner,a.message),this.onFieldError(a.owner,a.message);else if(!this.errors.hasKey(a.owner))this.onFieldValid(a.owner);return b},findAncestor:function(a){a=document.getElementById(a);if(a.type&&"hidden"===a.type)return null;for(;!qf.classes.has(a,this.classes.ancestor)&&"fieldset"!=a.nodeName.toLowerCase()&&"form"!=a.nodeName.toLowerCase();)a=a.parentNode;return a},removeErrorMessage:function(a){var b=this.findAncestor(a);
this.errors.remove(a);if(b)for(qf.classes.remove(b,[this.classes.error,this.classes.valid]),a=b.getElementsByTagName("span"),b=a.length-1;0<=b;b--)qf.classes.has(a[b],this.classes.message)&&a[b].parentNode.removeChild(a[b])},removeRelatedErrors:function(a){this.removeErrorMessage(a.owner);for(var b=0,c;c=a.chained[b];b++)for(var d=0,e;e=c[d];d++)this.removeRelatedErrors(e)}};qf.rules=qf.rules||{};qf.rules.each=function(a){for(var b=0;b<a.length;b++)if(!a[b]())return!1;return!0};qf.rules.empty=function(a){switch(qf.typeOf(a)){case "array":for(var b=0;b<a.length;b++)if(!qf.rules.empty(a[b]))return!1;return!0;case "undefined":case "null":return!0;default:return""==a}};
qf.rules.nonempty=function(a,b){var c,d=0;if("array"==qf.typeOf(a)){for(c=0;c<a.length;c++)qf.rules.nonempty(a[c],1)&&d++;return d>=b}if(a instanceof qf.Map){var e=a.getValues();if(1==a.length()&&(a=a.getKeys()[0],c=e[0],"[]"==a.slice(-2)&&"array"==qf.typeOf(c)))return qf.rules.nonempty(c,b);for(c=0;c<e.length;c++)qf.rules.nonempty(e[c],1)&&d++;return d>=b}return""!=a&&"undefined"!=qf.typeOf(a)&&"null"!=qf.typeOf(a)};
qf.rules.email=function(a){if(qf.rules.empty(a))return!0;a=a.split("@");if(2!=a.length||64<a[0].length||4>a[1].length||255<a[1].length)return!1;for(var b=a[0].split("."),c=0;c<b.length;c++)if(!/^[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+$/.test(b[c]))return!1;return/^([a-z0-9][a-z0-9\-]*[a-z0-9]|[a-z0-9])(\.([a-z0-9][a-z0-9\-]*[a-z0-9]|[a-z0-9])){0,10}\.([a-z]{2,}){1}$/i.test(a[1])};

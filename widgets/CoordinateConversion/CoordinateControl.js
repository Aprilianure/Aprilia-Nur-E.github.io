// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/CoordinateConversion/CoordinateControl.html":"\x3cdiv class\x3d'coordinateContainer'\x3e\r\n    \x3cdiv class\x3d'add-with-icon coordLabel' data-dojo-attach-point\x3d'coordNameContainer'\x3e\r\n      \x3cspan data-dojo-type\x3d'dijit/InlineEditBox' width\x3d'75px' data-dojo-props\x3d\"editor:'dijit/form/TextBox', autoSave:true\" data-dojo-attach-point\x3d'coordName'\x3e${type}\x3c/span\x3e\r\n    \x3c/div\x3e\r\n    \x3cbr /\x3e\r\n    \x3cdiv class\x3d'add-with-icon'\x3e\r\n        \x3ctextarea id\x3d'${uid}' type\x3d'text' rows\x3d'1' class\x3d'ta' data-dojo-attach-point\x3d'coordtext' placeholder\x3d'${nls.coordinateInputLabel}'\x3e\x3c/textarea\x3e\r\n    \x3c/div\x3e\r\n\r\n    \x3cdiv class\x3d'coordactions'\x3e\r\n\r\n        \x3cdiv class\x3d'add-with-icon'\x3e\r\n            \x3cspan id\x3d'${uid}_cpbtn' title\x3d'${nls.copyToClipboard}' data-dojo-attach-point\x3d'cpbtn' class\x3d'cpbtn'\x3e\x3c/span\x3e\r\n        \x3c/div\x3e\r\n\r\n        \x3cdiv class\x3d'add-with-icon'\x3e\r\n            \x3cspan title\x3d\"${nls.formatOutput}\" class\x3d'settingBtn' data-dojo-attach-point\x3d'formatButton' \x3e\x3c/span\x3e\r\n        \x3c/div\x3e\r\n\r\n        \x3cdiv class\x3d'add-with-icon'\x3e\r\n            \x3cspan id\x3d'${uid}_ntbtn' title\x3d'${nls.addNewNotation}' data-dojo-attach-point\x3d\"addNewCoordinateNotationBtn\" class\x3d\"jimu-icon jimu-icon-add jimu-state-disabled\"\x3e\x3c/span\x3e\r\n        \x3c/div\x3e\r\n\r\n        \x3cdiv class\x3d'add-with-icon'\x3e\r\n            \x3cspan title\x3d'${nls.zoomLabel}' class\x3d'zoomBtn' data-dojo-attach-point\x3d'zoomButton'\x3e\x3c/span\x3e\r\n        \x3c/div\x3e\r\n\r\n        \x3cdiv class\x3d'add-with-icon'\x3e\r\n            \x3cspan title\x3d'${nls.removeCoordinate}' class\x3d'jimu-icon jimu-icon-close' data-dojo-attach-point\x3d'removeControlBtn' \r\n                    data-dojo-attach-event\x3d'onclick: remove'\x3e\x3c/span\x3e\r\n        \x3c/div\x3e\r\n\r\n        \x3cdiv class\x3d'add-with-icon'\x3e\r\n            \x3cspan title\x3d\"${nls.expandOutput}\" class\x3d'expandBtn' data-dojo-attach-point\x3d'expandButton'\x3e\x3c/span\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\r\n    \x3cdiv data-dojo-attach-point\x3d'coordcontrols' class\x3d'coordarea'\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d'sub1' class\x3d'coordformat'\x3e\r\n            \x3cdiv class\x3d'crdfrmtlabel'\x3e\r\n                \x3cspan data-dojo-attach-point\x3d'sub1label' /\x3e\r\n            \x3c/div\x3e\r\n            \x3cinput readonly data-dojo-attach-point\x3d'${uid}sub1val' class\x3d'jimu-input crds'\x3e\x3c/input\x3e\r\n            \x3cdiv class\x3d'add-with-icon'\x3e\r\n                \x3cspan id\x3d'${uid}sub1val~cpbtn' title\x3d'${nls.copyToClipboard}' data-dojo-attach-point\x3d 'subVal1CpBtn' class\x3d'jimu-icon cpbtn'\x3e\x3c/span\x3e\r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d'sub2' class\x3d'coordformat'\x3e\r\n            \x3cdiv class\x3d'crdfrmtlabel'\x3e\r\n                \x3cspan data-dojo-attach-point\x3d'sub2label' /\x3e\r\n            \x3c/div\x3e\r\n            \x3cinput readonly data-dojo-attach-point\x3d'${uid}sub2val' class\x3d'jimu-input crds'\x3e\x3c/input\x3e\r\n             \x3cdiv class\x3d'add-with-icon'\x3e\r\n                \x3cspan id\x3d'${uid}sub2val~cpbtn' title\x3d'${nls.copyToClipboard}' data-dojo-attach-point\x3d 'subVal2CpBtn' class\x3d'jimu-icon cpbtn'\x3e\x3c/span\x3e\r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d'sub3' class\x3d'coordformat sub3'\x3e\r\n            \x3cdiv class\x3d'crdfrmtlabel'\x3e\r\n                 \x3cspan data-dojo-attach-point\x3d'sub3label' /\x3e\r\n            \x3c/div\x3e\r\n            \x3cinput readonly data-dojo-attach-point\x3d'${uid}sub3val' class\x3d'jimu-input crds'\x3e\r\n\r\n            \x3c/input\x3e\r\n             \x3cdiv class\x3d'add-with-icon'\x3e\r\n                \x3cspan id\x3d'${uid}sub3val~cpbtn' title\x3d'$${nls.copyToClipboard}' data-dojo-attach-point\x3d 'subVal3CpBtn' class\x3d'jimu-icon cpbtn'\x3e\x3c/span\x3e\r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d'sub4' class\x3d'coordformat sub4'\x3e\r\n            \x3cdiv class\x3d'crdfrmtlabel'\x3e\r\n                \x3cspan data-dojo-attach-point\x3d'sub4label' /\x3e\r\n            \x3c/div\x3e\r\n            \x3cinput readonly data-dojo-attach-point\x3d'${uid}sub4val' class\x3d'jimu-input crds'\x3e\r\n\r\n            \x3c/input\x3e\r\n             \x3cdiv class\x3d'add-with-icon'\x3e\r\n                \x3cspan id\x3d'${uid}sub4val~cpbtn' title\x3d'${nls.copyToClipboard}' data-dojo-attach-point\x3d'subVal4CpBtn' class\x3d'jimu-icon cpbtn'\x3e\x3c/span\x3e\r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv class\x3d\"line-separator\"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e\r\n"}});
define("dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/on dojo/dom-attr dojo/dom-class dojo/dom-style dojo/string dojo/topic dojo/keys dojo/Deferred dojo/dom dojo/dom-construct dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/registry dijit/Tooltip dijit/TooltipDialog dijit/popup dojo/text!./CoordinateControl.html esri/geometry/webMercatorUtils esri/graphic esri/geometry/Point esri/request esri/SpatialReference esri/tasks/ProjectParameters ./util jimu/dijit/Message ./EditOutputCoordinate ./dialogConfirm ./ConfirmNotation dijit/form/TextBox dijit/form/Textarea dijit/form/Select dijit/InlineEditBox".split(" "),
function(x,E,e,h,w,f,m,l,g,F,y,G,H,I,J,K,z,A,L,r,M,n,B,N,C,u,D,O,v,P,Q,R){return x([I,J,K],{templateString:M,baseClass:"jimu-widget-cc",input:!0,inputFromText:!1,hasCustomLabel:!1,addSign:!1,widgetInfo:null,constructor:function(a){x.safeMixin(this,a);this.uid=a.id||z.getUniqueId("cc")},parentStateDidChange:function(a){a.isActive?this.mapclickhandler.resume():(this.mapclickhandler.pause(),this._frmtdlg&&this._frmtdlg.domNode.offsetParent&&r.close(this._frmtdlg));this.widgetInfo={widgetState:a.state,
themeName:a.themeName,isActive:a.isActive}},postCreate:function(){this._frmtdlg=new L({id:this.uid+"_formatCoordinateTooltip",content:new P({nls:this.nls,ct:this.type}),style:"width: 400px",onClose:e.hitch(this,this.popupDidClose)});"DartTheme"===this.parentWidget.appConfig.theme.name&&f.add(this._frmtdlg.domNode,"dartThemeClaroDijitTooltipContainerOverride");this.defaultFormat&&(this._frmtdlg.content.formats[this.type].defaultFormat=this.defaultFormat);this.setConfig();this.initUI();isRTL&&"UTM (H)"===
this.type&&this.coordName.set("value","UTM (H) \x26#8206;")},setConfig:function(){this.util=new O({appConfig:this.parentWidget.appConfig,nls:this.nls});this.geomsrvc=this.util.geomService;this.zoomScale=this.parentWidget.config.coordinateconversion.zoomScale||5E4},initUI:function(){this.input?(this.setHidden(this.expandButton,!0),this.setHidden(this.removeControlBtn,!0),this.setHidden(this.coordNameContainer,!1),this.setHidden(this.addNewCoordinateNotationBtn,!0),f.add(this.cpbtn,"inputCopyBtn"),
w.set(this.cpbtn,"title",this.nls.copyAll)):(f.remove(this.domNode,"coordinateContainer"),f.add(this.domNode,"outputCoordinateContainer"),f.add(this.cpbtn,"outputCopyBtn"),this.setHidden(this.addNewCoordinateNotationBtn,!0),this.setHidden(this.zoomButton,!0),this.coordtext.readOnly=!0);this.currentClickPoint=this.parentWidget.map.extent.getCenter();this.getDDPoint(this.currentClickPoint).then(e.hitch(this,function(a){this.currentClickPointDDDD=this.currentClickPointDD=a;this.formatButton.title=this.nls.formatInput;
this.updateDisplay()}),e.hitch(this,function(a){console.error(a)}));this.setUIListeners()},setUIListeners:function(){g.subscribe("CRDWIDGETSTATEDIDCHANGE",e.hitch(this,this.parentStateDidChange));g.subscribe("INPUTPOINTDIDCHANGE",e.hitch(this,this.mapWasClicked));g.subscribe("INPUTERROR",e.hitch(this,this.inputError));this.own(h(this.expandButton,"click",e.hitch(this,this.expandButtonWasClicked)));this.own(h(this.addNewCoordinateNotationBtn,"click",e.hitch(this,this.newCoordnateBtnWasClicked)));this.own(h(this.zoomButton,
"click",e.hitch(this,this.zoomButtonWasClicked)));this.own(this.coordName.on("blur",e.hitch(this,this.coordNameDidChange)));this.cpbtn.addEventListener("click",e.hitch(this,this.cpBtnWasClicked));this.subVal1CpBtn.addEventListener("click",e.hitch(this,this.cpSubBtnWasClicked));this.subVal2CpBtn.addEventListener("click",e.hitch(this,this.cpSubBtnWasClicked));this.subVal3CpBtn.addEventListener("click",e.hitch(this,this.cpSubBtnWasClicked));this.subVal4CpBtn.addEventListener("click",e.hitch(this,this.cpSubBtnWasClicked));
this.mapclickhandler=h.pausable(this.parentWidget.map,"click",e.hitch(this,this.mapWasClicked));this.own(h(this.formatButton,"click",e.hitch(this,this.formatButtonWasClicked)));this.own(h(this._frmtdlg.content.applyButton,"click",e.hitch(this,function(){this.type=this._frmtdlg.content.ct;this.updateDisplay();this.hasCustomLabel||this._frmtdlg.content.formats[this._frmtdlg.content.ct].useCustom||this.coordName.set("value",this._frmtdlg.content.ct);r.close(this._frmtdlg)})));this.own(h(this._frmtdlg.content.cancelButton,
"click",e.hitch(this,function(){r.close(this._frmtdlg)})));this.own(h(this.coordtext,"keyup",e.hitch(this,this.coordTextInputKeyWasPressed)));this.own(this.geomsrvc.on("error",e.hitch(this,this.geomSrvcDidFail)))},popupDidClose:function(){if(this._frmtdlg.content.isCanceled)this.addSign!==this._frmtdlg.content.addSignChkBox.checked&&(this._frmtdlg.content.addSignChkBox.checked=this.addSign);else{this.addSign=this._frmtdlg.content.addSignChkBox.checked;var a=this._frmtdlg.content.ct;this.type!==a&&
(this.type=a,this.updateDisplay())}},coordNameDidChange:function(){this.hasCustomLabel=!0},cpSubBtnWasClicked:function(a){var d=a.currentTarget.id.split("~")[0];this.selectText(this[d]);d=this.execCopy();this.showToolTip(a.currentTarget.id,d?this.nls.copySuccessful:this.nls.copyFailed);window.getSelection().removeAllRanges()},execCopy:function(){var a;try{a=document.execCommand("copy")}catch(d){a=!1}return a},is_iOS:function(){return navigator.userAgent.match(/ipad|iphone/i)},selectText:function(a){if(this.is_iOS()){window.getSelection().removeAllRanges();
var d=document.createRange();d.selectNode(a);window.getSelection().addRange(d)}else a.select()},appendAllCoordsText:function(a){var d=z.toArray().filter(function(a){return"jimu-widget-cc"===a.baseClass&&!a.input});d.reverse();d=d.map(function(a){return a.coordtext.value}).join("\r\n");return a+"\r\n"+d},cpBtnWasClicked:function(a){a.preventDefault();a=this.coordtext.value;this.input&&(this.coordtext.value=this.appendAllCoordsText(this.coordtext.value));this.selectText(this.coordtext);var d=this.execCopy();
this.input&&(this.coordtext.value=a);this.showToolTip(this.cpbtn.id,d?this.nls.copySuccessful:this.nls.copyFailed);window.getSelection().removeAllRanges()},cpCoordPart:function(){},showToolTip:function(a,d){var c=G.byId(a);A.show(d,c);setTimeout(function(){A.hide(c)},1E3)},geomSrvcDidComplete:function(a){0>=a[0].length?(new v({message:this.nls.parseCoordinatesError}),g.publish("INPUTERROR")):(this.currentClickPointDD=new N(a[0][0],a[0][1],new u({wkid:4326})),this.input&&(this.parentWidget.map.centerAt(this.currentClickPointDD),
g.publish("INPUTPOINTDIDCHANGE",{mapPoint:this.currentClickPointDD,inputFromText:!0})))},geomSrvcDidFail:function(){new v({message:this.nls.parseCoordinatesError});g.publish("INPUTERROR")},coordTextInputKeyWasPressed:function(a){if(a.keyCode===F.ENTER){var d=this.util.getCleanInput(a.currentTarget.value);this.util.getCoordinateType(d).then(e.hitch(this,function(a){if(a)if(1===a.length){var b=this.processCoordTextInput(d,a[0],!1);this.util.getXYNotation(b,a[0].conversionType).then(e.hitch(this,function(a){0<
a[0].length?this.geomSrvcDidComplete(a):this.geomSrvcDidFail()}))}else{var c=new Q({title:this.nls.comfirmInputNotation,content:new R(a,this.nls),style:"width: 400px",hasSkipCheckBox:!1,nls:this.nls});c.show().then(e.hitch(this,function(){var b=E.filter(a,function(a){return a.name===c.content.comboOptions.get("value")}),S=this.processCoordTextInput(d,b[0],!1);this.util.getXYNotation(S,b[0].conversionType).then(e.hitch(this,function(a){0<a[0].length?this.geomSrvcDidComplete(a):this.geomSrvcDidFail()}))},
function(){}))}else new v({message:this.nls.parseCoordinatesError}),g.publish("INPUTERROR")}));w.set(this.coordtext,"value",d);this.currentClickPoint=null}},processCoordTextInput:function(a,d,c){var b=d.pattern.exec(a),e,p,k,f,g,q,h,l,m,n,r=!1,t=d.name;switch(d.name){case "DD":e=b[2];p=b[7];k=b[10];f=b[16];g=b[3].replace(/[,:]/,".");q=b[11].replace(/[,:]/,".");t="DD";break;case "DDrev":e=b[11];p=b[16];k=b[2];f=b[8];g=b[12].replace(/[,:]/,".");q=b[3].replace(/[,:]/,".");t="DD";break;case "DDM":e=b[2];
p=b[7];k=b[10];f=b[15];g=b[3];h=b[4].replace(/[,:]/,".");q=b[11];l=b[12].replace(/[,:]/,".");t="DDM";break;case "DDMrev":e=b[10];p=b[15];k=b[2];f=b[7];g=b[11];h=b[12].replace(/[,:]/,".");q=b[3];l=b[4].replace(/[,:]/,".");t="DDM";break;case "DMS":e=b[2];p=b[8];k=b[11];f=b[17];g=b[3];h=b[4];m=b[5].replace(/[,:]/,".");q=b[12];l=b[13];n=b[14].replace(/[,:]/,".");t="DMS";break;case "DMSrev":e=b[11],p=b[17],k=b[2],f=b[8],g=b[12],h=b[13],m=b[14].replace(/[,:]/,"."),q=b[3],l=b[4],n=b[5].replace(/[,:]/,"."),
t="DMS"}e&&p?(r=!0,e=(new RegExp(/[Ss-]/)).test(e)?"-":"+"):e=e&&(new RegExp(/[Ss-]/)).test(e)?"-":p&&(new RegExp(/[Ss-]/)).test(p)?"-":"+";k&&f?(r=!0,k=(new RegExp(/[Ww-]/)).test(k)?"-":"+"):k=k&&(new RegExp(/[Ww-]/)).test(k)?"-":f&&(new RegExp(/[Ww-]/)).test(f)?"-":"+";r&&(c||new v({message:this.nls.latLongWarningMessage}));switch(t){case "DD":a=e+g+","+k+q;break;case "DDM":a=e+g+" "+h+","+k+q+" "+l;break;case "DMS":a=e+g+" "+h+" "+m+","+k+q+" "+l+" "+n}return a},zoomButtonWasClicked:function(){this.input&&
(this.parentWidget.map.getZoom()<this.zoomScale?this.parentWidget.map.centerAt(this.currentClickPointDD).then(e.hitch(this,function(){this.parentWidget.map.setScale(this.zoomScale)})):this.parentWidget.map.centerAt(this.currentClickPointDD))},typeSelectDidChange:function(){this.currentClickPointDD&&this.updateDisplay()},newCoordnateBtnWasClicked:function(a){var d={};d.notation=this.type;d.defaultFormat=this.defaultFormat;this.showToolTip(a.currentTarget.id,this.nls.notationAddedMessage);g.publish("ADDNEWNOTATION",
d)},setHidden:function(a,d){m.set(a,"display","none");d&&H.destroy(a.parentNode)},setVisible:function(a){m.set(a,"display","inline-flex")},remove:function(){g.publish("REMOVECONTROL",this)},mapWasClicked:function(a){var d=!1;"active"!==this.widgetInfo.widgetState&&"opened"!==this.widgetInfo.widgetState||!this.widgetInfo.isActive||"DashboardTheme"!==this.widgetInfo.themeName||(d=!0);"active"!==this.widgetInfo.widgetState&&"opened"!==this.widgetInfo.widgetState||"DashboardTheme"===this.widgetInfo.themeName||
(d=!0);this.widgetInfo.isActive&&"DashboardTheme"===this.widgetInfo.themeName&&(d=!0);d&&(this.currentClickPoint=a.mapPoint,this.getDDPoint(a.mapPoint).then(e.hitch(this,function(d){this.currentClickPointDD=d;this.inputFromText=a.inputFromText?!0:!1;this.updateDisplay()}),e.hitch(this,function(a){console.error(a)})))},getDDPoint:function(a){var d=new y,c=new u(3857);n.canProject(a,c)?d.resolve(n.webMercatorToGeographic(n.project(a,c))):(c={url:this.geomsrvc.url+"/findTransformations",content:{f:"json",
inSR:a.spatialReference.wkid,outSR:4326,extentOfInterest:JSON.stringify(this.parentWidget.map.extent)},handleAs:"json",callbackParamName:"callback"},(new C(c,{usePost:!1})).then(e.hitch(this,function(b){b=(b=b&&b.transformations?b.transformations:void 0)&&0<b.length?b[0].wkid:void 0;var c=new D;c.outSR=new u(4326);c.geometries=[a];c.transformForward=!0;c.transformation=b;this.geomsrvc.project(c,e.hitch(this,function(a){d.resolve(a[0])}),function(a){d.reject(a)})}),e.hitch(this,function(a){d.reject(a)})));
return d},getProjectedPoint:function(a){var d=new y;if(n.canProject(a,this.parentWidget.map))d.resolve(n.geographicToWebMercator(a));else{var c={url:this.geomsrvc.url+"/findTransformations",content:{f:"json",inSR:4326,outSR:this.parentWidget.map.spatialReference.wkid,extentOfInterest:JSON.stringify(this.parentWidget.map.extent)},handleAs:"json",callbackParamName:"callback"};(new C(c,{usePost:!1})).then(e.hitch(this,function(b){b=(b=b&&b.transformations?b.transformations:void 0)&&0<b.length?b[0].geoTransforms[0].wkid:
void 0;var c=new D;c.outSR=new u(this.parentWidget.map.spatialReference);c.geometries=[a];c.transformForward=!0;c.transformation=b;this.geomsrvc.project(c,e.hitch(this,function(a){d.resolve(a[0])}),function(a){d.reject(a)})}),e.hitch(this,function(a){d.reject(a)}))}return d},expandButtonWasClicked:function(){f.toggle(this.coordcontrols,"expanded");f.contains(this.coordcontrols,"expanded")?(f.remove(this.expandButton,"expandBtn"),f.add(this.expandButton,"collapseBtn")):(f.remove(this.expandButton,
"collapseBtn"),f.add(this.expandButton,"expandBtn"));this.setSubCoordUI(f.contains(this.coordcontrols,"expanded"))},formatButtonWasClicked:function(){this._frmtdlg.content.setCt(this.type);r.open({popup:this._frmtdlg,around:this.formatButton})},setSubCoordUI:function(a){if(a){a="165px";switch(this.type){case "DD":case "DMS":case "DDM":this.sub1label.innerHTML=this.nls.latitudeLabel;this.sub2label.innerHTML=this.nls.longitudeLabel;this.setHidden(this.sub3,!1);this.setHidden(this.sub4,!1);a="90px";
break;case "GARS":this.sub1label.innerHTML=this.nls.latitudeLabel;this.sub2label.innerHTML=this.nls.longitudeLabel;this.sub3label.innerHTML=this.nls.quadrantLabel;this.sub4label.innerHTML=this.nls.keyLabel;this.setVisible(this.sub3);this.setVisible(this.sub4);break;case "GEOREF":this.sub1label.innerHTML=this.nls.fifteenDegreeLabel;this.sub2label.innerHTML=this.nls.oneDegreeLabel;this.sub3label.innerHTML=this.nls.eastingLabel;this.setVisible(this.sub3);this.sub4label.innerHTML=this.nls.northingLabel;
this.setVisible(this.sub4);break;case "USNG":case "MGRS":this.sub1label.innerHTML=this.nls.gzdLabel;this.sub2label.innerHTML=this.nls.gridSquareLabel;this.sub3label.innerHTML=this.nls.eastingLabel;this.sub4label.innerHTML=this.nls.northingLabel;this.setVisible(this.sub3);this.setVisible(this.sub4);break;case "UTM":this.sub1label.innerHTML=this.nls.zoneLabel;this.sub2label.innerHTML=this.nls.bandLabel;this.sub3label.innerHTML=this.nls.eastingLabel;this.sub4label.innerHTML=this.nls.northingLabel;this.setVisible(this.sub3);
this.setVisible(this.sub4);break;case "UTM (H)":this.sub1label.innerHTML=this.nls.zoneLabel,this.sub2label.innerHTML=this.nls.hemisphereLabel,this.sub3label.innerHTML=this.nls.eastingLabel,this.sub4label.innerHTML=this.nls.northingLabel,this.setVisible(this.sub3),this.setVisible(this.sub4)}m.set(this.coordcontrols,"height",a);m.set(this.coordcontrols,"width","300px")}else m.set(this.coordcontrols,"height","0px")},setCoordUI:function(a){var d;if(a){var c=this.uid.split("_")[1];if(!this["cc_"+c+"sub1val"]||
this.input&&this.inputFromText)return;var b;b=this._frmtdlg.content.formats[this.type];b=b.useCustom?b.customFormat:b.defaultFormat;switch(this.type){case "DD":a=this.util.getFormattedDDStr(a,b,this.addSign);this["cc_"+c+"sub1val"].value=l.substitute("${xcrd}",{xcrd:a.latdeg});this["cc_"+c+"sub2val"].value=l.substitute("${ycrd}",{ycrd:a.londeg});d=a.formatResult;break;case "DDM":a=this.util.getFormattedDDMStr(a,b,this.addSign);this["cc_"+c+"sub1val"].value=l.substitute("${latd} ${latm}",{latd:a.latdeg,
latm:a.latmin});this["cc_"+c+"sub2val"].value=l.substitute("${lond} ${lonm}",{lond:a.londeg,lonm:a.lonmin});d=a.formatResult;break;case "DMS":a=this.util.getFormattedDMSStr(a,b,this.addSign);this["cc_"+c+"sub1val"].value=l.substitute("${latd} ${latm} ${lats}",{latd:a.latdeg,latm:a.latmin,lats:a.latsec});this["cc_"+c+"sub2val"].value=l.substitute("${lond} ${lonm} ${lons}",{lond:a.londeg,lonm:a.lonmin,lons:a.lonsec});d=a.formatResult;break;case "USNG":a=this.util.getFormattedUSNGStr(a,b,!1);this["cc_"+
c+"sub1val"].value=a.gzd;this["cc_"+c+"sub2val"].value=a.grdsq;this["cc_"+c+"sub3val"].value=a.easting;this["cc_"+c+"sub4val"].value=a.northing;d=a.formatResult;break;case "MGRS":a=this.util.getFormattedMGRSStr(a,b,!1);this["cc_"+c+"sub1val"].value=a.gzd;this["cc_"+c+"sub2val"].value=a.grdsq;this["cc_"+c+"sub3val"].value=a.easting;this["cc_"+c+"sub4val"].value=a.northing;d=a.formatResult;break;case "GARS":a=this.util.getFormattedGARSStr(a,b,!1);this["cc_"+c+"sub1val"].value=a.lon;this["cc_"+c+"sub2val"].value=
a.lat;this["cc_"+c+"sub3val"].value=a.quadrant;this["cc_"+c+"sub4val"].value=a.key;d=a.formatResult;break;case "GEOREF":a=this.util.getFormattedGEOREFStr(a,b,!1);this["cc_"+c+"sub1val"].value=a.lon+a.lat;this["cc_"+c+"sub2val"].value=a.quadrant15lon+a.quadrant15lat;this["cc_"+c+"sub3val"].value=a.quadrant1lon;this["cc_"+c+"sub4val"].value=a.quadrant1lat;d=a.formatResult;break;case "UTM":a=this.util.getFormattedUTMStr(a,b,!1);a.bandLetter.match(/^[AaBbYyZz]/)?(this["cc_"+c+"sub1val"].value="",this["cc_"+
c+"sub2val"].value="",this["cc_"+c+"sub3val"].value="",this["cc_"+c+"sub4val"].value="",a.formatResult=""):(this["cc_"+c+"sub1val"].value=a.zone,this["cc_"+c+"sub2val"].value=a.bandLetter,this["cc_"+c+"sub3val"].value=a.easting,this["cc_"+c+"sub4val"].value=a.westing);d=a.formatResult;break;case "UTM (H)":a=this.util.getFormattedUTMHStr(a,b,!1),a.hemisphere.match(/^[AaBbYyZz]/)?(this["cc_"+c+"sub1val"].value="",this["cc_"+c+"sub2val"].value="",this["cc_"+c+"sub3val"].value="",this["cc_"+c+"sub4val"].value=
"",a.formatResult=""):(this["cc_"+c+"sub1val"].value=a.zone,this["cc_"+c+"sub2val"].value=a.hemisphere,this["cc_"+c+"sub3val"].value=a.easting,this["cc_"+c+"sub4val"].value=a.westing),d=a.formatResult}}else d="";this.setSubCoordUI(f.contains(this.coordcontrols,"expanded"));this.coordtext&&w.set(this.coordtext,"value",d)},getFormattedCoordinates:function(){this.util.getCoordValues(this.currentClickPointDD,this.type,4).then(e.hitch(this,function(a){this.setCoordUI(a)}),e.hitch(this,function(a){console.log(a)}))},
updateDisplay:function(){this.getFormattedCoordinates(this.currentClickPointDD);this.input&&(this.parentWidget.coordGLayer.clear(),this.currentClickPoint.spatialReference.wkid===this.parentWidget.map.spatialReference.wkid?this.parentWidget.coordGLayer.add(new B(this.currentClickPoint)):this.getProjectedPoint(this.currentClickPointDD).then(e.hitch(this,function(a){this.parentWidget.coordGLayer.add(new B(a))}),e.hitch(this,function(a){console.error(a)})))},inputError:function(){this.setCoordUI()}})});
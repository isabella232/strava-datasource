/*! For license information please see module.js.LICENSE.txt */
define(["react","@grafana/data","@grafana/ui","@grafana/runtime","emotion"],(function(e,t,a,n,r){return function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}return a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/",a(a.s=5)}([function(t,a){t.exports=e},function(e,a){e.exports=t},function(e,t){e.exports=a},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t,a){"use strict";a.r(t);var n=a(1),r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)};function i(e,t){function a(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}var o=function(){return(o=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function l(e,t,a,n){return new(a||(a=Promise))((function(r,i){function o(e){try{u(n.next(e))}catch(e){i(e)}}function l(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(o,l)}u((n=n.apply(e,t||[])).next())}))}function u(e,t){var a,n,r,i,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(a)throw new TypeError("Generator is already executing.");for(;o;)try{if(a=1,n&&(r=2&i[0]?n.return:i[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,i[1])).done)return r;switch(n=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,n=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){o.label=i[1];break}if(6===i[0]&&o.label<r[1]){o.label=r[1],r=i;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(i);break}r[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],n=0}finally{a=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}}function s(e){var t="function"==typeof Symbol&&Symbol.iterator,a=t&&e[t],n=0;if(a)return a.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function c(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var d,v,p,h,f,m,y,g,b,A,T=a(0),S=a.n(T);!function(e){e.OAuth="oauth",e.RefreshToken="refresh_token"}(d||(d={})),function(e){e.Meters="meters",e.Feet="feet"}(v||(v={})),function(e){e.TimeSeries="time_series",e.Table="table",e.WorldMap="worldmap",e.Heatmap="heatmap"}(p||(p={})),function(e){e.No="no",e.Auto="auto",e.Hour="hour",e.Day="day",e.Week="week",e.Month="month"}(h||(h={})),function(e){e.Activities="Activities",e.Activity="Activity"}(f||(f={})),function(e){e.Distance="distance",e.MovingTime="moving_time",e.ElapsedTime="elapsed_time",e.ElevationGain="total_elevation_gain",e.AveragePower="average_watts",e.AverageHeartRate="average_heartrate"}(m||(m={})),function(e){e.Graph="graph",e.Splits="splits",e.Stats="stats",e.Geomap="geomap"}(y||(y={})),function(e){e.HeartRate="average_heartrate",e.Speed="average_speed",e.MovingTime="moving_time",e.ElapsedTime="elapsed_time"}(g||(g={})),function(e){e.Distance="distance",e.HeartRate="heartrate",e.Altitude="altitude",e.Cadence="cadence",e.Velocity="velocity_smooth",e.Pace="pace",e.Watts="watts",e.WattsCalc="watts_calc",e.Temp="temp",e.Moving="moving",e.GradeSmooth="grade_smooth",e.GradeAdjustedDistance="grade_adjusted_distance"}(b||(b={})),function(e){e.Activity="activity"}(A||(A={}));var _=a(2),w=a(3),E=function(){function e(e){this.datasourceId=e,this.backendAPIUrl="/api/datasources/"+this.datasourceId+"/resources/strava-api",this.backendAuthUrl="/api/datasources/"+this.datasourceId+"/resources/auth",this.promises={},this.apiUrl=""}return e.prototype.getAuthenticatedAthlete=function(e){return l(this,void 0,void 0,(function(){return u(this,(function(t){switch(t.label){case 0:return[4,this.tsdbRequest("athlete",e)];case 1:return[2,t.sent()]}}))}))},e.prototype.getActivities=function(e){return l(this,void 0,void 0,(function(){return u(this,(function(t){switch(t.label){case 0:return[4,this.requestWithPagination("athlete/activities",e)];case 1:return[2,t.sent()]}}))}))},e.prototype.getActivity=function(e){return l(this,void 0,void 0,(function(){var t,a;return u(this,(function(n){switch(n.label){case 0:return t=e.id,a=e.include_all_efforts,[4,this.tsdbRequest("/activities/"+t,{include_all_efforts:a})];case 1:return[2,n.sent()]}}))}))},e.prototype.getActivityStreams=function(e){return l(this,void 0,void 0,(function(){var t,a;return u(this,(function(n){switch(n.label){case 0:return t=e.id,a=e.streamType,[4,this.tsdbRequest("/activities/"+t+"/streams?keys="+a+",time&key_by_type=true",{})];case 1:return[2,n.sent()]}}))}))},e.prototype.requestWithPagination=function(e,t){return l(this,void 0,void 0,(function(){var a,n,r,i,l;return u(this,(function(u){switch(u.label){case 0:a=[],n=[],r=1,i=t&&t.limit,l=t&&t.per_page||200,i&&(l=Math.min(l,i)),u.label=1;case 1:if(0===n.length&&1!==r||i&&a.length>=i)return[3,6];t=o(o({},t),{per_page:l,page:r}),u.label=2;case 2:return u.trys.push([2,4,,5]),[4,this.tsdbRequest(e,t)];case 3:return n=u.sent(),[3,5];case 4:throw u.sent();case 5:return a=a.concat(n),r++,[3,1];case 6:return[2,a]}}))}))},e.prototype.exchangeToken=function(e){return l(this,void 0,void 0,(function(){return u(this,(function(t){switch(t.label){case 0:return[4,this.tsdbAuthRequest({authCode:e})];case 1:return[2,t.sent()]}}))}))},e.prototype.resetAccessToken=function(){return l(this,void 0,void 0,(function(){var e;return u(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,Object(w.getBackendSrv)().get("/api/datasources/"+this.datasourceId+"/resources/reset-access-token")];case 1:return e=t.sent(),[2,this.handleTsdbResponse(e)];case 2:throw t.sent();case 3:return[2]}}))}))},e.prototype.request=function(e,t){return l(this,void 0,void 0,(function(){return u(this,(function(a){return[2,this.proxyfy(this._request,"_request",this)(e,t)]}))}))},e.prototype._request=function(e,t){return l(this,void 0,void 0,(function(){return u(this,(function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),[4,Object(w.getBackendSrv)().datasourceRequest({url:this.apiUrl+"/strava/"+e,method:"GET",params:t})];case 1:return[2,a.sent().data];case 2:throw a.sent();case 3:return[2]}}))}))},e.prototype.tsdbRequest=function(e,t){return l(this,void 0,void 0,(function(){return u(this,(function(a){return[2,this.proxyfy(this._tsdbRequest,"_tsdbRequest",this)(e,t)]}))}))},e.prototype._tsdbRequest=function(e,t){return l(this,void 0,void 0,(function(){var a;return u(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,Object(w.getBackendSrv)().datasourceRequest({url:this.backendAPIUrl,method:"POST",headers:{"Content-Type":"application/json"},data:{datasourceId:this.datasourceId,endpoint:e,params:t}})];case 1:return a=n.sent(),[2,this.handleTsdbResponse(a)];case 2:throw n.sent();case 3:return[2]}}))}))},e.prototype.tsdbAuthRequest=function(e){return l(this,void 0,void 0,(function(){var t,a;return u(this,(function(n){switch(n.label){case 0:t="stravaAuth",n.label=1;case 1:return n.trys.push([1,3,,4]),[4,Object(w.getBackendSrv)().datasourceRequest({url:this.backendAuthUrl,method:"POST",data:e})];case 2:return a=n.sent(),[2,this.handleTsdbResponse(a,t)];case 3:throw n.sent();case 4:return[2]}}))}))},e.prototype.handleTsdbResponse=function(e,t){if(void 0===t&&(t="stravaAPI"),e&&(e.status>=400||e.status<0))throw Error(e.statusText);if(!e||!e.data||!e.data.result)return[];var a=e.data.result;if(a.error)throw Error(a.error);return a},e.prototype.proxyfy=function(e,t,a){return this.promises[t]||(this.promises[t]={}),function(e,t,a){return function(){var n=C(arguments);return t[n]||(t[n]=Promise.resolve(e.apply(a,arguments).then((function(e){return t[n]=null,e})))),t[n]}}(e,this.promises[t],a)},e}();function C(e){return function(e){var t,a,n,r=0;if(0!==e.length)for(t=0,n=e.length;t<n;t++)a=e.charCodeAt(t),r=(r<<5)-r+a,r|=0;return r}(JSON.stringify(e))}function F(e){return 1&e?~(e>>>1):e>>>1}var D={decode:function(e){var t=[],a=0,n=0;return function(e,t){for(var a=0,n=0,r=0,i=0,o=0,l=0,u=0;u<e.length;u++)i=e.charCodeAt(u)-63,o|=(31&i)<<l,l+=5,i<32&&(1&++a?n=F(o):(r=F(o),t(n,r)),o=0,l=0)}(e,(function(e,r){a+=e,n+=r,t.push([a/1e5,n/1e5])})),t}};function I(e){if(0===e)return 0;var t=Math.fround(1e3/(60*e));return Math.min(10,t)}var q={from:Object(n.dateTime)(),to:Object(n.dateTime)(),raw:{from:"now",to:"now"}},O=function(e){function t(t){var a=e.call(this,t)||this;return a.type="strava",a.datasourceId=t.id,a.apiUrl=t.url,a.stravaApi=new E(a.datasourceId),a.activities=[],a.stravaAuthType=t.jsonData.stravaAuthType,a}return i(t,e),t.prototype.query=function(e){var t,a;return l(this,void 0,void 0,(function(){var n,r,i,o,l,c,d,v,h,m,y,g,b,A,T;return u(this,(function(u){switch(u.label){case 0:return n=[],r=[],this.athlete?[3,2]:(i=this,[4,this.stravaApi.getAuthenticatedAthlete()]);case 1:i.athlete=u.sent(),u.label=2;case 2:return e.targets.some((function(e){return e.queryType===f.Activities}))?[4,this.stravaApi.getActivities({before:null===(t=e.range)||void 0===t?void 0:t.to.unix(),after:null===(a=e.range)||void 0===a?void 0:a.from.unix()})]:[3,4];case 3:r=u.sent(),u.label=4;case 4:u.trys.push([4,10,11,12]),o=s(e.targets),l=o.next(),u.label=5;case 5:if(l.done)return[3,9];if((c=l.value).hide)return[3,8];if(c.queryType!==f.Activities)return[3,6];switch(d=this.filterActivities(r,c.activityType),c.format){case p.Table:v=this.transformActivitiesToTable(d,c),n.push(v);break;case p.WorldMap:h=this.transformActivitiesToGeomap(d,c),n.push(h);break;case p.Heatmap:m=this.transformActivitiesToHeatmap(d,c),n.push(m);break;default:y=this.transformActivitiesToTimeseries(d,c,e.range||q),n.push(y)}return[3,8];case 6:return c.queryType!==f.Activity?[3,8]:[4,this.queryActivity(e,c)];case 7:g=u.sent(),n.push(g),u.label=8;case 8:return l=o.next(),[3,5];case 9:return[3,12];case 10:return b=u.sent(),A={error:b},[3,12];case 11:try{l&&!l.done&&(T=o.return)&&T.call(o)}finally{if(A)throw A.error}return[7];case 12:return[2,{data:n}]}}))}))},t.prototype.queryActivity=function(e,t){var a;return l(this,void 0,void 0,(function(){var r,i,o,l,s,c,d,v,p,h,f;return u(this,(function(u){switch(u.label){case 0:return r=Object(w.getTemplateSrv)().replace(null===(a=t.activityId)||void 0===a?void 0:a.toString()),[4,this.stravaApi.getActivity({id:r,include_all_efforts:!0})];case 1:return i=u.sent(),t.activityData===y.Stats?[2,this.queryActivityStats(i,t,e)]:t.activityData===y.Splits?[2,this.queryActivitySplits(i,t,e)]:t.activityData===y.Geomap?[2,this.queryActivityGeomap(i,t,e)]:((o=t.activityGraph)===b.Pace&&(o=b.Velocity),o?[4,this.stravaApi.getActivityStreams({id:r,streamType:o})]:[2,null]);case 2:if(l=u.sent(),s={name:n.TIME_SERIES_TIME_FIELD_NAME,type:n.FieldType.time,config:{custom:{}},values:new n.ArrayVector},c={name:o,type:n.FieldType.number,config:{custom:{}},values:new n.ArrayVector},d=new n.MutableDataFrame({name:i.name,refId:t.refId,fields:[]}),!(v=l[o]))return[2,d];for(p=Object(n.dateTime)(i.start_date).unix(),t.fitToTimeRange&&(p=e.range.from.unix()),h=[],f=0;f<v.data.length;f++)s.values.add(1e3*p),h.push(v.data[f]),p++;return"Run"===i.type?t.activityGraph===b.Pace&&(c.name="pace",h=function(e){for(var t=0;t<e.length;t++)e[t]=I(e[t]);return e}(h)):t.activityGraph===b.Velocity&&(c.name="speed",h=function(e){for(var t=0;t<e.length;t++)e[t]=3.6*e[t];return e}(h)),o!==b.Velocity&&o!==b.HeartRate&&o!==b.GradeSmooth&&o!==b.WattsCalc&&o!==b.Watts||(h=function(e){for(var t=Math.min(20,e.length),a=[],n=0,r=t;r>0;r--)n+=e[t-r];for(r=0;r<t;r++)a.push(n/t);for(r=t;r<e.length;r++){n=0;for(var i=0;i<t;i++)n+=e[r-i];a.push(n/t)}return a}(h)),c.values=new n.ArrayVector(h),d.addField(s),d.addField(c),[2,d]}}))}))},t.prototype.queryActivitySplits=function(e,t,a){var r={name:n.TIME_SERIES_TIME_FIELD_NAME,type:n.FieldType.time,config:{custom:{}},values:new n.ArrayVector},i=t.splitStat||"",o={name:i||n.TIME_SERIES_VALUE_FIELD_NAME,type:n.FieldType.number,config:{custom:{}},values:new n.ArrayVector},l=new n.MutableDataFrame({name:e.name,refId:t.refId,fields:[]}),u=Object(n.dateTime)(e.start_date).unix();t.fitToTimeRange&&(u=a.range.from.unix());for(var s=e.splits_metric,c=0;c<s.length;c++){var d=s[c];r.values.add(1e3*u);var v=d[i];i===g.Speed&&(v=3.6*v),o.values.add(v),u+=d.moving_time}return l.addField(r),l.addField(o),l},t.prototype.queryActivityStats=function(e,t,a){var r,i=t.singleActivityStat||"name",o=new n.MutableDataFrame({name:e.name,refId:t.refId,fields:[{name:"time",type:n.FieldType.time},{name:i}]}),l=e[i];if(i.startsWith("gear_")){var u=i.substring("gear_".length);l=e.gear[u]}return o.add(((r={time:Object(n.dateTime)(e.start_date)})[i]=l,r)),o},t.prototype.queryActivityGeomap=function(e,t,a){for(var r,i=new n.MutableDataFrame({name:e.name,refId:t.refId,fields:[{name:"latitude",type:n.FieldType.number},{name:"longitude",type:n.FieldType.number},{name:"value",type:n.FieldType.number}]}),o=null===(r=null==e?void 0:e.map)||void 0===r?void 0:r.polyline,l=D.decode(o),u=0;u<l.length;u++)i.add({latitude:l[u][0],longitude:l[u][1],value:1});return i},t.prototype.metricFindQuery=function(e,t){return l(this,void 0,Promise,(function(){var t,a;return u(this,(function(n){switch(n.label){case 0:return t=e.limit||100,[4,this.stravaApi.getActivities({limit:t})];case 1:return a=n.sent(),a=this.filterActivities(a,e.activityType),[2,a.map((function(e){return{value:e.id,text:e.name}}))]}}))}))},t.prototype.testDatasource=function(){var e;return l(this,void 0,void 0,(function(){var t,a,n;return u(this,(function(r){switch(r.label){case 0:if(this.stravaAuthType===d.RefreshToken)return[3,4];if(!(t=this.getAuthCode()))return[3,4];r.label=1;case 1:return r.trys.push([1,3,,4]),[4,this.stravaApi.exchangeToken(t)];case 2:return r.sent(),[3,4];case 3:return r.sent(),[3,4];case 4:return r.trys.push([4,7,,8]),[4,this.stravaApi.resetAccessToken()];case 5:return r.sent(),[4,this.stravaApi.getActivities({per_page:2,limit:2})];case 6:return r.sent(),[2,{status:"success",message:"Data source is working"}];case 7:return a=r.sent(),[2,{status:"error",message:"Cannot connect to Strava API"+((n=(null===(e=null==a?void 0:a.data)||void 0===e?void 0:e.message)||"")?": "+n:"")}];case 8:return[2]}}))}))},t.prototype.getAuthCode=function(){var e=/code=([\w]+)/.exec(window.location.search);return e&&e.length&&e[1]},t.prototype.filterActivities=function(e,t){return t?e.filter((function(e){return"Other"===t?"Run"!==e.type&&"Ride"!==e.type:e.type===t})):e},t.prototype.transformActivitiesToTimeseries=function(e,t,a){var r,i,o=[];try{for(var l=s(e),u=l.next();!u.done;u=l.next()){var c=u.value;o.push([c[t.activityStat],Object(n.dateTime)(c.start_date).valueOf()])}}catch(e){r={error:e}}finally{try{u&&!u.done&&(i=l.return)&&i.call(l)}finally{if(r)throw r.error}}if(o.sort((function(e,t){return e[1]-t[1]})),t.interval!==h.No){var d=t.interval&&t.interval!==h.Auto?function(e){switch(e.interval){case h.Hour:return 36e5;case h.Day:return 864e5;case h.Week:return x;case h.Month:default:return k}}(t):function(e){var t=1e3*(e.to.unix()-e.from.unix());switch(!0){case t<=3456e5:return 36e5;case t<=7776e6:return 864e5;case t<=31536e6:return x;default:return k}}(a);o=d>=k?function(e,t){return M(e,t,null,N,W,j)}(o,a):d===x?function(e,t){return M(e,t,null,H,J,j)}(o,a):function(e,t,a){return M(e,t,a,P,G,j)}(o,a,d)}return{target:(t.activityType?t.activityType+"_":"")+t.activityStat,datapoints:o}},t.prototype.transformActivitiesToTable=function(e,t){var a,r,i,o=(null===(a=this.athlete)||void 0===a?void 0:a.measurement_preference)||v.Meters,l=o===v.Feet?"lengthmi":"lengthm",u=o===v.Feet?"lengthft":"lengthm",s=new n.MutableDataFrame({refId:t.refId,fields:[{name:"time",type:n.FieldType.time},{name:"name",type:n.FieldType.string},{name:"distance",type:n.FieldType.number,config:{unit:l}},{name:"moving time",type:n.FieldType.number,config:{unit:"dthms"}},{name:"elapsed time",type:n.FieldType.number,config:{unit:"dthms"}},{name:"heart rate",type:n.FieldType.number,config:{unit:"none",decimals:0}},{name:"elevation gain",type:n.FieldType.number,config:{unit:u,decimals:0}},{name:"kilojoules",type:n.FieldType.number,config:{unit:"joule"}},{name:"type",type:n.FieldType.string},{name:"id",type:n.FieldType.string,config:{unit:"none",custom:{hidden:!0}}}]});null===(r=t.extendedStats)||void 0===r||r.forEach((function(e){s.addField({name:e})}));for(var c=function(a){var r=e[a],l={time:Object(n.dateTime)(r.start_date),name:r.name,distance:L(r.distance,o),"moving time":r.moving_time,"elapsed time":r.elapsed_time,"heart rate":r.average_heartrate,"elevation gain":Q(r.total_elevation_gain,o),kilojoules:r.kilojoules,type:r.type,id:r.id};null===(i=t.extendedStats)||void 0===i||i.forEach((function(e){l[e]=r[e]})),s.add(l)},d=0;d<e.length;d++)c(d);return s},t.prototype.transformActivitiesToGeomap=function(e,t){var a,r,i=t.activityStat===m.Distance||t.activityStat===m.ElevationGain?"lengthm":"s",o=new n.MutableDataFrame({name:"activities",refId:t.refId,fields:[{name:"name",type:n.FieldType.string},{name:"latitude",type:n.FieldType.number},{name:"longitude",type:n.FieldType.number},{name:"value",type:n.FieldType.number,config:{unit:i}}]});try{for(var l=s(e),u=l.next();!u.done;u=l.next()){var c=u.value,d=R(c),v=d?d[0]:c.start_latitude,p=d?d[1]:c.start_longitude;v&&p&&o.add({name:c.name,value:c[t.activityStat],latitude:v,longitude:p})}}catch(e){a={error:e}}finally{try{u&&!u.done&&(r=l.return)&&r.call(l)}finally{if(a)throw a.error}}return o},t.prototype.transformActivitiesToHeatmap=function(e,t){var a,r,i,o=new n.MutableDataFrame({name:"heatmap",refId:t.refId,fields:[{name:"latitude",type:n.FieldType.number},{name:"longitude",type:n.FieldType.number},{name:"value",type:n.FieldType.number}]});try{for(var l=s(e),u=l.next();!u.done;u=l.next()){var c=u.value,d=null===(i=null==c?void 0:c.map)||void 0===i?void 0:i.summary_polyline;if(d)for(var v=D.decode(d),p=0;p<v.length;p++)o.add({latitude:v[p][0],longitude:v[p][1],value:1})}}catch(e){a={error:e}}finally{try{u&&!u.done&&(r=l.return)&&r.call(l)}finally{if(a)throw a.error}}return o},t}(n.DataSourceApi);function R(e){if(!e.map||!e.map.summary_polyline)return null;var t=e.map.summary_polyline,a=D.decode(t);return a&&a.length?a[Math.floor(a.length/2)]:null}var x=6048e5,k=24192e5;var j=function(e){return e.reduce((function(e,t){return e+t}))};function M(e,t,a,n,r,i){if(0===e.length)return[];for(var o,l,u=1e3*t.from.unix(),s=1e3*t.to.unix(),c=[],d=[],v=e.length?n(u,a):0,p=v,h=0;h<e.length;h++)if((p=n((l=e[h])[1],a))===v)d.push(l[0]);else if(p>v){for(o=d.length?i(d):null,c.push([o,v]),v=r(v,a);v<p;)c.push([null,v]),v=r(v,a);d=[l[0]]}for(o=i(d),c.push([o,v]),v=r(v,a);v<s;)c.push([null,v]),v=r(v,a);return c}function P(e,t){return Math.floor(e/t)*t}function G(e,t){return e+t}function N(e){return 1e3*Object(n.dateTime)(e).startOf("month").unix()}function W(e){return 1e3*Object(n.dateTime)(e).add(1,"month").unix()}function H(e){var t=e-3456e5;return Math.floor(t/x)*x+3456e5}function J(e){return e+x}function L(e,t){return t===v.Feet?function(e){return e/1609.344}(e):e}function Q(e,t){return t===v.Feet?function(e){return e/.3048}(e):e}var V,U,B,Y=[{value:"",label:"All"},{value:"Run",label:"Run"},{value:"Ride",label:"Ride"},{value:"Other",label:"Other"}],$=function(e){function t(t){var a=e.call(this,t)||this;a.queryTypes=[{value:A.Activity,label:"Activity"}],a.onQueryTypeChange=function(e){var t=e.value||A.Activity,n=o(o({},a.props.query),{queryType:t});a.props.onChange(n,"Strava - "+t)},a.onActivityTypeChange=function(e){var t=e.value||"",n=o(o({},a.props.query),{activityType:t});a.props.onChange(n,"Strava - "+a.props.query.queryType)},a.onLimitStateChange=function(e){var t=Number(e.currentTarget.value||"");a.setState({limit:t})},a.onLimitChange=function(e){var t=Number(e.currentTarget.value||""),n=o(o({},a.props.query),{limit:t});a.props.onChange(n,"Strava - "+a.props.query.queryType)};var n=a.props.query;return a.state={limit:n.limit||100},a}return i(t,e),t.prototype.render=function(){var e=this.props.query,t=this.state.limit;return S.a.createElement(S.a.Fragment,null,S.a.createElement("div",{className:"gf-form max-width-21"},S.a.createElement(_.InlineFormLabel,{width:10},"Query Type"),S.a.createElement(_.Select,{width:16,value:e.queryType,options:this.queryTypes,onChange:this.onQueryTypeChange})),S.a.createElement("div",{className:"gf-form-inline"},e.queryType===A.Activity&&S.a.createElement(_.InlineFieldRow,null,S.a.createElement(_.InlineField,{label:"Activity Type",labelWidth:20},S.a.createElement(_.Select,{width:16,value:e.activityType,onChange:this.onActivityTypeChange,options:Y})),S.a.createElement(_.InlineField,{label:"Limit",labelWidth:10,tooltip:"API query limit. Set to 0 for no limit."},S.a.createElement(_.Input,{type:"number",value:t,onChange:this.onLimitStateChange,onBlur:this.onLimitChange,width:12})))))},t}(T.PureComponent),z=/code=([\w]+)/,K=[{label:"OAuth",value:d.OAuth},{label:"Refresh token",value:d.RefreshToken}],X=function(e){function t(a){var n=e.call(this,a)||this;n.updateDatasource=function(e){return l(n,void 0,void 0,(function(){var t,a;return u(this,(function(n){for(t in e.jsonData)0===e.jsonData[t].length&&delete e.jsonData[t];for(a in e.secureJsonData)0===e.secureJsonData[a].length&&delete e.secureJsonData[a];return this.props.onOptionsChange(o({},e)),[2]}))}))},n.onResetClientSecret=function(){n.updateDatasource(o(o({},n.state.config),{secureJsonFields:o(o({},n.state.config.secureJsonFields),{clientSecret:!1})}))},n.onResetRefreshToken=function(){n.updateDatasource(o(o({},n.state.config),{secureJsonFields:o(o({},n.state.config.secureJsonFields),{refreshToken:!1})}))},n.onAccessTokenChange=function(e){n.updateDatasource(o(o({},n.state.config),{secureJsonData:o(o({},n.state.config.secureJsonData),{accessToken:e})}))},n.onClientIDChange=function(e){n.updateDatasource(o(o({},n.state.config),{jsonData:o(o({},n.state.config.jsonData),{clientID:e})}))},n.onClientSecretChange=function(e){n.updateDatasource(o(o({},n.state.config),{secureJsonData:o(o({},n.state.config.secureJsonData),{clientSecret:e})}))},n.onRefreshTokenChange=function(e){n.updateDatasource(o(o({},n.state.config),{secureJsonData:o(o({},n.state.config.secureJsonData),{refreshToken:e})}))},n.onAuthCodeChange=function(e){n.updateDatasource(o(o({},n.state.config),{secureJsonData:o(o({},n.state.config.secureJsonData),{authCode:e})}))},n.onAuthTypeChange=function(e){n.updateDatasource(o(o({},n.state.config),{jsonData:o(o({},n.state.config.jsonData),{stravaAuthType:e})}))},n.isLocationContainsCode=function(){return z.test(window.location.search)},n.isLocationContainsError=function(){return/error=/.test(window.location.search)},n.getConnectWithStravaHref=function(){var e=window.location.origin+window.location.pathname;return"https://www.strava.com/oauth/authorize?client_id="+n.state.config.jsonData.clientID+"&response_type=code&redirect_uri="+e+"&approval_prompt=force&scope=read_all,profile:read_all,activity:read_all"};var r=n.props.options;return n.state={config:t.defaults(r)},n.updateDatasource(n.state.config),n}return i(t,e),t.getDerivedStateFromProps=function(e,a){return o(o({},a),{config:t.defaults(e.options)})},t.prototype.render=function(){var e,t,a,n,r=this,i=this.state.config,o=this.getConnectWithStravaHref();return S.a.createElement(S.a.Fragment,null,S.a.createElement("h2",{className:"page-heading"},"Strava API Details"),S.a.createElement("div",{className:"gf-form-group"},S.a.createElement("h5",null,"Auth type"),S.a.createElement(_.RadioButtonGroup,{options:K,value:i.jsonData.stravaAuthType,onChange:this.onAuthTypeChange})),S.a.createElement("div",{className:"gf-form-group"},S.a.createElement(_.InlineField,{label:"Client ID",labelWidth:16},S.a.createElement(_.Input,{width:50,value:i.jsonData.clientID||"",onChange:function(e){return r.onClientIDChange(e.target.value)}})),i.secureJsonFields&&i.secureJsonFields.clientSecret?S.a.createElement(_.InlineField,{label:"Client Secret",labelWidth:16},S.a.createElement(S.a.Fragment,null,S.a.createElement(_.Input,{placeholder:"Configured",width:50,disabled:!0}),S.a.createElement(_.Button,{variant:"secondary",type:"button",onClick:this.onResetClientSecret},"Reset"))):S.a.createElement(_.InlineField,{label:"Client Secret",labelWidth:16},S.a.createElement(_.Input,{width:50,value:(null===(e=i.secureJsonData)||void 0===e?void 0:e.clientSecret)||"",onChange:function(e){return r.onClientSecretChange(e.target.value)}})),(null===(t=i.jsonData)||void 0===t?void 0:t.stravaAuthType)===d.RefreshToken&&S.a.createElement(S.a.Fragment,null,i.secureJsonFields&&i.secureJsonFields.refreshToken?S.a.createElement(_.InlineField,{label:"Refresh Token",labelWidth:16},S.a.createElement(S.a.Fragment,null,S.a.createElement(_.Input,{placeholder:"Configured",width:50,disabled:!0}),S.a.createElement(_.Button,{variant:"secondary",type:"button",onClick:this.onResetRefreshToken},"Reset"))):S.a.createElement(_.InlineField,{label:"Refresh Token",labelWidth:16},S.a.createElement(_.Input,{width:50,value:(null===(a=i.secureJsonData)||void 0===a?void 0:a.refreshToken)||"",onChange:function(e){return r.onRefreshTokenChange(e.target.value)}})))),(null===(n=i.jsonData)||void 0===n?void 0:n.stravaAuthType)!==d.RefreshToken&&S.a.createElement("div",{className:"gf-form-group"},S.a.createElement("a",{type:"button",href:o},S.a.createElement("img",{src:"public/plugins/grafana-strava-datasource/img/btn_strava_connectwith_orange.svg"}))))},t.defaults=function(e){return e.hasOwnProperty("secureJsonData")||(e.secureJsonData={}),e.hasOwnProperty("jsonData")||(e.jsonData={}),e.hasOwnProperty("secureJsonFields")||(e.secureJsonFields={}),e.jsonData.stravaAuthType||(e.jsonData.stravaAuthType=d.OAuth),e},t}(T.PureComponent),Z=a(4),ee=Object(_.stylesFactory)((function(e){return{athleteLabel:Object(Z.css)(V||(V=c(["\n      height: ","px;\n      padding: 2px;\n      margin-right: 0px;\n      border-radius: ",";\n      background-color: ",";\n    "],["\n      height: ","px;\n      padding: 2px;\n      margin-right: 0px;\n      border-radius: ",";\n      background-color: ",";\n    "])),e.spacing.formInputHeight,e.border.radius.md,e.palette.dark4),athleteAvatar:Object(Z.css)(U||(U=c(["\n      height: 28px;\n      border-radius: 50%;\n    "],["\n      height: 28px;\n      border-radius: 50%;\n    "]))),athletePlaceholder:Object(Z.css)(B||(B=c(["\n      width: 28px;\n    "],["\n      width: 28px;\n    "])))}})),te=function(e){var t=e.athlete,a=ee(Object(_.useTheme)()),n=Object(Z.cx)("filter-table__avatar",a.athleteAvatar);return S.a.createElement("div",{className:"gf-form"},(null==t?void 0:t.profile_medium)?S.a.createElement("div",{className:a.athleteLabel},S.a.createElement("img",{className:n,src:t.profile_medium})):S.a.createElement("div",{className:a.athletePlaceholder}),S.a.createElement(_.InlineFormLabel,null,null==t?void 0:t.firstname," ",null==t?void 0:t.lastname))},ae=[{value:f.Activities,label:"Activities",description:"Athlete Activities"},{value:f.Activity,label:"Activity",description:"Individual activity"}],ne=[{value:m.Distance,label:"Distance"},{value:m.ElapsedTime,label:"Elapsed Time"},{value:m.MovingTime,label:"Moving Time"},{value:m.ElevationGain,label:"Elevation Gain"},{value:m.AveragePower,label:"Average Power"},{value:m.AverageHeartRate,label:"Average Heart Rate"}],re=[{value:null,label:"All"},{value:"Run",label:"Run"},{value:"Ride",label:"Ride"},{value:"Other",label:"Other"}],ie=[{value:y.Graph,label:"Graph"},{value:y.Splits,label:"Splits"},{value:y.Stats,label:"Stats"},{value:y.Geomap,label:"Geomap"}],oe=[{value:b.HeartRate,label:"Heart Rate"},{value:b.Velocity,label:"Speed"},{value:b.Pace,label:"Pace"},{value:b.WattsCalc,label:"Est Power"},{value:b.Watts,label:"Watts"},{value:b.Cadence,label:"Cadence"},{value:b.Altitude,label:"Altitude"},{value:b.GradeSmooth,label:"Gradient"}],le=[{value:g.HeartRate,label:"Heart Rate"},{value:g.Speed,label:"Speed"},{value:g.ElapsedTime,label:"Elapsed Time"},{value:g.MovingTime,label:"Moving Time"}],ue=[{label:"Time series",value:p.TimeSeries},{label:"Table",value:p.Table},{label:"Geomap",value:p.WorldMap},{label:"Heatmap",value:p.Heatmap}],se=[{label:"Auto",value:h.Auto},{label:"No",value:h.No},{label:"Hour",value:h.Hour},{label:"Day",value:h.Day},{label:"Week",value:h.Week},{label:"Month",value:h.Month}],ce=[{label:"achievement_count",value:"achievement_count"},{label:"average_speed",value:"average_speed"},{label:"average_watts",value:"average_watts"},{label:"comment_count",value:"comment_count"},{label:"commute",value:"commute"},{label:"device_watts",value:"device_watts"},{label:"elev_high",value:"elev_high"},{label:"elev_low",value:"elev_low"},{label:"has_kudoed",value:"has_kudoed"},{label:"kudos_count",value:"kudos_count"},{label:"location_city",value:"location_city"},{label:"location_country",value:"location_country"},{label:"location_state",value:"location_state"},{label:"manual",value:"manual"},{label:"max_heartrate",value:"max_heartrate"},{label:"max_speed",value:"max_speed"},{label:"pr_count",value:"pr_count"},{label:"start_date",value:"start_date"},{label:"start_date_local",value:"start_date_local"},{label:"start_latitude",value:"start_latitude"},{label:"start_longitude",value:"start_longitude"},{label:"trainer",value:"trainer"},{label:"workout_type",value:"workout_type"},{label:"device_name",value:"device_name"},{label:"gear_id",value:"gear_id"},{label:"gear_name",value:"gear_name"},{label:"gear_nickname",value:"device_nickname"},{label:"gear_distance",value:"gear_distance"}],de=[{label:"start_date",value:"start_date"},{label:"name",value:"name"},{label:"distance",value:"distance"},{label:"moving_time",value:"moving_time"},{label:"elapsed_time",value:"elapsed_time"},{label:"average_heartrate",value:"average_heartrate"},{label:"total_elevation_gain",value:"total_elevation_gain"},{label:"kilojoules",value:"kilojoules"},{label:"type",value:"type"},{label:"id",value:"id"}].concat(ce),ve={refId:"",athlete:{},queryType:f.Activities,activityType:null,activitiesOptions:[],activityStat:m.Distance,format:p.TimeSeries,interval:h.Auto,activityData:y.Graph,activityGraph:b.HeartRate,extendedStats:[],singleActivityStat:""},pe=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state=ve,t.getSelectedQueryType=function(){return ae.find((function(e){return e.value===t.props.query.queryType}))},t.getSelectedActivityStat=function(){return ne.find((function(e){return e.value===t.props.query.activityStat}))},t.getSelectedActivityType=function(){return re.find((function(e){return e.value===t.props.query.activityType}))},t.getSelectedActivityData=function(){return ie.find((function(e){return e.value===t.props.query.activityData}))},t.getSelectedActivityGraph=function(){return oe.find((function(e){return e.value===t.props.query.activityGraph}))},t.getSelectedActivitySplit=function(){return le.find((function(e){return e.value===t.props.query.splitStat}))},t.getSelectedSingleActivityStat=function(){return de.find((function(e){return e.value===t.props.query.singleActivityStat}))},t.getFormatOption=function(){return ue.find((function(e){return e.value===t.props.query.format}))},t.getIntervalOption=function(){return se.find((function(e){return e.value===t.props.query.interval}))},t.getSelectedActivityOption=function(){return t.props.query.selectedActivity},t.getActivitiesOptions=function(e){return l(t,void 0,Promise,(function(){var t,a,r,i;return u(this,(function(o){switch(o.label){case 0:return[4,(t=this.props.datasource).stravaApi.getActivities({limit:100})];case 1:return a=o.sent(),a=t.filterActivities(a,e),r=a.map((function(e){return{value:e.id,label:e.name,description:Object(n.dateTime)(e.start_date_local).format("YYYY-MM-DD HH:mm")+" ("+e.type+")"}})),i=Object(w.getTemplateSrv)().getVariables().map((function(e){return{value:"$"+e.name,label:"$"+e.name,description:"Variable"}})),[2,r=i.concat(r)]}}))}))},t.onQueryTypeChanged=function(e){var a=t.props.query;e.value&&t.onChange(o(o({},a),{queryType:e.value}))},t.onActivityStatChanged=function(e){var a=t.props.query;e.value&&t.onChange(o(o({},a),{activityStat:e.value}))},t.onActivityDataChanged=function(e){var a=t.props.query;e.value&&t.onChange(o(o({},a),{activityData:e.value}))},t.onActivityGraphChanged=function(e){var a=t.props.query;e.value&&t.onChange(o(o({},a),{activityGraph:e.value}))},t.onActivitySplitChanged=function(e){var a=t.props.query;e.value&&t.onChange(o(o({},a),{splitStat:e.value}))},t.onActivityTypeChanged=function(e){return l(t,void 0,void 0,(function(){var t,a;return u(this,(function(n){switch(n.label){case 0:return t=this.props.query,void 0===e.value?[3,2]:(this.onChange(o(o({},t),{activityType:e.value})),[4,this.getActivitiesOptions(e.value)]);case 1:a=n.sent(),this.setState({activitiesOptions:a}),n.label=2;case 2:return[2]}}))}))},t.onFitToRangeChanged=function(e){var a=t.props.query;t.onChange(o(o({},a),{fitToTimeRange:!a.fitToTimeRange}))},t.onFormatChange=function(e){var a=t.props.query;e.value&&t.onChange(o(o({},a),{format:e.value}))},t.onIntervalChange=function(e){var a=t.props.query;e.value&&t.onChange(o(o({},a),{interval:e.value}))},t.onActivityChanged=function(e){var a=t.props.query;void 0!==e.value&&t.onChange(o(o({},a),{activityId:e.value,selectedActivity:e}))},t.onExtendedStatsChanged=function(e){var a=t.props.query;if(e){var n=[];e.forEach((function(e){return e.value&&n.push(e.value)})),t.onChange(o(o({},a),{extendedStats:n}))}},t.onSingleActivityStatChanged=function(e){var a=t.props.query;e.value&&t.onChange(o(o({},a),{singleActivityStat:e.value}))},t}return i(t,e),t.prototype.componentDidMount=function(){return l(this,void 0,void 0,(function(){var e,t;return u(this,(function(a){switch(a.label){case 0:return(e=this.props.datasource.athlete)?[3,2]:[4,this.props.datasource.stravaApi.getAuthenticatedAthlete()];case 1:e=a.sent(),a.label=2;case 2:return[4,this.getActivitiesOptions(this.props.query.activityType)];case 3:return t=a.sent(),this.setState({athlete:e,activitiesOptions:t}),[2]}}))}))},t.prototype.onChange=function(e){var t=this.props,a=t.onChange,n=t.onRunQuery;a(e),n()},t.prototype.renderActivitiesEditor=function(){var e=this.props.query;return S.a.createElement(S.a.Fragment,null,S.a.createElement("div",{className:"gf-form-inline"},S.a.createElement(_.InlineFormLabel,{width:12}," "),S.a.createElement(_.InlineFormLabel,{width:5},"Format"),S.a.createElement(_.Select,{isSearchable:!1,width:16,options:ue,onChange:this.onFormatChange,value:this.getFormatOption()}),e.format!==p.Heatmap&&S.a.createElement(S.a.Fragment,null,S.a.createElement(_.InlineFormLabel,{width:6},"Stat"),S.a.createElement(_.Select,{isSearchable:!1,width:16,value:this.getSelectedActivityStat(),options:ne,onChange:this.onActivityStatChanged})),e.format===p.TimeSeries&&S.a.createElement(S.a.Fragment,null,S.a.createElement(_.InlineFormLabel,{width:6},"Interval"),S.a.createElement(_.Select,{isSearchable:!1,width:16,options:se,onChange:this.onIntervalChange,value:this.getIntervalOption()})),S.a.createElement("div",{className:"gf-form gf-form--grow"},S.a.createElement("div",{className:"gf-form-label gf-form-label--grow"}))),e.format===p.Table&&S.a.createElement("div",{className:"gf-form-inline"},S.a.createElement(_.InlineFormLabel,{width:12}," "),S.a.createElement(_.InlineField,{label:"Extended Stats",labelWidth:14},S.a.createElement(_.MultiSelect,{isSearchable:!0,isClearable:!0,value:e.extendedStats,options:ce,onChange:this.onExtendedStatsChanged})),S.a.createElement("div",{className:"gf-form gf-form--grow"},S.a.createElement("div",{className:"gf-form-label gf-form-label--grow"}))))},t.prototype.renderActivityEditor=function(){var e=this.props.query,t=this.state.activitiesOptions;return S.a.createElement(S.a.Fragment,null,S.a.createElement("div",{className:"gf-form-inline"},S.a.createElement(_.InlineFormLabel,{width:12}," "),S.a.createElement(_.InlineFormLabel,{width:5},"Activity"),S.a.createElement(_.Select,{isSearchable:!0,width:33,value:this.getSelectedActivityOption(),options:t,onChange:this.onActivityChanged}),S.a.createElement(_.InlineField,{label:"Data",labelWidth:10},S.a.createElement(_.Select,{isSearchable:!1,width:16,value:this.getSelectedActivityData(),options:ie,onChange:this.onActivityDataChanged})),e.activityData===y.Graph&&S.a.createElement(_.Select,{isSearchable:!1,width:16,value:this.getSelectedActivityGraph(),options:oe,onChange:this.onActivityGraphChanged}),e.activityData===y.Splits&&S.a.createElement(_.Select,{isSearchable:!1,width:16,value:this.getSelectedActivitySplit(),options:le,onChange:this.onActivitySplitChanged}),e.activityData===y.Stats&&S.a.createElement(_.Select,{isSearchable:!0,width:20,value:this.getSelectedSingleActivityStat(),options:de,onChange:this.onSingleActivityStatChanged}),S.a.createElement(_.InlineFormLabel,{width:5},"Fit to range"),S.a.createElement(_.InlineSwitch,{css:"",value:e.fitToTimeRange||!1,onChange:this.onFitToRangeChanged}),S.a.createElement("div",{className:"gf-form gf-form--grow"},S.a.createElement("div",{className:"gf-form-label gf-form-label--grow"}))))},t.prototype.render=function(){var e=this.state.athlete,t=this.getSelectedQueryType();return S.a.createElement(S.a.Fragment,null,S.a.createElement("div",{className:"gf-form-inline"},S.a.createElement(te,{athlete:e}),S.a.createElement(_.InlineFormLabel,{width:5},"Query"),S.a.createElement(_.Select,{isSearchable:!1,width:16,value:this.getSelectedQueryType(),options:ae,onChange:this.onQueryTypeChanged}),S.a.createElement(_.InlineFormLabel,{width:6},"Activity type"),S.a.createElement(_.Select,{isSearchable:!1,width:16,value:this.getSelectedActivityType(),options:re,onChange:this.onActivityTypeChanged}),S.a.createElement("div",{className:"gf-form gf-form--grow"},S.a.createElement("div",{className:"gf-form-label gf-form-label--grow"}))),(null==t?void 0:t.value)===f.Activities&&this.renderActivitiesEditor(),(null==t?void 0:t.value)===f.Activity&&this.renderActivityEditor())},t}(T.PureComponent);a.d(t,"plugin",(function(){return fe}));var he=function(){function e(){}return e.templateUrl="partials/annotations.editor.html",e}(),fe=new n.DataSourcePlugin(O).setConfigEditor(X).setQueryEditor(pe).setAnnotationQueryCtrl(he).setVariableQueryEditor($)}])}));
//# sourceMappingURL=module.js.map
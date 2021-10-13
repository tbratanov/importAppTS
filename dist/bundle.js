(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0

  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.

  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** */
  /* global Reflect, Promise */

  var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
          function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
      return extendStatics(d, b);
  };

  function __extends(d, b) {
      extendStatics(d, b);
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }

  var __assign = function() {
      __assign = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
      };
      return __assign.apply(this, arguments);
  };

  function __rest(s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
          t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
              if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                  t[p[i]] = s[p[i]];
          }
      return t;
  }

  function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
          function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
          function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
  }

  function __generator(thisArg, body) {
      var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
      function verb(n) { return function (v) { return step([n, v]); }; }
      function step(op) {
          if (f) throw new TypeError("Generator is already executing.");
          while (_) try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
              if (y = 0, t) op = [op[0] & 2, t.value];
              switch (op[0]) {
                  case 0: case 1: t = op; break;
                  case 4: _.label++; return { value: op[1], done: false };
                  case 5: _.label++; y = op[1]; op = [0]; continue;
                  case 7: op = _.ops.pop(); _.trys.pop(); continue;
                  default:
                      if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                      if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                      if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                      if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                      if (t[2]) _.ops.pop();
                      _.trys.pop(); continue;
              }
              op = body.call(thisArg, _);
          } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
          if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
      }
  }

  function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
              r[k] = a[j];
      return r;
  }

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0

  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.

  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** */
  /* global Reflect, Promise */

  var extendStatics$1 = function(d, b) {
      extendStatics$1 = Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
          function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
      return extendStatics$1(d, b);
  };

  function __extends$1(d, b) {
      extendStatics$1(d, b);
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }

  var __assign$1 = function() {
      __assign$1 = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
      };
      return __assign$1.apply(this, arguments);
  };

  function __awaiter$1(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
          function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
          function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
  }

  function __generator$1(thisArg, body) {
      var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
      function verb(n) { return function (v) { return step([n, v]); }; }
      function step(op) {
          if (f) throw new TypeError("Generator is already executing.");
          while (_) try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
              if (y = 0, t) op = [op[0] & 2, t.value];
              switch (op[0]) {
                  case 0: case 1: t = op; break;
                  case 4: _.label++; return { value: op[1], done: false };
                  case 5: _.label++; y = op[1]; op = [0]; continue;
                  case 7: op = _.ops.pop(); _.trys.pop(); continue;
                  default:
                      if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                      if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                      if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                      if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                      if (t[2]) _.ops.pop();
                      _.trys.pop(); continue;
              }
              op = body.call(thisArg, _);
          } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
          if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
      }
  }

  function __spreadArrays$1() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
              r[k] = a[j];
      return r;
  }

  var MetricTypes = {
      STRING: 1,
      NUMBER: 2,
      TIMESTAMP: 3,
      OBJECT: 4
  };

  function getMetricTypeByValue(metric) {
      if (metric.type === MetricTypes.TIMESTAMP) {
          return "timestamp";
      }
      else if (metric.type === MetricTypes.NUMBER) {
          return "number";
      }
      else if (metric.type === MetricTypes.STRING) {
          return "string";
      }
      else if (metric.type === MetricTypes.OBJECT) {
          return "object";
      }
      return "unknown";
  }
  function getTypeByValue(value) {
      if (value.constructor === Date) {
          return "timestamp";
      }
      else if (typeof value === "number") {
          return "number";
      }
      else if (typeof value === "string") {
          return "string";
      }
      else if (typeof value === "object") {
          return "object";
      }
      else {
          return "string";
      }
  }
  function serializeMetric(metric) {
      var serializedMetrics = {};
      var type = getMetricTypeByValue(metric);
      if (type === "object") {
          var values = Object.keys(metric.value).reduce(function (memo, key) {
              var innerType = getTypeByValue(metric.value[key]);
              if (innerType === "object") {
                  var composite = defineNestedComposite(metric.value[key]);
                  memo[key] = {
                      type: "object",
                      description: "",
                      context: {},
                      composite: composite,
                  };
              }
              else {
                  memo[key] = {
                      type: innerType,
                      description: "",
                      context: {},
                  };
              }
              return memo;
          }, {});
          serializedMetrics.composite = values;
      }
      serializedMetrics.name = normalizeMetricName(metric.path.join("/") + "/" + metric.name);
      serializedMetrics.type = type;
      serializedMetrics.description = metric.description;
      serializedMetrics.context = {};
      return serializedMetrics;
  }
  function defineNestedComposite(values) {
      return Object.keys(values).reduce(function (memo, key) {
          var type = getTypeByValue(values[key]);
          if (type === "object") {
              memo[key] = {
                  type: "object",
                  description: "",
                  context: {},
                  composite: defineNestedComposite(values[key]),
              };
          }
          else {
              memo[key] = {
                  type: type,
                  description: "",
                  context: {},
              };
          }
          return memo;
      }, {});
  }
  function normalizeMetricName(name) {
      if (typeof name !== "undefined" && name.length > 0 && name[0] !== "/") {
          return "/" + name;
      }
      else {
          return name;
      }
  }
  function getMetricValueByType(metric) {
      var type = getMetricTypeByValue(metric);
      if (type === "timestamp") {
          return Date.now();
      }
      else {
          return publishNestedComposite(metric.value);
      }
  }
  function publishNestedComposite(values) {
      if (typeof values !== "object") {
          return values;
      }
      return Object.keys(values).reduce(function (memo, key) {
          var value = values[key];
          if (typeof value === "object" && value.constructor !== Date) {
              memo[key] = publishNestedComposite(value);
          }
          else if (value.constructor === Date) {
              memo[key] = new Date(value).getTime();
          }
          else if (value.constructor === Boolean) {
              memo[key] = value.toString();
          }
          else {
              memo[key] = value;
          }
          return memo;
      }, {});
  }
  function flatten(arr) {
      return arr.reduce(function (flat, toFlatten) {
          return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
      }, []);
  }
  function getHighestState(arr) {
      return arr.sort(function (a, b) {
          if (!a.state) {
              return 1;
          }
          if (!b.state) {
              return -1;
          }
          return b.state - a.state;
      })[0];
  }
  function aggregateDescription(arr) {
      var msg = "";
      arr.forEach(function (m, idx, a) {
          var path = m.path.join(".");
          if (idx === a.length - 1) {
              msg += path + "." + m.name + ": " + m.description;
          }
          else {
              msg += path + "." + m.name + ": " + m.description + ",";
          }
      });
      if (msg.length > 100) {
          return msg.slice(0, 100) + "...";
      }
      else {
          return msg;
      }
  }
  function composeMsgForRootStateMetric(system) {
      var aggregatedState = system.root.getAggregateState();
      var merged = flatten(aggregatedState);
      var highestState = getHighestState(merged);
      var aggregateDesc = aggregateDescription(merged);
      return {
          description: aggregateDesc,
          value: highestState.state,
      };
  }

  function gw3 (connection, config) {
      var _this = this;
      if (!connection || typeof connection !== "object") {
          throw new Error("Connection is required parameter");
      }
      var joinPromise;
      var session;
      var init = function (repo) {
          var resolveReadyPromise;
          joinPromise = new Promise(function (resolve) {
              resolveReadyPromise = resolve;
          });
          session = connection.domain("metrics");
          session.onJoined(function (reconnect) {
              if (!reconnect && resolveReadyPromise) {
                  resolveReadyPromise();
                  resolveReadyPromise = undefined;
              }
              var rootStateMetric = {
                  name: "/State",
                  type: "object",
                  composite: {
                      Description: {
                          type: "string",
                          description: "",
                      },
                      Value: {
                          type: "number",
                          description: "",
                      },
                  },
                  description: "System state",
                  context: {},
              };
              var defineRootMetricsMsg = {
                  type: "define",
                  metrics: [rootStateMetric],
              };
              session.send(defineRootMetricsMsg);
              if (reconnect) {
                  replayRepo(repo);
              }
          });
          session.join({
              system: config.system,
              service: config.service,
              instance: config.instance
          });
      };
      var replayRepo = function (repo) {
          replaySystem(repo.root);
      };
      var replaySystem = function (system) {
          createSystem(system);
          system.metrics.forEach(function (m) {
              createMetric(m);
          });
          system.subSystems.forEach(function (ss) {
              replaySystem(ss);
          });
      };
      var createSystem = function (system) { return __awaiter$1(_this, void 0, void 0, function () {
          var metric, createMetricsMsg;
          return __generator$1(this, function (_a) {
              switch (_a.label) {
                  case 0:
                      if (system.parent === undefined) {
                          return [2];
                      }
                      return [4, joinPromise];
                  case 1:
                      _a.sent();
                      metric = {
                          name: normalizeMetricName(system.path.join("/") + "/" + system.name + "/State"),
                          type: "object",
                          composite: {
                              Description: {
                                  type: "string",
                                  description: "",
                              },
                              Value: {
                                  type: "number",
                                  description: "",
                              },
                          },
                          description: "System state",
                          context: {},
                      };
                      createMetricsMsg = {
                          type: "define",
                          metrics: [metric],
                      };
                      session.send(createMetricsMsg);
                      return [2];
              }
          });
      }); };
      var updateSystem = function (system, state) { return __awaiter$1(_this, void 0, void 0, function () {
          var shadowedUpdateMetric, stateObj, rootMetric;
          return __generator$1(this, function (_a) {
              switch (_a.label) {
                  case 0: return [4, joinPromise];
                  case 1:
                      _a.sent();
                      shadowedUpdateMetric = {
                          type: "publish",
                          values: [{
                                  name: normalizeMetricName(system.path.join("/") + "/" + system.name + "/State"),
                                  value: {
                                      Description: state.description,
                                      Value: state.state,
                                  },
                                  timestamp: Date.now(),
                              }],
                      };
                      session.send(shadowedUpdateMetric);
                      stateObj = composeMsgForRootStateMetric(system);
                      rootMetric = {
                          type: "publish",
                          peer_id: connection.peerId,
                          values: [{
                                  name: "/State",
                                  value: {
                                      Description: stateObj.description,
                                      Value: stateObj.value,
                                  },
                                  timestamp: Date.now(),
                              }],
                      };
                      session.send(rootMetric);
                      return [2];
              }
          });
      }); };
      var createMetric = function (metric) { return __awaiter$1(_this, void 0, void 0, function () {
          var metricClone, m, createMetricsMsg;
          return __generator$1(this, function (_a) {
              switch (_a.label) {
                  case 0:
                      metricClone = cloneMetric(metric);
                      return [4, joinPromise];
                  case 1:
                      _a.sent();
                      m = serializeMetric(metricClone);
                      createMetricsMsg = {
                          type: "define",
                          metrics: [m],
                      };
                      session.send(createMetricsMsg);
                      if (typeof metricClone.value !== "undefined") {
                          updateMetricCore(metricClone);
                      }
                      return [2];
              }
          });
      }); };
      var updateMetric = function (metric) { return __awaiter$1(_this, void 0, void 0, function () {
          var metricClone;
          return __generator$1(this, function (_a) {
              switch (_a.label) {
                  case 0:
                      metricClone = cloneMetric(metric);
                      return [4, joinPromise];
                  case 1:
                      _a.sent();
                      updateMetricCore(metricClone);
                      return [2];
              }
          });
      }); };
      var updateMetricCore = function (metric) {
          if (canUpdate()) {
              var value = getMetricValueByType(metric);
              var publishMetricsMsg = {
                  type: "publish",
                  values: [{
                          name: normalizeMetricName(metric.path.join("/") + "/" + metric.name),
                          value: value,
                          timestamp: Date.now(),
                      }],
              };
              return session.sendFireAndForget(publishMetricsMsg);
          }
          return Promise.resolve();
      };
      var cloneMetric = function (metric) {
          var metricClone = __assign$1({}, metric);
          if (typeof metric.value === "object" && metric.value !== null) {
              metricClone.value = __assign$1({}, metric.value);
          }
          return metricClone;
      };
      var canUpdate = function () {
          var _a;
          try {
              var func = (_a = config.canUpdateMetric) !== null && _a !== void 0 ? _a : (function () { return true; });
              return func();
          }
          catch (_b) {
              return true;
          }
      };
      return {
          init: init,
          createSystem: createSystem,
          updateSystem: updateSystem,
          createMetric: createMetric,
          updateMetric: updateMetric,
      };
  }

  var Helpers = {
      validate: function (definition, parent, transport) {
          if (definition === null || typeof definition !== "object") {
              throw new Error("Missing definition");
          }
          if (parent === null || typeof parent !== "object") {
              throw new Error("Missing parent");
          }
          if (transport === null || typeof transport !== "object") {
              throw new Error("Missing transport");
          }
      },
  };

  var BaseMetric = (function () {
      function BaseMetric(definition, system, transport, value, type) {
          this.definition = definition;
          this.system = system;
          this.transport = transport;
          this.value = value;
          this.type = type;
          this.path = [];
          Helpers.validate(definition, system, transport);
          this.path = system.path.slice(0);
          this.path.push(system.name);
          this.name = definition.name;
          this.description = definition.description;
          transport.createMetric(this);
      }
      Object.defineProperty(BaseMetric.prototype, "repo", {
          get: function () {
              var _a;
              return (_a = this.system) === null || _a === void 0 ? void 0 : _a.repo;
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(BaseMetric.prototype, "id", {
          get: function () { return this.system.path + "/" + name; },
          enumerable: true,
          configurable: true
      });
      BaseMetric.prototype.update = function (newValue) {
          this.value = newValue;
          return this.transport.updateMetric(this);
      };
      return BaseMetric;
  }());

  var NumberMetric = (function (_super) {
      __extends$1(NumberMetric, _super);
      function NumberMetric(definition, system, transport, value) {
          return _super.call(this, definition, system, transport, value, MetricTypes.NUMBER) || this;
      }
      NumberMetric.prototype.incrementBy = function (num) {
          this.update(this.value + num);
      };
      NumberMetric.prototype.increment = function () {
          this.incrementBy(1);
      };
      NumberMetric.prototype.decrement = function () {
          this.incrementBy(-1);
      };
      NumberMetric.prototype.decrementBy = function (num) {
          this.incrementBy(num * -1);
      };
      return NumberMetric;
  }(BaseMetric));

  var ObjectMetric = (function (_super) {
      __extends$1(ObjectMetric, _super);
      function ObjectMetric(definition, system, transport, value) {
          return _super.call(this, definition, system, transport, value, MetricTypes.OBJECT) || this;
      }
      ObjectMetric.prototype.update = function (newValue) {
          this.mergeValues(newValue);
          return this.transport.updateMetric(this);
      };
      ObjectMetric.prototype.mergeValues = function (values) {
          var _this = this;
          return Object.keys(this.value).forEach(function (k) {
              if (typeof values[k] !== "undefined") {
                  _this.value[k] = values[k];
              }
          });
      };
      return ObjectMetric;
  }(BaseMetric));

  var StringMetric = (function (_super) {
      __extends$1(StringMetric, _super);
      function StringMetric(definition, system, transport, value) {
          return _super.call(this, definition, system, transport, value, MetricTypes.STRING) || this;
      }
      return StringMetric;
  }(BaseMetric));

  var TimestampMetric = (function (_super) {
      __extends$1(TimestampMetric, _super);
      function TimestampMetric(definition, system, transport, value) {
          return _super.call(this, definition, system, transport, value, MetricTypes.TIMESTAMP) || this;
      }
      TimestampMetric.prototype.now = function () {
          this.update(new Date());
      };
      return TimestampMetric;
  }(BaseMetric));

  function system(name, repo, protocol, parent, description) {
      if (!repo) {
          throw new Error("Repository is required");
      }
      if (!protocol) {
          throw new Error("Transport is required");
      }
      var _transport = protocol;
      var _name = name;
      var _description = description || "";
      var _repo = repo;
      var _parent = parent;
      var _path = _buildPath(parent);
      var _state = {};
      var id = _arrayToString(_path, "/") + name;
      var root = repo.root;
      var _subSystems = [];
      var _metrics = [];
      function subSystem(nameSystem, descriptionSystem) {
          if (!nameSystem || nameSystem.length === 0) {
              throw new Error("name is required");
          }
          var match = _subSystems.filter(function (s) { return s.name === nameSystem; });
          if (match.length > 0) {
              return match[0];
          }
          var _system = system(nameSystem, _repo, _transport, me, descriptionSystem);
          _subSystems.push(_system);
          return _system;
      }
      function setState(state, stateDescription) {
          _state = { state: state, description: stateDescription };
          _transport.updateSystem(me, _state);
      }
      function stringMetric(definition, value) {
          return _getOrCreateMetric(definition, MetricTypes.STRING, value, function (metricDef) { return new StringMetric(metricDef, me, _transport, value); });
      }
      function numberMetric(definition, value) {
          return _getOrCreateMetric(definition, MetricTypes.NUMBER, value, function (metricDef) { return new NumberMetric(metricDef, me, _transport, value); });
      }
      function objectMetric(definition, value) {
          return _getOrCreateMetric(definition, MetricTypes.OBJECT, value, function (metricDef) { return new ObjectMetric(metricDef, me, _transport, value); });
      }
      function timestampMetric(definition, value) {
          return _getOrCreateMetric(definition, MetricTypes.TIMESTAMP, value, function (metricDef) { return new TimestampMetric(metricDef, me, _transport, value); });
      }
      function _getOrCreateMetric(metricObject, expectedType, value, createMetric) {
          var metricDef = { name: "" };
          if (typeof metricObject === "string") {
              metricDef = { name: metricObject };
          }
          else {
              metricDef = metricObject;
          }
          var matching = _metrics.filter(function (shadowedMetric) { return shadowedMetric.name === metricDef.name; });
          if (matching.length > 0) {
              var existing = matching[0];
              if (existing.type !== expectedType) {
                  throw new Error("A metric named " + metricDef.name + " is already defined with different type.");
              }
              if (typeof value !== "undefined") {
                  existing
                      .update(value)
                      .catch(function () { });
              }
              return existing;
          }
          var metric = createMetric(metricDef);
          _metrics.push(metric);
          return metric;
      }
      function _buildPath(shadowedSystem) {
          if (!shadowedSystem || !shadowedSystem.parent) {
              return [];
          }
          var path = _buildPath(shadowedSystem.parent);
          path.push(shadowedSystem.name);
          return path;
      }
      function _arrayToString(path, separator) {
          return ((path && path.length > 0) ? path.join(separator) : "");
      }
      function getAggregateState() {
          var aggState = [];
          if (Object.keys(_state).length > 0) {
              aggState.push({
                  name: _name,
                  path: _path,
                  state: _state.state,
                  description: _state.description,
              });
          }
          _subSystems.forEach(function (shadowedSubSystem) {
              var result = shadowedSubSystem.getAggregateState();
              if (result.length > 0) {
                  aggState.push.apply(aggState, result);
              }
          });
          return aggState;
      }
      var me = {
          get name() {
              return _name;
          },
          get description() {
              return _description;
          },
          get repo() {
              return _repo;
          },
          get parent() {
              return _parent;
          },
          path: _path,
          id: id,
          root: root,
          get subSystems() {
              return _subSystems;
          },
          get metrics() {
              return _metrics;
          },
          subSystem: subSystem,
          getState: function () {
              return _state;
          },
          setState: setState,
          stringMetric: stringMetric,
          timestampMetric: timestampMetric,
          objectMetric: objectMetric,
          numberMetric: numberMetric,
          getAggregateState: getAggregateState,
      };
      _transport.createSystem(me);
      return me;
  }

  var Repository = (function () {
      function Repository(options, protocol) {
          protocol.init(this);
          this.root = system("", this, protocol);
          this.addSystemMetrics(this.root, options.clickStream || options.clickStream === undefined);
      }
      Repository.prototype.addSystemMetrics = function (rootSystem, useClickStream) {
          if (typeof navigator !== "undefined") {
              rootSystem.stringMetric("UserAgent", navigator.userAgent);
          }
          if (useClickStream && typeof document !== "undefined") {
              var clickStream_1 = rootSystem.subSystem("ClickStream");
              var documentClickHandler = function (e) {
                  if (!e.target) {
                      return;
                  }
                  var target = e.target;
                  clickStream_1.objectMetric("LastBrowserEvent", {
                      type: "click",
                      timestamp: new Date(),
                      target: {
                          className: e.target ? target.className : "",
                          id: target.id,
                          type: "<" + target.tagName.toLowerCase() + ">",
                          href: target.href || "",
                      },
                  });
              };
              clickStream_1.objectMetric("Page", {
                  title: document.title,
                  page: window.location.href,
              });
              if (document.addEventListener) {
                  document.addEventListener("click", documentClickHandler);
              }
              else {
                  document.attachEvent("onclick", documentClickHandler);
              }
          }
          rootSystem.stringMetric("StartTime", (new Date()).toString());
          var urlMetric = rootSystem.stringMetric("StartURL", "");
          var appNameMetric = rootSystem.stringMetric("AppName", "");
          if (typeof window !== "undefined") {
              if (typeof window.location !== "undefined") {
                  var startUrl = window.location.href;
                  urlMetric.update(startUrl);
              }
              if (typeof window.glue42gd !== "undefined") {
                  appNameMetric.update(window.glue42gd.appName);
              }
          }
      };
      return Repository;
  }());

  var NullProtocol = (function () {
      function NullProtocol() {
      }
      NullProtocol.prototype.init = function (repo) {
      };
      NullProtocol.prototype.createSystem = function (system) {
          return Promise.resolve();
      };
      NullProtocol.prototype.updateSystem = function (metric, state) {
          return Promise.resolve();
      };
      NullProtocol.prototype.createMetric = function (metric) {
          return Promise.resolve();
      };
      NullProtocol.prototype.updateMetric = function (metric) {
          return Promise.resolve();
      };
      return NullProtocol;
  }());

  var PerfTracker = (function () {
      function PerfTracker(api, initialPublishTimeout, publishInterval) {
          this.api = api;
          this.lastCount = 0;
          this.initialPublishTimeout = 10 * 1000;
          this.publishInterval = 60 * 1000;
          this.initialPublishTimeout = initialPublishTimeout !== null && initialPublishTimeout !== void 0 ? initialPublishTimeout : this.initialPublishTimeout;
          this.publishInterval = publishInterval !== null && publishInterval !== void 0 ? publishInterval : this.publishInterval;
          this.scheduleCollection();
          this.system = this.api.subSystem("performance", "Performance data published by the web application");
      }
      PerfTracker.prototype.scheduleCollection = function () {
          var _this = this;
          setTimeout(function () {
              _this.collect();
              setInterval(function () {
                  _this.collect();
              }, _this.publishInterval);
          }, this.initialPublishTimeout);
      };
      PerfTracker.prototype.collect = function () {
          try {
              this.collectMemory();
              this.collectEntries();
          }
          catch (_a) {
          }
      };
      PerfTracker.prototype.collectMemory = function () {
          var memory = window.performance.memory;
          this.system.stringMetric("memory", JSON.stringify({
              totalJSHeapSize: memory.totalJSHeapSize,
              usedJSHeapSize: memory.usedJSHeapSize
          }));
      };
      PerfTracker.prototype.collectEntries = function () {
          var allEntries = window.performance.getEntries();
          if (allEntries.length <= this.lastCount) {
              return;
          }
          this.lastCount = allEntries.length;
          var jsonfiedEntries = allEntries.map(function (i) { return i.toJSON(); });
          this.system.stringMetric("entries", JSON.stringify(jsonfiedEntries));
      };
      return PerfTracker;
  }());

  var metrics = (function (options) {
      var protocol;
      if (!options.connection || typeof options.connection !== "object") {
          protocol = new NullProtocol();
      }
      else {
          protocol = gw3(options.connection, options);
      }
      var repo = new Repository(options, protocol);
      var rootSystem = repo.root;
      if (!options.disableAutoAppSystem) {
          rootSystem = rootSystem.subSystem("App");
      }
      var api = addFAVSupport(rootSystem);
      initPerf(api, options.pagePerformanceMetrics);
      return api;
  });
  function initPerf(api, config) {
      var _a, _b;
      if (typeof window === "undefined") {
          return;
      }
      var perfConfig = (_b = (_a = window === null || window === void 0 ? void 0 : window.glue42gd) === null || _a === void 0 ? void 0 : _a.metrics) === null || _b === void 0 ? void 0 : _b.pagePerformanceMetrics;
      if (perfConfig) {
          config = perfConfig;
      }
      if (config === null || config === void 0 ? void 0 : config.enabled) {
          new PerfTracker(api, config.initialPublishTimeout, config.publishInterval);
      }
  }
  function addFAVSupport(system) {
      var reportingSystem = system.subSystem("reporting");
      var def = {
          name: "features"
      };
      var featureMetric;
      var featureMetricFunc = function (name, action, payload) {
          if (typeof name === "undefined" || name === "") {
              throw new Error("name is mandatory");
          }
          else if (typeof action === "undefined" || action === "") {
              throw new Error("action is mandatory");
          }
          else if (typeof payload === "undefined" || payload === "") {
              throw new Error("payload is mandatory");
          }
          if (!featureMetric) {
              featureMetric = reportingSystem.objectMetric(def, { name: name, action: action, payload: payload });
          }
          else {
              featureMetric.update({
                  name: name,
                  action: action,
                  payload: payload
              });
          }
      };
      system.featureMetric = featureMetricFunc;
      return system;
  }

  function createRegistry(options) {
      if (options && options.errorHandling
          && typeof options.errorHandling !== "function"
          && options.errorHandling !== "log"
          && options.errorHandling !== "silent"
          && options.errorHandling !== "throw") {
          throw new Error("Invalid options passed to createRegistry. Prop errorHandling should be [\"log\" | \"silent\" | \"throw\" | (err) => void], but " + typeof options.errorHandling + " was passed");
      }
      var _userErrorHandler = options && typeof options.errorHandling === "function" && options.errorHandling;
      var callbacks = {};
      function add(key, callback, replayArgumentsArr) {
          var callbacksForKey = callbacks[key];
          if (!callbacksForKey) {
              callbacksForKey = [];
              callbacks[key] = callbacksForKey;
          }
          callbacksForKey.push(callback);
          if (replayArgumentsArr) {
              setTimeout(function () {
                  replayArgumentsArr.forEach(function (replayArgument) {
                      var _a;
                      if ((_a = callbacks[key]) === null || _a === void 0 ? void 0 : _a.includes(callback)) {
                          try {
                              if (Array.isArray(replayArgument)) {
                                  callback.apply(undefined, replayArgument);
                              }
                              else {
                                  callback.apply(undefined, [replayArgument]);
                              }
                          }
                          catch (err) {
                              _handleError(err, key);
                          }
                      }
                  });
              }, 0);
          }
          return function () {
              var allForKey = callbacks[key];
              if (!allForKey) {
                  return;
              }
              allForKey = allForKey.reduce(function (acc, element, index) {
                  if (!(element === callback && acc.length === index)) {
                      acc.push(element);
                  }
                  return acc;
              }, []);
              if (allForKey.length === 0) {
                  delete callbacks[key];
              }
              else {
                  callbacks[key] = allForKey;
              }
          };
      }
      function execute(key) {
          var argumentsArr = [];
          for (var _i = 1; _i < arguments.length; _i++) {
              argumentsArr[_i - 1] = arguments[_i];
          }
          var callbacksForKey = callbacks[key];
          if (!callbacksForKey || callbacksForKey.length === 0) {
              return [];
          }
          var results = [];
          callbacksForKey.forEach(function (callback) {
              try {
                  var result = callback.apply(undefined, argumentsArr);
                  results.push(result);
              }
              catch (err) {
                  results.push(undefined);
                  _handleError(err, key);
              }
          });
          return results;
      }
      function _handleError(exceptionArtifact, key) {
          var errParam = exceptionArtifact instanceof Error ? exceptionArtifact : new Error(exceptionArtifact);
          if (_userErrorHandler) {
              _userErrorHandler(errParam);
              return;
          }
          var msg = "[ERROR] callback-registry: User callback for key \"" + key + "\" failed: " + errParam.stack;
          if (options) {
              switch (options.errorHandling) {
                  case "log":
                      return console.error(msg);
                  case "silent":
                      return;
                  case "throw":
                      throw new Error(msg);
              }
          }
          console.error(msg);
      }
      function clear() {
          callbacks = {};
      }
      function clearKey(key) {
          var callbacksForKey = callbacks[key];
          if (!callbacksForKey) {
              return;
          }
          delete callbacks[key];
      }
      return {
          add: add,
          execute: execute,
          clear: clear,
          clearKey: clearKey
      };
  }
  createRegistry.default = createRegistry;
  var lib = createRegistry;

  var InProcTransport = (function () {
      function InProcTransport(settings, logger) {
          var _this = this;
          this.registry = lib();
          this.gw = settings.facade;
          this.gw.connect(function (_client, message) {
              _this.messageHandler(message);
          }).then(function (client) {
              _this.client = client;
          });
      }
      Object.defineProperty(InProcTransport.prototype, "isObjectBasedTransport", {
          get: function () {
              return true;
          },
          enumerable: true,
          configurable: true
      });
      InProcTransport.prototype.sendObject = function (msg) {
          if (this.client) {
              this.client.send(msg);
              return Promise.resolve(undefined);
          }
          else {
              return Promise.reject("not connected");
          }
      };
      InProcTransport.prototype.send = function (_msg) {
          return Promise.reject("not supported");
      };
      InProcTransport.prototype.onMessage = function (callback) {
          return this.registry.add("onMessage", callback);
      };
      InProcTransport.prototype.onConnectedChanged = function (callback) {
          callback(true);
      };
      InProcTransport.prototype.close = function () {
          return Promise.resolve();
      };
      InProcTransport.prototype.open = function () {
          return Promise.resolve();
      };
      InProcTransport.prototype.name = function () {
          return "in-memory";
      };
      InProcTransport.prototype.reconnect = function () {
          return Promise.resolve();
      };
      InProcTransport.prototype.messageHandler = function (msg) {
          this.registry.execute("onMessage", msg);
      };
      return InProcTransport;
  }());

  var SharedWorkerTransport = (function () {
      function SharedWorkerTransport(workerFile, logger) {
          var _this = this;
          this.logger = logger;
          this.registry = lib();
          this.worker = new SharedWorker(workerFile);
          this.worker.port.onmessage = function (e) {
              _this.messageHandler(e.data);
          };
      }
      Object.defineProperty(SharedWorkerTransport.prototype, "isObjectBasedTransport", {
          get: function () {
              return true;
          },
          enumerable: true,
          configurable: true
      });
      SharedWorkerTransport.prototype.sendObject = function (msg) {
          this.worker.port.postMessage(msg);
          return Promise.resolve();
      };
      SharedWorkerTransport.prototype.send = function (_msg) {
          return Promise.reject("not supported");
      };
      SharedWorkerTransport.prototype.onMessage = function (callback) {
          return this.registry.add("onMessage", callback);
      };
      SharedWorkerTransport.prototype.onConnectedChanged = function (callback) {
          callback(true);
      };
      SharedWorkerTransport.prototype.close = function () {
          return Promise.resolve();
      };
      SharedWorkerTransport.prototype.open = function () {
          return Promise.resolve();
      };
      SharedWorkerTransport.prototype.name = function () {
          return "shared-worker";
      };
      SharedWorkerTransport.prototype.reconnect = function () {
          return Promise.resolve();
      };
      SharedWorkerTransport.prototype.messageHandler = function (msg) {
          this.registry.execute("onMessage", msg);
      };
      return SharedWorkerTransport;
  }());

  var Utils = (function () {
      function Utils() {
      }
      Utils.getGDMajorVersion = function () {
          if (typeof window === "undefined") {
              return undefined;
          }
          if (!window.glueDesktop) {
              return undefined;
          }
          if (!window.glueDesktop.version) {
              return undefined;
          }
          var ver = Number(window.glueDesktop.version.substr(0, 1));
          return isNaN(ver) ? undefined : ver;
      };
      Utils.isNode = function () {
          if (typeof Utils._isNode !== "undefined") {
              return Utils._isNode;
          }
          if (typeof window !== "undefined") {
              Utils._isNode = false;
              return false;
          }
          try {
              Utils._isNode = Object.prototype.toString.call(global.process) === "[object process]";
          }
          catch (e) {
              Utils._isNode = false;
          }
          return Utils._isNode;
      };
      return Utils;
  }());

  var PromiseWrapper = (function () {
      function PromiseWrapper() {
          var _this = this;
          this.rejected = false;
          this.resolved = false;
          this.promise = new Promise(function (resolve, reject) {
              _this.resolve = function (t) {
                  _this.resolved = true;
                  resolve(t);
              };
              _this.reject = function (err) {
                  _this.rejected = true;
                  reject(err);
              };
          });
      }
      PromiseWrapper.delay = function (time) {
          return new Promise(function (resolve) { return setTimeout(resolve, time); });
      };
      Object.defineProperty(PromiseWrapper.prototype, "ended", {
          get: function () {
              return this.rejected || this.resolved;
          },
          enumerable: true,
          configurable: true
      });
      return PromiseWrapper;
  }());

  var timers = {};
  function getAllTimers() {
      return timers;
  }
  function timer (timerName) {
      var existing = timers[timerName];
      if (existing) {
          return existing;
      }
      var marks = [];
      function now() {
          return new Date().getTime();
      }
      var startTime = now();
      mark("start", startTime);
      var endTime;
      var period;
      function stop() {
          endTime = now();
          mark("end", endTime);
          period = endTime - startTime;
          return period;
      }
      function mark(name, time) {
          var currentTime = time !== null && time !== void 0 ? time : now();
          var diff = 0;
          if (marks.length > 0) {
              diff = currentTime - marks[marks.length - 1].time;
          }
          marks.push({ name: name, time: currentTime, diff: diff });
      }
      var timerObj = {
          get startTime() {
              return startTime;
          },
          get endTime() {
              return endTime;
          },
          get period() {
              return period;
          },
          stop: stop,
          mark: mark,
          marks: marks
      };
      timers[timerName] = timerObj;
      return timerObj;
  }

  var WebSocketConstructor = Utils.isNode() ? require("ws") : window.WebSocket;
  var WS = (function () {
      function WS(settings, logger) {
          this.startupTimer = timer("connection");
          this._running = true;
          this._registry = lib();
          this.wsRequests = [];
          this.settings = settings;
          this.logger = logger;
          if (!this.settings.ws) {
              throw new Error("ws is missing");
          }
      }
      WS.prototype.onMessage = function (callback) {
          return this._registry.add("onMessage", callback);
      };
      WS.prototype.send = function (msg, options) {
          var _this = this;
          return new Promise(function (resolve, reject) {
              _this.waitForSocketConnection(function () {
                  var _a;
                  try {
                      (_a = _this.ws) === null || _a === void 0 ? void 0 : _a.send(msg);
                      resolve();
                  }
                  catch (e) {
                      reject(e);
                  }
              }, reject);
          });
      };
      WS.prototype.open = function () {
          var _this = this;
          this.logger.info("opening ws...");
          this._running = true;
          return new Promise(function (resolve, reject) {
              _this.waitForSocketConnection(resolve, reject);
          });
      };
      WS.prototype.close = function () {
          this._running = false;
          if (this.ws) {
              this.ws.close();
          }
          return Promise.resolve();
      };
      WS.prototype.onConnectedChanged = function (callback) {
          return this._registry.add("onConnectedChanged", callback);
      };
      WS.prototype.name = function () {
          return "ws " + this.settings.ws;
      };
      WS.prototype.reconnect = function () {
          var _a;
          (_a = this.ws) === null || _a === void 0 ? void 0 : _a.close();
          var pw = new PromiseWrapper();
          this.waitForSocketConnection(function () {
              pw.resolve();
          });
          return pw.promise;
      };
      WS.prototype.waitForSocketConnection = function (callback, failed) {
          var _a;
          failed = failed !== null && failed !== void 0 ? failed : (function () { });
          if (!this._running) {
              failed("wait for socket on " + this.settings.ws + " failed - socket closed by user");
              return;
          }
          if (((_a = this.ws) === null || _a === void 0 ? void 0 : _a.readyState) === 1) {
              callback();
              return;
          }
          this.wsRequests.push({ callback: callback, failed: failed });
          if (this.wsRequests.length > 1) {
              return;
          }
          this.openSocket();
      };
      WS.prototype.openSocket = function (retryInterval, retriesLeft) {
          return __awaiter$1(this, void 0, void 0, function () {
              var _this = this;
              return __generator$1(this, function (_b) {
                  switch (_b.label) {
                      case 0:
                          this.startupTimer.mark("opening-socket");
                          if (retryInterval === undefined) {
                              retryInterval = this.settings.reconnectInterval;
                          }
                          if (retriesLeft !== undefined) {
                              if (retriesLeft === 0) {
                                  this.notifyForSocketState("wait for socket on " + this.settings.ws + " failed - no more retries left");
                                  return [2];
                              }
                              this.logger.debug("will retry " + retriesLeft + " more times (every " + retryInterval + " ms)");
                          }
                          _b.label = 1;
                      case 1:
                          _b.trys.push([1, 3, , 4]);
                          return [4, this.initiateSocket()];
                      case 2:
                          _b.sent();
                          this.startupTimer.mark("socket-initiated");
                          this.notifyForSocketState();
                          return [3, 4];
                      case 3:
                          _b.sent();
                          setTimeout(function () {
                              var retries = retriesLeft === undefined ? undefined : retriesLeft - 1;
                              _this.openSocket(retryInterval, retries);
                          }, retryInterval);
                          return [3, 4];
                      case 4: return [2];
                  }
              });
          });
      };
      WS.prototype.initiateSocket = function () {
          var _this = this;
          var pw = new PromiseWrapper();
          this.logger.debug("initiating ws to " + this.settings.ws + "...");
          this.ws = new WebSocketConstructor(this.settings.ws || "");
          this.ws.onerror = function (err) {
              var reason = "";
              try {
                  reason = JSON.stringify(err);
              }
              catch (error) {
                  var seen_1 = new WeakSet();
                  var replacer = function (key, value) {
                      if (typeof value === "object" && value !== null) {
                          if (seen_1.has(value)) {
                              return;
                          }
                          seen_1.add(value);
                      }
                      return value;
                  };
                  reason = JSON.stringify(err, replacer);
              }
              pw.reject("error");
              _this.notifyStatusChanged(false, reason);
          };
          this.ws.onclose = function (err) {
              _this.logger.info("ws closed " + err);
              pw.reject("closed");
              _this.notifyStatusChanged(false);
          };
          this.ws.onopen = function () {
              var _a;
              _this.startupTimer.mark("ws-opened");
              _this.logger.info("ws opened " + ((_a = _this.settings.identity) === null || _a === void 0 ? void 0 : _a.application));
              pw.resolve();
              _this.notifyStatusChanged(true);
          };
          this.ws.onmessage = function (message) {
              _this._registry.execute("onMessage", message.data);
          };
          return pw.promise;
      };
      WS.prototype.notifyForSocketState = function (error) {
          this.wsRequests.forEach(function (wsRequest) {
              if (error) {
                  if (wsRequest.failed) {
                      wsRequest.failed(error);
                  }
              }
              else {
                  wsRequest.callback();
              }
          });
          this.wsRequests = [];
      };
      WS.prototype.notifyStatusChanged = function (status, reason) {
          this._registry.execute("onConnectedChanged", status, reason);
      };
      return WS;
  }());

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  // Found this seed-based random generator somewhere
  // Based on The Central Randomizer 1.3 (C) 1997 by Paul Houle (houle@msc.cornell.edu)

  var seed = 1;

  /**
   * return a random number based on a seed
   * @param seed
   * @returns {number}
   */
  function getNextValue() {
      seed = (seed * 9301 + 49297) % 233280;
      return seed/(233280.0);
  }

  function setSeed(_seed_) {
      seed = _seed_;
  }

  var randomFromSeed = {
      nextValue: getNextValue,
      seed: setSeed
  };

  var ORIGINAL = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
  var alphabet;
  var previousSeed;

  var shuffled;

  function reset() {
      shuffled = false;
  }

  function setCharacters(_alphabet_) {
      if (!_alphabet_) {
          if (alphabet !== ORIGINAL) {
              alphabet = ORIGINAL;
              reset();
          }
          return;
      }

      if (_alphabet_ === alphabet) {
          return;
      }

      if (_alphabet_.length !== ORIGINAL.length) {
          throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. You submitted ' + _alphabet_.length + ' characters: ' + _alphabet_);
      }

      var unique = _alphabet_.split('').filter(function(item, ind, arr){
         return ind !== arr.lastIndexOf(item);
      });

      if (unique.length) {
          throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. These characters were not unique: ' + unique.join(', '));
      }

      alphabet = _alphabet_;
      reset();
  }

  function characters(_alphabet_) {
      setCharacters(_alphabet_);
      return alphabet;
  }

  function setSeed$1(seed) {
      randomFromSeed.seed(seed);
      if (previousSeed !== seed) {
          reset();
          previousSeed = seed;
      }
  }

  function shuffle() {
      if (!alphabet) {
          setCharacters(ORIGINAL);
      }

      var sourceArray = alphabet.split('');
      var targetArray = [];
      var r = randomFromSeed.nextValue();
      var characterIndex;

      while (sourceArray.length > 0) {
          r = randomFromSeed.nextValue();
          characterIndex = Math.floor(r * sourceArray.length);
          targetArray.push(sourceArray.splice(characterIndex, 1)[0]);
      }
      return targetArray.join('');
  }

  function getShuffled() {
      if (shuffled) {
          return shuffled;
      }
      shuffled = shuffle();
      return shuffled;
  }

  /**
   * lookup shuffled letter
   * @param index
   * @returns {string}
   */
  function lookup(index) {
      var alphabetShuffled = getShuffled();
      return alphabetShuffled[index];
  }

  var alphabet_1 = {
      characters: characters,
      seed: setSeed$1,
      lookup: lookup,
      shuffled: getShuffled
  };

  var crypto = typeof window === 'object' && (window.crypto || window.msCrypto); // IE 11 uses window.msCrypto

  function randomByte() {
      if (!crypto || !crypto.getRandomValues) {
          return Math.floor(Math.random() * 256) & 0x30;
      }
      var dest = new Uint8Array(1);
      crypto.getRandomValues(dest);
      return dest[0] & 0x30;
  }

  var randomByteBrowser = randomByte;

  function encode(lookup, number) {
      var loopCounter = 0;
      var done;

      var str = '';

      while (!done) {
          str = str + lookup( ( (number >> (4 * loopCounter)) & 0x0f ) | randomByteBrowser() );
          done = number < (Math.pow(16, loopCounter + 1 ) );
          loopCounter++;
      }
      return str;
  }

  var encode_1 = encode;

  /**
   * Decode the id to get the version and worker
   * Mainly for debugging and testing.
   * @param id - the shortid-generated id.
   */
  function decode(id) {
      var characters = alphabet_1.shuffled();
      return {
          version: characters.indexOf(id.substr(0, 1)) & 0x0f,
          worker: characters.indexOf(id.substr(1, 1)) & 0x0f
      };
  }

  var decode_1 = decode;

  function isShortId(id) {
      if (!id || typeof id !== 'string' || id.length < 6 ) {
          return false;
      }

      var characters = alphabet_1.characters();
      var len = id.length;
      for(var i = 0; i < len;i++) {
          if (characters.indexOf(id[i]) === -1) {
              return false;
          }
      }
      return true;
  }

  var isValid = isShortId;

  var lib$1 = createCommonjsModule(function (module) {






  // Ignore all milliseconds before a certain time to reduce the size of the date entropy without sacrificing uniqueness.
  // This number should be updated every year or so to keep the generated id short.
  // To regenerate `new Date() - 0` and bump the version. Always bump the version!
  var REDUCE_TIME = 1459707606518;

  // don't change unless we change the algos or REDUCE_TIME
  // must be an integer and less than 16
  var version = 6;

  // if you are using cluster or multiple servers use this to make each instance
  // has a unique value for worker
  // Note: I don't know if this is automatically set when using third
  // party cluster solutions such as pm2.
  var clusterWorkerId =  0;

  // Counter is used when shortid is called multiple times in one second.
  var counter;

  // Remember the last time shortid was called in case counter is needed.
  var previousSeconds;

  /**
   * Generate unique id
   * Returns string id
   */
  function generate() {

      var str = '';

      var seconds = Math.floor((Date.now() - REDUCE_TIME) * 0.001);

      if (seconds === previousSeconds) {
          counter++;
      } else {
          counter = 0;
          previousSeconds = seconds;
      }

      str = str + encode_1(alphabet_1.lookup, version);
      str = str + encode_1(alphabet_1.lookup, clusterWorkerId);
      if (counter > 0) {
          str = str + encode_1(alphabet_1.lookup, counter);
      }
      str = str + encode_1(alphabet_1.lookup, seconds);

      return str;
  }


  /**
   * Set the seed.
   * Highly recommended if you don't want people to try to figure out your id schema.
   * exposed as shortid.seed(int)
   * @param seed Integer value to seed the random alphabet.  ALWAYS USE THE SAME SEED or you might get overlaps.
   */
  function seed(seedValue) {
      alphabet_1.seed(seedValue);
      return module.exports;
  }

  /**
   * Set the cluster worker or machine id
   * exposed as shortid.worker(int)
   * @param workerId worker must be positive integer.  Number less than 16 is recommended.
   * returns shortid module so it can be chained.
   */
  function worker(workerId) {
      clusterWorkerId = workerId;
      return module.exports;
  }

  /**
   *
   * sets new characters to use in the alphabet
   * returns the shuffled alphabet
   */
  function characters(newCharacters) {
      if (newCharacters !== undefined) {
          alphabet_1.characters(newCharacters);
      }

      return alphabet_1.shuffled();
  }


  // Export all other functions as properties of the generate function
  module.exports = generate;
  module.exports.generate = generate;
  module.exports.seed = seed;
  module.exports.worker = worker;
  module.exports.characters = characters;
  module.exports.decode = decode_1;
  module.exports.isValid = isValid;
  });
  lib$1.generate;
  lib$1.seed;
  lib$1.worker;
  lib$1.characters;
  lib$1.decode;
  lib$1.isValid;

  var shortid = lib$1;

  function domainSession (domain, connection, logger, successMessages, errorMessages) {
      if (domain == null) {
          domain = "global";
      }
      successMessages = successMessages || ["success"];
      errorMessages = errorMessages || ["error"];
      var isJoined = false;
      var tryReconnecting = false;
      var _latestOptions;
      var _connectionOn = false;
      var callbacks = lib();
      connection.disconnected(handleConnectionDisconnected);
      connection.loggedIn(handleConnectionLoggedIn);
      connection.on("success", function (msg) { return handleSuccessMessage(msg); });
      connection.on("error", function (msg) { return handleErrorMessage(msg); });
      connection.on("result", function (msg) { return handleSuccessMessage(msg); });
      if (successMessages) {
          successMessages.forEach(function (sm) {
              connection.on(sm, function (msg) { return handleSuccessMessage(msg); });
          });
      }
      if (errorMessages) {
          errorMessages.forEach(function (sm) {
              connection.on(sm, function (msg) { return handleErrorMessage(msg); });
          });
      }
      var requestsMap = {};
      function join(options) {
          _latestOptions = options;
          return new Promise(function (resolve, reject) {
              if (isJoined) {
                  resolve();
                  return;
              }
              var joinPromise;
              if (domain === "global") {
                  joinPromise = _connectionOn ? Promise.resolve({}) : Promise.reject("not connected to gateway");
              }
              else {
                  logger.debug("joining domain " + domain);
                  var joinMsg = {
                      type: "join",
                      destination: domain,
                      domain: "global",
                      options: options,
                  };
                  joinPromise = send(joinMsg);
              }
              joinPromise
                  .then(function () {
                  handleJoined();
                  resolve();
              })
                  .catch(function (err) {
                  logger.debug("error joining " + domain + " domain: " + JSON.stringify(err));
                  reject(err);
              });
          });
      }
      function leave() {
          if (domain === "global") {
              return Promise.resolve();
          }
          logger.debug("stopping session " + domain + "...");
          var leaveMsg = {
              type: "leave",
              destination: domain,
              domain: "global",
          };
          tryReconnecting = false;
          return send(leaveMsg).then(function () {
              isJoined = false;
              callbacks.execute("onLeft");
          });
      }
      function handleJoined() {
          logger.debug("did join " + domain);
          isJoined = true;
          var wasReconnect = tryReconnecting;
          tryReconnecting = false;
          callbacks.execute("onJoined", wasReconnect);
      }
      function handleConnectionDisconnected() {
          _connectionOn = false;
          logger.debug("connection is down");
          isJoined = false;
          tryReconnecting = true;
          callbacks.execute("onLeft", { disconnected: true });
      }
      function handleConnectionLoggedIn() {
          _connectionOn = true;
          if (tryReconnecting) {
              logger.debug("connection is now up - trying to reconnect...");
              join(_latestOptions);
          }
      }
      function onJoined(callback) {
          if (isJoined) {
              callback(false);
          }
          return callbacks.add("onJoined", callback);
      }
      function onLeft(callback) {
          if (!isJoined) {
              callback();
          }
          return callbacks.add("onLeft", callback);
      }
      function handleErrorMessage(msg) {
          if (domain !== msg.domain) {
              return;
          }
          var requestId = msg.request_id;
          if (!requestId) {
              return;
          }
          var entry = requestsMap[requestId];
          if (!entry) {
              return;
          }
          entry.error(msg);
      }
      function handleSuccessMessage(msg) {
          if (msg.domain !== domain) {
              return;
          }
          var requestId = msg.request_id;
          if (!requestId) {
              return;
          }
          var entry = requestsMap[requestId];
          if (!entry) {
              return;
          }
          entry.success(msg);
      }
      function getNextRequestId() {
          return shortid();
      }
      function send(msg, tag, options) {
          options = options || {};
          msg.request_id = msg.request_id || getNextRequestId();
          msg.domain = msg.domain || domain;
          if (!options.skipPeerId) {
              msg.peer_id = connection.peerId;
          }
          var requestId = msg.request_id;
          return new Promise(function (resolve, reject) {
              requestsMap[requestId] = {
                  success: function (successMsg) {
                      delete requestsMap[requestId];
                      successMsg._tag = tag;
                      resolve(successMsg);
                  },
                  error: function (errorMsg) {
                      logger.warn("GW error - " + JSON.stringify(errorMsg) + " for request " + JSON.stringify(msg));
                      delete requestsMap[requestId];
                      errorMsg._tag = tag;
                      reject(errorMsg);
                  },
              };
              connection
                  .send(msg, options)
                  .catch(function (err) {
                  requestsMap[requestId].error({ err: err });
              });
          });
      }
      function sendFireAndForget(msg) {
          msg.request_id = msg.request_id ? msg.request_id : getNextRequestId();
          msg.domain = msg.domain || domain;
          msg.peer_id = connection.peerId;
          return connection.send(msg);
      }
      return {
          join: join,
          leave: leave,
          onJoined: onJoined,
          onLeft: onLeft,
          send: send,
          sendFireAndForget: sendFireAndForget,
          on: function (type, callback) {
              connection.on(type, function (msg) {
                  if (msg.domain !== domain) {
                      return;
                  }
                  try {
                      callback(msg);
                  }
                  catch (e) {
                      logger.error("Callback  failed: " + e + " \n " + e.stack + " \n msg was: " + JSON.stringify(msg), e);
                  }
              });
          },
          loggedIn: function (callback) { return connection.loggedIn(callback); },
          connected: function (callback) { return connection.connected(callback); },
          disconnected: function (callback) { return connection.disconnected(callback); },
          get peerId() {
              return connection.peerId;
          },
          get domain() {
              return domain;
          },
      };
  }

  var GW3ProtocolImpl = (function () {
      function GW3ProtocolImpl(connection, settings, logger) {
          var _this = this;
          this.connection = connection;
          this.settings = settings;
          this.logger = logger;
          this.protocolVersion = 3;
          this.datePrefix = "#T42_DATE#";
          this.datePrefixLen = this.datePrefix.length;
          this.dateMinLen = this.datePrefixLen + 1;
          this.datePrefixFirstChar = this.datePrefix[0];
          this.registry = lib();
          this._isLoggedIn = false;
          this.shouldTryLogin = true;
          this.initialLogin = true;
          this.initialLoginAttempts = 3;
          this.sessions = [];
          connection.disconnected(function () {
              _this.handleDisconnected();
          });
          this.ping();
      }
      Object.defineProperty(GW3ProtocolImpl.prototype, "isLoggedIn", {
          get: function () {
              return this._isLoggedIn;
          },
          enumerable: true,
          configurable: true
      });
      GW3ProtocolImpl.prototype.processStringMessage = function (message) {
          var _this = this;
          var msg = JSON.parse(message, function (key, value) {
              if (typeof value !== "string") {
                  return value;
              }
              if (value.length < _this.dateMinLen) {
                  return value;
              }
              if (value[0] !== _this.datePrefixFirstChar) {
                  return value;
              }
              if (value.substring(0, _this.datePrefixLen) !== _this.datePrefix) {
                  return value;
              }
              try {
                  var milliseconds = parseInt(value.substring(_this.datePrefixLen, value.length), 10);
                  if (isNaN(milliseconds)) {
                      return value;
                  }
                  return new Date(milliseconds);
              }
              catch (ex) {
                  return value;
              }
          });
          return {
              msg: msg,
              msgType: msg.type,
          };
      };
      GW3ProtocolImpl.prototype.createStringMessage = function (message) {
          var oldToJson = Date.prototype.toJSON;
          try {
              var datePrefix_1 = this.datePrefix;
              Date.prototype.toJSON = function () {
                  return datePrefix_1 + this.getTime();
              };
              var result = JSON.stringify(message);
              return result;
          }
          finally {
              Date.prototype.toJSON = oldToJson;
          }
      };
      GW3ProtocolImpl.prototype.processObjectMessage = function (message) {
          if (!message.type) {
              throw new Error("Object should have type property");
          }
          return {
              msg: message,
              msgType: message.type,
          };
      };
      GW3ProtocolImpl.prototype.createObjectMessage = function (message) {
          return message;
      };
      GW3ProtocolImpl.prototype.login = function (config, reconnect) {
          return __awaiter$1(this, void 0, void 0, function () {
              var authentication, token, e_1, _a, helloMsg, sendOptions, welcomeMsg, msg, token, _b, err_1;
              return __generator$1(this, function (_c) {
                  switch (_c.label) {
                      case 0:
                          this.logger.debug("logging in...");
                          this.loginConfig = config;
                          if (!this.loginConfig) {
                              this.loginConfig = { username: "", password: "" };
                          }
                          this.shouldTryLogin = true;
                          authentication = {};
                          this.connection.gatewayToken = config.gatewayToken;
                          if (!config.gatewayToken) return [3, 5];
                          if (!reconnect) return [3, 4];
                          _c.label = 1;
                      case 1:
                          _c.trys.push([1, 3, , 4]);
                          return [4, this.getNewGWToken()];
                      case 2:
                          token = _c.sent();
                          config.gatewayToken = token;
                          return [3, 4];
                      case 3:
                          e_1 = _c.sent();
                          this.logger.warn("failed to get GW token when reconnecting " + ((e_1 === null || e_1 === void 0 ? void 0 : e_1.message) || e_1));
                          return [3, 4];
                      case 4:
                          authentication.method = "gateway-token";
                          authentication.token = config.gatewayToken;
                          this.connection.gatewayToken = config.gatewayToken;
                          return [3, 10];
                      case 5:
                          if (!(config.flowName === "sspi")) return [3, 9];
                          authentication.provider = "win";
                          authentication.method = "access-token";
                          if (!(config.flowCallback && config.sessionId)) return [3, 7];
                          _a = authentication;
                          return [4, config.flowCallback(config.sessionId, null)];
                      case 6:
                          _a.token =
                              (_c.sent())
                                  .data
                                  .toString("base64");
                          return [3, 8];
                      case 7: throw new Error("Invalid SSPI config");
                      case 8: return [3, 10];
                      case 9:
                          if (config.token) {
                              authentication.method = "access-token";
                              authentication.token = config.token;
                          }
                          else if (config.username) {
                              authentication.method = "secret";
                              authentication.login = config.username;
                              authentication.secret = config.password;
                          }
                          else {
                              throw new Error("invalid auth message" + JSON.stringify(config));
                          }
                          _c.label = 10;
                      case 10:
                          helloMsg = {
                              type: "hello",
                              identity: this.settings.identity,
                              authentication: authentication
                          };
                          if (config.sessionId) {
                              helloMsg.request_id = config.sessionId;
                          }
                          this.globalDomain = domainSession("global", this.connection, this.logger.subLogger("global-domain"), [
                              "welcome",
                              "token",
                              "authentication-request"
                          ]);
                          sendOptions = { skipPeerId: true };
                          if (this.initialLogin) {
                              sendOptions.retryInterval = this.settings.reconnectInterval;
                              sendOptions.maxRetries = this.settings.reconnectAttempts;
                          }
                          _c.label = 11;
                      case 11:
                          _c.trys.push([11, 19, 20, 21]);
                          welcomeMsg = void 0;
                          _c.label = 12;
                      case 12:
                          return [4, this.globalDomain.send(helloMsg, undefined, sendOptions)];
                      case 13:
                          msg = _c.sent();
                          if (!(msg.type === "authentication-request")) return [3, 16];
                          token = Buffer.from(msg.authentication.token, "base64");
                          if (!(config.flowCallback && config.sessionId)) return [3, 15];
                          _b = helloMsg.authentication;
                          return [4, config.flowCallback(config.sessionId, token)];
                      case 14:
                          _b.token =
                              (_c.sent())
                                  .data
                                  .toString("base64");
                          _c.label = 15;
                      case 15:
                          helloMsg.request_id = config.sessionId;
                          return [3, 12];
                      case 16:
                          if (msg.type === "welcome") {
                              welcomeMsg = msg;
                              return [3, 18];
                          }
                          else if (msg.type === "error") {
                              throw new Error("Authentication failed: " + msg.reason);
                          }
                          else {
                              throw new Error("Unexpected message type during authentication: " + msg.type);
                          }
                      case 17: return [3, 12];
                      case 18:
                          this.initialLogin = false;
                          this.logger.debug("login successful with peerId " + welcomeMsg.peer_id);
                          this.connection.peerId = welcomeMsg.peer_id;
                          this.connection.resolvedIdentity = welcomeMsg.resolved_identity;
                          this.connection.availableDomains = welcomeMsg.available_domains;
                          if (welcomeMsg.options) {
                              this.connection.token = welcomeMsg.options.access_token;
                              this.connection.info = welcomeMsg.options.info;
                          }
                          this.setLoggedIn(true);
                          return [2, welcomeMsg.resolved_identity];
                      case 19:
                          err_1 = _c.sent();
                          this.logger.error("error sending hello message - " + (err_1.message || err_1.msg || err_1.reason || err_1), err_1);
                          throw err_1;
                      case 20:
                          if (config && config.flowCallback && config.sessionId) {
                              config.flowCallback(config.sessionId, null);
                          }
                          return [7];
                      case 21: return [2];
                  }
              });
          });
      };
      GW3ProtocolImpl.prototype.logout = function () {
          return __awaiter$1(this, void 0, void 0, function () {
              var promises;
              return __generator$1(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                          this.logger.debug("logging out...");
                          this.shouldTryLogin = false;
                          if (this.pingTimer) {
                              clearTimeout(this.pingTimer);
                          }
                          promises = this.sessions.map(function (session) {
                              session.leave();
                          });
                          return [4, Promise.all(promises)];
                      case 1:
                          _a.sent();
                          return [2];
                  }
              });
          });
      };
      GW3ProtocolImpl.prototype.loggedIn = function (callback) {
          if (this._isLoggedIn) {
              callback();
          }
          return this.registry.add("onLoggedIn", callback);
      };
      GW3ProtocolImpl.prototype.domain = function (domainName, domainLogger, successMessages, errorMessages) {
          var session = this.sessions.filter(function (s) { return s.domain === domainName; })[0];
          if (!session) {
              session = domainSession(domainName, this.connection, domainLogger, successMessages, errorMessages);
              this.sessions.push(session);
          }
          return session;
      };
      GW3ProtocolImpl.prototype.handleDisconnected = function () {
          var _this = this;
          this.setLoggedIn(false);
          var tryToLogin = this.shouldTryLogin;
          if (tryToLogin && this.initialLogin) {
              if (this.initialLoginAttempts <= 0) {
                  return;
              }
              this.initialLoginAttempts--;
          }
          this.logger.debug("disconnected - will try new login?" + this.shouldTryLogin);
          if (this.shouldTryLogin) {
              if (!this.loginConfig) {
                  throw new Error("no login info");
              }
              this.connection.login(this.loginConfig, true)
                  .catch(function () {
                  setTimeout(_this.handleDisconnected.bind(_this), _this.settings.reconnectInterval || 1000);
              });
          }
      };
      GW3ProtocolImpl.prototype.setLoggedIn = function (value) {
          this._isLoggedIn = value;
          if (this._isLoggedIn) {
              this.registry.execute("onLoggedIn");
          }
      };
      GW3ProtocolImpl.prototype.ping = function () {
          var _this = this;
          if (!this.shouldTryLogin) {
              return;
          }
          if (this._isLoggedIn) {
              this.connection.send({ type: "ping" });
          }
          this.pingTimer = setTimeout(function () {
              _this.ping();
          }, 30 * 1000);
      };
      GW3ProtocolImpl.prototype.authToken = function () {
          var createTokenReq = {
              type: "create-token"
          };
          if (!this.globalDomain) {
              return Promise.reject(new Error("no global domain session"));
          }
          return this.globalDomain.send(createTokenReq)
              .then(function (res) {
              return res.token;
          });
      };
      GW3ProtocolImpl.prototype.getNewGWToken = function () {
          if (typeof window !== undefined) {
              var glue42gd = window.glue42gd;
              if (glue42gd) {
                  return glue42gd.getGWToken();
              }
          }
          return Promise.reject(new Error("not running in GD"));
      };
      return GW3ProtocolImpl;
  }());

  var MessageReplayerImpl = (function () {
      function MessageReplayerImpl(specs) {
          this.specsNames = [];
          this.messages = {};
          this.subs = {};
          this.subsRefCount = {};
          this.specs = {};
          for (var _i = 0, specs_1 = specs; _i < specs_1.length; _i++) {
              var spec = specs_1[_i];
              this.specs[spec.name] = spec;
              this.specsNames.push(spec.name);
          }
      }
      MessageReplayerImpl.prototype.init = function (connection) {
          var _this = this;
          this.connection = connection;
          for (var _i = 0, _a = this.specsNames; _i < _a.length; _i++) {
              var name_1 = _a[_i];
              var _loop_1 = function (type) {
                  var refCount = this_1.subsRefCount[type];
                  if (!refCount) {
                      refCount = 0;
                  }
                  refCount += 1;
                  this_1.subsRefCount[type] = refCount;
                  if (refCount > 1) {
                      return "continue";
                  }
                  var sub = connection.on(type, function (msg) { return _this.processMessage(type, msg); });
                  this_1.subs[type] = sub;
              };
              var this_1 = this;
              for (var _b = 0, _c = this.specs[name_1].types; _b < _c.length; _b++) {
                  var type = _c[_b];
                  _loop_1(type);
              }
          }
      };
      MessageReplayerImpl.prototype.processMessage = function (type, msg) {
          if (this.isDone || !msg) {
              return;
          }
          for (var _i = 0, _a = this.specsNames; _i < _a.length; _i++) {
              var name_2 = _a[_i];
              if (this.specs[name_2].types.indexOf(type) !== -1) {
                  var messages = this.messages[name_2] || [];
                  this.messages[name_2] = messages;
                  messages.push(msg);
              }
          }
      };
      MessageReplayerImpl.prototype.drain = function (name, callback) {
          var _a;
          if (callback) {
              (this.messages[name] || []).forEach(callback);
          }
          delete this.messages[name];
          for (var _i = 0, _b = this.specs[name].types; _i < _b.length; _i++) {
              var type = _b[_i];
              this.subsRefCount[type] -= 1;
              if (this.subsRefCount[type] <= 0) {
                  (_a = this.connection) === null || _a === void 0 ? void 0 : _a.off(this.subs[type]);
                  delete this.subs[type];
                  delete this.subsRefCount[type];
              }
          }
          delete this.specs[name];
          if (!this.specs.length) {
              this.isDone = true;
          }
      };
      return MessageReplayerImpl;
  }());

  var PromisePlus = function (executor, timeoutMilliseconds, timeoutMessage) {
      return new Promise(function (resolve, reject) {
          var timeout = setTimeout(function () {
              var message = timeoutMessage || "Promise timeout hit: " + timeoutMilliseconds;
              reject(message);
          }, timeoutMilliseconds);
          var providedPromise = new Promise(executor);
          providedPromise
              .then(function (result) {
              clearTimeout(timeout);
              resolve(result);
          })
              .catch(function (error) {
              clearTimeout(timeout);
              reject(error);
          });
      });
  };

  var WebPlatformTransport = (function () {
      function WebPlatformTransport(settings, logger, identity) {
          this.settings = settings;
          this.logger = logger;
          this.identity = identity;
          this.parentReady = false;
          this.iAmConnected = false;
          this.rejected = false;
          this.children = [];
          this.parentPingTimeout = 3000;
          this.connectionRequestTimeout = 5000;
          this.defaultTargetString = "*";
          this.registry = lib();
          this.messages = {
              connectionAccepted: { name: "connectionAccepted", handle: this.handleConnectionAccepted.bind(this) },
              connectionRejected: { name: "connectionRejected", handle: this.handleConnectionRejected.bind(this) },
              connectionRequest: { name: "connectionRequest", handle: this.handleConnectionRequest.bind(this) },
              parentReady: { name: "parentReady", handle: this.handleParentReady.bind(this) },
              parentPing: { name: "parentPing", handle: this.handleParentPing.bind(this) },
              platformPing: { name: "platformPing", handle: this.handlePlatformPing.bind(this) },
              platformUnload: { name: "platformUnload", handle: this.handlePlatformUnload.bind(this) },
              platformReady: { name: "platformReady", handle: this.handlePlatformReady.bind(this) },
              clientUnload: { name: "clientUnload", handle: this.handleClientUnload.bind(this) },
              manualUnload: { name: "manualUnload", handle: this.handleManualUnload.bind(this) }
          };
          this.setUpMessageListener();
          this.setUpUnload();
          if (!this.settings.port) {
              this.parent = window.opener || window.top;
              this.parentType = window.opener ? "opener" :
                  window.name.indexOf("#wsp") !== -1 ? "workspace" : "top";
          }
      }
      Object.defineProperty(WebPlatformTransport.prototype, "transportWindowId", {
          get: function () {
              return this.publicWindowId;
          },
          enumerable: true,
          configurable: true
      });
      WebPlatformTransport.prototype.sendObject = function (msg) {
          return __awaiter$1(this, void 0, void 0, function () {
              return __generator$1(this, function (_a) {
                  if (!this.port) {
                      throw new Error("Cannot send message, because the port was not opened yet");
                  }
                  this.port.postMessage(msg);
                  return [2];
              });
          });
      };
      Object.defineProperty(WebPlatformTransport.prototype, "isObjectBasedTransport", {
          get: function () {
              return true;
          },
          enumerable: true,
          configurable: true
      });
      WebPlatformTransport.prototype.onMessage = function (callback) {
          return this.registry.add("onMessage", callback);
      };
      WebPlatformTransport.prototype.send = function () {
          return Promise.reject("not supported");
      };
      WebPlatformTransport.prototype.onConnectedChanged = function (callback) {
          return this.registry.add("onConnectedChanged", callback);
      };
      WebPlatformTransport.prototype.open = function () {
          return __awaiter$1(this, void 0, void 0, function () {
              return __generator$1(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                          this.logger.debug("opening a connection to the web platform gateway.");
                          return [4, this.connect()];
                      case 1:
                          _a.sent();
                          this.notifyStatusChanged(true);
                          return [2];
                  }
              });
          });
      };
      WebPlatformTransport.prototype.close = function () {
          return Promise.resolve();
      };
      WebPlatformTransport.prototype.name = function () {
          return "web-platform";
      };
      WebPlatformTransport.prototype.reconnect = function () {
          return Promise.resolve();
      };
      WebPlatformTransport.prototype.connect = function () {
          return __awaiter$1(this, void 0, void 0, function () {
              var _this = this;
              return __generator$1(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                          if (this.parentReady) {
                              this.logger.debug("cancelling connection attempt, because this client's parent has already given a ready signal");
                              return [2];
                          }
                          if (this.settings.port) {
                              this.logger.debug("opening an internal web platform connection");
                              this.port = this.settings.port;
                              this.publicWindowId = this.settings.windowId;
                              if (this.identity) {
                                  this.identity.windowId = this.publicWindowId;
                              }
                              this.port.onmessage = function (event) { return _this.registry.execute("onMessage", event.data); };
                              this.logger.debug("internal web platform connection completed");
                              return [2];
                          }
                          if (!this.parentType || !this.parent) {
                              throw new Error("Cannot initiate a connection, because there is no opener, no top and no port.");
                          }
                          this.logger.debug("opening a " + (this.parentType === "opener" ? "child" : "grandchild") + " client web platform connection");
                          return [4, this.waitParent(this.parent, this.parentType)];
                      case 1:
                          _a.sent();
                          return [4, this.initiateRemoteConnection(this.parent, this.parentType)];
                      case 2:
                          _a.sent();
                          this.logger.debug("the " + (this.parentType === "opener" ? "child" : "grandchild") + " client is connected");
                          return [2];
                  }
              });
          });
      };
      WebPlatformTransport.prototype.initiateRemoteConnection = function (target, parentType) {
          var _this = this;
          return PromisePlus(function (resolve, reject) {
              _this.connectionResolve = resolve;
              _this.connectionReject = reject;
              _this.myClientId = shortid();
              var bridgeInstanceId = _this.parentType === "workspace" ? window.name.substring(0, window.name.indexOf("#wsp")) : window.name;
              var request = {
                  glue42core: {
                      type: _this.messages.connectionRequest.name,
                      clientId: _this.myClientId,
                      clientType: parentType === "top" || parentType === "workspace" ? "grandChild" : "child",
                      bridgeInstanceId: bridgeInstanceId
                  }
              };
              _this.logger.debug("sending connection request to " + parentType);
              target.postMessage(request, _this.defaultTargetString);
          }, this.connectionRequestTimeout, "The connection to the opener/top window timed out");
      };
      WebPlatformTransport.prototype.waitParent = function (target, parentType) {
          var _this = this;
          return PromisePlus(function (resolve) {
              _this.parentPingResolve = resolve;
              var message = {
                  glue42core: {
                      type: parentType === "opener" ? _this.messages.platformPing.name : _this.messages.parentPing.name
                  }
              };
              _this.logger.debug("checking for " + parentType + " window availability");
              target.postMessage(message, _this.defaultTargetString);
          }, this.parentPingTimeout, "Cannot initiate glue, because this window was not opened or created by a glue client");
      };
      WebPlatformTransport.prototype.setUpMessageListener = function () {
          var _this = this;
          if (this.settings.port) {
              this.logger.debug("skipping generic message listener, because this is an internal client");
              return;
          }
          window.addEventListener("message", function (event) {
              var _a;
              var data = (_a = event.data) === null || _a === void 0 ? void 0 : _a.glue42core;
              if (!data || _this.rejected) {
                  return;
              }
              if (!_this.checkMessageTypeValid(data.type)) {
                  _this.logger.error("cannot handle the incoming glue42 core message, because the type is invalid: " + data.type);
                  return;
              }
              var messageType = data.type;
              _this.logger.debug("received valid glue42core message of type: " + messageType);
              _this.messages[messageType].handle(event);
          });
      };
      WebPlatformTransport.prototype.setUpUnload = function () {
          var _this = this;
          if (this.settings.port) {
              this.logger.debug("skipping unload event listener, because this is an internal client");
              return;
          }
          window.addEventListener("beforeunload", function () {
              var _a, _b;
              var message = {
                  glue42core: {
                      type: _this.messages.clientUnload.name,
                      data: {
                          clientId: _this.myClientId,
                          ownWindowId: (_a = _this.identity) === null || _a === void 0 ? void 0 : _a.windowId
                      }
                  }
              };
              if (_this.parent) {
                  _this.parent.postMessage(message, _this.defaultTargetString);
              }
              (_b = _this.port) === null || _b === void 0 ? void 0 : _b.postMessage(message);
          });
      };
      WebPlatformTransport.prototype.handleParentReady = function () {
          this.logger.debug("handling the ready signal from the parent, by resoling the pending promise.");
          this.parentReady = true;
          if (this.parentPingResolve) {
              this.parentPingResolve();
              delete this.parentPingResolve;
              return;
          }
          this.logger.debug("silently handling the ready signal from the top parent, because there is no defined promise");
      };
      WebPlatformTransport.prototype.handlePlatformReady = function () {
          this.logger.debug("the web platform gave the ready signal");
          this.parentReady = true;
          if (this.parentPingResolve) {
              this.parentPingResolve();
              delete this.parentPingResolve;
              return;
          }
          this.logger.debug("silently handling the ready signal from the top parent, because there is no defined promise");
      };
      WebPlatformTransport.prototype.handleConnectionAccepted = function (event) {
          var _a;
          var data = (_a = event.data) === null || _a === void 0 ? void 0 : _a.glue42core;
          if (this.myClientId === data.clientId) {
              return this.handleAcceptanceOfMyRequest(data);
          }
          return this.handleAcceptanceOfGrandChildRequest(data, event);
      };
      WebPlatformTransport.prototype.handleAcceptanceOfMyRequest = function (data) {
          var _this = this;
          this.logger.debug("handling a connection accepted signal targeted at me.");
          if (!data.port) {
              this.logger.error("cannot set up my connection, because I was not provided with a port");
              return;
          }
          this.publicWindowId = this.parentType === "opener" ? window.name :
              this.parentType === "top" ? data.parentWindowId :
                  window.name.substring(0, window.name.indexOf("#wsp"));
          if (this.identity && this.parentType !== "top") {
              this.identity.windowId = this.publicWindowId;
          }
          if (this.identity && data.appName) {
              this.identity.application = data.appName;
              this.identity.applicationName = data.appName;
          }
          this.port = data.port;
          this.port.onmessage = function (e) { return _this.registry.execute("onMessage", e.data); };
          if (this.connectionResolve) {
              this.logger.debug("my connection is set up, calling the connection resolve.");
              this.connectionResolve();
              delete this.connectionResolve;
              return;
          }
          this.logger.error("unable to call the connection resolve, because no connection promise was found");
      };
      WebPlatformTransport.prototype.handleAcceptanceOfGrandChildRequest = function (data, event) {
          this.logger.debug("handling a connection accepted signal targeted at a grandchild: " + data.clientId);
          var child = this.children.find(function (c) { return c.grandChildId === data.clientId; });
          if (!child) {
              this.logger.error("cannot handle connection accepted for grandchild: " + data.clientId + ", because there is no grandchild with this id");
              return;
          }
          child.connected = true;
          this.logger.debug("the grandchild connection for " + data.clientId + " is set up, forwarding the success message and the gateway port");
          data.parentWindowId = this.publicWindowId;
          child.source.postMessage(event.data, child.origin, [data.port]);
          return;
      };
      WebPlatformTransport.prototype.handleConnectionRejected = function () {
          this.logger.debug("handling a connection rejection. Most likely the reason is that this window was not created by a glue API call");
          if (this.connectionReject) {
              this.connectionReject("The platform connection was rejected. Most likely because this window was not created by a glue API call");
              delete this.connectionReject;
          }
      };
      WebPlatformTransport.prototype.handleConnectionRequest = function (event) {
          var source = event.source;
          var data = event.data.glue42core;
          if (!data.clientType || data.clientType !== "grandChild") {
              return this.rejectConnectionRequest(source, event.origin, "rejecting a connection request, because the source was not opened by a glue API call");
          }
          if (!data.clientId) {
              return this.rejectConnectionRequest(source, event.origin, "rejecting a connection request, because the source did not provide a valid id");
          }
          if (this.parentType !== "opener" || !this.parent) {
              return this.rejectConnectionRequest(source, event.origin, "Cannot forward the connection request, because no direct connection to the platform was found");
          }
          this.logger.debug("handling a connection request for a grandchild: " + data.clientId);
          this.children.push({ grandChildId: data.clientId, source: source, connected: false, origin: event.origin });
          this.logger.debug("grandchild: " + data.clientId + " is prepared, forwarding connection request to the platform");
          this.parent.postMessage(event.data, this.defaultTargetString);
      };
      WebPlatformTransport.prototype.handleParentPing = function (event) {
          if (!this.parentReady) {
              this.logger.debug("my parent is not ready, I am ignoring the parent ping");
              return;
          }
          if (!this.iAmConnected) {
              this.logger.debug("i am not fully connected yet, I am ignoring the parent ping");
              return;
          }
          var message = {
              glue42core: {
                  type: this.messages.parentReady.name
              }
          };
          var source = event.source;
          this.logger.debug("responding to a parent ping with a ready message");
          source.postMessage(message, event.origin);
      };
      WebPlatformTransport.prototype.handlePlatformUnload = function (event) {
          this.logger.debug("detected a web platform unload");
          this.parentReady = false;
          if (this.children.length) {
              this.logger.debug("forwarding the platform unload to all known children and starting platform discovery polling");
              this.children.forEach(function (child) { return child.source.postMessage(event.data, child.origin); });
          }
          this.notifyStatusChanged(false, "Gateway unloaded");
      };
      WebPlatformTransport.prototype.handleManualUnload = function () {
          var _a, _b;
          var message = {
              glue42core: {
                  type: this.messages.clientUnload.name,
                  data: {
                      clientId: this.myClientId,
                      ownWindowId: (_a = this.identity) === null || _a === void 0 ? void 0 : _a.windowId
                  }
              }
          };
          if (this.parent) {
              this.parent.postMessage(message, this.defaultTargetString);
          }
          (_b = this.port) === null || _b === void 0 ? void 0 : _b.postMessage(message);
      };
      WebPlatformTransport.prototype.handleClientUnload = function (event) {
          var data = event.data.glue42core;
          var clientId = data === null || data === void 0 ? void 0 : data.data.clientId;
          if (!clientId) {
              this.logger.warn("cannot process grand child unload, because the provided id was not valid");
              return;
          }
          var foundChild = this.children.find(function (child) { return child.grandChildId === clientId; });
          if (!foundChild) {
              this.logger.warn("cannot process grand child unload, because this client is unaware of this grandchild");
              return;
          }
          this.logger.debug("handling grandchild unload for id: " + clientId);
          this.children = this.children.filter(function (child) { return child.grandChildId !== clientId; });
      };
      WebPlatformTransport.prototype.handlePlatformPing = function () {
          this.logger.error("cannot handle platform ping, because this is not a platform calls handling component");
      };
      WebPlatformTransport.prototype.notifyStatusChanged = function (status, reason) {
          this.iAmConnected = status;
          this.registry.execute("onConnectedChanged", status, reason);
      };
      WebPlatformTransport.prototype.checkMessageTypeValid = function (typeToValidate) {
          return typeof typeToValidate === "string" && !!this.messages[typeToValidate];
      };
      WebPlatformTransport.prototype.rejectConnectionRequest = function (source, origin, reason) {
          this.rejected = true;
          this.logger.error(reason);
          var rejection = {
              glue42core: {
                  type: this.messages.connectionRejected.name
              }
          };
          source.postMessage(rejection, origin);
      };
      return WebPlatformTransport;
  }());

  var Connection = (function () {
      function Connection(settings, logger) {
          this.settings = settings;
          this.logger = logger;
          this.messageHandlers = {};
          this.ids = 1;
          this.registry = lib();
          this._connected = false;
          this.isTrace = false;
          settings = settings || {};
          settings.reconnectAttempts = settings.reconnectAttempts || 10;
          settings.reconnectInterval = settings.reconnectInterval || 1000;
          if (settings.inproc) {
              this.transport = new InProcTransport(settings.inproc, logger.subLogger("inMemory"));
          }
          else if (settings.sharedWorker) {
              this.transport = new SharedWorkerTransport(settings.sharedWorker, logger.subLogger("shared-worker"));
          }
          else if (settings.webPlatform) {
              this.transport = new WebPlatformTransport(settings.webPlatform, logger.subLogger("web-platform"), settings.identity);
          }
          else if (settings.ws !== undefined) {
              this.transport = new WS(settings, logger.subLogger("ws"));
          }
          else {
              throw new Error("No connection information specified");
          }
          this.isTrace = logger.canPublish("trace");
          logger.debug("starting with " + this.transport.name() + " transport");
          this.protocol = new GW3ProtocolImpl(this, settings, logger.subLogger("protocol"));
          this.transport.onConnectedChanged(this.handleConnectionChanged.bind(this));
          this.transport.onMessage(this.handleTransportMessage.bind(this));
          if (settings.replaySpecs && settings.replaySpecs.length) {
              this.replayer = new MessageReplayerImpl(settings.replaySpecs);
              this.replayer.init(this);
          }
      }
      Object.defineProperty(Connection.prototype, "protocolVersion", {
          get: function () {
              var _a;
              return (_a = this.protocol) === null || _a === void 0 ? void 0 : _a.protocolVersion;
          },
          enumerable: true,
          configurable: true
      });
      Connection.prototype.send = function (message, options) {
          if (this.transport.sendObject &&
              this.transport.isObjectBasedTransport) {
              var msg = this.protocol.createObjectMessage(message);
              if (this.isTrace) {
                  this.logger.trace(">> " + JSON.stringify(msg));
              }
              return this.transport.sendObject(msg, options);
          }
          else {
              var strMessage = this.protocol.createStringMessage(message);
              if (this.isTrace) {
                  this.logger.trace(">> " + strMessage);
              }
              return this.transport.send(strMessage, options);
          }
      };
      Connection.prototype.on = function (type, messageHandler) {
          type = type.toLowerCase();
          if (this.messageHandlers[type] === undefined) {
              this.messageHandlers[type] = {};
          }
          var id = this.ids++;
          this.messageHandlers[type][id] = messageHandler;
          return {
              type: type,
              id: id,
          };
      };
      Connection.prototype.off = function (info) {
          delete this.messageHandlers[info.type.toLowerCase()][info.id];
      };
      Object.defineProperty(Connection.prototype, "isConnected", {
          get: function () {
              return this.protocol.isLoggedIn;
          },
          enumerable: true,
          configurable: true
      });
      Connection.prototype.connected = function (callback) {
          var _this = this;
          return this.protocol.loggedIn(function () {
              callback(_this.settings.ws || _this.settings.sharedWorker || "");
          });
      };
      Connection.prototype.disconnected = function (callback) {
          return this.registry.add("disconnected", callback);
      };
      Connection.prototype.login = function (authRequest, reconnect) {
          return __awaiter$1(this, void 0, void 0, function () {
              var identity;
              return __generator$1(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.transport.open()];
                      case 1:
                          _a.sent();
                          timer("connection").mark("transport-opened");
                          identity = this.protocol.login(authRequest, reconnect);
                          timer("connection").mark("protocol-logged-in");
                          return [2, identity];
                  }
              });
          });
      };
      Connection.prototype.logout = function () {
          return __awaiter$1(this, void 0, void 0, function () {
              return __generator$1(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.protocol.logout()];
                      case 1:
                          _a.sent();
                          return [4, this.transport.close()];
                      case 2:
                          _a.sent();
                          return [2];
                  }
              });
          });
      };
      Connection.prototype.loggedIn = function (callback) {
          return this.protocol.loggedIn(callback);
      };
      Connection.prototype.domain = function (domain, successMessages, errorMessages) {
          return this.protocol.domain(domain, this.logger.subLogger("domain=" + domain), successMessages, errorMessages);
      };
      Connection.prototype.authToken = function () {
          return this.protocol.authToken();
      };
      Connection.prototype.reconnect = function () {
          return this.transport.reconnect();
      };
      Connection.prototype.distributeMessage = function (message, type) {
          var _this = this;
          var handlers = this.messageHandlers[type.toLowerCase()];
          if (handlers !== undefined) {
              Object.keys(handlers).forEach(function (handlerId) {
                  var handler = handlers[handlerId];
                  if (handler !== undefined) {
                      try {
                          handler(message);
                      }
                      catch (error) {
                          try {
                              _this.logger.error("Message handler failed with " + error.stack, error);
                          }
                          catch (loggerError) {
                              console.log("Message handler failed", error);
                          }
                      }
                  }
              });
          }
      };
      Connection.prototype.handleConnectionChanged = function (connected) {
          if (this._connected === connected) {
              return;
          }
          this._connected = connected;
          if (connected) {
              this.registry.execute("connected");
          }
          else {
              this.registry.execute("disconnected");
          }
      };
      Connection.prototype.handleTransportMessage = function (msg) {
          var msgObj;
          if (typeof msg === "string") {
              msgObj = this.protocol.processStringMessage(msg);
          }
          else {
              msgObj = this.protocol.processObjectMessage(msg);
          }
          if (this.isTrace) {
              this.logger.trace("<< " + JSON.stringify(msgObj));
          }
          this.distributeMessage(msgObj.msg, msgObj.msgType);
      };
      return Connection;
  }());

  var order = ["trace", "debug", "info", "warn", "error", "off"];
  var Logger = (function () {
      function Logger(name, parent, logFn) {
          this.name = name;
          this.parent = parent;
          this.subLoggers = [];
          this.logFn = console;
          this.customLogFn = false;
          this.name = name;
          if (parent) {
              this.path = parent.path + "." + name;
          }
          else {
              this.path = name;
          }
          this.loggerFullName = "[" + this.path + "]";
          this.includeTimeAndLevel = !logFn;
          if (logFn) {
              this.logFn = logFn;
              this.customLogFn = true;
          }
      }
      Logger.prototype.subLogger = function (name) {
          var existingSub = this.subLoggers.filter(function (subLogger) {
              return subLogger.name === name;
          })[0];
          if (existingSub !== undefined) {
              return existingSub;
          }
          Object.keys(this).forEach(function (key) {
              if (key === name) {
                  throw new Error("This sub logger name is not allowed.");
              }
          });
          var sub = new Logger(name, this, this.customLogFn ? this.logFn : undefined);
          this.subLoggers.push(sub);
          return sub;
      };
      Logger.prototype.publishLevel = function (level) {
          var _a;
          if (level) {
              this._publishLevel = level;
          }
          return this._publishLevel || ((_a = this.parent) === null || _a === void 0 ? void 0 : _a.publishLevel());
      };
      Logger.prototype.consoleLevel = function (level) {
          var _a;
          if (level) {
              this._consoleLevel = level;
          }
          return this._consoleLevel || ((_a = this.parent) === null || _a === void 0 ? void 0 : _a.consoleLevel());
      };
      Logger.prototype.log = function (message, level, error) {
          this.publishMessage(level || "info", message, error);
      };
      Logger.prototype.trace = function (message) {
          this.log(message, "trace");
      };
      Logger.prototype.debug = function (message) {
          this.log(message, "debug");
      };
      Logger.prototype.info = function (message) {
          this.log(message, "info");
      };
      Logger.prototype.warn = function (message) {
          this.log(message, "warn");
      };
      Logger.prototype.error = function (message, err) {
          this.log(message, "error");
      };
      Logger.prototype.canPublish = function (level, compareWith) {
          var levelIdx = order.indexOf(level);
          var restrictionIdx = order.indexOf(compareWith || this.consoleLevel() || "trace");
          return levelIdx >= restrictionIdx;
      };
      Logger.prototype.publishMessage = function (level, message, error) {
          var loggerName = this.loggerFullName;
          if (level === "error" && !error) {
              var e = new Error();
              if (e.stack) {
                  message =
                      message +
                          "\n" +
                          e.stack
                              .split("\n")
                              .slice(3)
                              .join("\n");
              }
          }
          if (this.canPublish(level, this.publishLevel())) {
              var interop = Logger.Interop;
              if (interop) {
                  try {
                      if (interop.methods({ name: Logger.InteropMethodName }).length > 0) {
                          interop.invoke(Logger.InteropMethodName, {
                              msg: "" + message,
                              logger: loggerName,
                              level: level
                          });
                      }
                  }
                  catch (_a) {
                  }
              }
          }
          if (this.canPublish(level)) {
              var prefix = "";
              if (this.includeTimeAndLevel) {
                  var date = new Date();
                  var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + ":" + date.getMilliseconds();
                  prefix = "[" + time + "] [" + level + "] ";
              }
              var toPrint = "" + prefix + loggerName + ": " + message;
              switch (level) {
                  case "trace":
                      this.logFn.debug(toPrint);
                      break;
                  case "debug":
                      if (this.logFn.debug) {
                          this.logFn.debug(toPrint);
                      }
                      else {
                          this.logFn.log(toPrint);
                      }
                      break;
                  case "info":
                      this.logFn.info(toPrint);
                      break;
                  case "warn":
                      this.logFn.warn(toPrint);
                      break;
                  case "error":
                      this.logFn.error(toPrint, error);
                      break;
              }
          }
      };
      Logger.InteropMethodName = "T42.AppLogger.Log";
      return Logger;
  }());

  var GW_MESSAGE_CREATE_CONTEXT = "create-context";
  var GW_MESSAGE_ACTIVITY_CREATED = "created";
  var GW_MESSAGE_ACTIVITY_DESTROYED = "destroyed";
  var GW_MESSAGE_CONTEXT_CREATED = "context-created";
  var GW_MESSAGE_CONTEXT_ADDED = "context-added";
  var GW_MESSAGE_SUBSCRIBE_CONTEXT = "subscribe-context";
  var GW_MESSAGE_SUBSCRIBED_CONTEXT = "subscribed-context";
  var GW_MESSAGE_UNSUBSCRIBE_CONTEXT = "unsubscribe-context";
  var GW_MESSAGE_DESTROY_CONTEXT = "destroy-context";
  var GW_MESSAGE_CONTEXT_DESTROYED = "context-destroyed";
  var GW_MESSAGE_UPDATE_CONTEXT = "update-context";
  var GW_MESSAGE_CONTEXT_UPDATED = "context-updated";
  var GW_MESSAGE_JOINED_ACTIVITY = "joined";

  var ContextMessageReplaySpec = {
      get name() {
          return "context";
      },
      get types() {
          return [
              GW_MESSAGE_CREATE_CONTEXT,
              GW_MESSAGE_ACTIVITY_CREATED,
              GW_MESSAGE_ACTIVITY_DESTROYED,
              GW_MESSAGE_CONTEXT_CREATED,
              GW_MESSAGE_CONTEXT_ADDED,
              GW_MESSAGE_SUBSCRIBE_CONTEXT,
              GW_MESSAGE_SUBSCRIBED_CONTEXT,
              GW_MESSAGE_UNSUBSCRIBE_CONTEXT,
              GW_MESSAGE_DESTROY_CONTEXT,
              GW_MESSAGE_CONTEXT_DESTROYED,
              GW_MESSAGE_UPDATE_CONTEXT,
              GW_MESSAGE_CONTEXT_UPDATED,
              GW_MESSAGE_JOINED_ACTIVITY
          ];
      }
  };

  var version = "5.4.9";

  function prepareConfig (configuration, ext, glue42gd) {
      var _a, _b, _c, _d, _e;
      var nodeStartingContext;
      if (Utils.isNode()) {
          var startingContextString = process.env._GD_STARTING_CONTEXT_;
          if (startingContextString) {
              try {
                  nodeStartingContext = JSON.parse(startingContextString);
              }
              catch (_f) {
              }
          }
      }
      function getConnection() {
          var _a, _b, _c, _d, _e;
          var gwConfig = configuration.gateway;
          var protocolVersion = (_a = gwConfig === null || gwConfig === void 0 ? void 0 : gwConfig.protocolVersion) !== null && _a !== void 0 ? _a : 3;
          var reconnectInterval = gwConfig === null || gwConfig === void 0 ? void 0 : gwConfig.reconnectInterval;
          var reconnectAttempts = gwConfig === null || gwConfig === void 0 ? void 0 : gwConfig.reconnectAttempts;
          var defaultWs = "ws://localhost:8385";
          var ws = gwConfig === null || gwConfig === void 0 ? void 0 : gwConfig.ws;
          var sharedWorker = gwConfig === null || gwConfig === void 0 ? void 0 : gwConfig.sharedWorker;
          var inproc = gwConfig === null || gwConfig === void 0 ? void 0 : gwConfig.inproc;
          var webPlatform = (_b = gwConfig === null || gwConfig === void 0 ? void 0 : gwConfig.webPlatform) !== null && _b !== void 0 ? _b : undefined;
          if (glue42gd) {
              ws = glue42gd.gwURL;
          }
          if (Utils.isNode() && nodeStartingContext && nodeStartingContext.gwURL) {
              ws = nodeStartingContext.gwURL;
          }
          if (!ws && !sharedWorker && !inproc) {
              ws = defaultWs;
          }
          var instanceId;
          var windowId;
          var pid;
          var environment;
          var region;
          var appName = getApplication();
          var uniqueAppName = appName;
          if (typeof glue42gd !== "undefined") {
              windowId = glue42gd.windowId;
              pid = glue42gd.pid;
              if (glue42gd.env) {
                  environment = glue42gd.env.env;
                  region = glue42gd.env.region;
              }
              uniqueAppName = (_c = glue42gd.application) !== null && _c !== void 0 ? _c : "glue-app";
              instanceId = glue42gd.appInstanceId;
          }
          else if (Utils.isNode()) {
              pid = process.pid;
              if (nodeStartingContext) {
                  environment = nodeStartingContext.env;
                  region = nodeStartingContext.region;
                  instanceId = nodeStartingContext.instanceId;
              }
          }
          else ;
          var replaySpecs = (_e = (_d = configuration.gateway) === null || _d === void 0 ? void 0 : _d.replaySpecs) !== null && _e !== void 0 ? _e : [];
          replaySpecs.push(ContextMessageReplaySpec);
          return {
              identity: {
                  application: uniqueAppName,
                  applicationName: appName,
                  windowId: windowId,
                  instance: instanceId,
                  process: pid,
                  region: region,
                  environment: environment,
                  api: ext.version || version
              },
              reconnectInterval: reconnectInterval,
              ws: ws,
              sharedWorker: sharedWorker,
              webPlatform: webPlatform,
              inproc: inproc,
              protocolVersion: protocolVersion,
              reconnectAttempts: reconnectAttempts,
              replaySpecs: replaySpecs,
          };
      }
      function getApplication() {
          if (configuration.application) {
              return configuration.application;
          }
          if (glue42gd) {
              return glue42gd.applicationName;
          }
          var uid = shortid();
          if (Utils.isNode()) {
              if (nodeStartingContext) {
                  return nodeStartingContext.applicationConfig.name;
              }
              return "NodeJS" + uid;
          }
          if (typeof window !== "undefined" && typeof document !== "undefined") {
              return document.title + (" (" + uid + ")");
          }
          return uid;
      }
      function getAuth() {
          var _a, _b, _c;
          if (typeof configuration.auth === "string") {
              return {
                  token: configuration.auth
              };
          }
          if (configuration.auth) {
              return configuration.auth;
          }
          if (Utils.isNode() && nodeStartingContext && nodeStartingContext.gwToken) {
              return {
                  gatewayToken: nodeStartingContext.gwToken
              };
          }
          if (((_a = configuration.gateway) === null || _a === void 0 ? void 0 : _a.webPlatform) || ((_b = configuration.gateway) === null || _b === void 0 ? void 0 : _b.inproc) || ((_c = configuration.gateway) === null || _c === void 0 ? void 0 : _c.sharedWorker)) {
              return {
                  username: "glue42", password: "glue42"
              };
          }
      }
      function getLogger() {
          var _a, _b;
          var config = configuration.logger;
          var defaultLevel = "warn";
          if (!config) {
              config = defaultLevel;
          }
          var gdConsoleLevel;
          if (glue42gd) {
              gdConsoleLevel = glue42gd.consoleLogLevel;
          }
          if (typeof config === "string") {
              return { console: gdConsoleLevel !== null && gdConsoleLevel !== void 0 ? gdConsoleLevel : config, publish: defaultLevel };
          }
          return {
              console: (_a = gdConsoleLevel !== null && gdConsoleLevel !== void 0 ? gdConsoleLevel : config.console) !== null && _a !== void 0 ? _a : defaultLevel,
              publish: (_b = config.publish) !== null && _b !== void 0 ? _b : defaultLevel
          };
      }
      var connection = getConnection();
      var application = getApplication();
      if (typeof window !== "undefined") {
          var windowAsAny = window;
          var containerApplication = windowAsAny.htmlContainer ?
              windowAsAny.htmlContainer.containerName + "." + windowAsAny.htmlContainer.application : (_a = windowAsAny === null || windowAsAny === void 0 ? void 0 : windowAsAny.glue42gd) === null || _a === void 0 ? void 0 : _a.application;
          if (containerApplication) {
              application = containerApplication;
          }
      }
      return {
          bus: (_b = configuration.bus) !== null && _b !== void 0 ? _b : false,
          application: application,
          auth: getAuth(),
          logger: getLogger(),
          connection: connection,
          metrics: (_c = configuration.metrics) !== null && _c !== void 0 ? _c : true,
          contexts: (_d = configuration.contexts) !== null && _d !== void 0 ? _d : true,
          version: ext.version || version,
          libs: (_e = ext.libs) !== null && _e !== void 0 ? _e : [],
          customLogger: configuration.customLogger
      };
  }

  var GW3ContextData = (function () {
      function GW3ContextData(contextId, name, isAnnounced, activityId) {
          this.updateCallbacks = {};
          this.contextId = contextId;
          this.name = name;
          this.isAnnounced = isAnnounced;
          this.activityId = activityId;
          this.context = {};
      }
      GW3ContextData.prototype.hasCallbacks = function () {
          return Object.keys(this.updateCallbacks).length > 0;
      };
      GW3ContextData.prototype.getState = function () {
          if (this.isAnnounced && this.hasCallbacks()) {
              return 3;
          }
          if (this.isAnnounced) {
              return 2;
          }
          if (this.hasCallbacks()) {
              return 1;
          }
          return 0;
      };
      return GW3ContextData;
  }());

  function applyContextDelta(context, delta, logger) {
      try {
          if (logger === null || logger === void 0 ? void 0 : logger.canPublish("trace")) {
              logger === null || logger === void 0 ? void 0 : logger.trace("applying context delta " + JSON.stringify(delta) + " on context " + JSON.stringify(context));
          }
          if (!delta) {
              return context;
          }
          if (delta.reset) {
              context = __assign$1({}, delta.reset);
              return context;
          }
          context = deepClone(context, undefined);
          if (delta.commands) {
              for (var _i = 0, _a = delta.commands; _i < _a.length; _i++) {
                  var command = _a[_i];
                  if (command.type === "remove") {
                      deletePath(context, command.path);
                  }
                  else if (command.type === "set") {
                      setValueToPath(context, command.value, command.path);
                  }
              }
              return context;
          }
          var added_1 = delta.added;
          var updated_1 = delta.updated;
          var removed = delta.removed;
          if (added_1) {
              Object.keys(added_1).forEach(function (key) {
                  context[key] = added_1[key];
              });
          }
          if (updated_1) {
              Object.keys(updated_1).forEach(function (key) {
                  mergeObjectsProperties(key, context, updated_1);
              });
          }
          if (removed) {
              removed.forEach(function (key) {
                  delete context[key];
              });
          }
          return context;
      }
      catch (e) {
          logger === null || logger === void 0 ? void 0 : logger.error("error applying context delta " + JSON.stringify(delta) + " on context " + JSON.stringify(context), e);
          return context;
      }
  }
  function deepClone(obj, hash) {
      hash = hash || new WeakMap();
      if (Object(obj) !== obj) {
          return obj;
      }
      if (obj instanceof Set) {
          return new Set(obj);
      }
      if (hash.has(obj)) {
          return hash.get(obj);
      }
      var result = obj instanceof Date ? new Date(obj)
          : obj instanceof RegExp ? new RegExp(obj.source, obj.flags)
              : obj.constructor ? new obj.constructor()
                  : Object.create(null);
      hash.set(obj, result);
      if (obj instanceof Map) {
          Array.from(obj, function (_a) {
              var key = _a[0], val = _a[1];
              return result.set(key, deepClone(val, hash));
          });
      }
      return Object.assign.apply(Object, __spreadArrays$1([result], Object.keys(obj).map(function (key) {
          var _a;
          return (_a = {}, _a[key] = deepClone(obj[key], hash), _a);
      })));
  }
  var mergeObjectsProperties = function (key, what, withWhat) {
      var right = withWhat[key];
      if (right === undefined) {
          return what;
      }
      var left = what[key];
      if (!left || !right) {
          what[key] = right;
          return what;
      }
      if (typeof left === "string" ||
          typeof left === "number" ||
          typeof left === "boolean" ||
          typeof right === "string" ||
          typeof right === "number" ||
          typeof right === "boolean" ||
          Array.isArray(left) ||
          Array.isArray(right)) {
          what[key] = right;
          return what;
      }
      what[key] = Object.assign({}, left, right);
      return what;
  };
  function deepEqual(x, y) {
      if (x === y) {
          return true;
      }
      if (!(x instanceof Object) || !(y instanceof Object)) {
          return false;
      }
      if (x.constructor !== y.constructor) {
          return false;
      }
      for (var p in x) {
          if (!x.hasOwnProperty(p)) {
              continue;
          }
          if (!y.hasOwnProperty(p)) {
              return false;
          }
          if (x[p] === y[p]) {
              continue;
          }
          if (typeof (x[p]) !== "object") {
              return false;
          }
          if (!deepEqual(x[p], y[p])) {
              return false;
          }
      }
      for (var p in y) {
          if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) {
              return false;
          }
      }
      return true;
  }
  function setValueToPath(obj, value, path) {
      var pathArr = path.split(".");
      var i;
      for (i = 0; i < pathArr.length - 1; i++) {
          if (!obj[pathArr[i]]) {
              obj[pathArr[i]] = {};
          }
          if (typeof obj[pathArr[i]] !== "object") {
              obj[pathArr[i]] = {};
          }
          obj = obj[pathArr[i]];
      }
      obj[pathArr[i]] = value;
  }
  function isSubset(superObj, subObj) {
      return Object.keys(subObj).every(function (ele) {
          if (typeof subObj[ele] === "object") {
              return isSubset((superObj === null || superObj === void 0 ? void 0 : superObj[ele]) || {}, subObj[ele] || {});
          }
          return subObj[ele] === (superObj === null || superObj === void 0 ? void 0 : superObj[ele]);
      });
  }
  function deletePath(obj, path) {
      var pathArr = path.split(".");
      var i;
      for (i = 0; i < pathArr.length - 1; i++) {
          if (!obj[pathArr[i]]) {
              return;
          }
          obj = obj[pathArr[i]];
      }
      delete obj[pathArr[i]];
  }

  var GW3Bridge = (function () {
      function GW3Bridge(config) {
          var _this = this;
          var _a;
          this._contextNameToData = {};
          this._gw3Subscriptions = [];
          this._nextCallbackSubscriptionNumber = 0;
          this._contextNameToId = {};
          this._contextIdToName = {};
          this._protocolVersion = undefined;
          this._connection = config.connection;
          this._logger = config.logger;
          this._gw3Session = this._connection.domain("global", [
              GW_MESSAGE_CONTEXT_CREATED,
              GW_MESSAGE_SUBSCRIBED_CONTEXT,
              GW_MESSAGE_CONTEXT_DESTROYED,
              GW_MESSAGE_CONTEXT_UPDATED,
          ]);
          this.subscribeToContextCreatedMessages();
          this.subscribeToContextUpdatedMessages();
          this.subscribeToContextDestroyedMessages();
          (_a = this._connection.replayer) === null || _a === void 0 ? void 0 : _a.drain(ContextMessageReplaySpec.name, function (message) {
              var type = message.type;
              if (!type) {
                  return;
              }
              if (type === GW_MESSAGE_CONTEXT_CREATED ||
                  type === GW_MESSAGE_CONTEXT_ADDED ||
                  type === GW_MESSAGE_ACTIVITY_CREATED) {
                  _this.handleContextCreatedMessage(message);
              }
              else if (type === GW_MESSAGE_SUBSCRIBED_CONTEXT ||
                  type === GW_MESSAGE_CONTEXT_UPDATED ||
                  type === GW_MESSAGE_JOINED_ACTIVITY) {
                  _this.handleContextUpdatedMessage(message);
              }
              else if (type === GW_MESSAGE_CONTEXT_DESTROYED ||
                  type === GW_MESSAGE_ACTIVITY_DESTROYED) {
                  _this.handleContextDestroyedMessage(message);
              }
          });
      }
      Object.defineProperty(GW3Bridge.prototype, "protocolVersion", {
          get: function () {
              var _a;
              if (!this._protocolVersion) {
                  var contextsDomainInfo = this._connection.availableDomains.find(function (d) { return d.uri === "context"; });
                  this._protocolVersion = (_a = contextsDomainInfo === null || contextsDomainInfo === void 0 ? void 0 : contextsDomainInfo.version) !== null && _a !== void 0 ? _a : 1;
              }
              return this._protocolVersion;
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(GW3Bridge.prototype, "setPathSupported", {
          get: function () {
              return this.protocolVersion >= 2;
          },
          enumerable: true,
          configurable: true
      });
      GW3Bridge.prototype.dispose = function () {
          for (var _i = 0, _a = this._gw3Subscriptions; _i < _a.length; _i++) {
              var sub = _a[_i];
              this._connection.off(sub);
          }
          this._gw3Subscriptions.length = 0;
          for (var contextName in this._contextNameToData) {
              if (this._contextNameToId.hasOwnProperty(contextName)) {
                  delete this._contextNameToData[contextName];
              }
          }
      };
      GW3Bridge.prototype.createContext = function (name, data) {
          var _this = this;
          return this._gw3Session
              .send({
              type: GW_MESSAGE_CREATE_CONTEXT,
              domain: "global",
              name: name,
              data: data,
              lifetime: "retained",
          })
              .then(function (createContextMsg) {
              _this._contextNameToId[name] = createContextMsg.context_id;
              _this._contextIdToName[createContextMsg.context_id] = name;
              var contextData = _this._contextNameToData[name] || new GW3ContextData(createContextMsg.context_id, name, true, undefined);
              contextData.isAnnounced = true;
              contextData.name = name;
              contextData.contextId = createContextMsg.context_id;
              contextData.context = data;
              _this._contextNameToData[name] = contextData;
              return createContextMsg.context_id;
          });
      };
      GW3Bridge.prototype.all = function () {
          var _this = this;
          return Object.keys(this._contextNameToData)
              .filter(function (name) { return _this._contextNameToData[name].isAnnounced; });
      };
      GW3Bridge.prototype.update = function (name, delta) {
          var _a;
          return __awaiter$1(this, void 0, void 0, function () {
              var contextData, currentContext, calculatedDelta;
              var _this = this;
              return __generator$1(this, function (_b) {
                  switch (_b.label) {
                      case 0:
                          contextData = this._contextNameToData[name];
                          if (!contextData || !contextData.isAnnounced) {
                              return [2, this.createContext(name, delta)];
                          }
                          currentContext = contextData.context;
                          if (!!contextData.hasCallbacks()) return [3, 2];
                          return [4, this.get(contextData.name)];
                      case 1:
                          currentContext = _b.sent();
                          _b.label = 2;
                      case 2:
                          calculatedDelta = this.protocolVersion === 2 ?
                              this.calculateContextDeltaV2(currentContext, delta) :
                              this.calculateContextDeltaV1(currentContext, delta);
                          if (!Object.keys(calculatedDelta.added).length
                              && !Object.keys(calculatedDelta.updated).length
                              && !calculatedDelta.removed.length
                              && !((_a = calculatedDelta.commands) === null || _a === void 0 ? void 0 : _a.length)) {
                              return [2, Promise.resolve()];
                          }
                          return [2, this._gw3Session
                                  .send({
                                  type: GW_MESSAGE_UPDATE_CONTEXT,
                                  domain: "global",
                                  context_id: contextData.contextId,
                                  delta: calculatedDelta,
                              }, {}, { skipPeerId: false })
                                  .then(function (gwResponse) {
                                  _this.handleUpdated(contextData, calculatedDelta, {
                                      updaterId: gwResponse.peer_id
                                  });
                              })];
                  }
              });
          });
      };
      GW3Bridge.prototype.set = function (name, data) {
          var _this = this;
          var contextData = this._contextNameToData[name];
          if (!contextData || !contextData.isAnnounced) {
              return this.createContext(name, data);
          }
          return this._gw3Session
              .send({
              type: GW_MESSAGE_UPDATE_CONTEXT,
              domain: "global",
              context_id: contextData.contextId,
              delta: { reset: data },
          }, {}, { skipPeerId: false })
              .then(function (gwResponse) {
              _this.handleUpdated(contextData, { reset: data, added: {}, removed: [], updated: {} }, { updaterId: gwResponse.peer_id });
          });
      };
      GW3Bridge.prototype.setPath = function (name, path, value) {
          if (!this.setPathSupported) {
              return Promise.reject("glue.contexts.setPath operation is not supported, use Glue42 3.10 or later");
          }
          return this.setPaths(name, [{ path: path, value: value }]);
      };
      GW3Bridge.prototype.setPaths = function (name, pathValues) {
          var _this = this;
          if (!this.setPathSupported) {
              return Promise.reject("glue.contexts.setPaths operation is not supported, use Glue42 3.10 or later");
          }
          var contextData = this._contextNameToData[name];
          if (!contextData || !contextData.isAnnounced) {
              var obj = {};
              for (var _i = 0, pathValues_1 = pathValues; _i < pathValues_1.length; _i++) {
                  var pathValue = pathValues_1[_i];
                  setValueToPath(obj, pathValue.value, pathValue.path);
              }
              return this.createContext(name, obj);
          }
          var commands = [];
          for (var _a = 0, pathValues_2 = pathValues; _a < pathValues_2.length; _a++) {
              var pathValue = pathValues_2[_a];
              if (pathValue.value === null) {
                  commands.push({ type: "remove", path: pathValue.path });
              }
              else {
                  commands.push({ type: "set", path: pathValue.path, value: pathValue.value });
              }
          }
          return this._gw3Session
              .send({
              type: GW_MESSAGE_UPDATE_CONTEXT,
              domain: "global",
              context_id: contextData.contextId,
              delta: { commands: commands }
          }, {}, { skipPeerId: false })
              .then(function (gwResponse) {
              _this.handleUpdated(contextData, { added: {}, removed: [], updated: {}, commands: commands }, { updaterId: gwResponse.peer_id });
          });
      };
      GW3Bridge.prototype.get = function (name) {
          var _this = this;
          var _a;
          var contextData = this._contextNameToData[name];
          if (!contextData || !contextData.isAnnounced) {
              return Promise.resolve({});
          }
          if (contextData && !contextData.hasCallbacks()) {
              return new Promise(function (resolve, _) { return __awaiter$1(_this, void 0, void 0, function () {
                  var _this = this;
                  return __generator$1(this, function (_a) {
                      this.subscribe(name, function (data, _d, _r, un) {
                          _this.unsubscribe(un);
                          resolve(data);
                      });
                      return [2];
                  });
              }); });
          }
          var context = (_a = contextData === null || contextData === void 0 ? void 0 : contextData.context) !== null && _a !== void 0 ? _a : {};
          return Promise.resolve(context);
      };
      GW3Bridge.prototype.subscribe = function (name, callback) {
          var thisCallbackSubscriptionNumber = this._nextCallbackSubscriptionNumber;
          this._nextCallbackSubscriptionNumber += 1;
          var contextData = this._contextNameToData[name];
          if (!contextData ||
              !contextData.isAnnounced) {
              contextData = contextData || new GW3ContextData(undefined, name, false, undefined);
              this._contextNameToData[name] = contextData;
              contextData.updateCallbacks[thisCallbackSubscriptionNumber] = callback;
              return Promise.resolve(thisCallbackSubscriptionNumber);
          }
          var hadCallbacks = contextData.hasCallbacks();
          contextData.updateCallbacks[thisCallbackSubscriptionNumber] = callback;
          if (!hadCallbacks) {
              if (!contextData.joinedActivity) {
                  if (contextData.context && contextData.sentExplicitSubscription) {
                      var clone = deepClone(contextData.context);
                      callback(clone, clone, [], thisCallbackSubscriptionNumber);
                      return Promise.resolve(thisCallbackSubscriptionNumber);
                  }
                  return this.sendSubscribe(contextData)
                      .then(function () { return thisCallbackSubscriptionNumber; });
              }
              else {
                  var clone = deepClone(contextData.context);
                  callback(clone, clone, [], thisCallbackSubscriptionNumber);
                  return Promise.resolve(thisCallbackSubscriptionNumber);
              }
          }
          else {
              var clone = deepClone(contextData.context);
              callback(clone, clone, [], thisCallbackSubscriptionNumber);
              return Promise.resolve(thisCallbackSubscriptionNumber);
          }
      };
      GW3Bridge.prototype.unsubscribe = function (subscriptionKey) {
          for (var _i = 0, _a = Object.keys(this._contextNameToData); _i < _a.length; _i++) {
              var name_1 = _a[_i];
              this._contextNameToId[name_1];
              var contextData = this._contextNameToData[name_1];
              if (!contextData) {
                  return;
              }
              var hadCallbacks = contextData.hasCallbacks();
              delete contextData.updateCallbacks[subscriptionKey];
              if (contextData.isAnnounced &&
                  hadCallbacks &&
                  !contextData.hasCallbacks() &&
                  contextData.sentExplicitSubscription) {
                  this.sendUnsubscribe(contextData);
              }
              if (!contextData.isAnnounced &&
                  !contextData.hasCallbacks()) {
                  delete this._contextNameToData[name_1];
              }
          }
      };
      GW3Bridge.prototype.destroy = function (name) {
          var contextData = this._contextNameToData[name];
          if (!contextData) {
              return Promise.reject("context with " + name + " does not exist");
          }
          return this._gw3Session
              .send({
              type: GW_MESSAGE_DESTROY_CONTEXT,
              domain: "global",
              context_id: contextData.contextId,
          }).then(function (_) { return undefined; });
      };
      GW3Bridge.prototype.handleUpdated = function (contextData, delta, extraData) {
          var oldContext = contextData.context;
          contextData.context = applyContextDelta(contextData.context, delta, this._logger);
          if (this._contextNameToData[contextData.name] === contextData &&
              !deepEqual(oldContext, contextData.context)) {
              this.invokeUpdateCallbacks(contextData, delta, extraData);
          }
      };
      GW3Bridge.prototype.subscribeToContextCreatedMessages = function () {
          var createdMessageTypes = [
              GW_MESSAGE_CONTEXT_ADDED,
              GW_MESSAGE_CONTEXT_CREATED,
              GW_MESSAGE_ACTIVITY_CREATED,
          ];
          for (var _i = 0, createdMessageTypes_1 = createdMessageTypes; _i < createdMessageTypes_1.length; _i++) {
              var createdMessageType = createdMessageTypes_1[_i];
              var sub = this._connection.on(createdMessageType, this.handleContextCreatedMessage.bind(this));
              this._gw3Subscriptions.push(sub);
          }
      };
      GW3Bridge.prototype.handleContextCreatedMessage = function (contextCreatedMsg) {
          var createdMessageType = contextCreatedMsg.type;
          if (createdMessageType === GW_MESSAGE_ACTIVITY_CREATED) {
              this._contextNameToId[contextCreatedMsg.activity_id] = contextCreatedMsg.context_id;
              this._contextIdToName[contextCreatedMsg.context_id] = contextCreatedMsg.activity_id;
          }
          else if (createdMessageType === GW_MESSAGE_CONTEXT_ADDED) {
              this._contextNameToId[contextCreatedMsg.name] = contextCreatedMsg.context_id;
              this._contextIdToName[contextCreatedMsg.context_id] = contextCreatedMsg.name;
          }
          else ;
          var name = this._contextIdToName[contextCreatedMsg.context_id];
          if (!name) {
              throw new Error("Received created event for context with unknown name: " + contextCreatedMsg.context_id);
          }
          if (!this._contextNameToId[name]) {
              throw new Error("Received created event for context with unknown id: " + contextCreatedMsg.context_id);
          }
          var contextData = this._contextNameToData[name];
          if (contextData) {
              if (contextData.isAnnounced) {
                  return;
              }
              else {
                  if (!contextData.hasCallbacks()) {
                      throw new Error("Assertion failure: contextData.hasCallbacks()");
                  }
                  contextData.isAnnounced = true;
                  contextData.contextId = contextCreatedMsg.context_id;
                  contextData.activityId = contextCreatedMsg.activity_id;
                  if (!contextData.sentExplicitSubscription) {
                      this.sendSubscribe(contextData);
                  }
              }
          }
          else {
              this._contextNameToData[name] = contextData =
                  new GW3ContextData(contextCreatedMsg.context_id, name, true, contextCreatedMsg.activity_id);
          }
      };
      GW3Bridge.prototype.subscribeToContextUpdatedMessages = function () {
          var updatedMessageTypes = [
              GW_MESSAGE_CONTEXT_UPDATED,
              GW_MESSAGE_SUBSCRIBED_CONTEXT,
              GW_MESSAGE_JOINED_ACTIVITY,
          ];
          for (var _i = 0, updatedMessageTypes_1 = updatedMessageTypes; _i < updatedMessageTypes_1.length; _i++) {
              var updatedMessageType = updatedMessageTypes_1[_i];
              var sub = this._connection.on(updatedMessageType, this.handleContextUpdatedMessage.bind(this));
              this._gw3Subscriptions.push(sub);
          }
      };
      GW3Bridge.prototype.handleContextUpdatedMessage = function (contextUpdatedMsg) {
          var updatedMessageType = contextUpdatedMsg.type;
          var contextId = contextUpdatedMsg.context_id;
          var contextData = this._contextNameToData[this._contextIdToName[contextId]];
          var justSeen = !contextData || !contextData.isAnnounced;
          if (updatedMessageType === GW_MESSAGE_JOINED_ACTIVITY) {
              if (!contextData) {
                  contextData = new GW3ContextData(contextId, contextUpdatedMsg.activity_id, true, contextUpdatedMsg.activity_id);
                  this._contextNameToData[contextUpdatedMsg.activity_id] = contextData;
                  this._contextIdToName[contextId] = contextUpdatedMsg.activity_id;
                  this._contextNameToId[contextUpdatedMsg.activity_id] = contextId;
              }
              else {
                  contextData.contextId = contextId;
                  contextData.isAnnounced = true;
                  contextData.activityId = contextUpdatedMsg.activity_id;
              }
              contextData.joinedActivity = true;
          }
          else {
              if (!contextData || !contextData.isAnnounced) {
                  if (updatedMessageType === GW_MESSAGE_SUBSCRIBED_CONTEXT) {
                      contextData = contextData || new GW3ContextData(contextId, contextUpdatedMsg.name, true, undefined);
                      contextData.sentExplicitSubscription = true;
                      this._contextNameToData[contextUpdatedMsg.name] = contextData;
                      this._contextIdToName[contextId] = contextUpdatedMsg.name;
                      this._contextNameToId[contextUpdatedMsg.name] = contextId;
                  }
                  else {
                      this._logger.error("Received 'update' for unknown context: " + contextId);
                  }
                  return;
              }
          }
          var oldContext = contextData.context;
          if (updatedMessageType === GW_MESSAGE_SUBSCRIBED_CONTEXT) {
              contextData.context = contextUpdatedMsg.data || {};
          }
          else if (updatedMessageType === GW_MESSAGE_JOINED_ACTIVITY) {
              contextData.context = contextUpdatedMsg.context_snapshot || {};
          }
          else if (updatedMessageType === GW_MESSAGE_CONTEXT_UPDATED) {
              contextData.context = applyContextDelta(contextData.context, contextUpdatedMsg.delta, this._logger);
          }
          else {
              throw new Error("Unrecognized context update message " + updatedMessageType);
          }
          if (justSeen ||
              !deepEqual(contextData.context, oldContext) ||
              updatedMessageType === GW_MESSAGE_SUBSCRIBED_CONTEXT) {
              this.invokeUpdateCallbacks(contextData, contextUpdatedMsg.delta, { updaterId: contextUpdatedMsg.updater_id });
          }
      };
      GW3Bridge.prototype.invokeUpdateCallbacks = function (contextData, delta, extraData) {
          delta = delta || { added: {}, updated: {}, reset: {}, removed: [] };
          if (delta.commands) {
              delta.added = delta.updated = delta.reset = {};
              delta.removed = [];
              for (var _i = 0, _a = delta.commands; _i < _a.length; _i++) {
                  var command = _a[_i];
                  if (command.type === "remove") {
                      if (command.path.indexOf(".") === -1) {
                          delta.removed.push(command.path);
                      }
                      setValueToPath(delta.updated, null, command.path);
                  }
                  else if (command.type === "set") {
                      setValueToPath(delta.updated, command.value, command.path);
                  }
              }
          }
          for (var updateCallbackIndex in contextData.updateCallbacks) {
              if (contextData.updateCallbacks.hasOwnProperty(updateCallbackIndex)) {
                  try {
                      var updateCallback = contextData.updateCallbacks[updateCallbackIndex];
                      updateCallback(deepClone(contextData.context), Object.assign({}, delta.added || {}, delta.updated || {}, delta.reset || {}), delta.removed, parseInt(updateCallbackIndex, 10), extraData);
                  }
                  catch (err) {
                      this._logger.debug("callback error: " + JSON.stringify(err));
                  }
              }
          }
      };
      GW3Bridge.prototype.subscribeToContextDestroyedMessages = function () {
          var destroyedMessageTypes = [
              GW_MESSAGE_CONTEXT_DESTROYED,
              GW_MESSAGE_ACTIVITY_DESTROYED,
          ];
          for (var _i = 0, destroyedMessageTypes_1 = destroyedMessageTypes; _i < destroyedMessageTypes_1.length; _i++) {
              var destroyedMessageType = destroyedMessageTypes_1[_i];
              var sub = this._connection.on(destroyedMessageType, this.handleContextDestroyedMessage.bind(this));
              this._gw3Subscriptions.push(sub);
          }
      };
      GW3Bridge.prototype.handleContextDestroyedMessage = function (destroyedMsg) {
          var destroyedMessageType = destroyedMsg.type;
          var contextId;
          var name;
          if (destroyedMessageType === GW_MESSAGE_ACTIVITY_DESTROYED) {
              name = destroyedMsg.activity_id;
              contextId = this._contextNameToId[name];
              if (!contextId) {
                  this._logger.error("Received 'destroyed' for unknown activity: " + destroyedMsg.activity_id);
                  return;
              }
          }
          else {
              contextId = destroyedMsg.context_id;
              name = this._contextIdToName[contextId];
              if (!name) {
                  this._logger.error("Received 'destroyed' for unknown context: " + destroyedMsg.context_id);
                  return;
              }
          }
          delete this._contextIdToName[contextId];
          delete this._contextNameToId[name];
          var contextData = this._contextNameToData[name];
          delete this._contextNameToData[name];
          if (!contextData || !contextData.isAnnounced) {
              this._logger.error("Received 'destroyed' for unknown context: " + contextId);
              return;
          }
      };
      GW3Bridge.prototype.sendSubscribe = function (contextData) {
          contextData.sentExplicitSubscription = true;
          return this._gw3Session
              .send({
              type: GW_MESSAGE_SUBSCRIBE_CONTEXT,
              domain: "global",
              context_id: contextData.contextId,
          }).then(function (_) { return undefined; });
      };
      GW3Bridge.prototype.sendUnsubscribe = function (contextData) {
          contextData.sentExplicitSubscription = false;
          return this._gw3Session
              .send({
              type: GW_MESSAGE_UNSUBSCRIBE_CONTEXT,
              domain: "global",
              context_id: contextData.contextId,
          }).then(function (_) { return undefined; });
      };
      GW3Bridge.prototype.calculateContextDeltaV1 = function (from, to) {
          var delta = { added: {}, updated: {}, removed: [], reset: undefined };
          if (from) {
              for (var _i = 0, _a = Object.keys(from); _i < _a.length; _i++) {
                  var x = _a[_i];
                  if (Object.keys(to).indexOf(x) !== -1
                      && to[x] !== null
                      && !deepEqual(from[x], to[x])) {
                      delta.updated[x] = to[x];
                  }
              }
          }
          for (var _b = 0, _c = Object.keys(to); _b < _c.length; _b++) {
              var x = _c[_b];
              if (!from || (Object.keys(from).indexOf(x) === -1)) {
                  if (to[x] !== null) {
                      delta.added[x] = to[x];
                  }
              }
              else if (to[x] === null) {
                  delta.removed.push(x);
              }
          }
          return delta;
      };
      GW3Bridge.prototype.calculateContextDeltaV2 = function (from, to) {
          var _a, _b;
          var delta = { added: {}, updated: {}, removed: [], reset: undefined, commands: [] };
          for (var _i = 0, _c = Object.keys(to); _i < _c.length; _i++) {
              var x = _c[_i];
              if (to[x] !== null) {
                  var fromX = from ? from[x] : null;
                  if (!deepEqual(fromX, to[x])) {
                      (_a = delta.commands) === null || _a === void 0 ? void 0 : _a.push({ type: "set", path: x, value: to[x] });
                  }
              }
              else {
                  (_b = delta.commands) === null || _b === void 0 ? void 0 : _b.push({ type: "remove", path: x });
              }
          }
          return delta;
      };
      return GW3Bridge;
  }());

  var ContextsModule = (function () {
      function ContextsModule(config) {
          this._bridge = new GW3Bridge(config);
      }
      ContextsModule.prototype.all = function () {
          return this._bridge.all();
      };
      ContextsModule.prototype.update = function (name, data) {
          this.checkName(name);
          this.checkData(data);
          return this._bridge.update(name, data);
      };
      ContextsModule.prototype.set = function (name, data) {
          this.checkName(name);
          this.checkData(data);
          return this._bridge.set(name, data);
      };
      ContextsModule.prototype.setPath = function (name, path, data) {
          this.checkName(name);
          this.checkPath(path);
          var isTopLevelPath = path === "";
          if (isTopLevelPath) {
              this.checkData(data);
              return this.set(name, data);
          }
          return this._bridge.setPath(name, path, data);
      };
      ContextsModule.prototype.setPaths = function (name, paths) {
          this.checkName(name);
          if (!Array.isArray(paths)) {
              throw new Error("Please provide the paths as an array of PathValues!");
          }
          for (var _i = 0, paths_1 = paths; _i < paths_1.length; _i++) {
              var _a = paths_1[_i], path = _a.path, value = _a.value;
              this.checkPath(path);
              var isTopLevelPath = path === "";
              if (isTopLevelPath) {
                  this.checkData(value);
              }
          }
          return this._bridge.setPaths(name, paths);
      };
      ContextsModule.prototype.subscribe = function (name, callback) {
          var _this = this;
          this.checkName(name);
          if (typeof callback !== "function") {
              throw new Error("Please provide the callback as a function!");
          }
          return this._bridge
              .subscribe(name, function (data, delta, removed, key, extraData) { return callback(data, delta, removed, function () { return _this._bridge.unsubscribe(key); }, extraData); })
              .then(function (key) {
              return function () {
                  _this._bridge.unsubscribe(key);
              };
          });
      };
      ContextsModule.prototype.get = function (name) {
          this.checkName(name);
          return this._bridge.get(name);
      };
      ContextsModule.prototype.ready = function () {
          return Promise.resolve(this);
      };
      ContextsModule.prototype.destroy = function (name) {
          this.checkName(name);
          return this._bridge.destroy(name);
      };
      Object.defineProperty(ContextsModule.prototype, "setPathSupported", {
          get: function () {
              return this._bridge.setPathSupported;
          },
          enumerable: true,
          configurable: true
      });
      ContextsModule.prototype.checkName = function (name) {
          if (typeof name !== "string" || name === "") {
              throw new Error("Please provide the name as a non-empty string!");
          }
      };
      ContextsModule.prototype.checkPath = function (path) {
          if (typeof path !== "string") {
              throw new Error("Please provide the path as a dot delimited string!");
          }
      };
      ContextsModule.prototype.checkData = function (data) {
          if (typeof data !== "object") {
              throw new Error("Please provide the data as an object!");
          }
      };
      return ContextsModule;
  }());

  function promisify (promise, successCallback, errorCallback) {
      if (typeof successCallback !== "function" && typeof errorCallback !== "function") {
          return promise;
      }
      if (typeof successCallback !== "function") {
          successCallback = function () { };
      }
      else if (typeof errorCallback !== "function") {
          errorCallback = function () { };
      }
      return promise.then(successCallback, errorCallback);
  }

  function rejectAfter(ms, promise, error) {
      if (ms === void 0) { ms = 0; }
      var timeout;
      var clearTimeoutIfThere = function () {
          if (timeout) {
              clearTimeout(timeout);
          }
      };
      promise
          .then(function () {
          clearTimeoutIfThere();
      })
          .catch(function () {
          clearTimeoutIfThere();
      });
      return new Promise(function (resolve, reject) {
          timeout = setTimeout(function () { return reject(error); }, ms);
      });
  }

  var InvokeStatus;
  (function (InvokeStatus) {
      InvokeStatus[InvokeStatus["Success"] = 0] = "Success";
      InvokeStatus[InvokeStatus["Error"] = 1] = "Error";
  })(InvokeStatus || (InvokeStatus = {}));
  var Client = (function () {
      function Client(protocol, repo, instance, configuration) {
          this.protocol = protocol;
          this.repo = repo;
          this.instance = instance;
          this.configuration = configuration;
      }
      Client.prototype.subscribe = function (method, options, successCallback, errorCallback, existingSub) {
          var _this = this;
          var callProtocolSubscribe = function (targetServers, stream, successProxy, errorProxy) {
              var _a;
              options.methodResponseTimeout = (_a = options.methodResponseTimeout) !== null && _a !== void 0 ? _a : options.waitTimeoutMs;
              _this.protocol.client.subscribe(stream, options, targetServers, successProxy, errorProxy, existingSub);
          };
          var promise = new Promise(function (resolve, reject) {
              var successProxy = function (sub) {
                  resolve(sub);
              };
              var errorProxy = function (err) {
                  reject(err);
              };
              if (!method) {
                  reject("Method definition is required. Please, provide either a unique string for a method name or a \u201CmethodDefinition\u201D object with a required \u201Cname\u201D property.");
                  return;
              }
              var methodDef;
              if (typeof method === "string") {
                  methodDef = { name: method };
              }
              else {
                  methodDef = method;
              }
              if (!methodDef.name) {
                  reject("Method definition is required. Please, provide either a unique string for a method name or a \u201CmethodDefinition\u201D object with a required \u201Cname\u201D property.");
                  return;
              }
              if (options === undefined) {
                  options = {};
              }
              var target = options.target;
              if (target === undefined) {
                  target = "best";
              }
              if (typeof target === "string" && target !== "all" && target !== "best") {
                  reject(new Error("\"" + target + "\" is not a valid target. Valid targets are \"all\", \"best\", or an instance."));
                  return;
              }
              if (options.methodResponseTimeout === undefined) {
                  options.methodResponseTimeout = options.method_response_timeout;
                  if (options.methodResponseTimeout === undefined) {
                      options.methodResponseTimeout = _this.configuration.methodResponseTimeout;
                  }
              }
              if (options.waitTimeoutMs === undefined) {
                  options.waitTimeoutMs = options.wait_for_method_timeout;
                  if (options.waitTimeoutMs === undefined) {
                      options.waitTimeoutMs = _this.configuration.waitTimeoutMs;
                  }
              }
              var delayStep = 500;
              var delayTillNow = 0;
              var currentServers = _this.getServerMethodsByFilterAndTarget(methodDef, target);
              if (currentServers.length > 0) {
                  callProtocolSubscribe(currentServers, currentServers[0].methods[0], successProxy, errorProxy);
              }
              else {
                  var retry_1 = function () {
                      if (!target || !(options.waitTimeoutMs)) {
                          return;
                      }
                      delayTillNow += delayStep;
                      currentServers = _this.getServerMethodsByFilterAndTarget(methodDef, target);
                      if (currentServers.length > 0) {
                          var streamInfo = currentServers[0].methods[0];
                          callProtocolSubscribe(currentServers, streamInfo, successProxy, errorProxy);
                      }
                      else if (delayTillNow >= options.waitTimeoutMs) {
                          var def = typeof method === "string" ? { name: method } : method;
                          callProtocolSubscribe(currentServers, def, successProxy, errorProxy);
                      }
                      else {
                          setTimeout(retry_1, delayStep);
                      }
                  };
                  setTimeout(retry_1, delayStep);
              }
          });
          return promisify(promise, successCallback, errorCallback);
      };
      Client.prototype.servers = function (methodFilter) {
          var filterCopy = methodFilter === undefined
              ? undefined
              : __assign$1({}, methodFilter);
          return this.getServers(filterCopy).map(function (serverMethodMap) {
              return serverMethodMap.server.instance;
          });
      };
      Client.prototype.methods = function (methodFilter) {
          if (typeof methodFilter === "string") {
              methodFilter = { name: methodFilter };
          }
          else {
              methodFilter = __assign$1({}, methodFilter);
          }
          return this.getMethods(methodFilter);
      };
      Client.prototype.methodsForInstance = function (instance) {
          return this.getMethodsForInstance(instance);
      };
      Client.prototype.methodAdded = function (callback) {
          return this.repo.onMethodAdded(callback);
      };
      Client.prototype.methodRemoved = function (callback) {
          return this.repo.onMethodRemoved(callback);
      };
      Client.prototype.serverAdded = function (callback) {
          return this.repo.onServerAdded(callback);
      };
      Client.prototype.serverRemoved = function (callback) {
          return this.repo.onServerRemoved(function (server, reason) {
              callback(server, reason);
          });
      };
      Client.prototype.serverMethodAdded = function (callback) {
          return this.repo.onServerMethodAdded(function (server, method) {
              callback({ server: server, method: method });
          });
      };
      Client.prototype.serverMethodRemoved = function (callback) {
          return this.repo.onServerMethodRemoved(function (server, method) {
              callback({ server: server, method: method });
          });
      };
      Client.prototype.invoke = function (methodFilter, argumentObj, target, additionalOptions, success, error) {
          return __awaiter$1(this, void 0, void 0, function () {
              var getInvokePromise;
              var _this = this;
              return __generator$1(this, function (_a) {
                  getInvokePromise = function () { return __awaiter$1(_this, void 0, void 0, function () {
                      var methodDefinition, serversMethodMap, method, errorObj, timeout, additionalOptionsCopy, invokePromises, invocationMessages, results, allRejected;
                      var _this = this;
                      var _a, _b, _c;
                      return __generator$1(this, function (_d) {
                          switch (_d.label) {
                              case 0:
                                  if (typeof methodFilter === "string") {
                                      methodDefinition = { name: methodFilter };
                                  }
                                  else {
                                      methodDefinition = __assign$1({}, methodFilter);
                                  }
                                  if (!methodDefinition.name) {
                                      return [2, Promise.reject("Method definition is required. Please, provide either a unique string for a method name or a \u201CmethodDefinition\u201D object with a required \u201Cname\u201D property.")];
                                  }
                                  if (!argumentObj) {
                                      argumentObj = {};
                                  }
                                  if (!target) {
                                      target = "best";
                                  }
                                  if (typeof target === "string" && target !== "all" && target !== "best" && target !== "skipMine") {
                                      return [2, Promise.reject(new Error("\"" + target + "\" is not a valid target. Valid targets are \"all\" and \"best\"."))];
                                  }
                                  if (!additionalOptions) {
                                      additionalOptions = {};
                                  }
                                  if (additionalOptions.methodResponseTimeoutMs === undefined) {
                                      additionalOptions.methodResponseTimeoutMs = additionalOptions.method_response_timeout;
                                      if (additionalOptions.methodResponseTimeoutMs === undefined) {
                                          additionalOptions.methodResponseTimeoutMs = this.configuration.methodResponseTimeout;
                                      }
                                  }
                                  if (additionalOptions.waitTimeoutMs === undefined) {
                                      additionalOptions.waitTimeoutMs = additionalOptions.wait_for_method_timeout;
                                      if (additionalOptions.waitTimeoutMs === undefined) {
                                          additionalOptions.waitTimeoutMs = this.configuration.waitTimeoutMs;
                                      }
                                  }
                                  if (additionalOptions.waitTimeoutMs !== undefined && typeof additionalOptions.waitTimeoutMs !== "number") {
                                      return [2, Promise.reject(new Error("\"" + additionalOptions.waitTimeoutMs + "\" is not a valid number for \"waitTimeoutMs\" "))];
                                  }
                                  if (typeof argumentObj !== "object") {
                                      return [2, Promise.reject(new Error("The method arguments must be an object. method: " + methodDefinition.name))];
                                  }
                                  serversMethodMap = this.getServerMethodsByFilterAndTarget(methodDefinition, target);
                                  if (!(serversMethodMap.length === 0)) return [3, 4];
                                  _d.label = 1;
                              case 1:
                                  _d.trys.push([1, 3, , 4]);
                                  return [4, this.tryToAwaitForMethods(methodDefinition, target, additionalOptions)];
                              case 2:
                                  serversMethodMap = _d.sent();
                                  return [3, 4];
                              case 3:
                                  _d.sent();
                                  method = __assign$1(__assign$1({}, methodDefinition), { getServers: function () { return []; }, supportsStreaming: false, objectTypes: (_a = methodDefinition.objectTypes) !== null && _a !== void 0 ? _a : [], flags: (_c = (_b = methodDefinition.flags) === null || _b === void 0 ? void 0 : _b.metadata) !== null && _c !== void 0 ? _c : {} });
                                  errorObj = {
                                      method: method,
                                      called_with: argumentObj,
                                      message: "Can not find a method matching " + JSON.stringify(methodFilter) + " with server filter " + JSON.stringify(target),
                                      executed_by: undefined,
                                      returned: undefined,
                                      status: undefined,
                                  };
                                  return [2, Promise.reject(errorObj)];
                              case 4:
                                  timeout = additionalOptions.methodResponseTimeoutMs;
                                  additionalOptionsCopy = additionalOptions;
                                  invokePromises = serversMethodMap.map(function (serversMethodPair) {
                                      var invId = shortid();
                                      var method = serversMethodPair.methods[0];
                                      var server = serversMethodPair.server;
                                      var invokePromise = _this.protocol.client.invoke(invId, method, argumentObj, server, additionalOptionsCopy);
                                      return Promise.race([
                                          invokePromise,
                                          rejectAfter(timeout, invokePromise, {
                                              invocationId: invId,
                                              message: "Invocation timeout (" + timeout + " ms) reached for method name: " + (method === null || method === void 0 ? void 0 : method.name) + ", target instance: " + JSON.stringify(server.instance) + ", options: " + JSON.stringify(additionalOptionsCopy),
                                              status: InvokeStatus.Error,
                                          })
                                      ]);
                                  });
                                  return [4, Promise.all(invokePromises)];
                              case 5:
                                  invocationMessages = _d.sent();
                                  results = this.getInvocationResultObj(invocationMessages, methodDefinition, argumentObj);
                                  allRejected = invocationMessages.every(function (result) { return result.status === InvokeStatus.Error; });
                                  if (allRejected) {
                                      return [2, Promise.reject(results)];
                                  }
                                  return [2, results];
                          }
                      });
                  }); };
                  return [2, promisify(getInvokePromise(), success, error)];
              });
          });
      };
      Client.prototype.getInvocationResultObj = function (invocationResults, method, calledWith) {
          var all_return_values = invocationResults
              .filter(function (invokeMessage) { return invokeMessage.status === InvokeStatus.Success; })
              .reduce(function (allValues, currentValue) {
              allValues = __spreadArrays$1(allValues, [
                  {
                      executed_by: currentValue.instance,
                      returned: currentValue.result,
                      called_with: calledWith,
                      method: method,
                      message: currentValue.message,
                      status: currentValue.status,
                  }
              ]);
              return allValues;
          }, []);
          var all_errors = invocationResults
              .filter(function (invokeMessage) { return invokeMessage.status === InvokeStatus.Error; })
              .reduce(function (allErrors, currError) {
              allErrors = __spreadArrays$1(allErrors, [
                  {
                      executed_by: currError.instance,
                      called_with: calledWith,
                      name: method.name,
                      message: currError.message,
                  }
              ]);
              return allErrors;
          }, []);
          var invResult = invocationResults[0];
          var result = {
              method: method,
              called_with: calledWith,
              returned: invResult.result,
              executed_by: invResult.instance,
              all_return_values: all_return_values,
              all_errors: all_errors,
              message: invResult.message,
              status: invResult.status
          };
          return result;
      };
      Client.prototype.tryToAwaitForMethods = function (methodDefinition, target, additionalOptions) {
          var _this = this;
          return new Promise(function (resolve, reject) {
              if (additionalOptions.waitTimeoutMs === 0) {
                  reject();
                  return;
              }
              var delayStep = 500;
              var delayTillNow = 0;
              var retry = function () {
                  delayTillNow += delayStep;
                  var serversMethodMap = _this.getServerMethodsByFilterAndTarget(methodDefinition, target);
                  if (serversMethodMap.length > 0) {
                      clearInterval(interval);
                      resolve(serversMethodMap);
                  }
                  else if (delayTillNow >= (additionalOptions.waitTimeoutMs || 10000)) {
                      clearInterval(interval);
                      reject();
                      return;
                  }
              };
              var interval = setInterval(retry, delayStep);
          });
      };
      Client.prototype.filterByTarget = function (target, serverMethodMap) {
          var _this = this;
          if (typeof target === "string") {
              if (target === "all") {
                  return __spreadArrays$1(serverMethodMap);
              }
              else if (target === "best") {
                  var localMachine = serverMethodMap
                      .find(function (s) { return s.server.instance.isLocal; });
                  if (localMachine) {
                      return [localMachine];
                  }
                  if (serverMethodMap[0] !== undefined) {
                      return [serverMethodMap[0]];
                  }
              }
              else if (target === "skipMine") {
                  return serverMethodMap.filter(function (_a) {
                      var server = _a.server;
                      return server.instance.peerId !== _this.instance.peerId;
                  });
              }
          }
          else {
              var targetArray = void 0;
              if (!Array.isArray(target)) {
                  targetArray = [target];
              }
              else {
                  targetArray = target;
              }
              var allServersMatching = targetArray.reduce(function (matches, filter) {
                  var myMatches = serverMethodMap.filter(function (serverMethodPair) {
                      return _this.instanceMatch(filter, serverMethodPair.server.instance);
                  });
                  return matches.concat(myMatches);
              }, []);
              return allServersMatching;
          }
          return [];
      };
      Client.prototype.instanceMatch = function (instanceFilter, instanceDefinition) {
          return this.containsProps(instanceFilter, instanceDefinition);
      };
      Client.prototype.methodMatch = function (methodFilter, methodDefinition) {
          return this.containsProps(methodFilter, methodDefinition);
      };
      Client.prototype.containsProps = function (filter, repoMethod) {
          var filterProps = Object.keys(filter)
              .filter(function (prop) {
              return filter[prop] !== undefined
                  && typeof filter[prop] !== "function"
                  && prop !== "object_types"
                  && prop !== "display_name"
                  && prop !== "id"
                  && prop !== "gatewayId"
                  && prop !== "identifier"
                  && prop[0] !== "_";
          });
          return filterProps.every(function (prop) {
              var isMatch;
              var filterValue = filter[prop];
              var repoMethodValue = repoMethod[prop];
              switch (prop) {
                  case "objectTypes":
                      isMatch = (filterValue || []).every(function (filterValueEl) {
                          return (repoMethodValue || []).includes(filterValueEl);
                      });
                      break;
                  case "flags":
                      isMatch = isSubset(repoMethodValue || {}, filterValue || {});
                      break;
                  default:
                      isMatch = String(filterValue).toLowerCase() === String(repoMethodValue).toLowerCase();
              }
              return isMatch;
          });
      };
      Client.prototype.getMethods = function (methodFilter) {
          var _this = this;
          if (methodFilter === undefined) {
              return this.repo.getMethods();
          }
          var methods = this.repo.getMethods().filter(function (method) {
              return _this.methodMatch(methodFilter, method);
          });
          return methods;
      };
      Client.prototype.getMethodsForInstance = function (instanceFilter) {
          var _this = this;
          var allServers = this.repo.getServers();
          var matchingServers = allServers.filter(function (server) {
              return _this.instanceMatch(instanceFilter, server.instance);
          });
          if (matchingServers.length === 0) {
              return [];
          }
          var resultMethodsObject = {};
          if (matchingServers.length === 1) {
              resultMethodsObject = matchingServers[0].methods;
          }
          else {
              matchingServers.forEach(function (server) {
                  Object.keys(server.methods).forEach(function (methodKey) {
                      var method = server.methods[methodKey];
                      resultMethodsObject[method.identifier] = method;
                  });
              });
          }
          return Object.keys(resultMethodsObject)
              .map(function (key) {
              return resultMethodsObject[key];
          });
      };
      Client.prototype.getServers = function (methodFilter) {
          var _this = this;
          var servers = this.repo.getServers();
          if (methodFilter === undefined) {
              return servers.map(function (server) {
                  return { server: server, methods: [] };
              });
          }
          return servers.reduce(function (prev, current) {
              var methodsForServer = Object.values(current.methods);
              var matchingMethods = methodsForServer.filter(function (method) {
                  return _this.methodMatch(methodFilter, method);
              });
              if (matchingMethods.length > 0) {
                  prev.push({ server: current, methods: matchingMethods });
              }
              return prev;
          }, []);
      };
      Client.prototype.getServerMethodsByFilterAndTarget = function (methodFilter, target) {
          var serversMethodMap = this.getServers(methodFilter);
          return this.filterByTarget(target, serversMethodMap);
      };
      return Client;
  }());

  var ServerSubscription = (function () {
      function ServerSubscription(protocol, repoMethod, subscription) {
          this.protocol = protocol;
          this.repoMethod = repoMethod;
          this.subscription = subscription;
      }
      Object.defineProperty(ServerSubscription.prototype, "stream", {
          get: function () {
              if (!this.repoMethod.stream) {
                  throw new Error("no stream");
              }
              return this.repoMethod.stream;
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(ServerSubscription.prototype, "arguments", {
          get: function () { return this.subscription.arguments || {}; },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(ServerSubscription.prototype, "branchKey", {
          get: function () { return this.subscription.branchKey; },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(ServerSubscription.prototype, "instance", {
          get: function () {
              if (!this.subscription.instance) {
                  throw new Error("no instance");
              }
              return this.subscription.instance;
          },
          enumerable: true,
          configurable: true
      });
      ServerSubscription.prototype.close = function () {
          this.protocol.server.closeSingleSubscription(this.repoMethod, this.subscription);
      };
      ServerSubscription.prototype.push = function (data) {
          this.protocol.server.pushDataToSingle(this.repoMethod, this.subscription, data);
      };
      return ServerSubscription;
  }());

  var Request = (function () {
      function Request(protocol, repoMethod, requestContext) {
          this.protocol = protocol;
          this.repoMethod = repoMethod;
          this.requestContext = requestContext;
          this.arguments = requestContext.arguments;
          this.instance = requestContext.instance;
      }
      Request.prototype.accept = function () {
          this.protocol.server.acceptRequestOnBranch(this.requestContext, this.repoMethod, "");
      };
      Request.prototype.acceptOnBranch = function (branch) {
          this.protocol.server.acceptRequestOnBranch(this.requestContext, this.repoMethod, branch);
      };
      Request.prototype.reject = function (reason) {
          this.protocol.server.rejectRequest(this.requestContext, this.repoMethod, reason);
      };
      return Request;
  }());

  var ServerStreaming = (function () {
      function ServerStreaming(protocol, server) {
          var _this = this;
          this.protocol = protocol;
          this.server = server;
          protocol.server.onSubRequest(function (rc, rm) { return _this.handleSubRequest(rc, rm); });
          protocol.server.onSubAdded(function (sub, rm) { return _this.handleSubAdded(sub, rm); });
          protocol.server.onSubRemoved(function (sub, rm) { return _this.handleSubRemoved(sub, rm); });
      }
      ServerStreaming.prototype.handleSubRequest = function (requestContext, repoMethod) {
          if (!(repoMethod &&
              repoMethod.streamCallbacks &&
              typeof repoMethod.streamCallbacks.subscriptionRequestHandler === "function")) {
              return;
          }
          var request = new Request(this.protocol, repoMethod, requestContext);
          repoMethod.streamCallbacks.subscriptionRequestHandler(request);
      };
      ServerStreaming.prototype.handleSubAdded = function (subscription, repoMethod) {
          if (!(repoMethod &&
              repoMethod.streamCallbacks &&
              typeof repoMethod.streamCallbacks.subscriptionAddedHandler === "function")) {
              return;
          }
          var sub = new ServerSubscription(this.protocol, repoMethod, subscription);
          repoMethod.streamCallbacks.subscriptionAddedHandler(sub);
      };
      ServerStreaming.prototype.handleSubRemoved = function (subscription, repoMethod) {
          if (!(repoMethod &&
              repoMethod.streamCallbacks &&
              typeof repoMethod.streamCallbacks.subscriptionRemovedHandler === "function")) {
              return;
          }
          var sub = new ServerSubscription(this.protocol, repoMethod, subscription);
          repoMethod.streamCallbacks.subscriptionRemovedHandler(sub);
      };
      return ServerStreaming;
  }());

  var ServerBranch = (function () {
      function ServerBranch(key, protocol, repoMethod) {
          this.key = key;
          this.protocol = protocol;
          this.repoMethod = repoMethod;
      }
      ServerBranch.prototype.subscriptions = function () {
          var _this = this;
          var subList = this.protocol.server.getSubscriptionList(this.repoMethod, this.key);
          return subList.map(function (sub) {
              return new ServerSubscription(_this.protocol, _this.repoMethod, sub);
          });
      };
      ServerBranch.prototype.close = function () {
          this.protocol.server.closeAllSubscriptions(this.repoMethod, this.key);
      };
      ServerBranch.prototype.push = function (data) {
          this.protocol.server.pushData(this.repoMethod, data, [this.key]);
      };
      return ServerBranch;
  }());

  var ServerStream = (function () {
      function ServerStream(_protocol, _repoMethod, _server) {
          this._protocol = _protocol;
          this._repoMethod = _repoMethod;
          this._server = _server;
          this.name = this._repoMethod.definition.name;
      }
      ServerStream.prototype.branches = function (key) {
          var _this = this;
          var bList = this._protocol.server.getBranchList(this._repoMethod);
          if (key) {
              if (bList.indexOf(key) > -1) {
                  return new ServerBranch(key, this._protocol, this._repoMethod);
              }
              return undefined;
          }
          else {
              return bList.map(function (branchKey) {
                  return new ServerBranch(branchKey, _this._protocol, _this._repoMethod);
              });
          }
      };
      ServerStream.prototype.branch = function (key) {
          return this.branches(key);
      };
      ServerStream.prototype.subscriptions = function () {
          var _this = this;
          var subList = this._protocol.server.getSubscriptionList(this._repoMethod);
          return subList.map(function (sub) {
              return new ServerSubscription(_this._protocol, _this._repoMethod, sub);
          });
      };
      Object.defineProperty(ServerStream.prototype, "definition", {
          get: function () {
              var _a;
              var def2 = this._repoMethod.definition;
              return {
                  accepts: def2.accepts,
                  description: def2.description,
                  displayName: def2.displayName,
                  name: def2.name,
                  objectTypes: def2.objectTypes,
                  returns: def2.returns,
                  supportsStreaming: def2.supportsStreaming,
                  flags: (_a = def2.flags) === null || _a === void 0 ? void 0 : _a.metadata,
              };
          },
          enumerable: true,
          configurable: true
      });
      ServerStream.prototype.close = function () {
          this._protocol.server.closeAllSubscriptions(this._repoMethod);
          this._server.unregister(this._repoMethod.definition, true);
      };
      ServerStream.prototype.push = function (data, branches) {
          if (typeof branches !== "string" && !Array.isArray(branches) && branches !== undefined) {
              throw new Error("invalid branches should be string or string array");
          }
          if (typeof data !== "object") {
              throw new Error("Invalid arguments. Data must be an object.");
          }
          this._protocol.server.pushData(this._repoMethod, data, branches);
      };
      ServerStream.prototype.updateRepoMethod = function (repoMethod) {
          this._repoMethod = repoMethod;
      };
      return ServerStream;
  }());

  var Server = (function () {
      function Server(protocol, serverRepository) {
          this.protocol = protocol;
          this.serverRepository = serverRepository;
          this.invocations = 0;
          this.currentlyUnregistering = {};
          this.streaming = new ServerStreaming(protocol, this);
          this.protocol.server.onInvoked(this.onMethodInvoked.bind(this));
      }
      Server.prototype.createStream = function (streamDef, callbacks, successCallback, errorCallback, existingStream) {
          var _this = this;
          var promise = new Promise(function (resolve, reject) {
              if (!streamDef) {
                  reject("The stream name must be unique! Please, provide either a unique string for a stream name to \u201Cglue.interop.createStream()\u201D or a \u201CmethodDefinition\u201D object with a unique \u201Cname\u201D property for the stream.");
                  return;
              }
              var streamMethodDefinition;
              if (typeof streamDef === "string") {
                  streamMethodDefinition = { name: "" + streamDef };
              }
              else {
                  streamMethodDefinition = __assign$1({}, streamDef);
              }
              if (!streamMethodDefinition.name) {
                  return reject("The \u201Cname\u201D property is required for the \u201CstreamDefinition\u201D object and must be unique. Stream definition: " + JSON.stringify(streamMethodDefinition));
              }
              var nameAlreadyExists = _this.serverRepository.getList()
                  .some(function (serverMethod) { return serverMethod.definition.name === streamMethodDefinition.name; });
              if (nameAlreadyExists) {
                  return reject("A stream with the name \"" + streamMethodDefinition.name + "\" already exists! Please, provide a unique name for the stream.");
              }
              streamMethodDefinition.supportsStreaming = true;
              if (!callbacks) {
                  callbacks = {};
              }
              if (typeof callbacks.subscriptionRequestHandler !== "function") {
                  callbacks.subscriptionRequestHandler = function (request) {
                      request.accept();
                  };
              }
              var repoMethod = _this.serverRepository.add({
                  definition: streamMethodDefinition,
                  streamCallbacks: callbacks,
                  protocolState: {},
              });
              _this.protocol.server.createStream(repoMethod)
                  .then(function () {
                  var streamUserObject;
                  if (existingStream) {
                      streamUserObject = existingStream;
                      existingStream.updateRepoMethod(repoMethod);
                  }
                  else {
                      streamUserObject = new ServerStream(_this.protocol, repoMethod, _this);
                  }
                  repoMethod.stream = streamUserObject;
                  resolve(streamUserObject);
              })
                  .catch(function (err) {
                  if (repoMethod.repoId) {
                      _this.serverRepository.remove(repoMethod.repoId);
                  }
                  reject(err);
              });
          });
          return promisify(promise, successCallback, errorCallback);
      };
      Server.prototype.register = function (methodDefinition, callback) {
          var _this = this;
          if (!methodDefinition) {
              return Promise.reject("Method definition is required. Please, provide either a unique string for a method name or a \u201CmethodDefinition\u201D object with a required \u201Cname\u201D property.");
          }
          if (typeof callback !== "function") {
              return Promise.reject("The second parameter must be a callback function. Method: " + (typeof methodDefinition === "string" ? methodDefinition : methodDefinition.name));
          }
          var wrappedCallbackFunction = function (context, resultCallback) { return __awaiter$1(_this, void 0, void 0, function () {
              var result, resultValue, e_1;
              return __generator$1(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                          _a.trys.push([0, 4, , 5]);
                          result = callback(context.args, context.instance);
                          if (!(result && typeof result.then === "function")) return [3, 2];
                          return [4, result];
                      case 1:
                          resultValue = _a.sent();
                          resultCallback(undefined, resultValue);
                          return [3, 3];
                      case 2:
                          resultCallback(undefined, result);
                          _a.label = 3;
                      case 3: return [3, 5];
                      case 4:
                          e_1 = _a.sent();
                          if (!e_1) {
                              e_1 = "";
                          }
                          resultCallback(e_1, e_1);
                          return [3, 5];
                      case 5: return [2];
                  }
              });
          }); };
          wrappedCallbackFunction.userCallback = callback;
          return this.registerCore(methodDefinition, wrappedCallbackFunction);
      };
      Server.prototype.registerAsync = function (methodDefinition, callback) {
          if (!methodDefinition) {
              return Promise.reject("Method definition is required. Please, provide either a unique string for a method name or a \u201CmethodDefinition\u201D object with a required \u201Cname\u201D property.");
          }
          if (typeof callback !== "function") {
              return Promise.reject("The second parameter must be a callback function. Method: " + (typeof methodDefinition === "string" ? methodDefinition : methodDefinition.name));
          }
          var wrappedCallback = function (context, resultCallback) {
              try {
                  var resultCalled_1 = false;
                  var success = function (result) {
                      if (!resultCalled_1) {
                          resultCallback(undefined, result);
                      }
                      resultCalled_1 = true;
                  };
                  var error = function (e) {
                      if (!resultCalled_1) {
                          if (!e) {
                              e = "";
                          }
                          resultCallback(e, e);
                      }
                      resultCalled_1 = true;
                  };
                  var methodResult = callback(context.args, context.instance, success, error);
                  if (methodResult && typeof methodResult.then === "function") {
                      methodResult
                          .then(success)
                          .catch(error);
                  }
              }
              catch (e) {
                  resultCallback(e, undefined);
              }
          };
          wrappedCallback.userCallbackAsync = callback;
          return this.registerCore(methodDefinition, wrappedCallback);
      };
      Server.prototype.unregister = function (methodFilter, forStream) {
          if (forStream === void 0) { forStream = false; }
          return __awaiter$1(this, void 0, void 0, function () {
              var methodDefinition, methodToBeRemoved;
              return __generator$1(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                          if (methodFilter === undefined) {
                              return [2, Promise.reject("Please, provide either a unique string for a name or an object containing a \u201Cname\u201D property.")];
                          }
                          if (!(typeof methodFilter === "function")) return [3, 2];
                          return [4, this.unregisterWithPredicate(methodFilter, forStream)];
                      case 1:
                          _a.sent();
                          return [2];
                      case 2:
                          if (typeof methodFilter === "string") {
                              methodDefinition = { name: methodFilter };
                          }
                          else {
                              methodDefinition = methodFilter;
                          }
                          if (methodDefinition.name === undefined) {
                              return [2, Promise.reject("Method name is required. Cannot find a method if the method name is undefined!")];
                          }
                          methodToBeRemoved = this.serverRepository.getList().find(function (serverMethod) {
                              return serverMethod.definition.name === methodDefinition.name
                                  && (serverMethod.definition.supportsStreaming || false) === forStream;
                          });
                          if (!methodToBeRemoved) {
                              return [2, Promise.reject("Method with a name \"" + methodDefinition.name + "\" does not exist or is not registered by your application!")];
                          }
                          return [4, this.removeMethodsOrStreams([methodToBeRemoved])];
                      case 3:
                          _a.sent();
                          return [2];
                  }
              });
          });
      };
      Server.prototype.unregisterWithPredicate = function (filterPredicate, forStream) {
          return __awaiter$1(this, void 0, void 0, function () {
              var methodsOrStreamsToRemove;
              return __generator$1(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                          methodsOrStreamsToRemove = this.serverRepository.getList()
                              .filter(function (sm) { return filterPredicate(sm.definition); })
                              .filter(function (serverMethod) {
                              return (serverMethod.definition.supportsStreaming || false) === forStream;
                          });
                          if (!methodsOrStreamsToRemove || methodsOrStreamsToRemove.length === 0) {
                              return [2, Promise.reject("Could not find a " + (forStream ? "stream" : "method") + " matching the specified condition!")];
                          }
                          return [4, this.removeMethodsOrStreams(methodsOrStreamsToRemove)];
                      case 1:
                          _a.sent();
                          return [2];
                  }
              });
          });
      };
      Server.prototype.removeMethodsOrStreams = function (methodsToRemove) {
          var _this = this;
          var methodUnregPromises = [];
          methodsToRemove.forEach(function (method) {
              var promise = _this.protocol.server.unregister(method)
                  .then(function () {
                  if (method.repoId) {
                      _this.serverRepository.remove(method.repoId);
                  }
              });
              methodUnregPromises.push(promise);
              _this.addAsCurrentlyUnregistering(method.definition.name, promise);
          });
          return Promise.all(methodUnregPromises);
      };
      Server.prototype.addAsCurrentlyUnregistering = function (methodName, promise) {
          return __awaiter$1(this, void 0, void 0, function () {
              var timeout;
              var _this = this;
              return __generator$1(this, function (_a) {
                  timeout = new Promise(function (resolve) { return setTimeout(resolve, 5000); });
                  this.currentlyUnregistering[methodName] = Promise.race([promise, timeout]).then(function () {
                      delete _this.currentlyUnregistering[methodName];
                  });
                  return [2];
              });
          });
      };
      Server.prototype.registerCore = function (method, theFunction) {
          return __awaiter$1(this, void 0, void 0, function () {
              var methodDefinition, unregisterInProgress, nameAlreadyExists, repoMethod;
              var _this = this;
              return __generator$1(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                          if (typeof method === "string") {
                              methodDefinition = { name: "" + method };
                          }
                          else {
                              methodDefinition = __assign$1({}, method);
                          }
                          if (!methodDefinition.name) {
                              return [2, Promise.reject("Please, provide a (unique) string value for the \u201Cname\u201D property in the \u201CmethodDefinition\u201D object: " + JSON.stringify(method))];
                          }
                          unregisterInProgress = this.currentlyUnregistering[methodDefinition.name];
                          if (!unregisterInProgress) return [3, 2];
                          return [4, unregisterInProgress];
                      case 1:
                          _a.sent();
                          _a.label = 2;
                      case 2:
                          nameAlreadyExists = this.serverRepository.getList()
                              .some(function (serverMethod) { return serverMethod.definition.name === methodDefinition.name; });
                          if (nameAlreadyExists) {
                              return [2, Promise.reject("A method with the name \"" + methodDefinition.name + "\" already exists! Please, provide a unique name for the method.")];
                          }
                          if (methodDefinition.supportsStreaming) {
                              return [2, Promise.reject("When you create methods with \u201Cglue.interop.register()\u201D or \u201Cglue.interop.registerAsync()\u201D the property \u201CsupportsStreaming\u201D cannot be \u201Ctrue\u201D. If you want \u201C" + methodDefinition.name + "\u201D to be a stream, please use the \u201Cglue.interop.createStream()\u201D method.")];
                          }
                          repoMethod = this.serverRepository.add({
                              definition: methodDefinition,
                              theFunction: theFunction,
                              protocolState: {},
                          });
                          return [2, this.protocol.server.register(repoMethod)
                                  .catch(function (err) {
                                  if (repoMethod === null || repoMethod === void 0 ? void 0 : repoMethod.repoId) {
                                      _this.serverRepository.remove(repoMethod.repoId);
                                  }
                                  throw err;
                              })];
                  }
              });
          });
      };
      Server.prototype.onMethodInvoked = function (methodToExecute, invocationId, invocationArgs) {
          var _this = this;
          if (!methodToExecute || !methodToExecute.theFunction) {
              return;
          }
          methodToExecute.theFunction(invocationArgs, function (err, result) {
              if (err !== undefined && err !== null) {
                  if (err.message && typeof err.message === "string") {
                      err = err.message;
                  }
                  else if (typeof err !== "string") {
                      try {
                          err = JSON.stringify(err);
                      }
                      catch (unStrException) {
                          err = "un-stringifyable error in onMethodInvoked! Top level prop names: " + Object.keys(err);
                      }
                  }
              }
              if (!result) {
                  result = {};
              }
              else if (typeof result !== "object" || Array.isArray(result)) {
                  result = { _value: result };
              }
              _this.protocol.server.methodInvocationResult(methodToExecute, invocationId, err, result);
          });
      };
      return Server;
  }());

  var InstanceWrapper = (function () {
      function InstanceWrapper(API, instance, connection) {
          var _this = this;
          this.wrapped = {};
          this.wrapped.getMethods = function () {
              return API.methodsForInstance(this);
          };
          this.wrapped.getStreams = function () {
              return API.methodsForInstance(this).filter(function (m) { return m.supportsStreaming; });
          };
          if (instance) {
              this.refreshWrappedObject(instance);
          }
          if (connection) {
              connection.loggedIn(function () {
                  _this.refresh(connection);
              });
              this.refresh(connection);
          }
      }
      InstanceWrapper.prototype.unwrap = function () {
          return this.wrapped;
      };
      InstanceWrapper.prototype.refresh = function (connection) {
          if (!connection) {
              return;
          }
          var resolvedIdentity = connection === null || connection === void 0 ? void 0 : connection.resolvedIdentity;
          var instance = Object.assign({}, resolvedIdentity !== null && resolvedIdentity !== void 0 ? resolvedIdentity : {}, { peerId: connection === null || connection === void 0 ? void 0 : connection.peerId });
          this.refreshWrappedObject(instance);
      };
      InstanceWrapper.prototype.refreshWrappedObject = function (resolvedIdentity) {
          var _a, _b, _c;
          this.wrapped.user = resolvedIdentity.user;
          this.wrapped.instance = resolvedIdentity.instance;
          this.wrapped.application = (_a = resolvedIdentity.application) !== null && _a !== void 0 ? _a : shortid();
          this.wrapped.applicationName = resolvedIdentity.applicationName;
          this.wrapped.pid = (_c = (_b = resolvedIdentity.pid) !== null && _b !== void 0 ? _b : resolvedIdentity.process) !== null && _c !== void 0 ? _c : Math.floor(Math.random() * 10000000000);
          this.wrapped.machine = resolvedIdentity.machine;
          this.wrapped.environment = resolvedIdentity.environment;
          this.wrapped.region = resolvedIdentity.region;
          this.wrapped.windowId = resolvedIdentity.windowId;
          this.wrapped.isLocal = true;
          this.wrapped.api = resolvedIdentity.api;
          this.wrapped.service = resolvedIdentity.service;
          this.wrapped.peerId = resolvedIdentity.peerId;
      };
      return InstanceWrapper;
  }());

  var hideMethodSystemFlags = function (method) {
      return __assign$1(__assign$1({}, method), { flags: method.flags.metadata || {} });
  };
  var ClientRepository = (function () {
      function ClientRepository(logger, API) {
          this.logger = logger;
          this.API = API;
          this.servers = {};
          this.methodsCount = {};
          this.callbacks = lib();
          var peerId = this.API.instance.peerId;
          this.myServer = {
              id: peerId,
              methods: {},
              instance: this.API.instance,
              wrapper: this.API.unwrappedInstance,
          };
          this.servers[peerId] = this.myServer;
      }
      ClientRepository.prototype.addServer = function (info, serverId) {
          this.logger.debug("adding server " + serverId);
          var current = this.servers[serverId];
          if (current) {
              return current.id;
          }
          var wrapper = new InstanceWrapper(this.API, info);
          var serverEntry = {
              id: serverId,
              methods: {},
              instance: wrapper.unwrap(),
              wrapper: wrapper,
          };
          this.servers[serverId] = serverEntry;
          this.callbacks.execute("onServerAdded", serverEntry.instance);
          return serverId;
      };
      ClientRepository.prototype.removeServerById = function (id, reason) {
          var _this = this;
          var server = this.servers[id];
          if (!server) {
              this.logger.warn("not aware of server " + id + ", my state " + JSON.stringify(Object.keys(this.servers)));
              return;
          }
          else {
              this.logger.debug("removing server " + id);
          }
          Object.keys(server.methods).forEach(function (methodId) {
              _this.removeServerMethod(id, methodId);
          });
          delete this.servers[id];
          this.callbacks.execute("onServerRemoved", server.instance, reason);
      };
      ClientRepository.prototype.addServerMethod = function (serverId, method) {
          var _a;
          var server = this.servers[serverId];
          if (!server) {
              throw new Error("server does not exists");
          }
          if (server.methods[method.id]) {
              return;
          }
          var identifier = this.createMethodIdentifier(method);
          var that = this;
          var methodDefinition = {
              identifier: identifier,
              gatewayId: method.id,
              name: method.name,
              displayName: method.display_name,
              description: method.description,
              version: method.version,
              objectTypes: method.object_types || [],
              accepts: method.input_signature,
              returns: method.result_signature,
              supportsStreaming: typeof method.flags !== "undefined" ? method.flags.streaming : false,
              flags: (_a = method.flags) !== null && _a !== void 0 ? _a : {},
              getServers: function () {
                  return that.getServersByMethod(identifier);
              }
          };
          methodDefinition.object_types = methodDefinition.objectTypes;
          methodDefinition.display_name = methodDefinition.displayName;
          methodDefinition.version = methodDefinition.version;
          server.methods[method.id] = methodDefinition;
          var clientMethodDefinition = hideMethodSystemFlags(methodDefinition);
          if (!this.methodsCount[identifier]) {
              this.methodsCount[identifier] = 0;
              this.callbacks.execute("onMethodAdded", clientMethodDefinition);
          }
          this.methodsCount[identifier] = this.methodsCount[identifier] + 1;
          this.callbacks.execute("onServerMethodAdded", server.instance, clientMethodDefinition);
          return methodDefinition;
      };
      ClientRepository.prototype.removeServerMethod = function (serverId, methodId) {
          var server = this.servers[serverId];
          if (!server) {
              throw new Error("server does not exists");
          }
          var method = server.methods[methodId];
          delete server.methods[methodId];
          var clientMethodDefinition = hideMethodSystemFlags(method);
          this.methodsCount[method.identifier] = this.methodsCount[method.identifier] - 1;
          if (this.methodsCount[method.identifier] === 0) {
              this.callbacks.execute("onMethodRemoved", clientMethodDefinition);
          }
          this.callbacks.execute("onServerMethodRemoved", server.instance, clientMethodDefinition);
      };
      ClientRepository.prototype.getMethods = function () {
          return this.extractMethodsFromServers(Object.values(this.servers)).map(hideMethodSystemFlags);
      };
      ClientRepository.prototype.getServers = function () {
          return Object.values(this.servers).map(this.hideServerMethodSystemFlags);
      };
      ClientRepository.prototype.onServerAdded = function (callback) {
          var unsubscribeFunc = this.callbacks.add("onServerAdded", callback);
          var serversWithMethodsToReplay = this.getServers().map(function (s) { return s.instance; });
          return this.returnUnsubWithDelayedReplay(unsubscribeFunc, serversWithMethodsToReplay, callback);
      };
      ClientRepository.prototype.onMethodAdded = function (callback) {
          var unsubscribeFunc = this.callbacks.add("onMethodAdded", callback);
          var methodsToReplay = this.getMethods();
          return this.returnUnsubWithDelayedReplay(unsubscribeFunc, methodsToReplay, callback);
      };
      ClientRepository.prototype.onServerMethodAdded = function (callback) {
          var unsubscribeFunc = this.callbacks.add("onServerMethodAdded", callback);
          var unsubCalled = false;
          var servers = this.getServers();
          setTimeout(function () {
              servers.forEach(function (server) {
                  var methods = server.methods;
                  Object.keys(methods).forEach(function (methodId) {
                      if (!unsubCalled) {
                          callback(server.instance, methods[methodId]);
                      }
                  });
              });
          }, 0);
          return function () {
              unsubCalled = true;
              unsubscribeFunc();
          };
      };
      ClientRepository.prototype.onMethodRemoved = function (callback) {
          var unsubscribeFunc = this.callbacks.add("onMethodRemoved", callback);
          return unsubscribeFunc;
      };
      ClientRepository.prototype.onServerRemoved = function (callback) {
          var unsubscribeFunc = this.callbacks.add("onServerRemoved", callback);
          return unsubscribeFunc;
      };
      ClientRepository.prototype.onServerMethodRemoved = function (callback) {
          var unsubscribeFunc = this.callbacks.add("onServerMethodRemoved", callback);
          return unsubscribeFunc;
      };
      ClientRepository.prototype.getServerById = function (id) {
          return this.hideServerMethodSystemFlags(this.servers[id]);
      };
      ClientRepository.prototype.reset = function () {
          var _a;
          var _this = this;
          Object.keys(this.servers).forEach(function (key) {
              _this.removeServerById(key, "reset");
          });
          this.servers = (_a = {},
              _a[this.myServer.id] = this.myServer,
              _a);
          this.methodsCount = {};
      };
      ClientRepository.prototype.createMethodIdentifier = function (methodInfo) {
          var accepts = methodInfo.input_signature !== undefined ? methodInfo.input_signature : "";
          var returns = methodInfo.result_signature !== undefined ? methodInfo.result_signature : "";
          return (methodInfo.name + accepts + returns).toLowerCase();
      };
      ClientRepository.prototype.getServersByMethod = function (identifier) {
          var allServers = [];
          Object.values(this.servers).forEach(function (server) {
              Object.values(server.methods).forEach(function (method) {
                  if (method.identifier === identifier) {
                      allServers.push(server.instance);
                  }
              });
          });
          return allServers;
      };
      ClientRepository.prototype.returnUnsubWithDelayedReplay = function (unsubscribeFunc, collectionToReplay, callback) {
          var unsubCalled = false;
          setTimeout(function () {
              collectionToReplay.forEach(function (item) {
                  if (!unsubCalled) {
                      callback(item);
                  }
              });
          }, 0);
          return function () {
              unsubCalled = true;
              unsubscribeFunc();
          };
      };
      ClientRepository.prototype.hideServerMethodSystemFlags = function (server) {
          var clientMethods = {};
          Object.entries(server.methods).forEach(function (_a) {
              var name = _a[0], method = _a[1];
              clientMethods[name] = hideMethodSystemFlags(method);
          });
          return __assign$1(__assign$1({}, server), { methods: clientMethods });
      };
      ClientRepository.prototype.extractMethodsFromServers = function (servers) {
          var methods = Object.values(servers).reduce(function (clientMethods, server) {
              return __spreadArrays$1(clientMethods, Object.values(server.methods));
          }, []);
          return methods;
      };
      return ClientRepository;
  }());

  var ServerRepository = (function () {
      function ServerRepository() {
          this.nextId = 0;
          this.methods = [];
      }
      ServerRepository.prototype.add = function (method) {
          method.repoId = String(this.nextId);
          this.nextId += 1;
          this.methods.push(method);
          return method;
      };
      ServerRepository.prototype.remove = function (repoId) {
          if (typeof repoId !== "string") {
              return new TypeError("Expecting a string");
          }
          this.methods = this.methods.filter(function (m) {
              return m.repoId !== repoId;
          });
      };
      ServerRepository.prototype.getById = function (id) {
          if (typeof id !== "string") {
              return undefined;
          }
          return this.methods.find(function (m) {
              return m.repoId === id;
          });
      };
      ServerRepository.prototype.getList = function () {
          return this.methods.map(function (m) { return m; });
      };
      ServerRepository.prototype.length = function () {
          return this.methods.length;
      };
      ServerRepository.prototype.reset = function () {
          this.methods = [];
      };
      return ServerRepository;
  }());

  var SUBSCRIPTION_REQUEST = "onSubscriptionRequest";
  var SUBSCRIPTION_ADDED = "onSubscriptionAdded";
  var SUBSCRIPTION_REMOVED = "onSubscriptionRemoved";
  var ServerStreaming$1 = (function () {
      function ServerStreaming(session, repository, serverRepository) {
          var _this = this;
          this.session = session;
          this.repository = repository;
          this.serverRepository = serverRepository;
          this.ERR_URI_SUBSCRIPTION_FAILED = "com.tick42.agm.errors.subscription.failure";
          this.callbacks = lib();
          this.nextStreamId = 0;
          session.on("add-interest", function (msg) {
              _this.handleAddInterest(msg);
          });
          session.on("remove-interest", function (msg) {
              _this.handleRemoveInterest(msg);
          });
      }
      ServerStreaming.prototype.acceptRequestOnBranch = function (requestContext, streamingMethod, branch) {
          if (typeof branch !== "string") {
              branch = "";
          }
          if (typeof streamingMethod.protocolState.subscriptionsMap !== "object") {
              throw new TypeError("The streaming method is missing its subscriptions.");
          }
          if (!Array.isArray(streamingMethod.protocolState.branchKeyToStreamIdMap)) {
              throw new TypeError("The streaming method is missing its branches.");
          }
          var streamId = this.getStreamId(streamingMethod, branch);
          var key = requestContext.msg.subscription_id;
          var subscription = {
              id: key,
              arguments: requestContext.arguments,
              instance: requestContext.instance,
              branchKey: branch,
              streamId: streamId,
              subscribeMsg: requestContext.msg,
          };
          streamingMethod.protocolState.subscriptionsMap[key] = subscription;
          this.session.sendFireAndForget({
              type: "accepted",
              subscription_id: key,
              stream_id: streamId,
          });
          this.callbacks.execute(SUBSCRIPTION_ADDED, subscription, streamingMethod);
      };
      ServerStreaming.prototype.rejectRequest = function (requestContext, streamingMethod, reason) {
          if (typeof reason !== "string") {
              reason = "";
          }
          this.sendSubscriptionFailed("Subscription rejected by user. " + reason, requestContext.msg.subscription_id);
      };
      ServerStreaming.prototype.pushData = function (streamingMethod, data, branches) {
          var _this = this;
          if (typeof streamingMethod !== "object" || !Array.isArray(streamingMethod.protocolState.branchKeyToStreamIdMap)) {
              return;
          }
          if (typeof data !== "object") {
              throw new Error("Invalid arguments. Data must be an object.");
          }
          if (typeof branches === "string") {
              branches = [branches];
          }
          else if (!Array.isArray(branches) || branches.length <= 0) {
              branches = [];
          }
          var streamIdList = streamingMethod.protocolState.branchKeyToStreamIdMap
              .filter(function (br) {
              if (!branches || branches.length === 0) {
                  return true;
              }
              return branches.indexOf(br.key) >= 0;
          }).map(function (br) {
              return br.streamId;
          });
          streamIdList.forEach(function (streamId) {
              var publishMessage = {
                  type: "publish",
                  stream_id: streamId,
                  data: data,
              };
              _this.session.sendFireAndForget(publishMessage);
          });
      };
      ServerStreaming.prototype.pushDataToSingle = function (method, subscription, data) {
          if (typeof data !== "object") {
              throw new Error("Invalid arguments. Data must be an object.");
          }
          var postMessage = {
              type: "post",
              subscription_id: subscription.id,
              data: data,
          };
          this.session.sendFireAndForget(postMessage);
      };
      ServerStreaming.prototype.closeSingleSubscription = function (streamingMethod, subscription) {
          if (streamingMethod.protocolState.subscriptionsMap) {
              delete streamingMethod.protocolState.subscriptionsMap[subscription.id];
          }
          var dropSubscriptionMessage = {
              type: "drop-subscription",
              subscription_id: subscription.id,
              reason: "Server dropping a single subscription",
          };
          this.session.sendFireAndForget(dropSubscriptionMessage);
          subscription.instance;
          this.callbacks.execute(SUBSCRIPTION_REMOVED, subscription, streamingMethod);
      };
      ServerStreaming.prototype.closeMultipleSubscriptions = function (streamingMethod, branchKey) {
          var _this = this;
          if (typeof streamingMethod !== "object" || typeof streamingMethod.protocolState.subscriptionsMap !== "object") {
              return;
          }
          if (!streamingMethod.protocolState.subscriptionsMap) {
              return;
          }
          var subscriptionsMap = streamingMethod.protocolState.subscriptionsMap;
          var subscriptionsToClose = Object.keys(subscriptionsMap)
              .map(function (key) {
              return subscriptionsMap[key];
          });
          if (typeof branchKey === "string") {
              subscriptionsToClose = subscriptionsToClose.filter(function (sub) {
                  return sub.branchKey === branchKey;
              });
          }
          subscriptionsToClose.forEach(function (subscription) {
              delete subscriptionsMap[subscription.id];
              var drop = {
                  type: "drop-subscription",
                  subscription_id: subscription.id,
                  reason: "Server dropping all subscriptions on stream_id: " + subscription.streamId,
              };
              _this.session.sendFireAndForget(drop);
          });
      };
      ServerStreaming.prototype.getSubscriptionList = function (streamingMethod, branchKey) {
          if (typeof streamingMethod !== "object") {
              return [];
          }
          var subscriptions = [];
          if (!streamingMethod.protocolState.subscriptionsMap) {
              return [];
          }
          var subscriptionsMap = streamingMethod.protocolState.subscriptionsMap;
          var allSubscriptions = Object.keys(subscriptionsMap)
              .map(function (key) {
              return subscriptionsMap[key];
          });
          if (typeof branchKey !== "string") {
              subscriptions = allSubscriptions;
          }
          else {
              subscriptions = allSubscriptions.filter(function (sub) {
                  return sub.branchKey === branchKey;
              });
          }
          return subscriptions;
      };
      ServerStreaming.prototype.getBranchList = function (streamingMethod) {
          if (typeof streamingMethod !== "object") {
              return [];
          }
          if (!streamingMethod.protocolState.subscriptionsMap) {
              return [];
          }
          var subscriptionsMap = streamingMethod.protocolState.subscriptionsMap;
          var allSubscriptions = Object.keys(subscriptionsMap)
              .map(function (key) {
              return subscriptionsMap[key];
          });
          var result = [];
          allSubscriptions.forEach(function (sub) {
              var branch = "";
              if (typeof sub === "object" && typeof sub.branchKey === "string") {
                  branch = sub.branchKey;
              }
              if (result.indexOf(branch) === -1) {
                  result.push(branch);
              }
          });
          return result;
      };
      ServerStreaming.prototype.onSubAdded = function (callback) {
          this.onSubscriptionLifetimeEvent(SUBSCRIPTION_ADDED, callback);
      };
      ServerStreaming.prototype.onSubRequest = function (callback) {
          this.onSubscriptionLifetimeEvent(SUBSCRIPTION_REQUEST, callback);
      };
      ServerStreaming.prototype.onSubRemoved = function (callback) {
          this.onSubscriptionLifetimeEvent(SUBSCRIPTION_REMOVED, callback);
      };
      ServerStreaming.prototype.handleRemoveInterest = function (msg) {
          var streamingMethod = this.serverRepository.getById(msg.method_id);
          if (typeof msg.subscription_id !== "string" ||
              typeof streamingMethod !== "object") {
              return;
          }
          if (!streamingMethod.protocolState.subscriptionsMap) {
              return;
          }
          if (typeof streamingMethod.protocolState.subscriptionsMap[msg.subscription_id] !== "object") {
              return;
          }
          var subscription = streamingMethod.protocolState.subscriptionsMap[msg.subscription_id];
          delete streamingMethod.protocolState.subscriptionsMap[msg.subscription_id];
          this.callbacks.execute(SUBSCRIPTION_REMOVED, subscription, streamingMethod);
      };
      ServerStreaming.prototype.onSubscriptionLifetimeEvent = function (eventName, handlerFunc) {
          this.callbacks.add(eventName, handlerFunc);
      };
      ServerStreaming.prototype.getNextStreamId = function () {
          return this.nextStreamId++ + "";
      };
      ServerStreaming.prototype.handleAddInterest = function (msg) {
          var caller = this.repository.getServerById(msg.caller_id);
          var instance = caller.instance;
          var requestContext = {
              msg: msg,
              arguments: msg.arguments_kv || {},
              instance: instance,
          };
          var streamingMethod = this.serverRepository.getById(msg.method_id);
          if (streamingMethod === undefined) {
              var errorMsg = "No method with id " + msg.method_id + " on this server.";
              this.sendSubscriptionFailed(errorMsg, msg.subscription_id);
              return;
          }
          if (streamingMethod.protocolState.subscriptionsMap &&
              streamingMethod.protocolState.subscriptionsMap[msg.subscription_id]) {
              this.sendSubscriptionFailed("A subscription with id " + msg.subscription_id + " already exists.", msg.subscription_id);
              return;
          }
          this.callbacks.execute(SUBSCRIPTION_REQUEST, requestContext, streamingMethod);
      };
      ServerStreaming.prototype.sendSubscriptionFailed = function (reason, subscriptionId) {
          var errorMessage = {
              type: "error",
              reason_uri: this.ERR_URI_SUBSCRIPTION_FAILED,
              reason: reason,
              request_id: subscriptionId,
          };
          this.session.sendFireAndForget(errorMessage);
      };
      ServerStreaming.prototype.getStreamId = function (streamingMethod, branchKey) {
          if (typeof branchKey !== "string") {
              branchKey = "";
          }
          if (!streamingMethod.protocolState.branchKeyToStreamIdMap) {
              throw new Error("streaming " + streamingMethod.definition.name + " method without protocol state");
          }
          var needleBranch = streamingMethod.protocolState.branchKeyToStreamIdMap.filter(function (branch) {
              return branch.key === branchKey;
          })[0];
          var streamId = (needleBranch ? needleBranch.streamId : undefined);
          if (typeof streamId !== "string" || streamId === "") {
              streamId = this.getNextStreamId();
              streamingMethod.protocolState.branchKeyToStreamIdMap.push({ key: branchKey, streamId: streamId });
          }
          return streamId;
      };
      return ServerStreaming;
  }());

  var ServerProtocol = (function () {
      function ServerProtocol(session, clientRepository, serverRepository, logger) {
          var _this = this;
          this.session = session;
          this.clientRepository = clientRepository;
          this.serverRepository = serverRepository;
          this.logger = logger;
          this.callbacks = lib();
          this.streaming = new ServerStreaming$1(session, clientRepository, serverRepository);
          this.session.on("invoke", function (msg) { return _this.handleInvokeMessage(msg); });
      }
      ServerProtocol.prototype.createStream = function (repoMethod) {
          repoMethod.protocolState.subscriptionsMap = {};
          repoMethod.protocolState.branchKeyToStreamIdMap = [];
          return this.register(repoMethod, true);
      };
      ServerProtocol.prototype.register = function (repoMethod, isStreaming) {
          var _this = this;
          var _a;
          var methodDef = repoMethod.definition;
          var flags = Object.assign({}, { metadata: (_a = methodDef.flags) !== null && _a !== void 0 ? _a : {} }, { streaming: isStreaming || false });
          var registerMsg = {
              type: "register",
              methods: [{
                      id: repoMethod.repoId,
                      name: methodDef.name,
                      display_name: methodDef.displayName,
                      description: methodDef.description,
                      version: methodDef.version,
                      flags: flags,
                      object_types: methodDef.objectTypes || methodDef.object_types,
                      input_signature: methodDef.accepts,
                      result_signature: methodDef.returns,
                      restrictions: undefined,
                  }],
          };
          return this.session.send(registerMsg, { methodId: repoMethod.repoId })
              .then(function () {
              _this.logger.debug("registered method " + repoMethod.definition.name + " with id " + repoMethod.repoId);
          })
              .catch(function (msg) {
              _this.logger.warn("failed to register method " + repoMethod.definition.name + " with id " + repoMethod.repoId + " - " + JSON.stringify(msg));
              throw msg;
          });
      };
      ServerProtocol.prototype.onInvoked = function (callback) {
          this.callbacks.add("onInvoked", callback);
      };
      ServerProtocol.prototype.methodInvocationResult = function (method, invocationId, err, result) {
          var msg;
          if (err || err === "") {
              msg = {
                  type: "error",
                  request_id: invocationId,
                  reason_uri: "agm.errors.client_error",
                  reason: err,
                  context: result,
                  peer_id: undefined,
              };
          }
          else {
              msg = {
                  type: "yield",
                  invocation_id: invocationId,
                  peer_id: this.session.peerId,
                  result: result,
                  request_id: undefined,
              };
          }
          this.session.sendFireAndForget(msg);
      };
      ServerProtocol.prototype.unregister = function (method) {
          return __awaiter$1(this, void 0, void 0, function () {
              var msg;
              return __generator$1(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                          msg = {
                              type: "unregister",
                              methods: [method.repoId],
                          };
                          return [4, this.session.send(msg)];
                      case 1:
                          _a.sent();
                          return [2];
                  }
              });
          });
      };
      ServerProtocol.prototype.getBranchList = function (method) {
          return this.streaming.getBranchList(method);
      };
      ServerProtocol.prototype.getSubscriptionList = function (method, branchKey) {
          return this.streaming.getSubscriptionList(method, branchKey);
      };
      ServerProtocol.prototype.closeAllSubscriptions = function (method, branchKey) {
          this.streaming.closeMultipleSubscriptions(method, branchKey);
      };
      ServerProtocol.prototype.pushData = function (method, data, branches) {
          this.streaming.pushData(method, data, branches);
      };
      ServerProtocol.prototype.pushDataToSingle = function (method, subscription, data) {
          this.streaming.pushDataToSingle(method, subscription, data);
      };
      ServerProtocol.prototype.closeSingleSubscription = function (method, subscription) {
          this.streaming.closeSingleSubscription(method, subscription);
      };
      ServerProtocol.prototype.acceptRequestOnBranch = function (requestContext, method, branch) {
          this.streaming.acceptRequestOnBranch(requestContext, method, branch);
      };
      ServerProtocol.prototype.rejectRequest = function (requestContext, method, reason) {
          this.streaming.rejectRequest(requestContext, method, reason);
      };
      ServerProtocol.prototype.onSubRequest = function (callback) {
          this.streaming.onSubRequest(callback);
      };
      ServerProtocol.prototype.onSubAdded = function (callback) {
          this.streaming.onSubAdded(callback);
      };
      ServerProtocol.prototype.onSubRemoved = function (callback) {
          this.streaming.onSubRemoved(callback);
      };
      ServerProtocol.prototype.handleInvokeMessage = function (msg) {
          var invocationId = msg.invocation_id;
          var callerId = msg.caller_id;
          var methodId = msg.method_id;
          var args = msg.arguments_kv;
          var methodList = this.serverRepository.getList();
          var method = methodList.filter(function (m) {
              return m.repoId === methodId;
          })[0];
          if (method === undefined) {
              return;
          }
          var client = this.clientRepository.getServerById(callerId).instance;
          var invocationArgs = { args: args, instance: client };
          this.callbacks.execute("onInvoked", method, invocationId, invocationArgs);
      };
      return ServerProtocol;
  }());

  var UserSubscription = (function () {
      function UserSubscription(repository, subscriptionData) {
          this.repository = repository;
          this.subscriptionData = subscriptionData;
      }
      Object.defineProperty(UserSubscription.prototype, "requestArguments", {
          get: function () {
              return this.subscriptionData.params.arguments || {};
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(UserSubscription.prototype, "servers", {
          get: function () {
              var _this = this;
              return this.subscriptionData.trackedServers
                  .filter(function (pair) { return pair.subscriptionId; })
                  .map(function (pair) { return _this.repository.getServerById(pair.serverId).instance; });
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(UserSubscription.prototype, "serverInstance", {
          get: function () {
              return this.servers[0];
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(UserSubscription.prototype, "stream", {
          get: function () {
              return this.subscriptionData.method;
          },
          enumerable: true,
          configurable: true
      });
      UserSubscription.prototype.onData = function (dataCallback) {
          if (typeof dataCallback !== "function") {
              throw new TypeError("The data callback must be a function.");
          }
          this.subscriptionData.handlers.onData.push(dataCallback);
          if (this.subscriptionData.handlers.onData.length === 1 && this.subscriptionData.queued.data.length > 0) {
              this.subscriptionData.queued.data.forEach(function (dataItem) {
                  dataCallback(dataItem);
              });
          }
      };
      UserSubscription.prototype.onClosed = function (closedCallback) {
          if (typeof closedCallback !== "function") {
              throw new TypeError("The callback must be a function.");
          }
          this.subscriptionData.handlers.onClosed.push(closedCallback);
      };
      UserSubscription.prototype.onFailed = function (callback) {
      };
      UserSubscription.prototype.onConnected = function (callback) {
          if (typeof callback !== "function") {
              throw new TypeError("The callback must be a function.");
          }
          this.subscriptionData.handlers.onConnected.push(callback);
      };
      UserSubscription.prototype.close = function () {
          this.subscriptionData.close();
      };
      UserSubscription.prototype.setNewSubscription = function (newSub) {
          this.subscriptionData = newSub;
      };
      return UserSubscription;
  }());

  var STATUS_AWAITING_ACCEPT = "awaitingAccept";
  var STATUS_SUBSCRIBED = "subscribed";
  var ERR_MSG_SUB_FAILED = "Subscription failed.";
  var ERR_MSG_SUB_REJECTED = "Subscription rejected.";
  var ON_CLOSE_MSG_SERVER_INIT = "ServerInitiated";
  var ON_CLOSE_MSG_CLIENT_INIT = "ClientInitiated";
  var ClientStreaming = (function () {
      function ClientStreaming(session, repository, logger) {
          var _this = this;
          this.session = session;
          this.repository = repository;
          this.logger = logger;
          this.subscriptionsList = {};
          this.subscriptionIdToLocalKeyMap = {};
          this.nextSubLocalKey = 0;
          this.handleErrorSubscribing = function (errorResponse) {
              var tag = errorResponse._tag;
              var subLocalKey = tag.subLocalKey;
              var pendingSub = _this.subscriptionsList[subLocalKey];
              if (typeof pendingSub !== "object") {
                  return;
              }
              pendingSub.trackedServers = pendingSub.trackedServers.filter(function (server) {
                  return server.serverId !== tag.serverId;
              });
              if (pendingSub.trackedServers.length <= 0) {
                  clearTimeout(pendingSub.timeoutId);
                  if (pendingSub.status === STATUS_AWAITING_ACCEPT) {
                      var reason = (typeof errorResponse.reason === "string" && errorResponse.reason !== "") ?
                          ' Publisher said "' + errorResponse.reason + '".' :
                          " No reason given.";
                      var callArgs = typeof pendingSub.params.arguments === "object" ?
                          JSON.stringify(pendingSub.params.arguments) :
                          "{}";
                      pendingSub.error({
                          message: ERR_MSG_SUB_REJECTED + reason + " Called with:" + callArgs,
                          called_with: pendingSub.params.arguments,
                          method: pendingSub.method,
                      });
                  }
                  else if (pendingSub.status === STATUS_SUBSCRIBED) {
                      _this.callOnClosedHandlers(pendingSub);
                  }
                  delete _this.subscriptionsList[subLocalKey];
              }
          };
          this.handleSubscribed = function (msg) {
              var subLocalKey = msg._tag.subLocalKey;
              var pendingSub = _this.subscriptionsList[subLocalKey];
              if (typeof pendingSub !== "object") {
                  return;
              }
              var serverId = msg._tag.serverId;
              var acceptingServer = pendingSub.trackedServers
                  .filter(function (server) {
                  return server.serverId === serverId;
              })[0];
              if (typeof acceptingServer !== "object") {
                  return;
              }
              acceptingServer.subscriptionId = msg.subscription_id;
              _this.subscriptionIdToLocalKeyMap[msg.subscription_id] = subLocalKey;
              var isFirstResponse = (pendingSub.status === STATUS_AWAITING_ACCEPT);
              pendingSub.status = STATUS_SUBSCRIBED;
              if (isFirstResponse) {
                  var reconnect = false;
                  var sub = pendingSub.subscription;
                  if (sub) {
                      sub.setNewSubscription(pendingSub);
                      pendingSub.success(sub);
                      reconnect = true;
                  }
                  else {
                      sub = new UserSubscription(_this.repository, pendingSub);
                      pendingSub.subscription = sub;
                      pendingSub.success(sub);
                  }
                  for (var _i = 0, _a = pendingSub.handlers.onConnected; _i < _a.length; _i++) {
                      var handler = _a[_i];
                      try {
                          handler(sub.serverInstance, reconnect);
                      }
                      catch (e) {
                      }
                  }
              }
          };
          this.handleEventData = function (msg) {
              var subLocalKey = _this.subscriptionIdToLocalKeyMap[msg.subscription_id];
              if (typeof subLocalKey === "undefined") {
                  return;
              }
              var subscription = _this.subscriptionsList[subLocalKey];
              if (typeof subscription !== "object") {
                  return;
              }
              var trackedServersFound = subscription.trackedServers.filter(function (server) {
                  return server.subscriptionId === msg.subscription_id;
              });
              if (trackedServersFound.length !== 1) {
                  return;
              }
              var isPrivateData = msg.oob;
              var sendingServerId = trackedServersFound[0].serverId;
              var receivedStreamData = function () {
                  return {
                      data: msg.data,
                      server: _this.repository.getServerById(sendingServerId).instance,
                      requestArguments: subscription.params.arguments,
                      message: undefined,
                      private: isPrivateData,
                  };
              };
              var onDataHandlers = subscription.handlers.onData;
              var queuedData = subscription.queued.data;
              if (onDataHandlers.length > 0) {
                  onDataHandlers.forEach(function (callback) {
                      if (typeof callback === "function") {
                          callback(receivedStreamData());
                      }
                  });
              }
              else {
                  queuedData.push(receivedStreamData());
              }
          };
          this.handleSubscriptionCancelled = function (msg) {
              var subLocalKey = _this.subscriptionIdToLocalKeyMap[msg.subscription_id];
              if (typeof subLocalKey === "undefined") {
                  return;
              }
              var subscription = _this.subscriptionsList[subLocalKey];
              if (typeof subscription !== "object") {
                  return;
              }
              var expectedNewLength = subscription.trackedServers.length - 1;
              subscription.trackedServers = subscription.trackedServers.filter(function (server) {
                  if (server.subscriptionId === msg.subscription_id) {
                      subscription.queued.closers.push(server.serverId);
                      return false;
                  }
                  else {
                      return true;
                  }
              });
              if (subscription.trackedServers.length !== expectedNewLength) {
                  return;
              }
              if (subscription.trackedServers.length <= 0) {
                  clearTimeout(subscription.timeoutId);
                  _this.callOnClosedHandlers(subscription);
                  delete _this.subscriptionsList[subLocalKey];
              }
              delete _this.subscriptionIdToLocalKeyMap[msg.subscription_id];
          };
          session.on("subscribed", this.handleSubscribed);
          session.on("event", this.handleEventData);
          session.on("subscription-cancelled", this.handleSubscriptionCancelled);
      }
      ClientStreaming.prototype.subscribe = function (streamingMethod, params, targetServers, success, error, existingSub) {
          var _this = this;
          if (targetServers.length === 0) {
              error({
                  method: streamingMethod,
                  called_with: params.arguments,
                  message: ERR_MSG_SUB_FAILED + " No available servers matched the target params.",
              });
              return;
          }
          var subLocalKey = this.getNextSubscriptionLocalKey();
          var pendingSub = this.registerSubscription(subLocalKey, streamingMethod, params, success, error, params.methodResponseTimeout || 10000, existingSub);
          if (typeof pendingSub !== "object") {
              error({
                  method: streamingMethod,
                  called_with: params.arguments,
                  message: ERR_MSG_SUB_FAILED + " Unable to register the user callbacks.",
              });
              return;
          }
          targetServers.forEach(function (target) {
              var serverId = target.server.id;
              var method = target.methods.find(function (m) { return m.name === streamingMethod.name; });
              if (!method) {
                  _this.logger.error("can not find method " + streamingMethod.name + " for target " + target.server.id);
                  return;
              }
              pendingSub.trackedServers.push({
                  serverId: serverId,
                  subscriptionId: undefined,
              });
              var msg = {
                  type: "subscribe",
                  server_id: serverId,
                  method_id: method.gatewayId,
                  arguments_kv: params.arguments,
              };
              _this.session.send(msg, { serverId: serverId, subLocalKey: subLocalKey })
                  .then(function (m) { return _this.handleSubscribed(m); })
                  .catch(function (err) { return _this.handleErrorSubscribing(err); });
          });
      };
      ClientStreaming.prototype.drainSubscriptions = function () {
          var existing = Object.values(this.subscriptionsList);
          this.subscriptionsList = {};
          this.subscriptionIdToLocalKeyMap = {};
          return existing;
      };
      ClientStreaming.prototype.getNextSubscriptionLocalKey = function () {
          var current = this.nextSubLocalKey;
          this.nextSubLocalKey += 1;
          return current;
      };
      ClientStreaming.prototype.registerSubscription = function (subLocalKey, method, params, success, error, timeout, existingSub) {
          var _this = this;
          var subsInfo = {
              localKey: subLocalKey,
              status: STATUS_AWAITING_ACCEPT,
              method: method,
              params: params,
              success: success,
              error: error,
              trackedServers: [],
              handlers: {
                  onData: (existingSub === null || existingSub === void 0 ? void 0 : existingSub.handlers.onData) || [],
                  onClosed: (existingSub === null || existingSub === void 0 ? void 0 : existingSub.handlers.onClosed) || [],
                  onConnected: (existingSub === null || existingSub === void 0 ? void 0 : existingSub.handlers.onConnected) || [],
              },
              queued: {
                  data: [],
                  closers: [],
              },
              timeoutId: undefined,
              close: function () { return _this.closeSubscription(subLocalKey); },
              subscription: existingSub === null || existingSub === void 0 ? void 0 : existingSub.subscription
          };
          if (!existingSub) {
              if (params.onData) {
                  subsInfo.handlers.onData.push(params.onData);
              }
              if (params.onClosed) {
                  subsInfo.handlers.onClosed.push(params.onClosed);
              }
              if (params.onConnected) {
                  subsInfo.handlers.onConnected.push(params.onConnected);
              }
          }
          this.subscriptionsList[subLocalKey] = subsInfo;
          subsInfo.timeoutId = setTimeout(function () {
              if (_this.subscriptionsList[subLocalKey] === undefined) {
                  return;
              }
              var pendingSub = _this.subscriptionsList[subLocalKey];
              if (pendingSub.status === STATUS_AWAITING_ACCEPT) {
                  error({
                      method: method,
                      called_with: params.arguments,
                      message: ERR_MSG_SUB_FAILED + " Subscription attempt timed out after " + timeout + " ms.",
                  });
                  delete _this.subscriptionsList[subLocalKey];
              }
              else if (pendingSub.status === STATUS_SUBSCRIBED && pendingSub.trackedServers.length > 0) {
                  pendingSub.trackedServers = pendingSub.trackedServers.filter(function (server) {
                      return (typeof server.subscriptionId !== "undefined");
                  });
                  delete pendingSub.timeoutId;
                  if (pendingSub.trackedServers.length <= 0) {
                      _this.callOnClosedHandlers(pendingSub);
                      delete _this.subscriptionsList[subLocalKey];
                  }
              }
          }, timeout);
          return subsInfo;
      };
      ClientStreaming.prototype.callOnClosedHandlers = function (subscription, reason) {
          var closersCount = subscription.queued.closers.length;
          var closingServerId = (closersCount > 0) ? subscription.queued.closers[closersCount - 1] : null;
          var closingServer;
          if (closingServerId !== undefined && typeof closingServerId === "string") {
              closingServer = this.repository.getServerById(closingServerId).instance;
          }
          subscription.handlers.onClosed.forEach(function (callback) {
              if (typeof callback !== "function") {
                  return;
              }
              callback({
                  message: reason || ON_CLOSE_MSG_SERVER_INIT,
                  requestArguments: subscription.params.arguments || {},
                  server: closingServer,
                  stream: subscription.method,
              });
          });
      };
      ClientStreaming.prototype.closeSubscription = function (subLocalKey) {
          var _this = this;
          var subscription = this.subscriptionsList[subLocalKey];
          if (typeof subscription !== "object") {
              return;
          }
          subscription.trackedServers.forEach(function (server) {
              if (typeof server.subscriptionId === "undefined") {
                  return;
              }
              subscription.queued.closers.push(server.serverId);
              _this.session.sendFireAndForget({
                  type: "unsubscribe",
                  subscription_id: server.subscriptionId,
                  reason_uri: "",
                  reason: ON_CLOSE_MSG_CLIENT_INIT,
              });
              delete _this.subscriptionIdToLocalKeyMap[server.subscriptionId];
          });
          subscription.trackedServers = [];
          this.callOnClosedHandlers(subscription, ON_CLOSE_MSG_CLIENT_INIT);
          delete this.subscriptionsList[subLocalKey];
      };
      return ClientStreaming;
  }());

  var ClientProtocol = (function () {
      function ClientProtocol(session, repository, logger) {
          var _this = this;
          this.session = session;
          this.repository = repository;
          this.logger = logger;
          session.on("peer-added", function (msg) { return _this.handlePeerAdded(msg); });
          session.on("peer-removed", function (msg) { return _this.handlePeerRemoved(msg); });
          session.on("methods-added", function (msg) { return _this.handleMethodsAddedMessage(msg); });
          session.on("methods-removed", function (msg) { return _this.handleMethodsRemovedMessage(msg); });
          this.streaming = new ClientStreaming(session, repository, logger);
      }
      ClientProtocol.prototype.subscribe = function (stream, options, targetServers, success, error, existingSub) {
          this.streaming.subscribe(stream, options, targetServers, success, error, existingSub);
      };
      ClientProtocol.prototype.invoke = function (id, method, args, target) {
          var _this = this;
          var serverId = target.id;
          var methodId = method.gatewayId;
          var msg = {
              type: "call",
              server_id: serverId,
              method_id: methodId,
              arguments_kv: args,
          };
          return this.session.send(msg, { invocationId: id, serverId: serverId })
              .then(function (m) { return _this.handleResultMessage(m); })
              .catch(function (err) { return _this.handleInvocationError(err); });
      };
      ClientProtocol.prototype.drainSubscriptions = function () {
          return this.streaming.drainSubscriptions();
      };
      ClientProtocol.prototype.handlePeerAdded = function (msg) {
          var newPeerId = msg.new_peer_id;
          var remoteId = msg.identity;
          var isLocal = msg.meta ? msg.meta.local : true;
          var pid = Number(remoteId.process);
          var serverInfo = {
              machine: remoteId.machine,
              pid: isNaN(pid) ? remoteId.process : pid,
              instance: remoteId.instance,
              application: remoteId.application,
              applicationName: remoteId.applicationName,
              environment: remoteId.environment,
              region: remoteId.region,
              user: remoteId.user,
              windowId: remoteId.windowId,
              peerId: newPeerId,
              api: remoteId.api,
              isLocal: isLocal
          };
          this.repository.addServer(serverInfo, newPeerId);
      };
      ClientProtocol.prototype.handlePeerRemoved = function (msg) {
          var removedPeerId = msg.removed_id;
          var reason = msg.reason;
          this.repository.removeServerById(removedPeerId, reason);
      };
      ClientProtocol.prototype.handleMethodsAddedMessage = function (msg) {
          var _this = this;
          var serverId = msg.server_id;
          var methods = msg.methods;
          methods.forEach(function (method) {
              _this.repository.addServerMethod(serverId, method);
          });
      };
      ClientProtocol.prototype.handleMethodsRemovedMessage = function (msg) {
          var _this = this;
          var serverId = msg.server_id;
          var methodIdList = msg.methods;
          var server = this.repository.getServerById(serverId);
          var serverMethodKeys = Object.keys(server.methods);
          serverMethodKeys.forEach(function (methodKey) {
              var method = server.methods[methodKey];
              if (methodIdList.indexOf(method.gatewayId) > -1) {
                  _this.repository.removeServerMethod(serverId, methodKey);
              }
          });
      };
      ClientProtocol.prototype.handleResultMessage = function (msg) {
          var invocationId = msg._tag.invocationId;
          var result = msg.result;
          var serverId = msg._tag.serverId;
          var server = this.repository.getServerById(serverId);
          return {
              invocationId: invocationId,
              result: result,
              instance: server.instance,
              status: InvokeStatus.Success,
              message: ""
          };
      };
      ClientProtocol.prototype.handleInvocationError = function (msg) {
          this.logger.debug("handle invocation error " + JSON.stringify(msg));
          if ("_tag" in msg) {
              var invocationId = msg._tag.invocationId;
              var serverId = msg._tag.serverId;
              var server = this.repository.getServerById(serverId);
              var message = msg.reason;
              var context_1 = msg.context;
              return {
                  invocationId: invocationId,
                  result: context_1,
                  instance: server.instance,
                  status: InvokeStatus.Error,
                  message: message
              };
          }
          else {
              return {
                  invocationId: "",
                  message: msg.message,
                  status: InvokeStatus.Error,
                  error: msg
              };
          }
      };
      return ClientProtocol;
  }());

  function gW3ProtocolFactory (instance, connection, clientRepository, serverRepository, libConfig, interop) {
      var logger = libConfig.logger.subLogger("gw3-protocol");
      var resolveReadyPromise;
      var readyPromise = new Promise(function (resolve) {
          resolveReadyPromise = resolve;
      });
      var session = connection.domain("agm", ["subscribed"]);
      var server = new ServerProtocol(session, clientRepository, serverRepository, logger.subLogger("server"));
      var client = new ClientProtocol(session, clientRepository, logger.subLogger("client"));
      function handleReconnect() {
          logger.info("reconnected - will replay registered methods and subscriptions");
          var existingSubscriptions = client.drainSubscriptions();
          for (var _i = 0, existingSubscriptions_1 = existingSubscriptions; _i < existingSubscriptions_1.length; _i++) {
              var sub = existingSubscriptions_1[_i];
              var methodInfo = sub.method;
              var params = Object.assign({}, sub.params);
              logger.info("trying to re-subscribe to method " + methodInfo.name);
              interop.client.subscribe(methodInfo, params, undefined, undefined, sub);
          }
          var registeredMethods = serverRepository.getList();
          serverRepository.reset();
          for (var _a = 0, registeredMethods_1 = registeredMethods; _a < registeredMethods_1.length; _a++) {
              var method = registeredMethods_1[_a];
              var def = method.definition;
              logger.info("re-publishing method " + def.name);
              if (method.stream) {
                  interop.server.createStream(def, method.streamCallbacks, undefined, undefined, method.stream);
              }
              else if (method.theFunction && method.theFunction.userCallback) {
                  interop.register(def, method.theFunction.userCallback);
              }
              else if (method.theFunction && method.theFunction.userCallbackAsync) {
                  interop.registerAsync(def, method.theFunction.userCallbackAsync);
              }
          }
      }
      function handleInitialJoin() {
          if (resolveReadyPromise) {
              resolveReadyPromise({
                  client: client,
                  server: server,
              });
              resolveReadyPromise = undefined;
          }
      }
      session.onJoined(function (reconnect) {
          clientRepository.addServer(instance, connection.peerId);
          if (reconnect) {
              handleReconnect();
          }
          else {
              handleInitialJoin();
          }
      });
      session.onLeft(function () {
          clientRepository.reset();
      });
      session.join();
      return readyPromise;
  }

  var Interop = (function () {
      function Interop(configuration) {
          var _this = this;
          if (typeof configuration === "undefined") {
              throw new Error("configuration is required");
          }
          if (typeof configuration.connection === "undefined") {
              throw new Error("configuration.connections is required");
          }
          var connection = configuration.connection;
          if (typeof configuration.methodResponseTimeout !== "number") {
              configuration.methodResponseTimeout = 30 * 1000;
          }
          if (typeof configuration.waitTimeoutMs !== "number") {
              configuration.waitTimeoutMs = 30 * 1000;
          }
          this.unwrappedInstance = new InstanceWrapper(this, undefined, connection);
          this.instance = this.unwrappedInstance.unwrap();
          this.clientRepository = new ClientRepository(configuration.logger.subLogger("cRep"), this);
          this.serverRepository = new ServerRepository();
          var protocolPromise;
          if (connection.protocolVersion === 3) {
              protocolPromise = gW3ProtocolFactory(this.instance, connection, this.clientRepository, this.serverRepository, configuration, this);
          }
          else {
              throw new Error("protocol " + connection.protocolVersion + " not supported");
          }
          this.readyPromise = protocolPromise.then(function (protocol) {
              _this.protocol = protocol;
              _this.client = new Client(_this.protocol, _this.clientRepository, _this.instance, configuration);
              _this.server = new Server(_this.protocol, _this.serverRepository);
              return _this;
          });
      }
      Interop.prototype.ready = function () {
          return this.readyPromise;
      };
      Interop.prototype.serverRemoved = function (callback) {
          return this.client.serverRemoved(callback);
      };
      Interop.prototype.serverAdded = function (callback) {
          return this.client.serverAdded(callback);
      };
      Interop.prototype.serverMethodRemoved = function (callback) {
          return this.client.serverMethodRemoved(callback);
      };
      Interop.prototype.serverMethodAdded = function (callback) {
          return this.client.serverMethodAdded(callback);
      };
      Interop.prototype.methodRemoved = function (callback) {
          return this.client.methodRemoved(callback);
      };
      Interop.prototype.methodAdded = function (callback) {
          return this.client.methodAdded(callback);
      };
      Interop.prototype.methodsForInstance = function (instance) {
          return this.client.methodsForInstance(instance);
      };
      Interop.prototype.methods = function (methodFilter) {
          return this.client.methods(methodFilter);
      };
      Interop.prototype.servers = function (methodFilter) {
          return this.client.servers(methodFilter);
      };
      Interop.prototype.subscribe = function (method, options, successCallback, errorCallback) {
          return this.client.subscribe(method, options, successCallback, errorCallback);
      };
      Interop.prototype.createStream = function (streamDef, callbacks, successCallback, errorCallback) {
          return this.server.createStream(streamDef, callbacks, successCallback, errorCallback);
      };
      Interop.prototype.unregister = function (methodFilter) {
          return this.server.unregister(methodFilter);
      };
      Interop.prototype.registerAsync = function (methodDefinition, callback) {
          return this.server.registerAsync(methodDefinition, callback);
      };
      Interop.prototype.register = function (methodDefinition, callback) {
          return this.server.register(methodDefinition, callback);
      };
      Interop.prototype.invoke = function (methodFilter, argumentObj, target, additionalOptions, success, error) {
          return this.client.invoke(methodFilter, argumentObj, target, additionalOptions, success, error);
      };
      Interop.prototype.waitForMethod = function (name) {
          var pw = new PromiseWrapper();
          var unsubscribe = this.client.methodAdded(function (m) {
              if (m.name === name) {
                  unsubscribe();
                  pw.resolve(m);
              }
          });
          return pw.promise;
      };
      return Interop;
  }());

  var successMessages = ["subscribed", "success"];
  var MessageBus = (function () {
      function MessageBus(connection, logger) {
          var _this = this;
          this.publish = function (topic, data, options) {
              var _a = options || {}, routingKey = _a.routingKey, target = _a.target;
              var args = _this.removeEmptyValues({
                  type: "publish",
                  topic: topic,
                  data: data,
                  peer_id: _this.peerId,
                  routing_key: routingKey,
                  target_identity: target
              });
              _this.session.send(args);
          };
          this.subscribe = function (topic, callback, options) {
              return new Promise(function (resolve, reject) {
                  var _a = options || {}, routingKey = _a.routingKey, target = _a.target;
                  var args = _this.removeEmptyValues({
                      type: "subscribe",
                      topic: topic,
                      peer_id: _this.peerId,
                      routing_key: routingKey,
                      source: target
                  });
                  _this.session.send(args)
                      .then(function (response) {
                      var subscription_id = response.subscription_id;
                      _this.subscriptions.push({ subscription_id: subscription_id, topic: topic, callback: callback, source: target });
                      resolve({
                          unsubscribe: function () {
                              _this.session.send({ type: "unsubscribe", subscription_id: subscription_id, peer_id: _this.peerId });
                              _this.subscriptions = _this.subscriptions.filter(function (s) { return s.subscription_id !== subscription_id; });
                              return Promise.resolve();
                          }
                      });
                  })
                      .catch(function (error) { return reject(error); });
              });
          };
          this.watchOnEvent = function () {
              _this.session.on("event", function (args) {
                  var data = args.data, subscription_id = args.subscription_id;
                  var source = args["publisher-identity"];
                  var subscription = _this.subscriptions.find(function (s) { return s.subscription_id === subscription_id; });
                  if (subscription) {
                      if (!subscription.source) {
                          subscription.callback(data, subscription.topic, source);
                      }
                      else {
                          if (_this.keysMatch(subscription.source, source)) {
                              subscription.callback(data, subscription.topic, source);
                          }
                      }
                  }
              });
          };
          this.connection = connection;
          this.logger = logger;
          this.peerId = connection.peerId;
          this.subscriptions = [];
          this.session = connection.domain("bus", successMessages);
          this.readyPromise = this.session.join();
          this.readyPromise.then(function () {
              _this.watchOnEvent();
          });
      }
      MessageBus.prototype.ready = function () {
          return this.readyPromise;
      };
      MessageBus.prototype.removeEmptyValues = function (obj) {
          var cleaned = {};
          Object.keys(obj).forEach(function (key) {
              if (obj[key] !== undefined && obj[key] !== null) {
                  cleaned[key] = obj[key];
              }
          });
          return cleaned;
      };
      MessageBus.prototype.keysMatch = function (obj1, obj2) {
          var keysObj1 = Object.keys(obj1);
          var allMatch = true;
          keysObj1.forEach(function (key) {
              if (obj1[key] !== obj2[key]) {
                  allMatch = false;
              }
          });
          return allMatch;
      };
      return MessageBus;
  }());

  var GlueCore = function (userConfig, ext) {
      var gdVersion = Utils.getGDMajorVersion();
      var glue42gd;
      var preloadPromise = Promise.resolve();
      if (gdVersion) {
          if (gdVersion < 3) {
              throw new Error("GD v2 is not supported. Use v4 of the API to run in that context.");
          }
          else if (gdVersion >= 3) {
              glue42gd = window.glue42gd;
              preloadPromise = window.gdPreloadPromise || preloadPromise;
          }
      }
      var glueInitTimer = timer("glue");
      userConfig = userConfig || {};
      ext = ext || {};
      var internalConfig = prepareConfig(userConfig, ext, glue42gd);
      var _connection;
      var _interop;
      var _logger;
      var _metrics;
      var _contexts;
      var _bus;
      var _allowTrace;
      var libs = {};
      function registerLib(name, inner, t) {
          _allowTrace = _logger.canPublish("trace");
          if (_allowTrace) {
              _logger.trace("registering " + name + " module");
          }
          var done = function () {
              inner.initTime = t.stop();
              inner.initEndTime = t.endTime;
              inner.marks = t.marks;
              if (_allowTrace) {
                  _logger.trace(name + " is ready - " + (t.endTime - t.startTime));
              }
          };
          inner.initStartTime = t.startTime;
          if (inner.ready) {
              inner.ready().then(function () {
                  done();
              });
          }
          else {
              done();
          }
          if (!Array.isArray(name)) {
              name = [name];
          }
          name.forEach(function (n) {
              libs[n] = inner;
              GlueCore[n] = inner;
          });
      }
      function setupConnection() {
          var initTimer = timer("connection");
          _connection = new Connection(internalConfig.connection, _logger.subLogger("connection"));
          var authPromise = Promise.resolve(internalConfig.auth);
          if (internalConfig.connection && !internalConfig.auth) {
              if (glue42gd) {
                  authPromise = glue42gd.getGWToken()
                      .then(function (token) {
                      return {
                          gatewayToken: token
                      };
                  });
              }
              else {
                  authPromise = Promise.reject("You need to provide auth information");
              }
          }
          return authPromise
              .then(function (authConfig) {
              initTimer.mark("auth-promise-resolved");
              var authRequest;
              if (Object.prototype.toString.call(authConfig) === "[object Object]") {
                  authRequest = authConfig;
              }
              else {
                  throw new Error("Invalid auth object - " + JSON.stringify(authConfig));
              }
              return _connection.login(authRequest);
          })
              .then(function () {
              registerLib("connection", _connection, initTimer);
              return internalConfig;
          })
              .catch(function (e) {
              if (_connection) {
                  _connection.logout();
              }
              throw e;
          });
      }
      function setupLogger() {
          var _a;
          var initTimer = timer("logger");
          _logger = new Logger("" + ((_a = internalConfig.connection.identity) === null || _a === void 0 ? void 0 : _a.application), undefined, internalConfig.customLogger);
          _logger.consoleLevel(internalConfig.logger.console);
          _logger.publishLevel(internalConfig.logger.publish);
          if (_logger.canPublish("debug")) {
              _logger.debug("initializing glue...");
          }
          registerLib("logger", _logger, initTimer);
          return Promise.resolve(undefined);
      }
      function setupMetrics() {
          var _a, _b, _c, _d, _e;
          var initTimer = timer("metrics");
          var config = internalConfig.metrics;
          var metricsPublishingEnabledFunc = glue42gd === null || glue42gd === void 0 ? void 0 : glue42gd.getMetricsPublishingEnabled;
          var identity = internalConfig.connection.identity;
          var canUpdateMetric = metricsPublishingEnabledFunc ? metricsPublishingEnabledFunc : function () { return true; };
          var disableAutoAppSystem = (_a = (typeof config !== "boolean" && config.disableAutoAppSystem)) !== null && _a !== void 0 ? _a : false;
          _metrics = metrics({
              connection: config ? _connection : undefined,
              logger: _logger.subLogger("metrics"),
              canUpdateMetric: canUpdateMetric,
              system: "Glue42",
              service: (_c = (_b = identity === null || identity === void 0 ? void 0 : identity.service) !== null && _b !== void 0 ? _b : glue42gd === null || glue42gd === void 0 ? void 0 : glue42gd.applicationName) !== null && _c !== void 0 ? _c : internalConfig.application,
              instance: (_e = (_d = identity === null || identity === void 0 ? void 0 : identity.instance) !== null && _d !== void 0 ? _d : identity === null || identity === void 0 ? void 0 : identity.windowId) !== null && _e !== void 0 ? _e : shortid(),
              disableAutoAppSystem: disableAutoAppSystem,
              pagePerformanceMetrics: typeof config !== "boolean" ? config === null || config === void 0 ? void 0 : config.pagePerformanceMetrics : undefined
          });
          registerLib("metrics", _metrics, initTimer);
          return Promise.resolve();
      }
      function setupInterop() {
          var initTimer = timer("interop");
          var agmConfig = {
              connection: _connection,
              logger: _logger.subLogger("interop"),
          };
          _interop = new Interop(agmConfig);
          Logger.Interop = _interop;
          registerLib(["interop", "agm"], _interop, initTimer);
          return Promise.resolve();
      }
      function setupContexts() {
          var hasActivities = (internalConfig.activities && _connection.protocolVersion === 3);
          var needsContexts = internalConfig.contexts || hasActivities;
          if (needsContexts) {
              var initTimer = timer("contexts");
              _contexts = new ContextsModule({
                  connection: _connection,
                  logger: _logger.subLogger("contexts")
              });
              registerLib("contexts", _contexts, initTimer);
              return _contexts;
          }
          else {
              var replayer = _connection.replayer;
              if (replayer) {
                  replayer.drain(ContextMessageReplaySpec.name);
              }
          }
      }
      function setupBus() {
          return __awaiter$1(this, void 0, void 0, function () {
              var initTimer;
              return __generator$1(this, function (_a) {
                  if (!internalConfig.bus) {
                      return [2, Promise.resolve()];
                  }
                  initTimer = timer("bus");
                  _bus = new MessageBus(_connection, _logger.subLogger("bus"));
                  registerLib("bus", _bus, initTimer);
                  return [2, Promise.resolve()];
              });
          });
      }
      function setupExternalLibs(externalLibs) {
          try {
              externalLibs.forEach(function (lib) {
                  setupExternalLib(lib.name, lib.create);
              });
              return Promise.resolve();
          }
          catch (e) {
              return Promise.reject(e);
          }
      }
      function setupExternalLib(name, createCallback) {
          var initTimer = timer(name);
          var lib = createCallback(libs);
          if (lib) {
              registerLib(name, lib, initTimer);
          }
      }
      function waitForLibs() {
          var libsReadyPromises = Object.keys(libs).map(function (key) {
              var lib = libs[key];
              return lib.ready ?
                  lib.ready() : Promise.resolve();
          });
          return Promise.all(libsReadyPromises);
      }
      function constructGlueObject() {
          var feedbackFunc = function (feedbackInfo) {
              if (!_interop) {
                  return;
              }
              _interop.invoke("T42.ACS.Feedback", feedbackInfo, "best");
          };
          var info = {
              coreVersion: version,
              version: internalConfig.version
          };
          glueInitTimer.stop();
          var glue = {
              feedback: feedbackFunc,
              info: info,
              logger: _logger,
              interop: _interop,
              agm: _interop,
              connection: _connection,
              metrics: _metrics,
              contexts: _contexts,
              bus: _bus,
              version: internalConfig.version,
              userConfig: userConfig,
              done: function () {
                  _logger === null || _logger === void 0 ? void 0 : _logger.info("done called by user...");
                  return _connection.logout();
              }
          };
          glue.performance = {
              get glueVer() {
                  return internalConfig.version;
              },
              get glueConfig() {
                  return JSON.stringify(userConfig);
              },
              get browser() {
                  return window.performance.timing.toJSON();
              },
              get memory() {
                  return window.performance.memory;
              },
              get initTimes() {
                  var all = getAllTimers();
                  return Object.keys(all).map(function (key) {
                      var t = all[key];
                      return {
                          name: key,
                          duration: t.endTime - t.startTime,
                          marks: t.marks,
                          startTime: t.startTime,
                          endTime: t.endTime
                      };
                  });
              }
          };
          Object.keys(libs).forEach(function (key) {
              var lib = libs[key];
              glue[key] = lib;
          });
          glue.config = {};
          Object.keys(internalConfig).forEach(function (k) {
              glue.config[k] = internalConfig[k];
          });
          if (ext && ext.extOptions) {
              Object.keys(ext.extOptions).forEach(function (k) {
                  glue.config[k] = ext === null || ext === void 0 ? void 0 : ext.extOptions[k];
              });
          }
          if (ext === null || ext === void 0 ? void 0 : ext.enrichGlue) {
              ext.enrichGlue(glue);
          }
          if (glue42gd && glue42gd.updatePerfData) {
              glue42gd.updatePerfData(glue.performance);
          }
          if (glue.agm) {
              var deprecatedDecorator = function (fn, wrong, proper) {
                  return function () {
                      glue.logger.warn("glue.js - 'glue.agm." + wrong + "' method is deprecated, use 'glue.interop." + proper + "' instead.");
                      return fn.apply(glue.agm, arguments);
                  };
              };
              var agmAny = glue.agm;
              agmAny.method_added = deprecatedDecorator(glue.agm.methodAdded, "method_added", "methodAdded");
              agmAny.method_removed = deprecatedDecorator(glue.agm.methodRemoved, "method_removed", "methodRemoved");
              agmAny.server_added = deprecatedDecorator(glue.agm.serverAdded, "server_added", "serverAdded");
              agmAny.server_method_aded = deprecatedDecorator(glue.agm.serverMethodAdded, "server_method_aded", "serverMethodAdded");
              agmAny.server_method_removed = deprecatedDecorator(glue.agm.serverMethodRemoved, "server_method_removed", "serverMethodRemoved");
          }
          return glue;
      }
      return preloadPromise
          .then(setupLogger)
          .then(setupConnection)
          .then(function () { return Promise.all([setupMetrics(), setupInterop(), setupContexts(), setupBus()]); })
          .then(function () { return _interop.readyPromise; })
          .then(function () {
          return setupExternalLibs(internalConfig.libs || []);
      })
          .then(waitForLibs)
          .then(constructGlueObject)
          .catch(function (err) {
          return Promise.reject({
              err: err,
              libs: libs
          });
      });
  };
  if (typeof window !== "undefined") {
      window.GlueCore = GlueCore;
  }
  GlueCore.version = version;
  GlueCore.default = GlueCore;

  var ActivityEntity = (function () {
      function ActivityEntity(id) {
          this._id = id;
      }
      Object.defineProperty(ActivityEntity.prototype, "id", {
          get: function () {
              return this._id;
          },
          enumerable: true,
          configurable: true
      });
      ActivityEntity.prototype._update = function (other) {
          if (other._id !== this._id) {
              throw Error("Can not update from entity with different id.");
          }
          this._updateCore(other);
      };
      ActivityEntity.prototype._updateCore = function (other) {
          return;
      };
      ActivityEntity.prototype._beforeDelete = function (other) {
          return;
      };
      return ActivityEntity;
  }());

  function isNumber(arg) {
      return typeof arg === "number";
  }
  function isString(arg) {
      return typeof arg === "string";
  }
  function isObject(arg) {
      return typeof arg === "object" && arg !== null;
  }
  function isArray(arg) {
      if (Array.isArray) {
          return Array.isArray(arg);
      }
      return toString.call(arg) === "[object Array]";
  }
  function isUndefined(arg) {
      return typeof arg === "undefined";
  }
  function isUndefinedOrNull(arg) {
      return arg === null || typeof arg === "undefined";
  }
  function isNullOrWhiteSpace(str) {
      return (typeof str !== "string" || !str || str.length === 0 || /^\s*$/.test(str));
  }
  function isFunction(arg) {
      return !!(arg && arg.constructor && arg.call && arg.apply);
  }
  function some(array, predicate) {
      for (var index = 0; index < array.length; index++) {
          if (predicate(array[index], index)) {
              return true;
          }
      }
      return false;
  }
  function ifNotUndefined(what, doWithIt) {
      if (typeof what !== "undefined") {
          doWithIt(what);
      }
  }
  function promisify$1(promise, successCallback, errorCallback) {
      if (typeof successCallback !== "function" && typeof errorCallback !== "function") {
          return promise;
      }
      if (typeof successCallback !== "function") {
          successCallback = function () { return; };
      }
      else if (typeof errorCallback !== "function") {
          errorCallback = function () { return; };
      }
      promise.then(successCallback, errorCallback);
  }

  var ActivityType = (function (_super) {
      __extends(ActivityType, _super);
      function ActivityType(name, ownerWindow, helperWindows, description) {
          var _this = _super.call(this, name) || this;
          _this._name = name;
          _this._description = description;
          _this._ownerWindow = ownerWindow;
          _this._helperWindows = helperWindows || [];
          return _this;
      }
      Object.defineProperty(ActivityType.prototype, "name", {
          get: function () {
              return this._name;
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(ActivityType.prototype, "description", {
          get: function () {
              return this._description;
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(ActivityType.prototype, "helperWindows", {
          get: function () {
              var _this = this;
              return this._helperWindows.map(function (hw) { return _this.covertToWindowDef(hw); });
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(ActivityType.prototype, "ownerWindow", {
          get: function () {
              return this.covertToWindowDef(this._ownerWindow);
          },
          enumerable: true,
          configurable: true
      });
      ActivityType.prototype.initiate = function (context, callback, configuration) {
          return this._manager.initiate(this._name, context, callback, configuration);
      };
      ActivityType.prototype._updateCore = function (other) {
          var _this = this;
          _super.prototype._updateCore.call(this, other);
          ifNotUndefined(other._description, function (x) { return _this._description = x; });
          ifNotUndefined(other._ownerWindow, function (x) { return _this._ownerWindow = x; });
          ifNotUndefined(other._helperWindows, function (x) { return _this._helperWindows = x; });
      };
      ActivityType.prototype.covertToWindowDef = function (windowType) {
          var _a, _b, _c, _d;
          return {
              type: (_b = (_a = windowType) === null || _a === void 0 ? void 0 : _a.id) === null || _b === void 0 ? void 0 : _b.type,
              name: (_d = (_c = windowType) === null || _c === void 0 ? void 0 : _c.id) === null || _d === void 0 ? void 0 : _d.name
          };
      };
      return ActivityType;
  }(ActivityEntity));

  var WindowType = (function (_super) {
      __extends(WindowType, _super);
      function WindowType(name, appByWindowTypeGetter) {
          var _this = _super.call(this, name) || this;
          _this._name = name;
          _this._appByWindowTypeGetter = appByWindowTypeGetter;
          return _this;
      }
      Object.defineProperty(WindowType.prototype, "name", {
          get: function () {
              return this._name;
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(WindowType.prototype, "config", {
          get: function () {
              return this._appByWindowTypeGetter(this._name);
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(WindowType.prototype, "windows", {
          get: function () {
              return this._manager.getWindows({ type: this._name });
          },
          enumerable: true,
          configurable: true
      });
      WindowType.prototype.create = function (activity, configuration) {
          var definition = Object.assign({ type: this.name, name: this.name, isIndependent: false }, configuration);
          return this._manager.createWindow(activity, definition);
      };
      return WindowType;
  }(ActivityEntity));

  var EntityEvent = (function () {
      function EntityEvent(entitiy, context) {
          this.entity = entitiy;
          this.context = context;
      }
      return EntityEvent;
  }());
  var EntityEventContext = (function () {
      function EntityEventContext(eventType) {
          this.type = eventType;
      }
      return EntityEventContext;
  }());
  var ActivityStatusChangeEventContext = (function (_super) {
      __extends(ActivityStatusChangeEventContext, _super);
      function ActivityStatusChangeEventContext(newStatus, oldStatus) {
          var _this = _super.call(this, EntityEventType.StatusChange) || this;
          _this.newStatus = newStatus;
          _this.oldStatus = oldStatus;
          return _this;
      }
      return ActivityStatusChangeEventContext;
  }(EntityEventContext));
  var ActivityContextChangedEventContext = (function (_super) {
      __extends(ActivityContextChangedEventContext, _super);
      function ActivityContextChangedEventContext(context, updated, removed) {
          var _this = _super.call(this, EntityEventType.ActivityContextChange) || this;
          _this.context = typeof context === "string" ? JSON.parse(context) : context;
          _this.updated = updated;
          _this.removed = removed;
          return _this;
      }
      return ActivityContextChangedEventContext;
  }(EntityEventContext));
  var EntityEventType = (function () {
      function EntityEventType() {
      }
      EntityEventType.Added = "added";
      EntityEventType.Removed = "removed";
      EntityEventType.Updated = "updated";
      EntityEventType.Closed = "closed";
      EntityEventType.StatusChange = "statusChange";
      EntityEventType.ActivityContextChange = "activityContextUpdate";
      EntityEventType.ActivityWindowEvent = "activityWindowEvent";
      EntityEventType.ActivityWindowJoinedActivity = "joined";
      EntityEventType.ActivityWindowLeftActivity = "left";
      return EntityEventType;
  }());
  var ActivityState = (function () {
      function ActivityState() {
      }
      ActivityState.Created = "created";
      ActivityState.Started = "started";
      ActivityState.Destroyed = "destroyed";
      return ActivityState;
  }());

  var ActivityAGM = (function () {
      function ActivityAGM(activity) {
          this._activity = activity;
      }
      ActivityAGM.prototype.register = function (definition, handler) {
          this._ensureHasAgm();
          ActivityAGM.AGM.register(definition, handler);
      };
      ActivityAGM.prototype.servers = function () {
          this._ensureHasAgm();
          if (isUndefinedOrNull(this._activity)) {
              return [];
          }
          return this._activity.windows.map(function (w) {
              return w.instance;
          });
      };
      ActivityAGM.prototype.methods = function () {
          var _this = this;
          this._ensureHasAgm();
          if (isUndefinedOrNull(this._activity)) {
              return [];
          }
          var windows = this._activity.windows;
          var methodNames = [];
          var methods = [];
          windows.forEach(function (window) {
              var windowMethods = _this.methodsForWindow(window);
              windowMethods.forEach(function (currentWindowMethod) {
                  if (methodNames.indexOf(currentWindowMethod.name) === -1) {
                      methodNames.push(currentWindowMethod.name);
                      methods.push(currentWindowMethod);
                  }
              });
          });
          return methods;
      };
      ActivityAGM.prototype.methodsForWindow = function (window) {
          this._ensureHasAgm();
          if (!window.instance) {
              return [];
          }
          return ActivityAGM.AGM.methodsForInstance(window.instance);
      };
      ActivityAGM.prototype.invoke = function (methodName, arg, target, options, success, error) {
          this._ensureHasAgm();
          var activityServers = this.servers();
          if (isUndefinedOrNull(target)) {
              target = "activity.all";
          }
          if (isString(target)) {
              if (target === "activity.all") ;
              else if (target === "activity.best") {
                  var potentialTargets = activityServers.filter(function (server) {
                      var methods = ActivityAGM.AGM.methodsForInstance(server);
                      return methods.filter(function (m) {
                          return m.name === methodName;
                      }).length > 0;
                  });
                  if (potentialTargets.length > 0) {
                      [potentialTargets[0]];
                  }
              }
              else if (target === "all" || target === "best") {
                  return promisify$1(ActivityAGM.AGM.invoke(methodName, arg, target, options), success, error);
              }
              else {
                  throw new Error("Invalid invoke target " + target);
              }
          }
          else if (isArray(target)) {
              if (target.length >= 0) {
                  var firstElem = target[0];
                  if (this._isInstance(firstElem)) {
                      target.map(function (instance) { return instance; });
                  }
                  else if (this._isActivityWindow(firstElem)) {
                      target.map(function (win) { return win.instance; });
                  }
                  else {
                      throw new Error("Unknown target object");
                  }
              }
          }
          else {
              if (this._isInstance(target)) ;
              else if (this._isActivityWindow(target)) {
                  [target.instance];
              }
              else {
                  throw new Error("Unknown target object");
              }
          }
          throw new Error("Not implemented");
      };
      ActivityAGM.prototype.unregister = function (definition) {
          this._ensureHasAgm();
          return ActivityAGM.AGM.unregister(definition);
      };
      ActivityAGM.prototype.createStream = function (methodDefinition, subscriptionAddedHandler, subscriptionRemovedHandler) {
          this._ensureHasAgm();
          ActivityAGM.AGM.createStream(methodDefinition, {
              subscriptionAddedHandler: subscriptionAddedHandler,
              subscriptionRemovedHandler: subscriptionRemovedHandler,
              subscriptionRequestHandler: undefined
          });
      };
      ActivityAGM.prototype.subscribe = function (methodDefinition, parameters, target) {
          this._ensureHasAgm();
          return ActivityAGM.AGM.subscribe(methodDefinition, parameters);
      };
      ActivityAGM.prototype._ensureHasAgm = function () {
          if (isUndefinedOrNull(ActivityAGM.AGM)) {
              throw new Error("Agm should be configured to be used in activity");
          }
      };
      ActivityAGM.prototype._isInstance = function (obj) {
          return obj.application !== undefined;
      };
      ActivityAGM.prototype._isActivityWindow = function (obj) {
          return obj.instance !== undefined;
      };
      return ActivityAGM;
  }());

  var AttachedActivityDescriptor = (function () {
      function AttachedActivityDescriptor(manager, ownerActivityId, state) {
          this._manager = manager;
          this._ownerActivityId = ownerActivityId;
          this._state = state;
      }
      Object.defineProperty(AttachedActivityDescriptor.prototype, "ownerId", {
          get: function () {
              return this._state.ownerId;
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(AttachedActivityDescriptor.prototype, "windowIds", {
          get: function () {
              return this._state.windowIds;
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(AttachedActivityDescriptor.prototype, "frameColor", {
          get: function () {
              return this._state.frameColor;
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(AttachedActivityDescriptor.prototype, "context", {
          get: function () {
              return this._state.context;
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(AttachedActivityDescriptor.prototype, "tag", {
          get: function () {
              return this._state.tag;
          },
          enumerable: true,
          configurable: true
      });
      AttachedActivityDescriptor.prototype.detach = function (descriptor) {
          var _this = this;
          descriptor = descriptor || {};
          var merged = {};
          Object.keys(this._state).forEach(function (prop) {
              merged[prop] = _this._state[prop];
          });
          merged.context = descriptor.context || merged.context;
          merged.frameColor = descriptor.frameColor || merged.frameColor;
          return this._manager.detachActivities(this._ownerActivityId, merged);
      };
      return AttachedActivityDescriptor;
  }());

  var nextTick = function (cb) {
      setTimeout(cb, 0);
  };
  function nodeify(promise, callback) {
      if (!isFunction(callback)) {
          return promise;
      }
      promise.then(function (resp) {
          nextTick(function () {
              callback(null, resp);
          });
      }, function (err) {
          nextTick(function () {
              callback(err, null);
          });
      });
  }

  var Activity = (function (_super) {
      __extends(Activity, _super);
      function Activity(id, actType, status, context, ownerId) {
          var _this = _super.call(this, id) || this;
          _this._id = id;
          _this._actType = actType;
          _this._status = status;
          _this._context = context;
          _this._ownerId = ownerId;
          _this._agm = new ActivityAGM(_this);
          return _this;
      }
      Object.defineProperty(Activity.prototype, "type", {
          get: function () {
              if (this._manager) {
                  return this._manager.getActivityType(this._actType);
              }
              return undefined;
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(Activity.prototype, "context", {
          get: function () {
              return this._context;
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(Activity.prototype, "status", {
          get: function () {
              return this._status;
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(Activity.prototype, "owner", {
          get: function () {
              if (!this._ownerId) {
                  return null;
              }
              return this._manager.getWindows({ id: this._ownerId })[0];
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(Activity.prototype, "windows", {
          get: function () {
              return this._manager.getWindows({ activityId: this._id });
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(Activity.prototype, "agm", {
          get: function () {
              return this._agm;
          },
          enumerable: true,
          configurable: true
      });
      Activity.prototype.addWindow = function (window, callback) {
          return this._manager.addWindowToActivity(this, window, callback);
      };
      Activity.prototype.createWindow = function (windowType, callback) {
          return this._manager.createWindow(this, windowType, callback);
      };
      Activity.prototype.createStackedWindows = function (windowTypes, timeout, callback) {
          return this._manager.createStackedWindows(this, windowTypes, timeout, callback);
      };
      Activity.prototype.leave = function (window, callback) {
          return this._manager.leaveWindowFromActivity(this, window, callback);
      };
      Activity.prototype.getWindowsByType = function (windowType) {
          var filter = { activityId: this._id, type: windowType };
          return this._manager.getWindows(filter);
      };
      Activity.prototype.setContext = function (context, callback) {
          return this._manager.setActivityContext(this, context, callback);
      };
      Activity.prototype.updateContext = function (context, callback) {
          return this._manager.updateActivityContext(this, context, callback);
      };
      Activity.prototype.onStatusChange = function (handler) {
          var _this = this;
          return this._manager.subscribeActivityEvents(function (a, ns, os) {
              if (a.id === _this.id) {
                  handler(a, ns, os);
              }
          });
      };
      Activity.prototype.onWindowEvent = function (handler) {
          var _this = this;
          return this._manager.subscribeWindowEvents(function (a, w, e) {
              if (a.id === _this.id) {
                  handler(a, w, e);
              }
          });
      };
      Activity.prototype.onContextChanged = function (handler) {
          var _this = this;
          this._manager.subscribeActivityContextChanged(function (act, context, updated, removed) {
              if (act.id === _this.id) {
                  handler(context, updated, removed, act);
              }
          });
          try {
              handler(this.context, this.context, [], this);
          }
          catch (e) {
              return;
          }
      };
      Activity.prototype.stop = function () {
          this._manager.stopActivity(this);
      };
      Activity.prototype.clone = function (options) {
          return this._manager.clone(this, options);
      };
      Activity.prototype.attach = function (activity, tag) {
          var activityId;
          if (typeof activity === "string") {
              activityId = activity;
          }
          else {
              activityId = activity.id;
          }
          return this._manager.attachActivities(activityId, this.id, tag);
      };
      Activity.prototype.onActivityAttached = function (callback) {
          var _this = this;
          this._manager.subscribeActivitiesAttached(function (newActId, oldActId, descriptor) {
              if (newActId !== _this._id) {
                  return;
              }
              callback(descriptor);
          });
      };
      Activity.prototype.onDetached = function (callback) {
          var _this = this;
          this._manager.subscribeActivitiesDetached(function (newAct, originalActivity, state) {
              if (originalActivity.id !== _this._id) {
                  return;
              }
              callback(newAct, state);
          });
      };
      Activity.prototype._updateCore = function (other) {
          var _this = this;
          _super.prototype._updateCore.call(this, other);
          ifNotUndefined(other._actType, function (x) { return _this._actType = x; });
          ifNotUndefined(other._context, function (x) { return _this._context = x; });
          ifNotUndefined(other._ownerId, function (x) { return _this._ownerId = x; });
          if (other._status && (!this._status || (this._status.state !== other._status.state))) {
              this._status = other._status;
          }
      };
      Activity.prototype._updateDescriptors = function (allStates) {
          var _this = this;
          this._attached = allStates.map(function (s) {
              return new AttachedActivityDescriptor(_this._manager, _this._id, s);
          });
      };
      Object.defineProperty(Activity.prototype, "attached", {
          get: function () {
              return this._attached;
          },
          enumerable: true,
          configurable: true
      });
      Activity.prototype.setFrameColor = function (color, callback) {
          var _this = this;
          var promise = new Promise(function (resolve, reject) {
              var callbacksToWait = _this.windows.length;
              if (callbacksToWait === 0) {
                  resolve(_this);
              }
              _this.windows.forEach(function (w) {
                  w.underlyingWindow.setFrameColor(color, function () {
                      callbacksToWait--;
                      if (callbacksToWait <= 0) {
                          resolve(_this);
                      }
                  });
              });
              setTimeout(function () {
                  if (callbacksToWait > 0) {
                      reject(_this.id + " - timed out waiting for setFrameColor with" + color);
                  }
              }, 5000);
          });
          return nodeify(promise, callback);
      };
      Activity.prototype.getFrameColor = function () {
          if (!this.windows || this.windows.length === 0) {
              return "";
          }
          return this.windows[0].underlyingWindow.frameColor;
      };
      return Activity;
  }(ActivityEntity));

  var LogLevel = (function () {
      function LogLevel() {
      }
      LogLevel.Trace = "trace";
      LogLevel.Debug = "debug";
      LogLevel.Info = "info";
      LogLevel.Warn = "warn";
      LogLevel.Error = "error";
      return LogLevel;
  }());
  var Logger$1 = (function () {
      function Logger(name) {
          this._name = name;
          if (!isUndefinedOrNull(Logger.GlueLogger)) {
              this._glueLogger = Logger.GlueLogger.subLogger(name);
          }
      }
      Logger.GetNamed = function (name) {
          return new Logger(name);
      };
      Logger.Get = function (owner) {
          return new Logger(Logger.GetTypeName(owner));
      };
      Logger.prototype.trace = function (message) {
          if (!isUndefinedOrNull(this._glueLogger)) {
              this._glueLogger.trace(message);
          }
          else {
              if (Logger.Level === LogLevel.Trace) {
                  console.info(this._getMessage(message, LogLevel.Trace));
              }
          }
      };
      Logger.prototype.debug = function (message) {
          if (!isUndefinedOrNull(this._glueLogger)) {
              this._glueLogger.debug(message);
          }
          else {
              if (Logger.Level === LogLevel.Debug ||
                  Logger.Level === LogLevel.Trace) {
                  console.info(this._getMessage(message, LogLevel.Debug));
              }
          }
      };
      Logger.prototype.info = function (message) {
          if (!isUndefinedOrNull(this._glueLogger)) {
              this._glueLogger.info(message);
          }
          else {
              if (Logger.Level === LogLevel.Debug ||
                  Logger.Level === LogLevel.Trace ||
                  Logger.Level === LogLevel.Info) {
                  console.info(this._getMessage(message, LogLevel.Info));
              }
          }
      };
      Logger.prototype.warn = function (message) {
          if (!isUndefinedOrNull(this._glueLogger)) {
              this._glueLogger.warn(message);
          }
          else {
              if (Logger.Level === LogLevel.Debug ||
                  Logger.Level === LogLevel.Trace ||
                  Logger.Level === LogLevel.Info ||
                  Logger.Level === LogLevel.Warn) {
                  console.info(this._getMessage(message, LogLevel.Info));
              }
          }
      };
      Logger.prototype.error = function (message) {
          if (!isUndefinedOrNull(this._glueLogger)) {
              this._glueLogger.error(message);
          }
          else {
              console.error(this._getMessage(message, LogLevel.Error));
              console.trace();
          }
      };
      Logger.prototype._getMessage = function (message, level) {
          return "[" + level + "] " + this._name + " - " + message;
      };
      Logger.GetTypeName = function (object) {
          var funcNameRegex = /function (.{1,})\(/;
          var results = (funcNameRegex).exec(object.constructor.toString());
          return (results && results.length > 1) ? results[1] : "";
      };
      Logger.Level = LogLevel.Info;
      return Logger;
  }());

  var ActivityWindow = (function (_super) {
      __extends(ActivityWindow, _super);
      function ActivityWindow(id, name, type, activityId, instance, isIndependent, windowGetter, hcWindowId) {
          var _this = _super.call(this, id) || this;
          _this._logger = Logger$1.Get("window");
          _this._type = type;
          _this._activityId = activityId;
          _this._name = name;
          _this._instance = instance;
          _this._isIndependent = isIndependent;
          _this._windowGetter = windowGetter;
          _this._hcWindowId = hcWindowId;
          return _this;
      }
      ActivityWindow.prototype.getBounds = function () {
          return this._manager.getWindowBounds(this.id);
      };
      Object.defineProperty(ActivityWindow.prototype, "name", {
          get: function () {
              return this._name;
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(ActivityWindow.prototype, "isIndependent", {
          get: function () {
              return this._isIndependent;
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(ActivityWindow.prototype, "type", {
          get: function () {
              if (this._manager) {
                  return this._manager.getWindowType(this._type);
              }
              return undefined;
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(ActivityWindow.prototype, "activity", {
          get: function () {
              if (isUndefined(this._activityId)) {
                  return undefined;
              }
              return this._manager.getActivityById(this._activityId);
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(ActivityWindow.prototype, "isOwner", {
          get: function () {
              var act = this.activity;
              if (isUndefined(act)) {
                  return false;
              }
              return act.owner.id === this.id;
          },
          enumerable: true,
          configurable: true
      });
      ActivityWindow.prototype.setVisible = function (isVisible, callback) {
          return this._manager.setWindowVisibility(this.id, isVisible);
      };
      ActivityWindow.prototype.activate = function (focus) {
          return this._manager.activateWindow(this.id, focus);
      };
      ActivityWindow.prototype.setBounds = function (bounds, callback) {
          return this._manager.setWindowBounds(this.id, bounds, callback);
      };
      ActivityWindow.prototype.close = function () {
          return this._manager.closeWindow(this.id);
      };
      Object.defineProperty(ActivityWindow.prototype, "instance", {
          get: function () {
              return this._instance;
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(ActivityWindow.prototype, "underlyingWindow", {
          get: function () {
              var window = this._windowGetter();
              if (!window) {
                  return {
                      id: this._hcWindowId
                  };
              }
              return window;
          },
          enumerable: true,
          configurable: true
      });
      ActivityWindow.prototype.onActivityJoined = function (callback) {
          this._subscribeForActivityWindowEvent(EntityEventType.ActivityWindowJoinedActivity, callback);
      };
      ActivityWindow.prototype.onActivityRemoved = function (callback) {
          this._subscribeForActivityWindowEvent(EntityEventType.ActivityWindowLeftActivity, callback);
      };
      ActivityWindow.prototype._updateCore = function (other) {
          var _this = this;
          ifNotUndefined(other._activityId, function (x) { return _this._activityId = x; });
          ifNotUndefined(other._isIndependent, function (x) { return _this._isIndependent = x; });
          ifNotUndefined(other._hcWindowId, function (x) { return _this._hcWindowId = x; });
          ifNotUndefined(other._type, function (x) { return _this._type = x; });
          ifNotUndefined(other._name, function (x) { return _this._name = x; });
          if (!isUndefinedOrNull(other._instance)) {
              this._instance = other._instance;
          }
      };
      ActivityWindow.prototype._subscribeForActivityWindowEvent = function (eventName, callback) {
          var _this = this;
          this._manager.subscribeWindowEvents(function (activity, window, event) {
              if (window.id !== _this.id) {
                  return;
              }
              if (event === eventName) {
                  callback(activity);
              }
          });
      };
      ActivityWindow.prototype._beforeDelete = function (other) {
          this._hcWindowId = other._hcWindowId;
      };
      return ActivityWindow;
  }(ActivityEntity));

  var ActivityStatus = (function () {
      function ActivityStatus(state, message, time) {
          this.state = state;
          this.message = message;
          this.time = time;
      }
      ActivityStatus.prototype.getState = function () {
          return this.state;
      };
      ActivityStatus.prototype.getMessage = function () {
          return this.message;
      };
      ActivityStatus.prototype.getTime = function () {
          return this.time;
      };
      return ActivityStatus;
  }());

  var gwMmessageError = "error";
  var gwMessageAddActivityTypes = "add-types";
  var gwMmessageActivityTypesAdded = "types-added";
  var gwMessageRemoveActivityTypes = "remove-types";
  var gwMessageActivityTypesRemoved = "types-removed";
  var gwMessageActivityCreated = "created";
  var gwMessageActivityDestroyed = "destroyed";
  var gwMessageActivityInitiated = "initiated";
  var gwMmessageJoinActivity = "join-activity";
  var gwMessageJoinedActivity = "joined";
  var gwMessageActivityJoined = "activity-joined";
  var gwMessageLeaveActivity = "leave-activity";
  var gwMessageActivityLeft = "left";
  var gwNmessageMergeActivities = "merge";
  var gwMessageSplitActivities = "split";
  var gwMessageOwnerChanged = "owner-changed";
  var gwMessageAddPeerFactories = "add-peer-factories";
  var gwMessagePeerFactoriesAdded = "peer-factories-added";
  var gwMessageRemovePeerFactories = "remove-peer-factories";
  var gwMessagePeerFactoriesRemoved = "peer-factories-removed";
  var gwMessageCreateActivity = "create";
  var gwMessageCreatePeer = "create-peer";
  var gwMessagePeerRequested = "peer-requested";
  var gwMessageReady = "ready";
  var gwMessagePeerCreated = "peer-created";
  var gwMessageDestroyActivity = "destroy";
  var gwMessageDisposePeer = "dispose-peer";
  var gwMessageDestroyPeer = "destroy-peer";
  var GW3Bridge$1 = (function () {
      function GW3Bridge(config) {
          var _this = this;
          this._activityChangeCallbacks = [];
          this._activityTypeStatusChangeCallbacks = [];
          this._activityWindowChangeCallbacks = [];
          this._windowTypeStatusChangeCallbacks = [];
          this._peerIdAndFactoryIdToPeerType = {};
          this._peerFactoriesRegisteredByUs = {};
          this._gw3Subscriptions = [];
          this._contextSubscriptions = {};
          this._activityTypesInitiatedFromMe = {};
          this._config = config;
          this._connection = config.connection;
          this._logger = config.logger;
          this._contexts = config.contexts;
          this._windows = config.windows;
          this._sessionJoinedPromise = new Promise(function (resolve) {
              _this._sessionJoinedPromiseResolve = resolve;
          });
          this._activityJoinedPromise = new Promise(function (resolve) {
              _this._activityJoinedPromiseResolve = resolve;
          });
          if (!this._config.activityId) {
              this._activityJoinedPromiseResolve({});
          }
          this._gw3Session = this._connection.domain("activity", ["joined", "initiated", "peer-created", "token"]);
          if (typeof window !== "undefined") {
              var glue42gd_1 = window.glue42gd;
              if (glue42gd_1 && typeof glue42gd_1.addRefreshHandler === "function") {
                  glue42gd_1.addRefreshHandler(function (success, error) {
                      _this._gw3Session
                          .send({
                          type: "reload"
                      })
                          .then(function (msg) {
                          if (!msg.token) {
                              error("Expected gateway token for refreshing.");
                              return;
                          }
                          try {
                              glue42gd_1.setGWToken(msg.token);
                          }
                          catch (e) {
                              error(e.message || e);
                              return;
                          }
                          success();
                      }, error);
                  });
              }
          }
      }
      GW3Bridge.activityTypeGwMessageEntityToActivityType = function (entity, description) {
          var nameToWindowType = function (windowName) {
              return new WindowType(windowName, undefined);
          };
          return new ActivityType(entity.name, entity.owner_type && nameToWindowType(entity.owner_type), entity.helper_types && entity.helper_types.map(nameToWindowType), description);
      };
      GW3Bridge.peerFactoryGwMessageEntityToWindowType = function (entity) {
          return new WindowType(entity.peer_type, function (_) { return undefined; });
      };
      GW3Bridge.activityGwMessageToActivity = function (msg, status) {
          var ownerId = msg.owner !== undefined ? msg.owner.peer_id : msg.owner_id;
          return new Activity(msg.activity_id, msg.activity_type, status, msg.context_snapshot, ownerId);
      };
      GW3Bridge.activityToActivityStatusChangeEvent = function (act) {
          return new EntityEvent(act, new ActivityStatusChangeEventContext(act.status, undefined));
      };
      Object.defineProperty(GW3Bridge.prototype, "bridgeType", {
          get: function () {
              return "GW3";
          },
          enumerable: true,
          configurable: true
      });
      GW3Bridge.prototype.init = function () {
          var _this = this;
          this.forwardActivityTypeMessagesToStatusEventHandlers();
          this.subscribe(gwMessageActivityCreated, this.handleActivityCreatedMessage);
          this.subscribe(gwMessageActivityDestroyed, this.handleActivityDestroyedMessage);
          this.forwardActivityMessagesToStatusEventHandlers();
          this.forwardActivityCreatedAndJoinedActivityToActivityWindowEventHandlers();
          this.forwardPeerFactoryMessagesToStatusEventHandlers();
          this.forwardPeerFactoryMessagesToPeerFactoryRequests();
          this.subscribe(gwMessagePeerFactoriesAdded, this.handlePeerFactoriesAdded);
          this.subscribe(gwMessagePeerFactoriesRemoved, this.handlePeerFactoriesRemoved);
          this.forwardActivityWindowMessagesToEventHandlers();
          this.subscribe(gwMessageDisposePeer, function () {
              if (_this._config.disposeRequestHandling === "dispose") {
                  _this.dispose();
                  return;
              }
              if (_this._config.disposeRequestHandling === "exit") {
                  if (_this._windows && typeof _this._windows.my() !== "undefined") {
                      _this._windows.my().close();
                      return;
                  }
                  if (typeof window !== "undefined" && typeof window.close === "function") {
                      window.close();
                      return;
                  }
                  if (typeof process !== "undefined" && typeof process.exit === "function") {
                      process.exit();
                      return;
                  }
              }
          });
          this._gw3Session.onJoined(function () {
              if (_this._config.mode === "trackMyOnly" ||
                  _this._config.mode === "trackMyTypeAndInitiatedFromMe") {
                  _this._sessionJoinedPromiseResolve(_this);
              }
              else {
                  _this._gw3Session
                      .send({
                      type: "subscribe",
                      activity_types: (_this._config.mode === "trackAll" ? [] :
                          _this._config.mode === "trackTypes" ? _this._config.typesToTrack : [])
                  })
                      .then(function () {
                      _this._sessionJoinedPromiseResolve(_this);
                  });
              }
          });
          this._gw3Session.join();
      };
      GW3Bridge.prototype.dispose = function () {
          var _this = this;
          this._gw3Subscriptions.forEach(function (sub) { return sub && _this._connection.off(sub); });
          this._gw3Subscriptions.length = 0;
      };
      GW3Bridge.prototype.ready = function () {
          return Promise.all([this._sessionJoinedPromise, this._activityJoinedPromise]);
      };
      GW3Bridge.prototype.initReady = function () {
          return this._sessionJoinedPromise;
      };
      GW3Bridge.prototype.onActivityTypeStatusChange = function (callback) {
          this._activityTypeStatusChangeCallbacks.push(callback);
      };
      GW3Bridge.prototype.registerActivityType = function (activityTypeName, ownerWindow, helperWindows, config, description) {
          var _this = this;
          var entity = {};
          entity.name = activityTypeName;
          var toActivityPeerConfig = function (windowDefinition) { return ({ type: windowDefinition.type, name: windowDefinition.name, configuration: windowDefinition }); };
          entity.owner_type = toActivityPeerConfig(ownerWindow);
          entity.helper_types = helperWindows.map(toActivityPeerConfig);
          return this._gw3Session
              .send({
              type: gwMessageAddActivityTypes,
              types: [entity]
          })
              .then(function () {
              var activityType = GW3Bridge.activityTypeGwMessageEntityToActivityType(entity, description);
              _this.invokeCallbacks(_this._activityTypeStatusChangeCallbacks, new EntityEvent(activityType, new EntityEventContext(EntityEventType.Added)), gwMessageAddActivityTypes);
              return activityType;
          });
      };
      GW3Bridge.prototype.unregisterActivityType = function (activityTypeName) {
          var _this = this;
          return this._gw3Session
              .send({
              type: gwMessageRemoveActivityTypes,
              types: [activityTypeName]
          })
              .then(function () {
              var activityType = new ActivityType(activityTypeName, undefined, undefined, undefined);
              _this.invokeCallbacks(_this._activityTypeStatusChangeCallbacks, new EntityEvent(activityType, new EntityEventContext(EntityEventType.Removed)), gwMessageAddActivityTypes);
          });
      };
      GW3Bridge.prototype.onWindowTypeStatusChange = function (callback) {
          this._windowTypeStatusChangeCallbacks.push(callback);
      };
      GW3Bridge.prototype.registerWindowFactory = function (windowType, factory, parameters) {
          var _this = this;
          if (this._peerFactoriesRegisteredByUs[windowType]) {
              return Promise.reject(new Error("Factory for windowType " + windowType + " already registered."));
          }
          this._peerFactoriesRegisteredByUs[windowType] = factory;
          var entity = {
              id: windowType,
              peer_type: windowType,
              configuration: parameters
          };
          return this._gw3Session.send({
              type: gwMessageAddPeerFactories,
              factories: [entity]
          })
              .then(function () {
              _this.invokeCallbacks(_this._windowTypeStatusChangeCallbacks, new EntityEvent(GW3Bridge.peerFactoryGwMessageEntityToWindowType(entity), new EntityEventContext(EntityEventType.Added)), gwMessageAddPeerFactories);
          })
              .catch(function () {
              delete _this._peerFactoriesRegisteredByUs[windowType];
          });
      };
      GW3Bridge.prototype.unregisterWindowFactory = function (windowType) {
          var _this = this;
          var factory = this._peerFactoriesRegisteredByUs[windowType];
          if (!factory) {
              return Promise.reject(new Error("Factory for windowType " + windowType + " not registered."));
          }
          delete this._peerFactoriesRegisteredByUs[windowType];
          return this._gw3Session.send({
              type: gwMessageRemovePeerFactories,
              factory_ids: [windowType]
          }).then(function () {
              _this.invokeCallbacks(_this._windowTypeStatusChangeCallbacks, new EntityEvent(new WindowType(windowType, undefined), new EntityEventContext(EntityEventType.Removed)), gwMessageAddPeerFactories);
          });
      };
      GW3Bridge.prototype.onActivityStatusChange = function (callback) {
          this._activityChangeCallbacks.push(callback);
      };
      GW3Bridge.prototype.initiateActivity = function (activityType, context, configuration) {
          var _this = this;
          var initiateMsg = {
              type: gwMessageCreateActivity,
              activity_type: activityType,
              initial_context: context,
          };
          if (this.isOverrideTypeDefinition(configuration)) {
              initiateMsg.types_override = {
                  owner_type: { type: configuration.owner.type, name: configuration.owner.name, configuration: configuration.owner },
                  helper_types: configuration.helpers && configuration.helpers.map(function (wd) { return ({ type: wd.type, name: wd.name, configuration: wd }); })
              };
          }
          else {
              initiateMsg.configuration = configuration && configuration.map(function (wd) { return ({ type: wd.type, name: wd.name, configuration: wd }); });
          }
          return this.sendCreateAndMapResultingMessagesToPromise(initiateMsg, gwMessageActivityInitiated, function (msg, requestId) { return msg.request_id === requestId; }, gwMessageActivityCreated, function (msg, requestId, initMsg) { return msg.activity_id === initMsg.activity_id; }, gwMessageActivityDestroyed, function (msg, requestId, initMsg) { return msg.activity_id === initMsg.activity_id; }, function (msg) { return msg.activity_id; }, null).then(function (id) {
              if (_this._config.mode === "trackMyTypeAndInitiatedFromMe") {
                  if (!_this._activityTypesInitiatedFromMe[activityType]) {
                      _this._activityTypesInitiatedFromMe[activityType] = true;
                      return _this._gw3Session
                          .send({
                          type: "subscribe",
                          activity_types: [activityType]
                      })
                          .then(function () {
                          return id;
                      });
                  }
              }
              return id;
          });
      };
      GW3Bridge.prototype.stopActivity = function (activity) {
          return this._gw3Session.send({
              type: gwMessageDestroyActivity,
              activity_id: activity.id,
              reason_uri: "com.tick42.glue.activity.constants.destroyReason.general",
              reason: "Destroying activity"
          }).then(function (_) { return true; });
      };
      GW3Bridge.prototype.updateActivityContext = function (activity, context, fullReplace, removedKeys) {
          if (fullReplace) {
              return this._contexts.set(activity.id, context);
          }
          else {
              removedKeys = removedKeys || [];
              for (var _i = 0, removedKeys_1 = removedKeys; _i < removedKeys_1.length; _i++) {
                  var x = removedKeys_1[_i];
                  context[x] = null;
              }
              return this._contexts.update(activity.id, context);
          }
      };
      GW3Bridge.prototype.announceWindow = function (windowType, activityWindowId) {
          throw new Error("Invalid operation 'announceWindow' for GW3 protocol");
      };
      GW3Bridge.prototype.registerWindow = function (type, name, independent) {
          var shouldSendReady = typeof this._connection.gatewayToken !== "undefined";
          var peerId = this._connection.peerId;
          if (typeof window !== "undefined") {
              var glue42gd = window.glue42gd;
              if (glue42gd) {
                  shouldSendReady = typeof glue42gd.activityInfo !== "undefined";
              }
          }
          if (shouldSendReady) {
              this._gw3Session.send({
                  type: gwMessageReady,
              });
          }
          this.invokeCallbacks(this._activityWindowChangeCallbacks, new EntityEvent(new ActivityWindow(peerId, name, type, undefined, this.getAgmInstance(peerId), independent, this.generateWindowGetter(peerId), undefined), new EntityEventContext(EntityEventType.Added)), "register window");
          return Promise.resolve(peerId);
      };
      GW3Bridge.prototype.onActivityWindowChange = function (callback) {
          this._activityWindowChangeCallbacks.push(callback);
      };
      GW3Bridge.prototype.createWindow = function (activityId, windowDefinition) {
          var _this = this;
          if (!windowDefinition.layout) {
              if (windowDefinition.left || windowDefinition.width || windowDefinition.height || windowDefinition.top) {
                  windowDefinition.layout = {
                      mode: "pixels",
                      cellSize: 1,
                  };
              }
          }
          var joinPeer = function (id) {
              if (!activityId) {
                  return;
              }
              return _this.joinActivity(activityId, id, windowDefinition.name)
                  .then(function () {
                  return id;
              });
          };
          return this.sendCreateAndMapResultingMessagesToPromise({
              type: gwMessageCreatePeer,
              peer_type: windowDefinition.type,
              peer_name: windowDefinition.name || windowDefinition.type,
              configuration: windowDefinition,
              activity_id: activityId,
          }, undefined, undefined, gwMessagePeerCreated, function (msg, requestId) { return msg.request_id === requestId; }, undefined, undefined, function (msg) { return msg.created_id; }, joinPeer)
              .then(joinPeer);
      };
      GW3Bridge.prototype.closeWindow = function (id) {
          return this._gw3Session.send({
              type: gwMessageDestroyPeer,
              destroy_peer_id: id
          }).then(function (_) { return undefined; });
      };
      GW3Bridge.prototype.getAnnouncementInfo = function () {
          var activityId = this._config.activityId || (this._config.announcementInfo && this._config.announcementInfo.activityId);
          var activityWindowType = (this._config.announcementInfo && this._config.announcementInfo.activityWindowType);
          var activityWindowIndependent = (this._config.announcementInfo && this._config.announcementInfo.activityWindowIndependent);
          var activityWindowName = (this._config.announcementInfo && this._config.announcementInfo.activityWindowName);
          if (typeof window !== "undefined" &&
              typeof window.location !== "undefined" &&
              window.location.search &&
              typeof URLSearchParams === "function") {
              var searchParams = new URLSearchParams(location.search.slice(1));
              activityWindowType = activityWindowType || searchParams.get("t42PeerType");
              activityWindowType = activityWindowType || searchParams.get("t42ActivityWindowType");
              if (typeof activityWindowIndependent === "undefined") {
                  activityWindowIndependent = searchParams.get("t42ActivityWindowIndependent");
              }
              activityWindowName = activityWindowName || searchParams.get("t42ActivityWindowName");
              activityId = activityId || searchParams.get("t42ActivityId");
          }
          activityWindowType = activityWindowType || "unknown";
          activityWindowIndependent = activityWindowIndependent || false;
          activityWindowName = activityWindowName || this._connection.peerId;
          return {
              activityWindowId: undefined,
              activityId: activityId,
              activityWindowType: activityWindowType,
              activityWindowIndependent: activityWindowIndependent,
              activityWindowName: activityWindowName,
          };
      };
      GW3Bridge.prototype.joinActivity = function (activityId, windowId, name) {
          var _this = this;
          var maybeName = (name && { name: name }) || {};
          return this._gw3Session.send(__assign({ type: gwMmessageJoinActivity, target_id: windowId, activity_id: activityId }, maybeName)).then(function () {
              _this.invokeCallbacks(_this._activityWindowChangeCallbacks, new EntityEvent(new ActivityWindow(windowId, undefined, undefined, activityId, _this.getAgmInstance(windowId), undefined, _this.generateWindowGetter(windowId), undefined), new EntityEventContext(EntityEventType.ActivityWindowJoinedActivity)), "activity joined - ActivityWindow");
              _this.invokeCallbacks(_this._activityChangeCallbacks, new EntityEvent(new Activity(activityId, undefined, new ActivityStatus("created", undefined, undefined), undefined, undefined), new EntityEventContext(EntityEventType.Updated)), "activity joined - Activity");
          });
      };
      GW3Bridge.prototype.leaveActivity = function (activityId, windowId) {
          var _this = this;
          return this._gw3Session.send({
              type: gwMessageLeaveActivity,
              target_id: windowId,
              activity_id: activityId
          }).then(function () {
              _this.invokeCallbacks(_this._activityWindowChangeCallbacks, new EntityEvent(new ActivityWindow(windowId, undefined, undefined, null, _this.getAgmInstance(windowId), undefined, _this.generateWindowGetter(windowId), undefined), new EntityEventContext(EntityEventType.ActivityWindowLeftActivity)), "activity left - ActivityWindow");
              _this.invokeCallbacks(_this._activityChangeCallbacks, new EntityEvent(new Activity(activityId, undefined, new ActivityStatus("created", undefined, undefined), undefined, undefined), new EntityEventContext(EntityEventType.Updated)), "activity left - Activity");
          });
      };
      GW3Bridge.prototype.getActivityTypes = function () {
          return Promise.resolve([]);
      };
      GW3Bridge.prototype.getWindowTypes = function () {
          return Promise.resolve([]);
      };
      GW3Bridge.prototype.getActivities = function () {
          return Promise.resolve([]);
      };
      GW3Bridge.prototype.getActivityWindows = function () {
          return Promise.resolve([]);
      };
      GW3Bridge.prototype.createStackedWindows = function (id, windowDefinitions, timeout) {
          return undefined;
      };
      GW3Bridge.prototype.getWindowBounds = function (id) {
          return undefined;
      };
      GW3Bridge.prototype.setWindowBounds = function (id, bounds) {
          return undefined;
      };
      GW3Bridge.prototype.activateWindow = function (id, focus) {
          return undefined;
      };
      GW3Bridge.prototype.setWindowVisibility = function (id, visible) {
          return undefined;
      };
      GW3Bridge.prototype.cloneActivity = function (id, cloneOptions) {
          return undefined;
      };
      GW3Bridge.prototype.attachActivities = function (from, to, tag) {
          return this._gw3Session.send({
              type: gwNmessageMergeActivities,
              into: to,
              merge: from
          });
      };
      GW3Bridge.prototype.detachActivities = function (activityId, newActivityInfo) {
          return this._gw3Session.send({
              type: gwMessageSplitActivities,
              from: activityId,
          }).then(function () { return ""; });
      };
      GW3Bridge.prototype.onActivitiesAttached = function (callback) {
      };
      GW3Bridge.prototype.onActivitiesDetached = function (callback) {
      };
      GW3Bridge.prototype.onActivityAttachedDescriptorsRefreshed = function (callback) {
      };
      GW3Bridge.prototype.getAttachedDescriptors = function () {
          return Promise.resolve([]);
      };
      GW3Bridge.prototype.getRandomRequestId = function () {
          return this._connection.peerId + ":" + Math.floor(Math.random() * 1e9) + "";
      };
      GW3Bridge.prototype.forwardAddedAndRemovedMessagesToEventHandler = function (addedMessageType, removedMessageType, mapper, handlers) {
          var getGetEntityEvent = function (isAdded) { return function (entity) { return new EntityEvent(entity, new EntityEventContext(isAdded ?
              EntityEventType.Added :
              EntityEventType.Removed)); }; };
          var sub1;
          var sub2;
          sub1 = addedMessageType && this.forwardMessageToEventHandler(addedMessageType, function (msg) { return mapper(msg, true); }, getGetEntityEvent(true), handlers);
          sub2 = removedMessageType && this.forwardMessageToEventHandler(removedMessageType, function (msg) { return mapper(msg, false); }, getGetEntityEvent(false), handlers);
          return [sub1, sub2].filter(function (x) { return x; });
      };
      GW3Bridge.prototype.forwardMessageToEventHandler = function (messageType, mapper, getEntityEvent, handler) {
          return this.subscribe(messageType, function (msg) {
              mapper(msg)
                  .forEach(function (ent) {
                  return handler.forEach(function (h) { return h(getEntityEvent(ent, msg)); });
              });
          });
      };
      GW3Bridge.prototype.sendCreateAndMapResultingMessagesToPromise = function (msg, initiatedMessageType, initiatedMessageFilter, createdMessageType, createdMessageFilter, cancelledMessageType, cancelledMessageFilter, createdMessageToPromiseResolution, listenForRecreates) {
          var _this = this;
          var reqId = this.getRandomRequestId();
          var resolveCreatedPromise;
          var rejectCreatedPromise;
          var createdPromise = new Promise(function (resolve, reject) {
              resolveCreatedPromise = resolve;
              rejectCreatedPromise = reject;
          });
          var initiatedMessageAck = null;
          var initiatedSubscription;
          var createdSubscription;
          var cancelledSubscription;
          var errorSubscription;
          var dropSubscriptions = function () {
              _this.dropSubscription(initiatedSubscription);
              if (!listenForRecreates) {
                  _this.dropSubscription(createdSubscription);
              }
              _this.dropSubscription(cancelledSubscription);
              _this.dropSubscription(errorSubscription);
          };
          initiatedSubscription = initiatedMessageType &&
              this.subscribe(initiatedMessageType, function (msg4) {
                  if (!initiatedMessageFilter(msg4, reqId)) {
                      return;
                  }
                  initiatedMessageAck = msg4;
                  _this.dropSubscription(initiatedSubscription);
              });
          var recreated = false;
          createdSubscription =
              this.subscribe(createdMessageType, function (msg1) {
                  if (!createdMessageFilter(msg1, reqId, initiatedMessageAck)) {
                      return;
                  }
                  if (recreated) {
                      if (listenForRecreates) {
                          listenForRecreates(createdMessageToPromiseResolution(msg1));
                      }
                  }
                  else {
                      recreated = true;
                      resolveCreatedPromise(createdMessageToPromiseResolution(msg1));
                  }
              });
          cancelledSubscription = cancelledMessageType &&
              this.subscribe(cancelledMessageType, function (msg2) {
                  if (!cancelledMessageFilter(msg2, reqId, initiatedMessageAck)) {
                      return;
                  }
                  rejectCreatedPromise(msg2);
              });
          errorSubscription = cancelledMessageType &&
              this.subscribe(gwMmessageError, function (msg3) {
                  if (msg3.request_id !== reqId) {
                      return;
                  }
                  rejectCreatedPromise(msg3);
              });
          msg.request_id = reqId;
          var toReturn = this._gw3Session
              .send(msg)
              .then(function () {
              return createdPromise;
          });
          toReturn.then(dropSubscriptions, dropSubscriptions);
          return toReturn;
      };
      GW3Bridge.prototype.peerFactoryIdAndOwnerIdToWindowType = function (factoryId, ownerId) {
          var peerType = this._peerIdAndFactoryIdToPeerType[ownerId + ":" + factoryId];
          if (!peerType) {
              return null;
          }
          else {
              return new WindowType(peerType, undefined);
          }
      };
      GW3Bridge.prototype.subscribe = function (messageType, handler) {
          var _this = this;
          var sub = this._connection.on(messageType, function (msg) { return handler.bind(_this)(msg); });
          this._gw3Subscriptions.push(sub);
          return sub;
      };
      GW3Bridge.prototype.dropSubscription = function (subscription) {
          if (subscription) {
              this._connection.off(subscription);
              delete this._gw3Subscriptions[this._gw3Subscriptions.indexOf(subscription)];
          }
      };
      GW3Bridge.prototype.invokeCallbacks = function (callbacks, event, description) {
          var _this = this;
          callbacks.forEach(function (cb) {
              try {
                  cb(event);
              }
              catch (err) {
                  _this._logger.error("Error in " + (description || event.context.type) + " callback: " + JSON.stringify(err));
              }
          });
      };
      GW3Bridge.prototype.handleActivityCreatedMessage = function (msg) {
          if (!msg.context_id) {
              this._logger.error("Activity created with unknown context_id: " + msg.activity_id);
          }
          else {
              if (!this._contextSubscriptions[msg.activity_id]) {
                  this.subscribeToContext(msg);
              }
          }
      };
      GW3Bridge.prototype.subscribeToContext = function (msg) {
          return __awaiter(this, void 0, void 0, function () {
              var activityId, _a, _b;
              var _this = this;
              return __generator(this, function (_c) {
                  switch (_c.label) {
                      case 0:
                          activityId = msg.activity_id;
                          _a = this._contextSubscriptions;
                          _b = activityId;
                          return [4, this._contexts.subscribe(activityId, function (data, updated, removed) {
                                  var event = new EntityEvent(new Activity(activityId, undefined, undefined, data, undefined), new ActivityContextChangedEventContext(data, updated, removed));
                                  _this.invokeCallbacks(_this._activityChangeCallbacks, event, "context updated");
                              })];
                      case 1:
                          _a[_b] =
                              _c.sent();
                          return [2];
                  }
              });
          });
      };
      GW3Bridge.prototype.handleActivityDestroyedMessage = function (msg) {
          var unsubscribeContext = this._contextSubscriptions[msg.activity_id];
          if (typeof unsubscribeContext === "function") {
              unsubscribeContext();
          }
          delete this._contextSubscriptions[msg.activity_id];
      };
      GW3Bridge.prototype.handlePeerFactoriesAdded = function (msg) {
          var _this = this;
          msg.factories.forEach(function (entity) {
              _this._peerIdAndFactoryIdToPeerType[msg.owner_id + ":" + entity.id] = entity.peer_type;
          });
      };
      GW3Bridge.prototype.handlePeerFactoriesRemoved = function (msg) {
          var _this = this;
          msg.factory_ids.forEach(function (factoryId) {
              delete _this._peerIdAndFactoryIdToPeerType[msg.owner_id + ":" + factoryId];
          });
      };
      GW3Bridge.prototype.forwardActivityTypeMessagesToStatusEventHandlers = function () {
          this.forwardAddedAndRemovedMessagesToEventHandler(gwMmessageActivityTypesAdded, gwMessageActivityTypesRemoved, function (msg, isAdded) { return isAdded
              ? msg.types.map(function (t) { return GW3Bridge.activityTypeGwMessageEntityToActivityType(t, undefined); })
              : msg.types.map(function (t) { return new ActivityType(t.name, undefined, undefined, undefined); }); }, this._activityTypeStatusChangeCallbacks);
      };
      GW3Bridge.prototype.forwardActivityCreatedAndJoinedActivityToActivityWindowEventHandlers = function () {
          var _this = this;
          for (var _i = 0, _a = [gwMessageActivityCreated, gwMessageJoinedActivity, gwMessageOwnerChanged]; _i < _a.length; _i++) {
              var activityCreatedMessage = _a[_i];
              this.forwardMessageToEventHandler(activityCreatedMessage, function (msg) {
                  return ([msg.owner || __assign(__assign({}, msg), { type: msg.peer_type, name: msg.peer_name, peer_id: msg.owner_id })])
                      .concat(msg.participants || [])
                      .map(function (info) { return new ActivityWindow(info.peer_id, info.name, info.type, msg.activity_id, _this.getAgmInstance(info.peer_id), undefined, _this.generateWindowGetter(info.peer_id), undefined); });
              }, function (ent, msg) { return new EntityEvent(ent, new EntityEventContext(EntityEventType.ActivityWindowJoinedActivity)); }, this._activityWindowChangeCallbacks);
          }
      };
      GW3Bridge.prototype.forwardActivityMessagesToStatusEventHandlers = function () {
          for (var _i = 0, _a = [gwMessageActivityCreated, gwMessageJoinedActivity]; _i < _a.length; _i++) {
              var createdMessage = _a[_i];
              this.forwardMessageToEventHandler(createdMessage, function (msg) { return [GW3Bridge.activityGwMessageToActivity(msg, new ActivityStatus("started", "", new Date()))]; }, function (ent, msg) { return GW3Bridge.activityToActivityStatusChangeEvent(ent); }, this._activityChangeCallbacks);
          }
          this.forwardMessageToEventHandler(gwMessageActivityDestroyed, function (msg) { return [GW3Bridge.activityGwMessageToActivity(msg, new ActivityStatus("destroyed", msg.reason, new Date()))]; }, function (ent, msg) { return GW3Bridge.activityToActivityStatusChangeEvent(ent); }, this._activityChangeCallbacks);
          this.forwardMessageToEventHandler(gwMessageActivityInitiated, function (msg) { return [GW3Bridge.activityGwMessageToActivity(msg, new ActivityStatus("created", "", new Date()))]; }, function (ent, msg) { return GW3Bridge.activityToActivityStatusChangeEvent(ent); }, this._activityChangeCallbacks);
          this.forwardMessageToEventHandler(gwMessageOwnerChanged, function (msg) { return [GW3Bridge.activityGwMessageToActivity(msg, new ActivityStatus("created", "", new Date()))]; }, function (ent, msg) { return GW3Bridge.activityToActivityStatusChangeEvent(ent); }, this._activityChangeCallbacks);
      };
      GW3Bridge.prototype.forwardPeerFactoryMessagesToStatusEventHandlers = function () {
          var _this = this;
          this.forwardAddedAndRemovedMessagesToEventHandler(gwMessagePeerFactoriesAdded, gwMessagePeerFactoriesRemoved, function (msg, isAdded) { return isAdded
              ? msg.factories.map(GW3Bridge.peerFactoryGwMessageEntityToWindowType)
              : msg.factory_ids.map(function (id) { return _this.peerFactoryIdAndOwnerIdToWindowType(id, msg.owner_id); }).filter(function (x) { return x != null; }); }, this._windowTypeStatusChangeCallbacks);
      };
      GW3Bridge.prototype.forwardPeerFactoryMessagesToPeerFactoryRequests = function () {
          var _this = this;
          this.subscribe(gwMessagePeerRequested, function (msg) {
              var factory = _this._peerFactoriesRegisteredByUs[msg.peer_factory];
              if (!factory) {
                  _this._gw3Session.send({
                      type: gwMmessageError,
                      request_id: msg.request_id,
                      reason: "Unknown peer factory " + msg.peer_factory
                  });
                  return;
              }
              try {
                  var configuration = msg.configuration || {};
                  configuration.gateway_token = configuration.gateway_token || msg.gateway_token;
                  configuration.peer_factory = configuration.peer_factory || msg.peer_factory;
                  var promise = factory({
                      activityId: msg.activity && msg.activity.id,
                      activityType: msg.activity && msg.activity.type,
                      type: msg.configuration && msg.configuration.type,
                      gwToken: configuration.gateway_token,
                      configuration: configuration
                  });
                  if (promise && promise.then && promise.catch) {
                      promise.catch(function (err) { return _this._gw3Session.send({
                          type: gwMmessageError,
                          request_id: msg.request_id,
                          reason: err && (err.message || JSON.stringify(err))
                      }); });
                  }
              }
              catch (err) {
                  _this._gw3Session.send({
                      type: gwMmessageError,
                      request_id: msg.request_id,
                      reason: err && (err.message || JSON.stringify(err))
                  });
              }
          });
      };
      GW3Bridge.prototype.forwardActivityWindowMessagesToEventHandlers = function () {
          var _this = this;
          var _loop_1 = function (joinedMessage) {
              this_1.subscribe(joinedMessage, function (msg) {
                  var joinedId = (joinedMessage === gwMessageActivityJoined) ? msg.joined_id : msg.peer_id;
                  var joinedType = (joinedMessage === gwMessageActivityJoined) ? msg.joined_type : msg.peer_type;
                  var joinedName = (joinedMessage === gwMessageActivityJoined) ? msg.joined_name : msg.peer_name;
                  var entity = new ActivityWindow(joinedId, joinedName, joinedType, msg.activity_id, _this.getAgmInstance(joinedId), undefined, _this.generateWindowGetter(joinedId), undefined);
                  if (!_this._contextSubscriptions[msg.activity_id]) {
                      _this.subscribeToContext(msg).then(function () {
                          if (joinedMessage === gwMessageJoinedActivity) {
                              _this._activityJoinedPromiseResolve({});
                          }
                      });
                  }
                  else if (joinedMessage === gwMessageJoinedActivity) {
                      _this._activityJoinedPromiseResolve({});
                  }
                  _this.invokeCallbacks(_this._activityWindowChangeCallbacks, new EntityEvent(entity, new EntityEventContext(EntityEventType.ActivityWindowJoinedActivity)), joinedMessage);
              });
          };
          var this_1 = this;
          for (var _i = 0, _a = [gwMessageActivityJoined, gwMessageJoinedActivity]; _i < _a.length; _i++) {
              var joinedMessage = _a[_i];
              _loop_1(joinedMessage);
          }
          this.subscribe(gwMessageActivityLeft, function (msg) {
              var entity = new ActivityWindow(msg.left_id, undefined, undefined, null, _this.getAgmInstance(msg.left_id), undefined, _this.generateWindowGetter(msg.left_id), undefined);
              _this.invokeCallbacks(_this._activityWindowChangeCallbacks, new EntityEvent(entity, new EntityEventContext(EntityEventType.ActivityWindowLeftActivity)), gwMessageActivityLeft);
          });
          this.forwardAddedAndRemovedMessagesToEventHandler(gwMessagePeerCreated, undefined, function (msg) { return [
              new ActivityWindow(msg.created_id, undefined, undefined, undefined, undefined, undefined, _this.generateWindowGetter(msg.created_id), undefined)
          ]; }, this._activityWindowChangeCallbacks);
      };
      GW3Bridge.prototype.getAgmInstance = function (id) {
          return this._config.agm.servers().find(function (s) { return s.peerId === id || s.windowId === id; });
      };
      GW3Bridge.prototype.generateWindowGetter = function (peerId) {
          var _this = this;
          return function () {
              var server = _this.getAgmInstance(peerId);
              if (!server) {
                  return;
              }
              var windowId = server.windowId;
              return _this._config.windows.list().filter(function (w) { return w.id === windowId; })[0];
          };
      };
      GW3Bridge.prototype.isOverrideTypeDefinition = function (value) {
          if (typeof value === "undefined") {
              return false;
          }
          if (value.owner) {
              return true;
          }
          return false;
      };
      return GW3Bridge;
  }());

  var ActivityMy = (function () {
      function ActivityMy(manager, windows) {
          var _this = this;
          this._myAttached = [];
          this._myDetached = [];
          this._myAttachedTo = [];
          this._myDetachedFrom = [];
          this._myActivityFrameColorChanged = [];
          this._myActivityJoinedCallbacks = [];
          this._myActivityRemovedCallbacks = [];
          this._myContextUpdateCallbacks = [];
          this._logger = Logger$1.Get(this);
          this._m = manager;
          manager.ready()
              .then(function (am) {
              am.subscribeActivityContextChanged(_this._subscribeMyContextChanged.bind(_this));
              am.subscribeWindowEvents(_this._subscribeMyWindowEvent.bind(_this));
              am.subscribeActivitiesAttached(_this._subscribeActivitiesAttached.bind(_this));
              am.subscribeActivitiesDetached(_this._subscribeActivitiesDetached.bind(_this));
              if (windows) {
                  windows.onWindowFrameColorChanged(_this._subscribeWindowFrameColorChanged.bind(_this));
              }
          });
      }
      Object.defineProperty(ActivityMy.prototype, "window", {
          get: function () {
              if (isUndefinedOrNull(this._w)) {
                  var announcedWindows = this._m.announcedWindows;
                  if (announcedWindows.length > 0) {
                      this._w = announcedWindows[0];
                  }
              }
              return this._w;
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(ActivityMy.prototype, "activity", {
          get: function () {
              var myWin = this.window;
              if (isUndefinedOrNull(myWin)) {
                  return undefined;
              }
              return myWin.activity;
          },
          enumerable: true,
          configurable: true
      });
      ActivityMy.prototype.createWindow = function (windowType) {
          return this._m.createWindow(this.activity, windowType);
      };
      ActivityMy.prototype.createStackedWindows = function (windowTypes, timeout) {
          return this._m.createStackedWindows(this.activity, windowTypes, timeout);
      };
      Object.defineProperty(ActivityMy.prototype, "context", {
          get: function () {
              var activity = this.activity;
              if (isUndefined(activity)) {
                  return {};
              }
              return activity.context;
          },
          enumerable: true,
          configurable: true
      });
      ActivityMy.prototype.updateContext = function (context, callback) {
          var activity = this.activity;
          if (isUndefined(activity)) {
              return new Promise(function (resolve, reject) {
                  reject("Not in activity");
              });
          }
          return activity.updateContext(context, callback);
      };
      ActivityMy.prototype.setContext = function (context, callback) {
          var activity = this.activity;
          if (isUndefined(activity)) {
              return new Promise(function (resolve, reject) {
                  reject("Not in activity");
              });
          }
          return activity.setContext(context, callback);
      };
      ActivityMy.prototype.onActivityJoined = function (callback) {
          this._myActivityJoinedCallbacks.push(callback);
          var myWin = this.window;
          if (!isUndefinedOrNull(myWin) && !isUndefinedOrNull(myWin.activity)) {
              callback(myWin.activity);
          }
      };
      ActivityMy.prototype.onActivityLeft = function (callback) {
          this._myActivityRemovedCallbacks.push(callback);
      };
      ActivityMy.prototype.onContextChanged = function (callback) {
          this._myContextUpdateCallbacks.push(callback);
          var myWin = this.window;
          if (isUndefinedOrNull(myWin)) {
              return;
          }
          var activity = myWin.activity;
          if (isUndefinedOrNull(activity)) {
              return;
          }
          callback(activity.context, activity.context, [], activity);
      };
      ActivityMy.prototype.clone = function (options, callback) {
          var act = this.activity;
          return this._m.clone(act, options, callback);
      };
      ActivityMy.prototype.attach = function (activity, tag) {
          var activityId;
          if (typeof activity === "string") {
              activityId = activity;
          }
          else {
              activityId = activity.id;
          }
          return this._m.attachActivities(activityId, this.activity.id, tag);
      };
      ActivityMy.prototype.onActivityAttached = function (callback) {
          this._myAttached.push(callback);
      };
      ActivityMy.prototype.onActivityDetached = function (callback) {
          this._myDetached.push(callback);
      };
      ActivityMy.prototype.onAttachedToActivity = function (callback) {
          this._myAttachedTo.push(callback);
      };
      ActivityMy.prototype.onDetachedFromActivity = function (callback) {
          this._myDetachedFrom.push(callback);
      };
      Object.defineProperty(ActivityMy.prototype, "attached", {
          get: function () {
              if (!this.activity) {
                  return [];
              }
              return this.activity.attached;
          },
          enumerable: true,
          configurable: true
      });
      ActivityMy.prototype.setFrameColor = function (color, callback) {
          if (this.activity) {
              return this.activity.setFrameColor(color, callback);
          }
          else {
              return Promise.resolve(null);
          }
      };
      ActivityMy.prototype.getFrameColor = function () {
          if (this.activity) {
              return this.activity.getFrameColor();
          }
          return "";
      };
      ActivityMy.prototype.onFrameColorChanged = function (callback) {
          this._myActivityFrameColorChanged.push(callback);
      };
      ActivityMy.prototype._subscribeMyContextChanged = function (activity, context, delta, removed) {
          var myWin = this.window;
          if (isUndefinedOrNull(myWin)) {
              return;
          }
          var myActivity = myWin.activity;
          if (isUndefinedOrNull(myActivity)) {
              return;
          }
          if (activity.id !== myActivity.id) {
              return;
          }
          this._notifyMyContextChanged(activity, context, delta, removed);
      };
      ActivityMy.prototype._subscribeMyWindowEvent = function (activity, window, event) {
          if (isUndefinedOrNull(this.window)) {
              return;
          }
          if (this.window.id !== window.id) {
              return;
          }
          if (event === EntityEventType.ActivityWindowJoinedActivity) {
              this._notifyMyWindowEvent(activity, this._myActivityJoinedCallbacks);
              this._notifyMyContextChanged(activity, activity.context, null, null);
          }
          else if (event === EntityEventType.ActivityWindowLeftActivity) {
              this._notifyMyWindowEvent(activity, this._myActivityRemovedCallbacks);
          }
      };
      ActivityMy.prototype._notifyMyWindowEvent = function (activity, callbackStore) {
          var _this = this;
          callbackStore.forEach(function (element) {
              try {
                  element(activity, event);
              }
              catch (e) {
                  _this._logger.warn("error in user callback " + e);
              }
          });
      };
      ActivityMy.prototype._notifyMyContextChanged = function (activity, context, delta, removed) {
          var _this = this;
          delta = delta || {};
          removed = removed || [];
          this._myContextUpdateCallbacks.forEach(function (element) {
              try {
                  element(context, delta, removed, activity);
              }
              catch (e) {
                  _this._logger.warn("error in user callback " + e);
              }
          });
      };
      ActivityMy.prototype._notifyAttached = function (state) {
          var _this = this;
          this._myAttached.forEach(function (cb) {
              try {
                  cb(state);
              }
              catch (e) {
                  _this._logger.warn("error in user callback " + e);
              }
          });
      };
      ActivityMy.prototype._notifyDetached = function (state) {
          var _this = this;
          this._myDetached.forEach(function (cb) {
              try {
                  cb(state);
              }
              catch (e) {
                  _this._logger.warn("error in user callback " + e);
              }
          });
      };
      ActivityMy.prototype._notifyAttachedTo = function (state) {
          var _this = this;
          this._myAttachedTo.forEach(function (cb) {
              try {
                  cb(_this.activity, state);
              }
              catch (e) {
                  _this._logger.warn("error in user callback " + e);
              }
          });
      };
      ActivityMy.prototype._notifyDetachedFrom = function (detached, existing, state) {
          var _this = this;
          this._myDetachedFrom.forEach(function (cb) {
              try {
                  cb(detached, existing, state);
              }
              catch (e) {
                  _this._logger.warn("error in user callback " + e);
              }
          });
      };
      ActivityMy.prototype._subscribeActivitiesAttached = function (newAct, state) {
          var myWin = this.window;
          if (isUndefinedOrNull(myWin)) {
              return;
          }
          var myActivity = myWin.activity;
          if (isUndefinedOrNull(myActivity)) {
              return;
          }
          if (newAct.id !== myActivity.id) {
              return;
          }
          if (state.windowIds.indexOf(myWin.id) >= 0) {
              this._notifyAttachedTo(state);
              return;
          }
          this._notifyAttached(state);
      };
      ActivityMy.prototype._subscribeActivitiesDetached = function (newAct, oldAct, state) {
          var myWin = this.window;
          if (isUndefinedOrNull(myWin)) {
              return;
          }
          var myActivity = myWin.activity;
          if (isUndefinedOrNull(myActivity)) {
              return;
          }
          if (oldAct.id === myActivity.id) {
              this._notifyDetached(state);
          }
          if (newAct.id === myActivity.id) {
              this._notifyDetachedFrom(newAct, oldAct, state);
          }
      };
      ActivityMy.prototype._subscribeWindowFrameColorChanged = function (window) {
          var act = this.activity;
          if (!act) {
              return;
          }
          if (!act.owner) {
              return;
          }
          if (act.owner.underlyingWindow.id === window.id) {
              this._myActivityFrameColorChanged.forEach(function (callback) {
                  callback(window.frameColor);
              });
          }
      };
      return ActivityMy;
  }());

  var ReadyMarker = (function () {
      function ReadyMarker(name, signalsToWait) {
          this._logger = Logger$1.Get("ReadyMarker [" + name + "]");
          this._logger.debug("Initializing ready marker for '" + name + "' with " + signalsToWait + " signals to wait");
          if (signalsToWait <= 0) {
              throw new Error("Invalid signal number. Should be > 0");
          }
          this._signals = signalsToWait;
          this._callbacks = [];
          this._name = name;
      }
      ReadyMarker.prototype.setCallback = function (callback) {
          if (this.isSet()) {
              callback(undefined);
              return;
          }
          else if (this.isError()) {
              callback(this._error);
              return;
          }
          this._callbacks.push(callback);
      };
      ReadyMarker.prototype.signal = function (message) {
          this._logger.debug("Signaled - " + message + " - signals left " + (this._signals - 1));
          this._signals--;
          if (this._signals < 0) {
              throw new Error("Error in ready marker '" + this._name + " - signals are " + this._signals);
          }
          if (this.isSet()) {
              this._callbacks.forEach(function (callback) {
                  callback(undefined);
              });
          }
      };
      ReadyMarker.prototype.error = function (error) {
          this._error = error;
          this._callbacks.forEach(function (errorCallback) {
              errorCallback(error);
          });
      };
      ReadyMarker.prototype.isSet = function () {
          if (this.isError()) {
              return false;
          }
          return this._signals === 0;
      };
      ReadyMarker.prototype.isError = function () {
          return !isUndefined(this._error);
      };
      ReadyMarker.prototype.getError = function () {
          return this._error;
      };
      return ReadyMarker;
  }());

  var EntityObservableCollection = (function () {
      function EntityObservableCollection(processNew) {
          this._items = {};
          this._listeners = [];
          this._processNew = processNew;
      }
      EntityObservableCollection.prototype.addOne = function (item) {
          this.add([item]);
      };
      EntityObservableCollection.prototype.add = function (items) {
          var _this = this;
          items.forEach(function (element) {
              _this.process(new EntityEvent(element, new EntityEventContext(EntityEventType.Added)));
          });
      };
      EntityObservableCollection.prototype.process = function (event) {
          var context = event.context;
          var type = context.type;
          var entity = event.entity;
          if (type === EntityEventType.StatusChange &&
              !context.oldStatus) {
              var act = this._items[entity.id];
              if (act) {
                  context.oldStatus = act.status;
              }
          }
          if (type === EntityEventType.StatusChange &&
              context.oldStatus &&
              context.newStatus &&
              context.oldStatus.state ===
                  context.newStatus.state) {
              context.type = EntityEventType.Updated;
          }
          if (typeof htmlContainer === "undefined") {
              if (type === EntityEventType.ActivityWindowJoinedActivity &&
                  this._items[entity.id] &&
                  this._items[entity.id].activity) {
                  context.type = EntityEventType.Updated;
              }
              if (type === EntityEventType.ActivityWindowLeftActivity &&
                  this._items[entity.id] &&
                  !this._items[entity.id].activity) {
                  context.type = EntityEventType.Updated;
              }
          }
          var internalEntity = this._updateInternalCollections(entity, type, context);
          this._notifyListeners(internalEntity, context);
          return internalEntity;
      };
      EntityObservableCollection.prototype.get = function () {
          var result = [];
          for (var key in this._items) {
              if (this._items.hasOwnProperty(key)) {
                  var element = this._items[key];
                  result.push(element);
              }
          }
          return result;
      };
      EntityObservableCollection.prototype.getByName = function (name) {
          for (var key in this._items) {
              if (key === name) {
                  return this._items[key];
              }
          }
          return undefined;
      };
      EntityObservableCollection.prototype.getOrWait = function (name) {
          var _this = this;
          return new Promise(function (resolve) {
              var entityAddedHandler = function (entity) {
                  if (entity.id !== name) {
                      return;
                  }
                  resolve(entity);
                  _this.unsubscribe(entityAddedHandler);
              };
              _this.subscribe(entityAddedHandler);
              var window = _this.getByName(name);
              if (window) {
                  _this.unsubscribe(entityAddedHandler);
                  resolve(window);
                  return;
              }
          });
      };
      EntityObservableCollection.prototype.subscribe = function (handler) {
          var _this = this;
          this._listeners.push(handler);
          Object.keys(this._items).forEach(function (key) {
              var element = _this._items[key];
              handler(element, new EntityEventContext(EntityEventType.Added.toString()));
          });
          return function () {
              _this.unsubscribe(handler);
          };
      };
      EntityObservableCollection.prototype.unsubscribe = function (handler) {
          var index = this._listeners.indexOf(handler);
          if (index !== -1) {
              this._listeners.splice(index, 1);
          }
      };
      EntityObservableCollection.prototype._notifyListeners = function (entity, context) {
          this._listeners.forEach(function (listener) {
              try {
                  listener(entity, context);
              }
              catch (e) {
                  return;
              }
          });
      };
      EntityObservableCollection.prototype._updateInternalCollections = function (entity, type, context) {
          var entityAsAny = entity;
          var isActivityDestroy = (type === EntityEventType.StatusChange &&
              entityAsAny.status &&
              entityAsAny.status.state === ActivityState.Destroyed) ||
              (type === EntityEventType.StatusChange &&
                  context &&
                  context.newStatus &&
                  context.newStatus.state === ActivityState.Destroyed);
          var isWindowClose = type === EntityEventType.Closed;
          var isTypeRemove = type === EntityEventType.Removed && typeof entityAsAny.isIndependent === "undefined";
          if (isTypeRemove || isWindowClose || isActivityDestroy) {
              var oldEntity = this._items[entity.id];
              delete this._items[entity.id];
              this._processNew(entity);
              if (oldEntity) {
                  entity._beforeDelete(oldEntity);
              }
              return entity;
          }
          else {
              var key = entity.id;
              if (!this._items.hasOwnProperty(key)) {
                  this._processNew(entity);
                  this._items[entity.id] = entity;
              }
              else {
                  this._items[entity.id]._update(entity);
              }
          }
          return this._items[entity.id];
      };
      return EntityObservableCollection;
  }());

  var ActivityManager = (function () {
      function ActivityManager(bridge, autoAnnounce, windows) {
          var _this = this;
          this._logger = Logger$1.Get("activityManager");
          this._announcedWindows = [];
          this._attachedCallbacks = [];
          this._detachedCallbacks = [];
          this._frameColorChangesCallbacks = [];
          this._windowHandlers = [];
          this._bridge = bridge;
          this._activityTypes = new EntityObservableCollection(function (e) { return _this._grabEntity(e); });
          this._windowTypes = new EntityObservableCollection(function (e) { return _this._grabEntity(e); });
          this._activities = new EntityObservableCollection(function (e) { return _this._grabEntity(e); });
          this._windows = new EntityObservableCollection(function (e) { return _this._grabEntity(e); });
          this._dataReadyMarker = new ReadyMarker("Activity Manager Data", ["GetActivityTypes", "GetWindowTypes", "GetActivities", "GetWindows"].length);
          this._descriptorsMarker = new ReadyMarker("Attached Activities Descriptors", ["GetDescriptors"].length);
          if (autoAnnounce) {
              this._readyMarker = new ReadyMarker("Activity Manager Announce", ["Announcement"].length);
              this._dataReadyMarker.setCallback(function (dataErr) {
                  if (dataErr) {
                      _this._readyMarker.error(dataErr);
                  }
                  _this._descriptorsMarker.setCallback(function (err) {
                      if (err) {
                          _this._readyMarker.error(err);
                      }
                      _this._logger.debug("Auto announcing window");
                      _this.announceWindow()
                          .then(function (w) {
                          _this._announcedWindows.push(w);
                          _this._readyMarker.signal("Successfully announced window with id '" + w.id + "'");
                      })
                          .catch(function (errCatch) {
                          _this._logger.debug("Will not announce window - " + errCatch);
                          _this._readyMarker.signal();
                      });
                  });
                  _this.refreshDescriptors();
              });
          }
          else {
              this._readyMarker = this._dataReadyMarker;
          }
          this._bridge.onActivitiesAttached(function (e) {
              _this._handleActivitiesAttached(e);
          });
          this._bridge.onActivitiesDetached(function (e) {
              _this._handleActivitiesDetached(e);
          });
          this._bridge.onActivityAttachedDescriptorsRefreshed(function (e) {
              _this._handleActivityDescriptorsRefreshed(e);
          });
          if (windows) {
              windows.onWindowFrameColorChanged(this._handleWindowFrameColorChanged.bind(this));
          }
          this._bridge.init();
          this._subscribeForData();
          this._bridge
              .initReady()
              .then(function (aw) {
              _this._getInitialData();
          })
              .catch(function (error) {
              console.log(error);
          });
      }
      Object.defineProperty(ActivityManager.prototype, "usingHc", {
          get: function () {
              return this._bridge.bridgeType === "HC";
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(ActivityManager.prototype, "announcedWindows", {
          get: function () {
              return this._announcedWindows;
          },
          set: function (v) {
              throw new Error("not allowed");
          },
          enumerable: true,
          configurable: true
      });
      ActivityManager.prototype.ready = function (callback) {
          var _this = this;
          var promise = new Promise(function (resolve, reject) {
              _this._readyMarker.setCallback(function (err) {
                  if (!err) {
                      resolve(_this);
                  }
                  else {
                      reject(_this._readyMarker.getError());
                  }
              });
          });
          return nodeify(Promise.all([this._bridge.ready(), promise]).then(function () { return _this; }), callback);
      };
      ActivityManager.prototype.getActivityTypes = function () {
          return this._activityTypes.get();
      };
      ActivityManager.prototype.getActivityType = function (name) {
          return this._activityTypes.getByName(name);
      };
      ActivityManager.prototype.registerActivityType = function (activityTypeName, ownerWindowType, helperWindowTypes, config, description, callback) {
          var _this = this;
          var promise = new Promise(function (resolve, reject) {
              if (isUndefinedOrNull(activityTypeName)) {
                  reject("activityTypeName argument can not be undefined");
                  return;
              }
              if (!isString(activityTypeName)) {
                  reject("activityTypeName should be string");
                  return;
              }
              var actType = _this.getActivityType(activityTypeName);
              if (!isUndefinedOrNull(actType)) {
                  reject("Activity type '" + activityTypeName + "' already exists");
                  return;
              }
              var ownerDefinition;
              if (isUndefined(ownerWindowType)) {
                  reject("Owner window type can not be undefined");
                  return;
              }
              if (isString(ownerWindowType)) {
                  ownerDefinition = { type: ownerWindowType, name: "", isIndependent: false, arguments: {} };
              }
              else {
                  ownerDefinition = ownerWindowType;
              }
              var helperDefinitions = [];
              if (!isUndefined(helperWindowTypes) && isArray(helperWindowTypes)) {
                  for (var index in helperWindowTypes) {
                      var item = helperWindowTypes[index];
                      if (isString(item)) {
                          var definition = {
                              type: item,
                              name: "",
                              isIndependent: false,
                              arguments: {},
                              relativeTo: "",
                              relativeDirection: "",
                              windowStyleAttributes: {}
                          };
                          helperDefinitions.push(definition);
                      }
                      else {
                          helperDefinitions.push(item);
                      }
                  }
              }
              _this._bridge
                  .registerActivityType(activityTypeName, ownerDefinition, helperDefinitions, config, description)
                  .then(function (activityType) {
                  _this._grabEntity(activityType);
                  resolve(activityType);
              })
                  .catch(function (error) {
                  reject(error);
              });
          });
          return nodeify(promise, callback);
      };
      ActivityManager.prototype.unregisterActivityType = function (type, callback) {
          var _this = this;
          var promise = new Promise(function (resolve, reject) {
              var actType = _this.getActivityType(type);
              if (isUndefined(actType)) {
                  reject("Activity type '" + type + "' does not exists");
                  return;
              }
              _this._bridge.unregisterActivityType(type).then(function () { return resolve(actType); }, reject);
          });
          return nodeify(promise, callback);
      };
      ActivityManager.prototype.initiate = function (activityType, context, callback, configuration) {
          var _this = this;
          var promise = new Promise(function (resolve, reject) {
              var actType = _this.getActivityType(activityType);
              if (isUndefined(actType)) {
                  reject("Activity type '" + activityType + "' does not exists");
                  return;
              }
              _this._bridge
                  .initiateActivity(activityType, context, configuration)
                  .then(function (actId) {
                  _this._activities
                      .getOrWait(actId)
                      .then(function (act) {
                      resolve(act);
                  })
                      .catch(function (err) { return reject(err); });
              })
                  .catch(function (err) {
                  reject(err);
              });
          });
          return nodeify(promise, callback);
      };
      ActivityManager.prototype.subscribeActivityTypeEvents = function (handler) {
          this._activityTypes.subscribe(function (at, context) {
              handler(at, context.type);
          });
      };
      ActivityManager.prototype.getWindowTypes = function () {
          return this._windowTypes.get();
      };
      ActivityManager.prototype.getWindowType = function (name) {
          return this._windowTypes.getByName(name);
      };
      ActivityManager.prototype.registerWindowFactory = function (windowType, factoryMethod, callback) {
          var _this = this;
          var promise = new Promise(function (resolve, reject) {
              if (isUndefinedOrNull(windowType)) {
                  reject("no windowType specified");
                  return;
              }
              if (isObject(windowType)) {
                  windowType = windowType.getName();
              }
              else if (!isString(windowType)) {
                  reject("windowType should be string or object that has getName method");
                  return;
              }
              _this._bridge
                  .registerWindowFactory(windowType, factoryMethod)
                  .then(function (v) {
                  resolve(v);
              })
                  .catch(function (err) {
                  reject(err);
              });
          });
          return nodeify(promise, callback);
      };
      ActivityManager.prototype.unregisterWindowFactory = function (windowType, callback) {
          var _this = this;
          var promise = new Promise(function (resolve, reject) {
              if (isUndefinedOrNull(windowType)) {
                  reject("no windowType specified");
                  return;
              }
              if (!isString(windowType)) {
                  reject("windowType should be a string");
                  return;
              }
              _this._bridge
                  .unregisterWindowFactory(windowType)
                  .then(function (v) {
                  resolve(v);
              })
                  .catch(function (err) {
                  reject(err);
              });
          });
          return nodeify(promise, callback);
      };
      ActivityManager.prototype.getActivities = function (activityType) {
          var act = this._activities.get();
          act = act.filter(function (a) { return a._ownerId; });
          if (!activityType) {
              return act;
          }
          var types = activityType;
          if (isString(activityType)) {
              types = [activityType];
          }
          else if (activityType instanceof ActivityType) {
              types = [activityType.name];
          }
          else if (activityType instanceof Array) ;
          else {
              throw new Error("Invalid input argument 'activityType' = " + activityType);
          }
          return act.filter(function (at) {
              var type = at.type;
              return some(types, function (t) {
                  return type.id === t.id;
              });
          });
      };
      ActivityManager.prototype.getActivityById = function (id) {
          return this._activities.getByName(id);
      };
      ActivityManager.prototype.announceWindow = function (activityWindowId, windowType) {
          var _this = this;
          var promise = new Promise(function (resolve, reject) {
              var announcementInfo = _this._bridge.getAnnouncementInfo();
              if (isUndefined(activityWindowId)) {
                  activityWindowId = announcementInfo.activityWindowId;
              }
              if (isUndefined(windowType)) {
                  windowType = announcementInfo.activityWindowType;
              }
              if (isUndefinedOrNull(windowType)) {
                  throw new Error("Can not announce - unknown windowType");
              }
              var activityId = announcementInfo && announcementInfo.activityId;
              if (isUndefinedOrNull(activityWindowId)) {
                  _this._logger.debug("Registering window with type:'" + windowType + "', name:'" + announcementInfo.activityWindowName + "', ind.:'" + announcementInfo.activityWindowIndependent + "'");
                  _this._bridge.registerWindow(windowType, announcementInfo.activityWindowName, announcementInfo.activityWindowIndependent)
                      .then(_this._windows.getOrWait.bind(_this._windows))
                      .then(function (w) {
                      if (activityId) {
                          return _this._activities.getOrWait(activityId).then(function (_) { return w; });
                      }
                      else {
                          return w;
                      }
                  })
                      .then(function (w) {
                      resolve(w);
                  })
                      .catch(function (err) {
                      _this._logger.error(err);
                  });
              }
              else {
                  _this._logger.debug("Announcing window with id '" + activityWindowId + "' and type '" + windowType + "'");
                  var currentWindow = _this._windows.getByName(activityWindowId);
                  if (!isUndefinedOrNull(currentWindow)) {
                      _this._logger.debug("Window with id '" + activityWindowId + "' already announced - reusing the window");
                      resolve(currentWindow);
                      return;
                  }
                  var windowEventHandler_1 = function (a, w, e) {
                      if (activityWindowId === w.id) {
                          if (e === EntityEventType.ActivityWindowJoinedActivity) {
                              var activity = w.activity;
                              if (isUndefined(activity)) {
                                  reject("UNDEFINED ACTIVITY");
                              }
                              _this._logger.trace("Got joined event for id '" + activityWindowId + "'");
                              resolve(w);
                              _this.unsubscribeWindowEvents(windowEventHandler_1);
                          }
                      }
                  };
                  _this.subscribeWindowEvents(windowEventHandler_1);
                  _this._logger.trace("Waiting for joined event for id '" + activityWindowId + "'");
                  _this._bridge.announceWindow(windowType, activityWindowId);
              }
          });
          return promise;
      };
      ActivityManager.prototype.subscribeWindowTypeEvents = function (handler) {
          this._windowTypes.subscribe(function (wt, context) {
              handler(wt, context.type);
          });
      };
      ActivityManager.prototype.subscribeActivityEvents = function (handler) {
          var _this = this;
          return this._activities.subscribe(function (act, context) {
              if (context.type === EntityEventType.StatusChange) {
                  var p = context;
                  handler(act, p.newStatus, p.oldStatus);
              }
              if (context.type === EntityEventType.Removed ||
                  (context.type === EntityEventType.StatusChange &&
                      context.newStatus.getState() === ActivityState.Destroyed)) {
                  for (var _i = 0, _a = _this._windows.get(); _i < _a.length; _i++) {
                      var window_1 = _a[_i];
                      if (window_1.activity && window_1.activity.id === act.id) {
                          _this._windows.process(new EntityEvent(window_1, new EntityEventContext(EntityEventType.ActivityWindowLeftActivity)));
                      }
                  }
              }
          });
      };
      ActivityManager.prototype.subscribeWindowEvents = function (handler) {
          var wrappingHandler = function (window, context) {
              var eventType = context.type;
              if (eventType === EntityEventType.Added) {
                  eventType = "opened";
              }
              handler(window.activity, window, eventType);
          };
          this._windowHandlers.push([handler, wrappingHandler]);
          return this._windows.subscribe(wrappingHandler);
      };
      ActivityManager.prototype.unsubscribeWindowEvents = function (handler) {
          var found = this._windowHandlers.find(function (pair) { return pair[0] === handler; });
          if (found) {
              this._windowHandlers.splice(this._windowHandlers.indexOf(found), 1);
              this._windows.unsubscribe(found[1]);
          }
      };
      ActivityManager.prototype.createWindow = function (activity, windowTypeOrConfiguration, callback) {
          var _this = this;
          var promise = new Promise(function (resolve, reject) {
              if (isUndefinedOrNull(windowTypeOrConfiguration)) {
                  reject("windowType is undefined");
              }
              var windowDefinition;
              if (isString(windowTypeOrConfiguration)) {
                  windowDefinition = { type: windowTypeOrConfiguration, name: "", isIndependent: false, arguments: {} };
              }
              else if (windowTypeOrConfiguration instanceof WindowType) {
                  windowDefinition = {
                      type: windowTypeOrConfiguration.type || windowTypeOrConfiguration.id,
                      name: windowTypeOrConfiguration.name || windowTypeOrConfiguration.type || windowTypeOrConfiguration.id,
                      isIndependent: false
                  };
              }
              else {
                  var invalidKeys_1 = ["url"];
                  var filteredWindowTypeOrConfiguration_1 = {};
                  Object.keys(windowTypeOrConfiguration).forEach(function (key) {
                      if (invalidKeys_1.indexOf(key) === -1) {
                          filteredWindowTypeOrConfiguration_1[key] = windowTypeOrConfiguration[key];
                      }
                  });
                  windowDefinition = filteredWindowTypeOrConfiguration_1;
              }
              var relativeToWindow;
              if (!isUndefinedOrNull(windowDefinition.relativeTo)) {
                  relativeToWindow = windowDefinition.relativeTo;
                  if (typeof relativeToWindow === "string") {
                      var windows = _this.getWindows({ type: relativeToWindow });
                      if (!isUndefinedOrNull(windows) && windows.length > 0) {
                          windowDefinition.relativeTo = windows[0].id;
                      }
                  }
                  else if (!isUndefinedOrNull(relativeToWindow.type)) {
                      var windows = _this.getWindows({ type: relativeToWindow.type });
                      if (!isUndefinedOrNull(windows) && windows.length > 0) {
                          windowDefinition.relativeTo = windows[0].id;
                      }
                  }
                  else if (!isUndefinedOrNull(relativeToWindow.windowId)) {
                      windowDefinition.relativeTo = relativeToWindow.windowId;
                  }
              }
              _this._bridge.createWindow(activity && activity.id, windowDefinition)
                  .then(function (wid) {
                  _this._logger.debug("Window created, waiting for window entity with id " + wid);
                  var handler = function (window, context) {
                      if (window.id === wid && (!activity || window.activity)) {
                          _this._logger.debug("Got entity window with id " + wid);
                          resolve(window);
                          _this._windows.unsubscribe(handler);
                      }
                  };
                  _this._windows.subscribe(handler);
              })
                  .catch(function (err) {
                  reject(err);
              });
          });
          return nodeify(promise, callback);
      };
      ActivityManager.prototype.createStackedWindows = function (activity, relativeWindowTypes, timeout, callback) {
          var _this = this;
          var promise = new Promise(function (resolve, reject) {
              if (isUndefinedOrNull(activity)) {
                  reject("activity is undefined");
              }
              if (isUndefinedOrNull(relativeWindowTypes)) {
                  reject("relativeWindowTypes is undefined");
              }
              if (!Array.isArray(relativeWindowTypes)) {
                  reject("relativeWindowTypes has to be an array");
              }
              if (isUndefinedOrNull(timeout)) {
                  timeout = 20000;
              }
              var windowDefinitions = [];
              relativeWindowTypes.forEach(function (element) {
                  var windowDefinition;
                  if (isString(element)) {
                      windowDefinition = { type: element, name: "", isIndependent: false, arguments: {} };
                  }
                  else {
                      windowDefinition = element;
                  }
                  windowDefinition.stackedWindow = true;
                  windowDefinition.timeout = timeout;
                  var relativeToWindow;
                  if (!isUndefinedOrNull(windowDefinition.relativeTo)) {
                      relativeToWindow = windowDefinition.relativeTo;
                      if (!isUndefinedOrNull(relativeToWindow.type)) {
                          windowDefinition.relativeTo = relativeToWindow.type;
                      }
                      else if (!isUndefinedOrNull(relativeToWindow.windowId)) {
                          var windows = _this.getWindows({ id: relativeToWindow.windowId });
                          if (!isUndefinedOrNull(windows) && windows.length > 0) {
                              windowDefinition.relativeTo = windows[0].type.name;
                          }
                      }
                  }
                  windowDefinitions.push(windowDefinition);
              });
              var tasks = [];
              windowDefinitions.forEach(function (wd) { return tasks.push(_this.createWindow(activity, wd)); });
              Promise.all(tasks).then(resolve).catch(reject);
          });
          return nodeify(promise, callback);
      };
      ActivityManager.prototype.addWindowToActivity = function (activity, window, callback) {
          var toReturn = this._bridge.joinActivity(activity.id, window.id)
              .then(function () { return window; });
          nodeify(toReturn, callback);
          return toReturn;
      };
      ActivityManager.prototype.leaveWindowFromActivity = function (activity, window, callback) {
          var toReturn = this._bridge.leaveActivity(activity.id, window.id)
              .then(function () { return window; });
          nodeify(toReturn, callback);
          return toReturn;
      };
      ActivityManager.prototype.setActivityContext = function (activity, context, callback) {
          var _this = this;
          var promise = new Promise(function (resolve, reject) {
              if (isUndefinedOrNull(activity)) {
                  reject("activity can not be null");
              }
              _this._bridge
                  .updateActivityContext(activity, context, true)
                  .then(function (_) {
                  resolve(activity);
              })
                  .catch(function (err) {
                  reject(err);
              });
          });
          return nodeify(promise, callback);
      };
      ActivityManager.prototype.updateActivityContext = function (activity, context, callback) {
          var _this = this;
          var promise = new Promise(function (resolve, reject) {
              if (isUndefinedOrNull(activity)) {
                  reject("activity can not be null");
              }
              var removedKeys = [];
              for (var key in context) {
                  if (context.hasOwnProperty(key) && context[key] === null) {
                      removedKeys.push(key);
                  }
              }
              for (var _i = 0, removedKeys_1 = removedKeys; _i < removedKeys_1.length; _i++) {
                  var removedKey = removedKeys_1[_i];
                  delete context[removedKey];
              }
              _this._bridge
                  .updateActivityContext(activity, context, false, removedKeys)
                  .then(function (_) {
                  resolve(activity);
              })
                  .catch(function (err) {
                  reject(err);
              });
          });
          return nodeify(promise, callback);
      };
      ActivityManager.prototype.subscribeActivityContextChanged = function (handler) {
          this._activities.subscribe(function (act, context) {
              if (context.type === EntityEventType.ActivityContextChange) {
                  var updateContext = context;
                  handler(act, updateContext.context, updateContext.updated, updateContext.removed);
              }
          });
      };
      ActivityManager.prototype.stopActivity = function (activity, callback) {
          var promise = this._bridge.stopActivity(activity);
          return nodeify(promise, callback);
      };
      ActivityManager.prototype.getWindows = function (filter) {
          if (isUndefined(filter)) {
              return this._windows.get();
          }
          if (!isUndefined(filter.id)) {
              return [this._windows.getByName(filter.id)];
          }
          var allWindows = this._windows.get();
          return allWindows.filter(function (w) {
              if (!isUndefined(filter.type) && w.type.id !== filter.type) {
                  return false;
              }
              if (!isUndefined(filter.name) && w.name !== filter.name) {
                  return false;
              }
              if (!isUndefined(filter.activityId)) {
                  if (isUndefinedOrNull(w.activity)) {
                      return false;
                  }
                  if (w.activity.id !== filter.activityId) {
                      return false;
                  }
              }
              return true;
          });
      };
      ActivityManager.prototype.getWindowBounds = function (id) {
          return this._bridge.getWindowBounds(id);
      };
      ActivityManager.prototype.setWindowBounds = function (id, bounds, callback) {
          var _this = this;
          var promise = new Promise(function (resolve, reject) {
              _this._bridge.setWindowBounds(id, bounds)
                  .then(function () { return resolve(); })
                  .catch(function (err) { return reject(err); });
          });
          return nodeify(promise, callback);
      };
      ActivityManager.prototype.closeWindow = function (id) {
          return this._bridge.closeWindow(id);
      };
      ActivityManager.prototype.activateWindow = function (id, focus) {
          return this._bridge.activateWindow(id, focus);
      };
      ActivityManager.prototype.setWindowVisibility = function (id, visible) {
          return this._bridge.setWindowVisibility(id, visible);
      };
      ActivityManager.prototype.clone = function (activity, cloneOptions, callback) {
          var _this = this;
          var promise = new Promise(function (resolve, reject) {
              if (!activity) {
                  reject("activity can not be null");
              }
              _this._bridge.cloneActivity(activity.id, cloneOptions)
                  .then(function (activityId) {
                  _this._activities
                      .getOrWait(activityId)
                      .then(function (act) {
                      resolve(act);
                  })
                      .catch(function (err) { return reject(err); });
              })
                  .catch(function (err) { return reject(err); });
          });
          return nodeify(promise, callback);
      };
      ActivityManager.prototype.attachActivities = function (from, to, tag, callback) {
          var _this = this;
          tag = tag || {};
          var promise = new Promise(function (resolve, reject) {
              var fromActivity = _this._activities.getByName(from);
              if (!fromActivity) {
                  reject("can not find activity with id " + from);
                  return;
              }
              var toActivity = _this._activities.getByName(to);
              if (!toActivity) {
                  reject("can not find activity with id " + to);
                  return;
              }
              return _this._bridge.attachActivities(from, to, tag)
                  .then(function (data) {
                  var newActId = data.to;
                  var state = data.descriptor;
                  var allStates = data.descriptors;
                  _this._activities.getOrWait(newActId).then(function (act) {
                      act._updateDescriptors(allStates);
                      var stateWrapped = act.attached.filter(function (u) { return u.ownerId === state.ownerId; })[0];
                      resolve(stateWrapped);
                  });
              })
                  .catch(function (err) {
                  reject(err);
              });
          });
          return nodeify(promise, callback);
      };
      ActivityManager.prototype.detachActivities = function (activityId, descriptor, callback) {
          var _this = this;
          var promise = new Promise(function (resolve, reject) {
              return _this._bridge.detachActivities(activityId, descriptor)
                  .then(function () {
                  var oldActId = undefined;
                  var newActId = undefined;
                  var descriptors = undefined;
                  _this._activities
                      .getOrWait(oldActId)
                      .then(function (oldAct) {
                      oldAct._updateDescriptors(descriptors);
                      _this._activities
                          .getOrWait(newActId)
                          .then(function (newAct) {
                          resolve(newAct);
                      });
                  })
                      .catch(function (err) { return reject(err); });
              })
                  .catch(function (err) {
                  reject(err);
              });
          });
          return nodeify(promise, callback);
      };
      ActivityManager.prototype.subscribeActivitiesAttached = function (callback) {
          this._attachedCallbacks.push(callback);
      };
      ActivityManager.prototype.subscribeActivitiesDetached = function (callback) {
          this._detachedCallbacks.push(callback);
      };
      ActivityManager.prototype.subscribeActivityFrameColorChanged = function (callback) {
          this._frameColorChangesCallbacks.push(callback);
      };
      ActivityManager.prototype._grabEntity = function (entity) {
          entity._manager = this;
      };
      ActivityManager.prototype._getInitialData = function () {
          var _this = this;
          this._logger.debug("Request initial data...");
          this._bridge.getActivityTypes()
              .then(function (at) {
              _this._activityTypes.add(at);
              _this._dataReadyMarker.signal("Got act types");
          })
              .catch(function (error) {
              _this._logger.error(error);
              _this._dataReadyMarker.error("Can not initialize ActivityManager - error getting activity types -" + error);
          });
          this._bridge.getWindowTypes()
              .then(function (wt) {
              _this._windowTypes.add(wt);
              _this._dataReadyMarker.signal("Got window types");
          })
              .catch(function (error) {
              _this._logger.error(error);
              _this._dataReadyMarker.error("Can not initialize ActivityManager - error getting window types  " + error);
          });
          this._bridge.getActivities()
              .then(function (ac) {
              _this._activities.add(ac);
              _this._dataReadyMarker.signal("Got activities");
          })
              .catch(function (error) {
              _this._logger.error(error);
              _this._dataReadyMarker.error("Can not initialize ActivityManager - error getting activity instances -" + error);
          });
          this._bridge.getActivityWindows()
              .then(function (aw) {
              _this._windows.add(aw);
              _this._dataReadyMarker.signal("Got windows");
          })
              .catch(function (error) {
              _this._logger.error(error);
              _this._dataReadyMarker.error("Can not initialize ActivityManager - error getting activity windows -" + error);
          });
      };
      ActivityManager.prototype._subscribeForData = function () {
          var _this = this;
          this._logger.debug("Subscribe for data...");
          this._bridge.onActivityTypeStatusChange(function (event) {
              _this._activityTypes.process(event);
          });
          this._bridge.onWindowTypeStatusChange(function (event) {
              _this._windowTypes.process(event);
          });
          this._bridge.onActivityWindowChange(function (event) {
              _this._windows.process(event);
          });
          this._bridge.onActivityStatusChange(function (event) {
              _this._activities.process(event);
          });
      };
      ActivityManager.prototype._handleActivitiesAttached = function (data) {
          var _this = this;
          var newActId = data.to;
          var descriptor = data.descriptor;
          var descriptors = data.descriptors;
          this._activities.getOrWait(newActId).then(function (act) {
              act._updateDescriptors(descriptors);
              var descriptorAsObjectFromAPI = act.attached.filter(function (u) { return u.ownerId === descriptor.ownerId; })[0];
              _this._attachedCallbacks.forEach(function (callback) {
                  try {
                      callback(act, descriptorAsObjectFromAPI);
                  }
                  catch (err) {
                      return;
                  }
              });
          });
      };
      ActivityManager.prototype._handleActivitiesDetached = function (data) {
          var _this = this;
          var oldActId = data.oldActivityId;
          var newActId = data.newActivityId;
          var descriptors = data.descriptors;
          var descriptor = data.descriptor;
          this._activities.getOrWait(oldActId).then(function (oldAct) {
              oldAct._updateDescriptors(descriptors);
              _this._activities.getOrWait(newActId).then(function (newAct) {
                  _this._detachedCallbacks.forEach(function (callback) {
                      try {
                          callback(newAct, oldAct, descriptor);
                      }
                      catch (err) {
                          return;
                      }
                  });
              });
          });
      };
      ActivityManager.prototype._handleActivityDescriptorsRefreshed = function (data) {
          var id = data.id;
          var descriptors = data.descriptors;
          var act = this._activities.getByName(id);
          if (act) {
              act._updateDescriptors(descriptors);
          }
      };
      ActivityManager.prototype.refreshDescriptors = function () {
          var _this = this;
          this._bridge.getAttachedDescriptors()
              .then(function (map) {
              if (map) {
                  Object.keys(map).forEach(function (key) {
                      var actId = key;
                      var descriptors = map[key];
                      var act = _this._activities.getByName(actId);
                      if (act) {
                          act._updateDescriptors(descriptors);
                      }
                  });
              }
              _this._descriptorsMarker.signal("Successfully got descriptors");
          })
              .catch(function (err) {
              _this._descriptorsMarker.error("failed to get descriptors - " + err);
          });
      };
      ActivityManager.prototype._handleWindowFrameColorChanged = function (win) {
          if (!win.activityId) {
              return;
          }
          var act = this._activities.getByName(win.activityId);
          if (!act) {
              return;
          }
          if (!act.owner) {
              return;
          }
          if (act.owner.underlyingWindow.id !== win.id) {
              return;
          }
          this._frameColorChangesCallbacks.forEach(function (callback) {
              try {
                  callback(act, win.frameColor);
              }
              catch (e) {
                  return;
              }
          });
      };
      return ActivityManager;
  }());

  var ActivityManagementAPI = (function () {
      function ActivityManagementAPI(manager, my) {
          this._m = manager;
          this._my = my;
          this.activityTypes = {
              get: this._getActivityTypesWrapper.bind(this),
              register: this._m.registerActivityType.bind(this._m),
              unregister: this._m.unregisterActivityType.bind(this._m),
              subscribe: this._m.subscribeActivityTypeEvents.bind(this._m),
              unsubscribe: undefined,
              initiate: this._m.initiate.bind(this._m)
          };
          this.windowTypes = {
              get: this._getWindowTypesWrapper.bind(this),
              registerFactory: this._m.registerWindowFactory.bind(this._m),
              unregisterFactory: this._m.unregisterWindowFactory.bind(this._m),
              subscribe: this._m.subscribeWindowTypeEvents.bind(this._m),
              unsubscribe: undefined
          };
          this.windows = {
              get: this._m.getWindows.bind(this._m),
              subscribe: this._m.subscribeWindowEvents.bind(this._m),
              announce: this._m.announceWindow.bind(this._m),
              unsubscribe: undefined,
              create: this._m.createWindow.bind(this._m)
          };
          this.instances = {
              get: this._m.getActivities.bind(this._m),
              subscribe: this._m.subscribeActivityEvents.bind(this._m),
              unsubscribe: undefined
          };
      }
      ActivityManagementAPI.prototype.onAttached = function (callback) {
          this._m.subscribeActivitiesAttached(callback);
      };
      ActivityManagementAPI.prototype.onDetached = function (callback) {
          this._m.subscribeActivitiesDetached(callback);
      };
      ActivityManagementAPI.prototype.onActivityFrameColorChanged = function (callback) {
          this._m.subscribeActivityFrameColorChanged(callback);
      };
      ActivityManagementAPI.prototype._getActivityTypesWrapper = function (name) {
          if (isUndefined(name)) {
              return this._m.getActivityTypes();
          }
          return this._m.getActivityType(name);
      };
      ActivityManagementAPI.prototype._getWindowTypesWrapper = function (name) {
          if (isUndefined(name)) {
              return this._m.getWindowTypes();
          }
          return this._m.getWindowType(name);
      };
      return ActivityManagementAPI;
  }());

  var ActivityAPI = (function () {
      function ActivityAPI(manager, my) {
          this._mgr = manager;
          this._my = my;
          this.all = new ActivityManagementAPI(manager, my);
      }
      ActivityAPI.prototype.ready = function (callback) {
          var _this = this;
          var promise = new Promise(function (resolve, reject) {
              _this._mgr.ready()
                  .then(function () {
                  resolve(_this);
              })
                  .catch(function (err) {
                  reject(err);
              });
          });
          return nodeify(promise, callback);
      };
      Object.defineProperty(ActivityAPI.prototype, "my", {
          get: function () {
              return this._my;
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(ActivityAPI.prototype, "aware", {
          get: function () {
              return this._my.window !== undefined;
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(ActivityAPI.prototype, "inActivity", {
          get: function () {
              return this.aware && this._my.activity !== undefined;
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(ActivityAPI.prototype, "agm", {
          get: function () {
              if (!this.aware) {
                  return undefined;
              }
              if (!this.inActivity) {
                  return new ActivityAGM(null);
              }
              return this._my.activity.agm;
          },
          enumerable: true,
          configurable: true
      });
      ActivityAPI.prototype.getAvailableFrameColors = function () {
          return [];
      };
      return ActivityAPI;
  }());

  var ActivityModule = (function () {
      function ActivityModule(config) {
          var _this = this;
          if (!config) {
              throw new Error("config can not be null");
          }
          if (!isUndefined(config.logLevel)) {
              Logger$1.Level = config.logLevel;
          }
          if (!isUndefinedOrNull(config.logger)) {
              Logger$1.GlueLogger = config.logger;
          }
          var bridge;
          this._isUsingHCImplementation = config.gdMajorVersion === 2;
          this._isUsingGW3Implementation = ActivityModule.checkIsUsingGW3Implementation(config.connection);
          if (this._isUsingHCImplementation) {
              throw new Error("GD2 not supported");
          }
          else if (this._isUsingGW3Implementation) {
              bridge = new GW3Bridge$1(config);
          }
          else {
              throw new Error("Unable to instantiate activity bridge implementation");
          }
          if (!bridge) {
              throw new Error("A bridge to native activity is needed to create activity lib.");
          }
          ActivityAGM.AGM = config.agm;
          var activityManager = new ActivityManager(bridge, !config.disableAutoAnnounce, config.windows);
          var my = new ActivityMy(activityManager, config.windows);
          this._api = new ActivityAPI(activityManager, my);
          this._readyPromise = activityManager.ready().then(function (_) { return _this; });
      }
      ActivityModule.checkIsUsingGW3Implementation = function (connection) {
          return connection.protocolVersion === 3;
      };
      Object.defineProperty(ActivityModule.prototype, "api", {
          get: function () {
              return this._api;
          },
          set: function (value) {
              this._api = value;
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(ActivityModule.prototype, "isUsingHCImplementation", {
          get: function () {
              return this._isUsingHCImplementation;
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(ActivityModule.prototype, "isUsingGW3Implementation", {
          get: function () {
              return this._isUsingGW3Implementation;
          },
          enumerable: true,
          configurable: true
      });
      ActivityModule.prototype.ready = function (callback) {
          return nodeify(this._readyPromise, callback);
      };
      return ActivityModule;
  }());

  var ShutdownMethodName = "T42.ACS.Shutdown";
  var OnGDShutdownMethodName = "T42.ACS.OnGDShutdown";
  var RestartMethodName = "T42.ACS.Restart";
  var GetConfigurationRegionMethodName = "T42.ACS.GetConfigurationRegion";
  var SetConfigurationRegionMethodName = "T42.ACS.SetConfigurationRegion";
  var GetUserMethodName = "T42.ACS.GetUser";
  var GetBranchesMethodName = "T42.ACS.GetBranches";
  var GetCurrentBranchMethodName = "T42.ACS.GetCurrentBranch";
  var SetCurrentBranchMethodName = "T42.ACS.SetCurrentBranch";
  var GetFunctionalEntitlementMethodName = "T42.ACS.GetFunctionalEntitlement";
  var CanIMethodName = "T42.ACS.CanI";
  var StartApplicationMethodName = "T42.ACS.StartApplication";
  var StopApplicationMethodName = "T42.ACS.StopApplication";
  var ActivateApplicationMethodName = "T42.ACS.ActivateApplication";
  var OnEventMethodName = "T42.ACS.OnEvent";
  var GetApplicationsMethodName = "T42.ACS.GetApplications";

  function createRegistry$1(options) {
      if (options && options.errorHandling
          && typeof options.errorHandling !== "function"
          && options.errorHandling !== "log"
          && options.errorHandling !== "silent"
          && options.errorHandling !== "throw") {
          throw new Error("Invalid options passed to createRegistry. Prop errorHandling should be [\"log\" | \"silent\" | \"throw\" | (err) => void], but " + typeof options.errorHandling + " was passed");
      }
      var _userErrorHandler = options && typeof options.errorHandling === "function" && options.errorHandling;
      var callbacks = {};
      function add(key, callback, replayArgumentsArr) {
          var callbacksForKey = callbacks[key];
          if (!callbacksForKey) {
              callbacksForKey = [];
              callbacks[key] = callbacksForKey;
          }
          callbacksForKey.push(callback);
          if (replayArgumentsArr) {
              setTimeout(function () {
                  replayArgumentsArr.forEach(function (replayArgument) {
                      var _a;
                      if ((_a = callbacks[key]) === null || _a === void 0 ? void 0 : _a.includes(callback)) {
                          try {
                              if (Array.isArray(replayArgument)) {
                                  callback.apply(undefined, replayArgument);
                              }
                              else {
                                  callback.apply(undefined, [replayArgument]);
                              }
                          }
                          catch (err) {
                              _handleError(err, key);
                          }
                      }
                  });
              }, 0);
          }
          return function () {
              var allForKey = callbacks[key];
              if (!allForKey) {
                  return;
              }
              allForKey = allForKey.reduce(function (acc, element, index) {
                  if (!(element === callback && acc.length === index)) {
                      acc.push(element);
                  }
                  return acc;
              }, []);
              if (allForKey.length === 0) {
                  delete callbacks[key];
              }
              else {
                  callbacks[key] = allForKey;
              }
          };
      }
      function execute(key) {
          var argumentsArr = [];
          for (var _i = 1; _i < arguments.length; _i++) {
              argumentsArr[_i - 1] = arguments[_i];
          }
          var callbacksForKey = callbacks[key];
          if (!callbacksForKey || callbacksForKey.length === 0) {
              return [];
          }
          var results = [];
          callbacksForKey.forEach(function (callback) {
              try {
                  var result = callback.apply(undefined, argumentsArr);
                  results.push(result);
              }
              catch (err) {
                  results.push(undefined);
                  _handleError(err, key);
              }
          });
          return results;
      }
      function _handleError(exceptionArtifact, key) {
          var errParam = exceptionArtifact instanceof Error ? exceptionArtifact : new Error(exceptionArtifact);
          if (_userErrorHandler) {
              _userErrorHandler(errParam);
              return;
          }
          var msg = "[ERROR] callback-registry: User callback for key \"" + key + "\" failed: " + errParam.stack;
          if (options) {
              switch (options.errorHandling) {
                  case "log":
                      return console.error(msg);
                  case "silent":
                      return;
                  case "throw":
                      throw new Error(msg);
              }
          }
          console.error(msg);
      }
      function clear() {
          callbacks = {};
      }
      function clearKey(key) {
          var callbacksForKey = callbacks[key];
          if (!callbacksForKey) {
              return;
          }
          delete callbacks[key];
      }
      return {
          add: add,
          execute: execute,
          clear: clear,
          clearKey: clearKey
      };
  }
  createRegistry$1.default = createRegistry$1;
  var lib$2 = createRegistry$1;

  function objectValues(source) {
      if (!source) {
          return [];
      }
      return Object.keys(source).map(function (key) { return source[key]; });
  }
  function objectClone(obj) {
      var result;
      try {
          result = JSON.parse(JSON.stringify(obj || {}));
      }
      catch (error) {
          result = {};
      }
      return result;
  }

  var ApplicationImpl = (function () {
      function ApplicationImpl(_appManager, _name, _agm) {
          var _this = this;
          this._appManager = _appManager;
          this._name = _name;
          this._agm = _agm;
          this._registry = lib$2();
          _appManager.onInstanceStarted(function (instance) {
              if (instance.application && instance.application.name !== _this._name) {
                  return;
              }
              _this._registry.execute("instanceStarted", instance);
          });
          _appManager.onInstanceStopped(function (instance) {
              if (instance.application && instance.application.name !== _this._name) {
                  return;
              }
              _this._registry.execute("instanceStopped", instance);
          });
          _appManager.onAppRemoved(function (app) {
              if (app.name !== _this._name) {
                  return;
              }
              _this._registry.execute("appRemoved", app);
          });
          _appManager.onAppChanged(function (app) {
              if (app.name !== _this._name) {
                  return;
              }
              _this._registry.execute("appChanged", app);
          });
          _appManager.onAppAvailable(function (app) {
              if (app.name !== _this._name) {
                  return;
              }
              _this._registry.execute("appAvailable", app);
          });
          _appManager.onAppUnavailable(function (app) {
              if (app.name !== _this._name) {
                  return;
              }
              _this._registry.execute("appUnavailable", app);
          });
      }
      Object.defineProperty(ApplicationImpl.prototype, "name", {
          get: function () { return this._name; },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(ApplicationImpl.prototype, "title", {
          get: function () { return this._props.Title; },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(ApplicationImpl.prototype, "version", {
          get: function () { return this._props.Version; },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(ApplicationImpl.prototype, "autoStart", {
          get: function () { return this._props.AutoStart; },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(ApplicationImpl.prototype, "isShell", {
          get: function () { return this._props.IsShell; },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(ApplicationImpl.prototype, "caption", {
          get: function () { return this._props.Caption; },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(ApplicationImpl.prototype, "hidden", {
          get: function () { return this._props.IsHidden; },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(ApplicationImpl.prototype, "container", {
          get: function () { return this._props.ApplicationName; },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(ApplicationImpl.prototype, "activityType", {
          get: function () { return this._props.ActivityType; },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(ApplicationImpl.prototype, "activityWindowType", {
          get: function () { return this._props.ActivityWindowType; },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(ApplicationImpl.prototype, "windowSettings", {
          get: function () {
              if (!this._props.Arguments) {
                  return {};
              }
              return objectClone(this._props.Arguments);
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(ApplicationImpl.prototype, "allowMultiple", {
          get: function () { return this._props.AllowMultiple; },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(ApplicationImpl.prototype, "available", {
          get: function () { return this._props.IsReady || true; },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(ApplicationImpl.prototype, "icon", {
          get: function () { return this._props.Icon; },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(ApplicationImpl.prototype, "iconURL", {
          get: function () { return this._props.IconUrl; },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(ApplicationImpl.prototype, "sortOrder", {
          get: function () { return this._props.SortOrder; },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(ApplicationImpl.prototype, "userProperties", {
          get: function () {
              if (!this._props.UserProperties) {
                  return {};
              }
              return objectClone(this._props.UserProperties);
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(ApplicationImpl.prototype, "isActivity", {
          get: function () {
              return this._props.ActivityType !== undefined && this._props.ActivityType !== "";
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(ApplicationImpl.prototype, "configuration", {
          get: function () {
              return {
                  autoStart: this._props.AutoStart,
                  caption: this._props.Caption,
                  hidden: this._props.IsHidden,
                  container: this._props.ApplicationName,
                  activityType: this._props.ActivityType,
                  allowMultiple: this._props.AllowMultiple
              };
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(ApplicationImpl.prototype, "instances", {
          get: function () {
              var _this = this;
              return this._appManager.instances().filter(function (instance) { return instance.application.name === _this._name; });
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(ApplicationImpl.prototype, "type", {
          get: function () {
              return this._props.Type;
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(ApplicationImpl.prototype, "mode", {
          get: function () {
              if (!this._props) {
                  return "unknown";
              }
              if (this._props.Mode && typeof this._props.Mode === "string") {
                  return this._props.Mode.toLowerCase();
              }
              if (this.isActivity) {
                  return "unknown";
              }
              if (this._props.Arguments && this._props.Arguments.mode && typeof this._props.Arguments.mode === "string") {
                  return this._props.Arguments.mode.toLowerCase();
              }
              var styleAttributes = this._props.WindowStyleAttributes;
              if (styleAttributes) {
                  styleAttributes = styleAttributes.split(" ").join("");
                  var searchFor = "mode:\"";
                  var modeIndex = styleAttributes.indexOf(searchFor);
                  if (modeIndex !== -1) {
                      var startModeIndex = modeIndex + searchFor.length;
                      var stopModeIndex = styleAttributes.indexOf("\"", startModeIndex);
                      var style = styleAttributes.substr(startModeIndex, stopModeIndex - startModeIndex);
                      if (style && typeof style === "string") {
                          return style.toLowerCase();
                      }
                  }
              }
              return "flat";
          },
          enumerable: true,
          configurable: true
      });
      ApplicationImpl.prototype.updateFromProps = function (props) {
          var _this = this;
          if (!this._props) {
              this._props = { Name: props.Name };
          }
          Object.keys(props).forEach(function (key) {
              _this._props[key] = props[key];
          });
      };
      ApplicationImpl.prototype.start = function (context, options) {
          var _this = this;
          var name = this._name;
          var startTimeout = 10000;
          return new Promise(function (resolve, reject) {
              var _a;
              options = options || {};
              context = context || {};
              var waitForAGMInstance = (_a = options.waitForAGMReady, (_a !== null && _a !== void 0 ? _a : true));
              var waitForApplicationInstance = function (id) {
                  var check = function () {
                      var filtered = _this._appManager.instances().filter(function (i) { return i.id === id; });
                      var result;
                      if (filtered.length === 2) {
                          result = filtered[0].isActivityInstance ? filtered[0] : filtered[1];
                      }
                      else {
                          result = filtered[0];
                      }
                      if (result && waitForAGMInstance) {
                          if (result.agm) {
                              return result;
                          }
                          else {
                              return undefined;
                          }
                      }
                      return result;
                  };
                  var unsub;
                  var timeout = setTimeout(function () {
                      if (unsub) {
                          unsub();
                      }
                      reject("timeout");
                  }, startTimeout);
                  var waitFunc = function (i) {
                      if (i.id !== id) {
                          return;
                      }
                      if (unsub) {
                          unsub();
                          unsub = undefined;
                      }
                      clearTimeout(timeout);
                      setTimeout(function () {
                          resolve(check());
                      }, 1);
                  };
                  if (waitForAGMInstance) {
                      unsub = _this._appManager.onInstanceAgmServerReady(waitFunc);
                  }
                  else {
                      unsub = _this._appManager.onInstanceStarted(waitFunc);
                  }
                  var instances = check();
                  if (instances) {
                      if (unsub) {
                          unsub();
                          unsub = undefined;
                      }
                      clearTimeout(timeout);
                      resolve(instances);
                  }
              };
              _this._agm.invoke(StartApplicationMethodName, {
                  Name: name,
                  Context: context,
                  Options: options
              }, "best", {
                  methodResponseTimeoutMs: startTimeout
              }, function (result) {
                  var acsResult = result.returned && result.returned.Instance_0
                      ? result.returned.Instance_0
                      : result.returned;
                  if (acsResult && acsResult.Id) {
                      if (_this._appManager.mode === "startOnly") {
                          var instance = _this._appManager.handleInstanceStarted(acsResult);
                          resolve(instance);
                      }
                      else {
                          waitForApplicationInstance(acsResult.Id);
                      }
                  }
                  else {
                      resolve(undefined);
                  }
              }, function (err) {
                  reject(err);
              });
          });
      };
      ApplicationImpl.prototype.onInstanceStarted = function (callback) {
          this._registry.add("instanceStarted", callback);
      };
      ApplicationImpl.prototype.onInstanceStopped = function (callback) {
          this._registry.add("instanceStopped", callback);
      };
      ApplicationImpl.prototype.onAvailable = function (callback) {
          this._registry.add("appAvailable", callback);
      };
      ApplicationImpl.prototype.onUnavailable = function (callback) {
          this._registry.add("appUnavailable", callback);
      };
      ApplicationImpl.prototype.onChanged = function (callback) {
          this._registry.add("appChanged", callback);
      };
      ApplicationImpl.prototype.onRemoved = function (callback) {
          this._registry.add("appRemoved", callback);
      };
      return ApplicationImpl;
  }());

  var InstanceImpl = (function () {
      function InstanceImpl(_id, _appName, _appManager, _agm, _activities, _windows, startFailed) {
          var _this = this;
          this._id = _id;
          this._appName = _appName;
          this._appManager = _appManager;
          this._agm = _agm;
          this._activities = _activities;
          this._windows = _windows;
          this.onAgmReady = this._addToRegistry("agmReady");
          this.onStopped = this._addToRegistry("stopped");
          this._registry = lib$2();
          if (startFailed) {
              return;
          }
          this._unsubscribeInstanceStopped = this._appManager.onInstanceStopped(function (instance) {
              if (instance.id !== _this._id) {
                  return;
              }
              _this._registry.execute("stopped", instance);
          });
          this._unsubscribeInstanceAgmServerReady = this._appManager.onInstanceAgmServerReady(function (instance) {
              if (instance.id !== _this._id) {
                  return;
              }
              _this._registry.execute("agmReady", instance);
          });
      }
      Object.defineProperty(InstanceImpl.prototype, "id", {
          get: function () { return this._id; },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(InstanceImpl.prototype, "application", {
          get: function () { return this._appManager.application(this._appName); },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(InstanceImpl.prototype, "activity", {
          get: function () {
              var _this = this;
              if (!this._activities) {
                  throw new Error("This method requires glue.activities library to be enabled.");
              }
              return this._activities.all.instances.get()
                  .filter(function (activityInstance) { return activityInstance.id === _this._activityId; })[0];
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(InstanceImpl.prototype, "isActivityOwner", {
          get: function () { return this._isActivityOwner; },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(InstanceImpl.prototype, "activityInstances", {
          get: function () {
              var _this = this;
              return this._appManager.instances().filter(function (i) {
                  return i.application.type !== "activity" &&
                      i.activityId &&
                      i.activityId === _this._activityId;
              });
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(InstanceImpl.prototype, "activityOwnerInstance", {
          get: function () {
              if (!this._activityId) {
                  return undefined;
              }
              return this.activityInstances.filter(function (inst) { var _a; return (_a = inst) === null || _a === void 0 ? void 0 : _a.isActivityOwner; })[0];
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(InstanceImpl.prototype, "window", {
          get: function () {
              var _this = this;
              if (!this._windows) {
                  throw new Error("This method requires glue.windows library to be enabled.");
              }
              var win = this._windows.list().filter(function (w) { return w.id === _this._id; })[0];
              if (!win && this._activities && this.activity && this.activityOwnerInstance) {
                  win = this.activityOwnerInstance.window;
              }
              return win;
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(InstanceImpl.prototype, "context", {
          get: function () {
              var _a, _b, _c;
              return _c = (_a = this._startUpContext, (_a !== null && _a !== void 0 ? _a : (_b = this.window) === null || _b === void 0 ? void 0 : _b.context)), (_c !== null && _c !== void 0 ? _c : {});
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(InstanceImpl.prototype, "title", {
          get: function () { return this._title; },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(InstanceImpl.prototype, "isActivityInstance", {
          get: function () { return this._isActivityInstance; },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(InstanceImpl.prototype, "activityId", {
          get: function () { return this._activityId; },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(InstanceImpl.prototype, "inActivity", {
          get: function () { return this._inActivity; },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(InstanceImpl.prototype, "isSingleWindowApp", {
          get: function () { return !this._inActivity; },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(InstanceImpl.prototype, "agm", {
          get: function () {
              return this._agmInstance;
          },
          enumerable: true,
          configurable: true
      });
      InstanceImpl.prototype.getWindow = function () {
          var _this = this;
          return new Promise(function (resolve, reject) {
              var result = _this.window;
              if (result) {
                  resolve(result);
                  return;
              }
              var done = function (error, window) {
                  if (error) {
                      reject(error);
                  }
                  if (window) {
                      resolve(window);
                  }
                  setTimeout(function () {
                      clearTimeout(timeout);
                      unsub();
                  }, 0);
              };
              var timeout = setTimeout(function () {
                  done(new Error("can not find a window with id " + _this._id));
              }, 30000);
              var unsub = _this._windows.onWindowAdded(function (w) {
                  if (w.id === _this._id) {
                      done(undefined, w);
                  }
              });
          });
      };
      InstanceImpl.prototype.updateFromProps = function (props) {
          this._startUpContext = props.Context;
          this._title = props.Title;
          this._isActivityInstance = false;
          if (props.ActivityId && props.ActivityId !== "") {
              this._activityId = props.ActivityId;
              this._isActivityInstance = true;
          }
          this._isActivityOwner = props.IsActivityOwner;
          if (!this._activityId && this._startUpContext && this._startUpContext.activityId) {
              this._activityId = this._startUpContext.activityId;
          }
          this._inActivity = Boolean(this._activityId);
          this.updateAgmInstanceFromProps(props);
      };
      InstanceImpl.prototype.updateAgmInstanceFromProps = function (props) {
          if (!props.AgmServers) {
              return;
          }
          if (props.GD3) {
              var agmInstances = props.AgmServers;
              if (agmInstances) {
                  this._agmInstance = agmInstances[0];
              }
          }
          else {
              var gdAgmServers = props.AgmServers;
              var propsAgmServer = Object.keys(gdAgmServers)[0];
              if (!propsAgmServer) {
                  return;
              }
              var propsAgm = gdAgmServers[propsAgmServer];
              this._agmInstance = {
                  machine: propsAgm.machineName,
                  user: propsAgm.userName,
                  environment: propsAgm.environment,
                  application: propsAgm.applicationName,
              };
          }
      };
      InstanceImpl.prototype.stop = function () {
          var _this = this;
          return new Promise(function (resolve, reject) {
              var unsubscribe = _this._appManager.onInstanceStopped(function (instance) {
                  if (instance.id === _this._id) {
                      unsubscribe();
                      resolve();
                  }
              });
              _this._agm.invoke(StopApplicationMethodName, {
                  Name: _this._appName,
                  Id: _this._id
              })
                  .then(function () {
                  if (_this._appManager.mode === "startOnly") {
                      _this._appManager.handleInstanceStopped({
                          Name: _this._appName,
                          Id: _this.id,
                          Context: undefined,
                          Title: undefined,
                          ActivityId: undefined,
                          IsActivityOwner: undefined,
                          AgmServers: undefined
                      });
                      resolve();
                  }
              })
                  .catch(function (err) { return reject(err); });
          });
      };
      InstanceImpl.prototype.activate = function () {
          return this._agm.invoke(ActivateApplicationMethodName, { Name: this._appName, Id: this._id });
      };
      InstanceImpl.prototype.done = function () {
          this._registry.clear();
          this._unsubscribeInstanceAgmServerReady();
          this._unsubscribeInstanceStopped();
      };
      InstanceImpl.prototype.getContext = function () {
          return Promise.resolve(this.context);
      };
      InstanceImpl.prototype._addToRegistry = function (key) {
          var _this = this;
          return function (callback) {
              _this._registry.add(key, callback);
          };
      };
      return InstanceImpl;
  }());

  var AppManagerImpl = (function () {
      function AppManagerImpl(mode, _agm, _activities, _windows, _logger, _gdMajorVersion) {
          var _this = this;
          this.mode = mode;
          this._agm = _agm;
          this._activities = _activities;
          this._windows = _windows;
          this._logger = _logger;
          this._gdMajorVersion = _gdMajorVersion;
          this._apps = {};
          this._instances = [];
          this._registry = lib$2();
          this.application = function (name) {
              return _this._apps[name];
          };
          this.applications = function () {
              return Object.keys(_this._apps).map(function (k) { return _this._apps[k]; });
          };
          this.instances = function () {
              return _this._instances;
          };
          this.getMyInstance = function () {
              if (_this._gdMajorVersion >= 3) {
                  var instanceId_1 = window.glue42gd.appInstanceId;
                  return _this._instances.filter(function (i) { return i.id === instanceId_1; })[0];
              }
              return undefined;
          };
          this.handleAppAdded = function (props) {
              var id = _this._getAppId(props);
              _this._logger.trace("adding app " + id);
              _this._apps[id] = new ApplicationImpl(_this, id, _this._agm);
              var app = _this._updateAppFromProps(props);
              _this._registry.execute("appAdded", app);
          };
          this.handleAppUpdated = function (props) {
              var app = _this._updateAppFromProps(props);
              _this._registry.execute("appChanged", app);
          };
          this.handleAppRemoved = function (props) {
              var id = _this._getAppId(props);
              _this._logger.trace("removing app " + id);
              var app = _this.application(id);
              _this._instances = _this._instances.filter(function (i) { return i.application.name !== app.name; });
              delete _this._apps[id];
              _this._registry.execute("appRemoved", app);
          };
          this.handleAppReady = function (props) {
              var id = _this._getAppId(props);
              var app = _this._getAppOrThrow(id);
              app.updateFromProps(props);
              if (app.available) {
                  _this._registry.execute("appAvailable", app);
              }
              else {
                  _this._registry.execute("appUnavailable", app);
              }
          };
          this.handleInstanceStarted = function (props) {
              _this._logger.trace("started app " + props.Name + " " + props.Id);
              var id = _this._getInstanceId(props);
              var appName = _this._getInstanceAppName(props);
              var instance = new InstanceImpl(id, appName, _this, _this._agm, _this._activities, _this._windows);
              _this._updateInstanceFromProps(instance, props);
              _this._instances.push(instance);
              _this._registry.execute("instanceStarted", instance);
              return instance;
          };
          this.handleInstanceStopped = function (props) {
              _this._logger.trace("failed to start app " + props.Name + " " + props.Id);
              var id = _this._getInstanceId(props);
              var appName = _this._getInstanceAppName(props);
              var instance = _this._getInstanceOrThrow(id, appName);
              _this._instances = _this._instances.filter(function (i) { return !_this._matchInstance(i, id, appName); });
              _this._registry.execute("instanceStopped", instance);
              instance.done();
          };
          this.handleInstanceAgmServerReady = function (props) {
              var id = _this._getInstanceId(props);
              var appName = _this._getInstanceAppName(props);
              var instance = _this._getInstanceOrThrow(id, appName);
              instance.updateAgmInstanceFromProps(props);
              _this._registry.execute("instanceAgmServerReady", instance);
          };
          this.handleInstanceStartFailed = function (props) {
              var id = _this._getInstanceId(props);
              var appName = _this._getInstanceAppName(props);
              var startFailed = true;
              var instance = new InstanceImpl(id, appName, undefined, undefined, undefined, undefined, startFailed);
              _this._updateInstanceFromProps(instance, props);
              _this._registry.execute("instanceStartFailed", instance);
          };
          this.handleInstanceUpdated = function (props) {
              var id = _this._getInstanceId(props);
              var app = _this._getInstanceAppName(props);
              var instance = _this._getInstanceOrThrow(id, app);
              _this._updateInstanceFromProps(instance, props);
          };
          this.onInstanceStarted = function (callback) {
              return _this._registry.add("instanceStarted", callback, _this._instances);
          };
          this.onInstanceStartFailed = function (callback) {
              return _this._registry.add("instanceStartFailed", callback);
          };
          this.onInstanceStopped = function (callback) {
              return _this._registry.add("instanceStopped", callback);
          };
          this.onInstanceUpdated = function (callback) {
              return _this._registry.add("instanceChanged", callback);
          };
          this.onInstanceAgmServerReady = function (callback) {
              return _this._registry.add("instanceAgmServerReady", callback);
          };
          this.onAppAdded = function (callback) {
              return _this._registry.add("appAdded", callback, Object.values(_this._apps));
          };
          this.onAppRemoved = function (callback) {
              return _this._registry.add("appRemoved", callback);
          };
          this.onAppAvailable = function (callback) {
              return _this._registry.add("appAvailable", callback);
          };
          this.onAppUnavailable = function (callback) {
              return _this._registry.add("appUnavailable", callback);
          };
          this.onAppChanged = function (callback) {
              return _this._registry.add("appChanged", callback);
          };
      }
      AppManagerImpl.prototype._getAppOrThrow = function (id) {
          var result = this.application(id);
          if (!result) {
              throw Error("app with id " + id + " not found");
          }
          return result;
      };
      AppManagerImpl.prototype._getAppId = function (props) {
          return props.Name;
      };
      AppManagerImpl.prototype._matchInstance = function (instance, id, appName) {
          return instance.id === id && instance.application.name === appName;
      };
      AppManagerImpl.prototype._getInstanceByIdAndName = function (id, appName) {
          var _this = this;
          return this._instances.filter(function (i) { return _this._matchInstance(i, id, appName); })[0];
      };
      AppManagerImpl.prototype._getInstanceOrThrow = function (id, appName) {
          var result = this._getInstanceByIdAndName(id, appName);
          if (!result) {
              throw Error("instance with id " + id + " not found");
          }
          return result;
      };
      AppManagerImpl.prototype._getInstanceId = function (props) {
          return props.Id;
      };
      AppManagerImpl.prototype._getInstanceAppName = function (props) {
          return props.Name;
      };
      AppManagerImpl.prototype._updateAppFromProps = function (props) {
          var id = this._getAppId(props);
          this._logger.trace("updating app with  + " + id + ", " + props);
          var app = this._getAppOrThrow(id);
          app.updateFromProps(props);
          return app;
      };
      AppManagerImpl.prototype._updateInstanceFromProps = function (instance, props) {
          this._logger.trace("updating instance with " + this._getInstanceId(props) + " for app " + this._getInstanceAppName(props));
          instance.updateFromProps(props);
      };
      return AppManagerImpl;
  }());

  function promisify$2(promise, successCallback, errorCallback) {
      var isFunction = function (arg) {
          return !!(arg && arg.constructor && arg.call && arg.apply);
      };
      if (!isFunction(successCallback) && !isFunction(errorCallback)) {
          return promise;
      }
      if (!isFunction(successCallback)) {
          successCallback = function () {
          };
      }
      else if (!isFunction(errorCallback)) {
          errorCallback = function () {
          };
      }
      promise.then(successCallback, errorCallback);
  }
  var EntitlementsImpl = (function () {
      function EntitlementsImpl(_agm) {
          var _this = this;
          this._agm = _agm;
          this._registry = lib$2();
          this._isMethodRegistered = false;
          this.handleBranchModified = function (branch) {
              _this._registry.execute("branchChanged", branch);
          };
          this.handleBranchesModified = function (branches) {
              _this._registry.execute("branchesChanged", branches);
          };
          this.getRegion = function (success, error) {
              return promisify$2(_this._agmInvoke(GetConfigurationRegionMethodName, function (e) { return e.returned.Region; }), success, error);
          };
          this.getBranches = function (success, error) {
              var promise = _this._agmInvoke(GetBranchesMethodName, function (e) {
                  var obj = e.returned.Branches;
                  return Object.keys(obj).map(function (key) { return obj[key]; });
              });
              return promisify$2(promise, success, error);
          };
          this.getCurrentBranch = function (success, error) {
              var promise = _this._agmInvoke(GetCurrentBranchMethodName, function (e) { return e.returned.Branch; }, undefined);
              return promisify$2(promise, success, error);
          };
          this.setRegion = function (region, success, error) {
              var promise = _this._agmInvoke(SetConfigurationRegionMethodName, function (e) { return e.returned.ResultMessage; }, { Region: region });
              return promisify$2(promise, success, error);
          };
          this.setCurrentBranch = function (branch, success, error) {
              var promise = _this._agmInvoke(SetCurrentBranchMethodName, function (e) { return e.returned.ResultMessage; }, { Branch: branch });
              return promisify$2(promise, success, error);
          };
          this.currentUser = function (success, error) {
              var promise = _this._agmInvoke(GetUserMethodName);
              return promisify$2(promise, success, error);
          };
          this.getFunctionalEntitlement = function (funct, success, error) {
              var promise = _this._agmInvoke(GetFunctionalEntitlementMethodName, function (e) { return e.returned.Entitlement; }, { Function: funct });
              return promisify$2(promise, success, error);
          };
          this.getFunctionalEntitlementBranch = function (funct, branch, success, error) {
              var promise = _this._agmInvoke(GetFunctionalEntitlementMethodName, function (e) { return e.returned.Entitlement; }, { Function: funct, Branch: branch });
              return promisify$2(promise, success, error);
          };
          this.canI = function (func, success, error) {
              var promise = _this._agmInvoke(CanIMethodName, function (e) { return e.returned.Result; }, { Function: func });
              return promisify$2(promise, success, error);
          };
          this.canIBranch = function (func, branch, success, error) {
              var promise = _this._agmInvoke(CanIMethodName, function (e) { return e.returned.Result; }, { Function: func, Branch: branch });
              return promisify$2(promise, success, error);
          };
          this.onBranchesChanged = function (callback) {
              return _this._registry.add("branchesChanged", callback);
          };
          this.onBranchChanged = function (callback) {
              return _this._registry.add("branchChanged", callback);
          };
          this.exit = function (options) {
              return _this._agmInvoke(ShutdownMethodName, null, options);
          };
          this.onShuttingDown = function (callback) {
              _this.registerMethod();
              return _this._registry.add("onShuttingDown", callback);
          };
          this.restart = function (options) {
              return _this._agmInvoke(RestartMethodName, null, options);
          };
          this._agmInvoke = function (method, transformFunction, args) {
              args = args || {};
              return new Promise(function (resolve, reject) {
                  var errHandler = function (error) { return reject(error); };
                  _this._agm.invoke(method, args)
                      .then(function (result) {
                      if (!transformFunction) {
                          transformFunction = function (d) { return d.returned; };
                      }
                      resolve(transformFunction(result));
                  })
                      .catch(errHandler);
              });
          };
      }
      EntitlementsImpl.prototype.registerMethod = function () {
          var _this = this;
          if (!this._isMethodRegistered) {
              this._agm.register(OnGDShutdownMethodName, function (args) { return __awaiter(_this, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                      switch (_a.label) {
                          case 0:
                              _a.trys.push([0, 2, , 3]);
                              return [4, Promise.all(this._registry.execute("onShuttingDown", args))];
                          case 1:
                              _a.sent();
                              return [3, 3];
                          case 2:
                              _a.sent();
                              return [3, 3];
                          case 3: return [2];
                      }
                  });
              }); });
              this._isMethodRegistered = true;
          }
      };
      return EntitlementsImpl;
  }());

  function snapshot(agm, appManager) {
      return new Promise(function (resolve, reject) {
          agm.invoke(GetApplicationsMethodName, { skipIcon: true })
              .then(function (response) {
              var data = response.returned;
              if (!data) {
                  resolve();
              }
              var applications = data.applications;
              if (!applications) {
                  resolve();
              }
              objectValues(applications).map(function (item) { return appManager.handleAppAdded(item); });
              resolve();
          })
              .catch(function (err) { return reject("Error getting application snapshot: " + err.message); });
      });
  }

  var OnBranchChangedEvent = "OnBranchChanged";
  var OnBranchesModifiedEvent = "OnBranchesModified";
  var OnApplicationAddedEvent = "OnApplicationAdded";
  var OnApplicationRemovedEvent = "OnApplicationRemoved";
  var OnApplicationChangedEvent = "OnApplicationChanged";
  var OnApplicationReadyEvent = "OnApplicationReady";
  var OnApplicationStartedEvent = "OnApplicationStarted";
  var OnApplicationAgmServerReadyEvent = "OnApplicationAgmServerReady";
  var OnApplicationUpdatedEvent = "OnApplicationUpdated";
  var OnApplicationStoppedEvent = "OnApplicationStopped";
  var OnApplicationStartFailedEvent = "OnApplicationStartFailed";

  function createDataSubscription(agm, applications, entitlements, skipIcons) {
      var subscription;
      var start = function () {
          var resolveFunc;
          var rejectFunc;
          var resultPromise = new Promise(function (resolve, reject) {
              resolveFunc = resolve;
              rejectFunc = reject;
          });
          agm.subscribe(OnEventMethodName, { arguments: { skipIcon: skipIcons }, waitTimeoutMs: 10000 })
              .then(function (s) {
              subscription = s;
              subscription.onData(function (streamData) {
                  var events = streamData.data;
                  objectValues(events[OnApplicationAddedEvent])
                      .map(function (item) { return applications.handleAppAdded(item); });
                  objectValues(events[OnApplicationChangedEvent])
                      .map(function (item) { return applications.handleAppUpdated(item); });
                  objectValues(events[OnApplicationRemovedEvent])
                      .map(function (item) { return applications.handleAppRemoved(item); });
                  objectValues(events[OnApplicationReadyEvent])
                      .map(function (item) { return applications.handleAppReady(item); });
                  objectValues(events[OnApplicationStartedEvent])
                      .map(function (item) { return applications.handleInstanceStarted(item); });
                  objectValues(events[OnApplicationStartFailedEvent])
                      .map(function (item) { return applications.handleInstanceStartFailed(item); });
                  objectValues(events[OnApplicationStoppedEvent])
                      .map(function (item) { return applications.handleInstanceStopped(item); });
                  objectValues(events[OnApplicationUpdatedEvent])
                      .map(function (item) { return applications.handleInstanceUpdated(item); });
                  objectValues(events[OnApplicationAgmServerReadyEvent])
                      .map(function (item) { return applications.handleInstanceAgmServerReady(item); });
                  objectValues(events[OnBranchChangedEvent])
                      .map(function (item) { return entitlements.handleBranchModified(item); });
                  objectValues(events[OnBranchesModifiedEvent])
                      .map(function (item) { return entitlements.handleBranchesModified(item); });
                  resolveFunc();
              });
              subscription.onFailed(function (err) { return rejectFunc(err); });
          })
              .catch(function (err) { return rejectFunc("Error subscribing for " + OnEventMethodName + " stream. Err: " + err); });
          return resultPromise;
      };
      var stop = function () {
          if (subscription) {
              subscription.close();
          }
      };
      return {
          start: start,
          stop: stop
      };
  }

  var InMemoryStoreCommandMethodName = "T42.ACS.InMemoryStoreCommand";
  var InMemoryStore = (function () {
      function InMemoryStore(interop) {
          this.interop = interop;
      }
      InMemoryStore.prototype.import = function (apps, mode) {
          if (!apps || !Array.isArray(apps)) {
              return Promise.reject("invalid apps argument - should be an array of application definitions");
          }
          if (mode && mode !== "replace" && mode !== "merge") {
              return Promise.reject("invalid mode argument - should be 'replace' or 'merge'");
          }
          mode = (mode !== null && mode !== void 0 ? mode : "replace");
          var command = {
              command: "import",
              args: {
                  apps: apps,
                  mode: mode
              }
          };
          return this.interop.invoke(InMemoryStoreCommandMethodName, command)
              .then(function (r) { return r.returned; });
      };
      InMemoryStore.prototype.export = function () {
          return this.interop.invoke(InMemoryStoreCommandMethodName, { command: "export" })
              .then(function (r) { return r.returned.apps; });
      };
      InMemoryStore.prototype.remove = function (app) {
          if (!app || typeof app !== "string") {
              return Promise.reject("invalid app name, should be a string value");
          }
          var command = {
              command: "remove",
              args: {
                  apps: [app]
              }
          };
          return this.interop.invoke(InMemoryStoreCommandMethodName, command).then(function (r) { return r.returned; });
      };
      InMemoryStore.prototype.clear = function () {
          var command = {
              command: "clear"
          };
          return this.interop.invoke(InMemoryStoreCommandMethodName, command).then(function (r) { return r.returned; });
      };
      InMemoryStore.prototype.createAppDef = function (name, url) {
          if (!url) {
              url = "https://google.com";
          }
          return {
              name: name,
              type: "window",
              title: name,
              details: {
                  url: url
              }
          };
      };
      return InMemoryStore;
  }());

  var AppManagerFactory = (function (config) {
      if (!config) {
          throw Error("config not set");
      }
      if (!config.agm) {
          throw Error("config.agm is missing");
      }
      var START_ONLY = "startOnly";
      var SKIP_ICONS = "skipIcons";
      var FULL = "full";
      var mode = config.mode || START_ONLY;
      if (mode !== START_ONLY && mode !== SKIP_ICONS && mode !== FULL) {
          throw new Error("Invalid mode for appManager lib - " + mode + " is not supported");
      }
      var activities = config.activities;
      var agm = config.agm;
      var logger = config.logger;
      var windows = config.windows;
      var appManager = new AppManagerImpl(mode, agm, activities, windows, logger.subLogger("applications"), config.gdMajorVersion);
      var entitlements = new EntitlementsImpl(agm);
      var readyPromise;
      if (mode === START_ONLY) {
          readyPromise = snapshot(agm, appManager);
      }
      else {
          var subscription = createDataSubscription(agm, appManager, entitlements, mode === SKIP_ICONS);
          readyPromise = subscription.start();
      }
      var api = {
          ready: function () { return readyPromise; },
          applications: appManager.applications,
          application: appManager.application,
          onAppAdded: appManager.onAppAdded,
          onAppRemoved: appManager.onAppRemoved,
          onAppChanged: appManager.onAppChanged,
          onAppAvailable: appManager.onAppAvailable,
          onAppUnavailable: appManager.onAppUnavailable,
          instances: appManager.instances,
          get myInstance() {
              return appManager.getMyInstance();
          },
          onInstanceStarted: appManager.onInstanceStarted,
          onInstanceStopped: appManager.onInstanceStopped,
          onInstanceUpdated: appManager.onInstanceUpdated,
          onInstanceStartFailed: appManager.onInstanceStartFailed,
          getRegion: entitlements.getRegion,
          getBranches: entitlements.getBranches,
          getCurrentBranch: entitlements.getCurrentBranch,
          getFunctionalEntitlement: entitlements.getFunctionalEntitlement,
          getFunctionalEntitlementBranch: entitlements.getFunctionalEntitlementBranch,
          setCurrentBranch: entitlements.setCurrentBranch,
          setRegion: entitlements.setRegion,
          currentUser: entitlements.currentUser,
          canI: entitlements.canI,
          canIBranch: entitlements.canIBranch,
          onBranchesChanged: entitlements.onBranchesChanged,
          exit: entitlements.exit,
          restart: entitlements.restart,
          onShuttingDown: entitlements.onShuttingDown,
          inMemory: new InMemoryStore(agm)
      };
      return api;
  });

  var WindowStore = (function () {
      function WindowStore() {
          this.waitForTimeoutInMilliseconds = 60000;
          this._windows = {};
          this._pendingWindows = {};
          this._pendingWindowsStates = {};
          this._registry = lib$2();
      }
      WindowStore.prototype.init = function (logger) {
          this._logger = logger;
      };
      WindowStore.prototype.get = function (id) {
          return this._windows[id] || this._pendingWindows[id];
      };
      WindowStore.prototype.getIfReady = function (id) {
          return this._windows[id];
      };
      Object.defineProperty(WindowStore.prototype, "list", {
          get: function () {
              return this._windows;
          },
          enumerable: true,
          configurable: true
      });
      WindowStore.prototype.add = function (window) {
          var isExist = this._pendingWindows[window.API.id] ? true : false;
          if (isExist) {
              this._logger.error("trying to add window with id " + window.API.id + " from windowStore, which already exists");
              return;
          }
          var remote = window.API.windowType === "remote";
          this._pendingWindows[window.API.id] = window;
          this._pendingWindowsStates[window.API.id] = {
              ready: false,
              urlChanged: remote,
          };
          this._registry.execute("on-added", window);
      };
      WindowStore.prototype.remove = function (window) {
          delete this._windows[window.API.id];
          delete this._pendingWindows[window.API.id];
          delete this._pendingWindowsStates[window.API.id];
          this._registry.execute("on-removed", window);
      };
      WindowStore.prototype.setReadyState = function (windowId) {
          var targetWindowState = this._pendingWindowsStates[windowId];
          if (typeof targetWindowState === "undefined") {
              return;
          }
          targetWindowState.ready = true;
          if (targetWindowState.urlChanged) {
              this.markReadyToShow(windowId);
          }
      };
      WindowStore.prototype.setUrlChangedState = function (windowId) {
          var targetWindowState = this._pendingWindowsStates[windowId];
          if (typeof targetWindowState === "undefined") {
              return;
          }
          targetWindowState.urlChanged = true;
          if (targetWindowState.ready) {
              this.markReadyToShow(windowId);
          }
      };
      WindowStore.prototype.waitFor = function (id) {
          var _this = this;
          return new Promise(function (resolve, reject) {
              var un;
              var timeout = setTimeout(function () {
                  un();
                  reject("waitFor timed out.");
              }, _this.waitForTimeoutInMilliseconds);
              var win = _this._windows[id];
              if (win) {
                  clearTimeout(timeout);
                  resolve(win);
              }
              else {
                  un = _this.onReadyWindow(function (w) {
                      if (w.API.id !== id) {
                          return;
                      }
                      clearTimeout(timeout);
                      un();
                      resolve(w);
                  });
              }
          });
      };
      WindowStore.prototype.onReadyWindow = function (callback) {
          return this._registry.add("on-ready", callback);
      };
      WindowStore.prototype.onAdded = function (callback) {
          return this._registry.add("on-added", callback);
      };
      WindowStore.prototype.onRemoved = function (callback) {
          return this._registry.add("on-removed", callback);
      };
      WindowStore.prototype.markReadyToShow = function (windowId) {
          if (this._pendingWindows[windowId]) {
              this._windows[windowId] = this._pendingWindows[windowId];
              delete this._pendingWindows[windowId];
              delete this._pendingWindowsStates[windowId];
          }
          this._registry.execute("on-ready", this._windows[windowId]);
      };
      return WindowStore;
  }());
  var windowStore = new WindowStore();

  var Utils$1 = (function () {
      function Utils() {
      }
      Utils.getGDMajorVersion = function () {
          if (typeof window === "undefined") {
              return -1;
          }
          if (!window.glueDesktop) {
              return -1;
          }
          if (!window.glueDesktop.version) {
              return -1;
          }
          var ver = Number(window.glueDesktop.version.substr(0, 1));
          return isNaN(ver) ? -1 : ver;
      };
      Utils.callbackifyPromise = function (action, successCallback, errorCallback) {
          var fail = function (error) {
              var msg = error;
              if (error instanceof Error) {
                  msg = error.message;
              }
              if (typeof errorCallback === "function") {
                  errorCallback(msg);
                  return;
              }
              return Promise.reject(msg);
          };
          try {
              return action()
                  .then(function (result) {
                  if (typeof successCallback === "function") {
                      successCallback(result);
                  }
                  return result;
              })
                  .catch(function (error) {
                  return fail(error);
              });
          }
          catch (err) {
              return fail(err);
          }
      };
      Utils.getMonitor = function (bounds, displays) {
          var _this = this;
          var monitorsSortedByOverlap = displays.map(function (m) {
              var left = m.left, top = m.top, width = m.workingAreaWidth, height = m.workingAreaHeight;
              var overlap = _this.calculateTotalOverlap({ left: left, top: top, width: width, height: height }, bounds);
              return {
                  monitor: m,
                  totalOverlap: overlap
              };
          }).sort(function (a, b) { return b.totalOverlap - a.totalOverlap; });
          return monitorsSortedByOverlap[0].monitor;
      };
      Utils.getDisplayCenterOfScreen = function (a, display) {
          var left = Math.floor(Math.max(display.left, (display.left + (display.workingAreaWidth - a.width) / 2)));
          var top = Math.floor(Math.max(display.top, (display.top + (display.workingAreaHeight - a.height) / 2)));
          return {
              top: top,
              left: left
          };
      };
      Utils.calculateTotalOverlap = function (r1, r2) {
          var r1x = r1.left;
          var r1y = r1.top;
          var r1xMax = r1x + r1.width;
          var r1yMax = r1y + r1.height;
          var r2x = r2.left;
          var r2y = r2.top;
          var r2xMax = r2x + r2.width;
          var r2yMax = r2y + r2.height;
          var xOverlap = Math.max(0, Math.min(r1xMax, r2xMax) - Math.max(r1x, r2x));
          var yOverlap = Math.max(0, Math.min(r1yMax, r2yMax) - Math.max(r1y, r2y));
          return xOverlap * yOverlap;
      };
      return Utils;
  }());

  var windowFactory = (function (id, options, executor, logger, appManagerGetter, displayAPIGetter, agm) {
      var _a, _b, _c;
      var _registry = lib$2();
      var _logger = logger.subLogger("window " + id);
      var resultWindow;
      var _id = id;
      var _name = options.name;
      var _mode = options.mode;
      var _bounds = options.bounds;
      var _url = options.url;
      var _title = options.title;
      var _context = (_a = options.context, (_a !== null && _a !== void 0 ? _a : {}));
      var _frameColor = options.frameColor;
      var _focus = options.focus;
      var _neighbours = (_b = options.neighbours, (_b !== null && _b !== void 0 ? _b : {}));
      var _groupId = options.groupId;
      var _isGroupHeaderVisible = options.isGroupHeaderVisible;
      var _isTabHeaderVisible = options.isTabHeaderVisible;
      var _isTabSelected = (_c = options.isTabSelected, (_c !== null && _c !== void 0 ? _c : false));
      var _settings = options.settings;
      var _isVisible = options.isVisible;
      var _isSticky = options.isSticky;
      var _isCollapsed = options.isCollapsed;
      var _windowState = options.state;
      var _tabGroupId = options.tabGroupId;
      var _tabIndex = options.tabIndex;
      var _isLocked = options.isLocked;
      var _group;
      var _frameButtons = [];
      var _zoomFactor = options.zoomFactor;
      var _placementSettings = options.placementSettings;
      function close(success, error) {
          return Utils$1.callbackifyPromise(function () {
              if (!id) {
                  throw new Error("The window is already closed.");
              }
              return executor.close(resultWindow);
          }, success, error);
      }
      function navigate(newUrl, success, error) {
          return Utils$1.callbackifyPromise(function () {
              if (isNullOrWhiteSpace(newUrl)) {
                  throw new Error("The new URL must be a non-empty string.");
              }
              return executor.navigate(resultWindow, newUrl);
          }, success, error);
      }
      function setStyle(style, success, error) {
          return Utils$1.callbackifyPromise(function () {
              if (!style || Object.keys(style).length === 0 || Object.keys(style).every(function (key) { return !key; })) {
                  throw new Error("Invalid style arguments: " + JSON.stringify(style));
              }
              if (style && style.focus !== undefined) {
                  if (typeof style.focus !== "boolean") {
                      throw new Error("Focus must be a boolean value. Currently, only `focus: true` is supported.");
                  }
                  else if (style.focus === false) {
                      _logger.warn("`focus: false` is not supported!");
                  }
              }
              if (style && style.hidden !== undefined && typeof style.hidden !== "boolean") {
                  throw new Error("The `hidden` property must hold a boolean value.");
              }
              for (var _i = 0, _a = ["minHeight", "maxHeight", "minWidth", "maxWidth"]; _i < _a.length; _i++) {
                  var prop = _a[_i];
                  var styleAsAny = style;
                  var value = styleAsAny[prop];
                  if (prop in style) {
                      if (isUndefinedOrNull(value)) {
                          delete styleAsAny[prop];
                          continue;
                      }
                      if (!isNumber(styleAsAny[prop])) {
                          throw new Error("\"" + prop + "\" must be a number");
                      }
                  }
              }
              return executor.setStyle(resultWindow, style);
          }, success, error);
      }
      function resetButtons(buttons, success, error) {
          return Utils$1.callbackifyPromise(function () { return executor.resetButtons(resultWindow, buttons); }, success, error);
      }
      function setOnTop(onTop, success, error) {
          return Utils$1.callbackifyPromise(function () {
              if (typeof onTop !== "boolean") {
                  throw new Error("`onTop` must hold a boolean value.");
              }
              return executor.setOnTop(resultWindow, onTop);
          }, success, error);
      }
      function setSizeConstraints(constraints, success, error) {
          return Utils$1.callbackifyPromise(function () {
              if (!constraints || Object.keys(constraints).every(function (value) { return value === undefined; })) {
                  throw new Error("The properties of `constraints` cannot be null or undefined.");
              }
              return executor.setSizeConstraints(resultWindow, constraints);
          }, success, error);
      }
      function setTitle(newTitle, success, error) {
          return Utils$1.callbackifyPromise(function () {
              if (isUndefinedOrNull(newTitle)) {
                  throw new Error("`newTitle` must not be null or undefined.");
              }
              if (newTitle === _title) {
                  return Promise.resolve(resultWindow);
              }
              return executor.setTitle(resultWindow, newTitle);
          }, success, error);
      }
      function setSticky(isSticky, success, error) {
          return Utils$1.callbackifyPromise(function () {
              if (typeof isSticky !== "boolean") {
                  throw new Error("`isSticky` must hold a boolean value.");
              }
              return executor.setSticky(resultWindow, isSticky);
          }, success, error);
      }
      function moveResize(bounds, success, error) {
          return Utils$1.callbackifyPromise(function () {
              if (isUndefinedOrNull(bounds)) {
                  throw new Error("The properties of `bounds` cannot be null or undefined.");
              }
              return executor.moveResize(resultWindow, bounds);
          }, success, error);
      }
      function addFrameButton(buttonInfo, success, error) {
          return Utils$1.callbackifyPromise(function () {
              if (typeof buttonInfo === "undefined" || Object.keys(buttonInfo).length === 0) {
                  throw new Error("Button info is not available.");
              }
              if (isNullOrWhiteSpace(buttonInfo.buttonId)) {
                  throw new Error("`buttonId` must not be null or undefined.");
              }
              if (isNullOrWhiteSpace(buttonInfo.imageBase64)) {
                  throw new Error("`imageBase64` must not be null or undefined.");
              }
              return executor.addFrameButton(resultWindow, buttonInfo);
          }, success, error);
      }
      function removeFrameButton(buttonId, success, error) {
          return Utils$1.callbackifyPromise(function () {
              if (isNullOrWhiteSpace(buttonId)) {
                  throw new Error("`buttonId` must not be null or undefined.");
              }
              return executor.removeFrameButton(resultWindow, buttonId);
          }, success, error);
      }
      function activate(success, error) {
          return Utils$1.callbackifyPromise(function () {
              if (_focus) {
                  return Promise.resolve(resultWindow);
              }
              return executor.activate(resultWindow);
          }, success, error);
      }
      function focus(success, error) {
          return Utils$1.callbackifyPromise(function () {
              if (_focus) {
                  return Promise.resolve(resultWindow);
              }
              return executor.focus(resultWindow);
          }, success, error);
      }
      function maximizeRestore(success, error) {
          return Utils$1.callbackifyPromise(function () {
              return executor.maximizeRestore(resultWindow);
          }, success, error);
      }
      function maximize(success, error) {
          return Utils$1.callbackifyPromise(function () {
              if (_windowState === "maximized") {
                  return Promise.resolve(resultWindow);
              }
              return executor.maximize(resultWindow);
          }, success, error);
      }
      function restore(success, error) {
          return Utils$1.callbackifyPromise(function () {
              if (_windowState === "normal") {
                  return Promise.resolve(resultWindow);
              }
              return executor.restore(resultWindow);
          }, success, error);
      }
      function minimize(success, error) {
          return Utils$1.callbackifyPromise(function () {
              if (_windowState === "minimized") {
                  return Promise.resolve(resultWindow);
              }
              return executor.minimize(resultWindow);
          }, success, error);
      }
      function collapse(success, error) {
          return Utils$1.callbackifyPromise(function () {
              if (_isCollapsed) {
                  return Promise.resolve(resultWindow);
              }
              return executor.collapse(resultWindow);
          }, success, error);
      }
      function expand(success, error) {
          return Utils$1.callbackifyPromise(function () {
              if (!_isCollapsed) {
                  return Promise.resolve(resultWindow);
              }
              return executor.expand(resultWindow);
          }, success, error);
      }
      function toggleCollapse(success, error) {
          return Utils$1.callbackifyPromise(function () {
              return executor.toggleCollapse(resultWindow);
          }, success, error);
      }
      function snap(target, direction, success, error) {
          return Utils$1.callbackifyPromise(function () {
              if (isUndefinedOrNull(target)) {
                  throw new Error("A target window is not specified - " + target);
              }
              if (typeof target === "string") {
                  var win = windowStore.get(target);
                  if (!win) {
                      throw new Error("Invalid \"target\" parameter or no such window. Invoked with: " + target);
                  }
                  target = win.API;
              }
              return executor.snap(resultWindow, target, direction);
          }, success, error);
      }
      function attachTab(tab, opt, success, error) {
          return Utils$1.callbackifyPromise(function () {
              var _a;
              var errorMessage = "Invalid \"tab\" parameter - must be an object with an \"id\" property or a string. Invoked for source window with ID:";
              if (isUndefinedOrNull(tab)) {
                  throw new Error(errorMessage + tab);
              }
              var sourceWindow;
              if (typeof tab === "string") {
                  sourceWindow = (_a = windowStore.get(tab)) === null || _a === void 0 ? void 0 : _a.API;
                  if (isUndefinedOrNull(sourceWindow)) {
                      throw new Error(errorMessage + sourceWindow);
                  }
              }
              else if (!isUndefinedOrNull(tab.id)) {
                  sourceWindow = tab;
              }
              else {
                  throw new Error(errorMessage);
              }
              var attachOptions = {};
              if (!isUndefinedOrNull(opt)) {
                  if (typeof opt === "number") {
                      attachOptions.index = opt;
                  }
                  else {
                      attachOptions.selected = opt.selected;
                      attachOptions.index = opt.index;
                  }
              }
              return executor.attachTab(resultWindow, sourceWindow, attachOptions);
          }, success, error);
      }
      function detachTab(opt, success, error) {
          if (opt === void 0) { opt = {}; }
          return Utils$1.callbackifyPromise(function () {
              var argsForSend = {};
              function isDetachRelative(o) {
                  return o.relativeTo !== undefined;
              }
              if (isDetachRelative(opt)) {
                  if (typeof opt.relativeTo === "string") {
                      argsForSend.relativeTo = opt.relativeTo;
                  }
                  else if (!isUndefinedOrNull(opt.relativeTo.id)) {
                      argsForSend.relativeTo = opt.relativeTo.id;
                  }
                  if (!isUndefinedOrNull(opt.relativeDirection)) {
                      argsForSend.relativeDirection = opt.relativeDirection;
                  }
                  if (!isUndefinedOrNull(opt.width)) {
                      argsForSend.width = opt.width;
                  }
                  if (!isUndefinedOrNull(opt.height)) {
                      argsForSend.height = opt.height;
                  }
              }
              else {
                  if (!isUndefinedOrNull(opt.bounds)) {
                      argsForSend.bounds = opt.bounds;
                  }
              }
              if (!isUndefinedOrNull(opt.hideTabHeader)) {
                  argsForSend.hideTabHeader = opt.hideTabHeader;
              }
              return executor.detachTab(resultWindow, argsForSend);
          }, success, error);
      }
      function setVisible(toBeVisible, success, error) {
          return Utils$1.callbackifyPromise(function () {
              return executor.setVisible(resultWindow, toBeVisible);
          }, success, error);
      }
      function showLoader(loader) {
          return executor.showLoader(resultWindow, loader);
      }
      function hideLoader() {
          return executor.hideLoader(resultWindow);
      }
      function updateContext(context, success, error) {
          return Utils$1.callbackifyPromise(function () {
              if (isUndefinedOrNull(context)) {
                  throw new Error("\"context\" must not be null or undefined.");
              }
              return executor.updateContext(resultWindow, context);
          }, success, error);
      }
      function lock(success, error) {
          return Utils$1.callbackifyPromise(function () {
              return executor.lock(resultWindow);
          }, success, error);
      }
      function unlock(success, error) {
          return Utils$1.callbackifyPromise(function () {
              return executor.unlock(resultWindow);
          }, success, error);
      }
      function getIcon(success, error) {
          return Utils$1.callbackifyPromise(function () {
              return executor.getIcon(resultWindow);
          }, success, error);
      }
      function setIcon(base64Image, success, error) {
          return Utils$1.callbackifyPromise(function () {
              if (isNullOrWhiteSpace(base64Image)) {
                  throw new Error("\"base64Imag\" must be a non-empty string.");
              }
              return executor.setIcon(resultWindow, base64Image);
          }, success, error);
      }
      function setFrameColor(frameColor, success, error) {
          return Utils$1.callbackifyPromise(function () {
              if (isNullOrWhiteSpace(frameColor)) {
                  throw new Error("\"frameColor\" must be a non-empty string");
              }
              return executor.setFrameColor(resultWindow, frameColor);
          }, success, error);
      }
      function setTabHeaderVisible(toBeTabHeaderVisible, success, error) {
          return Utils$1.callbackifyPromise(function () {
              if (typeof toBeTabHeaderVisible !== "boolean") {
                  throw new Error("\"toBeTabHeaderVisible\" must hold a boolean value.");
              }
              return executor.setTabHeaderVisible(resultWindow, toBeTabHeaderVisible);
          }, success, error);
      }
      function setTabTooltip(tooltip) {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  if (isNullOrWhiteSpace(tooltip)) {
                      throw new Error("\"" + tooltip + "\" must not be null or undefined");
                  }
                  return [2, executor.setTabTooltip(resultWindow, tooltip)];
              });
          });
      }
      function showPopup(config) {
          return executor.showPopup(resultWindow, config);
      }
      function createFlydown(config) {
          return executor.createFlydown(resultWindow.id, config);
      }
      function setModalState(isModal) {
          return executor.setModalState(resultWindow.id, isModal || false);
      }
      function zoomIn(success, error) {
          return Utils$1.callbackifyPromise(function () {
              return executor.zoomIn(resultWindow);
          }, success, error);
      }
      function zoomOut(success, error) {
          return Utils$1.callbackifyPromise(function () {
              return executor.zoomOut(resultWindow);
          }, success, error);
      }
      function setZoomFactor(zoomFactor, success, error) {
          return Utils$1.callbackifyPromise(function () {
              if (isNaN(zoomFactor)) {
                  throw new Error("zoomFactor is not a number");
              }
              return executor.setZoomFactor(resultWindow, zoomFactor);
          }, success, error);
      }
      function showDevTools() {
          return executor.showDevTools(resultWindow);
      }
      function capture(captureOptions) {
          return executor.capture(resultWindow, captureOptions);
      }
      function flash(suppliedOptions, mode) {
          var flashOptions = {
              shouldFlash: true,
              mode: "auto"
          };
          if (typeof suppliedOptions === "boolean") {
              flashOptions.shouldFlash = suppliedOptions;
          }
          if (typeof mode !== "undefined") {
              flashOptions.mode = mode;
          }
          return executor.flash(resultWindow, flashOptions);
      }
      function print(printOptions) {
          return executor.print(resultWindow, printOptions);
      }
      function printToPDF(printToPDFOptions) {
          return executor.printToPDF(resultWindow, printToPDFOptions);
      }
      function ungroup(ungroupOptions) {
          return new Promise(function (resolve, reject) {
              var unGroupChanged = onGroupChanged(function (win, newGroup, oldGroup) {
                  if (id === win.id) {
                      unGroupChanged();
                      resolve(resultWindow);
                  }
              });
              executor.ungroup(resultWindow, ungroupOptions)
                  .catch(function (e) {
                  unGroupChanged();
                  reject(e);
              });
          });
      }
      function place(placementSettings) {
          return executor.place(resultWindow, placementSettings);
      }
      function refresh(ignoreCache) {
          return executor.refresh(resultWindow, ignoreCache);
      }
      function configure(settings) {
          return executor.configureWindow(resultWindow, settings);
      }
      function onTitleChanged(callback) {
          return onEventCore("onTitleChanged", callback, [resultWindow.title, resultWindow]);
      }
      function onClose(callback) {
          if (!isFunction(callback)) {
              throw new Error("callback should be a function");
          }
          if (id === undefined) {
              callback(resultWindow);
          }
          return _registry.add("onClose", callback);
      }
      function onUrlChanged(callback) {
          return onEventCore("onUrlChanged", callback);
      }
      function onFrameButtonAdded(callback) {
          return onEventCore("onFrameButtonAdded", callback);
      }
      function onFrameButtonRemoved(callback) {
          return onEventCore("onFrameButtonRemoved", callback);
      }
      function onFrameButtonClicked(callback) {
          return onEventCore("onFrameButtonClicked", callback);
      }
      function onCollapsed(callback) {
          if (!isFunction(callback)) {
              throw new Error("callback should be a function");
          }
          if (_isCollapsed) {
              callback(resultWindow);
          }
          return _registry.add("collapsed", callback);
      }
      function onExpanded(callback) {
          if (!isFunction(callback)) {
              throw new Error("callback should be a function");
          }
          if (!_isCollapsed) {
              callback(resultWindow);
          }
          return _registry.add("expanded", callback);
      }
      function onMaximized(callback) {
          if (_windowState === "maximized") {
              return onEventCore("maximized", callback, [resultWindow]);
          }
          else {
              return onEventCore("maximized", callback);
          }
      }
      function onMinimized(callback) {
          if (_windowState === "minimized") {
              return onEventCore("minimized", callback, [resultWindow]);
          }
          else {
              return onEventCore("minimized", callback);
          }
      }
      function onNormal(callback) {
          if (_windowState === "normal") {
              return onEventCore("normal", callback, [resultWindow]);
          }
          else {
              return onEventCore("normal", callback);
          }
      }
      function onAttached(callback) {
          return onEventCore("attached", callback);
      }
      function onDetached(callback) {
          return onEventCore("detached", callback);
      }
      function onVisibilityChanged(callback) {
          return onEventCore("visibility-changed", callback);
      }
      function onContextUpdated(callback) {
          return onEventCore("context-updated", callback);
      }
      function onLockingChanged(callback) {
          return onEventCore("lock-changed", callback);
      }
      function onBoundsChanged(callback) {
          return onEventCore("bounds-changed", callback);
      }
      function onFocusChanged(callback) {
          return onEventCore("focus-changed", callback);
      }
      function onStickyChanged(callback) {
          return onEventCore("sticky-changed", callback);
      }
      function onFrameColorChanged(callback) {
          return onEventCore("frame-color-changed", callback);
      }
      function onTabHeaderVisibilityChanged(callback) {
          return onEventCore("tab-header-visibility-changed", callback);
      }
      function onWindowAttached(callback) {
          return onEventCore("window-attached", callback);
      }
      function onWindowDetached(callback) {
          return onEventCore("window-detached", callback);
      }
      function onGroupChanged(callback) {
          return onEventCore("group-changed", callback);
      }
      function onTabSelectionChanged(callback) {
          return onEventCore("tab-selection-changed", callback);
      }
      function onClosing(callback) {
          if (!isFunction(callback)) {
              throw new Error("callback must be a function");
          }
          var callbackWrap = function (success, error) {
              var promise = callback();
              if (promise && promise.then) {
                  promise.then(success).catch(error);
              }
              else {
                  success();
              }
          };
          return executor.onClosing(callbackWrap, id);
      }
      function onRefreshing(callback) {
          if (!isFunction(callback)) {
              throw new Error("callback must be a function");
          }
          var callbackWrap = function (success, error, prevent) {
              var promise = callback(prevent);
              if (promise && promise.then) {
                  promise.then(success).catch(error);
              }
              else {
                  success();
              }
          };
          return executor.onRefreshing(callbackWrap, id);
      }
      function onZoomFactorChanged(callback) {
          return onEventCore("zoom-factor-changed", callback);
      }
      function onPlacementSettingsChanged(callback) {
          return onEventCore("placementSettingsChanged", callback);
      }
      function onNeighboursChanged(callback) {
          return onEventCore("neighbours-changed", callback);
      }
      function onEventCore(key, callback, replayArguments) {
          if (!isFunction(callback)) {
              throw new Error("callback must be a function");
          }
          return _registry.add(key, callback, replayArguments);
      }
      function handleUpdate(updated) {
          _url = updated.url;
          _title = updated.title;
          _context = updated.context || {};
          _bounds = updated.bounds;
          _frameColor = updated.frameColor;
          _focus = updated.focus;
          _neighbours = updated.neighbours || {};
          _groupId = updated.groupId;
          _isGroupHeaderVisible = updated.isGroupHeaderVisible;
          _isTabHeaderVisible = updated.isTabHeaderVisible;
          _isTabSelected = updated.isTabSelected;
          _settings = updated.settings;
          _isVisible = updated.isVisible;
          _isSticky = updated.isSticky;
          _isCollapsed = updated.isCollapsed;
          _windowState = updated.state;
          _tabGroupId = updated.tabGroupId;
          _isLocked = updated.isLocked;
          _zoomFactor = updated.zoomFactor;
          _placementSettings = updated.placementSettings;
      }
      function handleTitleChanged(newTitle) {
          _title = newTitle;
          executor.finished
              .finally(function () {
              _registry.execute("onTitleChanged", newTitle, resultWindow);
          });
      }
      function handleUrlChanged(newUrl) {
          _url = newUrl;
          _registry.execute("onUrlChanged", newUrl, resultWindow);
      }
      function handleVisibilityChanged(isVisible) {
          if (isVisible === _isVisible) {
              return;
          }
          _isVisible = isVisible;
          _registry.execute("visibility-changed", resultWindow);
      }
      function handleWindowSettingsChanged(settings) {
          _settings = settings;
          _registry.execute("settings-changed", resultWindow);
      }
      function handleContextUpdated(context) {
          _context = context;
          _registry.execute("context-updated", _context, resultWindow);
      }
      function handleWindowClose() {
          if (id === undefined) {
              return;
          }
          _registry.execute("onClose", resultWindow);
          id = undefined;
      }
      function handleFrameButtonAdded(frameButton) {
          var buttonObj = ["buttonId", "imageBase64", "order", "tooltip"].reduce(function (memo, k) {
              memo[k] = frameButton[k];
              return memo;
          }, {});
          var frameButtonsIds = _frameButtons.map(function (btn) {
              return btn.buttonId;
          });
          if (frameButtonsIds.indexOf(frameButton.buttonId) === -1) {
              _frameButtons.push(buttonObj);
          }
          _registry.execute("onFrameButtonAdded", buttonObj, resultWindow);
      }
      function handleFrameButtonRemoved(frameButtonId) {
          var button;
          _frameButtons = _frameButtons.reduce(function (memo, btn) {
              if (btn.buttonId === frameButtonId) {
                  button = btn;
              }
              else {
                  memo.push(btn);
              }
              return memo;
          }, []);
          if (button !== undefined) {
              _registry.execute("onFrameButtonRemoved", button, resultWindow);
          }
      }
      function handleFrameButtonClicked(frameButton) {
          var button = _frameButtons.filter(function (btn) {
              return btn.buttonId === frameButton.buttonId;
          });
          if (button.length > 0) {
              _registry.execute("onFrameButtonClicked", button[0], resultWindow);
          }
      }
      function handleWindowChangeState(state) {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                          if (state === "collapsed") {
                              _isCollapsed = true;
                          }
                          else if (state === "expanded") {
                              _isCollapsed = false;
                          }
                          else {
                              _windowState = state;
                          }
                          return [4, executor.finished];
                      case 1:
                          _a.sent();
                          _registry.execute(state, resultWindow);
                          return [2];
                  }
              });
          });
      }
      function handleFrameIsLockedChanged(isLocked) {
          _isLocked = isLocked;
          _registry.execute("lock-changed", resultWindow);
      }
      function handleBoundsChanged(bounds) {
          if (_bounds.top === bounds.top && _bounds.left === bounds.left && _bounds.width === bounds.width && _bounds.height === bounds.height) {
              return;
          }
          _bounds = bounds;
          _registry.execute("bounds-changed", resultWindow);
      }
      function handleFocusChanged(isFocused) {
          _focus = isFocused;
          _registry.execute("focus-changed", resultWindow);
      }
      function handleIsStickyChanged(isSticky) {
          _isSticky = isSticky;
          _registry.execute("sticky-changed", isSticky, resultWindow);
      }
      function handleFrameColorChanged(frameColor) {
          _frameColor = frameColor;
          _registry.execute("frame-color-changed", resultWindow);
      }
      function handleFrameAttached(tabGroupId, isTabHeaderVisible) {
          _tabGroupId = tabGroupId;
          _isTabHeaderVisible = isTabHeaderVisible;
          _registry.execute("frame-attached", resultWindow);
      }
      function handleCompositionChanged(state) {
          _neighbours = state.neighbors || {};
          _tabIndex = state.index;
          _registry.execute("neighbours-changed", _neighbours, resultWindow);
      }
      function handleGroupHeaderVisibilityChanged(isGroupHeaderVisible) {
          _isGroupHeaderVisible = isGroupHeaderVisible;
      }
      function handleTabHeaderVisibilityChanged(isTabHeaderVisible) {
          if (_isTabHeaderVisible !== isTabHeaderVisible) {
              _isTabHeaderVisible = isTabHeaderVisible;
              _registry.execute("tab-header-visibility-changed", resultWindow);
          }
      }
      function handleFrameSelectionChanged(newWindow, prevWindow) {
          return __awaiter(this, void 0, void 0, function () {
              var selectedWindow, previousWindow;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                          if (newWindow === id) {
                              _isTabSelected = true;
                              selectedWindow = resultWindow;
                          }
                          else {
                              _isTabSelected = false;
                              selectedWindow = windowStore.get(newWindow) ? windowStore.get(newWindow).API : undefined;
                          }
                          previousWindow = windowStore.get(prevWindow) ? windowStore.get(prevWindow).API : undefined;
                          return [4, executor.finished];
                      case 1:
                          _a.sent();
                          _registry.execute("tab-selection-changed", selectedWindow, previousWindow, resultWindow);
                          return [2];
                  }
              });
          });
      }
      function handleAttached(newTabGroupId, tabHeaderVisible, winsToBeNotified) {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                          _tabGroupId = newTabGroupId;
                          _isTabHeaderVisible = tabHeaderVisible;
                          return [4, executor.finished];
                      case 1:
                          _a.sent();
                          winsToBeNotified.forEach(function (w) {
                              w.Events.handleWindowAttached(resultWindow);
                          });
                          _registry.execute("attached", resultWindow);
                          return [2];
                  }
              });
          });
      }
      function handleWindowAttached(win) {
          _registry.execute("window-attached", win);
      }
      function handleDetached(winsToBeNotified) {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                          _tabGroupId = undefined;
                          _isTabSelected = false;
                          return [4, executor.finished];
                      case 1:
                          _a.sent();
                          winsToBeNotified.forEach(function (w) {
                              w.Events.handleWindowDetached(resultWindow);
                          });
                          _registry.execute("detached", resultWindow);
                          return [2];
                  }
              });
          });
      }
      function handleWindowDetached(win) {
          _registry.execute("window-detached", win);
      }
      function handleZoomFactorChanged(zoomFactor) {
          _zoomFactor = zoomFactor;
          _registry.execute("zoom-factor-changed", resultWindow);
      }
      function handlePlacementSettingsChanged(placementSettings) {
          var promise;
          var copy = placementSettings;
          if (!copy.display) {
              promise = Promise.resolve(undefined);
          }
          else {
              var displayAPI_1 = displayAPIGetter();
              if (!displayAPI_1) {
                  promise = Promise.resolve(undefined);
              }
              else {
                  var index_1 = copy.display - 1;
                  promise = new Promise(function (resolve, reject) {
                      displayAPI_1.all().then(function (displays) {
                          var display = displays.find(function (d) { return d.index === index_1; });
                          resolve(display);
                      }).catch(reject);
                  });
              }
          }
          promise.then(function (d) {
              copy.display = d;
              _placementSettings = copy;
              _registry.execute("placementSettingsChanged", resultWindow);
          });
      }
      function handleGroupChanged(newGroup, oldGroup) {
          var _a;
          _group = newGroup;
          _groupId = (_a = newGroup) === null || _a === void 0 ? void 0 : _a.id;
          if (!isUndefinedOrNull(newGroup) && !isUndefinedOrNull(oldGroup)) {
              _registry.execute("group-changed", resultWindow, newGroup, oldGroup);
          }
      }
      function getAllTabs() {
          var allWindows = windowStore.list;
          if (_mode.toLowerCase() !== "tab") {
              return [];
          }
          var tabs = Object.keys(allWindows).reduce(function (memo, win) {
              var window = allWindows[win];
              if (window
                  && window.API.tabGroupId
                  && typeof window.API.tabGroupId !== "undefined"
                  && typeof resultWindow.tabGroupId !== "undefined"
                  && window.API.tabGroupId === resultWindow.tabGroupId) {
                  memo.push(window.API);
              }
              return memo;
          }, []);
          return tabs.sort(function (w1, w2) {
              if (w1.tabIndex !== w2.tabIndex) {
                  if (w1.tabIndex === -1) {
                      return Number.MAX_SAFE_INTEGER;
                  }
                  if (w2.tabIndex === -1) {
                      return Number.MIN_SAFE_INTEGER;
                  }
              }
              return w1.tabIndex - w2.tabIndex;
          });
      }
      function mapWindowIdsToWindowObjects(windowIdArr) {
          return windowIdArr.reduce(function (memo, winId) {
              var window = windowStore.get(winId);
              if (window) {
                  memo.push(window.API);
              }
              return memo;
          }, []);
      }
      function getNeighboursByDirection(direction) {
          var windowIds = _neighbours[direction];
          if (typeof windowIds !== "undefined") {
              return mapWindowIdsToWindowObjects(windowIds);
          }
      }
      function getApplicationName() {
          if (_context._APPLICATION_NAME) {
              return _context._APPLICATION_NAME;
          }
          if (_context && _context._t42 && _context._t42.application) {
              return _context._t42.application;
          }
          var info = getWindowInfo();
          if (!info) {
              return undefined;
          }
          return info.applicationName;
      }
      function getWindowInfo() {
          if (typeof window !== "undefined" && window.glue42gd && window.glue42gd.getWindowInfo) {
              var info = window.glue42gd.getWindowInfo(id);
              if (!info) {
                  return undefined;
              }
              else {
                  return info;
              }
          }
      }
      resultWindow = {
          get id() {
              return _id;
          },
          get name() {
              return _name;
          },
          get application() {
              var appManager = appManagerGetter();
              return appManager ? appManager.application(getApplicationName()) : undefined;
          },
          get hostInstance() {
              return executor.hostInstance;
          },
          get agmInstance() {
              var _this = this;
              if (typeof window !== "undefined" && window.glue42gd) {
                  return agm.servers().find(function (s) { return s.windowId === _this.id; });
              }
              var appName = getApplicationName();
              return appName ? { application: appName } : undefined;
          },
          get url() {
              return _url;
          },
          get title() {
              return _title;
          },
          get windowStyleAttributes() {
              return _settings;
          },
          get settings() {
              return _settings;
          },
          get tabGroupId() {
              return _mode.toLowerCase() === "tab" ? _tabGroupId : undefined;
          },
          get tabIndex() {
              return _mode.toLowerCase() === "tab" ? _tabIndex : undefined;
          },
          get frameButtons() {
              return _frameButtons;
          },
          get mode() {
              return _mode;
          },
          get state() {
              return _windowState;
          },
          get isCollapsed() {
              return _isCollapsed;
          },
          get isVisible() {
              return _isVisible;
          },
          get isLocked() {
              return _isLocked;
          },
          get context() {
              return _context;
          },
          get bounds() {
              return _bounds;
          },
          get minHeight() {
              return _settings.minHeight;
          },
          get maxHeight() {
              return _settings.maxHeight;
          },
          get minWidth() {
              return _settings.minWidth;
          },
          get maxWidth() {
              return _settings.maxWidth;
          },
          get isFocused() {
              return _focus;
          },
          get frameColor() {
              return _frameColor;
          },
          get opened() {
              return resultWindow.id !== undefined;
          },
          get group() {
              return _group;
          },
          get groupId() {
              return _groupId;
          },
          get isSticky() {
              return _isSticky;
          },
          get topNeighbours() {
              return getNeighboursByDirection("top");
          },
          get leftNeighbours() {
              return getNeighboursByDirection("left");
          },
          get rightNeighbours() {
              return getNeighboursByDirection("right");
          },
          get bottomNeighbours() {
              return getNeighboursByDirection("bottom");
          },
          get isGroupHeaderVisible() {
              return _isGroupHeaderVisible;
          },
          get activityId() {
              if (_context._t42) {
                  return _context._t42.activityId;
              }
              var info = getWindowInfo();
              if (!info) {
                  return undefined;
              }
              return info.activityId;
          },
          get activityWindowId() {
              if (_context._t42) {
                  return _context._t42.activityWindowId;
              }
              var info = getWindowInfo();
              if (!info) {
                  return undefined;
              }
              return info.activityWindowId;
          },
          get windowType() {
              return options.windowType || "electron";
          },
          get zoomFactor() {
              return _zoomFactor;
          },
          get screen() {
              if (typeof window !== "undefined" && window.glue42gd) {
                  return Utils$1.getMonitor(resultWindow.bounds, window.glue42gd.monitors);
              }
              return undefined;
          },
          get placementSettings() {
              return Object.assign({}, _placementSettings);
          },
          maximize: maximize,
          restore: restore,
          minimize: minimize,
          maximizeRestore: maximizeRestore,
          collapse: collapse,
          expand: expand,
          toggleCollapse: toggleCollapse,
          focus: focus,
          activate: activate,
          moveResize: moveResize,
          setTitle: setTitle,
          setStyle: setStyle,
          setOnTop: setOnTop,
          resetButtons: resetButtons,
          setSizeConstraints: setSizeConstraints,
          navigate: navigate,
          addFrameButton: addFrameButton,
          removeFrameButton: removeFrameButton,
          setVisible: setVisible,
          show: function () { return setVisible(true); },
          hide: function () { return setVisible(false); },
          center: function (screen) { return moveResize(Utils$1.getDisplayCenterOfScreen(resultWindow.bounds, screen || resultWindow.screen)); },
          close: close,
          snap: snap,
          showLoader: showLoader,
          hideLoader: hideLoader,
          updateContext: updateContext,
          lock: lock,
          unlock: unlock,
          getIcon: getIcon,
          setIcon: setIcon,
          setFrameColor: setFrameColor,
          setTabTooltip: setTabTooltip,
          attachTab: attachTab,
          detachTab: detachTab,
          setTabHeaderVisible: setTabHeaderVisible,
          showPopup: showPopup,
          createFlydown: createFlydown,
          setModalState: setModalState,
          setZoomFactor: setZoomFactor,
          zoomIn: zoomIn,
          zoomOut: zoomOut,
          showDevTools: showDevTools,
          capture: capture,
          flash: flash,
          setSticky: setSticky,
          print: print,
          printToPDF: printToPDF,
          place: place,
          ungroup: ungroup,
          refresh: refresh,
          configure: configure,
          onClose: onClose,
          onUrlChanged: onUrlChanged,
          onTitleChanged: onTitleChanged,
          onFrameButtonAdded: onFrameButtonAdded,
          onFrameButtonRemoved: onFrameButtonRemoved,
          onFrameButtonClicked: onFrameButtonClicked,
          onCollapsed: onCollapsed,
          onExpanded: onExpanded,
          onMinimized: onMinimized,
          onMaximized: onMaximized,
          onNormal: onNormal,
          onAttached: onAttached,
          onDetached: onDetached,
          onVisibilityChanged: onVisibilityChanged,
          onContextUpdated: onContextUpdated,
          onLockingChanged: onLockingChanged,
          onBoundsChanged: onBoundsChanged,
          onFrameColorChanged: onFrameColorChanged,
          onFocusChanged: onFocusChanged,
          onStickyChanged: onStickyChanged,
          onGroupChanged: onGroupChanged,
          onWindowAttached: onWindowAttached,
          onWindowDetached: onWindowDetached,
          onTabSelectionChanged: onTabSelectionChanged,
          onTabHeaderVisibilityChanged: onTabHeaderVisibilityChanged,
          onClosing: onClosing,
          onRefreshing: onRefreshing,
          onZoomFactorChanged: onZoomFactorChanged,
          onPlacementSettingsChanged: onPlacementSettingsChanged,
          onNeighboursChanged: onNeighboursChanged,
          get tabs() {
              return getAllTabs();
          },
          get isTabHeaderVisible() {
              return _isTabHeaderVisible;
          },
          get isTabSelected() {
              return _isTabSelected;
          },
          getURL: function () {
              return Promise.resolve(_url);
          },
          getTitle: function () {
              return Promise.resolve(_title);
          },
          getBounds: function () {
              return Promise.resolve(_bounds);
          },
          getContext: function () {
              return Promise.resolve(_context);
          },
          setContext: function (context) {
              return updateContext(context);
          },
          getDisplay: function () {
              var displayAPI = displayAPIGetter();
              return displayAPI.getByWindowId(id);
          },
          resizeTo: function (width, height) {
              return moveResize({ width: width, height: height });
          },
          moveTo: function (top, left) {
              return moveResize({ top: top, left: left });
          },
          getParentWindow: function () {
              var _a;
              return __awaiter(this, void 0, void 0, function () {
                  var myParentId;
                  return __generator(this, function (_b) {
                      myParentId = _settings.parentInstanceId;
                      if (!myParentId) {
                          return [2, undefined];
                      }
                      return [2, (_a = windowStore.list[myParentId]) === null || _a === void 0 ? void 0 : _a.API];
                  });
              });
          },
          getChildWindows: function () {
              return __awaiter(this, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                      return [2, Object.keys(windowStore.list)
                              .map(function (key) { return windowStore.list[key].API; })
                              .filter(function (w) {
                              var parentId = w.settings.parentInstanceId;
                              return parentId === id;
                          })];
                  });
              });
          }
      };
      var events = {
          handleUpdate: handleUpdate,
          handleWindowClose: handleWindowClose,
          handleWindowChangeState: handleWindowChangeState,
          handleTitleChanged: handleTitleChanged,
          handleVisibilityChanged: handleVisibilityChanged,
          handleUrlChanged: handleUrlChanged,
          handleWindowSettingsChanged: handleWindowSettingsChanged,
          handleContextUpdated: handleContextUpdated,
          handleFrameIsLockedChanged: handleFrameIsLockedChanged,
          handleBoundsChanged: handleBoundsChanged,
          handleFocusChanged: handleFocusChanged,
          handleFrameButtonAdded: handleFrameButtonAdded,
          handleFrameButtonRemoved: handleFrameButtonRemoved,
          handleFrameButtonClicked: handleFrameButtonClicked,
          handleFrameColorChanged: handleFrameColorChanged,
          handleFrameAttached: handleFrameAttached,
          handleFrameSelectionChanged: handleFrameSelectionChanged,
          handleCompositionChanged: handleCompositionChanged,
          handleGroupHeaderVisibilityChanged: handleGroupHeaderVisibilityChanged,
          handleTabHeaderVisibilityChanged: handleTabHeaderVisibilityChanged,
          handleGroupChanged: handleGroupChanged,
          handleAttached: handleAttached,
          handleDetached: handleDetached,
          handleWindowAttached: handleWindowAttached,
          handleWindowDetached: handleWindowDetached,
          handleZoomFactorChanged: handleZoomFactorChanged,
          handleIsStickyChanged: handleIsStickyChanged,
          handlePlacementSettingsChanged: handlePlacementSettingsChanged,
      };
      return {
          API: resultWindow,
          Events: events
      };
  });

  function createCommonjsModule$1(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  // Found this seed-based random generator somewhere
  // Based on The Central Randomizer 1.3 (C) 1997 by Paul Houle (houle@msc.cornell.edu)

  var seed$1 = 1;

  /**
   * return a random number based on a seed
   * @param seed
   * @returns {number}
   */
  function getNextValue$1() {
      seed$1 = (seed$1 * 9301 + 49297) % 233280;
      return seed$1/(233280.0);
  }

  function setSeed$2(_seed_) {
      seed$1 = _seed_;
  }

  var randomFromSeed$1 = {
      nextValue: getNextValue$1,
      seed: setSeed$2
  };

  var ORIGINAL$1 = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
  var alphabet$1;
  var previousSeed$1;

  var shuffled$1;

  function reset$1() {
      shuffled$1 = false;
  }

  function setCharacters$1(_alphabet_) {
      if (!_alphabet_) {
          if (alphabet$1 !== ORIGINAL$1) {
              alphabet$1 = ORIGINAL$1;
              reset$1();
          }
          return;
      }

      if (_alphabet_ === alphabet$1) {
          return;
      }

      if (_alphabet_.length !== ORIGINAL$1.length) {
          throw new Error('Custom alphabet for shortid must be ' + ORIGINAL$1.length + ' unique characters. You submitted ' + _alphabet_.length + ' characters: ' + _alphabet_);
      }

      var unique = _alphabet_.split('').filter(function(item, ind, arr){
         return ind !== arr.lastIndexOf(item);
      });

      if (unique.length) {
          throw new Error('Custom alphabet for shortid must be ' + ORIGINAL$1.length + ' unique characters. These characters were not unique: ' + unique.join(', '));
      }

      alphabet$1 = _alphabet_;
      reset$1();
  }

  function characters$1(_alphabet_) {
      setCharacters$1(_alphabet_);
      return alphabet$1;
  }

  function setSeed$3(seed) {
      randomFromSeed$1.seed(seed);
      if (previousSeed$1 !== seed) {
          reset$1();
          previousSeed$1 = seed;
      }
  }

  function shuffle$1() {
      if (!alphabet$1) {
          setCharacters$1(ORIGINAL$1);
      }

      var sourceArray = alphabet$1.split('');
      var targetArray = [];
      var r = randomFromSeed$1.nextValue();
      var characterIndex;

      while (sourceArray.length > 0) {
          r = randomFromSeed$1.nextValue();
          characterIndex = Math.floor(r * sourceArray.length);
          targetArray.push(sourceArray.splice(characterIndex, 1)[0]);
      }
      return targetArray.join('');
  }

  function getShuffled$1() {
      if (shuffled$1) {
          return shuffled$1;
      }
      shuffled$1 = shuffle$1();
      return shuffled$1;
  }

  /**
   * lookup shuffled letter
   * @param index
   * @returns {string}
   */
  function lookup$1(index) {
      var alphabetShuffled = getShuffled$1();
      return alphabetShuffled[index];
  }

  var alphabet_1$1 = {
      characters: characters$1,
      seed: setSeed$3,
      lookup: lookup$1,
      shuffled: getShuffled$1
  };

  var crypto$1 = typeof window === 'object' && (window.crypto || window.msCrypto); // IE 11 uses window.msCrypto

  function randomByte$1() {
      if (!crypto$1 || !crypto$1.getRandomValues) {
          return Math.floor(Math.random() * 256) & 0x30;
      }
      var dest = new Uint8Array(1);
      crypto$1.getRandomValues(dest);
      return dest[0] & 0x30;
  }

  var randomByteBrowser$1 = randomByte$1;

  function encode$1(lookup, number) {
      var loopCounter = 0;
      var done;

      var str = '';

      while (!done) {
          str = str + lookup( ( (number >> (4 * loopCounter)) & 0x0f ) | randomByteBrowser$1() );
          done = number < (Math.pow(16, loopCounter + 1 ) );
          loopCounter++;
      }
      return str;
  }

  var encode_1$1 = encode$1;

  /**
   * Decode the id to get the version and worker
   * Mainly for debugging and testing.
   * @param id - the shortid-generated id.
   */
  function decode$1(id) {
      var characters = alphabet_1$1.shuffled();
      return {
          version: characters.indexOf(id.substr(0, 1)) & 0x0f,
          worker: characters.indexOf(id.substr(1, 1)) & 0x0f
      };
  }

  var decode_1$1 = decode$1;

  // Ignore all milliseconds before a certain time to reduce the size of the date entropy without sacrificing uniqueness.
  // This number should be updated every year or so to keep the generated id short.
  // To regenerate `new Date() - 0` and bump the version. Always bump the version!
  var REDUCE_TIME = 1459707606518;

  // don't change unless we change the algos or REDUCE_TIME
  // must be an integer and less than 16
  var version$1 = 6;

  // Counter is used when shortid is called multiple times in one second.
  var counter;

  // Remember the last time shortid was called in case counter is needed.
  var previousSeconds;

  /**
   * Generate unique id
   * Returns string id
   */
  function build(clusterWorkerId) {

      var str = '';

      var seconds = Math.floor((Date.now() - REDUCE_TIME) * 0.001);

      if (seconds === previousSeconds) {
          counter++;
      } else {
          counter = 0;
          previousSeconds = seconds;
      }

      str = str + encode_1$1(alphabet_1$1.lookup, version$1);
      str = str + encode_1$1(alphabet_1$1.lookup, clusterWorkerId);
      if (counter > 0) {
          str = str + encode_1$1(alphabet_1$1.lookup, counter);
      }
      str = str + encode_1$1(alphabet_1$1.lookup, seconds);

      return str;
  }

  var build_1 = build;

  function isShortId$1(id) {
      if (!id || typeof id !== 'string' || id.length < 6 ) {
          return false;
      }

      var characters = alphabet_1$1.characters();
      var len = id.length;
      for(var i = 0; i < len;i++) {
          if (characters.indexOf(id[i]) === -1) {
              return false;
          }
      }
      return true;
  }

  var isValid$1 = isShortId$1;

  var lib$3 = createCommonjsModule$1(function (module) {







  // if you are using cluster or multiple servers use this to make each instance
  // has a unique value for worker
  // Note: I don't know if this is automatically set when using third
  // party cluster solutions such as pm2.
  var clusterWorkerId =  0;

  /**
   * Set the seed.
   * Highly recommended if you don't want people to try to figure out your id schema.
   * exposed as shortid.seed(int)
   * @param seed Integer value to seed the random alphabet.  ALWAYS USE THE SAME SEED or you might get overlaps.
   */
  function seed(seedValue) {
      alphabet_1$1.seed(seedValue);
      return module.exports;
  }

  /**
   * Set the cluster worker or machine id
   * exposed as shortid.worker(int)
   * @param workerId worker must be positive integer.  Number less than 16 is recommended.
   * returns shortid module so it can be chained.
   */
  function worker(workerId) {
      clusterWorkerId = workerId;
      return module.exports;
  }

  /**
   *
   * sets new characters to use in the alphabet
   * returns the shuffled alphabet
   */
  function characters(newCharacters) {
      if (newCharacters !== undefined) {
          alphabet_1$1.characters(newCharacters);
      }

      return alphabet_1$1.shuffled();
  }

  /**
   * Generate unique id
   * Returns string id
   */
  function generate() {
    return build_1(clusterWorkerId);
  }

  // Export all other functions as properties of the generate function
  module.exports = generate;
  module.exports.generate = generate;
  module.exports.seed = seed;
  module.exports.worker = worker;
  module.exports.characters = characters;
  module.exports.decode = decode_1$1;
  module.exports.isValid = isValid$1;
  });
  lib$3.generate;
  lib$3.seed;
  lib$3.worker;
  lib$3.characters;
  lib$3.decode;
  lib$3.isValid;

  var shortid$1 = lib$3;

  var GDExecutor = (function () {
      function GDExecutor() {
          this._registry = lib$2();
          this._finished = Promise.resolve();
      }
      Object.defineProperty(GDExecutor.prototype, "hostInstance", {
          get: function () {
              return this.agmTarget;
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(GDExecutor.prototype, "finished", {
          get: function () {
              return this._finished;
          },
          enumerable: true,
          configurable: true
      });
      GDExecutor.prototype.init = function (agm, instance) {
          this.agm = agm;
          this.agmTarget = instance;
      };
      GDExecutor.prototype.handleEvent = function (data) {
          this._registry.execute("event", data);
      };
      GDExecutor.prototype.open = function (options) {
          return __awaiter(this, void 0, void 0, function () {
              var finishedResolve, result, id, win_1, error_1;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                          this._finished = new Promise(function (resolve) {
                              finishedResolve = resolve;
                          });
                          _a.label = 1;
                      case 1:
                          _a.trys.push([1, 4, 5, 6]);
                          return [4, this.agm.invoke("T42.Wnd.Create", options, this.agmTarget)];
                      case 2:
                          result = _a.sent();
                          if (result.returned === undefined) {
                              throw new Error("failed to execute T42.Wnd.Create - unknown reason");
                          }
                          id = result.returned.id;
                          return [4, windowStore.waitFor(id)];
                      case 3:
                          win_1 = _a.sent();
                          setTimeout(function () {
                              if (win_1.API.windowType === "electron") {
                                  win_1.Events.handleUrlChanged(win_1.API.url);
                              }
                          }, 0);
                          return [2, win_1.API];
                      case 4:
                          error_1 = _a.sent();
                          throw error_1;
                      case 5:
                          finishedResolve();
                          return [7];
                      case 6: return [2];
                  }
              });
          });
      };
      GDExecutor.prototype.close = function (w) {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.execute("close", { windowId: w.id }, "Closed")];
                      case 1:
                          _a.sent();
                          return [2, w];
                  }
              });
          });
      };
      GDExecutor.prototype.navigate = function (w, newUrl) {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.execute("navigate", { windowId: w.id, options: { url: newUrl } }, "UrlChanged")];
                      case 1:
                          _a.sent();
                          return [2, w];
                  }
              });
          });
      };
      GDExecutor.prototype.setStyle = function (w, style) {
          var _a;
          return __awaiter(this, void 0, void 0, function () {
              var stylePromises, wait, toBeVisible, toolTip, maxWidth, maxHeight, minWidth, minHeight, allowClose, allowCollapse, allowLockUnlock, allowMaximize, allowMinimize;
              return __generator(this, function (_b) {
                  switch (_b.label) {
                      case 0:
                          stylePromises = [];
                          wait = function (promise) { return stylePromises.push(promise); };
                          if (!isUndefinedOrNull(style.focus) && !w.isFocused) {
                              wait(w.focus());
                          }
                          if (!isUndefinedOrNull(style.hidden)) {
                              toBeVisible = !style.hidden;
                              wait(w.setVisible(toBeVisible));
                          }
                          if (!isUndefinedOrNull(style.onTop)) {
                              wait(w.setOnTop(style.onTop));
                          }
                          if (!isNullOrWhiteSpace(style.tabTooltip) || !isNullOrWhiteSpace(style.tabToolTip)) {
                              toolTip = (_a = style.tabTooltip, (_a !== null && _a !== void 0 ? _a : style.tabToolTip));
                              wait(w.setTabTooltip(toolTip));
                          }
                          if (!isNullOrWhiteSpace(style.tabTitle)) {
                              wait(this.execute("setTabTitle", { windowId: w.id, options: { tabTitle: style.tabTitle } }));
                          }
                          maxWidth = style.maxWidth, maxHeight = style.maxHeight, minWidth = style.minWidth, minHeight = style.minHeight, allowClose = style.allowClose, allowCollapse = style.allowCollapse, allowLockUnlock = style.allowLockUnlock, allowMaximize = style.allowMaximize, allowMinimize = style.allowMinimize;
                          wait(w.setSizeConstraints({ maxWidth: maxWidth, maxHeight: maxHeight, minWidth: minWidth, minHeight: minHeight }));
                          wait(w.resetButtons({ allowClose: allowClose, allowCollapse: allowCollapse, allowLockUnlock: allowLockUnlock, allowMaximize: allowMaximize, allowMinimize: allowMinimize }));
                          return [4, Promise.all(stylePromises)];
                      case 1:
                          _b.sent();
                          return [2, w];
                  }
              });
          });
      };
      GDExecutor.prototype.setSizeConstraints = function (w, constraints) {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.execute("setSizeConstraints", { windowId: w.id, options: constraints })];
                      case 1:
                          _a.sent();
                          return [2, w];
                  }
              });
          });
      };
      GDExecutor.prototype.setTabTooltip = function (w, tabTooltip) {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.execute("setTabTooltip", { windowId: w.id, options: { tabTooltip: tabTooltip } })];
                      case 1:
                          _a.sent();
                          return [2, w];
                  }
              });
          });
      };
      GDExecutor.prototype.resetButtons = function (w, buttonsConfig) {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.execute("resetButtons", { windowId: w.id, options: buttonsConfig })];
                      case 1:
                          _a.sent();
                          return [2, w];
                  }
              });
          });
      };
      GDExecutor.prototype.setOnTop = function (w, onTop) {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.execute("setOnTop", { windowId: w.id, options: { onTop: onTop } })];
                      case 1:
                          _a.sent();
                          return [2, w];
                  }
              });
          });
      };
      GDExecutor.prototype.setTitle = function (w, newTitle) {
          return __awaiter(this, void 0, void 0, function () {
              var options;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                          options = {
                              windowId: w.id,
                              options: {
                                  title: newTitle
                              }
                          };
                          return [4, this.execute("setTitle", options, "TitleChanged")];
                      case 1:
                          _a.sent();
                          return [2, w];
                  }
              });
          });
      };
      GDExecutor.prototype.setSticky = function (w, isSticky) {
          return __awaiter(this, void 0, void 0, function () {
              var options;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                          options = {
                              windowId: w.id,
                              options: {
                                  isSticky: isSticky
                              }
                          };
                          return [4, this.execute("setSticky", options)];
                      case 1:
                          _a.sent();
                          return [2, w];
                  }
              });
          });
      };
      GDExecutor.prototype.moveResize = function (w, bounds) {
          return __awaiter(this, void 0, void 0, function () {
              var _this = this;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                          if (!(window.glueDesktop.versionNum < 31200)) return [3, 1];
                          return [2, new Promise(function (res, rej) { return __awaiter(_this, void 0, void 0, function () {
                                  var resolveImmediately, isDone, done, resolveTimeout, unsubscribeBoundsChanged, error_2;
                                  var _this = this;
                                  return __generator(this, function (_a) {
                                      switch (_a.label) {
                                          case 0:
                                              resolveImmediately = this.areBoundsEqual(bounds, w);
                                              isDone = false;
                                              done = function () {
                                                  if (isDone) {
                                                      return;
                                                  }
                                                  isDone = true;
                                                  if (unsubscribeBoundsChanged) {
                                                      unsubscribeBoundsChanged();
                                                      unsubscribeBoundsChanged = undefined;
                                                  }
                                                  res(w);
                                                  if (resolveTimeout) {
                                                      clearTimeout(resolveTimeout);
                                                      resolveTimeout = undefined;
                                                  }
                                              };
                                              if (!resolveImmediately) {
                                                  unsubscribeBoundsChanged = w.onBoundsChanged(function (win) {
                                                      if (!_this.areBoundsEqual(bounds, win)) {
                                                          return;
                                                      }
                                                      done();
                                                  });
                                              }
                                              _a.label = 1;
                                          case 1:
                                              _a.trys.push([1, 3, , 4]);
                                              return [4, this.execute("moveResize", { windowId: w.id, options: { bounds: bounds } })];
                                          case 2:
                                              _a.sent();
                                              return [3, 4];
                                          case 3:
                                              error_2 = _a.sent();
                                              rej(error_2);
                                              return [2];
                                          case 4:
                                              if (resolveImmediately) {
                                                  done();
                                                  return [2];
                                              }
                                              resolveTimeout = setTimeout(function () {
                                                  done();
                                              }, 1000);
                                              return [2];
                                      }
                                  });
                              }); })];
                      case 1: return [4, this.execute("moveResize", { windowId: w.id, options: { bounds: bounds } })];
                      case 2:
                          _a.sent();
                          _a.label = 3;
                      case 3: return [2, w];
                  }
              });
          });
      };
      GDExecutor.prototype.addFrameButton = function (w, buttonInfo) {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.execute("addButton", { windowId: w.id, options: buttonInfo }, "ButtonAdded")];
                      case 1:
                          _a.sent();
                          return [2, w];
                  }
              });
          });
      };
      GDExecutor.prototype.removeFrameButton = function (w, buttonId) {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.execute("removeButton", { windowId: w.id, options: buttonId }, "ButtonRemoved")];
                      case 1:
                          _a.sent();
                          return [2, w];
                  }
              });
          });
      };
      GDExecutor.prototype.activate = function (w) {
          return __awaiter(this, void 0, void 0, function () {
              var un, done, error_3;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                          _a.trys.push([0, 2, 3, 4]);
                          done = new Promise(function (resolve, reject) {
                              un = w.onFocusChanged(function () {
                                  resolve();
                              });
                          });
                          return [4, Promise.all([this.execute("activate", { windowId: w.id }, "FocusChanged"), done])];
                      case 1:
                          _a.sent();
                          return [2, w];
                      case 2:
                          error_3 = _a.sent();
                          throw error_3;
                      case 3:
                          if (un) {
                              un();
                          }
                          return [7];
                      case 4: return [2];
                  }
              });
          });
      };
      GDExecutor.prototype.focus = function (w) {
          return __awaiter(this, void 0, void 0, function () {
              var un, done, error_4;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                          _a.trys.push([0, 2, 3, 4]);
                          done = new Promise(function (resolve, reject) {
                              un = w.onFocusChanged(function () {
                                  resolve();
                              });
                          });
                          return [4, Promise.all([this.execute("focus", { windowId: w.id }, "FocusChanged"), done])];
                      case 1:
                          _a.sent();
                          return [2, w];
                      case 2:
                          error_4 = _a.sent();
                          throw error_4;
                      case 3:
                          if (un) {
                              un();
                          }
                          return [7];
                      case 4: return [2];
                  }
              });
          });
      };
      GDExecutor.prototype.maximizeRestore = function (w) {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.execute("maximizeRestore", { windowId: w.id }, "StateChanged")];
                      case 1:
                          _a.sent();
                          return [2, w];
                  }
              });
          });
      };
      GDExecutor.prototype.maximize = function (w) {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.execute("maximize", { windowId: w.id }, "StateChanged")];
                      case 1:
                          _a.sent();
                          return [2, w];
                  }
              });
          });
      };
      GDExecutor.prototype.restore = function (w) {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.execute("restore", { windowId: w.id }, "StateChanged")];
                      case 1:
                          _a.sent();
                          return [2, w];
                  }
              });
          });
      };
      GDExecutor.prototype.minimize = function (w) {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.execute("minimize", { windowId: w.id }, "StateChanged")];
                      case 1:
                          _a.sent();
                          return [2, w];
                  }
              });
          });
      };
      GDExecutor.prototype.collapse = function (w) {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.execute("collapse", { windowId: w.id }, "StateChanged")];
                      case 1:
                          _a.sent();
                          return [2, w];
                  }
              });
          });
      };
      GDExecutor.prototype.expand = function (w) {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.execute("expand", { windowId: w.id }, "StateChanged")];
                      case 1:
                          _a.sent();
                          return [2, w];
                  }
              });
          });
      };
      GDExecutor.prototype.toggleCollapse = function (w) {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.execute("toggleCollapse", { windowId: w.id }, "StateChanged")];
                      case 1:
                          _a.sent();
                          return [2, w];
                  }
              });
          });
      };
      GDExecutor.prototype.snap = function (w, targetWindow, direction) {
          return __awaiter(this, void 0, void 0, function () {
              var args;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                          args = {
                              targetWindowId: targetWindow.id
                          };
                          if (direction) {
                              args.snappingEdge = direction;
                          }
                          return [4, this.execute("snap", { windowId: w.id, options: args }, "CompositionChanged", "CompositionChanged-" + targetWindow.id)];
                      case 1:
                          _a.sent();
                          return [2, w];
                  }
              });
          });
      };
      GDExecutor.prototype.attachTab = function (w, sourceWindow, options) {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.execute("attachTab", {
                              windowId: w.id,
                              options: {
                                  index: options,
                                  sourceWindowId: sourceWindow.id,
                                  targetWindowId: w.id,
                              }
                          }, "WindowFrameAdded-" + sourceWindow.id, "WindowFrameRemoved-" + sourceWindow.id)];
                      case 1:
                          _a.sent();
                          return [2, w];
                  }
              });
          });
      };
      GDExecutor.prototype.detachTab = function (w, options) {
          var _a;
          return __awaiter(this, void 0, void 0, function () {
              var eventKeys;
              return __generator(this, function (_b) {
                  switch (_b.label) {
                      case 0:
                          eventKeys = ["WindowFrameRemoved", "WindowFrameAdded"];
                          if (!isUndefinedOrNull((_a = options) === null || _a === void 0 ? void 0 : _a.relativeTo)) {
                              eventKeys.push("CompositionChanged");
                              eventKeys.push("CompositionChanged-" + options.relativeTo);
                          }
                          else {
                              eventKeys.push("BoundsChanged");
                          }
                          return [4, this.execute.apply(this, __spreadArrays(["detachTab", { windowId: w.id, options: options }], eventKeys))];
                      case 1:
                          _b.sent();
                          return [2, w];
                  }
              });
          });
      };
      GDExecutor.prototype.setVisible = function (w, toBeVisible) {
          if (toBeVisible === void 0) { toBeVisible = true; }
          return __awaiter(this, void 0, void 0, function () {
              var command;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                          if (toBeVisible) {
                              command = "show";
                          }
                          else {
                              command = "hide";
                          }
                          return [4, this.execute(command, { windowId: w.id }, "VisibilityChanged")];
                      case 1:
                          _a.sent();
                          return [2, w];
                  }
              });
          });
      };
      GDExecutor.prototype.showLoader = function (w, loader) {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.execute("showLoadingAnimation", { windowId: w.id, options: loader })];
                      case 1:
                          _a.sent();
                          return [2, w];
                  }
              });
          });
      };
      GDExecutor.prototype.hideLoader = function (w) {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.execute("hideLoadingAnimation", { windowId: w.id })];
                      case 1:
                          _a.sent();
                          return [2, w];
                  }
              });
          });
      };
      GDExecutor.prototype.updateContext = function (w, context) {
          return __awaiter(this, void 0, void 0, function () {
              var un, contextWithoutUndefinedValues, done, error_5;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                          _a.trys.push([0, 2, 3, 4]);
                          contextWithoutUndefinedValues = this.swapUndefinedToNull(context);
                          done = new Promise(function (resolve, reject) {
                              un = w.onContextUpdated(function () {
                                  resolve();
                              });
                          });
                          return [4, Promise.all([this.execute("updateContext", {
                                      windowId: w.id, context: contextWithoutUndefinedValues, replace: Object.keys(w.context).length > 0 ? false : true
                                  }), done])];
                      case 1:
                          _a.sent();
                          return [2, w];
                      case 2:
                          error_5 = _a.sent();
                          throw error_5;
                      case 3:
                          if (un) {
                              un();
                          }
                          return [7];
                      case 4: return [2];
                  }
              });
          });
      };
      GDExecutor.prototype.lock = function (w) {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.execute("lockUnlock", { windowId: w.id, options: { lock: true } }, "FrameIsLockedChanged")];
                      case 1:
                          _a.sent();
                          return [2, w];
                  }
              });
          });
      };
      GDExecutor.prototype.unlock = function (w) {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.execute("lockUnlock", { windowId: w.id, options: { lock: false } }, "FrameIsLockedChanged")];
                      case 1:
                          _a.sent();
                          return [2, w];
                  }
              });
          });
      };
      GDExecutor.prototype.getIcon = function (w) {
          return __awaiter(this, void 0, void 0, function () {
              var result;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.execute("getIcon", {
                              windowId: w.id,
                              options: {}
                          })];
                      case 1:
                          result = _a.sent();
                          return [2, result.icon];
                  }
              });
          });
      };
      GDExecutor.prototype.setIcon = function (w, base64Image) {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.execute("setIcon", {
                              windowId: w.id,
                              options: {
                                  dataURL: base64Image
                              }
                          })];
                      case 1:
                          _a.sent();
                          return [2, w];
                  }
              });
          });
      };
      GDExecutor.prototype.setFrameColor = function (w, frameColor) {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.execute("setFrameColor", { windowId: w.id, options: { frameColor: frameColor } }, "FrameColorChanged")];
                      case 1:
                          _a.sent();
                          return [2, w];
                  }
              });
          });
      };
      GDExecutor.prototype.setTabHeaderVisible = function (w, toBeTabHeaderVisible) {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.execute("setTabHeaderVisible", {
                              windowId: w.id,
                              options: {
                                  toShow: toBeTabHeaderVisible
                              }
                          }, "TabHeaderVisibilityChanged")];
                      case 1:
                          _a.sent();
                          return [2, w];
                  }
              });
          });
      };
      GDExecutor.prototype.showPopup = function (targetWindow, options) {
          return __awaiter(this, void 0, void 0, function () {
              var optionsCopy, reformatedOptions;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                          if (!options) {
                              throw new Error("The options object is not valid!");
                          }
                          optionsCopy = __assign({}, options);
                          if (!optionsCopy.targetLocation) {
                              optionsCopy.targetLocation = "bottom";
                          }
                          reformatedOptions = __assign(__assign({}, optionsCopy), { popupBounds: optionsCopy.size, targetId: targetWindow.id, popupId: optionsCopy.windowId });
                          return [4, this.execute("showPopupWindow", {
                                  windowId: targetWindow.id,
                                  options: reformatedOptions
                              })];
                      case 1:
                          _a.sent();
                          return [2, targetWindow];
                  }
              });
          });
      };
      GDExecutor.prototype.createFlydown = function (windowId, options) {
          return __awaiter(this, void 0, void 0, function () {
              var optionsCopy, fullOptions;
              var _this = this;
              return __generator(this, function (_a) {
                  if (!options) {
                      throw new Error("The options object is not valid!");
                  }
                  optionsCopy = __assign({}, options);
                  if (!optionsCopy.horizontalOffset) {
                      optionsCopy.horizontalOffset = 0;
                  }
                  if (!optionsCopy.verticalOffset) {
                      optionsCopy.verticalOffset = 0;
                  }
                  fullOptions = this.reformatFlydownOptions(windowId, optionsCopy);
                  return [2, this.execute("setFlydownArea", { windowId: windowId, options: fullOptions }).then(function () {
                          var zoneIds = fullOptions.zones.map(function (z) { return z.id; });
                          fullOptions.zones.forEach(function (z) {
                              var callback = typeof (z.flydownSize) === "function" ?
                                  z.flydownSize : function () { return z.flydownSize; };
                              if (options.size instanceof Function && z.flydownSize) {
                                  callback = function (data, cancel) { return __awaiter(_this, void 0, void 0, function () {
                                      var result;
                                      return __generator(this, function (_a) {
                                          switch (_a.label) {
                                              case 0:
                                                  if (!(options.size instanceof Function)) return [3, 2];
                                                  return [4, options.size(data, cancel)];
                                              case 1:
                                                  result = _a.sent();
                                                  _a.label = 2;
                                              case 2:
                                                  if (!(z.flydownSize instanceof Function && z.flydownSize !== options.size)) return [3, 4];
                                                  return [4, z.flydownSize(data, cancel)];
                                              case 3: return [2, (_a.sent()) || result];
                                              case 4: return [2, result || z.flydownSize];
                                          }
                                      });
                                  }); };
                              }
                              _this._registry.clearKey(fullOptions.targetId + "_" + z.id);
                              _this._registry.add(fullOptions.targetId + "_" + z.id, callback);
                          });
                          return {
                              destroy: function () { return _this.clearFlydownArea(fullOptions.targetId, zoneIds); },
                              options: optionsCopy
                          };
                      })];
              });
          });
      };
      GDExecutor.prototype.setModalState = function (windowId, isModal) {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  return [2, this.execute("setModalState", { windowId: windowId, options: { isModal: isModal } })];
              });
          });
      };
      GDExecutor.prototype.handleFlydownBoundsRequested = function (targetId, data) {
          return __awaiter(this, void 0, void 0, function () {
              var cancelCallback, callbackData, responses, defaultResponse, response, responseOptions;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                          cancelCallback = function () { return data.cancel = true; };
                          callbackData = {
                              zoneId: data.flydownId,
                              flydownWindowBounds: data.flydownWindowBounds,
                              flydownWindowId: data.flydownWindowId,
                          };
                          return [4, Promise.all(this._registry.execute(targetId + "_" + data.flydownId, callbackData, cancelCallback))];
                      case 1:
                          responses = _a.sent();
                          if (responses.length === 1) {
                              defaultResponse = { height: 0, width: 0, top: 0, left: 0 };
                              response = typeof (responses[0]) === "object" && !Array.isArray(responses[0]) ? responses[0] : defaultResponse;
                              responseOptions = __assign(__assign({}, data), { flydownWindowBounds: response });
                              return [2, responseOptions];
                          }
                          return [2];
                  }
              });
          });
      };
      GDExecutor.prototype.zoomIn = function (window) {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.execute("zoomIn", {
                              windowId: window.id,
                          })];
                      case 1:
                          _a.sent();
                          return [2, window];
                  }
              });
          });
      };
      GDExecutor.prototype.zoomOut = function (window) {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.execute("zoomOut", {
                              windowId: window.id,
                          })];
                      case 1:
                          _a.sent();
                          return [2, window];
                  }
              });
          });
      };
      GDExecutor.prototype.setZoomFactor = function (window, zoomFactor) {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.execute("setZoomFactor", {
                              windowId: window.id,
                              options: {
                                  zoomFactor: zoomFactor
                              }
                          })];
                      case 1:
                          _a.sent();
                          return [2, window];
                  }
              });
          });
      };
      GDExecutor.prototype.showDevTools = function (window) {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.execute("showDevTools", {
                              windowId: window.id,
                          })];
                      case 1:
                          _a.sent();
                          return [2, window];
                  }
              });
          });
      };
      GDExecutor.prototype.capture = function (window, options) {
          return __awaiter(this, void 0, void 0, function () {
              var base64screenshot;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.execute("captureScreenshot", { windowId: window.id, options: __assign({}, options) })];
                      case 1:
                          base64screenshot = (_a.sent()).data;
                          return [2, base64screenshot];
                  }
              });
          });
      };
      GDExecutor.prototype.captureGroup = function (windowIds, options) {
          return __awaiter(this, void 0, void 0, function () {
              var base64screenshot;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.execute("captureGroupScreenshot", { windowId: windowIds[0], options: __assign({ groupWindowIds: windowIds }, options) })];
                      case 1:
                          base64screenshot = (_a.sent()).data;
                          return [2, base64screenshot];
                  }
              });
          });
      };
      GDExecutor.prototype.flash = function (resultWindow, options) {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.execute("flash", { windowId: resultWindow.id, options: __assign({}, options) })];
                      case 1:
                          _a.sent();
                          return [2, resultWindow];
                  }
              });
          });
      };
      GDExecutor.prototype.configure = function (windowId, options) {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  return [2, this.execute("configure", { windowId: windowId, options: __assign({}, options) })];
              });
          });
      };
      GDExecutor.prototype.print = function (resultWindow, options) {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.execute("print", { windowId: resultWindow.id, options: __assign({}, options) })];
                      case 1:
                          _a.sent();
                          return [2, resultWindow];
                  }
              });
          });
      };
      GDExecutor.prototype.printToPDF = function (resultWindow, options) {
          return __awaiter(this, void 0, void 0, function () {
              var filePath;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.execute("printToPDF", { windowId: resultWindow.id, options: __assign({}, options) })];
                      case 1:
                          filePath = (_a.sent()).filePath;
                          return [2, filePath];
                  }
              });
          });
      };
      GDExecutor.prototype.place = function (window, options) {
          return __awaiter(this, void 0, void 0, function () {
              var copy, _a;
              return __generator(this, function (_b) {
                  switch (_b.label) {
                      case 0:
                          copy = __assign({}, options);
                          if (!(!options.display || options.display === "current")) return [3, 2];
                          _a = copy;
                          return [4, window.getDisplay()];
                      case 1:
                          _a.display = _b.sent();
                          _b.label = 2;
                      case 2:
                          copy.display = copy.display.index + 1;
                          return [2, this.execute("place", { windowId: window.id, options: __assign({}, copy) })];
                  }
              });
          });
      };
      GDExecutor.prototype.refresh = function (resultWindow, ignoreCache) {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.execute("refresh", { windowId: resultWindow.id, options: { ignoreCache: ignoreCache } })];
                      case 1:
                          _a.sent();
                          return [2, resultWindow];
                  }
              });
          });
      };
      GDExecutor.prototype.configureWindow = function (resultWindow, options) {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.execute("configureWindow", { windowId: resultWindow.id, options: options })];
                      case 1:
                          _a.sent();
                          return [2, resultWindow];
                  }
              });
          });
      };
      GDExecutor.prototype.execute = function (command, options) {
          var eventKeys = [];
          for (var _i = 2; _i < arguments.length; _i++) {
              eventKeys[_i - 2] = arguments[_i];
          }
          return __awaiter(this, void 0, void 0, function () {
              var params, finishedResolve, error_6;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                          params = __assign(__assign({}, options), { command: command });
                          this._finished = new Promise(function (resolve) {
                              finishedResolve = resolve;
                          });
                          _a.label = 1;
                      case 1:
                          _a.trys.push([1, 6, 7, 8]);
                          if (!(window.glueDesktop.versionNum < 31200)) return [3, 3];
                          return [4, this.executeWithoutToken.apply(this, __spreadArrays([params], eventKeys))];
                      case 2: return [2, _a.sent()];
                      case 3: return [4, this.executeWithToken(params)];
                      case 4: return [2, _a.sent()];
                      case 5: return [3, 8];
                      case 6:
                          error_6 = _a.sent();
                          throw error_6;
                      case 7:
                          finishedResolve();
                          return [7];
                      case 8: return [2];
                  }
              });
          });
      };
      GDExecutor.prototype.ungroup = function (w, options) {
          return __awaiter(this, void 0, void 0, function () {
              var args;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                          args = {
                              windowId: w.id,
                              options: options
                          };
                          return [4, this.execute("ungroup", args)];
                      case 1:
                          _a.sent();
                          return [2, w];
                  }
              });
          });
      };
      GDExecutor.prototype.onClosing = function (callback, id) {
          var glue42gd = typeof window !== "undefined" && window.glue42gd;
          if (glue42gd) {
              return glue42gd.addCloseHandler(callback, id);
          }
      };
      GDExecutor.prototype.onRefreshing = function (callback, id) {
          var glue42gd = typeof window !== "undefined" && window.glue42gd;
          if (glue42gd) {
              return glue42gd.addRefreshHandler(callback, id);
          }
      };
      GDExecutor.prototype.reformatFlydownOptions = function (windowId, options) {
          var assignGeneralIfUnassigned = function (zone, prop) {
              if (options[prop] && (zone[prop] === undefined || zone[prop] === null)) {
                  var valueFromOptions = options[prop];
                  zone[prop] = valueFromOptions;
              }
          };
          var zones = options.zones.map(function (z) {
              assignGeneralIfUnassigned(z, "windowId");
              assignGeneralIfUnassigned(z, "targetLocation");
              if (options.size && (z.flydownSize === undefined || z.flydownSize === null)) {
                  z.flydownSize = options.size;
              }
              z.flydownBounds = z.flydownSize;
              z.flydownId = z.windowId;
              if (!z.targetLocation) {
                  z.targetLocation = "bottom";
              }
              return z;
          });
          return __assign(__assign({}, options), { zones: zones, targetId: windowId, flydownBounds: options.size, flydownActiveArea: options.activeArea });
      };
      GDExecutor.prototype.clearFlydownArea = function (windowId, areaIds) {
          var _this = this;
          return this.execute("clearFlydownWindowArea", {
              windowId: windowId,
              options: {}
          }).then(function () {
              areaIds.forEach(function (id) {
                  _this._registry.clearKey(windowId + "_" + id);
              });
          });
      };
      GDExecutor.prototype.executeWithoutToken = function (params) {
          var _this = this;
          var eventKeys = [];
          for (var _i = 1; _i < arguments.length; _i++) {
              eventKeys[_i - 1] = arguments[_i];
          }
          var _a;
          var uns = [];
          var executed = (_a = eventKeys) === null || _a === void 0 ? void 0 : _a.filter(function (k) { return !isUndefinedOrNull(k); }).map(function (key) {
              return new Promise(function (r) {
                  var _a = key.split("-"), type = _a[0], _b = _a[1], windowId = _b === void 0 ? params.windowId : _b;
                  uns.push(_this._registry.add("event", function (data) {
                      if (data.type === type && data.windowId === windowId) {
                          r();
                      }
                  }));
              });
          });
          var action = new Promise(function (resolve, reject) {
              _this.agm.invoke("T42.Wnd.Execute", params, _this.agmTarget)
                  .then(function (i) {
                  if (i.returned && i.returned.errorMsg) {
                      reject(i);
                  }
                  else {
                      resolve(i.returned);
                  }
              })
                  .catch(function (e) { return reject(e); });
          });
          return Promise.all(__spreadArrays([action], executed))
              .then(function (r) {
              return r[0];
          })
              .finally(function () {
              uns.forEach(function (un) { return un(); });
          });
      };
      GDExecutor.prototype.executeWithToken = function (options) {
          return __awaiter(this, void 0, void 0, function () {
              var un, token_1, event_1, execute, result, error_7;
              var _this = this;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                          _a.trys.push([0, 2, 3, 4]);
                          token_1 = shortid$1.generate();
                          event_1 = new Promise(function (r) {
                              un = _this._registry.add("event", function (data) {
                                  if (data.token === token_1) {
                                      r();
                                  }
                              });
                          });
                          execute = new Promise(function (resolve, reject) {
                              options.token = token_1;
                              _this.agm.invoke("T42.Wnd.Execute", options, _this.agmTarget)
                                  .then(function (i) {
                                  if (i.returned && i.returned.errorMsg) {
                                      reject(i);
                                  }
                                  else {
                                      resolve(i.returned);
                                  }
                              })
                                  .catch(function (i) {
                                  reject(i);
                              });
                          });
                          return [4, Promise.all([execute, event_1])];
                      case 1:
                          result = _a.sent();
                          return [2, result[0]];
                      case 2:
                          error_7 = _a.sent();
                          throw error_7;
                      case 3:
                          if (un) {
                              un();
                          }
                          return [7];
                      case 4: return [2];
                  }
              });
          });
      };
      GDExecutor.prototype.areBoundsEqual = function (requested, w) {
          var current = w.bounds;
          var settings = w.settings;
          var height = requested.height;
          var width = requested.width;
          if (requested.height < settings.minHeight) {
              height = settings.minHeight;
          }
          if (requested.height > settings.maxHeight) {
              height = settings.maxHeight;
          }
          if (requested.width < settings.minWidth) {
              width = settings.minWidth;
          }
          if (requested.width > settings.maxWidth) {
              width = settings.maxWidth;
          }
          var areHeightsEqual = height ? current.height === height : true;
          var areWidthsEqual = width ? current.width === width : true;
          var areLeftsEqual = requested.left ? current.left === requested.left : true;
          var areTopsEqual = requested.top ? current.top === requested.top : true;
          return areHeightsEqual && areWidthsEqual && areLeftsEqual && areTopsEqual;
      };
      GDExecutor.prototype.swapUndefinedToNull = function (context) {
          try {
              var copy = {};
              for (var _i = 0, _a = Object.keys(context); _i < _a.length; _i++) {
                  var key = _a[_i];
                  var value = context[key];
                  if (typeof value === "undefined") {
                      value = null;
                  }
                  copy[key] = value;
              }
              return copy;
          }
          catch (_b) {
              return context;
          }
      };
      return GDExecutor;
  }());
  var executor = new GDExecutor();

  function getWindowsByTabGroupId(windowId, tabGroupId) {
      var windows = windowStore.list;
      return Object.keys(windows).reduce(function (memo, id) {
          var win = windows[id];
          if (win.API.tabGroupId === tabGroupId && win.API.id !== windowId) {
              memo.push(win);
          }
          return memo;
      }, []);
  }

  var GDEnvironment = (function () {
      function GDEnvironment(agm, logger, appManagerGetter, displayAPIGetter, instance, wndId) {
          this._registry = lib$2();
          this._waitTimeout = 10000;
          this._agm = agm;
          this._logger = logger.subLogger("gd-env");
          this._agmInstance = this.normalizeInstance(instance);
          this._windowId = wndId;
          this._appManagerGetter = appManagerGetter;
          this._displayAPIGetter = displayAPIGetter;
      }
      GDEnvironment.prototype.init = function () {
          var _this = this;
          return new Promise(function (resolve, reject) {
              if (typeof _this._agmInstance === "undefined") {
                  _this._agmInstance = "best";
              }
              _this._agm.registerAsync("T42.Wnd.OnEventWithResponse", function (args, caller, success, err) {
                  _this.respondToEvent(args).then(success).catch(err);
              });
              new Promise(function (streamResolve, streamReject) {
                  _this._agm.subscribe("T42.Wnd.OnEvent", {
                      waitTimeoutMs: _this._waitTimeout,
                      target: _this._agmInstance,
                      onData: function (streamData) {
                          _this.updateWindow(streamData.data, resolve);
                          executor.handleEvent(streamData.data);
                      },
                      onConnected: function (instance) {
                          _this._agmInstance = _this.normalizeInstance(instance);
                          executor.init(_this._agm, _this._agmInstance);
                      }
                  }).catch(function (err) {
                      reject("Can not subscribe for stream T42.Wnd.OnEvent. Err: " + err);
                  });
              });
          });
      };
      Object.defineProperty(GDEnvironment.prototype, "executor", {
          get: function () {
              return executor;
          },
          enumerable: true,
          configurable: true
      });
      GDEnvironment.prototype.open = function (name, url, options) {
          options = options || {};
          var copyOptions = __assign({}, options);
          if (copyOptions.relativeTo !== undefined && typeof copyOptions.relativeTo !== "string") {
              copyOptions.relativeTo = copyOptions.relativeTo.id || "";
          }
          copyOptions.name = name;
          copyOptions.url = url;
          copyOptions.windowState = options.windowState || options.state;
          delete copyOptions.state;
          return this.executor.open(copyOptions);
      };
      GDEnvironment.prototype.createFlydown = function (windowId, options) {
          return this.executor.createFlydown(windowId, options);
      };
      GDEnvironment.prototype.showPopup = function (windowId, options) {
          return __awaiter(this, void 0, void 0, function () {
              var window;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                          window = windowStore.get(windowId);
                          return [4, this.executor.showPopup(window.API, options)];
                      case 1:
                          _a.sent();
                          return [2];
                  }
              });
          });
      };
      GDEnvironment.prototype.tabAttached = function (callback) {
          return this._registry.add("tab-attached", callback);
      };
      GDEnvironment.prototype.tabDetached = function (callback) {
          return this._registry.add("tab-detached", callback);
      };
      GDEnvironment.prototype.onWindowFrameColorChanged = function (callback) {
          return this._registry.add("frame-color-changed", callback);
      };
      GDEnvironment.prototype.onEvent = function (callback) {
          return this._registry.add("window-event", callback);
      };
      GDEnvironment.prototype.my = function () {
          return this._windowId;
      };
      GDEnvironment.prototype.execute = function (command, windowId, options) {
          return this._agm.invoke("T42.Wnd.Execute", {
              command: command,
              options: options,
              windowId: windowId,
          });
      };
      GDEnvironment.prototype.onCompositionChanged = function (callback) {
          return this._registry.add("composition-changed", callback);
      };
      GDEnvironment.prototype.onGroupHeaderVisibilityChanged = function (callback) {
          return this._registry.add("group-header-changed", callback);
      };
      GDEnvironment.prototype.onWindowGotFocus = function (callback) {
          return this._registry.add("got-focus", callback);
      };
      GDEnvironment.prototype.onWindowLostFocus = function (callback) {
          return this._registry.add("lost-focus", callback);
      };
      GDEnvironment.prototype.normalizeInstance = function (instance) {
          if (!instance) {
              return undefined;
          }
          return {
              application: instance.application,
              machine: instance.machine,
              user: instance.user,
          };
      };
      GDEnvironment.prototype.respondToEvent = function (args) {
          if (args.type === "ShowFlydownBoundsRequested") {
              return this.executor.handleFlydownBoundsRequested(args.data.windowId, args.data);
          }
          return Promise.reject("There isn't a handler for " + args.type);
      };
      GDEnvironment.prototype.updateWindow = function (windowInfo, readyResolve) {
          var _this = this;
          var extendedStreamEvent = this.getExtendedStreamEvent(windowInfo);
          if (windowInfo.type === "Snapshot") {
              var windowInfoFullInfoEvent = windowInfo;
              windowInfoFullInfoEvent.windows.forEach(function (w) {
                  var existingWindow = windowStore.get(w.id);
                  if (existingWindow) {
                      existingWindow.Events.handleUpdate(_this.mapToWindowConstructorOptions(w));
                  }
                  else {
                      var win = _this.createWindow(w.id, w);
                      windowStore.markReadyToShow(win.API.id);
                  }
                  _this._registry.execute("window-event", extendedStreamEvent);
              });
              readyResolve(this);
              return;
          }
          if (windowInfo.type === "CommandExecuted") {
              this._registry.execute("window-event", extendedStreamEvent);
              return;
          }
          if (windowInfo.type === "Created") {
              var windowInfoCreatedEvent = windowInfo;
              var win = this.createWindow(windowInfoCreatedEvent.windowId, windowInfoCreatedEvent.data || {});
              windowStore.setReadyState(win.API.id);
              this._registry.execute("window-event", extendedStreamEvent);
              return;
          }
          var windowObjectAndEvents = windowStore.get(windowInfo.windowId);
          if (!windowObjectAndEvents) {
              this._logger.error("received update for unknown window. Stream:', " + JSON.stringify(windowInfo, null, 4));
              return;
          }
          var theWindow = windowObjectAndEvents.API;
          var theWindowEvents = windowObjectAndEvents.Events;
          if (windowInfo.type === "BoundsChanged") {
              var windowInfoBoundsChangedEvent = windowInfo;
              theWindowEvents.handleBoundsChanged(windowInfoBoundsChangedEvent.data);
          }
          if (windowInfo.type === "UrlChanged") {
              var windowInfoUrlChangedEvent = windowInfo;
              windowStore.setUrlChangedState(windowInfoUrlChangedEvent.windowId);
              theWindowEvents.handleUrlChanged(windowInfoUrlChangedEvent.data);
          }
          if (windowInfo.type === "TitleChanged") {
              var windowInfoTitleChanged = windowInfo;
              theWindowEvents.handleTitleChanged(windowInfoTitleChanged.data);
          }
          if (windowInfo.type === "IsStickyChanged") {
              var windowInfoIsStickyChangedChanged = windowInfo;
              theWindowEvents.handleIsStickyChanged(windowInfoIsStickyChangedChanged.data);
          }
          if (windowInfo.type === "VisibilityChanged") {
              theWindowEvents.handleVisibilityChanged(windowInfo.data);
          }
          if (windowInfo.type === "ContextChanged") {
              theWindowEvents.handleContextUpdated(windowInfo.data);
          }
          if (windowInfo.type === "StateChanged") {
              theWindowEvents.handleWindowChangeState(windowInfo.data);
          }
          if (windowInfo.type === "FrameColorChanged") {
              theWindowEvents.handleFrameColorChanged(windowInfo.data);
              this._registry.execute("frame-color-changed", theWindow);
          }
          if (windowInfo.type === "CompositionChanged") {
              var windowInfoCompositionChanged = windowInfo;
              theWindowEvents.handleCompositionChanged(windowInfoCompositionChanged.data);
              this._registry.execute("composition-changed", windowInfoCompositionChanged.data);
          }
          if (windowInfo.type === "GroupHeaderVisibilityChanged") {
              var info = windowInfo;
              theWindowEvents.handleGroupHeaderVisibilityChanged(info.data.groupHeaderVisible);
              this._registry.execute("group-header-changed", info.data);
          }
          if (windowInfo.type === "FocusChanged") {
              var windowInfoFocusChanged = windowInfo;
              this.focusChanged(theWindowEvents, theWindow, windowInfoFocusChanged.data);
          }
          if (windowInfo.type === "WindowFrameChanged") {
              theWindowEvents.handleFrameAttached(windowInfo.data.frameId, windowInfo.data.isTabHeaderVisible);
              this._registry.execute("frame-changed");
          }
          if (windowInfo.type === "WindowFrameAdded") {
              var winsToBeNotified_1 = getWindowsByTabGroupId(theWindow.id, windowInfo.data.frameId);
              theWindowEvents.handleAttached(windowInfo.data.frameId, windowInfo.data.isTabHeaderVisible, winsToBeNotified_1)
                  .then(function () { return __awaiter(_this, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                      switch (_a.label) {
                          case 0:
                              if (!(winsToBeNotified_1.length > 0)) return [3, 2];
                              return [4, executor.finished];
                          case 1:
                              _a.sent();
                              this._registry.execute("tab-attached", theWindow, windowInfo.data.frameId, windowInfo.data.isTabHeaderVisible);
                              _a.label = 2;
                          case 2: return [2];
                      }
                  });
              }); });
          }
          if (windowInfo.type === "WindowFrameRemoved") {
              var oldTabGroupId = theWindow.tabGroupId;
              var winsToBeNotified_2 = getWindowsByTabGroupId(theWindow.id, oldTabGroupId);
              theWindowEvents.handleDetached(winsToBeNotified_2)
                  .then(function () { return __awaiter(_this, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                      switch (_a.label) {
                          case 0:
                              if (!(winsToBeNotified_2.length > 0)) return [3, 2];
                              return [4, executor.finished];
                          case 1:
                              _a.sent();
                              this._registry.execute("tab-detached", theWindow, windowInfo.data.frameId, theWindow.tabGroupId);
                              _a.label = 2;
                          case 2: return [2];
                      }
                  });
              }); });
          }
          if (windowInfo.type === "TabHeaderVisibilityChanged") {
              theWindowEvents.handleTabHeaderVisibilityChanged(windowInfo.data.isTabHeaderVisible);
          }
          if (windowInfo.type === "FrameSelectionChanged") {
              theWindowEvents.handleFrameSelectionChanged(windowInfo.data.newWindowId, windowInfo.data.prevWindowId);
          }
          if (windowInfo.type === "ButtonClicked") {
              theWindowEvents.handleFrameButtonClicked(windowInfo.data);
          }
          if (windowInfo.type === "ButtonAdded") {
              theWindowEvents.handleFrameButtonAdded(windowInfo.data);
          }
          if (windowInfo.type === "ButtonRemoved") {
              theWindowEvents.handleFrameButtonRemoved(windowInfo.data);
          }
          if (windowInfo.type === "WindowZoomFactorChanged") {
              theWindowEvents.handleZoomFactorChanged(windowInfo.data);
          }
          if (windowInfo.type === "Closed") {
              windowStore.remove(windowObjectAndEvents);
              theWindowEvents.handleWindowClose();
          }
          if (windowInfo.type === "FrameIsLockedChanged") {
              theWindowEvents.handleFrameIsLockedChanged(windowInfo.data);
          }
          if (windowInfo.type === "PlacementSettingsChanged") {
              theWindowEvents.handlePlacementSettingsChanged(windowInfo.data);
          }
          this._registry.execute("window-event", extendedStreamEvent);
      };
      GDEnvironment.prototype.createWindow = function (windowId, options) {
          windowStore.get(windowId);
          var windowObjAndEvents = windowFactory(windowId, this.mapToWindowConstructorOptions(options), executor, this._logger, this._appManagerGetter, this._displayAPIGetter, this._agm);
          windowStore.add(windowObjAndEvents);
          return windowObjAndEvents;
      };
      GDEnvironment.prototype.focusChanged = function (theWindowEvents, theWindow, focus) {
          theWindowEvents.handleFocusChanged(focus);
          if (focus) {
              this._registry.execute("got-focus", theWindow);
          }
          else {
              this._registry.execute("lost-focus", theWindow);
          }
      };
      GDEnvironment.prototype.mapToWindowConstructorOptions = function (args) {
          return {
              name: args.name,
              context: args.context,
              bounds: args.bounds,
              url: args.url,
              title: args.title,
              isVisible: args.isVisible,
              focus: args.isFocused,
              state: args.state,
              frameColor: args.frameColor,
              groupId: args.groupId,
              neighbours: args.neighbors,
              isFocused: args.isFocused,
              isGroupHeaderVisible: args.groupHeaderVisible,
              isCollapsed: args.isCollapsed,
              tabGroupId: args.frameId,
              mode: args.mode,
              isTabHeaderVisible: args.isTabHeaderVisible,
              isTabSelected: args.isActiveTab,
              settings: args.settings,
              windowType: args.windowType,
              zoomFactor: args.zoomFactor,
              isLocked: args.isLocked,
              placementSettings: args.placementSettings,
              isSticky: args.isSticky,
              tabIndex: args.tabIndex
          };
      };
      GDEnvironment.prototype.getExtendedStreamEvent = function (streamEvent) {
          try {
              if (!streamEvent.windowId) {
                  return streamEvent;
              }
              var window_1 = windowStore.get(streamEvent.windowId);
              if (!window_1) {
                  return streamEvent;
              }
              var result = __assign({ state: streamEvent.type, windowName: window_1.API.name }, streamEvent);
              if (result.state === "WindowFrameAdded") {
                  result.state = "TabAttached";
              }
              if (result.state === "StateChanged") {
                  result.state = result.data.charAt(0).toUpperCase() + result.data.slice(1);
              }
              if (result.state === "ButtonAdded") {
                  result.state = "FrameButtonAdded";
              }
              if (result.state === "ButtonRemoved") {
                  result.state = "FrameButtonRemoved";
              }
              return result;
          }
          catch (error) {
              return streamEvent;
          }
      };
      return GDEnvironment;
  }());

  var envDetector = (function (agm, logger, appManagerGetter, displayAPIGetter, gdMajorVersion) {
      var _logger = logger;
      return new Promise(function (resolve, reject) {
          if (gdMajorVersion === 2) {
              _logger.trace("running in HC");
              throw new Error("GD2 not supported");
          }
          else if (gdMajorVersion >= 3) {
              _logger.trace("running in GD 3");
              var gd = new GDEnvironment(agm, _logger, appManagerGetter, displayAPIGetter, undefined, window.glue42gd.windowId);
              gd.init()
                  .then(resolve)
                  .catch(reject);
          }
          else {
              var gdPromise = new GDEnvironment(agm, _logger, appManagerGetter, displayAPIGetter).init();
              var wait = function (ms) { return new Promise(function (res, rej) { return setTimeout(function () { rej("timeout waiting for streams"); }, ms); }); };
              Promise.race([gdPromise, wait(10000)])
                  .then(resolve)
                  .catch(reject);
          }
      });
  });

  var groupFactory = (function (id, executor) {
      var _registry = lib$2();
      var _windowsId = [];
      function addWindow(winId) {
          return __awaiter(this, void 0, void 0, function () {
              var win;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                          if (!(_windowsId.indexOf(winId) === -1)) return [3, 2];
                          _windowsId.push(winId);
                          win = windowStore.get(winId);
                          win.Events.handleGroupChanged(groupObject, undefined);
                          return [4, executor.finished];
                      case 1:
                          _a.sent();
                          _registry.execute("window-added", groupObject, win.API);
                          _a.label = 2;
                      case 2: return [2];
                  }
              });
          });
      }
      function removeWindow(win) {
          return __awaiter(this, void 0, void 0, function () {
              var index;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                          index = _windowsId.indexOf(win.API.id);
                          if (!(index !== -1)) return [3, 2];
                          _windowsId.splice(index, 1);
                          win.Events.handleGroupChanged(undefined, groupObject);
                          return [4, executor.finished];
                      case 1:
                          _a.sent();
                          _registry.execute("window-removed", groupObject, win.API);
                          _a.label = 2;
                      case 2: return [2];
                  }
              });
          });
      }
      function find(window, success, error) {
          var winId;
          if (typeof window === "string") {
              winId = window;
          }
          else if (!isUndefinedOrNull(window)) {
              winId = window.id;
          }
          var win = _mapToWindowObject(winId);
          if (win) {
              if (typeof success === "function") {
                  success(win);
              }
              return win;
          }
          else {
              if (typeof error === "function") {
                  error("No window with ID: " + winId);
              }
          }
      }
      function windows(success) {
          var mappedWindows = _mapToWindowObjects();
          if (typeof success === "function") {
              success(mappedWindows);
          }
          return mappedWindows;
      }
      function execute(command, options) {
          var keys = [];
          for (var _i = 2; _i < arguments.length; _i++) {
              keys[_i - 2] = arguments[_i];
          }
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, executor.execute.apply(executor, __spreadArrays([command, options], keys))];
                      case 1:
                          _a.sent();
                          return [2, groupObject];
                  }
              });
          });
      }
      function handleGroupHeaderVisibilityChanged(windowInfo) {
          _registry.execute("header-visibility-changed", groupObject);
      }
      function _mapToWindowObjects() {
          var winObjects = [];
          _windowsId.forEach(function (winId) {
              var windowObject = _mapToWindowObject(winId);
              if (typeof windowObject !== "undefined") {
                  winObjects.push(windowObject);
              }
          });
          return winObjects;
      }
      function _mapToWindowObject(windowId) {
          return windowStore.get(windowId) ? windowStore.get(windowId).API : undefined;
      }
      function _getGroupHeaderVisibility() {
          var windowWithHiddenHeader = _mapToWindowObjects().find(function (w) { return !w.isGroupHeaderVisible; });
          var _isGroupHeaderVisible = windowWithHiddenHeader === undefined;
          return _isGroupHeaderVisible;
      }
      function onHeaderVisibilityChanged(callback) {
          return _registry.add("header-visibility-changed", callback);
      }
      function onWindowAdded(callback) {
          return _registry.add("window-added", callback);
      }
      function onWindowRemoved(callback) {
          return _registry.add("window-removed", callback);
      }
      var groupObject = {
          id: id,
          get windows() {
              return windows();
          },
          find: find,
          get isHeaderVisible() {
              return _getGroupHeaderVisibility();
          },
          showHeader: function (success, error) {
              return Utils$1.callbackifyPromise(function () {
                  return execute.apply(void 0, __spreadArrays(["setGroupHeaderVisibility", { windowId: _windowsId[0], options: { toShow: true } }], _windowsId.map(function (w) { return "GroupHeaderVisibilityChanged-" + w; })));
              }, success, error);
          },
          hideHeader: function (success, error) {
              return Utils$1.callbackifyPromise(function () {
                  return execute.apply(void 0, __spreadArrays(["setGroupHeaderVisibility", { windowId: _windowsId[0], options: { toShow: false } }], _windowsId.map(function (w) { return "GroupHeaderVisibilityChanged-" + w; })));
              }, success, error);
          },
          getTitle: function () { return __awaiter(void 0, void 0, void 0, function () {
              var r;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, executor.execute("getGroupTitle", { windowId: _windowsId[0] })];
                      case 1:
                          r = _a.sent();
                          return [2, r.title];
                  }
              });
          }); },
          setTitle: function (title) { return __awaiter(void 0, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  if (isNullOrWhiteSpace(title)) {
                      throw new Error("`title` must not be null or undefined.");
                  }
                  return [2, execute("setGroupTitle", { windowId: _windowsId[0], options: { title: title } })];
              });
          }); },
          capture: function (captureOptions) {
              return executor.captureGroup(_windowsId, captureOptions);
          },
          maximize: function (success, error) {
              return Utils$1.callbackifyPromise(function () {
                  return execute.apply(void 0, __spreadArrays(["maximizeGroup", { windowId: _windowsId[0] }], _windowsId.map(function (w) { return "StateChanged-" + w; })));
              }, success, error);
          },
          restore: function (success, error) {
              return Utils$1.callbackifyPromise(function () {
                  return execute.apply(void 0, __spreadArrays(["restoreGroup", { windowId: _windowsId[0] }], _windowsId.map(function (w) { return "StateChanged-" + w; })));
              }, success, error);
          },
          onHeaderVisibilityChanged: onHeaderVisibilityChanged,
          onWindowAdded: onWindowAdded,
          onWindowRemoved: onWindowRemoved,
      };
      var internal = {
          get windows() {
              return _windowsId;
          },
          addWindow: addWindow,
          removeWindow: removeWindow,
          handleGroupHeaderVisibilityChanged: handleGroupHeaderVisibilityChanged,
      };
      return {
          groupAPI: groupObject,
          groupInternal: internal,
      };
  });

  var groupsFactory = (function (environment, logger) {
      var _registry = lib$2();
      var _groups = {};
      var heardForWindowsCounter = -1;
      var windows = windowStore.list;
      Object.keys(windows).forEach(function (k) {
          var win = windows[k];
          var groupId = win.API.groupId;
          var winId = win.API.id;
          if (!isNullOrWhiteSpace(groupId)) {
              addWindow(groupId, winId);
          }
      });
      windowStore.onRemoved(function (w) {
          var group = findGroupWrapperByWindow(w.API);
          removeWindow(group, w);
      });
      environment.onCompositionChanged(function (windowInfo) {
          handleCompositionChanged(windowInfo);
      });
      environment.onGroupHeaderVisibilityChanged(function (windowInfo) {
          var windowId = windowInfo.windowId;
          var group = findGroupByWindow(windowId);
          if (typeof group !== "undefined") {
              var groupEvents = _groups[group.id];
              if (heardForWindowsCounter === -1) {
                  heardForWindowsCounter = group.windows.length;
              }
              heardForWindowsCounter--;
              if (heardForWindowsCounter === 0) {
                  heardForWindowsCounter = -1;
                  groupEvents.groupInternal.handleGroupHeaderVisibilityChanged(windowInfo);
              }
          }
      });
      function my() {
          return findGroupByWindow(environment.my());
      }
      function list(success) {
          var result = Object.keys(_groups).map(function (groupId) {
              if (_groups[groupId]) {
                  return _groups[groupId].groupAPI;
              }
          });
          if (typeof success === "function") {
              success(result);
          }
          return result;
      }
      function findGroupByWindow(winId, success, error) {
          var windowId;
          if (typeof winId === "string") {
              windowId = winId;
          }
          else if (!isUndefinedOrNull(winId)) {
              windowId = winId.id;
          }
          var result = Object.values(_groups).find(function (groupObj) {
              var group = groupObj.groupAPI;
              var wins = group.windows.filter(function (w) { return w.id === windowId; });
              return wins.length;
          });
          if (result) {
              if (typeof success === "function") {
                  success(result.groupAPI);
              }
              return result.groupAPI;
          }
          else {
              if (typeof error === "function") {
                  error("Cannot find the group of the window.");
              }
          }
      }
      function onWindowMoved(callback) {
          return _registry.add("window-moved", callback);
      }
      function createOrGet(groupId) {
          if (!_groups.hasOwnProperty(groupId)) {
              var createdGroup = groupFactory(groupId, environment.executor);
              _groups[groupId] = createdGroup;
              return createdGroup;
          }
          else {
              return _groups[groupId];
          }
      }
      function deleteIfEmpty(group) {
          if (group.groupAPI.windows.length === 0) {
              delete _groups[group.groupAPI.id];
          }
      }
      function addWindow(groupId, winId) {
          var group = createOrGet(groupId);
          group.groupInternal.addWindow(winId);
          return group;
      }
      function removeWindow(group, win) {
          if (!group) {
              return;
          }
          group.groupInternal.removeWindow(win);
          deleteIfEmpty(group);
      }
      function handleCompositionChanged(state) {
          var groupId = state.groupId;
          var windowId = state.windowId;
          var win = windowStore.get(windowId);
          if (!win) {
              return;
          }
          var currentGroup = findGroupWrapperByWindow(win.API);
          if (isUndefinedOrNull(groupId)) {
              removeWindow(currentGroup, win);
              return;
          }
          if (isUndefinedOrNull(currentGroup) && !isUndefinedOrNull(groupId)) {
              addWindow(groupId, win.API.id);
              return;
          }
          if (currentGroup.groupAPI.id !== groupId) {
              moveWindow(win, currentGroup.groupAPI.id, groupId);
          }
      }
      function moveWindow(win, from, to) {
          var winId = win.API.id;
          var fromGroup = _groups[from];
          removeWindow(fromGroup, win);
          var toGroup = addWindow(to, winId);
          win.Events.handleGroupChanged(toGroup.groupAPI, fromGroup.groupAPI);
          _registry.execute("window-moved", winId, from, to);
      }
      function findGroupWrapperByWindow(winId) {
          var windowId;
          if (typeof winId === "string") {
              windowId = winId;
          }
          else if (!isUndefinedOrNull(winId)) {
              windowId = winId.id;
          }
          return Object.values(_groups).find(function (groupObj) {
              var groupInternal = groupObj.groupInternal;
              var wins = groupInternal.windows.filter(function (id) { return id === windowId; });
              return wins.length;
          });
      }
      var groups = {
          get my() {
              return my();
          },
          list: list,
          findGroupByWindow: findGroupByWindow,
      };
      var events = { onWindowMoved: onWindowMoved };
      return {
          groupsAPI: groups,
          groupsEvents: events,
      };
  });

  var WindowsFactory = (function (agm, logger, appManagerGetter, displayAPIGetter, gdMajorVersion) {
      var _registry = lib$2();
      var _logger = logger;
      var groups;
      var environment;
      windowStore.init(_logger);
      var isReady = new Promise(function (resolve, reject) {
          envDetector(agm, _logger, appManagerGetter, displayAPIGetter, gdMajorVersion)
              .then(function (env) {
              environment = env;
              groups = groupsFactory(env);
              resolve();
          })
              .catch(function (e) {
              var err = "Environment detector fails with: " + e;
              _logger.error(err);
              reject(err);
          });
      });
      function ready() {
          return isReady;
      }
      function my() {
          var myWindow = windowStore.getIfReady(environment.my());
          return myWindow ? myWindow.API : undefined;
      }
      function open(name, url, options, success, error) {
          return Utils$1.callbackifyPromise(function () {
              if (isNullOrWhiteSpace(name)) {
                  throw new Error("The window name is missing.");
              }
              if (isNullOrWhiteSpace(url)) {
                  throw new Error("The window URL is missing.");
              }
              if (!isUndefinedOrNull(options)) {
                  var optionsAsAny = options;
                  for (var _i = 0, _a = ["minHeight", "maxHeight", "minWidth", "maxWidth", "width", "height", "top", "left"]; _i < _a.length; _i++) {
                      var prop = _a[_i];
                      if (prop in optionsAsAny) {
                          var value = optionsAsAny[prop];
                          if (isUndefinedOrNull(value)) {
                              delete optionsAsAny[prop];
                              continue;
                          }
                          if (!isNumber(value)) {
                              var errMessage = prop + " must be a number";
                              throw new Error(errMessage);
                          }
                          if (optionsAsAny[prop] === "width" || optionsAsAny[prop] === "height") {
                              if (value <= 0) {
                                  var errMessage = prop + " must be a positive number";
                                  throw new Error(errMessage);
                              }
                          }
                      }
                  }
              }
              return environment.open(name, url, options);
          }, success, error);
      }
      function find(name, success, error) {
          var windows = windowStore.list;
          var windowsForListing = Object.keys(windows).reduce(function (memo, winId) {
              var _a, _b;
              var window = windows[winId];
              if (((_b = (_a = window) === null || _a === void 0 ? void 0 : _a.API) === null || _b === void 0 ? void 0 : _b.name) === name) {
                  memo.push(window.API);
              }
              return memo;
          }, []);
          var win = windowsForListing[0];
          if (win) {
              if (typeof success === "function") {
                  success(windowsForListing[0]);
              }
              return windowsForListing[0];
          }
          else {
              if (typeof error === "function") {
                  error("There is no window with name:" + name);
              }
          }
      }
      function findById(id, success, error) {
          var windows = windowStore.list;
          var windowsForListing = Object.keys(windows).reduce(function (memo, winId) {
              var window = windows[winId];
              if (typeof window !== "undefined" && window.API.id === id) {
                  memo.push(window.API);
              }
              return memo;
          }, []);
          var win = windowsForListing[0];
          if (win) {
              if (typeof success === "function") {
                  success(windowsForListing[0]);
              }
              return windowsForListing[0];
          }
          else {
              if (typeof error === "function") {
                  error("There is no window with such id:" + id);
              }
          }
      }
      function list(success) {
          var windows = windowStore.list;
          var windowsForListing = Object.keys(windows)
              .map(function (k) {
              return windows[k].API;
          });
          if (typeof success !== "function") {
              return windowsForListing;
          }
          success(windowsForListing);
      }
      function configure(options) {
          var win = my();
          var winId = win ? win.id : "";
          return executor.configure(winId, options);
      }
      function windowAdded(callback) {
          return _registry.add("window-added", callback);
      }
      function windowRemoved(callback) {
          return _registry.add("window-removed", callback);
      }
      function tabAttached(callback) {
          var unsubFunc;
          var unsubscribed = false;
          isReady.then(function () {
              if (unsubscribed) {
                  return;
              }
              unsubFunc = environment.tabAttached(callback);
          });
          return function () {
              unsubscribed = true;
              if (unsubFunc) {
                  unsubFunc();
              }
          };
      }
      function tabDetached(callback) {
          var unsubFunc;
          var unsubscribed = false;
          isReady.then(function () {
              if (unsubscribed) {
                  return;
              }
              unsubFunc = environment.tabDetached(callback);
          });
          return function () {
              unsubscribed = true;
              if (unsubFunc) {
                  unsubFunc();
              }
          };
      }
      function onWindowFrameColorChanged(callback) {
          var unsubFunc;
          var unsubscribed = false;
          isReady.then(function () {
              if (unsubscribed) {
                  return;
              }
              unsubFunc = environment.onWindowFrameColorChanged(callback);
          });
          return function () {
              unsubscribed = true;
              if (unsubFunc) {
                  unsubFunc();
              }
          };
      }
      function onWindowGotFocus(callback) {
          var unsubFunc;
          var unsubscribed = false;
          isReady.then(function () {
              if (unsubscribed) {
                  return;
              }
              unsubFunc = environment.onWindowGotFocus(callback);
          });
          return function () {
              unsubscribed = true;
              if (unsubFunc) {
                  unsubFunc();
              }
          };
      }
      function onWindowLostFocus(callback) {
          var unsubFunc;
          var unsubscribed = false;
          isReady.then(function () {
              if (unsubscribed) {
                  return;
              }
              unsubFunc = environment.onWindowLostFocus(callback);
          });
          return function () {
              unsubscribed = true;
              if (unsubFunc) {
                  unsubFunc();
              }
          };
      }
      function onEvent(callback) {
          var unsubFunc;
          var unsubscribed = false;
          isReady.then(function () {
              if (unsubscribed) {
                  return;
              }
              unsubFunc = environment.onEvent(callback);
          });
          return function () {
              unsubscribed = true;
              if (unsubFunc) {
                  unsubFunc();
              }
          };
      }
      function createFlydown(targetId, config) {
          return environment.createFlydown(targetId, config);
      }
      function showPopup(targetId, config) {
          return environment.showPopup(targetId, config);
      }
      function handleWindowAdded(w) {
          _registry.execute("window-added", w.API);
      }
      function handleWindowRemoved(w) {
          _registry.execute("window-removed", w.API);
      }
      windowStore.onReadyWindow(handleWindowAdded);
      windowStore.onRemoved(handleWindowRemoved);
      return {
          my: my,
          open: open,
          find: find,
          findById: findById,
          list: list,
          ready: ready,
          onWindowAdded: windowAdded,
          windowAdded: windowAdded,
          onWindowRemoved: windowRemoved,
          windowRemoved: windowRemoved,
          onTabAttached: tabAttached,
          onTabDetached: tabDetached,
          onWindowFrameColorChanged: onWindowFrameColorChanged,
          get groups() {
              return groups.groupsAPI;
          },
          onWindowGotFocus: onWindowGotFocus,
          onWindowLostFocus: onWindowLostFocus,
          onEvent: onEvent,
          createFlydown: createFlydown,
          showPopup: showPopup,
          configure: configure
      };
  });

  var LayoutStore = (function () {
      function LayoutStore() {
          this.layouts = [];
      }
      LayoutStore.prototype.removeWhere = function (condition) {
          this.layouts = this.layouts.filter(condition);
      };
      LayoutStore.prototype.add = function (item) {
          this.layouts.push(item);
      };
      Object.defineProperty(LayoutStore.prototype, "all", {
          get: function () {
              return this.layouts;
          },
          enumerable: true,
          configurable: true
      });
      LayoutStore.prototype.where = function (condition) {
          return this.layouts.filter(condition);
      };
      LayoutStore.prototype.first = function (condition) {
          return this.where(condition)[0];
      };
      return LayoutStore;
  }());
  var store = new LayoutStore();

  var SaveContextMethodName = "T42.HC.GetSaveContext";
  var ContextProvider = (function () {
      function ContextProvider(config, activitiesGetter, callbacks, logger) {
          this.config = config;
          this.activitiesGetter = activitiesGetter;
          this.callbacks = callbacks;
          this.logger = logger;
          this.interop = config.agm;
          this.registerRequestMethods();
      }
      ContextProvider.prototype.onSaveRequested = function (callback) {
          return this.callbacks.add("saveRequested", callback);
      };
      ContextProvider.prototype.isActivityOwner = function () {
          if (typeof htmlContainer !== "undefined") {
              var context_1 = htmlContainer.getContext();
              return context_1 && context_1._t42 && context_1._t42.activityIsOwner;
          }
          var activities = this.activitiesGetter();
          if (!activities) {
              return false;
          }
          if (!activities.inActivity) {
              return false;
          }
          var myWindow = activities.my.window;
          var myActivity = activities.my.activity;
          if (!myActivity && !myWindow) {
              return false;
          }
          return myActivity.owner.id === myWindow.id;
      };
      ContextProvider.prototype.registerRequestMethods = function () {
          var _this = this;
          this.interop.register(SaveContextMethodName, function (args) {
              var _a, _b, _c;
              var usersCbs = _this.callbacks.execute("saveRequested", args);
              if (((_a = usersCbs) === null || _a === void 0 ? void 0 : _a.length) > 1) {
                  _this.logger.warn("Multiple subscriptions for \"glue.layouts.onSaveRequested\" - only the first one will be used");
              }
              var requestResult = usersCbs[0];
              var autoSaveWindowContext = _this.config.autoSaveWindowContext;
              if (autoSaveWindowContext) {
                  return { autoSaveWindowContext: autoSaveWindowContext };
              }
              var result = { windowContext: (_b = requestResult) === null || _b === void 0 ? void 0 : _b.windowContext, activityContext: undefined };
              if (_this.isActivityOwner()) {
                  result.activityContext = (_c = requestResult) === null || _c === void 0 ? void 0 : _c.activityContext;
              }
              return result;
          });
      };
      return ContextProvider;
  }());

  function transformACSLayout(something) {
      if (!something) {
          return something;
      }
      if (Array.isArray(something)) {
          return something.map(function (item) {
              return transformACSLayout(item);
          });
      }
      if (typeof something === "string" || typeof something === "number" || typeof something === "boolean") {
          return something;
      }
      var initial = {};
      return Object.keys(something).reduce(function (accumulator, current) {
          var value = something[current];
          var convertedValue = transformACSLayout(value);
          var key = current;
          if (current[0].toLowerCase() !== current[0]) {
              key = current[0].toLowerCase() + current.substr(1);
          }
          accumulator[key] = convertedValue;
          return accumulator;
      }, initial);
  }

  var LayoutImpl = (function () {
      function LayoutImpl(data) {
          this.name = data.name;
          this.type = data.type;
          this.components = data.components;
          this.context = data.context;
          this.metadata = data.metadata;
          this.version = data.version;
          this.displays = data.displays;
      }
      return LayoutImpl;
  }());

  var LayoutsAPIImpl = (function () {
      function LayoutsAPIImpl(config, stream, callbacks, logger) {
          this.config = config;
          this.stream = stream;
          this.callbacks = callbacks;
          this.appManager = config.appManager;
          this.onEvent = stream.onEvent;
          this.provider = new ContextProvider(config, config.activityGetter, callbacks, logger);
          stream.subscribe();
      }
      LayoutsAPIImpl.prototype.setDefaultGlobal = function (name) {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.config.agm.invoke("T42.ACS.SelectDefaultLayout", { name: name })];
                      case 1:
                          _a.sent();
                          return [2];
                  }
              });
          });
      };
      LayoutsAPIImpl.prototype.clearDefaultGlobal = function () {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.config.agm.invoke("T42.ACS.DeselectDefaultLayout")];
                      case 1:
                          _a.sent();
                          return [2];
                  }
              });
          });
      };
      LayoutsAPIImpl.prototype.getDefaultGlobal = function () {
          return __awaiter(this, void 0, void 0, function () {
              var result, layout;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.config.agm.invoke("T42.ACS.GetDefaultLayout")];
                      case 1:
                          result = _a.sent();
                          layout = result.returned;
                          if (!layout) {
                              return [2, undefined];
                          }
                          if (this.isSlimMode()) {
                              return [2, layout];
                          }
                          return [2, this.list().find(function (l) { return l.name === layout.name && l.type === "Global"; })];
                  }
              });
          });
      };
      LayoutsAPIImpl.prototype.ready = function () {
          if (this.config.mode === "fullWaitSnapshot") {
              return this.stream.gotSnapshot;
          }
          return this.stream.ready;
      };
      LayoutsAPIImpl.prototype.save = function (layout) {
          var _this = this;
          return new Promise(function (resolve, reject) {
              _this.verifyNotSlimMode();
              if (!layout.name) {
                  throw Error("layout.name argument is required");
              }
              if (!layout.type) {
                  layout.type = "Global";
              }
              if (layout.activityId) {
                  layout.type = "Activity";
              }
              if (typeof layout.ignoreHidden === "undefined") {
                  layout.ignoreHidden = true;
              }
              var layoutObject = {
                  name: layout.name,
                  actIds: [],
                  appIds: [],
                  type: layout.type,
                  context: layout.context,
                  metadata: layout.metadata || {},
                  options: { ignoreLayoutRestrictions: false },
              };
              if (layout.type === "Activity") {
                  var actId = layout.activityId;
                  if (!actId) {
                      if (!_this.appManager.myInstance.inActivity) {
                          throw new Error("Current application is not in activity. Can not save activity layout for it");
                      }
                      actId = _this.appManager.myInstance.activityId;
                  }
                  layoutObject.actIds.push(actId);
                  layoutObject.options = { ignoreLayoutRestrictions: true };
              }
              else if (layout.type === "Global") {
                  if (_this.config.gdMajorVersion === 2) {
                      var instances = _this.appManager.instances();
                      if (layout.ignoreHidden) {
                          instances = instances.filter(function (i) { return _this.isVisibleWindow(i); });
                      }
                      if (layout.ignoreMyInstance && _this.appManager.myInstance) {
                          instances = instances.filter(function (i) { return i.id !== _this.appManager.myInstance.id; });
                      }
                      instances.reduce(function (prev, current) {
                          if (!current.id) {
                              return prev;
                          }
                          if (current.inActivity) {
                              var actId = current.activityId;
                              if (prev.actIds.indexOf(actId) === -1) {
                                  prev.actIds.push(actId);
                              }
                          }
                          else {
                              prev.appIds.push(current.id);
                          }
                          return prev;
                      }, layoutObject);
                  }
                  else {
                      layoutObject.autoCollectApps = true;
                  }
              }
              else {
                  throw new Error("layout type " + layout.type + " not supported");
              }
              _this.invokeMethodAndTrack("T42.ACS.SaveLayout", layoutObject, resolve, reject);
          });
      };
      LayoutsAPIImpl.prototype.restore = function (options) {
          var _this = this;
          return new Promise(function (resolve, reject) {
              _this.verifyNotSlimMode();
              if (typeof options === "undefined") {
                  throw Error("options argument is required");
              }
              if (!options.name) {
                  throw Error("options.name argument is required");
              }
              if (!options.type) {
                  options.type = "Global";
              }
              if (options.activityIdToJoin) {
                  options.type = "Activity";
              }
              if (typeof options.restoreActivityOwner === "undefined") {
                  options.restoreActivityOwner = false;
              }
              if (typeof options.ignoreActivityWindowTypes === "undefined") {
                  options.ignoreActivityWindowTypes = [];
              }
              if (typeof options.setActivityContext === "undefined") {
                  options.setActivityContext = true;
              }
              if (typeof options.closeRunningInstance === "undefined") {
                  if (options.type === "Global") {
                      options.closeRunningInstance = true;
                  }
                  else if (options.type === "Activity") {
                      options.closeRunningInstance = false;
                  }
              }
              if (typeof options.reuseWindows === "undefined") {
                  options.reuseWindows = true;
              }
              options.context = options.context || {};
              var t42 = {
                  restoreOptions: {
                      activityToJoin: options.activityIdToJoin,
                      setActivityContext: options.setActivityContext,
                      ignoreActivityWindowTypes: options.ignoreActivityWindowTypes,
                      restoreActivityOwner: options.restoreActivityOwner,
                      closeOldWindows: options.closeRunningInstance,
                      reuseExistingWindows: options.reuseWindows
                  }
              };
              var arg = {
                  type: options.type,
                  name: options.name,
                  context: options.context,
                  toClose: [],
                  splash: options.splash
              };
              if (_this.config.gdMajorVersion === 2) {
                  if (options.closeRunningInstance) {
                      arg.toClose = _this.getInstancesToClose(options);
                  }
              }
              if (options.timeout) {
                  arg.timeout = options.timeout;
              }
              arg.context._t42 = t42;
              _this.invokeMethodAndTrack("T42.ACS.RestoreLayout", arg, resolve, reject, true);
          });
      };
      LayoutsAPIImpl.prototype.remove = function (type, name) {
          var _this = this;
          return new Promise(function (resolve, reject) {
              _this.verifyNotSlimMode();
              if (!name) {
                  throw Error("name argument is required");
              }
              if (!type) {
                  throw Error("type argument is required");
              }
              var msg = {
                  type: type,
                  name: name,
              };
              _this.invokeMethodAndTrack("T42.ACS.RemoveLayout", msg, resolve, reject);
          });
      };
      LayoutsAPIImpl.prototype.list = function () {
          this.verifyNotSlimMode();
          return store.all;
      };
      LayoutsAPIImpl.prototype.import = function (layouts, mode) {
          var _this = this;
          return new Promise(function (resolve, reject) {
              _this.verifyNotSlimMode();
              var msg = {
                  mode: mode || "replace",
                  layouts: layouts
              };
              _this.invokeMethodAndTrack("T42.ACS.ImportLayouts", msg, resolve, reject, true);
          });
      };
      LayoutsAPIImpl.prototype.export = function (layoutType) {
          var _this = this;
          return new Promise(function (resolve, reject) {
              var handleResult = function (result) {
                  var layouts = _this.getObjectValues(result.Layouts).map(function (t) { return new LayoutImpl(transformACSLayout(t)); });
                  if (layoutType) {
                      layouts = layouts.filter(function (l) { return l.type === layoutType; });
                  }
                  resolve(layouts);
              };
              _this.invokeMethodAndTrack("T42.ACS.ExportLayouts", {}, handleResult, reject, true);
          });
      };
      LayoutsAPIImpl.prototype.rename = function (layout, newName) {
          var _this = this;
          return new Promise(function (resolve, reject) {
              _this.verifyNotSlimMode();
              if (!layout) {
                  throw Error("layout argument is required");
              }
              if (!layout.name) {
                  throw Error("name argument is required");
              }
              if (!layout.type) {
                  throw Error("type argument is required");
              }
              var msg = { type: layout.type, oldName: layout.name, newName: newName };
              _this.invokeMethodAndTrack("T42.ACS.RenameLayout", msg, resolve, reject);
          });
      };
      LayoutsAPIImpl.prototype.updateMetadata = function (layout) {
          var _this = this;
          return new Promise(function (resolve, reject) {
              if (!layout) {
                  throw Error("layout argument is required");
              }
              if (!layout.name) {
                  throw Error("name argument is required");
              }
              if (!layout.type) {
                  throw Error("type argument is required");
              }
              if (!layout.metadata) {
                  throw Error("metadata argument is required");
              }
              var layoutObject = {
                  name: layout.name,
                  type: layout.type,
                  metadata: layout.metadata
              };
              _this.invokeMethodAndTrack("T42.ACS.UpdateMetadata", layoutObject, resolve, reject, true);
          });
      };
      LayoutsAPIImpl.prototype.hibernate = function (name, options) {
          var _this = this;
          return new Promise(function (resolve, reject) {
              if (!name) {
                  return reject("name cannot be empty");
              }
              options = options || {};
              var request = {
                  name: name,
                  type: "Global",
                  context: options.context || {},
                  metadata: options.metadata || {},
              };
              _this.invokeMethodAndTrack("T42.ACS.HibernateLayout", request, resolve, reject, true);
          });
      };
      LayoutsAPIImpl.prototype.resume = function (name, context, options) {
          var _this = this;
          return new Promise(function (resolve, reject) {
              if (!name) {
                  return reject("name cannot be empty");
              }
              var request = __assign({ name: name, type: "Global", context: context }, options);
              _this.invokeMethodAndTrack("T42.ACS.ResumeLayout", request, resolve, reject, true);
          });
      };
      LayoutsAPIImpl.prototype.getCurrentLayout = function () {
          return __awaiter(this, void 0, void 0, function () {
              var result, layout;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.config.agm.invoke("T42.ACS.GetCurrentLayout", {}, "best", { methodResponseTimeoutMs: 120 * 1000 })];
                      case 1:
                          result = _a.sent();
                          layout = result.returned.layout;
                          if (!layout) {
                              return [2, undefined];
                          }
                          if (!this.isSlimMode()) {
                              layout = this.list().find(function (l) { return l.name === layout.name && l.type === layout.type; });
                          }
                          return [2, layout];
                  }
              });
          });
      };
      LayoutsAPIImpl.prototype.onAdded = function (callback) {
          var result = this.callbacks.add("added", callback);
          if (store.all.length > 0) {
              store.all.forEach(function (layout) {
                  try {
                      callback(layout);
                  }
                  catch (err) { }
              });
          }
          return result;
      };
      LayoutsAPIImpl.prototype.onRemoved = function (callback) {
          return this.callbacks.add("removed", callback);
      };
      LayoutsAPIImpl.prototype.onChanged = function (callback) {
          return this.callbacks.add("changed", callback);
      };
      LayoutsAPIImpl.prototype.onRestored = function (callback) {
          return this.callbacks.add("restored", callback);
      };
      LayoutsAPIImpl.prototype.onRenamed = function (callback) {
          return this.callbacks.add("renamed", callback);
      };
      LayoutsAPIImpl.prototype.onEvent = function (callback) {
          return this.stream.onEvent(callback);
      };
      LayoutsAPIImpl.prototype.onSaveRequested = function (callback) {
          return this.provider.onSaveRequested(callback);
      };
      LayoutsAPIImpl.prototype.updateAppContextInCurrent = function (context) {
          var _this = this;
          return new Promise(function (resolve, reject) {
              if (context && typeof context !== "object") {
                  reject("context must be an object");
              }
              context = (context !== null && context !== void 0 ? context : {});
              var request = {
                  context: context
              };
              _this.invokeMethodAndTrack("T42.ACS.UpdateLayoutComponentContext", request, resolve, reject, true);
          });
      };
      LayoutsAPIImpl.prototype.updateDefaultContext = function (context) {
          var _this = this;
          return new Promise(function (resolve, reject) {
              if (context && typeof context !== "object") {
                  reject("context must be an object");
              }
              context = (context !== null && context !== void 0 ? context : {});
              var request = {
                  context: context
              };
              _this.invokeMethodAndTrack("T42.ACS.UpdateDefaultContext", request, resolve, reject, true);
          });
      };
      LayoutsAPIImpl.prototype.get = function (name, type) {
          var matching = this.list().find(function (l) { return l.name === name && l.type === type; });
          if (!matching) {
              return Promise.reject("can not find layout with name=" + name + " and type=" + type);
          }
          return Promise.resolve(matching);
      };
      LayoutsAPIImpl.prototype.getAll = function (type) {
          var matching = this.list().filter(function (l) { return type === l.type; });
          return Promise.resolve(matching);
      };
      LayoutsAPIImpl.prototype.isSlimMode = function () {
          return this.config.mode === "slim";
      };
      LayoutsAPIImpl.prototype.verifyNotSlimMode = function () {
          if (this.isSlimMode()) {
              throw Error("Operation not allowed in slim mode. Run in full mode.");
          }
      };
      LayoutsAPIImpl.prototype.isVisibleWindow = function (instance) {
          if (instance.application.type === "exe" || instance.application.type === "node") {
              return true;
          }
          if (instance.application.type === "activity") {
              return true;
          }
          if (!instance || !instance.window) {
              return false;
          }
          return instance.window.isVisible;
      };
      LayoutsAPIImpl.prototype.invokeMethodAndTrack = function (methodName, args, resolve, reject, skipStreamEvent) {
          var streamEventReceived = skipStreamEvent;
          var agmResult;
          var token = shortid$1();
          args.token = token;
          var handleResult = function () {
              if (streamEventReceived && agmResult) {
                  resolve(agmResult);
              }
          };
          if (!skipStreamEvent) {
              this.stream.waitFor(token)
                  .then(function () {
                  streamEventReceived = true;
                  handleResult();
              })
                  .catch(function (err) {
                  reject(err);
              });
          }
          var responseHandler = function (result) {
              if (!result.returned) {
                  reject("No result from method " + methodName);
              }
              if (result.returned.status && (result.returned.status !== "Success" && result.returned.status !== "PartialSuccess")) {
                  reject(result.returned);
              }
              agmResult = result.returned;
              handleResult();
          };
          this.config.agm.invoke(methodName, args, "best", { methodResponseTimeoutMs: 120 * 1000 })
              .then(responseHandler)
              .catch(function (err) { return reject(err); });
      };
      LayoutsAPIImpl.prototype.getInstancesToClose = function (options) {
          var _this = this;
          var instances = [];
          var shellApp = this.appManager.applications().filter(function (a) { return a.isShell; })[0];
          var shellApplicationName = shellApp ? shellApp.name : "AppManager";
          this.appManager.instances().forEach(function (i) {
              if (_this.appManager.myInstance && i.id === _this.appManager.myInstance.id) {
                  return;
              }
              if (i.application.name === shellApplicationName) {
                  return;
              }
              if (!_this.isVisibleWindow(i)) {
                  return;
              }
              if (options.type === "Activity") {
                  if (i.activityId !== options.activityIdToJoin) {
                      return;
                  }
              }
              instances.push({ application: i.application.name, instance: i.id });
          });
          return instances;
      };
      LayoutsAPIImpl.prototype.getObjectValues = function (obj) {
          if (!obj) {
              return [];
          }
          return Object.keys(obj).map(function (k) { return obj[k]; });
      };
      return LayoutsAPIImpl;
  }());

  var ACSStream = (function () {
      function ACSStream(agm, callbacks) {
          var _this = this;
          this.agm = agm;
          this.callbacks = callbacks;
          this.ready = new Promise(function (resolve, reject) {
              _this.resolveReady = resolve;
              _this.rejectReady = reject;
          });
          this.gotSnapshot = new Promise(function (resolve, reject) {
              _this.resolveGotSnapshot = resolve;
              _this.rejectGotSnapshot = reject;
          });
      }
      ACSStream.prototype.subscribe = function (noRetry) {
          var _this = this;
          var transform = function (obj) {
              return _this.getObjectValues(obj).map(function (t) { return transformACSLayout(t); });
          };
          if (!this.checkForLayoutEventMethod()) {
              if (noRetry) {
                  this.resolveReady();
              }
              setTimeout(function () {
                  _this.subscribe(true);
              }, 500);
          }
          else {
              this.agm.subscribe("T42.ACS.OnLayoutEvent", { waitTimeoutMs: 10000 })
                  .then(function (subs) {
                  subs.onData(function (args) {
                      var data = args.data;
                      if (data.IsSnapshot) {
                          _this.resolveGotSnapshot();
                      }
                      _this.addLayouts(transform(data.OnLayoutAdded));
                      _this.removeLayouts(transform(data.OnLayoutRemoved));
                      _this.changeLayouts(transform(data.OnLayoutChanged));
                      _this.renameLayouts(transform(data.OnLayoutRenamed));
                      _this.restoredLayout(transform(data.OnLayoutRestored));
                      _this.callbacks.execute("streamEvent", data);
                  });
                  subs.onFailed(function (err) {
                      var msg = "can not subscribe to T42.ACS.OnLayoutEvent " + err;
                      _this.rejectReady(msg);
                      _this.rejectGotSnapshot(msg);
                  });
                  _this.resolveReady();
              })
                  .catch(function (err) {
                  var msg = "Error subscribing for T42.ACS.OnLayoutEvent stream. Err: " + err;
                  _this.rejectReady(msg);
                  _this.rejectGotSnapshot(msg);
              });
          }
      };
      ACSStream.prototype.onEvent = function (callback) {
          return this.callbacks.add("streamEvent", callback);
      };
      ACSStream.prototype.waitFor = function (token, timeout) {
          var _this = this;
          if (!timeout) {
              timeout = 10000;
          }
          return new Promise(function (resolve, reject) {
              var done = false;
              var unsubscribe = _this.onEvent(function (streamEvent) {
                  if (streamEvent.Token === token) {
                      done = true;
                      unsubscribe();
                      resolve();
                  }
              });
              setTimeout(function () {
                  if (!done) {
                      reject("timed out");
                  }
              }, timeout);
          });
      };
      ACSStream.prototype.checkForLayoutEventMethod = function () {
          try {
              return this.agm
                  .methods()
                  .map(function (m) { return m.name; })
                  .indexOf("T42.ACS.OnLayoutEvent") !== -1;
          }
          catch (e) {
              return false;
          }
      };
      ACSStream.prototype.addLayouts = function (layoutsData) {
          var _this = this;
          if (!layoutsData) {
              return;
          }
          layoutsData.forEach(function (layoutData) {
              var layout = new LayoutImpl(layoutData);
              store.add(layout);
              _this.callbacks.execute("added", layout);
          });
      };
      ACSStream.prototype.removeLayouts = function (removedLayouts) {
          var _this = this;
          if (!removedLayouts) {
              return;
          }
          removedLayouts.forEach(function (removedLayout) {
              store.removeWhere(function (existingLayout) { return !_this.compareLayouts(existingLayout, removedLayout); });
              _this.callbacks.execute("removed", removedLayout);
          });
      };
      ACSStream.prototype.changeLayouts = function (changedLayouts) {
          var _this = this;
          if (!changedLayouts) {
              return;
          }
          changedLayouts.forEach(function (changedLayout) {
              store.removeWhere(function (existingLayout) { return !_this.compareLayouts(existingLayout, changedLayout); });
              store.add(new LayoutImpl(changedLayout));
              _this.callbacks.execute("changed", changedLayout);
          });
      };
      ACSStream.prototype.renameLayouts = function (renamedLayouts) {
          var _this = this;
          if (!renamedLayouts) {
              return;
          }
          renamedLayouts.forEach(function (renamedLayout) {
              var existingLayout = store.first(function (current) { return _this.compareLayouts(current, { type: renamedLayout.type, name: renamedLayout.oldName }); });
              if (!existingLayout) {
                  throw Error("received rename event for unknown layout with type " + renamedLayout.type + " and name " + renamedLayout.oldName);
              }
              existingLayout.name = renamedLayout.newName;
              _this.callbacks.execute("renamed", existingLayout);
          });
      };
      ACSStream.prototype.compareLayouts = function (layout1, layout2) {
          return layout1.name === layout2.name && layout1.type === layout2.type;
      };
      ACSStream.prototype.getObjectValues = function (obj) {
          if (!obj) {
              return [];
          }
          return Object.keys(obj).map(function (k) { return obj[k]; });
      };
      ACSStream.prototype.restoredLayout = function (restoredLayouts) {
          var _this = this;
          if (!restoredLayouts) {
              return;
          }
          restoredLayouts.forEach(function (restoredLayout) {
              var existingLayout = store.first(function (current) { return _this.compareLayouts(current, { type: restoredLayout.type, name: restoredLayout.name }); });
              _this.callbacks.execute("restored", existingLayout);
          });
      };
      return ACSStream;
  }());

  function streamNull () {
      return {
          ready: Promise.resolve(undefined),
          subscribe: function () { },
          onEvent: function (callback) { return function () { }; },
          waitFor: function (token, timeout) { return Promise.resolve(undefined); },
          gotSnapshot: Promise.resolve(undefined),
      };
  }

  function LayoutsFactory (config) {
      if (!config.agm) {
          throw Error("config.agm is required");
      }
      if (!config.logger) {
          throw Error("config.logger is required");
      }
      config.mode = config.mode || "slim";
      var logger = config.logger;
      var callbacks = lib$2();
      var acsStream;
      if (config.mode === "full" || "fullWaitSnapshot") {
          acsStream = new ACSStream(config.agm, callbacks);
      }
      else {
          acsStream = streamNull();
      }
      return new LayoutsAPIImpl(config, acsStream, callbacks, logger);
  }

  var T42DisplayCommand = "T42.Displays.Command";
  var DisplayManager = (function () {
      function DisplayManager(_agm, _logger) {
          var _this = this;
          this._agm = _agm;
          this._logger = _logger;
          this.all = function () { return __awaiter(_this, void 0, void 0, function () {
              var displays;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.callGD(DisplayCommand.GetAll, {})];
                      case 1:
                          displays = _a.sent();
                          return [2, displays.map(this.decorateDisplay)];
                  }
              });
          }); };
          this.get = function (id) { return __awaiter(_this, void 0, void 0, function () {
              var display;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.callGD(DisplayCommand.Get, { id: id })];
                      case 1:
                          display = _a.sent();
                          return [2, this.decorateDisplay(display)];
                  }
              });
          }); };
          this.getPrimary = function () { return __awaiter(_this, void 0, void 0, function () {
              var primary;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.all()];
                      case 1:
                          primary = (_a.sent()).find(function (d) { return d.isPrimary; });
                          return [2, primary];
                  }
              });
          }); };
          this.capture = function (options) { return __awaiter(_this, void 0, void 0, function () {
              var screenshot;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.callGD(DisplayCommand.Capture, __assign({}, options))];
                      case 1:
                          screenshot = _a.sent();
                          return [2, screenshot];
                  }
              });
          }); };
          this.captureAll = function (options) { return __awaiter(_this, void 0, void 0, function () {
              var screenshots;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.callGD(DisplayCommand.CaptureAll, __assign({}, options))];
                      case 1:
                          screenshots = _a.sent();
                          return [2, screenshots];
                  }
              });
          }); };
          this.getMousePosition = function () { return __awaiter(_this, void 0, void 0, function () {
              var point;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.callGD(DisplayCommand.GetMousePosition)];
                      case 1:
                          point = _a.sent();
                          return [2, point];
                  }
              });
          }); };
          this.callGD = function (command, options) { return __awaiter(_this, void 0, void 0, function () {
              var invocationResult;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this._agm.invoke(T42DisplayCommand, { options: __assign({}, options), command: command })];
                      case 1:
                          invocationResult = _a.sent();
                          return [2, invocationResult.returned.data];
                  }
              });
          }); };
          this.decorateDisplay = function (original) {
              return __assign(__assign({}, original), { capture: function (size) { return _this.capture({ id: original.id, size: size }); } });
          };
      }
      DisplayManager.prototype.getByWindowId = function (id) {
          var current = this.callGD(DisplayCommand.GetByWindowId, { id: id });
          return current;
      };
      return DisplayManager;
  }());
  var DisplayCommand;
  (function (DisplayCommand) {
      DisplayCommand["Capture"] = "capture";
      DisplayCommand["CaptureAll"] = "captureAll";
      DisplayCommand["GetAll"] = "getAll";
      DisplayCommand["Get"] = "get";
      DisplayCommand["GetByWindowId"] = "getByWindowId";
      DisplayCommand["GetMousePosition"] = "getMousePosition";
  })(DisplayCommand || (DisplayCommand = {}));

  var interop;
  var windowId;
  function setupAGM(interopLib, channels) {
      return __awaiter(this, void 0, void 0, function () {
          return __generator(this, function (_a) {
              switch (_a.label) {
                  case 0:
                      interop = interopLib;
                      if (typeof window !== "undefined") {
                          if (window.glue42gd) {
                              windowId = window.glue42gd.windowId;
                          }
                      }
                      if (!windowId) {
                          return [2];
                      }
                      return [4, interop.register("T42.Channels.Command", function (args) {
                              var command = args.command;
                              if (!command) {
                                  throw new Error("missing command argument");
                              }
                              if (command === "join") {
                                  var id = args.channel;
                                  if (!id) {
                                      throw new Error("missing argument id");
                                  }
                                  channels.joinNoSelectorSwitch(id);
                                  return;
                              }
                              if (command === "leave") {
                                  channels.leaveNoSelectorSwitch();
                                  return;
                              }
                              if (command === "get") {
                                  var id = channels.current();
                                  return { id: id };
                              }
                              throw new Error("unknown command " + command);
                          })];
                  case 1:
                      _a.sent();
                      interop.invoke("T42.Channels.Announce", { swId: windowId, instance: interop.instance.instance });
                      return [2];
              }
          });
      });
  }
  function switchChannel(channel, id) {
      return __awaiter(this, void 0, void 0, function () {
          return __generator(this, function (_a) {
              interop.invoke("T42.Channels.Announce", {
                  swId: (id !== null && id !== void 0 ? id : windowId),
                  command: "switchChannel",
                  data: { newChannel: channel }
              });
              return [2];
          });
      });
  }

  var CONTEXT_PREFIX = "___channel___";
  var SharedContextSubscriber = (function () {
      function SharedContextSubscriber(contexts) {
          this.contexts = contexts;
      }
      SharedContextSubscriber.prototype.subscribe = function (callback) {
          this.callback = callback;
      };
      SharedContextSubscriber.prototype.subscribeFor = function (name, callback) {
          if (!this.isChannel(name)) {
              return Promise.reject(new Error("Channel with name: " + name + " doesn't exist!"));
          }
          var contextName = this.createContextName(name);
          return this.contexts.subscribe(contextName, function (data, _, __, ___, extraData) {
              var _a;
              callback(data.data, data, (_a = extraData) === null || _a === void 0 ? void 0 : _a.updaterId);
          });
      };
      SharedContextSubscriber.prototype.switchChannel = function (name) {
          return __awaiter(this, void 0, void 0, function () {
              var contextName, _a;
              var _this = this;
              return __generator(this, function (_b) {
                  switch (_b.label) {
                      case 0:
                          this.unsubscribe();
                          contextName = this.createContextName(name);
                          _a = this;
                          return [4, this.contexts.subscribe(contextName, function (data, _, __, ___, extraData) {
                                  var _a;
                                  if (_this.callback) {
                                      _this.callback(data.data, data, (_a = extraData) === null || _a === void 0 ? void 0 : _a.updaterId);
                                  }
                              })];
                      case 1:
                          _a.unsubscribeFunc = _b.sent();
                          return [2];
                  }
              });
          });
      };
      SharedContextSubscriber.prototype.unsubscribe = function () {
          if (this.unsubscribeFunc) {
              this.unsubscribeFunc();
          }
      };
      SharedContextSubscriber.prototype.all = function () {
          var contextNames = this.contexts.all();
          var channelContextNames = contextNames.filter(function (contextName) { return contextName.startsWith(CONTEXT_PREFIX); });
          var channelNames = channelContextNames.map(function (channelContextName) { return channelContextName.substr(CONTEXT_PREFIX.length); });
          return channelNames;
      };
      SharedContextSubscriber.prototype.getContextData = function (name) {
          var _this = this;
          return new Promise(function (resolve, reject) {
              if (!_this.isChannel(name)) {
                  return reject(new Error("A channel with name: " + name + " doesn't exist!"));
              }
              var contextName = _this.createContextName(name);
              _this.contexts.subscribe(contextName, function (data) {
                  resolve(data);
              }).then(function (unsubscribeFunc) { return unsubscribeFunc(); });
          });
      };
      SharedContextSubscriber.prototype.updateChannel = function (name, data) {
          var contextName = this.createContextName(name);
          return this.contexts.update(contextName, data);
      };
      SharedContextSubscriber.prototype.updateData = function (name, data) {
          var contextName = this.createContextName(name);
          if (this.contexts.setPathSupported) {
              var pathValues = Object.keys(data).map(function (key) {
                  return {
                      path: "data." + key,
                      value: data[key]
                  };
              });
              return this.contexts.setPaths(contextName, pathValues);
          }
          else {
              return this.contexts.update(contextName, { data: data });
          }
      };
      SharedContextSubscriber.prototype.isChannel = function (name) {
          return this.all().some(function (channelName) { return channelName === name; });
      };
      SharedContextSubscriber.prototype.createContextName = function (name) {
          return CONTEXT_PREFIX + name;
      };
      return SharedContextSubscriber;
  }());

  var ChannelsImpl = (function () {
      function ChannelsImpl(shared, interop, getWindows, logger) {
          this.shared = shared;
          this.interop = interop;
          this.getWindows = getWindows;
          this.logger = logger;
          this.subsKey = "subs";
          this.changedKey = "changed";
          this.isInitialJoin = true;
          this.registry = lib$2();
          this.shared.subscribe(this.handler.bind(this));
          if (typeof window !== "undefined") {
              this.currentContext = window.glue42gd.initialChannel;
              if (this.currentContext) {
                  this.joinNoSelectorSwitch(this.currentContext);
              }
          }
      }
      ChannelsImpl.prototype.subscribe = function (callback) {
          if (typeof callback !== "function") {
              throw new Error("Please provide the callback as a function!");
          }
          return this.registry.add(this.subsKey, callback);
      };
      ChannelsImpl.prototype.subscribeFor = function (name, callback) {
          return __awaiter(this, void 0, void 0, function () {
              var unsubscribeFunc;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                          if (typeof name !== "string") {
                              throw new Error("Please provide the name as a string!");
                          }
                          if (typeof callback !== "function") {
                              throw new Error("Please provide the callback as a function!");
                          }
                          return [4, this.shared.subscribeFor(name, callback)];
                      case 1:
                          unsubscribeFunc = _a.sent();
                          return [2, unsubscribeFunc];
                  }
              });
          });
      };
      ChannelsImpl.prototype.publish = function (data, name) {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  if (typeof data !== "object") {
                      throw new Error("Please provide the data as an object!");
                  }
                  if (name) {
                      if (typeof name !== "string") {
                          throw new Error("Please provide the name as a string!");
                      }
                      if (!this.shared.isChannel(name)) {
                          return [2, Promise.reject(new Error("A channel with name: " + name + " doesn't exist!"))];
                      }
                      return [2, this.shared.updateData(name, data)];
                  }
                  if (!this.currentContext) {
                      throw new Error("Not joined to any channel!");
                  }
                  return [2, this.shared.updateData(this.currentContext, data)];
              });
          });
      };
      ChannelsImpl.prototype.all = function () {
          var channelNames = this.shared.all();
          return Promise.resolve(channelNames);
      };
      ChannelsImpl.prototype.list = function () {
          return __awaiter(this, void 0, void 0, function () {
              var channelNames, channelContexts;
              var _this = this;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.all()];
                      case 1:
                          channelNames = _a.sent();
                          return [4, Promise.all(channelNames.map(function (channelName) { return _this.get(channelName); }))];
                      case 2:
                          channelContexts = _a.sent();
                          return [2, channelContexts];
                  }
              });
          });
      };
      ChannelsImpl.prototype.get = function (name) {
          if (typeof name !== "string") {
              return Promise.reject(new Error("Please provide the channel name as a string!"));
          }
          return this.shared.getContextData(name);
      };
      ChannelsImpl.prototype.getMy = function () {
          if (!this.currentContext) {
              return Promise.resolve(undefined);
          }
          return this.get(this.currentContext);
      };
      ChannelsImpl.prototype.join = function (name) {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  return [2, this.joinCore(name)];
              });
          });
      };
      ChannelsImpl.prototype.joinNoSelectorSwitch = function (name) {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  return [2, this.joinCore(name, false)];
              });
          });
      };
      ChannelsImpl.prototype.leave = function () {
          return this.leaveCore();
      };
      ChannelsImpl.prototype.leaveNoSelectorSwitch = function () {
          return this.leaveCore(false);
      };
      ChannelsImpl.prototype.current = function () {
          return this.currentContext;
      };
      ChannelsImpl.prototype.my = function () {
          return this.current();
      };
      ChannelsImpl.prototype.changed = function (callback) {
          if (typeof callback !== "function") {
              throw new Error("Please provide the callback as a function!");
          }
          return this.registry.add(this.changedKey, callback);
      };
      ChannelsImpl.prototype.onChanged = function (callback) {
          return this.changed(callback);
      };
      ChannelsImpl.prototype.add = function (info) {
          return __awaiter(this, void 0, void 0, function () {
              var context;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                          if (typeof info !== "object") {
                              throw new Error("Please provide the info as an object!");
                          }
                          if (typeof info.name === "undefined") {
                              throw new Error("info.name is missing!");
                          }
                          if (typeof info.name !== "string") {
                              throw new Error("Please provide the info.name as a string!");
                          }
                          if (typeof info.meta === "undefined") {
                              throw new Error("info.meta is missing!");
                          }
                          if (typeof info.meta !== "object") {
                              throw new Error("Please provide the info.meta as an object!");
                          }
                          if (typeof info.meta.color === "undefined") {
                              throw new Error("info.meta.color is missing!");
                          }
                          if (typeof info.meta.color !== "string") {
                              throw new Error("Please provide the info.meta.color as a string!");
                          }
                          context = {
                              name: info.name,
                              meta: info.meta || {},
                              data: info.data || {}
                          };
                          return [4, this.shared.updateChannel(info.name, context)];
                      case 1:
                          _a.sent();
                          return [2, context];
                  }
              });
          });
      };
      ChannelsImpl.prototype.getWindowsOnChannel = function (channel) {
          return __awaiter(this, void 0, void 0, function () {
              var windowInfos;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.getWindowsWithChannels({ channels: [channel] })];
                      case 1:
                          windowInfos = _a.sent();
                          return [2, windowInfos.map(function (w) { return w.window; })];
                  }
              });
          });
      };
      ChannelsImpl.prototype.getWindowsWithChannels = function (filter) {
          var _a, _b;
          return __awaiter(this, void 0, void 0, function () {
              var info, windows_1, er_1;
              return __generator(this, function (_c) {
                  switch (_c.label) {
                      case 0:
                          _c.trys.push([0, 2, , 3]);
                          return [4, this.interop.invoke("T42.Channels.Announce", { command: "getChannelsInfo", data: { filter: filter } })];
                      case 1:
                          info = _c.sent();
                          windows_1 = this.getWindows();
                          if ((_b = (_a = info) === null || _a === void 0 ? void 0 : _a.returned) === null || _b === void 0 ? void 0 : _b.windows) {
                              return [2, info.returned.windows.map(function (windowInfo) {
                                      var window = windows_1.findById(windowInfo.windowId);
                                      return {
                                          window: window,
                                          channel: windowInfo.channel,
                                          application: windowInfo.application
                                      };
                                  })];
                          }
                          return [3, 3];
                      case 2:
                          er_1 = _c.sent();
                          this.logger.error("Error getting all channel enabled windows. This method is available since Glue42 3.12", er_1);
                          return [3, 3];
                      case 3: return [2, []];
                  }
              });
          });
      };
      ChannelsImpl.prototype.handler = function (data, context, updaterId) {
          this.registry.execute(this.subsKey, data, context, updaterId);
      };
      ChannelsImpl.prototype.joinCore = function (name, changeSelector) {
          if (changeSelector === void 0) { changeSelector = true; }
          return __awaiter(this, void 0, void 0, function () {
              var doesChannelExist, channelExistsPromise;
              var _this = this;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                          if (typeof name !== "string") {
                              throw new Error("Please provide the channel name as a string!");
                          }
                          if (!this.isInitialJoin && name === this.currentContext) {
                              return [2];
                          }
                          this.isInitialJoin = false;
                          doesChannelExist = function (channelName) {
                              var channelNames = _this.shared.all();
                              return channelNames.includes(channelName);
                          };
                          if (!!doesChannelExist(name)) return [3, 2];
                          channelExistsPromise = new Promise(function (resolve, reject) {
                              var timeoutId;
                              var intervalId = setInterval(function () {
                                  if (doesChannelExist(name)) {
                                      clearTimeout(timeoutId);
                                      clearInterval(intervalId);
                                      resolve();
                                  }
                              }, 100);
                              timeoutId = setTimeout(function () {
                                  clearInterval(intervalId);
                                  return reject(new Error("A channel with name: " + name + " doesn't exist!"));
                              }, 3000);
                          });
                          return [4, channelExistsPromise];
                      case 1:
                          _a.sent();
                          _a.label = 2;
                      case 2:
                          this.currentContext = name;
                          return [4, this.shared.switchChannel(name)];
                      case 3:
                          _a.sent();
                          if (changeSelector) {
                              switchChannel(name);
                          }
                          this.registry.execute(this.changedKey, name);
                          return [2];
                  }
              });
          });
      };
      ChannelsImpl.prototype.leaveCore = function (changeSelector) {
          if (changeSelector === void 0) { changeSelector = true; }
          this.currentContext = undefined;
          this.registry.execute(this.changedKey, undefined);
          this.shared.unsubscribe();
          if (changeSelector) {
              switchChannel();
          }
          return Promise.resolve();
      };
      return ChannelsImpl;
  }());

  function factory(contexts, agm, getWindows, logger) {
      var sharedContexts = new SharedContextSubscriber(contexts);
      var channels = new ChannelsImpl(sharedContexts, agm, getWindows, logger);
      setupAGM(agm, channels);
      return {
          subscribe: channels.subscribe.bind(channels),
          subscribeFor: channels.subscribeFor.bind(channels),
          publish: channels.publish.bind(channels),
          all: channels.all.bind(channels),
          list: channels.list.bind(channels),
          get: channels.get.bind(channels),
          join: channels.join.bind(channels),
          leave: channels.leave.bind(channels),
          current: channels.current.bind(channels),
          my: channels.my.bind(channels),
          changed: channels.changed.bind(channels),
          onChanged: channels.onChanged.bind(channels),
          add: channels.add.bind(channels),
          getWindowsOnChannel: channels.getWindowsOnChannel.bind(channels),
          getWindowsWithChannels: channels.getWindowsWithChannels.bind(channels),
          getMy: channels.getMy.bind(channels),
          ready: function () { return contexts.ready(); }
      };
  }

  var CommandMethod = "T42.Hotkeys.Command";
  var InvokeMethod = "T42.Hotkeys.Invoke";
  var RegisterCommand = "register";
  var UnregisterCommand = "unregister";
  var UnregisterAllCommand = "unregisterAll";
  var HotkeysImpl = (function () {
      function HotkeysImpl(agm) {
          this.agm = agm;
          this.registry = lib$2();
          this.firstHotkey = true;
          this.hotkeys = new Map();
      }
      HotkeysImpl.prototype.register = function (info, callback) {
          return __awaiter(this, void 0, void 0, function () {
              var hkToLower;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                          if (typeof info === "undefined") {
                              throw new Error("Hotkey parameter missing");
                          }
                          if (typeof info === "string") {
                              info = {
                                  hotkey: info
                              };
                          }
                          else {
                              if (!info.hotkey) {
                                  throw new Error("Info's hotkey parameter missing");
                              }
                              info = {
                                  hotkey: info.hotkey,
                                  description: info.description
                              };
                          }
                          hkToLower = this.formatHotkey(info.hotkey);
                          if (this.hotkeys.has(hkToLower)) {
                              throw new Error("Shortcut for " + hkToLower + " already registered");
                          }
                          if (!this.firstHotkey) return [3, 2];
                          this.firstHotkey = false;
                          return [4, this.registerInvokeAGMMethod()];
                      case 1:
                          _a.sent();
                          _a.label = 2;
                      case 2:
                          this.registry.add(hkToLower, callback);
                          return [4, this.agm.invoke(CommandMethod, { command: RegisterCommand, hotkey: hkToLower, description: info.description })];
                      case 3:
                          _a.sent();
                          this.hotkeys.set(hkToLower, info);
                          return [2];
                  }
              });
          });
      };
      HotkeysImpl.prototype.unregister = function (hotkey) {
          return __awaiter(this, void 0, void 0, function () {
              var hkToLower;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                          if (typeof hotkey === "undefined") {
                              throw new Error("hotkey parameter missing");
                          }
                          if (typeof hotkey !== "string") {
                              throw new Error("hotkey parameter must be string");
                          }
                          hkToLower = this.formatHotkey(hotkey);
                          return [4, this.agm.invoke(CommandMethod, { command: UnregisterCommand, hotkey: hkToLower })];
                      case 1:
                          _a.sent();
                          this.hotkeys.delete(hkToLower);
                          this.registry.clearKey(hkToLower);
                          return [2];
                  }
              });
          });
      };
      HotkeysImpl.prototype.unregisterAll = function () {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.agm.invoke(CommandMethod, { command: UnregisterAllCommand })];
                      case 1:
                          _a.sent();
                          this.hotkeys.clear();
                          this.registry.clear();
                          return [2];
                  }
              });
          });
      };
      HotkeysImpl.prototype.isRegistered = function (hotkey) {
          var hkToLower = this.formatHotkey(hotkey);
          return this.hotkeys.has(hkToLower);
      };
      HotkeysImpl.prototype.registerInvokeAGMMethod = function () {
          var _this = this;
          this.agm.register(InvokeMethod, function (args) {
              var hkToLower = args.key.toLowerCase();
              var info = _this.hotkeys.get(hkToLower);
              _this.registry.execute(hkToLower, info);
          });
      };
      HotkeysImpl.prototype.formatHotkey = function (hotkey) {
          if (hotkey) {
              return hotkey.replace(/\s/g, "").toLowerCase();
          }
      };
      return HotkeysImpl;
  }());

  function factory$1(agm) {
      var hotkeys = new HotkeysImpl(agm);
      return {
          register: hotkeys.register.bind(hotkeys),
          unregister: hotkeys.unregister.bind(hotkeys),
          unregisterAll: hotkeys.unregisterAll.bind(hotkeys),
          isRegistered: hotkeys.isRegistered.bind(hotkeys),
          ready: function () { return Promise.resolve(); }
      };
  }

  var version$2 = "5.7.1";

  var prepareConfig$1 = (function (options) {
      function getLibConfig(value, defaultMode, trueMode) {
          if (typeof value === "boolean" && !value) {
              return undefined;
          }
          var mode = getModeAsString(value, defaultMode, trueMode);
          if (typeof value === "object") {
              value.mode = mode;
              return value;
          }
          return {
              mode: mode,
          };
      }
      function getModeAsString(value, defaultMode, trueMode) {
          if (typeof value === "object") {
              return getModeAsString(value.mode, defaultMode, trueMode) + "";
          }
          else if (typeof value === "undefined") {
              if (typeof defaultMode === "boolean" && !defaultMode) {
                  return undefined;
              }
              else {
                  return defaultMode + "";
              }
          }
          else if (typeof value === "boolean") {
              if (value) {
                  return ((trueMode === undefined) ? defaultMode : trueMode) + "";
              }
              else {
                  return undefined;
              }
          }
          return value + "";
      }
      var appDefaultMode = false;
      var appDefaultTrueMode = "startOnly";
      var activitiesDefaultMode = "trackMyTypeAndInitiatedFromMe";
      var layoutsDefaultMode = "slim";
      return {
          layouts: getLibConfig(options.layouts, layoutsDefaultMode),
          activities: getLibConfig(options.activities, activitiesDefaultMode),
          appManager: getLibConfig(options.appManager, appDefaultMode, appDefaultTrueMode),
          windows: getLibConfig(options.windows, true),
          channels: getLibConfig(options.channels || false, false),
          displays: getLibConfig(options.displays, true)
      };
  });

  var Glue42Notification = (function () {
      function Glue42Notification(options) {
          this.options = options;
          this.callbacks = lib$2();
          this.actions = options.actions;
          this.body = options.body;
          this.badge = options.badge;
          this.data = options.data;
          this.dir = options.dir;
          this.icon = options.icon;
          this.image = options.image;
          this.lang = options.lang;
          this.renotify = options.renotify;
          this.requireInteraction = options.requireInteraction;
          this.silent = options.silent;
          this.tag = options.tag;
          this.timestamp = options.timestamp;
          this.title = options.title;
      }
      Glue42Notification.prototype.close = function () {
          throw new Error("Method not implemented.");
      };
      Glue42Notification.prototype.addEventListener = function (type, listener, options) {
          this.callbacks.add(type, listener);
      };
      Glue42Notification.prototype.removeEventListener = function (type, listener, options) {
      };
      Glue42Notification.prototype.dispatchEvent = function (event) {
          this.callbacks.execute(event.type, event);
          return true;
      };
      return Glue42Notification;
  }());

  var PanelAPI = (function () {
      function PanelAPI(interop) {
          this.interop = interop;
      }
      PanelAPI.prototype.toggle = function () {
          return this.interop.invoke("T42.Notifications.Show");
      };
      PanelAPI.prototype.show = function () {
          return this.interop.invoke("T42.Notifications.Show", { show: true });
      };
      PanelAPI.prototype.hide = function () {
          return this.interop.invoke("T42.Notifications.Hide");
      };
      PanelAPI.prototype.isVisible = function () {
          throw new Error("Method not implemented.");
      };
      return PanelAPI;
  }());

  var STARTING_INDEX = 0;
  var Notifications = (function () {
      function Notifications(interop) {
          this.interop = interop;
          this.methodsRegistered = false;
          this.methodNameRoot = "T42.Notifications.Handler-" + shortid$1();
          this.nextId = 0;
          this.notifications = {};
          this.panel = new PanelAPI(interop);
      }
      Object.defineProperty(Notifications.prototype, "maxActions", {
          get: function () {
              return 2;
          },
          enumerable: true,
          configurable: true
      });
      Notifications.prototype.raise = function (options) {
          var _a, _b, _c, _d;
          return __awaiter(this, void 0, void 0, function () {
              var bunchOfPromises, index, id, type, notification, validActions, index, _loop_1, this_1, _i, validActions_1, action, dataAsString, g42notification;
              return __generator(this, function (_e) {
                  switch (_e.label) {
                      case 0:
                          if (!options) {
                              throw new Error("invalid options - should be an object");
                          }
                          if (!options.title) {
                              throw new Error("invalid options - should have title");
                          }
                          if (!!this.methodsRegistered) return [3, 2];
                          bunchOfPromises = [];
                          for (index = STARTING_INDEX; index < this.maxActions; index++) {
                              bunchOfPromises.push(this.interop.register(this.methodNameRoot + "_" + index, this.handleNotificationAction.bind(this)));
                          }
                          return [4, Promise.all(bunchOfPromises)];
                      case 1:
                          _e.sent();
                          this.methodsRegistered = true;
                          _e.label = 2;
                      case 2:
                          id = String(this.nextId++);
                          type = (_a = options.type, (_a !== null && _a !== void 0 ? _a : "Notification"));
                          notification = {
                              title: options.title,
                              type: type,
                              severity: (_b = options.severity, (_b !== null && _b !== void 0 ? _b : "None")),
                              description: options.body,
                              glueRoutingDetailMethodName: this.methodNameRoot + "_" + STARTING_INDEX,
                              actions: [],
                              sourceId: id,
                              source: options.source
                          };
                          if (options.actions) {
                              validActions = options.actions.slice(0, this.maxActions);
                              index = STARTING_INDEX;
                              _loop_1 = function (action) {
                                  var args = {
                                      g42notificationId: id,
                                      g42action: action.action,
                                      g42interopMethod: (_c = action.interop) === null || _c === void 0 ? void 0 : _c.method,
                                      g42interopTarget: (_d = action.interop) === null || _d === void 0 ? void 0 : _d.target,
                                  };
                                  var parameters = Object.keys(args).map(function (key) {
                                      var value = args[key];
                                      return {
                                          name: key,
                                          value: {
                                              stringValue: value
                                          }
                                      };
                                  });
                                  var glueAction = {
                                      name: this_1.methodNameRoot + "_" + index,
                                      description: action.title,
                                      displayName: action.title,
                                      parameters: parameters
                                  };
                                  notification.actions.push(glueAction);
                                  index++;
                              };
                              this_1 = this;
                              for (_i = 0, validActions_1 = validActions; _i < validActions_1.length; _i++) {
                                  action = validActions_1[_i];
                                  _loop_1(action);
                              }
                          }
                          if (options.icon) {
                              notification.attributes = notification.attributes || [];
                              notification.attributes.push({ key: "icon", value: { stringValue: options.icon } });
                          }
                          if (options.data) {
                              notification.attributes = notification.attributes || [];
                              dataAsString = JSON.stringify(options.data);
                              notification.attributes.push({ key: "data", value: { stringValue: dataAsString } });
                          }
                          return [4, this.interop.invoke("T42.GNS.Publish.RaiseNotification", { notification: notification })];
                      case 3:
                          _e.sent();
                          g42notification = new Glue42Notification(options);
                          this.notifications[id] = g42notification;
                          return [2, g42notification];
                  }
              });
          });
      };
      Notifications.prototype.setFilter = function (filter) {
          return __awaiter(this, void 0, void 0, function () {
              var result;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.interop.invoke("T42.Notifications.Filter", filter)];
                      case 1:
                          result = _a.sent();
                          return [2, result.returned];
                  }
              });
          });
      };
      Notifications.prototype.getFilter = function () {
          return __awaiter(this, void 0, void 0, function () {
              var result;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.interop.invoke("T42.Notifications.Filter")];
                      case 1:
                          result = _a.sent();
                          return [2, result.returned];
                  }
              });
          });
      };
      Notifications.prototype.handleNotificationAction = function (args) {
          if (args.g42notificationId) {
              var payload_1 = args;
              var id = payload_1.g42notificationId;
              var notification = this.notifications[id];
              if (!notification) {
                  return;
              }
              var event_1 = new Event("onaction");
              event_1.action = payload_1.g42action;
              if (notification.onaction) {
                  notification.onaction(event_1);
              }
              var actionDefinition = (notification.actions || []).find(function (item) { return item.action === payload_1.g42action; });
              var actionInterop = actionDefinition.interop;
              if (actionInterop) {
                  this.interop.invoke(actionInterop.method, actionInterop.arguments || {}, actionInterop.target || "best");
              }
              notification.dispatchEvent(event_1);
          }
          else if (args.notification && args.notification.sourceNotificationId) {
              var id = args.notification.sourceNotificationId;
              var notification = this.notifications[id];
              if (!notification) {
                  return;
              }
              var event_2 = new Event("onclick");
              if (notification.onclick) {
                  notification.onclick(event_2);
              }
              var clickInterop = notification.options.clickInterop;
              if (clickInterop) {
                  this.interop.invoke(clickInterop.method, clickInterop.arguments || {}, clickInterop.target || "best");
              }
              notification.dispatchEvent(event_2);
          }
      };
      return Notifications;
  }());

  var ThemesConfigurationMethodName = "T42.Themes.Configuration";
  var ThemesImpl = (function () {
      function ThemesImpl(core) {
          this.core = core;
          this.registry = lib$2();
          this.isSubscribed = false;
          this.getConfiguration();
      }
      ThemesImpl.prototype.list = function () {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.getConfiguration()];
                      case 1:
                          _a.sent();
                          if (!this.getMethodName) {
                              throw new Error("not supported");
                          }
                          return [4, this.getAll()];
                      case 2: return [2, (_a.sent()).returned.all];
                  }
              });
          });
      };
      ThemesImpl.prototype.getCurrent = function () {
          return __awaiter(this, void 0, void 0, function () {
              var all;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.getConfiguration()];
                      case 1:
                          _a.sent();
                          if (!this.getMethodName) {
                              throw new Error("not supported");
                          }
                          return [4, this.getAll()];
                      case 2:
                          all = _a.sent();
                          return [2, all.returned.all.find(function (t) { return t.name === all.returned.selected; })];
                  }
              });
          });
      };
      ThemesImpl.prototype.select = function (theme) {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.getConfiguration()];
                      case 1:
                          _a.sent();
                          if (!this.setMethodName) {
                              throw new Error("not supported");
                          }
                          return [4, this.core.interop.invoke(this.setMethodName, { theme: theme })];
                      case 2:
                          _a.sent();
                          return [2];
                  }
              });
          });
      };
      ThemesImpl.prototype.onChanged = function (callback) {
          this.subscribe();
          return this.registry.add("changed", callback);
      };
      ThemesImpl.prototype.getConfiguration = function () {
          return __awaiter(this, void 0, void 0, function () {
              var config;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                          _a.trys.push([0, 2, , 3]);
                          if (this.sharedContextName) {
                              return [2];
                          }
                          return [4, this.core.interop.invoke(ThemesConfigurationMethodName)];
                      case 1:
                          config = _a.sent();
                          this.sharedContextName = config.returned.sharedContextName;
                          this.getMethodName = config.returned.getThemesMethodName;
                          this.setMethodName = config.returned.setThemesMethodName;
                          return [3, 3];
                      case 2:
                          _a.sent();
                          return [2];
                      case 3: return [2];
                  }
              });
          });
      };
      ThemesImpl.prototype.getAll = function () {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.getConfiguration()];
                      case 1:
                          _a.sent();
                          return [4, this.core.interop.invoke(this.getMethodName)];
                      case 2: return [2, _a.sent()];
                  }
              });
          });
      };
      ThemesImpl.prototype.subscribe = function () {
          return __awaiter(this, void 0, void 0, function () {
              var _this = this;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.getConfiguration()];
                      case 1:
                          _a.sent();
                          if (this.isSubscribed) {
                              return [2];
                          }
                          this.isSubscribed = true;
                          this.core.contexts.subscribe(this.sharedContextName, function (data) {
                              if (data && data.all && data.selected) {
                                  _this.registry.execute("changed", data.all.find(function (t) { return t.name === data.selected; }));
                              }
                          });
                          return [2];
                  }
              });
          });
      };
      return ThemesImpl;
  }());

  function factory$2(core) {
      var themes = new ThemesImpl(core);
      return {
          list: themes.list.bind(themes),
          getCurrent: themes.getCurrent.bind(themes),
          select: themes.select.bind(themes),
          onChanged: themes.onChanged.bind(themes),
          ready: function () { return Promise.resolve(); },
      };
  }

  var GLUE42_FDC3_INTENTS_METHOD_PREFIX = "Tick42.FDC3.Intents.";
  var Intents = (function () {
      function Intents(interop, windows, logger) {
          this.interop = interop;
          this.windows = windows;
          this.logger = logger;
      }
      Intents.prototype.find = function (intentFilter) {
          return __awaiter(this, void 0, void 0, function () {
              var intents, ctToLower_1;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.all()];
                      case 1:
                          intents = _a.sent();
                          if (typeof intentFilter === "undefined") {
                              return [2, intents];
                          }
                          if (typeof intentFilter === "string") {
                              return [2, intents.filter(function (intent) { return intent.name === intentFilter; })];
                          }
                          if (typeof intentFilter !== "object") {
                              throw new Error("Please provide the intentFilter as a string or an object!");
                          }
                          if (intentFilter.contextType) {
                              ctToLower_1 = intentFilter.contextType.toLowerCase();
                              intents = intents.filter(function (intent) { return intent.handlers.some(function (handler) { var _a; return (_a = handler.contextTypes) === null || _a === void 0 ? void 0 : _a.some(function (ct) { return ct.toLowerCase() === ctToLower_1; }); }); });
                          }
                          if (intentFilter.name) {
                              intents = intents.filter(function (intent) { return intent.name === intentFilter.name; });
                          }
                          return [2, intents];
                  }
              });
          });
      };
      Intents.prototype.raise = function (intent) {
          return __awaiter(this, void 0, void 0, function () {
              var intentName, intentDef, isDynamicIntent, target, handler, anAppHandler, anInstanceHandler, instanceId, result;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                          if ((typeof intent !== "string" && typeof intent !== "object") || (typeof intent === "object" && typeof intent.intent !== "string")) {
                              throw new Error("Please provide the intent as a string or an object with an intent property!");
                          }
                          if (typeof intent === "string") {
                              intent = {
                                  intent: intent
                              };
                          }
                          intentName = intent.intent;
                          return [4, this.get(intentName)];
                      case 1:
                          intentDef = _a.sent();
                          if (typeof intentDef === "undefined") {
                              throw new Error("Intent " + intentName + " not found.");
                          }
                          isDynamicIntent = !intentDef.handlers.some(function (intentDefHandler) { return intentDefHandler.type === "app"; });
                          target = intent.target || (isDynamicIntent ? "reuse" : "startNew");
                          anAppHandler = intentDef.handlers.find(function (intentHandler) { return intentHandler.type === "app"; });
                          if (target === "startNew") {
                              handler = anAppHandler;
                          }
                          else if (target === "reuse") {
                              anInstanceHandler = intentDef.handlers.find(function (intentHandler) { return intentHandler.type === "instance"; });
                              handler = anInstanceHandler || anAppHandler;
                          }
                          else if (target.instance) {
                              handler = intentDef.handlers.find(function (intentHandler) { return intentHandler.type === "instance" && intentHandler.instanceId === target.instance; });
                          }
                          else if (target.app) {
                              handler = intentDef.handlers.find(function (intentHandler) { return intentHandler.type === "app" && intentHandler.applicationName === target.app; });
                          }
                          else {
                              throw new Error("Invalid intent target: " + JSON.stringify(target));
                          }
                          if (!handler) {
                              throw new Error("Can not raise intent for request " + JSON.stringify(intent) + " - can not find intent handler.");
                          }
                          instanceId = handler.instanceId;
                          if (!(handler.type === "app")) return [3, 3];
                          return [4, this.startApp(handler.applicationName, intent.options)];
                      case 2:
                          instanceId = _a.sent();
                          _a.label = 3;
                      case 3: return [4, this.raiseIntentToInstance(instanceId, intentName, intent.context)];
                      case 4:
                          result = _a.sent();
                          result.request = intent;
                          result.handler = handler;
                          return [2, result];
                  }
              });
          });
      };
      Intents.prototype.all = function () {
          return __awaiter(this, void 0, void 0, function () {
              var apps, result, e_1, intents, appsWithIntents, _i, appsWithIntents_1, app, _a, _b, intentDef, intent, handler, servers, serverWindowIds, T42WndGetInfo, isT42WndGetInfoMethodRegistered, windowsInfos, result, _loop_1, _c, servers_1, server;
              var _this = this;
              return __generator(this, function (_d) {
                  switch (_d.label) {
                      case 0:
                          _d.trys.push([0, 2, , 3]);
                          return [4, this.interop.invoke("T42.ACS.GetApplications", { withIntentsInfo: true })];
                      case 1:
                          result = _d.sent();
                          apps = result.returned.applications;
                          return [3, 3];
                      case 2:
                          e_1 = _d.sent();
                          this.logger.error("Failed to get the applications!", e_1);
                          return [2, []];
                      case 3:
                          intents = {};
                          appsWithIntents = apps.filter(function (app) { return app.intents && app.intents.length > 0; });
                          for (_i = 0, appsWithIntents_1 = appsWithIntents; _i < appsWithIntents_1.length; _i++) {
                              app = appsWithIntents_1[_i];
                              for (_a = 0, _b = app.intents; _a < _b.length; _a++) {
                                  intentDef = _b[_a];
                                  intent = intents[intentDef.name];
                                  if (!intent) {
                                      intent = {
                                          name: intentDef.name,
                                          handlers: [],
                                      };
                                      intents[intentDef.name] = intent;
                                  }
                                  handler = {
                                      applicationName: app.name,
                                      applicationTitle: app.title || "",
                                      applicationDescription: app.caption,
                                      displayName: intentDef.displayName,
                                      contextTypes: intentDef.contexts,
                                      applicationIcon: app.icon,
                                      type: "app"
                                  };
                                  intent.handlers.push(handler);
                              }
                          }
                          servers = this.interop.servers();
                          serverWindowIds = servers.map(function (server) { return server.windowId; }).filter(function (serverWindowId) { return typeof serverWindowId !== "undefined"; });
                          T42WndGetInfo = "T42.Wnd.GetInfo";
                          isT42WndGetInfoMethodRegistered = this.interop.methods().some(function (method) { return method.name === T42WndGetInfo; });
                          if (!isT42WndGetInfoMethodRegistered) return [3, 7];
                          _d.label = 4;
                      case 4:
                          _d.trys.push([4, 6, , 7]);
                          return [4, this.interop.invoke(T42WndGetInfo, { ids: serverWindowIds })];
                      case 5:
                          result = _d.sent();
                          windowsInfos = result.returned.windows;
                          return [3, 7];
                      case 6:
                          _d.sent();
                          return [3, 7];
                      case 7:
                          _loop_1 = function (server) {
                              return __generator(this, function (_a) {
                                  switch (_a.label) {
                                      case 0: return [4, Promise.all(server.getMethods()
                                              .filter(function (method) { return method.name.startsWith(GLUE42_FDC3_INTENTS_METHOD_PREFIX); })
                                              .map(function (method) { return __awaiter(_this, void 0, void 0, function () {
                                              var intentName, intent, info, app, appIntent, title, handler;
                                              var _a, _b, _c, _d, _e;
                                              return __generator(this, function (_f) {
                                                  switch (_f.label) {
                                                      case 0:
                                                          intentName = method.name.replace(GLUE42_FDC3_INTENTS_METHOD_PREFIX, "");
                                                          intent = intents[intentName];
                                                          if (!intent) {
                                                              intent = {
                                                                  name: intentName,
                                                                  handlers: [],
                                                              };
                                                              intents[intentName] = intent;
                                                          }
                                                          info = method.flags.intent;
                                                          app = apps.find(function (appWithIntents) { return appWithIntents.name === server.application; });
                                                          if (app && app.intents) {
                                                              appIntent = app.intents.find(function (appDefIntent) { return appDefIntent.name === intentName; });
                                                          }
                                                          return [4, this.windowsIdToTitle(server.windowId, windowsInfos)];
                                                      case 1:
                                                          title = _f.sent();
                                                          handler = {
                                                              instanceId: server.instance,
                                                              applicationName: server.application,
                                                              applicationIcon: info.icon || ((_a = app) === null || _a === void 0 ? void 0 : _a.icon),
                                                              applicationTitle: ((_b = app) === null || _b === void 0 ? void 0 : _b.title) || "",
                                                              applicationDescription: info.description || ((_c = app) === null || _c === void 0 ? void 0 : _c.caption),
                                                              displayName: info.displayName || ((_d = appIntent) === null || _d === void 0 ? void 0 : _d.displayName),
                                                              contextTypes: info.contextTypes || ((_e = appIntent) === null || _e === void 0 ? void 0 : _e.contexts),
                                                              instanceTitle: title,
                                                              type: "instance"
                                                          };
                                                          intent.handlers.push(handler);
                                                          return [2];
                                                  }
                                              });
                                          }); }))];
                                      case 1:
                                          _a.sent();
                                          return [2];
                                  }
                              });
                          };
                          _c = 0, servers_1 = servers;
                          _d.label = 8;
                      case 8:
                          if (!(_c < servers_1.length)) return [3, 11];
                          server = servers_1[_c];
                          return [5, _loop_1(server)];
                      case 9:
                          _d.sent();
                          _d.label = 10;
                      case 10:
                          _c++;
                          return [3, 8];
                      case 11: return [2, Object.values(intents)];
                  }
              });
          });
      };
      Intents.prototype.addIntentListener = function (intent, handler) {
          var _this = this;
          if ((typeof intent !== "string" && typeof intent !== "object") || (typeof intent === "object" && typeof intent.intent !== "string")) {
              throw new Error("Please provide the intent as a string or an object with an intent property!");
          }
          if (typeof handler !== "function") {
              throw new Error("Please provide the handler as a function!");
          }
          var result = { unsubscribe: function () { return console.log("Could not unsubscribe!"); } };
          var intentName = typeof intent === "string" ? intent : intent.intent;
          var methodName = "" + GLUE42_FDC3_INTENTS_METHOD_PREFIX + intentName;
          var intentFlag = {};
          if (typeof intent === "object") {
              intent.intent; var rest = __rest(intent, ["intent"]);
              intentFlag = rest;
          }
          this.interop.register({ name: methodName, flags: { intent: intentFlag } }, function (args) {
              return handler(args);
          }).then(function () {
              result.unsubscribe = function () {
                  _this.interop.unregister(methodName);
              };
          });
          return result;
      };
      Intents.prototype.get = function (intent) {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.all()];
                      case 1: return [2, (_a.sent()).find(function (registeredIntent) { return registeredIntent.name === intent; })];
                  }
              });
          });
      };
      Intents.prototype.startApp = function (application, options) {
          return __awaiter(this, void 0, void 0, function () {
              var result;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.interop.invoke("T42.ACS.StartApplication", { Name: application, options: options })];
                      case 1:
                          result = _a.sent();
                          return [2, result.returned.Id];
                  }
              });
          });
      };
      Intents.prototype.raiseIntentToInstance = function (instanceId, intent, context) {
          return __awaiter(this, void 0, void 0, function () {
              var methodName, interopServer, method, result;
              var _this = this;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                          methodName = "" + GLUE42_FDC3_INTENTS_METHOD_PREFIX + intent;
                          interopServer = this.interop.servers().find(function (server) { return server.instance === instanceId; });
                          if (!!interopServer) return [3, 2];
                          return [4, (new Promise(function (resolve, reject) {
                                  var timeoutId;
                                  var unsub = _this.interop.serverAdded(function (server) {
                                      if (server.instance === instanceId) {
                                          interopServer = server;
                                          resolve();
                                          clearTimeout(timeoutId);
                                          unsub();
                                      }
                                  });
                                  timeoutId = setTimeout(function () {
                                      unsub();
                                      reject(new Error("Can not find interop server for instance " + instanceId));
                                  }, 30 * 1000);
                              }))];
                      case 1:
                          _a.sent();
                          _a.label = 2;
                      case 2:
                          method = interopServer.getMethods().find(function (registeredMethod) { return registeredMethod.name === methodName; });
                          if (!!method) return [3, 4];
                          return [4, (new Promise(function (resolve, reject) {
                                  var timeoutId;
                                  var unsub = _this.interop.methodAdded(function (addedMethod) {
                                      if (addedMethod.name === methodName) {
                                          resolve();
                                          clearTimeout(timeoutId);
                                          unsub();
                                      }
                                  });
                                  timeoutId = setTimeout(function () {
                                      unsub();
                                      reject(new Error("Can not find interop method " + methodName + " for instance " + instanceId));
                                  }, 10 * 1000);
                              }))];
                      case 3:
                          _a.sent();
                          _a.label = 4;
                      case 4: return [4, this.interop.invoke(methodName, context, { instance: instanceId })];
                      case 5:
                          result = _a.sent();
                          return [2, {
                                  result: result.returned
                              }];
                  }
              });
          });
      };
      Intents.prototype.windowsIdToTitle = function (id, windowsInfos) {
          var _a, _b, _c;
          return __awaiter(this, void 0, void 0, function () {
              var window, title;
              return __generator(this, function (_d) {
                  switch (_d.label) {
                      case 0:
                          if (typeof windowsInfos !== "undefined") {
                              return [2, (_a = windowsInfos.find(function (windowsInfo) { return windowsInfo.id === id; })) === null || _a === void 0 ? void 0 : _a.title];
                          }
                          window = (_b = this.windows) === null || _b === void 0 ? void 0 : _b.findById(id);
                          return [4, ((_c = window) === null || _c === void 0 ? void 0 : _c.getTitle())];
                      case 1:
                          title = _d.sent();
                          return [2, title];
                  }
              });
          });
      };
      return Intents;
  }());

  var InitInfo = (function () {
      function InitInfo() {
          var _this = this;
          this.numberOfCalls = 0;
          this.numberOfCalls = 1;
          this.promise = new Promise(function (resolve, reject) {
              _this.resolve = resolve;
              _this.reject = reject;
          });
      }
      InitInfo.prototype.getPromise = function () {
          this.numberOfCalls++;
          return this.promise;
      };
      InitInfo.prototype.done = function (g) {
          this.resolve(g);
      };
      InitInfo.prototype.error = function (e) {
          this.reject(e);
      };
      return InitInfo;
  }());

  var Prefs = (function () {
      function Prefs(appName, interop) {
          this.appName = appName;
          this.interop = interop;
      }
      Prefs.prototype.get = function (app) {
          return __awaiter(this, void 0, void 0, function () {
              var data;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.interop.invoke("T42.Prefs.Get", { app: (app !== null && app !== void 0 ? app : this.appName) })];
                      case 1:
                          data = (_a.sent());
                          return [2, data.returned];
                  }
              });
          });
      };
      Prefs.prototype.set = function (data, options) {
          var _a, _b;
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_c) {
                  switch (_c.label) {
                      case 0: return [4, this.interop.invoke("T42.Prefs.Set", { app: (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.app, (_b !== null && _b !== void 0 ? _b : this.appName)), data: data, merge: false })];
                      case 1:
                          _c.sent();
                          return [2];
                  }
              });
          });
      };
      Prefs.prototype.update = function (data, options) {
          var _a, _b;
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_c) {
                  switch (_c.label) {
                      case 0: return [4, this.interop.invoke("T42.Prefs.Set", { app: (_b = (_a = options) === null || _a === void 0 ? void 0 : _a.app, (_b !== null && _b !== void 0 ? _b : this.appName)), data: data, merge: true })];
                      case 1:
                          _c.sent();
                          return [2];
                  }
              });
          });
      };
      Prefs.prototype.clear = function (app) {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.interop.invoke("T42.Prefs.Set", { app: (app !== null && app !== void 0 ? app : this.appName), clear: true })];
                      case 1:
                          _a.sent();
                          return [2];
                  }
              });
          });
      };
      Prefs.prototype.getAll = function () {
          return __awaiter(this, void 0, void 0, function () {
              var data;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.interop.invoke("T42.Prefs.Get")];
                      case 1:
                          data = (_a.sent());
                          return [2, data.returned];
                  }
              });
          });
      };
      Prefs.prototype.clearAll = function () {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0: return [4, this.interop.invoke("T42.Prefs.Set", { clear: true })];
                      case 1:
                          _a.sent();
                          return [2];
                  }
              });
          });
      };
      return Prefs;
  }());

  var initInfo;
  var factory$3 = function (options) { return __awaiter(void 0, void 0, void 0, function () {
      var glue42gd, g;
      var _a;
      return __generator(this, function (_b) {
          switch (_b.label) {
              case 0:
                  glue42gd = typeof window !== "undefined" && window.glue42gd;
                  if (glue42gd) {
                      if (initInfo) {
                          return [2, initInfo.getPromise()];
                      }
                      else {
                          initInfo = new InitInfo();
                      }
                  }
                  return [4, factoryCore(options, glue42gd)];
              case 1:
                  g = _b.sent();
                  (_a = initInfo) === null || _a === void 0 ? void 0 : _a.resolve(g);
                  return [2, g];
          }
      });
  }); };
  var factoryCore = function (options, glue42gd) { return __awaiter(void 0, void 0, void 0, function () {
      function createWindows(core) {
          if (glueConfig.windows) {
              var windowsLogger = getLibLogger("windows", core.logger, glueConfig.windows);
              _windows = WindowsFactory(core.agm, windowsLogger, function () {
                  return _appManager;
              }, function () {
                  return _displays;
              }, gdMajorVersion);
              debugLog(_windows);
              return _windows;
          }
      }
      function createActivities(core) {
          var _a, _b;
          if (glueConfig.activities) {
              if (ActivityModule.checkIsUsingGW3Implementation && ActivityModule.checkIsUsingGW3Implementation(core.connection)) {
                  var activityLogger = getLibLogger("activity", core.logger, glueConfig.activities);
                  _activity = new ActivityModule({
                      connection: core.connection,
                      contexts: core.contexts,
                      agm: core.agm,
                      logger: activityLogger,
                      logLevel: "info",
                      disableAutoAnnounce: false,
                      disposeRequestHandling: "exit",
                      announcementInfo: null,
                      windows: _windows,
                      appManagerGetter: function () {
                          return _appManager;
                      },
                      mode: glueConfig.activities.mode,
                      typesToTrack: glueConfig.activities.typesToTrack,
                      activityId: (_b = (_a = glue42gd) === null || _a === void 0 ? void 0 : _a.activityInfo) === null || _b === void 0 ? void 0 : _b.activityId,
                      gdMajorVersion: gdMajorVersion
                  }).api;
                  debugLog(_activity);
                  return _activity;
              }
          }
      }
      function createAppManager(core) {
          if (!glueConfig.appManager) {
              return;
          }
          var logger = getLibLogger("appManager", core.logger, glueConfig.appManager);
          _appManager = AppManagerFactory({
              agm: core.agm,
              windows: _windows,
              logger: logger,
              activities: _activity,
              mode: glueConfig.appManager.mode,
              gdMajorVersion: gdMajorVersion
          });
          debugLog(_appManager);
          return _appManager;
      }
      function createLayouts(core) {
          var _a;
          if (!glueConfig.layouts) {
              return;
          }
          var logger = getLibLogger("layouts", core.logger, glueConfig.layouts);
          var layoutsConfig = glueConfig.layouts;
          var lay = LayoutsFactory({
              agm: core.agm,
              appManager: _appManager,
              activityGetter: function () { return _activity; },
              logger: logger,
              mode: layoutsConfig.mode,
              autoSaveWindowContext: (_a = layoutsConfig.autoSaveWindowContext, (_a !== null && _a !== void 0 ? _a : false)),
              gdMajorVersion: gdMajorVersion
          });
          debugLog(lay);
          return lay;
      }
      function createChannels(core) {
          if (!glueConfig.channels) {
              return;
          }
          if (!core.contexts) {
              return;
          }
          var logger = getLibLogger("channels", core.logger, glueConfig.channels);
          var channelsAPI = factory(core.contexts, core.agm, function () { return _windows; }, logger);
          debugLog(channelsAPI);
          return channelsAPI;
      }
      function createHotkeys(core) {
          var hotkeysAPI = factory$1(core.agm);
          debugLog(hotkeysAPI);
          return hotkeysAPI;
      }
      function createIntents(core) {
          var intentsAPI = new Intents(core.agm, _windows, core.logger.subLogger("intents"));
          debugLog(intentsAPI);
          return intentsAPI;
      }
      function createNotifications(core) {
          var notificationsAPI = new Notifications(core.interop);
          debugLog(notificationsAPI);
          return notificationsAPI;
      }
      function createDisplaysApi(core) {
          if (glueConfig.displays) {
              var displaysLogger = getLibLogger("displays", core.logger, glueConfig.displays);
              _displays = new DisplayManager(core.agm, displaysLogger);
              debugLog(_displays);
              return _displays;
          }
      }
      function createThemes(core) {
          if (!core.contexts) {
              return;
          }
          var themesAPI = factory$2(core);
          debugLog(themesAPI);
          return themesAPI;
      }
      function createPrefs(core) {
          var _a, _b, _c;
          var appName = (_c = (_a = options.application, (_a !== null && _a !== void 0 ? _a : (_b = glue42gd) === null || _b === void 0 ? void 0 : _b.application)), (_c !== null && _c !== void 0 ? _c : core.interop.instance.application));
          var prefs = new Prefs(appName, core.interop);
          debugLog(prefs);
          return prefs;
      }
      function getLibLogger(loggerName, logger, config) {
          var newLogger = logger.subLogger(loggerName);
          if (config && config.logger) {
              var loggerConfig = config.logger;
              if (loggerConfig.console) {
                  newLogger.consoleLevel(loggerConfig.console);
              }
              if (loggerConfig.publish) {
                  newLogger.publishLevel(loggerConfig.publish);
              }
          }
          return newLogger;
      }
      function debugLog(entry) {
          currentLog.push(entry);
      }
      var gdMajorVersion, glueConfig, _appManager, _activity, _windows, _displays, ext, currentLog, glueApi;
      var _a;
      return __generator(this, function (_b) {
          switch (_b.label) {
              case 0:
                  gdMajorVersion = Utils$1.getGDMajorVersion();
                  options = options || {};
                  glueConfig = prepareConfig$1(options);
                  options.gateway = options.gateway || {};
                  ext = {
                      libs: [
                          { name: "windows", create: createWindows },
                          { name: "activities", create: createActivities },
                          { name: "appManager", create: createAppManager },
                          { name: "layouts", create: createLayouts },
                          { name: "channels", create: createChannels },
                          { name: "hotkeys", create: createHotkeys },
                          { name: "displays", create: createDisplaysApi },
                          { name: "intents", create: createIntents },
                          { name: "notifications", create: createNotifications },
                          { name: "themes", create: createThemes },
                          { name: "prefs", create: createPrefs }
                      ],
                      version: version$2,
                      enrichGlue: function (glue) {
                          glue.config.activities = glueConfig.activities;
                          glue.config.windows = glueConfig.windows;
                          glue.config.appManager = glueConfig.appManager;
                          glue.config.layouts = glueConfig.layouts;
                          glue.config.channels = glueConfig.channels;
                          glue.config.displays = glueConfig.displays;
                      },
                  };
                  currentLog = [];
                  if (typeof window !== "undefined") {
                      if (!window.glueFactoryLog) {
                          window.glueFactoryLog = [];
                      }
                      window.glueFactoryLog.push(currentLog);
                  }
                  return [4, GlueCore(options, ext)];
              case 1:
                  glueApi = (_b.sent());
                  if (!(Array.isArray((_a = options) === null || _a === void 0 ? void 0 : _a.libraries) && options.libraries.length)) return [3, 3];
                  return [4, Promise.all(options.libraries.map(function (lib) { return lib(glueApi, options); }))];
              case 2:
                  _b.sent();
                  _b.label = 3;
              case 3: return [2, glueApi];
          }
      });
  }); };
  factory$3.coreVersion = GlueCore.version;
  factory$3.version = version$2;
  factory$3.initInfo = initInfo;

  var whatToExpose = factory$3;
  var shouldSetToWindow = true;
  if (typeof window !== "undefined") {
      var glue42gd = window.glue42gd;
      if (glue42gd && glue42gd.autoInjected) {
          whatToExpose = window.Glue;
          shouldSetToWindow = false;
      }
      if (shouldSetToWindow) {
          window.Glue = whatToExpose;
      }
      delete window.GlueCore;
  }
  whatToExpose.default = whatToExpose;
  var whatToExpose$1 = whatToExpose;

  async function initializeGlue() {
      try {
          return whatToExpose$1({ layouts: "full" });
      }
      catch (error) {
          console.warn(error);
      }
  }

  async function fetchFromJSON(location) {
      const response = await fetch(location);
      if (!response.ok) {
          throw new Error("error reading file" + response.status);
      }
      return response.json();
  }

  function getMode() {
      let mode;
      if (document.getElementById('Merge').checked == true) {
          mode = "merge";
      }
      else if (document.getElementById('Replace').checked == true) {
          mode = "replace";
      }
      else {
          mode = undefined;
      }
      return mode;
  }

  async function importAppGroup(location) {
      const mode = getMode();
      const glue = await initializeGlue();
      const appGrp = await fetchFromJSON(location);
      let toImport;
      if (Array.isArray(appGrp)) {
          toImport = appGrp;
      }
      else {
          toImport = [appGrp];
      }
      if (mode === undefined) {
          window.alert("Mode is not selected, the method will default to mode: Replace!");
      }
      glue.appManager.inMemory.import(toImport, mode)
          .then(() => {
          window.alert("Application group is imported!");
      }).catch((err) => {
          console.warn(err);
      });
  }

  async function removeAppGroup(location) {
      let appGroup = await fetchFromJSON(location);
      if (Array.isArray(appGroup)) {
          appGroup.forEach((appToRemove) => {
              removeApp(appToRemove.name);
          });
      }
      else {
          removeApp(appGroup.name);
      }
  }
  async function removeApp(appName) {
      const glue = await initializeGlue();
      if (glue.appManager.application(appName) === undefined) {
          window.alert("Application with name: " + appName + " doesn't exist!");
      }
      else {
          glue.appManager.inMemory.remove(appName)
              .then(() => {
              window.alert("Removed!");
          })
              .catch((err) => {
              console.warn(err);
          });
      }
  }

  async function clearMemory() {
      const glue = await initializeGlue();
      glue.appManager.inMemory.clear()
          .then(() => {
          window.alert("Memory cleared!");
      })
          .catch((error) => {
          console.warn(error);
      });
  }

  async function getLayouts(type, location) {
      const layoutsConfig = await fetchFromJSON(location);
      let layouts;
      if (Array.isArray(layoutsConfig)) {
          layouts = layoutsConfig.filter(filter => filter.type === type);
      }
      else {
          if (layoutsConfig.type === type) {
              layouts = layouts;
          }
      }
      return layouts;
  }

  async function importLayouts(type, location) {
      const mode = getMode();
      const glue = await initializeGlue();
      const layouts = await getLayouts(type, location);
      console.log(glue.config);
      if (layouts === undefined) {
          window.alert("No such layout type found!");
      }
      else if (mode === undefined) {
          window.alert("Mode is not selected, the method will default to mode: Replace!");
      }
      glue.layouts.import(layouts, mode)
          .then(() => {
          window.alert("Import Successful");
      })
          .catch((err) => {
          console.warn(err);
      });
  }

  async function removeLayouts(location) {
      const glue = await initializeGlue();
      let layoutsToRemove = await fetchFromJSON(location);
      if (Array.isArray(layoutsToRemove)) {
          layoutsToRemove.forEach((layout) => {
              glue.layouts.get(layout.name, layout.type)
                  .then(() => {
                  return glue.layouts.remove(layout.type, layout.name);
              })
                  .catch((err) => {
                  console.warn(err);
              });
          });
      }
      else {
          glue.layouts.get(layoutsToRemove.name, layoutsToRemove.type)
              .then(() => {
              return glue.layouts.remove(layoutsToRemove.type, layoutsToRemove.name);
          })
              .catch((err) => {
              console.warn(err);
          });
      }
      window.alert("Layouts removed!");
  }

  function getCustomAlert() {
      if (document.getElementById) {
          window.alert = function (txt) {
              createCustomAlert(txt);
          };
      }
  }
  let ALERT_TITLE = "Alert";
  let ALERT_BUTTON_TEXT = "Ok";
  function createCustomAlert(txt) {
      const d = document;
      if (d.getElementById("modalContainer"))
          return;
      let mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
      mObj.id = "modalContainer";
      mObj.style.height = d.documentElement.scrollHeight + "px";
      let alertObj = mObj.appendChild(d.createElement("div"));
      alertObj.id = "alertBox";
      if (d.all && !window.opera)
          alertObj.style.top = document.documentElement.scrollTop + "px";
      alertObj.style.left = (d.documentElement.scrollWidth - alertObj.offsetWidth) / 2 + "px";
      alertObj.style.visibility = "visible";
      let h1 = alertObj.appendChild(d.createElement("h1"));
      h1.appendChild(d.createTextNode(ALERT_TITLE));
      let msg = alertObj.appendChild(d.createElement("p"));
      msg.innerHTML = txt;
      let btn = alertObj.appendChild(d.createElement("a"));
      btn.id = "closeBtn";
      btn.appendChild(d.createTextNode(ALERT_BUTTON_TEXT));
      btn.href = "#";
      btn.focus();
      btn.onclick = function () { removeCustomAlert(); return false; };
      alertObj.style.display = "block";
  }
  function removeCustomAlert() {
      document.getElementsByTagName("body")[0].removeChild(document.getElementById("modalContainer"));
      location.reload();
  }

  function checkVersion() {
      initializeGlue()
          .then((glue) => {
          console.log(glue.version);
      })
          .catch((error) => {
          console.warn(error);
      });
  }

  getCustomAlert();
  const layoutsJSONLocation = './definitions/layouts/layouts.json';
  const appGroup1JSONLocation = './definitions/apps/firstAppGroup.json';
  const appGroup2JSONLocation = './definitions/apps/secondAppGroup.json';
  document.addEventListener('DOMContentLoaded', (event) => {
      handleDOMReady();
  });
  function handleDOMReady() {
      checkVersion();
      const importApp1 = document.getElementById("importApp1");
      importApp1.addEventListener("click", importApp1Func);
      const importApp2 = document.getElementById("importApp2");
      importApp2.addEventListener("click", importApp2Func);
      const removeAPP1 = document.getElementById("removeAPP1");
      removeAPP1.addEventListener("click", removeAPP1Func);
      const removeApp2 = document.getElementById("removeApp2");
      removeApp2.addEventListener("click", removeApp2Func);
      const clearMemmory = document.getElementById("clearMemmory");
      clearMemmory.addEventListener("click", clearMemmoryFunc);
      const importWorkspace = document.getElementById("importWorkspace");
      importWorkspace.addEventListener("click", importWorkspaceFunc);
      const importSwimlane = document.getElementById("importSwimlane");
      importSwimlane.addEventListener("click", importSwimlaneFunc);
      const ImportGlobalLayouts = document.getElementById("ImportGlobalLayouts");
      ImportGlobalLayouts.addEventListener("click", importGlobaLayout);
      const removeLayouts = document.getElementById("removeLayouts");
      removeLayouts.addEventListener("click", removeLayoutsFunc);
  }
  function importApp1Func() {
      importAppGroup(appGroup1JSONLocation);
  }
  function importApp2Func() {
      importAppGroup(appGroup2JSONLocation);
  }
  function removeAPP1Func() {
      removeAppGroup(appGroup1JSONLocation);
  }
  function removeApp2Func() {
      removeAppGroup(appGroup2JSONLocation);
  }
  function clearMemmoryFunc() {
      clearMemory();
  }
  function importWorkspaceFunc() {
      const type = 'Workspace';
      importLayouts(type, layoutsJSONLocation);
  }
  function importSwimlaneFunc() {
      const type = 'Swimlane';
      importLayouts(type, layoutsJSONLocation);
  }
  function importGlobaLayout() {
      const type = 'Global';
      importLayouts(type, layoutsJSONLocation);
  }
  function removeLayoutsFunc() {
      removeLayouts(layoutsJSONLocation);
  }

}));

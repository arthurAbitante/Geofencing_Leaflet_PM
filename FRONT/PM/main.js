! function(t) {
    var e = {};

    function n(r) {
        if (e[r]) return e[r].exports;
        var i = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = t, n.c = e, n.d = function(t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t["default"]
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 46)
}([function(t, e, n) {
    "use strict";
    e.a = function(t) {
        var e = L.PM.activeLang;
        o()(s.a, e) || (e = "en");
        return i()(s.a[e], t)
    }, e.b = function(t) {
        return ! function e(t) {
            return t.filter(function(t) {
                return ![null, "", undefined].includes(t)
            }).reduce(function(t, n) {
                return t.concat(Array.isArray(n) ? e(n) : n)
            }, [])
        }(t).length
    };
    var r = n(37),
        i = n.n(r),
        a = n(138),
        o = n.n(a),
        s = n(36)
}, function(t, e, n) {
    "use strict";
    var r = n(40),
        i = L.Class.extend({
            includes: [r.a],
            options: {
                snappable: !0,
                snapDistance: 20,
                tooltips: !0,
                cursorMarker: !0,
                finishOnDoubleClick: !1,
                finishOn: null,
                allowSelfIntersection: !0,
                templineStyle: {},
                hintlineStyle: {
                    color: "#3388ff",
                    dashArray: "5,5"
                },
                markerStyle: {
                    draggable: !0
                }
            },
            initialize: function(t) {
                var e = this;
                this._map = t, this.shapes = ["Marker", "CircleMarker", "Line", "Polygon", "Rectangle", "Circle", "Cut"], this.shapes.forEach(function(t) {
                    e[t] = new L.PM.Draw[t](e._map)
                })
            },
            setPathOptions: function(t) {
                this.options.pathOptions = t
            },
            getShapes: function() {
                return this.shapes
            },
            enable: function(t, e) {
                if (!t) throw new Error("Error: Please pass a shape as a parameter. Possible shapes are: ".concat(this.getShapes().join(",")));
                this.disable(), this[t].enable(e)
            },
            disable: function() {
                var t = this;
                this.shapes.forEach(function(e) {
                    t[e].disable()
                })
            },
            addControls: function() {
                var t = this;
                this.shapes.forEach(function(e) {
                    t[e].addButton()
                })
            }
        });
    e.a = i
}, function(t, e, n) {
    "use strict";
    var r = n(40),
        i = n(151),
        a = L.Class.extend({
            includes: [i.a, r.a],
            options: {
                snappable: !0,
                snapDistance: 20,
                allowSelfIntersection: !0,
                draggable: !0
            },
            isPolygon: function() {
                return this._layer instanceof L.Polygon
            }
        });
    e.a = a
}, function(t, e) {
    t.exports = function(t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e)
    }
}, function(t, e, n) {
    var r = n(25),
        i = "object" == typeof self && self && self.Object === Object && self,
        a = r || i || Function("return this")();
    t.exports = a
}, function(t, e) {
    t.exports = function(t) {
        return null != t && "object" == typeof t
    }
}, function(t, e) {
    var n = Array.isArray;
    t.exports = n
}, function(t, e, n) {
    var r = n(16),
        i = n(66),
        a = n(67),
        o = "[object Null]",
        s = "[object Undefined]",
        l = r ? r.toStringTag : undefined;
    t.exports = function(t) {
        return null == t ? t === undefined ? s : o : l && l in Object(t) ? i(t) : a(t)
    }
}, function(t, e, n) {
    "use strict";

    function r(t, e, n) {
        void 0 === n && (n = {});
        var r = {
            type: "Feature"
        };
        return (0 === n.id || n.id) && (r.id = n.id), n.bbox && (r.bbox = n.bbox), r.properties = e || {}, r.geometry = t, r
    }

    function i(t, e, n) {
        return void 0 === n && (n = {}), r({
            type: "Point",
            coordinates: t
        }, e, n)
    }

    function a(t, e, n) {
        void 0 === n && (n = {});
        for (var i = 0, a = t; i < a.length; i++) {
            var o = a[i];
            if (o.length < 4) throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");
            for (var s = 0; s < o[o.length - 1].length; s++)
                if (o[o.length - 1][s] !== o[0][s]) throw new Error("First and last Position are not equivalent.")
        }
        return r({
            type: "Polygon",
            coordinates: t
        }, e, n)
    }

    function o(t, e, n) {
        if (void 0 === n && (n = {}), t.length < 2) throw new Error("coordinates must be an array of two or more positions");
        return r({
            type: "LineString",
            coordinates: t
        }, e, n)
    }

    function s(t, e) {
        void 0 === e && (e = {});
        var n = {
            type: "FeatureCollection"
        };
        return e.id && (n.id = e.id), e.bbox && (n.bbox = e.bbox), n.features = t, n
    }

    function l(t, e, n) {
        return void 0 === n && (n = {}), r({
            type: "MultiLineString",
            coordinates: t
        }, e, n)
    }

    function u(t, e, n) {
        return void 0 === n && (n = {}), r({
            type: "MultiPoint",
            coordinates: t
        }, e, n)
    }

    function c(t, e, n) {
        return void 0 === n && (n = {}), r({
            type: "MultiPolygon",
            coordinates: t
        }, e, n)
    }

    function h(t, n) {
        void 0 === n && (n = "kilometers");
        var r = e.factors[n];
        if (!r) throw new Error(n + " units is invalid");
        return t * r
    }

    function p(t, n) {
        void 0 === n && (n = "kilometers");
        var r = e.factors[n];
        if (!r) throw new Error(n + " units is invalid");
        return t / r
    }

    function f(t) {
        return 180 * (t % (2 * Math.PI)) / Math.PI
    }

    function d(t) {
        return !isNaN(t) && null !== t && !Array.isArray(t) && !/^\s*$/.test(t)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.earthRadius = 6371008.8, e.factors = {
        centimeters: 100 * e.earthRadius,
        centimetres: 100 * e.earthRadius,
        degrees: e.earthRadius / 111325,
        feet: 3.28084 * e.earthRadius,
        inches: 39.37 * e.earthRadius,
        kilometers: e.earthRadius / 1e3,
        kilometres: e.earthRadius / 1e3,
        meters: e.earthRadius,
        metres: e.earthRadius,
        miles: e.earthRadius / 1609.344,
        millimeters: 1e3 * e.earthRadius,
        millimetres: 1e3 * e.earthRadius,
        nauticalmiles: e.earthRadius / 1852,
        radians: 1,
        yards: e.earthRadius / 1.0936
    }, e.unitsFactors = {
        centimeters: 100,
        centimetres: 100,
        degrees: 1 / 111325,
        feet: 3.28084,
        inches: 39.37,
        kilometers: .001,
        kilometres: .001,
        meters: 1,
        metres: 1,
        miles: 1 / 1609.344,
        millimeters: 1e3,
        millimetres: 1e3,
        nauticalmiles: 1 / 1852,
        radians: 1 / e.earthRadius,
        yards: 1 / 1.0936
    }, e.areaFactors = {
        acres: 247105e-9,
        centimeters: 1e4,
        centimetres: 1e4,
        feet: 10.763910417,
        inches: 1550.003100006,
        kilometers: 1e-6,
        kilometres: 1e-6,
        meters: 1,
        metres: 1,
        miles: 3.86e-7,
        millimeters: 1e6,
        millimetres: 1e6,
        yards: 1.195990046
    }, e.feature = r, e.geometry = function(t, e, n) {
        switch (void 0 === n && (n = {}), t) {
            case "Point":
                return i(e).geometry;
            case "LineString":
                return o(e).geometry;
            case "Polygon":
                return a(e).geometry;
            case "MultiPoint":
                return u(e).geometry;
            case "MultiLineString":
                return l(e).geometry;
            case "MultiPolygon":
                return c(e).geometry;
            default:
                throw new Error(t + " is invalid")
        }
    }, e.point = i, e.points = function(t, e, n) {
        return void 0 === n && (n = {}), s(t.map(function(t) {
            return i(t, e)
        }), n)
    }, e.polygon = a, e.polygons = function(t, e, n) {
        return void 0 === n && (n = {}), s(t.map(function(t) {
            return a(t, e)
        }), n)
    }, e.lineString = o, e.lineStrings = function(t, e, n) {
        return void 0 === n && (n = {}), s(t.map(function(t) {
            return o(t, e)
        }), n)
    }, e.featureCollection = s, e.multiLineString = l, e.multiPoint = u, e.multiPolygon = c, e.geometryCollection = function(t, e, n) {
        return void 0 === n && (n = {}), r({
            type: "GeometryCollection",
            geometries: t
        }, e, n)
    }, e.round = function(t, e) {
        if (void 0 === e && (e = 0), e && !(e >= 0)) throw new Error("precision must be a positive number");
        var n = Math.pow(10, e || 0);
        return Math.round(t * n) / n
    }, e.radiansToLength = h, e.lengthToRadians = p, e.lengthToDegrees = function(t, e) {
        return f(p(t, e))
    }, e.bearingToAzimuth = function(t) {
        var e = t % 360;
        return e < 0 && (e += 360), e
    }, e.radiansToDegrees = f, e.degreesToRadians = function(t) {
        return t % 360 * Math.PI / 180
    }, e.convertLength = function(t, e, n) {
        if (void 0 === e && (e = "kilometers"), void 0 === n && (n = "kilometers"), !(t >= 0)) throw new Error("length must be a positive number");
        return h(p(t, e), n)
    }, e.convertArea = function(t, n, r) {
        if (void 0 === n && (n = "meters"), void 0 === r && (r = "kilometers"), !(t >= 0)) throw new Error("area must be a positive number");
        var i = e.areaFactors[n];
        if (!i) throw new Error("invalid original units");
        var a = e.areaFactors[r];
        if (!a) throw new Error("invalid final units");
        return t / i * a
    }, e.isNumber = d, e.isObject = function(t) {
        return !!t && t.constructor === Object
    }, e.validateBBox = function(t) {
        if (!t) throw new Error("bbox is required");
        if (!Array.isArray(t)) throw new Error("bbox must be an Array");
        if (4 !== t.length && 6 !== t.length) throw new Error("bbox must be an Array of 4 or 6 numbers");
        t.forEach(function(t) {
            if (!d(t)) throw new Error("bbox must only contain numbers")
        })
    }, e.validateId = function(t) {
        if (!t) throw new Error("id is required");
        if (-1 === ["string", "number"].indexOf(typeof t)) throw new Error("id must be a number or a string")
    }, e.radians2degrees = function() {
        throw new Error("method has been renamed to `radiansToDegrees`")
    }, e.degrees2radians = function() {
        throw new Error("method has been renamed to `degreesToRadians`")
    }, e.distanceToDegrees = function() {
        throw new Error("method has been renamed to `lengthToDegrees`")
    }, e.distanceToRadians = function() {
        throw new Error("method has been renamed to `lengthToRadians`")
    }, e.radiansToDistance = function() {
        throw new Error("method has been renamed to `radiansToLength`")
    }, e.bearingToAngle = function() {
        throw new Error("method has been renamed to `bearingToAzimuth`")
    }, e.convertDistance = function() {
        throw new Error("method has been renamed to `convertLength`")
    }
}, function(t, e, n) {
    var r = n(54),
        i = n(55),
        a = n(56),
        o = n(57),
        s = n(58);

    function l(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }
    l.prototype.clear = r, l.prototype["delete"] = i, l.prototype.get = a, l.prototype.has = o, l.prototype.set = s, t.exports = l
}, function(t, e, n) {
    var r = n(11);
    t.exports = function(t, e) {
        for (var n = t.length; n--;)
            if (r(t[n][0], e)) return n;
        return -1
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return t === e || t != t && e != e
    }
}, function(t, e, n) {
    var r = n(14)(Object, "create");
    t.exports = r
}, function(t, e, n) {
    var r = n(80);
    t.exports = function(t, e) {
        var n = t.__data__;
        return r(e) ? n["string" == typeof e ? "string" : "hash"] : n.map
    }
}, function(t, e, n) {
    var r = n(64),
        i = n(71);
    t.exports = function(t, e) {
        var n = i(t, e);
        return r(n) ? n : undefined
    }
}, function(t, e, n) {
    var r = n(7),
        i = n(3),
        a = "[object AsyncFunction]",
        o = "[object Function]",
        s = "[object GeneratorFunction]",
        l = "[object Proxy]";
    t.exports = function(t) {
        if (!i(t)) return !1;
        var e = r(t);
        return e == o || e == s || e == a || e == l
    }
}, function(t, e, n) {
    var r = n(4).Symbol;
    t.exports = r
}, function(t, e, n) {
    var r = n(28);
    t.exports = function(t, e, n) {
        "__proto__" == e && r ? r(t, e, {
            configurable: !0,
            enumerable: !0,
            value: n,
            writable: !0
        }) : t[e] = n
    }
}, function(t, e) {
    t.exports = function(t) {
        return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function() {
                return t.l
            }
        }), Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function() {
                return t.i
            }
        }), t.webpackPolyfill = 1), t
    }
}, function(t, e, n) {
    var r = n(95),
        i = n(5),
        a = Object.prototype,
        o = a.hasOwnProperty,
        s = a.propertyIsEnumerable,
        l = r(function() {
            return arguments
        }()) ? r : function(t) {
            return i(t) && o.call(t, "callee") && !s.call(t, "callee")
        };
    t.exports = l
}, function(t, e, n) {
    var r = n(15),
        i = n(21);
    t.exports = function(t) {
        return null != t && i(t.length) && !r(t)
    }
}, function(t, e) {
    var n = 9007199254740991;
    t.exports = function(t) {
        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= n
    }
}, function(t, e) {
    var n = 9007199254740991,
        r = /^(?:0|[1-9]\d*)$/;
    t.exports = function(t, e) {
        var i = typeof t;
        return !!(e = null == e ? n : e) && ("number" == i || "symbol" != i && r.test(t)) && t > -1 && t % 1 == 0 && t < e
    }
}, function(t, e, n) {
    var r = n(7),
        i = n(5),
        a = "[object Symbol]";
    t.exports = function(t) {
        return "symbol" == typeof t || i(t) && r(t) == a
    }
}, function(t, e, n) {
    var r = n(14)(n(4), "Map");
    t.exports = r
}, function(t, e, n) {
    (function(e) {
        var n = "object" == typeof e && e && e.Object === Object && e;
        t.exports = n
    }).call(e, n(65))
}, function(t, e, n) {
    var r = n(72),
        i = n(79),
        a = n(81),
        o = n(82),
        s = n(83);

    function l(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }
    l.prototype.clear = r, l.prototype["delete"] = i, l.prototype.get = a, l.prototype.has = o, l.prototype.set = s, t.exports = l
}, function(t, e, n) {
    var r = n(17),
        i = n(11);
    t.exports = function(t, e, n) {
        (n === undefined || i(t[e], n)) && (n !== undefined || e in t) || r(t, e, n)
    }
}, function(t, e, n) {
    var r = n(14),
        i = function() {
            try {
                var t = r(Object, "defineProperty");
                return t({}, "", {}), t
            } catch (e) {}
        }();
    t.exports = i
}, function(t, e, n) {
    var r = n(94)(Object.getPrototypeOf, Object);
    t.exports = r
}, function(t, e) {
    var n = Object.prototype;
    t.exports = function(t) {
        var e = t && t.constructor;
        return t === ("function" == typeof e && e.prototype || n)
    }
}, function(t, e, n) {
    (function(t) {
        var r = n(4),
            i = n(97),
            a = "object" == typeof e && e && !e.nodeType && e,
            o = a && "object" == typeof t && t && !t.nodeType && t,
            s = o && o.exports === a ? r.Buffer : undefined,
            l = (s ? s.isBuffer : undefined) || i;
        t.exports = l
    }).call(e, n(18)(t))
}, function(t, e, n) {
    var r = n(99),
        i = n(100),
        a = n(101),
        o = a && a.isTypedArray,
        s = o ? i(o) : r;
    t.exports = s
}, function(t, e) {
    t.exports = function(t, e) {
        if (("constructor" !== e || "function" != typeof t[e]) && "__proto__" != e) return t[e]
    }
}, function(t, e, n) {
    var r = n(105),
        i = n(107),
        a = n(20);
    t.exports = function(t) {
        return a(t) ? r(t, !0) : i(t)
    }
}, function(t, e) {
    t.exports = function(t) {
        return t
    }
}, function(t, e, n) {
    "use strict";
    var r = n(118),
        i = n.n(r),
        a = n(119),
        o = n.n(a),
        s = n(120),
        l = n.n(s),
        u = n(121),
        c = n.n(u),
        h = n(122),
        p = n.n(h),
        f = n(123),
        d = n.n(f),
        g = n(124),
        _ = n.n(g),
        m = n(125),
        y = n.n(m),
        v = n(126),
        b = n.n(v),
        L = n(127),
        k = n.n(L);
    e.a = {
        en: i.a,
        de: o.a,
        it: l.a,
        ro: c.a,
        ru: p.a,
        es: d.a,
        nl: _.a,
        fr: y.a,
        pt_br: k.a,
        zh: b.a
    }
}, function(t, e, n) {
    var r = n(130);
    t.exports = function(t, e, n) {
        var i = null == t ? undefined : r(t, e);
        return i === undefined ? n : i
    }
}, function(t, e, n) {
    var r = n(6),
        i = n(131),
        a = n(132),
        o = n(135);
    t.exports = function(t, e) {
        return r(t) ? t : i(t, e) ? [t] : a(o(t))
    }
}, function(t, e, n) {
    var r = n(23),
        i = 1 / 0;
    t.exports = function(t) {
        if ("string" == typeof t || r(t)) return t;
        var e = t + "";
        return "0" == e && 1 / t == -i ? "-0" : e
    }
}, function(t, e, n) {
    "use strict";
    var r = n(41),
        i = {
            _initSnappableMarkers: function() {
                this.options.snapDistance = this.options.snapDistance || 30, this._assignEvents(this._markers), this._layer.off("pm:dragstart", this._unsnap, this), this._layer.on("pm:dragstart", this._unsnap, this)
            },
            _assignEvents: function(t) {
                var e = this;
                t.forEach(function(t) {
                    Array.isArray(t) ? e._assignEvents(t) : (t.off("drag", e._handleSnapping, e), t.on("drag", e._handleSnapping, e), t.off("dragend", e._cleanupSnapping, e), t.on("dragend", e._cleanupSnapping, e))
                })
            },
            _unsnap: function() {
                delete this._snapLatLng
            },
            _cleanupSnapping: function() {
                delete this._snapList, this._map.off("pm:remove", this._handleSnapLayerRemoval, this), this.debugIndicatorLines && this.debugIndicatorLines.forEach(function(t) {
                    t.remove()
                })
            },
            _handleSnapLayerRemoval: function(t) {
                var e = t.layer,
                    n = this._snapList.findIndex(function(t) {
                        return t._leaflet_id === e._leaflet_id
                    });
                this._snapList.splice(n, 1)
            },
            _handleSnapping: function(t) {
                var e = this;
                if (t.originalEvent.altKey) return !1;
                if (this._snapList === undefined && this._createSnapList(t), this._snapList.length <= 0) return !1;
                var n, r = t.target,
                    i = this._calcClosestLayer(r.getLatLng(), this._snapList),
                    a = i.layer instanceof L.Marker || i.layer instanceof L.CircleMarker;
                n = a ? i.latlng : this._checkPrioritiySnapping(i);
                var o = this.options.snapDistance,
                    s = {
                        marker: r,
                        snapLatLng: n,
                        segment: i.segment,
                        layer: this._layer,
                        layerInteractedWith: i.layer,
                        distance: i.distance
                    };
                if (s.marker.fire("pm:snapdrag", s), this._layer.fire("pm:snapdrag", s), i.distance < o) {
                    r.setLatLng(n), r._snapped = !0;
                    var l = this._snapLatLng || {},
                        u = n || {};
                    l.lat === u.lat && l.lng === u.lng || (e._snapLatLng = n, r.fire("pm:snap", s), e._layer.fire("pm:snap", s))
                } else this._snapLatLng && (this._unsnap(s), r._snapped = !1, s.marker.fire("pm:unsnap", s), this._layer.fire("pm:unsnap", s));
                return !0
            },
            _checkPrioritiySnapping: function(t) {
                var e, n = this._map,
                    i = t.segment[0],
                    a = t.segment[1],
                    o = t.latlng,
                    s = this._getDistance(n, i, o),
                    l = this._getDistance(n, a, o),
                    u = s < l ? i : a,
                    c = s < l ? s : l;
                if (this.options.snapMiddle) {
                    var h = r.a.calcMiddleLatLng(n, i, a),
                        p = this._getDistance(n, h, o);
                    p < s && p < l && (u = h, c = p)
                }
                return e = c < this.options.snapDistance ? u : o, Object.assign({}, e)
            },
            _createSnapList: function() {
                var t = this,
                    e = [],
                    n = [],
                    r = this._map;
                r.off("pm:remove", this._handleSnapLayerRemoval, this), r.on("pm:remove", this._handleSnapLayerRemoval, this), r.eachLayer(function(t) {
                    if ((t instanceof L.Polyline || t instanceof L.Marker || t instanceof L.CircleMarker) && !0 !== t.options.snapIgnore) {
                        e.push(t);
                        var r = L.polyline([], {
                            color: "red",
                            pmIgnore: !0
                        });
                        r._pmTempLayer = !0, n.push(r)
                    }
                }), e = (e = (e = e.filter(function(e) {
                    return t._layer !== e
                })).filter(function(t) {
                    return t._latlng || t._latlngs && t._latlngs.length > 0
                })).filter(function(t) {
                    return !t._pmTempLayer
                }), this._otherSnapLayers ? this._snapList = e.concat(this._otherSnapLayers) : this._snapList = e, this.debugIndicatorLines = n
            },
            _calcClosestLayer: function(t, e) {
                var n = this,
                    r = {};
                return e.forEach(function(e, i) {
                    var a = n._calcLayerDistances(t, e);
                    n.debugIndicatorLines[i].setLatLngs([t, a.latlng]), (r.distance === undefined || a.distance < r.distance) && ((r = a).layer = e)
                }), r
            },
            _calcLayerDistances: function(t, e) {
                var n, r, i = this,
                    a = this._map,
                    o = e instanceof L.Marker || e instanceof L.CircleMarker,
                    s = e instanceof L.Polygon,
                    l = t,
                    u = o ? e.getLatLng() : e.getLatLngs();
                if (o) return {
                    latlng: Object.assign({}, u),
                    distance: this._getDistance(a, u, l)
                };
                ! function h(t) {
                    t.forEach(function(e, o) {
                        if (Array.isArray(e)) h(e);
                        else {
                            var u, c = e;
                            u = s ? o + 1 === t.length ? 0 : o + 1 : o + 1 === t.length ? undefined : o + 1;
                            var p = t[u];
                            if (p) {
                                var f = i._getDistanceToSegment(a, l, c, p);
                                (r === undefined || f < r) && (r = f, n = [c, p])
                            }
                        }
                    })
                }(u);
                var c = this._getClosestPointOnSegment(a, t, n[0], n[1]);
                return {
                    latlng: Object.assign({}, c),
                    segment: n,
                    distance: r
                }
            },
            _getClosestPointOnSegment: function(t, e, n, r) {
                var i = t.getMaxZoom();
                i === Infinity && (i = t.getZoom());
                var a = t.project(e, i),
                    o = t.project(n, i),
                    s = t.project(r, i),
                    l = L.LineUtil.closestPointOnSegment(a, o, s);
                return t.unproject(l, i)
            },
            _getDistanceToSegment: function(t, e, n, r) {
                var i = t.latLngToLayerPoint(e),
                    a = t.latLngToLayerPoint(n),
                    o = t.latLngToLayerPoint(r);
                return L.LineUtil.pointToSegmentDistance(i, a, o)
            },
            _getDistance: function(t, e, n) {
                return t.latLngToLayerPoint(e).distanceTo(t.latLngToLayerPoint(n))
            }
        };
    e.a = i
}, function(t, e, n) {
    "use strict";
    e.a = {
        calcMiddleLatLng: function(t, e, n) {
            var r = t.project(e),
                i = t.project(n);
            return t.unproject(r._add(i)._divideBy(2))
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(8);

    function i(t, e, n, r, i, a, o, s) {
        var l, u, c, h, p = {
            x: null,
            y: null,
            onLine1: !1,
            onLine2: !1
        };
        return 0 === (l = (s - a) * (n - t) - (o - i) * (r - e)) ? null !== p.x && null !== p.y && p : (h = (n - t) * (u = e - a) - (r - e) * (c = t - i), u = ((o - i) * u - (s - a) * c) / l, c = h / l, p.x = t + u * (n - t), p.y = e + u * (r - e), u >= 0 && u <= 1 && (p.onLine1 = !0), c >= 0 && c <= 1 && (p.onLine2 = !0), !(!p.onLine1 || !p.onLine2) && [p.x, p.y])
    }
    e["default"] = function(t) {
        var e, n, a = {
            type: "FeatureCollection",
            features: []
        };
        if ("LineString" === (n = "Feature" === t.type ? t.geometry : t).type) e = [n.coordinates];
        else if ("MultiLineString" === n.type) e = n.coordinates;
        else if ("MultiPolygon" === n.type) e = [].concat.apply([], n.coordinates);
        else {
            if ("Polygon" !== n.type) throw new Error("Input must be a LineString, MultiLineString, Polygon, or MultiPolygon Feature or Geometry");
            e = n.coordinates
        }
        return e.forEach(function(t) {
            e.forEach(function(e) {
                for (var n = 0; n < t.length - 1; n++)
                    for (var o = n; o < e.length - 1; o++) {
                        if (t === e) {
                            if (1 === Math.abs(n - o)) continue;
                            if (0 === n && o === t.length - 2 && t[n][0] === t[t.length - 1][0] && t[n][1] === t[t.length - 1][1]) continue
                        }
                        var s = i(t[n][0], t[n][1], t[n + 1][0], t[n + 1][1], e[o][0], e[o][1], e[o + 1][0], e[o + 1][1]);
                        s && a.features.push(r.point([s[0], s[1]]))
                    }
            })
        }), a
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(8);
    e.getCoord = function(t) {
        if (!t) throw new Error("coord is required");
        if (!Array.isArray(t)) {
            if ("Feature" === t.type && null !== t.geometry && "Point" === t.geometry.type) return t.geometry.coordinates;
            if ("Point" === t.type) return t.coordinates
        }
        if (Array.isArray(t) && t.length >= 2 && !Array.isArray(t[0]) && !Array.isArray(t[1])) return t;
        throw new Error("coord must be GeoJSON Point or an Array of numbers")
    }, e.getCoords = function(t) {
        if (Array.isArray(t)) return t;
        if ("Feature" === t.type) {
            if (null !== t.geometry) return t.geometry.coordinates
        } else if (t.coordinates) return t.coordinates;
        throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")
    }, e.containsNumber = function i(t) {
        if (t.length > 1 && r.isNumber(t[0]) && r.isNumber(t[1])) return !0;
        if (Array.isArray(t[0]) && t[0].length) return i(t[0]);
        throw new Error("coordinates must only contain numbers")
    }, e.geojsonType = function(t, e, n) {
        if (!e || !n) throw new Error("type and name required");
        if (!t || t.type !== e) throw new Error("Invalid input to " + n + ": must be a " + e + ", given " + t.type)
    }, e.featureOf = function(t, e, n) {
        if (!t) throw new Error("No feature passed");
        if (!n) throw new Error(".featureOf() requires a name");
        if (!t || "Feature" !== t.type || !t.geometry) throw new Error("Invalid input to " + n + ", Feature with geometry required");
        if (!t.geometry || t.geometry.type !== e) throw new Error("Invalid input to " + n + ": must be a " + e + ", given " + t.geometry.type)
    }, e.collectionOf = function(t, e, n) {
        if (!t) throw new Error("No featureCollection passed");
        if (!n) throw new Error(".collectionOf() requires a name");
        if (!t || "FeatureCollection" !== t.type) throw new Error("Invalid input to " + n + ", FeatureCollection required");
        for (var r = 0, i = t.features; r < i.length; r++) {
            var a = i[r];
            if (!a || "Feature" !== a.type || !a.geometry) throw new Error("Invalid input to " + n + ", Feature with geometry required");
            if (!a.geometry || a.geometry.type !== e) throw new Error("Invalid input to " + n + ": must be a " + e + ", given " + a.geometry.type)
        }
    }, e.getGeom = function(t) {
        return "Feature" === t.type ? t.geometry : t
    }, e.getType = function(t, e) {
        return "FeatureCollection" === t.type ? "FeatureCollection" : "GeometryCollection" === t.type ? "GeometryCollection" : "Feature" === t.type && null !== t.geometry ? t.geometry.type : t.type
    }
}, function(t, e, n) {
    ! function(t, n) {
        n(e)
    }(0, function(t) {
        "use strict";

        function e(t, e) {
            return t > e ? 1 : t < e ? -1 : 0
        }
        var n = function(t, n) {
                void 0 === t && (t = e), void 0 === n && (n = !1), this._compare = t, this._root = null, this._size = 0, this._noDuplicates = !!n
            },
            r = {
                size: {
                    configurable: !0
                }
            };
        n.prototype.rotateLeft = function(t) {
            var e = t.right;
            e && (t.right = e.left, e.left && (e.left.parent = t), e.parent = t.parent), t.parent ? t === t.parent.left ? t.parent.left = e : t.parent.right = e : this._root = e, e && (e.left = t), t.parent = e
        }, n.prototype.rotateRight = function(t) {
            var e = t.left;
            e && (t.left = e.right, e.right && (e.right.parent = t), e.parent = t.parent), t.parent ? t === t.parent.left ? t.parent.left = e : t.parent.right = e : this._root = e, e && (e.right = t), t.parent = e
        }, n.prototype._splay = function(t) {
            for (; t.parent;) {
                var e = t.parent;
                e.parent ? e.left === t && e.parent.left === e ? (this.rotateRight(e.parent), this.rotateRight(e)) : e.right === t && e.parent.right === e ? (this.rotateLeft(e.parent), this.rotateLeft(e)) : e.left === t && e.parent.right === e ? (this.rotateRight(e), this.rotateLeft(e)) : (this.rotateLeft(e), this.rotateRight(e)) : e.left === t ? this.rotateRight(e) : this.rotateLeft(e)
            }
        }, n.prototype.splay = function(t) {
            for (var e, n, r, i, a; t.parent;)(n = (e = t.parent).parent) && n.parent ? ((r = n.parent).left === n ? r.left = t : r.right = t, t.parent = r) : (t.parent = null, this._root = t), i = t.left, a = t.right, t === e.left ? (n && (n.left === e ? (e.right ? (n.left = e.right, n.left.parent = n) : n.left = null, e.right = n, n.parent = e) : (i ? (n.right = i, i.parent = n) : n.right = null, t.left = n, n.parent = t)), a ? (e.left = a, a.parent = e) : e.left = null, t.right = e, e.parent = t) : (n && (n.right === e ? (e.left ? (n.right = e.left, n.right.parent = n) : n.right = null, e.left = n, n.parent = e) : (a ? (n.left = a, a.parent = n) : n.left = null, t.right = n, n.parent = t)), i ? (e.right = i, i.parent = e) : e.right = null, t.left = e, e.parent = t)
        }, n.prototype.replace = function(t, e) {
            t.parent ? t === t.parent.left ? t.parent.left = e : t.parent.right = e : this._root = e, e && (e.parent = t.parent)
        }, n.prototype.minNode = function(t) {
            if (void 0 === t && (t = this._root), t)
                for (; t.left;) t = t.left;
            return t
        }, n.prototype.maxNode = function(t) {
            if (void 0 === t && (t = this._root), t)
                for (; t.right;) t = t.right;
            return t
        }, n.prototype.insert = function(t, e) {
            var n = this._root,
                r = null,
                i = this._compare;
            if (this._noDuplicates)
                for (; n;) {
                    if (r = n, 0 === i(n.key, t)) return;
                    n = i(n.key, t) < 0 ? n.right : n.left
                } else
                    for (; n;) r = n, n = i(n.key, t) < 0 ? n.right : n.left;
            return n = {
                key: t,
                data: e,
                left: null,
                right: null,
                parent: r
            }, r ? i(r.key, n.key) < 0 ? r.right = n : r.left = n : this._root = n, this.splay(n), this._size++, n
        }, n.prototype.find = function(t) {
            for (var e = this._root, n = this._compare; e;) {
                var r = n(e.key, t);
                if (r < 0) e = e.right;
                else {
                    if (!(r > 0)) return e;
                    e = e.left
                }
            }
            return null
        }, n.prototype.contains = function(t) {
            for (var e = this._root, n = this._compare; e;) {
                var r = n(t, e.key);
                if (0 === r) return !0;
                e = r < 0 ? e.left : e.right
            }
            return !1
        }, n.prototype.remove = function(t) {
            var e = this.find(t);
            if (!e) return !1;
            if (this.splay(e), e.left)
                if (e.right) {
                    var n = this.minNode(e.right);
                    n.parent !== e && (this.replace(n, n.right), n.right = e.right, n.right.parent = n), this.replace(e, n), n.left = e.left, n.left.parent = n
                } else this.replace(e, e.left);
            else this.replace(e, e.right);
            return this._size--, !0
        }, n.prototype.removeNode = function(t) {
            if (!t) return !1;
            if (this.splay(t), t.left)
                if (t.right) {
                    var e = this.minNode(t.right);
                    e.parent !== t && (this.replace(e, e.right), e.right = t.right, e.right.parent = e), this.replace(t, e), e.left = t.left, e.left.parent = e
                } else this.replace(t, t.left);
            else this.replace(t, t.right);
            return this._size--, !0
        }, n.prototype.erase = function(t) {
            var e = this.find(t);
            if (e) {
                this.splay(e);
                var n = e.left,
                    r = e.right,
                    i = null;
                n && (n.parent = null, i = this.maxNode(n), this.splay(i), this._root = i), r && (n ? i.right = r : this._root = r, r.parent = i), this._size--
            }
        }, n.prototype.pop = function() {
            var t = this._root,
                e = null;
            if (t) {
                for (; t.left;) t = t.left;
                e = {
                    key: t.key,
                    data: t.data
                }, this.remove(t.key)
            }
            return e
        }, n.prototype.next = function(t) {
            var e = t;
            if (e)
                if (e.right)
                    for (e = e.right; e && e.left;) e = e.left;
                else
                    for (e = t.parent; e && e.right === t;) t = e, e = e.parent;
            return e
        }, n.prototype.prev = function(t) {
            var e = t;
            if (e)
                if (e.left)
                    for (e = e.left; e && e.right;) e = e.right;
                else
                    for (e = t.parent; e && e.left === t;) t = e, e = e.parent;
            return e
        }, n.prototype.forEach = function(t) {
            for (var e = this._root, n = [], r = !1, i = 0; !r;) e ? (n.push(e), e = e.left) : n.length > 0 ? (t(e = n.pop(), i++), e = e.right) : r = !0;
            return this
        }, n.prototype.range = function(t, e, n, r) {
            for (var i = [], a = this._compare, o = this._root; 0 !== i.length || o;)
                if (o) i.push(o), o = o.left;
                else {
                    if (a((o = i.pop()).key, e) > 0) break;
                    if (a(o.key, t) >= 0 && n.call(r, o)) return this;
                    o = o.right
                } return this
        }, n.prototype.keys = function() {
            for (var t = this._root, e = [], n = [], r = !1; !r;) t ? (e.push(t), t = t.left) : e.length > 0 ? (t = e.pop(), n.push(t.key), t = t.right) : r = !0;
            return n
        }, n.prototype.values = function() {
            for (var t = this._root, e = [], n = [], r = !1; !r;) t ? (e.push(t), t = t.left) : e.length > 0 ? (t = e.pop(), n.push(t.data), t = t.right) : r = !0;
            return n
        }, n.prototype.at = function(t) {
            for (var e = this._root, n = [], r = !1, i = 0; !r;)
                if (e) n.push(e), e = e.left;
                else if (n.length > 0) {
                if (e = n.pop(), i === t) return e;
                i++, e = e.right
            } else r = !0;
            return null
        }, n.prototype.load = function(t, e, n) {
            if (void 0 === t && (t = []), void 0 === e && (e = []), void 0 === n && (n = !1), 0 !== this._size) throw new Error("bulk-load: tree is not empty");
            var r = t.length;
            return n && function i(t, e, n, r, a) {
                if (n >= r) return;
                var o = t[n + r >> 1];
                var s = n - 1;
                var l = r + 1;
                for (;;) {
                    do {
                        s++
                    } while (a(t[s], o) < 0);
                    do {
                        l--
                    } while (a(t[l], o) > 0);
                    if (s >= l) break;
                    var u = t[s];
                    t[s] = t[l], t[l] = u, u = e[s], e[s] = e[l], e[l] = u
                }
                i(t, e, n, l, a);
                i(t, e, l + 1, r, a)
            }(t, e, 0, r - 1, this._compare), this._root = function a(t, e, n, r, i) {
                var o = i - r;
                if (o > 0) {
                    var s = r + Math.floor(o / 2),
                        l = e[s],
                        u = n[s],
                        c = {
                            key: l,
                            data: u,
                            parent: t
                        };
                    return c.left = a(c, e, n, r, s), c.right = a(c, e, n, s + 1, i), c
                }
                return null
            }(null, t, e, 0, r), this._size = r, this
        }, n.prototype.min = function() {
            var t = this.minNode(this._root);
            return t ? t.key : null
        }, n.prototype.max = function() {
            var t = this.maxNode(this._root);
            return t ? t.key : null
        }, n.prototype.isEmpty = function() {
            return null === this._root
        }, r.size.get = function() {
            return this._size
        }, n.createTree = function(t, e, r, i, a) {
            return new n(r, a).load(t, e, i)
        }, Object.defineProperties(n.prototype, r);
        var i = 0,
            a = 1,
            o = 2,
            s = 3,
            l = 0,
            u = 1,
            c = 2,
            h = 3;

        function p(t, e, n) {
            null === e ? (t.inOut = !1, t.otherInOut = !0) : (t.isSubject === e.isSubject ? (t.inOut = !e.inOut, t.otherInOut = e.otherInOut) : (t.inOut = !e.otherInOut, t.otherInOut = e.isVertical() ? !e.inOut : e.inOut), e && (t.prevInResult = !f(e, n) || e.isVertical() ? e.prevInResult : e)), t.inResult = f(t, n)
        }

        function f(t, e) {
            switch (t.type) {
                case i:
                    switch (e) {
                        case l:
                            return !t.otherInOut;
                        case u:
                            return t.otherInOut;
                        case c:
                            return t.isSubject && t.otherInOut || !t.isSubject && !t.otherInOut;
                        case h:
                            return !0
                    }
                    break;
                case o:
                    return e === l || e === u;
                case s:
                    return e === c;
                case a:
                    return !1
            }
            return !1
        }
        var d = function(t, e, n, r, a) {
            this.left = e, this.point = t, this.otherEvent = n, this.isSubject = r, this.type = a || i, this.inOut = !1, this.otherInOut = !1, this.prevInResult = null, this.inResult = !1, this.resultInOut = !1, this.isExteriorRing = !0
        };

        function g(t, e) {
            return t[0] === e[0] && t[1] === e[1]
        }

        function _(t, e, n) {
            return (t[0] - n[0]) * (e[1] - n[1]) - (e[0] - n[0]) * (t[1] - n[1])
        }

        function m(t, e) {
            var n = t.point,
                r = e.point;
            return n[0] > r[0] ? 1 : n[0] < r[0] ? -1 : n[1] !== r[1] ? n[1] > r[1] ? 1 : -1 : function(t, e, n, r) {
                if (t.left !== e.left) return t.left ? 1 : -1;
                if (0 !== _(n, t.otherEvent.point, e.otherEvent.point)) return t.isBelow(e.otherEvent.point) ? -1 : 1;
                return !t.isSubject && e.isSubject ? 1 : -1
            }(t, e, n)
        }

        function y(t, e, n) {
            var r = new d(e, !1, t, t.isSubject),
                i = new d(e, !0, t.otherEvent, t.isSubject);
            return g(t.point, t.otherEvent.point) && console.warn("what is that, a collapsed segment?", t), r.contourId = i.contourId = t.contourId, m(i, t.otherEvent) > 0 && (t.otherEvent.left = !0, i.left = !1), t.otherEvent.otherEvent = i, t.otherEvent = r, n.push(i), n.push(r), n
        }

        function v(t, e) {
            return t[0] * e[1] - t[1] * e[0]
        }

        function b(t, e) {
            return t[0] * e[0] + t[1] * e[1]
        }

        function L(t, e, n) {
            var r = function(t, e, n, r, i) {
                    var a = [e[0] - t[0], e[1] - t[1]],
                        o = [r[0] - n[0], r[1] - n[1]];

                    function s(t, e, n) {
                        return [t[0] + e * n[0], t[1] + e * n[1]]
                    }
                    var l = [n[0] - t[0], n[1] - t[1]],
                        u = v(a, o),
                        c = u * u,
                        h = b(a, a);
                    if (c > 0) {
                        var p = v(l, o) / u;
                        if (p < 0 || p > 1) return null;
                        var f = v(l, a) / u;
                        return f < 0 || f > 1 ? null : 0 === p || 1 === p ? i ? null : [s(t, p, a)] : 0 === f || 1 === f ? i ? null : [s(n, f, o)] : [s(t, p, a)]
                    }
                    if ((c = (u = v(l, a)) * u) > 0) return null;
                    var d = b(a, l) / h,
                        g = d + b(a, o) / h,
                        _ = Math.min(d, g),
                        m = Math.max(d, g);
                    return _ <= 1 && m >= 0 ? 1 === _ ? i ? null : [s(t, _ > 0 ? _ : 0, a)] : 0 === m ? i ? null : [s(t, m < 1 ? m : 1, a)] : i && 0 === _ && 1 === m ? null : [s(t, _ > 0 ? _ : 0, a), s(t, m < 1 ? m : 1, a)] : null
                }(t.point, t.otherEvent.point, e.point, e.otherEvent.point),
                i = r ? r.length : 0;
            if (0 === i) return 0;
            if (1 === i && (g(t.point, e.point) || g(t.otherEvent.point, e.otherEvent.point))) return 0;
            if (2 === i && t.isSubject === e.isSubject) return 0;
            if (1 === i) return g(t.point, r[0]) || g(t.otherEvent.point, r[0]) || y(t, r[0], n), g(e.point, r[0]) || g(e.otherEvent.point, r[0]) || y(e, r[0], n), 1;
            var l = [],
                u = !1,
                c = !1;
            return g(t.point, e.point) ? u = !0 : 1 === m(t, e) ? l.push(e, t) : l.push(t, e), g(t.otherEvent.point, e.otherEvent.point) ? c = !0 : 1 === m(t.otherEvent, e.otherEvent) ? l.push(e.otherEvent, t.otherEvent) : l.push(t.otherEvent, e.otherEvent), u && c || u ? (e.type = a, t.type = e.inOut === t.inOut ? o : s, u && !c && y(l[1].otherEvent, l[0].point, n), 2) : c ? (y(l[0], l[1].point, n), 3) : l[0] !== l[3].otherEvent ? (y(l[0], l[1].point, n), y(l[1], l[2].point, n), 3) : (y(l[0], l[1].point, n), y(l[3].otherEvent, l[2].point, n), 3)
        }

        function k(t, e) {
            if (t === e) return 0;
            if (0 !== _(t.point, t.otherEvent.point, e.point) || 0 !== _(t.point, t.otherEvent.point, e.otherEvent.point)) return g(t.point, e.point) ? t.isBelow(e.otherEvent.point) ? -1 : 1 : t.point[0] === e.point[0] ? t.point[1] < e.point[1] ? -1 : 1 : 1 === m(t, e) ? e.isAbove(t.point) ? -1 : 1 : t.isBelow(e.point) ? -1 : 1;
            if (t.isSubject !== e.isSubject) return t.isSubject ? -1 : 1;
            var n = t.point,
                r = e.point;
            return n[0] === r[0] && n[1] === r[1] ? (n = t.otherEvent.point, r = e.otherEvent.point, n[0] === r[0] && n[1] === r[1] ? 0 : t.contourId > e.contourId ? 1 : -1) : 1 === m(t, e) ? 1 : -1
        }

        function M(t, e, n, r) {
            var i = t + 1,
                a = e.length;
            if (i > a - 1) return t - 1;
            for (var o = e[t].point, s = e[i].point; i < a && s[0] === o[0] && s[1] === o[1];) {
                if (!n[i]) return i;
                s = e[++i].point
            }
            for (i = t - 1; n[i] && i >= r;) i--;
            return i
        }

        function w(t, e) {
            var n, r, i, a = function(t) {
                    var e, n, r, i, a = [];
                    for (n = 0, r = t.length; n < r; n++)((e = t[n]).left && e.inResult || !e.left && e.otherEvent.inResult) && a.push(e);
                    for (var o = !1; !o;)
                        for (o = !0, n = 0, r = a.length; n < r; n++) n + 1 < r && 1 === m(a[n], a[n + 1]) && (i = a[n], a[n] = a[n + 1], a[n + 1] = i, o = !1);
                    for (n = 0, r = a.length; n < r; n++)(e = a[n]).pos = n;
                    for (n = 0, r = a.length; n < r; n++)(e = a[n]).left || (i = e.pos, e.pos = e.otherEvent.pos, e.otherEvent.pos = i);
                    return a
                }(t),
                o = {},
                s = [];
            for (n = 0, r = a.length; n < r; n++)
                if (!o[n]) {
                    var l = [
                        []
                    ];
                    a[n].isExteriorRing ? e === c && !a[n].isSubject && s.length > 1 ? s[s.length - 1].push(l[0]) : s.push(l) : e !== c || a[n].isSubject || 0 !== s.length ? 0 === s.length ? s.push([
                        [l]
                    ]) : s[s.length - 1].push(l[0]) : s.push(l);
                    var u = s.length - 1,
                        h = n,
                        p = a[n].point;
                    for (l[0].push(p); h >= n;) i = a[h], o[h] = !0, i.left ? (i.resultInOut = !1, i.contourId = u) : (i.otherEvent.resultInOut = !0, i.otherEvent.contourId = u), o[h = i.pos] = !0, l[0].push(a[h].point), h = M(h, a, o, n);
                    i = a[h = -1 === h ? n : h], o[h] = o[i.pos] = !0, i.otherEvent.resultInOut = !0, i.otherEvent.contourId = u
                } return s
        }
        d.prototype.isBelow = function(t) {
            var e = this.point,
                n = this.otherEvent.point;
            return this.left ? (e[0] - t[0]) * (n[1] - t[1]) - (n[0] - t[0]) * (e[1] - t[1]) > 0 : (n[0] - t[0]) * (e[1] - t[1]) - (e[0] - t[0]) * (n[1] - t[1]) > 0
        }, d.prototype.isAbove = function(t) {
            return !this.isBelow(t)
        }, d.prototype.isVertical = function() {
            return this.point[0] === this.otherEvent.point[0]
        }, d.prototype.clone = function() {
            var t = new d(this.point, this.left, this.otherEvent, this.isSubject, this.type);
            return t.inResult = this.inResult, t.prevInResult = this.prevInResult, t.isExteriorRing = this.isExteriorRing, t.inOut = this.inOut, t.otherInOut = this.otherInOut, t
        };
        var C = E,
            x = E;

        function E(t, e) {
            if (!(this instanceof E)) return new E(t, e);
            if (this.data = t || [], this.length = this.data.length, this.compare = e || S, this.length > 0)
                for (var n = (this.length >> 1) - 1; n >= 0; n--) this._down(n)
        }

        function S(t, e) {
            return t < e ? -1 : t > e ? 1 : 0
        }
        E.prototype = {
            push: function(t) {
                this.data.push(t), this.length++, this._up(this.length - 1)
            },
            pop: function() {
                if (0 === this.length) return undefined;
                var t = this.data[0];
                return this.length--, this.length > 0 && (this.data[0] = this.data[this.length], this._down(0)), this.data.pop(), t
            },
            peek: function() {
                return this.data[0]
            },
            _up: function(t) {
                for (var e = this.data, n = this.compare, r = e[t]; t > 0;) {
                    var i = t - 1 >> 1,
                        a = e[i];
                    if (n(r, a) >= 0) break;
                    e[t] = a, t = i
                }
                e[t] = r
            },
            _down: function(t) {
                for (var e = this.data, n = this.compare, r = this.length >> 1, i = e[t]; t < r;) {
                    var a = 1 + (t << 1),
                        o = a + 1,
                        s = e[a];
                    if (o < this.length && n(e[o], s) < 0 && (a = o, s = e[o]), n(s, i) >= 0) break;
                    e[t] = s, t = a
                }
                e[t] = i
            }
        }, C["default"] = x;
        var P = Math.max,
            O = Math.min,
            B = 0;

        function j(t, e, n, r, i, a) {
            var o, s, l, u, c, h;
            for (o = 0, s = t.length - 1; o < s; o++)
                if (l = t[o], u = t[o + 1], c = new d(l, !1, undefined, e), h = new d(u, !1, c, e), c.otherEvent = h, l[0] !== u[0] || l[1] !== u[1]) {
                    c.contourId = h.contourId = n, a || (c.isExteriorRing = !1, h.isExteriorRing = !1), m(c, h) > 0 ? h.left = !0 : c.left = !0;
                    var p = l[0],
                        f = l[1];
                    i[0] = O(i[0], p), i[1] = O(i[1], f), i[2] = P(i[2], p), i[3] = P(i[3], f), r.push(c), r.push(h)
                }
        }
        var D = [];

        function T(t, e, r) {
            "number" == typeof t[0][0][0] && (t = [t]), "number" == typeof e[0][0][0] && (e = [e]);
            var i = function(t, e, n) {
                var r = null;
                return t.length * e.length == 0 && (n === l ? r = D : n === c ? r = t : n !== u && n !== h || (r = 0 === t.length ? e : t)), r
            }(t, e, r);
            if (i) return i === D ? null : i;
            var a = [Infinity, Infinity, -Infinity, -Infinity],
                o = [Infinity, Infinity, -Infinity, -Infinity],
                s = function(t, e, n, r, i) {
                    var a, o, s, l, u, h, p = new C(null, m);
                    for (s = 0, l = t.length; s < l; s++)
                        for (u = 0, h = (a = t[s]).length; u < h; u++)(o = 0 === u) && B++, j(a[u], !0, B, p, n, o);
                    for (s = 0, l = e.length; s < l; s++)
                        for (u = 0, h = (a = e[s]).length; u < h; u++) o = 0 === u, i === c && (o = !1), o && B++, j(a[u], !1, B, p, r, o);
                    return p
                }(t, e, a, o, r);
            return (i = function(t, e, n, r, i) {
                var a = null;
                return (n[0] > r[2] || r[0] > n[2] || n[1] > r[3] || r[1] > n[3]) && (i === l ? a = D : i === c ? a = t : i !== u && i !== h || (a = t.concat(e))), a
            }(t, e, a, o, r)) ? i === D ? null : i : w(function(t, e, r, i, a, o) {
                for (var s, u, h, f = new n(k), d = [], g = Math.min(i[2], a[2]); 0 !== t.length;) {
                    var _ = t.pop();
                    if (d.push(_), o === l && _.point[0] > g || o === c && _.point[0] > i[2]) break;
                    if (_.left) {
                        u = s = f.insert(_), s = s !== (h = f.minNode()) ? f.prev(s) : null, u = f.next(u);
                        var m = s ? s.key : null;
                        if (p(_, m, o), u && 2 === L(_, u.key, t) && (p(_, m, o), p(_, u.key, o)), s && 2 === L(s.key, _, t)) {
                            var y = s;
                            p(m, (y = y !== h ? f.prev(y) : null) ? y.key : null, o), p(_, m, o)
                        }
                    } else _ = _.otherEvent, u = s = f.find(_), s && u && (s = s !== h ? f.prev(s) : null, u = f.next(u), f.remove(_), u && s && L(s.key, u.key, t))
                }
                return d
            }(s, 0, 0, a, o, r), r)
        }
        var I = {
            UNION: u,
            DIFFERENCE: c,
            INTERSECTION: l,
            XOR: h
        };
        t.union = function(t, e) {
            return T(t, e, u)
        }, t.diff = function(t, e) {
            return T(t, e, c)
        }, t.xor = function(t, e) {
            return T(t, e, h)
        }, t.intersection = function(t, e) {
            return T(t, e, l)
        }, t.operations = I, Object.defineProperty(t, "__esModule", {
            value: !0
        })
    })
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(8);

    function i(t, e, n) {
        if (null !== t)
            for (var r, a, o, s, l, u, c, h, p = 0, f = 0, d = t.type, g = "FeatureCollection" === d, _ = "Feature" === d, m = g ? t.features.length : 1, y = 0; y < m; y++) {
                l = (h = !!(c = g ? t.features[y].geometry : _ ? t.geometry : t) && "GeometryCollection" === c.type) ? c.geometries.length : 1;
                for (var v = 0; v < l; v++) {
                    var b = 0,
                        L = 0;
                    if (null !== (s = h ? c.geometries[v] : c)) {
                        u = s.coordinates;
                        var k = s.type;
                        switch (p = !n || "Polygon" !== k && "MultiPolygon" !== k ? 0 : 1, k) {
                            case null:
                                break;
                            case "Point":
                                if (!1 === e(u, f, y, b, L)) return !1;
                                f++, b++;
                                break;
                            case "LineString":
                            case "MultiPoint":
                                for (r = 0; r < u.length; r++) {
                                    if (!1 === e(u[r], f, y, b, L)) return !1;
                                    f++, "MultiPoint" === k && b++
                                }
                                "LineString" === k && b++;
                                break;
                            case "Polygon":
                            case "MultiLineString":
                                for (r = 0; r < u.length; r++) {
                                    for (a = 0; a < u[r].length - p; a++) {
                                        if (!1 === e(u[r][a], f, y, b, L)) return !1;
                                        f++
                                    }
                                    "MultiLineString" === k && b++, "Polygon" === k && L++
                                }
                                "Polygon" === k && b++;
                                break;
                            case "MultiPolygon":
                                for (r = 0; r < u.length; r++) {
                                    for (L = 0, a = 0; a < u[r].length; a++) {
                                        for (o = 0; o < u[r][a].length - p; o++) {
                                            if (!1 === e(u[r][a][o], f, y, b, L)) return !1;
                                            f++
                                        }
                                        L++
                                    }
                                    b++
                                }
                                break;
                            case "GeometryCollection":
                                for (r = 0; r < s.geometries.length; r++)
                                    if (!1 === i(s.geometries[r], e, n)) return !1;
                                break;
                            default:
                                throw new Error("Unknown Geometry Type")
                        }
                    }
                }
            }
    }

    function a(t, e) {
        var n;
        switch (t.type) {
            case "FeatureCollection":
                for (n = 0; n < t.features.length && !1 !== e(t.features[n].properties, n); n++);
                break;
            case "Feature":
                e(t.properties, 0)
        }
    }

    function o(t, e) {
        if ("Feature" === t.type) e(t, 0);
        else if ("FeatureCollection" === t.type)
            for (var n = 0; n < t.features.length && !1 !== e(t.features[n], n); n++);
    }

    function s(t, e) {
        var n, r, i, a, o, s, l, u, c, h, p = 0,
            f = "FeatureCollection" === t.type,
            d = "Feature" === t.type,
            g = f ? t.features.length : 1;
        for (n = 0; n < g; n++) {
            for (s = f ? t.features[n].geometry : d ? t.geometry : t, u = f ? t.features[n].properties : d ? t.properties : {}, c = f ? t.features[n].bbox : d ? t.bbox : undefined, h = f ? t.features[n].id : d ? t.id : undefined, o = (l = !!s && "GeometryCollection" === s.type) ? s.geometries.length : 1, i = 0; i < o; i++)
                if (null !== (a = l ? s.geometries[i] : s)) switch (a.type) {
                    case "Point":
                    case "LineString":
                    case "MultiPoint":
                    case "Polygon":
                    case "MultiLineString":
                    case "MultiPolygon":
                        if (!1 === e(a, p, u, c, h)) return !1;
                        break;
                    case "GeometryCollection":
                        for (r = 0; r < a.geometries.length; r++)
                            if (!1 === e(a.geometries[r], p, u, c, h)) return !1;
                        break;
                    default:
                        throw new Error("Unknown Geometry Type")
                } else if (!1 === e(null, p, u, c, h)) return !1;
            p++
        }
    }

    function l(t, e) {
        s(t, function(t, n, i, a, o) {
            var s, l = null === t ? null : t.type;
            switch (l) {
                case null:
                case "Point":
                case "LineString":
                case "Polygon":
                    return !1 !== e(r.feature(t, i, {
                        bbox: a,
                        id: o
                    }), n, 0) && void 0
            }
            switch (l) {
                case "MultiPoint":
                    s = "Point";
                    break;
                case "MultiLineString":
                    s = "LineString";
                    break;
                case "MultiPolygon":
                    s = "Polygon"
            }
            for (var u = 0; u < t.coordinates.length; u++) {
                var c = {
                    type: s,
                    coordinates: t.coordinates[u]
                };
                if (!1 === e(r.feature(c, i), n, u)) return !1
            }
        })
    }

    function u(t, e) {
        l(t, function(t, n, a) {
            var o = 0;
            if (t.geometry) {
                var s = t.geometry.type;
                if ("Point" !== s && "MultiPoint" !== s) {
                    var l, u = 0,
                        c = 0,
                        h = 0;
                    return !1 !== i(t, function(i, s, p, f, d) {
                        if (l === undefined || n > u || f > c || d > h) return l = i, u = n, c = f, h = d, void(o = 0);
                        var g = r.lineString([l, i], t.properties);
                        if (!1 === e(g, n, a, d, o)) return !1;
                        o++, l = i
                    }) && void 0
                }
            }
        })
    }

    function c(t, e) {
        if (!t) throw new Error("geojson is required");
        l(t, function(t, n, i) {
            if (null !== t.geometry) {
                var a = t.geometry.type,
                    o = t.geometry.coordinates;
                switch (a) {
                    case "LineString":
                        if (!1 === e(t, n, i, 0, 0)) return !1;
                        break;
                    case "Polygon":
                        for (var s = 0; s < o.length; s++)
                            if (!1 === e(r.lineString(o[s], t.properties), n, i, s)) return !1
                }
            }
        })
    }
    e.coordEach = i, e.coordReduce = function(t, e, n, r) {
        var a = n;
        return i(t, function(t, r, i, o, s) {
            a = 0 === r && n === undefined ? t : e(a, t, r, i, o, s)
        }, r), a
    }, e.propEach = a, e.propReduce = function(t, e, n) {
        var r = n;
        return a(t, function(t, i) {
            r = 0 === i && n === undefined ? t : e(r, t, i)
        }), r
    }, e.featureEach = o, e.featureReduce = function(t, e, n) {
        var r = n;
        return o(t, function(t, i) {
            r = 0 === i && n === undefined ? t : e(r, t, i)
        }), r
    }, e.coordAll = function(t) {
        var e = [];
        return i(t, function(t) {
            e.push(t)
        }), e
    }, e.geomEach = s, e.geomReduce = function(t, e, n) {
        var r = n;
        return s(t, function(t, i, a, o, s) {
            r = 0 === i && n === undefined ? t : e(r, t, i, a, o, s)
        }), r
    }, e.flattenEach = l, e.flattenReduce = function(t, e, n) {
        var r = n;
        return l(t, function(t, i, a) {
            r = 0 === i && 0 === a && n === undefined ? t : e(r, t, i, a)
        }), r
    }, e.segmentEach = u, e.segmentReduce = function(t, e, n) {
        var r = n,
            i = !1;
        return u(t, function(t, a, o, s, l) {
            r = !1 === i && n === undefined ? t : e(r, t, a, o, s, l), i = !0
        }), r
    }, e.lineEach = c, e.lineReduce = function(t, e, n) {
        var r = n;
        return c(t, function(t, i, a, o) {
            r = 0 === i && n === undefined ? t : e(r, t, i, a, o)
        }), r
    }, e.findSegment = function(t, e) {
        if (e = e || {}, !r.isObject(e)) throw new Error("options is invalid");
        var n, i = e.featureIndex || 0,
            a = e.multiFeatureIndex || 0,
            o = e.geometryIndex || 0,
            s = e.segmentIndex || 0,
            l = e.properties;
        switch (t.type) {
            case "FeatureCollection":
                i < 0 && (i = t.features.length + i), l = l || t.features[i].properties, n = t.features[i].geometry;
                break;
            case "Feature":
                l = l || t.properties, n = t.geometry;
                break;
            case "Point":
            case "MultiPoint":
                return null;
            case "LineString":
            case "Polygon":
            case "MultiLineString":
            case "MultiPolygon":
                n = t;
                break;
            default:
                throw new Error("geojson is invalid")
        }
        if (null === n) return null;
        var u = n.coordinates;
        switch (n.type) {
            case "Point":
            case "MultiPoint":
                return null;
            case "LineString":
                return s < 0 && (s = u.length + s - 1), r.lineString([u[s], u[s + 1]], l, e);
            case "Polygon":
                return o < 0 && (o = u.length + o), s < 0 && (s = u[o].length + s - 1), r.lineString([u[o][s], u[o][s + 1]], l, e);
            case "MultiLineString":
                return a < 0 && (a = u.length + a), s < 0 && (s = u[a].length + s - 1), r.lineString([u[a][s], u[a][s + 1]], l, e);
            case "MultiPolygon":
                return a < 0 && (a = u.length + a), o < 0 && (o = u[a].length + o), s < 0 && (s = u[a][o].length - s - 1), r.lineString([u[a][o][s], u[a][o][s + 1]], l, e)
        }
        throw new Error("geojson is invalid")
    }, e.findPoint = function(t, e) {
        if (e = e || {}, !r.isObject(e)) throw new Error("options is invalid");
        var n, i = e.featureIndex || 0,
            a = e.multiFeatureIndex || 0,
            o = e.geometryIndex || 0,
            s = e.coordIndex || 0,
            l = e.properties;
        switch (t.type) {
            case "FeatureCollection":
                i < 0 && (i = t.features.length + i), l = l || t.features[i].properties, n = t.features[i].geometry;
                break;
            case "Feature":
                l = l || t.properties, n = t.geometry;
                break;
            case "Point":
            case "MultiPoint":
                return null;
            case "LineString":
            case "Polygon":
            case "MultiLineString":
            case "MultiPolygon":
                n = t;
                break;
            default:
                throw new Error("geojson is invalid")
        }
        if (null === n) return null;
        var u = n.coordinates;
        switch (n.type) {
            case "Point":
                return r.point(u, l, e);
            case "MultiPoint":
                return a < 0 && (a = u.length + a), r.point(u[a], l, e);
            case "LineString":
                return s < 0 && (s = u.length + s), r.point(u[s], l, e);
            case "Polygon":
                return o < 0 && (o = u.length + o), s < 0 && (s = u[o].length + s), r.point(u[o][s], l, e);
            case "MultiLineString":
                return a < 0 && (a = u.length + a), s < 0 && (s = u[a].length + s), r.point(u[a][s], l, e);
            case "MultiPolygon":
                return a < 0 && (a = u.length + a), o < 0 && (o = u[a].length + o), s < 0 && (s = u[a][o].length - s), r.point(u[a][o][s], l, e)
        }
        throw new Error("geojson is invalid")
    }
}, function(t, e, n) {
    t.exports = n(47)
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(48),
        i = (n.n(r), n(49)),
        a = (n.n(i), n(50)),
        o = n(128),
        s = n(1),
        l = (n(141), n(142), n(143), n(144), n(145), n(146), n(147), n(2)),
        u = (n(152), n(153), n(154), n(155), n(156), n(157), n(158), n(159)),
        c = (n.n(u), n(160));
    n.n(c);
    L.PM = L.PM || {
        version: i.version,
        Map: a.a,
        Toolbar: o.a,
        Draw: s.a,
        Edit: l.a,
        activeLang: "en",
        initialize: function() {
            this.addInitHooks()
        },
        addInitHooks: function() {
            L.Map.addInitHook(function() {
                this.options.pmIgnore || (this.pm = new L.PM.Map(this))
            }), L.LayerGroup.addInitHook(function() {
                this.pm = new L.PM.Edit.LayerGroup(this)
            }), L.Marker.addInitHook(function() {
                this.options.pmIgnore || (this.pm = new L.PM.Edit.Marker(this))
            }), L.CircleMarker.addInitHook(function() {
                this.options.pmIgnore || (this.pm = new L.PM.Edit.CircleMarker(this))
            }), L.Polyline.addInitHook(function() {
                this.options.pmIgnore || (this.pm = new L.PM.Edit.Line(this))
            }), L.Polygon.addInitHook(function() {
                this.options.pmIgnore || (this.pm = new L.PM.Edit.Polygon(this))
            }), L.Rectangle.addInitHook(function() {
                this.options.pmIgnore || (this.pm = new L.PM.Edit.Rectangle(this))
            }), L.Circle.addInitHook(function() {
                this.options.pmIgnore || (this.pm = new L.PM.Edit.Circle(this))
            })
        }
    }, L.PM.initialize()
}, function(t, e) {
    Array.prototype.findIndex = Array.prototype.findIndex || function(t) {
        if (null === this) throw new TypeError("Array.prototype.findIndex called on null or undefined");
        if ("function" != typeof t) throw new TypeError("callback must be a function");
        for (var e = Object(this), n = e.length >>> 0, r = arguments[1], i = 0; i < n; i++)
            if (t.call(r, e[i], i, e)) return i;
        return -1
    }, Array.prototype.find = Array.prototype.find || function(t) {
        if (null === this) throw new TypeError("Array.prototype.find called on null or undefined");
        if ("function" != typeof t) throw new TypeError("callback must be a function");
        for (var e = Object(this), n = e.length >>> 0, r = arguments[1], i = 0; i < n; i++) {
            var a = e[i];
            if (t.call(r, a, i, e)) return a
        }
    }, "function" != typeof Object.assign && (Object.assign = function(t) {
        "use strict";
        if (null == t) throw new TypeError("Cannot convert undefined or null to object");
        t = Object(t);
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            if (null != n)
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
        }
        return t
    }), [Element.prototype, CharacterData.prototype, DocumentType.prototype].forEach(function(t) {
        t.hasOwnProperty("remove") || Object.defineProperty(t, "remove", {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            value: function() {
                this.parentNode.removeChild(this)
            }
        })
    })
}, function(t, e) {
    t.exports = {
        name: "leaflet.pm",
        version: "2.2.0",
        description: "A Leaflet Plugin For Editing Geometry Layers in Leaflet 1.0",
        keywords: ["leaflet", "polygon management", "geometry editing", "map data", "map overlay", "polygon", "geojson", "leaflet-draw", "data-field-geojson", "ui-leaflet-draw"],
        files: ["dist"],
        main: "dist/leaflet.pm.min.js",
        dependencies: {
            "@turf/difference": "^6.0.2",
            "@turf/intersect": "^6.1.3",
            "@turf/kinks": "6.x",
            lodash: "^4.17.15"
        },
        devDependencies: {
            "@babel/core": "^7.5.5",
            "@babel/preset-env": "^7.5.5",
            "babel-loader": "^8.0.6",
            "css-loader": "^2.1.1",
            cypress: "^3.4.1",
            eslint: "^4.19.1",
            "eslint-config-airbnb-base": "^12.1.0",
            "eslint-config-prettier": "^3.6.0",
            "eslint-plugin-cypress": "^2.6.1",
            "eslint-plugin-import": "^2.18.2",
            "extract-text-webpack-plugin": "^3.0.2",
            "file-loader": "^0.11.1",
            leaflet: "^1.5.1",
            prettier: "1.16.1",
            "style-loader": "^0.19.0",
            "uglifyjs-webpack-plugin": "^1.3.0",
            "url-loader": "^0.6.2",
            webpack: "^3.12.0"
        },
        peerDependencies: {
            leaflet: "^1.2.0"
        },
        scripts: {
            start: "npm run dev",
            dev: "./node_modules/.bin/webpack --config=webpack.dev.js",
            test: "$(npm bin)/cypress run",
            cypress: "$(npm bin)/cypress open",
            build: "./node_modules/.bin/webpack --config=webpack.build.js",
            prepare: "npm run build",
            "eslint-check": "eslint --print-config . | eslint-config-prettier-check",
            eslint: "eslint src/ --fix",
            prettier: "prettier --write '{src,cypress}/**/*.{js,css}'",
            lint: "npm run eslint && npm run prettier"
        },
        repository: {
            type: "git",
            url: "git://github.com/codeofsumit/leaflet.pm.git"
        },
        author: {
            name: "Sumit Kumar",
            email: "sk@outlook.com",
            url: "http://twitter.com/TweetsOfSumit"
        },
        license: "MIT",
        bugs: {
            url: "https://github.com/codeofsumit/leaflet.pm/issues"
        },
        homepage: "https://leafletpm.now.sh",
        prettier: {
            trailingComma: "es5",
            tabWidth: 2,
            semi: !0,
            singleQuote: !0
        }
    }
}, function(t, e, n) {
    "use strict";
    var r = n(51),
        i = n.n(r),
        a = n(36),
        o = L.Class.extend({
            initialize: function(t) {
                this.map = t, this.Draw = new L.PM.Draw(t), this.Toolbar = new L.PM.Toolbar(t), this._globalRemovalMode = !1
            },
            setLang: function() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "en",
                    e = arguments.length > 1 ? arguments[1] : undefined,
                    n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "en";
                e && (a.a[t] = i()(a.a[n], e)), L.PM.activeLang = t, this.map.pm.Toolbar.reinit()
            },
            addControls: function(t) {
                this.Toolbar.addControls(t)
            },
            removeControls: function() {
                this.Toolbar.removeControls()
            },
            toggleControls: function() {
                this.Toolbar.toggleControls()
            },
            controlsVisible: function() {
                return this.Toolbar.isVisible
            },
            enableDraw: function() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Polygon",
                    e = arguments.length > 1 ? arguments[1] : undefined;
                "Poly" === t && (t = "Polygon"), this.Draw.enable(t, e)
            },
            disableDraw: function() {
                var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Polygon";
                "Poly" === t && (t = "Polygon"), this.Draw.disable(t)
            },
            setPathOptions: function(t) {
                this.Draw.setPathOptions(t)
            },
            findLayers: function() {
                var t = [];
                return this.map.eachLayer(function(e) {
                    (e instanceof L.Polyline || e instanceof L.Marker || e instanceof L.Circle || e instanceof L.CircleMarker) && t.push(e)
                }), t = (t = t.filter(function(t) {
                    return !!t.pm
                })).filter(function(t) {
                    return !t._pmTempLayer
                })
            },
            removeLayer: function(t) {
                var e = t.target;
                !(e._pmTempLayer || e.pm && e.pm.dragging()) && (e.remove(), this.map.fire("pm:remove", {
                    layer: e
                }))
            },
            globalDragModeEnabled: function() {
                return !!this._globalDragMode
            },
            enableGlobalDragMode: function() {
                var t = this.findLayers();
                this._globalDragMode = !0, t.forEach(function(t) {
                    t.pm.enableLayerDrag()
                }), this.map.on("layeradd", this.layerAddHandler, this), this.Toolbar.toggleButton("dragMode", this._globalDragMode), this._fireDragModeEvent(!0)
            },
            disableGlobalDragMode: function() {
                var t = this.findLayers();
                this._globalDragMode = !1, t.forEach(function(t) {
                    t.pm.disableLayerDrag()
                }), this.map.off("layeradd", this.layerAddHandler, this), this.Toolbar.toggleButton("dragMode", this._globalDragMode), this._fireDragModeEvent(!1)
            },
            _fireDragModeEvent: function(t) {
                this.map.fire("pm:globaldragmodetoggled", {
                    enabled: t,
                    map: this.map
                })
            },
            toggleGlobalDragMode: function() {
                this.globalDragModeEnabled() ? this.disableGlobalDragMode() : this.enableGlobalDragMode()
            },
            layerAddHandler: function(t) {
                var e = t.layer;
                !!e.pm && !e._pmTempLayer && (this.globalRemovalEnabled() && (this.disableGlobalRemovalMode(), this.enableGlobalRemovalMode()), this.globalEditEnabled() && (this.disableGlobalEditMode(), this.enableGlobalEditMode()), this.globalDragModeEnabled() && (this.disableGlobalDragMode(), this.enableGlobalDragMode()))
            },
            disableGlobalRemovalMode: function() {
                var t = this;
                this._globalRemovalMode = !1, this.map.eachLayer(function(e) {
                    e.off("click", t.removeLayer, t)
                }), this.map.off("layeradd", this.layerAddHandler, this), this.Toolbar.toggleButton("deleteLayer", this._globalRemovalMode), this._fireRemovalModeEvent(!1)
            },
            enableGlobalRemovalMode: function() {
                var t = this;
                this._globalRemovalMode = !0, this.map.eachLayer(function(e) {
                    (function(t) {
                        return t.pm && !(t.pm.options && t.pm.options.preventMarkerRemoval) && !(t instanceof L.LayerGroup)
                    })(e) && e.on("click", t.removeLayer, t)
                }), this.map.on("layeradd", this.layerAddHandler, this), this.Toolbar.toggleButton("deleteLayer", this._globalRemovalMode), this._fireRemovalModeEvent(!0)
            },
            _fireRemovalModeEvent: function(t) {
                this.map.fire("pm:globalremovalmodetoggled", {
                    enabled: t,
                    map: this.map
                })
            },
            toggleGlobalRemovalMode: function() {
                this.globalRemovalEnabled() ? this.disableGlobalRemovalMode() : this.enableGlobalRemovalMode()
            },
            globalRemovalEnabled: function() {
                return !!this._globalRemovalMode
            },
            globalEditEnabled: function() {
                return this._globalEditMode
            },
            enableGlobalEditMode: function(t) {
                var e = this.findLayers();
                this._globalEditMode = !0, e.forEach(function(e) {
                    e.pm.enable(t)
                }), this.map.on("layeradd", this.layerAddHandler, this), this.Toolbar.toggleButton("editPolygon", this._globalEditMode), this._fireEditModeEvent(!0)
            },
            disableGlobalEditMode: function() {
                var t = this.findLayers();
                this._globalEditMode = !1, t.forEach(function(t) {
                    t.pm.disable()
                }), this.map.on("layeroff", this.layerAddHandler, this), this.Toolbar.toggleButton("editPolygon", this._globalEditMode), this._fireEditModeEvent(!1)
            },
            _fireEditModeEvent: function(t) {
                this.map.fire("pm:globaleditmodetoggled", {
                    enabled: t,
                    map: this.map
                })
            },
            toggleGlobalEditMode: function(t) {
                this.globalEditEnabled() ? this.disableGlobalEditMode() : this.enableGlobalEditMode(t)
            }
        });
    e.a = o
}, function(t, e, n) {
    var r = n(52),
        i = n(109)(function(t, e, n) {
            r(t, e, n)
        });
    t.exports = i
}, function(t, e, n) {
    var r = n(53),
        i = n(27),
        a = n(84),
        o = n(86),
        s = n(3),
        l = n(34),
        u = n(33);
    t.exports = function c(t, e, n, h, p) {
        t !== e && a(e, function(a, l) {
            if (p || (p = new r), s(a)) o(t, e, l, n, c, h, p);
            else {
                var f = h ? h(u(t, l), a, l + "", t, e, p) : undefined;
                f === undefined && (f = a), i(t, l, f)
            }
        }, l)
    }
}, function(t, e, n) {
    var r = n(9),
        i = n(59),
        a = n(60),
        o = n(61),
        s = n(62),
        l = n(63);

    function u(t) {
        var e = this.__data__ = new r(t);
        this.size = e.size
    }
    u.prototype.clear = i, u.prototype["delete"] = a, u.prototype.get = o, u.prototype.has = s, u.prototype.set = l, t.exports = u
}, function(t, e) {
    t.exports = function() {
        this.__data__ = [], this.size = 0
    }
}, function(t, e, n) {
    var r = n(10),
        i = Array.prototype.splice;
    t.exports = function(t) {
        var e = this.__data__,
            n = r(e, t);
        return !(n < 0 || (n == e.length - 1 ? e.pop() : i.call(e, n, 1), --this.size, 0))
    }
}, function(t, e, n) {
    var r = n(10);
    t.exports = function(t) {
        var e = this.__data__,
            n = r(e, t);
        return n < 0 ? undefined : e[n][1]
    }
}, function(t, e, n) {
    var r = n(10);
    t.exports = function(t) {
        return r(this.__data__, t) > -1
    }
}, function(t, e, n) {
    var r = n(10);
    t.exports = function(t, e) {
        var n = this.__data__,
            i = r(n, t);
        return i < 0 ? (++this.size, n.push([t, e])) : n[i][1] = e, this
    }
}, function(t, e, n) {
    var r = n(9);
    t.exports = function() {
        this.__data__ = new r, this.size = 0
    }
}, function(t, e) {
    t.exports = function(t) {
        var e = this.__data__,
            n = e["delete"](t);
        return this.size = e.size, n
    }
}, function(t, e) {
    t.exports = function(t) {
        return this.__data__.get(t)
    }
}, function(t, e) {
    t.exports = function(t) {
        return this.__data__.has(t)
    }
}, function(t, e, n) {
    var r = n(9),
        i = n(24),
        a = n(26),
        o = 200;
    t.exports = function(t, e) {
        var n = this.__data__;
        if (n instanceof r) {
            var s = n.__data__;
            if (!i || s.length < o - 1) return s.push([t, e]), this.size = ++n.size, this;
            n = this.__data__ = new a(s)
        }
        return n.set(t, e), this.size = n.size, this
    }
}, function(t, e, n) {
    var r = n(15),
        i = n(68),
        a = n(3),
        o = n(70),
        s = /^\[object .+?Constructor\]$/,
        l = Function.prototype,
        u = Object.prototype,
        c = l.toString,
        h = u.hasOwnProperty,
        p = RegExp("^" + c.call(h).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    t.exports = function(t) {
        return !(!a(t) || i(t)) && (r(t) ? p : s).test(o(t))
    }
}, function(t, e) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (r) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}, function(t, e, n) {
    var r = n(16),
        i = Object.prototype,
        a = i.hasOwnProperty,
        o = i.toString,
        s = r ? r.toStringTag : undefined;
    t.exports = function(t) {
        var e = a.call(t, s),
            n = t[s];
        try {
            t[s] = undefined;
            var r = !0
        } catch (l) {}
        var i = o.call(t);
        return r && (e ? t[s] = n : delete t[s]), i
    }
}, function(t, e) {
    var n = Object.prototype.toString;
    t.exports = function(t) {
        return n.call(t)
    }
}, function(t, e, n) {
    var r = n(69),
        i = function() {
            var t = /[^.]+$/.exec(r && r.keys && r.keys.IE_PROTO || "");
            return t ? "Symbol(src)_1." + t : ""
        }();
    t.exports = function(t) {
        return !!i && i in t
    }
}, function(t, e, n) {
    var r = n(4)["__core-js_shared__"];
    t.exports = r
}, function(t, e) {
    var n = Function.prototype.toString;
    t.exports = function(t) {
        if (null != t) {
            try {
                return n.call(t)
            } catch (e) {}
            try {
                return t + ""
            } catch (e) {}
        }
        return ""
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return null == t ? undefined : t[e]
    }
}, function(t, e, n) {
    var r = n(73),
        i = n(9),
        a = n(24);
    t.exports = function() {
        this.size = 0, this.__data__ = {
            hash: new r,
            map: new(a || i),
            string: new r
        }
    }
}, function(t, e, n) {
    var r = n(74),
        i = n(75),
        a = n(76),
        o = n(77),
        s = n(78);

    function l(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }
    l.prototype.clear = r, l.prototype["delete"] = i, l.prototype.get = a, l.prototype.has = o, l.prototype.set = s, t.exports = l
}, function(t, e, n) {
    var r = n(12);
    t.exports = function() {
        this.__data__ = r ? r(null) : {}, this.size = 0
    }
}, function(t, e) {
    t.exports = function(t) {
        var e = this.has(t) && delete this.__data__[t];
        return this.size -= e ? 1 : 0, e
    }
}, function(t, e, n) {
    var r = n(12),
        i = "__lodash_hash_undefined__",
        a = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
        var e = this.__data__;
        if (r) {
            var n = e[t];
            return n === i ? undefined : n
        }
        return a.call(e, t) ? e[t] : undefined
    }
}, function(t, e, n) {
    var r = n(12),
        i = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
        var e = this.__data__;
        return r ? e[t] !== undefined : i.call(e, t)
    }
}, function(t, e, n) {
    var r = n(12),
        i = "__lodash_hash_undefined__";
    t.exports = function(t, e) {
        var n = this.__data__;
        return this.size += this.has(t) ? 0 : 1, n[t] = r && e === undefined ? i : e, this
    }
}, function(t, e, n) {
    var r = n(13);
    t.exports = function(t) {
        var e = r(this, t)["delete"](t);
        return this.size -= e ? 1 : 0, e
    }
}, function(t, e) {
    t.exports = function(t) {
        var e = typeof t;
        return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
    }
}, function(t, e, n) {
    var r = n(13);
    t.exports = function(t) {
        return r(this, t).get(t)
    }
}, function(t, e, n) {
    var r = n(13);
    t.exports = function(t) {
        return r(this, t).has(t)
    }
}, function(t, e, n) {
    var r = n(13);
    t.exports = function(t, e) {
        var n = r(this, t),
            i = n.size;
        return n.set(t, e), this.size += n.size == i ? 0 : 1, this
    }
}, function(t, e, n) {
    var r = n(85)();
    t.exports = r
}, function(t, e) {
    t.exports = function(t) {
        return function(e, n, r) {
            for (var i = -1, a = Object(e), o = r(e), s = o.length; s--;) {
                var l = o[t ? s : ++i];
                if (!1 === n(a[l], l, a)) break
            }
            return e
        }
    }
}, function(t, e, n) {
    var r = n(27),
        i = n(87),
        a = n(88),
        o = n(91),
        s = n(92),
        l = n(19),
        u = n(6),
        c = n(96),
        h = n(31),
        p = n(15),
        f = n(3),
        d = n(98),
        g = n(32),
        _ = n(33),
        m = n(102);
    t.exports = function(t, e, n, y, v, b, L) {
        var k = _(t, n),
            M = _(e, n),
            w = L.get(M);
        if (w) r(t, n, w);
        else {
            var C = b ? b(k, M, n + "", t, e, L) : undefined,
                x = C === undefined;
            if (x) {
                var E = u(M),
                    S = !E && h(M),
                    P = !E && !S && g(M);
                C = M, E || S || P ? u(k) ? C = k : c(k) ? C = o(k) : S ? (x = !1, C = i(M, !0)) : P ? (x = !1, C = a(M, !0)) : C = [] : d(M) || l(M) ? (C = k, l(k) ? C = m(k) : f(k) && !p(k) || (C = s(M))) : x = !1
            }
            x && (L.set(M, C), v(C, M, y, b, L), L["delete"](M)), r(t, n, C)
        }
    }
}, function(t, e, n) {
    (function(t) {
        var r = n(4),
            i = "object" == typeof e && e && !e.nodeType && e,
            a = i && "object" == typeof t && t && !t.nodeType && t,
            o = a && a.exports === i ? r.Buffer : undefined,
            s = o ? o.allocUnsafe : undefined;
        t.exports = function(t, e) {
            if (e) return t.slice();
            var n = t.length,
                r = s ? s(n) : new t.constructor(n);
            return t.copy(r), r
        }
    }).call(e, n(18)(t))
}, function(t, e, n) {
    var r = n(89);
    t.exports = function(t, e) {
        var n = e ? r(t.buffer) : t.buffer;
        return new t.constructor(n, t.byteOffset, t.length)
    }
}, function(t, e, n) {
    var r = n(90);
    t.exports = function(t) {
        var e = new t.constructor(t.byteLength);
        return new r(e).set(new r(t)), e
    }
}, function(t, e, n) {
    var r = n(4).Uint8Array;
    t.exports = r
}, function(t, e) {
    t.exports = function(t, e) {
        var n = -1,
            r = t.length;
        for (e || (e = Array(r)); ++n < r;) e[n] = t[n];
        return e
    }
}, function(t, e, n) {
    var r = n(93),
        i = n(29),
        a = n(30);
    t.exports = function(t) {
        return "function" != typeof t.constructor || a(t) ? {} : r(i(t))
    }
}, function(t, e, n) {
    var r = n(3),
        i = Object.create,
        a = function() {
            function t() {}
            return function(e) {
                if (!r(e)) return {};
                if (i) return i(e);
                t.prototype = e;
                var n = new t;
                return t.prototype = undefined, n
            }
        }();
    t.exports = a
}, function(t, e) {
    t.exports = function(t, e) {
        return function(n) {
            return t(e(n))
        }
    }
}, function(t, e, n) {
    var r = n(7),
        i = n(5),
        a = "[object Arguments]";
    t.exports = function(t) {
        return i(t) && r(t) == a
    }
}, function(t, e, n) {
    var r = n(20),
        i = n(5);
    t.exports = function(t) {
        return i(t) && r(t)
    }
}, function(t, e) {
    t.exports = function() {
        return !1
    }
}, function(t, e, n) {
    var r = n(7),
        i = n(29),
        a = n(5),
        o = "[object Object]",
        s = Function.prototype,
        l = Object.prototype,
        u = s.toString,
        c = l.hasOwnProperty,
        h = u.call(Object);
    t.exports = function(t) {
        if (!a(t) || r(t) != o) return !1;
        var e = i(t);
        if (null === e) return !0;
        var n = c.call(e, "constructor") && e.constructor;
        return "function" == typeof n && n instanceof n && u.call(n) == h
    }
}, function(t, e, n) {
    var r = n(7),
        i = n(21),
        a = n(5),
        o = {};
    o["[object Float32Array]"] = o["[object Float64Array]"] = o["[object Int8Array]"] = o["[object Int16Array]"] = o["[object Int32Array]"] = o["[object Uint8Array]"] = o["[object Uint8ClampedArray]"] = o["[object Uint16Array]"] = o["[object Uint32Array]"] = !0, o["[object Arguments]"] = o["[object Array]"] = o["[object ArrayBuffer]"] = o["[object Boolean]"] = o["[object DataView]"] = o["[object Date]"] = o["[object Error]"] = o["[object Function]"] = o["[object Map]"] = o["[object Number]"] = o["[object Object]"] = o["[object RegExp]"] = o["[object Set]"] = o["[object String]"] = o["[object WeakMap]"] = !1, t.exports = function(t) {
        return a(t) && i(t.length) && !!o[r(t)]
    }
}, function(t, e) {
    t.exports = function(t) {
        return function(e) {
            return t(e)
        }
    }
}, function(t, e, n) {
    (function(t) {
        var r = n(25),
            i = "object" == typeof e && e && !e.nodeType && e,
            a = i && "object" == typeof t && t && !t.nodeType && t,
            o = a && a.exports === i && r.process,
            s = function() {
                try {
                    var t = a && a.require && a.require("util").types;
                    return t || o && o.binding && o.binding("util")
                } catch (e) {}
            }();
        t.exports = s
    }).call(e, n(18)(t))
}, function(t, e, n) {
    var r = n(103),
        i = n(34);
    t.exports = function(t) {
        return r(t, i(t))
    }
}, function(t, e, n) {
    var r = n(104),
        i = n(17);
    t.exports = function(t, e, n, a) {
        var o = !n;
        n || (n = {});
        for (var s = -1, l = e.length; ++s < l;) {
            var u = e[s],
                c = a ? a(n[u], t[u], u, n, t) : undefined;
            c === undefined && (c = t[u]), o ? i(n, u, c) : r(n, u, c)
        }
        return n
    }
}, function(t, e, n) {
    var r = n(17),
        i = n(11),
        a = Object.prototype.hasOwnProperty;
    t.exports = function(t, e, n) {
        var o = t[e];
        a.call(t, e) && i(o, n) && (n !== undefined || e in t) || r(t, e, n)
    }
}, function(t, e, n) {
    var r = n(106),
        i = n(19),
        a = n(6),
        o = n(31),
        s = n(22),
        l = n(32),
        u = Object.prototype.hasOwnProperty;
    t.exports = function(t, e) {
        var n = a(t),
            c = !n && i(t),
            h = !n && !c && o(t),
            p = !n && !c && !h && l(t),
            f = n || c || h || p,
            d = f ? r(t.length, String) : [],
            g = d.length;
        for (var _ in t) !e && !u.call(t, _) || f && ("length" == _ || h && ("offset" == _ || "parent" == _) || p && ("buffer" == _ || "byteLength" == _ || "byteOffset" == _) || s(_, g)) || d.push(_);
        return d
    }
}, function(t, e) {
    t.exports = function(t, e) {
        for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
        return r
    }
}, function(t, e, n) {
    var r = n(3),
        i = n(30),
        a = n(108),
        o = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
        if (!r(t)) return a(t);
        var e = i(t),
            n = [];
        for (var s in t)("constructor" != s || !e && o.call(t, s)) && n.push(s);
        return n
    }
}, function(t, e) {
    t.exports = function(t) {
        var e = [];
        if (null != t)
            for (var n in Object(t)) e.push(n);
        return e
    }
}, function(t, e, n) {
    var r = n(110),
        i = n(117);
    t.exports = function(t) {
        return r(function(e, n) {
            var r = -1,
                a = n.length,
                o = a > 1 ? n[a - 1] : undefined,
                s = a > 2 ? n[2] : undefined;
            for (o = t.length > 3 && "function" == typeof o ? (a--, o) : undefined, s && i(n[0], n[1], s) && (o = a < 3 ? undefined : o, a = 1), e = Object(e); ++r < a;) {
                var l = n[r];
                l && t(e, l, r, o)
            }
            return e
        })
    }
}, function(t, e, n) {
    var r = n(35),
        i = n(111),
        a = n(113);
    t.exports = function(t, e) {
        return a(i(t, e, r), t + "")
    }
}, function(t, e, n) {
    var r = n(112),
        i = Math.max;
    t.exports = function(t, e, n) {
        return e = i(e === undefined ? t.length - 1 : e, 0),
            function() {
                for (var a = arguments, o = -1, s = i(a.length - e, 0), l = Array(s); ++o < s;) l[o] = a[e + o];
                o = -1;
                for (var u = Array(e + 1); ++o < e;) u[o] = a[o];
                return u[e] = n(l), r(t, this, u)
            }
    }
}, function(t, e) {
    t.exports = function(t, e, n) {
        switch (n.length) {
            case 0:
                return t.call(e);
            case 1:
                return t.call(e, n[0]);
            case 2:
                return t.call(e, n[0], n[1]);
            case 3:
                return t.call(e, n[0], n[1], n[2])
        }
        return t.apply(e, n)
    }
}, function(t, e, n) {
    var r = n(114),
        i = n(116)(r);
    t.exports = i
}, function(t, e, n) {
    var r = n(115),
        i = n(28),
        a = n(35),
        o = i ? function(t, e) {
            return i(t, "toString", {
                configurable: !0,
                enumerable: !1,
                value: r(e),
                writable: !0
            })
        } : a;
    t.exports = o
}, function(t, e) {
    t.exports = function(t) {
        return function() {
            return t
        }
    }
}, function(t, e) {
    var n = 800,
        r = 16,
        i = Date.now;
    t.exports = function(t) {
        var e = 0,
            a = 0;
        return function() {
            var o = i(),
                s = r - (o - a);
            if (a = o, s > 0) {
                if (++e >= n) return arguments[0]
            } else e = 0;
            return t.apply(undefined, arguments)
        }
    }
}, function(t, e, n) {
    var r = n(11),
        i = n(20),
        a = n(22),
        o = n(3);
    t.exports = function(t, e, n) {
        if (!o(n)) return !1;
        var s = typeof e;
        return !!("number" == s ? i(n) && a(e, n.length) : "string" == s && e in n) && r(n[e], t)
    }
}, function(t, e) {
    t.exports = {
        tooltips: {
            placeMarker: "Click to place marker",
            firstVertex: "Click to place first vertex",
            continueLine: "Click to continue drawing",
            finishLine: "Click any existing marker to finish",
            finishPoly: "Click first marker to finish",
            finishRect: "Click to finish",
            startCircle: "Click to place circle center",
            finishCircle: "Click to finish circle",
            placeCircleMarker: "Click to place circle marker"
        },
        actions: {
            finish: "Finish",
            cancel: "Cancel",
            removeLastVertex: "Remove Last Vertex"
        },
        buttonTitles: {
            drawMarkerButton: "Draw Marker",
            drawPolyButton: "Draw Polygons",
            drawLineButton: "Draw Polyline",
            drawCircleButton: "Draw Circle",
            drawRectButton: "Draw Rectangle",
            editButton: "Edit Layers",
            dragButton: "Drag Layers",
            cutButton: "Cut Layers",
            deleteButton: "Remove Layers",
            drawCircleMarkerButton: "Draw Circle Marker"
        }
    }
}, function(t, e) {
    t.exports = {
        tooltips: {
            placeMarker: "Platziere den Marker mit Klick",
            firstVertex: "Platziere den ersten Marker mit Klick",
            continueLine: "Klicke, um weiter zu zeichnen",
            finishLine: "Beende mit Klick auf existierenden Marker",
            finishPoly: "Beende mit Klick auf ersten Marker",
            finishRect: "Beende mit Klick",
            startCircle: "Platziere das Kreiszentrum mit Klick",
            finishCircle: "Beende den Kreis mit Klick",
            placeCircleMarker: "Platziere den Kreismarker mit Klick"
        },
        actions: {
            finish: "Beenden",
            cancel: "Abbrechen",
            removeLastVertex: "Letzten Vertex löschen"
        },
        buttonTitles: {
            drawMarkerButton: "Marker zeichnen",
            drawPolyButton: "Polygon zeichnen",
            drawLineButton: "Polyline zeichnen",
            drawCircleButton: "Kreis zeichnen",
            drawRectButton: "Rechteck zeichnen",
            editButton: "Layer editieren",
            dragButton: "Layer bewegen",
            cutButton: "Layer schneiden",
            deleteButton: "Layer löschen",
            drawCircleMarkerButton: "Kreismarker zeichnen"
        }
    }
}, function(t, e) {
    t.exports = {
        tooltips: {
            placeMarker: "Clicca per posizionare un Marker",
            firstVertex: "Clicca per posizionare il primo vertice",
            continueLine: "Clicca per continuare a disegnare",
            finishLine: "Clicca qualsiasi marker esistente per terminare",
            finishPoly: "Clicca il primo marker per terminare",
            finishRect: "Clicca per terminare",
            startCircle: "Clicca per posizionare il punto centrale del cerchio",
            finishCircle: "Clicca per terminare il cerchio",
            placeCircleMarker: "Clicca per posizionare un Marker del cherchio"
        },
        actions: {
            finish: "Termina",
            cancel: "Annulla",
            removeLastVertex: "Rimuovi l'ultimo vertice"
        },
        buttonTitles: {
            drawMarkerButton: "Disegna Marker",
            drawPolyButton: "Disegna Poligoni",
            drawLineButton: "Disegna Polilinea",
            drawCircleButton: "Disegna Cerchio",
            drawRectButton: "Disegna Rettangolo",
            editButton: "Modifica Livelli",
            dragButton: "Sposta Livelli",
            cutButton: "Ritaglia Livelli",
            deleteButton: "Elimina Livelli",
            drawCircleMarkerButton: "Disegna Marker del Cherchio"
        }
    }
}, function(t, e) {
    t.exports = {
        tooltips: {
            placeMarker: "Adaugă un punct",
            firstVertex: "Apasă aici pentru a adăuga primul Vertex",
            continueLine: "Apasă aici pentru a continua desenul",
            finishLine: "Apasă pe orice obiect pentru a finisa desenul",
            finishPoly: "Apasă pe primul obiect pentru a finisa",
            finishRect: "Apasă pentru a finisa",
            startCircle: "Apasă pentru a desena un cerc",
            finishCircle: "Apasă pentru a finisa un cerc",
            placeCircleMarker: "Adaugă un punct"
        },
        actions: {
            finish: "Termină",
            cancel: "Anulează",
            removeLastVertex: "Șterge ultimul Vertex"
        },
        buttonTitles: {
            drawMarkerButton: "Adaugă o bulină",
            drawPolyButton: "Desenează un poligon",
            drawLineButton: "Desenează o linie",
            drawCircleButton: "Desenează un cerc",
            drawRectButton: "Desenează un dreptunghi",
            editButton: "Editează straturile",
            dragButton: "Mută straturile",
            cutButton: "Taie straturile",
            deleteButton: "Șterge straturile",
            placeCircleMarker: "Adaugă o bulină"
        }
    }
}, function(t, e) {
    t.exports = {
        tooltips: {
            placeMarker: "Щелкните, чтобы поместить маркер",
            firstVertex: "Нажмите, чтобы поместить первый объект",
            continueLine: "Нажмите, чтобы продолжить рисование",
            finishLine: "Щелкните любой существующий маркер для завершения",
            finishPoly: "Выберите первую точку, чтобы закончить",
            finishRect: "Нажмите, чтобы закончить",
            startCircle: "Нажмите чтобы добавить круг",
            finishCircle: "Нажмите чтобы закончить круг",
            placeCircleMarker: "Click to place circle marker"
        },
        actions: {
            finish: "Заканчивать",
            cancel: "Отмена",
            removeLastVertex: "Удалить последний объект на карте"
        },
        buttonTitles: {
            drawMarkerButton: "Добавить маркер",
            drawPolyButton: "Рисовать полигон",
            drawLineButton: "Рисовать Полилинию",
            drawCircleButton: "Рисовать круг",
            drawRectButton: "Рисовать Прямоугольник",
            editButton: "Редактировать слой",
            dragButton: "Перетаскивать слой",
            cutButton: "Вырезать слой",
            deleteButton: "Удалить слой",
            placeCircleMarker: "Щелкните, чтобы поместить маркер"
        }
    }
}, function(t, e) {
    t.exports = {
        tooltips: {
            placeMarker: "Presiona para colocar un marcador",
            firstVertex: "Presiona para colocar el primer vértice",
            continueLine: "Presiona para continuar dibujando",
            finishLine: "Presiona cualquier marcador existente para finalizar",
            finishPoly: "Presiona el primer marcador para finalizar",
            finishRect: "Presiona para finalizar",
            startCircle: "Presiona para colocar el centro del circulo",
            finishCircle: "Presiona para finalizar el circulo",
            placeCircleMarker: "Presiona para colocar un marcador de circulo"
        },
        actions: {
            finish: "Finalizar",
            cancel: "Cancelar",
            removeLastVertex: "Remover ultimo vértice"
        },
        buttonTitles: {
            drawMarkerButton: "Dibujar Marcador",
            drawPolyButton: "Dibujar Polígono",
            drawLineButton: "Dibujar Línea",
            drawCircleButton: "Dibujar Circulo",
            drawRectButton: "Dibujar Rectángulo",
            editButton: "Editar Capas",
            dragButton: "Arrastrar Capas",
            cutButton: "Cortar Capas",
            deleteButton: "Remover Capas",
            drawCircleMarkerButton: "Dibujar Marcador de Circulo"
        }
    }
}, function(t, e) {
    t.exports = {
        tooltips: {
            placeMarker: "Klik om een marker te plaatsen",
            firstVertex: "Klik om het eerste punt te plaatsen",
            continueLine: "Klik om te blijven tekenen",
            finishLine: "Klik op een bestaand punt om te beëindigen",
            finishPoly: "Klik op het eerst punt om te beëindigen",
            finishRect: "Klik om te beëindigen",
            startCircle: "Klik om het middelpunt te plaatsen",
            finishCircle: "Klik om de cirkel te beëindigen",
            placeCircleMarker: "Klik om een marker te plaatsen"
        },
        actions: {
            finish: "Bewaar",
            cancel: "Annuleer",
            removeLastVertex: "Verwijder laatste punt"
        },
        buttonTitles: {
            drawMarkerButton: "Plaats Marker",
            drawPolyButton: "Teken een vlak",
            drawLineButton: "Teken een lijn",
            drawCircleButton: "Teken een cirkel",
            drawRectButton: "Teken een vierkant",
            editButton: "Bewerk",
            dragButton: "Verplaats",
            cutButton: "Knip",
            deleteButton: "Verwijder",
            drawCircleMarkerButton: "Plaats Marker"
        }
    }
}, function(t, e) {
    t.exports = {
        tooltips: {
            placeMarker: "Cliquez pour placer un marqueur",
            firstVertex: "Cliquez pour placer le premier sommet",
            continueLine: "Cliquez pour continuer à dessiner",
            finishLine: "Cliquez sur n'importe quel marqueur pour terminer",
            finishPoly: "Cliquez sur le premier marqueur pour terminer",
            finishRect: "Cliquez pour terminer",
            startCircle: "Cliquez pour placer le centre du cercle",
            finishCircle: "Cliquez pour finir le cercle"
        },
        actions: {
            finish: "Terminer",
            cancel: "Annuler",
            removeLastVertex: "Retirer le dernier sommet"
        },
        buttonTitles: {
            drawMarkerButton: "Placer des marqueurs",
            drawPolyButton: "Dessiner des polygones",
            drawLineButton: "Dessiner des polylignes",
            drawCircleButton: "Dessiner un cercle",
            drawRectButton: "Dessiner un rectangle",
            editButton: "Éditer des calques",
            dragButton: "Déplacer des calques",
            cutButton: "Couper des calques",
            deleteButton: "Supprimer des calques"
        }
    }
}, function(t, e) {
    t.exports = {
        tooltips: {
            placeMarker: "单击放置标记",
            firstVertex: "单击放置首个顶点",
            continueLine: "单击继续绘制",
            finishLine: "单击任何存在的标记以完成",
            finishPoly: "单击第一个标记以完成",
            finishRect: "单击完成",
            startCircle: "单击放置圆心",
            finishCircle: "单击完成圆形"
        },
        actions: {
            finish: "完成",
            cancel: "取消",
            removeLastVertex: "移除最后的顶点"
        },
        buttonTitles: {
            drawMarkerButton: "绘制标记",
            drawPolyButton: "绘制多边形",
            drawLineButton: "绘制线段",
            drawCircleButton: "绘制圆形",
            drawRectButton: "绘制长方形",
            editButton: "编辑图层",
            dragButton: "拖拽图层",
            cutButton: "剪切图层",
            deleteButton: "删除图层"
        }
    }
}, function(t, e) {
    t.exports = {
        tooltips: {
            placeMarker: "Clique para posicionar o marcador",
            firstVertex: "Clique para posicionar o primeiro vértice",
            continueLine: "Clique para continuar desenhando",
            finishLine: "Clique em qualquer marcador existente para finalizar",
            finishPoly: "Clique no primeiro ponto para fechar o polígono",
            finishRect: "Clique para finalizar",
            startCircle: "Clique para posicionar o centro do círculo",
            finishCircle: "Clique para fechar o círculo"
        },
        actions: {
            finish: "Finalizar",
            cancel: "Cancelar",
            removeLastVertex: "Remover último vértice"
        },
        buttonTitles: {
            drawMarkerButton: "Desenhar um marcador",
            drawPolyButton: "Desenhar um polígono",
            drawLineButton: "Desenhar uma polilinha",
            drawCircleButton: "Desenhar um círculo",
            drawRectButton: "Desenhar um retângulo",
            editButton: "Editar camada(s)",
            dragButton: "Mover camada(s)",
            cutButton: "Recortar camada(s)",
            deleteButton: "Remover camada(s)"
        }
    }
}, function(t, e, n) {
    "use strict";
    var r = n(129),
        i = n(0);
    L.Control.PMButton = r.a;
    var a = L.Class.extend({
        options: {
            drawMarker: !0,
            drawRectangle: !0,
            drawPolyline: !0,
            drawPolygon: !0,
            drawCircle: !0,
            drawCircleMarker: !0,
            editMode: !0,
            dragMode: !0,
            cutPolygon: !0,
            removalMode: !0,
            position: "topleft"
        },
        initialize: function(t) {
            this.init(t)
        },
        reinit: function() {
            var t = this.isVisible;
            this.removeControls(), this._defineButtons(), t && this.addControls()
        },
        init: function(t) {
            this.map = t, this.buttons = {}, this.isVisible = !1, this.drawContainer = L.DomUtil.create("div", "leaflet-pm-toolbar leaflet-pm-draw leaflet-bar leaflet-control"), this.editContainer = L.DomUtil.create("div", "leaflet-pm-toolbar leaflet-pm-edit leaflet-bar leaflet-control"), this._defineButtons()
        },
        getButtons: function() {
            return this.buttons
        },
        addControls: function() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.options;
            "undefined" != typeof t.editPolygon && (t.editMode = t.editPolygon), "undefined" != typeof t.deleteLayer && (t.removalMode = t.deleteLayer), L.Util.setOptions(this, t), this.applyIconStyle(), this._showHideButtons(), this.isVisible = !0
        },
        applyIconStyle: function() {
            var t = this.getButtons(),
                e = {
                    geomanIcons: {
                        drawMarker: "control-icon leaflet-pm-icon-marker",
                        drawPolyline: "control-icon leaflet-pm-icon-polyline",
                        drawRectangle: "control-icon leaflet-pm-icon-rectangle",
                        drawPolygon: "control-icon leaflet-pm-icon-polygon",
                        drawCircle: "control-icon leaflet-pm-icon-circle",
                        drawCircleMarker: "control-icon leaflet-pm-icon-circle-marker",
                        editMode: "control-icon leaflet-pm-icon-edit",
                        dragMode: "control-icon leaflet-pm-icon-drag",
                        cutPolygon: "control-icon leaflet-pm-icon-cut",
                        removalMode: "control-icon leaflet-pm-icon-delete"
                    }
                };
            for (var n in t) {
                var r = t[n];
                L.Util.setOptions(r, {
                    className: e.geomanIcons[n]
                })
            }
        },
        removeControls: function() {
            var t = this.getButtons();
            for (var e in t) t[e].remove();
            this.isVisible = !1
        },
        toggleControls: function() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.options;
            this.isVisible ? this.removeControls() : this.addControls(t)
        },
        _addButton: function(t, e) {
            return this.buttons[t] = e, this.options[t] = this.options[t] || !1, this.buttons[t]
        },
        triggerClickOnToggledButtons: function(t) {
            for (var e in this.buttons) this.buttons[e] !== t && this.buttons[e].toggled() && this.buttons[e]._triggerClick()
        },
        toggleButton: function(t, e) {
            return "editPolygon" === t && (t = "editMode"), "deleteLayer" === t && (t = "removalMode"), this.triggerClickOnToggledButtons(this.buttons[t]), this.buttons[t].toggle(e)
        },
        _defineButtons: function() {
            var t = this,
                e = {
                    className: "control-icon leaflet-pm-icon-marker",
                    title: Object(i.a)("buttonTitles.drawMarkerButton"),
                    jsClass: "Marker",
                    onClick: function() {},
                    afterClick: function() {
                        t.map.pm.Draw.Marker.toggle()
                    },
                    doToggle: !0,
                    toggleStatus: !1,
                    disableOtherButtons: !0,
                    position: this.options.position,
                    actions: ["cancel"]
                },
                n = {
                    title: Object(i.a)("buttonTitles.drawPolyButton"),
                    className: "control-icon leaflet-pm-icon-polygon",
                    jsClass: "Polygon",
                    onClick: function() {},
                    afterClick: function() {
                        t.map.pm.Draw.Polygon.toggle()
                    },
                    doToggle: !0,
                    toggleStatus: !1,
                    disableOtherButtons: !0,
                    position: this.options.position,
                    actions: ["finish", "removeLastVertex", "cancel"]
                },
                r = {
                    className: "control-icon leaflet-pm-icon-polyline",
                    title: Object(i.a)("buttonTitles.drawLineButton"),
                    jsClass: "Line",
                    onClick: function() {},
                    afterClick: function() {
                        t.map.pm.Draw.Line.toggle()
                    },
                    doToggle: !0,
                    toggleStatus: !1,
                    disableOtherButtons: !0,
                    position: this.options.position,
                    actions: ["finish", "removeLastVertex", "cancel"]
                },
                a = {
                    title: Object(i.a)("buttonTitles.drawCircleButton"),
                    className: "control-icon leaflet-pm-icon-circle",
                    jsClass: "Circle",
                    onClick: function() {},
                    afterClick: function() {
                        t.map.pm.Draw.Circle.toggle()
                    },
                    doToggle: !0,
                    toggleStatus: !1,
                    disableOtherButtons: !0,
                    position: this.options.position,
                    actions: ["cancel"]
                },
                o = {
                    title: Object(i.a)("buttonTitles.drawCircleMarkerButton"),
                    className: "control-icon leaflet-pm-icon-circle-marker",
                    jsClass: "CircleMarker",
                    onClick: function() {},
                    afterClick: function() {
                        t.map.pm.Draw.CircleMarker.toggle()
                    },
                    doToggle: !0,
                    toggleStatus: !1,
                    disableOtherButtons: !0,
                    position: this.options.position,
                    actions: ["cancel"]
                },
                s = {
                    title: Object(i.a)("buttonTitles.drawRectButton"),
                    className: "control-icon leaflet-pm-icon-rectangle",
                    jsClass: "Rectangle",
                    onClick: function() {},
                    afterClick: function() {
                        t.map.pm.Draw.Rectangle.toggle()
                    },
                    doToggle: !0,
                    toggleStatus: !1,
                    disableOtherButtons: !0,
                    position: this.options.position,
                    actions: ["cancel"]
                },
                l = {
                    title: Object(i.a)("buttonTitles.editButton"),
                    className: "control-icon leaflet-pm-icon-edit",
                    onClick: function() {},
                    afterClick: function() {
                        t.map.pm.toggleGlobalEditMode()
                    },
                    doToggle: !0,
                    toggleStatus: !1,
                    disableOtherButtons: !0,
                    position: this.options.position,
                    tool: "edit",
                    actions: ["cancel"]
                },
                u = {
                    title: Object(i.a)("buttonTitles.dragButton"),
                    className: "control-icon leaflet-pm-icon-drag",
                    onClick: function() {},
                    afterClick: function() {
                        t.map.pm.toggleGlobalDragMode()
                    },
                    doToggle: !0,
                    toggleStatus: !1,
                    disableOtherButtons: !0,
                    position: this.options.position,
                    tool: "edit",
                    actions: ["cancel"]
                },
                c = {
                    title: Object(i.a)("buttonTitles.cutButton"),
                    className: "control-icon leaflet-pm-icon-cut",
                    jsClass: "Cut",
                    onClick: function() {},
                    afterClick: function() {
                        t.map.pm.Draw.Cut.toggle({
                            snappable: !0,
                            cursorMarker: !0,
                            allowSelfIntersection: !1
                        })
                    },
                    doToggle: !0,
                    toggleStatus: !1,
                    disableOtherButtons: !0,
                    position: this.options.position,
                    tool: "edit",
                    actions: ["finish", "removeLastVertex", "cancel"]
                },
                h = {
                    title: Object(i.a)("buttonTitles.deleteButton"),
                    className: "control-icon leaflet-pm-icon-delete",
                    onClick: function() {},
                    afterClick: function() {
                        t.map.pm.toggleGlobalRemovalMode()
                    },
                    doToggle: !0,
                    toggleStatus: !1,
                    disableOtherButtons: !0,
                    position: this.options.position,
                    tool: "edit",
                    actions: ["cancel"]
                };
            this._addButton("drawMarker", new L.Control.PMButton(e)), this._addButton("drawPolyline", new L.Control.PMButton(r)), this._addButton("drawRectangle", new L.Control.PMButton(s)), this._addButton("drawPolygon", new L.Control.PMButton(n)), this._addButton("drawCircle", new L.Control.PMButton(a)), this._addButton("drawCircleMarker", new L.Control.PMButton(o)), this._addButton("editMode", new L.Control.PMButton(l)), this._addButton("dragMode", new L.Control.PMButton(u)), this._addButton("cutPolygon", new L.Control.PMButton(c)), this._addButton("removalMode", new L.Control.PMButton(h))
        },
        _showHideButtons: function() {
            this.removeControls();
            var t = this.getButtons();
            for (var e in t) this.options[e] && (t[e].setPosition(this.options.position), t[e].addTo(this.map))
        }
    });
    e.a = a
}, function(t, e, n) {
    "use strict";
    var r = n(0),
        i = L.Control.extend({
            options: {
                position: "topleft"
            },
            initialize: function(t) {
                this._button = L.Util.setOptions(this, t)
            },
            onAdd: function(t) {
                return this._map = t, this._container = "edit" === this._button.tool ? this._map.pm.Toolbar.editContainer : this._map.pm.Toolbar.drawContainer, this.buttonsDomNode = this._makeButton(this._button), this._container.appendChild(this.buttonsDomNode), this._container
            },
            onRemove: function() {
                return this.buttonsDomNode.remove(), this._container
            },
            getText: function() {
                return this._button.text
            },
            getIconUrl: function() {
                return this._button.iconUrl
            },
            destroy: function() {
                this._button = {}, this._update()
            },
            toggle: function(t) {
                return this._button.toggleStatus = "boolean" == typeof t ? t : !this._button.toggleStatus, this._applyStyleClasses(), this._button.toggleStatus
            },
            toggled: function() {
                return this._button.toggleStatus
            },
            onCreate: function() {
                this.toggle(!1)
            },
            _triggerClick: function(t) {
                this._button.onClick(t), this._clicked(t), this._button.afterClick(t)
            },
            _makeButton: function(t) {
                var e = this,
                    n = L.DomUtil.create("div", "button-container", this._container),
                    i = L.DomUtil.create("a", "leaflet-buttons-control-button", n),
                    a = L.DomUtil.create("div", "leaflet-pm-actions-container", n),
                    o = t.actions,
                    s = {
                        cancel: {
                            text: Object(r.a)("actions.cancel"),
                            onClick: function() {
                                this._triggerClick()
                            }
                        },
                        removeLastVertex: {
                            text: Object(r.a)("actions.removeLastVertex"),
                            onClick: function() {
                                this._map.pm.Draw[t.jsClass]._removeLastVertex()
                            }
                        },
                        finish: {
                            text: Object(r.a)("actions.finish"),
                            onClick: function(e) {
                                this._map.pm.Draw[t.jsClass]._finishShape(e)
                            }
                        }
                    };
                o.forEach(function(t) {
                    var n = s[t],
                        r = L.DomUtil.create("a", "leaflet-pm-action action-".concat(t), a);
                    r.innerHTML = n.text, L.DomEvent.addListener(r, "click", n.onClick, e), L.DomEvent.disableClickPropagation(r)
                }), t.toggleStatus && L.DomUtil.addClass(i, "active");
                var l = L.DomUtil.create("div", "control-icon", i);
                return t.title && l.setAttribute("title", t.title), t.iconUrl && l.setAttribute("src", t.iconUrl), t.className && L.DomUtil.addClass(l, t.className), L.DomEvent.addListener(i, "click", function() {
                    e._button.disableOtherButtons && e._map.pm.Toolbar.triggerClickOnToggledButtons(e)
                }), L.DomEvent.addListener(i, "click", this._triggerClick, this), L.DomEvent.disableClickPropagation(i), n
            },
            _applyStyleClasses: function() {
                this._container && (this._button.toggleStatus ? L.DomUtil.addClass(this.buttonsDomNode, "active") : L.DomUtil.removeClass(this.buttonsDomNode, "active"))
            },
            _clicked: function() {
                this._button.doToggle && this.toggle()
            }
        });
    e.a = i
}, function(t, e, n) {
    var r = n(38),
        i = n(39);
    t.exports = function(t, e) {
        for (var n = 0, a = (e = r(e, t)).length; null != t && n < a;) t = t[i(e[n++])];
        return n && n == a ? t : undefined
    }
}, function(t, e, n) {
    var r = n(6),
        i = n(23),
        a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        o = /^\w*$/;
    t.exports = function(t, e) {
        if (r(t)) return !1;
        var n = typeof t;
        return !("number" != n && "symbol" != n && "boolean" != n && null != t && !i(t)) || o.test(t) || !a.test(t) || null != e && t in Object(e)
    }
}, function(t, e, n) {
    var r = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        i = /\\(\\)?/g,
        a = n(133)(function(t) {
            var e = [];
            return 46 === t.charCodeAt(0) && e.push(""), t.replace(r, function(t, n, r, a) {
                e.push(r ? a.replace(i, "$1") : n || t)
            }), e
        });
    t.exports = a
}, function(t, e, n) {
    var r = n(134),
        i = 500;
    t.exports = function(t) {
        var e = r(t, function(t) {
                return n.size === i && n.clear(), t
            }),
            n = e.cache;
        return e
    }
}, function(t, e, n) {
    var r = n(26),
        i = "Expected a function";

    function a(t, e) {
        if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError(i);
        var n = function() {
            var r = arguments,
                i = e ? e.apply(this, r) : r[0],
                a = n.cache;
            if (a.has(i)) return a.get(i);
            var o = t.apply(this, r);
            return n.cache = a.set(i, o) || a, o
        };
        return n.cache = new(a.Cache || r), n
    }
    a.Cache = r, t.exports = a
}, function(t, e, n) {
    var r = n(136);
    t.exports = function(t) {
        return null == t ? "" : r(t)
    }
}, function(t, e, n) {
    var r = n(16),
        i = n(137),
        a = n(6),
        o = n(23),
        s = 1 / 0,
        l = r ? r.prototype : undefined,
        u = l ? l.toString : undefined;
    t.exports = function c(t) {
        if ("string" == typeof t) return t;
        if (a(t)) return i(t, c) + "";
        if (o(t)) return u ? u.call(t) : "";
        var e = t + "";
        return "0" == e && 1 / t == -s ? "-0" : e
    }
}, function(t, e) {
    t.exports = function(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length, i = Array(r); ++n < r;) i[n] = e(t[n], n, t);
        return i
    }
}, function(t, e, n) {
    var r = n(139),
        i = n(140);
    t.exports = function(t, e) {
        return null != t && i(t, e, r)
    }
}, function(t, e) {
    var n = Object.prototype.hasOwnProperty;
    t.exports = function(t, e) {
        return null != t && n.call(t, e)
    }
}, function(t, e, n) {
    var r = n(38),
        i = n(19),
        a = n(6),
        o = n(22),
        s = n(21),
        l = n(39);
    t.exports = function(t, e, n) {
        for (var u = -1, c = (e = r(e, t)).length, h = !1; ++u < c;) {
            var p = l(e[u]);
            if (!(h = null != t && n(t, p))) break;
            t = t[p]
        }
        return h || ++u != c ? h : !!(c = null == t ? 0 : t.length) && s(c) && o(p, c) && (a(t) || i(t))
    }
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(0);
    r.a.Marker = r.a.extend({
        initialize: function(t) {
            this._map = t, this._shape = "Marker", this.toolbarButtonName = "drawMarker"
        },
        enable: function(t) {
            var e = this;
            L.Util.setOptions(this, t), this._enabled = !0, this._map.on("click", this._createMarker, this), this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !0), this._hintMarker = L.marker([0, 0], this.options.markerStyle), this._hintMarker._pmTempLayer = !0, this._hintMarker.addTo(this._map), this.options.tooltips && this._hintMarker.bindTooltip(Object(i.a)("tooltips.placeMarker"), {
                permanent: !0,
                offset: L.point(0, 10),
                direction: "bottom",
                opacity: .8
            }).openTooltip(), this._layer = this._hintMarker, this._map.on("mousemove", this._syncHintMarker, this), this._map.fire("pm:drawstart", {
                shape: this._shape,
                workingLayer: this._layer
            }), this._map.eachLayer(function(t) {
                e.isRelevantMarker(t) && t.pm.enable()
            })
        },
        disable: function() {
            var t = this;
            this._enabled && (this._map.off("click", this._createMarker, this), this._hintMarker.remove(), this._map.off("mousemove", this._syncHintMarker, this), this._map.eachLayer(function(e) {
                t.isRelevantMarker(e) && e.pm.disable()
            }), this._map.fire("pm:drawend", {
                shape: this._shape
            }), this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !1), this.options.snappable && this._cleanupSnapping(), this._enabled = !1)
        },
        isRelevantMarker: function(t) {
            return t instanceof L.Marker && t.pm && !t._pmTempLayer
        },
        enabled: function() {
            return this._enabled
        },
        toggle: function(t) {
            this.enabled() ? this.disable() : this.enable(t)
        },
        _createMarker: function(t) {
            if (t.latlng) {
                this._hintMarker._snapped || this._hintMarker.setLatLng(t.latlng);
                var e = this._hintMarker.getLatLng(),
                    n = new L.Marker(e, this.options.markerStyle);
                n.addTo(this._map), n.pm.enable(), this._map.fire("pm:create", {
                    shape: this._shape,
                    marker: n,
                    layer: n
                }), this._cleanupSnapping()
            }
        },
        _syncHintMarker: function(t) {
            if (this._hintMarker.setLatLng(t.latlng), this.options.snappable) {
                var e = t;
                e.target = this._hintMarker, this._handleSnapping(e)
            }
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(42),
        i = n.n(r),
        a = n(1),
        o = n(0);
    a.a.Line = a.a.extend({
        initialize: function(t) {
            this._map = t, this._shape = "Line", this.toolbarButtonName = "drawPolyline", this._doesSelfIntersect = !1
        },
        enable: function(t) {
            L.Util.setOptions(this, t), this.options.finishOnDoubleClick && !this.options.finishOn && (this.options.finishOn = "dblclick"), this._enabled = !0, this._layerGroup = new L.LayerGroup, this._layerGroup._pmTempLayer = !0, this._layerGroup.addTo(this._map), this._layer = L.polyline([], this.options.templineStyle), this._layer._pmTempLayer = !0, this._layerGroup.addLayer(this._layer), this._hintline = L.polyline([], this.options.hintlineStyle), this._hintline._pmTempLayer = !0, this._layerGroup.addLayer(this._hintline), this._hintMarker = L.marker(this._map.getCenter(), {
                icon: L.divIcon({
                    className: "marker-icon cursor-marker"
                })
            }), this._hintMarker._pmTempLayer = !0, this._layerGroup.addLayer(this._hintMarker), this.options.cursorMarker && L.DomUtil.addClass(this._hintMarker._icon, "visible"), this.options.tooltips && this._hintMarker.bindTooltip(Object(o.a)("tooltips.firstVertex"), {
                permanent: !0,
                offset: L.point(0, 10),
                direction: "bottom",
                opacity: .8
            }).openTooltip(), this._map._container.style.cursor = "crosshair", this._map.on("click", this._createVertex, this), this.options.finishOn && this._map.on(this.options.finishOn, this._finishShape, this), "dblclick" === this.options.finishOn && (this.tempMapDoubleClickZoomState = this._map.doubleClickZoom._enabled, this.tempMapDoubleClickZoomState && this._map.doubleClickZoom.disable()), this._map.on("mousemove", this._syncHintMarker, this), this._hintMarker.on("move", this._syncHintLine, this), this._map.fire("pm:drawstart", {
                shape: this._shape,
                workingLayer: this._layer
            }), this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !0), this._otherSnapLayers = []
        },
        disable: function() {
            this._enabled && (this._enabled = !1, this._map._container.style.cursor = "", this._map.off("click", this._createVertex, this), this._map.off("mousemove", this._syncHintMarker, this), this.options.finishOn && this._map.off(this.options.finishOn, this._finishShape, this), this.tempMapDoubleClickZoomState && this._map.doubleClickZoom.enable(), this._map.removeLayer(this._layerGroup), this._map.fire("pm:drawend", {
                shape: this._shape
            }), this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !1), this.options.snappable && this._cleanupSnapping())
        },
        enabled: function() {
            return this._enabled
        },
        toggle: function(t) {
            this.enabled() ? this.disable() : this.enable(t)
        },
        hasSelfIntersection: function() {
            return i()(this._layer.toGeoJSON(15)).features.length > 0
        },
        _syncHintLine: function() {
            var t = this._layer.getLatLngs();
            if (t.length > 0) {
                var e = t[t.length - 1];
                this._hintline.setLatLngs([e, this._hintMarker.getLatLng()])
            }
        },
        _syncHintMarker: function(t) {
            if (this._hintMarker.setLatLng(t.latlng), this.options.snappable) {
                var e = t;
                e.target = this._hintMarker, this._handleSnapping(e)
            }
            this.options.allowSelfIntersection || this._handleSelfIntersection(!0, t.latlng)
        },
        _handleSelfIntersection: function(t, e) {
            var n = L.polyline(this._layer.getLatLngs());
            t && (e || (e = this._hintMarker.getLatLng()), n.addLatLng(e));
            var r = i()(n.toGeoJSON(15));
            this._doesSelfIntersect = r.features.length > 0, this._doesSelfIntersect ? this._hintline.setStyle({
                color: "red"
            }) : this._hintline.setStyle(this.options.hintlineStyle)
        },
        _removeLastVertex: function() {
            var t = this._layer.getLatLngs(),
                e = t.pop();
            if (t.length < 1) this.disable();
            else {
                var n = this._layerGroup.getLayers().filter(function(t) {
                    return t instanceof L.Marker
                }).filter(function(t) {
                    return !L.DomUtil.hasClass(t._icon, "cursor-marker")
                }).find(function(t) {
                    return t.getLatLng() === e
                });
                this._layerGroup.removeLayer(n), this._layer.setLatLngs(t), this._syncHintLine()
            }
        },
        _createVertex: function(t) {
            if (this.options.allowSelfIntersection || (this._handleSelfIntersection(!0, t.latlng), !this._doesSelfIntersect)) {
                this._hintMarker._snapped || this._hintMarker.setLatLng(t.latlng);
                var e = this._hintMarker.getLatLng();
                if (e.equals(this._layer.getLatLngs()[0])) this._finishShape(t);
                else {
                    var n = 0 === this._layer.getLatLngs().length;
                    this._layer.addLatLng(e);
                    var r = this._createMarker(e, n);
                    this._hintline.setLatLngs([e, e]), this._layer.fire("pm:vertexadded", {
                        shape: this._shape,
                        workingLayer: this._layer,
                        marker: r,
                        latlng: e
                    })
                }
            }
        },
        _finishShape: function() {
            if (this.options.allowSelfIntersection || (this._handleSelfIntersection(!1), !this._doesSelfIntersect)) {
                var t = this._layer.getLatLngs();
                if (!(t.length <= 1)) {
                    var e = L.polyline(t, this.options.pathOptions).addTo(this._map);
                    this.disable(), this._map.fire("pm:create", {
                        shape: this._shape,
                        layer: e
                    }), this.options.snappable && this._cleanupSnapping()
                }
            }
        },
        _createMarker: function(t, e) {
            var n = new L.Marker(t, {
                draggable: !1,
                icon: L.divIcon({
                    className: "marker-icon"
                })
            });
            return n._pmTempLayer = !0, this._layerGroup.addLayer(n), n.on("click", this._finishShape, this), e && this._hintMarker.setTooltipContent(Object(o.a)("tooltips.continueLine")), 2 === this._layer.getLatLngs().length && this._hintMarker.setTooltipContent(Object(o.a)("tooltips.finishLine")), n
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(0);
    r.a.Polygon = r.a.Line.extend({
        initialize: function(t) {
            this._map = t, this._shape = "Polygon", this.toolbarButtonName = "drawPolygon"
        },
        _finishShape: function(t) {
            if (this.options.allowSelfIntersection || (this._handleSelfIntersection(!1), !this._doesSelfIntersect)) {
                var e = this._layer.getLatLngs();
                if (console.log(e), !(e.length <= 2)) {
                    t && "dblclick" === t.type && e.splice(e.length - 1, 1);
                    var n = L.polygon(e, this.options.pathOptions).addTo(this._map);
                    this.disable(), this._map.fire("pm:create", {
                        shape: this._shape,
                        layer: n
                    }), this._cleanupSnapping(), this._otherSnapLayers.splice(this._tempSnapLayerIndex, 1), delete this._tempSnapLayerIndex
                }
            }
        },
        _createMarker: function(t, e) {
            var n = new L.Marker(t, {
                draggable: !1,
                icon: L.divIcon({
                    className: "marker-icon"
                })
            });
            return n._pmTempLayer = !0, this._layerGroup.addLayer(n), e && (n.on("click", this._finishShape, this), this._tempSnapLayerIndex = this._otherSnapLayers.push(n) - 1, this.options.snappable && this._cleanupSnapping()), e && this._hintMarker.setTooltipContent(Object(i.a)("tooltips.continueLine")), 3 === this._layer.getLatLngs().length && this._hintMarker.setTooltipContent(Object(i.a)("tooltips.finishPoly")), n
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(0);
    r.a.Rectangle = r.a.extend({
        initialize: function(t) {
            this._map = t, this._shape = "Rectangle", this.toolbarButtonName = "drawRectangle"
        },
        enable: function(t) {
            if (L.Util.setOptions(this, t), this._enabled = !0, this._layerGroup = new L.LayerGroup, this._layerGroup._pmTempLayer = !0, this._layerGroup.addTo(this._map), this._layer = L.rectangle([
                    [0, 0],
                    [0, 0]
                ], this.options.pathOptions), this._layer._pmTempLayer = !0, this._startMarker = L.marker([0, 0], {
                    icon: L.divIcon({
                        className: "marker-icon rect-start-marker"
                    }),
                    draggable: !0,
                    zIndexOffset: 100,
                    opacity: this.options.cursorMarker ? 1 : 0
                }), this._startMarker._pmTempLayer = !0, this._layerGroup.addLayer(this._startMarker), this._hintMarker = L.marker([0, 0], {
                    icon: L.divIcon({
                        className: "marker-icon cursor-marker"
                    })
                }), this._hintMarker._pmTempLayer = !0, this._layerGroup.addLayer(this._hintMarker), this.options.tooltips && this._hintMarker.bindTooltip(Object(i.a)("tooltips.firstVertex"), {
                    permanent: !0,
                    offset: L.point(0, 10),
                    direction: "bottom",
                    opacity: .8
                }).openTooltip(), this.options.cursorMarker) {
                L.DomUtil.addClass(this._hintMarker._icon, "visible"), this._styleMarkers = [];
                for (var e = 0; e < 2; e += 1) {
                    var n = L.marker([0, 0], {
                        icon: L.divIcon({
                            className: "marker-icon rect-style-marker"
                        }),
                        draggable: !0,
                        zIndexOffset: 100
                    });
                    n._pmTempLayer = !0, this._layerGroup.addLayer(n), this._styleMarkers.push(n)
                }
            }
            this._map._container.style.cursor = "crosshair", this._map.on("click", this._placeStartingMarkers, this), this._map.on("mousemove", this._syncHintMarker, this), this._map.fire("pm:drawstart", {
                shape: this._shape,
                workingLayer: this._layer
            }), this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !0), this._otherSnapLayers = []
        },
        disable: function() {
            this._enabled && (this._enabled = !1, this._map._container.style.cursor = "", this._map.off("click", this._finishShape, this), this._map.off("click", this._placeStartingMarkers, this), this._map.off("mousemove", this._syncHintMarker, this), this._map.removeLayer(this._layerGroup), this._map.fire("pm:drawend", {
                shape: this._shape
            }), this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !1), this.options.snappable && this._cleanupSnapping())
        },
        enabled: function() {
            return this._enabled
        },
        toggle: function(t) {
            this.enabled() ? this.disable() : this.enable(t)
        },
        _placeStartingMarkers: function(t) {
            this._hintMarker._snapped || this._hintMarker.setLatLng(t.latlng);
            var e = this._hintMarker.getLatLng();
            L.DomUtil.addClass(this._startMarker._icon, "visible"), this._startMarker.setLatLng(e), this.options.cursorMarker && this._styleMarkers && this._styleMarkers.forEach(function(t) {
                L.DomUtil.addClass(t._icon, "visible"), t.setLatLng(e)
            }), this._map.off("click", this._placeStartingMarkers, this), this._map.on("click", this._finishShape, this), this._hintMarker.setTooltipContent(Object(i.a)("tooltips.finishRect")), this._setRectangleOrigin()
        },
        _setRectangleOrigin: function() {
            var t = this._startMarker.getLatLng();
            t && (this._layerGroup.addLayer(this._layer), this._layer.setLatLngs([t, t]), this._hintMarker.on("move", this._syncRectangleSize, this))
        },
        _syncHintMarker: function(t) {
            if (this._hintMarker.setLatLng(t.latlng), this.options.snappable) {
                var e = t;
                e.target = this._hintMarker, this._handleSnapping(e)
            }
        },
        _syncRectangleSize: function() {
            var t = this,
                e = this._startMarker.getLatLng(),
                n = this._hintMarker.getLatLng();
            if (this._layer.setBounds([e, n]), this.options.cursorMarker && this._styleMarkers) {
                var r = [];
                this._findCorners().forEach(function(e) {
                    e.equals(t._startMarker.getLatLng()) || e.equals(t._hintMarker.getLatLng()) || r.push(e)
                }), r.forEach(function(e, n) {
                    t._styleMarkers[n].setLatLng(e)
                })
            }
        },
        _finishShape: function(t) {
            var e = this._startMarker.getLatLng(),
                n = t.latlng,
                r = L.rectangle([e, n], this.options.pathOptions).addTo(this._map);
            this.disable(), this._map.fire("pm:create", {
                shape: this._shape,
                layer: r
            })
        },
        _findCorners: function() {
            var t = this._layer.getBounds();
            return [t.getNorthWest(), t.getNorthEast(), t.getSouthEast(), t.getSouthWest()]
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(0);
    r.a.Circle = r.a.extend({
        initialize: function(t) {
            this._map = t, this._shape = "Circle", this.toolbarButtonName = "drawCircle"
        },
        enable: function(t) {
            L.Util.setOptions(this, t), this.options.radius = 0, this._enabled = !0, this._layerGroup = new L.LayerGroup, this._layerGroup._pmTempLayer = !0, this._layerGroup.addTo(this._map), this._layer = L.circle([0, 0], this.options.templineStyle), this._layer._pmTempLayer = !0, this._layerGroup.addLayer(this._layer), this._centerMarker = L.marker([0, 0], {
                icon: L.divIcon({
                    className: "marker-icon"
                }),
                draggable: !1,
                zIndexOffset: 100
            }), this._centerMarker._pmTempLayer = !0, this._layerGroup.addLayer(this._centerMarker), this._hintMarker = L.marker([0, 0], {
                icon: L.divIcon({
                    className: "marker-icon cursor-marker"
                })
            }), this._hintMarker._pmTempLayer = !0, this._layerGroup.addLayer(this._hintMarker), this.options.cursorMarker && L.DomUtil.addClass(this._hintMarker._icon, "visible"), this.options.tooltips && this._hintMarker.bindTooltip(Object(i.a)("tooltips.startCircle"), {
                permanent: !0,
                offset: L.point(0, 10),
                direction: "bottom",
                opacity: .8
            }).openTooltip(), this._hintline = L.polyline([], this.options.hintlineStyle), this._hintline._pmTempLayer = !0, this._layerGroup.addLayer(this._hintline), this._map._container.style.cursor = "crosshair", this._map.on("click", this._placeCenterMarker, this), this._map.on("mousemove", this._syncHintMarker, this), this._map.fire("pm:drawstart", {
                shape: this._shape,
                workingLayer: this._layer
            }), this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !0), this._otherSnapLayers = []
        },
        disable: function() {
            this._enabled && (this._enabled = !1, this._map._container.style.cursor = "", this._map.off("click", this._finishShape, this), this._map.off("click", this._placeCenterMarker, this), this._map.off("mousemove", this._syncHintMarker, this), this._map.removeLayer(this._layerGroup), this._map.fire("pm:drawend", {
                shape: this._shape
            }), this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !1), this.options.snappable && this._cleanupSnapping())
        },
        enabled: function() {
            return this._enabled
        },
        toggle: function(t) {
            this.enabled() ? this.disable() : this.enable(t)
        },
        _syncHintLine: function() {
            var t = this._centerMarker.getLatLng();
            this._hintline.setLatLngs([t, this._hintMarker.getLatLng()])
        },
        _syncCircleRadius: function() {
            var t = this._centerMarker.getLatLng(),
                e = this._hintMarker.getLatLng(),
                n = t.distanceTo(e);
            this._layer.setRadius(n)
        },
        _syncHintMarker: function(t) {
            if (this._hintMarker.setLatLng(t.latlng), this.options.snappable) {
                var e = t;
                e.target = this._hintMarker, this._handleSnapping(e)
            }
        },
        _placeCenterMarker: function(t) {
            this._hintMarker._snapped || this._hintMarker.setLatLng(t.latlng);
            var e = this._hintMarker.getLatLng();
            this._centerMarker.setLatLng(e), this._map.off("click", this._placeCenterMarker, this), this._map.on("click", this._finishShape, this), this._placeCircleCenter()
        },
        _placeCircleCenter: function() {
            var t = this._centerMarker.getLatLng();
            t && (this._layer.setLatLng(t), this._hintMarker.on("move", this._syncHintLine, this), this._hintMarker.on("move", this._syncCircleRadius, this), this._hintMarker.setTooltipContent(Object(i.a)("tooltips.finishCircle")), this._layer.fire("pm:centerplaced", {
                shape: this._shape,
                workingLayer: this._layer,
                latlng: t
            }))
        },
        _finishShape: function(t) {
            var e = this._centerMarker.getLatLng(),
                n = t.latlng,
                r = e.distanceTo(n),
                i = Object.assign({}, this.options.pathOptions, {
                    radius: r
                }),
                a = L.circle(e, i).addTo(this._map);
            this.disable(), this._map.fire("pm:create", {
                shape: this._shape,
                layer: a
            })
        },
        _createMarker: function(t) {
            var e = new L.Marker(t, {
                draggable: !1,
                icon: L.divIcon({
                    className: "marker-icon"
                })
            });
            return e._pmTempLayer = !0, this._layerGroup.addLayer(e), e
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(0);
    r.a.CircleMarker = r.a.Marker.extend({
        initialize: function(t) {
            this._map = t, this._shape = "CircleMarker", this.toolbarButtonName = "drawCircleMarker"
        },
        enable: function(t) {
            var e = this;
            L.Util.setOptions(this, t), this._enabled = !0, this._map.on("click", this._createMarker, this), this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !0), this._hintMarker = L.circleMarker([0, 0], this.options.templineStyle), this._hintMarker._pmTempLayer = !0, this._hintMarker.addTo(this._map), this.options.tooltips && this._hintMarker.bindTooltip(Object(i.a)("tooltips.placeCircleMarker"), {
                permanent: !0,
                offset: L.point(0, 10),
                direction: "bottom",
                opacity: .8
            }).openTooltip(), this._layer = this._hintMarker, this._map.on("mousemove", this._syncHintMarker, this), this._map.fire("pm:drawstart", {
                shape: this._shape,
                workingLayer: this._layer
            }), this._map.eachLayer(function(t) {
                e.isRelevantMarker(t) && t.pm.enable()
            })
        },
        isRelevantMarker: function(t) {
            return t instanceof L.CircleMarker && !(t instanceof L.Circle) && t.pm && !t._pmTempLayer
        },
        _createMarker: function(t) {
            if (t.latlng) {
                this._hintMarker._snapped || this._hintMarker.setLatLng(t.latlng);
                var e = this._hintMarker.getLatLng(),
                    n = L.circleMarker(e, this.options.pathOptions);
                n.addTo(this._map), n.pm.enable(), this._map.fire("pm:create", {
                    shape: this._shape,
                    marker: n,
                    layer: n
                }), this._cleanupSnapping()
            }
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(148),
        i = n.n(r),
        a = n(149),
        o = n(1);
    o.a.Cut = o.a.Polygon.extend({
        initialize: function(t) {
            this._map = t, this._shape = "Cut", this.toolbarButtonName = "cutPolygon"
        },
        _cut: function(t) {
            var e = this,
                n = this._map._layers;
            Object.keys(n).map(function(t) {
                return n[t]
            }).filter(function(t) {
                return t.pm
            }).filter(function(t) {
                return t instanceof L.Polygon
            }).filter(function(e) {
                return e !== t
            }).filter(function(e) {
                try {
                    return !!i()(t.toGeoJSON(15), e.toGeoJSON(15))
                } catch (n) {
                    return console.error("You cant cut polygons with self-intersections"), !1
                }
            }).forEach(function(n) {
                var r = Object(a.a)(n.toGeoJSON(15), t.toGeoJSON(15)),
                    i = L.geoJSON(r, n.options).addTo(e._map);
                i.addTo(e._map), i.pm.enable(e.options), i.pm.disable(), n.fire("pm:cut", {
                    shape: e._shape,
                    layer: i,
                    originalLayer: n
                }), e._map.fire("pm:cut", {
                    shape: e._shape,
                    layer: i,
                    originalLayer: n
                }), n._pmTempLayer = !0, t._pmTempLayer = !0, n.remove(), t.remove(), 0 === i.getLayers().length && e._map.pm.removeLayer({
                    target: i
                })
            })
        },
        _finishShape: function() {
            if (this.options.allowSelfIntersection || (this._handleSelfIntersection(!1), !this._doesSelfIntersect)) {
                var t = this._layer.getLatLngs(),
                    e = L.polygon(t, this.options.pathOptions);
                this._cut(e), this.disable(), this._cleanupSnapping(), this._otherSnapLayers.splice(this._tempSnapLayerIndex, 1), delete this._tempSnapLayerIndex
            }
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = this && this.__importStar || function(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var n in t) Object.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e["default"] = t, e
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = n(8),
        a = n(43),
        o = r(n(44));
    e["default"] = function s(t, e, n) {
        void 0 === n && (n = {});
        var r = a.getGeom(t),
            l = a.getGeom(e);
        if ("Polygon" === r.type && "Polygon" === l.type) {
            var u = o.intersection(r.coordinates, l.coordinates);
            if (null === u || 0 === u.length) return null;
            if (1 === u.length) {
                var c = u[0][0][0],
                    h = u[0][0][u[0][0].length - 1];
                return c[0] === h[0] && c[1] === h[1] ? i.polygon(u[0], n.properties) : null
            }
            return i.multiPolygon(u, n.properties)
        }
        if ("MultiPolygon" === r.type) {
            for (var p = [], f = 0, d = r.coordinates; f < d.length; f++) {
                var g = d[f],
                    _ = s(a.getGeom(i.polygon(g)), l);
                if (_) {
                    var m = a.getGeom(_);
                    if ("Polygon" === m.type) p.push(m.coordinates);
                    else {
                        if ("MultiPolygon" !== m.type) throw new Error("intersection is invalid");
                        p = p.concat(m.coordinates)
                    }
                }
            }
            return 0 === p.length ? null : 1 === p.length ? i.polygon(p[0], n.properties) : i.multiPolygon(p, n.properties)
        }
        if ("MultiPolygon" === l.type) return s(l, r);
        throw new Error("poly1 and poly2 must be either polygons or multiPolygons")
    }
}, function(t, e, n) {
    "use strict";
    var r = n(44),
        i = (n.n(r), n(150)),
        a = n.n(i),
        o = n(8),
        s = (n.n(o), n(43)),
        l = (n.n(s), n(45));
    n.n(l);

    function u(t) {
        switch (t.type) {
            case "Polygon":
                return a()(t) > 1 ? t : null;
            case "MultiPolygon":
                var e = [];
                if (Object(l.flattenEach)(t, function(t) {
                        a()(t) > 1 && e.push(t.geometry.coordinates)
                    }), e.length) return {
                    type: "MultiPolygon",
                    coordinates: e
                }
        }
    }
    e.a = function(t, e) {
        var n = Object(s.getGeom)(t),
            i = Object(s.getGeom)(e),
            a = t.properties || {};
        if (n = u(n), i = u(i), !n) return null;
        if (!i) return Object(o.feature)(n, a);
        var l = r.diff(n.coordinates, i.coordinates);
        return 0 === l.length ? null : 1 === l.length ? Object(o.polygon)(l[0], a) : Object(o.multiPolygon)(l, a)
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = n(45),
        i = 6378137;

    function a(t) {
        var e = 0;
        if (t && t.length > 0) {
            e += Math.abs(o(t[0]));
            for (var n = 1; n < t.length; n++) e -= Math.abs(o(t[n]))
        }
        return e
    }

    function o(t) {
        var e, n, r, a, o, l, u = 0,
            c = t.length;
        if (c > 2) {
            for (l = 0; l < c; l++) l === c - 2 ? (r = c - 2, a = c - 1, o = 0) : l === c - 1 ? (r = c - 1, a = 0, o = 1) : (r = l, a = l + 1, o = l + 2), e = t[r], n = t[a], u += (s(t[o][0]) - s(e[0])) * Math.sin(s(n[1]));
            u = u * i * i / 2
        }
        return u
    }

    function s(t) {
        return t * Math.PI / 180
    }
    e["default"] = function(t) {
        return r.geomReduce(t, function(t, e) {
            return t + function(t) {
                var e, n = 0;
                switch (t.type) {
                    case "Polygon":
                        return a(t.coordinates);
                    case "MultiPolygon":
                        for (e = 0; e < t.coordinates.length; e++) n += a(t.coordinates[e]);
                        return n;
                    case "Point":
                    case "MultiPoint":
                    case "LineString":
                    case "MultiLineString":
                        return 0
                }
                return 0
            }(e)
        }, 0)
    }
}, function(t, e, n) {
    "use strict";
    var r = {
        enableLayerDrag: function() {
            if (this._layer instanceof L.Marker) this._layer.dragging.enable();
            else {
                this._tempDragCoord = null;
                var t = this._layer._path ? this._layer._path : this._layer._renderer._container;
                L.DomUtil.addClass(t, "leaflet-pm-draggable"), this._originalMapDragState = this._layer._map.dragging._enabled, this._safeToCacheDragState = !0, this._layer.on("mousedown", this._dragMixinOnMouseDown, this)
            }
        },
        disableLayerDrag: function() {
            if (this._layer instanceof L.Marker) this._layer.dragging.disable();
            else {
                var t = this._layer._path ? this._layer._path : this._layer._renderer._container;
                L.DomUtil.removeClass(t, "leaflet-pm-draggable"), this._safeToCacheDragState = !1, this._layer.off("mousedown", this._dragMixinOnMouseDown, this)
            }
        },
        _dragMixinOnMouseUp: function() {
            var t = this,
                e = this._layer._path ? this._layer._path : this._layer._renderer._container;
            return this._originalMapDragState && this._layer._map.dragging.enable(), this._safeToCacheDragState = !0, this._layer._map.off("mousemove", this._dragMixinOnMouseMove, this), this._layer._map.off("mouseup", this._dragMixinOnMouseUp, this), !!this._dragging && (window.setTimeout(function() {
                t._dragging = !1, L.DomUtil.removeClass(e, "leaflet-pm-dragging"), t._layer.fire("pm:dragend"), t._fireEdit()
            }, 10), !0)
        },
        _dragMixinOnMouseMove: function(t) {
            var e = this._layer._path ? this._layer._path : this._layer._renderer._container;
            this._dragging || (this._dragging = !0, L.DomUtil.addClass(e, "leaflet-pm-dragging"), this._layer.bringToFront(), this._originalMapDragState && this._layer._map.dragging.disable(), this._layer.fire("pm:dragstart")), this._onLayerDrag(t)
        },
        _dragMixinOnMouseDown: function(t) {
            t.originalEvent.button > 0 || (this._safeToCacheDragState && (this._originalMapDragState = this._layer._map.dragging._enabled, this._safeToCacheDragState = !1), this._tempDragCoord = t.latlng, this._layer._map.on("mouseup", this._dragMixinOnMouseUp, this), this._layer._map.on("mousemove", this._dragMixinOnMouseMove, this))
        },
        dragging: function() {
            return this._dragging
        },
        _onLayerDrag: function(t) {
            var e = t.latlng,
                n = e.lat - this._tempDragCoord.lat,
                r = e.lng - this._tempDragCoord.lng;
            if (this._layer instanceof L.CircleMarker) this._layer.setLatLng(e);
            else {
                var i = function t(e) {
                    return e.map(function(e) {
                        return Array.isArray(e) ? t(e) : {
                            lat: e.lat + n,
                            lng: e.lng + r
                        }
                    })
                }(this._layer.getLatLngs());
                this._layer.setLatLngs(i)
            }
            this._tempDragCoord = e, this._layer.fire("pm:drag", t)
        }
    };
    e.a = r
}, function(t, e, n) {
    "use strict";
    n(2).a.LayerGroup = L.Class.extend({
        initialize: function(t) {
            var e = this;
            this._layerGroup = t, this._layers = this.findLayers(), this._layers.forEach(function(t) {
                return e._initLayer(t)
            }), this._layerGroup.on("layeradd", function(t) {
                t.target._pmTempLayer || (e._layers = e.findLayers(), t.layer.pm && e._initLayer(t.layer), t.target.pm.enabled() && e.enable(e.getOptions()))
            })
        },
        findLayers: function() {
            var t = this._layerGroup.getLayers();
            return t = (t = (t = t.filter(function(t) {
                return !(t instanceof L.LayerGroup)
            })).filter(function(t) {
                return !!t.pm
            })).filter(function(t) {
                return !t._pmTempLayer
            })
        },
        _initLayer: function(t) {
            var e = this;
            ["pm:edit", "pm:update", "pm:remove", "pm:dragstart", "pm:drag", "pm:dragend", "pm:snap", "pm:unsnap", "pm:cut", "pm:intersect", "pm:raiseMarkers", "pm:markerdragend", "pm:markerdragstart", "pm:vertexadded", "pm:vertexremoved", "pm:centerplaced"].forEach(function(n) {
                t.on(n, e._fireEvent, e)
            }), t.pm._layerGroup = this._layerGroup
        },
        _fireEvent: function(t) {
            this._layerGroup.fireEvent(t.type, t)
        },
        toggleEdit: function(t) {
            this._options = t, this._layers.forEach(function(e) {
                e.pm.toggleEdit(t)
            })
        },
        enable: function(t) {
            this._options = t, this._layers.forEach(function(e) {
                e.pm.enable(t)
            })
        },
        disable: function() {
            this._layers.forEach(function(t) {
                t.pm.disable()
            })
        },
        enabled: function() {
            var t = this._layers.find(function(t) {
                return t.pm.enabled()
            });
            return !!t
        },
        dragging: function() {
            var t = this._layers.find(function(t) {
                return t.pm.dragging()
            });
            return !!t
        },
        getOptions: function() {
            return this._options
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(2);
    r.a.Marker = r.a.extend({
        initialize: function(t) {
            this._layer = t, this._enabled = !1, this._layer.on("dragend", this._onDragEnd, this)
        },
        toggleEdit: function(t) {
            this.enabled() ? this.disable() : this.enable(t)
        },
        enable: function() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
                draggable: !0,
                snappable: !0
            };
            L.Util.setOptions(this, t), this._map = this._layer._map, this.enabled() || (this._enabled = !0, this.options.preventMarkerRemoval || this._layer.on("contextmenu", this._removeMarker, this), this.options.draggable && this._layer.dragging.enable(), this.options.snappable && this._initSnappableMarkers())
        },
        enabled: function() {
            return this._enabled
        },
        disable: function() {
            this._enabled = !1, this._layer.dragging && this._layer.dragging.disable(), this._layer.off("contextmenu", this._removeMarker, this), this._layerEdited && this._layer.fire("pm:update", {}), this._layerEdited = !1
        },
        _removeMarker: function(t) {
            var e = t.target;
            e.remove(), e.fire("pm:remove")
        },
        _onDragEnd: function(t) {
            t.target.fire("pm:edit"), this._layerEdited = !0
        },
        _initSnappableMarkers: function() {
            var t = this._layer;
            this.options.snapDistance = this.options.snapDistance || 30, t.off("drag", this._handleSnapping, this), t.on("drag", this._handleSnapping, this), t.off("dragend", this._cleanupSnapping, this), t.on("dragend", this._cleanupSnapping, this), t.off("pm:dragstart", this._unsnap, this), t.on("pm:dragstart", this._unsnap, this)
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(42),
        i = n.n(r),
        a = n(37),
        o = n.n(a),
        s = n(2),
        l = n(41),
        u = n(0);
    s.a.Line = s.a.extend({
        initialize: function(t) {
            this._layer = t, this._enabled = !1
        },
        toggleEdit: function(t) {
            return this.enabled() ? this.disable() : this.enable(t), this.enabled()
        },
        enable: function(t) {
            L.Util.setOptions(this, t), this._map = this._layer._map, this._map && (this.enabled() || this.disable(), this._enabled = !0, this._initMarkers(), this._layer.on("remove", this._onLayerRemove, this), this.options.allowSelfIntersection || this._layer.on("pm:vertexremoved", this._handleSelfIntersectionOnVertexRemoval, this), this.options.allowSelfIntersection || (this.cachedColor || (this.cachedColor = this._layer.options.color), this.isRed = !1, this._handleLayerStyle()))
        },
        _onLayerRemove: function(t) {
            this.disable(t.target)
        },
        enabled: function() {
            return this._enabled
        },
        disable: function() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._layer;
            if (!this.enabled()) return !1;
            if (t.pm._dragging) return !1;
            t.pm._enabled = !1, t.pm._markerGroup.clearLayers(), t.off("mousedown"), t.off("mouseup"), this._layer.off("remove", this._onLayerRemove, this), this.options.allowSelfIntersection || this._layer.off("pm:vertexremoved", this._handleSelfIntersectionOnVertexRemoval);
            var e = t._path ? t._path : this._layer._renderer._container;
            return L.DomUtil.removeClass(e, "leaflet-pm-draggable"), this.hasSelfIntersection() && L.DomUtil.removeClass(e, "leaflet-pm-invalid"), this._layerEdited && this._layer.fire("pm:update", {}), this._layerEdited = !1, !0
        },
        hasSelfIntersection: function() {
            return i()(this._layer.toGeoJSON(15)).features.length > 0
        },
        _handleSelfIntersectionOnVertexRemoval: function() {
            this._handleLayerStyle(!0), this.hasSelfIntersection() && (this._layer.setLatLngs(this._coordsBeforeEdit), this._coordsBeforeEdit = null, this._initMarkers())
        },
        _handleLayerStyle: function(t) {
            var e = this,
                n = this._layer;
            if (this.hasSelfIntersection()) {
                if (this.isRed) return;
                t ? (n.setStyle({
                    color: "red"
                }), this.isRed = !0, window.setTimeout(function() {
                    n.setStyle({
                        color: e.cachedColor
                    }), e.isRed = !1
                }, 200)) : (n.setStyle({
                    color: "red"
                }), this.isRed = !0), this._layer.fire("pm:intersect", {
                    intersection: i()(this._layer.toGeoJSON(15))
                })
            } else n.setStyle({
                color: this.cachedColor
            }), this.isRed = !1
        },
        _initMarkers: function() {
            var t = this,
                e = this._map,
                n = this._layer.getLatLngs();
            this._markerGroup && this._markerGroup.clearLayers(), this._markerGroup = new L.LayerGroup, this._markerGroup._pmTempLayer = !0, e.addLayer(this._markerGroup);
            this._markers = function r(e) {
                if (Array.isArray(e[0])) return e.map(r, t);
                var n = e.map(t._createMarker, t);
                return e.map(function(r, i) {
                    var a = t.isPolygon() ? (i + 1) % e.length : i + 1;
                    return t._createMiddleMarker(n[i], n[a])
                }), n
            }(n), this.options.snappable && this._initSnappableMarkers()
        },
        _createMarker: function(t) {
            var e = new L.Marker(t, {
                draggable: !0,
                icon: L.divIcon({
                    className: "marker-icon"
                })
            });
            return e._pmTempLayer = !0, e.on("dragstart", this._onMarkerDragStart, this), e.on("move", this._onMarkerDrag, this), e.on("dragend", this._onMarkerDragEnd, this), this.options.preventMarkerRemoval || e.on("contextmenu", this._removeMarker, this), this._markerGroup.addLayer(e), e
        },
        _createMiddleMarker: function(t, e) {
            var n = this;
            if (!t || !e) return !1;
            var r = l.a.calcMiddleLatLng(this._map, t.getLatLng(), e.getLatLng()),
                i = this._createMarker(r),
                a = L.divIcon({
                    className: "marker-icon marker-icon-middle"
                });
            return i.setIcon(a), t._middleMarkerNext = i, e._middleMarkerPrev = i, i.on("click", function() {
                var r = L.divIcon({
                    className: "marker-icon"
                });
                i.setIcon(r), n._addMarker(i, t, e)
            }), i.on("movestart", function() {
                i.on("moveend", function() {
                    var t = L.divIcon({
                        className: "marker-icon"
                    });
                    i.setIcon(t), i.off("moveend")
                }), n._addMarker(i, t, e)
            }), i
        },
        _addMarker: function(t, e, n) {
            t.off("movestart"), t.off("click");
            var r = t.getLatLng(),
                i = this._layer._latlngs,
                a = this.findDeepMarkerIndex(this._markers, e),
                s = a.indexPath,
                l = a.index,
                u = a.parentPath,
                c = s.length > 1 ? o()(i, u) : i,
                h = s.length > 1 ? o()(this._markers, u) : this._markers;
            c.splice(l + 1, 0, r), h.splice(l + 1, 0, t), this._layer.setLatLngs(i), this._createMiddleMarker(e, t), this._createMiddleMarker(t, n), this._fireEdit(), this._layer.fire("pm:vertexadded", {
                layer: this._layer,
                marker: t,
                indexPath: this.findDeepMarkerIndex(this._markers, t).indexPath,
                latlng: r
            }), this.options.snappable && this._initSnappableMarkers()
        },
        _removeMarker: function(t) {
            if (!this.options.allowSelfIntersection) {
                var e = this._layer.getLatLngs();
                this._coordsBeforeEdit = JSON.parse(JSON.stringify(e))
            }
            var n = t.target,
                r = this._layer.getLatLngs(),
                i = this.findDeepMarkerIndex(this._markers, n),
                a = i.indexPath,
                s = i.index,
                l = i.parentPath;
            if (a) {
                var c, h, p = a.length > 1 ? o()(r, l) : r,
                    f = a.length > 1 ? o()(this._markers, l) : this._markers;
                if (p.splice(s, 1), this._layer.setLatLngs(r), p.length <= 1 && (p.splice(0, p.length), this._layer.setLatLngs(r), this.disable(), this.enable(this.options)), Object(u.b)(r) && this._layer.remove(), n._middleMarkerPrev && this._markerGroup.removeLayer(n._middleMarkerPrev), n._middleMarkerNext && this._markerGroup.removeLayer(n._middleMarkerNext), this._markerGroup.removeLayer(n), this.isPolygon() ? (c = (s + 1) % f.length, h = (s + (f.length - 1)) % f.length) : (h = s - 1 < 0 ? undefined : s - 1, c = s + 1 >= f.length ? undefined : s + 1), c !== h) {
                    var d = f[h],
                        g = f[c];
                    this._createMiddleMarker(d, g)
                }
                f.splice(s, 1), this._fireEdit(), this._layer.fire("pm:vertexremoved", {
                    layer: this._layer,
                    marker: n,
                    indexPath: a
                })
            }
        },
        findDeepMarkerIndex: function(t, e) {
            var n;
            t.some(function i(t) {
                return function(r, a) {
                    var o = t.concat(a);
                    return r._leaflet_id === e._leaflet_id ? (n = o, !0) : Array.isArray(r) && r.some(i(o))
                }
            }([]));
            var r = {};
            return n && (r = {
                indexPath: n,
                index: n[n.length - 1],
                parentPath: n.slice(0, n.length - 1)
            }), r
        },
        updatePolygonCoordsFromMarkerDrag: function(t) {
            var e = this._layer.getLatLngs(),
                n = t.getLatLng(),
                r = this.findDeepMarkerIndex(this._markers, t),
                i = r.indexPath,
                a = r.index,
                s = r.parentPath;
            (i.length > 1 ? o()(e, s) : e).splice(a, 1, n), this._layer.setLatLngs(e)
        },
        _onMarkerDrag: function(t) {
            var e = t.target,
                n = this.findDeepMarkerIndex(this._markers, e),
                r = n.indexPath,
                i = n.index,
                a = n.parentPath;
            if (r) {
                this.updatePolygonCoordsFromMarkerDrag(e);
                var s = r.length > 1 ? o()(this._markers, a) : this._markers,
                    u = (i + 1) % s.length,
                    c = (i + (s.length - 1)) % s.length,
                    h = e.getLatLng(),
                    p = s[c].getLatLng(),
                    f = s[u].getLatLng();
                if (e._middleMarkerNext) {
                    var d = l.a.calcMiddleLatLng(this._map, h, f);
                    e._middleMarkerNext.setLatLng(d)
                }
                if (e._middleMarkerPrev) {
                    var g = l.a.calcMiddleLatLng(this._map, h, p);
                    e._middleMarkerPrev.setLatLng(g)
                }
                this.options.allowSelfIntersection || this._handleLayerStyle()
            }
        },
        _onMarkerDragEnd: function(t) {
            var e = t.target,
                n = this.findDeepMarkerIndex(this._markers, e).indexPath;
            if (!this.options.allowSelfIntersection && this.hasSelfIntersection()) return this._layer.setLatLngs(this._coordsBeforeEdit), this._coordsBeforeEdit = null, this._initMarkers(), void this._handleLayerStyle();
            this._layer.fire("pm:markerdragend", {
                markerEvent: t,
                indexPath: n
            }), this._fireEdit()
        },
        _onMarkerDragStart: function(t) {
            var e = t.target,
                n = this.findDeepMarkerIndex(this._markers, e).indexPath;
            this._layer.fire("pm:markerdragstart", {
                markerEvent: t,
                indexPath: n
            }), this.options.allowSelfIntersection || (this._coordsBeforeEdit = this._layer.getLatLngs())
        },
        _fireEdit: function() {
            this._layerEdited = !0, this._layer.fire("pm:edit")
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(2);
    r.a.Polygon = r.a.Line.extend({})
}, function(t, e, n) {
    "use strict";
    var r = n(2);

    function i(t, e) {
        return function(t) {
            if (Array.isArray(t)) return t
        }(t) || function(t, e) {
            var n = [],
                r = !0,
                i = !1,
                a = undefined;
            try {
                for (var o, s = t[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), !e || n.length !== e); r = !0);
            } catch (l) {
                i = !0, a = l
            } finally {
                try {
                    r || null == s["return"] || s["return"]()
                } finally {
                    if (i) throw a
                }
            }
            return n
        }(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }
    r.a.Rectangle = r.a.Polygon.extend({
        _initMarkers: function() {
            var t = this._map,
                e = this._findCorners();
            this._markerGroup && this._markerGroup.clearLayers(), this._markerGroup = new L.LayerGroup, this._markerGroup._pmTempLayer = !0, t.addLayer(this._markerGroup), this._markers = [], this._markers[0] = e.map(this._createMarker, this);
            var n = i(this._markers, 1);
            this._cornerMarkers = n[0], this.options.snappable && this._initSnappableMarkers()
        },
        _createMarker: function(t, e) {
            var n = new L.Marker(t, {
                draggable: !0,
                icon: L.divIcon({
                    className: "marker-icon"
                })
            });
            return n._origLatLng = t, n._index = e, n._pmTempLayer = !0, n.on("dragstart", this._onMarkerDragStart, this), n.on("drag", this._onMarkerDrag, this), n.on("dragend", this._onMarkerDragEnd, this), n.on("pm:snap", this._adjustRectangleForMarkerSnap, this), this.options.preventMarkerRemoval || n.on("contextmenu", this._removeMarker, this), this._markerGroup.addLayer(n), n
        },
        _removeMarker: function() {
            return null
        },
        _onMarkerDragStart: function(t) {
            var e = t.target,
                n = this._findCorners();
            e._oppositeCornerLatLng = n[(e._index + 2) % 4], e._snapped = !1, this._layer.fire("pm:markerdragstart", {
                markerEvent: t
            })
        },
        _onMarkerDrag: function(t) {
            var e = t.target;
            e._index !== undefined && (e._snapped || this._adjustRectangleForMarkerMove(e))
        },
        _onMarkerDragEnd: function(t) {
            var e = this._findCorners();
            this._adjustAllMarkers(e), this._cornerMarkers.forEach(function(t) {
                delete t._oppositeCornerLatLng
            }), this._layer.setLatLngs(e), this._layer.fire("pm:markerdragend", {
                markerEvent: t
            }), this._fireEdit()
        },
        _adjustRectangleForMarkerMove: function(t) {
            L.extend(t._origLatLng, t._latlng);
            var e = t.getLatLng();
            this._layer.setBounds(L.latLngBounds(e, t._oppositeCornerLatLng)), this._adjustAdjacentMarkers(t), this._layer.redraw()
        },
        _adjustRectangleForMarkerSnap: function(t) {
            if (this.options.snappable) {
                var e = t.target;
                this._adjustRectangleForMarkerMove(e)
            }
        },
        _adjustAllMarkers: function(t) {
            t.length && 4 === t.length ? this._cornerMarkers.forEach(function(e, n) {
                e.setLatLng(t[n])
            }) : console.error("_adjustAllMarkers() requires an array of EXACTLY 4 LatLng coordinates")
        },
        _adjustAdjacentMarkers: function(t) {
            if (t && t.getLatLng && t._oppositeCornerLatLng) {
                var e = t.getLatLng(),
                    n = t._oppositeCornerLatLng,
                    r = [];
                this._findCorners().forEach(function(t) {
                    t.equals(e) || t.equals(n) || r.push(t)
                });
                var i = 0;
                2 === r.length && this._cornerMarkers.forEach(function(t) {
                    var a = t.getLatLng();
                    a.equals(e) || a.equals(n) || (t.setLatLng(r[i]), i += 1)
                })
            } else console.error("_adjustAdjacentMarkers() requires a valid Marker object")
        },
        _findCorners: function() {
            var t = this._layer.getBounds();
            return [t.getNorthWest(), t.getNorthEast(), t.getSouthEast(), t.getSouthWest()]
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(2);
    r.a.Circle = r.a.extend({
        initialize: function(t) {
            this._layer = t, this._enabled = !1
        },
        toggleEdit: function(t) {
            this.enabled() ? this.disable() : this.enable(t)
        },
        enabled: function() {
            return this._enabled
        },
        enable: function(t) {
            var e = this;
            L.Util.setOptions(this, t), this._map = this._layer._map, this.enabled() || this.disable(), this._enabled = !0, this._initMarkers(), this._layer.on("remove", function(t) {
                e.disable(t.target)
            })
        },
        disable: function() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._layer;
            if (!this.enabled()) return !1;
            if (t.pm._dragging) return !1;
            t.pm._enabled = !1, t.pm._helperLayers.clearLayers(), t.off("mousedown"), t.off("mouseup");
            var e = t._path ? t._path : this._layer._renderer._container;
            return L.DomUtil.removeClass(e, "leaflet-pm-draggable"), this._layerEdited && this._layer.fire("pm:update", {}), this._layerEdited = !1, !0
        },
        _initMarkers: function() {
            var t = this._map;
            this._helperLayers && this._helperLayers.clearLayers(), this._helperLayers = new L.LayerGroup, this._helperLayers._pmTempLayer = !0, this._helperLayers.addTo(t);
            var e = this._layer.getLatLng(),
                n = this._layer._radius,
                r = this._getLatLngOnCircle(e, n);
            this._centerMarker = this._createCenterMarker(e), this._outerMarker = this._createOuterMarker(r), this._markers = [this._centerMarker, this._outerMarker], this._createHintLine(this._centerMarker, this._outerMarker), this.options.snappable && this._initSnappableMarkers()
        },
        _getLatLngOnCircle: function(t, e) {
            var n = this._map.project(t),
                r = L.point(n.x + e, n.y);
            return this._map.unproject(r)
        },
        _resizeCircle: function() {
            this._syncHintLine(), this._syncCircleRadius()
        },
        _moveCircle: function(t) {
            var e = t.latlng;
            this._layer.setLatLng(e);
            var n = this._layer._radius,
                r = this._getLatLngOnCircle(e, n);
            this._outerMarker.setLatLng(r), this._syncHintLine(), this._layer.fire("pm:centerplaced", {
                layer: this._layer,
                latlng: e
            })
        },
        _onMarkerDragStart: function(t) {
            this._layer.fire("pm:markerdragstart", {
                markerEvent: t
            })
        },
        _onMarkerDragEnd: function(t) {
            this._fireEdit(), this._layer.fire("pm:markerdragend", {
                markerEvent: t
            })
        },
        _syncCircleRadius: function() {
            var t = this._centerMarker.getLatLng(),
                e = this._outerMarker.getLatLng(),
                n = t.distanceTo(e);
            this._layer.setRadius(n)
        },
        _syncHintLine: function() {
            var t = this._centerMarker.getLatLng(),
                e = this._outerMarker.getLatLng();
            this._hintline.setLatLngs([t, e])
        },
        _createHintLine: function(t, e) {
            var n = t.getLatLng(),
                r = e.getLatLng();
            this._hintline = L.polyline([n, r], this.options.hintlineStyle), this._hintline._pmTempLayer = !0, this._helperLayers.addLayer(this._hintline)
        },
        _createCenterMarker: function(t) {
            var e = this._createMarker(t);
            return L.DomUtil.addClass(e._icon, "leaflet-pm-draggable"), e.on("drag", this._moveCircle, this), e
        },
        _createOuterMarker: function(t) {
            var e = this._createMarker(t);
            return e.on("drag", this._resizeCircle, this), e
        },
        _createMarker: function(t) {
            var e = new L.Marker(t, {
                draggable: !0,
                icon: L.divIcon({
                    className: "marker-icon"
                })
            });
            return e._origLatLng = t, e._pmTempLayer = !0, e.on("dragstart", this._onMarkerDragStart, this), e.on("dragend", this._onMarkerDragEnd, this), this._helperLayers.addLayer(e), e
        },
        _fireEdit: function() {
            this._layer.fire("pm:edit"), this._layerEdited = !0
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(2);
    r.a.CircleMarker = r.a.extend({
        initialize: function(t) {
            this._layer = t, this._enabled = !1
        },
        toggleEdit: function(t) {
            this.enabled() ? this.disable() : this.enable(t)
        },
        enabled: function() {
            return this._enabled
        },
        enable: function() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
                draggable: !0,
                snappable: !0
            };
            L.Util.setOptions(this, t), this._map = this._layer._map, this._map && (this.enabled() || this.disable(), this._enabled = !0, this.options.preventMarkerRemoval || this._layer.on("contextmenu", this._removeMarker, this), this.options.draggable && this.enableLayerDrag(), this.options.snappable && this._initSnappableMarkers(), this._layer.on("pm:dragend", this._onMarkerDragEnd, this))
        },
        disable: function() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._layer;
            if (!this.enabled()) return !1;
            if (t.pm._dragging) return !1;
            if (t.pm._enabled = !1, t._path) {
                var e = t._path;
                L.DomUtil.removeClass(e, "leaflet-pm-draggable")
            }
            return this._layerEdited && this._layer.fire("pm:update", {}), this._layerEdited = !1, !0
        },
        _moveMarker: function(t) {
            var e = t.latlng;
            this._layer.setLatLng(e).redraw()
        },
        _removeMarker: function() {
            this._layer.fire("pm:remove"), this._layer.remove()
        },
        _fireEdit: function() {
            this._layer.fire("pm:edit"), this._layerEdited = !0
        },
        _onMarkerDragEnd: function(t) {
            this._layer.fire("pm:markerdragend", {
                markerEvent: t
            }), this._fireEdit()
        },
        _initSnappableMarkers: function() {
            var t = this._layer;
            this.options.snapDistance = this.options.snapDistance || 30, t.off("pm:drag", this._handleSnapping, this), t.on("pm:drag", this._handleSnapping, this), t.off("pm:dragend", this._cleanupSnapping, this), t.on("pm:dragend", this._cleanupSnapping, this), t.off("pm:dragstart", this._unsnap, this), t.on("pm:dragstart", this._unsnap, this)
        }
    })
}, function(t, e) {}, function(t, e) {}]);
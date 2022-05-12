"use strict";
var _slicedToArray = function () {
        return function (e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function (e, t) {
                var n = [],
                    r = !0,
                    a = !1,
                    i = void 0;
                try {
                    for (var o, s = e[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    a = !0, i = e
                } finally {
                    try {
                        !r && s.return && s.return()
                    } finally {
                        if (a) throw i
                    }
                }
                return n
            }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }(),
    _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };

function _defineProperty(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function _toConsumableArray(e) {
    if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
    }
    return Array.from(e)
}! function () {
    /**
     * @license almond 0.3.3 Copyright jQuery Foundation and other contributors.
     * Released under MIT license, http://github.com/requirejs/almond/LICENSE
     */
    var requirejs, require, define, root, factory;
    ! function (e) {
        var t, n, r, a, i = {},
            o = {},
            s = {},
            c = {},
            u = Object.prototype.hasOwnProperty,
            l = [].slice,
            p = /\.js$/;

        function f(e, t) {
            return u.call(e, t)
        }

        function d(e, t) {
            var n, r, a, i, o, c, u, l, f, d, h, y = t && t.split("/"),
                m = s.map,
                g = m && m["*"] || {};
            if (e) {
                for (o = (e = e.split("/")).length - 1, s.nodeIdCompat && p.test(e[o]) && (e[o] = e[o].replace(p, "")), "." === e[0].charAt(0) && y && (e = y.slice(0, y.length - 1).concat(e)), f = 0; f < e.length; f++)
                    if ("." === (h = e[f])) e.splice(f, 1), f -= 1;
                    else if (".." === h) {
                    if (0 === f || 1 === f && ".." === e[2] || ".." === e[f - 1]) continue;
                    f > 0 && (e.splice(f - 1, 2), f -= 2)
                }
                e = e.join("/")
            }
            if ((y || g) && m) {
                for (f = (n = e.split("/")).length; f > 0; f -= 1) {
                    if (r = n.slice(0, f).join("/"), y)
                        for (d = y.length; d > 0; d -= 1)
                            if ((a = m[y.slice(0, d).join("/")]) && (a = a[r])) {
                                i = a, c = f;
                                break
                            } if (i) break;
                    !u && g && g[r] && (u = g[r], l = f)
                }!i && u && (i = u, c = l), i && (n.splice(0, c, i), e = n.join("/"))
            }
            return e
        }

        function h(t, r) {
            return function () {
                var a = l.call(arguments, 0);
                return "string" != typeof a[0] && 1 === a.length && a.push(null), n.apply(e, a.concat([t, r]))
            }
        }

        function y(e) {
            return function (t) {
                i[e] = t
            }
        }

        function m(n) {
            if (f(o, n)) {
                var r = o[n];
                delete o[n], c[n] = !0, t.apply(e, r)
            }
            if (!f(i, n) && !f(c, n)) throw new Error("No " + n);
            return i[n]
        }

        function g(e) {
            var t, n = e ? e.indexOf("!") : -1;
            return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
        }

        function v(e) {
            return e ? g(e) : []
        }
        r = function (e, t) {
            var n, r, a = g(e),
                i = a[0],
                o = t[1];
            return e = a[1], i && (n = m(i = d(i, o))), i ? e = n && n.normalize ? n.normalize(e, (r = o, function (e) {
                return d(e, r)
            })) : d(e, o) : (i = (a = g(e = d(e, o)))[0], e = a[1], i && (n = m(i))), {
                f: i ? i + "!" + e : e,
                n: e,
                pr: i,
                p: n
            }
        }, a = {
            require: function (e) {
                return h(e)
            },
            exports: function (e) {
                var t = i[e];
                return void 0 !== t ? t : i[e] = {}
            },
            module: function (e) {
                return {
                    id: e,
                    uri: "",
                    exports: i[e],
                    config: function (e) {
                        return function () {
                            return s && s.config && s.config[e] || {}
                        }
                    }(e)
                }
            }
        }, t = function (t, n, s, u) {
            var l, p, d, g, b, w, T, S = [],
                x = void 0 === s ? "undefined" : _typeof(s);
            if (w = v(u = u || t), "undefined" === x || "function" === x) {
                for (n = !n.length && s.length ? ["require", "exports", "module"] : n, b = 0; b < n.length; b += 1)
                    if ("require" === (p = (g = r(n[b], w)).f)) S[b] = a.require(t);
                    else if ("exports" === p) S[b] = a.exports(t), T = !0;
                else if ("module" === p) l = S[b] = a.module(t);
                else if (f(i, p) || f(o, p) || f(c, p)) S[b] = m(p);
                else {
                    if (!g.p) throw new Error(t + " missing " + p);
                    g.p.load(g.n, h(u, !0), y(p), {}), S[b] = i[p]
                }
                d = s ? s.apply(i[t], S) : void 0, t && (l && l.exports !== e && l.exports !== i[t] ? i[t] = l.exports : d === e && T || (i[t] = d))
            } else t && (i[t] = s)
        }, requirejs = require = n = function (i, o, c, u, l) {
            if ("string" == typeof i) return a[i] ? a[i](o) : m(r(i, v(o)).f);
            if (!i.splice) {
                if ((s = i).deps && n(s.deps, s.callback), !o) return;
                o.splice ? (i = o, o = c, c = null) : i = e
            }
            return o = o || function () {}, "function" == typeof c && (c = u, u = l), u ? t(e, i, o, c) : setTimeout(function () {
                t(e, i, o, c)
            }, 4), n
        }, n.config = function (e) {
            return n(e)
        }, requirejs._defined = i, (define = function (e, t, n) {
            if ("string" != typeof e) throw new Error("See almond README: incorrect module build, no module name");
            t.splice || (n = t, t = []), f(i, e) || f(o, e) || (o[e] = [e, t, n])
        }).amd = {
            jQuery: !0
        }
    }(), define("almond", function () {}),
        /*!
         * https://github.com/paulmillr/es6-shim
         * @license es6-shim Copyright 2013-2016 by Paul Miller (http://paulmillr.com)
         *   and contributors,  MIT License
         * es6-shim: v0.35.4
         * see https://github.com/paulmillr/es6-shim/blob/0.35.3/LICENSE
         * Details and documentation:
         * https://github.com/paulmillr/es6-shim/
         */
        root = this, factory = function () {
            var e, t, n = Function.call.bind(Function.apply),
                r = Function.call.bind(Function.call),
                a = Array.isArray,
                i = Object.keys,
                o = function (e) {
                    try {
                        return e(), !1
                    } catch (e) {
                        return !0
                    }
                },
                s = function (e) {
                    try {
                        return e()
                    } catch (e) {
                        return !1
                    }
                },
                c = (e = o, function () {
                    return !n(e, this, arguments)
                }),
                u = !!Object.defineProperty && !o(function () {
                    return Object.defineProperty({}, "x", {
                        get: function () {}
                    })
                }),
                l = "foo" === function () {}.name,
                p = Function.call.bind(Array.prototype.forEach),
                f = Function.call.bind(Array.prototype.reduce),
                d = Function.call.bind(Array.prototype.filter),
                h = Function.call.bind(Array.prototype.some),
                y = function (e, t, n, r) {
                    !r && t in e || (u ? Object.defineProperty(e, t, {
                        configurable: !0,
                        enumerable: !1,
                        writable: !0,
                        value: n
                    }) : e[t] = n)
                },
                m = function (e, t, n) {
                    p(i(t), function (r) {
                        var a = t[r];
                        y(e, r, a, !!n)
                    })
                },
                g = Function.call.bind(Object.prototype.toString),
                v = "function" == typeof /abc/ ? function (e) {
                    return "function" == typeof e && "[object Function]" === g(e)
                } : function (e) {
                    return "function" == typeof e
                },
                b = function (e, t, n) {
                    if (!u) throw new TypeError("getters require true ES5 support");
                    Object.defineProperty(e, t, {
                        configurable: !0,
                        enumerable: !1,
                        get: n
                    })
                },
                w = function (e, t, n) {
                    if (!u) throw new TypeError("getters require true ES5 support");
                    var r = Object.getOwnPropertyDescriptor(e, t);
                    Object.defineProperty(n, t, {
                        configurable: r.configurable,
                        enumerable: r.enumerable,
                        get: function () {
                            return e[t]
                        },
                        set: function (n) {
                            e[t] = n
                        }
                    })
                },
                T = function (e, t, n) {
                    if (u) {
                        var r = Object.getOwnPropertyDescriptor(e, t);
                        r.value = n, Object.defineProperty(e, t, r)
                    } else e[t] = n
                },
                S = function (e, t, n) {
                    u ? Object.defineProperty(e, t, n) : "value" in n && (e[t] = n.value)
                },
                x = function (e, t) {
                    t && v(t.toString) && y(e, "toString", t.toString.bind(t), !0)
                },
                k = Object.create || function (e, t) {
                    var n = function () {};
                    n.prototype = e;
                    var r = new n;
                    return void 0 !== t && i(t).forEach(function (e) {
                        S(r, e, t[e])
                    }), r
                },
                O = function (e, t) {
                    return !!Object.setPrototypeOf && s(function () {
                        var n = function t(n) {
                            var r = new e(n);
                            return Object.setPrototypeOf(r, t.prototype), r
                        };
                        return Object.setPrototypeOf(n, e), n.prototype = k(e.prototype, {
                            constructor: {
                                value: n
                            }
                        }), t(n)
                    })
                },
                j = function () {
                    if ("undefined" != typeof self) return self;
                    if ("undefined" != typeof window) return window;
                    if ("undefined" != typeof global) return global;
                    throw new Error("unable to locate global object")
                }(),
                A = j.isFinite,
                C = Function.call.bind(String.prototype.indexOf),
                E = Function.apply.bind(Array.prototype.indexOf),
                _ = Function.call.bind(Array.prototype.concat),
                N = Function.call.bind(String.prototype.slice),
                P = Function.call.bind(Array.prototype.push),
                I = Function.apply.bind(Array.prototype.push),
                M = Function.call.bind(Array.prototype.shift),
                D = Math.max,
                R = Math.min,
                L = Math.floor,
                F = Math.abs,
                q = Math.exp,
                V = Math.log,
                H = Math.sqrt,
                z = Function.call.bind(Object.prototype.hasOwnProperty),
                W = function () {},
                $ = j.Map,
                B = $ && $.prototype.delete,
                U = $ && $.prototype.get,
                G = $ && $.prototype.has,
                X = $ && $.prototype.set,
                J = j.Symbol || {},
                Y = J.species || "@@species",
                K = Number.isNaN || function (e) {
                    return e != e
                },
                Z = Number.isFinite || function (e) {
                    return "number" == typeof e && A(e)
                },
                Q = v(Math.sign) ? Math.sign : function (e) {
                    var t = Number(e);
                    return 0 === t ? t : K(t) ? t : t < 0 ? -1 : 1
                },
                ee = function (e) {
                    var t = Number(e);
                    return t < -1 || K(t) ? NaN : 0 === t || t === 1 / 0 ? t : -1 === t ? -1 / 0 : 1 + t - 1 == 0 ? t : t * (V(1 + t) / (1 + t - 1))
                },
                te = function (e) {
                    return "[object Arguments]" === g(e)
                },
                ne = te(arguments) ? te : function (e) {
                    return null !== e && "object" === (void 0 === e ? "undefined" : _typeof(e)) && "number" == typeof e.length && e.length >= 0 && "[object Array]" !== g(e) && "[object Function]" === g(e.callee)
                },
                re = function (e) {
                    return null === e || "function" != typeof e && "object" !== (void 0 === e ? "undefined" : _typeof(e))
                },
                ae = function (e) {
                    return "[object String]" === g(e)
                },
                ie = function (e) {
                    return "[object RegExp]" === g(e)
                },
                oe = function (e) {
                    return "function" == typeof j.Symbol && "symbol" === (void 0 === e ? "undefined" : _typeof(e))
                },
                se = function (e, t, n) {
                    var r = e[t];
                    y(e, t, n, !0), x(e[t], r)
                },
                ce = "function" == typeof J && "function" == typeof J.for && oe(J()),
                ue = oe(J.iterator) ? J.iterator : "_es6-shim iterator_";
            j.Set && "function" == typeof (new j.Set)["@@iterator"] && (ue = "@@iterator"), j.Reflect || y(j, "Reflect", {}, !0);
            var le, pe = j.Reflect,
                fe = String,
                de = "undefined" != typeof document && document ? document.all : null,
                he = null == de ? function (e) {
                    return null == e
                } : function (e) {
                    return null == e && e !== de
                },
                ye = {
                    Call: function (e, t) {
                        var r = arguments.length > 2 ? arguments[2] : [];
                        if (!ye.IsCallable(e)) throw new TypeError(e + " is not a function");
                        return n(e, t, r)
                    },
                    RequireObjectCoercible: function (e, t) {
                        if (he(e)) throw new TypeError(t || "Cannot call method on " + e);
                        return e
                    },
                    TypeIsObject: function (e) {
                        return null != e && !0 !== e && !1 !== e && ("function" == typeof e || "object" === (void 0 === e ? "undefined" : _typeof(e)) || e === de)
                    },
                    ToObject: function (e, t) {
                        return Object(ye.RequireObjectCoercible(e, t))
                    },
                    IsCallable: v,
                    IsConstructor: function (e) {
                        return ye.IsCallable(e)
                    },
                    ToInt32: function (e) {
                        return ye.ToNumber(e) >> 0
                    },
                    ToUint32: function (e) {
                        return ye.ToNumber(e) >>> 0
                    },
                    ToNumber: function (e) {
                        if ("[object Symbol]" === g(e)) throw new TypeError("Cannot convert a Symbol value to a number");
                        return +e
                    },
                    ToInteger: function (e) {
                        var t = ye.ToNumber(e);
                        return K(t) ? 0 : 0 !== t && Z(t) ? (t > 0 ? 1 : -1) * L(F(t)) : t
                    },
                    ToLength: function (e) {
                        var t = ye.ToInteger(e);
                        return t <= 0 ? 0 : t > Number.MAX_SAFE_INTEGER ? Number.MAX_SAFE_INTEGER : t
                    },
                    SameValue: function (e, t) {
                        return e === t ? 0 !== e || 1 / e == 1 / t : K(e) && K(t)
                    },
                    SameValueZero: function (e, t) {
                        return e === t || K(e) && K(t)
                    },
                    IsIterable: function (e) {
                        return ye.TypeIsObject(e) && (void 0 !== e[ue] || ne(e))
                    },
                    GetIterator: function (e) {
                        if (ne(e)) return new t(e, "value");
                        var n = ye.GetMethod(e, ue);
                        if (!ye.IsCallable(n)) throw new TypeError("value is not an iterable");
                        var r = ye.Call(n, e);
                        if (!ye.TypeIsObject(r)) throw new TypeError("bad iterator");
                        return r
                    },
                    GetMethod: function (e, t) {
                        var n = ye.ToObject(e)[t];
                        if (!he(n)) {
                            if (!ye.IsCallable(n)) throw new TypeError("Method not callable: " + t);
                            return n
                        }
                    },
                    IteratorComplete: function (e) {
                        return !!e.done
                    },
                    IteratorClose: function (e, t) {
                        var n = ye.GetMethod(e, "return");
                        if (void 0 !== n) {
                            var r, a;
                            try {
                                r = ye.Call(n, e)
                            } catch (e) {
                                a = e
                            }
                            if (!t) {
                                if (a) throw a;
                                if (!ye.TypeIsObject(r)) throw new TypeError("Iterator's return method returned a non-object.")
                            }
                        }
                    },
                    IteratorNext: function (e) {
                        var t = arguments.length > 1 ? e.next(arguments[1]) : e.next();
                        if (!ye.TypeIsObject(t)) throw new TypeError("bad iterator");
                        return t
                    },
                    IteratorStep: function (e) {
                        var t = ye.IteratorNext(e);
                        return !ye.IteratorComplete(t) && t
                    },
                    Construct: function (e, t, n, r) {
                        var a = void 0 === n ? e : n;
                        if (!r && pe.construct) return pe.construct(e, t, a);
                        var i = a.prototype;
                        ye.TypeIsObject(i) || (i = Object.prototype);
                        var o = k(i),
                            s = ye.Call(e, o, t);
                        return ye.TypeIsObject(s) ? s : o
                    },
                    SpeciesConstructor: function (e, t) {
                        var n = e.constructor;
                        if (void 0 === n) return t;
                        if (!ye.TypeIsObject(n)) throw new TypeError("Bad constructor");
                        var r = n[Y];
                        if (he(r)) return t;
                        if (!ye.IsConstructor(r)) throw new TypeError("Bad @@species");
                        return r
                    },
                    CreateHTML: function (e, t, n, r) {
                        var a = ye.ToString(e),
                            i = "<" + t;
                        "" !== n && (i += " " + n + '="' + ye.ToString(r).replace(/"/g, "&quot;") + '"');
                        return i + ">" + a + "</" + t + ">"
                    },
                    IsRegExp: function (e) {
                        if (!ye.TypeIsObject(e)) return !1;
                        var t = e[J.match];
                        return void 0 !== t ? !!t : ie(e)
                    },
                    ToString: function (e) {
                        return fe(e)
                    }
                };
            if (u && ce) {
                var me = function (e) {
                    if (oe(J[e])) return J[e];
                    var t = J.for("Symbol." + e);
                    return Object.defineProperty(J, e, {
                        configurable: !1,
                        enumerable: !1,
                        writable: !1,
                        value: t
                    }), t
                };
                if (!oe(J.search)) {
                    var ge = me("search"),
                        ve = String.prototype.search;
                    y(RegExp.prototype, ge, function (e) {
                        return ye.Call(ve, e, [this])
                    });
                    se(String.prototype, "search", function (e) {
                        var t = ye.RequireObjectCoercible(this);
                        if (!he(e)) {
                            var n = ye.GetMethod(e, ge);
                            if (void 0 !== n) return ye.Call(n, e, [t])
                        }
                        return ye.Call(ve, t, [ye.ToString(e)])
                    })
                }
                if (!oe(J.replace)) {
                    var be = me("replace"),
                        we = String.prototype.replace;
                    y(RegExp.prototype, be, function (e, t) {
                        return ye.Call(we, e, [this, t])
                    });
                    se(String.prototype, "replace", function (e, t) {
                        var n = ye.RequireObjectCoercible(this);
                        if (!he(e)) {
                            var r = ye.GetMethod(e, be);
                            if (void 0 !== r) return ye.Call(r, e, [n, t])
                        }
                        return ye.Call(we, n, [ye.ToString(e), t])
                    })
                }
                if (!oe(J.split)) {
                    var Te = me("split"),
                        Se = String.prototype.split;
                    y(RegExp.prototype, Te, function (e, t) {
                        return ye.Call(Se, e, [this, t])
                    });
                    se(String.prototype, "split", function (e, t) {
                        var n = ye.RequireObjectCoercible(this);
                        if (!he(e)) {
                            var r = ye.GetMethod(e, Te);
                            if (void 0 !== r) return ye.Call(r, e, [n, t])
                        }
                        return ye.Call(Se, n, [ye.ToString(e), t])
                    })
                }
                var xe = oe(J.match),
                    ke = xe && ((le = {})[J.match] = function () {
                        return 42
                    }, 42 !== "a".match(le));
                if (!xe || ke) {
                    var Oe = me("match"),
                        je = String.prototype.match;
                    y(RegExp.prototype, Oe, function (e) {
                        return ye.Call(je, e, [this])
                    });
                    se(String.prototype, "match", function (e) {
                        var t = ye.RequireObjectCoercible(this);
                        if (!he(e)) {
                            var n = ye.GetMethod(e, Oe);
                            if (void 0 !== n) return ye.Call(n, e, [t])
                        }
                        return ye.Call(je, t, [ye.ToString(e)])
                    })
                }
            }
            var Ae = function (e, t, n) {
                    x(t, e), Object.setPrototypeOf && Object.setPrototypeOf(e, t), u ? p(Object.getOwnPropertyNames(e), function (r) {
                        r in W || n[r] || w(e, r, t)
                    }) : p(Object.keys(e), function (r) {
                        r in W || n[r] || (t[r] = e[r])
                    }), t.prototype = e.prototype, T(e.prototype, "constructor", t)
                },
                Ce = function () {
                    return this
                },
                Ee = function (e) {
                    u && !z(e, Y) && b(e, Y, Ce)
                },
                _e = function (e, t) {
                    var n = t || function () {
                        return this
                    };
                    y(e, ue, n), !e[ue] && oe(ue) && (e[ue] = n)
                },
                Ne = function (e, t, n) {
                    if (function (e, t, n) {
                            u ? Object.defineProperty(e, t, {
                                configurable: !0,
                                enumerable: !0,
                                writable: !0,
                                value: n
                            }) : e[t] = n
                        }(e, t, n), !ye.SameValue(e[t], n)) throw new TypeError("property is nonconfigurable")
                },
                Pe = function (e, t, n, r) {
                    if (!ye.TypeIsObject(e)) throw new TypeError("Constructor requires `new`: " + t.name);
                    var a = t.prototype;
                    ye.TypeIsObject(a) || (a = n);
                    var i = k(a);
                    for (var o in r)
                        if (z(r, o)) {
                            var s = r[o];
                            y(i, o, s, !0)
                        } return i
                };
            if (String.fromCodePoint && 1 !== String.fromCodePoint.length) {
                var Ie = String.fromCodePoint;
                se(String, "fromCodePoint", function (e) {
                    return ye.Call(Ie, this, arguments)
                })
            }
            var Me = {
                fromCodePoint: function (e) {
                    for (var t, n = [], r = 0, a = arguments.length; r < a; r++) {
                        if (t = Number(arguments[r]), !ye.SameValue(t, ye.ToInteger(t)) || t < 0 || t > 1114111) throw new RangeError("Invalid code point " + t);
                        t < 65536 ? P(n, String.fromCharCode(t)) : (t -= 65536, P(n, String.fromCharCode(55296 + (t >> 10))), P(n, String.fromCharCode(t % 1024 + 56320)))
                    }
                    return n.join("")
                },
                raw: function (e) {
                    var t = ye.ToObject(e, "bad callSite"),
                        n = ye.ToObject(t.raw, "bad raw value"),
                        r = n.length,
                        a = ye.ToLength(r);
                    if (a <= 0) return "";
                    for (var i, o, s, c, u = [], l = 0; l < a && (i = ye.ToString(l), s = ye.ToString(n[i]), P(u, s), !(l + 1 >= a));) o = l + 1 < arguments.length ? arguments[l + 1] : "", c = ye.ToString(o), P(u, c), l += 1;
                    return u.join("")
                }
            };
            String.raw && "xy" !== String.raw({
                raw: {
                    0: "x",
                    1: "y",
                    length: 2
                }
            }) && se(String, "raw", Me.raw), m(String, Me);
            var De = {
                repeat: function (e) {
                    var t = ye.ToString(ye.RequireObjectCoercible(this)),
                        n = ye.ToInteger(e);
                    if (n < 0 || n >= 1 / 0) throw new RangeError("repeat count must be less than infinity and not overflow maximum string size");
                    return function e(t, n) {
                        if (n < 1) return "";
                        if (n % 2) return e(t, n - 1) + t;
                        var r = e(t, n / 2);
                        return r + r
                    }(t, n)
                },
                startsWith: function (e) {
                    var t = ye.ToString(ye.RequireObjectCoercible(this));
                    if (ye.IsRegExp(e)) throw new TypeError('Cannot call method "startsWith" with a regex');
                    var n, r = ye.ToString(e);
                    arguments.length > 1 && (n = arguments[1]);
                    var a = D(ye.ToInteger(n), 0);
                    return N(t, a, a + r.length) === r
                },
                endsWith: function (e) {
                    var t = ye.ToString(ye.RequireObjectCoercible(this));
                    if (ye.IsRegExp(e)) throw new TypeError('Cannot call method "endsWith" with a regex');
                    var n, r = ye.ToString(e),
                        a = t.length;
                    arguments.length > 1 && (n = arguments[1]);
                    var i = void 0 === n ? a : ye.ToInteger(n),
                        o = R(D(i, 0), a);
                    return N(t, o - r.length, o) === r
                },
                includes: function (e) {
                    if (ye.IsRegExp(e)) throw new TypeError('"includes" does not accept a RegExp');
                    var t, n = ye.ToString(e);
                    return arguments.length > 1 && (t = arguments[1]), -1 !== C(this, n, t)
                },
                codePointAt: function (e) {
                    var t = ye.ToString(ye.RequireObjectCoercible(this)),
                        n = ye.ToInteger(e),
                        r = t.length;
                    if (n >= 0 && n < r) {
                        var a = t.charCodeAt(n);
                        if (a < 55296 || a > 56319 || n + 1 === r) return a;
                        var i = t.charCodeAt(n + 1);
                        return i < 56320 || i > 57343 ? a : 1024 * (a - 55296) + (i - 56320) + 65536
                    }
                }
            };
            if (String.prototype.includes && !1 !== "a".includes("a", 1 / 0) && se(String.prototype, "includes", De.includes), String.prototype.startsWith && String.prototype.endsWith) {
                var Re = o(function () {
                        return "/a/".startsWith(/a/)
                    }),
                    Le = s(function () {
                        return !1 === "abc".startsWith("a", 1 / 0)
                    });
                Re && Le || (se(String.prototype, "startsWith", De.startsWith), se(String.prototype, "endsWith", De.endsWith))
            }
            ce && (s(function () {
                var e = /a/;
                return e[J.match] = !1, "/a/".startsWith(e)
            }) || se(String.prototype, "startsWith", De.startsWith), s(function () {
                var e = /a/;
                return e[J.match] = !1, "/a/".endsWith(e)
            }) || se(String.prototype, "endsWith", De.endsWith), s(function () {
                var e = /a/;
                return e[J.match] = !1, "/a/".includes(e)
            }) || se(String.prototype, "includes", De.includes));
            m(String.prototype, De);
            var Fe = ["\t\n\v\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003", "\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028", "\u2029\ufeff"].join(""),
                qe = new RegExp("(^[" + Fe + "]+)|([" + Fe + "]+$)", "g"),
                Ve = function () {
                    return ye.ToString(ye.RequireObjectCoercible(this)).replace(qe, "")
                },
                He = ["\x85", "\u200b", "\ufffe"].join(""),
                ze = new RegExp("[" + He + "]", "g"),
                We = /^[-+]0x[0-9a-f]+$/i,
                $e = He.trim().length !== He.length;
            y(String.prototype, "trim", Ve, $e);
            var Be = function (e) {
                    return {
                        value: e,
                        done: 0 === arguments.length
                    }
                },
                Ue = function (e) {
                    ye.RequireObjectCoercible(e), this._s = ye.ToString(e), this._i = 0
                };
            Ue.prototype.next = function () {
                var e = this._s,
                    t = this._i;
                if (void 0 === e || t >= e.length) return this._s = void 0, Be();
                var n, r, a = e.charCodeAt(t);
                return r = a < 55296 || a > 56319 || t + 1 === e.length ? 1 : (n = e.charCodeAt(t + 1)) < 56320 || n > 57343 ? 1 : 2, this._i = t + r, Be(e.substr(t, r))
            }, _e(Ue.prototype), _e(String.prototype, function () {
                return new Ue(this)
            });
            var Ge = {
                from: function (e) {
                    var t, n, a, i, o, s, c = this;
                    if (arguments.length > 1 && (t = arguments[1]), void 0 === t) n = !1;
                    else {
                        if (!ye.IsCallable(t)) throw new TypeError("Array.from: when provided, the second argument must be a function");
                        arguments.length > 2 && (a = arguments[2]), n = !0
                    }
                    if (void 0 !== (ne(e) || ye.GetMethod(e, ue))) {
                        o = ye.IsConstructor(c) ? Object(new c) : [];
                        var u, l, p = ye.GetIterator(e);
                        for (s = 0; !1 !== (u = ye.IteratorStep(p));) {
                            l = u.value;
                            try {
                                n && (l = void 0 === a ? t(l, s) : r(t, a, l, s)), o[s] = l
                            } catch (e) {
                                throw ye.IteratorClose(p, !0), e
                            }
                            s += 1
                        }
                        i = s
                    } else {
                        var f, d = ye.ToObject(e);
                        for (i = ye.ToLength(d.length), o = ye.IsConstructor(c) ? Object(new c(i)) : new Array(i), s = 0; s < i; ++s) f = d[s], n && (f = void 0 === a ? t(f, s) : r(t, a, f, s)), Ne(o, s, f)
                    }
                    return o.length = i, o
                },
                of: function () {
                    for (var e = arguments.length, t = this, n = a(t) || !ye.IsCallable(t) ? new Array(e) : ye.Construct(t, [e]), r = 0; r < e; ++r) Ne(n, r, arguments[r]);
                    return n.length = e, n
                }
            };
            m(Array, Ge), Ee(Array), m((t = function (e, t) {
                this.i = 0, this.array = e, this.kind = t
            }).prototype, {
                next: function () {
                    var e = this.i,
                        n = this.array;
                    if (!(this instanceof t)) throw new TypeError("Not an ArrayIterator");
                    if (void 0 !== n)
                        for (var r = ye.ToLength(n.length); e < r; e++) {
                            var a, i = this.kind;
                            return "key" === i ? a = e : "value" === i ? a = n[e] : "entry" === i && (a = [e, n[e]]), this.i = e + 1, Be(a)
                        }
                    return this.array = void 0, Be()
                }
            }), _e(t.prototype), Array.of === Ge.of || function () {
                var e = function (e) {
                    this.length = e
                };
                e.prototype = [];
                var t = Array.of.apply(e, [1, 2]);
                return t instanceof e && 2 === t.length
            }() || se(Array, "of", Ge.of);
            var Xe = {
                copyWithin: function (e, t) {
                    var n, r = ye.ToObject(this),
                        a = ye.ToLength(r.length),
                        i = ye.ToInteger(e),
                        o = ye.ToInteger(t),
                        s = i < 0 ? D(a + i, 0) : R(i, a),
                        c = o < 0 ? D(a + o, 0) : R(o, a);
                    arguments.length > 2 && (n = arguments[2]);
                    var u = void 0 === n ? a : ye.ToInteger(n),
                        l = u < 0 ? D(a + u, 0) : R(u, a),
                        p = R(l - c, a - s),
                        f = 1;
                    for (c < s && s < c + p && (f = -1, c += p - 1, s += p - 1); p > 0;) c in r ? r[s] = r[c] : delete r[s], c += f, s += f, p -= 1;
                    return r
                },
                fill: function (e) {
                    var t, n;
                    arguments.length > 1 && (t = arguments[1]), arguments.length > 2 && (n = arguments[2]);
                    var r = ye.ToObject(this),
                        a = ye.ToLength(r.length);
                    t = ye.ToInteger(void 0 === t ? 0 : t);
                    for (var i = (n = ye.ToInteger(void 0 === n ? a : n)) < 0 ? a + n : n, o = t < 0 ? D(a + t, 0) : R(t, a); o < a && o < i; ++o) r[o] = e;
                    return r
                },
                find: function (e) {
                    var t = ye.ToObject(this),
                        n = ye.ToLength(t.length);
                    if (!ye.IsCallable(e)) throw new TypeError("Array#find: predicate must be a function");
                    for (var a, i = arguments.length > 1 ? arguments[1] : null, o = 0; o < n; o++)
                        if (a = t[o], i) {
                            if (r(e, i, a, o, t)) return a
                        } else if (e(a, o, t)) return a
                },
                findIndex: function (e) {
                    var t = ye.ToObject(this),
                        n = ye.ToLength(t.length);
                    if (!ye.IsCallable(e)) throw new TypeError("Array#findIndex: predicate must be a function");
                    for (var a = arguments.length > 1 ? arguments[1] : null, i = 0; i < n; i++)
                        if (a) {
                            if (r(e, a, t[i], i, t)) return i
                        } else if (e(t[i], i, t)) return i;
                    return -1
                },
                keys: function () {
                    return new t(this, "key")
                },
                values: function () {
                    return new t(this, "value")
                },
                entries: function () {
                    return new t(this, "entry")
                }
            };
            if (Array.prototype.keys && !ye.IsCallable([1].keys().next) && delete Array.prototype.keys, Array.prototype.entries && !ye.IsCallable([1].entries().next) && delete Array.prototype.entries, Array.prototype.keys && Array.prototype.entries && !Array.prototype.values && Array.prototype[ue] && (m(Array.prototype, {
                    values: Array.prototype[ue]
                }), oe(J.unscopables) && (Array.prototype[J.unscopables].values = !0)), l && Array.prototype.values && "values" !== Array.prototype.values.name) {
                var Je = Array.prototype.values;
                se(Array.prototype, "values", function () {
                    return ye.Call(Je, this, arguments)
                }), y(Array.prototype, ue, Array.prototype.values, !0)
            }
            m(Array.prototype, Xe), 1 / [!0].indexOf(!0, -0) < 0 && y(Array.prototype, "indexOf", function (e) {
                var t = E(this, arguments);
                return 0 === t && 1 / t < 0 ? 0 : t
            }, !0), _e(Array.prototype, function () {
                return this.values()
            }), Object.getPrototypeOf && _e(Object.getPrototypeOf([].values()));
            var Ye, Ke = s(function () {
                    return 0 === Array.from({
                        length: -1
                    }).length
                }),
                Ze = 1 === (Ye = Array.from([0].entries())).length && a(Ye[0]) && 0 === Ye[0][0] && 0 === Ye[0][1];
            if (Ke && Ze || se(Array, "from", Ge.from), !s(function () {
                    return Array.from([0], void 0)
                })) {
                var Qe = Array.from;
                se(Array, "from", function (e) {
                    return arguments.length > 1 && void 0 !== arguments[1] ? ye.Call(Qe, this, arguments) : r(Qe, this, e)
                })
            }
            var et = -(Math.pow(2, 32) - 1),
                tt = function (e, t) {
                    var n = {
                        length: et
                    };
                    return n[t ? (n.length >>> 0) - 1 : 0] = !0, s(function () {
                        return r(e, n, function () {
                            throw new RangeError("should not reach here")
                        }, []), !0
                    })
                };
            if (!tt(Array.prototype.forEach)) {
                var nt = Array.prototype.forEach;
                se(Array.prototype, "forEach", function (e) {
                    return ye.Call(nt, this.length >= 0 ? this : [], arguments)
                })
            }
            if (!tt(Array.prototype.map)) {
                var rt = Array.prototype.map;
                se(Array.prototype, "map", function (e) {
                    return ye.Call(rt, this.length >= 0 ? this : [], arguments)
                })
            }
            if (!tt(Array.prototype.filter)) {
                var at = Array.prototype.filter;
                se(Array.prototype, "filter", function (e) {
                    return ye.Call(at, this.length >= 0 ? this : [], arguments)
                })
            }
            if (!tt(Array.prototype.some)) {
                var it = Array.prototype.some;
                se(Array.prototype, "some", function (e) {
                    return ye.Call(it, this.length >= 0 ? this : [], arguments)
                })
            }
            if (!tt(Array.prototype.every)) {
                var ot = Array.prototype.every;
                se(Array.prototype, "every", function (e) {
                    return ye.Call(ot, this.length >= 0 ? this : [], arguments)
                })
            }
            if (!tt(Array.prototype.reduce)) {
                var st = Array.prototype.reduce;
                se(Array.prototype, "reduce", function (e) {
                    return ye.Call(st, this.length >= 0 ? this : [], arguments)
                })
            }
            if (!tt(Array.prototype.reduceRight, !0)) {
                var ct = Array.prototype.reduceRight;
                se(Array.prototype, "reduceRight", function (e) {
                    return ye.Call(ct, this.length >= 0 ? this : [], arguments)
                })
            }
            var ut = 8 !== Number("0o10"),
                lt = 2 !== Number("0b10"),
                pt = h(He, function (e) {
                    return 0 === Number(e + 0 + e)
                });
            if (ut || lt || pt) {
                var ft = Number,
                    dt = /^0b[01]+$/i,
                    ht = /^0o[0-7]+$/i,
                    yt = dt.test.bind(dt),
                    mt = ht.test.bind(ht),
                    gt = ze.test.bind(ze),
                    vt = We.test.bind(We),
                    bt = function () {
                        var e = function (t) {
                            var n;
                            "string" == typeof (n = arguments.length > 0 ? re(t) ? t : function (e) {
                                var t;
                                if ("function" == typeof e.valueOf && (t = e.valueOf(), re(t))) return t;
                                if ("function" == typeof e.toString && (t = e.toString(), re(t))) return t;
                                throw new TypeError("No default value")
                            }(t) : 0) && (n = ye.Call(Ve, n), yt(n) ? n = parseInt(N(n, 2), 2) : mt(n) ? n = parseInt(N(n, 2), 8) : (gt(n) || vt(n)) && (n = NaN));
                            var r = this,
                                a = s(function () {
                                    return ft.prototype.valueOf.call(r), !0
                                });
                            return r instanceof e && !a ? new ft(n) : ft(n)
                        };
                        return e
                    }();
                Ae(ft, bt, {}), m(bt, {
                    NaN: ft.NaN,
                    MAX_VALUE: ft.MAX_VALUE,
                    MIN_VALUE: ft.MIN_VALUE,
                    NEGATIVE_INFINITY: ft.NEGATIVE_INFINITY,
                    POSITIVE_INFINITY: ft.POSITIVE_INFINITY
                }), Number = bt, T(j, "Number", bt)
            }
            var wt = Math.pow(2, 53) - 1;
            m(Number, {
                MAX_SAFE_INTEGER: wt,
                MIN_SAFE_INTEGER: -wt,
                EPSILON: 2.220446049250313e-16,
                parseInt: j.parseInt,
                parseFloat: j.parseFloat,
                isFinite: Z,
                isInteger: function (e) {
                    return Z(e) && ye.ToInteger(e) === e
                },
                isSafeInteger: function (e) {
                    return Number.isInteger(e) && F(e) <= Number.MAX_SAFE_INTEGER
                },
                isNaN: K
            }), y(Number, "parseInt", j.parseInt, Number.parseInt !== j.parseInt), 1 === [, 1].find(function () {
                return !0
            }) && se(Array.prototype, "find", Xe.find), 0 !== [, 1].findIndex(function () {
                return !0
            }) && se(Array.prototype, "findIndex", Xe.findIndex);
            var Tt, St, xt, kt = Function.bind.call(Function.bind, Object.prototype.propertyIsEnumerable),
                Ot = function (e, t) {
                    u && kt(e, t) && Object.defineProperty(e, t, {
                        enumerable: !1
                    })
                },
                jt = function () {
                    for (var e = Number(this), t = arguments.length, n = t - e, r = new Array(n < 0 ? 0 : n), a = e; a < t; ++a) r[a - e] = arguments[a];
                    return r
                },
                At = function (e) {
                    return function (t, n) {
                        return t[n] = e[n], t
                    }
                },
                Ct = function (e, t) {
                    var n, r = i(Object(t));
                    return ye.IsCallable(Object.getOwnPropertySymbols) && (n = d(Object.getOwnPropertySymbols(Object(t)), kt(t))), f(_(r, n || []), At(t), e)
                },
                Et = {
                    assign: function (e, t) {
                        var n = ye.ToObject(e, "Cannot convert undefined or null to object");
                        return f(ye.Call(jt, 1, arguments), Ct, n)
                    },
                    is: function (e, t) {
                        return ye.SameValue(e, t)
                    }
                };
            if (Object.assign && Object.preventExtensions && function () {
                    var e = Object.preventExtensions({
                        1: 2
                    });
                    try {
                        Object.assign(e, "xy")
                    } catch (t) {
                        return "y" === e[1]
                    }
                }() && se(Object, "assign", Et.assign), m(Object, Et), u) {
                var _t = {
                    setPrototypeOf: function (e, t) {
                        var n, a = function (e, t) {
                            return function (e, t) {
                                if (!ye.TypeIsObject(e)) throw new TypeError("cannot set prototype on a non-object");
                                if (null !== t && !ye.TypeIsObject(t)) throw new TypeError("can only set prototype to an object or null" + t)
                            }(e, t), r(n, e, t), e
                        };
                        try {
                            n = e.getOwnPropertyDescriptor(e.prototype, "__proto__").set, r(n, {}, null)
                        } catch (t) {
                            if (e.prototype !== {}.__proto__) return;
                            n = function (e) {
                                this.__proto__ = e
                            }, a.polyfill = a(a({}, null), e.prototype) instanceof e
                        }
                        return a
                    }(Object)
                };
                m(Object, _t)
            }
            if (Object.setPrototypeOf && Object.getPrototypeOf && null !== Object.getPrototypeOf(Object.setPrototypeOf({}, null)) && null === Object.getPrototypeOf(Object.create(null)) && (Tt = Object.create(null), St = Object.getPrototypeOf, xt = Object.setPrototypeOf, Object.getPrototypeOf = function (e) {
                    var t = St(e);
                    return t === Tt ? null : t
                }, Object.setPrototypeOf = function (e, t) {
                    return xt(e, null === t ? Tt : t)
                }, Object.setPrototypeOf.polyfill = !1), !!o(function () {
                    return Object.keys("foo")
                })) {
                var Nt = Object.keys;
                se(Object, "keys", function (e) {
                    return Nt(ye.ToObject(e))
                }), i = Object.keys
            }
            if (o(function () {
                    return Object.keys(/a/g)
                })) {
                var Pt = Object.keys;
                se(Object, "keys", function (e) {
                    if (ie(e)) {
                        var t = [];
                        for (var n in e) z(e, n) && P(t, n);
                        return t
                    }
                    return Pt(e)
                }), i = Object.keys
            }
            if (Object.getOwnPropertyNames && !!o(function () {
                    return Object.getOwnPropertyNames("foo")
                })) {
                var It = "object" === ("undefined" == typeof window ? "undefined" : _typeof(window)) ? Object.getOwnPropertyNames(window) : [],
                    Mt = Object.getOwnPropertyNames;
                se(Object, "getOwnPropertyNames", function (e) {
                    var t = ye.ToObject(e);
                    if ("[object Window]" === g(t)) try {
                        return Mt(t)
                    } catch (e) {
                        return _([], It)
                    }
                    return Mt(t)
                })
            }
            if (Object.getOwnPropertyDescriptor && !!o(function () {
                    return Object.getOwnPropertyDescriptor("foo", "bar")
                })) {
                var Dt = Object.getOwnPropertyDescriptor;
                se(Object, "getOwnPropertyDescriptor", function (e, t) {
                    return Dt(ye.ToObject(e), t)
                })
            }
            if (Object.seal && !!o(function () {
                    return Object.seal("foo")
                })) {
                var Rt = Object.seal;
                se(Object, "seal", function (e) {
                    return ye.TypeIsObject(e) ? Rt(e) : e
                })
            }
            if (Object.isSealed && !!o(function () {
                    return Object.isSealed("foo")
                })) {
                var Lt = Object.isSealed;
                se(Object, "isSealed", function (e) {
                    return !ye.TypeIsObject(e) || Lt(e)
                })
            }
            if (Object.freeze && !!o(function () {
                    return Object.freeze("foo")
                })) {
                var Ft = Object.freeze;
                se(Object, "freeze", function (e) {
                    return ye.TypeIsObject(e) ? Ft(e) : e
                })
            }
            if (Object.isFrozen && !!o(function () {
                    return Object.isFrozen("foo")
                })) {
                var qt = Object.isFrozen;
                se(Object, "isFrozen", function (e) {
                    return !ye.TypeIsObject(e) || qt(e)
                })
            }
            if (Object.preventExtensions && !!o(function () {
                    return Object.preventExtensions("foo")
                })) {
                var Vt = Object.preventExtensions;
                se(Object, "preventExtensions", function (e) {
                    return ye.TypeIsObject(e) ? Vt(e) : e
                })
            }
            if (Object.isExtensible && !!o(function () {
                    return Object.isExtensible("foo")
                })) {
                var Ht = Object.isExtensible;
                se(Object, "isExtensible", function (e) {
                    return !!ye.TypeIsObject(e) && Ht(e)
                })
            }
            if (Object.getPrototypeOf && !!o(function () {
                    return Object.getPrototypeOf("foo")
                })) {
                var zt = Object.getPrototypeOf;
                se(Object, "getPrototypeOf", function (e) {
                    return zt(ye.ToObject(e))
                })
            }
            var Wt, $t = u && ((Wt = Object.getOwnPropertyDescriptor(RegExp.prototype, "flags")) && ye.IsCallable(Wt.get));
            if (u && !$t) {
                b(RegExp.prototype, "flags", function () {
                    if (!ye.TypeIsObject(this)) throw new TypeError("Method called on incompatible type: must be an object.");
                    var e = "";
                    return this.global && (e += "g"), this.ignoreCase && (e += "i"), this.multiline && (e += "m"), this.unicode && (e += "u"), this.sticky && (e += "y"), e
                })
            }
            var Bt, Ut = u && s(function () {
                    return "/a/i" === String(new RegExp(/a/g, "i"))
                }),
                Gt = ce && u && ((Bt = /./)[J.match] = !1, RegExp(Bt) === Bt),
                Xt = s(function () {
                    return "/abc/" === RegExp.prototype.toString.call({
                        source: "abc"
                    })
                }),
                Jt = Xt && s(function () {
                    return "/a/b" === RegExp.prototype.toString.call({
                        source: "a",
                        flags: "b"
                    })
                });
            if (!Xt || !Jt) {
                var Yt = RegExp.prototype.toString;
                y(RegExp.prototype, "toString", function () {
                    var e = ye.RequireObjectCoercible(this);
                    return ie(e) ? r(Yt, e) : "/" + fe(e.source) + "/" + fe(e.flags)
                }, !0), x(RegExp.prototype.toString, Yt)
            }
            if (u && (!Ut || Gt)) {
                var Kt = Object.getOwnPropertyDescriptor(RegExp.prototype, "flags").get,
                    Zt = Object.getOwnPropertyDescriptor(RegExp.prototype, "source") || {},
                    Qt = ye.IsCallable(Zt.get) ? Zt.get : function () {
                        return this.source
                    },
                    en = RegExp,
                    tn = function e(t, n) {
                        var r = ye.IsRegExp(t);
                        return this instanceof e || !r || void 0 !== n || t.constructor !== e ? ie(t) ? new e(ye.Call(Qt, t), void 0 === n ? ye.Call(Kt, t) : n) : (r && (t.source, void 0 === n && t.flags), new en(t, n)) : t
                    };
                Ae(en, tn, {
                    $input: !0
                }), RegExp = tn, T(j, "RegExp", tn)
            }
            if (u) {
                var nn = {
                    input: "$_",
                    lastMatch: "$&",
                    lastParen: "$+",
                    leftContext: "$`",
                    rightContext: "$'"
                };
                p(i(nn), function (e) {
                    e in RegExp && !(nn[e] in RegExp) && b(RegExp, nn[e], function () {
                        return RegExp[e]
                    })
                })
            }
            Ee(RegExp);
            var rn = 1 / Number.EPSILON,
                an = Math.pow(2, -23),
                on = Math.pow(2, 127) * (2 - an),
                sn = Math.pow(2, -126),
                cn = Math.E,
                un = Math.LOG2E,
                ln = Math.LOG10E,
                pn = Number.prototype.clz;
            delete Number.prototype.clz;
            var fn = {
                    acosh: function (e) {
                        var t = Number(e);
                        if (K(t) || e < 1) return NaN;
                        if (1 === t) return 0;
                        if (t === 1 / 0) return t;
                        var n = 1 / (t * t);
                        if (t < 2) return ee(t - 1 + H(1 - n) * t);
                        var r = t / 2;
                        return ee(r + H(1 - n) * r - 1) + 1 / un
                    },
                    asinh: function (e) {
                        var t = Number(e);
                        if (0 === t || !A(t)) return t;
                        var n = F(t),
                            r = n * n,
                            a = Q(t);
                        return n < 1 ? a * ee(n + r / (H(r + 1) + 1)) : a * (ee(n / 2 + H(1 + 1 / r) * n / 2 - 1) + 1 / un)
                    },
                    atanh: function (e) {
                        var t = Number(e);
                        if (0 === t) return t;
                        if (-1 === t) return -1 / 0;
                        if (1 === t) return 1 / 0;
                        if (K(t) || t < -1 || t > 1) return NaN;
                        var n = F(t);
                        return Q(t) * ee(2 * n / (1 - n)) / 2
                    },
                    cbrt: function (e) {
                        var t = Number(e);
                        if (0 === t) return t;
                        var n, r = t < 0;
                        return r && (t = -t), n = t === 1 / 0 ? 1 / 0 : (t / ((n = q(V(t) / 3)) * n) + 2 * n) / 3, r ? -n : n
                    },
                    clz32: function (e) {
                        var t = Number(e),
                            n = ye.ToUint32(t);
                        return 0 === n ? 32 : pn ? ye.Call(pn, n) : 31 - L(V(n + .5) * un)
                    },
                    cosh: function (e) {
                        var t = Number(e);
                        if (0 === t) return 1;
                        if (K(t)) return NaN;
                        if (!A(t)) return 1 / 0;
                        var n = q(F(t) - 1);
                        return (n + 1 / (n * cn * cn)) * (cn / 2)
                    },
                    expm1: function (e) {
                        var t = Number(e);
                        if (t === -1 / 0) return -1;
                        if (!A(t) || 0 === t) return t;
                        if (F(t) > .5) return q(t) - 1;
                        for (var n = t, r = 0, a = 1; r + n !== r;) r += n, n *= t / (a += 1);
                        return r
                    },
                    hypot: function (e, t) {
                        for (var n = 0, r = 0, a = 0; a < arguments.length; ++a) {
                            var i = F(Number(arguments[a]));
                            r < i ? (n *= r / i * (r / i), n += 1, r = i) : n += i > 0 ? i / r * (i / r) : i
                        }
                        return r === 1 / 0 ? 1 / 0 : r * H(n)
                    },
                    log2: function (e) {
                        return V(e) * un
                    },
                    log10: function (e) {
                        return V(e) * ln
                    },
                    log1p: ee,
                    sign: Q,
                    sinh: function (e) {
                        var t = Number(e);
                        if (!A(t) || 0 === t) return t;
                        var n = F(t);
                        if (n < 1) {
                            var r = Math.expm1(n);
                            return Q(t) * r * (1 + 1 / (r + 1)) / 2
                        }
                        var a = q(n - 1);
                        return Q(t) * (a - 1 / (a * cn * cn)) * (cn / 2)
                    },
                    tanh: function (e) {
                        var t = Number(e);
                        return K(t) || 0 === t ? t : t >= 20 ? 1 : t <= -20 ? -1 : (Math.expm1(t) - Math.expm1(-t)) / (q(t) + q(-t))
                    },
                    trunc: function (e) {
                        var t = Number(e);
                        return t < 0 ? -L(-t) : L(t)
                    },
                    imul: function (e, t) {
                        var n = ye.ToUint32(e),
                            r = ye.ToUint32(t),
                            a = 65535 & n,
                            i = 65535 & r;
                        return a * i + ((n >>> 16 & 65535) * i + a * (r >>> 16 & 65535) << 16 >>> 0) | 0
                    },
                    fround: function (e) {
                        var t = Number(e);
                        if (0 === t || t === 1 / 0 || t === -1 / 0 || K(t)) return t;
                        var n = Q(t),
                            r = F(t);
                        if (r < sn) return n * (r / sn / an + rn - rn) * sn * an;
                        var a = (1 + an / Number.EPSILON) * r,
                            i = a - (a - r);
                        return i > on || K(i) ? n * (1 / 0) : n * i
                    }
                },
                dn = function (e, t, n) {
                    return F(1 - e / t) / Number.EPSILON < (n || 8)
                };
            m(Math, fn), y(Math, "sinh", fn.sinh, Math.sinh(710) === 1 / 0), y(Math, "cosh", fn.cosh, Math.cosh(710) === 1 / 0), y(Math, "log1p", fn.log1p, -1e-17 !== Math.log1p(-1e-17)), y(Math, "asinh", fn.asinh, Math.asinh(-1e7) !== -Math.asinh(1e7)), y(Math, "asinh", fn.asinh, Math.asinh(1e300) === 1 / 0), y(Math, "atanh", fn.atanh, 0 === Math.atanh(1e-300)), y(Math, "tanh", fn.tanh, -2e-17 !== Math.tanh(-2e-17)), y(Math, "acosh", fn.acosh, Math.acosh(Number.MAX_VALUE) === 1 / 0), y(Math, "acosh", fn.acosh, !dn(Math.acosh(1 + Number.EPSILON), Math.sqrt(2 * Number.EPSILON))), y(Math, "cbrt", fn.cbrt, !dn(Math.cbrt(1e-300), 1e-100)), y(Math, "sinh", fn.sinh, -2e-17 !== Math.sinh(-2e-17));
            var hn = Math.expm1(10);
            y(Math, "expm1", fn.expm1, hn > 22025.465794806718 || hn < 22025.465794806718);
            var yn = Math.round,
                mn = 0 === Math.round(.5 - Number.EPSILON / 4) && 1 === Math.round(Number.EPSILON / 3.99 - .5),
                gn = [rn + 1, 2 * rn - 1].every(function (e) {
                    return Math.round(e) === e
                });
            y(Math, "round", function (e) {
                var t = L(e);
                return e - t < .5 ? t : -1 === t ? -0 : t + 1
            }, !mn || !gn), x(Math.round, yn);
            var vn = Math.imul; - 5 !== Math.imul(4294967295, 5) && (Math.imul = fn.imul, x(Math.imul, vn)), 2 !== Math.imul.length && se(Math, "imul", function (e, t) {
                return ye.Call(vn, Math, arguments)
            });
            var bn, wn, Tn = function () {
                var e = j.setTimeout;
                if ("function" == typeof e || "object" === (void 0 === e ? "undefined" : _typeof(e))) {
                    ye.IsPromise = function (e) {
                        return !!ye.TypeIsObject(e) && void 0 !== e._promise
                    };
                    var t, n = function (e) {
                        if (!ye.IsConstructor(e)) throw new TypeError("Bad promise constructor");
                        var t = this;
                        if (t.resolve = void 0, t.reject = void 0, t.promise = new e(function (e, n) {
                                if (void 0 !== t.resolve || void 0 !== t.reject) throw new TypeError("Bad Promise implementation!");
                                t.resolve = e, t.reject = n
                            }), !ye.IsCallable(t.resolve) || !ye.IsCallable(t.reject)) throw new TypeError("Bad promise constructor")
                    };
                    "undefined" != typeof window && ye.IsCallable(window.postMessage) && (t = function () {
                        var e = [];
                        return window.addEventListener("message", function (t) {
                                if (t.source === window && "zero-timeout-message" === t.data) {
                                    if (t.stopPropagation(), 0 === e.length) return;
                                    M(e)()
                                }
                            }, !0),
                            function (t) {
                                P(e, t), window.postMessage("zero-timeout-message", "*")
                            }
                    });
                    var a, i, o, s, c, u = ye.IsCallable(j.setImmediate) ? j.setImmediate : "object" === ("undefined" == typeof process ? "undefined" : _typeof(process)) && process.nextTick ? process.nextTick : (a = j.Promise, (i = a && a.resolve && a.resolve()) && function (e) {
                            return i.then(e)
                        } || (ye.IsCallable(t) ? t() : function (t) {
                            e(t, 0)
                        })),
                        l = function (e) {
                            return e
                        },
                        p = function (e) {
                            throw e
                        },
                        f = {},
                        d = function (e, t, n) {
                            u(function () {
                                h(e, t, n)
                            })
                        },
                        h = function (e, t, n) {
                            var r, a;
                            if (t === f) return e(n);
                            try {
                                r = e(n), a = t.resolve
                            } catch (e) {
                                r = e, a = t.reject
                            }
                            a(r)
                        },
                        y = function (e, t) {
                            var n = e._promise,
                                r = n.reactionLength;
                            if (r > 0 && (d(n.fulfillReactionHandler0, n.reactionCapability0, t), n.fulfillReactionHandler0 = void 0, n.rejectReactions0 = void 0, n.reactionCapability0 = void 0, r > 1))
                                for (var a = 1, i = 0; a < r; a++, i += 3) d(n[i + 0], n[i + 2], t), e[i + 0] = void 0, e[i + 1] = void 0, e[i + 2] = void 0;
                            n.result = t, n.state = 1, n.reactionLength = 0
                        },
                        g = function (e, t) {
                            var n = e._promise,
                                r = n.reactionLength;
                            if (r > 0 && (d(n.rejectReactionHandler0, n.reactionCapability0, t), n.fulfillReactionHandler0 = void 0, n.rejectReactions0 = void 0, n.reactionCapability0 = void 0, r > 1))
                                for (var a = 1, i = 0; a < r; a++, i += 3) d(n[i + 1], n[i + 2], t), e[i + 0] = void 0, e[i + 1] = void 0, e[i + 2] = void 0;
                            n.result = t, n.state = 2, n.reactionLength = 0
                        },
                        v = function (e) {
                            var t = !1;
                            return {
                                resolve: function (n) {
                                    var r;
                                    if (!t) {
                                        if (t = !0, n === e) return g(e, new TypeError("Self resolution"));
                                        if (!ye.TypeIsObject(n)) return y(e, n);
                                        try {
                                            r = n.then
                                        } catch (t) {
                                            return g(e, t)
                                        }
                                        if (!ye.IsCallable(r)) return y(e, n);
                                        u(function () {
                                            w(e, n, r)
                                        })
                                    }
                                },
                                reject: function (n) {
                                    if (!t) return t = !0, g(e, n)
                                }
                            }
                        },
                        b = function (e, t, n, a) {
                            e === s ? r(e, t, n, a, f) : r(e, t, n, a)
                        },
                        w = function (e, t, n) {
                            var r = v(e),
                                a = r.resolve,
                                i = r.reject;
                            try {
                                b(n, t, a, i)
                            } catch (e) {
                                i(e)
                            }
                        },
                        T = c = function (e) {
                            if (!(this instanceof c)) throw new TypeError('Constructor Promise requires "new"');
                            if (this && this._promise) throw new TypeError("Bad construction");
                            if (!ye.IsCallable(e)) throw new TypeError("not a valid resolver");
                            var t = Pe(this, c, o, {
                                    _promise: {
                                        result: void 0,
                                        state: 0,
                                        reactionLength: 0,
                                        fulfillReactionHandler0: void 0,
                                        rejectReactionHandler0: void 0,
                                        reactionCapability0: void 0
                                    }
                                }),
                                n = v(t),
                                r = n.reject;
                            try {
                                e(n.resolve, r)
                            } catch (e) {
                                r(e)
                            }
                            return t
                        };
                    o = T.prototype;
                    var S = function (e, t, n, r) {
                        var a = !1;
                        return function (i) {
                            a || (a = !0, t[e] = i, 0 == --r.count && (0, n.resolve)(t))
                        }
                    };
                    return m(T, {
                        all: function (e) {
                            var t = this;
                            if (!ye.TypeIsObject(t)) throw new TypeError("Promise is not object");
                            var r, a, i = new n(t);
                            try {
                                return function (e, t, n) {
                                    for (var r, a, i = e.iterator, o = [], s = {
                                            count: 1
                                        }, c = 0;;) {
                                        try {
                                            if (!1 === (r = ye.IteratorStep(i))) {
                                                e.done = !0;
                                                break
                                            }
                                            a = r.value
                                        } catch (t) {
                                            throw e.done = !0, t
                                        }
                                        o[c] = void 0;
                                        var u = t.resolve(a),
                                            l = S(c, o, n, s);
                                        s.count += 1, b(u.then, u, l, n.reject), c += 1
                                    }
                                    0 == --s.count && (0, n.resolve)(o);
                                    return n.promise
                                }(a = {
                                    iterator: r = ye.GetIterator(e),
                                    done: !1
                                }, t, i)
                            } catch (e) {
                                var o = e;
                                if (a && !a.done) try {
                                    ye.IteratorClose(r, !0)
                                } catch (e) {
                                    o = e
                                }
                                return (0, i.reject)(o), i.promise
                            }
                        },
                        race: function (e) {
                            var t = this;
                            if (!ye.TypeIsObject(t)) throw new TypeError("Promise is not object");
                            var r, a, i = new n(t);
                            try {
                                return function (e, t, n) {
                                    for (var r, a, i, o = e.iterator;;) {
                                        try {
                                            if (!1 === (r = ye.IteratorStep(o))) {
                                                e.done = !0;
                                                break
                                            }
                                            a = r.value
                                        } catch (t) {
                                            throw e.done = !0, t
                                        }
                                        i = t.resolve(a), b(i.then, i, n.resolve, n.reject)
                                    }
                                    return n.promise
                                }(a = {
                                    iterator: r = ye.GetIterator(e),
                                    done: !1
                                }, t, i)
                            } catch (e) {
                                var o = e;
                                if (a && !a.done) try {
                                    ye.IteratorClose(r, !0)
                                } catch (e) {
                                    o = e
                                }
                                return (0, i.reject)(o), i.promise
                            }
                        },
                        reject: function (e) {
                            if (!ye.TypeIsObject(this)) throw new TypeError("Bad promise constructor");
                            var t = new n(this);
                            return (0, t.reject)(e), t.promise
                        },
                        resolve: function (e) {
                            var t = this;
                            if (!ye.TypeIsObject(t)) throw new TypeError("Bad promise constructor");
                            if (ye.IsPromise(e) && e.constructor === t) return e;
                            var r = new n(t);
                            return (0, r.resolve)(e), r.promise
                        }
                    }), m(o, {
                        catch: function (e) {
                            return this.then(null, e)
                        },
                        then: function (e, t) {
                            if (!ye.IsPromise(this)) throw new TypeError("not a promise");
                            var r, a = ye.SpeciesConstructor(this, T);
                            r = arguments.length > 2 && arguments[2] === f && a === T ? f : new n(a);
                            var i, o = ye.IsCallable(e) ? e : l,
                                s = ye.IsCallable(t) ? t : p,
                                c = this._promise;
                            if (0 === c.state) {
                                if (0 === c.reactionLength) c.fulfillReactionHandler0 = o, c.rejectReactionHandler0 = s, c.reactionCapability0 = r;
                                else {
                                    var u = 3 * (c.reactionLength - 1);
                                    c[u + 0] = o, c[u + 1] = s, c[u + 2] = r
                                }
                                c.reactionLength += 1
                            } else if (1 === c.state) i = c.result, d(o, r, i);
                            else {
                                if (2 !== c.state) throw new TypeError("unexpected Promise state");
                                i = c.result, d(s, r, i)
                            }
                            return r.promise
                        }
                    }), f = new n(T), s = o.then, T
                }
            }();
            if (j.Promise && (delete j.Promise.accept, delete j.Promise.defer, delete j.Promise.prototype.chain), "function" == typeof Tn) {
                m(j, {
                    Promise: Tn
                });
                var Sn = O(j.Promise, function (e) {
                        return e.resolve(42).then(function () {}) instanceof e
                    }),
                    xn = !o(function () {
                        return j.Promise.reject(42).then(null, 5).then(null, W)
                    }),
                    kn = o(function () {
                        return j.Promise.call(3, W)
                    }),
                    On = function (e) {
                        var t = e.resolve(5);
                        t.constructor = {};
                        var n = e.resolve(t);
                        try {
                            n.then(null, W).then(null, W)
                        } catch (e) {
                            return !0
                        }
                        return t === n
                    }(j.Promise),
                    jn = u && (bn = 0, wn = Object.defineProperty({}, "then", {
                        get: function () {
                            bn += 1
                        }
                    }), Promise.resolve(wn), 1 === bn),
                    An = function e(t) {
                        var n = new Promise(t);
                        t(3, function () {}), this.then = n.then, this.constructor = e
                    };
                An.prototype = Promise.prototype, An.all = Promise.all;
                var Cn = s(function () {
                    return !!An.all([1, 2])
                });
                if (Sn && xn && kn && !On && jn && !Cn || (Promise = Tn, se(j, "Promise", Tn)), 1 !== Promise.all.length) {
                    var En = Promise.all;
                    se(Promise, "all", function (e) {
                        return ye.Call(En, this, arguments)
                    })
                }
                if (1 !== Promise.race.length) {
                    var _n = Promise.race;
                    se(Promise, "race", function (e) {
                        return ye.Call(_n, this, arguments)
                    })
                }
                if (1 !== Promise.resolve.length) {
                    var Nn = Promise.resolve;
                    se(Promise, "resolve", function (e) {
                        return ye.Call(Nn, this, arguments)
                    })
                }
                if (1 !== Promise.reject.length) {
                    var Pn = Promise.reject;
                    se(Promise, "reject", function (e) {
                        return ye.Call(Pn, this, arguments)
                    })
                }
                Ot(Promise, "all"), Ot(Promise, "race"), Ot(Promise, "resolve"), Ot(Promise, "reject"), Ee(Promise)
            }
            var In, Mn, Dn = function (e) {
                    var t = i(f(e, function (e, t) {
                        return e[t] = !0, e
                    }, {}));
                    return e.join(":") === t.join(":")
                },
                Rn = Dn(["z", "a", "bb"]),
                Ln = Dn(["z", 1, "a", "3", 2]);
            if (u) {
                var Fn = function (e, t) {
                        return t || Rn ? he(e) ? "^" + ye.ToString(e) : "string" == typeof e ? "$" + e : "number" == typeof e ? Ln ? e : "n" + e : "boolean" == typeof e ? "b" + e : null : null
                    },
                    qn = function () {
                        return Object.create ? Object.create(null) : {}
                    },
                    Vn = function (e, t, n) {
                        if (a(n) || ae(n)) p(n, function (e) {
                            if (!ye.TypeIsObject(e)) throw new TypeError("Iterator value " + e + " is not an entry object");
                            t.set(e[0], e[1])
                        });
                        else if (n instanceof e) r(e.prototype.forEach, n, function (e, n) {
                            t.set(n, e)
                        });
                        else {
                            var i, o;
                            if (!he(n)) {
                                if (o = t.set, !ye.IsCallable(o)) throw new TypeError("bad map");
                                i = ye.GetIterator(n)
                            }
                            if (void 0 !== i)
                                for (;;) {
                                    var s = ye.IteratorStep(i);
                                    if (!1 === s) break;
                                    var c = s.value;
                                    try {
                                        if (!ye.TypeIsObject(c)) throw new TypeError("Iterator value " + c + " is not an entry object");
                                        r(o, t, c[0], c[1])
                                    } catch (e) {
                                        throw ye.IteratorClose(i, !0), e
                                    }
                                }
                        }
                    },
                    Hn = function (e, t, n) {
                        if (a(n) || ae(n)) p(n, function (e) {
                            t.add(e)
                        });
                        else if (n instanceof e) r(e.prototype.forEach, n, function (e) {
                            t.add(e)
                        });
                        else {
                            var i, o;
                            if (!he(n)) {
                                if (o = t.add, !ye.IsCallable(o)) throw new TypeError("bad set");
                                i = ye.GetIterator(n)
                            }
                            if (void 0 !== i)
                                for (;;) {
                                    var s = ye.IteratorStep(i);
                                    if (!1 === s) break;
                                    var c = s.value;
                                    try {
                                        r(o, t, c)
                                    } catch (e) {
                                        throw ye.IteratorClose(i, !0), e
                                    }
                                }
                        }
                    },
                    zn = {
                        Map: function () {
                            var e = {},
                                t = function (e, t) {
                                    this.key = e, this.value = t, this.next = null, this.prev = null
                                };
                            t.prototype.isRemoved = function () {
                                return this.key === e
                            };
                            var n, a = function (e, t) {
                                    if (!ye.TypeIsObject(e) || ! function (e) {
                                            return !!e._es6map
                                        }(e)) throw new TypeError("Method Map.prototype." + t + " called on incompatible receiver " + ye.ToString(e))
                                },
                                i = function (e, t) {
                                    a(e, "[[MapIterator]]"), this.head = e._head, this.i = this.head, this.kind = t
                                };
                            _e(i.prototype = {
                                isMapIterator: !0,
                                next: function () {
                                    if (!this.isMapIterator) throw new TypeError("Not a MapIterator");
                                    var e, t = this.i,
                                        n = this.kind,
                                        r = this.head;
                                    if (void 0 === this.i) return Be();
                                    for (; t.isRemoved() && t !== r;) t = t.prev;
                                    for (; t.next !== r;)
                                        if (!(t = t.next).isRemoved()) return e = "key" === n ? t.key : "value" === n ? t.value : [t.key, t.value], this.i = t, Be(e);
                                    return this.i = void 0, Be()
                                }
                            });
                            var o = function e() {
                                if (!(this instanceof e)) throw new TypeError('Constructor Map requires "new"');
                                if (this && this._es6map) throw new TypeError("Bad construction");
                                var r = Pe(this, e, n, {
                                        _es6map: !0,
                                        _head: null,
                                        _map: $ ? new $ : null,
                                        _size: 0,
                                        _storage: qn()
                                    }),
                                    a = new t(null, null);
                                return a.next = a.prev = a, r._head = a, arguments.length > 0 && Vn(e, r, arguments[0]), r
                            };
                            return b(n = o.prototype, "size", function () {
                                if (void 0 === this._size) throw new TypeError("size method called on incompatible Map");
                                return this._size
                            }), m(n, {
                                get: function (e) {
                                    var t;
                                    a(this, "get");
                                    var n = Fn(e, !0);
                                    if (null !== n) return (t = this._storage[n]) ? t.value : void 0;
                                    if (this._map) return (t = U.call(this._map, e)) ? t.value : void 0;
                                    for (var r = this._head, i = r;
                                        (i = i.next) !== r;)
                                        if (ye.SameValueZero(i.key, e)) return i.value
                                },
                                has: function (e) {
                                    a(this, "has");
                                    var t = Fn(e, !0);
                                    if (null !== t) return void 0 !== this._storage[t];
                                    if (this._map) return G.call(this._map, e);
                                    for (var n = this._head, r = n;
                                        (r = r.next) !== n;)
                                        if (ye.SameValueZero(r.key, e)) return !0;
                                    return !1
                                },
                                set: function (e, n) {
                                    a(this, "set");
                                    var r, i = this._head,
                                        o = i,
                                        s = Fn(e, !0);
                                    if (null !== s) {
                                        if (void 0 !== this._storage[s]) return this._storage[s].value = n, this;
                                        r = this._storage[s] = new t(e, n), o = i.prev
                                    } else this._map && (G.call(this._map, e) ? U.call(this._map, e).value = n : (r = new t(e, n), X.call(this._map, e, r), o = i.prev));
                                    for (;
                                        (o = o.next) !== i;)
                                        if (ye.SameValueZero(o.key, e)) return o.value = n, this;
                                    return r = r || new t(e, n), ye.SameValue(-0, e) && (r.key = 0), r.next = this._head, r.prev = this._head.prev, r.prev.next = r, r.next.prev = r, this._size += 1, this
                                },
                                delete: function (t) {
                                    a(this, "delete");
                                    var n = this._head,
                                        r = n,
                                        i = Fn(t, !0);
                                    if (null !== i) {
                                        if (void 0 === this._storage[i]) return !1;
                                        r = this._storage[i].prev, delete this._storage[i]
                                    } else if (this._map) {
                                        if (!G.call(this._map, t)) return !1;
                                        r = U.call(this._map, t).prev, B.call(this._map, t)
                                    }
                                    for (;
                                        (r = r.next) !== n;)
                                        if (ye.SameValueZero(r.key, t)) return r.key = e, r.value = e, r.prev.next = r.next, r.next.prev = r.prev, this._size -= 1, !0;
                                    return !1
                                },
                                clear: function () {
                                    a(this, "clear"), this._map = $ ? new $ : null, this._size = 0, this._storage = qn();
                                    for (var t = this._head, n = t, r = n.next;
                                        (n = r) !== t;) n.key = e, n.value = e, r = n.next, n.next = n.prev = t;
                                    t.next = t.prev = t
                                },
                                keys: function () {
                                    return a(this, "keys"), new i(this, "key")
                                },
                                values: function () {
                                    return a(this, "values"), new i(this, "value")
                                },
                                entries: function () {
                                    return a(this, "entries"), new i(this, "key+value")
                                },
                                forEach: function (e) {
                                    a(this, "forEach");
                                    for (var t = arguments.length > 1 ? arguments[1] : null, n = this.entries(), i = n.next(); !i.done; i = n.next()) t ? r(e, t, i.value[1], i.value[0], this) : e(i.value[1], i.value[0], this)
                                }
                            }), _e(n, n.entries), o
                        }(),
                        Set: function () {
                            var e, t = function (e, t) {
                                    if (!ye.TypeIsObject(e) || ! function (e) {
                                            return e._es6set && void 0 !== e._storage
                                        }(e)) throw new TypeError("Set.prototype." + t + " called on incompatible receiver " + ye.ToString(e))
                                },
                                n = function t() {
                                    if (!(this instanceof t)) throw new TypeError('Constructor Set requires "new"');
                                    if (this && this._es6set) throw new TypeError("Bad construction");
                                    var n = Pe(this, t, e, {
                                        _es6set: !0,
                                        "[[SetData]]": null,
                                        _storage: qn()
                                    });
                                    if (!n._es6set) throw new TypeError("bad set");
                                    return arguments.length > 0 && Hn(t, n, arguments[0]), n
                                };
                            e = n.prototype;
                            var a = function (e) {
                                if (!e["[[SetData]]"]) {
                                    var t = new zn.Map;
                                    e["[[SetData]]"] = t, p(i(e._storage), function (e) {
                                        var n = function (e) {
                                            var t = e;
                                            if ("^null" === t) return null;
                                            if ("^undefined" !== t) {
                                                var n = t.charAt(0);
                                                return "$" === n ? N(t, 1) : "n" === n ? +N(t, 1) : "b" === n ? "btrue" === t : +t
                                            }
                                        }(e);
                                        t.set(n, n)
                                    }), e["[[SetData]]"] = t
                                }
                                e._storage = null
                            };
                            b(n.prototype, "size", function () {
                                return t(this, "size"), this._storage ? i(this._storage).length : (a(this), this["[[SetData]]"].size)
                            }), m(n.prototype, {
                                has: function (e) {
                                    var n;
                                    return t(this, "has"), this._storage && null !== (n = Fn(e)) ? !!this._storage[n] : (a(this), this["[[SetData]]"].has(e))
                                },
                                add: function (e) {
                                    var n;
                                    return t(this, "add"), this._storage && null !== (n = Fn(e)) ? (this._storage[n] = !0, this) : (a(this), this["[[SetData]]"].set(e, e), this)
                                },
                                delete: function (e) {
                                    var n;
                                    if (t(this, "delete"), this._storage && null !== (n = Fn(e))) {
                                        var r = z(this._storage, n);
                                        return delete this._storage[n] && r
                                    }
                                    return a(this), this["[[SetData]]"].delete(e)
                                },
                                clear: function () {
                                    t(this, "clear"), this._storage && (this._storage = qn()), this["[[SetData]]"] && this["[[SetData]]"].clear()
                                },
                                values: function () {
                                    return t(this, "values"), a(this), new o(this["[[SetData]]"].values())
                                },
                                entries: function () {
                                    return t(this, "entries"), a(this), new o(this["[[SetData]]"].entries())
                                },
                                forEach: function (e) {
                                    t(this, "forEach");
                                    var n = arguments.length > 1 ? arguments[1] : null,
                                        i = this;
                                    a(i), this["[[SetData]]"].forEach(function (t, a) {
                                        n ? r(e, n, a, a, i) : e(a, a, i)
                                    })
                                }
                            }), y(n.prototype, "keys", n.prototype.values, !0), _e(n.prototype, n.prototype.values);
                            var o = function (e) {
                                this.it = e
                            };
                            return o.prototype = {
                                isSetIterator: !0,
                                next: function () {
                                    if (!this.isSetIterator) throw new TypeError("Not a SetIterator");
                                    return this.it.next()
                                }
                            }, _e(o.prototype), n
                        }()
                    };
                if (j.Set && !Set.prototype.delete && Set.prototype.remove && Set.prototype.items && Set.prototype.map && Array.isArray((new Set).keys) && (j.Set = zn.Set), j.Map || j.Set) {
                    s(function () {
                        return 2 === new Map([
                            [1, 2]
                        ]).get(1)
                    }) || (j.Map = function e() {
                        if (!(this instanceof e)) throw new TypeError('Constructor Map requires "new"');
                        var t = new $;
                        return arguments.length > 0 && Vn(e, t, arguments[0]), delete t.constructor, Object.setPrototypeOf(t, j.Map.prototype), t
                    }, j.Map.prototype = k($.prototype), y(j.Map.prototype, "constructor", j.Map, !0), x(j.Map, $));
                    var Wn = new Map,
                        $n = ((Mn = new Map([
                            [1, 0],
                            [2, 0],
                            [3, 0],
                            [4, 0]
                        ])).set(-0, Mn), Mn.get(0) === Mn && Mn.get(-0) === Mn && Mn.has(0) && Mn.has(-0)),
                        Bn = Wn.set(1, 2) === Wn;
                    $n && Bn || se(Map.prototype, "set", function (e, t) {
                        return r(X, this, 0 === e ? 0 : e, t), this
                    }), $n || (m(Map.prototype, {
                        get: function (e) {
                            return r(U, this, 0 === e ? 0 : e)
                        },
                        has: function (e) {
                            return r(G, this, 0 === e ? 0 : e)
                        }
                    }, !0), x(Map.prototype.get, U), x(Map.prototype.has, G));
                    var Un = new Set,
                        Gn = Set.prototype.delete && Set.prototype.add && Set.prototype.has && ((In = Un).delete(0), In.add(-0), !In.has(0)),
                        Xn = Un.add(1) === Un;
                    if (!Gn || !Xn) {
                        var Jn = Set.prototype.add;
                        Set.prototype.add = function (e) {
                            return r(Jn, this, 0 === e ? 0 : e), this
                        }, x(Set.prototype.add, Jn)
                    }
                    if (!Gn) {
                        var Yn = Set.prototype.has;
                        Set.prototype.has = function (e) {
                            return r(Yn, this, 0 === e ? 0 : e)
                        }, x(Set.prototype.has, Yn);
                        var Kn = Set.prototype.delete;
                        Set.prototype.delete = function (e) {
                            return r(Kn, this, 0 === e ? 0 : e)
                        }, x(Set.prototype.delete, Kn)
                    }
                    var Zn = O(j.Map, function (e) {
                            var t = new e([]);
                            return t.set(42, 42), t instanceof e
                        }),
                        Qn = Object.setPrototypeOf && !Zn,
                        er = function () {
                            try {
                                return !(j.Map() instanceof j.Map)
                            } catch (e) {
                                return e instanceof TypeError
                            }
                        }();
                    0 === j.Map.length && !Qn && er || (j.Map = function e() {
                        if (!(this instanceof e)) throw new TypeError('Constructor Map requires "new"');
                        var t = new $;
                        return arguments.length > 0 && Vn(e, t, arguments[0]), delete t.constructor, Object.setPrototypeOf(t, e.prototype), t
                    }, j.Map.prototype = $.prototype, y(j.Map.prototype, "constructor", j.Map, !0), x(j.Map, $));
                    var tr = O(j.Set, function (e) {
                            var t = new e([]);
                            return t.add(42, 42), t instanceof e
                        }),
                        nr = Object.setPrototypeOf && !tr,
                        rr = function () {
                            try {
                                return !(j.Set() instanceof j.Set)
                            } catch (e) {
                                return e instanceof TypeError
                            }
                        }();
                    if (0 !== j.Set.length || nr || !rr) {
                        var ar = j.Set;
                        j.Set = function e() {
                            if (!(this instanceof e)) throw new TypeError('Constructor Set requires "new"');
                            var t = new ar;
                            return arguments.length > 0 && Hn(e, t, arguments[0]), delete t.constructor, Object.setPrototypeOf(t, e.prototype), t
                        }, j.Set.prototype = ar.prototype, y(j.Set.prototype, "constructor", j.Set, !0), x(j.Set, ar)
                    }
                    var ir = new j.Map,
                        or = !s(function () {
                            return ir.keys().next().done
                        });
                    if (("function" != typeof j.Map.prototype.clear || 0 !== (new j.Set).size || 0 !== ir.size || "function" != typeof j.Map.prototype.keys || "function" != typeof j.Set.prototype.keys || "function" != typeof j.Map.prototype.forEach || "function" != typeof j.Set.prototype.forEach || c(j.Map) || c(j.Set) || "function" != typeof ir.keys().next || or || !Zn) && m(j, {
                            Map: zn.Map,
                            Set: zn.Set
                        }, !0), j.Set.prototype.keys !== j.Set.prototype.values && y(j.Set.prototype, "keys", j.Set.prototype.values, !0), _e(Object.getPrototypeOf((new j.Map).keys())), _e(Object.getPrototypeOf((new j.Set).keys())), l && "has" !== j.Set.prototype.has.name) {
                        var sr = j.Set.prototype.has;
                        se(j.Set.prototype, "has", function (e) {
                            return r(sr, this, e)
                        })
                    }
                }
                m(j, zn), Ee(j.Map), Ee(j.Set)
            }
            var cr = function (e) {
                    if (!ye.TypeIsObject(e)) throw new TypeError("target must be an object")
                },
                ur = {
                    apply: function () {
                        return ye.Call(ye.Call, null, arguments)
                    },
                    construct: function (e, t) {
                        if (!ye.IsConstructor(e)) throw new TypeError("First argument must be a constructor.");
                        var n = arguments.length > 2 ? arguments[2] : e;
                        if (!ye.IsConstructor(n)) throw new TypeError("new.target must be a constructor.");
                        return ye.Construct(e, t, n, "internal")
                    },
                    deleteProperty: function (e, t) {
                        if (cr(e), u) {
                            var n = Object.getOwnPropertyDescriptor(e, t);
                            if (n && !n.configurable) return !1
                        }
                        return delete e[t]
                    },
                    has: function (e, t) {
                        return cr(e), t in e
                    }
                };
            Object.getOwnPropertyNames && Object.assign(ur, {
                ownKeys: function (e) {
                    cr(e);
                    var t = Object.getOwnPropertyNames(e);
                    return ye.IsCallable(Object.getOwnPropertySymbols) && I(t, Object.getOwnPropertySymbols(e)), t
                }
            });
            var lr = function (e) {
                return !o(e)
            };
            if (Object.preventExtensions && Object.assign(ur, {
                    isExtensible: function (e) {
                        return cr(e), Object.isExtensible(e)
                    },
                    preventExtensions: function (e) {
                        return cr(e), lr(function () {
                            return Object.preventExtensions(e)
                        })
                    }
                }), u) {
                var pr = function (e, t, n) {
                        var r = Object.getOwnPropertyDescriptor(e, t);
                        if (!r) {
                            var a = Object.getPrototypeOf(e);
                            if (null === a) return;
                            return pr(a, t, n)
                        }
                        return "value" in r ? r.value : r.get ? ye.Call(r.get, n) : void 0
                    },
                    fr = function (e, t, n, a) {
                        var i = Object.getOwnPropertyDescriptor(e, t);
                        if (!i) {
                            var o = Object.getPrototypeOf(e);
                            if (null !== o) return fr(o, t, n, a);
                            i = {
                                value: void 0,
                                writable: !0,
                                enumerable: !0,
                                configurable: !0
                            }
                        }
                        return "value" in i ? !!i.writable && (!!ye.TypeIsObject(a) && (Object.getOwnPropertyDescriptor(a, t) ? pe.defineProperty(a, t, {
                            value: n
                        }) : pe.defineProperty(a, t, {
                            value: n,
                            writable: !0,
                            enumerable: !0,
                            configurable: !0
                        }))) : !!i.set && (r(i.set, a, n), !0)
                    };
                Object.assign(ur, {
                    defineProperty: function (e, t, n) {
                        return cr(e), lr(function () {
                            return Object.defineProperty(e, t, n)
                        })
                    },
                    getOwnPropertyDescriptor: function (e, t) {
                        return cr(e), Object.getOwnPropertyDescriptor(e, t)
                    },
                    get: function (e, t) {
                        cr(e);
                        var n = arguments.length > 2 ? arguments[2] : e;
                        return pr(e, t, n)
                    },
                    set: function (e, t, n) {
                        cr(e);
                        var r = arguments.length > 3 ? arguments[3] : e;
                        return fr(e, t, n, r)
                    }
                })
            }
            if (Object.getPrototypeOf) {
                var dr = Object.getPrototypeOf;
                ur.getPrototypeOf = function (e) {
                    return cr(e), dr(e)
                }
            }
            if (Object.setPrototypeOf && ur.getPrototypeOf) {
                Object.assign(ur, {
                    setPrototypeOf: function (e, t) {
                        if (cr(e), null !== t && !ye.TypeIsObject(t)) throw new TypeError("proto must be an object or null");
                        return t === pe.getPrototypeOf(e) || !(pe.isExtensible && !pe.isExtensible(e)) && (! function (e, t) {
                            for (var n = t; n;) {
                                if (e === n) return !0;
                                n = ur.getPrototypeOf(n)
                            }
                            return !1
                        }(e, t) && (Object.setPrototypeOf(e, t), !0))
                    }
                })
            }
            Object.keys(ur).forEach(function (e) {
                ! function (e, t) {
                    ye.IsCallable(j.Reflect[e]) ? s(function () {
                        return j.Reflect[e](1), j.Reflect[e](NaN), j.Reflect[e](!0), !0
                    }) && se(j.Reflect, e, t) : y(j.Reflect, e, t)
                }(e, ur[e])
            });
            var hr = j.Reflect.getPrototypeOf;
            if (l && hr && "getPrototypeOf" !== hr.name && se(j.Reflect, "getPrototypeOf", function (e) {
                    return r(hr, j.Reflect, e)
                }), j.Reflect.setPrototypeOf && s(function () {
                    return j.Reflect.setPrototypeOf(1, {}), !0
                }) && se(j.Reflect, "setPrototypeOf", ur.setPrototypeOf), j.Reflect.defineProperty && (s(function () {
                    var e = !j.Reflect.defineProperty(1, "test", {
                            value: 1
                        }),
                        t = "function" != typeof Object.preventExtensions || !j.Reflect.defineProperty(Object.preventExtensions({}), "test", {});
                    return e && t
                }) || se(j.Reflect, "defineProperty", ur.defineProperty)), j.Reflect.construct && (s(function () {
                    var e = function () {};
                    return j.Reflect.construct(function () {}, [], e) instanceof e
                }) || se(j.Reflect, "construct", ur.construct)), "Invalid Date" !== String(new Date(NaN))) {
                var yr = Date.prototype.toString;
                se(Date.prototype, "toString", function () {
                    var e = +this;
                    return e != e ? "Invalid Date" : ye.Call(yr, this)
                })
            }
            var mr = {
                anchor: function (e) {
                    return ye.CreateHTML(this, "a", "name", e)
                },
                big: function () {
                    return ye.CreateHTML(this, "big", "", "")
                },
                blink: function () {
                    return ye.CreateHTML(this, "blink", "", "")
                },
                bold: function () {
                    return ye.CreateHTML(this, "b", "", "")
                },
                fixed: function () {
                    return ye.CreateHTML(this, "tt", "", "")
                },
                fontcolor: function (e) {
                    return ye.CreateHTML(this, "font", "color", e)
                },
                fontsize: function (e) {
                    return ye.CreateHTML(this, "font", "size", e)
                },
                italics: function () {
                    return ye.CreateHTML(this, "i", "", "")
                },
                link: function (e) {
                    return ye.CreateHTML(this, "a", "href", e)
                },
                small: function () {
                    return ye.CreateHTML(this, "small", "", "")
                },
                strike: function () {
                    return ye.CreateHTML(this, "strike", "", "")
                },
                sub: function () {
                    return ye.CreateHTML(this, "sub", "", "")
                },
                sup: function () {
                    return ye.CreateHTML(this, "sup", "", "")
                }
            };
            p(Object.keys(mr), function (e) {
                var t = String.prototype[e],
                    n = !1;
                if (ye.IsCallable(t)) {
                    var a = r(t, "", ' " '),
                        i = _([], a.match(/"/g)).length;
                    n = a !== a.toLowerCase() || i > 2
                } else n = !0;
                n && se(String.prototype, e, mr[e])
            });
            var gr = function () {
                    if (!ce) return !1;
                    var e = "object" === ("undefined" == typeof JSON ? "undefined" : _typeof(JSON)) && "function" == typeof JSON.stringify ? JSON.stringify : null;
                    if (!e) return !1;
                    if (void 0 !== e(J())) return !0;
                    if ("[null]" !== e([J()])) return !0;
                    var t = {
                        a: J()
                    };
                    return t[J()] = !0, "{}" !== e(t)
                }(),
                vr = s(function () {
                    return !ce || "{}" === JSON.stringify(Object(J())) && "[{}]" === JSON.stringify([Object(J())])
                });
            if (gr || !vr) {
                var br = JSON.stringify;
                se(JSON, "stringify", function (e) {
                    if ("symbol" !== (void 0 === e ? "undefined" : _typeof(e))) {
                        var t;
                        arguments.length > 1 && (t = arguments[1]);
                        var n = [e];
                        if (a(t)) n.push(t);
                        else {
                            var i = ye.IsCallable(t) ? t : null;
                            n.push(function (e, t) {
                                var n = i ? r(i, this, e, t) : t;
                                if ("symbol" !== (void 0 === n ? "undefined" : _typeof(n))) return oe(n) ? At({})(n) : n
                            })
                        }
                        return arguments.length > 2 && n.push(arguments[2]), br.apply(this, n)
                    }
                })
            }
            return j
        }, "function" == typeof define && define.amd ? define("es6-shim", factory) : "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) ? module.exports = factory() : root.returnExports = factory(),
        function (e, t) {
            "object" === ("undefined" == typeof module ? "undefined" : _typeof(module)) && "object" === _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
                if (!e.document) throw new Error("jQuery requires a window with a document");
                return t(e)
            } : t(e)
        }("undefined" != typeof window ? window : this, function (e, t) {
            var n = [],
                r = Object.getPrototypeOf,
                a = n.slice,
                i = n.flat ? function (e) {
                    return n.flat.call(e)
                } : function (e) {
                    return n.concat.apply([], e)
                },
                o = n.push,
                s = n.indexOf,
                c = {},
                u = c.toString,
                l = c.hasOwnProperty,
                p = l.toString,
                f = p.call(Object),
                d = {},
                h = function (e) {
                    return "function" == typeof e && "number" != typeof e.nodeType
                },
                y = function (e) {
                    return null != e && e === e.window
                },
                m = e.document,
                g = {
                    type: !0,
                    src: !0,
                    nonce: !0,
                    noModule: !0
                };

            function v(e, t, n) {
                var r, a, i = (n = n || m).createElement("script");
                if (i.text = e, t)
                    for (r in g)(a = t[r] || t.getAttribute && t.getAttribute(r)) && i.setAttribute(r, a);
                n.head.appendChild(i).parentNode.removeChild(i)
            }

            function b(e) {
                return null == e ? e + "" : "object" === (void 0 === e ? "undefined" : _typeof(e)) || "function" == typeof e ? c[u.call(e)] || "object" : void 0 === e ? "undefined" : _typeof(e)
            }
            var w = function e(t, n) {
                return new e.fn.init(t, n)
            };

            function T(e) {
                var t = !!e && "length" in e && e.length,
                    n = b(e);
                return !h(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
            }
            w.fn = w.prototype = {
                jquery: "3.5.1",
                constructor: w,
                length: 0,
                toArray: function () {
                    return a.call(this)
                },
                get: function (e) {
                    return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
                },
                pushStack: function (e) {
                    var t = w.merge(this.constructor(), e);
                    return t.prevObject = this, t
                },
                each: function (e) {
                    return w.each(this, e)
                },
                map: function (e) {
                    return this.pushStack(w.map(this, function (t, n) {
                        return e.call(t, n, t)
                    }))
                },
                slice: function () {
                    return this.pushStack(a.apply(this, arguments))
                },
                first: function () {
                    return this.eq(0)
                },
                last: function () {
                    return this.eq(-1)
                },
                even: function () {
                    return this.pushStack(w.grep(this, function (e, t) {
                        return (t + 1) % 2
                    }))
                },
                odd: function () {
                    return this.pushStack(w.grep(this, function (e, t) {
                        return t % 2
                    }))
                },
                eq: function (e) {
                    var t = this.length,
                        n = +e + (e < 0 ? t : 0);
                    return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                },
                end: function () {
                    return this.prevObject || this.constructor()
                },
                push: o,
                sort: n.sort,
                splice: n.splice
            }, w.extend = w.fn.extend = function () {
                var e, t, n, r, a, i, o = arguments[0] || {},
                    s = 1,
                    c = arguments.length,
                    u = !1;
                for ("boolean" == typeof o && (u = o, o = arguments[s] || {}, s++), "object" === (void 0 === o ? "undefined" : _typeof(o)) || h(o) || (o = {}), s === c && (o = this, s--); s < c; s++)
                    if (null != (e = arguments[s]))
                        for (t in e) r = e[t], "__proto__" !== t && o !== r && (u && r && (w.isPlainObject(r) || (a = Array.isArray(r))) ? (n = o[t], i = a && !Array.isArray(n) ? [] : a || w.isPlainObject(n) ? n : {}, a = !1, o[t] = w.extend(u, i, r)) : void 0 !== r && (o[t] = r));
                return o
            }, w.extend({
                expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function (e) {
                    throw new Error(e)
                },
                noop: function () {},
                isPlainObject: function (e) {
                    var t, n;
                    return !(!e || "[object Object]" !== u.call(e)) && (!(t = r(e)) || "function" == typeof (n = l.call(t, "constructor") && t.constructor) && p.call(n) === f)
                },
                isEmptyObject: function (e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                },
                globalEval: function (e, t, n) {
                    v(e, {
                        nonce: t && t.nonce
                    }, n)
                },
                each: function (e, t) {
                    var n, r = 0;
                    if (T(e))
                        for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                    else
                        for (r in e)
                            if (!1 === t.call(e[r], r, e[r])) break;
                    return e
                },
                makeArray: function (e, t) {
                    var n = t || [];
                    return null != e && (T(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : o.call(n, e)), n
                },
                inArray: function (e, t, n) {
                    return null == t ? -1 : s.call(t, e, n)
                },
                merge: function (e, t) {
                    for (var n = +t.length, r = 0, a = e.length; r < n; r++) e[a++] = t[r];
                    return e.length = a, e
                },
                grep: function (e, t, n) {
                    for (var r = [], a = 0, i = e.length, o = !n; a < i; a++) !t(e[a], a) !== o && r.push(e[a]);
                    return r
                },
                map: function (e, t, n) {
                    var r, a, o = 0,
                        s = [];
                    if (T(e))
                        for (r = e.length; o < r; o++) null != (a = t(e[o], o, n)) && s.push(a);
                    else
                        for (o in e) null != (a = t(e[o], o, n)) && s.push(a);
                    return i(s)
                },
                guid: 1,
                support: d
            }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
                c["[object " + t + "]"] = t.toLowerCase()
            });
            var S = function (e) {
                var t, n, r, a, i, o, s, c, u, l, p, f, d, h, y, m, g, v, b, w = "sizzle" + 1 * new Date,
                    T = e.document,
                    S = 0,
                    x = 0,
                    k = ce(),
                    O = ce(),
                    j = ce(),
                    A = ce(),
                    C = function (e, t) {
                        return e === t && (p = !0), 0
                    },
                    E = {}.hasOwnProperty,
                    _ = [],
                    N = _.pop,
                    P = _.push,
                    I = _.push,
                    M = _.slice,
                    D = function (e, t) {
                        for (var n = 0, r = e.length; n < r; n++)
                            if (e[n] === t) return n;
                        return -1
                    },
                    R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    L = "[\\x20\\t\\r\\n\\f]",
                    F = "(?:\\\\[\\da-fA-F]{1,6}" + L + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                    q = "\\[" + L + "*(" + F + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + F + "))|)" + L + "*\\]",
                    V = ":(" + F + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + q + ")*)|.*)\\)|)",
                    H = new RegExp(L + "+", "g"),
                    z = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
                    W = new RegExp("^" + L + "*," + L + "*"),
                    $ = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
                    B = new RegExp(L + "|>"),
                    U = new RegExp(V),
                    G = new RegExp("^" + F + "$"),
                    X = {
                        ID: new RegExp("^#(" + F + ")"),
                        CLASS: new RegExp("^\\.(" + F + ")"),
                        TAG: new RegExp("^(" + F + "|[*])"),
                        ATTR: new RegExp("^" + q),
                        PSEUDO: new RegExp("^" + V),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + R + ")$", "i"),
                        needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
                    },
                    J = /HTML$/i,
                    Y = /^(?:input|select|textarea|button)$/i,
                    K = /^h\d$/i,
                    Z = /^[^{]+\{\s*\[native \w/,
                    Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    ee = /[+~]/,
                    te = new RegExp("\\\\[\\da-fA-F]{1,6}" + L + "?|\\\\([^\\r\\n\\f])", "g"),
                    ne = function (e, t) {
                        var n = "0x" + e.slice(1) - 65536;
                        return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
                    },
                    re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    ae = function (e, t) {
                        return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                    },
                    ie = function () {
                        f()
                    },
                    oe = we(function (e) {
                        return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                    }, {
                        dir: "parentNode",
                        next: "legend"
                    });
                try {
                    I.apply(_ = M.call(T.childNodes), T.childNodes), _[T.childNodes.length].nodeType
                } catch (e) {
                    I = {
                        apply: _.length ? function (e, t) {
                            P.apply(e, M.call(t))
                        } : function (e, t) {
                            for (var n = e.length, r = 0; e[n++] = t[r++];);
                            e.length = n - 1
                        }
                    }
                }

                function se(e, t, r, a) {
                    var i, s, u, l, p, h, g, v = t && t.ownerDocument,
                        T = t ? t.nodeType : 9;
                    if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;
                    if (!a && (f(t), t = t || d, y)) {
                        if (11 !== T && (p = Q.exec(e)))
                            if (i = p[1]) {
                                if (9 === T) {
                                    if (!(u = t.getElementById(i))) return r;
                                    if (u.id === i) return r.push(u), r
                                } else if (v && (u = v.getElementById(i)) && b(t, u) && u.id === i) return r.push(u), r
                            } else {
                                if (p[2]) return I.apply(r, t.getElementsByTagName(e)), r;
                                if ((i = p[3]) && n.getElementsByClassName && t.getElementsByClassName) return I.apply(r, t.getElementsByClassName(i)), r
                            } if (n.qsa && !A[e + " "] && (!m || !m.test(e)) && (1 !== T || "object" !== t.nodeName.toLowerCase())) {
                            if (g = e, v = t, 1 === T && (B.test(e) || $.test(e))) {
                                for ((v = ee.test(e) && ge(t.parentNode) || t) === t && n.scope || ((l = t.getAttribute("id")) ? l = l.replace(re, ae) : t.setAttribute("id", l = w)), s = (h = o(e)).length; s--;) h[s] = (l ? "#" + l : ":scope") + " " + be(h[s]);
                                g = h.join(",")
                            }
                            try {
                                return I.apply(r, v.querySelectorAll(g)), r
                            } catch (t) {
                                A(e, !0)
                            } finally {
                                l === w && t.removeAttribute("id")
                            }
                        }
                    }
                    return c(e.replace(z, "$1"), t, r, a)
                }

                function ce() {
                    var e = [];
                    return function t(n, a) {
                        return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = a
                    }
                }

                function ue(e) {
                    return e[w] = !0, e
                }

                function le(e) {
                    var t = d.createElement("fieldset");
                    try {
                        return !!e(t)
                    } catch (e) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function pe(e, t) {
                    for (var n = e.split("|"), a = n.length; a--;) r.attrHandle[n[a]] = t
                }

                function fe(e, t) {
                    var n = t && e,
                        r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (r) return r;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function de(e) {
                    return function (t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e
                    }
                }

                function he(e) {
                    return function (t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }

                function ye(e) {
                    return function (t) {
                        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && oe(t) === e : t.disabled === e : "label" in t && t.disabled === e
                    }
                }

                function me(e) {
                    return ue(function (t) {
                        return t = +t, ue(function (n, r) {
                            for (var a, i = e([], n.length, t), o = i.length; o--;) n[a = i[o]] && (n[a] = !(r[a] = n[a]))
                        })
                    })
                }

                function ge(e) {
                    return e && void 0 !== e.getElementsByTagName && e
                }
                for (t in n = se.support = {}, i = se.isXML = function (e) {
                        var t = e.namespaceURI,
                            n = (e.ownerDocument || e).documentElement;
                        return !J.test(t || n && n.nodeName || "HTML")
                    }, f = se.setDocument = function (e) {
                        var t, a, o = e ? e.ownerDocument || e : T;
                        return o != d && 9 === o.nodeType && o.documentElement ? (h = (d = o).documentElement, y = !i(d), T != d && (a = d.defaultView) && a.top !== a && (a.addEventListener ? a.addEventListener("unload", ie, !1) : a.attachEvent && a.attachEvent("onunload", ie)), n.scope = le(function (e) {
                            return h.appendChild(e).appendChild(d.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                        }), n.attributes = le(function (e) {
                            return e.className = "i", !e.getAttribute("className")
                        }), n.getElementsByTagName = le(function (e) {
                            return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length
                        }), n.getElementsByClassName = Z.test(d.getElementsByClassName), n.getById = le(function (e) {
                            return h.appendChild(e).id = w, !d.getElementsByName || !d.getElementsByName(w).length
                        }), n.getById ? (r.filter.ID = function (e) {
                            var t = e.replace(te, ne);
                            return function (e) {
                                return e.getAttribute("id") === t
                            }
                        }, r.find.ID = function (e, t) {
                            if (void 0 !== t.getElementById && y) {
                                var n = t.getElementById(e);
                                return n ? [n] : []
                            }
                        }) : (r.filter.ID = function (e) {
                            var t = e.replace(te, ne);
                            return function (e) {
                                var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                return n && n.value === t
                            }
                        }, r.find.ID = function (e, t) {
                            if (void 0 !== t.getElementById && y) {
                                var n, r, a, i = t.getElementById(e);
                                if (i) {
                                    if ((n = i.getAttributeNode("id")) && n.value === e) return [i];
                                    for (a = t.getElementsByName(e), r = 0; i = a[r++];)
                                        if ((n = i.getAttributeNode("id")) && n.value === e) return [i]
                                }
                                return []
                            }
                        }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
                            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                        } : function (e, t) {
                            var n, r = [],
                                a = 0,
                                i = t.getElementsByTagName(e);
                            if ("*" === e) {
                                for (; n = i[a++];) 1 === n.nodeType && r.push(n);
                                return r
                            }
                            return i
                        }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
                            if (void 0 !== t.getElementsByClassName && y) return t.getElementsByClassName(e)
                        }, g = [], m = [], (n.qsa = Z.test(d.querySelectorAll)) && (le(function (e) {
                            var t;
                            h.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + L + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + L + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + w + "-]").length || m.push("~="), (t = d.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || m.push("\\[" + L + "*name" + L + "*=" + L + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || m.push(".#.+[+~]"), e.querySelectorAll("\\\f"), m.push("[\\r\\n\\f]")
                        }), le(function (e) {
                            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = d.createElement("input");
                            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + L + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                        })), (n.matchesSelector = Z.test(v = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && le(function (e) {
                            n.disconnectedMatch = v.call(e, "*"), v.call(e, "[s!='']:x"), g.push("!=", V)
                        }), m = m.length && new RegExp(m.join("|")), g = g.length && new RegExp(g.join("|")), t = Z.test(h.compareDocumentPosition), b = t || Z.test(h.contains) ? function (e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                                r = t && t.parentNode;
                            return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                        } : function (e, t) {
                            if (t)
                                for (; t = t.parentNode;)
                                    if (t === e) return !0;
                            return !1
                        }, C = t ? function (e, t) {
                            if (e === t) return p = !0, 0;
                            var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return r || (1 & (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e == d || e.ownerDocument == T && b(T, e) ? -1 : t == d || t.ownerDocument == T && b(T, t) ? 1 : l ? D(l, e) - D(l, t) : 0 : 4 & r ? -1 : 1)
                        } : function (e, t) {
                            if (e === t) return p = !0, 0;
                            var n, r = 0,
                                a = e.parentNode,
                                i = t.parentNode,
                                o = [e],
                                s = [t];
                            if (!a || !i) return e == d ? -1 : t == d ? 1 : a ? -1 : i ? 1 : l ? D(l, e) - D(l, t) : 0;
                            if (a === i) return fe(e, t);
                            for (n = e; n = n.parentNode;) o.unshift(n);
                            for (n = t; n = n.parentNode;) s.unshift(n);
                            for (; o[r] === s[r];) r++;
                            return r ? fe(o[r], s[r]) : o[r] == T ? -1 : s[r] == T ? 1 : 0
                        }, d) : d
                    }, se.matches = function (e, t) {
                        return se(e, null, null, t)
                    }, se.matchesSelector = function (e, t) {
                        if (f(e), n.matchesSelector && y && !A[t + " "] && (!g || !g.test(t)) && (!m || !m.test(t))) try {
                            var r = v.call(e, t);
                            if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                        } catch (e) {
                            A(t, !0)
                        }
                        return se(t, d, null, [e]).length > 0
                    }, se.contains = function (e, t) {
                        return (e.ownerDocument || e) != d && f(e), b(e, t)
                    }, se.attr = function (e, t) {
                        (e.ownerDocument || e) != d && f(e);
                        var a = r.attrHandle[t.toLowerCase()],
                            i = a && E.call(r.attrHandle, t.toLowerCase()) ? a(e, t, !y) : void 0;
                        return void 0 !== i ? i : n.attributes || !y ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                    }, se.escape = function (e) {
                        return (e + "").replace(re, ae)
                    }, se.error = function (e) {
                        throw new Error("Syntax error, unrecognized expression: " + e)
                    }, se.uniqueSort = function (e) {
                        var t, r = [],
                            a = 0,
                            i = 0;
                        if (p = !n.detectDuplicates, l = !n.sortStable && e.slice(0), e.sort(C), p) {
                            for (; t = e[i++];) t === e[i] && (a = r.push(i));
                            for (; a--;) e.splice(r[a], 1)
                        }
                        return l = null, e
                    }, a = se.getText = function (e) {
                        var t, n = "",
                            r = 0,
                            i = e.nodeType;
                        if (i) {
                            if (1 === i || 9 === i || 11 === i) {
                                if ("string" == typeof e.textContent) return e.textContent;
                                for (e = e.firstChild; e; e = e.nextSibling) n += a(e)
                            } else if (3 === i || 4 === i) return e.nodeValue
                        } else
                            for (; t = e[r++];) n += a(t);
                        return n
                    }, (r = se.selectors = {
                        cacheLength: 50,
                        createPseudo: ue,
                        match: X,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function (e) {
                                return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                            },
                            CHILD: function (e) {
                                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                            },
                            PSEUDO: function (e) {
                                var t, n = !e[6] && e[2];
                                return X.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && U.test(n) && (t = o(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function (e) {
                                var t = e.replace(te, ne).toLowerCase();
                                return "*" === e ? function () {
                                    return !0
                                } : function (e) {
                                    return e.nodeName && e.nodeName.toLowerCase() === t
                                }
                            },
                            CLASS: function (e) {
                                var t = k[e + " "];
                                return t || (t = new RegExp("(^|" + L + ")" + e + "(" + L + "|$)")) && k(e, function (e) {
                                    return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                })
                            },
                            ATTR: function (e, t, n) {
                                return function (r) {
                                    var a = se.attr(r, e);
                                    return null == a ? "!=" === t : !t || (a += "", "=" === t ? a === n : "!=" === t ? a !== n : "^=" === t ? n && 0 === a.indexOf(n) : "*=" === t ? n && a.indexOf(n) > -1 : "$=" === t ? n && a.slice(-n.length) === n : "~=" === t ? (" " + a.replace(H, " ") + " ").indexOf(n) > -1 : "|=" === t && (a === n || a.slice(0, n.length + 1) === n + "-"))
                                }
                            },
                            CHILD: function (e, t, n, r, a) {
                                var i = "nth" !== e.slice(0, 3),
                                    o = "last" !== e.slice(-4),
                                    s = "of-type" === t;
                                return 1 === r && 0 === a ? function (e) {
                                    return !!e.parentNode
                                } : function (t, n, c) {
                                    var u, l, p, f, d, h, y = i !== o ? "nextSibling" : "previousSibling",
                                        m = t.parentNode,
                                        g = s && t.nodeName.toLowerCase(),
                                        v = !c && !s,
                                        b = !1;
                                    if (m) {
                                        if (i) {
                                            for (; y;) {
                                                for (f = t; f = f[y];)
                                                    if (s ? f.nodeName.toLowerCase() === g : 1 === f.nodeType) return !1;
                                                h = y = "only" === e && !h && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (h = [o ? m.firstChild : m.lastChild], o && v) {
                                            for (b = (d = (u = (l = (p = (f = m)[w] || (f[w] = {}))[f.uniqueID] || (p[f.uniqueID] = {}))[e] || [])[0] === S && u[1]) && u[2], f = d && m.childNodes[d]; f = ++d && f && f[y] || (b = d = 0) || h.pop();)
                                                if (1 === f.nodeType && ++b && f === t) {
                                                    l[e] = [S, d, b];
                                                    break
                                                }
                                        } else if (v && (b = d = (u = (l = (p = (f = t)[w] || (f[w] = {}))[f.uniqueID] || (p[f.uniqueID] = {}))[e] || [])[0] === S && u[1]), !1 === b)
                                            for (;
                                                (f = ++d && f && f[y] || (b = d = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== g : 1 !== f.nodeType) || !++b || (v && ((l = (p = f[w] || (f[w] = {}))[f.uniqueID] || (p[f.uniqueID] = {}))[e] = [S, b]), f !== t)););
                                        return (b -= a) === r || b % r == 0 && b / r >= 0
                                    }
                                }
                            },
                            PSEUDO: function (e, t) {
                                var n, a = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                                return a[w] ? a(t) : a.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? ue(function (e, n) {
                                    for (var r, i = a(e, t), o = i.length; o--;) e[r = D(e, i[o])] = !(n[r] = i[o])
                                }) : function (e) {
                                    return a(e, 0, n)
                                }) : a
                            }
                        },
                        pseudos: {
                            not: ue(function (e) {
                                var t = [],
                                    n = [],
                                    r = s(e.replace(z, "$1"));
                                return r[w] ? ue(function (e, t, n, a) {
                                    for (var i, o = r(e, null, a, []), s = e.length; s--;)(i = o[s]) && (e[s] = !(t[s] = i))
                                }) : function (e, a, i) {
                                    return t[0] = e, r(t, null, i, n), t[0] = null, !n.pop()
                                }
                            }),
                            has: ue(function (e) {
                                return function (t) {
                                    return se(e, t).length > 0
                                }
                            }),
                            contains: ue(function (e) {
                                return e = e.replace(te, ne),
                                    function (t) {
                                        return (t.textContent || a(t)).indexOf(e) > -1
                                    }
                            }),
                            lang: ue(function (e) {
                                return G.test(e || "") || se.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                                    function (t) {
                                        var n;
                                        do {
                                            if (n = y ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                        } while ((t = t.parentNode) && 1 === t.nodeType);
                                        return !1
                                    }
                            }),
                            target: function (t) {
                                var n = e.location && e.location.hash;
                                return n && n.slice(1) === t.id
                            },
                            root: function (e) {
                                return e === h
                            },
                            focus: function (e) {
                                return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                            },
                            enabled: ye(!1),
                            disabled: ye(!0),
                            checked: function (e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && !!e.checked || "option" === t && !!e.selected
                            },
                            selected: function (e) {
                                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                            },
                            empty: function (e) {
                                for (e = e.firstChild; e; e = e.nextSibling)
                                    if (e.nodeType < 6) return !1;
                                return !0
                            },
                            parent: function (e) {
                                return !r.pseudos.empty(e)
                            },
                            header: function (e) {
                                return K.test(e.nodeName)
                            },
                            input: function (e) {
                                return Y.test(e.nodeName)
                            },
                            button: function (e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && "button" === e.type || "button" === t
                            },
                            text: function (e) {
                                var t;
                                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                            },
                            first: me(function () {
                                return [0]
                            }),
                            last: me(function (e, t) {
                                return [t - 1]
                            }),
                            eq: me(function (e, t, n) {
                                return [n < 0 ? n + t : n]
                            }),
                            even: me(function (e, t) {
                                for (var n = 0; n < t; n += 2) e.push(n);
                                return e
                            }),
                            odd: me(function (e, t) {
                                for (var n = 1; n < t; n += 2) e.push(n);
                                return e
                            }),
                            lt: me(function (e, t, n) {
                                for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0;) e.push(r);
                                return e
                            }),
                            gt: me(function (e, t, n) {
                                for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                                return e
                            })
                        }
                    }).pseudos.nth = r.pseudos.eq, {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) r.pseudos[t] = de(t);
                for (t in {
                        submit: !0,
                        reset: !0
                    }) r.pseudos[t] = he(t);

                function ve() {}

                function be(e) {
                    for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                    return r
                }

                function we(e, t, n) {
                    var r = t.dir,
                        a = t.next,
                        i = a || r,
                        o = n && "parentNode" === i,
                        s = x++;
                    return t.first ? function (t, n, a) {
                        for (; t = t[r];)
                            if (1 === t.nodeType || o) return e(t, n, a);
                        return !1
                    } : function (t, n, c) {
                        var u, l, p, f = [S, s];
                        if (c) {
                            for (; t = t[r];)
                                if ((1 === t.nodeType || o) && e(t, n, c)) return !0
                        } else
                            for (; t = t[r];)
                                if (1 === t.nodeType || o)
                                    if (l = (p = t[w] || (t[w] = {}))[t.uniqueID] || (p[t.uniqueID] = {}), a && a === t.nodeName.toLowerCase()) t = t[r] || t;
                                    else {
                                        if ((u = l[i]) && u[0] === S && u[1] === s) return f[2] = u[2];
                                        if (l[i] = f, f[2] = e(t, n, c)) return !0
                                    } return !1
                    }
                }

                function Te(e) {
                    return e.length > 1 ? function (t, n, r) {
                        for (var a = e.length; a--;)
                            if (!e[a](t, n, r)) return !1;
                        return !0
                    } : e[0]
                }

                function Se(e, t, n, r, a) {
                    for (var i, o = [], s = 0, c = e.length, u = null != t; s < c; s++)(i = e[s]) && (n && !n(i, r, a) || (o.push(i), u && t.push(s)));
                    return o
                }

                function xe(e, t, n, r, a, i) {
                    return r && !r[w] && (r = xe(r)), a && !a[w] && (a = xe(a, i)), ue(function (i, o, s, c) {
                        var u, l, p, f = [],
                            d = [],
                            h = o.length,
                            y = i || function (e, t, n) {
                                for (var r = 0, a = t.length; r < a; r++) se(e, t[r], n);
                                return n
                            }(t || "*", s.nodeType ? [s] : s, []),
                            m = !e || !i && t ? y : Se(y, f, e, s, c),
                            g = n ? a || (i ? e : h || r) ? [] : o : m;
                        if (n && n(m, g, s, c), r)
                            for (u = Se(g, d), r(u, [], s, c), l = u.length; l--;)(p = u[l]) && (g[d[l]] = !(m[d[l]] = p));
                        if (i) {
                            if (a || e) {
                                if (a) {
                                    for (u = [], l = g.length; l--;)(p = g[l]) && u.push(m[l] = p);
                                    a(null, g = [], u, c)
                                }
                                for (l = g.length; l--;)(p = g[l]) && (u = a ? D(i, p) : f[l]) > -1 && (i[u] = !(o[u] = p))
                            }
                        } else g = Se(g === o ? g.splice(h, g.length) : g), a ? a(null, o, g, c) : I.apply(o, g)
                    })
                }

                function ke(e) {
                    for (var t, n, a, i = e.length, o = r.relative[e[0].type], s = o || r.relative[" "], c = o ? 1 : 0, l = we(function (e) {
                            return e === t
                        }, s, !0), p = we(function (e) {
                            return D(t, e) > -1
                        }, s, !0), f = [function (e, n, r) {
                            var a = !o && (r || n !== u) || ((t = n).nodeType ? l(e, n, r) : p(e, n, r));
                            return t = null, a
                        }]; c < i; c++)
                        if (n = r.relative[e[c].type]) f = [we(Te(f), n)];
                        else {
                            if ((n = r.filter[e[c].type].apply(null, e[c].matches))[w]) {
                                for (a = ++c; a < i && !r.relative[e[a].type]; a++);
                                return xe(c > 1 && Te(f), c > 1 && be(e.slice(0, c - 1).concat({
                                    value: " " === e[c - 2].type ? "*" : ""
                                })).replace(z, "$1"), n, c < a && ke(e.slice(c, a)), a < i && ke(e = e.slice(a)), a < i && be(e))
                            }
                            f.push(n)
                        } return Te(f)
                }
                return ve.prototype = r.filters = r.pseudos, r.setFilters = new ve, o = se.tokenize = function (e, t) {
                    var n, a, i, o, s, c, u, l = O[e + " "];
                    if (l) return t ? 0 : l.slice(0);
                    for (s = e, c = [], u = r.preFilter; s;) {
                        for (o in n && !(a = W.exec(s)) || (a && (s = s.slice(a[0].length) || s), c.push(i = [])), n = !1, (a = $.exec(s)) && (n = a.shift(), i.push({
                                value: n,
                                type: a[0].replace(z, " ")
                            }), s = s.slice(n.length)), r.filter) !(a = X[o].exec(s)) || u[o] && !(a = u[o](a)) || (n = a.shift(), i.push({
                            value: n,
                            type: o,
                            matches: a
                        }), s = s.slice(n.length));
                        if (!n) break
                    }
                    return t ? s.length : s ? se.error(e) : O(e, c).slice(0)
                }, s = se.compile = function (e, t) {
                    var n, a = [],
                        i = [],
                        s = j[e + " "];
                    if (!s) {
                        for (t || (t = o(e)), n = t.length; n--;)(s = ke(t[n]))[w] ? a.push(s) : i.push(s);
                        (s = j(e, function (e, t) {
                            var n = t.length > 0,
                                a = e.length > 0,
                                i = function (i, o, s, c, l) {
                                    var p, h, m, g = 0,
                                        v = "0",
                                        b = i && [],
                                        w = [],
                                        T = u,
                                        x = i || a && r.find.TAG("*", l),
                                        k = S += null == T ? 1 : Math.random() || .1,
                                        O = x.length;
                                    for (l && (u = o == d || o || l); v !== O && null != (p = x[v]); v++) {
                                        if (a && p) {
                                            for (h = 0, o || p.ownerDocument == d || (f(p), s = !y); m = e[h++];)
                                                if (m(p, o || d, s)) {
                                                    c.push(p);
                                                    break
                                                } l && (S = k)
                                        }
                                        n && ((p = !m && p) && g--, i && b.push(p))
                                    }
                                    if (g += v, n && v !== g) {
                                        for (h = 0; m = t[h++];) m(b, w, o, s);
                                        if (i) {
                                            if (g > 0)
                                                for (; v--;) b[v] || w[v] || (w[v] = N.call(c));
                                            w = Se(w)
                                        }
                                        I.apply(c, w), l && !i && w.length > 0 && g + t.length > 1 && se.uniqueSort(c)
                                    }
                                    return l && (S = k, u = T), b
                                };
                            return n ? ue(i) : i
                        }(i, a))).selector = e
                    }
                    return s
                }, c = se.select = function (e, t, n, a) {
                    var i, c, u, l, p, f = "function" == typeof e && e,
                        d = !a && o(e = f.selector || e);
                    if (n = n || [], 1 === d.length) {
                        if ((c = d[0] = d[0].slice(0)).length > 2 && "ID" === (u = c[0]).type && 9 === t.nodeType && y && r.relative[c[1].type]) {
                            if (!(t = (r.find.ID(u.matches[0].replace(te, ne), t) || [])[0])) return n;
                            f && (t = t.parentNode), e = e.slice(c.shift().value.length)
                        }
                        for (i = X.needsContext.test(e) ? 0 : c.length; i-- && (u = c[i], !r.relative[l = u.type]);)
                            if ((p = r.find[l]) && (a = p(u.matches[0].replace(te, ne), ee.test(c[0].type) && ge(t.parentNode) || t))) {
                                if (c.splice(i, 1), !(e = a.length && be(c))) return I.apply(n, a), n;
                                break
                            }
                    }
                    return (f || s(e, d))(a, t, !y, n, !t || ee.test(e) && ge(t.parentNode) || t), n
                }, n.sortStable = w.split("").sort(C).join("") === w, n.detectDuplicates = !!p, f(), n.sortDetached = le(function (e) {
                    return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
                }), le(function (e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || pe("type|href|height|width", function (e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), n.attributes && le(function (e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || pe("value", function (e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                }), le(function (e) {
                    return null == e.getAttribute("disabled")
                }) || pe(R, function (e, t, n) {
                    var r;
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }), se
            }(e);
            w.find = S, w.expr = S.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = S.uniqueSort, w.text = S.getText, w.isXMLDoc = S.isXML, w.contains = S.contains, w.escapeSelector = S.escape;
            var x = function (e, t, n) {
                    for (var r = [], a = void 0 !== n;
                        (e = e[t]) && 9 !== e.nodeType;)
                        if (1 === e.nodeType) {
                            if (a && w(e).is(n)) break;
                            r.push(e)
                        } return r
                },
                k = function (e, t) {
                    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                    return n
                },
                O = w.expr.match.needsContext;

            function j(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            }
            var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

            function C(e, t, n) {
                return h(t) ? w.grep(e, function (e, r) {
                    return !!t.call(e, r, e) !== n
                }) : t.nodeType ? w.grep(e, function (e) {
                    return e === t !== n
                }) : "string" != typeof t ? w.grep(e, function (e) {
                    return s.call(t, e) > -1 !== n
                }) : w.filter(t, e, n)
            }
            w.filter = function (e, t, n) {
                var r = t[0];
                return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function (e) {
                    return 1 === e.nodeType
                }))
            }, w.fn.extend({
                find: function (e) {
                    var t, n, r = this.length,
                        a = this;
                    if ("string" != typeof e) return this.pushStack(w(e).filter(function () {
                        for (t = 0; t < r; t++)
                            if (w.contains(a[t], this)) return !0
                    }));
                    for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, a[t], n);
                    return r > 1 ? w.uniqueSort(n) : n
                },
                filter: function (e) {
                    return this.pushStack(C(this, e || [], !1))
                },
                not: function (e) {
                    return this.pushStack(C(this, e || [], !0))
                },
                is: function (e) {
                    return !!C(this, "string" == typeof e && O.test(e) ? w(e) : e || [], !1).length
                }
            });
            var E, _ = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            (w.fn.init = function (e, t, n) {
                var r, a;
                if (!e) return this;
                if (n = n || E, "string" == typeof e) {
                    if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : _.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (r[1]) {
                        if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : m, !0)), A.test(r[1]) && w.isPlainObject(t))
                            for (r in t) h(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                        return this
                    }
                    return (a = m.getElementById(r[2])) && (this[0] = a, this.length = 1), this
                }
                return e.nodeType ? (this[0] = e, this.length = 1, this) : h(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
            }).prototype = w.fn, E = w(m);
            var N = /^(?:parents|prev(?:Until|All))/,
                P = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };

            function I(e, t) {
                for (;
                    (e = e[t]) && 1 !== e.nodeType;);
                return e
            }
            w.fn.extend({
                has: function (e) {
                    var t = w(e, this),
                        n = t.length;
                    return this.filter(function () {
                        for (var e = 0; e < n; e++)
                            if (w.contains(this, t[e])) return !0
                    })
                },
                closest: function (e, t) {
                    var n, r = 0,
                        a = this.length,
                        i = [],
                        o = "string" != typeof e && w(e);
                    if (!O.test(e))
                        for (; r < a; r++)
                            for (n = this[r]; n && n !== t; n = n.parentNode)
                                if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                                    i.push(n);
                                    break
                                } return this.pushStack(i.length > 1 ? w.uniqueSort(i) : i)
                },
                index: function (e) {
                    return e ? "string" == typeof e ? s.call(w(e), this[0]) : s.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function (e, t) {
                    return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
                },
                addBack: function (e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }), w.each({
                parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                },
                parents: function (e) {
                    return x(e, "parentNode")
                },
                parentsUntil: function (e, t, n) {
                    return x(e, "parentNode", n)
                },
                next: function (e) {
                    return I(e, "nextSibling")
                },
                prev: function (e) {
                    return I(e, "previousSibling")
                },
                nextAll: function (e) {
                    return x(e, "nextSibling")
                },
                prevAll: function (e) {
                    return x(e, "previousSibling")
                },
                nextUntil: function (e, t, n) {
                    return x(e, "nextSibling", n)
                },
                prevUntil: function (e, t, n) {
                    return x(e, "previousSibling", n)
                },
                siblings: function (e) {
                    return k((e.parentNode || {}).firstChild, e)
                },
                children: function (e) {
                    return k(e.firstChild)
                },
                contents: function (e) {
                    return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (j(e, "template") && (e = e.content || e), w.merge([], e.childNodes))
                }
            }, function (e, t) {
                w.fn[e] = function (n, r) {
                    var a = w.map(this, t, n);
                    return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (a = w.filter(r, a)), this.length > 1 && (P[e] || w.uniqueSort(a), N.test(e) && a.reverse()), this.pushStack(a)
                }
            });
            var M = /[^\x20\t\r\n\f]+/g;

            function D(e) {
                return e
            }

            function R(e) {
                throw e
            }

            function L(e, t, n, r) {
                var a;
                try {
                    e && h(a = e.promise) ? a.call(e).done(t).fail(n) : e && h(a = e.then) ? a.call(e, t, n) : t.apply(void 0, [e].slice(r))
                } catch (e) {
                    n.apply(void 0, [e])
                }
            }
            w.Callbacks = function (e) {
                e = "string" == typeof e ? function (e) {
                    var t = {};
                    return w.each(e.match(M) || [], function (e, n) {
                        t[n] = !0
                    }), t
                }(e) : w.extend({}, e);
                var t, n, r, a, i = [],
                    o = [],
                    s = -1,
                    c = function () {
                        for (a = a || e.once, r = t = !0; o.length; s = -1)
                            for (n = o.shift(); ++s < i.length;) !1 === i[s].apply(n[0], n[1]) && e.stopOnFalse && (s = i.length, n = !1);
                        e.memory || (n = !1), t = !1, a && (i = n ? [] : "")
                    },
                    u = {
                        add: function () {
                            return i && (n && !t && (s = i.length - 1, o.push(n)), function t(n) {
                                w.each(n, function (n, r) {
                                    h(r) ? e.unique && u.has(r) || i.push(r) : r && r.length && "string" !== b(r) && t(r)
                                })
                            }(arguments), n && !t && c()), this
                        },
                        remove: function () {
                            return w.each(arguments, function (e, t) {
                                for (var n;
                                    (n = w.inArray(t, i, n)) > -1;) i.splice(n, 1), n <= s && s--
                            }), this
                        },
                        has: function (e) {
                            return e ? w.inArray(e, i) > -1 : i.length > 0
                        },
                        empty: function () {
                            return i && (i = []), this
                        },
                        disable: function () {
                            return a = o = [], i = n = "", this
                        },
                        disabled: function () {
                            return !i
                        },
                        lock: function () {
                            return a = o = [], n || t || (i = n = ""), this
                        },
                        locked: function () {
                            return !!a
                        },
                        fireWith: function (e, n) {
                            return a || (n = [e, (n = n || []).slice ? n.slice() : n], o.push(n), t || c()), this
                        },
                        fire: function () {
                            return u.fireWith(this, arguments), this
                        },
                        fired: function () {
                            return !!r
                        }
                    };
                return u
            }, w.extend({
                Deferred: function (t) {
                    var n = [
                            ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
                            ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
                            ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]
                        ],
                        r = "pending",
                        a = {
                            state: function () {
                                return r
                            },
                            always: function () {
                                return i.done(arguments).fail(arguments), this
                            },
                            catch: function (e) {
                                return a.then(null, e)
                            },
                            pipe: function () {
                                var e = arguments;
                                return w.Deferred(function (t) {
                                    w.each(n, function (n, r) {
                                        var a = h(e[r[4]]) && e[r[4]];
                                        i[r[1]](function () {
                                            var e = a && a.apply(this, arguments);
                                            e && h(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, a ? [e] : arguments)
                                        })
                                    }), e = null
                                }).promise()
                            },
                            then: function (t, r, a) {
                                var i = 0;

                                function o(t, n, r, a) {
                                    return function () {
                                        var s = this,
                                            c = arguments,
                                            u = function () {
                                                var e, u;
                                                if (!(t < i)) {
                                                    if ((e = r.apply(s, c)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                                    u = e && ("object" === (void 0 === e ? "undefined" : _typeof(e)) || "function" == typeof e) && e.then, h(u) ? a ? u.call(e, o(i, n, D, a), o(i, n, R, a)) : (i++, u.call(e, o(i, n, D, a), o(i, n, R, a), o(i, n, D, n.notifyWith))) : (r !== D && (s = void 0, c = [e]), (a || n.resolveWith)(s, c))
                                                }
                                            },
                                            l = a ? u : function () {
                                                try {
                                                    u()
                                                } catch (e) {
                                                    w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, l.stackTrace), t + 1 >= i && (r !== R && (s = void 0, c = [e]), n.rejectWith(s, c))
                                                }
                                            };
                                        t ? l() : (w.Deferred.getStackHook && (l.stackTrace = w.Deferred.getStackHook()), e.setTimeout(l))
                                    }
                                }
                                return w.Deferred(function (e) {
                                    n[0][3].add(o(0, e, h(a) ? a : D, e.notifyWith)), n[1][3].add(o(0, e, h(t) ? t : D)), n[2][3].add(o(0, e, h(r) ? r : R))
                                }).promise()
                            },
                            promise: function (e) {
                                return null != e ? w.extend(e, a) : a
                            }
                        },
                        i = {};
                    return w.each(n, function (e, t) {
                        var o = t[2],
                            s = t[5];
                        a[t[1]] = o.add, s && o.add(function () {
                            r = s
                        }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), o.add(t[3].fire), i[t[0]] = function () {
                            return i[t[0] + "With"](this === i ? void 0 : this, arguments), this
                        }, i[t[0] + "With"] = o.fireWith
                    }), a.promise(i), t && t.call(i, i), i
                },
                when: function (e) {
                    var t = arguments.length,
                        n = t,
                        r = Array(n),
                        i = a.call(arguments),
                        o = w.Deferred(),
                        s = function (e) {
                            return function (n) {
                                r[e] = this, i[e] = arguments.length > 1 ? a.call(arguments) : n, --t || o.resolveWith(r, i)
                            }
                        };
                    if (t <= 1 && (L(e, o.done(s(n)).resolve, o.reject, !t), "pending" === o.state() || h(i[n] && i[n].then))) return o.then();
                    for (; n--;) L(i[n], s(n), o.reject);
                    return o.promise()
                }
            });
            var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            w.Deferred.exceptionHook = function (t, n) {
                e.console && e.console.warn && t && F.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
            }, w.readyException = function (t) {
                e.setTimeout(function () {
                    throw t
                })
            };
            var q = w.Deferred();

            function V() {
                m.removeEventListener("DOMContentLoaded", V), e.removeEventListener("load", V), w.ready()
            }
            w.fn.ready = function (e) {
                return q.then(e).catch(function (e) {
                    w.readyException(e)
                }), this
            }, w.extend({
                isReady: !1,
                readyWait: 1,
                ready: function (e) {
                    (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || q.resolveWith(m, [w]))
                }
            }), w.ready.then = q.then, "complete" === m.readyState || "loading" !== m.readyState && !m.documentElement.doScroll ? e.setTimeout(w.ready) : (m.addEventListener("DOMContentLoaded", V), e.addEventListener("load", V));
            var H = function e(t, n, r, a, i, o, s) {
                    var c = 0,
                        u = t.length,
                        l = null == r;
                    if ("object" === b(r))
                        for (c in i = !0, r) e(t, n, c, r[c], !0, o, s);
                    else if (void 0 !== a && (i = !0, h(a) || (s = !0), l && (s ? (n.call(t, a), n = null) : (l = n, n = function (e, t, n) {
                            return l.call(w(e), n)
                        })), n))
                        for (; c < u; c++) n(t[c], r, s ? a : a.call(t[c], c, n(t[c], r)));
                    return i ? t : l ? n.call(t) : u ? n(t[0], r) : o
                },
                z = /^-ms-/,
                W = /-([a-z])/g;

            function $(e, t) {
                return t.toUpperCase()
            }

            function B(e) {
                return e.replace(z, "ms-").replace(W, $)
            }
            var U = function (e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            };

            function G() {
                this.expando = w.expando + G.uid++
            }
            G.uid = 1, G.prototype = {
                cache: function (e) {
                    var t = e[this.expando];
                    return t || (t = {}, U(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                    }))), t
                },
                set: function (e, t, n) {
                    var r, a = this.cache(e);
                    if ("string" == typeof t) a[B(t)] = n;
                    else
                        for (r in t) a[B(r)] = t[r];
                    return a
                },
                get: function (e, t) {
                    return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][B(t)]
                },
                access: function (e, t, n) {
                    return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
                },
                remove: function (e, t) {
                    var n, r = e[this.expando];
                    if (void 0 !== r) {
                        if (void 0 !== t) {
                            n = (t = Array.isArray(t) ? t.map(B) : (t = B(t)) in r ? [t] : t.match(M) || []).length;
                            for (; n--;) delete r[t[n]]
                        }(void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                    }
                },
                hasData: function (e) {
                    var t = e[this.expando];
                    return void 0 !== t && !w.isEmptyObject(t)
                }
            };
            var X = new G,
                J = new G,
                Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                K = /[A-Z]/g;

            function Z(e, t, n) {
                var r;
                if (void 0 === n && 1 === e.nodeType)
                    if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
                        try {
                            n = function (e) {
                                return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Y.test(e) ? JSON.parse(e) : e)
                            }(n)
                        } catch (e) {}
                        J.set(e, t, n)
                    } else n = void 0;
                return n
            }
            w.extend({
                hasData: function (e) {
                    return J.hasData(e) || X.hasData(e)
                },
                data: function (e, t, n) {
                    return J.access(e, t, n)
                },
                removeData: function (e, t) {
                    J.remove(e, t)
                },
                _data: function (e, t, n) {
                    return X.access(e, t, n)
                },
                _removeData: function (e, t) {
                    X.remove(e, t)
                }
            }), w.fn.extend({
                data: function (e, t) {
                    var n, r, a, i = this[0],
                        o = i && i.attributes;
                    if (void 0 === e) {
                        if (this.length && (a = J.get(i), 1 === i.nodeType && !X.get(i, "hasDataAttrs"))) {
                            for (n = o.length; n--;) o[n] && 0 === (r = o[n].name).indexOf("data-") && (r = B(r.slice(5)), Z(i, r, a[r]));
                            X.set(i, "hasDataAttrs", !0)
                        }
                        return a
                    }
                    return "object" === (void 0 === e ? "undefined" : _typeof(e)) ? this.each(function () {
                        J.set(this, e)
                    }) : H(this, function (t) {
                        var n;
                        if (i && void 0 === t) return void 0 !== (n = J.get(i, e)) ? n : void 0 !== (n = Z(i, e)) ? n : void 0;
                        this.each(function () {
                            J.set(this, e, t)
                        })
                    }, null, t, arguments.length > 1, null, !0)
                },
                removeData: function (e) {
                    return this.each(function () {
                        J.remove(this, e)
                    })
                }
            }), w.extend({
                queue: function (e, t, n) {
                    var r;
                    if (e) return t = (t || "fx") + "queue", r = X.get(e, t), n && (!r || Array.isArray(n) ? r = X.access(e, t, w.makeArray(n)) : r.push(n)), r || []
                },
                dequeue: function (e, t) {
                    t = t || "fx";
                    var n = w.queue(e, t),
                        r = n.length,
                        a = n.shift(),
                        i = w._queueHooks(e, t);
                    "inprogress" === a && (a = n.shift(), r--), a && ("fx" === t && n.unshift("inprogress"), delete i.stop, a.call(e, function () {
                        w.dequeue(e, t)
                    }, i)), !r && i && i.empty.fire()
                },
                _queueHooks: function (e, t) {
                    var n = t + "queueHooks";
                    return X.get(e, n) || X.access(e, n, {
                        empty: w.Callbacks("once memory").add(function () {
                            X.remove(e, [t + "queue", n])
                        })
                    })
                }
            }), w.fn.extend({
                queue: function (e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                        var n = w.queue(this, e, t);
                        w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
                    })
                },
                dequeue: function (e) {
                    return this.each(function () {
                        w.dequeue(this, e)
                    })
                },
                clearQueue: function (e) {
                    return this.queue(e || "fx", [])
                },
                promise: function (e, t) {
                    var n, r = 1,
                        a = w.Deferred(),
                        i = this,
                        o = this.length,
                        s = function () {
                            --r || a.resolveWith(i, [i])
                        };
                    for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;)(n = X.get(i[o], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                    return s(), a.promise(t)
                }
            });
            var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                ee = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
                te = ["Top", "Right", "Bottom", "Left"],
                ne = m.documentElement,
                re = function (e) {
                    return w.contains(e.ownerDocument, e)
                },
                ae = {
                    composed: !0
                };
            ne.getRootNode && (re = function (e) {
                return w.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument
            });
            var ie = function (e, t) {
                return "none" === (e = t || e).style.display || "" === e.style.display && re(e) && "none" === w.css(e, "display")
            };

            function oe(e, t, n, r) {
                var a, i, o = 20,
                    s = r ? function () {
                        return r.cur()
                    } : function () {
                        return w.css(e, t, "")
                    },
                    c = s(),
                    u = n && n[3] || (w.cssNumber[t] ? "" : "px"),
                    l = e.nodeType && (w.cssNumber[t] || "px" !== u && +c) && ee.exec(w.css(e, t));
                if (l && l[3] !== u) {
                    for (c /= 2, u = u || l[3], l = +c || 1; o--;) w.style(e, t, l + u), (1 - i) * (1 - (i = s() / c || .5)) <= 0 && (o = 0), l /= i;
                    l *= 2, w.style(e, t, l + u), n = n || []
                }
                return n && (l = +l || +c || 0, a = n[1] ? l + (n[1] + 1) * n[2] : +n[2], r && (r.unit = u, r.start = l, r.end = a)), a
            }
            var se = {};

            function ce(e) {
                var t, n = e.ownerDocument,
                    r = e.nodeName,
                    a = se[r];
                return a || (t = n.body.appendChild(n.createElement(r)), a = w.css(t, "display"), t.parentNode.removeChild(t), "none" === a && (a = "block"), se[r] = a, a)
            }

            function ue(e, t) {
                for (var n, r, a = [], i = 0, o = e.length; i < o; i++)(r = e[i]).style && (n = r.style.display, t ? ("none" === n && (a[i] = X.get(r, "display") || null, a[i] || (r.style.display = "")), "" === r.style.display && ie(r) && (a[i] = ce(r))) : "none" !== n && (a[i] = "none", X.set(r, "display", n)));
                for (i = 0; i < o; i++) null != a[i] && (e[i].style.display = a[i]);
                return e
            }
            w.fn.extend({
                show: function () {
                    return ue(this, !0)
                },
                hide: function () {
                    return ue(this)
                },
                toggle: function (e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                        ie(this) ? w(this).show() : w(this).hide()
                    })
                }
            });
            var le, pe, fe = /^(?:checkbox|radio)$/i,
                de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                he = /^$|^module$|\/(?:java|ecma)script/i;
            le = m.createDocumentFragment().appendChild(m.createElement("div")), (pe = m.createElement("input")).setAttribute("type", "radio"), pe.setAttribute("checked", "checked"), pe.setAttribute("name", "t"), le.appendChild(pe), d.checkClone = le.cloneNode(!0).cloneNode(!0).lastChild.checked, le.innerHTML = "<textarea>x</textarea>", d.noCloneChecked = !!le.cloneNode(!0).lastChild.defaultValue, le.innerHTML = "<option></option>", d.option = !!le.lastChild;
            var ye = {
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };

            function me(e, t) {
                var n;
                return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && j(e, t) ? w.merge([e], n) : n
            }

            function ge(e, t) {
                for (var n = 0, r = e.length; n < r; n++) X.set(e[n], "globalEval", !t || X.get(t[n], "globalEval"))
            }
            ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead, ye.th = ye.td, d.option || (ye.optgroup = ye.option = [1, "<select multiple='multiple'>", "</select>"]);
            var ve = /<|&#?\w+;/;

            function be(e, t, n, r, a) {
                for (var i, o, s, c, u, l, p = t.createDocumentFragment(), f = [], d = 0, h = e.length; d < h; d++)
                    if ((i = e[d]) || 0 === i)
                        if ("object" === b(i)) w.merge(f, i.nodeType ? [i] : i);
                        else if (ve.test(i)) {
                    for (o = o || p.appendChild(t.createElement("div")), s = (de.exec(i) || ["", ""])[1].toLowerCase(), c = ye[s] || ye._default, o.innerHTML = c[1] + w.htmlPrefilter(i) + c[2], l = c[0]; l--;) o = o.lastChild;
                    w.merge(f, o.childNodes), (o = p.firstChild).textContent = ""
                } else f.push(t.createTextNode(i));
                for (p.textContent = "", d = 0; i = f[d++];)
                    if (r && w.inArray(i, r) > -1) a && a.push(i);
                    else if (u = re(i), o = me(p.appendChild(i), "script"), u && ge(o), n)
                    for (l = 0; i = o[l++];) he.test(i.type || "") && n.push(i);
                return p
            }
            var we = /^key/,
                Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                Se = /^([^.]*)(?:\.(.+)|)/;

            function xe() {
                return !0
            }

            function ke() {
                return !1
            }

            function Oe(e, t) {
                return e === function () {
                    try {
                        return m.activeElement
                    } catch (e) {}
                }() == ("focus" === t)
            }

            function je(e, t, n, r, a, i) {
                var o, s;
                if ("object" === (void 0 === t ? "undefined" : _typeof(t))) {
                    for (s in "string" != typeof n && (r = r || n, n = void 0), t) je(e, s, n, r, t[s], i);
                    return e
                }
                if (null == r && null == a ? (a = n, r = n = void 0) : null == a && ("string" == typeof n ? (a = r, r = void 0) : (a = r, r = n, n = void 0)), !1 === a) a = ke;
                else if (!a) return e;
                return 1 === i && (o = a, (a = function (e) {
                    return w().off(e), o.apply(this, arguments)
                }).guid = o.guid || (o.guid = w.guid++)), e.each(function () {
                    w.event.add(this, t, a, r, n)
                })
            }

            function Ae(e, t, n) {
                n ? (X.set(e, t, !1), w.event.add(e, t, {
                    namespace: !1,
                    handler: function (e) {
                        var r, i, o = X.get(this, t);
                        if (1 & e.isTrigger && this[t]) {
                            if (o.length)(w.event.special[t] || {}).delegateType && e.stopPropagation();
                            else if (o = a.call(arguments), X.set(this, t, o), r = n(this, t), this[t](), o !== (i = X.get(this, t)) || r ? X.set(this, t, !1) : i = {}, o !== i) return e.stopImmediatePropagation(), e.preventDefault(), i.value
                        } else o.length && (X.set(this, t, {
                            value: w.event.trigger(w.extend(o[0], w.Event.prototype), o.slice(1), this)
                        }), e.stopImmediatePropagation())
                    }
                })) : void 0 === X.get(e, t) && w.event.add(e, t, xe)
            }
            w.event = {
                global: {},
                add: function (e, t, n, r, a) {
                    var i, o, s, c, u, l, p, f, d, h, y, m = X.get(e);
                    if (U(e))
                        for (n.handler && (n = (i = n).handler, a = i.selector), a && w.find.matchesSelector(ne, a), n.guid || (n.guid = w.guid++), (c = m.events) || (c = m.events = Object.create(null)), (o = m.handle) || (o = m.handle = function (t) {
                                return void 0 !== w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
                            }), u = (t = (t || "").match(M) || [""]).length; u--;) d = y = (s = Se.exec(t[u]) || [])[1], h = (s[2] || "").split(".").sort(), d && (p = w.event.special[d] || {}, d = (a ? p.delegateType : p.bindType) || d, p = w.event.special[d] || {}, l = w.extend({
                            type: d,
                            origType: y,
                            data: r,
                            handler: n,
                            guid: n.guid,
                            selector: a,
                            needsContext: a && w.expr.match.needsContext.test(a),
                            namespace: h.join(".")
                        }, i), (f = c[d]) || ((f = c[d] = []).delegateCount = 0, p.setup && !1 !== p.setup.call(e, r, h, o) || e.addEventListener && e.addEventListener(d, o)), p.add && (p.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)), a ? f.splice(f.delegateCount++, 0, l) : f.push(l), w.event.global[d] = !0)
                },
                remove: function (e, t, n, r, a) {
                    var i, o, s, c, u, l, p, f, d, h, y, m = X.hasData(e) && X.get(e);
                    if (m && (c = m.events)) {
                        for (u = (t = (t || "").match(M) || [""]).length; u--;)
                            if (d = y = (s = Se.exec(t[u]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                                for (p = w.event.special[d] || {}, f = c[d = (r ? p.delegateType : p.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = i = f.length; i--;) l = f[i], !a && y !== l.origType || n && n.guid !== l.guid || s && !s.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (f.splice(i, 1), l.selector && f.delegateCount--, p.remove && p.remove.call(e, l));
                                o && !f.length && (p.teardown && !1 !== p.teardown.call(e, h, m.handle) || w.removeEvent(e, d, m.handle), delete c[d])
                            } else
                                for (d in c) w.event.remove(e, d + t[u], n, r, !0);
                        w.isEmptyObject(c) && X.remove(e, "handle events")
                    }
                },
                dispatch: function (e) {
                    var t, n, r, a, i, o, s = new Array(arguments.length),
                        c = w.event.fix(e),
                        u = (X.get(this, "events") || Object.create(null))[c.type] || [],
                        l = w.event.special[c.type] || {};
                    for (s[0] = c, t = 1; t < arguments.length; t++) s[t] = arguments[t];
                    if (c.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, c)) {
                        for (o = w.event.handlers.call(this, c, u), t = 0;
                            (a = o[t++]) && !c.isPropagationStopped();)
                            for (c.currentTarget = a.elem, n = 0;
                                (i = a.handlers[n++]) && !c.isImmediatePropagationStopped();) c.rnamespace && !1 !== i.namespace && !c.rnamespace.test(i.namespace) || (c.handleObj = i, c.data = i.data, void 0 !== (r = ((w.event.special[i.origType] || {}).handle || i.handler).apply(a.elem, s)) && !1 === (c.result = r) && (c.preventDefault(), c.stopPropagation()));
                        return l.postDispatch && l.postDispatch.call(this, c), c.result
                    }
                },
                handlers: function (e, t) {
                    var n, r, a, i, o, s = [],
                        c = t.delegateCount,
                        u = e.target;
                    if (c && u.nodeType && !("click" === e.type && e.button >= 1))
                        for (; u !== this; u = u.parentNode || this)
                            if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                                for (i = [], o = {}, n = 0; n < c; n++) void 0 === o[a = (r = t[n]).selector + " "] && (o[a] = r.needsContext ? w(a, this).index(u) > -1 : w.find(a, this, null, [u]).length), o[a] && i.push(r);
                                i.length && s.push({
                                    elem: u,
                                    handlers: i
                                })
                            } return u = this, c < t.length && s.push({
                        elem: u,
                        handlers: t.slice(c)
                    }), s
                },
                addProp: function (e, t) {
                    Object.defineProperty(w.Event.prototype, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: h(t) ? function () {
                            if (this.originalEvent) return t(this.originalEvent)
                        } : function () {
                            if (this.originalEvent) return this.originalEvent[e]
                        },
                        set: function (t) {
                            Object.defineProperty(this, e, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: t
                            })
                        }
                    })
                },
                fix: function (e) {
                    return e[w.expando] ? e : new w.Event(e)
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    click: {
                        setup: function (e) {
                            var t = this || e;
                            return fe.test(t.type) && t.click && j(t, "input") && Ae(t, "click", xe), !1
                        },
                        trigger: function (e) {
                            var t = this || e;
                            return fe.test(t.type) && t.click && j(t, "input") && Ae(t, "click"), !0
                        },
                        _default: function (e) {
                            var t = e.target;
                            return fe.test(t.type) && t.click && j(t, "input") && X.get(t, "click") || j(t, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function (e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                }
            }, w.removeEvent = function (e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n)
            }, w.Event = function (e, t) {
                if (!(this instanceof w.Event)) return new w.Event(e, t);
                e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? xe : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0
            }, w.Event.prototype = {
                constructor: w.Event,
                isDefaultPrevented: ke,
                isPropagationStopped: ke,
                isImmediatePropagationStopped: ke,
                isSimulated: !1,
                preventDefault: function () {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = xe, e && !this.isSimulated && e.preventDefault()
                },
                stopPropagation: function () {
                    var e = this.originalEvent;
                    this.isPropagationStopped = xe, e && !this.isSimulated && e.stopPropagation()
                },
                stopImmediatePropagation: function () {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = xe, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
                }
            }, w.each({
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function (e) {
                    var t = e.button;
                    return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
                }
            }, w.event.addProp), w.each({
                focus: "focusin",
                blur: "focusout"
            }, function (e, t) {
                w.event.special[e] = {
                    setup: function () {
                        return Ae(this, e, Oe), !1
                    },
                    trigger: function () {
                        return Ae(this, e), !0
                    },
                    delegateType: t
                }
            }), w.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function (e, t) {
                w.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function (e) {
                        var n, r = e.relatedTarget,
                            a = e.handleObj;
                        return r && (r === this || w.contains(this, r)) || (e.type = a.origType, n = a.handler.apply(this, arguments), e.type = t), n
                    }
                }
            }), w.fn.extend({
                on: function (e, t, n, r) {
                    return je(this, e, t, n, r)
                },
                one: function (e, t, n, r) {
                    return je(this, e, t, n, r, 1)
                },
                off: function (e, t, n) {
                    var r, a;
                    if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                    if ("object" === (void 0 === e ? "undefined" : _typeof(e))) {
                        for (a in e) this.off(a, t, e[a]);
                        return this
                    }
                    return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each(function () {
                        w.event.remove(this, e, n, t)
                    })
                }
            });
            var Ce = /<script|<style|<link/i,
                Ee = /checked\s*(?:[^=]|=\s*.checked.)/i,
                _e = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

            function Ne(e, t) {
                return j(e, "table") && j(11 !== t.nodeType ? t : t.firstChild, "tr") && w(e).children("tbody")[0] || e
            }

            function Pe(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
            }

            function Ie(e) {
                return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
            }

            function Me(e, t) {
                var n, r, a, i, o, s;
                if (1 === t.nodeType) {
                    if (X.hasData(e) && (s = X.get(e).events))
                        for (a in X.remove(t, "handle events"), s)
                            for (n = 0, r = s[a].length; n < r; n++) w.event.add(t, a, s[a][n]);
                    J.hasData(e) && (i = J.access(e), o = w.extend({}, i), J.set(t, o))
                }
            }

            function De(e, t, n, r) {
                t = i(t);
                var a, o, s, c, u, l, p = 0,
                    f = e.length,
                    y = f - 1,
                    m = t[0],
                    g = h(m);
                if (g || f > 1 && "string" == typeof m && !d.checkClone && Ee.test(m)) return e.each(function (a) {
                    var i = e.eq(a);
                    g && (t[0] = m.call(this, a, i.html())), De(i, t, n, r)
                });
                if (f && (o = (a = be(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === a.childNodes.length && (a = o), o || r)) {
                    for (c = (s = w.map(me(a, "script"), Pe)).length; p < f; p++) u = a, p !== y && (u = w.clone(u, !0, !0), c && w.merge(s, me(u, "script"))), n.call(e[p], u, p);
                    if (c)
                        for (l = s[s.length - 1].ownerDocument, w.map(s, Ie), p = 0; p < c; p++) u = s[p], he.test(u.type || "") && !X.access(u, "globalEval") && w.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? w._evalUrl && !u.noModule && w._evalUrl(u.src, {
                            nonce: u.nonce || u.getAttribute("nonce")
                        }, l) : v(u.textContent.replace(_e, ""), u, l))
                }
                return e
            }

            function Re(e, t, n) {
                for (var r, a = t ? w.filter(t, e) : e, i = 0; null != (r = a[i]); i++) n || 1 !== r.nodeType || w.cleanData(me(r)), r.parentNode && (n && re(r) && ge(me(r, "script")), r.parentNode.removeChild(r));
                return e
            }
            w.extend({
                htmlPrefilter: function (e) {
                    return e
                },
                clone: function (e, t, n) {
                    var r, a, i, o, s, c, u, l = e.cloneNode(!0),
                        p = re(e);
                    if (!(d.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
                        for (o = me(l), r = 0, a = (i = me(e)).length; r < a; r++) s = i[r], c = o[r], void 0, "input" === (u = c.nodeName.toLowerCase()) && fe.test(s.type) ? c.checked = s.checked : "input" !== u && "textarea" !== u || (c.defaultValue = s.defaultValue);
                    if (t)
                        if (n)
                            for (i = i || me(e), o = o || me(l), r = 0, a = i.length; r < a; r++) Me(i[r], o[r]);
                        else Me(e, l);
                    return (o = me(l, "script")).length > 0 && ge(o, !p && me(e, "script")), l
                },
                cleanData: function (e) {
                    for (var t, n, r, a = w.event.special, i = 0; void 0 !== (n = e[i]); i++)
                        if (U(n)) {
                            if (t = n[X.expando]) {
                                if (t.events)
                                    for (r in t.events) a[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                                n[X.expando] = void 0
                            }
                            n[J.expando] && (n[J.expando] = void 0)
                        }
                }
            }), w.fn.extend({
                detach: function (e) {
                    return Re(this, e, !0)
                },
                remove: function (e) {
                    return Re(this, e)
                },
                text: function (e) {
                    return H(this, function (e) {
                        return void 0 === e ? w.text(this) : this.empty().each(function () {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                        })
                    }, null, e, arguments.length)
                },
                append: function () {
                    return De(this, arguments, function (e) {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ne(this, e).appendChild(e)
                    })
                },
                prepend: function () {
                    return De(this, arguments, function (e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = Ne(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    })
                },
                before: function () {
                    return De(this, arguments, function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    })
                },
                after: function () {
                    return De(this, arguments, function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    })
                },
                empty: function () {
                    for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(me(e, !1)), e.textContent = "");
                    return this
                },
                clone: function (e, t) {
                    return e = null != e && e, t = null == t ? e : t, this.map(function () {
                        return w.clone(this, e, t)
                    })
                },
                html: function (e) {
                    return H(this, function (e) {
                        var t = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !Ce.test(e) && !ye[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = w.htmlPrefilter(e);
                            try {
                                for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(me(t, !1)), t.innerHTML = e);
                                t = 0
                            } catch (e) {}
                        }
                        t && this.empty().append(e)
                    }, null, e, arguments.length)
                },
                replaceWith: function () {
                    var e = [];
                    return De(this, arguments, function (t) {
                        var n = this.parentNode;
                        w.inArray(this, e) < 0 && (w.cleanData(me(this)), n && n.replaceChild(t, this))
                    }, e)
                }
            }), w.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function (e, t) {
                w.fn[e] = function (e) {
                    for (var n, r = [], a = w(e), i = a.length - 1, s = 0; s <= i; s++) n = s === i ? this : this.clone(!0), w(a[s])[t](n), o.apply(r, n.get());
                    return this.pushStack(r)
                }
            });
            var Le = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"),
                Fe = function (t) {
                    var n = t.ownerDocument.defaultView;
                    return n && n.opener || (n = e), n.getComputedStyle(t)
                },
                qe = function (e, t, n) {
                    var r, a, i = {};
                    for (a in t) i[a] = e.style[a], e.style[a] = t[a];
                    for (a in r = n.call(e), t) e.style[a] = i[a];
                    return r
                },
                Ve = new RegExp(te.join("|"), "i");

            function He(e, t, n) {
                var r, a, i, o, s = e.style;
                return (n = n || Fe(e)) && ("" !== (o = n.getPropertyValue(t) || n[t]) || re(e) || (o = w.style(e, t)), !d.pixelBoxStyles() && Le.test(o) && Ve.test(t) && (r = s.width, a = s.minWidth, i = s.maxWidth, s.minWidth = s.maxWidth = s.width = o, o = n.width, s.width = r, s.minWidth = a, s.maxWidth = i)), void 0 !== o ? o + "" : o
            }

            function ze(e, t) {
                return {
                    get: function () {
                        if (!e()) return (this.get = t).apply(this, arguments);
                        delete this.get
                    }
                }
            }! function () {
                function t() {
                    if (l) {
                        u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ne.appendChild(u).appendChild(l);
                        var t = e.getComputedStyle(l);
                        r = "1%" !== t.top, c = 12 === n(t.marginLeft), l.style.right = "60%", o = 36 === n(t.right), a = 36 === n(t.width), l.style.position = "absolute", i = 12 === n(l.offsetWidth / 3), ne.removeChild(u), l = null
                    }
                }

                function n(e) {
                    return Math.round(parseFloat(e))
                }
                var r, a, i, o, s, c, u = m.createElement("div"),
                    l = m.createElement("div");
                l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", d.clearCloneStyle = "content-box" === l.style.backgroundClip, w.extend(d, {
                    boxSizingReliable: function () {
                        return t(), a
                    },
                    pixelBoxStyles: function () {
                        return t(), o
                    },
                    pixelPosition: function () {
                        return t(), r
                    },
                    reliableMarginLeft: function () {
                        return t(), c
                    },
                    scrollboxSize: function () {
                        return t(), i
                    },
                    reliableTrDimensions: function () {
                        var t, n, r, a;
                        return null == s && (t = m.createElement("table"), n = m.createElement("tr"), r = m.createElement("div"), t.style.cssText = "position:absolute;left:-11111px", n.style.height = "1px", r.style.height = "9px", ne.appendChild(t).appendChild(n).appendChild(r), a = e.getComputedStyle(n), s = parseInt(a.height) > 3, ne.removeChild(t)), s
                    }
                }))
            }();
            var We = ["Webkit", "Moz", "ms"],
                $e = m.createElement("div").style,
                Be = {};

            function Ue(e) {
                var t = w.cssProps[e] || Be[e];
                return t || (e in $e ? e : Be[e] = function (e) {
                    for (var t = e[0].toUpperCase() + e.slice(1), n = We.length; n--;)
                        if ((e = We[n] + t) in $e) return e
                }(e) || e)
            }
            var Ge = /^(none|table(?!-c[ea]).+)/,
                Xe = /^--/,
                Je = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                Ye = {
                    letterSpacing: "0",
                    fontWeight: "400"
                };

            function Ke(e, t, n) {
                var r = ee.exec(t);
                return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
            }

            function Ze(e, t, n, r, a, i) {
                var o = "width" === t ? 1 : 0,
                    s = 0,
                    c = 0;
                if (n === (r ? "border" : "content")) return 0;
                for (; o < 4; o += 2) "margin" === n && (c += w.css(e, n + te[o], !0, a)), r ? ("content" === n && (c -= w.css(e, "padding" + te[o], !0, a)), "margin" !== n && (c -= w.css(e, "border" + te[o] + "Width", !0, a))) : (c += w.css(e, "padding" + te[o], !0, a), "padding" !== n ? c += w.css(e, "border" + te[o] + "Width", !0, a) : s += w.css(e, "border" + te[o] + "Width", !0, a));
                return !r && i >= 0 && (c += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - i - c - s - .5)) || 0), c
            }

            function Qe(e, t, n) {
                var r = Fe(e),
                    a = (!d.boxSizingReliable() || n) && "border-box" === w.css(e, "boxSizing", !1, r),
                    i = a,
                    o = He(e, t, r),
                    s = "offset" + t[0].toUpperCase() + t.slice(1);
                if (Le.test(o)) {
                    if (!n) return o;
                    o = "auto"
                }
                return (!d.boxSizingReliable() && a || !d.reliableTrDimensions() && j(e, "tr") || "auto" === o || !parseFloat(o) && "inline" === w.css(e, "display", !1, r)) && e.getClientRects().length && (a = "border-box" === w.css(e, "boxSizing", !1, r), (i = s in e) && (o = e[s])), (o = parseFloat(o) || 0) + Ze(e, t, n || (a ? "border" : "content"), i, r, o) + "px"
            }

            function et(e, t, n, r, a) {
                return new et.prototype.init(e, t, n, r, a)
            }
            w.extend({
                cssHooks: {
                    opacity: {
                        get: function (e, t) {
                            if (t) {
                                var n = He(e, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    gridArea: !0,
                    gridColumn: !0,
                    gridColumnEnd: !0,
                    gridColumnStart: !0,
                    gridRow: !0,
                    gridRowEnd: !0,
                    gridRowStart: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {},
                style: function (e, t, n, r) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var a, i, o, s = B(t),
                            c = Xe.test(t),
                            u = e.style;
                        if (c || (t = Ue(s)), o = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return o && "get" in o && void 0 !== (a = o.get(e, !1, r)) ? a : u[t];
                        "string" === (i = void 0 === n ? "undefined" : _typeof(n)) && (a = ee.exec(n)) && a[1] && (n = oe(e, t, a), i = "number"), null != n && n == n && ("number" !== i || c || (n += a && a[3] || (w.cssNumber[s] ? "" : "px")), d.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), o && "set" in o && void 0 === (n = o.set(e, n, r)) || (c ? u.setProperty(t, n) : u[t] = n))
                    }
                },
                css: function (e, t, n, r) {
                    var a, i, o, s = B(t);
                    return Xe.test(t) || (t = Ue(s)), (o = w.cssHooks[t] || w.cssHooks[s]) && "get" in o && (a = o.get(e, !0, n)), void 0 === a && (a = He(e, t, r)), "normal" === a && t in Ye && (a = Ye[t]), "" === n || n ? (i = parseFloat(a), !0 === n || isFinite(i) ? i || 0 : a) : a
                }
            }), w.each(["height", "width"], function (e, t) {
                w.cssHooks[t] = {
                    get: function (e, n, r) {
                        if (n) return !Ge.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Qe(e, t, r) : qe(e, Je, function () {
                            return Qe(e, t, r)
                        })
                    },
                    set: function (e, n, r) {
                        var a, i = Fe(e),
                            o = !d.scrollboxSize() && "absolute" === i.position,
                            s = (o || r) && "border-box" === w.css(e, "boxSizing", !1, i),
                            c = r ? Ze(e, t, r, s, i) : 0;
                        return s && o && (c -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(i[t]) - Ze(e, t, "border", !1, i) - .5)), c && (a = ee.exec(n)) && "px" !== (a[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ke(0, n, c)
                    }
                }
            }), w.cssHooks.marginLeft = ze(d.reliableMarginLeft, function (e, t) {
                if (t) return (parseFloat(He(e, "marginLeft")) || e.getBoundingClientRect().left - qe(e, {
                    marginLeft: 0
                }, function () {
                    return e.getBoundingClientRect().left
                })) + "px"
            }), w.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function (e, t) {
                w.cssHooks[e + t] = {
                    expand: function (n) {
                        for (var r = 0, a = {}, i = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) a[e + te[r] + t] = i[r] || i[r - 2] || i[0];
                        return a
                    }
                }, "margin" !== e && (w.cssHooks[e + t].set = Ke)
            }), w.fn.extend({
                css: function (e, t) {
                    return H(this, function (e, t, n) {
                        var r, a, i = {},
                            o = 0;
                        if (Array.isArray(t)) {
                            for (r = Fe(e), a = t.length; o < a; o++) i[t[o]] = w.css(e, t[o], !1, r);
                            return i
                        }
                        return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
                    }, e, t, arguments.length > 1)
                }
            }), w.Tween = et, et.prototype = {
                constructor: et,
                init: function (e, t, n, r, a, i) {
                    this.elem = e, this.prop = n, this.easing = a || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = i || (w.cssNumber[n] ? "" : "px")
                },
                cur: function () {
                    var e = et.propHooks[this.prop];
                    return e && e.get ? e.get(this) : et.propHooks._default.get(this)
                },
                run: function (e) {
                    var t, n = et.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this
                }
            }, et.prototype.init.prototype = et.prototype, et.propHooks = {
                _default: {
                    get: function (e) {
                        var t;
                        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                    },
                    set: function (e) {
                        w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !w.cssHooks[e.prop] && null == e.elem.style[Ue(e.prop)] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
                    }
                }
            }, et.propHooks.scrollTop = et.propHooks.scrollLeft = {
                set: function (e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            }, w.easing = {
                linear: function (e) {
                    return e
                },
                swing: function (e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                },
                _default: "swing"
            }, w.fx = et.prototype.init, w.fx.step = {};
            var tt, nt, rt = /^(?:toggle|show|hide)$/,
                at = /queueHooks$/;

            function it() {
                nt && (!1 === m.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(it) : e.setTimeout(it, w.fx.interval), w.fx.tick())
            }

            function ot() {
                return e.setTimeout(function () {
                    tt = void 0
                }), tt = Date.now()
            }

            function st(e, t) {
                var n, r = 0,
                    a = {
                        height: e
                    };
                for (t = t ? 1 : 0; r < 4; r += 2 - t) a["margin" + (n = te[r])] = a["padding" + n] = e;
                return t && (a.opacity = a.width = e), a
            }

            function ct(e, t, n) {
                for (var r, a = (ut.tweeners[t] || []).concat(ut.tweeners["*"]), i = 0, o = a.length; i < o; i++)
                    if (r = a[i].call(n, t, e)) return r
            }

            function ut(e, t, n) {
                var r, a, i = 0,
                    o = ut.prefilters.length,
                    s = w.Deferred().always(function () {
                        delete c.elem
                    }),
                    c = function () {
                        if (a) return !1;
                        for (var t = tt || ot(), n = Math.max(0, u.startTime + u.duration - t), r = 1 - (n / u.duration || 0), i = 0, o = u.tweens.length; i < o; i++) u.tweens[i].run(r);
                        return s.notifyWith(e, [u, r, n]), r < 1 && o ? n : (o || s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u]), !1)
                    },
                    u = s.promise({
                        elem: e,
                        props: w.extend({}, t),
                        opts: w.extend(!0, {
                            specialEasing: {},
                            easing: w.easing._default
                        }, n),
                        originalProperties: t,
                        originalOptions: n,
                        startTime: tt || ot(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function (t, n) {
                            var r = w.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                            return u.tweens.push(r), r
                        },
                        stop: function (t) {
                            var n = 0,
                                r = t ? u.tweens.length : 0;
                            if (a) return this;
                            for (a = !0; n < r; n++) u.tweens[n].run(1);
                            return t ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]), this
                        }
                    }),
                    l = u.props;
                for (! function (e, t) {
                        var n, r, a, i, o;
                        for (n in e)
                            if (a = t[r = B(n)], i = e[n], Array.isArray(i) && (a = i[1], i = e[n] = i[0]), n !== r && (e[r] = i, delete e[n]), (o = w.cssHooks[r]) && "expand" in o)
                                for (n in i = o.expand(i), delete e[r], i) n in e || (e[n] = i[n], t[n] = a);
                            else t[r] = a
                    }(l, u.opts.specialEasing); i < o; i++)
                    if (r = ut.prefilters[i].call(u, e, l, u.opts)) return h(r.stop) && (w._queueHooks(u.elem, u.opts.queue).stop = r.stop.bind(r)), r;
                return w.map(l, ct, u), h(u.opts.start) && u.opts.start.call(e, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), w.fx.timer(w.extend(c, {
                    elem: e,
                    anim: u,
                    queue: u.opts.queue
                })), u
            }
            w.Animation = w.extend(ut, {
                    tweeners: {
                        "*": [function (e, t) {
                            var n = this.createTween(e, t);
                            return oe(n.elem, e, ee.exec(t), n), n
                        }]
                    },
                    tweener: function (e, t) {
                        h(e) ? (t = e, e = ["*"]) : e = e.match(M);
                        for (var n, r = 0, a = e.length; r < a; r++) n = e[r], ut.tweeners[n] = ut.tweeners[n] || [], ut.tweeners[n].unshift(t)
                    },
                    prefilters: [function (e, t, n) {
                        var r, a, i, o, s, c, u, l, p = "width" in t || "height" in t,
                            f = this,
                            d = {},
                            h = e.style,
                            y = e.nodeType && ie(e),
                            m = X.get(e, "fxshow");
                        for (r in n.queue || (null == (o = w._queueHooks(e, "fx")).unqueued && (o.unqueued = 0, s = o.empty.fire, o.empty.fire = function () {
                                o.unqueued || s()
                            }), o.unqueued++, f.always(function () {
                                f.always(function () {
                                    o.unqueued--, w.queue(e, "fx").length || o.empty.fire()
                                })
                            })), t)
                            if (a = t[r], rt.test(a)) {
                                if (delete t[r], i = i || "toggle" === a, a === (y ? "hide" : "show")) {
                                    if ("show" !== a || !m || void 0 === m[r]) continue;
                                    y = !0
                                }
                                d[r] = m && m[r] || w.style(e, r)
                            } if ((c = !w.isEmptyObject(t)) || !w.isEmptyObject(d))
                            for (r in p && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (u = m && m.display) && (u = X.get(e, "display")), "none" === (l = w.css(e, "display")) && (u ? l = u : (ue([e], !0), u = e.style.display || u, l = w.css(e, "display"), ue([e]))), ("inline" === l || "inline-block" === l && null != u) && "none" === w.css(e, "float") && (c || (f.done(function () {
                                    h.display = u
                                }), null == u && (l = h.display, u = "none" === l ? "" : l)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", f.always(function () {
                                    h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                                })), c = !1, d) c || (m ? "hidden" in m && (y = m.hidden) : m = X.access(e, "fxshow", {
                                display: u
                            }), i && (m.hidden = !y), y && ue([e], !0), f.done(function () {
                                for (r in y || ue([e]), X.remove(e, "fxshow"), d) w.style(e, r, d[r])
                            })), c = ct(y ? m[r] : 0, r, f), r in m || (m[r] = c.start, y && (c.end = c.start, c.start = 0))
                    }],
                    prefilter: function (e, t) {
                        t ? ut.prefilters.unshift(e) : ut.prefilters.push(e)
                    }
                }), w.speed = function (e, t, n) {
                    var r = e && "object" === (void 0 === e ? "undefined" : _typeof(e)) ? w.extend({}, e) : {
                        complete: n || !n && t || h(e) && e,
                        duration: e,
                        easing: n && t || t && !h(t) && t
                    };
                    return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
                        h(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue)
                    }, r
                }, w.fn.extend({
                    fadeTo: function (e, t, n, r) {
                        return this.filter(ie).css("opacity", 0).show().end().animate({
                            opacity: t
                        }, e, n, r)
                    },
                    animate: function (e, t, n, r) {
                        var a = w.isEmptyObject(e),
                            i = w.speed(t, n, r),
                            o = function () {
                                var t = ut(this, w.extend({}, e), i);
                                (a || X.get(this, "finish")) && t.stop(!0)
                            };
                        return o.finish = o, a || !1 === i.queue ? this.each(o) : this.queue(i.queue, o)
                    },
                    stop: function (e, t, n) {
                        var r = function (e) {
                            var t = e.stop;
                            delete e.stop, t(n)
                        };
                        return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each(function () {
                            var t = !0,
                                a = null != e && e + "queueHooks",
                                i = w.timers,
                                o = X.get(this);
                            if (a) o[a] && o[a].stop && r(o[a]);
                            else
                                for (a in o) o[a] && o[a].stop && at.test(a) && r(o[a]);
                            for (a = i.length; a--;) i[a].elem !== this || null != e && i[a].queue !== e || (i[a].anim.stop(n), t = !1, i.splice(a, 1));
                            !t && n || w.dequeue(this, e)
                        })
                    },
                    finish: function (e) {
                        return !1 !== e && (e = e || "fx"), this.each(function () {
                            var t, n = X.get(this),
                                r = n[e + "queue"],
                                a = n[e + "queueHooks"],
                                i = w.timers,
                                o = r ? r.length : 0;
                            for (n.finish = !0, w.queue(this, e, []), a && a.stop && a.stop.call(this, !0), t = i.length; t--;) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
                            for (t = 0; t < o; t++) r[t] && r[t].finish && r[t].finish.call(this);
                            delete n.finish
                        })
                    }
                }), w.each(["toggle", "show", "hide"], function (e, t) {
                    var n = w.fn[t];
                    w.fn[t] = function (e, r, a) {
                        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(st(t, !0), e, r, a)
                    }
                }), w.each({
                    slideDown: st("show"),
                    slideUp: st("hide"),
                    slideToggle: st("toggle"),
                    fadeIn: {
                        opacity: "show"
                    },
                    fadeOut: {
                        opacity: "hide"
                    },
                    fadeToggle: {
                        opacity: "toggle"
                    }
                }, function (e, t) {
                    w.fn[e] = function (e, n, r) {
                        return this.animate(t, e, n, r)
                    }
                }), w.timers = [], w.fx.tick = function () {
                    var e, t = 0,
                        n = w.timers;
                    for (tt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                    n.length || w.fx.stop(), tt = void 0
                }, w.fx.timer = function (e) {
                    w.timers.push(e), w.fx.start()
                }, w.fx.interval = 13, w.fx.start = function () {
                    nt || (nt = !0, it())
                }, w.fx.stop = function () {
                    nt = null
                }, w.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                }, w.fn.delay = function (t, n) {
                    return t = w.fx && w.fx.speeds[t] || t, n = n || "fx", this.queue(n, function (n, r) {
                        var a = e.setTimeout(n, t);
                        r.stop = function () {
                            e.clearTimeout(a)
                        }
                    })
                },
                function () {
                    var e = m.createElement("input"),
                        t = m.createElement("select").appendChild(m.createElement("option"));
                    e.type = "checkbox", d.checkOn = "" !== e.value, d.optSelected = t.selected, (e = m.createElement("input")).value = "t", e.type = "radio", d.radioValue = "t" === e.value
                }();
            var lt, pt = w.expr.attrHandle;
            w.fn.extend({
                attr: function (e, t) {
                    return H(this, w.attr, e, t, arguments.length > 1)
                },
                removeAttr: function (e) {
                    return this.each(function () {
                        w.removeAttr(this, e)
                    })
                }
            }), w.extend({
                attr: function (e, t, n) {
                    var r, a, i = e.nodeType;
                    if (3 !== i && 8 !== i && 2 !== i) return void 0 === e.getAttribute ? w.prop(e, t, n) : (1 === i && w.isXMLDoc(e) || (a = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? lt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : a && "set" in a && void 0 !== (r = a.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : a && "get" in a && null !== (r = a.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r)
                },
                attrHooks: {
                    type: {
                        set: function (e, t) {
                            if (!d.radioValue && "radio" === t && j(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t
                            }
                        }
                    }
                },
                removeAttr: function (e, t) {
                    var n, r = 0,
                        a = t && t.match(M);
                    if (a && 1 === e.nodeType)
                        for (; n = a[r++];) e.removeAttribute(n)
                }
            }), lt = {
                set: function (e, t, n) {
                    return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n
                }
            }, w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
                var n = pt[t] || w.find.attr;
                pt[t] = function (e, t, r) {
                    var a, i, o = t.toLowerCase();
                    return r || (i = pt[o], pt[o] = a, a = null != n(e, t, r) ? o : null, pt[o] = i), a
                }
            });
            var ft = /^(?:input|select|textarea|button)$/i,
                dt = /^(?:a|area)$/i;

            function ht(e) {
                return (e.match(M) || []).join(" ")
            }

            function yt(e) {
                return e.getAttribute && e.getAttribute("class") || ""
            }

            function mt(e) {
                return Array.isArray(e) ? e : "string" == typeof e && e.match(M) || []
            }
            w.fn.extend({
                prop: function (e, t) {
                    return H(this, w.prop, e, t, arguments.length > 1)
                },
                removeProp: function (e) {
                    return this.each(function () {
                        delete this[w.propFix[e] || e]
                    })
                }
            }), w.extend({
                prop: function (e, t, n) {
                    var r, a, i = e.nodeType;
                    if (3 !== i && 8 !== i && 2 !== i) return 1 === i && w.isXMLDoc(e) || (t = w.propFix[t] || t, a = w.propHooks[t]), void 0 !== n ? a && "set" in a && void 0 !== (r = a.set(e, n, t)) ? r : e[t] = n : a && "get" in a && null !== (r = a.get(e, t)) ? r : e[t]
                },
                propHooks: {
                    tabIndex: {
                        get: function (e) {
                            var t = w.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : ft.test(e.nodeName) || dt.test(e.nodeName) && e.href ? 0 : -1
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            }), d.optSelected || (w.propHooks.selected = {
                get: function (e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null
                },
                set: function (e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
                }
            }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                w.propFix[this.toLowerCase()] = this
            }), w.fn.extend({
                addClass: function (e) {
                    var t, n, r, a, i, o, s, c = 0;
                    if (h(e)) return this.each(function (t) {
                        w(this).addClass(e.call(this, t, yt(this)))
                    });
                    if ((t = mt(e)).length)
                        for (; n = this[c++];)
                            if (a = yt(n), r = 1 === n.nodeType && " " + ht(a) + " ") {
                                for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                                a !== (s = ht(r)) && n.setAttribute("class", s)
                            } return this
                },
                removeClass: function (e) {
                    var t, n, r, a, i, o, s, c = 0;
                    if (h(e)) return this.each(function (t) {
                        w(this).removeClass(e.call(this, t, yt(this)))
                    });
                    if (!arguments.length) return this.attr("class", "");
                    if ((t = mt(e)).length)
                        for (; n = this[c++];)
                            if (a = yt(n), r = 1 === n.nodeType && " " + ht(a) + " ") {
                                for (o = 0; i = t[o++];)
                                    for (; r.indexOf(" " + i + " ") > -1;) r = r.replace(" " + i + " ", " ");
                                a !== (s = ht(r)) && n.setAttribute("class", s)
                            } return this
                },
                toggleClass: function (e, t) {
                    var n = void 0 === e ? "undefined" : _typeof(e),
                        r = "string" === n || Array.isArray(e);
                    return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : h(e) ? this.each(function (n) {
                        w(this).toggleClass(e.call(this, n, yt(this), t), t)
                    }) : this.each(function () {
                        var t, a, i, o;
                        if (r)
                            for (a = 0, i = w(this), o = mt(e); t = o[a++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                        else void 0 !== e && "boolean" !== n || ((t = yt(this)) && X.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : X.get(this, "__className__") || ""))
                    })
                },
                hasClass: function (e) {
                    var t, n, r = 0;
                    for (t = " " + e + " "; n = this[r++];)
                        if (1 === n.nodeType && (" " + ht(yt(n)) + " ").indexOf(t) > -1) return !0;
                    return !1
                }
            });
            var gt = /\r/g;
            w.fn.extend({
                val: function (e) {
                    var t, n, r, a = this[0];
                    return arguments.length ? (r = h(e), this.each(function (n) {
                        var a;
                        1 === this.nodeType && (null == (a = r ? e.call(this, n, w(this).val()) : e) ? a = "" : "number" == typeof a ? a += "" : Array.isArray(a) && (a = w.map(a, function (e) {
                            return null == e ? "" : e + ""
                        })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, a, "value") || (this.value = a))
                    })) : a ? (t = w.valHooks[a.type] || w.valHooks[a.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(a, "value")) ? n : "string" == typeof (n = a.value) ? n.replace(gt, "") : null == n ? "" : n : void 0
                }
            }), w.extend({
                valHooks: {
                    option: {
                        get: function (e) {
                            var t = w.find.attr(e, "value");
                            return null != t ? t : ht(w.text(e))
                        }
                    },
                    select: {
                        get: function (e) {
                            var t, n, r, a = e.options,
                                i = e.selectedIndex,
                                o = "select-one" === e.type,
                                s = o ? null : [],
                                c = o ? i + 1 : a.length;
                            for (r = i < 0 ? c : o ? i : 0; r < c; r++)
                                if (((n = a[r]).selected || r === i) && !n.disabled && (!n.parentNode.disabled || !j(n.parentNode, "optgroup"))) {
                                    if (t = w(n).val(), o) return t;
                                    s.push(t)
                                } return s
                        },
                        set: function (e, t) {
                            for (var n, r, a = e.options, i = w.makeArray(t), o = a.length; o--;)((r = a[o]).selected = w.inArray(w.valHooks.option.get(r), i) > -1) && (n = !0);
                            return n || (e.selectedIndex = -1), i
                        }
                    }
                }
            }), w.each(["radio", "checkbox"], function () {
                w.valHooks[this] = {
                    set: function (e, t) {
                        if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1
                    }
                }, d.checkOn || (w.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                })
            }), d.focusin = "onfocusin" in e;
            var vt = /^(?:focusinfocus|focusoutblur)$/,
                bt = function (e) {
                    e.stopPropagation()
                };
            w.extend(w.event, {
                trigger: function (t, n, r, a) {
                    var i, o, s, c, u, p, f, d, g = [r || m],
                        v = l.call(t, "type") ? t.type : t,
                        b = l.call(t, "namespace") ? t.namespace.split(".") : [];
                    if (o = d = s = r = r || m, 3 !== r.nodeType && 8 !== r.nodeType && !vt.test(v + w.event.triggered) && (v.indexOf(".") > -1 && (v = (b = v.split(".")).shift(), b.sort()), u = v.indexOf(":") < 0 && "on" + v, (t = t[w.expando] ? t : new w.Event(v, "object" === (void 0 === t ? "undefined" : _typeof(t)) && t)).isTrigger = a ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : w.makeArray(n, [t]), f = w.event.special[v] || {}, a || !f.trigger || !1 !== f.trigger.apply(r, n))) {
                        if (!a && !f.noBubble && !y(r)) {
                            for (c = f.delegateType || v, vt.test(c + v) || (o = o.parentNode); o; o = o.parentNode) g.push(o), s = o;
                            s === (r.ownerDocument || m) && g.push(s.defaultView || s.parentWindow || e)
                        }
                        for (i = 0;
                            (o = g[i++]) && !t.isPropagationStopped();) d = o, t.type = i > 1 ? c : f.bindType || v, (p = (X.get(o, "events") || Object.create(null))[t.type] && X.get(o, "handle")) && p.apply(o, n), (p = u && o[u]) && p.apply && U(o) && (t.result = p.apply(o, n), !1 === t.result && t.preventDefault());
                        return t.type = v, a || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(g.pop(), n) || !U(r) || u && h(r[v]) && !y(r) && ((s = r[u]) && (r[u] = null), w.event.triggered = v, t.isPropagationStopped() && d.addEventListener(v, bt), r[v](), t.isPropagationStopped() && d.removeEventListener(v, bt), w.event.triggered = void 0, s && (r[u] = s)), t.result
                    }
                },
                simulate: function (e, t, n) {
                    var r = w.extend(new w.Event, n, {
                        type: e,
                        isSimulated: !0
                    });
                    w.event.trigger(r, null, t)
                }
            }), w.fn.extend({
                trigger: function (e, t) {
                    return this.each(function () {
                        w.event.trigger(e, t, this)
                    })
                },
                triggerHandler: function (e, t) {
                    var n = this[0];
                    if (n) return w.event.trigger(e, t, n, !0)
                }
            }), d.focusin || w.each({
                focus: "focusin",
                blur: "focusout"
            }, function (e, t) {
                var n = function (e) {
                    w.event.simulate(t, e.target, w.event.fix(e))
                };
                w.event.special[t] = {
                    setup: function () {
                        var r = this.ownerDocument || this.document || this,
                            a = X.access(r, t);
                        a || r.addEventListener(e, n, !0), X.access(r, t, (a || 0) + 1)
                    },
                    teardown: function () {
                        var r = this.ownerDocument || this.document || this,
                            a = X.access(r, t) - 1;
                        a ? X.access(r, t, a) : (r.removeEventListener(e, n, !0), X.remove(r, t))
                    }
                }
            });
            var wt = e.location,
                Tt = {
                    guid: Date.now()
                },
                St = /\?/;
            w.parseXML = function (t) {
                var n;
                if (!t || "string" != typeof t) return null;
                try {
                    n = (new e.DOMParser).parseFromString(t, "text/xml")
                } catch (e) {
                    n = void 0
                }
                return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n
            };
            var xt = /\[\]$/,
                kt = /\r?\n/g,
                Ot = /^(?:submit|button|image|reset|file)$/i,
                jt = /^(?:input|select|textarea|keygen)/i;

            function At(e, t, n, r) {
                var a;
                if (Array.isArray(t)) w.each(t, function (t, a) {
                    n || xt.test(e) ? r(e, a) : At(e + "[" + ("object" === (void 0 === a ? "undefined" : _typeof(a)) && null != a ? t : "") + "]", a, n, r)
                });
                else if (n || "object" !== b(t)) r(e, t);
                else
                    for (a in t) At(e + "[" + a + "]", t[a], n, r)
            }
            w.param = function (e, t) {
                var n, r = [],
                    a = function (e, t) {
                        var n = h(t) ? t() : t;
                        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                    };
                if (null == e) return "";
                if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function () {
                    a(this.name, this.value)
                });
                else
                    for (n in e) At(n, e[n], t, a);
                return r.join("&")
            }, w.fn.extend({
                serialize: function () {
                    return w.param(this.serializeArray())
                },
                serializeArray: function () {
                    return this.map(function () {
                        var e = w.prop(this, "elements");
                        return e ? w.makeArray(e) : this
                    }).filter(function () {
                        var e = this.type;
                        return this.name && !w(this).is(":disabled") && jt.test(this.nodeName) && !Ot.test(e) && (this.checked || !fe.test(e))
                    }).map(function (e, t) {
                        var n = w(this).val();
                        return null == n ? null : Array.isArray(n) ? w.map(n, function (e) {
                            return {
                                name: t.name,
                                value: e.replace(kt, "\r\n")
                            }
                        }) : {
                            name: t.name,
                            value: n.replace(kt, "\r\n")
                        }
                    }).get()
                }
            });
            var Ct = /%20/g,
                Et = /#.*$/,
                _t = /([?&])_=[^&]*/,
                Nt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                Pt = /^(?:GET|HEAD)$/,
                It = /^\/\//,
                Mt = {},
                Dt = {},
                Rt = "*/".concat("*"),
                Lt = m.createElement("a");

            function Ft(e) {
                return function (t, n) {
                    "string" != typeof t && (n = t, t = "*");
                    var r, a = 0,
                        i = t.toLowerCase().match(M) || [];
                    if (h(n))
                        for (; r = i[a++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                }
            }

            function qt(e, t, n, r) {
                var a = {},
                    i = e === Dt;

                function o(s) {
                    var c;
                    return a[s] = !0, w.each(e[s] || [], function (e, s) {
                        var u = s(t, n, r);
                        return "string" != typeof u || i || a[u] ? i ? !(c = u) : void 0 : (t.dataTypes.unshift(u), o(u), !1)
                    }), c
                }
                return o(t.dataTypes[0]) || !a["*"] && o("*")
            }

            function Vt(e, t) {
                var n, r, a = w.ajaxSettings.flatOptions || {};
                for (n in t) void 0 !== t[n] && ((a[n] ? e : r || (r = {}))[n] = t[n]);
                return r && w.extend(!0, e, r), e
            }
            Lt.href = wt.href, w.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: wt.href,
                    type: "GET",
                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(wt.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Rt,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": JSON.parse,
                        "text xml": w.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function (e, t) {
                    return t ? Vt(Vt(e, w.ajaxSettings), t) : Vt(w.ajaxSettings, e)
                },
                ajaxPrefilter: Ft(Mt),
                ajaxTransport: Ft(Dt),
                ajax: function (t, n) {
                    "object" === (void 0 === t ? "undefined" : _typeof(t)) && (n = t, t = void 0), n = n || {};
                    var r, a, i, o, s, c, u, l, p, f, d = w.ajaxSetup({}, n),
                        h = d.context || d,
                        y = d.context && (h.nodeType || h.jquery) ? w(h) : w.event,
                        g = w.Deferred(),
                        v = w.Callbacks("once memory"),
                        b = d.statusCode || {},
                        T = {},
                        S = {},
                        x = "canceled",
                        k = {
                            readyState: 0,
                            getResponseHeader: function (e) {
                                var t;
                                if (u) {
                                    if (!o)
                                        for (o = {}; t = Nt.exec(i);) o[t[1].toLowerCase() + " "] = (o[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                    t = o[e.toLowerCase() + " "]
                                }
                                return null == t ? null : t.join(", ")
                            },
                            getAllResponseHeaders: function () {
                                return u ? i : null
                            },
                            setRequestHeader: function (e, t) {
                                return null == u && (e = S[e.toLowerCase()] = S[e.toLowerCase()] || e, T[e] = t), this
                            },
                            overrideMimeType: function (e) {
                                return null == u && (d.mimeType = e), this
                            },
                            statusCode: function (e) {
                                var t;
                                if (e)
                                    if (u) k.always(e[k.status]);
                                    else
                                        for (t in e) b[t] = [b[t], e[t]];
                                return this
                            },
                            abort: function (e) {
                                var t = e || x;
                                return r && r.abort(t), O(0, t), this
                            }
                        };
                    if (g.promise(k), d.url = ((t || d.url || wt.href) + "").replace(It, wt.protocol + "//"), d.type = n.method || n.type || d.method || d.type, d.dataTypes = (d.dataType || "*").toLowerCase().match(M) || [""], null == d.crossDomain) {
                        c = m.createElement("a");
                        try {
                            c.href = d.url, c.href = c.href, d.crossDomain = Lt.protocol + "//" + Lt.host != c.protocol + "//" + c.host
                        } catch (e) {
                            d.crossDomain = !0
                        }
                    }
                    if (d.data && d.processData && "string" != typeof d.data && (d.data = w.param(d.data, d.traditional)), qt(Mt, d, n, k), u) return k;
                    for (p in (l = w.event && d.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Pt.test(d.type), a = d.url.replace(Et, ""), d.hasContent ? d.data && d.processData && 0 === (d.contentType || "").indexOf("application/x-www-form-urlencoded") && (d.data = d.data.replace(Ct, "+")) : (f = d.url.slice(a.length), d.data && (d.processData || "string" == typeof d.data) && (a += (St.test(a) ? "&" : "?") + d.data, delete d.data), !1 === d.cache && (a = a.replace(_t, "$1"), f = (St.test(a) ? "&" : "?") + "_=" + Tt.guid++ + f), d.url = a + f), d.ifModified && (w.lastModified[a] && k.setRequestHeader("If-Modified-Since", w.lastModified[a]), w.etag[a] && k.setRequestHeader("If-None-Match", w.etag[a])), (d.data && d.hasContent && !1 !== d.contentType || n.contentType) && k.setRequestHeader("Content-Type", d.contentType), k.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : d.accepts["*"]), d.headers) k.setRequestHeader(p, d.headers[p]);
                    if (d.beforeSend && (!1 === d.beforeSend.call(h, k, d) || u)) return k.abort();
                    if (x = "abort", v.add(d.complete), k.done(d.success), k.fail(d.error), r = qt(Dt, d, n, k)) {
                        if (k.readyState = 1, l && y.trigger("ajaxSend", [k, d]), u) return k;
                        d.async && d.timeout > 0 && (s = e.setTimeout(function () {
                            k.abort("timeout")
                        }, d.timeout));
                        try {
                            u = !1, r.send(T, O)
                        } catch (e) {
                            if (u) throw e;
                            O(-1, e)
                        }
                    } else O(-1, "No Transport");

                    function O(t, n, o, c) {
                        var p, f, m, T, S, x = n;
                        u || (u = !0, s && e.clearTimeout(s), r = void 0, i = c || "", k.readyState = t > 0 ? 4 : 0, p = t >= 200 && t < 300 || 304 === t, o && (T = function (e, t, n) {
                            for (var r, a, i, o, s = e.contents, c = e.dataTypes;
                                "*" === c[0];) c.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                            if (r)
                                for (a in s)
                                    if (s[a] && s[a].test(r)) {
                                        c.unshift(a);
                                        break
                                    } if (c[0] in n) i = c[0];
                            else {
                                for (a in n) {
                                    if (!c[0] || e.converters[a + " " + c[0]]) {
                                        i = a;
                                        break
                                    }
                                    o || (o = a)
                                }
                                i = i || o
                            }
                            if (i) return i !== c[0] && c.unshift(i), n[i]
                        }(d, k, o)), !p && w.inArray("script", d.dataTypes) > -1 && (d.converters["text script"] = function () {}), T = function (e, t, n, r) {
                            var a, i, o, s, c, u = {},
                                l = e.dataTypes.slice();
                            if (l[1])
                                for (o in e.converters) u[o.toLowerCase()] = e.converters[o];
                            for (i = l.shift(); i;)
                                if (e.responseFields[i] && (n[e.responseFields[i]] = t), !c && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), c = i, i = l.shift())
                                    if ("*" === i) i = c;
                                    else if ("*" !== c && c !== i) {
                                if (!(o = u[c + " " + i] || u["* " + i]))
                                    for (a in u)
                                        if ((s = a.split(" "))[1] === i && (o = u[c + " " + s[0]] || u["* " + s[0]])) {
                                            !0 === o ? o = u[a] : !0 !== u[a] && (i = s[0], l.unshift(s[1]));
                                            break
                                        } if (!0 !== o)
                                    if (o && e.throws) t = o(t);
                                    else try {
                                        t = o(t)
                                    } catch (e) {
                                        return {
                                            state: "parsererror",
                                            error: o ? e : "No conversion from " + c + " to " + i
                                        }
                                    }
                            }
                            return {
                                state: "success",
                                data: t
                            }
                        }(d, T, k, p), p ? (d.ifModified && ((S = k.getResponseHeader("Last-Modified")) && (w.lastModified[a] = S), (S = k.getResponseHeader("etag")) && (w.etag[a] = S)), 204 === t || "HEAD" === d.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = T.state, f = T.data, p = !(m = T.error))) : (m = x, !t && x || (x = "error", t < 0 && (t = 0))), k.status = t, k.statusText = (n || x) + "", p ? g.resolveWith(h, [f, x, k]) : g.rejectWith(h, [k, x, m]), k.statusCode(b), b = void 0, l && y.trigger(p ? "ajaxSuccess" : "ajaxError", [k, d, p ? f : m]), v.fireWith(h, [k, x]), l && (y.trigger("ajaxComplete", [k, d]), --w.active || w.event.trigger("ajaxStop")))
                    }
                    return k
                },
                getJSON: function (e, t, n) {
                    return w.get(e, t, n, "json")
                },
                getScript: function (e, t) {
                    return w.get(e, void 0, t, "script")
                }
            }), w.each(["get", "post"], function (e, t) {
                w[t] = function (e, n, r, a) {
                    return h(n) && (a = a || r, r = n, n = void 0), w.ajax(w.extend({
                        url: e,
                        type: t,
                        dataType: a,
                        data: n,
                        success: r
                    }, w.isPlainObject(e) && e))
                }
            }), w.ajaxPrefilter(function (e) {
                var t;
                for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
            }), w._evalUrl = function (e, t, n) {
                return w.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    converters: {
                        "text script": function () {}
                    },
                    dataFilter: function (e) {
                        w.globalEval(e, t, n)
                    }
                })
            }, w.fn.extend({
                wrapAll: function (e) {
                    var t;
                    return this[0] && (h(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                        for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                        return e
                    }).append(this)), this
                },
                wrapInner: function (e) {
                    return h(e) ? this.each(function (t) {
                        w(this).wrapInner(e.call(this, t))
                    }) : this.each(function () {
                        var t = w(this),
                            n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    })
                },
                wrap: function (e) {
                    var t = h(e);
                    return this.each(function (n) {
                        w(this).wrapAll(t ? e.call(this, n) : e)
                    })
                },
                unwrap: function (e) {
                    return this.parent(e).not("body").each(function () {
                        w(this).replaceWith(this.childNodes)
                    }), this
                }
            }), w.expr.pseudos.hidden = function (e) {
                return !w.expr.pseudos.visible(e)
            }, w.expr.pseudos.visible = function (e) {
                return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
            }, w.ajaxSettings.xhr = function () {
                try {
                    return new e.XMLHttpRequest
                } catch (e) {}
            };
            var Ht = {
                    0: 200,
                    1223: 204
                },
                zt = w.ajaxSettings.xhr();
            d.cors = !!zt && "withCredentials" in zt, d.ajax = zt = !!zt, w.ajaxTransport(function (t) {
                var n, r;
                if (d.cors || zt && !t.crossDomain) return {
                    send: function (a, i) {
                        var o, s = t.xhr();
                        if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                            for (o in t.xhrFields) s[o] = t.xhrFields[o];
                        for (o in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || a["X-Requested-With"] || (a["X-Requested-With"] = "XMLHttpRequest"), a) s.setRequestHeader(o, a[o]);
                        n = function (e) {
                            return function () {
                                n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? i(0, "error") : i(s.status, s.statusText) : i(Ht[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                    binary: s.response
                                } : {
                                    text: s.responseText
                                }, s.getAllResponseHeaders()))
                            }
                        }, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
                            4 === s.readyState && e.setTimeout(function () {
                                n && r()
                            })
                        }, n = n("abort");
                        try {
                            s.send(t.hasContent && t.data || null)
                        } catch (e) {
                            if (n) throw e
                        }
                    },
                    abort: function () {
                        n && n()
                    }
                }
            }), w.ajaxPrefilter(function (e) {
                e.crossDomain && (e.contents.script = !1)
            }), w.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function (e) {
                        return w.globalEval(e), e
                    }
                }
            }), w.ajaxPrefilter("script", function (e) {
                void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
            }), w.ajaxTransport("script", function (e) {
                var t, n;
                if (e.crossDomain || e.scriptAttrs) return {
                    send: function (r, a) {
                        t = w("<script>").attr(e.scriptAttrs || {}).prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function (e) {
                            t.remove(), n = null, e && a("error" === e.type ? 404 : 200, e.type)
                        }), m.head.appendChild(t[0])
                    },
                    abort: function () {
                        n && n()
                    }
                }
            });
            var Wt, $t = [],
                Bt = /(=)\?(?=&|$)|\?\?/;
            w.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function () {
                    var e = $t.pop() || w.expando + "_" + Tt.guid++;
                    return this[e] = !0, e
                }
            }), w.ajaxPrefilter("json jsonp", function (t, n, r) {
                var a, i, o, s = !1 !== t.jsonp && (Bt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Bt.test(t.data) && "data");
                if (s || "jsonp" === t.dataTypes[0]) return a = t.jsonpCallback = h(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Bt, "$1" + a) : !1 !== t.jsonp && (t.url += (St.test(t.url) ? "&" : "?") + t.jsonp + "=" + a), t.converters["script json"] = function () {
                    return o || w.error(a + " was not called"), o[0]
                }, t.dataTypes[0] = "json", i = e[a], e[a] = function () {
                    o = arguments
                }, r.always(function () {
                    void 0 === i ? w(e).removeProp(a) : e[a] = i, t[a] && (t.jsonpCallback = n.jsonpCallback, $t.push(a)), o && h(i) && i(o[0]), o = i = void 0
                }), "script"
            }), d.createHTMLDocument = ((Wt = m.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Wt.childNodes.length), w.parseHTML = function (e, t, n) {
                return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (d.createHTMLDocument ? ((r = (t = m.implementation.createHTMLDocument("")).createElement("base")).href = m.location.href, t.head.appendChild(r)) : t = m), i = !n && [], (a = A.exec(e)) ? [t.createElement(a[1])] : (a = be([e], t, i), i && i.length && w(i).remove(), w.merge([], a.childNodes)));
                var r, a, i
            }, w.fn.load = function (e, t, n) {
                var r, a, i, o = this,
                    s = e.indexOf(" ");
                return s > -1 && (r = ht(e.slice(s)), e = e.slice(0, s)), h(t) ? (n = t, t = void 0) : t && "object" === (void 0 === t ? "undefined" : _typeof(t)) && (a = "POST"), o.length > 0 && w.ajax({
                    url: e,
                    type: a || "GET",
                    dataType: "html",
                    data: t
                }).done(function (e) {
                    i = arguments, o.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e)
                }).always(n && function (e, t) {
                    o.each(function () {
                        n.apply(this, i || [e.responseText, t, e])
                    })
                }), this
            }, w.expr.pseudos.animated = function (e) {
                return w.grep(w.timers, function (t) {
                    return e === t.elem
                }).length
            }, w.offset = {
                setOffset: function (e, t, n) {
                    var r, a, i, o, s, c, u = w.css(e, "position"),
                        l = w(e),
                        p = {};
                    "static" === u && (e.style.position = "relative"), s = l.offset(), i = w.css(e, "top"), c = w.css(e, "left"), ("absolute" === u || "fixed" === u) && (i + c).indexOf("auto") > -1 ? (o = (r = l.position()).top, a = r.left) : (o = parseFloat(i) || 0, a = parseFloat(c) || 0), h(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (p.top = t.top - s.top + o), null != t.left && (p.left = t.left - s.left + a), "using" in t ? t.using.call(e, p) : ("number" == typeof p.top && (p.top += "px"), "number" == typeof p.left && (p.left += "px"), l.css(p))
                }
            }, w.fn.extend({
                offset: function (e) {
                    if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                        w.offset.setOffset(this, e, t)
                    });
                    var t, n, r = this[0];
                    return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset
                    }) : {
                        top: 0,
                        left: 0
                    } : void 0
                },
                position: function () {
                    if (this[0]) {
                        var e, t, n, r = this[0],
                            a = {
                                top: 0,
                                left: 0
                            };
                        if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();
                        else {
                            for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position");) e = e.parentNode;
                            e && e !== r && 1 === e.nodeType && ((a = w(e).offset()).top += w.css(e, "borderTopWidth", !0), a.left += w.css(e, "borderLeftWidth", !0))
                        }
                        return {
                            top: t.top - a.top - w.css(r, "marginTop", !0),
                            left: t.left - a.left - w.css(r, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function () {
                    return this.map(function () {
                        for (var e = this.offsetParent; e && "static" === w.css(e, "position");) e = e.offsetParent;
                        return e || ne
                    })
                }
            }), w.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function (e, t) {
                var n = "pageYOffset" === t;
                w.fn[e] = function (r) {
                    return H(this, function (e, r, a) {
                        var i;
                        if (y(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === a) return i ? i[t] : e[r];
                        i ? i.scrollTo(n ? i.pageXOffset : a, n ? a : i.pageYOffset) : e[r] = a
                    }, e, r, arguments.length)
                }
            }), w.each(["top", "left"], function (e, t) {
                w.cssHooks[t] = ze(d.pixelPosition, function (e, n) {
                    if (n) return n = He(e, t), Le.test(n) ? w(e).position()[t] + "px" : n
                })
            }), w.each({
                Height: "height",
                Width: "width"
            }, function (e, t) {
                w.each({
                    padding: "inner" + e,
                    content: t,
                    "": "outer" + e
                }, function (n, r) {
                    w.fn[r] = function (a, i) {
                        var o = arguments.length && (n || "boolean" != typeof a),
                            s = n || (!0 === a || !0 === i ? "margin" : "border");
                        return H(this, function (t, n, a) {
                            var i;
                            return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === a ? w.css(t, n, s) : w.style(t, n, a, s)
                        }, t, o ? a : void 0, o)
                    }
                })
            }), w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
                w.fn[t] = function (e) {
                    return this.on(t, e)
                }
            }), w.fn.extend({
                bind: function (e, t, n) {
                    return this.on(e, null, t, n)
                },
                unbind: function (e, t) {
                    return this.off(e, null, t)
                },
                delegate: function (e, t, n, r) {
                    return this.on(t, e, n, r)
                },
                undelegate: function (e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                },
                hover: function (e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }
            }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
                w.fn[t] = function (e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                }
            });
            var Ut = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            w.proxy = function (e, t) {
                var n, r, i;
                if ("string" == typeof t && (n = e[t], t = e, e = n), h(e)) return r = a.call(arguments, 2), (i = function () {
                    return e.apply(t || this, r.concat(a.call(arguments)))
                }).guid = e.guid = e.guid || w.guid++, i
            }, w.holdReady = function (e) {
                e ? w.readyWait++ : w.ready(!0)
            }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = j, w.isFunction = h, w.isWindow = y, w.camelCase = B, w.type = b, w.now = Date.now, w.isNumeric = function (e) {
                var t = w.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            }, w.trim = function (e) {
                return null == e ? "" : (e + "").replace(Ut, "")
            }, "function" == typeof define && define.amd && define("jquery", [], function () {
                return w
            });
            var Gt = e.jQuery,
                Xt = e.$;
            return w.noConflict = function (t) {
                return e.$ === w && (e.$ = Xt), t && e.jQuery === w && (e.jQuery = Gt), w
            }, void 0 === t && (e.jQuery = e.$ = w), w
        }), define("jqueryplugins", ["jquery"], function (e) {
            e.prototype.extend({
                popAttr: function (e) {
                    var t = this.attr(e);
                    return this.removeAttr(e), t
                },
                popData: function (e) {
                    var t = this.data(e);
                    return this.removeData(e), t
                },
                tag: function () {
                    return this[0] && this[0].tagName && this[0].tagName.toLowerCase()
                },
                textNodes: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "*";
                    return 1 === this.length && this[0] instanceof Text ? [this[0]] : this.get().concat(this.contents().get(), this.find(e).contents().get()).filter(function (e, t, n) {
                        return e instanceof Text && n.indexOf(e) === t
                    }).sort(function (e, t) {
                        return 2 & e.compareDocumentPosition(t) ? 1 : -1
                    })
                },
                findAndFilter: function (e) {
                    return this.filter(e).add(this.find(e))
                }
            })
        }),
        function () {
            var e = void 0,
                t = {};

            function n() {
                for (var e = 0; e < arguments.length; e++)
                    for (var t in arguments[e]) this[t] = arguments[e][t]
            }

            function r(e, t) {
                e.childAt = e.childAt || {};
                for (var n = t.start; n < t.end; n += 1) e.childAt[n] = t
            }

            function a(e, t, n, r) {
                return !(e.canFollow && !(e.canFollow.indexOf(n && n.type) > -1) || e.cannotFollow && (-1 !== e.cannotFollow.indexOf(n && n.type) || e.cannotFollow.indexOf("text") > -1 && r) || e.peek && e.peek.toLowerCase() !== t.slice(0, e.peek.length).toLowerCase())
            }

            function i(e) {
                for (var n = e.innerText, r = [], i = 0, s = i, c = n.length, u = null; i < c;) {
                    for (var l = n.slice(i), p = (r.length ? r[0] : e).innerMode, f = 0, d = p.length; f < d; f += 1) {
                        var h = t[p[f]];
                        if (a(h, l, u, s < i) && h.pattern.test(l)) {
                            var y = h.pattern.exec(l),
                                m = h.fn(y),
                                g = !1,
                                v = 0;
                            if (m.matches) {
                                for (; v < r.length; v += 1) {
                                    var b = r[v].type;
                                    if (b in m.matches) {
                                        g = !0;
                                        break
                                    }
                                    0 === b.indexOf("verbatim") && (b = "verbatimOpener"), m.cannotCross && m.cannotCross.indexOf(b) > -1 && (v = r.length - 1)
                                }
                                if (v >= r.length && !m.isFront) continue
                            }
                            s < i && e.addChild({
                                type: "text",
                                text: n.slice(s, i),
                                innerMode: p
                            }), s = i += (u = e.addChild(m)).text.length, g && (o(e, u, r[v]), r = r.slice(v + 1)), u.isFrontToken() && r.unshift(u);
                            break
                        }
                    }
                    f === d && (i += 1, null === u && (u = {
                        type: "text"
                    }))
                }
                for (s < i && e.addChild({
                        type: "text",
                        text: n.slice(s, i),
                        innerMode: (r.length ? r[0] : e).innerMode
                    }); r.length > 0;) r.shift().demote();
                return e
            }

            function o(e, t, n) {
                var a = e.children.indexOf(t),
                    i = e.children.indexOf(n);
                t.children = e.children.splice(i + 1, a - (i + 1)), t.children.forEach(function (e) {
                    r(t, e)
                }), t.type = t.matches[n.type], t.innerText = "";
                for (var o = 0, s = t.children.length; o < s; o++) t.innerText += t.children[o].text;
                t.start = n.start, t.text = n.text + t.innerText + t.text, Object.keys(n).forEach(function (e) {
                    Object.hasOwnProperty.call(t, e) || (t[e] = n[e])
                }), t.isFront && (t.isFront = !1), e.children.splice(i, 1), r(e, t)
            }
            n.prototype = {
                constructor: n,
                addChild: function (e) {
                    var t = this.lastChildEnd(),
                        a = new n({
                            start: t,
                            end: e.text && t + e.text.length,
                            children: []
                        }, e);
                    return a.innerText && i(a), this.children.push(a), r(this, a), a
                },
                firstChild: function () {
                    return this.children && this.children[0] || null
                },
                lastChild: function () {
                    return this.children && this.children[this.children.length - 1] || null
                },
                lastChildEnd: function () {
                    var e = this.lastChild();
                    return e ? e.end : this.start + Math.max(0, this.text.indexOf(this.innerText))
                },
                tokenAt: function (e) {
                    if (e < this.start || e >= this.end) return null;
                    if (this.childAt) return this.childAt[e] && this.childAt[e].tokenAt(e) || this;
                    if (this.children.length)
                        for (var t = 0; t < this.children.length; t += 1) {
                            var n = this.children[t].tokenAt(e);
                            if (n) return n
                        }
                    return this
                },
                pathAt: function (e) {
                    if (e < this.start || e >= this.end) return [];
                    if (this.childAt) return (this.childAt[e] && this.childAt[e].pathAt(e) || []).concat(this);
                    var t = [];
                    if (this.children.length)
                        for (var n = 0; n < this.children.length; n += 1) {
                            var r = this.children[n].pathAt(e);
                            if (r.length) {
                                t.concat(r);
                                break
                            }
                        }
                    return t.concat(this)
                },
                nearestTokenAt: function (e) {
                    return e < this.start || e >= this.end ? null : this.children ? this.children.reduce(function (t, n) {
                        return t || (e >= n.start && e < n.end ? n : null)
                    }, null) : this
                },
                everyLeaf: function (e) {
                    return this.children && 0 !== this.children.length ? this.children.reduce(function (t, n) {
                        return t && n.everyLeaf(e)
                    }, !0) : !!e(this)
                },
                isWhitespace: function () {
                    return this.everyLeaf(function (e) {
                        return "whitespace" === e.type || !e.text.trim()
                    })
                },
                isFrontToken: function () {
                    return this.isFront
                },
                isBackToken: function () {
                    return "matches" in this
                },
                demote: function () {
                    this.type = "text"
                },
                error: function (e) {
                    this.type = "error", this.message = e
                },
                toString: function () {
                    var e = this.type + "(" + this.start + "\u2192" + this.end + ")";
                    return this.children && this.children.length > 0 && (e += "[" + this.children + "]"), e
                }
            }, e = {
                lex: function (t, r) {
                    var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "start";
                    return i(new n({
                        type: "root",
                        start: r || 0,
                        end: t.length,
                        text: t,
                        innerText: t,
                        children: [],
                        childAt: {},
                        innerMode: e.modes[a]
                    }))
                },
                rules: t,
                modes: {}
            }, "object" === ("undefined" == typeof module ? "undefined" : _typeof(module)) ? module.exports = e : "function" == typeof define && define.amd ? define("lexer", [], function () {
                return e
            }) : this && this.loaded ? (this.modules || (this.modules = {}), this.modules.Lexer = e) : this.TwineLexer = e
        }.call(eval("this") || ("undefined" != typeof global ? global : window)),
        function () {
            var e;

            function t(e) {
                return e && "object" === (void 0 === e ? "undefined" : _typeof(e)) ? (Object.keys(e).forEach(function (n) {
                    e[n] = t(e[n])
                }), e) : (e + "").replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
            }

            function n(e) {
                return function () {
                    return "(" + e + Array.apply(0, arguments).join("|") + ")"
                }
            }
            var r = n("?:"),
                a = n("?!"),
                i = n("?="),
                o = "[ \\f\\t\\v\\u00a0\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000]*",
                s = o.replace("*", "+"),
                c = "\\b",
                u = "[\\w\\-\\u00c0-\\u00de\\u00df-\\u00ff\\u0150\\u0170\\u0151\\u0171\\uD800-\\uDFFF]",
                l = u.replace("\\-", ""),
                p = r("\\n", "$"),
                f = o + "(\\*+)" + s,
                d = o + "((?:0\\.)+)" + s,
                h = o + "-{3,}" + o + p,
                y = o + "(==+>|<=+|=+><=+|<==+>)" + o + p,
                m = o + "(=+\\|+|\\|+=+|=+\\|+=+|\\|=+\\|)" + o + p,
                g = {
                    opener: "\\[\\[(?!\\[)",
                    text: "(" + function () {
                        return "[^" + Array.apply(0, arguments).map(t).join("") + "]*"
                    }("]") + ")",
                    rightSeparator: r("\\->", "\\|"),
                    leftSeparator: "<\\-",
                    closer: "\\]\\]",
                    legacySeparator: "\\|",
                    legacyText: "(" + r("[^\\|\\]]", "\\]" + a("\\]")) + "+)"
                },
                v = l + "*" + l.replace("\\w", "a-zA-Z") + l + "*",
                b = "\\$(" + v + ")",
                w = "_(" + v + ")",
                T = "'s" + s + "(" + v + ")",
                S = "(" + v + ")" + s + "of" + c + a("it\\b"),
                x = "'s" + s,
                k = r("it", "time", "visits?", "exits?", "pos") + c,
                O = "its" + s + "(" + v + ")",
                j = "its" + s,
                A = "(" + v + ")" + s + "of" + s + "it" + c,
                C = "of\\b" + s + "it" + c,
                E = {
                    opener: "\\(",
                    name: "(" + r("\\$", "_") + "?" + u + "+):" + a("\\/"),
                    closer: "\\)"
                },
                _ = r("=<", "=>", "[gl]te?\\b", "n?eq\\b", "isnot\\b", "are\\b", "x\\b", "isa\\b", "or" + s + "a" + c),
                N = "[a-zA-Z][\\w\\-]*",
                P = "(?:\"[^\"]*\"|'[^']*'|[^'\">])*?",
                I = "\\|(" + u + "+)(>|\\))",
                M = "(<|\\()(" + u + "+)\\|",
                D = "\\b(\\d+(?:\\.\\d+)?(?:[eE][+\\-]?\\d+)?)" + a("m?s") + c;
            g.main = g.opener + r(g.text + g.rightSeparator, g.text.replace("*", "*?") + g.leftSeparator) + g.text, e = {
                upperLetter: "[A-Z\\u00c0-\\u00de\\u0150\\u0170]",
                lowerLetter: "[a-z0-9_\\-\\u00df-\\u00ff\\u0151\\u0171]",
                anyLetter: u,
                anyLetterStrict: l,
                whitespace: s.replace("[", "[\\n\\r"),
                escapedLine: "\\\\\\n\\\\?|\\n\\\\",
                br: "\\n(?!\\\\)",
                commentFront: "\x3c!--",
                commentBack: "--\x3e",
                tag: "<\\/?" + N + P + ">",
                tagPeek: "<",
                scriptStyleTag: "<(" + r("script", "style", "textarea") + ")" + P + ">[^]*?<\\/\\1>",
                scriptStyleTagOpener: "<",
                url: "(" + r("https?", "mailto", "javascript", "ftp", "data") + ":\\/\\/[^\\s<]+[^<.,:;\"')\\]\\s])",
                bullet: "\\*",
                hr: h,
                heading: "[ \\f\\t\\v\\u00a0\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000]*(#{1,6})[ \\f\\t\\v\\u00a0\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000]*",
                align: y,
                column: m,
                bulleted: f,
                numbered: d,
                strikeOpener: t("~~"),
                italicOpener: t("//"),
                boldOpener: t("''"),
                supOpener: t("^^"),
                strongFront: t("**"),
                strongBack: t("**"),
                emFront: t("*"),
                emBack: t("*"),
                verbatimOpener: "`+",
                collapsedFront: "{",
                collapsedBack: "}",
                hookAppendedFront: "\\[" + a("=+"),
                hookPrependedFront: I + "\\[" + a("=+"),
                hookFront: "\\[" + a("=+"),
                hookBack: "\\]" + a(M),
                hookAppendedBack: "\\]" + M,
                unclosedHook: "\\[=+",
                unclosedHookPrepended: I + "\\[=+",
                unclosedCollapsed: "\\{=+",
                passageLink: g.main + g.closer,
                passageLinkPeek: "[[",
                legacyLink: g.opener + g.legacyText + g.legacySeparator + g.legacyText + g.closer,
                legacyLinkPeek: "[[",
                simpleLink: g.opener + g.legacyText + g.closer,
                simpleLinkPeek: "[[",
                macroFront: E.opener + i(E.name),
                macroFrontPeek: "(",
                macroName: E.name,
                groupingFront: "\\(" + a(E.name),
                groupingFrontPeek: "(",
                groupingBack: "\\)",
                twine1Macro: "<<[^>\\s]+\\s*(?:\\\\.|'(?:[^'\\\\]*\\\\.)*[^'\\\\]*'|\"(?:[^\"\\\\]*\\\\.)*[^\"\\\\]*\"|[^'\"\\\\>]|>(?!>))*>>",
                twine1MacroPeek: "<<",
                validPropertyName: v,
                property: T,
                propertyPeek: "'s",
                belongingProperty: S,
                possessiveOperator: x,
                belongingOperator: "of\\b",
                belongingOperatorPeek: "of",
                itsOperator: j,
                itsOperatorPeek: "its",
                belongingItOperator: C,
                belongingItOperatorPeek: "of",
                variable: b,
                variablePeek: "$",
                tempVariable: w,
                tempVariablePeek: "_",
                hookName: "\\?(" + u + "+)\\b",
                hookNamePeek: "?",
                cssTime: "(\\d+\\.?\\d*|\\d*\\.?\\d+)(m?s)\\b",
                colour: r(r("Red", "Orange", "Yellow", "Lime", "Green", "Cyan", "Aqua", "Blue", "Navy", "Purple", "Fuchsia", "Magenta", "White", "Gray", "Grey", "Black", "Transparent"), "#[\\dA-Fa-f]{3}(?:[\\dA-Fa-f]{3})?"),
                datatype: r("alnum", "alphanumeric", "any(?:case)?", "array", "bool(?:ean)?", "changer", "colou?r", "const", "command", "dm", "data" + r("map", "type", "set"), "ds", "digit", "gradient", "empty", "even", "int" + a("o") + "(?:eger)?", "lambda", "lowercase", "macro", "linebreak", "newline", "num(?:ber)?", "odd", "str(?:ing)?", "uppercase", "whitespace") + c,
                number: D,
                boolean: r("true", "false") + c,
                identifier: k,
                itsProperty: O,
                itsPropertyPeek: "its",
                belongingItProperty: A,
                escapedStringChar: "\\\\[^\\n]",
                singleStringOpener: "'",
                doubleStringOpener: '"',
                singleStringCloser: "'",
                doubleStringCloser: '"',
                is: "is" + a(s + "not" + c, s + "an?" + c, s + "in" + c, s + "<", s + ">") + c,
                isNot: "is" + s + "not" + a(s + r("an?", "in") + c) + c,
                isA: "is" + s + "an?" + c,
                isNotA: "is" + s + "not" + s + "an?" + c,
                matches: "matches\\b",
                doesNotMatch: "does" + s + "not" + s + "match" + c,
                and: "and\\b",
                or: "or\\b",
                not: "not\\b",
                inequality: "((?:is(?:" + s + "not)?" + o + ")*)(" + r("<(?!=)", "<=", ">(?!=)", ">=") + ")",
                isIn: "is" + s + "in" + c,
                contains: "contains\\b",
                doesNotContain: "does" + s + "not" + s + "contain" + c,
                isNotIn: "is" + s + "not" + s + "in" + c,
                addition: t("+") + a("="),
                subtraction: t("-") + a("=", "type"),
                multiplication: t("*") + a("="),
                division: r("/", "%") + a("="),
                comma: ",",
                spread: "\\.\\.\\." + a("\\."),
                to: r("to\\b", "="),
                into: "into\\b",
                making: "making\\b",
                where: "where\\b",
                when: "when\\b",
                via: "via\\b",
                each: "each\\b",
                augmentedAssign: r("\\+", "\\-", "\\*", "\\/", "%") + "=",
                bind: "2?bind\\b",
                typeSignature: t("-type") + c,
                incorrectOperator: _
            }, "object" === ("undefined" == typeof module ? "undefined" : _typeof(module)) ? module.exports = e : "function" == typeof define && define.amd ? define("patterns", [], function () {
                return e
            }) : this && this.loaded ? (this.modules || (this.modules = {}), this.modules.Patterns = e) : this.Patterns = e
        }.call(eval("this") || ("undefined" != typeof global ? global : window)),
        function () {
            var e = void 0;
            Object.assign = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            };
            var t = Object.keys,
                n = Object.assign;

            function r(r) {
                return Object.freeze({
                    lex: function (r) {
                        function a(e) {
                            return e = e || "innerText",
                                function (t) {
                                    var n = t.reduceRight(function (e, t, n) {
                                            return e || (n ? t : "")
                                        }, ""),
                                        r = {};
                                    return r[e] = n, r
                                }
                        }

                        function i(e, t) {
                            var n = {};
                            return n[e] = t,
                                function () {
                                    return {
                                        isFront: !0,
                                        matches: n,
                                        cannotCross: ["verbatimOpener"]
                                    }
                                }
                        }
                        var o = Object.bind(0, null);

                        function s(e, t) {
                            return Object.keys(t).forEach(function (n) {
                                var r = t[n].fn;
                                t[n].fn = function (t) {
                                    var a = r(t);
                                    return a.text || (a.text = t[0]), a.type || (a.type = n), a.innerMode || (a.innerMode = e), a
                                }
                            }), t
                        }
                        var c = [],
                            u = [],
                            l = [],
                            p = s(c, {
                                hr: {
                                    fn: o
                                },
                                bulleted: {
                                    fn: function (e) {
                                        return {
                                            depth: e[1].length
                                        }
                                    }
                                },
                                numbered: {
                                    fn: function (e) {
                                        return {
                                            depth: e[1].length / 2
                                        }
                                    }
                                },
                                heading: {
                                    fn: function (e) {
                                        return {
                                            depth: e[1].length
                                        }
                                    }
                                },
                                align: {
                                    fn: function (e) {
                                        var t = void 0,
                                            n = e[1],
                                            r = n.indexOf("><");
                                        return ~r ? 25 === (t = Math.round(r / (n.length - 2) * 50)) && (t = "center") : "<" === n[0] && ">" === n.slice(-1) ? t = "justify" : n.indexOf(">") > -1 ? t = "right" : n.indexOf("<") > -1 && (t = "left"), {
                                            align: t
                                        }
                                    }
                                },
                                column: {
                                    fn: function (e) {
                                        var t = void 0,
                                            n = e[1],
                                            r = n.indexOf("|");
                                        return r && r < n.length - 1 ? t = "center" : "|" === n[0] && "|" === n.slice(-1) ? t = "none" : r === n.length - 1 ? t = "right" : r || (t = "left"), {
                                            column: t,
                                            width: /\|+/.exec(n)[0].length,
                                            marginLeft: /^=*/.exec(n)[0].length,
                                            marginRight: /=*$/.exec(n)[0].length
                                        }
                                    }
                                }
                            });
                        t(p).forEach(function (e) {
                            p[e].canFollow = [null, "br", "hr", "bulleted", "numbered", "heading", "align", "column", "escapedLine"], p[e].cannotFollow = ["text"]
                        });
                        var f = s(c, {
                                twine1Macro: {
                                    fn: function () {
                                        return {
                                            type: "error",
                                            message: "Harlowe macros use a different syntax to Twine 1, SugarCube, and Yarn macros."
                                        }
                                    }
                                },
                                emBack: {
                                    fn: function () {
                                        return {
                                            matches: {
                                                emFront: "em"
                                            },
                                            cannotCross: ["verbatimOpener"]
                                        }
                                    }
                                },
                                strongBack: {
                                    fn: function () {
                                        return {
                                            matches: {
                                                strongFront: "strong"
                                            },
                                            cannotCross: ["verbatimOpener"]
                                        }
                                    }
                                },
                                strongFront: {
                                    fn: function () {
                                        return {
                                            isFront: !0
                                        }
                                    }
                                },
                                emFront: {
                                    fn: function () {
                                        return {
                                            isFront: !0
                                        }
                                    }
                                },
                                boldOpener: {
                                    fn: i("boldOpener", "bold")
                                },
                                italicOpener: {
                                    fn: i("italicOpener", "italic")
                                },
                                strikeOpener: {
                                    fn: i("strikeOpener", "strike")
                                },
                                supOpener: {
                                    fn: i("supOpener", "sup")
                                },
                                commentFront: {
                                    fn: function () {
                                        return {
                                            isFront: !0
                                        }
                                    }
                                },
                                commentBack: {
                                    fn: function () {
                                        return {
                                            matches: {
                                                commentFront: "comment"
                                            }
                                        }
                                    }
                                },
                                scriptStyleTag: {
                                    fn: o
                                },
                                tag: {
                                    fn: o
                                },
                                url: {
                                    fn: o
                                },
                                hookPrependedFront: {
                                    fn: function (e) {
                                        return {
                                            name: e[1],
                                            hidden: ")" === e[2],
                                            isFront: !0,
                                            tagPosition: "prepended"
                                        }
                                    }
                                },
                                hookFront: {
                                    fn: function () {
                                        return {
                                            isFront: !0
                                        }
                                    }
                                },
                                hookBack: {
                                    fn: function () {
                                        return {
                                            matches: {
                                                hookPrependedFront: "hook",
                                                hookFront: "hook"
                                            },
                                            cannotCross: ["verbatimOpener"]
                                        }
                                    }
                                },
                                hookAppendedBack: {
                                    fn: function (e) {
                                        return {
                                            name: e[2],
                                            hidden: "(" === e[1],
                                            tagPosition: "appended",
                                            matches: {
                                                hookFront: "hook"
                                            },
                                            cannotCross: ["verbatimOpener"]
                                        }
                                    }
                                },
                                unclosedHook: {
                                    fn: o
                                },
                                unclosedHookPrepended: {
                                    fn: function (e) {
                                        return {
                                            type: "unclosedHook",
                                            name: e[1],
                                            hidden: ")" === e[2]
                                        }
                                    }
                                },
                                verbatimOpener: {
                                    fn: function (e) {
                                        var t = e[0].length,
                                            n = {};
                                        return n["verbatim" + t] = "verbatim", {
                                            type: "verbatim" + t,
                                            isFront: !0,
                                            matches: n
                                        }
                                    }
                                },
                                unclosedCollapsed: {
                                    fn: o
                                },
                                collapsedFront: {
                                    fn: function () {
                                        return {
                                            isFront: !0
                                        }
                                    }
                                },
                                collapsedBack: {
                                    fn: function () {
                                        return {
                                            matches: {
                                                collapsedFront: "collapsed"
                                            },
                                            cannotCross: ["verbatimOpener"]
                                        }
                                    }
                                },
                                escapedLine: {
                                    fn: o
                                },
                                legacyLink: {
                                    fn: function (e) {
                                        return {
                                            type: "twineLink",
                                            innerText: e[1],
                                            passage: e[2],
                                            innerMode: c
                                        }
                                    }
                                },
                                br: {
                                    fn: o
                                }
                            }),
                            d = n(s(u, {
                                macroFront: {
                                    fn: function (e) {
                                        return {
                                            isFront: !0,
                                            name: e[1]
                                        }
                                    }
                                },
                                groupingBack: {
                                    fn: function () {
                                        return {
                                            matches: {
                                                groupingFront: "grouping",
                                                macroFront: "macro"
                                            },
                                            cannotCross: ["singleStringOpener", "doubleStringOpener"]
                                        }
                                    }
                                },
                                passageLink: {
                                    fn: function (e) {
                                        var t = e[1] || "",
                                            n = e[2] || "",
                                            r = e[3] || "";
                                        return {
                                            type: "twineLink",
                                            innerText: n ? r : t,
                                            passage: t ? r : n,
                                            innerMode: c
                                        }
                                    }
                                },
                                simpleLink: {
                                    fn: function (e) {
                                        return {
                                            type: "twineLink",
                                            innerText: e[1] || "",
                                            passage: e[1] || "",
                                            innerMode: c
                                        }
                                    }
                                },
                                variable: {
                                    cannotFollow: ["macroFront"],
                                    fn: a("name")
                                },
                                tempVariable: {
                                    cannotFollow: ["macroFront"],
                                    fn: a("name")
                                }
                            }), {
                                hookFront: f.hookFront,
                                hookBack: f.hookBack
                            }),
                            h = s(u, n({
                                macroName: {
                                    canFollow: ["macroFront"],
                                    fn: a("name")
                                },
                                groupingFront: {
                                    fn: function () {
                                        return {
                                            isFront: !0
                                        }
                                    }
                                },
                                property: {
                                    fn: a("name"),
                                    canFollow: ["variable", "hookName", "property", "tempVariable", "colour", "itsProperty", "belongingItProperty", "macro", "grouping", "string", "datatype", "hook", "boolean", "number"]
                                },
                                possessiveOperator: {
                                    fn: o
                                },
                                itsProperty: {
                                    cannotFollow: ["text"],
                                    fn: a("name")
                                },
                                itsOperator: {
                                    cannotFollow: ["text"],
                                    fn: o
                                },
                                belongingItProperty: {
                                    cannotFollow: ["text"],
                                    fn: a("name")
                                },
                                belongingItOperator: {
                                    cannotFollow: ["text"],
                                    fn: o
                                },
                                belongingProperty: {
                                    cannotFollow: ["text"],
                                    fn: a("name")
                                },
                                belongingOperator: {
                                    cannotFollow: ["text"],
                                    fn: o
                                },
                                escapedStringChar: {
                                    fn: function () {
                                        return {
                                            type: "text"
                                        }
                                    }
                                },
                                singleStringOpener: {
                                    fn: function () {
                                        return {
                                            isFront: !0,
                                            matches: {
                                                singleStringOpener: "string"
                                            },
                                            innerMode: l
                                        }
                                    }
                                },
                                doubleStringOpener: {
                                    fn: function () {
                                        return {
                                            isFront: !0,
                                            matches: {
                                                doubleStringOpener: "string"
                                            },
                                            innerMode: l
                                        }
                                    }
                                },
                                hookName: {
                                    fn: a("name")
                                },
                                cssTime: {
                                    fn: function (e) {
                                        return {
                                            value: +e[1] * ("s" === e[2].toLowerCase() ? 1e3 : 1)
                                        }
                                    }
                                },
                                datatype: {
                                    cannotFollow: ["text"],
                                    fn: function (e) {
                                        return {
                                            name: e[0].toLowerCase()
                                        }
                                    }
                                },
                                colour: {
                                    cannotFollow: ["text"],
                                    fn: function (e) {
                                        var t = e[0].toLowerCase(),
                                            n = {
                                                red: "e61919",
                                                orange: "e68019",
                                                yellow: "e5e619",
                                                lime: "80e619",
                                                green: "19e619",
                                                cyan: "19e5e6",
                                                aqua: "19e5e6",
                                                blue: "197fe6",
                                                navy: "1919e6",
                                                purple: "7f19e6",
                                                fuchsia: "e619e5",
                                                magenta: "e619e5",
                                                white: "fff",
                                                black: "000",
                                                gray: "888",
                                                grey: "888"
                                            };
                                        return {
                                            colour: Object.hasOwnProperty.call(n, t) ? "#" + n[t] : t
                                        }
                                    }
                                },
                                number: {
                                    fn: function (e) {
                                        return {
                                            value: parseFloat(e[0])
                                        }
                                    }
                                },
                                inequality: {
                                    fn: function (e) {
                                        return {
                                            operator: e[2],
                                            negate: e[1].indexOf("not") > -1
                                        }
                                    }
                                },
                                augmentedAssign: {
                                    fn: function (e) {
                                        return {
                                            operator: e[0][0]
                                        }
                                    }
                                },
                                identifier: {
                                    fn: a("name"),
                                    cannotFollow: ["text"]
                                },
                                whitespace: {
                                    fn: o,
                                    cannotFollow: "text"
                                },
                                incorrectOperator: {
                                    fn: function (e) {
                                        var t = {
                                            "=>": ">=",
                                            "=<": "<=",
                                            gte: ">=",
                                            lte: "<=",
                                            gt: ">",
                                            lt: "<",
                                            eq: "is",
                                            isnot: "is not",
                                            neq: "is not",
                                            isa: "is a",
                                            are: "is",
                                            x: "*",
                                            "or a": "or"
                                        } [e[0].toLowerCase().replace(/\s+/g, " ")];
                                        return {
                                            type: "error",
                                            message: "Please say " + (t ? "'" + t + "'" : "something else") + " instead of '" + e[0] + "'.",
                                            explanation: "In the interests of readability, I want certain operators to be in a specific form."
                                        }
                                    },
                                    cannotFollow: "text"
                                }
                            }, ["boolean", "is", "to", "into", "where", "when", "via", "making", "each", "and", "or", "not", "isNot", "contains", "doesNotContain", "isIn", "isA", "isNotA", "isNotIn", "matches", "doesNotMatch", "bind"].reduce(function (e, t) {
                                return e[t] = {
                                    fn: o,
                                    cannotFollow: ["text"]
                                }, e
                            }, {}), ["comma", "spread", "typeSignature", "addition", "subtraction", "multiplication", "division"].reduce(function (e, t) {
                                return e[t] = {
                                    fn: o
                                }, e
                            }, {}))),
                            y = s(l, {
                                singleStringCloser: h.singleStringOpener,
                                doubleStringCloser: h.doubleStringOpener,
                                escapedStringChar: h.escapedStringChar
                            });
                        c.push.apply(c, _toConsumableArray(t(p)).concat(_toConsumableArray(t(d)), _toConsumableArray(t(f)))), u.push.apply(u, _toConsumableArray(t(d)).concat(_toConsumableArray(t(h)))), l.push.apply(l, _toConsumableArray(t(y)));
                        var m = n({}, p, f, d, h, y);
                        t(m).forEach(function (t) {
                            var n = e[t];
                            m[t].pattern = "string" != typeof n ? n : RegExp("^(?:" + n + ")", "i"), e[t + "Peek"] && (m[t].peek = e[t + "Peek"])
                        }), n(r.rules, m);
                        var g = r.modes;
                        return g.start = g.markup = c, g.macro = u, g.string = l, r
                    }(r).lex,
                    Patterns: e
                })
            }
            "object" === ("undefined" == typeof module ? "undefined" : _typeof(module)) ? (e = require("./patterns"), module.exports = r(require("./lexer"))) : "function" == typeof define && define.amd ? define("markup", ["lexer", "patterns"], function (t, n) {
                return e = n, r(t)
            }) : this && this.loaded && this.modules ? (e = this.modules.Patterns, this.modules.Markup = r(this.modules.Lexer)) : (e = this.Patterns, this.TwineMarkup = r(this.TwineLexer))
        }.call(eval("this") || ("undefined" != typeof global ? global : window)), define("utils/polyfills", [], function () {
            var e = Array.prototype;
            "function" != typeof e.includes && (e.includes = function (t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                if (!Number.isNaN(t) && Number.isFinite(n) && void 0 !== t) return e.indexOf.call(this, t, n) > -1;
                var r = Object(this),
                    a = parseInt(r.length);
                if (a <= 0) return !1;
                for (var i = n >= 0 ? n : Math.max(0, a + n); i < a;) {
                    if (Object.is(t, r[i])) return !0;
                    i += 1
                }
                return !1
            }), !window.Symbol && (window.Symbol = {
                iterator: "_es6-shim iterator_"
            })
        }), define("utils", ["jquery", "markup", "utils/polyfills"], function (e) {
            var t = String.fromCharCode,
                n = "audio,blockquote,canvas,div,h1,h2,h3,h4,h5,hr,ol,p,pre,table,ul,video,tw-align,tw-story,tw-passage,tw-sidebar,tw-columns,tw-column,tw-meter".split(","),
                r = "a,b,i,em,strong,sup,sub,abbr,acronym,s,strike,del,big,small,script,img,button,input,tw-link,tw-broken-link,tw-verbatim,tw-collapsed,tw-error,tw-colour,tw-icon".split(","),
                a = ["audio"],
                i = [function (e) {
                    return t(e) !== t(e).toLowerCase()
                }, function (e) {
                    return t(e) !== t(e).toUpperCase()
                }, function (e) {
                    return t(e).toLowerCase() !== t(e).toUpperCase()
                }].map(function (e) {
                    return "[" + Array.from(Array(57343)).map(function (e, t) {
                        return t
                    }).filter(e).map(function (e, n, r) {
                        return e === r[n - 1] + 1 && e === r[n + 1] - 1 ? "-" : t(e)
                    }).join("").replace(/\-+/g, "-") + "]"
                }),
                o = _slicedToArray(i, 3),
                s = o[0],
                c = o[1],
                u = o[2];

            function l(e) {
                return "instant" === e ? 0 : 800
            }
            var p = void 0,
                f = [],
                d = {},
                h = 0,
                y = {},
                m = 0,
                g = {},
                v = void 0;

            function b(e, t, n, r, a) {
                var i = null,
                    o = 0,
                    s = t + n;

                function c(n) {
                    1 & e[0].compareDocumentPosition(document) && (s = 0), i && (s -= n - i, o += n - i), i = n, r > 0 && h + m > 0 && (s -= r, e.css("animation-delay", (v.cssTimeUnit(e.css("animation-delay")) || 0) - r + "ms")), s <= 0 ? a(o) : requestAnimationFrame(c), s <= t && e.css("visibility", "")
                }
                s ? requestAnimationFrame(c) : c()
            }
            return e(document.documentElement).on("keydown keyup mousedown mouseup", function (e) {
                var t = e.key,
                    n = e.button,
                    r = e.type.includes("down"),
                    a = t ? d : y,
                    i = t && v.insensitiveName(t) || n;
                a[i] && !r ? t ? h = Math.max(h - 1, 0) : m = Math.max(m - 1, 0) : !a[i] && r && (t ? h += 1 : m += 1), a[i] = r
            }).on("mousemove", function (e) {
                var t = e.pageX,
                    n = e.pageY;
                g.x = t, g.y = n
            }), v = {
                lockProperty: function (e, t, n) {
                    var r = Object.create({
                        configurable: 0,
                        writable: 0
                    });
                    return n && (r.value = n), Object.defineProperty(e, t, r), e
                },
                permutations: function () {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    for (var r = t.length, a = [
                            [].concat(t)
                        ], i = Array(r).fill(0), o = 1, s = void 0, c = void 0; o < r;) i[o] < o ? (s = o % 2 && i[o], c = t[o], t[o] = t[s], t[s] = c, ++i[o], o = 1, a.push([].concat(t))) : (i[o] = 0, ++o);
                    return a
                },
                shuffled: function () {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return t.reduce(function (e, t, n) {
                        var r = Math.random() * (n + 1) | 0;
                        return r === n ? e.push(t) : (e.push(e[r]), e[r] = t), e
                    }, [])
                },
                matMul: function (e, t) {
                    for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++) r[a - 2] = arguments[a];
                    var i;
                    if (r.length > 0) return (i = v).matMul.apply(i, [v.matMul(e, t)].concat(r));
                    if (!t) return e;
                    for (var o = [], s = 0; s < e.length; s++) {
                        o[s] = [];
                        for (var c = 0; c < t[0].length; c++) {
                            for (var u = 0, l = 0; l < e[0].length; l++) u += e[s][l] * t[l][c];
                            o[s][c] = u
                        }
                    }
                    return o
                },
                cssTimeUnit: function (e) {
                    return "ms" === (e = e.toLowerCase()).slice(-2) ? +e.slice(0, -2) || 0 : "s" === e.slice(-1) && 1e3 * +e.slice(0, -1) || 0
                },
                nth: function (e) {
                    var t = (+e + "").slice(-1);
                    return e + ("1" === t ? "st" : "2" === t ? "nd" : "3" === t ? "rd" : "th")
                },
                plural: function (e, t) {
                    return e + " " + t + (e > 1 ? "s" : "")
                },
                andList: function (e) {
                    return 1 === e.length ? e[0] : e.slice(0, -1).join(", ") + " and " + e[e.length - 1]
                },
                realWhitespace: "[ \\n\\r\\f\\t\\v\\u00a0\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000]",
                anyRealLetter: "[\\dA-Za-z\\u00c0-\\u00de\\u00df-\\u00ff\\u0150\\u0170\\u0151\\u0171\\uD800-\\uDFFF]",
                anyUppercase: s,
                anyLowercase: c,
                anyCasedLetter: u,
                anyNewline: "(?:\\n|\\r|\\r\\n)",
                unescape: function (e) {
                    return e.replace(/&(?:amp|lt|gt|quot|nbsp|zwnj|#39|#96);/g, function (e) {
                        return {
                            "&amp;": "&",
                            "&gt;": ">",
                            "&lt;": "<",
                            "&quot;": '"',
                            "&#39;": "'",
                            "&nbsp;": String.fromCharCode(160),
                            "&zwnj;": String.fromCharCode(8204)
                        } [e]
                    })
                },
                escape: function (e) {
                    return e.replace(/[&><"']/g, function (e) {
                        return {
                            "&": "&amp;",
                            ">": "&gt;",
                            "<": "&lt;",
                            '"': "&quot;",
                            "'": "&#39;"
                        } [e]
                    })
                },
                insensitiveName: function (e) {
                    return (e + "").toLowerCase().replace(/-|_/g, "")
                },
                allKeysDown: function () {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return t.every(function (e) {
                        return d[e]
                    })
                },
                someKeysDown: function () {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return t.some(function (e) {
                        return d[e]
                    })
                },
                buttonsDown: function () {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return t.every(function (e) {
                        return y[e]
                    })
                },
                anyInputDown: function () {
                    return h + m > 0
                },
                mouseCoords: g,
                parentColours: function (e) {
                    for (var t = {
                            colour: null,
                            backgroundColour: null
                        }, n = /^\w+a\(.+?,\s*0\s*\)$|^transparent$/; e.length && e[0] !== document; e = e.parent()) {
                        if (!t.backgroundColour) {
                            var r = e.css("background-color");
                            r.match(n) || (t.backgroundColour = r)
                        }
                        if (!t.colour) {
                            var a = e.css("color");
                            a.match(n) || (t.colour = a)
                        }
                        if (t.colour && t.backgroundColour) return t
                    }
                    return {
                        colour: "#fff",
                        backgroundColour: "#000"
                    }
                },
                childrenProbablyInline: function (e) {
                    var t = [];
                    return [].every.call(e.findAndFilter("*"), function (e) {
                        return !!(e.hidden || /none|inline/.test(e.style.display) || /display: (none|inline)/.test(e.getAttribute("style"))) || !n.includes(e.tagName.toLowerCase()) && !/display: (?!none|inline|inherit|unset)/.test(e.getAttribute("style")) && (!!r.includes(e.tagName.toLowerCase()) || (t.push(e), !0))
                    }) && t.every(function (e) {
                        return window.getComputedStyle(e).display.includes("inline")
                    })
                },
                transitionReplace: function (t, n, r) {
                    var a = t.closest("tw-hook");
                    a.length > 0 && (t = a);
                    var i = e("<tw-transition-container>").css("position", "relative");
                    i.insertBefore(t.first());
                    var o = void 0;
                    n && (o = e("<tw-transition-container>").appendTo(i), n.appendTo(o));
                    var s = e("<tw-transition-container>").css("position", "absolute").prependTo(i);
                    t.detach().appendTo(s), v.transitionOut(s, r), n && v.transitionIn(o, r, function () {
                        o.unwrap().children().first().unwrap()
                    })
                },
                transitionOut: function (e, t, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                        a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                        i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
                        o = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : void 0;
                    0 !== e.length && (n = n || l(t), (e.length > 1 || !v.childrenProbablyInline(e) || !["tw-hook", "tw-passage", "tw-expression"].includes(e.tag())) && (e = e.wrapAll("<tw-transition-container>").parent()), o && e.css("transform-origin", o), e.attr("data-t8n", t).addClass("transition-out").css({
                        "animation-duration": n + "ms",
                        "animation-delay": r - i + "ms"
                    }), requestAnimationFrame(function () {
                        v.childrenProbablyInline(e) ? e.css("display", "inline") : e.parent().is("tw-backdrop,tw-story") || e[0].setAttribute("style", e[0].getAttribute("style") + "display:block !important;width:100%")
                    }), b(e, n, r - i, a, function () {
                        e.remove()
                    }))
                },
                transitionIn: function (t, n, r) {
                    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                        o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                        s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
                        c = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : void 0;
                    if (0 !== t.length) {
                        r = r || l(n);
                        var u = t.length > 1 || !v.childrenProbablyInline(t) || !["tw-hook", "tw-passage", "tw-expression"].includes(t.tag());
                        u && (t = t.wrapAll("<tw-transition-container>").parent()), c && t.css("transform-origin", c), t.attr("data-t8n", n).addClass("transition-in").css(Object.assign({
                            "animation-duration": r + "ms",
                            "animation-delay": i - s + "ms"
                        }, i - s ? {
                            visibility: "hidden"
                        } : {})), requestAnimationFrame(function () {
                            v.childrenProbablyInline(t) ? t.css("display", "inline") : t.parent().is("tw-backdrop,tw-story") || t[0].setAttribute("style", t[0].getAttribute("style") + "display:block !important;width:100%")
                        }), b(t, r, i - s, o, function (n) {
                            var r = 0 === t.filter(a.join(",")).length;
                            u && r ? (t.find("tw-transition-container").each(function (t, r) {
                                (r = e(r)).css("animation-delay", v.cssTimeUnit(r.css("animation-delay") || 0) - n + "ms")
                            }), t.contents().unwrap()) : t.removeClass("transition-in").removeAttr("data-t8n")
                        })
                    }
                },
                debounce: function (e) {
                    var t = void 0,
                        n = void 0,
                        r = 0,
                        a = function a() {
                            Date.now() - r > 300 ? (t = 0, e.apply(void 0, _toConsumableArray(n))) : t = requestAnimationFrame(a)
                        };
                    return function () {
                        r = Date.now(), n = arguments, t && cancelAnimationFrame(t), t = requestAnimationFrame(a)
                    }
                },
                impossible: function (e, t) {
                    window.console && console.error(e + "(): " + t)
                },
                assertMustHave: function (e, t) {
                    if (window.console)
                        for (var n = 0; n < t.length; n += 1) t[n] in e || console.error("Assertion failed: object lacks property " + t[n])
                },
                assertOnlyHas: function (e, t) {
                    if (window.console)
                        for (var n in e) t.includes(n) || console.error("Assertion failed: object had unexpected property '" + n + "'!")
                },
                onStartup: function (e) {
                    f ? f.push(e) : e()
                },
                get storyElement() {
                    return p
                }
            }, e(function () {
                p = e("tw-story"), f.forEach(function (e) {
                    return e()
                }), f = null
            }), Object.freeze(v)
        }), define("utils/naturalsort", [], function () {
            return function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : String;
                return function (n, r) {
                    var a, i, o, s, c = /(^-?[0-9]+(\.?[0-9]*)[df]?e?[0-9]?$|^0x[0-9a-f]+$|[0-9]+)/gi,
                        u = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,
                        l = /^0x[0-9a-f]+$/i,
                        p = /^0/,
                        f = t(n).trim(),
                        d = t(r).trim(),
                        h = f.replace(c, "\0$1\0").replace(/\0$/, "").replace(/^\0/, "").split("\0"),
                        y = d.replace(c, "\0$1\0").replace(/\0$/, "").replace(/^\0/, "").split("\0"),
                        m = parseInt(f.match(l)) || 1 !== h.length && f.match(u) && Date.parse(f),
                        g = parseInt(d.match(l)) || m && d.match(u) && Date.parse(d) || null;
                    if (e && window.Intl && window.Intl.Collator && (o = window.Intl.Collator(e)), g) {
                        if (m < g) return -1;
                        if (m > g) return 1
                    }
                    for (var v = 0, b = Math.max(h.length, y.length); v < b; v++) {
                        if (a = !(h[v] || "").match(p) && parseFloat(h[v]) || h[v] || 0, i = !(y[v] || "").match(p) && parseFloat(y[v]) || y[v] || 0, isNaN(a) !== isNaN(i)) return isNaN(a) ? 1 : -1;
                        if ((void 0 === a ? "undefined" : _typeof(a)) !== (void 0 === i ? "undefined" : _typeof(i))) a += "", i += "";
                        else if ("string" == typeof a && o && 0 !== (s = o.compare(a, i))) return s;
                        if (a < i) return -1;
                        if (a > i) return 1
                    }
                    return 0
                }
            }
        }), define("twinescript/compiler", ["utils"], function (e) {
            var t = e.impossible,
                n = JSON.stringify;

            function r(e, t) {
                for (var n = 0; n < e.length; n += 1)
                    if (t.includes(e[n].type)) return n;
                return NaN
            }

            function a(e, t) {
                var n = [];
                return e.length ? ([
                    ["error"],
                    ["comma"],
                    ["to", "into"],
                    ["where", "when", "via"],
                    ["making", "each"],
                    ["typeSignature"],
                    ["augmentedAssign"],
                    ["and", "or"],
                    ["is", "isNot"],
                    ["contains", "doesNotContain", "isIn", "isNotIn"],
                    ["isA", "isNotA", "matches", "doesNotMatch"],
                    ["inequality"],
                    ["addition", "subtraction"],
                    ["multiplication", "division"], {
                        rightAssociative: ["spread", "bind"]
                    }, {
                        rightAssociative: ["not", "positive", "negative"]
                    }, {
                        rightAssociative: ["belongingProperty", "belongingItProperty", "belongingOperator", "belongingItOperator"]
                    },
                    ["property", "itsProperty", "possessiveOperator", "itsOperator"],
                    ["twineLink"],
                    ["macro"],
                    ["grouping"]
                ]["most" === t ? "reverse" : "valueOf"]().some(function (t) {
                    var a = void 0;
                    if (a = t.rightAssociative ? r(e, t.rightAssociative) : function (e, t) {
                            return e.length - 1 - r.apply(void 0, [
                                [].concat(_toConsumableArray(e)).reverse(), t
                            ])
                        }(e, t), !Number.isNaN(a) && a > -1) return n = [e[a], a], !0
                }), n) : n
            }

            function i(e) {
                if ("inequality" === e.type) {
                    var t = e.operator;
                    return e.negate ? {
                        ">": "<=",
                        "<": ">=",
                        ">=": "<",
                        "<=": ">"
                    } [t] : t
                }
                return e.type
            }

            function o(e) {
                var t = i(e);
                return {
                    ">": "<",
                    "<": ">",
                    ">=": "<=",
                    "<=": ">=",
                    contains: "isIn",
                    doesNotContain: "isNotIn",
                    isIn: "contains",
                    isA: "typifies",
                    typifies: "isA",
                    isNotA: "untypifies",
                    untypifies: "isNotA"
                } [t] || t
            }
            var s = ["inequality", "is", "isNot", "isIn", "contains", "doesNotContain", "isNotIn", "isA", "typifies", "isNotA", "untypifies", "matches", "doesNotMatch"];

            function c(e, t, r) {
                return "TwineError.create(" + n(e) + "," + n(t) + "," + n(r) + ")"
            }
            return function e(r) {
                var u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    l = u.isVarRef,
                    p = u.isTypedVar,
                    f = u.whitespaceError,
                    d = u.elidedComparison,
                    h = u.testNeedsRight,
                    y = "Operations.Identifiers.it";
                if (!(r = [].concat(r)).length) return l && f ? c("operation", f) : "";
                var m = void 0;
                if (1 === r.length) {
                    var g = (m = r[0]).type;
                    if ("identifier" === g) return l ? "VarRef.create(Operations.Identifiers," + n(m.text) + ")" : "Operations.Identifiers." + m.text.toLowerCase() + " ";
                    if ("variable" === g || "tempVariable" === g) {
                        var v = "VarRef.create(" + ("tempVariable" === g ? "section.stackTop.tempV" : "State.v") + "ariables," + n(m.name) + ")" + (l || p ? "" : ".get()");
                        return p ? "TypedVar.create(Datatype.create('any')," + v + ")" : v
                    }
                    if ("hookName" === g) return "HookSet.create({type:'name', data:'" + m.name + "'}) ";
                    if ("string" === g) return m.text.replace(/(.?)\n/g, function (e, t) {
                        return ("\\" === t ? "\\\\" : "\n" === t ? "\\n" : t) + "\\n"
                    });
                    if ("hook" === g) return "CodeHook.create(" + n(m.text.slice(1, -1)) + "," + n(m.html || "") + ")";
                    if ("colour" === g) return "Colour.create(" + n(m.colour) + ")";
                    if ("datatype" === g) return "Datatype.create(" + n(m.name) + ")";
                    if ("blockedValue" === g) return "section.blockedValue()";
                    if ("root" === g) return e(m.children);
                    if ("whitespace" === g && l && f) return c("operation", f)
                }
                var b, w = a(r, "least"),
                    T = _slicedToArray(w, 2);
                m = T[0], b = T[1];
                var S = (m || {}).type,
                    x = r.slice(0, b),
                    k = r.slice(b + 1),
                    O = function (e, t) {
                        return {
                            isVarRef: !0,
                            isTypedVar: t,
                            whitespaceError: "I need usable data to be on the " + e + ' of "' + m.text + '".'
                        }
                    },
                    j = "must",
                    A = "mustn't",
                    C = "may",
                    E = void 0,
                    _ = void 0,
                    N = "",
                    P = "",
                    I = "",
                    M = j,
                    D = j,
                    R = !1;
                if (S)
                    if ("comma" === S) P = ",", D = C;
                    else if ("spread" === S) N = "Operations.makeSpreader(", I = ")", M = C;
                else if ("bind" === S) N = "VarBind.create(", _ = e(k, O("right")), I = (m.text.startsWith("2") ? ",'two way'" : "") + ")", M = A;
                else if ("to" === S) N = "Operations.makeAssignmentRequest(Operations.setIt(", _ = e(k, O("right")), P = "),", E = e(x, O("left", !0)), I = ",'to')";
                else if ("into" === S) N = "Operations.makeAssignmentRequest(", _ = e(x, O("left")), P = ",Operations.setIt(", E = e(k, O("right", !0)), I = "),'into')";
                else if ("typeSignature" === S) N = "TypedVar.create(", P = ",", _ = e(k, O("right")), I = ")", p = !1;
                else if ("where" === S || "when" === S || "via" === S) N = "Lambda.create(", E = e(x, {
                    isVarRef: !0,
                    whitespaceError: null
                }).trim() || "undefined", P = "," + n(m.type) + ",", _ = n(e(k)), I = "," + n(r.map(function (e) {
                    return e.text
                }).join("")) + ")";
                else if ("making" === S || "each" === S) "each" === S ? (N = "Lambda.create(", _ = e(k, O("right")).trim(), I = ",'where','true'," + n(r.map(function (e) {
                    return e.text
                }).join("")) + ")", M = C) : (N = "Lambda.create(", E = e(x, {
                    isVarRef: !0,
                    whitespaceError: null
                }).trim() || "undefined", P = "," + n(m.type) + ",", _ = e(k, O("right")).trim(), I = "," + n(r.map(function (e) {
                    return e.text
                }).join("")) + ")");
                else if ("augmentedAssign" === S) N = "Operations.makeAssignmentRequest(", E = e(x, O("left")), P = ",", _ = "Operations[" + n(m.operator) + "](" + e(x) + "," + e(k) + ")", I = "," + n(m.operator) + ")";
                else if ("and" === S || "or" === S) {
                    var L = function e(t) {
                            var n = a(t, "least"),
                                r = _slicedToArray(n, 2),
                                i = r[0],
                                o = r[1];
                            if (i) return s.includes(i.type) ? i : ["and", "or"].includes(i.type) ? e(t.slice(0, o)) || e(t.slice(o + 1)) : void 0
                        },
                        F = L(x),
                        q = L(k),
                        V = c("operation", 'This use of "is not" and "' + S + '" is grammatically ambiguous.', 'Maybe try rewriting this as "__ is not __ ' + S + ' __ is not __"');
                    if (N = "Operations." + S + "(", P = ",", I = ")", d === m.type) N = I = "", E = e(x, {
                        isVarRef: l,
                        elidedComparison: d
                    }).trim(), _ = e(k, {
                        elidedComparison: d
                    }).trim();
                    else if (F && !q) {
                        var H = F,
                            z = n(i(H));
                        if ("isNot" === H.type || "isNotA" === H.type || "untypifies" === H.type) return V;
                        _ = "Operations.elidedComparisonOperator(" + n(m.type) + "," + z + "," + e(k, {
                            elidedComparison: S
                        }) + ")"
                    } else if (!F && q) {
                        var W = q,
                            $ = r.indexOf(W),
                            B = n(o(W));
                        if ("isNot" === W.type || "isNotA" === W.type || "untypifies" === W.type) return V;
                        _ = "Operations.elidedComparisonOperator(" + n(m.type) + "," + B + "," + e(x, {
                            elidedComparison: S
                        }) + ")", E = e([].concat(_toConsumableArray(r.slice($ + 1)), [Object.assign(Object.create(W), _defineProperty({}, "inequality" === W.type ? "operator" : "type", o(W)))], _toConsumableArray(r.slice(b + 1, $))))
                    }
                    l = !1
                } else if (s.includes(S)) R = !0, l = !1, N = "Operations[" + n(i(m)) + "](", P = ",", I = ")";
                else if ("addition" === S || "subtraction" === S) {
                    if (!e(x, {
                            testNeedsRight: !0
                        }).trim()) return m.type = {
                        addition: "positive",
                        subtraction: "negative"
                    } [S], e(r, {
                        isVarRef: l,
                        whitespaceError: f,
                        elidedComparison: d,
                        testNeedsRight: h
                    });
                    l = !1, N = "Operations[" + n(m.text) + "](", P = ",", I = ")"
                } else if ("multiplication" === S || "division" === S) l = !1, N = "Operations[" + n(m.text) + "](", P = ",", I = ")";
                else if ("positive" === S || "negative" === S) l = !1, E = "negative" === S ? "-1" : "1", N = "Operations['*'](", P = ",", I = ")";
                else if ("not" === S) N = "Operations.not(", _ = e(k), I = ")", M = C;
                else if ("belongingProperty" === S) N = "VarRef.create(", _ = e(k, O("right")), I = "," + n(m.name) + ")" + (l ? "" : ".get()"), M = C;
                else if ("belongingOperator" === S || "belongingItOperator" === S) E = m.type.includes("It") ? y : e(k, O("right")), _ = e(x), N = "VarRef.create(", P = ",{computed:true,value:", I = "})" + (l ? "" : ".get()");
                else if ("property" === S) N = "VarRef.create(", E = e(x, O("left")), I = "," + n(m.name) + ")" + (l ? "" : ".get()"), D = C;
                else if ("itsProperty" === S || "belongingItProperty" === S) N = "VarRef.create(", E = y, I = "," + n(m.name) + ")" + (l ? "" : ".get()"), M = D = C;
                else if ("possessiveOperator" === S || "itsOperator" === S) m.type.includes("it") && (E = y, M = C), N = "VarRef.create(", P = ",{computed:true,value:", I = "})" + (l ? "" : ".get()"), p = !1;
                else if ("twineLink" === S) P = 'Macros.run("link-goto", [section,' + n(m.innerText) + "," + n(m.passage) + "])", M = D = A;
                else if ("macro" === S) {
                    var U = m.children[0],
                        G = "$" === U.text[0] || "_" === U.text[0];
                    "macroName" === U.type || G || t("Compiler.compile", "macro token had no macroName child token"), P = "Macros.run" + (G ? "Custom" : "") + "(" + (G ? "VarRef.create(" + ("_" === U.text[0] ? "section.stackTop.tempV" : "State.v") + "ariables," + n(U.text.trim().slice(1, -1)) + ").get()" : '"' + m.name + '"') + ", [section," + e(m.children.slice(1), {
                        isTypedVar: p
                    }) + "])", M = D = A
                } else if ("grouping" === S) P = "(" + e(m.children, {
                    isVarRef: l
                }) + ")", M = D = A;
                else if ("error" === S) return c("syntax", n(m.message), m.explanation ? n(m.explanation) : "");
                return b > -1 ? (E = (E || e(x, {
                    isVarRef: l,
                    isTypedVar: p
                })).trim(), _ = (_ || e(k)).trim(), R && !E && (E = y), M === j && !E || D === j && !_ ? h && D && !_ ? "" : c("operation", "I need usable code to be " + (M === j ? "left " : "") + (M === j && D === j ? "and " : "") + (D === j ? "right " : "") + "of " + m.text + ".") : M === A && E || D === A && _ ? c("operation", "There can't be a " + (E && M === A && _ && D === A ? E + " or " + _ : E && M === A ? E : _) + " to the " + (M === A ? "left " : "") + (M === A && D === A ? "or " : "") + (D === A ? "right " : "") + "of " + m.text + ".", "There could be a comma missing between them, or there could be a ") : N + E + P + _ + I) : 1 === r.length ? (("value" in r[0] ? r[0].value : r[0].text) + "").trim() || " " : r.reduce(function (t, n) {
                    return t + e(n, {
                        isVarRef: l,
                        isTypedVar: p
                    })
                }, "")
            }
        }), define("internaltypes/twineerror", ["jquery", "utils"], function (e, t) {
            var n = t.impossible,
                r = t.escape;
            e(document.documentElement).on("click", "tw-folddown", function (t) {
                var n = t.target;
                for ((n = e(n)).toggleClass("open"); n && !n.next().length;) n = n.parent();
                n && n.next().toggle()
            });
            var a = {
                    syntax: "The markup seems to contain a mistake.",
                    saving: "I tried to save or load the game, but I couldn't do it.",
                    operation: "I tried to perform an operation on some data, but the data's type was incorrect.",
                    macrocall: "I tried to use a macro, but its call wasn't written correctly.",
                    datatype: "I tried to use a macro, but was given the wrong type of data to it.",
                    custommacro: "I tried to use a custom macro, but its code hook had a mistake in it.",
                    infinite: "I almost ended up doing the same thing over and over, forever.",
                    property: "I tried to access a value in a string/array/datamap, but I couldn't find it.",
                    unimplemented: "I currently don't have this particular feature. I'm sorry.",
                    javascript: "This error message was reported by your browser's Javascript engine. I don't understand it either, but it usually means that an expression was badly written.",
                    propagated: "Click the 'Open' button to see the code hook as it was executed.",
                    user: "This is a custom error created by (error:). It usually means you used a custom macro incorrectly.",
                    assertion: "This command exists to provide a helpful error if a certain important condition wasn't true."
                },
                i = {
                    error: [],
                    warning: []
                },
                o = {
                    create: function (e, t, r, i) {
                        return t && "string" == typeof t || n("TwineError.create", "has a bad message string"), r || e in a || n("TwineError.create", "no error explanation given"), "user" !== e && (t = t[0].toUpperCase() + t.slice(1)), Object.assign(Object.create(this), {
                            type: e,
                            message: t,
                            explanation: r,
                            source: void 0,
                            innerDOM: i,
                            appendTitleText: !1
                        })
                    },
                    fromError: function (e) {
                        return o.create("javascript", "\u2615 " + e.message)
                    },
                    containsError: function () {
                        for (var e = 0; e < arguments.length; e += 1) {
                            var t = arguments.length <= e ? void 0 : arguments[e];
                            if (t instanceof Error) return t;
                            if (o.isPrototypeOf(t)) return t;
                            if (Array.isArray(t)) {
                                var n = o.containsError.apply(o, _toConsumableArray(t));
                                if (n) return n
                            }
                        }
                        return !1
                    },
                    createWarning: function (e, t) {
                        return Object.assign(this.create(e, t), {
                            warning: !0
                        })
                    },
                    render: function (n) {
                        var o = this;
                        n = n || this.source || "";
                        var s = e("<tw-error class='" + ("javascript" === this.type ? "javascript " : "") + (this.warning ? "warning" : "error") + "' title='" + r(n) + "'>" + r(this.message + (this.appendTitleText ? " " + n : "")) + "</tw-error>"),
                            c = e("<tw-error-explanation>").text(this.explanation || a[this.type]).hide(),
                            u = e("<tw-folddown tabindex=0>");
                        return this.innerDOM && e("<tw-open-button>").on("click", function () {
                            var n = e("<tw-backdrop><tw-dialog></tw-backdrop>");
                            n.find("tw-dialog").prepend(o.innerDOM, e("<tw-link tabindex=0>OK</tw-link>").on("click", function () {
                                o.innerDOM.detach(), n.remove()
                            }).wrap("<tw-dialog-links>").parent()), t.storyElement.prepend(n)
                        }).appendTo(s), s.append(u).append(c), s.data("TwineError", this), i.error.forEach(function (e) {
                            return e(o, n)
                        }), s
                    },
                    on: function (e, t) {
                        if (e in i) return "function" != typeof t || i[e].includes(t) || i[e].push(t), o;
                        n("TwineError.on", "invalid event name")
                    }
                };
            return o
        }), define("renderer", ["utils", "markup", "twinescript/compiler", "internaltypes/twineerror"], function (e, t, n, r) {
            var a = e.escape,
                i = e.impossible,
                o = e.insensitiveName,
                s = void 0;

            function c(e, t) {
                return "<" + t + ">" + e + "</" + t + ">"
            }

            function u(e, t) {
                var n = s.render(e.children);
                return n && c(n, t)
            }
            var l, p, f = "text-align: center; max-width:50%; ",
                d = RegExp(t.Patterns.macroFront + t.Patterns.macroName, "ig");
            return s = {
                options: {
                    debug: !1,
                    blockerMacros: [],
                    metadataMacros: []
                },
                preprocess: function (e) {
                    var a = s.options.metadataMacros;
                    if (!(e.match(d) || []).some(function (e) {
                            return a.some(function (t) {
                                return o(e.slice(1, -1)) === t
                            })
                        })) return {};
                    var i = !1,
                        c = {};
                    return t.lex(e).children.forEach(function e(t) {
                        if ("macro" === t.type) {
                            if (a.some(function (e) {
                                    return t.name === e
                                })) {
                                if (r.isPrototypeOf(c[t.name])) return;
                                if (i) return void(c[t.name] = r.create("syntax", "The (" + t.name + ":) macro can't appear after non-metadata macros."));
                                if (c[t.name]) return void(c[t.name] = r.create("syntax", "There is more than one (" + t.name + ":) macro."));
                                c[t.name] = {
                                    code: n(t),
                                    source: t.text
                                }
                            } else i = !0;
                            t.children.forEach(function e(t) {
                                "macro" === t.type && a.some(function (e) {
                                    return t.name === e
                                }) ? c[t.name] = r.create("syntax", "The (" + t.name + ":) macro can't be inside another macro.") : t.children.forEach(e)
                            })
                        } else t.children.forEach(e)
                    }), c
                },
                exec: (l = void 0, p = void 0, function (e) {
                    return "string" != typeof e ? (i("Renderer.exec", "source was not a string, but " + (void 0 === e ? "undefined" : _typeof(e))), "") : e === l ? p : (l = e, p = s.render(t.lex(e).children))
                }),
                render: function e(i) {
                    var l = "",
                        p = [];
                    if (!i) return l;
                    for (var d = i.length, h = 0; h < d; h += 1) {
                        var y = i[h];
                        switch (y.type) {
                            case "error":
                                l += r.create("syntax", y.message, y.explanation).render(a(y.text))[0].outerHTML;
                                break;
                            case "numbered":
                            case "bulleted":
                                var m = "numbered" === y.type ? "ol" : "ul";
                                l += "<" + m + ">";
                                for (var g = 1; h < d && i[h];) {
                                    if ("br" === i[h].type) {
                                        if (l += "</li>", !i[h + 1] || i[h + 1].type !== y.type) break
                                    } else i[h].type === y.type ? (l += ("<" + m + ">").repeat(Math.max(0, i[h].depth - g)), l += ("</" + m + ">").repeat(Math.max(0, g - i[h].depth)), l += "<li>", g = i[h].depth) : l += e([i[h]]);
                                    h += 1
                                }
                                l += ("</" + m + ">").repeat(g + 1);
                                break;
                            case "align":
                                for (; y && "align" === y.type;) {
                                    var v = y.align,
                                        b = h += 1;
                                    if ("left" === v) {
                                        h -= 1;
                                        break
                                    }
                                    for (; h < d && i[h] && "align" !== i[h].type;) h += 1;
                                    var w = e(i.slice(b, h)),
                                        T = "";
                                    switch (v) {
                                        case "center":
                                            T += f + "margin-left: auto; margin-right: auto;";
                                            break;
                                        case "justify":
                                        case "right":
                                            T += "text-align: " + v + ";";
                                            break;
                                        default:
                                            +v && (T += f + "margin-left: " + v + "%;")
                                    }
                                    l += "<tw-align " + (T ? 'style="' + T + '"' : "") + ">" + w + "</tw-align>\n", y = i[h]
                                }
                                break;
                            case "column":
                                for (var S = []; y && "column" === y.type;) {
                                    var x = y.column,
                                        k = h += 1;
                                    if ("none" === x) {
                                        h -= 1;
                                        break
                                    }
                                    for (; h < d && i[h] && "column" !== i[h].type;) h += 1;
                                    S.push({
                                        text: y.text,
                                        type: x,
                                        body: e(i.slice(k, h)),
                                        width: y.width,
                                        marginLeft: y.marginLeft,
                                        marginRight: y.marginRight
                                    }), y = i[h]
                                }
                                S.length && function () {
                                    var e = S.reduce(function (e, t) {
                                        return e + t.width
                                    }, 0);
                                    l += "<tw-columns>" + S.map(function (t) {
                                        return "<tw-column type=" + t.type + '  style="width:' + t.width / e * 100 + "%; margin-left: " + t.marginLeft + "em; margin-right: " + t.marginRight + 'em;">' + t.body + "</tw-column>\n"
                                    }).join("") + "</tw-columns>"
                                }();
                                break;
                            case "heading":
                                for (l += "<h" + y.depth + ">"; ++h < d && i[h];) {
                                    if ("br" === i[h].type) {
                                        l += "</h" + y.depth + ">";
                                        break
                                    }
                                    l += e([i[h]])
                                }
                                break;
                            case "br":
                                if (!p.length || /td|th/.test(p[0])) {
                                    l += "<br>";
                                    for (var O = i[h + 1]; O && ("br" === O.type || "tag" === O.type && /^<br\b/i.test(O.text));) l += "<tw-consecutive-br" + ("tag" === O.type ? " data-raw" : "") + "></tw-consecutive-br>", O = i[(h += 1) + 1]
                                }
                                break;
                            case "hr":
                                l += "<hr>";
                                break;
                            case "escapedLine":
                            case "comment":
                                break;
                            case "inlineUrl":
                                l += '<a class="link" href="' + a(y.text) + '">' + y.text + "</a>";
                                break;
                            case "scriptStyleTag":
                            case "tag":
                                var j = y.text.toLowerCase();
                                /^<\/?(?:table|thead|tbody|tr|tfoot|td|th)\b/.test(j) && p[y.text.startsWith("</") ? "shift" : "unshift"](j), l += y.text.startsWith("</") ? y.text : y.text.replace(/>$/, " data-raw>");
                                break;
                            case "sub":
                            case "sup":
                            case "strong":
                            case "em":
                                l += u(y, y.type);
                                break;
                            case "strike":
                                l += u(y, "s");
                                break;
                            case "bold":
                                l += u(y, "b");
                                break;
                            case "italic":
                                l += u(y, "i");
                                break;
                            case "twineLink":
                                var A = _slicedToArray(t.lex("(link-goto:" + JSON.stringify(y.innerText) + "," + JSON.stringify(y.passage) + ")").children, 1)[0];
                                l += '<tw-expression type="macro" name="link-goto"' + (s.options.debug ? ' title="' + a(y.text) + '"' : "") + ' js="' + a(n(A)) + '"></tw-expression>';
                                break;
                            case "hook":
                                l += "<tw-hook " + (y.hidden ? "hidden " : "") + (y.name ? 'name="' + o(y.name) + '"' : "") + (s.options.debug && y.name ? ' title="Hook: ?' + y.name + '"' : "") + ' source="' + a(y.innerText) + '"></tw-hook>';
                                break;
                            case "unclosedHook":
                                return l += "<tw-hook " + (y.hidden ? "hidden " : "") + (y.name ? 'name="' + o(y.name) + '"' : "") + 'source="' + a(i.slice(h + 1, d).map(function (e) {
                                    return e.text
                                }).join("")) + '"></tw-hook>';
                            case "verbatim":
                                l += c(a(y.innerText).replace(/\n/g, "<br>"), "tw-verbatim");
                                break;
                            case "collapsed":
                                l += u(y, "tw-collapsed");
                                break;
                            case "unclosedCollapsed":
                                return l += "<tw-collapsed>" + e(i.slice(h + 1, d)) + "</tw-collapsed>";
                            case "variable":
                            case "tempVariable":
                            case "macro":
                                var C = function () {
                                    var t = [],
                                        i = [];
                                    if ("macro" === y.type && function n(r) {
                                            "string" !== r.type && "hook" !== r.type && r.children.every(n);
                                            var a = r.firstChild();
                                            if ("macro" === r.type && a && "macroName" === a.type && s.options.blockerMacros.includes(o(a.text.slice(0, -1)))) t.push(r);
                                            else if ("hook" === r.type) {
                                                if (!r.everyLeaf(function (e) {
                                                        return "error" !== e.type || (i.push(e), !1)
                                                    })) return !1;
                                                r.html = e(r.children)
                                            }
                                            return !0
                                        }(y), i.length) return {
                                        v: r.create("syntax", "This code hook's markup contained " + i.length + " error" + (i.length ? "s" : "") + ":<br>\u2014" + i.map(function (e) {
                                            return e.message
                                        }).join("<br>\u2014")).render(a(y.text))[0].outerHTML
                                    };
                                    var c = t.length && t.map(function (e) {
                                        var t = n(e);
                                        return e.type = "blockedValue", t
                                    });
                                    l += '<tw-expression type="' + y.type + '" name="' + a(y.name || y.text) + '"' + (s.options.debug ? ' title="' + a(y.text) + '"' : "") + (t.length ? ' blockers="' + a(JSON.stringify(c)) + '"' : "") + ' js="' + a(n(y)) + '"></tw-expression>', t.forEach(function (e) {
                                        return e.type = "macro"
                                    })
                                }();
                                if ("object" === (void 0 === C ? "undefined" : _typeof(C))) return C.v;
                                break;
                            default:
                                l += y.children && y.children.length ? e(y.children) : y.text
                        }
                    }
                    return l
                }
            }, Object.freeze(s)
        }), define("passages", ["jquery", "utils/naturalsort", "utils", "markup", "renderer", "internaltypes/twineerror"], function (e, t, n, r, a, i) {
            var o = n.unescape,
                s = n.onStartup,
                c = Object.assign;

            function u(e) {
                var t = o(e.html()),
                    n = a.preprocess(t);
                return c(new Map([
                    ["source", t],
                    ["tags", (e.attr("tags") || "").split(/\s/) || []],
                    ["name", e.attr("name")]
                ]), {
                    TwineScript_TypeName: "a passage datamap",
                    TwineScript_ObjectName: "a passage datamap",
                    metadata: n
                })
            }
            var l = c(new Map, {
                TwineScript_ObjectName: "the Passages datamap",
                getTagged: function (e) {
                    var n = t("en", function (e) {
                            return e.get("name")
                        }),
                        r = [];
                    return this.forEach(function (t) {
                        var n = t instanceof Map && t.get("tags");
                        Array.isArray(n) && n.includes(e) && r.push(t)
                    }), r.sort(n)
                },
                getStorylets: function (e, n) {
                    var r = n ? n.filter(e, [].concat(_toConsumableArray(l.values()))) : [].concat(_toConsumableArray(l.values()));
                    if (i.containsError(r)) return r;
                    var a = [],
                        o = -1 / 0,
                        s = r.reduce(function (t, n) {
                            if (t) return t;
                            var r = n.get("storylet");
                            if (r) {
                                var s = e.speculate(r, n.get("name"), "a (storylet:) macro");
                                if (i.containsError(s)) return s.message = "There's an error in the storylet passage \"" + n.get("name") + '":\n' + s.message, s.source = r.TwineScript_ToSource(), s;
                                if (s) {
                                    var c = n.get("exclusivity");
                                    o = Math.max(o, "number" == typeof c ? c : 0), a.push(n)
                                }
                            }
                        }, void 0);
                    if (s) return s;
                    var c = t("en");
                    return a.filter(function (e) {
                        var t = e.get("exclusivity");
                        return (t = "number" == typeof t ? t : 0) === o
                    }).sort(function (e, t) {
                        var n = e.get("urgency"),
                            r = t.get("urgency");
                        return (n = "number" == typeof n ? n : 0) !== (r = "number" == typeof r ? r : 0) ? r - n : c(e.get("name"), t.get("name"))
                    })
                },
                allStorylets: function () {
                    return [].concat(_toConsumableArray(l.values())).filter(function (e) {
                        return e.get("storylet")
                    })
                },
                loadMetadata: function (e) {
                    var t = [];
                    return l.forEach(function (n) {
                        n.metadata && Object.keys(n.metadata).forEach(function (r) {
                            if (i.containsError(n.metadata[r])) t.push(n.metadata[r]);
                            else {
                                var a = n.metadata[r],
                                    o = a.code,
                                    s = a.source,
                                    c = e.speculate(o, n.get("name"), "a (" + r + ":) macro"),
                                    u = 'In "' + n.get("name") + '":\n';
                                if (i.containsError(c)) return c.message = u + c.message, c.source = s, void t.push(c);
                                c instanceof Map ? c.forEach(function (e, t) {
                                    return l(t, e)
                                }) : l(r, c)
                            }

                            function l(e, r) {
                                n.has(e) ? t.push(i.create("syntax", "This passage's datamap already has a '" + JSON.stringify(e) + "' data name.")) : n.set(e, r)
                            }
                        }), n.metadata = void 0
                    }), t
                },
                hasValid: function (e) {
                    var t = this.get(e);
                    return t && t instanceof Map && t.has("source")
                },
                create: u
            });
            return s(function () {
                Array.from(e("tw-storydata > tw-passagedata")).forEach(function (t) {
                    t = e(t), l.set(t.attr("name"), new u(t))
                })
            }), l
        }), define("utils/operationutils", ["utils/naturalsort", "utils", "internaltypes/twineerror", "patterns"], function (e, t, n, r) {
            var a = t.impossible,
                i = t.nth,
                o = t.insensitiveName,
                s = t.permutations,
                c = r.validPropertyName,
                u = "object",
                l = "boolean",
                p = "string",
                f = "number",
                d = "function";

            function h(e) {
                return !!e && ((void 0 === e ? "undefined" : _typeof(e)) === u || (void 0 === e ? "undefined" : _typeof(e)) === d)
            }

            function y(e) {
                return e && Object.getPrototypeOf(e) === Object.prototype
            }

            function m(e) {
                return Array.isArray(e) ? "array" : e instanceof Map ? "datamap" : e instanceof Set ? "dataset" : (void 0 === e ? "undefined" : _typeof(e)) === p ? p : e && (void 0 === e ? "undefined" : _typeof(e)) === u ? u : ""
            }

            function g(e) {
                if (!h(e)) return e;
                if (_typeof(e.TwineScript_Clone) === d) return e.TwineScript_Clone();
                if (Array.isArray(e)) return [].concat(_toConsumableArray(e));
                if (e instanceof Map) return new Map(e);
                if (e instanceof Set) return new Set(e);
                if ((void 0 === e ? "undefined" : _typeof(e)) === d) return Object.assign(e.bind(), e);
                switch (Object.getPrototypeOf(e)) {
                    case Object.prototype:
                        return Object.assign({}, e);
                    case null:
                        return Object.assign(Object.create(null), e)
                }
                return a("OperationUtils.clone", "The value " + e + " cannot be cloned!"), e
            }

            function v(e) {
                return h(e) && "TwineScript_ObjectName" in e ? e.TwineScript_ObjectName : Array.isArray(e) ? "an array" : e instanceof Map ? "a datamap" : e instanceof Set ? "a dataset" : (void 0 === e ? "undefined" : _typeof(e)) === l ? "the boolean value '" + e + "'" : (void 0 === e ? "undefined" : _typeof(e)) === p || (void 0 === e ? "undefined" : _typeof(e)) === f ? "the " + (void 0 === e ? "undefined" : _typeof(e)) + " " + JSON.stringify(e) : void 0 === e ? "an empty variable" : "...whatever this is"
            }

            function b(e, t) {
                return (void 0 === e ? "undefined" : _typeof(e)) !== u && (void 0 === t ? "undefined" : _typeof(t)) !== u ? e === t : Array.isArray(e) && Array.isArray(t) ? e.length === t.length && e.every(function (e, n) {
                    return b(t[n], e)
                }) : e instanceof Map && t instanceof Map ? b(Array.from(e.entries()).sort(), Array.from(t.entries()).sort()) : e instanceof Set && t instanceof Set ? b([].concat(_toConsumableArray(e)), [].concat(_toConsumableArray(t))) : e && _typeof(e.TwineScript_is) === d ? e.TwineScript_is(t) : e && (void 0 === e ? "undefined" : _typeof(e)) === u && t && (void 0 === t ? "undefined" : _typeof(t)) === u && y(e) && y(t) ? b(Object.getOwnPropertyNames(e).map(function (t) {
                    return [t, e[t]]
                }), Object.getOwnPropertyNames(t).map(function (e) {
                    return [e, t[e]]
                })) : Object.is(e, t)
            }
            return Object.freeze({
                isObject: h,
                isPureObject: y,
                singleTypeCheck: function e(t, n) {
                    if (null === n) return void 0 === t;
                    var r = void 0 === t ? "undefined" : _typeof(t);
                    if ((void 0 === n ? "undefined" : _typeof(n)) !== d && n.pattern) {
                        if ("optional" === n.pattern || "zero or more" === n.pattern) return void 0 === t || e(t, n.innerType);
                        if ("either" === n.pattern) return n.innerType.some(function (n) {
                            return e(t, n)
                        });
                        if ("lambda" === n.pattern && e(t, n.innerType)) return n.clauses.includes("where") === "where" in t && n.clauses.includes("making") === "making" in t && n.clauses.includes("via") === "via" in t && n.clauses.includes("with") === "with" in t;
                        if ("insensitive set" === n.pattern) return n.innerType.includes(o(t));
                        if ("range" === n.pattern) return n.range(t);
                        if ("wrapped" === n.pattern) return e(t, n.innerType)
                    }
                    return (void 0 === n || void 0 !== t) && ("anything" === n.TwineScript_TypeName && void 0 !== t && !t.TwineScript_Unstorable || "everything" === n.TwineScript_TypeName && void 0 !== t || (n === String ? r === p : n === Boolean ? r === l : n === parseInt ? r === f && !Number.isNaN(t) && !(t + "").includes(".") : n === Number ? r === f && !Number.isNaN(t) : n === Array ? Array.isArray(t) : n === Map || n === Set ? t instanceof n : Object.isPrototypeOf.call(n, t)))
                },
                isValidDatamapName: function (e, t) {
                    if (e instanceof Map || a("isValidDatamapName", "called with non-Map"), n.containsError(t)) return t;
                    if ((void 0 === t ? "undefined" : _typeof(t)) !== p && (void 0 === t ? "undefined" : _typeof(t)) !== f) return n.create("property", "Only strings and numbers can be used as data names for " + v(e) + ", not " + v(t) + ".");
                    var r = (void 0 === t ? "undefined" : _typeof(t)) === p ? +t : "" + t;
                    return !(!Number.isNaN(r) && e.has(r)) || n.create("property", "You mustn't use both " + v(t) + " and " + v(r) + " as data names in the same datamap.")
                },
                collectionType: m,
                isSequential: function (e) {
                    return (void 0 === e ? "undefined" : _typeof(e)) === p || Array.isArray(e) || _typeof(e.hooks) === d
                },
                unstorableValue: function e(t) {
                    return t && t.TwineScript_Unstorable && t || Array.isArray(t) && t.find(e) || t instanceof Map && [].concat(_toConsumableArray(t.values())).find(e) || t instanceof Set && [].concat(_toConsumableArray(t)).find(e)
                },
                clone: g,
                objectName: v,
                typeName: function e(t) {
                    var n = y(t);
                    if (n && t.innerType) return t.typeName ? t.typeName : "insensitive set" === t.pattern ? "a case-insensitive string name" : "either" === t.pattern ? (Array.isArray(t.innerType) || a("typeName", '"either" pattern had non-array inner type'), t.innerType.map(e).join(" or ")) : "optional" === t.pattern ? "(optional) " + e(t.innerType) : e(t.innerType);
                    if (n && t.pattern && "range" === t.pattern) {
                        if (t.name) return t.name;
                        var r = t.min,
                            i = t.max;
                        return "a" + (r > 0 ? " positive" : "") + (t.integer ? " whole" : "") + " number" + (0 === r ? " between 0 and " + i : i < 1 / 0 ? " up to " + i : "")
                    }
                    return t === String || t === Number || t === Boolean ? "a " + _typeof(t()) : t === parseInt ? "a whole number" : t === Map ? "a datamap" : t === Set ? "a dataset" : t === Array ? "an array" : h(t) && "TwineScript_TypeName" in t ? t.TwineScript_TypeName : v(t)
                },
                typeID: function (e) {
                    var t = void 0 === e ? "undefined" : _typeof(e);
                    return [l, p, f].includes(t) ? t : Array.isArray(e) ? "array" : e instanceof Map ? "datamap" : e instanceof Set ? "dataset" : e.TwineScript_TypeID || ""
                },
                toSource: function t(r, o) {
                    var s = n.containsError(r);
                    return s && a("toSource", "received a TwineError: " + s.message), _typeof(r.TwineScript_ToSource) === d ? r.TwineScript_ToSource() : y(r) && "first" in r && "last" in r ? (r.first < 0 ? (-1 !== r.first ? i(-r.first) : "") + "last" : i(r.first + 1)) + "to" + (r.last < 0 ? (-1 !== r.last ? i(-r.last) : "") + "last" : i(r.last + 1)) : Array.isArray(r) ? "(a:" + ("property" === o ? r.map(function (e) {
                        return e + (e > 0)
                    }) : r).map(t) + ")" : r instanceof Map ? "(dm:" + Array.from(r.entries()).sort(function (t, n) {
                        return [t[0], n[0]].sort(e("en"))[0] === t[0] ? -1 : 1
                    }).map(function (e) {
                        return e.map(t)
                    }) + ")" : r instanceof Set ? "(ds:" + Array.from(r).sort(e("en")).map(t) + ")" : (void 0 === r ? "undefined" : _typeof(r)) === f && "property" === o ? r < 0 ? -1 === r ? "last" : i(-r) + "last" : i(r + 1) : (void 0 === r ? "undefined" : _typeof(r)) === p && "property" === o ? RegExp(c).test(r) ? r : "(" + JSON.stringify(r) + ")" : JSON.stringify(r)
                },
                is: b,
                contains: function (e, t) {
                    if (e || "" === e) {
                        if ((void 0 === e ? "undefined" : _typeof(e)) === p) return (void 0 === t ? "undefined" : _typeof(t)) !== p ? n.create("operation", v(e) + " can only contain strings, not " + v(t) + ".") : e.includes(t);
                        if (Array.isArray(e)) return e.some(function (e) {
                            return b(e, t)
                        });
                        if (e instanceof Set || e instanceof Map) return Array.from(e.keys()).some(function (e) {
                            return b(e, t)
                        })
                    }
                    return n.create("operation", v(e) + " cannot contain any values, let alone " + v(t))
                },
                isA: function (e, t) {
                    return _typeof(t.TwineScript_IsTypeOf) === d ? t.TwineScript_IsTypeOf(e) : n.create("operation", '"is a" should only be used to compare type names, not ' + v(t) + ".")
                },
                matches: function e(t, r) {
                    var a = !1;
                    if (t && _typeof(t.TwineScript_IsTypeOf) === d) {
                        var i = t.TwineScript_IsTypeOf(r);
                        if (n.containsError(i)) return i;
                        a |= i
                    }
                    if (r && _typeof(r.TwineScript_IsTypeOf) === d) {
                        var o = r.TwineScript_IsTypeOf(t);
                        if (n.containsError(o)) return o;
                        a |= o
                    }
                    if (a) return !0;
                    if (Array.isArray(t) && Array.isArray(r)) {
                        for (var c = 0, u = 0, l = !0; l && c < t.length && u < r.length;) {
                            var p = t[c],
                                f = r[u];
                            if (p.rest) {
                                for (; u < r.length && e(p, f);) f = r[u += 1];
                                c += 1
                            } else if (f.rest) {
                                for (; c < t.length && e(p, f);) p = t[c += 1];
                                u += 1
                            } else e(p, f) ? (c += 1, u += 1) : l = !1
                        }
                        return l && c >= t.length && u >= r.length
                    }
                    return t instanceof Map && r instanceof Map ? e(Array.from(t.entries()).sort(), Array.from(r.entries()).sort()) : t instanceof Set && r instanceof Set ? (t = [].concat(_toConsumableArray(t)), s.apply(void 0, _toConsumableArray(r)).some(function (n) {
                        return e(t, n)
                    })) : b(t, r)
                },
                subset: function e(t, r, a) {
                    if (!r || !a) return n.create("macrocall", "The sub" + m(t) + " index value must not be " + (r && a) + ".");
                    var i = (void 0 === t ? "undefined" : _typeof(t)) === p;
                    if (i && (t = Array.from(t)), r < 0 && (r = Math.max(0, t.length + r + 1)), a < 0 && (a = Math.max(0, t.length + a + 1)), r > a) return e(arguments[0], a, r);
                    var o = t.slice(r > 0 ? r - 1 : r, a).map(g);
                    return i ? o.join("") : o
                },
                range: function e(t, n) {
                    if (t > n) return e(n, t);
                    var r = [t];
                    for (n -= t; n-- > 0;) r.push(++t);
                    return r
                },
                printBuiltinValue: function e(t) {
                    return n.containsError(t) ? t : t && _typeof(t.TwineScript_Print) === d ? t.TwineScript_Print() : t instanceof Map ? (t = Array.from(t.entries()), n.containsError(t) ? t : t.reduce(function (t, n) {
                        var r = _slicedToArray(n, 2),
                            a = r[0],
                            i = r[1];
                        return t + "<tr><td>`" + e(a) + "`</td><td>`" + e(i) + "`</td></tr>"
                    }, "<table class=datamap>") + "</table>") : t instanceof Set ? Array.from(t.values()).map(e) + "" : Array.isArray(t) ? t.map(e) + "" : t && _typeof(t.jquery) === p ? t : h(t) ? n.create("unimplemented", "I don't know how to print this value yet.") : t + ""
                },
                unique: function (e, t, n) {
                    return !n.slice(t + 1).some(function (t) {
                        return b(e, t)
                    })
                }
            })
        }), define("utils/renderutils", ["jquery", "utils", "renderer"], function (e, t, n) {
            var r = RegExp(t.realWhitespace + "+"),
                a = RegExp(t.realWhitespace + "+", "g");

            function i(e, t, n) {
                var r = e.textContent.length;
                if (!(t >= r)) {
                    var a = void 0,
                        i = [a = 0 === t ? e : e.splitText(t)];
                    return n && (n <= 0 && (n = r - n), n < r && i.push(a.splitText(n - t))), i
                }
            }
            var o, s = (o = void 0, function () {
                if (void 0 !== o) return o;
                var t = e("<p>");
                return t[0].normalize ? (t.append(document.createTextNode("0-"), document.createTextNode("2"), document.createTextNode(""))[0].normalize(), o = 1 === t.contents().length) : o = !1
            });
            var c = "tw-collapsed,[collapsing=true]";
            var u = /^(=*)([^=]+)=*$/;
            return Object.freeze({
                dialog: function () {
                    var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        a = r.section,
                        i = r.parent,
                        o = void 0 === i ? t.storyElement : i,
                        s = r.cd,
                        c = r.message,
                        u = void 0 === c ? "" : c,
                        l = r.defaultValue,
                        p = r.buttons,
                        f = void 0 === p ? [{
                            name: "OK",
                            confirm: !0,
                            callback: Object
                        }] : p,
                        d = e("<tw-backdrop><tw-dialog>" + (l || "" === l ? "<input type=text style='display:block;margin:0 auto'></input>\n" : "") + "<tw-dialog-links>" + (f.length ? f.reduce(function (e, t, n) {
                            var r = t.name;
                            return e + "<tw-link style='margin:0 " + (n === f.length - 1 ? "0 0 0.5em" : 0 === n ? "0.5em 0 0" : "0.5em") + "' tabindex=0>" + r + "</tw-link>"
                        }, "") : "<tw-link tabindex=0>" + f[0].name + "</tw-link>") + "</tw-dialog-links></tw-dialog></tw-backdrop>"),
                        h = d.find("tw-dialog");
                    if (o.append(d), a) {
                        a.renderInto(u, h, Object.assign({}, s, {
                            append: "prepend"
                        }));
                        var y = s && s.transition && d.find("tw-dialog > tw-transition-container");
                        y && y.length && y.appendTo(d).append(h.prepend(y.contents().detach()))
                    } else h.prepend(n.exec(u));
                    if (l) {
                        var m = d.find("input").last();
                        m.val(l).on("keypress", function (e) {
                            13 === e.which && (d.remove(), f.filter(function (e) {
                                return e.confirm
                            }).forEach(function (e) {
                                return e.callback()
                            }))
                        }), setTimeout(function () {
                            return m.focus()
                        }, 100)
                    }
                    return f.reverse().forEach(function (t, n) {
                        e(d.find("tw-link").get(-n - 1)).on("click", function () {
                            d.remove(), t.callback()
                        })
                    }), d
                },
                realWhitespace: r,
                textNodeToChars: function (e) {
                    var t = [].concat(_toConsumableArray(e.textContent));
                    return 1 === t.length ? [e] : t.reduce(function (e, t) {
                        return t.match(r) && e.length && e[e.length - 1].match(r) ? e[e.length - 1] += t : e.push(t), e
                    }, []).reduce(function (t, n) {
                        var r = e;
                        return n.length < e.textContent.length && (e = e.splitText(n.length)), t.concat(r)
                    }, [])
                },
                findTextInNodes: function e(t, n) {
                    var r = [],
                        a = "",
                        o = [];
                    if (!t.length || !n) return o;
                    for (; t.length > 0;) {
                        r.push(t[0]), a += t[0].textContent, t.shift();
                        var s = a.indexOf(n);
                        if (s > -1) {
                            for (var c, u = a.length - (s + n.length); s >= r[0].textContent.length;) s -= r[0].textContent.length, r.shift();
                            if (1 === r.length) {
                                var l = i(r[0], s, s + n.length);
                                o.push(l[0]), l[1] && t.unshift(l[1]);
                                break
                            }
                            o.push(i(r[0], s, r[0].length)[0]), (c = o).push.apply(c, _toConsumableArray(r.slice(1, -1)));
                            var p = i(r[r.length - 1], 0, r[r.length - 1].textContent.length - u);
                            o.push(p[0]), p[1] && t.unshift(p[1]), o = o.filter(Boolean);
                            break
                        }
                    }
                    return [o].concat(_toConsumableArray(e(t, n)))
                },
                collapse: function (t) {
                    function n(t) {
                        return 0 === e(this || t).parentsUntil(c).filter("tw-verbatim, tw-expression, [collapsing=false]").length
                    }
                    var r = function e(t) {
                        var n = t[0],
                            r = t.parent();
                        if (!r.length || t.findAndFilter("tw-story").length) return null;
                        var a = r.textNodes().filter(function (e) {
                            var t = e.compareDocumentPosition(n);
                            return 4 & t && !(8 & t)
                        });
                        return (a = a[a.length - 1]) || e(r)
                    }(t);
                    e(r).parents(c).length || (r = null);
                    var i = function e(t) {
                        var n = t[0],
                            r = t.parent();
                        if (!r.length || t.findAndFilter("tw-story").length) return null;
                        var a = r.textNodes().filter(function (e) {
                            var t = e.compareDocumentPosition(n);
                            return 2 & t && !(8 & t)
                        })[0];
                        return a || e(r)
                    }(t);
                    e(i).parents(c).length || (i = null);
                    var o = "br:not([data-raw]),tw-consecutive-br:not([data-raw])";
                    t.find(o).filter(n).replaceWith(document.createTextNode(" "));
                    var u = (t = e(t.get().map(function (t) {
                            return e(t).filter(n).is(o) ? e(document.createTextNode(" ")).replaceAll(t)[0] : t
                        }))).textNodes(),
                        l = 0;
                    u.reduce(function (e, t) {
                        return n(t) ? (t.textContent = t.textContent.replace(a, " "), " " !== t.textContent[0] || e && e.textContent && !(e.textContent.search(/\s$/) > -1) || (t.textContent = t.textContent.slice(1)), t) : document.createTextNode("A")
                    }, r), [].concat(_toConsumableArray(u)).reverse().every(function (e) {
                        return !!n(e) && (e.textContent.match(/^\s*$/) ? (l += e.textContent.length, e.textContent = "", !0) : (e.textContent = e.textContent.replace(/\s+$/, function (e) {
                            return l += e.length, ""
                        }), !1))
                    }), l > 0 && i && (u[u.length - 1].textContent += " "), t[0] && s() && t[0].normalize()
                },
                geomStringRegExp: u,
                geomParse: function (e) {
                    var t = e.length,
                        n = u.exec(e) || [],
                        r = _slicedToArray(n, 3),
                        a = r[0],
                        i = r[1],
                        o = r[2];
                    return a ? {
                        marginLeft: i.length / t * 100,
                        size: o.length / t * 100
                    } : {
                        marginLeft: 0,
                        size: 0
                    }
                }
            })
        }), define("datatypes/hookset", ["jquery", "utils", "utils/renderutils", "utils/operationutils"], function (e, t, n, r) {
            var a = n.textNodeToChars,
                i = n.realWhitespace,
                o = n.findTextInNodes,
                s = r.toSource;

            function c(n) {
                var r = n.dom,
                    s = e();
                this.next && (s = s.add(c.call(this.next, n)));
                var u = function (t, n) {
                    if (Array.isArray(n)) return n.reduce(function (e, n) {
                        return e.add(t.get(n))
                    }, e());
                    if (n && "object" === (void 0 === n ? "undefined" : _typeof(n)) && "first" in n && "last" in n) {
                        var r = n.first,
                            o = n.last,
                            s = t.length;
                        r < 0 && (r += s), o < 0 && (o += s);
                        for (var c = [t.get(r)]; r !== o;) r += Math.sign(o - r), c.push(t.get(r));
                        return e(c)
                    }
                    if ("string" == typeof n) {
                        if ("chars" === n) {
                            var u = [],
                                l = !0,
                                p = !1,
                                f = void 0;
                            try {
                                for (var d, h = t.textNodes(":not(tw-error, tw-error *)")[Symbol.iterator](); !(l = (d = h.next()).done); l = !0) {
                                    var y = d.value,
                                        m = !0,
                                        g = !1,
                                        v = void 0;
                                    try {
                                        for (var b, w = a(y)[Symbol.iterator](); !(m = (b = w.next()).done); m = !0) {
                                            var T = b.value;
                                            T.textContent.match(i) || u.push(T)
                                        }
                                    } catch (e) {
                                        g = !0, v = e
                                    } finally {
                                        try {
                                            !m && w.return && w.return()
                                        } finally {
                                            if (g) throw v
                                        }
                                    }
                                }
                            } catch (e) {
                                p = !0, f = e
                            } finally {
                                try {
                                    !l && h.return && h.return()
                                } finally {
                                    if (p) throw f
                                }
                            }
                            return e(u)
                        }
                        if ("links" === n) return t.findAndFilter("tw-link, .enchantment-link");
                        if ("visited" === n) return t.findAndFilter("tw-link.visited");
                        if ("lines" === n) {
                            var S = t.findAndFilter("br:not(tw-sidebar *),tw-consecutive-br:not(tw-sidebar *)").get(),
                                x = [
                                    []
                                ];
                            return t.textNodes(":not(tw-error, tw-error *):not(tw-sidebar, tw-sidebar *)").forEach(function (e) {
                                S.length && 2 & e.compareDocumentPosition(S[0]) && (S.shift(), x.push([])), x[x.length - 1] = x[x.length - 1].concat(e)
                            }), x = x.map(function (t) {
                                return t.map(function (n) {
                                    for (var r = n.parentNode; e(r).textNodes().every(function (e) {
                                            return t.includes(e)
                                        }) && !t.every(function (t) {
                                            return e(r).has(t).length
                                        });) {
                                        r = (n = r).parentNode
                                    }
                                    return n
                                })
                            }), e(x.map(function (t) {
                                return e(t).wrapAll("<tw-pseudo-hook>").parent()[0]
                            }))
                        }
                    }
                    return e(t.get(n))
                };
                if (this.selector) {
                    var l = void 0;
                    if ("string" === this.selector.type) l = function (t, n) {
                        var r = o(n.textNodes(), t),
                            a = e();
                        return r.forEach(function (t) {
                            a = a.add(e(t).wrapAll("<tw-pseudo-hook>").parent())
                        }), a
                    }(this.selector.data, r);
                    else {
                        if ("base" === this.selector.type) return s.add(u(c.call(this.selector.data, n), this.property));
                        var p = function (e) {
                            var n = 'tw-hook[name="' + (e = t.insensitiveName(e).replace(/"/g, "&quot;")) + '"],tw-enchantment[name="' + e + '"]';
                            return n += {
                                page: ", tw-story",
                                passage: ", tw-passage",
                                sidebar: ", tw-sidebar",
                                link: ", tw-link, .enchantment-link"
                            } [e] || ""
                        }(this.selector.data);
                        l = r.findAndFilter(p).add(r.parentsUntil(t.storyElement.parent())).filter(p)
                    }
                    s = this.property ? s.add(u(l, this.property)) : s.add(l)
                }
                return s
            }

            function u(e) {
                if (!e) return [];
                var n = e.selector,
                    r = e.property,
                    a = e.next;
                return [JSON.stringify(["base" === n.type ? u(n.data) : t.insensitiveName(n.data), r])].concat(_toConsumableArray(u(a))).sort()
            }
            var l = Object.freeze({
                forEach: function (t, n) {
                    var r = c.call(this, t).each(function (t) {
                        n(e(this), t)
                    });
                    return t.dom.findAndFilter("tw-pseudo-hook").contents().unwrap(), r
                },
                hooks: function (e) {
                    return c.call(this, e)
                },
                get TwineScript_ObjectName() {
                    return this.property || this.next ? "a complex hook name" : "?" + this.selector.data + " (a hook name)"
                },
                TwineScript_TypeID: "hookName",
                TwineScript_TypeName: "a hook name (like ?this)",
                TwineScript_Unstorable: !0,
                TwineScript_ToSource: function () {
                    var e = "",
                        n = this.selector,
                        r = n.type,
                        a = n.data;
                    return "name" === r ? a.match(RegExp("^" + t.anyRealLetter + "+$")) ? e += "?" + a : e += "(hooks-named:" + JSON.stringify(a) + ")" : "string" === r ? e += JSON.stringify(a) : "base" === r && (e += a.TwineScript_ToSource() + "'s " + s(this.property, "property")), this.next && (e += " + " + this.next.TwineScript_ToSource()), e
                },
                "TwineScript_+": function (e) {
                    for (var t = this.TwineScript_Clone(), n = t; n.next;) n = n.next;
                    return n.next = e, t
                },
                TwineScript_is: function (e) {
                    return u(this) + "" == u(e) + ""
                },
                TwineScript_GetProperty: function (e) {
                    return l.create({
                        type: "base",
                        data: this
                    }, e, void 0)
                },
                TwineScript_Properties: ["chars", "links", "lines", "visited"],
                TwineScript_Clone: function () {
                    return l.create(this.selector, this.property, this.next)
                },
                create: function (e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
                    return Object.assign(Object.create(this || l), {
                        selector: Object.freeze(e),
                        property: t,
                        next: n
                    })
                },
                from: function (e) {
                    return l.isPrototypeOf(e) || "string" == typeof e || t.impossible("HookSet.from() was given a non-HookSet non-string."), l.isPrototypeOf(e) ? e : l.create({
                        type: "string",
                        data: e
                    })
                }
            });
            return l
        }), define("internaltypes/changedescriptor", ["jquery", "utils", "renderer", "datatypes/hookset"], function (e, t, n, r) {
            var a = t.assertOnlyHas,
                i = t.impossible,
                o = t.transitionIn,
                s = n.exec,
                c = Object.assign,
                u = Object.keys,
                l = Object.create,
                p = Object.seal,
                f = function (e) {
                    return e.split(/\n/g).reduce(function (e, t, n, r) {
                        var a = r.length;
                        return e.concat(document.createTextNode(t), n !== a - 1 && document.createElement(t.length ? "br" : "tw-consecutive-br"))
                    }, [])
                },
                d = void 0,
                h = {
                    source: "",
                    appendSource: null,
                    enabled: !0,
                    enablers: null,
                    verbatim: !1,
                    target: null,
                    append: "",
                    newTargets: null,
                    transition: "",
                    transitionTime: null,
                    transitionDeferred: !1,
                    transitionDelay: 0,
                    transitionSkip: 0,
                    transitionOrigin: null,
                    loopVars: null,
                    styles: null,
                    attr: null,
                    data: null,
                    innerEnchantments: null,
                    section: null,
                    timestamp: 0,
                    summary: function () {
                        var e = this;
                        return ["source", "appendSource", "enabled", "verbatim", "target", "append", "newTargets", "transition", "transitionTime", "transitionDeferred", "transitionDelay", "transitionSkip", "transitionOrigin", "innerEnchantments", "enablers"].filter(function (t) {
                            return e.hasOwnProperty(t)
                        }).concat([this.attr.length && "attr", this.styles.length && "styles", u(this.loopVars).length && "loopVars", u(this.data).length && "data"].filter(Boolean))
                    },
                    create: function (e, t) {
                        var n = c(l(this), {
                            attr: [].concat(this.attr || []),
                            styles: [].concat(this.styles || []),
                            loopVars: this.loopVars || {},
                            data: this.data || {}
                        }, e);
                        return t && t.run(n), n
                    },
                    update: function () {
                        var e = this,
                            t = this.section,
                            n = this.newTargets,
                            a = this.transition,
                            i = this.transitionDeferred,
                            s = this.append,
                            c = this.target;
                        "function" == typeof c && (c = c());
                        var l = function (t) {
                            if (Array.isArray(e.styles) && e.styles.length > 0) {
                                var n = e.styles.reduce(function (e, t) {
                                        return u(t).forEach(function (n) {
                                            var r = t[n];
                                            e[+("function" == typeof r)].push(_defineProperty({}, n, r))
                                        }), e
                                    }, [
                                        [],
                                        []
                                    ]),
                                    r = _slicedToArray(n, 2),
                                    a = r[0],
                                    i = r[1];
                                a.forEach(function (e) {
                                    return t.css(e)
                                }), setTimeout(function () {
                                    i.forEach(function (e) {
                                        return t.css(e)
                                    })
                                })
                            }
                            e.attr && e.attr.forEach(function (e) {
                                return t.attr(e)
                            }), e.data && t.data(e.data)
                        };
                        if (Array.isArray(n) && n.length && (c = n.map(function (e) {
                                return e.target
                            })), [].concat(c).forEach(function (e) {
                                r.isPrototypeOf(e) ? e.forEach(t, l) : l(e)
                            }), a && !i && !s) {
                            var p = c,
                                f = void 0;
                            do {
                                !(f = p.data("timestamp")) && (p = p.parent())
                            } while (!f && p.length);
                            o(c, a, this.transitionTime, this.transitionDelay, this.transitionSkip, f ? Date.now() - f : 0, this.transitionOrigin)
                        }
                    },
                    render: function () {
                        var t = this,
                            n = this.source,
                            u = this.transition,
                            l = this.transitionTime,
                            p = this.transitionDeferred,
                            y = this.enabled,
                            m = this.enablers,
                            g = this.data,
                            v = this.section,
                            b = this.newTargets,
                            w = this.innerEnchantments,
                            T = this.appendSource,
                            S = this.target,
                            x = this.target,
                            k = this.append;
                        if ("function" == typeof S && (S = S()), a(this, d), !k) return i("ChangeDescriptor.render", "This doesn't have an 'append' method chosen."), e();
                        if (m && m.length) {
                            var O = m[0],
                                j = O.descriptor,
                                A = O.changer,
                                C = j.render();
                            if (A) {
                                var E = h.create({
                                    section: v,
                                    target: C
                                });
                                A.run(E), E.update()
                            }
                            return C
                        }
                        if (!y || void 0 !== S.attr("hidden")) return h.create({
                            target: S,
                            attr: this.attr.filter(function (e) {
                                return !("style" in e)
                            }),
                            data: c({}, g, {
                                originalSource: n,
                                hidden: !0
                            })
                        }).update(), e();
                        if (Array.isArray(b) && b.length && (S = b), !S) return i("ChangeDescriptor.render", "ChangeDescriptor has source but not a target!"), e();
                        var _ = e();
                        if ([].concat(S).filter(function (e) {
                                return !e.jquery
                            }).map(function (e) {
                                var t = k,
                                    n = void 0;
                                if (e.target && e.append) {
                                    var r = e;
                                    t = r.append, n = r.before, e = e.target
                                }
                                return {
                                    elements: e.hooks(v, x).filter(function () {
                                        return !(n && 1 & this.compareDocumentPosition(document) && 2 & this.compareDocumentPosition(x[0]))
                                    }),
                                    append: t
                                }
                            }, []).forEach(function (n) {
                                var r = n.elements,
                                    a = n.append;
                                r.each(function (n, r) {
                                    r = e(r), _ = _.add(t.create({
                                        target: r,
                                        append: a,
                                        newTargets: null
                                    }).render()), r.filter("tw-pseudo-hook").contents().unwrap()
                                })
                            }), _.length || Array.isArray(S) || r.isPrototypeOf(S)) return _;
                        if (!(k in S)) {
                            if ("replace" !== k) return i("ChangeDescriptor.render", "The target doesn't have a '" + k + "' method."), e();
                            S[0] instanceof Text ? k = "replaceWith" : (S.empty(), k = "append")
                        }
                        return S[0] instanceof Text && ("append" === k && (k = "after"), "prepend" === k && (k = "before")), _ = e(n && (this.verbatim ? f(n) : e.parseHTML(s(n), document, !0))), Array.isArray(T) && T.forEach(function (n) {
                            var r = n.source,
                                a = n.append,
                                i = e(t.verbatim ? f(r) : e.parseHTML(s(r), document, !0));
                            _ = "append" === a ? _.add(i) : "prepend" === a ? i.add(_) : i
                        }), S[k](_.length ? _ : void 0), S.data("timestamp", Date.now()), this.update(), u && !p && o("replace" === k ? S : _, u, l, this.transitionDelay, this.transitionSkip, this.expedite, this.transitionOrigin), w && w.map(function (e) {
                            return e(S)
                        }).forEach(function (e) {
                            return v.addEnchantment(e)
                        }), _
                    }
                };
            return d = u(h), p(h)
        }), define("datatypes/changercommand", ["utils", "utils/operationutils", "internaltypes/changedescriptor", "internaltypes/twineerror"], function (e, t, n, r) {
            var a = e.impossible,
                i = t.is,
                o = t.toSource,
                s = {},
                c = {
                    TwineScript_TypeID: "changer",
                    TwineScript_TypeName: "a changer",
                    TwineScript_Print: function () {
                        return "`[A (" + this.macroName + ":) changer]`"
                    },
                    TwineScript_ToSource: function () {
                        return "(" + this.macroName + ":" + ("else" === this.name ? "" : this.params.map(o)) + ")" + (this.next ? "+" + this.next.TwineScript_ToSource() : "")
                    },
                    summary: function () {
                        var e = n.create();
                        return this.run(e), e.summary()
                    },
                    create: function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                        return Array.isArray(t) || a("ChangerCommand.create", "params was not an array but " + t), Object.assign(Object.create(this), {
                            macroName: e,
                            params: t,
                            next: n,
                            TwineScript_ObjectName: "a (" + e + ":) changer"
                        })
                    },
                    "TwineScript_+": function (e) {
                        for (var t = this.TwineScript_Clone(), n = t; n.next;) n = n.next;
                        return n.next = e, t
                    },
                    TwineScript_is: function (e) {
                        if (c.isPrototypeOf(e)) return this.macroName === e.macroName && i(this.params, e.params) && i(this.next, e.next)
                    },
                    TwineScript_Clone: function () {
                        for (var e = this.create(this.macroName, this.params, this.next), t = e; t.next;) t = t.next = t.next.TwineScript_Clone();
                        return e
                    },
                    run: function (e) {
                        var t = s[this.macroName].apply(s, [e].concat(_toConsumableArray(this.params)));
                        if (r.containsError(t)) return t;
                        this.next && this.next.run(e)
                    },
                    register: function (e, t) {
                        s[e] = t
                    }
                };
            return Object.freeze(c)
        }), define("state", ["utils", "passages", "datatypes/changercommand", "internaltypes/twineerror", "utils/operationutils", "markup", "twinescript/compiler"], function (e, t, n, r, a, i, o) {
            var s = e.impossible,
                c = a.objectName,
                u = a.toSource,
                l = i.lex,
                p = Object.assign,
                f = Object.create,
                d = Object.defineProperty;
            d(Map.prototype, "toJSON", {
                value: void 0
            }), d(Set.prototype, "toJSON", {
                value: void 0
            });
            var h = ["localStorage", "sessionStorage"].map(function (e) {
                    try {
                        return !!window[e] && (window[e].setItem("test", "1"), window[e].removeItem("test"), !0)
                    } catch (e) {
                        return !1
                    }
                }),
                y = p(f(null), {
                    TwineScript_ObjectName: "this story's variables",
                    TwineScript_TypeDefs: f(null),
                    TwineScript_VariableStore: !0,
                    TwineScript_MockVisits: null
                }),
                m = {
                    passage: "",
                    variables: y,
                    create: function (e, t) {
                        var n = f(m);
                        return n.passage = e || "", n.variables = p(f(this.variables), t), n
                    }
                },
                g = [],
                v = -1,
                b = m.create(),
                w = void 0,
                T = {
                    forward: [],
                    back: [],
                    load: []
                },
                S = void 0;

            function x(e) {
                b = (g[v] || m).create(e),
                    function () {
                        if (S.hasSessionStorage) {
                            var e = S.serialise();
                            if ("string" == typeof e) try {
                                sessionStorage.setItem("Saved Session", e)
                            } catch (e) {
                                return
                            }
                        }
                    }()
            }
            return S = p({
                get passage() {
                    return b.passage
                },
                get variables() {
                    return b.variables
                },
                get pastLength() {
                    return v
                },
                get futureLength() {
                    return g.length - 1 - v
                },
                get mockVisits() {
                    return b.variables.TwineScript_MockVisits || []
                },
                set mockVisits(e) {
                    b.variables.TwineScript_MockVisits = e
                },
                passageNameVisited: function (e) {
                    var n = 0;
                    if (!t.get(e)) return 0;
                    for (var r = 0; r <= v; r++) n += +(e === g[r].passage);
                    return n
                },
                passageNameLastVisited: function (e) {
                    if (!t.get(e)) return 1 / 0;
                    if (e === b.passage) return 0;
                    for (var n = v; n > 0; n--)
                        if (g[n].passage === e) return v - n + 1;
                    return 1 / 0
                },
                pastPassageNames: function () {
                    for (var e = [], t = v - 1; t >= 0; t--) e.unshift(g[t].passage);
                    return e
                },
                timelinePassageNames: function () {
                    return g.map(function (e) {
                        return e.passage
                    })
                },
                play: function (e) {
                    b || s("State.play", "present is undefined!"), b.passage = e, g = g.slice(0, v + 1).concat(b), v += 1, x(e), T.forward.forEach(function (t) {
                        return t(e)
                    })
                },
                rewind: function (e) {
                    var t = 1,
                        n = !1;
                    if (e)
                        if ("string" == typeof e) {
                            if ((t = this.passageNameLastVisited(e)) === 1 / 0) return
                        } else "number" == typeof e && (t = e);
                    for (; t > 0 && v > 0; t--) n = !0, v -= 1;
                    return n && (x(g[v].passage), T.back.forEach(function (e) {
                        return e()
                    })), n
                },
                fastForward: function (e) {
                    var t = 1,
                        n = !1;
                    for ("number" == typeof e && (t = e); t > 0 && g.length > 0; t--) n = !0, v += 1;
                    return n && (x(g[v].passage), T.forward.forEach(function (e) {
                        return e(g[v].passage, "fastForward")
                    })), n
                },
                on: function (e, t) {
                    if (e in T) return "function" != typeof t || T[e].includes(t) || T[e].push(t), S;
                    s("State.on", "invalid event name")
                },
                reset: function () {
                    g = [], v = -1, b = m.create(), w = void 0, T.load.forEach(function (e) {
                        return e(g)
                    })
                },
                hasStorage: h[0],
                hasSessionStorage: h[1]
            }, function () {
                function e(e, t) {
                    Object.keys(t).forEach(function (n) {
                        return !n.startsWith("TwineScript_") && (t[n] = e.eval(o(l(t[n], 0, "macro"))))
                    })
                }
                return {
                    serialise: function () {
                        var e = g.slice(0, v + 1),
                            t = e.map(function (e) {
                                return Object.keys(e.variables).filter(function (t) {
                                    return e.variables[t] && (n = e.variables[t], a = void 0 === n ? "undefined" : _typeof(n), !(!r.containsError(n) && ("function" == typeof n.TwineScript_ToSource || Array.isArray(n) || n instanceof Map || n instanceof Set || "string" === a || "number" === a || "boolean" === a || Object.isPrototypeOf.call(y.TwineScript_TypeDefs, n))));
                                    var n, a
                                }).map(function (t) {
                                    return [t, e.variables[t]]
                                })
                            });
                        if (w || (w = t.reduce(function (e, t, n) {
                                var r = _slicedToArray(t, 2),
                                    a = r[0],
                                    i = r[1];
                                return e || a && [a, i, n + 1]
                            }, void 0)), w) {
                            var n = _slicedToArray(w, 3),
                                a = n[0],
                                i = n[1],
                                o = n[2];
                            return r.create("saving", "The variable $" + a + " holds " + c(i) + " (which is, or contains, a complex data value) on turn " + o + "; the game can no longer be saved.")
                        }
                        try {
                            return JSON.stringify(e, function (e, t) {
                                return this.TwineScript_VariableStore ? "TwineScript_TypeDefs" === e ? Object.keys(t).reduce(function (e, n) {
                                    return e[n] = u(t[n]), e
                                }, {}) : "TwineScript_MockVisits" === e ? t : u(t) : t
                            })
                        } catch (e) {
                            return !1
                        }
                    },
                    deserialise: function (n, r) {
                        var a, i = void 0,
                            o = y,
                            s = "The save data is unintelligible.";
                        try {
                            i = JSON.parse(r)
                        } catch (e) {
                            return Error(s)
                        }
                        return Array.isArray(i) ? (a = (i = i.map(function (r) {
                            if ("object" !== (void 0 === r ? "undefined" : _typeof(r)) || !r.hasOwnProperty("passage") || !r.hasOwnProperty("variables")) return Error(s);
                            if (!t.hasValid(r.passage)) return Error("The data refers to a passage named '" + r.passage + "', but it isn't in this story.");
                            if (r.variables = p(f(o), r.variables), Object.hasOwnProperty.call(r.variables, "TwineScript_TypeDefs")) {
                                var a = r.variables.TwineScript_TypeDefs = p(f(o.TwineScript_TypeDefs), r.variables.TwineScript_TypeDefs);
                                try {
                                    e(n, a)
                                } catch (e) {
                                    return Error(s)
                                }
                            }
                            try {
                                e(n, r.variables)
                            } catch (e) {
                                return Error(s)
                            }
                            return o = r.variables, p(f(m), r)
                        })).find(function (e) {
                            return e instanceof Error
                        })) ? a : (g = i, T.load.forEach(function (e) {
                            return e(g)
                        }), v = g.length - 1, x(g[v].passage), !0) : Error(s)
                    }
                }
            }()), Object.seal(m), Object.freeze(S)
        }), define("internaltypes/varref", ["state", "internaltypes/twineerror", "utils", "utils/operationutils", "datatypes/hookset"], function (e, t, n, r, a) {
            var i = n.impossible,
                o = n.andList,
                s = n.nth,
                c = r.is,
                u = r.isObject,
                l = r.toSource,
                p = r.isSequential,
                f = r.objectName,
                d = r.typeName,
                h = r.clone,
                y = r.isValidDatamapName,
                m = r.subset,
                g = r.collectionType,
                v = r.unstorableValue,
                b = r.matches,
                w = void 0,
                T = 0,
                S = {
                    set: [],
                    delete: []
                },
                x = "You can only access position strings/numbers ('4th', 'last', '2ndlast', (2), etc.) or slices ('1stTo2ndlast', '3rdTo5th'), ",
                k = "You can't access the '0th' or '0thlast' position of ";

            function O(e, n) {
                var r = void 0;
                if (t.containsError(n)) return r;
                if (e instanceof Map && (r = t.containsError(y(e, n)))) return r;
                if (p(e)) {
                    var i = void 0;
                    if ("number" == typeof n) {
                        if (0 === n) return t.create("property", "You can't access elements at position 0 of " + f(e) + ".", "Only positive and negative position values exist.");
                        n > 0 && (n -= 1)
                    } else if ("string" == typeof n && (i = /^(\d+)(?:st|[nr]d|th)last$/i.exec(n))) {
                        if ("0" === i[1]) return t.create("property", k + f(e) + ".");
                        n = -i[1]
                    } else if ("string" == typeof n && (i = /^(\d+)(?:st|[nr]d|th)$/i.exec(n))) {
                        if ("0" === i[1]) return t.create("property", k + f(e) + ".");
                        n = i[1] - 1
                    } else if ("string" == typeof n && (i = /^(?:(\d+)(?:st|[nr]d|th)(last)?|last)to(?:(\d+)(?:st|[nr]d|th)(last)?|last)$/i.exec(n))) {
                        var s = _slicedToArray(i, 5),
                            c = s[1],
                            u = void 0 === c ? 0 : c,
                            l = s[2],
                            d = s[3],
                            h = void 0 === d ? 0 : d;
                        n = {
                            last: h = s[4] ? -h : h - 1,
                            first: u = l ? -u : u - 1
                        }
                    } else if ("last" === n) n = -1;
                    else if ("random" === n) {
                        if (!e.length) return t.create("property", "I can't get a random value from " + f(e) + ", because it's empty");
                        n = Math.random() * Array.from(e).length | 0
                    } else {
                        if (a.isPrototypeOf(e) && !a.TwineScript_Properties.includes(n)) return t.create("property", x + o(a.TwineScript_Properties.map(function (e) {
                            return "'" + e + "'"
                        })) + " of " + f(e) + ", not " + f(n) + ".");
                        if (!["length", "any", "all", "start", "end", "random"].includes(n) && !a.isPrototypeOf(e)) return t.create("property", x + "'length', 'any', 'all', 'start', 'end', and 'random' of " + f(e) + ", not " + f(n) + ".")
                    }
                } else if (e instanceof Set) {
                    if (!["length", "any", "all"].includes(n)) return t.create("property", "You can only get the 'length', 'any' and 'all' of " + f(e) + ".", "To check contained values, use the 'contains' operator.");
                    "length" === n && (n = "size")
                } else {
                    if (Array.isArray(e.TwineScript_Properties) && !e.TwineScript_Properties.includes(n)) return t.create("property", "You can only get the " + o(e.TwineScript_Properties.map(function (e) {
                        return "'" + e + "'"
                    })) + " of " + f(e) + ", not " + f(n) + ".");
                    if ("number" == typeof e || "boolean" == typeof e) return t.create("property", "You can't get data values from " + f(e) + ".")
                }
                return n
            }

            function j(e, t) {
                return t - 0 < 0 && Math.abs(t) <= e.length ? e.length + (t - 0) : t
            }
            var A = /[^\x0000-\xFFFF]/,
                C = new Map;

            function E(e, t) {
                if (void 0 === e) return e;
                if (e instanceof Map || w.isPrototypeOf(e)) return e.get(t);
                if (("any" === t || "all" === t || "start" === t || "end" === t) && !e.TwineScript_VariableStoreName) return function (e, t) {
                    var n = "'" + t + "' value" + ("any" === t ? "" : "s") + " of ";
                    return {
                        determiner: t,
                        array: [].concat(_toConsumableArray(e)),
                        string: "string" == typeof e && e,
                        TwineScript_ObjectName: n + f(e),
                        TwineScript_TypeName: n + "a data structure",
                        TwineScript_Unstorable: !0,
                        TwineScript_Print: function () {
                            return "`[" + this.TwineScript_TypeName + "]`"
                        }
                    }
                }(e, t);
                if ("string" == typeof e)
                    if (C.has(e)) e = C.get(e);
                    else if (A.test(e)) {
                    var n = [].concat(_toConsumableArray(e));
                    C.set(e, n), e = n
                } else C.set(e, e);
                if (p(e) && Number.isFinite(t) && (t = j(e, t)), e.TwineScript_GetProperty) return e.TwineScript_GetProperty(t);
                var r = e[t];
                return "function" != typeof r ? r : void 0
            }

            function _(e) {
                if (e.computed) {
                    var t = e.value;
                    return w.isPrototypeOf(t) && (t = t.get()), "string" == typeof t ? "('" + t + "')" : "(" + t + ")"
                }
                return "number" == typeof e ? s(e) : "'" + e + "'"
            }

            function N(n, r, i) {
                if (n.TwineScript_VariableStore) {
                    if (n.TwineScript_TypeDefs && r in n.TwineScript_TypeDefs) {
                        var o = n.TwineScript_TypeDefs[r];
                        if ("const" === o.name) {
                            if (void 0 !== n[r]) return t.create("operation", "I can't alter " + (n === e.variables ? "$" : "_") + r + " because it's been restricted to a constant value.", "This variable can't be changed for the rest of the story.")
                        } else if (!b(o, i)) return t.create("operation", "I can't set " + (n === e.variables ? "$" : "_") + r + " to " + d(i) + " because it's been restricted to " + l(o) + "-type data.", "You can restrict a variable or data name by giving a typed variable to (set:) or (put:).")
                    }
                    return !0
                }
                return Array.isArray(r) ? r.map(function (e) {
                    return N(n, e)
                }) : n instanceof Map ? "string" == typeof r || t.create("operation", f(n) + " can only have string data names, not " + f(r) + ".") : p(n) ? ["length", "random", "any", "all", "start", "end"].includes(r) ? t.create("operation", "I can't forcibly alter the '" + r + "' of " + f(n) + ".", "start" === r || "end" === r ? "Alter the values at actual positions, like 1st or 2ndlast, rather than just the '" + r + "'." : void 0) : +r == (0 | r) || t.create("property", f(n) + " can only have position keys ('3rd', '1st', (5), etc.), not " + _(r) + ".") : n.TwineScript_Identifiers && r in n ? t.create("keyword", "I can't alter the value of the '" + r + "' identifier.", "You can only alter data in variables and hooks, not fixed identifiers.") : t.create("operation", "I can't modify " + f(n), n instanceof Set ? "You should use an (array:) if you need to modify the data inside this dataset." : a.isPrototypeOf(n) ? "You should alter hooks indirectly using macros like (replace:) or (enchant:)." : void 0)
            }

            function P(e, t, n) {
                var r = t;
                e instanceof Map ? e.set(t, n) : (p(e) && (t = j(e, t)), e.TwineScript_Set ? e.TwineScript_Set(t) : e[t] = n), S.set.forEach(function (t) {
                    return t(e, r, n)
                })
            }

            function I(e, t) {
                var n = t;
                p(e) && (t = j(e, t)), Array.isArray(e) && /^(?:[1-9]\d*|0)$/.exec(t) ? e.splice(t, 1) : e instanceof Map || e instanceof Set ? e.delete(t) : delete e[t], S.delete.forEach(function (t) {
                    return t(e, n)
                })
            }

            function M(e) {
                return Object.assign(Object.create(w), {
                    error: e
                })
            }

            function D(n, r) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r;
                if (r && "object" === (void 0 === r ? "undefined" : _typeof(r)) && "last" in r && "first" in r) {
                    if (a.isPrototypeOf(n)) return n.TwineScript_GetProperty(r);
                    var s = r.first,
                        c = r.last;
                    return m(n, s + (s >= 0), c + (c >= 0))
                }
                if (Array.isArray(r)) return a.isPrototypeOf(n) ? n.TwineScript_GetProperty(r) : r.map(function (e) {
                    return D(n, e, e)
                })["string" == typeof n ? "join" : "valueOf"]("");
                var u = E(n, r);
                if (void 0 === u) {
                    if (n === e.variables) return T;
                    if (n.TwineScript_VariableStore) return t.create("property", "There isn't a temp variable named _" + i + " in this place.", "Temp variables only exist inside the same passage and hook in which they're (set:).");
                    if (Array.isArray(n) && "number" == typeof r) return t.create("property", "This array of " + n.length + " elements doesn't have a " + _(i) + " element.", n.length ? "It contains: " + o(n.map(f)) + "." : "The array is empty.");
                    var l = Array.from("function" == typeof n.keys && n.keys());
                    return t.create("property", "I can't find a " + _(i) + " data name in " + f(n), n instanceof Map && l.length ? "Its names include: " + o(l) + "." : void 0)
                }
                return u
            }

            function R(e, n) {
                var r = this,
                    a = this.compiledPropertyChain.reduce(function (e, t) {
                        var n = void 0;
                        return n = 0 === e.length ? r.object : D.apply(void 0, _toConsumableArray(e[e.length - 1])), e.push([n, t]) && e
                    }, []).reduceRight(e, n);
                return t.containsError(a) ? a : void 0
            }
            return w = Object.freeze({
                get: function () {
                    if (this.error) return this.error;
                    for (var e = this.object, t = 0; t < this.compiledPropertyChain.length - 1; t += 1) e = D(e, this.compiledPropertyChain[t]);
                    return D(e, this.compiledPropertyChain.slice(-1)[0], this.propertyChain.slice(-1)[0])
                },
                set: function (n) {
                    var r = this;
                    return this.error ? this.error : !this.object || this.object.TwineScript_VariableStore || this.object.TwineScript_Identifiers ? R.call(this, function (n, a, i) {
                        var o, s = _slicedToArray(a, 2),
                            c = s[0],
                            l = s[1];
                        if (o = t.containsError(n, c, l) || t.containsError(N(c, l, n))) return o;
                        var d;
                        if (d = v(n)) return t.create("operation", f(n) + " can't be stored" + (g(n) ? " because it holds " + f(d) + "." : ""));
                        if (i > 0) c = h(c);
                        else if (c.TwineScript_VariableStore && c !== e.variables) {
                            for (var y = c; y.TwineScript_VariableStore && !y.hasOwnProperty(l);) y = Object.getPrototypeOf(y);
                            y.TwineScript_VariableStore && (c = y)
                        }
                        if ("string" == typeof c) {
                            if ("string" != typeof n) return t.create("datatype", "I can't put this non-string value, " + f(n) + ", in a string.");
                            if (n.length !== (Array.isArray(l) ? l.length : 1)) return t.create("datatype", f(n) + "is not the right length to fit into this string location.");
                            c = [].concat(_toConsumableArray(c));
                            var m = [].concat(_toConsumableArray(n));
                            [].concat(l).forEach(function (e) {
                                0 + e < 0 && (e = c.length + (0 + e)), c = [].concat(_toConsumableArray(c.slice(0, e)), [m.shift()], _toConsumableArray(c.slice(e + 1)))
                            }), c = c.join("")
                        } else u(c) && (void 0 !== n.TwineScript_KnownName && (n.TwineScript_KnownName = r.TwineScript_ObjectName), Array.isArray(l) && p(n) ? ("string" == typeof n && (n = [].concat(_toConsumableArray(n))), l.map(function (e, t) {
                            return [e, n[t]]
                        }).forEach(function (e) {
                            var t = _slicedToArray(e, 2),
                                n = t[0],
                                r = t[1];
                            return P(c, n, r)
                        })) : P(c, l, n));
                        return c
                    }, n) : t.create("macrocall", "I can't (set:) " + f(this) + ", if the " + (f(this.object).match(/ (.+$)/) || ["", "value"])[1] + " isn't stored in a variable.", "Modifying data structures that aren't in variables won't change the game state at all.")
                },
                delete: function () {
                    return this.error ? this.error : R.call(this, function (e, n, r) {
                        var a, i = _slicedToArray(n, 2),
                            o = i[0],
                            s = i[1];
                        if (a = t.containsError(e, o, s) || t.containsError(N(o, s))) return a;
                        if (r > 0 && (o = h(o)), null === e) {
                            var c = "string" == typeof o;
                            c && (o = [].concat(_toConsumableArray(o))), Array.isArray(s) ? (p(o) && (s = [].concat(_toConsumableArray(new Set(s)))).sort(function (e, t) {
                                return j(o, t) - j(o, e)
                            }), s.forEach(function (e) {
                                return I(o, e)
                            })) : I(o, s), c && (o = o.join(""))
                        } else P(o, s, e);
                        return o
                    }, null)
                },
                defineType: function (e) {
                    var n = this.object,
                        r = this.compiledPropertyChain;
                    if (!n || !n.TwineScript_VariableStore || 1 !== r.length || !n.TwineScript_TypeDefs) return t.create("unimplemented", "I can only restrict the datatypes of variables, not data names or anything else.");
                    var a = r[0];
                    Object.hasOwnProperty.call(n, "TwineScript_TypeDefs") || (n.TwineScript_TypeDefs = Object.create(n.TwineScript_TypeDefs));
                    var i = n.TwineScript_TypeDefs,
                        o = i[a];
                    if (o && !c(o, e)) return t.create("operation", "I can't redefine the type of " + f(this) + " to " + (e.TwineScript_ObjectName || d(e)) + ", as it is already " + (o.TwineScript_ObjectName || d(o)) + ".");
                    i[a] = e, "const" === e.name && (n[a] = void 0)
                },
                matches: function (e, t) {
                    return this.object === e && this.compiledPropertyChain[0] === t
                },
                getName: function () {
                    return this.compiledPropertyChain[0]
                },
                create: function (e, n) {
                    var r = void 0;
                    if (r = t.containsError(e)) return M(r);
                    if (n = [].concat(n), w.isPrototypeOf(e)) {
                        if (u(e.error)) return e;
                        n = e.propertyChain.concat(n), e = e.object
                    }
                    var a = function (e, n) {
                        return n.reduce(function (r, a, i) {
                            var o;
                            return a.computed && (a = a.value), w.isPrototypeOf(a) && (a = a.get()), a = Array.isArray(a) ? a.map(function (t) {
                                return O(e, t)
                            }) : O(e, a), (o = t.containsError(r, a)) ? o : (i < n.length - 1 && (e = D(e, a)), r.push(a), r)
                        }, [])
                    }(e, n);
                    return (r = t.containsError(a)) ? M(r) : Object.assign(Object.create(w), {
                        object: e,
                        propertyChain: n,
                        compiledPropertyChain: a
                    })
                },
                TwineScript_ToSource: function () {
                    var t = this,
                        n = function (e, n) {
                            return !n && t.object.TwineScript_VariableStore ? e : _(e)
                        };
                    return (this.object === e.variables ? "$" : this.object.TwineScript_VariableStore ? "_" : f(this.object) + "'s ") + (1 === this.propertyChain.length ? n(this.propertyChain[0]) : this.propertyChain.reduce(function (e, t, r) {
                        return e + "'s " + n(t, r)
                    }))
                },
                get TwineScript_ObjectName() {
                    return this.TwineScript_ToSource() + (this.object.TwineScript_VariableStoreName ? " in " + this.object.TwineScript_VariableStoreName : "")
                },
                on: function (e, t) {
                    if (e in S) return "function" != typeof t || S[e].includes(t) || S[e].push(t), w;
                    i("VarRef.on", "invalid event name")
                }
            })
        }), define("internaltypes/varscope", [], function () {
            return Object.seal({
                TwineScript_ObjectName: "the temporary variables",
                TwineScript_VariableStore: !0,
                TwineScript_TypeDefs: Object.create(null)
            })
        }), define("internaltypes/twinenotifier", ["jquery", "utils"], function (e, t) {
            var n = t.impossible,
                r = {
                    create: function (e) {
                        return e || n("TwineNotifier.create", "called with only 1 string."), Object.assign(Object.create(r), {
                            message: e
                        })
                    },
                    render: function () {
                        return e("<tw-notifier>").attr("message", this.message)
                    }
                };
            return r
        }), define("datatypes/custommacro", ["jquery", "utils/operationutils", "internaltypes/changedescriptor", "internaltypes/varref", "internaltypes/varscope", "internaltypes/twineerror", "internaltypes/twinenotifier"], function (e, t, n, r, a, i, o) {
            var s = t.objectName,
                c = t.typeName,
                u = t.matches,
                l = Object.assign,
                p = Object.create,
                f = function (t) {
                    return function (c) {
                        for (var u = arguments.length, f = Array(u > 1 ? u - 1 : 0), d = 1; d < u; d++) f[d - 1] = arguments[d];
                        t.called += 1;
                        var h = t.varNames,
                            y = t.params,
                            m = t.body,
                            g = l(p(a), {
                                TwineScript_VariableStoreName: t.TwineScript_ObjectName + " call #" + t.called,
                                TwineScript_TypeDefs: p(null)
                            }),
                            v = [],
                            b = 0;
                        f.forEach(function (e, t) {
                            var n = h[b];
                            g.TwineScript_TypeDefs[n] = y[b].datatype.rest ? y[b].datatype.create("array") : y[b].datatype;
                            var a = r.create(g, n);
                            if (y[b].datatype.rest) {
                                var i = (g[n] || []).concat([e]);
                                if (t < f.length - 1) return void(g[n] = i);
                                a.set(i)
                            } else a.set(e), b += 1;
                            v.push(o.create(s(a) + " is now " + s(g[n])))
                        }), f.length && (b += 1), y[b] && y[b].datatype.rest && (r.create(g, h[b]).set([]), g.TwineScript_TypeDefs[name] = y[b].datatype.create("array"));
                        var w = void 0,
                            T = e("<p>").append(m.html),
                            S = c.stack.length;
                        for (c.stack.unshift({
                                tempVariables: g,
                                dom: T,
                                output: function (e) {
                                    w = e
                                }
                            }), c.execute(); c.stack.length > S;) c.stack.shift();
                        var x, k, O = T.find("tw-error");
                        return O.length ? (T.prepend(v.map(function (e) {
                            return e.render()
                        }), "<br>"), i.create("propagated", O.length + " error" + (O.length > 1 ? "s" : "") + " occurred when running " + t.TwineScript_ObjectName + ".", void 0, T)) : void 0 === w ? i.create("custommacro", t.TwineScript_ObjectName + " didn't output any data or hooks using (output:) or (output-data:).") : n.isPrototypeOf(w) ? (x = w, k = l({
                            TwineScript_TypeID: "command",
                            TwineScript_ObjectName: "a custom command",
                            TwineScript_TypeName: "a custom command",
                            TwineScript_Print: function () {
                                return "`[a custom command]`"
                            },
                            TwineScript_Attach: function (e) {
                                return e.run(x), k
                            },
                            TwineScript_Run: function () {
                                return x
                            }
                        })) : w
                    }
                },
                d = Object.freeze({
                    TwineScript_TypeID: "macro",
                    TwineScript_TypeName: "a custom macro",
                    get TwineScript_ObjectName() {
                        return this.TwineScript_KnownName ? "the " + this.TwineScript_KnownName + " macro" : "a custom macro"
                    },
                    TwineScript_GetProperty: function (e) {
                        if ("params" === e) return [].concat(_toConsumableArray(this.params))
                    },
                    TwineScript_Properties: ["params"],
                    TwineScript_Print: function () {
                        return "`[" + this.TwineScript_ObjectName + "]`"
                    },
                    TwineScript_Clone: function () {
                        return l(p(d), this)
                    },
                    TwineScript_ToSource: function () {
                        return "(macro:" + this.params.map(function (e) {
                            return e.TwineScript_ToSource()
                        }).concat("") + this.body.TwineScript_ToSource() + ")"
                    },
                    create: function (e, t) {
                        var n = l(p(this), {
                            params: e,
                            called: 0,
                            varNames: e.map(function (e) {
                                return e.varRef.propertyChain[0]
                            }),
                            typeSignature: e.map(function (e) {
                                var t = void 0;
                                return t = e.datatype.toTypeSignatureObject ? e.datatype.toTypeSignatureObject({
                                    rest: e.rest
                                }) : {
                                    pattern: "range",
                                    range: function (t) {
                                        return u(e.datatype, t)
                                    },
                                    name: c(e.datatype)
                                }, e.rest ? {
                                    pattern: "zero or more",
                                    innerType: t
                                } : t
                            }),
                            body: t,
                            TwineScript_KnownName: ""
                        });
                        return n.fn = f(n), n
                    }
                });
            return d
        }), define("datatypes/lambda", ["utils/operationutils", "internaltypes/varscope", "internaltypes/varref", "internaltypes/twineerror"], function (e, t, n, r) {
            var a = e.objectName,
                i = Object.freeze({
                    TwineScript_TypeID: "lambda",
                    TwineScript_TypeName: "a lambda",
                    get TwineScript_ObjectName() {
                        return 'a "' + ("making" in this ? "making ... " : "") + ("where" in this ? "where ... " : "") + ("when" in this ? "when ... " : "") + ("via" in this ? "via ... " : "") + '" lambda'
                    },
                    TwineScript_Print: function () {
                        return "`[A lambda]`"
                    },
                    TwineScript_is: function (e) {
                        return e === this
                    },
                    TwineScript_ToSource: function () {
                        return this.source
                    },
                    TypeSignature: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return {
                            pattern: "lambda",
                            innerType: i,
                            clauses: t,
                            typeName: 'a "' + t.concat("").join(" ...") + '" lambda'
                        }
                    },
                    TwineScript_Clone: function () {
                        return Object.assign(Object.create(i), this)
                    },
                    create: function (e, o, s, c) {
                        var u = void 0;

                        function l(e) {
                            var r = e && e.varRef ? e.varRef : e;
                            return void 0 === r || r && n.isPrototypeOf(r) && t.isPrototypeOf(r.object) && 1 === r.propertyChain.length
                        }
                        if ("making" === o && !l(s)) return r.create("syntax", "I need a temp variable, or typed temp variable, to the right of '" + o + "', not " + a(s) + ".");
                        if (r.containsError(e)) return e;
                        if (i.isPrototypeOf(e)) {
                            if ("when" === o || "when" in e) return r.create("syntax", "A 'when' lambda cannot have any other clauses, such as '" + o + "'.");
                            if (o in e && ("where" !== o || "true" !== e[o])) return r.create("syntax", "This lambda has two '" + o + "' clauses.");
                            u = e
                        } else {
                            if ("when" === o && void 0 !== e) return r.create("syntax", "A 'when' lambda shouldn't begin with a temp variable (just use 'when' followed by the condition).");
                            if (!l(e)) return r.create("syntax", "This lambda needs to start with a single temp variable, or typed temp variable, not " + a(e) + ".");
                            (u = Object.create(this)).loop = e || ""
                        }
                        return u.source = c.trim(), u[o] = s, u.making && u.making.getName() === (u.loop && u.loop.getName()) ? r.create("syntax", "This lambda has two variables named '" + u.loop.getName() + "'.", "Lambdas should have all-unique parameter names.") : u
                    },
                    apply: function (e, n) {
                        var a = n.loop,
                            i = n.pos,
                            o = n.making,
                            s = n.ignoreVia,
                            c = n.tempVariables;

                        function u(e, t) {
                            if (e)
                                if ("datatype" in e && "varRef" in e) {
                                    var n = e.varRef.create(c, e.varRef.propertyChain);
                                    n.defineType(e.datatype);
                                    var a = n.set(t);
                                    if (r.containsError(a)) return a
                                } else c[e.getName()] = t
                        }
                        c = c || Object.create(e.stack.length ? e.stackTop.tempVariables : t);
                        var l = u(this.loop, a) || u(this.making, o);
                        if (r.containsError(l)) return l;
                        e.stack.unshift(Object.assign(Object.create(e.stackTop || null), {
                            tempVariables: c,
                            lambdaPos: this.when ? void 0 : i
                        }));
                        var p = e.eval("Operations");
                        !a || this.making || this.when ? p.initialiseIt(r.create("operation", "I can't use 'it', or an implied 'it', in " + this.TwineScript_ObjectName)) : p.initialiseIt(a);
                        var f = !s && this.via,
                            d = e.eval("where" in this || "when" in this ? "Operations.where(" + (this.where || this.when) + "," + (f || "true") + ",null)" : f || "true");
                        return e.stack.shift(), d
                    },
                    filter: function (e, t) {
                        var n = this,
                            a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                            i = void 0,
                            o = t.reduce(function (t, o, s) {
                                if (i = r.containsError(t)) return i;
                                var c = n.apply(e, {
                                    loop: o,
                                    pos: s + 1,
                                    ignoreVia: !0,
                                    tempVariables: a
                                });
                                return (i = r.containsError(c)) ? i : t.concat(c ? [o] : [])
                            }, []);
                        return (i = r.containsError(o)) ? i : o
                    }
                });
            return i
        }), define("datatypes/codehook", ["internaltypes/twineerror", "renderer"], function (e, t) {
            var n = t.exec;
            return Object.freeze({
                TwineScript_TypeName: "a code hook",
                TwineScript_ObjectName: "a code hook",
                TwineScript_Unstorable: !0,
                TwineScript_ToSource: function () {
                    return "[" + this.source + "]"
                },
                create: function (t, r) {
                    r || (r = n(t));
                    var a = e.containsError(r);
                    return a || Object.assign(Object.create(this), {
                        source: t,
                        html: r
                    })
                }
            })
        }), define("datatypes/colour", ["jquery", "utils"], function (e, t) {
            var n = t.matMul,
                r = Math.max,
                a = Math.min,
                i = Math.sin,
                o = Math.cos,
                s = Math.pow,
                c = Math.round,
                u = Math.floor,
                l = Math.atan2,
                p = Math.cbrt,
                f = Math.sqrt,
                d = Math.PI,
                h = Object.assign,
                y = Object.create,
                m = /^([\da-fA-F])([\da-fA-F])([\da-fA-F])$/,
                g = /^([\da-fA-F])([\da-fA-F])([\da-fA-F])([\da-fA-F])([\da-fA-F])([\da-fA-F])$/,
                v = y(null);

            function b(e) {
                var t = e.r,
                    n = e.g,
                    i = e.b,
                    o = e.a,
                    s = r(t /= 255, n /= 255, i /= 255),
                    u = a(t, n, i),
                    l = (s + u) / 2,
                    p = s - u;
                if (s === u) return {
                    h: 0,
                    s: 0,
                    l: l
                };
                var f = void 0;
                switch (s) {
                    case t:
                        f = (n - i) / p + (n < i ? 6 : 0);
                        break;
                    case n:
                        f = (i - t) / p + 2;
                        break;
                    case i:
                        f = (t - n) / p + 4
                }
                return {
                    h: f = c(60 * f),
                    s: l > .5 ? p / (2 - s - u) : p / (s + u),
                    l: l,
                    a: o
                }
            }
            var w = [.96422, 1, .82521],
                T = 24389 / 27,
                S = 216 / 24389,
                x = function (e) {
                    return e.map(function (e) {
                        return [e]
                    })
                },
                k = function (e) {
                    return e.map(function (e) {
                        return e[0]
                    })
                };

            function O(e) {
                var t = e.l,
                    r = e.c,
                    a = e.h,
                    c = e.a;
                t *= 100;
                var u = [];
                u[1] = (t + 16) / 116, u[0] = r * o(a * d / 180) / 500 + u[1], u[2] = u[1] - r * i(a * d / 180) / 200;
                var l = [s(u[0], 3) > S ? s(u[0], 3) : (116 * u[0] - 16) / T, t > T * S ? s((t + 16) / 116, 3) : t / T, s(u[2], 3) > S ? s(u[2], 3) : (116 * u[2] - 16) / T].map(function (e, t) {
                        return e * w[t]
                    }),
                    p = k(n([
                        [.9555766, -.0230393, .0631636],
                        [-.0282895, 1.0099416, .0210077],
                        [.0122982, -.020483, 1.3299098]
                    ], n([
                        [3.2404542, -1.5371385, -.4985314],
                        [-.969266, 1.8760108, .041556],
                        [.0556434, -.2040259, 1.0572252]
                    ], x(l)))).map(function (e) {
                        return 255 * e
                    }),
                    f = _slicedToArray(p, 3);
                return {
                    r: f[0],
                    g: f[1],
                    b: f[2],
                    a: c
                }
            }

            function j(e) {
                var t = O(e);
                return [t.r, t.g, t.b].every(function (e) {
                    return e >= 0 && e <= 255
                })
            }
            var A = Object.freeze({
                TwineScript_TypeID: "colour",
                TwineScript_TypeName: "a colour",
                TwineScript_ObjectName: "a colour",
                TwineScript_DebugName: function () {
                    return "a colour " + this.TwineScript_Print()
                },
                "TwineScript_+": function (e) {
                    var t = this.toRGBA(),
                        n = e.toRGBA();
                    return A.create({
                        r: Math.min(Math.round(.6 * (t.r + n.r)), 255),
                        g: Math.min(Math.round(.6 * (t.g + n.g)), 255),
                        b: Math.min(Math.round(.6 * (t.b + n.b)), 255),
                        a: (t.a + n.a) / 2
                    })
                },
                TwineScript_Print: function () {
                    var e = this.toRGBA();
                    return "<tw-colour style='background-color:rgba(" + [e.r, e.g, e.b, e.a] + ");'></tw-colour>"
                },
                TwineScript_is: function (e) {
                    if (!A.isPrototypeOf(e)) return !1;
                    if (e.lcha && this.lcha) return e.lcha.l === this.lcha.l && e.lcha.c === this.lcha.c && e.lcha.h === this.lcha.h && e.a === this.a;
                    var t = this.toRGBA();
                    return (e = e.toRGBA()).r === t.r && e.g === t.g && e.b === t.b && e.a === t.a
                },
                TwineScript_Clone: function () {
                    return A.create(this)
                },
                toRGBAString: function () {
                    var e = this.toRGBA();
                    return "rgba(" + e.r + ", " + e.g + ", " + e.b + ", " + e.a + ")"
                },
                toHSLA: function () {
                    return b(this.toRGBA())
                },
                toRGBA: function () {
                    return this.lch ? O(function (e) {
                        if (j(e)) return e;
                        var t = (e = h({}, e)).c,
                            n = 0;
                        for (e.c /= 2; t - n > 1e-5;) j(e) ? n = e.c : t = e.c, e.c = (t + n) / 2;
                        return e
                    }(h({}, this.lch, {
                        a: this.a
                    }))) : this
                },
                toLCHA: function () {
                    return this.lch ? h({}, this.lch) : (t = (e = this).r, r = e.g, a = e.b, i = e.a, o = k(n([
                        [1.0478112, .0228866, -.050127],
                        [.0295424, .9904844, -.0170491],
                        [-.0092345, .0150436, .7521316]
                    ], n([
                        [.4124564, .3575761, .1804375],
                        [.2126729, .7151522, .072175],
                        [.0193339, .119192, .9503041]
                    ], x([t / 255, r / 255, a / 255])))).map(function (e, t) {
                        return e / w[t]
                    }).map(function (e) {
                        return e > S ? p(e) : (T * e + 16) / 116
                    }), c = [116 * o[1] - 16, 500 * (o[0] - o[1]), 200 * (o[1] - o[2])], u = 180 * l(c[2], c[1]) / d, {
                        l: c[0] / 100,
                        c: f(s(c[1], 2) + s(c[2], 2)),
                        h: u >= 0 ? u : u + 360,
                        a: i
                    });
                    var e, t, r, a, i, o, c, u
                },
                LCHRotate: function (e) {
                    e < 0 && (e = 360 + e);
                    var t = this.toLCHA();
                    return t.h = (t.h + e) % 360, t.a = this.a, A.create(t)
                },
                TwineScript_GetProperty: function (e) {
                    if ("lch" === e) {
                        var t = this.toLCHA();
                        return new Map([
                            ["l", t.l],
                            ["c", t.c],
                            ["h", t.h]
                        ])
                    }
                    var n = this.toRGBA();
                    return "h" === e || "s" === e || "l" === e ? b(n)[e] : "r" === e || "g" === e || "b" === e || "a" === e ? n[e] : void 0
                },
                TwineScript_Properties: ["h", "s", "l", "r", "g", "b", "a", "lch"],
                TwineScript_ToSource: function () {
                    var e = !this.lch && b(this);
                    if (e && !e.h && !e.s) {
                        if (1 === e.l) return "white";
                        if (0 === e.l) return "black"
                    }
                    return "(" + (this.lch ? "lch" : "hsl") + ":" + (this.lch ? [this.lch.l, this.lch.c, this.lch.h] : [e.h, e.s, e.l]) + (1 !== this.a ? "," + this.a : "") + ")"
                },
                create: function (t) {
                    return "string" == typeof t ? this.create((A.isHexString(t) ? function (e) {
                        return "string" != typeof e ? e : (e = (e = e.replace("#", "")).replace(m, "$1$1$2$2$3$3"), {
                            r: parseInt(e.slice(0, 2), 16),
                            g: parseInt(e.slice(2, 4), 16),
                            b: parseInt(e.slice(4, 6), 16)
                        })
                    } : function (t) {
                        if (t in v) return v[t];
                        var n = e("<p>").css("background-color", t).css("background-color");
                        return n = "transparent" === n ? {
                            r: 0,
                            g: 0,
                            b: 0,
                            a: 0
                        } : n.startsWith("rgb") ? n.match(/\d+/g).reduce(function (e, t, n) {
                            return e["rgb" [n]] = +t, e
                        }, {}) : {
                            r: 192,
                            g: 192,
                            b: 192
                        }, v[t] = n, n
                    })(t)) : !("h" in t && "s" in t && "l" in t) || "r" in t || "g" in t || "b" in t ? ("a" in t && "number" == typeof t.a || (t.a = 1), h(y(this), "h" in t && "c" in t && !("s" in t) && "l" in t ? {
                        a: t.a,
                        lch: {
                            l: t.l,
                            c: t.c,
                            h: t.h
                        }
                    } : t)) : this.create(function (e) {
                        var t = e.h,
                            n = e.s,
                            r = e.l,
                            a = e.a;
                        if (0 === n) {
                            var i = u(255 * r);
                            return {
                                r: i,
                                g: i,
                                b: i
                            }
                        }
                        var o = r < .5 ? r * (1 + n) : r + n - r * n,
                            s = 2 * r - o;

                        function c(e) {
                            return e < 0 && (e += 1), e > 1 && (e -= 1), e < 1 / 6 ? s + 6 * (o - s) * e : e < .5 ? o : e < 2 / 3 ? s + (o - s) * (2 / 3 - e) * 6 : s
                        }
                        return {
                            r: u(255 * c((t /= 360) + 1 / 3)),
                            g: u(255 * c(t)),
                            b: u(255 * c(t - 1 / 3)),
                            a: a
                        }
                    }(t))
                },
                isHexString: function (e) {
                    return "string" == typeof e && "#" === e[0] && (e.slice(1).match(m) || e.slice(1).match(g))
                },
                isCSS3Function: function (e) {
                    return "string" == typeof e && /^(?:rgb|hsl)a?\(\s*\d+\s*,\s*\d+%?\s*,\s*\d+%?(?:,\s*\d+(?:\.\d+)?\s*)?\)$/.test(e)
                }
            });
            return A
        }), define("datatypes/gradient", ["utils/operationutils"], function (e) {
            var t = e.toSource,
                n = Object.freeze({
                    TwineScript_TypeID: "gradient",
                    TwineScript_TypeName: "a gradient",
                    TwineScript_ObjectName: "a gradient",
                    TwineScript_DebugName: function () {
                        return "a gradient " + this.TwineScript_Print()
                    },
                    TwineScript_GetProperty: function (e) {
                        var t = this;
                        return "angle" === e ? this.angle : "stops" === e ? this.stops.map(function (e) {
                            return new Map([
                                [t.repeating ? "pixels" : "percent", e.stop],
                                ["colour", e.colour.TwineScript_Clone()]
                            ])
                        }) : void 0
                    },
                    TwineScript_Properties: ["angle", "stops"],
                    TwineScript_ToSource: function () {
                        return "(gradient:" + this.angle + "," + this.stops.map(function (e) {
                            return t(e.stop) + "," + t(e.colour)
                        }) + ")"
                    },
                    TwineScript_is: function (e) {
                        var t = this;
                        return e.angle === this.angle && e.stops.length === this.stops.length && e.stops.every(function (e, n) {
                            var r = e.colour,
                                a = e.stop;
                            return t.stops[n].stop === a && t.stops[n].colour.TwineScript_is(r)
                        })
                    },
                    TwineScript_Clone: function () {
                        return n.create(this.angle, [].concat(_toConsumableArray(this.stops)))
                    },
                    TwineScript_Print: function () {
                        return "<tw-colour style='background:" + this.toLinearGradientString() + "'></tw-colour>"
                    },
                    create: function (e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        return Object.assign(Object.create(this), {
                            angle: e,
                            stops: t.sort(function (e, t) {
                                return e.stop - t.stop
                            }),
                            repeating: n
                        })
                    },
                    multiply: function (e) {
                        return n.create(this.angle, this.stops.map(function (t) {
                            return {
                                colour: t.colour,
                                stop: t.stop * e
                            }
                        }))
                    },
                    toLinearGradientString: function () {
                        var e = this;
                        return (this.repeating ? "repeating-" : "") + "linear-gradient(" + this.angle + "deg, " + this.stops.reduce(function (t, n) {
                            var r = n.colour,
                                a = n.stop;
                            return t + r.toRGBAString() + " " + a * (e.repeating ? 1 : 100) + (e.repeating ? "px," : "%,")
                        }, "").slice(0, -1) + ")"
                    }
                });
            return n
        }), define("datatypes/datatype", ["utils", "utils/operationutils", "datatypes/changercommand", "datatypes/colour", "datatypes/gradient", "datatypes/lambda", "datatypes/custommacro", "internaltypes/twineerror"], function (e, t, n, r, a, i, o, s) {
            var c = e.realWhitespace,
                u = e.anyRealLetter,
                l = e.anyCasedLetter,
                p = e.anyNewline,
                f = t.objectName,
                d = Object.assign,
                h = Object.seal,
                y = Object.keys,
                m = Math.floor,
                g = Math.abs,
                v = void 0,
                b = void 0,
                w = {
                    TwineScript_TypeID: "datatype",
                    TwineScript_TypeName: "a datatype",
                    TwineScript_Print: function () {
                        return "`[" + this.TwineScript_ObjectName + "]`"
                    },
                    get TwineScript_ObjectName() {
                        return "the " + (this.rest ? "..." : "") + this.name + " datatype"
                    },
                    TwineScript_is: function (e) {
                        return w.isPrototypeOf(e) && e.name === this.name
                    },
                    TwineScript_Clone: function () {
                        return this.rest ? this : Object.create(this)
                    },
                    TwineScript_ToSource: function () {
                        return (this.rest ? "..." : "") + this.name
                    },
                    TwineScript_IsTypeOf: function (e) {
                        var t = this.name,
                            n = this.rest;
                        return !!v[t] && v[t](e, n)
                    },
                    toTypeSignatureObject: function () {
                        var e = this.name,
                            t = {
                                pattern: "range",
                                range: v[e],
                                name: "a " + ("dm" === e ? "datamap" : "ds" === e ? "dataset" : "num" === e ? e + "ber" : "str" === e ? e + "ing" : "color" === e ? "colour" : "bool" === e ? e + "ean" : "alnum" === e ? "alphanumeric character" : "int" === e ? e + "eger" : "even" === e || "odd" === e ? e + " number" : e.endsWith("case") || "whitespace" === e ? e + " character" : "empty" === e ? e + " value" : e)
                            };
                        return this.rest ? {
                            pattern: "zero or more",
                            innerType: t
                        } : t
                    },
                    create: function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        e = "datamap" === e ? "dm" : "dataset" === e ? "ds" : "number" === e ? "num" : "string" === e ? "str" : "color" === e ? "colour" : "boolean" === e ? "bool" : "alphanumeric" === e ? "alnum" : "integer" === e ? "int" : "newline" === e ? "linebreak" : e;
                        var n = Object.create(this);
                        return n.name = e, n.rest = t, n
                    },
                    from: function (e) {
                        var t = y(b).find(function (t) {
                            return b[t](e)
                        });
                        return t ? w.create(t) : s.create("datatype", f(e) + " doesn't correspond to a datatype value.")
                    }
                };
            return b = {
                array: Array.isArray,
                dm: function (e) {
                    return e instanceof Map
                },
                ds: function (e) {
                    return e instanceof Set
                },
                datatype: function (e) {
                    return w.isPrototypeOf(e)
                },
                changer: function (e) {
                    return n.isPrototypeOf(e)
                },
                colour: function (e) {
                    return r.isPrototypeOf(e)
                },
                gradient: function (e) {
                    return a.isPrototypeOf(e)
                },
                lambda: function (e) {
                    return i.isPrototypeOf(e)
                },
                macro: function (e) {
                    return o.isPrototypeOf(e)
                },
                str: function (e) {
                    return "string" == typeof e
                },
                num: function (e) {
                    return "number" == typeof e
                },
                bool: function (e) {
                    return "boolean" == typeof e
                }
            }, v = d({}, b, {
                even: function (e) {
                    return !isNaN(e) && m(g(e)) % 2 == 0
                },
                odd: function (e) {
                    return !isNaN(e) && m(g(e)) % 2 == 1
                },
                empty: function (e) {
                    return e instanceof Map || e instanceof Set ? !e.size : !(!Array.isArray(e) && "string" != typeof e) && !e.length
                },
                int: function (e) {
                    return "number" == typeof e && e === (0 | e)
                },
                uppercase: function (e) {
                    return "string" == typeof e && 1 === [].concat(_toConsumableArray(e)).length && [].concat(_toConsumableArray(e)).every(function (e) {
                        return e !== e.toLowerCase()
                    })
                },
                lowercase: function (e) {
                    return "string" == typeof e && 1 === [].concat(_toConsumableArray(e)).length && [].concat(_toConsumableArray(e)).every(function (e) {
                        return e !== e.toUpperCase()
                    })
                },
                whitespace: function (e) {
                    return "string" == typeof e && !!e.match("^" + c + "$")
                },
                digit: function (e) {
                    return "string" == typeof e && !!e.match("^\\d$")
                },
                alnum: function (e) {
                    return "string" == typeof e && !!e.match("^" + u + "$")
                },
                anycase: function (e) {
                    return "string" == typeof e && !!e.match("^" + l + "$")
                },
                linebreak: function (e) {
                    return "string" == typeof e && !!e.match("^" + p + "$")
                },
                any: function () {
                    return !0
                },
                const: function () {
                    return !0
                }
            }), h(w)
        }), define("datatypes/typedvar", ["utils/operationutils", "datatypes/datatype", "internaltypes/varref", "internaltypes/twineerror"], function (e, t, n, r) {
            var a = e.typeName,
                i = e.matches,
                o = e.toSource,
                s = e.unstorableValue,
                c = Object.freeze,
                u = Object.assign,
                l = Object.create,
                p = c({
                    TwineScript_TypeName: "a typed variable name",
                    get TwineScript_ObjectName() {
                        return this.TwineScript_ToSource()
                    },
                    TwineScript_Print: function () {
                        return "`[A typed variable name]`"
                    },
                    TwineScript_Unstorable: !0,
                    TwineScript_Clone: function () {
                        return u(l(p), {
                            datatype: this.datatype.TwineScript_Clone(),
                            varRef: this.varRef
                        })
                    },
                    TwineScript_ToSource: function () {
                        return o(this.datatype) + "-type " + this.varRef.TwineScript_ToSource()
                    },
                    TwineScript_GetProperty: function (e) {
                        return "name" === e ? this.getName() : this[e]
                    },
                    TwineScript_Properties: ["datatype", "name"],
                    TwineScript_IsTypeOf: function (e) {
                        return i(this.datatype, e)
                    },
                    get: function () {
                        var e;
                        return (e = this.varRef).get.apply(e, arguments)
                    },
                    getName: function () {
                        return this.varRef.getName()
                    },
                    defineType: function () {
                        if ("any" !== this.datatype.name) return this.varRef.defineType(this.datatype)
                    },
                    create: function (e, t) {
                        var n;
                        if (n = r.containsError(t) || r.containsError(e) || t.error) return n;
                        var i = s(e);
                        return i && !p.isPrototypeOf(i) ? r.create("syntax", "The -type syntax can't have " + a(i) + " to its left.") : u(l(this), {
                            datatype: e,
                            varRef: t
                        })
                    }
                });
            return p
        }), define("macros", ["jquery", "utils/naturalsort", "utils", "utils/operationutils", "datatypes/changercommand", "datatypes/custommacro", "datatypes/lambda", "datatypes/hookset", "datatypes/codehook", "datatypes/typedvar", "datatypes/datatype", "internaltypes/changedescriptor", "internaltypes/twineerror"], function (e, t, n, r, a, i, o, s, c, u, l, p, f) {
            var d = n.insensitiveName,
                h = n.nth,
                y = n.plural,
                m = n.andList,
                g = n.lockProperty,
                v = (r.clone, r.objectName),
                b = r.typeName,
                w = r.singleTypeCheck,
                T = r.toSource,
                S = void 0,
                x = {};

            function k(e, n, r) {
                var a = n.fn,
                    i = n.typeSignature,
                    s = n.isChanger,
                    u = void 0 !== s && s,
                    l = r[0];
                r = function (e) {
                    return e.reduce(function (e, n) {
                        if (n && !0 === n.spreader) {
                            var r = n.value,
                                a = f.containsError(r);
                            if (a) e.push(a);
                            else if (Array.isArray(r) || "string" == typeof r)
                                for (var i = 0; i < r.length; i++) e.push(r[i]);
                            else r instanceof Set ? e.push.apply(e, _toConsumableArray(Array.from(r).sort(t("en")))) : e.push(f.create("operation", "I can't spread out " + v(r) + ", because it is not a string, dataset, or array."))
                        } else e.push(n);
                        return e
                    }, [])
                }(r.slice(1)), i = [].concat(i || []);
                var p = !e,
                    d = p ? "" : "(" + (Array.isArray(e) && e.length > 1 ? e[0] : e) + ":)";
                e = p ? "this custom macro" : "the " + d + " macro";
                var g = void 0;
                g = i.length > 0 ? e + " must only be given " + m(i.map(b)) + (i.length > 1 ? ", in that order" : ".") : e + " must not be given any data." + (p ? "" : " Just write " + d);
                for (var T = void 0, x = function (t, n) {
                        var a = i[t],
                            s = r[t];
                        if (f.containsError(s)) return {
                            v: s
                        };
                        if (c.isPrototypeOf(s) && u) return {
                            v: f.create("syntax", "Please put this hook outside the parentheses of the changer macro, not inside it.", "Hooks should appear after a macro" + (p ? "." : ": " + d + "[Some text]"))
                        };
                        if (t >= i.length && !T) return {
                            v: f.create("datatype", r.length - i.length + " too many values were given to " + e + ".", g)
                        };
                        if (a || (a = T), !a.innerType || "rest" !== a.pattern && "zero or more" !== a.pattern || (T = a.innerType, "rest" === a.pattern && (a = a.innerType)), !w(s, a)) {
                            if (void 0 === s) {
                                var l = i.filter(function (e) {
                                    return !("optional" === e.pattern || "zero or more" === e.pattern)
                                }).length;
                                return {
                                    v: f.create("datatype", e + " needs " + y(l - t, "more value") + ".", g)
                                }
                            }
                            return s && s.TwineScript_Unstorable && (a === S.TypeSignature.Any || a.innerType && a.innerType === S.TypeSignature.Any) ? {
                                v: f.create("datatype", e + "'s " + h(t + 1) + " value, " + v(s) + ", is not valid data for this macro.", g)
                            } : s && o.isPrototypeOf(s) && "lambda" === a.pattern ? {
                                v: f.create("datatype", e + "'s " + h(t + 1) + " value (a lambda) should have " + m(["where", "when", "making", "via", "with"].filter(function (e) {
                                    return a.clauses.includes(e)
                                }).map(function (e) {
                                    return "a '" + e + "' clause"
                                })) + ", not " + m(["where", "when", "making", "via", "with"].filter(function (e) {
                                    return e in s
                                }).map(function (e) {
                                    return "a '" + e + "' clause"
                                })) + ".")
                            } : "insensitive set" === a.pattern ? {
                                v: f.create("datatype", v(s) + " is not a valid name string for " + e + ".", "Only the following names are recognised (capitalisation and hyphens ignored): " + m(a.innerType) + ".")
                            } : {
                                v: f.create("datatype", e + "'s " + h(t + 1) + " value is " + v(s) + ", but should be " + b(a) + ".", a.message || g)
                            }
                        }
                    }, k = 0, O = Math.max(r.length, i.length); k < O; k += 1) {
                    var j = x(k);
                    if ("object" === (void 0 === j ? "undefined" : _typeof(j))) return j.v
                }
                return a.apply(void 0, [l].concat(_toConsumableArray(r)))
            }

            function O(e, t, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    a = {
                        fn: t,
                        typeSignature: n
                    };
                r && (a.isChanger = !0), Object.freeze(a), Array.isArray(e) ? e.forEach(function (e) {
                    return g(x, d(e), a)
                }) : g(x, d(e), a)
            }
            return S = {
                has: function (e) {
                    return e = d(e), x.hasOwnProperty(e)
                },
                get: function (e) {
                    return e = d(e), x.hasOwnProperty(e) && x[e]
                },
                add: function e(t, n, r) {
                    return O(t, n, r), e
                },
                addChanger: function e(t, n, r, i) {
                    return O(t, n, i, !0), a.register(Array.isArray(t) ? t[0] : t, r), e
                },
                addCommand: function e(t, n, r, a) {
                    var i = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
                    return O(t, function (e, t, n, r) {
                        return function (a) {
                            for (var i = arguments.length, o = Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++) o[s - 1] = arguments[s];
                            var c = t.apply(void 0, o);
                            if (c) return c;
                            var u = p.create(),
                                l = Object.assign({
                                    TwineScript_TypeID: "command",
                                    TwineScript_ObjectName: "a (" + e + ":) command",
                                    TwineScript_TypeName: "a (" + e + ":) command",
                                    TwineScript_Print: function () {
                                        return "`[A (" + e + ":) command]`"
                                    },
                                    TwineScript_ToSource: function () {
                                        return "(" + e + ":" + o.map(T) + ")"
                                    },
                                    TwineScript_is: function (e) {
                                        return T(this) === T(e)
                                    }
                                }, r ? {
                                    TwineScript_Attach: function (e, t) {
                                        return u.section = e, t.run(u), l
                                    },
                                    TwineScript_Run: function (e) {
                                        return n.apply(void 0, [u, e].concat(o))
                                    }
                                } : {
                                    TwineScript_Run: function (e) {
                                        return n.apply(void 0, [e].concat(o))
                                    }
                                });
                            return l
                        }
                    }([].concat(t)[0], n, r, i), a), e
                },
                TypeSignature: {
                    optional: function (e) {
                        return {
                            pattern: "optional",
                            innerType: e
                        }
                    },
                    zeroOrMore: function (e) {
                        return {
                            pattern: "zero or more",
                            innerType: e
                        }
                    },
                    either: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return {
                            pattern: "either",
                            innerType: t
                        }
                    },
                    rest: function (e) {
                        return {
                            pattern: "rest",
                            innerType: e
                        }
                    },
                    insensitiveSet: function () {
                        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return {
                            pattern: "insensitive set",
                            innerType: t
                        }
                    },
                    numberRange: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1 / 0;
                        return {
                            pattern: "range",
                            min: e,
                            max: t,
                            range: function (n) {
                                return "number" == typeof n && !Number.isNaN(n) && n >= e && n <= t
                            }
                        }
                    },
                    nonNegativeInteger: {
                        pattern: "range",
                        integer: !0,
                        min: 0,
                        max: 1 / 0,
                        range: function (e) {
                            return "number" == typeof e && !Number.isNaN(e) && e >= 0 && !(e + "").includes(".")
                        }
                    },
                    positiveInteger: {
                        pattern: "range",
                        integer: !0,
                        min: 1,
                        max: 1 / 0,
                        range: function (e) {
                            return "number" == typeof e && !Number.isNaN(e) && e >= 1 && !(e + "").includes(".")
                        }
                    },
                    wrapped: function (e, t) {
                        return {
                            pattern: "wrapped",
                            innerType: e,
                            message: t
                        }
                    },
                    Any: {
                        TwineScript_TypeName: "anything"
                    },
                    Everything: {
                        TwineScript_TypeName: "everything"
                    }
                },
                run: function (e, t) {
                    return S.has(e) ? k(e, S.get(e), t) : f.create("macrocall", "I can't run the macro '" + e + "' because it doesn't exist.", "Did you mean to run a macro? If you have a word written like (this:), it is regarded as a macro name.")
                },
                runCustom: function (e, t) {
                    return i.isPrototypeOf(e) ? k("", e, t) : f.create("macrocall", "I can't call " + v(e) + " because it isn't a custom macro.")
                }
            }, Object.assign(S.TypeSignature, {
                positiveNumber: S.TypeSignature.numberRange(Math.pow(2, -52), 1 / 0),
                nonNegativeNumber: S.TypeSignature.numberRange(0, 1 / 0),
                percent: S.TypeSignature.numberRange(0, 1)
            }), Object.freeze(S)
        }), define("datatypes/varbind", ["jquery", "utils", "utils/operationutils", "internaltypes/varref", "internaltypes/twineerror"], function (e, t, n, r, a) {
            var i = n.objectName;
            return r.on("set", function (n, r) {
                n.TwineScript_VariableStore && e(t.storyElement).find("[data-2bind]").each(function (t, a) {
                    var i = (a = e(a)).data("twoWayBindEvent");
                    "function" == typeof i && i(a, n, r)
                })
            }), Object.freeze({
                TwineScript_TypeName: "a bound variable",
                TwineScript_ObjectName: "a bound variable",
                TwineScript_Unstorable: !0,
                TwineScript_ToSource: function () {
                    return ("two way" === this.bind ? "2" : "") + "bind " + this.varRef.TwineScript_ToSource()
                },
                set: function (e) {
                    var t, n = this.varRef.set(e);
                    if (t = a.containsError(n)) return t
                },
                create: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "one way";
                    return r.isPrototypeOf(e) ? e.error ? e.error : Object.assign(Object.create(this), {
                        varRef: e,
                        bind: t
                    }) : a.create("operation", "I can only 'bind' a variable, not " + i(e) + ".")
                }
            })
        }), define("datatypes/assignmentrequest", ["utils/operationutils", "datatypes/typedvar", "datatypes/datatype", "internaltypes/varref", "internaltypes/twineerror"], function (e, t, n, r, a) {
            var i = e.objectName,
                o = e.matches;
            return Object.freeze({
                assignmentRequest: !0,
                TwineScript_TypeName: "a 'to' or 'into' expression",
                TwineScript_ObjectName: "a 'to' or 'into' expression",
                TwineScript_Unstorable: !0,
                set: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        s = void 0,
                        c = [],
                        u = function e(s, c) {
                            var u, l = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                                p = [],
                                f = void 0;
                            if (f = c && r.isPrototypeOf(c) ? c.get() : c, u = a.containsError(f)) return u;
                            if (Array.isArray(f) && Array.isArray(s)) {
                                for (var d = 0, h = 0; d < s.length && h < f.length;) {
                                    var y = s[d],
                                        m = f[h];
                                    if (t.isPrototypeOf(y) && y.datatype.rest || n.isPrototypeOf(y) && y.rest) {
                                        for (var g = h; h < f.length && o(y, m);) m = f[h += 1];
                                        t.isPrototypeOf(y) ? y.datatype = [y.datatype] : n.isPrototypeOf(y) && (y = n.create("array")), p = p.concat(e(y, r.isPrototypeOf(c) ? r.create(c, {
                                            first: g + 1,
                                            last: h + 1
                                        }) : f.slice(g, h)))
                                    } else p = p.concat(e(y, r.isPrototypeOf(c) ? r.create(c, h + 1) : m)), h += 1;
                                    d += 1
                                }
                                return d < s.length ? l && a.create("operation", "I can't unpack this array because it needs " + (s.length - d) + " more value" + (s.length - d > 0 ? "s" : "") + ".") : p
                            }
                            if (s instanceof Map && f instanceof Map) {
                                var v = !0,
                                    b = !1,
                                    w = void 0;
                                try {
                                    for (var T, S = s.entries()[Symbol.iterator](); !(v = (T = S.next()).done); v = !0) {
                                        var x = _slicedToArray(T.value, 2),
                                            k = x[0],
                                            O = x[1];
                                        if (!f.has(k)) return l && a.create("operation", "I can't unpack this datamap because it needs a '" + k + "' data name.");
                                        p = p.concat(e(O, r.isPrototypeOf(c) ? r.create(c, k) : f.get(k)))
                                    }
                                } catch (e) {
                                    b = !0, w = e
                                } finally {
                                    try {
                                        !v && S.return && S.return()
                                    } finally {
                                        if (b) throw w
                                    }
                                }
                                return p
                            }
                            if (t.isPrototypeOf(s)) {
                                if ("function" == typeof s.datatype.destructure) return [{
                                    dest: s,
                                    value: f,
                                    src: c
                                }].concat(s.datatype.destructure(f));
                                if (!o(f, s.datatype)) return [l && a.create("operation", "I can't unpack " + i(f) + " into " + s.varRef.TwineScript_ToSource() + " because it doesn't match " + i(s.datatype) + ".")];
                                p = p.concat(e(s.datatype, f))
                            }
                            return r.isPrototypeOf(s) || t.isPrototypeOf(s) ? p.concat({
                                dest: s,
                                value: f,
                                src: c
                            }) : "function" == typeof s.destructure ? p.concat(s.destructure(f)) : o(f, s) ? p : l && a.create("operation", "I tried to unpack, but " + i(s) + " in the pattern didn't match " + i(f) + ".")
                        }(this.dest, this.src);
                    if (s = a.containsError(u)) return s;
                    if (!u.length) return a.create("operation", "I can't store a new value inside " + i(this.dest) + " that isn't in a variable.", "You need a variable, or a data structure containing variables at certain positions, to store the value.");
                    var l = !0,
                        p = !1,
                        f = void 0;
                    try {
                        for (var d, h = u.reverse()[Symbol.iterator](); !(l = (d = h.next()).done); l = !0) {
                            var y = d.value,
                                m = y.dest,
                                g = y.value,
                                v = y.src;
                            if (t.isPrototypeOf(m)) {
                                if (s = a.containsError(m.defineType())) return s;
                                m = m.varRef
                            }
                            if (s = m.set(g), a.isPrototypeOf(s)) return s;
                            e && v && v.delete(), c.shift(i(m) + " is now " + i(g))
                        }
                    } catch (e) {
                        p = !0, f = e
                    } finally {
                        try {
                            !l && h.return && h.return()
                        } finally {
                            if (p) throw f
                        }
                    }
                    return c.join("; ")
                },
                create: function (e, t, n) {
                    return Object.assign(Object.create(this), {
                        dest: e,
                        src: t,
                        operator: n
                    })
                }
            })
        }), define("twinescript/operations", ["jquery", "state", "datatypes/assignmentrequest", "utils/operationutils", "internaltypes/varref", "datatypes/typedvar", "datatypes/datatype", "internaltypes/twineerror"], function (e, t, n, r, a, i, o, s) {
            var c = r.isObject,
                u = r.collectionType,
                l = r.is,
                p = r.isA,
                f = r.clone,
                d = r.unique,
                h = r.contains,
                y = r.matches,
                m = r.objectName,
                g = void 0,
                v = 0;

            function b(e, t, n, r) {
                return n = n || "do this to",
                    function (a, i) {
                        1 === t.length && (i = a);
                        var o;
                        return (o = s.containsError(a, i)) ? o : (void 0 === a ? "undefined" : _typeof(a)) !== e || (void 0 === i ? "undefined" : _typeof(i)) !== e ? s.create("operation", "I can only " + n + " " + e + "s, not " + m((void 0 === a ? "undefined" : _typeof(a)) !== e ? a : i) + ".", r) : t(a, i)
                    }
            }

            function w(e) {
                return function (t, n) {
                    var r;
                    if (r = s.containsError(t, n)) return r;
                    if ((void 0 === t ? "undefined" : _typeof(t)) !== (void 0 === n ? "undefined" : _typeof(n)) || c(t) && "TwineScript_TypeName" in t && c(n) && "TwineScript_TypeName" in n && t.TwineScript_TypeName !== n.TwineScript_TypeName || u(t) !== u(n)) {
                        var a = m(t) + " isn't the same type of data as " + m(n);
                        return s.create("operation", a[0].toUpperCase() + a.slice(1))
                    }
                    return e(t, n)
                }
            }

            function T(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return function r(a, i) {
                    var o = void 0;
                    if (o = s.containsError(a, i)) return o;
                    v = a;
                    var c = a.determiner ? [a, i] : i.determiner ? [i, a] : [],
                        u = _slicedToArray(c, 2),
                        l = u[0],
                        p = u[1];
                    if (l) {
                        var f = l.determiner;
                        if ("start" === f || "end" === f) {
                            if (t) return s.create("operation", "I can't use '" + t + "' with the 'start' or 'end' of " + m(l) + ".");
                            if (p.determiner) {
                                if ("start" === p.determiner || "end" === p.determiner) return s.create("operation", "I can't compare one value's 'start' or 'end' with another value's 'start' or 'end'.", "Please change one of them to use an exact range, such as '1stto4th' or '2ndlasttolast'.");
                                var d = [p, l];
                                l = d[0], p = d[1]
                            }
                            for (var h = l.string || l.array, y = 0; y < h.length + 1; y += 1) {
                                var g = y ? "end" === f ? h.slice(-y) : h.slice(0, y) : h.constructor(),
                                    b = l === a ? r(g, i) : r(a, g);
                                if (o = s.containsError(b)) return o;
                                if (b !== n) return b
                            }
                            return n
                        }
                        var w = "all" === f;
                        return l.array.reduce(function (e, t) {
                            var n, o = l === a ? r(t, i) : r(a, t);
                            return (n = s.containsError(e, o)) ? n : w ? e && o : e || o
                        }, w)
                    }
                    return e(a, i)
                }
            }

            function S(e, t) {
                return T(function (t, n) {
                    var r = e(t, n);
                    return s.containsError(r) ? r : !r
                }, t, !0)
            }
            var x = "If one of these values is a number, you may want to write a check that it 'is not 0'. Also, if one is a string, you may want to write a check that it 'is not \"\" '.";
            return g = {
                create: function (n) {
                    var r = Object.create(this);
                    return r.Identifiers = {
                        TwineScript_Identifiers: !0,
                        get it() {
                            return v
                        },
                        get time() {
                            return n.stackTop && n.stackTop.evaluateOnly ? s.create("operation", "'time' can't be used in " + n.stackTop.evaluateOnly + ".") : Date.now() - n.timestamp
                        },
                        get visits() {
                            var e = n.stackTop.speculativePassage,
                                r = function (n) {
                                    return n === (e || t.passage)
                                };
                            return t.pastPassageNames().filter(r).length + t.mockVisits.filter(r).length + (!e || e === t.passage)
                        },
                        get visit() {
                            return r.Identifiers.visits
                        },
                        get exits() {
                            return n.stackTop && n.stackTop.evaluateOnly ? s.create("operation", "'exit' and 'exits' can't be used in " + n.stackTop.evaluateOnly + ".") : n.dom.find("tw-enchantment, tw-link").filter(function (t, n) {
                                return e(n).data("enchantmentEvent") || e(n).parent().data("linkPassageName") || e(n).parent().data("clickEvent")
                            }).length
                        },
                        get exit() {
                            return r.Identifiers.exits
                        },
                        get pos() {
                            return n.stackTop && !n.stackTop.evaluateOnly && n.stackTop.lambdaPos ? +n.stackTop.lambdaPos || 1 : s.create("operation", "'pos' can only be used in lambdas that aren't 'when' lambdas.")
                        }
                    }, r
                },
                elidedComparisonOperator: function (e, t) {
                    for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++) r[a - 2] = arguments[a];
                    return r.reduce(function (n, r) {
                        return "boolean" == typeof r ? r : g[e](n, g[t](v, r))
                    }, "and" === e)
                },
                and: b("boolean", w(function (e, t) {
                    return e && t
                }), "use 'and' to join", x),
                or: b("boolean", w(function (e, t) {
                    return e || t
                }), "use 'or' to join", x),
                not: b("boolean", function (e) {
                    return !e
                }, "use 'not' to invert", x),
                "+": w(function (e, t) {
                    if (Array.isArray(e)) return [].concat(_toConsumableArray(e), _toConsumableArray(t));
                    var n = void 0;
                    return e instanceof Map ? (n = new Map(e), t.forEach(function (e, t) {
                        return n.set(t, e)
                    }), n) : e instanceof Set ? new Set([].concat(_toConsumableArray(e), _toConsumableArray(t)).filter(d).map(f)) : "function" == typeof e["TwineScript_+"] ? e["TwineScript_+"](t) : "string|number|boolean".includes(void 0 === e ? "undefined" : _typeof(e)) ? e + t : s.create("operation", "I can't use + on " + m(e) + ".")
                }),
                "-": w(function (e, t) {
                    if (Array.isArray(e)) return e.filter(function (e) {
                        return !t.some(function (t) {
                            return l(e, t)
                        })
                    });
                    if (e instanceof Set) {
                        var n = [].concat(_toConsumableArray(t));
                        return new Set([].concat(_toConsumableArray(e)).filter(function (e) {
                            return !n.some(function (t) {
                                return l(e, t)
                            })
                        }))
                    }
                    return "string" == typeof e ? e.split(t).join("") : "number" == typeof e ? e - t : s.create("operation", "I can't use - on " + m(e) + ".")
                }),
                "*": b("number", w(function (e, t) {
                    return e * t
                }), "multiply"),
                "/": b("number", w(function (e, t) {
                    return 0 === t ? s.create("operation", "I can't divide " + m(e) + " by zero.") : e / t
                }), "divide"),
                "%": b("number", w(function (e, t) {
                    return 0 === t ? s.create("operation", "I can't modulo " + m(e) + " by zero.") : e % t
                }), "modulus"),
                "<": T(b("number", w(function (e, t) {
                    return e < t
                }), "do < to"), "<"),
                ">": T(b("number", w(function (e, t) {
                    return e > t
                }), "do > to"), ">"),
                "<=": T(b("number", w(function (e, t) {
                    return e <= t
                }), "do <= to"), "<="),
                ">=": T(b("number", w(function (e, t) {
                    return e >= t
                }), "do >= to"), ">="),
                is: T(l),
                isNot: S(l),
                contains: T(h, "contains"),
                doesNotContain: S(h, "does not contain"),
                isIn: T(function (e, t) {
                    return h(t, e)
                }, "is in"),
                isNotIn: S(function (e, t) {
                    return h(t, e)
                }, "is not in"),
                isA: T(p, "is a"),
                isNotA: S(p, "is not a"),
                typifies: T(function (e, t) {
                    return p(t, e)
                }),
                untypifies: S(function (e, t) {
                    return p(t, e)
                }),
                matches: T(y),
                doesNotMatch: S(y),
                where: function (e, t, n) {
                    var r;
                    return (r = s.containsError(e)) ? r : "boolean" != typeof e ? s.create("operation", "This lambda's 'where' clause must evaluate to true or false, not " + m(e) + ".") : e ? t : n
                },
                makeSpreader: function (e) {
                    if (i.isPrototypeOf(e) || o.isPrototypeOf(e)) {
                        var t = f(e);
                        return (i.isPrototypeOf(e) ? t.datatype : t).rest = !0, t
                    }
                    return {
                        value: e,
                        spreader: !0,
                        TwineScript_TypeName: "a spreaded '...' value",
                        TwineScript_ObjectName: "a spreaded '...' value",
                        TwineScript_Unstorable: !0
                    }
                },
                makeAssignmentRequest: function (e, t, r) {
                    var a = s.containsError(e, t);
                    return a || n.create(e, t, r)
                },
                setIt: function (e) {
                    return a.isPrototypeOf(e) || i.isPrototypeOf(e) ? (v = e.get(), e) : e
                },
                initialiseIt: function (e) {
                    v = e
                }
            }, Object.freeze(g)
        }), define("twinescript/environ", ["macros", "state", "utils", "datatypes/colour", "datatypes/hookset", "datatypes/lambda", "datatypes/datatype", "datatypes/varbind", "datatypes/codehook", "datatypes/typedvar", "internaltypes/varref", "internaltypes/twineerror", "twinescript/operations"], function (Macros, State, Utils, Colour, HookSet, Lambda, Datatype, VarBind, CodeHook, TypedVar, VarRef, TwineError, OperationsProto) {
            return function (section) {
                "object" === (void 0 === section ? "undefined" : _typeof(section)) && section || Utils.impossible("TwineScript.environ", "no Section argument was given!");
                var Operations = OperationsProto.create(section);
                return section.eval = function () {
                    try {
                        return eval(arguments[0])
                    } catch (e) {
                        return e
                    }
                }, section
            }
        }), define("section", ["jquery", "utils", "renderer", "twinescript/environ", "twinescript/operations", "state", "utils/operationutils", "utils/renderutils", "datatypes/changercommand", "datatypes/hookset", "datatypes/colour", "datatypes/lambda", "internaltypes/changedescriptor", "internaltypes/varscope", "internaltypes/twineerror", "internaltypes/twinenotifier"], function (e, t, n, r, a, i, o, s, c, u, l, p, f, d, h, y) {
            var m, g = o.printBuiltinValue,
                v = o.objectName,
                b = o.typeID,
                w = o.isObject,
                T = s.collapse;

            function S(e, n, r) {
                if (n && "object" === (void 0 === n ? "undefined" : _typeof(n)) && c.isPrototypeOf(n)) {
                    if (r.data("originalSource", r.popAttr("source")), !this.renderInto(r.data("originalSource"), r, n)) {
                        var a = t.insensitiveName(e.attr("name"));
                        if (["if", "elseif", "unless", "else", "testfalse"].includes(a) && (e.addClass("false"), "elseif" !== a && (this.stackTop.lastHookShown = !1)), r.data("live")) {
                            var i = r.data("live"),
                                o = i.delay,
                                s = i.event;
                            (function (e, n) {
                                var r = this,
                                    a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 20,
                                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
                                i && t.assertMustHave(i, ["when"]);
                                var o = n.data("originalSource") || "",
                                    s = _slicedToArray(this.stack, 1)[0].tempVariables,
                                    c = this.whenUnblocked.bind(this, function () {
                                        if (r.inDOM()) {
                                            var t = i && i.filter(r, [!0], s);
                                            h.containsError(t) ? t.render(e.attr("title")).replaceAll(e) : !i || t[0] ? (r.renderInto(o, n, {
                                                append: "replace"
                                            }), t || n.find("tw-expression[name='stop']").length || r.inDOM() && setTimeout(c, a)) : setTimeout(c, a)
                                        }
                                    });
                                setTimeout(c, a)
                            }).call(this, e, r, o, s)
                        }
                        return
                    }
                } else {
                    if (!1 === n) return r.attr("source") && (r.data("originalSource", r.popAttr("source")), r.data("hidden", !0)), e.addClass("false"), void(this.stackTop.lastHookShown = !1);
                    !0 !== n && e.replaceWith(h.create("datatype", v(n) + " cannot be attached to this hook.", "Only Booleans and changers can be attached to hooks.").render(e.attr("title")))
                }
                this.stackTop.lastHookShown = !0
            }

            function x(t) {
                var n = (t instanceof e ? t[0] : t).nextSibling;
                if (n && (n instanceof Text && !n.textContent.trim() || ["br", "tw-consecutive-br"].includes((n.tagName || "").toLowerCase()))) {
                    var r = x(n),
                        a = r.whitespace,
                        i = r.nextElem;
                    return {
                        whitespace: e(n).add(a),
                        nextElem: i
                    }
                }
                return {
                    whitespace: e(),
                    nextElem: e(n)
                }
            }
            var k = {
                add: [],
                remove: []
            };
            return m = {
                create: function (e) {
                    var n = Object.assign(Object.create(this), {
                        timestamp: Date.now(),
                        dom: e || t.storyElement,
                        stack: [],
                        enchantments: [],
                        unblockCallbacks: []
                    });
                    return n = r(n)
                },
                get stackTop() {
                    return this.stack[0]
                },
                inDOM: function () {
                    return e(t.storyElement).find(this.dom).length > 0
                },
                evaluateTwineMarkup: function (t, n) {
                    var r = e("<p>");
                    this.stack.unshift({
                        desc: f.create({
                            target: r,
                            source: t,
                            section: this,
                            append: "append"
                        }),
                        tempVariables: this.stackTop.tempVariables,
                        evaluateOnly: n,
                        finalIter: !0
                    }), this.execute();
                    var a;
                    return (a = r.find("tw-error")).length > 0 ? a : r
                },
                speculate: function (e, t, n) {
                    this.stack.unshift({
                        evaluateOnly: n,
                        finalIter: !0,
                        tempVariables: Object.assign(Object.create(d), {
                            TwineScript_VariableStoreName: n
                        }),
                        speculativePassage: t
                    });
                    var r = void 0;
                    return r = p.isPrototypeOf(e) ? e.apply(this, {
                        fail: !1,
                        pass: !0
                    }) : this.eval(e), this.stack.shift(), r
                },
                renderInto: function (t, n, r) {
                    var a = this,
                        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                        o = f.create({
                            target: n,
                            source: t,
                            section: this,
                            append: "append"
                        });
                    if (r)
                        if (c.isPrototypeOf(r)) {
                            var s = r.run(o);
                            if (h.containsError(s)) return s.render(n.attr("title")).replaceAll(n), !1
                        } else Object.assign(o, r);
                    if ((n = o.target, this.stack.length >= 50) && this.stack.reduce(function (e, t) {
                            return e + !!t.finalIter
                        }, 0) >= 50) return h.create("infinite", "Printing this expression may have trapped me in an infinite loop.").render(n.attr("title")).replaceAll(n), !1;
                    var u = function (t, r, i) {
                        var o = n instanceof e && n.is("tw-hook") && n.parents("tw-collapsed,[collapsing=true]").length > 0;
                        a.stack.unshift({
                            desc: t,
                            finalIter: i,
                            tempVariables: r,
                            collapses: o,
                            evaluateOnly: a.stackTop && a.stackTop.evaluateOnly
                        })
                    };
                    if (i || (i = Object.create(this.stack.length ? this.stackTop.tempVariables : d)), !i.hasOwnProperty("TwineScript_VariableStoreName")) {
                        var l = n && n.tag();
                        i.TwineScript_VariableStoreName = "tw-hook" === l ? n.attr("name") ? "?" + n.attr("name") : "an unnamed hook" : "tw-expression" === l ? "a " + n.attr("type") + " expression" : "tw-passage" === l ? "this passage" : "an unknown scope"
                    }
                    return Object.keys(o.loopVars).length ? function () {
                        var e = Object.assign({}, o.loopVars),
                            t = Math.min.apply(Math, _toConsumableArray(Object.keys(e).map(function (t) {
                                return e[t].length
                            })));
                        if (y.create(t + " loop" + (1 !== t ? "s" : "")).render().prependTo(n), t) {
                            for (var r = function (n) {
                                    u(o, Object.keys(e).reduce(function (t, r) {
                                        return t[r] = e[r][n], t
                                    }, Object.create(i), n === t - 1))
                                }, s = t - 1; s >= 0; s -= 1) r(s);
                            for (s = t - 1; s >= 0 && !a.stackTop.blocked; s -= 1) a.execute()
                        }
                    }() : (u(o, i, !0), this.execute()), 0 === this.stack.length && this.updateEnchantments(), o.enabled
                },
                execute: function () {
                    var n = this,
                        r = this.stackTop,
                        i = r.desc,
                        o = r.dom,
                        s = r.collapses,
                        u = r.evaluateOnly;
                    i && !o && (o = i.render(), this.stackTop.dom = o, this.stackTop.desc = void 0), o.findAndFilter("tw-hook,tw-expression").each(function (r, i) {
                        if (n.stackTop.blocked) return !1;
                        switch ((i = e(i)).tag()) {
                            case "tw-hook":
                                var o = i.popAttr("source") || "";
                                if (o && i.data("originalSource", o), i.data("tempVariables", n.stackTop.tempVariables), i.popAttr("hidden")) {
                                    i.data("hidden", !0);
                                    break
                                }
                                o && n.renderInto(o, i);
                                break;
                            case "tw-expression":
                                if (i.attr("blockers")) {
                                    if (u) return void i.removeAttr("blockers").removeAttr("js").replaceWith(h.create("syntax", "I can't use a macro like (prompt:) or (confirm:) in " + u + ".", "Please rewrite this without putting such macros here.").render(i.attr("title"), i));
                                    var s = [];
                                    try {
                                        s = JSON.parse(i.popAttr("blockers")), i.data("blockers", s)
                                    } catch (e) {
                                        t.impossible("Section.execute", "JSON.parse blockers failed.")
                                    }
                                }
                                if (i.data("blockers")) {
                                    var p = i.data("blockers");
                                    if (p.length) {
                                        n.stackTop.blocked = !0;
                                        var d = n.eval(p.shift());
                                        return h.containsError(d) && (n.stackTop.blocked = !1, i.removeData("blockers").replaceWith(d.render(i.attr("title"), i))), !1
                                    }
                                    i.removeData("blockers")
                                }
                                i.attr("js") && function (n) {
                                    var r = this.eval(n.popAttr("js") || "");
                                    this.stackTop.evaluateOnly && r && (c.isPrototypeOf(r) || "function" == typeof r.TwineScript_Run) && (r = h.create("syntax", "I can't work out what " + this.stackTop.evaluateOnly + " should evaluate to, because it contains a " + (c.isPrototypeOf(r) ? "changer." : "command."), "Please rewrite this without putting changers or commands here."));
                                    var i = void 0,
                                        o = void 0,
                                        s = e();
                                    for (o = n; c.isPrototypeOf(r);) {
                                        var u = x(o);
                                        if (i = u.whitespace, (o = u.nextElem)[0] instanceof Text && "+" === o[0].textContent.trim()) {
                                            var p, d = o,
                                                m = x(d);
                                            if (p = m.whitespace, (o = m.nextElem).is("tw-expression")) {
                                                var T = this.eval(o.popAttr("js"));
                                                if (h.containsError(T)) {
                                                    r = T;
                                                    break
                                                }
                                                var k = a["+"](r, T);
                                                e(i).add(d).add(p).remove(), r = h.containsError(k) ? h.create("operation", "I can't combine " + v(r) + " with " + v(T) + ".", "function" == typeof T.TwineScript_Run ? "If you want to attach this changer to " + v(T) + ", remove the + between them." : "Changers can only be added to other changers.") : k;
                                                continue
                                            }
                                        }
                                        if (o.is("tw-expression")) {
                                            var O = this.eval(o.popAttr("js"));
                                            if (h.containsError(O)) {
                                                r = O;
                                                break
                                            }
                                            if (O && "object" === (void 0 === O ? "undefined" : _typeof(O)) && "function" == typeof O.TwineScript_Attach) {
                                                r = O.TwineScript_Attach(this, r);
                                                break
                                            }
                                            return c.isPrototypeOf(O) ? void n.replaceWith(h.create("operation", "Changers like (" + r.macroName + ":) need to be combined using + between them.", "Place the + between the changer macros, or the variables holding them. The + is absent only between a changer and its attached hook or command.").render(n.attr("title"))) : void n.replaceWith(h.create("operation", v(O) + " can't have changers like (" + r.macroName + ":) attached.", "Changers placed just before hooks, links and commands will attempt to attach, but in this case it didn't work.").render(n.attr("title")))
                                        }
                                        if (o.is("tw-hook")) {
                                            i.remove(), s = o;
                                            break
                                        }
                                        r.macroName || t.impossible("Section.runExpression", "changer has no macroName");
                                        var j = n.attr("title") || "(" + r.macroName + ": ...)";
                                        return void n.replaceWith(h.create("syntax", "The (" + r.macroName + ":) changer should be stored in a variable or attached to a hook.", "Macros like this should appear before a hook: " + j + "[Some text]").render(n.attr("title")))
                                    }
                                    n.attr("return", b(r)), s = s.length ? s : x(n).nextElem.filter("tw-hook");
                                    var A = void 0;
                                    if (A = h.containsError(r)) A instanceof Error && (A = h.fromError(A)), n.replaceWith(A.render(n.attr("title"), n));
                                    else if (y.isPrototypeOf(r)) n.append(r.render());
                                    else if (r && "function" == typeof r.TwineScript_Run)
                                        if (r = r.TwineScript_Run(this), h.containsError(r)) n.replaceWith(r.render(n.attr("title")));
                                        else if (f.isPrototypeOf(r)) {
                                        if (r.data && r.data.live) return void n.replaceWith(h.create("unimplemented", "I currently can't attach (live:) or (event:) macros to commands - only hooks.").render(n.attr("title")));
                                        r.section = this, r.target = o, this.renderInto("", o, r)
                                    } else {
                                        if (w(r) && r.blocked) return this.stackTop.blocked = r.blocked, void n.attr("js", "section.blockedValue()");
                                        r && t.impossible("Section.runExpression", "TwineScript_Run() returned a non-ChangeDescriptor " + (void 0 === r ? "undefined" : _typeof(r)) + ': "' + r + '"')
                                    } else !s.length && ("string" == typeof r || "number" == typeof r || r instanceof Map || r instanceof Set || Array.isArray(r) || l.isPrototypeOf(r)) || r && "function" == typeof r.TwineScript_Print && !c.isPrototypeOf(r) ? (r = g(r), h.containsError(r) ? (r instanceof Error && (r = h.fromError(r)), n.replaceWith(r.render(n.attr("title")))) : "string" != typeof r ? t.impossible("printBuiltinValue() produced a non-string " + (void 0 === r ? "undefined" : _typeof(r))) : this.renderInto(r, n)) : s.length ? S.call(this, n, r, s) : c.isPrototypeOf(r) || "boolean" == typeof r || t.impossible("Section.runExpression", "The expression evaluated to an unknown value: " + r)
                                }.call(n, i)
                        }
                    }), this.stackTop.blocked || (o.length && s && T(o), o.findAndFilter("tw-collapsed,[collapsing=true]").each(function () {
                        T(e(this))
                    }), this.stack.shift())
                },
                updateEnchantments: function () {
                    this.enchantments.forEach(function (e) {
                        e.disenchant(), e.enchantScope()
                    })
                },
                on: function (e, t) {
                    return k[e].push(t), this
                },
                addEnchantment: function (e) {
                    var t = this;
                    this.enchantments.push(e), k.add.forEach(function (n) {
                        return n(t, e)
                    })
                },
                removeEnchantment: function (e) {
                    var t = this,
                        n = this.enchantments.indexOf(e);
                    this.enchantments.splice(n, 1), e.disenchant(), k.remove.forEach(function (n) {
                        return n(t, e)
                    })
                },
                unblock: function (e) {
                    for (this.stack.length || t.impossible("Section.unblock", "stack is empty"), this.stackTop.blocked = !1, void 0 !== e && (this.stackTop.blockedValues = (this.stackTop.blockedValues || []).concat(e)); this.stack.length && !this.stackTop.blocked;) this.execute();
                    if (!this.stack.length)
                        for (; this.unblockCallbacks.length > 0;) {
                            if (this.unblockCallbacks.shift()(), this.stackTop && this.stackTop.blocked) return
                        }
                },
                whenUnblocked: function (e) {
                    this.stack.length && this.stackTop.blocked ? this.unblockCallbacks = this.unblockCallbacks.concat(e) : e()
                },
                blockedValue: function () {
                    var e = this.stackTop;
                    return e || t.impossible("Section.blockedValue", "stack is empty"), e.blockedValues && e.blockedValues.length || t.impossible("Section.blockedValue", "blockedValues is missing or empty"), e.blockedValues.shift()
                }
            }, Object.preventExtensions(m)
        }), define("engine", ["jquery", "utils", "state", "section", "passages"], function (e, t, n, r, a) {
            var i, o = t.escape,
                s = t.impossible,
                c = t.passageSelector,
                u = t.transitionOut,
                l = Object.create(null);

            function p(e, t) {
                return "<tw-include type=" + e + " name='" + o(t.get("name")) + "'>" + t.get("source") + "</tw-include>"
            }

            function f(i) {
                var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                t.assertOnlyHas(o, ["stretch", "transition"]);
                var f = a.get(i),
                    d = t.storyElement,
                    h = d.parent(),
                    y = o.stretch,
                    m = o.transition,
                    g = (m = void 0 === m ? {} : m).depart,
                    v = void 0 === g ? "instant" : g,
                    b = m.arrive,
                    w = void 0 === b ? "dissolve" : b,
                    T = m.departOrigin,
                    S = m.arriveOrigin,
                    x = m.time;
                h.findAndFilter("tw-enchantment").each(function (t, n) {
                    var r = (n = e(n)).data("enchantedProperties");
                    r && d.css(r.reduce(function (e, t) {
                        return e[t] = "", e
                    }, {})), n[0] === h[0] && (h = d.unwrap().parent())
                }), a.hasValid(i) || s("Engine.showPassage", "There's no passage with the name \"" + i + '"!');
                var k, O, j, A, C = d.children(c).not(".transition-out, .transition-out *"),
                    E = (f.get("tags") || []).join(" "),
                    _ = (k = e("<tw-passage><tw-sidebar>"), O = k.children("tw-sidebar"), j = e('<tw-icon tabindex=0 alt="Undo" title="Undo">&#8630;</tw-icon>'), A = e('<tw-icon tabindex=0 alt="Redo" title="Redo">&#8631;</tw-icon>'), n.pastLength <= 0 && j.css("visibility", "hidden"), n.futureLength <= 0 && A.css("visibility", "hidden"), O.append(j, A), k);
                "function" == typeof T && (T = T.call(C)), "function" == typeof S && (S = S.call(_)), d.detach(), _.appendTo(d).attr({
                    tags: E
                }), !y && v && (u(C, v, x, 0, 0, 0, T), C.css("position", "absolute")), d.attr({
                    tags: E
                });
                var N = r.create(_),
                    P = f.get("source");
                P = a.getTagged("header").map(p.bind(0, "header")).join("") + (l.debug ? a.getTagged("debug-header").map(p.bind(0, "debug-header")).join("") : "") + P + a.getTagged("footer").map(p.bind(0, "footer")).join("") + (l.debug ? a.getTagged("debug-footer").map(p.bind(0, "debug-footer")).join("") : ""), n.pastLength <= 0 && (l.debug && (P = a.getTagged("debug-startup").map(p.bind(0, "debug-startup")).join("") + P), P = a.getTagged("startup").map(p.bind(0, "startup")).join("") + P), N.renderInto(P, _, {
                    transition: w,
                    transitionTime: x,
                    transitionOrigin: S
                }), h.append(d.parents().length ? d.parents().last() : d), scroll(0, y ? _.offset().top - .05 * e(window).height() : d.offset().top)
            }
            return i = {
                goBack: function (e) {
                    n.rewind() && f(n.passage, e)
                },
                goForward: function (e) {
                    n.fastForward() && f(n.passage, e)
                },
                goToPassage: function (e, t) {
                    n.play(e), f(e, t)
                },
                toggleFullscreen: function () {
                    var e = document.documentElement;
                    document.fullscreenElement ? document.exitFullscreen() : document.msFullscreenElement ? document.msExitFullscreen() : (e.msRequestFullscreen || e.requestFullscreen).call(e)
                },
                showPassage: f,
                options: l
            }, Object.freeze(i)
        }), define("debugmode/panel", ["jquery"], function (e) {
            return Object.freeze({
                create: function (t) {
                    var n = t.className,
                        r = t.rowWrite,
                        a = t.rowCheck,
                        i = t.columnHead,
                        o = t.tabName,
                        s = t.tabUpdate,
                        c = e("<div class='panel panel-" + n + "' hidden><table class='panel-rows'></table></div>"),
                        u = e("<button class='tab tab-" + n + "'>0 " + o + "s</button>");
                    return u.click(function () {
                        u.toggleClass("enabled"), u.parent().siblings(".panel").attr("hidden", ""), u.is(".enabled") && (u.siblings(".tab:not(.tab-" + n + ")").removeClass("enabled"), c.removeAttr("hidden"))
                    }), s || (s = function (e) {
                        return u.text(e + " " + o + (1 !== e ? "s" : ""))
                    }), Object.assign(Object.create(this), {
                        tabName: o,
                        tab: u,
                        panel: c,
                        panelRows: c.find(".panel-rows"),
                        rowWrite: r,
                        rowCheck: a,
                        columnHead: i,
                        tabUpdate: s
                    })
                },
                update: function (t, n) {
                    var r = this.rowCheck,
                        a = this.rowWrite,
                        i = this.panelRows,
                        o = this.columnHead,
                        s = [],
                        c = i.children();
                    t.forEach(function (t) {
                        var n = c.filter(function (n, a) {
                                return r(t, e(a))
                            }),
                            o = a(t, n.length && n);
                        n.length || i.append(o), s.push.apply(s, _toConsumableArray(o.get()))
                    }), c.filter(function (e, t) {
                        return !s.includes(t) && !t.className.includes("panel-head")
                    }).remove(), this.tabUpdate(n), n > 0 && !i.find(".panel-head").length ? i.prepend(o()) : 0 === n && i.find(".panel-head").remove()
                }
            })
        }), define("debugmode/mode", ["jquery", "utils", "state", "internaltypes/varref", "internaltypes/twineerror", "utils/operationutils", "engine", "passages", "section", "debugmode/panel"], function (e, t, n, r, a, i, o, s, c, u) {
            var l = t.escape,
                p = t.nth,
                f = t.storyElement,
                d = t.debounce,
                h = i.objectName,
                y = i.isObject,
                m = i.toSource;
            return function (t, i) {
                var g = e(document.documentElement),
                    v = e("<tw-debugger>\n\t\t<div class='panel panel-errors' hidden><table></table></div>\n\t\t<div class='tabs'></div>\n\t\t<label style='user-select:none'>Turns: </label><select class='turns' disabled></select><button class='show-invisibles'>Debug View</button><button class='show-dom'>DOM View</button>\n\t\t<div class='resizer'>\n\t\t</tw-debugger>"),
                    b = v.find(".tabs"),
                    w = v.find(".show-dom"),
                    T = v.find(".show-invisibles"),
                    S = v.find(".turns");
                v.find(".resizer").mousedown(function (e) {
                    if (1 !== e.which) return !0;
                    e.stopPropagation();
                    var t = e.pageX,
                        n = v.width();
                    g.on("mousemove.debugger-resizer", function (e) {
                        var r = e.pageX;
                        v.width((n + t - r | 0) + "px")
                    }).on("mouseup.debugger-resizer", function () {
                        g.off(".debugger-resizer")
                    })
                }), T.click(function () {
                    g.toggleClass("debug-mode").removeClass("dom-debug-mode"), T.toggleClass("enabled"), w.removeClass("enabled")
                }), w.click(function () {
                    g.toggleClass("dom-debug-mode").removeClass("debug-mode"), w.toggleClass("enabled"), T.removeClass("enabled")
                }), n.timelinePassageNames().forEach(function (e, t) {
                    S.append("<option value=" + t + ">" + (t + 1) + ": " + e + "</option>")
                }), S.val(n.pastLength), n.pastLength > 0 && S.removeAttr("disabled"), S.change(function (e) {
                    var t = e.target.value - n.pastLength;
                    0 !== t && (n[t < 0 ? "rewind" : "fastForward"](Math.abs(t)), o.showPassage(n.passage))
                }), n.on("forward", function (t) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        a = n.pastLength;
                    a >= 1 && S.removeAttr("disabled"), r ? (S.find("[selected]").removeAttr("selected"), S.val(a)) : (S.children().each(function (t, n) {
                        t >= a && e(n).remove()
                    }), S.append("<option value=" + a + ">" + (a + 1) + ": " + t + "</option>").val(a))
                }).on("back", function () {
                    n.pastLength <= 1 && S.attr("disabled"), S.find("[selected]").removeAttr("selected"), S.val(n.pastLength)
                }).on("load", function (e) {
                    S.empty(), S[e.length <= 1 ? "attr" : "removeAttr"]("disabled"), e.forEach(function (e, t) {
                        return S.append("<option value=" + t + ">" + (t + 1) + ": " + e.passage + "</option>")
                    })
                });
                var x = new Set,
                    k = u.create({
                        className: "variables",
                        tabName: "Variable",
                        rowWrite: function (t, n) {
                            var r = t.name,
                                a = t.dataset,
                                i = t.path,
                                o = t.value,
                                s = t.tempScope,
                                c = t.type,
                                u = o && o.length > 48 && !o.TwineScript_DebugName,
                                p = y(o) && o.TwineScript_DebugName ? o.TwineScript_DebugName() : l(h(o).slice(0, 48) + (u ? "\u2026" : "")),
                                f = "";
                            i.length && (f = i.reduce(function (e, t) {
                                return e + t + "'s "
                            }, "")), a && (r = "???");
                            var d = c ? m(c) : "",
                                g = "object" === (void 0 === o ? "undefined" : _typeof(o)) || u;
                            return n ? (n.find(".variable-type").html(d ? d + "-type " : ""), f && n.find(".variable-path").html((s ? "_" : "$") + l(f)), n.find(".variable-name").html((f ? "" : s ? "_" : "$") + l(r + "")), n.find(".temporary-variable-scope").html(s || ""), n.find(".variable-value").html(p), n.find("tw-folddown")[g ? "show" : "hide"](), n.next(".panel-row-source td").html(g ? l(m(o)) : ""), n.add(n.next(".panel-row-source"))) : e('<div class="variable-row">').attr("data-name", r).attr("data-path", i + "").attr("data-scope", s || "").css("padding-left", Math.min(5, i.length) + "em").append("<td class='variable-type'>" + (d ? d + "-type " : "") + "</td>", "<td class='variable-name'>" + (f ? "<span class='variable-path'>" + (s ? "_" : "$") + l(f) + "</span> " : "") + (f ? "" : s ? "_" : "$") + l(r + "") + "</td>", "<td class='temporary-variable-scope'>" + (s || "") + "</td>", "<td class='variable-value'>" + p + "</td><td class='panel-row-buttons'><tw-folddown tabindex=0 style='display:" + (g ? "visible" : "none") + "'>(source:) </tw-folddown></td>").add("<tr class='variable-row panel-row-source' style='display:none'><td colspan='5'>" + (g ? l(m(o)) : "") + "</td></tr>")
                        },
                        rowCheck: function (e, t) {
                            var n = e.name,
                                r = e.path,
                                a = e.tempScope;
                            return t.attr("data-name") === n && t.attr("data-path") === r + "" && t.attr("data-scope") === a
                        },
                        columnHead: function () {
                            return '<tr class="panel-head"><th>Type</th><th>Name</th><th>Scope</th><th>Value</th></tr>'
                        }
                    }),
                    O = d(function () {
                        var e = [],
                            t = n.variables,
                            r = e.length;

                        function a(t) {
                            if (!(e.length > 500)) {
                                e.push(t);
                                var n = t.path.concat(t.name),
                                    r = t.value,
                                    i = t.tempScope;
                                Array.isArray(r) ? r.forEach(function (e, t) {
                                    return a({
                                        name: p(t + 1),
                                        path: n,
                                        value: e,
                                        tempScope: i
                                    })
                                }) : r instanceof Map ? [].concat(_toConsumableArray(r)).forEach(function (e) {
                                    var t = _slicedToArray(e, 2),
                                        r = t[0],
                                        o = t[1];
                                    return a({
                                        name: r,
                                        path: n,
                                        value: o,
                                        tempScope: i
                                    })
                                }) : r instanceof Set && [].concat(_toConsumableArray(r)).forEach(function (e, t) {
                                    return a({
                                        name: t,
                                        dataset: !0,
                                        path: n,
                                        value: e,
                                        tempScope: i
                                    })
                                })
                            }
                        }
                        for (var i in t) i.startsWith("TwineScript") || (r += 1, a({
                            name: i,
                            path: [],
                            value: t[i],
                            tempScope: "",
                            type: t.TwineScript_TypeDefs && t.TwineScript_TypeDefs[i]
                        }));
                        e.push.apply(e, _toConsumableArray(x)), r += x.size, k.update(e, r), k.panel[(r ? "remove" : "add") + "Class"]("panel-variables-empty")
                    }),
                    j = void 0;
                r.on("set", function (e, t, r) {
                    if (e !== n.variables && e.TwineScript_VariableStoreName && !e.TwineScript_VariableStoreName.match(/#\d+$/)) {
                        var a = e.TwineScript_VariableStoreName,
                            i = e.TwineScript_TypeDefs && e.TwineScript_TypeDefs[t],
                            o = [].concat(_toConsumableArray(x)).find(function (e) {
                                return e.name === t && e.tempScope === a
                            });
                        o ? o.value = r : x.add({
                            name: t,
                            path: [],
                            value: r,
                            tempScope: a,
                            type: i
                        })
                    }
                    O(), j()
                }).on("delete", function () {
                    O(), j()
                }), k.panel.append("<div class='panel-variables-bottom'>\n\t\t\t<button class='panel-variables-copy'>Copy $ variables as (set:) call</button>\n\t\t\t<input class='clipboard' type=\"text\" style='opacity:0;pointer-events:none;position:absolute;'></input>\n\t\t</div>").removeAttr("hidden"), k.tab.addClass("enabled");
                var A = k.panel.find(".clipboard");
                g.on("click", ".panel-variables-copy", function () {
                    var e = [];
                    for (var t in n.variables) t.startsWith("TwineScript") || e.push("$" + t + " to " + m(n.variables[t]));
                    A.val("(set:" + e + ")")[0].select(), document.execCommand("copy")
                });
                var C = u.create({
                        className: "enchantments",
                        tabName: "Enchantment",
                        rowWrite: function (t, n) {
                            var r = t.scope,
                                a = t.changer,
                                i = t.name,
                                o = t.localHook,
                                s = void 0;
                            return s = a ? l(h(a)) : "<em>enchanted via (" + i + ":)</em>", n || e('<div class="enchantment-row">').data("enchantment", t).append("<td><span class='enchantment-name'>" + m(r) + (o ? "</span><span class=enchantment-local>" + ("function" == typeof o.TwineScript_ToSource ? o.TwineScript_ToSource() : o.attr("name") ? "?" + o.attr("name") : "an unnamed hook") : "") + "</span></td><td class='enchantment-value'>" + s + "</td>" + (a ? "<td class='panel-row-buttons'><tw-folddown tabindex=0>(source:)</tw-folddown></td>" : "")).add(a ? "<tr class='panel-row-source' style='display:none'><td colspan='3'>" + l(m(a)) + "</td></tr>" : "")
                        },
                        rowCheck: function (e, t) {
                            return t.data("enchantment") === e
                        },
                        columnHead: function () {
                            return '<tr class="panel-head"><th>Scope</th><th>Value</th></div>'
                        }
                    }),
                    E = d(function (e) {
                        C.update(e.enchantments, e.enchantments.length)
                    });
                c.on("add", E).on("remove", E);
                var _ = c.create(f),
                    N = u.create({
                        className: "storylets",
                        tabName: "Storylet",
                        rowWrite: function (t, n) {
                            var r = t.name,
                                a = t.active,
                                i = t.storyletSource,
                                o = t.exclusive,
                                s = t.urgent;
                            return n ? (n[(a ? "remove" : "add") + "Class"]("storylet-closed"), n) : e('<tr class="storylet-row ' + (a ? "" : "storylet-closed") + '">').attr("data-name", r).append("<td class='storylet-name'>" + r + "</td><td class='storylet-lambda'>" + i + "</td><td class='storylet-exclusive'>" + o + "</td><td class='storylet-urgent'>" + s + "</td>")
                        },
                        rowCheck: function (e, t) {
                            var n = e.name;
                            return t.attr("data-name") === l(n + "")
                        },
                        columnHead: function () {
                            return "<tr class=\"panel-head\"><th>Name</th><th>Condition</th><th class='storylet-exclusive'>Exclusivity</th><th class='storylet-urgent'>Urgency</th></tr>"
                        }
                    });
                N.tab.hide(), j = d(function () {
                    var e = s.getStorylets(_),
                        t = a.containsError(e),
                        n = s.allStorylets();
                    N.update(n.map(function (n) {
                        return {
                            name: n.get("name"),
                            storyletSource: n.get("storylet").TwineScript_ToSource(),
                            active: !t && e.some(function (e) {
                                return e.get("name") === n.get("name")
                            }),
                            exclusive: "number" == typeof n.get("exclusivity") ? n.get("exclusivity") : 0,
                            urgent: "number" == typeof n.get("urgency") ? n.get("urgency") : 0
                        }
                    }), t ? 0 : e.length), N.panel[(t ? "add" : "remove") + "Class"]("storylet-error");
                    var r = n.some(function (e) {
                            return e.get("exclusivity") && "number" == typeof e.get("exclusivity")
                        }),
                        i = n.some(function (e) {
                            return e.get("urgency") && "number" == typeof e.get("urgency")
                        });
                    N.panel[(r ? "add" : "remove") + "Class"]("panel-exclusive"), N.panel[(i ? "add" : "remove") + "Class"]("panel-urgent"), n.length && N.tab.show()
                });
                var P = u.create({
                    className: "source",
                    tabName: "Source",
                    rowWrite: e.noop,
                    rowCheck: e.noop,
                    tabUpdate: e.noop,
                    columnHead: e.noop
                });
                P.tab.text("Source");
                var I = u.create({
                        className: "errors",
                        tabName: "Error",
                        rowWrite: e.noop,
                        rowCheck: e.noop,
                        columnHead: e.noop,
                        tabUpdate: function (e) {
                            return I.tab.css({
                                background: e ? "rgba(230,101,204,0.3)" : ""
                            }).text(e + " Error" + (1 !== e ? "s" : ""))
                        }
                    }),
                    M = function (t, r) {
                        if ("propagated" !== t.type) {
                            I.panelRows.children().length > 500 && I.panelRows.children(":first-child").remove();
                            var a = e('<tr class="error-row"><td class="error-passage">' + n.passage + '</td><td class="error-message">' + t.message + "</td></tr>");
                            a.find(".error-message").attr("title", r), I.panelRows.append(a), I.tabUpdate(I.panelRows.children().length)
                        }
                    };

                function D() {
                    if (x = new Set, O(), j(), C.panelRows.empty(), C.tabUpdate(0), n.passage) {
                        var e = s.get(n.passage);
                        e && P.panelRows.text(e.get("source"))
                    }
                }
                a.on("error", M), v.prepend(k.panel, C.panel, I.panel, N.panel, P.panel), b.prepend(k.tab, C.tab, I.tab, N.tab, P.tab), n.on("forward", D).on("back", D).on("load", D), t && (M(t, i), D()), e(document.body).append(v)
            }
        }), define("macrolib/values", ["macros", "utils", "utils/operationutils", "datatypes/colour", "datatypes/gradient", "datatypes/datatype", "datatypes/hookset", "internaltypes/twineerror"], function (e, t, n, r, a, i, o, s) {
            var c = t.realWhitespace,
                u = t.nth,
                l = t.anyRealLetter,
                p = n.subset,
                f = n.objectName,
                d = n.clone,
                h = n.toSource,
                y = e.TypeSignature,
                m = y.rest,
                g = y.zeroOrMore,
                v = y.either,
                b = y.optional,
                w = y.insensitiveSet,
                T = y.numberRange,
                S = y.percent,
                x = y.nonNegativeInteger,
                k = y.positiveInteger,
                O = y.Any,
                j = Math.max,
                A = Math.min,
                C = Math.round,
                E = Math.floor,
                _ = Math.ceil;

            function N(e) {
                return function () {
                    var t = e.apply(void 0, arguments);
                    return "number" != typeof t || isNaN(t) ? s.create("macrocall", "This mathematical expression doesn't compute!") : t
                }
            }
            e.add(["str", "string", "text"], function (e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                return n.join("")
            }, [g(e.TypeSignature.either(String, Number, Boolean, Array))])("source", function (e, t) {
                return t && "command" === t.TwineScript_TypeID && !t.TwineScript_ToSource ? s.create("datatype", "I can't construct the source code of a command created by a custom macro.") : h(t)
            }, [O])("substring", function (e, t, n, r) {
                return p(t, n, r)
            }, [String, parseInt, parseInt])("lowercase", function (e, t) {
                return t.toLowerCase()
            }, [String])("uppercase", function (e, t) {
                return t.toUpperCase()
            }, [String])("lowerfirst", function (e, t) {
                return t.replace(RegExp(l + "+"), function (e) {
                    return (e = Array.from(e))[0].toLowerCase() + e.slice(1).join("").toLowerCase()
                })
            }, [String])("upperfirst", function (e, t) {
                return t.replace(RegExp(l + "+"), function (e) {
                    return (e = Array.from(e))[0].toUpperCase() + e.slice(1).join("").toLowerCase()
                })
            }, [String])("words", function (e, t) {
                return t.split(RegExp(c + "+")).filter(Boolean)
            }, [String])(["str-repeated", "string-repeated"], function (e, t, n) {
                return 0 === n.length ? s.create("macrocall", "I can't repeat an empty string.") : n.repeat(t)
            }, [x, String])(["str-reversed", "string-reversed"], function (e, t) {
                return [].concat(_toConsumableArray(t)).reverse().join("")
            }, [String])("joined", function (e, t) {
                for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++) r[a - 2] = arguments[a];
                return r.join(t)
            }, [m(String)])("plural", function (e, t, n, r) {
                return n && "" !== r ? t + " " + (1 !== Math.abs(t) ? r || n + "s" : n) : s.create("macrocall", "The (plural:) macro can't be given empty strings.")
            }, [parseInt, String, b(String)])(["str-nth", "string-nth"], function (e, t) {
                return u(t)
            }, [parseInt])(["num", "number"], function (e, t) {
                return Number.isNaN(+t) ? s.create("macrocall", "I couldn't convert " + f(t) + " to a number.") : +t
            }, [String])("datatype", function (e, t) {
                return i.from(t)
            }, [O])("datapattern", function (e, t) {
                return function e(t) {
                    var n, r = void 0;
                    return Array.isArray(t) ? r = t.map(e) : t instanceof Map ? (r = new Map, [].concat(_toConsumableArray(t)).forEach(function (t) {
                        var n = _slicedToArray(t, 2),
                            a = n[0],
                            i = n[1];
                        return r.set(a, e(i))
                    })) : r = i.from(t), (n = s.containsError(r)) ? n : r
                }(t)
            }, [O])(["rgb", "rgba"], function (e) {
                return r.create({
                    r: arguments.length <= 1 ? void 0 : arguments[1],
                    g: arguments.length <= 2 ? void 0 : arguments[2],
                    b: arguments.length <= 3 ? void 0 : arguments[3],
                    a: arguments.length <= 4 ? void 0 : arguments[4]
                })
            }, [T(0, 255), T(0, 255), T(0, 255), b(S)])(["hsl", "hsla"], function (e, t, n, a, i) {
                return (t = C(t) % 360) < 0 && (t += 360), r.create({
                    h: t,
                    s: n,
                    l: a,
                    a: i
                })
            }, [Number, S, S, b(S)])(["lch", "lcha"], function (e, t, n, a, i) {
                return (a = C(a) % 360) < 0 && (a += 360), r.create({
                    l: t,
                    c: n,
                    h: a,
                    a: i
                })
            }, [S, T(0, 132), Number, b(S)])("complement", function (e, t) {
                return t.LCHRotate(180)
            }, [r])("palette", function (e, t, n) {
                var a = n.toLCHA(),
                    i = a.l,
                    o = {
                        l: i <= .75 ? .75 + i / 3 : .75 - 3 * (1 - i),
                        c: 80,
                        h: a.h,
                        a: 1
                    },
                    s = void 0,
                    c = void 0,
                    u = void 0;
                return s = r.create(o), o.l += i <= .75 ? -.1 : .1, o.l < .5 && (o.l *= .5 / o.l), c = r.create(o), o.l += i <= .85 ? .15 : -.15, u = r.create(o), "adjacent" === t ? (c = (s = s.LCHRotate(-30)).LCHRotate(30), u = s.LCHRotate(60)) : "triad" === t && (u = s.LCHRotate(180), c = s.LCHRotate(140), s = s.LCHRotate(-140)), [n, s, c, u]
            }, [w("mono", "adjacent", "triad"), r])("gradient", function (e, t) {
                for (var n = arguments.length, i = Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++) i[o - 2] = arguments[o];
                if ((t = C(t) % 360) < 0 && (t += 360), i.length < 4) return s.create("datatype", "(gradient:) must be given at least 2 colour-stop pairs of numbers and colours.");
                var c = void 0,
                    u = [],
                    l = i.reduce(function (e, t) {
                        if (s.containsError(e)) return e;
                        if (void 0 === c) c = t;
                        else {
                            if ("number" != typeof c || !r.isPrototypeOf(t)) return s.create("datatype", "(gradient:) colour-stops should be pairs of numbers and colours, not colours and numbers.");
                            u.push({
                                stop: c,
                                colour: d(t)
                            }), c = void 0
                        }
                        return e
                    }, !0);
                return s.containsError(l) ? l : void 0 !== c ? s.create("macrocall", "This gradient has a colour-stop percent without a colour.") : a.create(t, u)
            }, [Number, m(v(S, r))])("stripes", function (e, t, n) {
                for (var r = arguments.length, i = Array(r > 3 ? r - 3 : 0), o = 3; o < r; o++) i[o - 3] = arguments[o];
                (t = C(t) % 360) < 0 && (t += 360);
                var s = 0,
                    c = [];
                return i.forEach(function (e) {
                    c.push({
                        stop: s,
                        colour: d(e)
                    }), s += n, c.push({
                        stop: s,
                        colour: d(e)
                    })
                }), a.create(t, c, !0)
            }, [Number, k, r, m(r)])("hooks-named", function (e, t) {
                return t ? o.create({
                    type: "name",
                    data: t
                }) : s.create("datatype", "(hooks-named:) can't be given an empty string.")
            }, [String])("cond", function (e) {
                for (var t = 0; t < (arguments.length <= 1 ? 0 : arguments.length - 1); t += 2) {
                    var n = arguments.length <= t + 1 ? void 0 : arguments[t + 1];
                    if (t === (arguments.length <= 1 ? 0 : arguments.length - 1) - 1 || s.containsError(n)) return n;
                    if ("boolean" != typeof n) return s.create("datatype", "(cond:)'s " + u(t + 1) + " value is " + f(n) + ", but should be a boolean.");
                    if (n) return arguments.length <= t + 1 + 1 ? void 0 : arguments[t + 1 + 1]
                }
                return s.create("macrocall", "An odd number of values must be given to (cond:), not " + (arguments.length <= 1 ? 0 : arguments.length - 1), "(cond:) must be given one or more pairs of booleans and values, as well as one final value.")
            }, [Boolean, O, m(O)]), {
                weekday: [function () {
                    return ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur"][(new Date).getDay()] + "day"
                }, null],
                monthday: [function () {
                    return (new Date).getDate()
                }, null],
                currenttime: [function () {
                    var e = new Date,
                        t = e.getHours() < 12;
                    return (e.getHours() % 12 || 12) + ":" + ((e.getMinutes() < 10 ? "0" : "") + e.getMinutes()) + " " + (t ? "A" : "P") + "M"
                }, null],
                currentdate: [function () {
                    return (new Date).toDateString()
                }, null],
                min: [A, m(Number)],
                max: [j, m(Number)],
                abs: [Math.abs, Number],
                sign: [Math.sign, Number],
                sin: [Math.sin, Number],
                cos: [Math.cos, Number],
                tan: [Math.tan, Number],
                floor: [E, Number],
                round: [C, Number],
                trunc: [function (e) {
                    return e > 0 ? E(e) : _(e)
                }, Number],
                ceil: [_, Number],
                pow: [N(Math.pow), [Number, Number]],
                exp: [Math.exp, Number],
                sqrt: [N(Math.sqrt), Number],
                log: [N(Math.log), Number],
                log10: [N(Math.log10), Number],
                log2: [N(Math.log2), Number],
                random: [function (e, t) {
                        var n = void 0,
                            r = void 0;
                        return t ? (n = A(e, t), r = j(e, t)) : (n = 0, r = e), r += 1, ~~(Math.random() * (r - n)) + n
                    },
                    [parseInt, e.TypeSignature.optional(parseInt)]
                ],
                either: [function () {
                    var e;
                    return e = ~~(Math.random() * arguments.length), arguments.length <= e ? void 0 : arguments[e]
                }, m(O)],
                nth: [function (e) {
                        var t;
                        return e <= 0 ? s.create("datatype", "(nth:)'s first value should be a positive whole number, not " + e) : (t = (e - 1) % (arguments.length <= 1 ? 0 : arguments.length - 1) + 1, arguments.length <= t ? void 0 : arguments[t])
                    },
                    [parseInt, m(O)]
                ],
                "": function () {
                    var t = this;
                    Object.keys(this).forEach(function (n) {
                        if (n) {
                            var r = t[n][0],
                                a = t[n][1];
                            e.add(n, function (e) {
                                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) n[a - 1] = arguments[a];
                                return r.apply(void 0, n)
                            }, a)
                        }
                    })
                }
            } [""]()
        }), define("macrolib/commands", ["jquery", "macros", "utils", "state", "passages", "renderer", "engine", "internaltypes/twineerror", "internaltypes/twinenotifier", "datatypes/assignmentrequest", "datatypes/hookset", "datatypes/codehook", "datatypes/lambda", "datatypes/colour", "datatypes/gradient", "internaltypes/varref", "datatypes/typedvar", "datatypes/varbind", "utils/operationutils", "utils/renderutils"], function (e, t, n, r, a, i, o, s, c, u, l, p, f, d, h, y, m, g, v, b) {
            var w = v.printBuiltinValue,
                T = v.objectName,
                S = v.clone,
                x = v.toSource,
                k = b.dialog,
                O = b.geomParse,
                j = b.geomStringRegExp,
                A = t.TypeSignature,
                C = A.Any,
                E = A.Everything,
                _ = A.rest,
                N = A.either,
                P = A.optional,
                I = A.zeroOrMore,
                M = A.positiveInteger,
                D = A.positiveNumber,
                R = Object.assign,
                L = Math.floor,
                F = Math.ceil,
                q = Math.abs,
                V = Math.max,
                H = Math.min,
                z = e.noop;

            function W(e) {
                return "(" + e + " " + o.options.ifid + ") "
            } ["set", "put", "unpack"].forEach(function (e) {
                return t.add(e, function (t) {
                    for (var n = 0; n < (arguments.length <= 1 ? 0 : arguments.length - 1); n += 1) {
                        var r = arguments.length <= n + 1 ? void 0 : arguments[n + 1];
                        if ("into" === r.operator && "set" === e) return s.create("macrocall", "Please say 'to' when using the (set:) macro.");
                        if ("to" === r.operator && "set" !== e) return s.create("macrocall", "Please say 'into' when using the (put:) or (unpack:) macro.");
                        if ((y.isPrototypeOf(r.dest) || m.isPrototypeOf(r.dest)) === ("unpack" === e)) return s.create("macrocall", "unpack" === e ? "Please use the (unpack:) macro with arrays, datamaps or (p:) patterns containing variables to the right of 'into'." : "Please use the (" + e + ":) macro with just single variables and typed variables to the " + ("set" === e ? "left of 'to'." : "right of 'into'."));
                        var a = r.set();
                        if (s.containsError(a)) return a
                    }
                    return {
                        TwineScript_TypeID: "instant",
                        TwineScript_TypeName: "a (" + e + ":) operation",
                        TwineScript_ObjectName: "a (" + e + ":) operation",
                        TwineScript_Unstorable: !0,
                        TwineScript_Print: function () {
                            return o.options.debug, ""
                        }
                    }
                }, [_(u)])
            }), t.add("move", function (e) {
                for (var t = 0; t < (arguments.length <= 1 ? 0 : arguments.length - 1); t += 1) {
                    var n = arguments.length <= t + 1 ? void 0 : arguments[t + 1];
                    if ("into" !== n.operator) return s.create("macrocall", "Please say 'into' when using the (move:) macro.");
                    var r = n.set(!0);
                    if (s.containsError(r)) return r
                }
                return {
                    TwineScript_TypeID: "instant",
                    TwineScript_TypeName: "a (move:) operation",
                    TwineScript_ObjectName: "a (move:) operation",
                    TwineScript_Unstorable: !0,
                    TwineScript_Print: function () {
                        return o.options.debug, ""
                    }
                }
            }, [_(u)]), t.addCommand("display", function (e) {
                if (!a.hasValid(e)) return s.create("macrocall", "I can't (display:) the passage '" + e + "' because it doesn't exist.")
            }, function (e, t, r) {
                return R(e, {
                    source: n.unescape(a.get(r).get("source"))
                })
            }, [String])("print", z, function (e, t, n) {
                return R(e, {
                    source: w(n)
                })
            }, [C])(["verbatim-print", "v6m-print"], z, function (e, t, n) {
                return R(e, {
                    verbatim: !0,
                    source: w(n)
                })
            }, [C])(["verbatim-source", "v6m-source"], function (e) {
                if (e && "command" === e.TwineScript_TypeID && !e.TwineScript_ToSource) return s.create("datatype", "I can't construct the source code of a command created by a custom macro.")
            }, function (e, t, n) {
                return R(e, {
                    verbatim: !0,
                    source: w(x(n))
                })
            }, [C])("go-to", function (e) {
                if (!a.hasValid(e)) return s.create("macrocall", "I can't (go-to:) the passage '" + e + "' because it doesn't exist.")
            }, function (e, t, n) {
                return requestAnimationFrame(function () {
                    return o.goToPassage(n, {
                        transition: e.data.passageT8n
                    })
                }), {
                    blocked: !0
                }
            }, [String])("undo", z, function (e) {
                return r.pastLength < 1 ? s.create("macrocall", "I can't (undo:) on the first turn.") : (requestAnimationFrame(function () {
                    return o.goBack({
                        transition: e.data.passageT8n
                    })
                }), {
                    blocked: !0
                })
            }, []), n.onStartup(function () {
                return e(n.storyElement).on("click.icon", "tw-icon", function (t) {
                    var n = e(this),
                        a = n.data("clickEvent"),
                        i = n.attr("alt");
                    a && a(n), "Undo" === i && (t.stopPropagation(), o.goBack()), "Redo" === i && (t.stopPropagation(), o.goForward()), "Fullscreen" === i && (t.stopPropagation(), o.toggleFullscreen()), "Restart" === i && (r.hasSessionStorage && sessionStorage.removeItem("Saved Session"), window.location.reload())
                })
            }), [
                ["Undo", "&#8630;", function () {
                    return r.pastLength > 0
                }],
                ["Redo", "&#8631;", function () {
                    return r.futureLength > 0
                }],
                ["Fullscreen", "&#9974;", function () {
                    return document.fullscreenEnabled || document.msFullscreenEnabled
                }],
                ["Restart", "&#10226;", Object]
            ].forEach(function (e) {
                var n = _slicedToArray(e, 3),
                    r = n[0],
                    a = n[1],
                    i = n[2];
                t.addCommand("icon-" + r.toLowerCase(), function (e, t) {
                    if ("string" == typeof e && "string" == typeof t) {
                        var n = [].concat(_toConsumableArray(e)).length,
                            a = [].concat(_toConsumableArray(t)).length;
                        if (n > 1 && a > 1) return s.create("datatype", "One of the two strings given to (icon-" + r.toLowerCase() + ":) should be 1 character long, for its icon.");
                        if (1 === n && 1 === a) return s.create("datatype", "One of the two strings given to (icon-" + r.toLowerCase() + ":) should be 2 or more characters long, for its label.")
                    }
                }, function (e, t, n, o) {
                    if ("string" == typeof o && 1 === [].concat(_toConsumableArray(o)).length || "string" == typeof n && [].concat(_toConsumableArray(n)).length > 1) {
                        var s = [o, n];
                        n = s[0], o = s[1]
                    }
                    return R(e, {
                        source: '<tw-icon tabindex=0 alt="' + r + '" ' + (o ? 'data-label="' + o.replace('"', "&quot;") + '"' : "") + ' title="' + r + '" ' + (i() ? "" : 'style="visibility:hidden"') + ">" + (n || a) + "</tw-icon>"
                    })
                }, [P(String), P(String)])
            }), t.addCommand("icon-counter", function (e, t, n) {
                var r = " label string given to (icon-counter:) can't be empty or only whitespace.";
                return t && t.trim() ? "string" != typeof n || n.trim() ? void 0 : s.create("datatype", "The 2nd " + r) : s.create("datatype", "The 1st " + r)
            }, function (e, t, r, a, i) {
                e.attr.push({
                    "data-2bind": !0
                }), e.data.twoWayBindEvent = function (t, n, o) {
                    if (r.varRef.matches(n, o)) {
                        var s = r.varRef.get();
                        if ("number" == typeof s) e.target.children("tw-icon").text(s > 0 ? L(s) : F(s)).attr("data-label", 1 !== q(s) && void 0 !== i ? i : a)
                    }
                };
                var o = r.varRef.get();
                return "number" != typeof o ? s.create("datatype", "(icon-counter:) can only be bound to a variable holding a number, not " + T(o) + ".") : R(e, {
                    source: '<tw-icon data-label="' + n.escape(1 !== q(o) && void 0 !== i ? i : a) + '">' + (o > 0 ? L(o) : F(o)) + "</tw-icon>"
                })
            }, [g, String, P(String)]), t.addCommand("meter", function (e, t, n, r) {
                return "string" != typeof r || r.trim() ? -1 === n.search(j) || !n.includes("=") && n.length > 1 ? s.create("datatype", 'The (meter:) macro requires a sizing line("==X==", "==X", "=XXXX=" etc.) be provided, not ' + JSON.stringify(n) + ".") : void 0 : s.create("datatype", "The label string given to (meter:) can't be empty or only whitespace.")
            }, function (e, t, n, r, a, i, o) {
                i && "string" != typeof i && (o = i, i = void 0), o || (o = d.create({
                    h: 0,
                    s: 0,
                    l: .5,
                    a: .5
                })), d.isPrototypeOf(o) && (o = h.create(90, [{
                    colour: o,
                    stop: 0
                }, {
                    colour: o,
                    stop: 1
                }]));
                var c = O(a),
                    u = c.marginLeft,
                    l = c.size,
                    p = u > 0 && Math.ceil(u + l) < 100,
                    f = function (e) {
                        var t = V(0, H(1, e / r)),
                            n = o.repeating ? o : o.multiply(r / e);
                        return "height:100%;background-repeat:no-repeat;background-image:" + (p ? R(n, n.repeating ? {} : {
                            angle: 270
                        }).toLinearGradientString() + ", " : "") + R(n, n.repeating ? {} : {
                            angle: p || 0 === u ? 90 : 270
                        }).toLinearGradientString() + ";background-size:" + (p ? Array(2).fill(50 * t + "%") : 100 * t + "%") + ";background-position-x:" + (p ? -100 / (2 - t) + 100 + "%," + 100 / (2 - t) + "%" : 0 === u ? "left" : "right") + ";text-align:" + (p ? "center" : 0 === u ? "left" : "right")
                    };
                e.styles.push({
                    "margin-left": u + "%",
                    width: l + "%",
                    height: "1.5em",
                    display: "block"
                }), e.attr.push({
                    "data-2bind": !0
                });
                var y = i && t.stackTop.tempVariables;
                e.data.twoWayBindEvent = function (t, r, a) {
                    if (n.varRef.matches(r, a)) {
                        var o = n.varRef.get();
                        if ("number" == typeof o) {
                            var s = e.target.children("tw-meter");
                            s.attr("style", f(o)), i && e.section.renderInto("", null, {
                                source: i,
                                target: s,
                                append: "replace",
                                transitionDeferred: !1
                            }, y)
                        }
                    }
                };
                var m = n.varRef.get();
                return "number" != typeof m ? s.create("datatype", "(meter:) can only be bound to a variable holding a number, not " + T(m) + ".") : R(e, {
                    source: '<tw-meter style="' + f(m) + '">' + (i || "") + "</tw-meter>"
                })
            }, [g, D, String, P(N(String, d, h)), P(N(d, h))]), [
                ["cycling-link"],
                ["seq-link", "sequence-link"]
            ].forEach(function (e, n) {
                return t.addCommand(e, function () {
                    return "" === (arguments.length <= 0 ? void 0 : arguments[0]) ? s.create("datatype", "The first string in a (" + e[0] + ":) can't be empty.") : arguments.length <= (g.isPrototypeOf(arguments.length <= 0 ? void 0 : arguments[0]) ? 2 : 1) ? s.create("datatype", "I need two or more strings to " + (n ? "sequence" : "cycle") + " through, not just '" + (t = arguments.length - 1, arguments.length <= t ? void 0 : arguments[t]) + "'.") : void 0;
                    var t
                }, function (e, t) {
                    for (var r = arguments.length, a = Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++) a[i - 2] = arguments[i];
                    var o = void 0;
                    g.isPrototypeOf(a[0]) && (o = a.shift());
                    var c = 0;
                    if (o && "two way" === o.bind) {
                        e.attr.push({
                            "data-2bind": !0
                        });
                        var u = a.indexOf(o.varRef.get());
                        u > -1 && (c = u)
                    }
                    var l = t.stackTop.tempVariables;

                    function p(t, r) {
                        var i = c >= a.length - 1 && n,
                            u = "" === a[c] ? "" : i ? a[c] : "<tw-link>" + a[c] + "</tw-link>";
                        if (i && (e.data.clickEvent = void 0), o && !r) {
                            var p = o.set(a[c]);
                            if (s.containsError(p)) return void t.replaceWith(p.render(a[c]))
                        }
                        var f = R({}, e, {
                            source: u,
                            transitionDeferred: !1
                        });
                        e.section.renderInto("", null, f, l)
                    }
                    a[c] && (e.data.clickEvent = function (e) {
                        c = (c + 1) % a.length, p(e, !1)
                    }) && (e.data.twoWayBindEvent = function (e, t, n) {
                        if (o.varRef.matches(t, n)) {
                            var r = o.varRef.get(),
                                i = a.indexOf(r);
                            i > -1 && i !== c && (c = i, p(e, !0))
                        }
                    });
                    var f = "<tw-link>" + a[c] + "</tw-link>";
                    if (o) {
                        var d = o.set(a[c]);
                        if (s.containsError(d)) return d
                    }
                    return R(e, {
                        source: f,
                        append: "replace",
                        transitionDeferred: !0
                    })
                }, [N(g, String), _(String)])
            }), n.onStartup(function () {
                return e(n.storyElement).on("change.dropdown-macro", "select", function () {
                    var t = e(this),
                        n = t.closest("tw-expression, tw-hook").data("dropdownEvent");
                    n && n(t)
                })
            }), t.addCommand("dropdown", function (e) {
                var t;
                return "" === (arguments.length <= 1 ? void 0 : arguments[1]) || "" === (t = (arguments.length <= 1 ? 0 : arguments.length - 1) - 1 + 1, arguments.length <= t ? void 0 : arguments[t]) ? s.create("datatype", "The first or last strings in a (dropdown:) can't be empty.", "Because empty strings create separators within (dropdown:)s, having them at the start or end doesn't make sense.") : (arguments.length <= 1 ? 0 : arguments.length - 1) <= 1 ? s.create("datatype", "I need two or more strings to create a (dropdown:) menu, not just " + (arguments.length <= 1 ? 0 : arguments.length - 1) + ".") : void 0
            }, function (t, r, a) {
                for (var i = arguments.length, o = Array(i > 3 ? i - 3 : 0), c = 3; c < i; c++) o[c - 3] = arguments[c];
                var u = 0;
                if ("two way" === a.bind) {
                    t.attr.push({
                        "data-2bind": !0
                    });
                    var l = o.indexOf(a.varRef.get());
                    l > -1 && (u = l)
                }
                var p = Math.max.apply(Math, _toConsumableArray(o.map(function (e) {
                        return [].concat(_toConsumableArray(e)).length
                    }))),
                    f = "<select>" + o.map(function (e, t) {
                        return "<option" + (t === u ? " selected" : "") + ("" === e ? " disabled" : "") + ">" + n.escape(e || "\u2500".repeat(p)) + "</option>"
                    }).join("\n") + "</select>";
                t.data.dropdownEvent = function (e) {
                    var t = e.val(),
                        n = a.set(t);
                    s.containsError(n) && e.replaceWith(n.render(t))
                }, t.data.twoWayBindEvent = function (e, t, n) {
                    if (a.varRef.matches(t, n)) {
                        var r = a.varRef.get(),
                            i = o.indexOf(r);
                        i > -1 && i !== u && (e.find("select").val(r), u = i)
                    }
                }, t.styles.push({
                    "background-color": function () {
                        return n.parentColours(e(this)).backgroundColour
                    }
                });
                var d = a.set(o[u]);
                return s.containsError(d) ? d : R(t, {
                    source: f,
                    append: "replace"
                })
            }, [g, String, _(String)]), n.onStartup(function () {
                return e(n.storyElement).on("input.checkbox-macro", "input[type=checkbox]", function () {
                    var t = e(this),
                        n = t.closest("tw-expression").data("checkboxEvent");
                    n && n(t)
                })
            });
            var $ = 1;
            t.addCommand("checkbox", function () {}, function (e, t, n, r) {
                var a = !1,
                    i = "checkbox-" + ++$;
                if ("two way" === n.bind) {
                    e.attr.push({
                        "data-2bind": !0
                    });
                    var o = n.varRef.get();
                    "boolean" == typeof o && (a = o), e.data.twoWayBindEvent = function (e, t, r) {
                        if (n.varRef.matches(t, r)) {
                            var a = n.varRef.get();
                            "boolean" == typeof a && e.children("input[type=checkbox]").prop("checked", a)
                        }
                    }
                }
                return e.data.checkboxEvent = function (e) {
                    var t = e.is(":checked"),
                        r = n.set(t);
                    s.containsError(r) && e.replaceWith(r.render(""))
                }, R(e, {
                    source: '<input id="' + i + '" type="checkbox" ' + (a ? "checked" : "") + '><label for="' + i + '">' + r + "</label>",
                    append: "replace"
                })
            }, [g, String]), n.onStartup(function () {
                return e(document).on("fullscreenchange", function () {
                    e("input[type=checkbox][id^=fullscreen]", n.storyElement).each(function (t, n) {
                        (e(n).closest("tw-expression").data("fullscreenEvent") || Object)(n)
                    })
                })
            }), t.addCommand("checkbox-fullscreen", function () {}, function (t, n, r) {
                var a = "fullscreenCheckbox-" + ++$;
                return t.data.fullscreenEvent = function (t) {
                    return e(t).prop("checked", !(!document.fullscreenElement && !document.msFullscreenElement))
                }, t.data.checkboxEvent = function () {
                    return o.toggleFullscreen()
                }, R(t, {
                    source: '<input id="' + a + '" type="checkbox" ' + (document.fullscreenEnabled || document.msFullscreenEnabled ? " " : "disabled ") + (document.fullscreenElement || document.msFullscreenElement ? "checked" : "") + '><label for="' + a + '">' + r + "</label>",
                    append: "replace"
                })
            }, [String]), n.onStartup(function () {
                return e(n.storyElement).on("input.input-box-macro", "textarea", function () {
                    var t = e(this),
                        n = t.closest("tw-expression").data("inputBoxEvent");
                    n && n(t)
                })
            }), ["input-box", "force-input-box"].forEach(function (e) {
                return t.addCommand(e, function () {
                    for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    var a = g.isPrototypeOf(n[0]),
                        i = "number" == typeof n[1 + a],
                        o = "string" == typeof n[1 + a + i],
                        c = n[+a];
                    if ("string" != typeof c || -1 === c.search(j) || !c.includes("=") && c.length > 1) return s.create("datatype", "The (" + e + ':) macro requires a sizing line("==X==", "==X", "=XXXX=" etc.) be provided, not ' + JSON.stringify(c) + ".");
                    if ("force-input-box" === e && !o) return s.create("datatype", "The (" + e + ":) macro requires a string of text to forcibly input.");
                    var u = 1 + a + i + o;
                    return n.length > u ? s.create("datatype", "An incorrect combination of values was given to this (" + e + ":) macro.") : void 0
                }, function (t, r) {
                    for (var a = arguments.length, i = Array(a > 2 ? a - 2 : 0), o = 2; o < a; o++) i[o - 2] = arguments[o];
                    var c = "force-input-box" === e,
                        u = g.isPrototypeOf(i[0]),
                        l = "number" == typeof i[1 + u],
                        p = u && i[0],
                        f = l ? i[1 + u] : 3,
                        d = O(i[+u]),
                        h = d.marginLeft,
                        y = d.size,
                        m = "string" == typeof i[1 + u + l] ? i[1 + u + l] : "",
                        v = c ? "" : m;
                    if ("two way" === p.bind) {
                        t.attr.push({
                            "data-2bind": !0
                        });
                        var b = p.varRef.get();
                        if ("string" == typeof b) {
                            v = c ? m.slice(0, b.length) : b;
                            var w = p.set(v);
                            if (s.containsError(w)) return w
                        }
                        t.data.twoWayBindEvent = function (e, t, n) {
                            if (p.varRef.matches(t, n)) {
                                var r = p.varRef.get();
                                "string" == typeof r && e.find("textarea").val(c ? m.slice(0, r.length) : r)
                            }
                        }
                    } else if (p) {
                        var T = p.set(c ? "" : m);
                        if (s.containsError(T)) return T
                    }!c && p && (t.data.inputBoxEvent = function (e) {
                        var t = e.val(),
                            n = p.set(t);
                        s.containsError(n) && e.replaceWith(n.render(""))
                    });
                    var S = '<textarea style="width:100%" rows=' + f + ">" + n.escape(v) + "</textarea>";
                    if (c) {
                        var x = Array.from(m);
                        t.data.inputBoxEvent = function (e) {
                            var t = e.val().length,
                                n = x.slice(0, t).join("");
                            if (e.val(n), p) {
                                var r = p.set(n);
                                s.containsError(r) && e.replaceWith(r.render(""))
                            }
                            return !0
                        }
                    }
                    return t.styles.push({
                        display: "block",
                        "margin-left": h + "%",
                        width: y + "%",
                        "border-style": function () {
                            return this.style.borderStyle || "solid"
                        }
                    }), R(t, {
                        source: S,
                        append: "replace"
                    })
                }, [N(g, String), P(N(M, String)), P(N(M, String)), P(String)])
            }), ["show", "rerun"].forEach(function (n) {
                return t.addCommand(n, z, function (t, r) {
                    for (var a = arguments.length, i = Array(a > 2 ? a - 2 : 0), o = 2; o < a; o++) i[o - 2] = arguments[o];
                    return i.forEach(function (a) {
                        return a.forEach(r, function (a) {
                            var i = a.data("hidden");
                            if (void 0 !== i != ("rerun" === n))
                                if (a.removeData("hidden"), i instanceof e) a.empty().append(i);
                                else {
                                    var o = a.data("tempVariables");
                                    r.renderInto("", null, R({}, t, {
                                        append: "replace",
                                        source: a.data("originalSource") || "",
                                        target: a
                                    }), o && Object.create(o))
                                }
                        })
                    }), t
                }, [_(l)])
            });
            var B = function (e) {
                return ["I can't use a dialog macro in " + e + ".", "Please rewrite this without putting such macros here."]
            };
            t.addCommand("hide", z, function (e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                n.forEach(function (t) {
                    return t.forEach(e, function (e) {
                        Boolean(e.data("hidden")) || e.data("hidden", e.contents().detach())
                    })
                })
            }, [_(l)], !1)("stop", z, z, [], !1)("load-game", z, function (e, t) {
                var n = localStorage.getItem(W("Saved Game") + t);
                if (!n) return s.create("saving", "I can't find a save slot named '" + t + "'!");
                var a = r.deserialise(e, n);
                if (a instanceof Error) {
                    var i = k({
                        message: "Sorry to interrupt... The story tried to load saved data, but there was a problem.\n" + a.message + "\n\nThat data might have been saved from a different version of this story. Should I delete it?\n(Type 'delete' and choose Yes to delete it.)\n\nEither way, the story will now continue without loading the data.",
                        defaultValue: "",
                        buttons: [{
                            name: "Yes",
                            confirm: !0,
                            callback: function () {
                                "delete" === i.find("input").last().val() && localStorage.removeItem(W("Saved Game") + t), e.unblock("")
                            }
                        }, {
                            name: "No",
                            cancel: !0,
                            callback: function () {
                                return e.unblock()
                            }
                        }]
                    });
                    return {
                        blocked: i
                    }
                }
                requestAnimationFrame(o.showPassage.bind(o, r.passage, !1))
            }, [String], !1)("mock-visits", function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                if (!o.options.debug) return s.create("operation", "(mock-visits:) cannot be used outside of debug mode.", "This macro is not meant to be used outside of debugging your story.");
                var r = t.find(function (e) {
                    return !a.hasValid(e)
                });
                return r ? s.create("datatype", "I can't mock-visit '" + r + "' because no passage with that name exists.") : void 0
            }, function (e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) n[a - 1] = arguments[a];
                r.mockVisits = S(n)
            }, [_(String)], !1)(["dialog", "alert"], function (e, t) {
                for (var r = arguments.length, a = Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++) a[i - 2] = arguments[i];
                if (g.isPrototypeOf(e)) {
                    if ("two way" === e.bind) return s.create("datatype", "(dialog:) shouldn't be given two-way bound variables.");
                    if (void 0 === t) return s.create("datatype", "(dialog:) needs a message string to display.")
                } else void 0 !== t && a.unshift(t);
                var o = a.findIndex(function (e) {
                    return "" === e
                });
                if (o > -1) return s.create("datatype", "(dialog:)'s " + n.nth(o + 1) + " link text shouldn't be an empty string.")
            }, function (e, t, n, r) {
                for (var a = arguments.length, i = Array(a > 4 ? a - 4 : 0), o = 4; o < a; o++) i[o - 4] = arguments[o];
                return g.isPrototypeOf(n) || (void 0 !== r && i.unshift(r), r = n, n = void 0), i.length || (i = ["OK"]), {
                    blocked: k({
                        section: t,
                        message: r,
                        cd: e,
                        buttons: i.map(function (e) {
                            return {
                                name: e,
                                callback: function () {
                                    t.unblock(n && n.set(e) || "")
                                }
                            }
                        })
                    })
                }
            }, [N(g, String), I(String)])("open-url", z, function (e, t) {
                window.open(t, "")
            }, [String], !1)(["restart", "reload"], z, function () {
                if (r.pastLength < 1) return s.create("infinite", "I mustn't (restart:) the story in the starting passage.");
                r.hasSessionStorage && sessionStorage.removeItem("Saved Session"), window.location.reload()
            }, [], !1)("goto-url", z, function (e, t) {
                window.location.assign(t)
            }, [String], !1)("ignore", z, z, [I(E)])("assert-exists", function (e) {
                if ("" === e) return s.create("datatype", "(assert-exists:) mustn't be given an empty string.")
            }, function (e, t, n) {
                var r = 0;
                return ("string" == typeof n ? l.create({
                    type: "string",
                    data: n
                }) : n).forEach(t, function () {
                    ++r
                }), r ? e : s.create("assertion", "I didn't see any " + ("string" == typeof n ? "text occurrences of" : "hooks matching") + " " + x(n) + " in this passage.")
            }, [N(l, String)]), t.add("assert", function (e, t) {
                return t ? {
                    TwineScript_TypeID: "instant",
                    TwineScript_TypeName: "an (assert:) operation",
                    TwineScript_ObjectName: "an (assert:) operation",
                    TwineScript_Unstorable: !0,
                    TwineScript_Print: function () {
                        return ""
                    }
                } : R(s.create("assertion", "An assertion failed: "), {
                    appendTitleText: !0
                })
            }, [Boolean])("save-game", function (e, t, n) {
                if (n = n || "", !r.hasStorage) return !1;
                var a = r.serialise();
                if (s.containsError(a)) return a;
                if (!1 === a) return !1;
                try {
                    return localStorage.setItem(W("Saved Game") + t, a), localStorage.setItem(W("Saved Game Filename") + t, n), !0
                } catch (e) {
                    return !1
                }
            }, [String, P(String)])("prompt", function (e, t, n, r, a) {
                if (e.stackTop && e.stackTop.evaluateOnly) return s.create.apply(s, ["macrocall"].concat(_toConsumableArray(B(e.stackTop.evaluateOnly))));
                if ("" === a) return s.create("datatype", "The text for (prompt:)'s confirm link can't be blank.");
                var i = k({
                    section: e,
                    message: t,
                    defaultValue: n,
                    buttons: [{
                        name: a || "OK",
                        confirm: !0,
                        callback: function () {
                            return e.unblock(i.find("input").last().val())
                        }
                    }].concat("" === r ? [] : {
                        name: r || "Cancel",
                        cancel: !0,
                        callback: function () {
                            return e.unblock(n)
                        }
                    })
                });
                e.stackTop.blocked = i, setTimeout(function () {
                    return i.find("input").last().focus()
                }, 100)
            }, [String, String, P(String), P(String)])("confirm", function (e, t, n, r) {
                if (e.stackTop && e.stackTop.evaluateOnly) return s.create.apply(s, ["macrocall"].concat(_toConsumableArray(B(e.stackTop.evaluateOnly))));
                if ("" === r) return s.create("datatype", "The text for (confirm:)'s confirm link can't be blank.");
                var a = k({
                    section: e,
                    message: t,
                    defaultValue: !1,
                    buttons: [{
                        name: r || "OK",
                        confirm: !0,
                        callback: function () {
                            return e.unblock(!0)
                        }
                    }].concat("" === n ? [] : {
                        name: n || "Cancel",
                        cancel: !0,
                        callback: function () {
                            return e.unblock(!1)
                        }
                    })
                });
                e.stackTop.blocked = a
            }, [String, P(String), P(String)])("page-url", function () {
                return window.location.href
            }, []), i.options.blockerMacros.push("prompt", "confirm")
        }), define("macrolib/datastructures", ["jquery", "utils", "utils/naturalsort", "macros", "utils/operationutils", "state", "engine", "passages", "datatypes/lambda", "datatypes/datatype", "datatypes/typedvar", "internaltypes/varref", "internaltypes/twineerror"], function (e, t, n, r, a, i, o, s, c, u, l, p, f) {
            var d = t.shuffled,
                h = t.permutations,
                y = a.objectName,
                m = a.subset,
                g = a.collectionType,
                v = a.isValidDatamapName,
                b = a.is,
                w = a.unique,
                T = a.clone,
                S = a.range,
                x = r.TypeSignature,
                k = x.optional,
                O = x.rest,
                j = x.either,
                A = x.zeroOrMore,
                C = x.Any,
                E = x.nonNegativeInteger;
            r.add(["a", "array"], function (e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                return n
            }, A(j(l, C)))("range", function (e, t, n) {
                return S(t, n)
            }, [parseInt, parseInt])("subarray", function (e, t, n, r) {
                return m(t, n, r)
            }, [Array, parseInt, parseInt])("reversed", function (e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                return n.reverse().map(T)
            }, A(C))("shuffled", function (e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                return d.apply(void 0, n).map(T)
            }, [C, O(C)])("sorted", function (e) {
                for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) r[a - 1] = arguments[a];
                return r.sort(n("en"))
            }, [j(Number, String), O(j(Number, String))])("rotated", function (e, t) {
                for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++) r[a - 2] = arguments[a];
                return 0 === (t *= -1) ? f.create("macrocall", "I can't rotate these values by 0 positions.") : Math.abs(t) >= r.length ? f.create("macrocall", "I can't rotate these " + r.length + " values by " + t + " positions.") : r.slice(t).concat(r.slice(0, t)).map(T)
            }, [parseInt, C, O(C)])("rotated-to", function (e, t) {
                for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++) r[a - 2] = arguments[a];
                var i = t.filter(e, r);
                if (f.containsError(i)) return i;
                if (!i.length) return f.create("macrocall", "None of these " + r.length + " values matched the lambda, so I can't rotate them.");
                var o = r.indexOf(i[0]);
                return r.slice(o).concat(r.slice(0, o)).map(T)
            }, [c.TypeSignature("where"), C, O(C)])("repeated", function (e, t) {
                for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++) r[a - 2] = arguments[a];
                for (var i = []; t-- > 0;) i.push.apply(i, r);
                return i.map(T)
            }, [E, O(C)])("interlaced", function (e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                for (var a = Math.min.apply(Math, _toConsumableArray(n.map(function (e) {
                        return e.length
                    }))), i = [], o = 0; o < a; o += 1)
                    for (var s = 0; s < n.length; s += 1) i.push(T(n[s][o]));
                return i
            }, [Array, O(Array)])("permutations", function (e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                return n.length ? h.apply(void 0, n) : []
            }, [A(C)]), r.add("altered", function (e, t) {
                for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++) r[a - 2] = arguments[a];
                return r.map(function (n, r) {
                    return t.apply(e, {
                        loop: n,
                        pos: r + 1
                    })
                })
            }, [c.TypeSignature("via"), A(C)])("find", function (e, t) {
                for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++) r[a - 2] = arguments[a];
                return t.filter(e, r)
            }, [c.TypeSignature("where"), A(C)])(["all-pass", "pass"], function (e, t) {
                for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++) r[a - 2] = arguments[a];
                var i = t.filter(e, r);
                return f.containsError(i) || i.length === r.length
            }, [c.TypeSignature("where"), A(C)])("some-pass", function (e, t) {
                for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++) r[a - 2] = arguments[a];
                var i = t.filter(e, r);
                return f.containsError(i) || i.length > 0
            }, [c.TypeSignature("where"), A(C)])("none-pass", function (e, t) {
                for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++) r[a - 2] = arguments[a];
                var i = t.filter(e, r);
                return f.containsError(i) || 0 === i.length
            }, [c.TypeSignature("where"), A(C)])("folded", function (e, t) {
                for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++) r[a - 2] = arguments[a];
                return "where" in t && (r = t.filter(e, r)), f.containsError(r) || r.reduce(function (n, r, a) {
                    return t.apply(e, {
                        making: n,
                        loop: r,
                        pos: a + 1
                    })
                })
            }, [j(c.TypeSignature("where", "via", "making"), c.TypeSignature("via", "making")), O(C)]), r.add("datanames", function (e, t) {
                return Array.from(t.keys()).sort(n("en"))
            }, [Map])("datavalues", function (e, t) {
                return Array.from(t.entries()).sort(n("en", function (e) {
                    return String(e[0])
                })).map(function (e) {
                    return T(e[1])
                })
            }, [Map])("dataentries", function (e, t) {
                return Array.from(t.entries()).sort(function (e, t) {
                    return [e[0], t[0]].sort(n("en"))[0] === e[0] ? -1 : 1
                }).map(function (e) {
                    return new Map([
                        ["name", e[0]],
                        ["value", T(e[1])]
                    ])
                })
            }, [Map])("history", function (e, t) {
                var n = i.mockVisits.concat(i.pastPassageNames());
                if (!t) return n;
                var r = t.filter(e, n.map(function (e) {
                    return s.get(e)
                }));
                return f.containsError(r) ? r : r.map(function (e) {
                    return e.get("name")
                })
            }, [k(c.TypeSignature("where"))])("passage", function (e, t) {
                return T(s.get(t || i.passage)) || f.create("macrocall", "There's no passage named '" + t + "' in this story.")
            }, [k(String)])("passages", function (e, t) {
                var r = n("en"),
                    a = [].concat(_toConsumableArray(s.values())).map(function (e) {
                        return T(e)
                    }),
                    i = t ? t.filter(e, a) : a,
                    o = f.containsError(i);
                return o || i.sort(function (e, t) {
                    return r(e.get("name"), t.get("name"))
                })
            }, [k(c.TypeSignature("where"))])("open-storylets", function (e, t) {
                if (e.stackTop.evaluateOnly) return f.create("macrocall", "(open-storylets:) can't be used in " + e.stackTop.evaluateOnly + ".");
                var n = s.getStorylets(e, t),
                    r = f.containsError(n);
                return r || n.map(T)
            }, [k(c.TypeSignature("where"))])("savedgames", function () {
                function e(e) {
                    return "(" + e + " " + o.options.ifid + ") "
                }
                var t = 0,
                    n = void 0,
                    r = new Map;
                do {
                    if (!i.hasStorage) break;
                    n = localStorage.key(t), t += 1;
                    var a = e("Saved Game");
                    n && n.startsWith(a) && (n = n.slice(a.length), r.set(n, localStorage.getItem(e("Saved Game Filename") + n)))
                } while (n);
                return r
            }, [])(["datamap", "dm"], function (e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                var a = void 0,
                    i = new Map,
                    o = n.reduce(function (e, t) {
                        var n = void 0;
                        if (f.containsError(e)) return e;
                        if (void 0 === a) a = t;
                        else {
                            if (n = f.containsError(v(i, a))) return n;
                            if (i.has(a)) return f.create("macrocall", "You used the same data name (" + y(a) + ") twice in the same (datamap:) call.");
                            i.set(a, T(t)), a = void 0
                        }
                        return e
                    }, !0);
                return f.containsError(o) ? o : void 0 !== a ? f.create("macrocall", "This datamap has a data name without a value.") : i
            }, A(j(l, C)))(["dataset", "ds"], function (e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                return new Set(n.filter(w).map(T))
            }, A(C))("count", function e(t, n) {
                for (var r = arguments.length, a = Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++) a[i - 2] = arguments[i];
                if (a.length > 1) {
                    var o, s = a.map(function (r) {
                        return e(t, n, r)
                    });
                    return (o = f.containsError(s)) ? o : s.reduce(function (e, t) {
                        return e + t
                    }, 0)
                }
                var c = a[0];
                switch (g(n)) {
                    case "dataset":
                    case "datamap":
                        return f.create("macrocall", "(count:) shouldn't be given a datamap or dataset.", "You should use the 'contains' operator instead. For instance, write: $variable contains 'value'.");
                    case "string":
                        return "string" != typeof c ? f.create("macrocall", y(n) + " can't contain  " + y(c) + " because it isn't also a string.") : c ? n.split(c).length - 1 : 0;
                    case "array":
                        return n.reduce(function (e, t) {
                            return e + b(t, c)
                        }, 0);
                    default:
                        return f.create("macrocall", y(n) + " can't contain values, let alone " + y(c) + ".")
                }
            }, [C, O(C)])
        }), define("macrolib/stylechangers", ["jquery", "macros", "utils", "utils/renderutils", "datatypes/colour", "datatypes/hookset", "datatypes/gradient", "datatypes/changercommand", "datatypes/lambda", "internaltypes/changedescriptor", "internaltypes/twineerror"], function (e, t, n, r, a, i, o, s, c, u, l) {
            var p = r.geomParse,
                f = r.geomStringRegExp,
                d = Object.assign,
                h = t.TypeSignature,
                y = h.either,
                m = h.wrapped,
                g = h.optional,
                v = h.Any,
                b = h.Everything,
                w = h.zeroOrMore,
                T = h.rest,
                S = h.insensitiveSet,
                x = h.positiveNumber,
                k = h.positiveInteger,
                O = h.nonNegativeNumber,
                j = h.percent,
                A = [m(Boolean, 'If you gave a number, you may instead want to check that the number is not 0. If you gave a string, you may instead want to check that the string is not "".')];
            n.onStartup(function () {
                return e(n.storyElement).on("mouseenter.hover-macro", "[hover=false]", function () {
                    var t = e(this),
                        n = t.data("hoverChanger");
                    t.data({
                        mouseoutStyle: t.attr("style") || ""
                    }), u.create({
                        target: t
                    }, n).update(), t.attr("hover", !0)
                }).on("mouseleave.hover-macro", "[hover=true]", function () {
                    var t = e(this),
                        n = t.data("mouseoutStyle");
                    t.attr("style", n).removeData("mouseoutStyle").attr("hover", !1)
                })
            });
            var C, E, _ = S("instant", "dissolve", "fade", "rumble", "shudder", "pulse", "zoom", "flicker", "slideleft", "slideright", "slideup", "slidedown", "fadeleft", "faderight", "fadeup", "fadedown", "blur"),
                N = S("dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset", "none");
            t.addChanger("if", function (e, t) {
                return s.create("if", [t])
            }, function (e, t) {
                return e.enabled = e.enabled && t
            }, A)("unless", function (e, t) {
                return s.create("unless", [t])
            }, function (e, t) {
                return e.enabled = e.enabled && !t
            }, A)("elseif", function (e, t) {
                return "lastHookShown" in e.stack[0] ? s.create("elseif", [!1 === e.stack[0].lastHookShown && !!t]) : l.create("macrocall", "There's no (if:) or something else before this to do (else-if:) with.")
            }, function (e, t) {
                return e.enabled = e.enabled && t
            }, A)("else", function (e) {
                return "lastHookShown" in e.stack[0] ? s.create("else", [!1 === e.stack[0].lastHookShown]) : l.create("macrocall", "There's nothing before this to do (else:) with.")
            }, function (e, t) {
                return e.enabled = e.enabled && t
            }, null)("hidden", function () {
                return s.create("hidden")
            }, function (e) {
                return e.enabled = !1
            }, null)(["verbatim", "v6m"], function () {
                return s.create("verbatim")
            }, function (e) {
                return e.verbatim = !0
            }, null)("live", function (e, t) {
                return s.create("live", [t])
            }, function (e, t) {
                e.enabled = !1, e.data.live = {
                    delay: t
                }
            }, g(Number))("event", function (e, t) {
                return s.create("event", [t])
            }, function (e, t) {
                e.enabled = !1, e.data.live = {
                    event: t
                }
            }, c.TypeSignature("when"))("more", function () {
                return s.create("more")
            }, function (e) {
                e.enabled = !1, e.data.live = {
                    event: {
                        when: !0,
                        filter: function (e) {
                            return 0 !== e.eval("Operations").Identifiers.exits ? [] : [!0]
                        }
                    }
                }
            }, null)("after", function (e, t, n) {
                return s.create("after", [t].concat(void 0 !== n ? [n] : []))
            }, function (e, t, r) {
                e.enabled = !1, e.data.live = {
                    event: {
                        when: !0,
                        filter: function (e) {
                            return n.anyInputDown() && r && (t -= r), e.eval("Operations").Identifiers.time > t ? [!0] : []
                        }
                    }
                }
            }, [x, g(O)])("hook", function (e, t) {
                return t ? s.create("hook", [t]) : l.create("datatype", "(hook:) names can't be empty strings.")
            }, function (e, t) {
                return e.attr.push({
                    name: t
                })
            }, [String])(["for", "loop"], function (e, t) {
                for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++) r[a - 2] = arguments[a];
                return t.loop ? s.create("for", [t].concat(r)) : l.create("datatype", "The lambda provided to (for:) must refer to a temp variable, not just 'it'.")
            }, function (e, t) {
                for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++) r[a - 2] = arguments[a];
                var i, o = t.filter(e.section, r);
                if (i = l.containsError(o)) return i;
                e.loopVars[t.loop.getName()] = o || []
            }, [c.TypeSignature("where"), w(v)])(["transition", "t8n"], function (e, t) {
                return s.create("transition", [n.insensitiveName(t)])
            }, function (t, r) {
                return t.transition = r, "zoom" === r && (t.transitionOrigin = function () {
                    var t = e(this).offset(),
                        r = t.left,
                        a = t.top;
                    return n.mouseCoords.x - r + "px " + (n.mouseCoords.y - a) + "px"
                }), t
            }, [_])(["transition-time", "t8n-time"], function (e, t) {
                return s.create("transition-time", [t])
            }, function (e, t) {
                return e.transitionTime = t, e.data.passageT8n = d(e.data.passageT8n || {}, {
                    time: t
                }), e
            }, [x])(["transition-delay", "t8n-delay"], function (e, t) {
                return s.create("transition-delay", [t])
            }, function (e, t) {
                return e.transitionDelay = t, e
            }, [O])(["transition-skip", "t8n-skip"], function (e, t) {
                return s.create("transition-skip", [t])
            }, function (e, t) {
                return e.transitionSkip = t, e
            }, [x])(["transition-depart", "t8n-depart"], function (e, t) {
                return s.create("transition-depart", [n.insensitiveName(t)])
            }, function (t, r) {
                return t.data.passageT8n = d(t.data.passageT8n || {}, {
                    depart: r
                }), "zoom" === r && (t.data.passageT8n.departOrigin = function () {
                    var t = e(this).offset(),
                        r = t.left,
                        a = t.top;
                    return n.mouseCoords.x - r + "px " + (n.mouseCoords.y - a) + "px"
                }), t
            }, [_])(["transition-arrive", "t8n-arrive"], function (e, t) {
                return s.create("transition-arrive", [n.insensitiveName(t)])
            }, function (t, r) {
                return t.data.passageT8n = d(t.data.passageT8n || {}, {
                    arrive: r
                }), "zoom" === r && (t.data.passageT8n.arriveOrigin = function () {
                    var t = e(this),
                        r = t.offset(),
                        a = r.left,
                        i = r.top,
                        o = t.height();
                    return {
                        "transform-origin": 100 * (n.mouseCoords.x - a) / t.width() + "% " + 100 * (n.mouseCoords.y - i) / o + "%",
                        height: o + "px"
                    }
                }), t
            }, [_])("button", function () {
                return s.create("button", [])
            }, function (e) {
                return e.attr.push({
                    class: function () {
                        return this.className + (this.classList.contains("enchantment-button") ? "" : " ".repeat(this.className.length > 0) + "enchantment-button")
                    }
                }), e
            }, [])(["border", "b4r"], function (e) {
                for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) r[a - 1] = arguments[a];
                return s.create("border", r.map(n.insensitiveName))
            }, function (t) {
                for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
                return t.styles.push({
                    display: function () {
                        var t = e(this).css("display");
                        return r.every(function (e) {
                            return "none" === e
                        }) || !t.includes("inline") ? t : "inline-block"
                    },
                    "border-style": r.join(" "),
                    "border-width": function () {
                        return this.style.borderWidth || "2px"
                    }
                }), t
            }, [N].concat(_toConsumableArray(Array(3).fill(g(N)))))(["border-size", "b4r-size"], function (e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                return s.create("border-size", n)
            }, function (e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                return e.styles.push({
                    "border-width": n.map(function (e) {
                        return e + "px"
                    }).join(" ")
                }), e
            }, [O].concat(_toConsumableArray(Array(3).fill(g(O)))))("corner-radius", function (e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                return s.create("corner-radius", n)
            }, function (e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                return e.styles.push({
                    "border-radius": n.map(function (e) {
                        return e + "px"
                    }).join(" "),
                    padding: function () {
                        return this.style.padding || n.map(function (e) {
                            return e + "px"
                        }).join(" ")
                    }
                }), e
            }, [O].concat(_toConsumableArray(Array(3).fill(g(O)))))(["border-colour", "b4r-colour", "border-color", "b4r-color"], function (e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                return s.create("border-colour", n.map(function (e) {
                    return a.isPrototypeOf(e) ? e.toRGBAString(e) : e
                }))
            }, function (e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                return e.styles.push({
                    "border-color": n.join(" ")
                }), e
            }, [y(String, a)].concat(_toConsumableArray(Array(3).fill(g(y(String, a))))))("opacity", function (e, t) {
                return s.create("opacity", [t])
            }, function (e, t) {
                return e.styles.push({
                    opacity: t
                })
            }, [j])("font", function (e, t) {
                return s.create("font", [t])
            }, function (e, t) {
                return e.styles.push({
                    "font-family": t
                }), e
            }, [String])("align", function (e, t) {
                var n = void 0,
                    r = t.indexOf("><");
                if (!/^(==+>|<=+|=+><=+|<==+>)$/.test(t)) return l.create("datatype", 'The (align:) macro requires an alignment arrow ("==>", "<==", "==><=" etc.) be provided, not "' + t + '"');
                if (~r) {
                    var a = Math.round(r / (t.length - 2) * 50);
                    n = d({
                        "text-align": "center",
                        "max-width": "50%"
                    }, 25 === a ? {
                        "margin-left": "auto",
                        "margin-right": "auto"
                    } : {
                        "margin-left": a + "%"
                    })
                } else n = "<" === t[0] && ">" === t.slice(-1) ? {
                    "text-align": "justify",
                    "max-width": "50%"
                } : t.includes(">") ? {
                    "text-align": "right"
                } : {
                    "text-align": "left"
                };
                return n.display = "inline-block", s.create("align", [n])
            }, function (e, t) {
                e.styles.push(t)
            }, [String])(["text-colour", "text-color", "color", "colour"], function (e, t) {
                return s.create("text-colour", [t])
            }, function (e, t) {
                return a.isPrototypeOf(t) && (t = t.toRGBAString(t)), e.styles.push({
                    color: t
                }), e
            }, [y(String, a)])(["text-size", "size"], function (e, t) {
                return s.create("text-size", [t])
            }, function (e, t) {
                return e.styles.push({
                    "font-size": 24 * t + "px",
                    "line-height": 36 * t + "px"
                }), e
            }, [O])("text-indent", function (e, t) {
                return s.create("text-indent", [t])
            }, function (e, t) {
                return e.styles.push({
                    "text-indent": t + "px",
                    display: "inline-block"
                }), e
            }, [O])(["text-rotate-z", "text-rotate"], function (e, t) {
                return s.create("text-rotate-z", [t])
            }, function (t, n) {
                return t.styles.push({
                    display: "inline-block",
                    transform: function () {
                        var t = e(this).css("transform") || "";
                        return "none" === t && (t = ""), t + " rotate(" + n + "deg)"
                    }
                }), t
            }, [Number])("text-rotate-y", function (e, t) {
                return s.create("text-rotate-y", [t])
            }, function (t, n) {
                return t.styles.push({
                    display: "inline-block",
                    transform: function () {
                        var t = e(this).css("transform") || "";
                        return "none" === t && (t = ""), t + " perspective(50vw) rotateY(" + n + "deg)"
                    }
                }), t
            }, [Number])("text-rotate-x", function (e, t) {
                return s.create("text-rotate-x", [t])
            }, function (t, n) {
                return t.styles.push({
                    display: "inline-block",
                    transform: function () {
                        var t = e(this).css("transform") || "";
                        return "none" === t && (t = ""), t + " perspective(50vw) rotateX(" + n + "deg)"
                    }
                }), t
            }, [Number])(["background", "bg"], function (e, t) {
                return s.create("background", [t])
            }, function (t, r) {
                var i = void 0;
                return a.isPrototypeOf(r) ? r = r.toRGBAString(r) : o.isPrototypeOf(r) && (r = r.toLinearGradientString(r)), i = a.isHexString(r) || a.isCSS3Function(r) ? {
                    "background-color": r
                } : r.startsWith("linear-gradient(") || r.startsWith("repeating-linear-gradient(") ? {
                    "background-image": r
                } : {
                    "background-size": "cover",
                    "background-image": "url(" + r + ")"
                }, t.styles.push(i, {
                    display: function () {
                        var t = e(this);
                        return !t.children().length || n.childrenProbablyInline(t) ? e(this).css("display") : "block"
                    }
                }), t
            }, [y(String, a, o)]).apply(void 0, _toConsumableArray((C = {
                color: function () {
                    return "transparent"
                }
            }, E = d(Object.create(null), {
                none: {},
                bold: {
                    "font-weight": "bold"
                },
                italic: {
                    "font-style": "italic"
                },
                underline: {
                    "text-decoration": "underline"
                },
                doubleunderline: {
                    "text-decoration": "underline",
                    "text-decoration-style": "double"
                },
                wavyunderline: {
                    "text-decoration": "underline",
                    "text-decoration-style": "wavy"
                },
                strike: {
                    "text-decoration": "line-through"
                },
                doublestrike: {
                    "text-decoration": "line-through",
                    "text-decoration-style": "double"
                },
                wavystrike: {
                    "text-decoration": "line-through",
                    "text-decoration-style": "wavy"
                },
                superscript: {
                    "vertical-align": "super",
                    "font-size": ".83em"
                },
                subscript: {
                    "vertical-align": "sub",
                    "font-size": ".83em"
                },
                blink: {
                    animation: "fade-in-out 1s steps(1,end) infinite alternate"
                },
                shudder: {
                    animation: "shudder linear 0.1s 0s infinite"
                },
                mark: {
                    "background-color": "hsla(60, 100%, 50%, 0.6)"
                },
                condense: {
                    "letter-spacing": "-0.08em"
                },
                expand: {
                    "letter-spacing": "0.1em"
                },
                outline: [{
                    "text-shadow": function () {
                        var t = e(this).css("color");
                        return "-1px -1px 0 " + t + ", 1px -1px 0 " + t + ",-1px  1px 0 " + t + ", 1px  1px 0 " + t
                    }
                }, {
                    color: function () {
                        return n.parentColours(e(this)).backgroundColour
                    }
                }],
                shadow: {
                    "text-shadow": function () {
                        return "0.08em 0.08em 0.08em " + e(this).css("color")
                    }
                },
                emboss: {
                    "text-shadow": function () {
                        return "0.04em 0.04em 0em " + e(this).css("color")
                    }
                },
                smear: [{
                    "text-shadow": function () {
                        var t = e(this).css("color");
                        return "0em   0em 0.02em " + t + ",-0.2em 0em  0.5em " + t + ", 0.2em 0em  0.5em " + t
                    }
                }, C],
                blur: [{
                    "text-shadow": function () {
                        return "0em 0em 0.08em " + e(this).css("color")
                    }
                }, C],
                blurrier: [{
                    "text-shadow": function () {
                        return "0em 0em 0.2em " + e(this).css("color")
                    },
                    "user-select": "none"
                }, C],
                mirror: {
                    display: "inline-block",
                    transform: "scaleX(-1)"
                },
                upsidedown: {
                    display: "inline-block",
                    transform: "scaleY(-1)"
                },
                fadeinout: {
                    animation: "fade-in-out 2s ease-in-out infinite alternate"
                },
                rumble: {
                    animation: "rumble linear 0.1s 0s infinite"
                },
                sway: {
                    animation: "sway linear 2.5s 0s infinite"
                },
                buoy: {
                    animation: "buoy linear 2.5s 0s infinite"
                },
                fidget: {
                    animation: function () {
                        return "fidget step-end 60s " + 60 * -Math.random() + "s infinite" + (Math.random() < .5 ? " reverse" : "")
                    }
                }
            }), ["text-style", function (e) {
                    for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) r[a - 1] = arguments[a];
                    return s.create("text-style", r.map(n.insensitiveName))
                }, function (e) {
                    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    for (var a = 0; a < n.length; a += 1) "none" === n[a] ? e.styles = [] : e.styles = e.styles.concat(E[n[a]]);
                    return e
                },
                [T(S.apply(void 0, _toConsumableArray(Object.keys(E))))]
            ])))("collapse", function () {
                return s.create("collapse")
            }, function (e) {
                return e.attr.push({
                    collapsing: !0
                }), e
            }, [])("hover-style", function (e, t) {
                var n = u.create(),
                    r = (t.run(n), n.summary());
                return r + "" == "styles" || r.every(function (e) {
                    return "styles" === e || "attr" === e
                }) && n.attr.every(function (e) {
                    return Object.keys(e) + "" == "style"
                }) ? s.create("hover-style", [t]) : l.create("datatype", "The changer given to (hover-style:) must only change the hook's style.")
            }, function (e, t) {
                return e.data.hoverChanger = t, e.attr.push({
                    hover: function (e, t) {
                        return void 0 !== t && t
                    }
                }), e
            }, [s])("css", function (e, t) {
                return t.trim().endsWith(";") || (t += ";"), s.create("css", [t])
            }, function (t, n) {
                return t.attr.push({
                    style: function () {
                        return (e(this).attr("style") || "") + n
                    }
                }), t
            }, [String])("test-true", function () {
                return s.create("test-true", [])
            }, function (e) {
                return e.enabled = !0
            }, w(b))("test-false", function () {
                return s.create("test-false", [])
            }, function (e) {
                return e.enabled = !1
            }, w(b)), t.addCommand("animate", e.noop, function (e, t, r, a, i) {
                r.forEach(t, function (t) {
                    var r = void 0;
                    if ("zoom" === name) {
                        var o = t.offset(),
                            s = o.left,
                            c = o.top;
                        r = n.mouseCoords.x - s + "px " + (n.mouseCoords.y - c) + "px"
                    }
                    n.transitionIn(t, a, e.transitionTime || i, e.transitionDelay, e.transitionSkip, 0, r)
                })
            }, [T(i), S.apply(void 0, _toConsumableArray(_.innerType.filter(function (e) {
                return "instant" !== e
            }))), g(x)]), ["box", "float-box"].forEach(function (r) {
                return t.addChanger(r, function (e, t, n) {
                    var a = -1 === t.search(f) || t.length > 1 && !t.includes("="),
                        i = "float-box" === r && (-1 === n.search(f) || n.length > 1 && !n.includes("="));
                    return a || i ? l.create("datatype", "The (" + r + ':) macro requires a sizing line("==X==", "==X", "=XXXX=" etc.) be provided, not "' + (a ? t : n) + '".') : s.create(r, [t, n].filter(function (e) {
                        return void 0 !== e
                    }))
                }, function (t, a, i) {
                    var o, s = p(a),
                        c = s.marginLeft,
                        u = s.size,
                        l = void 0;
                    if ("float-box" === r) {
                        var f = p(i);
                        l = f.marginLeft, i = f.size
                    }
                    var h = "box" === r ? "%" : "vw",
                        y = (_defineProperty(o = {
                            display: "block",
                            width: u + h,
                            "max-width": u + h
                        }, "box" === r ? "margin-left" : "left", c + h), _defineProperty(o, "box-sizing", "content-box"), _defineProperty(o, "overflow-y", "auto"), _defineProperty(o, "padding", function () {
                            var t = e(this).css("padding");
                            return t && "0px" !== t ? t : "1em"
                        }), o);
                    return void 0 !== i && (y.height = i + ("box" === r ? "em" : "vh")), "float-box" === r && d(y, {
                        position: "fixed",
                        top: l + "vh",
                        "background-color": function () {
                            return n.parentColours(e(this)).backgroundColour
                        }
                    }), t.styles.push(y), t
                }, [String, "box" === r ? g(k) : String])
            })
        }), define("internaltypes/enchantment", ["jquery", "utils", "internaltypes/changedescriptor", "datatypes/changercommand", "utils/operationutils", "internaltypes/twineerror", "utils/renderutils"], function (e, t, n, r, a, i, o) {
            var s = a.objectName,
                c = o.collapse,
                u = {
                    create: function (n) {
                        return t.assertOnlyHas(n, ["scope", "localHook", "section", "attr", "data", "changer", "functions", "lambda", "name"]), Object.assign(Object.create(this), {
                            enchantments: e()
                        }, n)
                    },
                    enchantScope: function () {
                        var a = this,
                            o = this.attr,
                            u = this.data,
                            l = this.functions,
                            p = this.section,
                            f = this.scope,
                            d = this.localHook,
                            h = this.lambda,
                            y = [];
                        f.forEach(p, function (m, g) {
                            if (!d || (d.jquery ? d : d.hooks(p)).has(m[0]).length) {
                                var v = void 0;
                                if (h)
                                    if (v = h.apply(p, {
                                            loop: f.TwineScript_GetProperty(g),
                                            pos: g + 1
                                        }), i.containsError(v)) m.replaceWith(v.render("")), h = v = null;
                                    else if (r.isPrototypeOf(v)) {
                                    var b = v.summary();
                                    (b.includes("newTargets") || b.includes("target")) && (m.replaceWith(i.create("macrocall", "The changer produced by the 'via' lambda given to enchantment macros can't include a revision or enchantment changer like (replace:) or (click:).").render("")), h = v = null)
                                } else m.replaceWith(i.create("macrocall", "The 'via' lambda given to enchantment macros must return a changer, not " + s(v) + ".").render("")), h = v = null;
                                else v = a.changer;
                                var w = !o && !u && (!v || v.summary().every(function (e) {
                                        return e.startsWith("transition")
                                    })),
                                    T = w ? m : m.wrap("<tw-enchantment>").parent();
                                if (o && T.attr(o), u && T.data(u), l && l.forEach(function (e) {
                                        return e(T)
                                    }), v) {
                                    var S = n.create({
                                        section: p,
                                        target: T
                                    });
                                    if (v.run(S), S.update(), m.is(t.storyElement)) {
                                        var x = Object.keys(Object.assign.apply(Object, [{}].concat(_toConsumableArray(S.styles))));
                                        m.css(x.reduce(function (e, t) {
                                            return "background-color" === t || "background-image" === t ? e.background = "transparent" : e[t] = "inherit", e
                                        }, {})), T.data({
                                            enchantedProperties: x
                                        })
                                    } else if (m.is("tw-passage") && S.styles.some(function (e) {
                                            return "margin-left" in e || "margin" in e || "margin-right" in e
                                        })) {
                                        var k = "padding-left",
                                            O = "padding-right";
                                        t.storyElement.css(k, "0px").css(O, "0px"), T.data({
                                            enchantedProperties: [k, O]
                                        })
                                    }
                                }
                                m.is(t.storyElement) && T.css({
                                    width: "100%",
                                    height: "100%"
                                }), "true" === T.attr("collapsing") && (T.find("[collapsing=false]").each(function () {
                                    e(this).removeAttr("collapsing")
                                }), c(T)), w || y.push(T)
                            }
                        }), this.enchantments = e(y)
                    },
                    disenchant: function () {
                        this.enchantments.each(function () {
                            e(this).contents().unwrap();
                            var n = e(this).data("enchantedProperties");
                            n && t.storyElement.css(n.reduce(function (e, t) {
                                return e[t] = "", e
                            }, {}))
                        })
                    }
                };
            return Object.freeze(u)
        }), define("macrolib/enchantments", ["jquery", "utils", "utils/operationutils", "engine", "state", "passages", "macros", "datatypes/hookset", "datatypes/changercommand", "datatypes/lambda", "internaltypes/changedescriptor", "internaltypes/enchantment", "internaltypes/twineerror"], function (e, t, n, r, a, i, o, s, c, u, l, p, f) {
            var d = n.is,
                h = o.TypeSignature,
                y = h.either,
                m = h.rest,
                g = h.optional;

            function v(e, t) {
                if (c.isPrototypeOf(t)) {
                    var n = t.summary();
                    if (["newTargets", "target", "appendSource", "functions"].some(function (e) {
                            return n.includes(e)
                        })) return f.create("datatype", "The changer given to (" + e + ":) can't include a revision or enchantment changer like (replace:) or (click:).")
                }
            } ["enchant", "change"].forEach(function (e) {
                o.addCommand(e, function (t, n) {
                    var r = v(e, n);
                    if (r) return r
                }, function (t, n, r) {
                    var a;
                    n = s.from(n);
                    var i = [];
                    if (c.isPrototypeOf(r)) {
                        var o = l.create({
                            section: t
                        });
                        if (r.run(o), (o.innerEnchantments || []).length > 0) {
                            var u = o.innerEnchantments.map(function (e) {
                                return e(n)
                            });
                            i.push.apply(i, _toConsumableArray(u))
                        }
                    }
                    return i.push(p.create((_defineProperty(a = {
                        scope: n
                    }, c.isPrototypeOf(r) ? "changer" : "lambda", r), _defineProperty(a, "section", t), a))), i.forEach(function (n) {
                        "enchant" === e ? (t.addEnchantment(n), t.updateEnchantments()) : n.enchantScope()
                    }), ""
                }, [y(s, String), y(c, u.TypeSignature("via"))], !1)
            }), o.addChanger("enchant-in", function (e, t, n) {
                var r = v("enchant-in", n);
                return r || c.create("enchant-in", [t, n])
            }, function (e, t, n) {
                return e.innerEnchantments = (e.innerEnchantments || []).concat(function (r) {
                    var a;
                    return p.create((_defineProperty(a = {
                        scope: s.from(t),
                        localHook: r
                    }, c.isPrototypeOf(n) ? "changer" : "lambda", n), _defineProperty(a, "section", e.section), a))
                }), e
            }, [y(s, String), y(c, u.TypeSignature("via"))]), [
                ["link-style", s.create({
                    type: "name",
                    data: "link"
                })],
                ["line-style", s.create({
                    type: "base",
                    data: s.create({
                        type: "name",
                        data: "page"
                    })
                }, "lines", void 0)],
                ["char-style", s.create({
                    type: "base",
                    data: s.create({
                        type: "name",
                        data: "page"
                    })
                }, "chars", void 0)]
            ].forEach(function (e) {
                var t = _slicedToArray(e, 2),
                    n = t[0],
                    r = t[1];
                o.addChanger(n, function (e, t) {
                    var r = v(n, t);
                    return r || c.create(n, [t])
                }, function (e, t) {
                    return e.innerEnchantments = (e.innerEnchantments || []).concat(function (n) {
                        var a;
                        return p.create((_defineProperty(a = {
                            scope: r,
                            localHook: n
                        }, c.isPrototypeOf(t) ? "changer" : "lambda", t), _defineProperty(a, "section", e.section), a))
                    }), e
                }, [y(c, u.TypeSignature("via"))])
            });
            var b = ["replace", "append", "prepend"];

            function w(n, a) {
                return t.onStartup(function () {
                    var r = n.classList.replace(/ /g, "."),
                        a = n.blockClassList ? n.blockClassList.replace(/ /g, ".") : "",
                        i = "." + r + (a ? ",." + a : "");
                    t.storyElement.on(n.event.map(function (e) {
                        return e + ".enchantment"
                    }).join(" "), i, function () {
                        var t = e(Array.from(e(this).parents(i).add(this)).sort(function (e, t) {
                                return 8 & e.compareDocumentPosition(t) ? 1 : -1
                            })[0]),
                            n = t.data("enchantmentEvent");
                        n && n(t)
                    })
                }), [function (e, t, n) {
                        if (!t) return f.create("datatype", "A string given to this (" + a + ":) macro was empty.");
                        if (n) {
                            var r = v(a, n);
                            if (r) return r
                        }
                        return c.create(a, [s.from(t)].concat(n ? [n] : []))
                    }, function (e, t, i) {
                        e.enabled = !1, e.transitionDeferred = !0, n.rerender && (e.newTargets = (e.newTargets || []).concat({
                            target: t,
                            append: n.rerender
                        }));
                        var o = e.section && e.section.stackTop ? e.section.stackTop.tempVariables : Object.create(null),
                            s = p.create(_defineProperty({
                                functions: [function (e) {
                                    e.attr("class", e.children().is("tw-story, tw-sidebar, tw-passage") || "block" === e.children().css("display") ? n.blockClassList : n.classList)
                                }],
                                attr: (n.classList + "").match(/\b(?:link|enchantment-clickblock)\b/) ? {
                                    tabIndex: "0"
                                } : {},
                                data: {
                                    enchantmentEvent: function () {
                                        e.section.stackTop && e.section.stackTop.blocked || (n.once && e.section.removeEnchantment(s), n.goto ? r.goToPassage(n.goto, {
                                            transition: n.transition
                                        }) : n.undo ? r.goBack({
                                            transition: n.transition
                                        }) : e.section.renderInto(e.source, null, Object.assign({}, e, {
                                            enabled: !0,
                                            transitionDeferred: !1
                                        }), o))
                                    }
                                },
                                scope: t,
                                section: e.section,
                                name: a
                            }, c.isPrototypeOf(i) ? "changer" : "lambda", i));
                        return e.section && (e.section.addEnchantment(s), s.enchantScope()), e
                    },
                    [y(s, String), g(y(c, u.TypeSignature("via")))]
                ]
            }
            b.forEach(function (t) {
                o.addChanger(t, function (e) {
                    for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
                    return r.every(Boolean) ? c.create(t, r.map(s.from)) : f.create("datatype", "A string given to this (" + t + ":) macro was empty.")
                }, function (n) {
                    for (var r, a = arguments.length, i = Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++) i[o - 1] = arguments[o];
                    return e(n.target).parents().filter("tw-collapsed,[collapsing=true]").length > 0 || n.attr.some(function (e) {
                        return e.collapsing
                    }) || (n.attr = [].concat(_toConsumableArray(n.attr), [{
                        collapsing: !1
                    }])), n.newTargets = n.newTargets || [], (r = n.newTargets).push.apply(r, _toConsumableArray(i.filter(function (e) {
                        return !n.newTargets.some(function (n) {
                            var r = n.target,
                                a = n.append;
                            return d(e, r) && t === a
                        })
                    }).map(function (e) {
                        return {
                            target: e,
                            append: t,
                            before: !0
                        }
                    }))), n
                }, m(y(s, String)))(t + "-with", function (e, n) {
                    return c.create(t + "-with", [n])
                }, function (e, n) {
                    return e.appendSource = (e.appendSource || []).concat({
                        source: n,
                        append: t
                    }), e
                }, String)
            });
            var T = "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
                S = [{
                    name: "click",
                    enchantDesc: {
                        event: ["click"],
                        once: !0,
                        rerender: "",
                        classList: "link enchantment-link",
                        blockClassList: "enchantment-clickblock"
                    }
                }, {
                    name: "mouseover",
                    enchantDesc: {
                        event: ["mouseenter", T ? "click" : ""].filter(Boolean),
                        once: !0,
                        rerender: "",
                        classList: "enchantment-mouseover",
                        blockClassList: "enchantment-mouseoverblock"
                    }
                }, {
                    name: "mouseout",
                    enchantDesc: {
                        event: ["mouseleave", T ? "click" : ""].filter(Boolean),
                        once: !0,
                        rerender: "",
                        classList: "enchantment-mouseout",
                        blockClassList: "enchantment-mouseoutblock"
                    }
                }];
            S.forEach(function (e) {
                return o.addChanger.apply(o, [e.name].concat(_toConsumableArray(w(e.enchantDesc, e.name))))
            }), t.onStartup(function () {
                S.forEach(function (n) {
                    var r = n.enchantDesc;
                    r.blockClassList && t.storyElement.on(r.event.map(function (e) {
                        return e + ".enchantment"
                    }).join(" "), function () {
                        var t = e(Array.from(e(this).parents("." + r.blockClassList.replace(/ /g, "."))).sort(function (e, t) {
                                return 8 & e.compareDocumentPosition(t) ? 1 : -1
                            })[0]),
                            n = t.data("enchantmentEvent");
                        n && n(t)
                    })
                })
            }), b.forEach(function (e) {
                S.forEach(function (t) {
                    var n = Object.assign({}, t.enchantDesc, {
                            rerender: e
                        }),
                        r = t.name + "-" + e;
                    o.addChanger.apply(o, [r].concat(_toConsumableArray(w(n, r))))
                })
            }), S.forEach(function (e) {
                ["goto", "undo"].forEach(function (t) {
                    var n = e.name + "-" + t;
                    o.addCommand(n, function (e, r) {
                        return !e || !r && "goto" === t ? f.create("datatype", "A string given to this (" + n + ":) macro was empty.") : "goto" !== t || i.hasValid(r) ? void 0 : f.create("macrocall", "I can't (" + n + ":) the passage '" + r + "' because it doesn't exist.")
                    }, function (r, i, o, c) {
                        if ("undo" === t && a.pastLength < 1) return f.create("macrocall", "I can't (undo:) on the first turn.");
                        var u = w(Object.assign({}, e.enchantDesc, {
                            transition: r.data.passageT8n
                        }, "undo" === t ? {
                            undo: !0
                        } : {
                            goto: c
                        }), n);
                        return (0, _slicedToArray(u, 2)[1])({
                            section: i
                        }, s.from(o)), Object.assign(r, {
                            source: ""
                        })
                    }, [y(s, String)].concat("undo" === t ? [] : String))
                })
            })
        }), define("macrolib/metadata", ["macros", "renderer", "utils/operationutils", "datatypes/lambda", "internaltypes/twineerror"], function (e, t, n, r, a) {
            var i = n.clone,
                o = n.objectName,
                s = n.isValidDatamapName,
                c = e.TypeSignature,
                u = c.zeroOrMore,
                l = c.Any,
                p = t.options.metadataMacros,
                f = function (e) {
                    return {
                        TwineScript_TypeName: "a (" + e + ":) macro",
                        TwineScript_ObjectName: "a (" + e + ":) macro",
                        TwineScript_Unstorable: !0,
                        TwineScript_Print: function () {
                            return ""
                        }
                    }
                };
            [
                ["storylet", r.TypeSignature("when")],
                ["urgency", Number],
                ["exclusivity", Number]
            ].forEach(function (t) {
                var n = _slicedToArray(t, 2),
                    r = n[0],
                    a = n[1];
                e.add(r, function (e, t) {
                    return e.stackTop.speculativePassage ? t : f(r)
                }, a), p.push(r)
            }), e.add("metadata", function (e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                var c = void 0,
                    u = new Map,
                    l = n.reduce(function (e, t) {
                        var n = void 0;
                        if (a.containsError(e)) return e;
                        if (void 0 === c) c = t;
                        else {
                            if (n = a.containsError(s(u, c))) return n;
                            if (u.has(c)) return a.create("macrocall", "You used the same data name (" + o(c) + ") twice in the same (metadata:) call.");
                            u.set(c, i(t)), c = void 0
                        }
                        return e
                    }, !0);
                return a.containsError(l) ? l : void 0 !== c ? a.create("macrocall", "This (metadata:) macro has a data name without a value.") : e.stackTop.speculativePassage ? u : f("storylet")
            }, u(l)), p.push("metadata")
        }), define("macrolib/patterns", ["jquery", "macros", "utils", "utils/operationutils", "datatypes/datatype", "datatypes/typedvar", "internaltypes/twineerror"], function (e, t, n, r, a, i, o) {
            var s = n.anyRealLetter,
                c = n.anyUppercase,
                u = n.anyLowercase,
                l = n.anyCasedLetter,
                p = n.realWhitespace,
                f = n.impossible,
                d = r.objectName,
                h = r.toSource,
                y = t.TypeSignature,
                m = y.rest,
                g = y.either,
                v = y.optional,
                b = y.nonNegativeInteger,
                w = Object.assign,
                T = Object.create,
                S = m(g(String, a, i)),
                x = function e(t) {
                    var n, r = t.name,
                        y = t.fullArgs,
                        m = t.args,
                        g = t.makeRegExpString,
                        v = void 0 === g ? function (e) {
                            return e.join("")
                        } : g,
                        b = t.insensitive,
                        S = void 0 !== b && b,
                        x = t.canContainTypedVars,
                        k = void 0 === x || x,
                        O = t.canBeUsedAlone,
                        j = void 0 === O || O,
                        A = m || y,
                        C = A.map(function e(t) {
                            if (i.isPrototypeOf(t)) {
                                if (!k) return o.create("operation", "Optional string patterns, like (" + r + ":)" + ("p-many" === r ? " with min 0" : "") + ", can't have typed variables inside them.");
                                var n = e(t.datatype);
                                return o.containsError(n) ? n : "(" + n + ")"
                            }
                            if (a.isPrototypeOf(t)) {
                                if (!k && "typedVars" in t && t.typedVars().length) return o.create("operation", "(" + r + ":) can't have typed variables inside its pattern.");
                                if (t.regExp) return (t.rest ? "(?:" : "") + (S ? t.insensitive().regExp : t.regExp) + (t.rest ? ")*" : "");
                                var h = t.name,
                                    y = t.rest ? "*" : "";
                                return "alnum" === h ? s + y : "whitespace" === h ? p + y : "uppercase" === h ? (S ? l : c) + y : "lowercase" === h ? (S ? l : u) + y : "anycase" === h ? l + y : "digit" === h ? "\\d" + y : "linebreak" === h ? "(?:\\r|\\n|\\r\\n)" + y : "str" === h ? ".*?" : ["even", "odd", "int", "num"].includes(h) ? o.create("datatype", "Please use string datatypes like 'digit' in (" + r + ":) instead of number datatypes.") : o.create("datatype", "The (" + r + ":) macro must only be given string-related datatypes, not " + d(t) + ".")
                            }
                            return "string" == typeof t ? (t = t.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&"), S && (t = t.replace(RegExp("(" + c + "|" + u + ")", "g"), function (e) {
                                return "[" + e.toUpperCase() + e.toLowerCase() + "]"
                            })), t) : (f("createPattern", "mapper() was given a non-string non-datatype " + t), "")
                        });
                    if (n = o.containsError(C)) return n;
                    var E = v(C),
                        _ = w(T(a), {
                            name: r,
                            regExp: E,
                            insensitive: function () {
                                return S ? _ : e({
                                    name: r,
                                    fullArgs: y,
                                    args: A.map(function (e) {
                                        return a.isPrototypeOf(e) && "function" == typeof e.insensitive ? e.insensitive() : e
                                    }),
                                    makeRegExpString: v,
                                    insensitive: !0,
                                    canContainTypedVars: k,
                                    canBeUsedAlone: j
                                })
                            },
                            typedVars: function () {
                                return A.reduce(function (t, n) {
                                    return i.isPrototypeOf(n) && (t = t.concat(S ? i.create(e({
                                        name: "p-ins",
                                        fullArgs: [n.datatype],
                                        insensitive: !0
                                    }), n.varRef) : n), n = n.datatype), a.isPrototypeOf(n) && "function" == typeof n.typedVars && (t = t.concat(n.typedVars())), t
                                }, [])
                            },
                            destructure: function (t) {
                                if ("string" != typeof t) return [o.create("operation", "I can't unpack " + d(t) + " into " + this.TwineScript_ToSource() + " because it isn't a string.")];
                                var n = this.typedVars();
                                if (!n.length) return [];
                                var r = (RegExp("^" + (this.rest ? "(?:" : "") + E + (this.rest ? ")*" : "") + "$").exec(t) || []).slice(1);
                                return r.length ? r.map(function (t, r) {
                                    var a = n[r];
                                    if (a) return a.datatype.rest && !a.datatype.regExp && ((a = a.TwineScript_Clone()).datatype = e({
                                        name: "p",
                                        fullArgs: [a.datatype]
                                    })), {
                                        dest: a,
                                        value: t || "",
                                        src: void 0
                                    }
                                }).filter(Boolean) : [o.create("operation", "I can't unpack " + d(t) + " because it doesn't match the pattern " + this.TwineScript_ToSource() + ".")]
                            },
                            TwineScript_IsTypeOf: function (e) {
                                return j ? "string" == typeof e && !!e.match("^" + (this.rest ? "(?:" : "") + E + (this.rest ? ")*" : "") + "$") : o.create("operation", "A (" + r + ":) datatype must only be used with a (p:) macro.")
                            },
                            TwineScript_toTypeSignatureObject: function () {
                                var e = this;
                                return {
                                    pattern: "range",
                                    name: r,
                                    range: function (t) {
                                        return e.TwineScript_IsTypeOf(t)
                                    }
                                }
                            },
                            TwineScript_ToSource: function () {
                                return (this.rest ? "..." : "") + "(" + r + ":" + y.map(h) + ")"
                            }
                        });
                    return Object.defineProperty(_, "TwineScript_ObjectName", {
                        get: function () {
                            return "a (" + r + ":) datatype"
                        }
                    }), _
                };
            t.add(["p", "pattern"], function (e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                return x({
                    name: "p",
                    fullArgs: n
                })
            }, S)(["p-either", "pattern-either"], function (e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                return x({
                    name: "p-either",
                    fullArgs: n,
                    canContainTypedVars: !1,
                    makeRegExpString: function (e) {
                        return "(?:" + e.join("|") + ")"
                    }
                })
            }, S)(["p-opt", "pattern-opt", "p-optional", "pattern-optional"], function (e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                return x({
                    name: "p-opt",
                    fullArgs: n,
                    canContainTypedVars: !1,
                    makeRegExpString: function (e) {
                        return "(?:" + e.join("") + ")?"
                    }
                })
            }, S)(["p-not", "pattern-not"], function (e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                return n.find(function (e) {
                    return "string" == typeof e ? 1 !== [].concat(_toConsumableArray(e)).length : e.rest || e.regExp || ["str", "empty"].includes(e.name)
                }) ? o.create("datatype", "(p-not:) should only be given single character") : x({
                    name: "p-not",
                    fullArgs: n,
                    canContainTypedVars: !1,
                    makeRegExpString: function (e) {
                        return "[^" + e.map(function (e) {
                            return e.startsWith("[") && e.endsWith("]") ? e.slice(1, -1) : e
                        }).join("") + "]"
                    }
                })
            }, S)(["p-many", "pattern-many"], function (e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                var s = n.slice(),
                    c = void 0,
                    u = void 0;
                if ("number" == typeof n[0] && (c = n.shift(), u = "number" == typeof n[0] ? n.shift() : 1 / 0), void 0 !== u && u < c) return o.create("datatype", "The (p-many:) macro needs to be given string patterns, not just min and max numbers.");
                if (!n.length) return o.create("datatype", "The (p-many:) macro needs to be given string patterns, not just min and max numbers.");
                var l = n.find(function (e) {
                    return "string" != typeof e && !a.isPrototypeOf(e) && !i.isPrototypeOf(e)
                });
                return l ? o.create("datatype", "This (p-many:) macro can only be given a min and max number followed by datatypes or strings, but was also given " + d(l) + ".") : x({
                    name: "p-many",
                    args: n,
                    fullArgs: s,
                    canContainTypedVars: c > 0,
                    makeRegExpString: function (e) {
                        return "(?:" + e.join("") + ")" + (void 0 !== c ? "{" + c + (u === 1 / 0 ? "," : u !== c ? "," + u : "") + "}" : "+")
                    }
                })
            }, [m(g(b, String, a, i))])(["p-ins", "pattern-ins", "p-insensitive", "pattern-insensitive"], function (e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                return x({
                    name: "p-ins",
                    fullArgs: n,
                    insensitive: !0
                })
            }, S)(["split", "splitted"], function (e, t, n) {
                if (t = x({
                        name: "split",
                        fullArgs: [t],
                        canContainTypedVars: !1
                    }), o.containsError(t)) return t;
                if (!n) return [""];
                if (!t.regExp) return [].concat(_toConsumableArray(n));
                for (var r = RegExp(t.regExp), a = [], i = void 0; n && (i = r.exec(n));) {
                    if (i.index + i[0].length === 0) return a;
                    a.push(n.slice(0, i.index)), n = n.slice(i.index + i[0].length)
                }
                return a.concat(n || [])
            }, [g(String, a), String])("trimmed", function (e, t, n) {
                return void 0 === n || a.isPrototypeOf(t) && "whitespace" === t.name ? t.trim() : (t = x({
                    name: "trimmed",
                    fullArgs: [t],
                    canContainTypedVars: !1
                }), o.containsError(t) ? t : t.regExp ? n.replace(RegExp("^(" + t.regExp + ")*|(" + t.regExp + ")*$", "g"), "") : n)
            }, [g(String, a), v(String)])
        }), define("macrolib/links", ["jquery", "macros", "utils", "state", "passages", "engine", "datatypes/changercommand", "internaltypes/changedescriptor", "datatypes/hookset", "datatypes/lambda", "internaltypes/twineerror"], function (e, t, n, r, a, i, o, s, c, u, l) {
            var p = t.TypeSignature,
                f = p.optional,
                d = p.rest,
                h = p.either,
                y = ["Links can't have empty strings for their displayed text.", "In the link syntax, a link's displayed text is inside the [[ and ]], and on the non-pointy side of the -> or <- arrow if it's there."],
                m = Object.assign;

            function g(e, t, r) {
                r = r || t;
                var i = a.hasValid(t) && t === r,
                    o = e.evaluateTwineMarkup(n.unescape(r), "a link's passage name"),
                    s = void 0;
                if (i) {
                    var c = o.children().length > 0 ? "`".repeat((r.match(/`+/) || []).reduce(function (e, t) {
                        return Math.max(e, t.length + 1)
                    }, 1)) : "";
                    t = c + "\0".repeat(!!c) + t + "\0".repeat(!!c) + c
                } else o.findAndFilter("tw-error").length && (s = o.findAndFilter("tw-error").data("TwineError")), r = o.text();
                return {
                    text: t,
                    passage: r,
                    error: s
                }
            }
            n.onStartup(function () {
                e(n.storyElement).on("click.passage-link", "tw-link", function (t) {
                    var n = e(this),
                        r = n.closest("tw-expression"),
                        a = n.closest("tw-expression, tw-hook"),
                        o = a.data("clickEvent"),
                        s = a.data("section");
                    if (!(s && s.stackTop && s.stackTop.blocked) || s.stackTop.blocked instanceof e && s.stackTop.blocked.find(n).length) {
                        if (o) {
                            if (n.find("tw-error").length > 0) return;
                            return t.stopPropagation(), void o(n)
                        }
                        var c = r.data("linkPassageName"),
                            u = Object.assign({}, r.data("passageT8n") || {});
                        return r.find("tw-enchantment").each(function (t, n) {
                            Object.assign(u, e(n).data("passageT8n") || {})
                        }), c ? (t.stopPropagation(), void i.goToPassage(c, {
                            transition: u
                        })) : n.is("[undo]") ? (t.stopPropagation(), void i.goBack({
                            transition: u
                        })) : n.is("[fullscreen]") ? (t.stopPropagation(), void i.toggleFullscreen()) : void 0
                    }
                }), e(document).on("fullscreenchange", function () {
                    e("tw-link[fullscreen]", n.storyElement).each(function (t, n) {
                        (e(n).closest("tw-expression, tw-hook").data("fullscreenEvent") || Object)(n)
                    })
                })
            }), [
                ["link", "link-replace"],
                ["link-reveal"],
                ["link-repeat"],
                ["link-rerun"]
            ].forEach(function (e) {
                return t.addChanger(e, function (t, n, r) {
                    if (!n) return l.create("datatype", y[0]);
                    if (r) {
                        var a = r.summary();
                        if (["newTargets", "target", "appendSource", "functions"].some(function (e) {
                                return a.includes(e)
                            })) return l.create("datatype", "The changer given to (" + e[0] + ":) can't include a revision or enchantment changer like (replace:) or (click:).")
                    }
                    return o.create(e[0], [n].concat(r || []))
                }, function (t, n, r) {
                    var a = e[0],
                        i = t.section && t.section.stackTop ? t.section.stackTop.tempVariables : Object.create(null),
                        o = s.create({
                            source: "<tw-link tabindex=0>" + n + "</tw-link>",
                            target: function () {
                                return t.target
                            },
                            append: "replace",
                            data: {
                                section: t.section,
                                clickEvent: function (e) {
                                    t.enablers = t.enablers.filter(function (e) {
                                        return e.descriptor !== o
                                    }), "link-reveal" === a && e.contents().unwrap();
                                    var n = e.parentsUntil(":not(tw-enchantment)").parent();
                                    if (n.length || (n = e.parent()), "link-rerun" === a) {
                                        var r = e.parentsUntil(":not(tw-enchantment)");
                                        e.detach(), r.remove()
                                    }
                                    "link" !== a && "link-rerun" !== a || n.empty(), t.section.renderInto("", null, t, i), "link-rerun" === a && n.prepend(e)
                                }
                            }
                        });
                    return t.enablers = (t.enablers || []).concat({
                        descriptor: o,
                        changer: r
                    }), t
                }, [String, f(o)])
            }), t.addCommand("link-goto", function (e) {
                if (!e) return l.create.apply(l, ["datatype"].concat(y))
            }, function (e, t, i, o) {
                var s, c = g(t, i, o);
                if (i = c.text, o = c.passage, s = c.error) return s;
                if (e.transition) {
                    var u = "transition";
                    return l.create("datatype", "Please attach (" + u + "-depart:) or (" + u + "-arrive:) to a passage link, not (" + u + ":).")
                }
                var p = void 0;
                return a.hasValid(o) || (p = '<tw-broken-link passage-name="' + n.escape(o) + '">' + i + "</tw-broken-link>"), p = p || "<tw-link tabindex=0 " + (r.passageNameVisited(o) > 0 ? 'class="visited" ' : "") + ">" + i + "</tw-link>", e.data.linkPassageName = o, e.data.section = t, m(e, {
                    source: p,
                    transitionDeferred: !0
                })
            }, [String, f(String)])("link-storylet", function () {
                var e, t = (e = 1 === arguments.length || "string" != typeof (arguments.length <= 0 ? void 0 : arguments[0]) ? 0 : 1, arguments.length <= e ? void 0 : arguments[e]);
                if (!t || "string" == typeof t) return l.create("datatype", "(link-storylet:) should be given one index number or one 'where' lambda, after the optional link text string.")
            }, function (e, t) {
                var n, i, o, s = (n = 2 + (1 == (arguments.length <= 2 ? 0 : arguments.length - 2) ? 0 : 3 == (arguments.length <= 2 ? 0 : arguments.length - 2) || "string" == typeof (arguments.length <= 2 ? void 0 : arguments[2]) ? 1 : 2), arguments.length <= n ? void 0 : arguments[n]),
                    c = "string" == typeof (arguments.length <= 2 ? void 0 : arguments[2]) && (arguments.length <= 2 ? void 0 : arguments[2]),
                    p = (i = (arguments.length <= 2 ? 0 : arguments.length - 2) - 1 + 2, (arguments.length <= i ? void 0 : arguments[i]) !== s && (o = (arguments.length <= 2 ? 0 : arguments.length - 2) - 1 + 2, arguments.length <= o ? void 0 : arguments[o]));
                if (e.transition) {
                    var f = "transition";
                    return l.create("datatype", "Please attach (" + f + "-depart:) or (" + f + "-arrive:) to (link-storylet:), not (" + f + ":).")
                }
                var d = u.isPrototypeOf(s),
                    h = a.getStorylets(t, d && s),
                    y = l.containsError(h);
                if (y) return y;
                var g = h[d ? 0 : s < 0 ? h.length + s : s - 1],
                    v = void 0;
                if (g) g = g.get("name"), c = c || g, v = v || "<tw-link tabindex=0 " + (r.passageNameVisited(g) > 0 ? 'class="visited" ' : "") + ">" + c + "</tw-link>", e.data.linkPassageName = g, e.data.section = t;
                else {
                    if (!p) return e;
                    v = p
                }
                return m(e, {
                    source: v,
                    transitionDeferred: !0
                })
            }, [h(parseInt, String, u.TypeSignature("where")), f(h(parseInt, String, u.TypeSignature("where"))), f(String)])("link-undo", function (e) {
                if (!e) return l.create("datatype", y[0])
            }, function (e, t, n) {
                return r.pastLength < 1 ? l.create("macrocall", "I can't use (link-undo:) on the first turn.") : (e.data.section = t, m(e, {
                    source: "<tw-link tabindex=0 undo>" + n + "</tw-link>",
                    transitionDeferred: !0
                }))
            }, [String])("link-show", function (e) {
                if (!e) return l.create("datatype", y[0])
            }, function (t, n, r) {
                for (var a = arguments.length, i = Array(a > 3 ? a - 3 : 0), o = 3; o < a; o++) i[o - 3] = arguments[o];
                return t.data.section = n, t.data.clickEvent = function (r) {
                    r.contents().unwrap(), i.forEach(function (r) {
                        return r.forEach(n, function (r) {
                            var a = r.data("originalSource") || "",
                                i = r.data("hidden");
                            if (i)
                                if (r.removeData("hidden"), i instanceof e) r.empty().append(i);
                                else {
                                    var o = r.data("tempVariables");
                                    n.renderInto("", null, m({}, t, {
                                        source: a,
                                        target: r,
                                        transitionDeferred: !1
                                    }), o && Object.create(o))
                                }
                        })
                    })
                }, m(t, {
                    source: "<tw-link tabindex=0>" + r + "</tw-link>",
                    transitionDeferred: !0
                })
            }, [String, d(c)])("link-fullscreen", function (e, t) {
                if (!e || !t) return l.create("datatype", y[0])
            }, function (e, t, n, r) {
                var a = function () {
                        return document.fullscreenEnabled || document.msFullscreenEnabled ? "<tw-link tabindex=0 fullscreen>" + (document.fullscreenElement || document.msFullscreenElement ? r : n) + "</tw-link>" : r ? "<tw-broken-link>" + r + "</tw-broken-link>" : ""
                    },
                    i = t.stackTop.tempVariables;
                return e.data.section = t, e.data.fullscreenEvent = function () {
                    (document.fullscreenEnabled || document.msFullscreenEnabled) && e.data.section.whenUnblocked(function () {
                        var t = m({}, e, {
                            append: "replace",
                            source: a(),
                            transitionDeferred: !1
                        });
                        e.section.renderInto("", null, t, i)
                    })
                }, m(e, {
                    source: a(),
                    transitionDeferred: !0
                })
            }, [String, String, f(String)]), t.addChanger(["link-reveal-goto"], function (e, t, n, r) {
                if (!t) return l.create.apply(l, ["datatype"].concat(y));
                if (o.isPrototypeOf(n)) {
                    if (o.isPrototypeOf(r)) return l.create("datatype", "You mustn't give two changers to (link-reveal-goto:)");
                    r = n, n = void 0
                }
                if (r) {
                    var a = r.summary();
                    if (["newTargets", "target", "appendSource", "functions"].some(function (e) {
                            return a.includes(e)
                        })) return l.create("datatype", "The changer given to (link-reveal-goto:) can't include a revision or enchantment changer like (replace:) or (click:).")
                }
                var i = g(e, t, n);
                return t = i.text, n = i.passage, i.error || o.create("link-reveal-goto", [t, n, r].filter(function (e) {
                    return void 0 !== e
                }))
            }, function (e, t, o, c) {
                if (a.hasValid(o)) {
                    var u = r.passageNameVisited(o),
                        l = e.section && e.section.stackTop ? e.section.stackTop.tempVariables : Object.create(null),
                        p = s.create({
                            source: "<tw-link tabindex=0 " + (u > 0 ? 'class="visited" ' : "") + ">" + t + "</tw-link>",
                            target: e.target,
                            append: "replace",
                            data: {
                                section: e.section,
                                append: "replace",
                                clickEvent: function (t) {
                                    e.enablers = e.enablers.filter(function (e) {
                                        return e.descriptor !== p
                                    }), t.contents().unwrap(), e.section.renderInto("", null, e, l), e.section.whenUnblocked(function () {
                                        return i.goToPassage(o, {
                                            transition: e.data.passageT8n
                                        })
                                    })
                                }
                            }
                        });
                    return e.enablers = (e.enablers || []).concat({
                        descriptor: p,
                        changer: c
                    }), e
                }
                e.source = '<tw-broken-link passage-name="' + n.escape(o) + '">' + t + "</tw-broken-link>"
            }, [String, f(h(o, String)), f(o)])
        }), define("macrolib/custommacros", ["utils", "macros", "state", "utils/operationutils", "datatypes/changercommand", "datatypes/custommacro", "datatypes/codehook", "datatypes/typedvar", "internaltypes/twineerror"], function (e, t, n, r, a, i, o, s, c) {
            var u = t.add,
                l = t.addChanger,
                p = t.addCommand,
                f = t.TypeSignature,
                d = f.rest,
                h = f.either,
                y = f.Any,
                m = r.objectName;
            u("macro", function (t) {
                for (var r = arguments.length, a = Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) a[o - 1] = arguments[o];
                var u = void 0,
                    l = [];
                for (u = 0; u < a.length; u += 1) {
                    var p = u === a.length - 1;
                    if (s.isPrototypeOf(a[u]) === p) return c.create("datatype", "The " + (p ? "" : e.nth(a.length - u + 1) + "-") + "last value given to (macro:) should be a " + (p ? "code hook" : "datatyped variable") + ", not " + m(a[u]));
                    if (!p) {
                        var f = "A custom macro";
                        if (a[u].varRef.object === n.variables) return c.create("datatype", f + "'s typed variables must be temp variables (with a '_'), not global variables (with a '$').", "Write them with a _ symbol at the start instead of a $ symbol.");
                        if (a[u].varRef.propertyChain.length > 1) return c.create("datatype", f + "'s typed variables can't be properties inside a data structure.");
                        if (a[u].datatype.rest && u !== a.length - 2) return c.create("datatype", f + " can only have one spread variable, and it must be its last variable.");
                        var d = a[u].varRef.propertyChain[0];
                        if (l.includes(d)) return c.create("datatype", f + "'s typed variables can't both be named '" + d + "'.");
                        l.push(d)
                    }
                }
                return i.create(a.slice(0, -1), a[a.length - 1])
            }, [d(h(s, o))]);
            var g = function (e, t, n) {
                if (!t.some(function (e) {
                        if ("function" == typeof e.output) return e.output(n), !0
                    })) return c.create("macrocall", "(" + e + ":) should only be used inside a code hook passed to (macro:).")
            };
            p(["output-data", "out-data"], function () {}, function (e, t) {
                var n = e.stack;
                return g("output-data", n, t) || {
                    blocked: !0
                }
            }, [y], !1), l(["output", "out"], function (e) {
                return Object.assign(a.create("output", [e]))
            }, function (e, t) {
                var n = t.stack,
                    r = t.stackTop;
                return e.loopVars = Object.keys(r.tempVariables).reduce(function (e, t) {
                    return e[t] = [r.tempVariables[t]], e
                }, {}), g("output", n, e), r.blocked = !0, e
            }, []), p("error", function (e) {
                if (!e) return c.create("datatype", "This (error:) macro was given an empty string.")
            }, function (e, t) {
                var n = e.stack;
                return g("error", n, c.create("user", t)) || {
                    blocked: !0
                }
            }, [String], !1)
        }), define("repl", ["utils", "engine", "markup", "twinescript/compiler", "twinescript/environ"], function (e, t, n, r, a) {
            e.onStartup(function () {
                return setTimeout(function () {
                    t.options.debug && (window.REPL = function (e) {
                        var t = r(n.lex("(print:" + e + ")"));
                        console.log(t);
                        var i = a({}).eval(t);
                        return i.TwineScript_Run ? i.TwineScript_Run().source : i
                    }, window.LEX = function (e) {
                        var t = n.lex(e);
                        return 1 === t.length ? t[0] : t
                    })
                })
            })
        }), require.config({
            paths: {
                jquery: "../node_modules/jquery/dist/jquery",
                almond: "../node_modules/almond/almond",
                "es6-shim": "../node_modules/es6-shim/es6-shim",
                jqueryplugins: "utils/jqueryplugins",
                markup: "./markup/markup",
                lexer: "./markup/lexer",
                patterns: "./markup/patterns"
            },
            deps: ["es6-shim", "jqueryplugins"]
        }), require(["jquery", "debugmode/mode", "renderer", "state", "section", "engine", "passages", "utils", "utils/renderutils", "internaltypes/varscope", "internaltypes/twineerror", "macros", "macrolib/values", "macrolib/commands", "macrolib/datastructures", "macrolib/stylechangers", "macrolib/enchantments", "macrolib/metadata", "macrolib/patterns", "macrolib/links", "macrolib/custommacros", "repl"], function ($, DebugMode, Renderer, State, Section, Engine, Passages, Utils, _ref118, VarScope, TwineError) {
            var dialog = _ref118.dialog;

            function __HarloweEval(text) {
                return eval(text + "")
            }
            var _installHandlers = function () {
                    $(document.documentElement).on("keydown", function (e) {
                        13 === e.which && "0" === e.target.getAttribute("tabindex") && $(e.target).trigger("click")
                    }), Engine.options.debug ? DebugMode() : TwineError.on("error", function (e, t) {
                        return !$("tw-debugger").length && DebugMode(e, t)
                    }), _installHandlers = null
                },
                oldOnError;

            function printJSError(e) {
                var t = e.name + ": " + e.message;
                if (e.stack) {
                    var n = e.stack.split("\n"),
                        r = n.findIndex(function (e) {
                            return e.includes("__HarloweEval")
                        });
                    t += "\n" + n.slice(0, r).join("\n").replace(/\([^\)]+\)/g, "")
                }
                return "<div style='font-family:monospace;overflow-y:scroll;max-height:30vh'>```" + t + "```</div>"
            }
            oldOnError = window.onerror, window.onerror = function (e, t, n, r, a) {
                window.onerror = oldOnError, Utils.storyElement.parent().append(dialog({
                    message: "Sorry to interrupt, but this page's code has got itself in a mess.\n\n" + printJSError(a) + "\n(This is probably due to a bug in the Harlowe game engine.)"
                })), "function" == typeof oldOnError && oldOnError.apply(void 0, arguments)
            }, Utils.onStartup(function () {
                var e = $("tw-storydata");
                if (0 !== e.length) {
                    var t = e.attr("options");
                    t && t.split(/\s/).forEach(function (e) {
                        Renderer.options[e] = Engine.options[e] = !0
                    });
                    var n = e.attr("startnode");
                    Renderer.options.ifid = Engine.options.ifid = e.attr("ifid"), n || (n = [].reduce.call($("tw-passagedata"), function (e, t) {
                        var n = t.getAttribute("pid");
                        return n < e ? n : e
                    }, 1 / 0)), n = $("tw-passagedata[pid=" + n + "]").attr("name"), _installHandlers();
                    var r = !1;
                    $("[role=script]").each(function (e) {
                        try {
                            __HarloweEval($(this).html())
                        } catch (t) {
                            r || (r = !0, dialog({
                                parent: Utils.storyElement.parent(),
                                message: "There is a problem with this story's " + Utils.nth(e + 1) + " script:\n\n" + printJSError(t)
                            }))
                        }
                    }), $("[role=stylesheet]").each(function (e) {
                        $(document.head).append('<style data-title="Story stylesheet ' + (e + 1) + '">' + $(this).html())
                    });
                    var a = Section.create();
                    a.stack = [{
                        tempVariables: Object.create(VarScope)
                    }];
                    var i = Passages.loadMetadata(a);
                    if (i.length) {
                        var o = dialog({
                            parent: Utils.storyElement.parent(),
                            message: "These errors occurred when running the `(metadata:)` macro calls in this story's passages:<p></p>"
                        });
                        i.forEach(function (e) {
                            return o.find("p").append(e.render(""))
                        })
                    }
                    var s = !Engine.options.debug && State.hasSessionStorage && sessionStorage.getItem("Saved Session");
                    s && !0 === State.deserialise(a, s) ? Engine.showPassage(State.passage, !1) : Engine.goToPassage(n)
                }
            })
        }), define("harlowe", function () {}), require(["harlowe"])
}();
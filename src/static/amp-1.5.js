!(function () {
  'use strict'
  /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */ var e =
    function (t, i) {
      return (
        (e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t
            }) ||
          function (e, t) {
            for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
          }),
        e(t, i)
      )
    }
  function t(t, i) {
    if ('function' != typeof i && null !== i)
      throw new TypeError('Class extends value ' + String(i) + ' is not a constructor or null')
    function n() {
      this.constructor = t
    }
    e(t, i), (t.prototype = null === i ? Object.create(i) : ((n.prototype = i.prototype), new n()))
  }
  var i,
    n,
    r,
    o,
    s,
    a,
    u,
    c,
    l = function () {
      return (
        (l =
          Object.assign ||
          function (e) {
            for (var t, i = 1, n = arguments.length; i < n; i++)
              for (var r in (t = arguments[i]))
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
            return e
          }),
        l.apply(this, arguments)
      )
    }
  function d(e, t) {
    var i = {}
    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (i[n] = e[n])
    if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
      var r = 0
      for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
        t.indexOf(n[r]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
          (i[n[r]] = e[n[r]])
    }
    return i
  }
  function p(e, t, i, n) {
    return new (i || (i = Promise))(function (r, o) {
      function s(e) {
        try {
          u(n.next(e))
        } catch (e) {
          o(e)
        }
      }
      function a(e) {
        try {
          u(n.throw(e))
        } catch (e) {
          o(e)
        }
      }
      function u(e) {
        var t
        e.done
          ? r(e.value)
          : ((t = e.value),
            t instanceof i
              ? t
              : new i(function (e) {
                  e(t)
                })).then(s, a)
      }
      u((n = n.apply(e, t || [])).next())
    })
  }
  function h(e, t) {
    var i,
      n,
      r,
      o,
      s = {
        label: 0,
        sent: function () {
          if (1 & r[0]) throw r[1]
          return r[1]
        },
        trys: [],
        ops: [],
      }
    return (
      (o = { next: a(0), throw: a(1), return: a(2) }),
      'function' == typeof Symbol &&
        (o[Symbol.iterator] = function () {
          return this
        }),
      o
    )
    function a(o) {
      return function (a) {
        return (function (o) {
          if (i) throw new TypeError('Generator is already executing.')
          for (; s; )
            try {
              if (
                ((i = 1),
                n &&
                  (r =
                    2 & o[0]
                      ? n.return
                      : o[0]
                      ? n.throw || ((r = n.return) && r.call(n), 0)
                      : n.next) &&
                  !(r = r.call(n, o[1])).done)
              )
                return r
              switch (((n = 0), r && (o = [2 & o[0], r.value]), o[0])) {
                case 0:
                case 1:
                  r = o
                  break
                case 4:
                  return s.label++, { value: o[1], done: !1 }
                case 5:
                  s.label++, (n = o[1]), (o = [0])
                  continue
                case 7:
                  ;(o = s.ops.pop()), s.trys.pop()
                  continue
                default:
                  if (
                    !((r = s.trys),
                    (r = r.length > 0 && r[r.length - 1]) || (6 !== o[0] && 2 !== o[0]))
                  ) {
                    s = 0
                    continue
                  }
                  if (3 === o[0] && (!r || (o[1] > r[0] && o[1] < r[3]))) {
                    s.label = o[1]
                    break
                  }
                  if (6 === o[0] && s.label < r[1]) {
                    ;(s.label = r[1]), (r = o)
                    break
                  }
                  if (r && s.label < r[2]) {
                    ;(s.label = r[2]), s.ops.push(o)
                    break
                  }
                  r[2] && s.ops.pop(), s.trys.pop()
                  continue
              }
              o = t.call(e, s)
            } catch (e) {
              ;(o = [6, e]), (n = 0)
            } finally {
              i = r = 0
            }
          if (5 & o[0]) throw o[1]
          return { value: o[0] ? o[1] : void 0, done: !0 }
        })([o, a])
      }
    }
  }
  function f(e) {
    var t = 'function' == typeof Symbol && Symbol.iterator,
      i = t && e[t],
      n = 0
    if (i) return i.call(e)
    if (e && 'number' == typeof e.length)
      return {
        next: function () {
          return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e }
        },
      }
    throw new TypeError(t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.')
  }
  function v(e, t) {
    var i = 'function' == typeof Symbol && e[Symbol.iterator]
    if (!i) return e
    var n,
      r,
      o = i.call(e),
      s = []
    try {
      for (; (void 0 === t || t-- > 0) && !(n = o.next()).done; ) s.push(n.value)
    } catch (e) {
      r = { error: e }
    } finally {
      try {
        n && !n.done && (i = o.return) && i.call(o)
      } finally {
        if (r) throw r.error
      }
    }
    return s
  }
  function g(e, t, i) {
    if (i || 2 === arguments.length)
      for (var n, r = 0, o = t.length; r < o; r++)
        (!n && r in t) || (n || (n = Array.prototype.slice.call(t, 0, r)), (n[r] = t[r]))
    return e.concat(n || Array.prototype.slice.call(t))
  }
  !(function (e) {
    ;(e.US = 'US'), (e.EU = 'EU')
  })(i || (i = {})),
    (function (e) {
      ;(e.SET = '$set'),
        (e.SET_ONCE = '$setOnce'),
        (e.ADD = '$add'),
        (e.APPEND = '$append'),
        (e.PREPEND = '$prepend'),
        (e.REMOVE = '$remove'),
        (e.PREINSERT = '$preInsert'),
        (e.POSTINSERT = '$postInsert'),
        (e.UNSET = '$unset'),
        (e.CLEAR_ALL = '$clearAll')
    })(n || (n = {})),
    (function (e) {
      ;(e.REVENUE_PRODUCT_ID = '$productId'),
        (e.REVENUE_QUANTITY = '$quantity'),
        (e.REVENUE_PRICE = '$price'),
        (e.REVENUE_TYPE = '$revenueType'),
        (e.REVENUE = '$revenue')
    })(r || (r = {})),
    (function (e) {
      ;(e.IDENTIFY = '$identify'),
        (e.GROUP_IDENTIFY = '$groupidentify'),
        (e.REVENUE = 'revenue_amount')
    })(o || (o = {})),
    (function (e) {
      ;(e[(e.None = 0)] = 'None'),
        (e[(e.Error = 1)] = 'Error'),
        (e[(e.Warn = 2)] = 'Warn'),
        (e[(e.Verbose = 3)] = 'Verbose')
    })(s || (s = {})),
    (function (e) {
      ;(e.BEFORE = 'before'), (e.ENRICHMENT = 'enrichment'), (e.DESTINATION = 'destination')
    })(a || (a = {})),
    (function (e) {
      ;(e.Unknown = 'unknown'),
        (e.Skipped = 'skipped'),
        (e.Success = 'success'),
        (e.RateLimit = 'rate_limit'),
        (e.PayloadTooLarge = 'payload_too_large'),
        (e.Invalid = 'invalid'),
        (e.Failed = 'failed'),
        (e.Timeout = 'Timeout'),
        (e.SystemError = 'SystemError')
    })(u || (u = {})),
    (function (e) {
      ;(e.XHR = 'xhr'), (e.SendBeacon = 'beacon'), (e.Fetch = 'fetch')
    })(c || (c = {}))
  var b,
    y,
    m = Object.freeze({
      __proto__: null,
      get ServerZone() {
        return i
      },
      get SpecialEventType() {
        return o
      },
      get IdentifyOperation() {
        return n
      },
      get RevenueProperty() {
        return r
      },
      get LogLevel() {
        return s
      },
      get PluginType() {
        return a
      },
      get Status() {
        return u
      },
      get TransportType() {
        return c
      },
    }),
    w = 'AMP',
    _ = ''.concat(w, '_unsent'),
    I = 'https://api2.amplitude.com/2/httpapi',
    S = function (e) {
      if (Object.keys(e).length > 1e3) return !1
      for (var t in e) {
        var i = e[t]
        if (!E(t, i)) return !1
      }
      return !0
    },
    E = function (e, t) {
      var i, n
      if ('string' != typeof e) return !1
      if (Array.isArray(t)) {
        var r = !0
        try {
          for (var o = f(t), s = o.next(); !s.done; s = o.next()) {
            var a = s.value
            if (Array.isArray(a)) return !1
            if ('object' == typeof a) r = r && S(a)
            else if (!['number', 'string'].includes(typeof a)) return !1
            if (!r) return !1
          }
        } catch (e) {
          i = { error: e }
        } finally {
          try {
            s && !s.done && (n = o.return) && n.call(o)
          } finally {
            if (i) throw i.error
          }
        }
      } else {
        if (null == t) return !1
        if ('object' == typeof t) return S(t)
        if (!['number', 'string', 'boolean'].includes(typeof t)) return !1
      }
      return !0
    },
    k = (function () {
      function e() {
        ;(this._propertySet = new Set()), (this._properties = {})
      }
      return (
        (e.prototype.getUserProperties = function () {
          return l({}, this._properties)
        }),
        (e.prototype.set = function (e, t) {
          return this._safeSet(n.SET, e, t), this
        }),
        (e.prototype.setOnce = function (e, t) {
          return this._safeSet(n.SET_ONCE, e, t), this
        }),
        (e.prototype.append = function (e, t) {
          return this._safeSet(n.APPEND, e, t), this
        }),
        (e.prototype.prepend = function (e, t) {
          return this._safeSet(n.PREPEND, e, t), this
        }),
        (e.prototype.postInsert = function (e, t) {
          return this._safeSet(n.POSTINSERT, e, t), this
        }),
        (e.prototype.preInsert = function (e, t) {
          return this._safeSet(n.PREINSERT, e, t), this
        }),
        (e.prototype.remove = function (e, t) {
          return this._safeSet(n.REMOVE, e, t), this
        }),
        (e.prototype.add = function (e, t) {
          return this._safeSet(n.ADD, e, t), this
        }),
        (e.prototype.unset = function (e) {
          return this._safeSet(n.UNSET, e, '-'), this
        }),
        (e.prototype.clearAll = function () {
          return (this._properties = {}), (this._properties[n.CLEAR_ALL] = '-'), this
        }),
        (e.prototype._safeSet = function (e, t, i) {
          if (this._validate(e, t, i)) {
            var n = this._properties[e]
            return (
              void 0 === n && ((n = {}), (this._properties[e] = n)),
              (n[t] = i),
              this._propertySet.add(t),
              !0
            )
          }
          return !1
        }),
        (e.prototype._validate = function (e, t, i) {
          return (
            void 0 === this._properties[n.CLEAR_ALL] &&
            !this._propertySet.has(t) &&
            (e === n.ADD ? 'number' == typeof i : e === n.UNSET || e === n.REMOVE || E(t, i))
          )
        }),
        e
      )
    })(),
    O = function (e, t) {
      return l(l({}, t), { event_type: o.IDENTIFY, user_properties: e.getUserProperties() })
    },
    T = function (e, t, i) {
      return (
        void 0 === t && (t = 0), void 0 === i && (i = u.Unknown), { event: e, code: t, message: i }
      )
    },
    x = (function () {
      function e() {
        ;(this.queue = []), (this.applying = !1), (this.isReady = !1), (this.plugins = [])
      }
      return (
        (e.prototype.register = function (e, t) {
          return p(this, void 0, void 0, function () {
            return h(this, function (i) {
              switch (i.label) {
                case 0:
                  return [4, e.setup(t)]
                case 1:
                  return i.sent(), this.plugins.push(e), [2]
              }
            })
          })
        }),
        (e.prototype.deregister = function (e) {
          return (
            this.plugins.splice(
              this.plugins.findIndex(function (t) {
                return t.name === e
              }),
              1,
            ),
            Promise.resolve()
          )
        }),
        (e.prototype.reset = function () {
          ;(this.applying = !1), (this.isReady = !1), (this.plugins = [])
        }),
        (e.prototype.push = function (e) {
          var t = this
          return new Promise(function (i) {
            t.queue.push([e, i]), t.scheduleApply(0)
          })
        }),
        (e.prototype.scheduleApply = function (e) {
          var t = this
          this.isReady &&
            !this.applying &&
            ((this.applying = !0),
            setTimeout(function () {
              t.apply(t.queue.shift()).then(function () {
                ;(t.applying = !1), t.queue.length > 0 && t.scheduleApply(0)
              })
            }, e))
        }),
        (e.prototype.apply = function (e) {
          return p(this, void 0, void 0, function () {
            var t, i, n, r, o, s, u, c, d, p, g, b, y, m, w, _, I, S
            return h(this, function (h) {
              switch (h.label) {
                case 0:
                  if (!e) return [2]
                  ;(t = v(e, 1)),
                    (i = t[0]),
                    (n = v(e, 2)),
                    (r = n[1]),
                    (o = this.plugins.filter(function (e) {
                      return e.type === a.BEFORE
                    })),
                    (h.label = 1)
                case 1:
                  h.trys.push([1, 6, 7, 8]), (s = f(o)), (u = s.next()), (h.label = 2)
                case 2:
                  return u.done ? [3, 5] : [4, u.value.execute(l({}, i))]
                case 3:
                  ;(i = h.sent()), (h.label = 4)
                case 4:
                  return (u = s.next()), [3, 2]
                case 5:
                  return [3, 8]
                case 6:
                  return (c = h.sent()), (w = { error: c }), [3, 8]
                case 7:
                  try {
                    u && !u.done && (_ = s.return) && _.call(s)
                  } finally {
                    if (w) throw w.error
                  }
                  return [7]
                case 8:
                  ;(d = this.plugins.filter(function (e) {
                    return e.type === a.ENRICHMENT
                  })),
                    (h.label = 9)
                case 9:
                  h.trys.push([9, 14, 15, 16]), (p = f(d)), (g = p.next()), (h.label = 10)
                case 10:
                  return g.done ? [3, 13] : [4, g.value.execute(l({}, i))]
                case 11:
                  ;(i = h.sent()), (h.label = 12)
                case 12:
                  return (g = p.next()), [3, 10]
                case 13:
                  return [3, 16]
                case 14:
                  return (b = h.sent()), (I = { error: b }), [3, 16]
                case 15:
                  try {
                    g && !g.done && (S = p.return) && S.call(p)
                  } finally {
                    if (I) throw I.error
                  }
                  return [7]
                case 16:
                  return (
                    (y = this.plugins.filter(function (e) {
                      return e.type === a.DESTINATION
                    })),
                    (m = y.map(function (e) {
                      var t = l({}, i)
                      return e.execute(t).catch(function (e) {
                        return T(t, 0, String(e))
                      })
                    })),
                    Promise.all(m).then(function (e) {
                      var t = v(e, 1)[0]
                      r(t)
                    }),
                    [2]
                  )
              }
            })
          })
        }),
        (e.prototype.flush = function () {
          return p(this, void 0, void 0, function () {
            var e,
              t,
              i,
              n = this
            return h(this, function (r) {
              switch (r.label) {
                case 0:
                  return (
                    (e = this.queue),
                    (this.queue = []),
                    [
                      4,
                      Promise.all(
                        e.map(function (e) {
                          return n.apply(e)
                        }),
                      ),
                    ]
                  )
                case 1:
                  return (
                    r.sent(),
                    (t = this.plugins.filter(function (e) {
                      return e.type === a.DESTINATION
                    })),
                    (i = t.map(function (e) {
                      return e.flush && e.flush()
                    })),
                    [4, Promise.all(i)]
                  )
                case 2:
                  return r.sent(), [2]
              }
            })
          })
        }),
        e
      )
    })(),
    P = 'Event rejected due to exceeded retry count',
    R = (function () {
      function e(e) {
        void 0 === e && (e = '$default'),
          (this.initializing = !1),
          (this.q = []),
          (this.logEvent = this.track.bind(this)),
          (this.timeline = new x()),
          (this.name = e)
      }
      return (
        (e.prototype._init = function (e) {
          return p(this, void 0, void 0, function () {
            var t, i, n, r, o, s
            return h(this, function (a) {
              switch (a.label) {
                case 0:
                  ;(this.config = e),
                    this.timeline.reset(),
                    (t = this.q),
                    (this.q = []),
                    (a.label = 1)
                case 1:
                  a.trys.push([1, 6, 7, 8]), (i = f(t)), (n = i.next()), (a.label = 2)
                case 2:
                  return n.done ? [3, 5] : [4, (0, n.value)()]
                case 3:
                  a.sent(), (a.label = 4)
                case 4:
                  return (n = i.next()), [3, 2]
                case 5:
                  return [3, 8]
                case 6:
                  return (r = a.sent()), (o = { error: r }), [3, 8]
                case 7:
                  try {
                    n && !n.done && (s = i.return) && s.call(i)
                  } finally {
                    if (o) throw o.error
                  }
                  return [7]
                case 8:
                  return [2]
              }
            })
          })
        }),
        (e.prototype.track = function (e, t, i) {
          var n = (function (e, t, i) {
            return l(
              l(l({}, 'string' == typeof e ? { event_type: e } : e), i),
              t && { event_properties: t },
            )
          })(e, t, i)
          return this.dispatch(n)
        }),
        (e.prototype.identify = function (e, t) {
          var i = O(e, t)
          return this.dispatch(i)
        }),
        (e.prototype.groupIdentify = function (e, t, i, n) {
          var r = (function (e, t, i, n) {
            var r
            return l(l({}, n), {
              event_type: o.GROUP_IDENTIFY,
              group_properties: i.getUserProperties(),
              groups: ((r = {}), (r[e] = t), r),
            })
          })(e, t, i, n)
          return this.dispatch(r)
        }),
        (e.prototype.setGroup = function (e, t, i) {
          var n = (function (e, t, i) {
            var n,
              r = new k()
            return (
              r.set(e, t),
              l(l({}, i), {
                event_type: o.IDENTIFY,
                user_properties: r.getUserProperties(),
                groups: ((n = {}), (n[e] = t), n),
              })
            )
          })(e, t, i)
          return this.dispatch(n)
        }),
        (e.prototype.revenue = function (e, t) {
          var i = (function (e, t) {
            return l(l({}, t), { event_type: o.REVENUE, event_properties: e.getEventProperties() })
          })(e, t)
          return this.dispatch(i)
        }),
        (e.prototype.add = function (e) {
          return p(this, void 0, void 0, function () {
            return h(this, function (t) {
              return this.config
                ? [2, this.timeline.register(e, this.config)]
                : (this.q.push(this.add.bind(this, e)), [2])
            })
          })
        }),
        (e.prototype.remove = function (e) {
          return p(this, void 0, void 0, function () {
            return h(this, function (t) {
              return this.config
                ? [2, this.timeline.deregister(e)]
                : (this.q.push(this.remove.bind(this, e)), [2])
            })
          })
        }),
        (e.prototype.dispatch = function (e) {
          var t
          return p(this, void 0, void 0, function () {
            var i, n, r
            return h(this, function (o) {
              switch (o.label) {
                case 0:
                  return (
                    o.trys.push([0, 2, , 3]),
                    (null === (t = this.config) || void 0 === t ? void 0 : t.optOut)
                      ? [2, T(e, 0, 'Event skipped due to optOut config')]
                      : [4, this.timeline.push(e)]
                  )
                case 1:
                  return (
                    200 === (i = o.sent()).code
                      ? this.config.loggerProvider.log(i.message)
                      : this.config.loggerProvider.error(i.message),
                    [2, i]
                  )
                case 2:
                  return (
                    (n = o.sent()),
                    (r = String(n)),
                    this.config.loggerProvider.error(r),
                    [2, T(e, 0, r)]
                  )
                case 3:
                  return [2]
              }
            })
          })
        }),
        (e.prototype.setOptOut = function (e) {
          this.config
            ? (this.config.optOut = Boolean(e))
            : this.q.push(this.setOptOut.bind(this, Boolean(e)))
        }),
        (e.prototype.flush = function () {
          return this.timeline.flush()
        }),
        e
      )
    })(),
    N = (function () {
      function e() {
        ;(this.productId = ''), (this.quantity = 1), (this.price = 0)
      }
      return (
        (e.prototype.setProductId = function (e) {
          return (this.productId = e), this
        }),
        (e.prototype.setQuantity = function (e) {
          return e > 0 && (this.quantity = e), this
        }),
        (e.prototype.setPrice = function (e) {
          return (this.price = e), this
        }),
        (e.prototype.setRevenueType = function (e) {
          return (this.revenueType = e), this
        }),
        (e.prototype.setRevenue = function (e) {
          return (this.revenue = e), this
        }),
        (e.prototype.setEventProperties = function (e) {
          return S(e) && (this.properties = e), this
        }),
        (e.prototype.getEventProperties = function () {
          var e = this.properties ? l({}, this.properties) : {}
          return (
            (e[r.REVENUE_PRODUCT_ID] = this.productId),
            (e[r.REVENUE_QUANTITY] = this.quantity),
            (e[r.REVENUE_PRICE] = this.price),
            (e[r.REVENUE_TYPE] = this.revenueType),
            (e[r.REVENUE] = this.revenue),
            e
          )
        }),
        e
      )
    })(),
    U = 'Amplitude Logger ',
    q = (function () {
      function e() {
        this.logLevel = s.None
      }
      return (
        (e.prototype.disable = function () {
          this.logLevel = s.None
        }),
        (e.prototype.enable = function (e) {
          void 0 === e && (e = s.Warn), (this.logLevel = e)
        }),
        (e.prototype.log = function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
          this.logLevel < s.Verbose || console.log(''.concat(U, '[Log]: ').concat(e.join(' ')))
        }),
        (e.prototype.warn = function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
          this.logLevel < s.Warn || console.warn(''.concat(U, '[Warn]: ').concat(e.join(' ')))
        }),
        (e.prototype.error = function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
          this.logLevel < s.Error || console.error(''.concat(U, '[Error]: ').concat(e.join(' ')))
        }),
        e
      )
    })(),
    C = function () {
      return {
        flushMaxRetries: 12,
        flushQueueSize: 200,
        flushIntervalMillis: 1e4,
        logLevel: s.Warn,
        loggerProvider: new q(),
        optOut: !1,
        serverUrl: I,
        serverZone: i.US,
        useBatch: !1,
      }
    },
    A = (function () {
      function e(e) {
        var t, i, n
        this._optOut = !1
        var r = C()
        ;(this.apiKey = e.apiKey),
          (this.flushIntervalMillis = e.flushIntervalMillis || r.flushIntervalMillis),
          (this.flushMaxRetries = e.flushMaxRetries || r.flushMaxRetries),
          (this.flushQueueSize = e.flushQueueSize || r.flushQueueSize),
          (this.loggerProvider = e.loggerProvider || r.loggerProvider),
          (this.logLevel = null !== (t = e.logLevel) && void 0 !== t ? t : r.logLevel),
          (this.minIdLength = e.minIdLength),
          (this.plan = e.plan),
          (this.ingestionMetadata = e.ingestionMetadata),
          (this.optOut = null !== (i = e.optOut) && void 0 !== i ? i : r.optOut),
          (this.serverUrl = e.serverUrl),
          (this.serverZone = e.serverZone || r.serverZone),
          (this.storageProvider = e.storageProvider),
          (this.transportProvider = e.transportProvider),
          (this.useBatch = null !== (n = e.useBatch) && void 0 !== n ? n : r.useBatch),
          this.loggerProvider.enable(this.logLevel)
        var o = j(e.serverUrl, e.serverZone, e.useBatch)
        ;(this.serverZone = o.serverZone), (this.serverUrl = o.serverUrl)
      }
      return (
        Object.defineProperty(e.prototype, 'optOut', {
          get: function () {
            return this._optOut
          },
          set: function (e) {
            this._optOut = e
          },
          enumerable: !1,
          configurable: !0,
        }),
        e
      )
    })(),
    D = function (e, t) {
      return e === i.EU
        ? t
          ? 'https://api.eu.amplitude.com/batch'
          : 'https://api.eu.amplitude.com/2/httpapi'
        : t
        ? 'https://api2.amplitude.com/batch'
        : I
    },
    j = function (e, t, n) {
      if (
        (void 0 === e && (e = ''),
        void 0 === t && (t = C().serverZone),
        void 0 === n && (n = C().useBatch),
        e)
      )
        return { serverUrl: e, serverZone: void 0 }
      var r = [i.US, i.EU].includes(t) ? t : C().serverZone
      return { serverZone: r, serverUrl: D(r, n) }
    },
    M = (function () {
      function e() {
        ;(this.name = 'amplitude'),
          (this.type = a.DESTINATION),
          (this.retryTimeout = 1e3),
          (this.throttleTimeout = 3e4),
          (this.storageKey = ''),
          (this.scheduled = !1),
          (this.queue = [])
      }
      return (
        (e.prototype.setup = function (e) {
          var t
          return p(this, void 0, void 0, function () {
            var i,
              n = this
            return h(this, function (r) {
              switch (r.label) {
                case 0:
                  return (
                    (this.config = e),
                    (this.storageKey = ''
                      .concat(_, '_')
                      .concat(this.config.apiKey.substring(0, 10))),
                    [
                      4,
                      null === (t = this.config.storageProvider) || void 0 === t
                        ? void 0
                        : t.get(this.storageKey),
                    ]
                  )
                case 1:
                  return (
                    (i = r.sent()),
                    this.saveEvents(),
                    i &&
                      i.length > 0 &&
                      Promise.all(
                        i.map(function (e) {
                          return n.execute(e)
                        }),
                      ).catch(),
                    [2, Promise.resolve(void 0)]
                  )
              }
            })
          })
        }),
        (e.prototype.execute = function (e) {
          var t = this
          return new Promise(function (i) {
            var n = {
              event: e,
              attempts: 0,
              callback: function (e) {
                return i(e)
              },
              timeout: 0,
            }
            t.addToQueue(n)
          })
        }),
        (e.prototype.addToQueue = function () {
          for (var e = this, t = [], i = 0; i < arguments.length; i++) t[i] = arguments[i]
          var n = t.filter(function (t) {
            return t.attempts < e.config.flushMaxRetries
              ? ((t.attempts += 1), !0)
              : (e.fulfillRequest([t], 500, P), !1)
          })
          n.forEach(function (t) {
            ;(e.queue = e.queue.concat(t)),
              0 !== t.timeout
                ? setTimeout(function () {
                    ;(t.timeout = 0), e.schedule(0)
                  }, t.timeout)
                : e.schedule(e.config.flushIntervalMillis)
          }),
            this.saveEvents()
        }),
        (e.prototype.schedule = function (e) {
          var t = this
          this.scheduled ||
            ((this.scheduled = !0),
            setTimeout(function () {
              t.flush(!0).then(function () {
                ;(t.scheduled = !1), t.queue.length > 0 && t.schedule(e)
              })
            }, e))
        }),
        (e.prototype.flush = function (e) {
          return (
            void 0 === e && (e = !1),
            p(this, void 0, void 0, function () {
              var t,
                i,
                n,
                r = this
              return h(this, function (o) {
                switch (o.label) {
                  case 0:
                    return (
                      (t = []),
                      (i = []),
                      this.queue.forEach(function (e) {
                        return 0 === e.timeout ? t.push(e) : i.push(e)
                      }),
                      (this.queue = i),
                      (s = t),
                      (a = this.config.flushQueueSize),
                      (u = Math.max(a, 1)),
                      (n = s.reduce(function (e, t, i) {
                        var n = Math.floor(i / u)
                        return e[n] || (e[n] = []), e[n].push(t), e
                      }, [])),
                      [
                        4,
                        Promise.all(
                          n.map(function (t) {
                            return r.send(t, e)
                          }),
                        ),
                      ]
                    )
                  case 1:
                    return o.sent(), [2]
                }
                var s, a, u
              })
            })
          )
        }),
        (e.prototype.send = function (e, t) {
          return (
            void 0 === t && (t = !0),
            p(this, void 0, void 0, function () {
              var i, n, r, o
              return h(this, function (s) {
                switch (s.label) {
                  case 0:
                    if (!this.config.apiKey)
                      return [
                        2,
                        this.fulfillRequest(e, 400, 'Event rejected due to missing API key'),
                      ]
                    ;(i = {
                      api_key: this.config.apiKey,
                      events: e.map(function (e) {
                        var t = e.event
                        return t.extra, d(t, ['extra'])
                      }),
                      options: { min_id_length: this.config.minIdLength },
                    }),
                      (s.label = 1)
                  case 1:
                    return (
                      s.trys.push([1, 3, , 4]),
                      (n = j(
                        this.config.serverUrl,
                        this.config.serverZone,
                        this.config.useBatch,
                      ).serverUrl),
                      [4, this.config.transportProvider.send(n, i)]
                    )
                  case 2:
                    return null === (r = s.sent())
                      ? (this.fulfillRequest(e, 0, 'Unexpected error occurred'), [2])
                      : t
                      ? (this.handleReponse(r, e), [3, 4])
                      : (this.fulfillRequest(e, r.statusCode, r.status), [2])
                  case 3:
                    return (o = s.sent()), this.fulfillRequest(e, 0, String(o)), [3, 4]
                  case 4:
                    return [2]
                }
              })
            })
          )
        }),
        (e.prototype.handleReponse = function (e, t) {
          switch (e.status) {
            case u.Success:
              this.handleSuccessResponse(e, t)
              break
            case u.Invalid:
              this.handleInvalidResponse(e, t)
              break
            case u.PayloadTooLarge:
              this.handlePayloadTooLargeResponse(e, t)
              break
            case u.RateLimit:
              this.handleRateLimitResponse(e, t)
              break
            default:
              this.handleOtherReponse(t)
          }
        }),
        (e.prototype.handleSuccessResponse = function (e, t) {
          this.fulfillRequest(t, e.statusCode, 'Event tracked successfully')
        }),
        (e.prototype.handleInvalidResponse = function (e, t) {
          var i = this
          if (e.body.missingField || e.body.error.startsWith('Invalid API key'))
            this.fulfillRequest(t, e.statusCode, e.body.error)
          else {
            var n = g(
                g(
                  g(
                    g([], v(Object.values(e.body.eventsWithInvalidFields)), !1),
                    v(Object.values(e.body.eventsWithMissingFields)),
                    !1,
                  ),
                  v(Object.values(e.body.eventsWithInvalidIdLengths)),
                  !1,
                ),
                v(e.body.silencedEvents),
                !1,
              ).flat(),
              r = new Set(n),
              o = t.filter(function (t, n) {
                if (!r.has(n)) return !0
                i.fulfillRequest([t], e.statusCode, e.body.error)
              })
            this.addToQueue.apply(this, g([], v(o), !1))
          }
        }),
        (e.prototype.handlePayloadTooLargeResponse = function (e, t) {
          1 !== t.length
            ? ((this.config.flushQueueSize /= 2), this.addToQueue.apply(this, g([], v(t), !1)))
            : this.fulfillRequest(t, e.statusCode, e.body.error)
        }),
        (e.prototype.handleRateLimitResponse = function (e, t) {
          var i = this,
            n = Object.keys(e.body.exceededDailyQuotaUsers),
            r = Object.keys(e.body.exceededDailyQuotaDevices),
            o = e.body.throttledEvents,
            s = new Set(n),
            a = new Set(r),
            u = new Set(o),
            c = t.filter(function (t, n) {
              if (
                !(
                  (t.event.user_id && s.has(t.event.user_id)) ||
                  (t.event.device_id && a.has(t.event.device_id))
                )
              )
                return u.has(n) && (t.timeout = i.throttleTimeout), !0
              i.fulfillRequest([t], e.statusCode, e.body.error)
            })
          this.addToQueue.apply(this, g([], v(c), !1))
        }),
        (e.prototype.handleOtherReponse = function (e) {
          var t = this
          this.addToQueue.apply(
            this,
            g(
              [],
              v(
                e.map(function (e) {
                  return (e.timeout = e.attempts * t.retryTimeout), e
                }),
              ),
              !1,
            ),
          )
        }),
        (e.prototype.fulfillRequest = function (e, t, i) {
          this.saveEvents(),
            e.forEach(function (e) {
              return e.callback(T(e.event, t, i))
            })
        }),
        (e.prototype.saveEvents = function () {
          if (this.config.storageProvider) {
            var e = Array.from(
              this.queue.map(function (e) {
                return e.event
              }),
            )
            this.config.storageProvider.set(this.storageKey, e)
          }
        }),
        e
      )
    })(),
    L = function (e) {
      return function () {
        for (var t = [], i = 0; i < arguments.length; i++) t[i] = arguments[i]
        return { promise: e.apply(void 0, g([], v(t), !1)) }
      }
    },
    V = function (e) {
      return e
        ? (e ^ ((16 * Math.random()) >> (e / 4))).toString(16)
        : (String(1e7) + String(-1e3) + String(-4e3) + String(-8e3) + String(-1e11)).replace(
            /[018]/g,
            V,
          )
    },
    B = (function () {
      function e() {
        this.memoryStorage = new Map()
      }
      return (
        (e.prototype.isEnabled = function () {
          return p(this, void 0, void 0, function () {
            return h(this, function (e) {
              return [2, !0]
            })
          })
        }),
        (e.prototype.get = function (e) {
          return p(this, void 0, void 0, function () {
            return h(this, function (t) {
              return [2, this.memoryStorage.get(e)]
            })
          })
        }),
        (e.prototype.getRaw = function (e) {
          return p(this, void 0, void 0, function () {
            var t
            return h(this, function (i) {
              switch (i.label) {
                case 0:
                  return [4, this.get(e)]
                case 1:
                  return [2, (t = i.sent()) ? JSON.stringify(t) : void 0]
              }
            })
          })
        }),
        (e.prototype.set = function (e, t) {
          return p(this, void 0, void 0, function () {
            return h(this, function (i) {
              return this.memoryStorage.set(e, t), [2]
            })
          })
        }),
        (e.prototype.remove = function (e) {
          return p(this, void 0, void 0, function () {
            return h(this, function (t) {
              return this.memoryStorage.delete(e), [2]
            })
          })
        }),
        (e.prototype.reset = function () {
          return p(this, void 0, void 0, function () {
            return h(this, function (e) {
              return this.memoryStorage.clear(), [2]
            })
          })
        }),
        e
      )
    })(),
    z = (function () {
      function e() {}
      return (
        (e.prototype.send = function (e, t) {
          return Promise.resolve(null)
        }),
        (e.prototype.buildResponse = function (e) {
          var t, i, n, r, o, s, a, c, l, d, p, h, f, v, g, b, y, m, w, _, I, S
          if ('object' != typeof e) return null
          var E = e.code || 0,
            k = this.buildStatus(E)
          switch (k) {
            case u.Success:
              return {
                status: k,
                statusCode: E,
                body: {
                  eventsIngested: null !== (t = e.events_ingested) && void 0 !== t ? t : 0,
                  payloadSizeBytes: null !== (i = e.payload_size_bytes) && void 0 !== i ? i : 0,
                  serverUploadTime: null !== (n = e.server_upload_time) && void 0 !== n ? n : 0,
                },
              }
            case u.Invalid:
              return {
                status: k,
                statusCode: E,
                body: {
                  error: null !== (r = e.error) && void 0 !== r ? r : '',
                  missingField: null !== (o = e.missing_field) && void 0 !== o ? o : '',
                  eventsWithInvalidFields:
                    null !== (s = e.events_with_invalid_fields) && void 0 !== s ? s : {},
                  eventsWithMissingFields:
                    null !== (a = e.events_with_missing_fields) && void 0 !== a ? a : {},
                  eventsWithInvalidIdLengths:
                    null !== (c = e.events_with_invalid_id_lengths) && void 0 !== c ? c : {},
                  epsThreshold: null !== (l = e.eps_threshold) && void 0 !== l ? l : 0,
                  exceededDailyQuotaDevices:
                    null !== (d = e.exceeded_daily_quota_devices) && void 0 !== d ? d : {},
                  silencedDevices: null !== (p = e.silenced_devices) && void 0 !== p ? p : [],
                  silencedEvents: null !== (h = e.silenced_events) && void 0 !== h ? h : [],
                  throttledDevices: null !== (f = e.throttled_devices) && void 0 !== f ? f : {},
                  throttledEvents: null !== (v = e.throttled_events) && void 0 !== v ? v : [],
                },
              }
            case u.PayloadTooLarge:
              return {
                status: k,
                statusCode: E,
                body: { error: null !== (g = e.error) && void 0 !== g ? g : '' },
              }
            case u.RateLimit:
              return {
                status: k,
                statusCode: E,
                body: {
                  error: null !== (b = e.error) && void 0 !== b ? b : '',
                  epsThreshold: null !== (y = e.eps_threshold) && void 0 !== y ? y : 0,
                  throttledDevices: null !== (m = e.throttled_devices) && void 0 !== m ? m : {},
                  throttledUsers: null !== (w = e.throttled_users) && void 0 !== w ? w : {},
                  exceededDailyQuotaDevices:
                    null !== (_ = e.exceeded_daily_quota_devices) && void 0 !== _ ? _ : {},
                  exceededDailyQuotaUsers:
                    null !== (I = e.exceeded_daily_quota_users) && void 0 !== I ? I : {},
                  throttledEvents: null !== (S = e.throttled_events) && void 0 !== S ? S : [],
                },
              }
            case u.Timeout:
            default:
              return { status: k, statusCode: E }
          }
        }),
        (e.prototype.buildStatus = function (e) {
          return e >= 200 && e < 300
            ? u.Success
            : 429 === e
            ? u.RateLimit
            : 413 === e
            ? u.PayloadTooLarge
            : 408 === e
            ? u.Timeout
            : e >= 400 && e < 500
            ? u.Invalid
            : e >= 500
            ? u.Failed
            : u.Unknown
        }),
        e
      )
    })(),
    F = function () {
      return 'undefined' != typeof window && window.location && window.location.search
        ? window.location.search
            .substring(1)
            .split('&')
            .filter(Boolean)
            .reduce(function (e, t) {
              var i = t.split('=', 2),
                n = $(i[0]),
                r = $(i[1])
              return r ? ((e[n] = r), e) : e
            }, {})
        : {}
    },
    $ = function (e) {
      void 0 === e && (e = '')
      try {
        return decodeURIComponent(e)
      } catch (e) {
        return ''
      }
    },
    Q = {
      utm_source: void 0,
      utm_medium: void 0,
      utm_campaign: void 0,
      utm_term: void 0,
      utm_content: void 0,
      referrer: void 0,
      referring_domain: void 0,
      dclid: void 0,
      gclid: void 0,
      fbclid: void 0,
      ko_click_id: void 0,
      msclkid: void 0,
      ttclid: void 0,
      twclid: void 0,
    },
    W = (function () {
      function e() {}
      return (
        (e.prototype.parse = function () {
          return p(this, void 0, void 0, function () {
            return h(this, function (e) {
              return [
                2,
                l(l(l(l({}, Q), this.getUtmParam()), this.getReferrer()), this.getClickIds()),
              ]
            })
          })
        }),
        (e.prototype.getUtmParam = function () {
          var e = F()
          return {
            utm_source: e.utm_source,
            utm_medium: e.utm_medium,
            utm_campaign: e.utm_campaign,
            utm_term: e.utm_term,
            utm_content: e.utm_content,
          }
        }),
        (e.prototype.getReferrer = function () {
          var e,
            t,
            i = { referrer: void 0, referring_domain: void 0 }
          try {
            ;(i.referrer = document.referrer || void 0),
              (i.referring_domain =
                null !==
                  (t = null === (e = i.referrer) || void 0 === e ? void 0 : e.split('/')[2]) &&
                void 0 !== t
                  ? t
                  : void 0)
          } catch (e) {}
          return i
        }),
        (e.prototype.getClickIds = function () {
          var e,
            t = F()
          return (
            ((e = {}).dclid = t.dclid),
            (e.fbclid = t.fbclid),
            (e.gclid = t.gclid),
            (e.ko_click_id = t.ko_click_id),
            (e.msclkid = t.msclkid),
            (e.ttclid = t.ttclid),
            (e.twclid = t.twclid),
            e
          )
        }),
        e
      )
    })(),
    K = function (e, t, i) {
      return (
        void 0 === t && (t = ''),
        void 0 === i && (i = 10),
        [w, t, e.substring(0, i)].filter(Boolean).join('_')
      )
    },
    Z = (function () {
      function e(e, t) {
        var i, n
        ;(this.storage = t.storage),
          (this.storageKey = K(e, 'MKTG')),
          (this.parser = new W()),
          (this.track = t.track),
          (this.onNewCampaign = t.onNewCampaign),
          (this.disabled = Boolean(t.disabled)),
          (this.trackNewCampaigns = Boolean(t.trackNewCampaigns)),
          (this.trackPageViews = Boolean(t.trackPageViews)),
          (this.excludeReferrers = null !== (i = t.excludeReferrers) && void 0 !== i ? i : []),
          'undefined' != typeof location && this.excludeReferrers.unshift(location.hostname),
          (this.initialEmptyValue =
            null !== (n = t.initialEmptyValue) && void 0 !== n ? n : 'EMPTY')
      }
      return (
        (e.prototype.isNewCampaign = function (e, t) {
          e.referrer
          var i = d(e, ['referrer'])
          t.referrer
          var n = d(t, ['referrer']),
            r = Boolean(i.referring_domain && this.excludeReferrers.includes(i.referring_domain)),
            o = JSON.stringify(i) !== JSON.stringify(n)
          return !r && o
        }),
        (e.prototype.saveCampaignToStorage = function (e) {
          return p(this, void 0, void 0, function () {
            return h(this, function (t) {
              switch (t.label) {
                case 0:
                  return [4, this.storage.set(this.storageKey, e)]
                case 1:
                  return t.sent(), [2]
              }
            })
          })
        }),
        (e.prototype.getCampaignFromStorage = function () {
          return p(this, void 0, void 0, function () {
            return h(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4, this.storage.get(this.storageKey)]
                case 1:
                  return [2, e.sent() || l({}, Q)]
              }
            })
          })
        }),
        (e.prototype.createCampaignEvent = function (e) {
          var t = this,
            i = l(l({}, Q), e),
            n = Object.entries(i).reduce(function (e, i) {
              var n = v(i, 2),
                r = n[0],
                o = n[1]
              return (
                e.setOnce('initial_'.concat(r), o || t.initialEmptyValue),
                o ? e.set(r, o) : e.unset(r)
              )
            }, new k()),
            r = {
              event_type: 'Page View',
              event_properties: {
                page_title: ('undefined' != typeof document && document.title) || '',
                page_location: ('undefined' != typeof location && location.href) || '',
                page_path: ('undefined' != typeof location && location.pathname) || '',
              },
            }
          return l(l({}, O(n)), this.trackPageViews && r)
        }),
        (e.prototype.send = function (e) {
          return p(this, void 0, void 0, function () {
            var t, i
            return h(this, function (n) {
              switch (n.label) {
                case 0:
                  return this.disabled ? [2] : [4, this.parser.parse()]
                case 1:
                  return (t = n.sent()), [4, this.getCampaignFromStorage()]
                case 2:
                  if (((i = n.sent()), !e)) {
                    if (!this.trackNewCampaigns || !this.isNewCampaign(t, i)) return [2]
                    this.onNewCampaign(t)
                  }
                  return [4, this.track(this.createCampaignEvent(t))]
                case 3:
                  return n.sent(), [4, this.saveCampaignToStorage(t)]
                case 4:
                  return n.sent(), [2]
              }
            })
          })
        }),
        e
      )
    })(),
    G = (function () {
      function e(e) {
        this.options = l({}, e)
      }
      return (
        (e.prototype.isEnabled = function () {
          return p(this, void 0, void 0, function () {
            var t, i, n
            return h(this, function (r) {
              switch (r.label) {
                case 0:
                  if ('undefined' == typeof window) return [2, !1]
                  ;(t = String(Date.now())),
                    (i = new e(this.options)),
                    (n = 'AMP_TEST'),
                    (r.label = 1)
                case 1:
                  return r.trys.push([1, 4, 5, 7]), [4, i.set(n, t)]
                case 2:
                  return r.sent(), [4, i.get(n)]
                case 3:
                  return [2, r.sent() === t]
                case 4:
                  return r.sent(), [2, !1]
                case 5:
                  return [4, i.remove(n)]
                case 6:
                  return r.sent(), [7]
                case 7:
                  return [2]
              }
            })
          })
        }),
        (e.prototype.get = function (e) {
          return p(this, void 0, void 0, function () {
            var t
            return h(this, function (i) {
              switch (i.label) {
                case 0:
                  return [4, this.getRaw(e)]
                case 1:
                  if (!(t = i.sent())) return [2, void 0]
                  try {
                    try {
                      t = decodeURIComponent(atob(t))
                    } catch (e) {}
                    return [2, JSON.parse(t)]
                  } catch (e) {
                    return [2, void 0]
                  }
                  return [2]
              }
            })
          })
        }),
        (e.prototype.getRaw = function (e) {
          return p(this, void 0, void 0, function () {
            var t, i
            return h(this, function (n) {
              return (
                (t = window.document.cookie.split('; ')),
                (i = t.find(function (t) {
                  return 0 === t.indexOf(e + '=')
                }))
                  ? [2, i.substring(e.length + 1)]
                  : [2, void 0]
              )
            })
          })
        }),
        (e.prototype.set = function (e, t) {
          var i
          return p(this, void 0, void 0, function () {
            var n, r, o, s, a
            return h(this, function (u) {
              try {
                ;(n = null !== (i = this.options.expirationDays) && void 0 !== i ? i : 0),
                  (o = void 0),
                  (r = null !== t ? n : -1) &&
                    ((s = new Date()).setTime(s.getTime() + 24 * r * 60 * 60 * 1e3), (o = s)),
                  (a = ''.concat(e, '=').concat(btoa(encodeURIComponent(JSON.stringify(t))))),
                  o && (a += '; expires='.concat(o.toUTCString())),
                  (a += '; path=/'),
                  this.options.domain && (a += '; domain='.concat(this.options.domain)),
                  this.options.secure && (a += '; Secure'),
                  this.options.sameSite && (a += '; SameSite='.concat(this.options.sameSite)),
                  (window.document.cookie = a)
              } catch (e) {}
              return [2]
            })
          })
        }),
        (e.prototype.remove = function (e) {
          return p(this, void 0, void 0, function () {
            return h(this, function (t) {
              switch (t.label) {
                case 0:
                  return [4, this.set(e, null)]
                case 1:
                  return t.sent(), [2]
              }
            })
          })
        }),
        (e.prototype.reset = function () {
          return p(this, void 0, void 0, function () {
            return h(this, function (e) {
              return [2]
            })
          })
        }),
        e
      )
    })(),
    H = (function () {
      function e(e, t) {
        ;(this.storage = e),
          (this.isSessionCacheValid = !0),
          (this.storageKey = K(t)),
          (this.cache = { optOut: !1 })
      }
      return (
        (e.prototype.load = function () {
          var e
          return p(this, void 0, void 0, function () {
            var t
            return h(this, function (i) {
              switch (i.label) {
                case 0:
                  return (t = this), [4, this.storage.get(this.storageKey)]
                case 1:
                  return (
                    (t.cache = null !== (e = i.sent()) && void 0 !== e ? e : { optOut: !1 }),
                    [2, this]
                  )
              }
            })
          })
        }),
        (e.prototype.setSession = function (e) {
          ;(this.cache = l(l({}, this.cache), e)), this.storage.set(this.storageKey, this.cache)
        }),
        (e.prototype.getSessionId = function () {
          var e = this
          return (
            (this.isSessionCacheValid = !0),
            this.storage.get(this.storageKey).then(function (t) {
              e.isSessionCacheValid && (e.cache.sessionId = null == t ? void 0 : t.sessionId)
            }),
            this.cache.sessionId
          )
        }),
        (e.prototype.setSessionId = function (e) {
          ;(this.isSessionCacheValid = !1), this.setSession({ sessionId: e })
        }),
        (e.prototype.getDeviceId = function () {
          return this.cache.deviceId
        }),
        (e.prototype.setDeviceId = function (e) {
          this.setSession({ deviceId: e })
        }),
        (e.prototype.getUserId = function () {
          return this.cache.userId
        }),
        (e.prototype.setUserId = function (e) {
          this.setSession({ userId: e })
        }),
        (e.prototype.getLastEventTime = function () {
          return this.cache.lastEventTime
        }),
        (e.prototype.setLastEventTime = function (e) {
          this.setSession({ lastEventTime: e })
        }),
        (e.prototype.getOptOut = function () {
          return this.cache.optOut
        }),
        (e.prototype.setOptOut = function (e) {
          this.setSession({ optOut: e })
        }),
        e
      )
    })(),
    J = (function (e) {
      function i() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        t(i, e),
        (i.prototype.send = function (e, t) {
          return p(this, void 0, void 0, function () {
            var i, n
            return h(this, function (r) {
              switch (r.label) {
                case 0:
                  if ('undefined' == typeof fetch)
                    throw new Error('FetchTransport is not supported')
                  return (
                    (i = {
                      headers: { 'Content-Type': 'application/json', Accept: '*/*' },
                      body: JSON.stringify(t),
                      method: 'POST',
                    }),
                    [4, fetch(e, i)]
                  )
                case 1:
                  return [4, r.sent().json()]
                case 2:
                  return (n = r.sent()), [2, this.buildResponse(n)]
              }
            })
          })
        }),
        i
      )
    })(z),
    Y =
      'undefined' != typeof globalThis
        ? globalThis
        : 'undefined' != typeof window
        ? window
        : 'undefined' != typeof global
        ? global
        : 'undefined' != typeof self
        ? self
        : {},
    X = { exports: {} }
  ;(b = X),
    (y = X.exports),
    (function (e, t) {
      var i = 'function',
        n = 'undefined',
        r = 'object',
        o = 'string',
        s = 'model',
        a = 'name',
        u = 'type',
        c = 'vendor',
        l = 'version',
        d = 'architecture',
        p = 'console',
        h = 'mobile',
        f = 'tablet',
        v = 'smarttv',
        g = 'wearable',
        m = 'embedded',
        w = 'Amazon',
        _ = 'Apple',
        I = 'ASUS',
        S = 'BlackBerry',
        E = 'Firefox',
        k = 'Google',
        O = 'Huawei',
        T = 'LG',
        x = 'Microsoft',
        P = 'Motorola',
        R = 'Opera',
        N = 'Samsung',
        U = 'Sony',
        q = 'Xiaomi',
        C = 'Zebra',
        A = 'Facebook',
        D = function (e) {
          for (var t = {}, i = 0; i < e.length; i++) t[e[i].toUpperCase()] = e[i]
          return t
        },
        j = function (e, t) {
          return typeof e === o && -1 !== M(t).indexOf(M(e))
        },
        M = function (e) {
          return e.toLowerCase()
        },
        L = function (e, t) {
          if (typeof e === o)
            return (
              (e = e.replace(/^\s\s*/, '').replace(/\s\s*$/, '')),
              typeof t === n ? e : e.substring(0, 275)
            )
        },
        V = function (e, n) {
          for (var o, s, a, u, c, l, d = 0; d < n.length && !c; ) {
            var p = n[d],
              h = n[d + 1]
            for (o = s = 0; o < p.length && !c; )
              if ((c = p[o++].exec(e)))
                for (a = 0; a < h.length; a++)
                  (l = c[++s]),
                    typeof (u = h[a]) === r && u.length > 0
                      ? 2 === u.length
                        ? typeof u[1] == i
                          ? (this[u[0]] = u[1].call(this, l))
                          : (this[u[0]] = u[1])
                        : 3 === u.length
                        ? typeof u[1] !== i || (u[1].exec && u[1].test)
                          ? (this[u[0]] = l ? l.replace(u[1], u[2]) : t)
                          : (this[u[0]] = l ? u[1].call(this, l, u[2]) : t)
                        : 4 === u.length &&
                          (this[u[0]] = l ? u[3].call(this, l.replace(u[1], u[2])) : t)
                      : (this[u] = l || t)
            d += 2
          }
        },
        B = function (e, i) {
          for (var n in i)
            if (typeof i[n] === r && i[n].length > 0) {
              for (var o = 0; o < i[n].length; o++) if (j(i[n][o], e)) return '?' === n ? t : n
            } else if (j(i[n], e)) return '?' === n ? t : n
          return e
        },
        z = {
          ME: '4.90',
          'NT 3.11': 'NT3.51',
          'NT 4.0': 'NT4.0',
          2e3: 'NT 5.0',
          XP: ['NT 5.1', 'NT 5.2'],
          Vista: 'NT 6.0',
          7: 'NT 6.1',
          8: 'NT 6.2',
          8.1: 'NT 6.3',
          10: ['NT 6.4', 'NT 10.0'],
          RT: 'ARM',
        },
        F = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [l, [a, 'Chrome']],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [l, [a, 'Edge']],
            [
              /(opera mini)\/([-\w\.]+)/i,
              /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
              /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
            ],
            [a, l],
            [/opios[\/ ]+([\w\.]+)/i],
            [l, [a, 'Opera Mini']],
            [/\bopr\/([\w\.]+)/i],
            [l, [a, R]],
            [
              /(kindle)\/([\w\.]+)/i,
              /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
              /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
              /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
              /(?:ms|\()(ie) ([\w\.]+)/i,
              /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i,
              /(weibo)__([\d\.]+)/i,
            ],
            [a, l],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [l, [a, 'UCBrowser']],
            [/\bqbcore\/([\w\.]+)/i],
            [l, [a, 'WeChat(Win) Desktop']],
            [/micromessenger\/([\w\.]+)/i],
            [l, [a, 'WeChat']],
            [/konqueror\/([\w\.]+)/i],
            [l, [a, 'Konqueror']],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [l, [a, 'IE']],
            [/yabrowser\/([\w\.]+)/i],
            [l, [a, 'Yandex']],
            [/(avast|avg)\/([\w\.]+)/i],
            [[a, /(.+)/, '$1 Secure Browser'], l],
            [/\bfocus\/([\w\.]+)/i],
            [l, [a, 'Firefox Focus']],
            [/\bopt\/([\w\.]+)/i],
            [l, [a, 'Opera Touch']],
            [/coc_coc\w+\/([\w\.]+)/i],
            [l, [a, 'Coc Coc']],
            [/dolfin\/([\w\.]+)/i],
            [l, [a, 'Dolphin']],
            [/coast\/([\w\.]+)/i],
            [l, [a, 'Opera Coast']],
            [/miuibrowser\/([\w\.]+)/i],
            [l, [a, 'MIUI Browser']],
            [/fxios\/([-\w\.]+)/i],
            [l, [a, E]],
            [/\bqihu|(qi?ho?o?|360)browser/i],
            [[a, '360 Browser']],
            [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],
            [[a, /(.+)/, '$1 Browser'], l],
            [/(comodo_dragon)\/([\w\.]+)/i],
            [[a, /_/g, ' '], l],
            [
              /(electron)\/([\w\.]+) safari/i,
              /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
              /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i,
            ],
            [a, l],
            [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i],
            [a],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [[a, A], l],
            [
              /safari (line)\/([\w\.]+)/i,
              /\b(line)\/([\w\.]+)\/iab/i,
              /(chromium|instagram)[\/ ]([-\w\.]+)/i,
            ],
            [a, l],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [l, [a, 'GSA']],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [l, [a, 'Chrome Headless']],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [[a, 'Chrome WebView'], l],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [l, [a, 'Android Browser']],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [a, l],
            [/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],
            [l, [a, 'Mobile Safari']],
            [/version\/([\w\.]+) .*(mobile ?safari|safari)/i],
            [l, a],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [
              a,
              [
                l,
                B,
                {
                  '1.0': '/8',
                  1.2: '/1',
                  1.3: '/3',
                  '2.0': '/412',
                  '2.0.2': '/416',
                  '2.0.3': '/417',
                  '2.0.4': '/419',
                  '?': '/',
                },
              ],
            ],
            [/(webkit|khtml)\/([\w\.]+)/i],
            [a, l],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [[a, 'Netscape'], l],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [l, [a, 'Firefox Reality']],
            [
              /ekiohf.+(flow)\/([\w\.]+)/i,
              /(swiftfox)/i,
              /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
              /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
              /(firefox)\/([\w\.]+)/i,
              /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
              /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
              /(links) \(([\w\.]+)/i,
            ],
            [a, l],
          ],
          cpu: [
            [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
            [[d, 'amd64']],
            [/(ia32(?=;))/i],
            [[d, M]],
            [/((?:i[346]|x)86)[;\)]/i],
            [[d, 'ia32']],
            [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
            [[d, 'arm64']],
            [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
            [[d, 'armhf']],
            [/windows (ce|mobile); ppc;/i],
            [[d, 'arm']],
            [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
            [[d, /ower/, '', M]],
            [/(sun4\w)[;\)]/i],
            [[d, 'sparc']],
            [
              /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
            ],
            [[d, M]],
          ],
          device: [
            [/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
            [s, [c, N], [u, f]],
            [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
            [s, [c, N], [u, h]],
            [/((ipod|iphone)\d+,\d+)/i],
            [s, [c, _], [u, h]],
            [/(ipad\d+,\d+)/i],
            [s, [c, _], [u, f]],
            [/\((ip(?:hone|od)[\w ]*);/i],
            [s, [c, _], [u, h]],
            [
              /\((ipad);[-\w\),; ]+apple/i,
              /applecoremedia\/[\w\.]+ \((ipad)/i,
              /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
            ],
            [s, [c, _], [u, f]],
            [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
            [s, [c, O], [u, f]],
            [
              /(?:huawei|honor)([-\w ]+)[;\)]/i,
              /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i,
            ],
            [s, [c, O], [u, h]],
            [
              /\b(poco[\w ]+)(?: bui|\))/i,
              /\b; (\w+) build\/hm\1/i,
              /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
              /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
              /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i,
            ],
            [
              [s, /_/g, ' '],
              [c, q],
              [u, h],
            ],
            [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
            [
              [s, /_/g, ' '],
              [c, q],
              [u, f],
            ],
            [
              /; (\w+) bui.+ oppo/i,
              /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
            ],
            [s, [c, 'OPPO'], [u, h]],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [s, [c, 'Vivo'], [u, h]],
            [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
            [s, [c, 'Realme'], [u, h]],
            [
              /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
              /\bmot(?:orola)?[- ](\w*)/i,
              /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
            ],
            [s, [c, P], [u, h]],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [s, [c, P], [u, f]],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [s, [c, T], [u, f]],
            [
              /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
              /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
              /\blg-?([\d\w]+) bui/i,
            ],
            [s, [c, T], [u, h]],
            [
              /(ideatab[-\w ]+)/i,
              /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i,
            ],
            [s, [c, 'Lenovo'], [u, f]],
            [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
            [
              [s, /_/g, ' '],
              [c, 'Nokia'],
              [u, h],
            ],
            [/(pixel c)\b/i],
            [s, [c, k], [u, f]],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [s, [c, k], [u, h]],
            [
              /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
            ],
            [s, [c, U], [u, h]],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [s, 'Xperia Tablet'],
              [c, U],
              [u, f],
            ],
            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
            [s, [c, 'OnePlus'], [u, h]],
            [/(alexa)webm/i, /(kf[a-z]{2}wi)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
            [s, [c, w], [u, f]],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [s, /(.+)/g, 'Fire Phone $1'],
              [c, w],
              [u, h],
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [s, c, [u, f]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [s, [c, S], [u, h]],
            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
            [s, [c, I], [u, f]],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [s, [c, I], [u, h]],
            [/(nexus 9)/i],
            [s, [c, 'HTC'], [u, f]],
            [
              /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
              /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
              /(alcatel|geeksphone|nexian|panasonic|sony(?!-bra))[-_ ]?([-\w]*)/i,
            ],
            [c, [s, /_/g, ' '], [u, h]],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [s, [c, 'Acer'], [u, f]],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [s, [c, 'Meizu'], [u, h]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [s, [c, 'Sharp'], [u, h]],
            [
              /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
              /(hp) ([\w ]+\w)/i,
              /(asus)-?(\w+)/i,
              /(microsoft); (lumia[\w ]+)/i,
              /(lenovo)[-_ ]?([-\w]+)/i,
              /(jolla)/i,
              /(oppo) ?([\w ]+) bui/i,
            ],
            [c, s, [u, h]],
            [
              /(archos) (gamepad2?)/i,
              /(hp).+(touchpad(?!.+tablet)|tablet)/i,
              /(kindle)\/([\w\.]+)/i,
              /(nook)[\w ]+build\/(\w+)/i,
              /(dell) (strea[kpr\d ]*[\dko])/i,
              /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
              /(trinity)[- ]*(t\d{3}) bui/i,
              /(gigaset)[- ]+(q\w{1,9}) bui/i,
              /(vodafone) ([\w ]+)(?:\)| bui)/i,
            ],
            [c, s, [u, f]],
            [/(surface duo)/i],
            [s, [c, x], [u, f]],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [s, [c, 'Fairphone'], [u, h]],
            [/(u304aa)/i],
            [s, [c, 'AT&T'], [u, h]],
            [/\bsie-(\w*)/i],
            [s, [c, 'Siemens'], [u, h]],
            [/\b(rct\w+) b/i],
            [s, [c, 'RCA'], [u, f]],
            [/\b(venue[\d ]{2,7}) b/i],
            [s, [c, 'Dell'], [u, f]],
            [/\b(q(?:mv|ta)\w+) b/i],
            [s, [c, 'Verizon'], [u, f]],
            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
            [s, [c, 'Barnes & Noble'], [u, f]],
            [/\b(tm\d{3}\w+) b/i],
            [s, [c, 'NuVision'], [u, f]],
            [/\b(k88) b/i],
            [s, [c, 'ZTE'], [u, f]],
            [/\b(nx\d{3}j) b/i],
            [s, [c, 'ZTE'], [u, h]],
            [/\b(gen\d{3}) b.+49h/i],
            [s, [c, 'Swiss'], [u, h]],
            [/\b(zur\d{3}) b/i],
            [s, [c, 'Swiss'], [u, f]],
            [/\b((zeki)?tb.*\b) b/i],
            [s, [c, 'Zeki'], [u, f]],
            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
            [[c, 'Dragon Touch'], s, [u, f]],
            [/\b(ns-?\w{0,9}) b/i],
            [s, [c, 'Insignia'], [u, f]],
            [/\b((nxa|next)-?\w{0,9}) b/i],
            [s, [c, 'NextBook'], [u, f]],
            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
            [[c, 'Voice'], s, [u, h]],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [[c, 'LvTel'], s, [u, h]],
            [/\b(ph-1) /i],
            [s, [c, 'Essential'], [u, h]],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [s, [c, 'Envizen'], [u, f]],
            [/\b(trio[-\w\. ]+) b/i],
            [s, [c, 'MachSpeed'], [u, f]],
            [/\btu_(1491) b/i],
            [s, [c, 'Rotor'], [u, f]],
            [/(shield[\w ]+) b/i],
            [s, [c, 'Nvidia'], [u, f]],
            [/(sprint) (\w+)/i],
            [c, s, [u, h]],
            [/(kin\.[onetw]{3})/i],
            [
              [s, /\./g, ' '],
              [c, x],
              [u, h],
            ],
            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [s, [c, C], [u, f]],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [s, [c, C], [u, h]],
            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
            [c, s, [u, p]],
            [/droid.+; (shield) bui/i],
            [s, [c, 'Nvidia'], [u, p]],
            [/(playstation [345portablevi]+)/i],
            [s, [c, U], [u, p]],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [s, [c, x], [u, p]],
            [/smart-tv.+(samsung)/i],
            [c, [u, v]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [s, /^/, 'SmartTV'],
              [c, N],
              [u, v],
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [c, T],
              [u, v],
            ],
            [/(apple) ?tv/i],
            [c, [s, 'Apple TV'], [u, v]],
            [/crkey/i],
            [
              [s, 'Chromecast'],
              [c, k],
              [u, v],
            ],
            [/droid.+aft(\w)( bui|\))/i],
            [s, [c, w], [u, v]],
            [/\(dtv[\);].+(aquos)/i],
            [s, [c, 'Sharp'], [u, v]],
            [/(bravia[\w- ]+) bui/i],
            [s, [c, U], [u, v]],
            [
              /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
              /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i,
            ],
            [
              [c, L],
              [s, L],
              [u, v],
            ],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [[u, v]],
            [/((pebble))app/i],
            [c, s, [u, g]],
            [/droid.+; (glass) \d/i],
            [s, [c, k], [u, g]],
            [/droid.+; (wt63?0{2,3})\)/i],
            [s, [c, C], [u, g]],
            [/(quest( 2)?)/i],
            [s, [c, A], [u, g]],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [c, [u, m]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
            [s, [u, h]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [s, [u, f]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [[u, f]],
            [/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],
            [[u, h]],
            [/(android[-\w\. ]{0,9});.+buil/i],
            [s, [c, 'Generic']],
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [l, [a, 'EdgeHTML']],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [l, [a, 'Blink']],
            [
              /(presto)\/([\w\.]+)/i,
              /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
              /ekioh(flow)\/([\w\.]+)/i,
              /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
              /(icab)[\/ ]([23]\.[\d\.]+)/i,
            ],
            [a, l],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [l, a],
          ],
          os: [
            [/microsoft (windows) (vista|xp)/i],
            [a, l],
            [
              /(windows) nt 6\.2; (arm)/i,
              /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
              /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
            ],
            [a, [l, B, z]],
            [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
            [
              [a, 'Windows'],
              [l, B, z],
            ],
            [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /cfnetwork\/.+darwin/i],
            [
              [l, /_/g, '.'],
              [a, 'iOS'],
            ],
            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
            [
              [a, 'Mac OS'],
              [l, /_/g, '.'],
            ],
            [/droid ([\w\.]+)\b.+(android[- ]x86)/i],
            [l, a],
            [
              /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
              /(blackberry)\w*\/([\w\.]*)/i,
              /(tizen|kaios)[\/ ]([\w\.]+)/i,
              /\((series40);/i,
            ],
            [a, l],
            [/\(bb(10);/i],
            [l, [a, S]],
            [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
            [l, [a, 'Symbian']],
            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
            [l, [a, 'Firefox OS']],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [l, [a, 'webOS']],
            [/crkey\/([\d\.]+)/i],
            [l, [a, 'Chromecast']],
            [/(cros) [\w]+ ([\w\.]+\w)/i],
            [[a, 'Chromium OS'], l],
            [
              /(nintendo|playstation) ([wids345portablevuch]+)/i,
              /(xbox); +xbox ([^\);]+)/i,
              /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
              /(mint)[\/\(\) ]?(\w*)/i,
              /(mageia|vectorlinux)[; ]/i,
              /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
              /(hurd|linux) ?([\w\.]*)/i,
              /(gnu) ?([\w\.]*)/i,
              /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
              /(haiku) (\w+)/i,
            ],
            [a, l],
            [/(sunos) ?([\w\.\d]*)/i],
            [[a, 'Solaris'], l],
            [
              /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
              /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
              /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,
              /(unix) ?([\w\.]*)/i,
            ],
            [a, l],
          ],
        },
        $ = function (i, s) {
          if ((typeof i === r && ((s = i), (i = t)), !(this instanceof $)))
            return new $(i, s).getResult()
          var a =
              i ||
              (typeof e !== n && e.navigator && e.navigator.userAgent ? e.navigator.userAgent : ''),
            u = s
              ? (function (e, t) {
                  var i = {}
                  for (var n in e)
                    t[n] && t[n].length % 2 == 0 ? (i[n] = t[n].concat(e[n])) : (i[n] = e[n])
                  return i
                })(F, s)
              : F
          return (
            (this.getBrowser = function () {
              var e,
                i = {}
              return (
                (i.name = t),
                (i.version = t),
                V.call(i, a, u.browser),
                (i.major =
                  typeof (e = i.version) === o ? e.replace(/[^\d\.]/g, '').split('.')[0] : t),
                i
              )
            }),
            (this.getCPU = function () {
              var e = {}
              return (e.architecture = t), V.call(e, a, u.cpu), e
            }),
            (this.getDevice = function () {
              var e = {}
              return (e.vendor = t), (e.model = t), (e.type = t), V.call(e, a, u.device), e
            }),
            (this.getEngine = function () {
              var e = {}
              return (e.name = t), (e.version = t), V.call(e, a, u.engine), e
            }),
            (this.getOS = function () {
              var e = {}
              return (e.name = t), (e.version = t), V.call(e, a, u.os), e
            }),
            (this.getResult = function () {
              return {
                ua: this.getUA(),
                browser: this.getBrowser(),
                engine: this.getEngine(),
                os: this.getOS(),
                device: this.getDevice(),
                cpu: this.getCPU(),
              }
            }),
            (this.getUA = function () {
              return a
            }),
            (this.setUA = function (e) {
              return (a = typeof e === o && e.length > 275 ? L(e, 275) : e), this
            }),
            this.setUA(a),
            this
          )
        }
      ;($.VERSION = '0.7.31'),
        ($.BROWSER = D([a, l, 'major'])),
        ($.CPU = D([d])),
        ($.DEVICE = D([s, c, u, p, h, v, f, g, m])),
        ($.ENGINE = $.OS = D([a, l])),
        b.exports && (y = b.exports = $),
        (y.UAParser = $)
      var Q = typeof e !== n && (e.jQuery || e.Zepto)
      if (Q && !Q.ua) {
        var W = new $()
        ;(Q.ua = W.getResult()),
          (Q.ua.get = function () {
            return W.getUA()
          }),
          (Q.ua.set = function (e) {
            W.setUA(e)
            var t = W.getResult()
            for (var i in t) Q.ua[i] = t[i]
          })
      }
    })('object' == typeof window ? window : Y)
  var ee = X.exports,
    te = (function () {
      function e() {
        this.ua = new X.exports.UAParser(
          'undefined' != typeof navigator ? navigator.userAgent : null,
        ).getResult()
      }
      return (
        (e.prototype.getApplicationContext = function () {
          return {
            versionName: this.versionName,
            language: re(),
            platform: 'Web',
            os: ie(this.ua),
            deviceModel: ne(this.ua),
          }
        }),
        e
      )
    })(),
    ie = function (e) {
      var t, i
      return [
        null === (t = e.browser) || void 0 === t ? void 0 : t.name,
        null === (i = e.browser) || void 0 === i ? void 0 : i.major,
      ]
        .filter(function (e) {
          return null != e
        })
        .join(' ')
    },
    ne = function (e) {
      var t
      return null === (t = e.os) || void 0 === t ? void 0 : t.name
    },
    re = function () {
      return (
        ('undefined' != typeof navigator &&
          ((navigator.languages && navigator.languages[0]) || navigator.language)) ||
        ''
      )
    },
    oe = (function () {
      function e() {
        this.queue = []
      }
      return (
        (e.prototype.logEvent = function (e) {
          this.receiver ? this.receiver(e) : this.queue.length < 512 && this.queue.push(e)
        }),
        (e.prototype.setEventReceiver = function (e) {
          ;(this.receiver = e),
            this.queue.length > 0 &&
              (this.queue.forEach(function (t) {
                e(t)
              }),
              (this.queue = []))
        }),
        e
      )
    })(),
    se = function () {
      return (
        (se =
          Object.assign ||
          function (e) {
            for (var t, i = 1, n = arguments.length; i < n; i++)
              for (var r in (t = arguments[i]))
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
            return e
          }),
        se.apply(this, arguments)
      )
    }
  Object.entries ||
    (Object.entries = function (e) {
      for (var t = Object.keys(e), i = t.length, n = new Array(i); i--; ) n[i] = [t[i], e[t[i]]]
      return n
    })
  var ae = (function () {
      function e() {
        ;(this.identity = { userProperties: {} }), (this.listeners = new Set())
      }
      return (
        (e.prototype.editIdentity = function () {
          var e = this,
            t = se({}, this.identity.userProperties),
            i = se(se({}, this.identity), { userProperties: t })
          return {
            setUserId: function (e) {
              return (i.userId = e), this
            },
            setDeviceId: function (e) {
              return (i.deviceId = e), this
            },
            setUserProperties: function (e) {
              return (i.userProperties = e), this
            },
            updateUserProperties: function (e) {
              for (
                var t = i.userProperties || {}, n = 0, r = Object.entries(e);
                n < r.length;
                n++
              ) {
                var o = r[n],
                  s = o[0],
                  a = o[1]
                switch (s) {
                  case '$set':
                    for (var u = 0, c = Object.entries(a); u < c.length; u++) {
                      var l = c[u],
                        d = l[0],
                        p = l[1]
                      t[d] = p
                    }
                    break
                  case '$unset':
                    for (var h = 0, f = Object.keys(a); h < f.length; h++) {
                      delete t[(d = f[h])]
                    }
                    break
                  case '$clearAll':
                    t = {}
                }
              }
              return (i.userProperties = t), this
            },
            commit: function () {
              return e.setIdentity(i), this
            },
          }
        }),
        (e.prototype.getIdentity = function () {
          return se({}, this.identity)
        }),
        (e.prototype.setIdentity = function (e) {
          var t = se({}, this.identity)
          ;(this.identity = se({}, e)),
            ue(t, this.identity) ||
              this.listeners.forEach(function (t) {
                t(e)
              })
        }),
        (e.prototype.addIdentityListener = function (e) {
          this.listeners.add(e)
        }),
        (e.prototype.removeIdentityListener = function (e) {
          this.listeners.delete(e)
        }),
        e
      )
    })(),
    ue = function (e, t) {
      var i = typeof e
      if (i !== typeof t) return !1
      for (var n = 0, r = ['string', 'number', 'boolean', 'undefined']; n < r.length; n++) {
        if (r[n] === i) return e === t
      }
      if (e.length !== t.length) return !1
      var o = Array.isArray(e),
        s = Array.isArray(t)
      if (o !== s) return !1
      if (!o || !s) {
        var a = Object.keys(e).sort(),
          u = Object.keys(t).sort()
        if (!ue(a, u)) return !1
        var c = !0
        return (
          Object.keys(e).forEach(function (i) {
            ue(e[i], t[i]) || (c = !1)
          }),
          c
        )
      }
      for (var l = 0; l < e.length; l++) if (!ue(e[l], t[l])) return !1
      return !0
    },
    ce = 'undefined' != typeof globalThis ? globalThis : global || self,
    le = (function () {
      function e() {
        ;(this.identityStore = new ae()),
          (this.eventBridge = new oe()),
          (this.applicationContextProvider = new te())
      }
      return (
        (e.getInstance = function (t) {
          return (
            ce.analyticsConnectorInstances || (ce.analyticsConnectorInstances = {}),
            ce.analyticsConnectorInstances[t] || (ce.analyticsConnectorInstances[t] = new e()),
            ce.analyticsConnectorInstances[t]
          )
        }),
        e
      )
    })(),
    de = function () {
      return le.getInstance('$default_instance')
    },
    pe = (function () {
      function e() {
        ;(this.name = 'identity'), (this.type = a.BEFORE), (this.identityStore = de().identityStore)
      }
      return (
        (e.prototype.execute = function (e) {
          return p(this, void 0, void 0, function () {
            var t
            return h(this, function (i) {
              return (
                (t = e.user_properties) &&
                  this.identityStore.editIdentity().updateUserProperties(t).commit(),
                [2, e]
              )
            })
          })
        }),
        (e.prototype.setup = function (e) {
          return Promise.resolve(void 0)
        }),
        e
      )
    })(),
    he = function () {
      var e, t, i, n
      if ('undefined' == typeof navigator) return ''
      var r = navigator.userLanguage
      return null !==
        (n =
          null !==
            (i =
              null !== (t = null === (e = navigator.languages) || void 0 === e ? void 0 : e[0]) &&
              void 0 !== t
                ? t
                : navigator.language) && void 0 !== i
            ? i
            : r) && void 0 !== n
        ? n
        : ''
    },
    fe = function (e, t) {
      ve(e, t)
    },
    ve = function (e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i],
          r = n.name,
          o = n.args,
          s = n.resolve,
          a = e && e[r]
        if ('function' == typeof a) {
          var u = a.apply(e, o)
          'function' == typeof s && s(null == u ? void 0 : u.promise)
        }
      }
      return e
    },
    ge = function (e) {
      return e && void 0 !== e._q
    },
    be = (function () {
      function e() {
        var e
        ;(this.name = 'context'),
          (this.type = a.BEFORE),
          (this.eventId = 0),
          (this.library = 'amplitude-ts/'.concat('1.5.1')),
          'undefined' != typeof navigator && (e = navigator.userAgent),
          (this.uaResult = new ee(e).getResult())
      }
      return (
        (e.prototype.setup = function (e) {
          return (this.config = e), Promise.resolve(void 0)
        }),
        (e.prototype.execute = function (e) {
          return p(this, void 0, void 0, function () {
            var t, i, n, r, o
            return h(this, function (s) {
              return (
                this.isSessionValid() || (this.config.sessionId = Date.now()),
                (this.config.lastEventTime = Date.now()),
                (t = new Date().getTime()),
                (i = this.uaResult.browser.name),
                (n = this.uaResult.browser.version),
                (r = this.uaResult.device.model || this.uaResult.os.name),
                (o = this.uaResult.device.vendor),
                [
                  2,
                  l(
                    l(
                      l(
                        l(
                          l(
                            l(
                              l(
                                l(
                                  l(
                                    l(
                                      l(
                                        l(
                                          {
                                            user_id: this.config.userId,
                                            device_id: this.config.deviceId,
                                            session_id: this.config.sessionId,
                                            time: t,
                                          },
                                          this.config.appVersion && {
                                            app_version: this.config.appVersion,
                                          },
                                        ),
                                        this.config.trackingOptions.platform && { platform: 'Web' },
                                      ),
                                      this.config.trackingOptions.osName && { os_name: i },
                                    ),
                                    this.config.trackingOptions.osVersion && { os_version: n },
                                  ),
                                  this.config.trackingOptions.deviceManufacturer && {
                                    device_manufacturer: o,
                                  },
                                ),
                                this.config.trackingOptions.deviceModel && { device_model: r },
                              ),
                              this.config.trackingOptions.language && { language: he() },
                            ),
                            this.config.trackingOptions.ipAddress && { ip: '$remote' },
                          ),
                          {
                            insert_id: V(),
                            partner_id: this.config.partnerId,
                            plan: this.config.plan,
                          },
                        ),
                        this.config.ingestionMetadata && {
                          ingestion_metadata: {
                            source_name: this.config.ingestionMetadata.sourceName,
                            source_version: this.config.ingestionMetadata.sourceVersion,
                          },
                        },
                      ),
                      e,
                    ),
                    { event_id: this.eventId++, library: this.library },
                  ),
                ]
              )
            })
          })
        }),
        (e.prototype.isSessionValid = function () {
          var e = this.config.lastEventTime || Date.now()
          return Date.now() - e < this.config.sessionTimeout
        }),
        e
      )
    })(),
    ye = (function () {
      function e() {}
      return (
        (e.prototype.isEnabled = function () {
          return p(this, void 0, void 0, function () {
            var t, i, n
            return h(this, function (r) {
              switch (r.label) {
                case 0:
                  if ('undefined' == typeof window) return [2, !1]
                  ;(t = String(Date.now())), (i = new e()), (n = 'AMP_TEST'), (r.label = 1)
                case 1:
                  return r.trys.push([1, 4, 5, 7]), [4, i.set(n, t)]
                case 2:
                  return r.sent(), [4, i.get(n)]
                case 3:
                  return [2, r.sent() === t]
                case 4:
                  return r.sent(), [2, !1]
                case 5:
                  return [4, i.remove(n)]
                case 6:
                  return r.sent(), [7]
                case 7:
                  return [2]
              }
            })
          })
        }),
        (e.prototype.get = function (e) {
          return p(this, void 0, void 0, function () {
            var t
            return h(this, function (i) {
              switch (i.label) {
                case 0:
                  return i.trys.push([0, 2, , 3]), [4, this.getRaw(e)]
                case 1:
                  return (t = i.sent()) ? [2, JSON.parse(t)] : [2, void 0]
                case 2:
                  return i.sent(), [2, void 0]
                case 3:
                  return [2]
              }
            })
          })
        }),
        (e.prototype.getRaw = function (e) {
          return p(this, void 0, void 0, function () {
            return h(this, function (t) {
              return [2, window.localStorage.getItem(e) || void 0]
            })
          })
        }),
        (e.prototype.set = function (e, t) {
          return p(this, void 0, void 0, function () {
            return h(this, function (i) {
              try {
                window.localStorage.setItem(e, JSON.stringify(t))
              } catch (e) {}
              return [2]
            })
          })
        }),
        (e.prototype.remove = function (e) {
          return p(this, void 0, void 0, function () {
            return h(this, function (t) {
              try {
                window.localStorage.removeItem(e)
              } catch (e) {}
              return [2]
            })
          })
        }),
        (e.prototype.reset = function () {
          return p(this, void 0, void 0, function () {
            return h(this, function (e) {
              try {
                window.localStorage.clear()
              } catch (e) {}
              return [2]
            })
          })
        }),
        e
      )
    })(),
    me = (function (e) {
      function i() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return (t.state = { done: 4 }), t
      }
      return (
        t(i, e),
        (i.prototype.send = function (e, t) {
          return p(this, void 0, void 0, function () {
            var i = this
            return h(this, function (n) {
              return [
                2,
                new Promise(function (n, r) {
                  'undefined' == typeof XMLHttpRequest &&
                    r(new Error('XHRTransport is not supported.'))
                  var o = new XMLHttpRequest()
                  o.open('POST', e, !0),
                    (o.onreadystatechange = function () {
                      if (o.readyState === i.state.done)
                        try {
                          var e = o.responseText,
                            t = JSON.parse(e),
                            s = i.buildResponse(t)
                          n(s)
                        } catch (e) {
                          r(e)
                        }
                    }),
                    o.setRequestHeader('Content-Type', 'application/json'),
                    o.setRequestHeader('Accept', '*/*'),
                    o.send(JSON.stringify(t))
                }),
              ]
            })
          })
        }),
        i
      )
    })(z),
    we = (function (e) {
      function i() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        t(i, e),
        (i.prototype.send = function (e, t) {
          return p(this, void 0, void 0, function () {
            var i = this
            return h(this, function (n) {
              return [
                2,
                new Promise(function (n, r) {
                  if (
                    'undefined' == typeof window ||
                    void 0 === window.navigator ||
                    void 0 === window.navigator.sendBeacon
                  )
                    throw new Error('SendBeaconTransport is not supported')
                  try {
                    var o = JSON.stringify(t)
                    return n(
                      window.navigator.sendBeacon(e, JSON.stringify(t))
                        ? i.buildResponse({
                            code: 200,
                            events_ingested: t.events.length,
                            payload_size_bytes: o.length,
                            server_upload_time: Date.now(),
                          })
                        : i.buildResponse({ code: 500 }),
                    )
                  } catch (e) {
                    r(e)
                  }
                }),
              ]
            })
          })
        }),
        i
      )
    })(z),
    _e = function () {
      var e = new B()
      return {
        cookieExpiration: 365,
        cookieSameSite: 'Lax',
        cookieSecure: !1,
        cookieStorage: e,
        disableCookies: !1,
        domain: '',
        sessionManager: new H(e, ''),
        sessionTimeout: 18e5,
        storageProvider: new B(),
        trackingOptions: {
          deviceManufacturer: !0,
          deviceModel: !0,
          ipAddress: !0,
          language: !0,
          osName: !0,
          osVersion: !0,
          platform: !0,
        },
        transportProvider: new J(),
      }
    },
    Ie = (function (e) {
      function i(t, i, n) {
        var r,
          o,
          s,
          a,
          u,
          c,
          d,
          p,
          h,
          f,
          v,
          g,
          b = this,
          y = _e()
        return (
          ((b =
            e.call(
              this,
              l(l({ flushIntervalMillis: 1e3, flushMaxRetries: 5, flushQueueSize: 30 }, n), {
                apiKey: t,
                storageProvider:
                  null !== (r = null == n ? void 0 : n.storageProvider) && void 0 !== r
                    ? r
                    : y.storageProvider,
                transportProvider:
                  null !== (o = null == n ? void 0 : n.transportProvider) && void 0 !== o
                    ? o
                    : y.transportProvider,
              }),
            ) || this).cookieStorage =
            null !== (s = null == n ? void 0 : n.cookieStorage) && void 0 !== s
              ? s
              : y.cookieStorage),
          (b.sessionManager =
            null !== (a = null == n ? void 0 : n.sessionManager) && void 0 !== a
              ? a
              : y.sessionManager),
          (b.sessionTimeout =
            null !== (u = null == n ? void 0 : n.sessionTimeout) && void 0 !== u
              ? u
              : y.sessionTimeout),
          (b.appVersion = null == n ? void 0 : n.appVersion),
          (b.attribution = null == n ? void 0 : n.attribution),
          (b.cookieExpiration =
            null !== (c = null == n ? void 0 : n.cookieExpiration) && void 0 !== c
              ? c
              : y.cookieExpiration),
          (b.cookieSameSite =
            null !== (d = null == n ? void 0 : n.cookieSameSite) && void 0 !== d
              ? d
              : y.cookieSameSite),
          (b.cookieSecure =
            null !== (p = null == n ? void 0 : n.cookieSecure) && void 0 !== p
              ? p
              : y.cookieSecure),
          (b.deviceId = null == n ? void 0 : n.deviceId),
          (b.disableCookies =
            null !== (h = null == n ? void 0 : n.disableCookies) && void 0 !== h
              ? h
              : y.disableCookies),
          (b.domain = null !== (f = null == n ? void 0 : n.domain) && void 0 !== f ? f : y.domain),
          (b.lastEventTime =
            null !== (v = b.lastEventTime) && void 0 !== v
              ? v
              : null == n
              ? void 0
              : n.lastEventTime),
          (b.optOut = Boolean(null == n ? void 0 : n.optOut)),
          (b.partnerId = null == n ? void 0 : n.partnerId),
          (b.sessionId = null == n ? void 0 : n.sessionId),
          (b.trackingOptions =
            null !== (g = null == n ? void 0 : n.trackingOptions) && void 0 !== g
              ? g
              : y.trackingOptions),
          (b.userId = i),
          b
        )
      }
      return (
        t(i, e),
        Object.defineProperty(i.prototype, 'deviceId', {
          get: function () {
            return this.sessionManager.getDeviceId()
          },
          set: function (e) {
            this.sessionManager.setDeviceId(e)
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(i.prototype, 'userId', {
          get: function () {
            return this.sessionManager.getUserId()
          },
          set: function (e) {
            this.sessionManager.setUserId(e)
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(i.prototype, 'sessionId', {
          get: function () {
            return this.sessionManager.getSessionId()
          },
          set: function (e) {
            this.sessionManager.setSessionId(e)
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(i.prototype, 'optOut', {
          get: function () {
            return this.sessionManager.getOptOut()
          },
          set: function (e) {
            var t
            null === (t = this.sessionManager) || void 0 === t || t.setOptOut(Boolean(e))
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(i.prototype, 'lastEventTime', {
          get: function () {
            return this.sessionManager.getLastEventTime()
          },
          set: function (e) {
            this.sessionManager.setLastEventTime(e)
          },
          enumerable: !1,
          configurable: !0,
        }),
        i
      )
    })(A),
    Se = function (e, t, i) {
      return p(void 0, void 0, void 0, function () {
        var n, r, o, s, a, u, c, d, p, f, v, g, b, y, m, w, _
        return h(this, function (h) {
          switch (h.label) {
            case 0:
              return (
                (n = _e()),
                null === (b = null == i ? void 0 : i.domain) || void 0 === b
                  ? [3, 1]
                  : ((o = b), [3, 3])
              )
            case 1:
              return [4, Pe()]
            case 2:
              ;(o = h.sent()), (h.label = 3)
            case 3:
              return (r = o), [4, Ee(l(l({}, i), { domain: r }))]
            case 4:
              return (s = h.sent()), (a = K(e)), [4, s.get(a)]
            case 5:
              return (u = h.sent()), (c = F()), [4, new H(s, e).load()]
            case 6:
              return (
                (d = h.sent()),
                (p = Ie.bind),
                (f = [void 0, e, null != t ? t : null == u ? void 0 : u.userId]),
                (v = [l({}, i)]),
                (g = {
                  cookieStorage: s,
                  sessionManager: d,
                  deviceId: Te(
                    null == u ? void 0 : u.deviceId,
                    null == i ? void 0 : i.deviceId,
                    c.deviceId,
                  ),
                  domain: r,
                  optOut:
                    null !== (y = null == i ? void 0 : i.optOut) && void 0 !== y
                      ? y
                      : Boolean(null == u ? void 0 : u.optOut),
                }),
                [4, s.get(a)]
              )
            case 7:
              return (
                (g.sessionId =
                  null !== (w = null === (m = h.sent()) || void 0 === m ? void 0 : m.sessionId) &&
                  void 0 !== w
                    ? w
                    : null == i
                    ? void 0
                    : i.sessionId),
                [4, Oe(i)]
              )
            case 8:
              return [
                2,
                new (p.apply(
                  Ie,
                  f.concat([
                    l.apply(
                      void 0,
                      v.concat([
                        ((g.storageProvider = h.sent()),
                        (g.trackingOptions = l(
                          l({}, n.trackingOptions),
                          null == i ? void 0 : i.trackingOptions,
                        )),
                        (g.transportProvider =
                          null !== (_ = null == i ? void 0 : i.transportProvider) && void 0 !== _
                            ? _
                            : xe(null == i ? void 0 : i.transport)),
                        g),
                      ]),
                    ),
                  ]),
                ))(),
              ]
          }
        })
      })
    },
    Ee = function (e, t) {
      return (
        void 0 === t && (t = _e()),
        p(void 0, void 0, void 0, function () {
          var i, n, r
          return h(this, function (o) {
            switch (o.label) {
              case 0:
                return (
                  (i = l(l({}, t), e)),
                  (n = null == e ? void 0 : e.cookieStorage),
                  (r = !n) ? [3, 2] : [4, n.isEnabled()]
                )
              case 1:
                ;(r = !o.sent()), (o.label = 2)
              case 2:
                return r ? [2, ke(i)] : [2, n]
            }
          })
        })
      )
    },
    ke = function (e) {
      return p(void 0, void 0, void 0, function () {
        var t, i
        return h(this, function (n) {
          switch (n.label) {
            case 0:
              return (
                (t = new G({
                  domain: e.domain,
                  expirationDays: e.cookieExpiration,
                  sameSite: e.cookieSameSite,
                  secure: e.cookieSecure,
                })),
                (i = e.disableCookies) ? [3, 2] : [4, t.isEnabled()]
              )
            case 1:
              ;(i = !n.sent()), (n.label = 2)
            case 2:
              return i ? [4, (t = new ye()).isEnabled()] : [3, 4]
            case 3:
              n.sent() || (t = new B()), (n.label = 4)
            case 4:
              return [2, t]
          }
        })
      })
    },
    Oe = function (e) {
      return p(void 0, void 0, void 0, function () {
        var t, i, n, r, o, s, a
        return h(this, function (u) {
          switch (u.label) {
            case 0:
              if (
                e &&
                Object.prototype.hasOwnProperty.call(e, 'storageProvider') &&
                !e.storageProvider
              )
                return [3, 9]
              u.label = 1
            case 1:
              u.trys.push([1, 7, 8, 9]),
                (t = f([null == e ? void 0 : e.storageProvider, new ye()])),
                (i = t.next()),
                (u.label = 2)
            case 2:
              return i.done ? [3, 6] : ((n = i.value), (r = n) ? [4, n.isEnabled()] : [3, 4])
            case 3:
              ;(r = u.sent()), (u.label = 4)
            case 4:
              if (r) return [2, n]
              u.label = 5
            case 5:
              return (i = t.next()), [3, 2]
            case 6:
              return [3, 9]
            case 7:
              return (o = u.sent()), (s = { error: o }), [3, 9]
            case 8:
              try {
                i && !i.done && (a = t.return) && a.call(t)
              } finally {
                if (s) throw s.error
              }
              return [7]
            case 9:
              return [2, void 0]
          }
        })
      })
    },
    Te = function (e, t, i) {
      return t || i || e || V()
    },
    xe = function (e) {
      return e === c.XHR ? new me() : e === c.SendBeacon ? new we() : _e().transportProvider
    },
    Pe = function (e) {
      return p(void 0, void 0, void 0, function () {
        var t, i, n, r, o, s, a
        return h(this, function (u) {
          switch (u.label) {
            case 0:
              return [4, new G().isEnabled()]
            case 1:
              if (!u.sent() || (!e && 'undefined' == typeof location)) return [2, '']
              for (
                t = null != e ? e : location.hostname,
                  i = t.split('.'),
                  n = [],
                  r = 'AMP_TLDTEST',
                  o = i.length - 2;
                o >= 0;
                --o
              )
                n.push(i.slice(o).join('.'))
              ;(o = 0), (u.label = 2)
            case 2:
              return o < n.length
                ? ((s = n[o]), [4, (a = new G({ domain: '.' + s })).set(r, 1)])
                : [3, 7]
            case 3:
              return u.sent(), [4, a.get(r)]
            case 4:
              return u.sent() ? [4, a.remove(r)] : [3, 6]
            case 5:
              return u.sent(), [2, '.' + s]
            case 6:
              return o++, [3, 2]
            case 7:
              return [2, '']
          }
        })
      })
    },
    Re = function (e, t) {
      return p(void 0, void 0, void 0, function () {
        var i, n, r, o, s, a, u, c, l
        return h(this, function (d) {
          switch (d.label) {
            case 0:
              return [4, (i = new G()).isEnabled()]
            case 1:
              return (
                (d.sent() && !(null == t ? void 0 : t.disableCookies)) || (i = new ye()),
                [4, i.isEnabled()]
              )
            case 2:
              return d.sent()
                ? ((n = (function (e) {
                    return ''.concat(w.toLowerCase(), '_').concat(e.substring(0, 6))
                  })(e)),
                  [4, i.getRaw(n)])
                : [2, { optOut: !1 }]
            case 3:
              return (r = d.sent()) ? [4, i.remove(n)] : [2, { optOut: !1 }]
            case 4:
              return (
                d.sent(),
                (o = v(r.split('.'), 5)),
                (s = o[0]),
                (a = o[1]),
                (u = o[2]),
                (c = o[3]),
                (l = o[4]),
                [
                  2,
                  {
                    deviceId: s,
                    userId: Ue(a),
                    sessionId: Ne(c),
                    lastEventTime: Ne(l),
                    optOut: Boolean(u),
                  },
                ]
              )
          }
        })
      })
    },
    Ne = function (e) {
      var t = parseInt(e, 32)
      if (!isNaN(t)) return t
    },
    Ue = function (e) {
      if (atob && escape && e)
        try {
          return decodeURIComponent(escape(atob(e)))
        } catch (e) {
          return
        }
    },
    qe = (function (e) {
      function i() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        t(i, e),
        (i.prototype.init = function (t, i, n) {
          var r, o, s
          return p(this, void 0, void 0, function () {
            var a,
              u,
              c,
              d,
              p = this
            return h(this, function (h) {
              switch (h.label) {
                case 0:
                  return this.initializing ? [2] : ((this.initializing = !0), [4, Re(t, n)])
                case 1:
                  return (
                    (a = h.sent()),
                    [
                      4,
                      Se(
                        t,
                        i || a.userId,
                        l(l({}, n), {
                          deviceId:
                            null !== (r = a.deviceId) && void 0 !== r
                              ? r
                              : null == n
                              ? void 0
                              : n.deviceId,
                          sessionId:
                            null !== (o = a.sessionId) && void 0 !== o
                              ? o
                              : null == n
                              ? void 0
                              : n.sessionId,
                          optOut:
                            null !== (s = null == n ? void 0 : n.optOut) && void 0 !== s
                              ? s
                              : a.optOut,
                          lastEventTime: a.lastEventTime,
                        }),
                      ),
                    ]
                  )
                case 2:
                  return (u = h.sent()), [4, e.prototype._init.call(this, u)]
                case 3:
                  return (
                    h.sent(),
                    (c = !this.config.lastEventTime),
                    (!this.config.sessionId ||
                      (this.config.lastEventTime &&
                        Date.now() - this.config.lastEventTime > this.config.sessionTimeout)) &&
                      (this.setSessionId(Date.now()), (c = !0)),
                    (d = de()).eventBridge.setEventReceiver(function (e) {
                      p.track(e.eventType, e.eventProperties)
                    }),
                    d.identityStore.setIdentity({
                      userId: this.config.userId,
                      deviceId: this.config.deviceId,
                    }),
                    [4, this.add(new be())]
                  )
                case 4:
                  return h.sent(), [4, this.add(new pe())]
                case 5:
                  return h.sent(), [4, this.add(new M())]
                case 6:
                  return (
                    h.sent(),
                    (this.initializing = !1),
                    (this.timeline.isReady = !0),
                    this.config.optOut || this.timeline.scheduleApply(0),
                    [4, this.runAttributionStrategy(u.attribution, c)]
                  )
                case 7:
                  return h.sent(), [2]
              }
            })
          })
        }),
        (i.prototype.runAttributionStrategy = function (e, t) {
          return (
            void 0 === t && (t = !1),
            p(this, void 0, void 0, function () {
              var i, n, r
              return h(this, function (o) {
                switch (o.label) {
                  case 0:
                    return (
                      (i = this.track.bind(this)),
                      (n = this.setSessionId.bind(this, Date.now())),
                      [4, ke(this.config)]
                    )
                  case 1:
                    return (
                      (r = o.sent()),
                      [
                        4,
                        new Z(
                          this.config.apiKey,
                          l(l({}, e), { storage: r, track: i, onNewCampaign: n }),
                        ).send(t),
                      ]
                    )
                  case 2:
                    return o.sent(), [2]
                }
              })
            })
          )
        }),
        (i.prototype.getUserId = function () {
          var e
          return null === (e = this.config) || void 0 === e ? void 0 : e.userId
        }),
        (i.prototype.setUserId = function (e) {
          this.config ? (this.config.userId = e) : this.q.push(this.setUserId.bind(this, e))
        }),
        (i.prototype.getDeviceId = function () {
          var e
          return null === (e = this.config) || void 0 === e ? void 0 : e.deviceId
        }),
        (i.prototype.setDeviceId = function (e) {
          this.config ? (this.config.deviceId = e) : this.q.push(this.setDeviceId.bind(this, e))
        }),
        (i.prototype.reset = function () {
          this.setUserId(void 0), this.setDeviceId(V())
        }),
        (i.prototype.getSessionId = function () {
          var e
          return null === (e = this.config) || void 0 === e ? void 0 : e.sessionId
        }),
        (i.prototype.setSessionId = function (e) {
          this.config
            ? ((this.config.sessionId = e), (this.config.lastEventTime = void 0))
            : this.q.push(this.setSessionId.bind(this, e))
        }),
        (i.prototype.setTransport = function (e) {
          this.config
            ? (this.config.transportProvider = xe(e))
            : this.q.push(this.setTransport.bind(this, e))
        }),
        (i.prototype.identify = function (t, i) {
          if (ge(t)) {
            var n = t._q
            ;(t._q = []), (t = ve(new k(), n))
          }
          return e.prototype.identify.call(this, t, i)
        }),
        (i.prototype.groupIdentify = function (t, i, n, r) {
          if (ge(n)) {
            var o = n._q
            ;(n._q = []), (n = ve(new k(), o))
          }
          return e.prototype.groupIdentify.call(this, t, i, n, r)
        }),
        (i.prototype.revenue = function (t, i) {
          if (ge(t)) {
            var n = t._q
            ;(t._q = []), (t = ve(new N(), n))
          }
          return e.prototype.revenue.call(this, t, i)
        }),
        i
      )
    })(R),
    Ce = function () {
      var e = new qe()
      return {
        init: L(e.init.bind(e)),
        add: L(e.add.bind(e)),
        remove: L(e.remove.bind(e)),
        track: L(e.track.bind(e)),
        logEvent: L(e.logEvent.bind(e)),
        identify: L(e.identify.bind(e)),
        groupIdentify: L(e.groupIdentify.bind(e)),
        setGroup: L(e.setGroup.bind(e)),
        revenue: L(e.revenue.bind(e)),
        flush: L(e.flush.bind(e)),
        getUserId: e.getUserId.bind(e),
        setUserId: e.setUserId.bind(e),
        getDeviceId: e.getDeviceId.bind(e),
        setDeviceId: e.setDeviceId.bind(e),
        reset: e.reset.bind(e),
        getSessionId: e.getSessionId.bind(e),
        setSessionId: e.setSessionId.bind(e),
        setOptOut: e.setOptOut.bind(e),
        setTransport: e.setTransport.bind(e),
      }
    },
    Ae = Ce(),
    De = Ae.add,
    je = Ae.flush,
    Me = Ae.getDeviceId,
    Le = Ae.getSessionId,
    Ve = Ae.getUserId,
    Be = Ae.groupIdentify,
    ze = Ae.identify,
    Fe = Ae.init,
    $e = Ae.logEvent,
    Qe = Ae.remove,
    We = Ae.reset,
    Ke = Ae.revenue,
    Ze = Ae.setDeviceId,
    Ge = Ae.setGroup,
    He = Ae.setOptOut,
    Je = Ae.setSessionId,
    Ye = Ae.setTransport,
    Xe = Ae.setUserId,
    et = Ae.track,
    tt = Object.freeze({
      __proto__: null,
      add: De,
      flush: je,
      getDeviceId: Me,
      getSessionId: Le,
      getUserId: Ve,
      groupIdentify: Be,
      identify: ze,
      init: Fe,
      logEvent: $e,
      remove: Qe,
      reset: We,
      revenue: Ke,
      setDeviceId: Ze,
      setGroup: Ge,
      setOptOut: He,
      setSessionId: Je,
      setTransport: Ye,
      setUserId: Xe,
      track: et,
      Types: m,
      createInstance: Ce,
      runQueuedFunctions: fe,
      Revenue: N,
      Identify: k,
    })
  if (
    ((globalThis.amplitude = Object.assign(globalThis.amplitude || {}, tt)),
    globalThis.amplitude.invoked)
  ) {
    var it = globalThis.amplitude._q
    ;(globalThis.amplitude._q = []), fe(tt, it)
    for (var nt = 0; nt < globalThis.amplitude._iq.length; nt++) {
      var rt = Object.assign(globalThis.amplitude._iq[nt], Ce()),
        ot = rt._q
      ;(rt._q = []), fe(rt, ot)
    }
  }
})()

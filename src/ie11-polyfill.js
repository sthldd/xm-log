;(function(self, undefined) {
	var _DOMTokenList = (function() {
		var n = !0,
			t = function(t, e, r, o) {
				Object.defineProperty
					? Object.defineProperty(t, e, { configurable: !1 === n || !!o, get: r })
					: t.__defineGetter__(e, r)
			}
		try {
			t({}, 'support')
		} catch (e) {
			n = !1
		}
		return function(n, e) {
			var r = this,
				o = [],
				i = {},
				a = 0,
				c = 0,
				f = function(n) {
					t(
						r,
						n,
						function() {
							return u(), o[n]
						},
						!1
					)
				},
				l = function() {
					if (a >= c) for (; c < a; ++c) f(c)
				},
				u = function() {
					var t,
						r,
						c = arguments,
						f = /\s+/
					if (c.length)
						for (r = 0; r < c.length; ++r)
							if (f.test(c[r]))
								throw ((t = new SyntaxError('String "' + c[r] + '" contains an invalid character')),
								(t.code = 5),
								(t.name = 'InvalidCharacterError'),
								t)
					for (
						o =
							'object' == typeof n[e]
								? ('' + n[e].baseVal).replace(/^\s+|\s+$/g, '').split(f)
								: ('' + n[e]).replace(/^\s+|\s+$/g, '').split(f),
							'' === o[0] && (o = []),
							i = {},
							r = 0;
						r < o.length;
						++r
					)
						i[o[r]] = !0
					;(a = o.length), l()
				}
			return (
				u(),
				t(r, 'length', function() {
					return u(), a
				}),
				(r.toLocaleString = r.toString = function() {
					return u(), o.join(' ')
				}),
				(r.item = function(n) {
					return u(), o[n]
				}),
				(r.contains = function(n) {
					return u(), !!i[n]
				}),
				(r.add = function() {
					u.apply(r, (t = arguments))
					for (var t, c, f = 0, g = t.length; f < g; ++f) (c = t[f]), i[c] || (o.push(c), (i[c] = !0))
					a !== o.length &&
						((a = o.length >>> 0), 'object' == typeof n[e] ? (n[e].baseVal = o.join(' ')) : (n[e] = o.join(' ')), l())
				}),
				(r.remove = function() {
					u.apply(r, (t = arguments))
					for (var t, c = {}, f = 0, g = []; f < t.length; ++f) (c[t[f]] = !0), delete i[t[f]]
					for (f = 0; f < o.length; ++f) c[o[f]] || g.push(o[f])
					;(o = g),
						(a = g.length >>> 0),
						'object' == typeof n[e] ? (n[e].baseVal = o.join(' ')) : (n[e] = o.join(' ')),
						l()
				}),
				(r.toggle = function(n, t) {
					return (
						u.apply(r, [ n ]),
						undefined !== t ? (t ? (r.add(n), !0) : (r.remove(n), !1)) : i[n] ? (r.remove(n), !1) : (r.add(n), !0)
					)
				}),
				r
			)
		}
	})()
	function ArrayCreate(r) {
		if ((1 / r == -Infinity && (r = 0), r > Math.pow(2, 32) - 1)) throw new RangeError('Invalid array length')
		var n = []
		return (n.length = r), n
	}
	function Call(t, l) {
		var n = arguments.length > 2 ? arguments[2] : []
		if (!1 === IsCallable(t)) throw new TypeError(Object.prototype.toString.call(t) + 'is not a function.')
		return t.apply(l, n)
	}
	function CreateDataProperty(e, r, t) {
		var a = { value: t, writable: !0, enumerable: !0, configurable: !0 }
		try {
			return Object.defineProperty(e, r, a), !0
		} catch (n) {
			return !1
		}
	}
	function CreateDataPropertyOrThrow(t, r, o) {
		var e = CreateDataProperty(t, r, o)
		if (!e)
			throw new TypeError(
				'Cannot assign value `' +
					Object.prototype.toString.call(o) +
					'` to property `' +
					Object.prototype.toString.call(r) +
					'` on object `' +
					Object.prototype.toString.call(t) +
					'`'
			)
		return e
	}
	function CreateMethodProperty(e, r, t) {
		var a = { value: t, writable: !0, enumerable: !1, configurable: !0 }
		Object.defineProperty(e, r, a)
	}
	function Get(n, t) {
		return n[t]
	}
	function HasOwnProperty(r, t) {
		return Object.prototype.hasOwnProperty.call(r, t)
	}
	function HasProperty(n, r) {
		return r in n
	}
	function IsArray(r) {
		return '[object Array]' === Object.prototype.toString.call(r)
	}
	function IsCallable(n) {
		return 'function' == typeof n
	}
	function RequireObjectCoercible(e) {
		if (null === e || e === undefined)
			throw TypeError(Object.prototype.toString.call(e) + ' is not coercible to Object.')
		return e
	}
	function SameValueNonNumber(e, n) {
		return e === n
	}
	function ToBoolean(o) {
		return Boolean(o)
	}
	function ToInteger(n) {
		var i = Number(n)
		return isNaN(i)
			? 0
			: 1 / i === Infinity || 1 / i == -Infinity || i === Infinity || i === -Infinity
				? i
				: (i < 0 ? -1 : 1) * Math.floor(Math.abs(i))
	}
	function ToLength(n) {
		var t = ToInteger(n)
		return t <= 0 ? 0 : Math.min(t, Math.pow(2, 53) - 1)
	}
	function ToObject(e) {
		if (null === e || e === undefined) throw TypeError()
		return Object(e)
	}
	function GetV(t, e) {
		return ToObject(t)[e]
	}
	function GetMethod(e, n) {
		var r = GetV(e, n)
		if (null === r || r === undefined) return undefined
		if (!1 === IsCallable(r)) throw new TypeError('Method not callable: ' + n)
		return r
	}
	function ToUint32(n) {
		var i = Number(n)
		return isNaN(i) || 1 / i === Infinity || 1 / i == -Infinity || i === Infinity || i === -Infinity
			? 0
			: ((i < 0 ? -1 : 1) * Math.floor(Math.abs(i))) >>> 0
	}
	function Type(e) {
		switch (typeof e) {
			case 'undefined':
				return 'undefined'
			case 'boolean':
				return 'boolean'
			case 'number':
				return 'number'
			case 'string':
				return 'string'
			case 'symbol':
				return 'symbol'
			default:
				return null === e
					? 'null'
					: 'Symbol' in self && (e instanceof self.Symbol || e.constructor === self.Symbol) ? 'symbol' : 'object'
		}
	}
	function CreateIterResultObject(e, r) {
		if ('boolean' !== Type(r)) throw new Error()
		var t = {}
		return CreateDataProperty(t, 'value', e), CreateDataProperty(t, 'done', r), t
	}
	function GetPrototypeFromConstructor(t, o) {
		var r = Get(t, 'prototype')
		return 'object' !== Type(r) && (r = o), r
	}
	function OrdinaryCreateFromConstructor(r, e) {
		var t = arguments[2] || {},
			o = GetPrototypeFromConstructor(r, e),
			a = Object.create(o)
		for (var n in t)
			Object.prototype.hasOwnProperty.call(t, n) &&
				Object.defineProperty(a, n, { configurable: !0, enumerable: !1, writable: !0, value: t[n] })
		return a
	}
	function IsConstructor(t) {
		return 'object' === Type(t) && ('function' == typeof t && !!t.prototype)
	}
	function Construct(r) {
		var t = arguments.length > 2 ? arguments[2] : r,
			o = arguments.length > 1 ? arguments[1] : []
		if (!IsConstructor(r)) throw new TypeError('F must be a constructor.')
		if (!IsConstructor(t)) throw new TypeError('newTarget must be a constructor.')
		if (t === r) return new (Function.prototype.bind.apply(r, [ null ].concat(o)))()
		var n = OrdinaryCreateFromConstructor(t, Object.prototype)
		return Call(r, n, o)
	}
	function IsRegExp(e) {
		if ('object' !== Type(e)) return !1
		var n = 'Symbol' in self && 'match' in self.Symbol ? Get(e, self.Symbol.match) : undefined
		if (n !== undefined) return ToBoolean(n)
		try {
			var t = e.lastIndex
			return (e.lastIndex = 0), RegExp.prototype.exec.call(e), !0
		} catch (l) {
		} finally {
			e.lastIndex = t
		}
		return !1
	}
	function IteratorClose(r, t) {
		if ('object' !== Type(r['[[Iterator]]']))
			throw new Error(Object.prototype.toString.call(r['[[Iterator]]']) + 'is not an Object.')
		var e = r['[[Iterator]]'],
			o = GetMethod(e, 'return')
		if (o === undefined) return t
		try {
			var n = Call(o, e)
		} catch (c) {
			var a = c
		}
		if (t) return t
		if (a) throw a
		if ('object' !== Type(n)) throw new TypeError("Iterator's return method returned a non-object.")
		return t
	}
	function IteratorComplete(t) {
		if ('object' !== Type(t)) throw new Error(Object.prototype.toString.call(t) + 'is not an Object.')
		return ToBoolean(Get(t, 'done'))
	}
	function IteratorNext(t) {
		if (arguments.length < 2) var e = Call(t['[[NextMethod]]'], t['[[Iterator]]'])
		else e = Call(t['[[NextMethod]]'], t['[[Iterator]]'], [ arguments[1] ])
		if ('object' !== Type(e)) throw new TypeError('bad iterator')
		return e
	}
	function IteratorStep(t) {
		var r = IteratorNext(t)
		return !0 !== IteratorComplete(r) && r
	}
	function IteratorValue(t) {
		if ('object' !== Type(t)) throw new Error(Object.prototype.toString.call(t) + 'is not an Object.')
		return Get(t, 'value')
	}
	function OrdinaryToPrimitive(r, t) {
		if ('string' === t) var e = [ 'toString', 'valueOf' ]
		else e = [ 'valueOf', 'toString' ]
		for (var i = 0; i < e.length; ++i) {
			var n = e[i],
				a = Get(r, n)
			if (IsCallable(a)) {
				var o = Call(a, r)
				if ('object' !== Type(o)) return o
			}
		}
		throw new TypeError('Cannot convert to primitive.')
	}
	function SameValue(e, a) {
		return (
			Type(e) === Type(a) &&
			('number' === Type(e)
				? !(!isNaN(e) || !isNaN(a)) || ((0 !== e || 0 !== a || 1 / e == 1 / a) && e === a)
				: SameValueNonNumber(e, a))
		)
	}
	function SameValueZero(n, e) {
		return (
			Type(n) === Type(e) &&
			('number' === Type(n)
				? !(!isNaN(n) || !isNaN(e)) ||
					((1 / n === Infinity && 1 / e == -Infinity) || ((1 / n == -Infinity && 1 / e === Infinity) || n === e))
				: SameValueNonNumber(n, e))
		)
	}
	function ToPrimitive(e) {
		var t = arguments.length > 1 ? arguments[1] : undefined
		if ('object' === Type(e)) {
			if (arguments.length < 2) var i = 'default'
			else t === String ? (i = 'string') : t === Number && (i = 'number')
			var r =
				'function' == typeof self.Symbol && 'symbol' == typeof self.Symbol.toPrimitive
					? GetMethod(e, self.Symbol.toPrimitive)
					: undefined
			if (r !== undefined) {
				var n = Call(r, e, [ i ])
				if ('object' !== Type(n)) return n
				throw new TypeError('Cannot convert exotic object to primitive.')
			}
			return 'default' === i && (i = 'number'), OrdinaryToPrimitive(e, i)
		}
		return e
	}
	function ToString(t) {
		switch (Type(t)) {
			case 'symbol':
				throw new TypeError('Cannot convert a Symbol value to a string')
			case 'object':
				return ToString(ToPrimitive(t, String))
			default:
				return String(t)
		}
	}
	function ToPropertyKey(r) {
		var i = ToPrimitive(r, String)
		return 'symbol' === Type(i) ? i : ToString(i)
	}
	function TrimString(e, u) {
		var r = RequireObjectCoercible(e),
			t = ToString(r),
			n = /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/
				.source
		if ('start' === u) var p = String.prototype.replace.call(t, new RegExp('^' + n, 'g'), '')
		else
			p =
				'end' === u
					? String.prototype.replace.call(t, new RegExp(n + '$', 'g'), '')
					: String.prototype.replace.call(t, new RegExp('^' + n + '|' + n + '$', 'g'), '')
		return p
	}
	function UTF16Decode(e, n) {
		return 1024 * (e - 55296) + (n - 56320) + 65536
	}
	var _mutation = (function() {
		function e(e) {
			return 'function' == typeof Node
				? e instanceof Node
				: e && 'object' == typeof e && e.nodeName && e.nodeType >= 1 && e.nodeType <= 12
		}
		return function n(t) {
			if (1 === t.length) return e(t[0]) ? t[0] : document.createTextNode(t[0] + '')
			for (var o = document.createDocumentFragment(), r = 0; r < t.length; r++)
				o.appendChild(e(t[r]) ? t[r] : document.createTextNode(t[r] + ''))
			return o
		}
	})()
	!(function(t) {
		'use strict'
		function e(t) {
			switch (typeof t) {
				case 'undefined':
					return 'undefined'
				case 'boolean':
					return 'boolean'
				case 'number':
					return 'number'
				case 'string':
					return 'string'
				default:
					return null === t ? 'null' : 'object'
			}
		}
		function r(t) {
			return Object.prototype.toString.call(t).replace(/^\[object *|\]$/g, '')
		}
		function n(t) {
			return 'function' == typeof t
		}
		function o(t) {
			if (null === t || t === B) throw TypeError()
			return Object(t)
		}
		function i(t) {
			return t >> 0
		}
		function f(t) {
			return t >>> 0
		}
		function u(e) {
			if (!('TYPED_ARRAY_POLYFILL_NO_ARRAY_ACCESSORS' in t)) {
				if (e.length > N) throw RangeError('Array too large for polyfill')
				var r
				for (r = 0; r < e.length; r += 1)
					!(function n(t) {
						Object.defineProperty(e, t, {
							get: function() {
								return e._getter(t)
							},
							set: function(r) {
								e._setter(t, r)
							},
							enumerable: !0,
							configurable: !1
						})
					})(r)
			}
		}
		function a(t, e) {
			var r = 32 - e
			return (t << r) >> r
		}
		function h(t, e) {
			var r = 32 - e
			return (t << r) >>> r
		}
		function y(t) {
			return [ 255 & t ]
		}
		function s(t) {
			return a(t[0], 8)
		}
		function l(t) {
			return [ 255 & t ]
		}
		function p(t) {
			return h(t[0], 8)
		}
		function c(t) {
			return (t = x(Number(t))), [ t < 0 ? 0 : t > 255 ? 255 : 255 & t ]
		}
		function b(t) {
			return [ 255 & t, (t >> 8) & 255 ]
		}
		function g(t) {
			return a((t[1] << 8) | t[0], 16)
		}
		function E(t) {
			return [ 255 & t, (t >> 8) & 255 ]
		}
		function v(t) {
			return h((t[1] << 8) | t[0], 16)
		}
		function _(t) {
			return [ 255 & t, (t >> 8) & 255, (t >> 16) & 255, (t >> 24) & 255 ]
		}
		function O(t) {
			return a((t[3] << 24) | (t[2] << 16) | (t[1] << 8) | t[0], 32)
		}
		function d(t) {
			return [ 255 & t, (t >> 8) & 255, (t >> 16) & 255, (t >> 24) & 255 ]
		}
		function j(t) {
			return h((t[3] << 24) | (t[2] << 16) | (t[1] << 8) | t[0], 32)
		}
		function P(t, e, r) {
			function n(t) {
				var e = m(t),
					r = t - e
				return r < 0.5 ? e : r > 0.5 ? e + 1 : e % 2 ? e + 1 : e
			}
			var o,
				i,
				f,
				u = (1 << (e - 1)) - 1
			if (t !== t) (i = (1 << e) - 1), (f = F(2, r - 1)), (o = 0)
			else if (t === Infinity || t === -Infinity) (i = (1 << e) - 1), (f = 0), (o = t < 0 ? 1 : 0)
			else if (0 === t) (i = 0), (f = 0), (o = 1 / t == -Infinity ? 1 : 0)
			else if (((o = t < 0), (t = M(t)) >= F(2, 1 - u))) {
				i = Y(m(I(t) / S), 1023)
				var a = t / F(2, i)
				a < 1 && ((i -= 1), (a *= 2)), a >= 2 && ((i += 1), (a /= 2))
				var h = F(2, r)
				;(f = n(a * h) - h), (i += u), f / h >= 1 && ((i += 1), (f = 0)), i > 2 * u && ((i = (1 << e) - 1), (f = 0))
			} else (i = 0), (f = n(t / F(2, 1 - u - r)))
			var y,
				s = []
			for (y = r; y; y -= 1) s.push(f % 2 ? 1 : 0), (f = m(f / 2))
			for (y = e; y; y -= 1) s.push(i % 2 ? 1 : 0), (i = m(i / 2))
			s.push(o ? 1 : 0), s.reverse()
			for (var l = s.join(''), p = []; l.length; ) p.unshift(parseInt(l.substring(0, 8), 2)), (l = l.substring(8))
			return p
		}
		function T(t, e, r) {
			var n,
				o,
				i,
				f,
				u,
				a,
				h,
				y,
				s = []
			for (n = 0; n < t.length; ++n) for (i = t[n], o = 8; o; o -= 1) s.push(i % 2 ? 1 : 0), (i >>= 1)
			return (
				s.reverse(),
				(f = s.join('')),
				(u = (1 << (e - 1)) - 1),
				(a = parseInt(f.substring(0, 1), 2) ? -1 : 1),
				(h = parseInt(f.substring(1, 1 + e), 2)),
				(y = parseInt(f.substring(1 + e), 2)),
				h === (1 << e) - 1
					? 0 !== y ? NaN : a * Infinity
					: h > 0 ? a * F(2, h - u) * (1 + y / F(2, r)) : 0 !== y ? a * F(2, -(u - 1)) * (y / F(2, r)) : a < 0 ? -0 : 0
			)
		}
		function w(t) {
			return T(t, 11, 52)
		}
		function A(t) {
			return P(t, 11, 52)
		}
		function L(t) {
			return T(t, 8, 23)
		}
		function R(t) {
			return P(t, 8, 23)
		}
		var B = void 0,
			N = 1e5,
			S = Math.LN2,
			M = Math.abs,
			m = Math.floor,
			I = Math.log,
			U = Math.max,
			Y = Math.min,
			F = Math.pow,
			x = Math.round
		!(function() {
			var t = Object.defineProperty,
				e = !(function() {
					try {
						return Object.defineProperty({}, 'x', {})
					} catch (t) {
						return !1
					}
				})()
			;(t && !e) ||
				(Object.defineProperty = function(e, r, n) {
					if (t)
						try {
							return t(e, r, n)
						} catch (o) {}
					if (e !== Object(e)) throw TypeError('Object.defineProperty called on non-object')
					return (
						Object.prototype.__defineGetter__ && 'get' in n && Object.prototype.__defineGetter__.call(e, r, n.get),
						Object.prototype.__defineSetter__ && 'set' in n && Object.prototype.__defineSetter__.call(e, r, n.set),
						'value' in n && (e[r] = n.value),
						e
					)
				})
		})(),
			(function() {
				function a(t) {
					if ((t = i(t)) < 0) throw RangeError('ArrayBuffer size is not a small enough positive integer.')
					Object.defineProperty(this, 'byteLength', { value: t }),
						Object.defineProperty(this, '_bytes', { value: Array(t) })
					for (var e = 0; e < t; e += 1) this._bytes[e] = 0
				}
				function h() {
					if (!arguments.length || 'object' != typeof arguments[0])
						return function(t) {
							if ((t = i(t)) < 0) throw RangeError('length is not a small enough positive integer.')
							Object.defineProperty(this, 'length', { value: t }),
								Object.defineProperty(this, 'byteLength', { value: t * this.BYTES_PER_ELEMENT }),
								Object.defineProperty(this, 'buffer', { value: new a(this.byteLength) }),
								Object.defineProperty(this, 'byteOffset', { value: 0 })
						}.apply(this, arguments)
					if (arguments.length >= 1 && 'object' === e(arguments[0]) && arguments[0] instanceof h)
						return function(t) {
							if (this.constructor !== t.constructor) throw TypeError()
							var e = t.length * this.BYTES_PER_ELEMENT
							Object.defineProperty(this, 'buffer', { value: new a(e) }),
								Object.defineProperty(this, 'byteLength', { value: e }),
								Object.defineProperty(this, 'byteOffset', { value: 0 }),
								Object.defineProperty(this, 'length', { value: t.length })
							for (var r = 0; r < this.length; r += 1) this._setter(r, t._getter(r))
						}.apply(this, arguments)
					if (
						arguments.length >= 1 &&
						'object' === e(arguments[0]) &&
						!(arguments[0] instanceof h) &&
						!(arguments[0] instanceof a || 'ArrayBuffer' === r(arguments[0]))
					)
						return function(t) {
							var e = t.length * this.BYTES_PER_ELEMENT
							Object.defineProperty(this, 'buffer', { value: new a(e) }),
								Object.defineProperty(this, 'byteLength', { value: e }),
								Object.defineProperty(this, 'byteOffset', { value: 0 }),
								Object.defineProperty(this, 'length', { value: t.length })
							for (var r = 0; r < this.length; r += 1) {
								var n = t[r]
								this._setter(r, Number(n))
							}
						}.apply(this, arguments)
					if (
						arguments.length >= 1 &&
						'object' === e(arguments[0]) &&
						(arguments[0] instanceof a || 'ArrayBuffer' === r(arguments[0]))
					)
						return function(t, e, r) {
							if ((e = f(e)) > t.byteLength) throw RangeError('byteOffset out of range')
							if (e % this.BYTES_PER_ELEMENT)
								throw RangeError('buffer length minus the byteOffset is not a multiple of the element size.')
							if (r === B) {
								var n = t.byteLength - e
								if (n % this.BYTES_PER_ELEMENT)
									throw RangeError('length of buffer minus byteOffset not a multiple of the element size')
								r = n / this.BYTES_PER_ELEMENT
							} else (r = f(r)), (n = r * this.BYTES_PER_ELEMENT)
							if (e + n > t.byteLength)
								throw RangeError('byteOffset and length reference an area beyond the end of the buffer')
							Object.defineProperty(this, 'buffer', { value: t }),
								Object.defineProperty(this, 'byteLength', { value: n }),
								Object.defineProperty(this, 'byteOffset', { value: e }),
								Object.defineProperty(this, 'length', { value: r })
						}.apply(this, arguments)
					throw TypeError()
				}
				function P(t, e, r) {
					var n = function() {
						Object.defineProperty(this, 'constructor', { value: n }), h.apply(this, arguments), u(this)
					}
					'__proto__' in n ? (n.__proto__ = h) : ((n.from = h.from), (n.of = h.of)), (n.BYTES_PER_ELEMENT = t)
					var o = function() {}
					return (
						(o.prototype = T),
						(n.prototype = new o()),
						Object.defineProperty(n.prototype, 'BYTES_PER_ELEMENT', { value: t }),
						Object.defineProperty(n.prototype, '_pack', { value: e }),
						Object.defineProperty(n.prototype, '_unpack', { value: r }),
						n
					)
				}
				;(t.ArrayBuffer = t.ArrayBuffer || a),
					Object.defineProperty(h, 'from', {
						value: function(t) {
							return new this(t)
						}
					}),
					Object.defineProperty(h, 'of', {
						value: function() {
							return new this(arguments)
						}
					})
				var T = {}
				;(h.prototype = T),
					Object.defineProperty(h.prototype, '_getter', {
						value: function(t) {
							if (arguments.length < 1) throw SyntaxError('Not enough arguments')
							if ((t = f(t)) >= this.length) return B
							var e,
								r,
								n = []
							for (e = 0, r = this.byteOffset + t * this.BYTES_PER_ELEMENT; e < this.BYTES_PER_ELEMENT; e += 1, r += 1)
								n.push(this.buffer._bytes[r])
							return this._unpack(n)
						}
					}),
					Object.defineProperty(h.prototype, 'get', { value: h.prototype._getter }),
					Object.defineProperty(h.prototype, '_setter', {
						value: function(t, e) {
							if (arguments.length < 2) throw SyntaxError('Not enough arguments')
							if (!((t = f(t)) >= this.length)) {
								var r,
									n,
									o = this._pack(e)
								for (
									r = 0, n = this.byteOffset + t * this.BYTES_PER_ELEMENT;
									r < this.BYTES_PER_ELEMENT;
									r += 1, n += 1
								)
									this.buffer._bytes[n] = o[r]
							}
						}
					}),
					Object.defineProperty(h.prototype, 'constructor', { value: h }),
					Object.defineProperty(h.prototype, 'copyWithin', {
						value: function(t, e) {
							var r = arguments[2],
								n = o(this),
								u = n.length,
								a = f(u)
							a = U(a, 0)
							var h,
								y = i(t)
							h = y < 0 ? U(a + y, 0) : Y(y, a)
							var s,
								l = i(e)
							s = l < 0 ? U(a + l, 0) : Y(l, a)
							var p
							p = r === B ? a : i(r)
							var c
							c = p < 0 ? U(a + p, 0) : Y(p, a)
							var b,
								g = Y(c - s, a - h)
							for (s < h && h < s + g ? ((b = -1), (s = s + g - 1), (h = h + g - 1)) : (b = 1); g > 0; )
								n._setter(h, n._getter(s)), (s += b), (h += b), (g -= 1)
							return n
						}
					}),
					Object.defineProperty(h.prototype, 'every', {
						value: function(t) {
							if (this === B || null === this) throw TypeError()
							var e = Object(this),
								r = f(e.length)
							if (!n(t)) throw TypeError()
							for (var o = arguments[1], i = 0; i < r; i++) if (!t.call(o, e._getter(i), i, e)) return !1
							return !0
						}
					}),
					Object.defineProperty(h.prototype, 'fill', {
						value: function(t) {
							var e = arguments[1],
								r = arguments[2],
								n = o(this),
								u = n.length,
								a = f(u)
							a = U(a, 0)
							var h,
								y = i(e)
							h = y < 0 ? U(a + y, 0) : Y(y, a)
							var s
							s = r === B ? a : i(r)
							var l
							for (l = s < 0 ? U(a + s, 0) : Y(s, a); h < l; ) n._setter(h, t), (h += 1)
							return n
						}
					}),
					Object.defineProperty(h.prototype, 'filter', {
						value: function(t) {
							if (this === B || null === this) throw TypeError()
							var e = Object(this),
								r = f(e.length)
							if (!n(t)) throw TypeError()
							for (var o = [], i = arguments[1], u = 0; u < r; u++) {
								var a = e._getter(u)
								t.call(i, a, u, e) && o.push(a)
							}
							return new this.constructor(o)
						}
					}),
					Object.defineProperty(h.prototype, 'find', {
						value: function(t) {
							var e = o(this),
								r = e.length,
								i = f(r)
							if (!n(t)) throw TypeError()
							for (var u = arguments.length > 1 ? arguments[1] : B, a = 0; a < i; ) {
								var h = e._getter(a),
									y = t.call(u, h, a, e)
								if (Boolean(y)) return h
								++a
							}
							return B
						}
					}),
					Object.defineProperty(h.prototype, 'findIndex', {
						value: function(t) {
							var e = o(this),
								r = e.length,
								i = f(r)
							if (!n(t)) throw TypeError()
							for (var u = arguments.length > 1 ? arguments[1] : B, a = 0; a < i; ) {
								var h = e._getter(a),
									y = t.call(u, h, a, e)
								if (Boolean(y)) return a
								++a
							}
							return -1
						}
					}),
					Object.defineProperty(h.prototype, 'forEach', {
						value: function(t) {
							if (this === B || null === this) throw TypeError()
							var e = Object(this),
								r = f(e.length)
							if (!n(t)) throw TypeError()
							for (var o = arguments[1], i = 0; i < r; i++) t.call(o, e._getter(i), i, e)
						}
					}),
					Object.defineProperty(h.prototype, 'indexOf', {
						value: function(t) {
							if (this === B || null === this) throw TypeError()
							var e = Object(this),
								r = f(e.length)
							if (0 === r) return -1
							var n = 0
							if (
								(arguments.length > 0 &&
									((n = Number(arguments[1])),
									n !== n ? (n = 0) : 0 !== n && n !== 1 / 0 && n !== -1 / 0 && (n = (n > 0 || -1) * m(M(n)))),
								n >= r)
							)
								return -1
							for (var o = n >= 0 ? n : U(r - M(n), 0); o < r; o++) if (e._getter(o) === t) return o
							return -1
						}
					}),
					Object.defineProperty(h.prototype, 'join', {
						value: function(t) {
							if (this === B || null === this) throw TypeError()
							for (var e = Object(this), r = f(e.length), n = Array(r), o = 0; o < r; ++o) n[o] = e._getter(o)
							return n.join(t === B ? ',' : t)
						}
					}),
					Object.defineProperty(h.prototype, 'lastIndexOf', {
						value: function(t) {
							if (this === B || null === this) throw TypeError()
							var e = Object(this),
								r = f(e.length)
							if (0 === r) return -1
							var n = r
							arguments.length > 1 &&
								((n = Number(arguments[1])),
								n !== n ? (n = 0) : 0 !== n && n !== 1 / 0 && n !== -1 / 0 && (n = (n > 0 || -1) * m(M(n))))
							for (var o = n >= 0 ? Y(n, r - 1) : r - M(n); o >= 0; o--) if (e._getter(o) === t) return o
							return -1
						}
					}),
					Object.defineProperty(h.prototype, 'map', {
						value: function(t) {
							if (this === B || null === this) throw TypeError()
							var e = Object(this),
								r = f(e.length)
							if (!n(t)) throw TypeError()
							var o = []
							o.length = r
							for (var i = arguments[1], u = 0; u < r; u++) o[u] = t.call(i, e._getter(u), u, e)
							return new this.constructor(o)
						}
					}),
					Object.defineProperty(h.prototype, 'reduce', {
						value: function(t) {
							if (this === B || null === this) throw TypeError()
							var e = Object(this),
								r = f(e.length)
							if (!n(t)) throw TypeError()
							if (0 === r && 1 === arguments.length) throw TypeError()
							var o,
								i = 0
							for (o = arguments.length >= 2 ? arguments[1] : e._getter(i++); i < r; )
								(o = t.call(B, o, e._getter(i), i, e)), i++
							return o
						}
					}),
					Object.defineProperty(h.prototype, 'reduceRight', {
						value: function(t) {
							if (this === B || null === this) throw TypeError()
							var e = Object(this),
								r = f(e.length)
							if (!n(t)) throw TypeError()
							if (0 === r && 1 === arguments.length) throw TypeError()
							var o,
								i = r - 1
							for (o = arguments.length >= 2 ? arguments[1] : e._getter(i--); i >= 0; )
								(o = t.call(B, o, e._getter(i), i, e)), i--
							return o
						}
					}),
					Object.defineProperty(h.prototype, 'reverse', {
						value: function() {
							if (this === B || null === this) throw TypeError()
							for (var t = Object(this), e = f(t.length), r = m(e / 2), n = 0, o = e - 1; n < r; ++n, --o) {
								var i = t._getter(n)
								t._setter(n, t._getter(o)), t._setter(o, i)
							}
							return t
						}
					}),
					Object.defineProperty(h.prototype, 'set', {
						value: function(t, e) {
							if (arguments.length < 1) throw SyntaxError('Not enough arguments')
							var r, n, o, i, u, a, h, y, s, l
							if ('object' == typeof arguments[0] && arguments[0].constructor === this.constructor) {
								if (((r = arguments[0]), (o = f(arguments[1])) + r.length > this.length))
									throw RangeError('Offset plus length of array is out of range')
								if (
									((y = this.byteOffset + o * this.BYTES_PER_ELEMENT),
									(s = r.length * this.BYTES_PER_ELEMENT),
									r.buffer === this.buffer)
								) {
									for (l = [], u = 0, a = r.byteOffset; u < s; u += 1, a += 1) l[u] = r.buffer._bytes[a]
									for (u = 0, h = y; u < s; u += 1, h += 1) this.buffer._bytes[h] = l[u]
								} else
									for (u = 0, a = r.byteOffset, h = y; u < s; u += 1, a += 1, h += 1)
										this.buffer._bytes[h] = r.buffer._bytes[a]
							} else {
								if ('object' != typeof arguments[0] || 'undefined' == typeof arguments[0].length)
									throw TypeError('Unexpected argument type(s)')
								if (((n = arguments[0]), (i = f(n.length)), (o = f(arguments[1])) + i > this.length))
									throw RangeError('Offset plus length of array is out of range')
								for (u = 0; u < i; u += 1) (a = n[u]), this._setter(o + u, Number(a))
							}
						}
					}),
					Object.defineProperty(h.prototype, 'slice', {
						value: function(t, e) {
							for (
								var r = o(this),
									n = r.length,
									u = f(n),
									a = i(t),
									h = a < 0 ? U(u + a, 0) : Y(a, u),
									y = e === B ? u : i(e),
									s = y < 0 ? U(u + y, 0) : Y(y, u),
									l = s - h,
									p = r.constructor,
									c = new p(l),
									b = 0;
								h < s;

							) {
								var g = r._getter(h)
								c._setter(b, g), ++h, ++b
							}
							return c
						}
					}),
					Object.defineProperty(h.prototype, 'some', {
						value: function(t) {
							if (this === B || null === this) throw TypeError()
							var e = Object(this),
								r = f(e.length)
							if (!n(t)) throw TypeError()
							for (var o = arguments[1], i = 0; i < r; i++) if (t.call(o, e._getter(i), i, e)) return !0
							return !1
						}
					}),
					Object.defineProperty(h.prototype, 'sort', {
						value: function(t) {
							function e(e, r) {
								return e !== e && r !== r
									? 0
									: e !== e ? 1 : r !== r ? -1 : t !== B ? t(e, r) : e < r ? -1 : e > r ? 1 : 0
							}
							if (this === B || null === this) throw TypeError()
							for (var r = Object(this), n = f(r.length), o = Array(n), i = 0; i < n; ++i) o[i] = r._getter(i)
							for (o.sort(e), i = 0; i < n; ++i) r._setter(i, o[i])
							return r
						}
					}),
					Object.defineProperty(h.prototype, 'subarray', {
						value: function(t, e) {
							function r(t, e, r) {
								return t < e ? e : t > r ? r : t
							}
							;(t = i(t)),
								(e = i(e)),
								arguments.length < 1 && (t = 0),
								arguments.length < 2 && (e = this.length),
								t < 0 && (t = this.length + t),
								e < 0 && (e = this.length + e),
								(t = r(t, 0, this.length)),
								(e = r(e, 0, this.length))
							var n = e - t
							return (
								n < 0 && (n = 0), new this.constructor(this.buffer, this.byteOffset + t * this.BYTES_PER_ELEMENT, n)
							)
						}
					})
				var N = P(1, y, s),
					S = P(1, l, p),
					I = P(1, c, p),
					F = P(2, b, g),
					x = P(2, E, v),
					k = P(4, _, O),
					C = P(4, d, j),
					z = P(4, R, L),
					D = P(8, A, w)
				;(t.Int8Array = t.Int8Array || N),
					(t.Uint8Array = t.Uint8Array || S),
					(t.Uint8ClampedArray = t.Uint8ClampedArray || I),
					(t.Int16Array = t.Int16Array || F),
					(t.Uint16Array = t.Uint16Array || x),
					(t.Int32Array = t.Int32Array || k),
					(t.Uint32Array = t.Uint32Array || C),
					(t.Float32Array = t.Float32Array || z),
					(t.Float64Array = t.Float64Array || D)
			})(),
			(function() {
				function e(t, e) {
					return n(t.get) ? t.get(e) : t[e]
				}
				function o(t, e, n) {
					if (!(t instanceof ArrayBuffer || 'ArrayBuffer' === r(t))) throw TypeError()
					if ((e = f(e)) > t.byteLength) throw RangeError('byteOffset out of range')
					if (((n = n === B ? t.byteLength - e : f(n)), e + n > t.byteLength))
						throw RangeError('byteOffset and length reference an area beyond the end of the buffer')
					Object.defineProperty(this, 'buffer', { value: t }),
						Object.defineProperty(this, 'byteLength', { value: n }),
						Object.defineProperty(this, 'byteOffset', { value: e })
				}
				function i(t) {
					return function r(n, o) {
						if ((n = f(n)) + t.BYTES_PER_ELEMENT > this.byteLength) throw RangeError('Array index out of range')
						n += this.byteOffset
						for (
							var i = new Uint8Array(this.buffer, n, t.BYTES_PER_ELEMENT), u = [], h = 0;
							h < t.BYTES_PER_ELEMENT;
							h += 1
						)
							u.push(e(i, h))
						return Boolean(o) === Boolean(a) && u.reverse(), e(new t(new Uint8Array(u).buffer), 0)
					}
				}
				function u(t) {
					return function r(n, o, i) {
						if ((n = f(n)) + t.BYTES_PER_ELEMENT > this.byteLength) throw RangeError('Array index out of range')
						var u,
							h,
							y = new t([ o ]),
							s = new Uint8Array(y.buffer),
							l = []
						for (u = 0; u < t.BYTES_PER_ELEMENT; u += 1) l.push(e(s, u))
						Boolean(i) === Boolean(a) && l.reverse(),
							(h = new Uint8Array(this.buffer, n, t.BYTES_PER_ELEMENT)),
							h.set(l)
					}
				}
				var a = (function() {
					var t = new Uint16Array([ 4660 ])
					return 18 === e(new Uint8Array(t.buffer), 0)
				})()
				Object.defineProperty(o.prototype, 'getUint8', { value: i(Uint8Array) }),
					Object.defineProperty(o.prototype, 'getInt8', { value: i(Int8Array) }),
					Object.defineProperty(o.prototype, 'getUint16', { value: i(Uint16Array) }),
					Object.defineProperty(o.prototype, 'getInt16', { value: i(Int16Array) }),
					Object.defineProperty(o.prototype, 'getUint32', { value: i(Uint32Array) }),
					Object.defineProperty(o.prototype, 'getInt32', { value: i(Int32Array) }),
					Object.defineProperty(o.prototype, 'getFloat32', { value: i(Float32Array) }),
					Object.defineProperty(o.prototype, 'getFloat64', { value: i(Float64Array) }),
					Object.defineProperty(o.prototype, 'setUint8', { value: u(Uint8Array) }),
					Object.defineProperty(o.prototype, 'setInt8', { value: u(Int8Array) }),
					Object.defineProperty(o.prototype, 'setUint16', { value: u(Uint16Array) }),
					Object.defineProperty(o.prototype, 'setInt16', { value: u(Int16Array) }),
					Object.defineProperty(o.prototype, 'setUint32', { value: u(Uint32Array) }),
					Object.defineProperty(o.prototype, 'setInt32', { value: u(Int32Array) }),
					Object.defineProperty(o.prototype, 'setFloat32', { value: u(Float32Array) }),
					Object.defineProperty(o.prototype, 'setFloat64', { value: u(Float64Array) }),
					(t.DataView = t.DataView || o)
			})()
	})(self)
	CreateMethodProperty(Array, 'of', function r() {
		var r = arguments.length,
			t = arguments,
			e = this
		if (IsConstructor(e)) var a = Construct(e, [ r ])
		else a = ArrayCreate(r)
		for (var o = 0; o < r; ) {
			var n = t[o],
				h = ToString(o)
			CreateDataPropertyOrThrow(a, h, n), (o += 1)
		}
		return (a.length = r), a
	})
	CreateMethodProperty(Array.prototype, 'copyWithin', function t(r, e) {
		'use strict'
		var a = arguments[2]
		if (null === this || this === undefined) throw new TypeError('Cannot call method on ' + this)
		var n = Object(this),
			i = ToInteger(n.length)
		i <= 0 && (i = 0),
			(i = i === Infinity ? Math.pow(2, 53) - 1 : Math.min(i, Math.pow(2, 53) - 1)),
			(i = Math.max(i, 0))
		var h,
			o = ToInteger(r)
		h = o < 0 ? Math.max(i + o, 0) : Math.min(o, i)
		var M,
			m = ToInteger(e)
		M = m < 0 ? Math.max(i + m, 0) : Math.min(m, i)
		var v
		v = a === undefined ? i : ToInteger(a)
		var p
		p = v < 0 ? Math.max(i + v, 0) : Math.min(v, i)
		var s,
			d = Math.min(p - M, i - h)
		for (M < h && h < M + d ? ((s = -1), (M = M + d - 1), (h = h + d - 1)) : (s = 1); d > 0; ) {
			var f = String(M),
				g = String(h)
			if (HasProperty(n, f)) {
				var l = n[f]
				n[g] = l
			} else delete n[g]
			;(M += s), (h += s), (d -= 1)
		}
		return n
	})
	CreateMethodProperty(Array.prototype, 'fill', function t(e) {
		for (
			var r = arguments[1],
				n = arguments[2],
				o = ToObject(this),
				a = ToLength(Get(o, 'length')),
				h = ToInteger(r),
				i = h < 0 ? Math.max(a + h, 0) : Math.min(h, a),
				g = n === undefined ? a : ToInteger(n),
				M = g < 0 ? Math.max(a + g, 0) : Math.min(g, a);
			i < M;

		) {
			;(o[ToString(i)] = e), (i += 1)
		}
		return o
	})
	CreateMethodProperty(Array.prototype, 'find', function e(r) {
		var t = ToObject(this),
			n = ToLength(Get(t, 'length'))
		if (!1 === IsCallable(r)) throw new TypeError(r + ' is not a function')
		for (var o = arguments.length > 1 ? arguments[1] : undefined, a = 0; a < n; ) {
			var i = ToString(a),
				f = Get(t, i)
			if (ToBoolean(Call(r, o, [ f, a, t ]))) return f
			a += 1
		}
		return undefined
	})
	CreateMethodProperty(Array.prototype, 'findIndex', function e(r) {
		var t = ToObject(this),
			n = ToLength(Get(t, 'length'))
		if (!1 === IsCallable(r)) throw new TypeError(r + ' is not a function')
		for (var o = arguments.length > 1 ? arguments[1] : undefined, a = 0; a < n; ) {
			var i = ToString(a),
				l = Get(t, i)
			if (ToBoolean(Call(r, o, [ l, a, t ]))) return a
			a += 1
		}
		return -1
	})
	CreateMethodProperty(Array.prototype, 'includes', function e(r) {
		'use strict'
		var t = ToObject(this),
			o = ToLength(Get(t, 'length'))
		if (0 === o) return !1
		var n = ToInteger(arguments[1])
		if (n >= 0) var a = n
		else (a = o + n) < 0 && (a = 0)
		for (; a < o; ) {
			var i = Get(t, ToString(a))
			if (SameValueZero(r, i)) return !0
			a += 1
		}
		return !1
	})
	;('use strict')
	var origSort = Array.prototype.sort
	CreateMethodProperty(Array.prototype, 'sort', function r(t) {
		if (t !== undefined && !1 === IsCallable(t))
			throw new TypeError('The comparison function must be either a function or undefined')
		if (t === undefined) origSort.call(this)
		else {
			var e = Array.prototype.map.call(this, function(r, t) {
				return { item: r, index: t }
			})
			origSort.call(e, function(r, e) {
				var i = t.call(undefined, r.item, e.item)
				return 0 === i ? r.index - e.index : i
			})
			for (var i in e) e[i].item !== this[i] && (this[i] = e[i].item)
		}
		return this
	})
	DocumentFragment.prototype.append = function t() {
		this.appendChild(_mutation(arguments))
	}
	DocumentFragment.prototype.prepend = function t() {
		this.insertBefore(_mutation(arguments), this.firstChild)
	}
	!(function(t) {
		;('DOMTokenList' in t &&
			t.DOMTokenList &&
			(!document.createElementNS ||
				!document.createElementNS('http://www.w3.org/2000/svg', 'svg') ||
				document.createElementNS('http://www.w3.org/2000/svg', 'svg').classList instanceof DOMTokenList)) ||
			(t.DOMTokenList = _DOMTokenList),
			(function() {
				var t = document.createElement('span')
				'classList' in t &&
					(t.classList.toggle('x', !1),
					t.classList.contains('x') &&
						(t.classList.constructor.prototype.toggle = function s(t) {
							var s = arguments[1]
							if (s === undefined) {
								var e = !this.contains(t)
								return this[e ? 'add' : 'remove'](t), e
							}
							return (s = !!s), this[s ? 'add' : 'remove'](t), s
						}))
			})(),
			(function() {
				var t = document.createElement('span')
				if ('classList' in t && (t.classList.add('a', 'b'), !t.classList.contains('b'))) {
					var s = t.classList.constructor.prototype.add
					t.classList.constructor.prototype.add = function() {
						for (var t = arguments, e = arguments.length, n = 0; n < e; n++) s.call(this, t[n])
					}
				}
			})(),
			(function() {
				var t = document.createElement('span')
				if (
					'classList' in t &&
					(t.classList.add('a'), t.classList.add('b'), t.classList.remove('a', 'b'), t.classList.contains('b'))
				) {
					var s = t.classList.constructor.prototype.remove
					t.classList.constructor.prototype.remove = function() {
						for (var t = arguments, e = arguments.length, n = 0; n < e; n++) s.call(this, t[n])
					}
				}
			})()
	})(self)
	;(Document.prototype.after = Element.prototype.after = function t() {
		if (this.parentNode) {
			for (
				var t = Array.prototype.slice.call(arguments), e = this.nextSibling, o = e ? t.indexOf(e) : -1;
				-1 !== o && (e = e.nextSibling);

			)
				o = t.indexOf(e)
			this.parentNode.insertBefore(_mutation(arguments), e)
		}
	}),
		'Text' in self && (Text.prototype.after = Element.prototype.after)
	Document.prototype.append = Element.prototype.append = function p() {
		this.appendChild(_mutation(arguments))
	}
	;(Document.prototype.before = Element.prototype.before = function e() {
		if (this.parentNode) {
			for (
				var e = Array.prototype.slice.call(arguments), t = this.previousSibling, o = t ? e.indexOf(t) : -1;
				-1 !== o && (t = t.previousSibling);

			)
				o = e.indexOf(t)
			this.parentNode.insertBefore(_mutation(arguments), t ? t.nextSibling : this.parentNode.firstChild)
		}
	}),
		'Text' in self && (Text.prototype.before = Element.prototype.before)
	!(function(e) {
		var t = !0,
			r = function(e, r, n, i) {
				Object.defineProperty
					? Object.defineProperty(e, r, { configurable: !1 === t || !!i, get: n })
					: e.__defineGetter__(r, n)
			}
		try {
			r({}, 'support')
		} catch (i) {
			t = !1
		}
		var n = function(e, i, l) {
			r(
				e.prototype,
				i,
				function() {
					var e,
						c = this,
						s = '__defineGetter__DEFINE_PROPERTY' + i
					if (c[s]) return e
					if (((c[s] = !0), !1 === t)) {
						for (
							var o, a = n.mirror || document.createElement('div'), f = a.childNodes, d = f.length, m = 0;
							m < d;
							++m
						)
							if (f[m]._R === c) {
								o = f[m]
								break
							}
						o || (o = a.appendChild(document.createElement('div'))), (e = DOMTokenList.call(o, c, l))
					} else e = new _DOMTokenList(c, l)
					return (
						r(c, i, function() {
							return e
						}),
						delete c[s],
						e
					)
				},
				!0
			)
		}
		n(e.Element, 'classList', 'className'),
			n(e.HTMLElement, 'classList', 'className'),
			n(e.HTMLLinkElement, 'relList', 'rel'),
			n(e.HTMLAnchorElement, 'relList', 'rel'),
			n(e.HTMLAreaElement, 'relList', 'rel')
	})(self)
	Element.prototype.matches =
		Element.prototype.webkitMatchesSelector ||
		Element.prototype.oMatchesSelector ||
		Element.prototype.msMatchesSelector ||
		Element.prototype.mozMatchesSelector ||
		function e(t) {
			for (var o = this, r = (o.document || o.ownerDocument).querySelectorAll(t), c = 0; r[c] && r[c] !== o; ) ++c
			return !!r[c]
		}
	Element.prototype.closest = function e(n) {
		for (var t = this; t; ) {
			if (t.matches(n)) return t
			t = 'SVGElement' in window && t instanceof SVGElement ? t.parentNode : t.parentElement
		}
		return null
	}
	Document.prototype.prepend = Element.prototype.prepend = function t() {
		this.insertBefore(_mutation(arguments), this.firstChild)
	}
	;(Document.prototype.remove = Element.prototype.remove = function e() {
		this.parentNode && this.parentNode.removeChild(this)
	}),
		'Text' in self && (Text.prototype.remove = Element.prototype.remove)
	;(Document.prototype.replaceWith = Element.prototype.replaceWith = function e() {
		this.parentNode && this.parentNode.replaceChild(_mutation(arguments), this)
	}),
		'Text' in self && (Text.prototype.replaceWith = Element.prototype.replaceWith)
	!(function() {
		function e(e, t) {
			if (!e) throw new Error('Not enough arguments')
			var n
			if ('createEvent' in document) {
				n = document.createEvent('Event')
				var o = !(!t || t.bubbles === undefined) && t.bubbles,
					i = !(!t || t.cancelable === undefined) && t.cancelable
				return n.initEvent(e, o, i), n
			}
			return (
				(n = document.createEventObject()),
				(n.type = e),
				(n.bubbles = !(!t || t.bubbles === undefined) && t.bubbles),
				(n.cancelable = !(!t || t.cancelable === undefined) && t.cancelable),
				n
			)
		}
		var t = {
			click: 1,
			dblclick: 1,
			keyup: 1,
			keypress: 1,
			keydown: 1,
			mousedown: 1,
			mouseup: 1,
			mousemove: 1,
			mouseover: 1,
			mouseenter: 1,
			mouseleave: 1,
			mouseout: 1,
			storage: 1,
			storagecommit: 1,
			textinput: 1
		}
		if ('undefined' != typeof document && 'undefined' != typeof window) {
			var n = (window.Event && window.Event.prototype) || null
			;(e.NONE = 0),
				(e.CAPTURING_PHASE = 1),
				(e.AT_TARGET = 2),
				(e.BUBBLING_PHASE = 3),
				(window.Event = Window.prototype.Event = e),
				n &&
					Object.defineProperty(window.Event, 'prototype', {
						configurable: !1,
						enumerable: !1,
						writable: !0,
						value: n
					}),
				'createEvent' in document ||
					((window.addEventListener = Window.prototype.addEventListener = Document.prototype.addEventListener = Element.prototype.addEventListener = function o() {
						var e = this,
							n = arguments[0],
							o = arguments[1]
						if (e === window && n in t)
							throw new Error(
								'In IE8 the event: ' +
									n +
									' is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.'
							)
						e._events || (e._events = {}),
							e._events[n] ||
								((e._events[n] = function(t) {
									var n,
										o = e._events[t.type].list,
										i = o.slice(),
										r = -1,
										c = i.length
									for (
										t.preventDefault = function a() {
											!1 !== t.cancelable && (t.returnValue = !1)
										},
											t.stopPropagation = function l() {
												t.cancelBubble = !0
											},
											t.stopImmediatePropagation = function s() {
												;(t.cancelBubble = !0), (t.cancelImmediate = !0)
											},
											t.currentTarget = e,
											t.relatedTarget = t.fromElement || null,
											t.target = t.target || t.srcElement || e,
											t.timeStamp = new Date().getTime(),
											t.clientX &&
												((t.pageX = t.clientX + document.documentElement.scrollLeft),
												(t.pageY = t.clientY + document.documentElement.scrollTop));
										++r < c && !t.cancelImmediate;

									)
										r in i && ((n = i[r]), o.includes(n) && 'function' == typeof n && n.call(e, t))
								}),
								(e._events[n].list = []),
								e.attachEvent && e.attachEvent('on' + n, e._events[n])),
							e._events[n].list.push(o)
					}),
					(window.removeEventListener = Window.prototype.removeEventListener = Document.prototype.removeEventListener = Element.prototype.removeEventListener = function i() {
						var e,
							t = this,
							n = arguments[0],
							o = arguments[1]
						t._events &&
							t._events[n] &&
							t._events[n].list &&
							-1 !== (e = t._events[n].list.indexOf(o)) &&
							(t._events[n].list.splice(e, 1),
							t._events[n].list.length || (t.detachEvent && t.detachEvent('on' + n, t._events[n]), delete t._events[n]))
					}),
					(window.dispatchEvent = Window.prototype.dispatchEvent = Document.prototype.dispatchEvent = Element.prototype.dispatchEvent = function r(
						e
					) {
						if (!arguments.length) throw new Error('Not enough arguments')
						if (!e || 'string' != typeof e.type) throw new Error('DOM Events Exception 0')
						var t = this,
							n = e.type
						try {
							if (!e.bubbles) {
								e.cancelBubble = !0
								var o = function(e) {
									;(e.cancelBubble = !0), (t || window).detachEvent('on' + n, o)
								}
								this.attachEvent('on' + n, o)
							}
							this.fireEvent('on' + n, e)
						} catch (i) {
							e.target = t
							do {
								;(e.currentTarget = t),
									'_events' in t && 'function' == typeof t._events[n] && t._events[n].call(t, e),
									'function' == typeof t['on' + n] && t['on' + n].call(t, e),
									(t = 9 === t.nodeType ? t.parentWindow : t.parentNode)
							} while (t && !e.cancelBubble)
						}
						return !0
					}),
					document.attachEvent('onreadystatechange', function() {
						'complete' === document.readyState && document.dispatchEvent(new e('DOMContentLoaded', { bubbles: !0 }))
					}))
		}
	})()
	;(self.CustomEvent = function e(t, n) {
		if (!t) throw Error('TypeError: Failed to construct "CustomEvent": An event name must be provided.')
		var l
		if (((n = n || { bubbles: !1, cancelable: !1, detail: null }), 'createEvent' in document))
			try {
				;(l = document.createEvent('CustomEvent')), l.initCustomEvent(t, n.bubbles, n.cancelable, n.detail)
			} catch (a) {
				;(l = document.createEvent('Event')), l.initEvent(t, n.bubbles, n.cancelable), (l.detail = n.detail)
			}
		else (l = new Event(t, n)), (l.detail = (n && n.detail) || null)
		return l
	}),
		(CustomEvent.prototype = Event.prototype)
	!(function() {
		var n = /^\s*function\s+([^(\s]*)\s*/,
			t = Function,
			e = t.prototype,
			r = e.constructor,
			o = function(o) {
				var c, u
				return o === t || o === r ? (u = 'Function') : o !== e && ((c = ('' + o).match(n)), (u = c && c[1])), u || ''
			}
		Object.defineProperty(e, 'name', {
			get: function c() {
				var n = this,
					t = o(n)
				return n !== e && Object.defineProperty(n, 'name', { value: t, configurable: !0 }), t
			},
			configurable: !0
		})
	})()
	CreateMethodProperty(Math, 'acosh', function t(a) {
		return isNaN(a) ? NaN : a < 1 ? NaN : 1 === a ? 0 : a === Infinity ? Infinity : Math.log(a + Math.sqrt(a * a - 1))
	})
	CreateMethodProperty(Math, 'asinh', function n(i) {
		return isNaN(i)
			? NaN
			: 0 === i && 1 / i === Infinity
				? 0
				: 0 === i && 1 / i == -Infinity
					? -0
					: i === Infinity ? Infinity : i === -Infinity ? -Infinity : Math.log(i + Math.sqrt(i * i + 1))
	})
	CreateMethodProperty(Math, 'atanh', function n(t) {
		return isNaN(t)
			? NaN
			: t < -1
				? NaN
				: t > 1
					? NaN
					: -1 === t
						? -Infinity
						: 1 === t
							? Infinity
							: 0 === t && 1 / t === Infinity ? 0 : 0 === t && 1 / t == -Infinity ? -0 : Math.log((1 + t) / (1 - t)) / 2
	})
	CreateMethodProperty(Math, 'cbrt', function n(t) {
		if (isNaN(t)) return NaN
		if (0 === t && 1 / t === Infinity) return 0
		if (0 === t && 1 / t == -Infinity) return -0
		if (t === Infinity) return Infinity
		if (t === -Infinity) return -Infinity
		var i = Math.pow(Math.abs(t), 1 / 3)
		return t < 0 ? -i : i
	})
	CreateMethodProperty(Math, 'clz32', function t(r) {
		var e = ToUint32(r)
		return e ? 32 - e.toString(2).length : 32
	})
	CreateMethodProperty(Math, 'cosh', function n(t) {
		if (isNaN(t)) return NaN
		if (0 === t && 1 / t === Infinity) return 1
		if (0 === t && 1 / t == -Infinity) return 1
		if (t === Infinity) return Infinity
		if (t === -Infinity) return Infinity
		if ((t = Math.abs(t)) > 709) {
			var i = Math.exp(0.5 * t)
			return i / 2 * i
		}
		return ((i = Math.exp(t)) + 1 / i) / 2
	})
	CreateMethodProperty(Math, 'expm1', function n(i) {
		return isNaN(i)
			? NaN
			: 0 === i && 1 / i === Infinity
				? 0
				: 0 === i && 1 / i == -Infinity
					? -0
					: i === Infinity ? Infinity : i === -Infinity ? -1 : i > -1e-6 && i < 1e-6 ? i + i * i / 2 : Math.exp(i) - 1
	})
	CreateMethodProperty(Math, 'fround', function(n) {
		return isNaN(n)
			? NaN
			: 1 / n == +Infinity || 1 / n == -Infinity || n === +Infinity || n === -Infinity ? n : new Float32Array([ n ])[0]
	})
	CreateMethodProperty(Math, 'hypot', function t(n, r) {
		if (0 === arguments.length) return 0
		for (var i = 0, e = 0, a = 0; a < arguments.length; ++a) {
			if (arguments[a] === Infinity) return Infinity
			if (arguments[a] === -Infinity) return Infinity
			var f = Math.abs(Number(arguments[a]))
			f > e && ((i *= Math.pow(e / f, 2)), (e = f)), (0 === f && 0 === e) || (i += Math.pow(f / e, 2))
		}
		return e * Math.sqrt(i)
	})
	CreateMethodProperty(Math, 'imul', function t(r, e) {
		var n = ToUint32(r),
			o = ToUint32(e),
			i = (n >>> 16) & 65535,
			a = 65535 & n,
			u = (o >>> 16) & 65535,
			h = 65535 & o
		return (a * h + (((i * h + a * u) << 16) >>> 0)) | 0
	})
	CreateMethodProperty(Math, 'log10', function t(e) {
		return Math.log(e) / Math.LN10
	})
	CreateMethodProperty(Math, 'log1p', function r(t) {
		if (-1 < (t = Number(t)) && t < 1) {
			for (var o = t, e = 2; e <= 300; e++) o += Math.pow(-1, e - 1) * Math.pow(t, e) / e
			return o
		}
		return Math.log(1 + t)
	})
	CreateMethodProperty(Math, 'log2', function t(e) {
		return Math.log(e) / Math.LN2
	})
	CreateMethodProperty(Math, 'sign', function i(n) {
		return (
			(n = Number(n)),
			isNaN(n) ? NaN : 1 / n == -Infinity ? -0 : 1 / n === Infinity ? 0 : n < 0 ? -1 : n > 0 ? 1 : void 0
		)
	})
	CreateMethodProperty(Math, 'sinh', function r(t) {
		var a = t < 0 ? -1 : 1,
			e = Math.abs(t)
		if (e < 22) {
			if (e < Math.pow(2, -28)) return t
			var h = Math.exp(e) - 1
			return e < 1 ? a * (2 * h - h * h / (h + 1)) / 2 : a * (h + h / (h + 1)) / 2
		}
		if (e < 709.7822265625) return a * Math.exp(e) / 2
		var n = Math.exp(0.5 * e)
		return (h = a * n / 2) * n
	})
	CreateMethodProperty(Math, 'tanh', function t(n) {
		var e
		return n === Infinity ? 1 : n === -Infinity ? -1 : ((e = Math.exp(2 * n)) - 1) / (e + 1)
	})
	CreateMethodProperty(Math, 'trunc', function t(r) {
		return r < 0 ? Math.ceil(r) : Math.floor(r)
	})
	!(function() {
		function e(e) {
			if (!(0 in arguments)) throw new TypeError('1 argument is required')
			do {
				if (this === e) return !0
			} while ((e = e && e.parentNode))
			return !1
		}
		if ('HTMLElement' in self && 'contains' in HTMLElement.prototype)
			try {
				delete HTMLElement.prototype.contains
			} catch (t) {}
		'Node' in self ? (Node.prototype.contains = e) : (document.contains = Element.prototype.contains = e)
	})()
	Object.defineProperty(Number, 'EPSILON', { enumerable: !1, configurable: !1, writable: !1, value: Math.pow(2, -52) })
	!(function() {
		var e = self
		CreateMethodProperty(Number, 'isFinite', function i(n) {
			return 'number' === Type(n) && e.isFinite(n)
		})
	})()
	CreateMethodProperty(Number, 'isInteger', function e(n) {
		return 'number' === Type(n) && (!isNaN(n) && n !== Infinity && n !== -Infinity && ToInteger(n) === n)
	})
	!(function() {
		var e = self
		CreateMethodProperty(Number, 'isNaN', function r(n) {
			return 'number' === Type(n) && !!e.isNaN(n)
		})
	})()
	CreateMethodProperty(Number, 'isSafeInteger', function e(r) {
		if ('number' !== Type(r)) return !1
		if (isNaN(r) || r === Infinity || r === -Infinity) return !1
		var t = ToInteger(r)
		return t === r && Math.abs(t) <= Math.pow(2, 53) - 1
	})
	Object.defineProperty(Number, 'MAX_SAFE_INTEGER', {
		enumerable: !1,
		configurable: !1,
		writable: !1,
		value: Math.pow(2, 53) - 1
	})
	Object.defineProperty(Number, 'MIN_SAFE_INTEGER', {
		enumerable: !1,
		configurable: !1,
		writable: !1,
		value: -(Math.pow(2, 53) - 1)
	})
	!(function() {
		var e = Object.getOwnPropertyDescriptor,
			t = function() {
				try {
					return (
						1 ===
						Object.defineProperty(document.createElement('div'), 'one', {
							get: function() {
								return 1
							}
						}).one
					)
				} catch (e) {
					return !1
				}
			},
			r = {}.toString,
			n = ''.split
		CreateMethodProperty(Object, 'getOwnPropertyDescriptor', function c(o, i) {
			var a = ToObject(o)
			a = ('string' === Type(a) || a instanceof String) && '[object String]' == r.call(o) ? n.call(o, '') : Object(o)
			var u = ToPropertyKey(i)
			if (t)
				try {
					return e(a, u)
				} catch (l) {}
			if (HasOwnProperty(a, u)) return { enumerable: !0, configurable: !0, writable: !0, value: a[u] }
		})
	})()
	CreateMethodProperty(Object, 'is', function e(t, r) {
		return SameValue(t, r)
	})
	!(function(e) {
		CreateMethodProperty(Object, 'isExtensible', function t(n) {
			return 'object' === Type(n) && (!e || e(n))
		})
	})(Object.isExtensible)
	CreateMethodProperty(
		Object,
		'keys',
		(function() {
			'use strict'
			function t(t) {
				var e = r.call(t),
					n = '[object Arguments]' === e
				return (
					n ||
						(n =
							'[object Array]' !== e &&
							null !== t &&
							'object' == typeof t &&
							'number' == typeof t.length &&
							t.length >= 0 &&
							'[object Function]' === r.call(t.callee)),
					n
				)
			}
			var e = Object.prototype.hasOwnProperty,
				r = Object.prototype.toString,
				n = Object.prototype.propertyIsEnumerable,
				o = !n.call({ toString: null }, 'toString'),
				l = n.call(function() {}, 'prototype'),
				c = [
					'toString',
					'toLocaleString',
					'valueOf',
					'hasOwnProperty',
					'isPrototypeOf',
					'propertyIsEnumerable',
					'constructor'
				],
				i = function(t) {
					var e = t.constructor
					return e && e.prototype === t
				},
				u = {
					$console: !0,
					$external: !0,
					$frame: !0,
					$frameElement: !0,
					$frames: !0,
					$innerHeight: !0,
					$innerWidth: !0,
					$outerHeight: !0,
					$outerWidth: !0,
					$pageXOffset: !0,
					$pageYOffset: !0,
					$parent: !0,
					$scrollLeft: !0,
					$scrollTop: !0,
					$scrollX: !0,
					$scrollY: !0,
					$self: !0,
					$webkitIndexedDB: !0,
					$webkitStorageInfo: !0,
					$window: !0
				},
				a = (function() {
					if ('undefined' == typeof window) return !1
					for (var t in window)
						try {
							if (!u['$' + t] && e.call(window, t) && null !== window[t] && 'object' == typeof window[t])
								try {
									i(window[t])
								} catch (r) {
									return !0
								}
						} catch (r) {
							return !0
						}
					return !1
				})(),
				f = function(t) {
					if ('undefined' == typeof window || !a) return i(t)
					try {
						return i(t)
					} catch (e) {
						return !1
					}
				}
			return function p(n) {
				var i = '[object Function]' === r.call(n),
					u = t(n),
					a = '[object String]' === r.call(n),
					p = []
				if (n === undefined || null === n) throw new TypeError('Cannot convert undefined or null to object')
				var s = l && i
				if (a && n.length > 0 && !e.call(n, 0)) for (var y = 0; y < n.length; ++y) p.push(String(y))
				if (u && n.length > 0) for (var g = 0; g < n.length; ++g) p.push(String(g))
				else for (var h in n) (s && 'prototype' === h) || !e.call(n, h) || p.push(String(h))
				if (o)
					for (var w = f(n), d = 0; d < c.length; ++d) (w && 'constructor' === c[d]) || !e.call(n, c[d]) || p.push(c[d])
				return p
			}
		})()
	)
	function EnumerableOwnProperties(e, r) {
		for (var t = Object.keys(e), n = [], s = t.length, a = 0; a < s; a++) {
			var i = t[a]
			if ('string' === Type(i)) {
				var u = Object.getOwnPropertyDescriptor(e, i)
				if (u && u.enumerable)
					if ('key' === r) n.push(i)
					else {
						var p = Get(e, i)
						if ('value' === r) n.push(p)
						else {
							var f = [ i, p ]
							n.push(f)
						}
					}
			}
		}
		return n
	}
	!(function() {
		var e = {}.toString,
			t = ''.split
		CreateMethodProperty(Object, 'entries', function r(n) {
			var i = ToObject(n)
			return (
				(i =
					('string' === Type(i) || i instanceof String) && '[object String]' == e.call(n) ? t.call(n, '') : Object(n)),
				EnumerableOwnProperties(i, 'key+value')
			)
		})
	})()
	CreateMethodProperty(Object, 'assign', function e(t, r) {
		var n = ToObject(t)
		if (1 === arguments.length) return n
		var o,
			c,
			a,
			l,
			i = Array.prototype.slice.call(arguments, 1)
		for (o = 0; o < i.length; o++) {
			var p = i[o]
			for (
				p === undefined || null === p
					? (a = [])
					: ((l = '[object String]' === Object.prototype.toString.call(p) ? String(p).split('') : ToObject(p)),
						(a = Object.keys(l))),
					c = 0;
				c < a.length;
				c++
			) {
				var b,
					y = a[c]
				try {
					var g = Object.getOwnPropertyDescriptor(l, y)
					b = g !== undefined && !0 === g.enumerable
				} catch (u) {
					b = Object.prototype.propertyIsEnumerable.call(l, y)
				}
				if (b) {
					var j = Get(l, y)
					n[y] = j
				}
			}
		}
		return n
	})
	!(function() {
		var t = {}.toString,
			e = ''.split,
			r = [].concat,
			o = Object.prototype.hasOwnProperty,
			c = Object.getOwnPropertyNames || Object.keys,
			n = 'object' == typeof self ? c(self) : []
		CreateMethodProperty(Object, 'getOwnPropertyNames', function l(a) {
			var p = ToObject(a)
			if ('[object Window]' === t.call(p))
				try {
					return c(p)
				} catch (j) {
					return r.call([], n)
				}
			p = '[object String]' == t.call(p) ? e.call(p, '') : Object(p)
			for (var i = c(p), s = [ 'length', 'prototype' ], O = 0; O < s.length; O++) {
				var b = s[O]
				o.call(p, b) && !i.includes(b) && i.push(b)
			}
			if (i.includes('__proto__')) {
				var f = i.indexOf('__proto__')
				i.splice(f, 1)
			}
			return i
		})
	})()
	!(function() {
		if (!Object.setPrototypeOf) {
			var t,
				e,
				o = Object.getOwnPropertyNames,
				r = Object.getOwnPropertyDescriptor,
				n = Object.create,
				c = Object.defineProperty,
				_ = Object.getPrototypeOf,
				f = Object.prototype,
				p = function(t, e) {
					return (
						o(e).forEach(function(o) {
							c(t, o, r(e, o))
						}),
						t
					)
				},
				O = function i(t, e) {
					return p(n(e), t)
				}
			try {
				;(t = r(f, '__proto__').set),
					t.call({}, null),
					(e = function a(e, o) {
						return t.call(e, o), e
					})
			} catch (u) {
				;(t = { __proto__: null }),
					t instanceof Object
						? (e = O)
						: ((t.__proto__ = f),
							(e =
								t instanceof Object
									? function o(t, e) {
											return (t.__proto__ = e), t
										}
									: function r(t, e) {
											return _(t) ? ((t.__proto__ = e), t) : O(t, e)
										}))
			}
			CreateMethodProperty(Object, 'setPrototypeOf', e)
		}
	})()
	!(function() {
		var t = {}.toString,
			e = ''.split
		CreateMethodProperty(Object, 'values', function r(n) {
			var c = '[object String]' == t.call(n) ? e.call(n, '') : ToObject(n)
			return Object.keys(c).map(function(t) {
				return c[t]
			})
		})
	})()
	try {
		Object.defineProperty(self, 'Reflect', {
			value: self.Reflect || {},
			writable: !0,
			configurable: !0,
			enumerable: !1
		})
	} catch (e) {
		self.Reflect = self.Reflect || {}
	}
	Object.defineProperty(RegExp.prototype, 'flags', {
		configurable: !0,
		enumerable: !1,
		get: function() {
			var e = this
			if ('object' !== Type(e)) throw new TypeError('Method called on incompatible type: must be an object.')
			var o = ''
			return (
				ToBoolean(Get(e, 'global')) && (o += 'g'),
				ToBoolean(Get(e, 'ignoreCase')) && (o += 'i'),
				ToBoolean(Get(e, 'multiline')) && (o += 'm'),
				ToBoolean(Get(e, 'unicode')) && (o += 'u'),
				ToBoolean(Get(e, 'sticky')) && (o += 'y'),
				o
			)
		}
	})
	CreateMethodProperty(String.prototype, 'codePointAt', function e(t) {
		var r = RequireObjectCoercible(this),
			o = ToString(r),
			n = ToInteger(t),
			i = o.length
		if (n < 0 || n >= i) return undefined
		var c = String.prototype.charCodeAt.call(o, n)
		if (c < 55296 || c > 56319 || n + 1 === i) return c
		var a = String.prototype.charCodeAt.call(o, n + 1)
		return a < 56320 || a > 57343 ? c : UTF16Decode(c, a)
	})
	CreateMethodProperty(String.prototype, 'endsWith', function e(t) {
		'use strict'
		var r = arguments.length > 1 ? arguments[1] : undefined,
			n = RequireObjectCoercible(this),
			i = ToString(n)
		if (IsRegExp(t)) throw new TypeError('First argument to String.prototype.endsWith must not be a regular expression')
		var o = ToString(t),
			s = i.length,
			g = r === undefined ? s : ToInteger(r),
			h = Math.min(Math.max(g, 0), s),
			u = o.length,
			a = h - u
		return !(a < 0) && i.substr(a, u) === o
	})
	CreateMethodProperty(String.prototype, 'includes', function e(t) {
		'use strict'
		var r = arguments.length > 1 ? arguments[1] : undefined,
			n = RequireObjectCoercible(this),
			i = ToString(n)
		if (IsRegExp(t)) throw new TypeError('First argument to String.prototype.includes must not be a regular expression')
		var o = ToString(t),
			g = ToInteger(r),
			a = i.length,
			p = Math.min(Math.max(g, 0), a)
		return -1 !== String.prototype.indexOf.call(i, o, p)
	})
	CreateMethodProperty(String.prototype, 'padEnd', function e(r) {
		'use strict'
		var t = arguments.length > 1 ? arguments[1] : undefined,
			n = RequireObjectCoercible(this),
			i = ToString(n),
			o = ToLength(r),
			u = i.length
		if (o <= u) return i
		if (t === undefined) var d = ' '
		else d = ToString(t)
		if ('' === d) return i
		for (var f = o - u, g = '', s = 0; s < f; s++) g += d
		return (g = g.substr(0, f)), i + g
	})
	CreateMethodProperty(String.prototype, 'padStart', function e(r) {
		'use strict'
		var t = arguments.length > 1 ? arguments[1] : undefined,
			n = RequireObjectCoercible(this),
			i = ToString(n),
			o = ToLength(r),
			u = i.length
		if (o <= u) return i
		if (t === undefined) var f = ' '
		else f = ToString(t)
		if ('' === f) return i
		for (var a = o - u, d = '', g = 0; g < a; g++) d += f
		return (d = d.substr(0, a)) + i
	})
	CreateMethodProperty(String.prototype, 'repeat', function r(e) {
		'use strict'
		var t = RequireObjectCoercible(this),
			n = ToString(t),
			o = ToInteger(e)
		if (o < 0) throw new RangeError('Invalid count value')
		if (o === Infinity) throw new RangeError('Invalid count value')
		return 0 === o ? '' : new Array(o + 1).join(n)
	})
	CreateMethodProperty(String.prototype, 'startsWith', function t(e) {
		'use strict'
		var r = arguments.length > 1 ? arguments[1] : undefined,
			n = RequireObjectCoercible(this),
			i = ToString(n)
		if (IsRegExp(e))
			throw new TypeError('First argument to String.prototype.startsWith must not be a regular expression')
		var o = ToString(e),
			s = ToInteger(r),
			a = i.length,
			g = Math.min(Math.max(s, 0), a)
		return !(o.length + g > a) && 0 === i.substr(g).indexOf(e)
	})
	CreateMethodProperty(String.prototype, 'trim', function t() {
		'use strict'
		var t = this
		return TrimString(t, 'start+end')
	})
	!(function(r, t) {
		var a = function o(t) {
			var a = String(t).trim(),
				e = r(a)
			return 0 === e && '-' == a.charAt(0) ? -0 : e
		}
		try {
			CreateMethodProperty(t, 'parseFloat', a)
		} catch (e) {
			t.parseFloat = a
		}
		CreateMethodProperty(Number, 'parseFloat', t.parseFloat)
	})(parseFloat, this)
	!(function(t, r) {
		var e = function a(r, e) {
			var n = String(r).trim()
			return t(n, e >>> 0 || (/^[-+]?0[xX]/.test(n) ? 16 : 10))
		}
		try {
			CreateMethodProperty(r, 'parseInt', e)
		} catch (n) {
			r.parseInt = e
		}
		CreateMethodProperty(Number, 'parseInt', r.parseInt)
	})(parseInt, this)
	!(function(t, r, n) {
		'use strict'
		var e,
			u = 0,
			o = '' + Math.random(),
			l = '__symbol:',
			c = l.length,
			a = '__symbol@@' + o,
			i = 'defineProperty',
			f = 'defineProperties',
			s = 'getOwnPropertyNames',
			v = 'getOwnPropertyDescriptor',
			b = 'propertyIsEnumerable',
			h = t.prototype,
			y = h.hasOwnProperty,
			m = h[b],
			p = h.toString,
			g = Array.prototype.concat,
			w = t.getOwnPropertyNames ? t.getOwnPropertyNames(self) : [],
			S = t[s],
			d = function L(t) {
				if ('[object Window]' === p.call(t))
					try {
						return S(t)
					} catch (r) {
						return g.call([], w)
					}
				return S(t)
			},
			P = t[v],
			j = t.create,
			O = t.keys,
			E = t.freeze || t,
			N = t[i],
			_ = t[f],
			k = P(t, s),
			T = function(t, r, n) {
				if (!y.call(t, a))
					try {
						N(t, a, { enumerable: !1, configurable: !1, writable: !1, value: {} })
					} catch (e) {
						t[a] = {}
					}
				t[a]['@@' + r] = n
			},
			z = function(t, r) {
				var n = j(t)
				return (
					d(r).forEach(function(t) {
						M.call(r, t) && G(n, t, r[t])
					}),
					n
				)
			},
			A = function(t) {
				var r = j(t)
				return (r.enumerable = !1), r
			},
			D = function Q() {},
			F = function(t) {
				return t != a && !y.call(x, t)
			},
			I = function(t) {
				return t != a && y.call(x, t)
			},
			M = function R(t) {
				var r = '' + t
				return I(r) ? y.call(this, r) && this[a]['@@' + r] : m.call(this, t)
			},
			W = function(r) {
				var n = {
					enumerable: !1,
					configurable: !0,
					get: D,
					set: function(t) {
						e(this, r, { enumerable: !1, configurable: !0, writable: !0, value: t }), T(this, r, !0)
					}
				}
				try {
					N(h, r, n)
				} catch (u) {
					h[r] = n.value
				}
				return E((x[r] = N(t(r), 'constructor', B)))
			},
			q = function U() {
				var t = arguments[0]
				if (this instanceof U) throw new TypeError('Symbol is not a constructor')
				return W(l.concat(t || '', o, ++u))
			},
			x = j(null),
			B = { value: q },
			C = function(t) {
				return x[t]
			},
			G = function V(t, r, n) {
				var u = '' + r
				return I(u) ? (e(t, u, n.enumerable ? A(n) : n), T(t, u, !!n.enumerable)) : N(t, r, n), t
			},
			H = function(t) {
				return function(r) {
					return y.call(t, a) && y.call(t[a], '@@' + r)
				}
			},
			J = function X(t) {
				return d(t).filter(t === h ? H(t) : I).map(C)
			}
		;(k.value = G),
			N(t, i, k),
			(k.value = J),
			N(t, 'getOwnPropertySymbols', k),
			(k.value = function Y(t) {
				return d(t).filter(F)
			}),
			N(t, s, k),
			(k.value = function Z(t, r) {
				var n = J(r)
				return (
					n.length
						? O(r).concat(n).forEach(function(n) {
								M.call(r, n) && G(t, n, r[n])
							})
						: _(t, r),
					t
				)
			}),
			N(t, f, k),
			(k.value = M),
			N(h, b, k),
			(k.value = q),
			N(n, 'Symbol', k),
			(k.value = function(t) {
				var r = l.concat(l, t, o)
				return r in h ? x[r] : W(r)
			}),
			N(q, 'for', k),
			(k.value = function(t) {
				if (F(t)) throw new TypeError(t + ' is not a symbol')
				return y.call(x, t) ? t.slice(2 * c, -o.length) : void 0
			}),
			N(q, 'keyFor', k),
			(k.value = function $(t, r) {
				var n = P(t, r)
				return n && I(r) && (n.enumerable = M.call(t, r)), n
			}),
			N(t, v, k),
			(k.value = function(t, r) {
				return 1 === arguments.length || void 0 === r ? j(t) : z(t, r)
			}),
			N(t, 'create', k)
		var K =
			null ===
			function() {
				return this
			}.call(null)
		;(k.value = K
			? function() {
					var t = p.call(this)
					return '[object String]' === t && I(this) ? '[object Symbol]' : t
				}
			: function() {
					if (this === window) return '[object Null]'
					var t = p.call(this)
					return '[object String]' === t && I(this) ? '[object Symbol]' : t
				}),
			N(h, 'toString', k),
			(e = function(t, r, n) {
				var e = P(h, r)
				delete h[r], N(t, r, n), t !== h && N(h, r, e)
			})
	})(Object, 0, this)
	CreateMethodProperty(Reflect, 'ownKeys', function e(t) {
		if ('object' !== Type(t)) throw new TypeError(Object.prototype.toString.call(t) + ' is not an Object')
		return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))
	})
	CreateMethodProperty(Object, 'getOwnPropertyDescriptors', function e(r) {
		for (var t = ToObject(r), o = Reflect.ownKeys(t), n = {}, c = o.length, a = 0; a < c; a++) {
			var p = o[a],
				y = Object.getOwnPropertyDescriptor(r, p)
			y !== undefined && CreateDataProperty(n, p, y)
		}
		return n
	})
	Object.defineProperty(Symbol, 'asyncIterator', { value: Symbol('asyncIterator') })
	Object.defineProperty(Symbol, 'hasInstance', { value: Symbol('hasInstance') })
	Object.defineProperty(Symbol, 'isConcatSpreadable', { value: Symbol('isConcatSpreadable') })
	Object.defineProperty(self.Symbol, 'iterator', { value: self.Symbol('iterator') })
	function GetIterator(t) {
		var e = arguments.length > 1 ? arguments[1] : GetMethod(t, Symbol.iterator),
			r = Call(e, t)
		if ('object' !== Type(r)) throw new TypeError('bad iterator')
		var o = GetV(r, 'next'),
			a = Object.create(null)
		return (a['[[Iterator]]'] = r), (a['[[NextMethod]]'] = o), (a['[[Done]]'] = !1), a
	}
	Object.defineProperty(Symbol, 'match', { value: Symbol('match') })
	Object.defineProperty(Symbol, 'replace', { value: Symbol('replace') })
	Object.defineProperty(Symbol, 'search', { value: Symbol('search') })
	Object.defineProperty(Symbol, 'species', { value: Symbol('species') })
	!(function(e) {
		function t(e, t) {
			if ('object' !== Type(e))
				throw new TypeError('createMapIterator called on incompatible receiver ' + Object.prototype.toString.call(e))
			if (!0 !== e._es6Map)
				throw new TypeError('createMapIterator called on incompatible receiver ' + Object.prototype.toString.call(e))
			var r = Object.create(u)
			return (
				Object.defineProperty(r, '[[Map]]', { configurable: !0, enumerable: !1, writable: !0, value: e }),
				Object.defineProperty(r, '[[MapNextIndex]]', { configurable: !0, enumerable: !1, writable: !0, value: 0 }),
				Object.defineProperty(r, '[[MapIterationKind]]', { configurable: !0, enumerable: !1, writable: !0, value: t }),
				r
			)
		}
		var r = (function() {
				try {
					var e = {}
					return (
						Object.defineProperty(e, 't', {
							configurable: !0,
							enumerable: !1,
							get: function() {
								return !0
							},
							set: undefined
						}),
						!!e.t
					)
				} catch (t) {
					return !1
				}
			})(),
			o = 0,
			a = Symbol('meta_' + (1e8 * Math.random() + '').replace('.', '')),
			n = function(e) {
				if ('object' == typeof e ? null !== e : 'function' == typeof e) {
					if (!Object.isExtensible(e)) return !1
					if (!Object.prototype.hasOwnProperty.call(e, a)) {
						var t = typeof e + '-' + ++o
						Object.defineProperty(e, a, { configurable: !1, enumerable: !1, writable: !1, value: t })
					}
					return e[a]
				}
				return '' + e
			},
			i = function(e, t) {
				var r = n(t)
				if (!1 === r) return p(e, t)
				var o = e._table[r]
				return o !== undefined && o
			},
			p = function(e, t) {
				for (var r = 0; r < e._keys.length; r++) {
					var o = e._keys[r]
					if (o !== c && SameValueZero(o, t)) return r
				}
				return !1
			},
			l = function(e, t, r) {
				var o = n(t)
				return !1 !== o && (!1 === r ? delete e._table[o] : (e._table[o] = r), !0)
			},
			c = Symbol('undef'),
			y = function f() {
				if (!(this instanceof f)) throw new TypeError('Constructor Map requires "new"')
				var e = OrdinaryCreateFromConstructor(this, f.prototype, {
					_table: {},
					_keys: [],
					_values: [],
					_size: 0,
					_es6Map: !0
				})
				r || Object.defineProperty(e, 'size', { configurable: !0, enumerable: !1, writable: !0, value: 0 })
				var t = arguments.length > 0 ? arguments[0] : undefined
				if (null === t || t === undefined) return e
				var o = e.set
				if (!IsCallable(o)) throw new TypeError('Map.prototype.set is not a function')
				try {
					for (var a = GetIterator(t); ; ) {
						var n = IteratorStep(a)
						if (!1 === n) return e
						var i = IteratorValue(n)
						if ('object' !== Type(i))
							try {
								throw new TypeError('Iterator value ' + i + ' is not an entry object')
							} catch (u) {
								return IteratorClose(a, u)
							}
						try {
							var p = i[0],
								l = i[1]
							o.call(e, p, l)
						} catch (s) {
							return IteratorClose(a, s)
						}
					}
				} catch (s) {
					if (Array.isArray(t) || '[object Arguments]' === Object.prototype.toString.call(t) || t.callee) {
						var c,
							y = t.length
						for (c = 0; c < y; c++) o.call(e, t[c][0], t[c][1])
					}
				}
				return e
			}
		Object.defineProperty(y, 'prototype', { configurable: !1, enumerable: !1, writable: !1, value: {} }),
			r
				? Object.defineProperty(y, Symbol.species, {
						configurable: !0,
						enumerable: !1,
						get: function() {
							return this
						},
						set: undefined
					})
				: CreateMethodProperty(y, Symbol.species, y),
			CreateMethodProperty(y.prototype, 'clear', function b() {
				var e = this
				if ('object' !== Type(e))
					throw new TypeError(
						'Method Map.prototype.clear called on incompatible receiver ' + Object.prototype.toString.call(e)
					)
				if (!0 !== e._es6Map)
					throw new TypeError(
						'Method Map.prototype.clear called on incompatible receiver ' + Object.prototype.toString.call(e)
					)
				for (var t = e._keys, o = 0; o < t.length; o++) (e._keys[o] = c), (e._values[o] = c)
				return (this._size = 0), r || (this.size = this._size), (this._table = {}), undefined
			}),
			CreateMethodProperty(y.prototype, 'constructor', y),
			CreateMethodProperty(y.prototype, 'delete', function(e) {
				var t = this
				if ('object' !== Type(t))
					throw new TypeError(
						'Method Map.prototype.clear called on incompatible receiver ' + Object.prototype.toString.call(t)
					)
				if (!0 !== t._es6Map)
					throw new TypeError(
						'Method Map.prototype.clear called on incompatible receiver ' + Object.prototype.toString.call(t)
					)
				var o = i(t, e)
				if (!1 !== o) {
					var a = t._keys[o]
					if (a !== c && SameValueZero(a, e))
						return (
							(this._keys[o] = c),
							(this._values[o] = c),
							(this._size = --this._size),
							r || (this.size = this._size),
							l(this, e, !1),
							!0
						)
				}
				return !1
			}),
			CreateMethodProperty(y.prototype, 'entries', function h() {
				return t(this, 'key+value')
			}),
			CreateMethodProperty(y.prototype, 'forEach', function(e) {
				var t = this
				if ('object' !== Type(t))
					throw new TypeError(
						'Method Map.prototype.forEach called on incompatible receiver ' + Object.prototype.toString.call(t)
					)
				if (!0 !== t._es6Map)
					throw new TypeError(
						'Method Map.prototype.forEach called on incompatible receiver ' + Object.prototype.toString.call(t)
					)
				if (!IsCallable(e)) throw new TypeError(Object.prototype.toString.call(e) + ' is not a function.')
				if (arguments[1]) var r = arguments[1]
				for (var o = t._keys, a = 0; a < o.length; a++)
					t._keys[a] !== c && t._values[a] !== c && e.call(r, t._values[a], t._keys[a], t)
				return undefined
			}),
			CreateMethodProperty(y.prototype, 'get', function d(e) {
				var t = this
				if ('object' !== Type(t))
					throw new TypeError(
						'Method Map.prototype.get called on incompatible receiver ' + Object.prototype.toString.call(t)
					)
				if (!0 !== t._es6Map)
					throw new TypeError(
						'Method Map.prototype.get called on incompatible receiver ' + Object.prototype.toString.call(t)
					)
				var r = i(t, e)
				if (!1 !== r) {
					var o = t._keys[r]
					if (o !== c && SameValueZero(o, e)) return t._values[r]
				}
				return undefined
			}),
			CreateMethodProperty(y.prototype, 'has', function v(e) {
				var t = this
				if ('object' != typeof t)
					throw new TypeError(
						'Method Map.prototype.has called on incompatible receiver ' + Object.prototype.toString.call(t)
					)
				if (!0 !== t._es6Map)
					throw new TypeError(
						'Method Map.prototype.has called on incompatible receiver ' + Object.prototype.toString.call(t)
					)
				var r = i(t, e)
				if (!1 !== r) {
					var o = t._keys[r]
					if (o !== c && SameValueZero(o, e)) return !0
				}
				return !1
			}),
			CreateMethodProperty(y.prototype, 'keys', function M() {
				return t(this, 'key')
			}),
			CreateMethodProperty(y.prototype, 'set', function w(e, t) {
				var o = this
				if ('object' !== Type(o))
					throw new TypeError(
						'Method Map.prototype.set called on incompatible receiver ' + Object.prototype.toString.call(o)
					)
				if (!0 !== o._es6Map)
					throw new TypeError(
						'Method Map.prototype.set called on incompatible receiver ' + Object.prototype.toString.call(o)
					)
				var a = i(o, e)
				if (!1 !== a) o._values[a] = t
				else {
					;-0 === e && (e = 0)
					var n = { '[[Key]]': e, '[[Value]]': t }
					o._keys.push(n['[[Key]]']),
						o._values.push(n['[[Value]]']),
						l(o, e, o._keys.length - 1),
						++o._size,
						r || (o.size = o._size)
				}
				return o
			}),
			r &&
				Object.defineProperty(y.prototype, 'size', {
					configurable: !0,
					enumerable: !1,
					get: function() {
						var e = this
						if ('object' !== Type(e))
							throw new TypeError(
								'Method Map.prototype.size called on incompatible receiver ' + Object.prototype.toString.call(e)
							)
						if (!0 !== e._es6Map)
							throw new TypeError(
								'Method Map.prototype.size called on incompatible receiver ' + Object.prototype.toString.call(e)
							)
						return this._size
					},
					set: undefined
				}),
			CreateMethodProperty(y.prototype, 'values', function j() {
				return t(this, 'value')
			}),
			CreateMethodProperty(y.prototype, Symbol.iterator, y.prototype.entries),
			'name' in y || Object.defineProperty(y, 'name', { configurable: !0, enumerable: !1, writable: !1, value: 'Map' })
		var u = {}
		Object.defineProperty(u, 'isMapIterator', { configurable: !1, enumerable: !1, writable: !1, value: !0 }),
			CreateMethodProperty(u, 'next', function _() {
				var e = this
				if ('object' !== Type(e))
					throw new TypeError(
						'Method %MapIteratorPrototype%.next called on incompatible receiver ' + Object.prototype.toString.call(e)
					)
				if (!e.isMapIterator)
					throw new TypeError(
						'Method %MapIteratorPrototype%.next called on incompatible receiver ' + Object.prototype.toString.call(e)
					)
				var t = e['[[Map]]'],
					r = e['[[MapNextIndex]]'],
					o = e['[[MapIterationKind]]']
				if (t === undefined) return CreateIterResultObject(undefined, !0)
				if (!t._es6Map) throw new Error(Object.prototype.toString.call(t) + ' has a [[MapData]] internal slot.')
				for (var a = t._keys, n = a.length; r < n; ) {
					var i = Object.create(null)
					if (
						((i['[[Key]]'] = t._keys[r]),
						(i['[[Value]]'] = t._values[r]),
						(r += 1),
						(e['[[MapNextIndex]]'] = r),
						i['[[Key]]'] !== c)
					) {
						if ('key' === o) var p = i['[[Key]]']
						else if ('value' === o) p = i['[[Value]]']
						else {
							if ('key+value' !== o) throw new Error()
							p = [ i['[[Key]]'], i['[[Value]]'] ]
						}
						return CreateIterResultObject(p, !1)
					}
				}
				return (e['[[Map]]'] = undefined), CreateIterResultObject(undefined, !0)
			}),
			CreateMethodProperty(u, Symbol.iterator, function g() {
				return this
			})
		try {
			CreateMethodProperty(e, 'Map', y)
		} catch (s) {
			e.Map = y
		}
	})(self)
	!(function(e) {
		function t(e, t) {
			if ('object' != typeof e)
				throw new TypeError('createSetIterator called on incompatible receiver ' + Object.prototype.toString.call(e))
			if (!0 !== e._es6Set)
				throw new TypeError('createSetIterator called on incompatible receiver ' + Object.prototype.toString.call(e))
			var r = Object.create(i)
			return (
				Object.defineProperty(r, '[[IteratedSet]]', { configurable: !0, enumerable: !1, writable: !0, value: e }),
				Object.defineProperty(r, '[[SetNextIndex]]', { configurable: !0, enumerable: !1, writable: !0, value: 0 }),
				Object.defineProperty(r, '[[SetIterationKind]]', { configurable: !0, enumerable: !1, writable: !0, value: t }),
				r
			)
		}
		var r = (function() {
				try {
					var e = {}
					return (
						Object.defineProperty(e, 't', {
							configurable: !0,
							enumerable: !1,
							get: function() {
								return !0
							},
							set: undefined
						}),
						!!e.t
					)
				} catch (t) {
					return !1
				}
			})(),
			o = Symbol('undef'),
			n = function c() {
				if (!(this instanceof c)) throw new TypeError('Constructor Set requires "new"')
				var e = OrdinaryCreateFromConstructor(this, c.prototype, { _values: [], _size: 0, _es6Set: !0 })
				r || Object.defineProperty(e, 'size', { configurable: !0, enumerable: !1, writable: !0, value: 0 })
				var t = arguments.length > 0 ? arguments[0] : undefined
				if (null === t || t === undefined) return e
				var o = e.add
				if (!IsCallable(o)) throw new TypeError('Set.prototype.add is not a function')
				try {
					for (var n = GetIterator(t); ; ) {
						var a = IteratorStep(n)
						if (!1 === a) return e
						var i = IteratorValue(a)
						try {
							o.call(e, i)
						} catch (y) {
							return IteratorClose(n, y)
						}
					}
				} catch (y) {
					if (!Array.isArray(t) && '[object Arguments]' !== Object.prototype.toString.call(t) && !t.callee) throw y
					var l,
						p = t.length
					for (l = 0; l < p; l++) o.call(e, t[l])
				}
				return e
			}
		Object.defineProperty(n, 'prototype', { configurable: !1, enumerable: !1, writable: !1, value: {} }),
			r
				? Object.defineProperty(n, Symbol.species, {
						configurable: !0,
						enumerable: !1,
						get: function() {
							return this
						},
						set: undefined
					})
				: CreateMethodProperty(n, Symbol.species, n),
			CreateMethodProperty(n.prototype, 'add', function p(e) {
				var t = this
				if ('object' != typeof t)
					throw new TypeError(
						'Method Set.prototype.add called on incompatible receiver ' + Object.prototype.toString.call(t)
					)
				if (!0 !== t._es6Set)
					throw new TypeError(
						'Method Set.prototype.add called on incompatible receiver ' + Object.prototype.toString.call(t)
					)
				for (var n = t._values, a = 0; a < n.length; a++) {
					var i = n[a]
					if (i !== o && SameValueZero(i, e)) return t
				}
				return (
					0 === e && 1 / e == -Infinity && (e = 0),
					t._values.push(e),
					(this._size = ++this._size),
					r || (this.size = this._size),
					t
				)
			}),
			CreateMethodProperty(n.prototype, 'clear', function y() {
				var e = this
				if ('object' != typeof e)
					throw new TypeError(
						'Method Set.prototype.clear called on incompatible receiver ' + Object.prototype.toString.call(e)
					)
				if (!0 !== e._es6Set)
					throw new TypeError(
						'Method Set.prototype.clear called on incompatible receiver ' + Object.prototype.toString.call(e)
					)
				for (var t = e._values, n = 0; n < t.length; n++) t[n] = o
				return (this._size = 0), r || (this.size = this._size), undefined
			}),
			CreateMethodProperty(n.prototype, 'constructor', n),
			CreateMethodProperty(n.prototype, 'delete', function(e) {
				var t = this
				if ('object' != typeof t)
					throw new TypeError(
						'Method Set.prototype.delete called on incompatible receiver ' + Object.prototype.toString.call(t)
					)
				if (!0 !== t._es6Set)
					throw new TypeError(
						'Method Set.prototype.delete called on incompatible receiver ' + Object.prototype.toString.call(t)
					)
				for (var n = t._values, a = 0; a < n.length; a++) {
					var i = n[a]
					if (i !== o && SameValueZero(i, e))
						return (n[a] = o), (this._size = --this._size), r || (this.size = this._size), !0
				}
				return !1
			}),
			CreateMethodProperty(n.prototype, 'entries', function u() {
				return t(this, 'key+value')
			}),
			CreateMethodProperty(n.prototype, 'forEach', function f(e) {
				var t = this
				if ('object' != typeof t)
					throw new TypeError(
						'Method Set.prototype.forEach called on incompatible receiver ' + Object.prototype.toString.call(t)
					)
				if (!0 !== t._es6Set)
					throw new TypeError(
						'Method Set.prototype.forEach called on incompatible receiver ' + Object.prototype.toString.call(t)
					)
				if (!IsCallable(e)) throw new TypeError(Object.prototype.toString.call(e) + ' is not a function.')
				if (arguments[1]) var r = arguments[1]
				for (var n = t._values, a = 0; a < n.length; a++) {
					var i = n[a]
					i !== o && e.call(r, i, i, t)
				}
				return undefined
			}),
			CreateMethodProperty(n.prototype, 'has', function d(e) {
				var t = this
				if ('object' != typeof t)
					throw new TypeError(
						'Method Set.prototype.forEach called on incompatible receiver ' + Object.prototype.toString.call(t)
					)
				if (!0 !== t._es6Set)
					throw new TypeError(
						'Method Set.prototype.forEach called on incompatible receiver ' + Object.prototype.toString.call(t)
					)
				for (var r = t._values, n = 0; n < r.length; n++) {
					var a = r[n]
					if (a !== o && SameValueZero(a, e)) return !0
				}
				return !1
			})
		var a = function h() {
			return t(this, 'value')
		}
		CreateMethodProperty(n.prototype, 'values', a),
			CreateMethodProperty(n.prototype, 'keys', a),
			r &&
				Object.defineProperty(n.prototype, 'size', {
					configurable: !0,
					enumerable: !1,
					get: function() {
						var e = this
						if ('object' != typeof e)
							throw new TypeError(
								'Method Set.prototype.size called on incompatible receiver ' + Object.prototype.toString.call(e)
							)
						if (!0 !== e._es6Set)
							throw new TypeError(
								'Method Set.prototype.size called on incompatible receiver ' + Object.prototype.toString.call(e)
							)
						for (var t = e._values, r = 0, n = 0; n < t.length; n++) {
							t[n] !== o && (r += 1)
						}
						return r
					},
					set: undefined
				}),
			CreateMethodProperty(n.prototype, Symbol.iterator, a),
			'name' in n || Object.defineProperty(n, 'name', { configurable: !0, enumerable: !1, writable: !1, value: 'Set' })
		var i = {}
		Object.defineProperty(i, 'isSetIterator', { configurable: !1, enumerable: !1, writable: !1, value: !0 }),
			CreateMethodProperty(i, 'next', function b() {
				var e = this
				if ('object' != typeof e)
					throw new TypeError(
						'Method %SetIteratorPrototype%.next called on incompatible receiver ' + Object.prototype.toString.call(e)
					)
				if (!e.isSetIterator)
					throw new TypeError(
						'Method %SetIteratorPrototype%.next called on incompatible receiver ' + Object.prototype.toString.call(e)
					)
				var t = e['[[IteratedSet]]'],
					r = e['[[SetNextIndex]]'],
					n = e['[[SetIterationKind]]']
				if (t === undefined) return CreateIterResultObject(undefined, !0)
				if (!t._es6Set) throw new Error(Object.prototype.toString.call(t) + ' does not have [[SetData]] internal slot.')
				for (var a = t._values, i = a.length; r < i; ) {
					var l = a[r]
					if (((r += 1), (e['[[SetNextIndex]]'] = r), l !== o))
						return 'key+value' === n ? CreateIterResultObject([ l, l ], !1) : CreateIterResultObject(l, !1)
				}
				return (e['[[IteratedSet]]'] = undefined), CreateIterResultObject(undefined, !0)
			}),
			CreateMethodProperty(i, Symbol.iterator, function s() {
				return this
			})
		try {
			CreateMethodProperty(e, 'Set', n)
		} catch (l) {
			e.Set = n
		}
	})(self)
	!(function() {
		function r(r) {
			return 'string' == typeof r || ('object' == typeof r && '[object String]' === t.call(r))
		}
		var t = Object.prototype.toString,
			e = String.prototype.match
		CreateMethodProperty(Array, 'from', function o(t) {
			var o = this,
				a = arguments.length > 1 ? arguments[1] : undefined
			if (a === undefined) var n = !1
			else {
				if (!1 === IsCallable(a)) throw new TypeError(Object.prototype.toString.call(a) + ' is not a function.')
				var i = arguments.length > 2 ? arguments[2] : undefined
				if (i !== undefined) var l = i
				else l = undefined
				n = !0
			}
			var u = GetMethod(t, Symbol.iterator)
			if (u !== undefined) {
				if (IsConstructor(o)) var f = Construct(o)
				else f = ArrayCreate(0)
				for (var c = GetIterator(t, u), s = 0; ; ) {
					if (s >= Math.pow(2, 53) - 1) {
						var h = new TypeError('Iteration count can not be greater than or equal 9007199254740991.')
						return IteratorClose(c, h)
					}
					var y = ToString(s),
						C = IteratorStep(c)
					if (!1 === C) return (f.length = s), f
					var g = IteratorValue(C)
					if (n)
						try {
							var p = Call(a, l, [ g, s ])
						} catch (b) {
							return IteratorClose(c, b)
						}
					else p = g
					try {
						CreateDataPropertyOrThrow(f, y, p)
					} catch (b) {
						return IteratorClose(c, b)
					}
					s += 1
				}
			}
			if (r(t)) var v = e.call(t, /[\uD800-\uDBFF][\uDC00-\uDFFF]?|[^\uD800-\uDFFF]|./g) || []
			else v = ToObject(t)
			var d = ToLength(Get(v, 'length'))
			for (f = IsConstructor(o) ? Construct(o, [ d ]) : ArrayCreate(d), s = 0; s < d; ) {
				y = ToString(s)
				var I = Get(v, y)
				;(p = !0 === n ? Call(a, l, [ I, s ]) : I), CreateDataPropertyOrThrow(f, y, p), (s += 1)
			}
			return (f.length = d), f
		})
	})()
	Object.defineProperty(Symbol, 'split', { value: Symbol('split') })
	Object.defineProperty(Symbol, 'toPrimitive', { value: Symbol('toPrimitive') })
	Object.defineProperty(Symbol, 'toStringTag', { value: Symbol('toStringTag') })
	var Iterator = (function() {
		var e = function() {
				return (this.length = 0), this
			},
			t = function(e) {
				if ('function' != typeof e) throw new TypeError(e + ' is not a function')
				return e
			},
			_ = function(e, n) {
				if (!(this instanceof _)) return new _(e, n)
				Object.defineProperties(this, {
					__list__: { writable: !0, value: e },
					__context__: { writable: !0, value: n },
					__nextIndex__: { writable: !0, value: 0 }
				}),
					n &&
						(t(n.on),
						n.on('_add', this._onAdd.bind(this)),
						n.on('_delete', this._onDelete.bind(this)),
						n.on('_clear', this._onClear.bind(this)))
			}
		return (
			Object.defineProperties(
				_.prototype,
				Object.assign(
					{
						constructor: { value: _, configurable: !0, enumerable: !1, writable: !0 },
						_next: {
							value: function() {
								var e
								if (this.__list__)
									return this.__redo__ && (e = this.__redo__.shift()) !== undefined
										? e
										: this.__nextIndex__ < this.__list__.length ? this.__nextIndex__++ : void this._unBind()
							},
							configurable: !0,
							enumerable: !1,
							writable: !0
						},
						next: {
							value: function() {
								return this._createResult(this._next())
							},
							configurable: !0,
							enumerable: !1,
							writable: !0
						},
						_createResult: {
							value: function(e) {
								return e === undefined ? { done: !0, value: undefined } : { done: !1, value: this._resolve(e) }
							},
							configurable: !0,
							enumerable: !1,
							writable: !0
						},
						_resolve: {
							value: function(e) {
								return this.__list__[e]
							},
							configurable: !0,
							enumerable: !1,
							writable: !0
						},
						_unBind: {
							value: function() {
								;(this.__list__ = null),
									delete this.__redo__,
									this.__context__ &&
										(this.__context__.off('_add', this._onAdd.bind(this)),
										this.__context__.off('_delete', this._onDelete.bind(this)),
										this.__context__.off('_clear', this._onClear.bind(this)),
										(this.__context__ = null))
							},
							configurable: !0,
							enumerable: !1,
							writable: !0
						},
						toString: {
							value: function() {
								return '[object Iterator]'
							},
							configurable: !0,
							enumerable: !1,
							writable: !0
						}
					},
					{
						_onAdd: {
							value: function(e) {
								if (!(e >= this.__nextIndex__)) {
									if ((++this.__nextIndex__, !this.__redo__))
										return void Object.defineProperty(this, '__redo__', {
											value: [ e ],
											configurable: !0,
											enumerable: !1,
											writable: !1
										})
									this.__redo__.forEach(function(t, _) {
										t >= e && (this.__redo__[_] = ++t)
									}, this),
										this.__redo__.push(e)
								}
							},
							configurable: !0,
							enumerable: !1,
							writable: !0
						},
						_onDelete: {
							value: function(e) {
								var t
								e >= this.__nextIndex__ ||
									(--this.__nextIndex__,
									this.__redo__ &&
										((t = this.__redo__.indexOf(e)),
										-1 !== t && this.__redo__.splice(t, 1),
										this.__redo__.forEach(function(t, _) {
											t > e && (this.__redo__[_] = --t)
										}, this)))
							},
							configurable: !0,
							enumerable: !1,
							writable: !0
						},
						_onClear: {
							value: function() {
								this.__redo__ && e.call(this.__redo__), (this.__nextIndex__ = 0)
							},
							configurable: !0,
							enumerable: !1,
							writable: !0
						}
					}
				)
			),
			Object.defineProperty(_.prototype, Symbol.iterator, {
				value: function() {
					return this
				},
				configurable: !0,
				enumerable: !1,
				writable: !0
			}),
			Object.defineProperty(_.prototype, Symbol.toStringTag, {
				value: 'Iterator',
				configurable: !1,
				enumerable: !1,
				writable: !0
			}),
			_
		)
	})()
	var ArrayIterator = (function() {
		var e = function(t, r) {
			if (!(this instanceof e)) return new e(t, r)
			Iterator.call(this, t),
				(r = r
					? String.prototype.includes.call(r, 'key+value')
						? 'key+value'
						: String.prototype.includes.call(r, 'key') ? 'key' : 'value'
					: 'value'),
				Object.defineProperty(this, '__kind__', { value: r, configurable: !1, enumerable: !1, writable: !1 })
		}
		return (
			Object.setPrototypeOf && Object.setPrototypeOf(e, Iterator.prototype),
			(e.prototype = Object.create(Iterator.prototype, {
				constructor: { value: e, configurable: !0, enumerable: !1, writable: !0 },
				_resolve: {
					value: function(e) {
						return 'value' === this.__kind__
							? this.__list__[e]
							: 'key+value' === this.__kind__ ? [ e, this.__list__[e] ] : e
					},
					configurable: !0,
					enumerable: !1,
					writable: !0
				},
				toString: {
					value: function() {
						return '[object Array Iterator]'
					},
					configurable: !0,
					enumerable: !1,
					writable: !0
				}
			})),
			e
		)
	})()
	CreateMethodProperty(Array.prototype, 'entries', function r() {
		var r = ToObject(this)
		return new ArrayIterator(r, 'key+value')
	})
	CreateMethodProperty(Array.prototype, 'keys', function r() {
		var r = ToObject(this)
		return new ArrayIterator(r, 'key')
	})
	'Symbol' in self && 'iterator' in Symbol && 'function' == typeof Array.prototype[Symbol.iterator]
		? CreateMethodProperty(Array.prototype, 'values', Array.prototype[Symbol.iterator])
		: CreateMethodProperty(Array.prototype, 'values', function r() {
				var r = ToObject(this)
				return new ArrayIterator(r, 'value')
			})
	CreateMethodProperty(Array.prototype, Symbol.iterator, Array.prototype.values)
	var StringIterator = (function() {
		var t = function(e) {
			if (!(this instanceof t)) return new t(e)
			;(e = String(e)),
				Iterator.call(this, e),
				Object.defineProperty(this, '__length__', { value: e.length, configurable: !1, enumerable: !1, writable: !1 })
		}
		return (
			Object.setPrototypeOf && Object.setPrototypeOf(t, Iterator),
			(t.prototype = Object.create(Iterator.prototype, {
				constructor: { value: t, configurable: !0, enumerable: !1, writable: !0 },
				_next: {
					value: function() {
						if (this.__list__) return this.__nextIndex__ < this.__length__ ? this.__nextIndex__++ : void this._unBind()
					},
					configurable: !0,
					enumerable: !1,
					writable: !0
				},
				_resolve: {
					value: function(t) {
						var e,
							r = this.__list__[t]
						return this.__nextIndex__ === this.__length__
							? r
							: ((e = r.charCodeAt(0)), e >= 55296 && e <= 56319 ? r + this.__list__[this.__nextIndex__++] : r)
					},
					configurable: !0,
					enumerable: !1,
					writable: !0
				},
				toString: {
					value: function() {
						return '[object String Iterator]'
					},
					configurable: !0,
					enumerable: !1,
					writable: !0
				}
			})),
			t
		)
	})()
	CreateMethodProperty(String.prototype, Symbol.iterator, function() {
		var r = RequireObjectCoercible(this),
			t = ToString(r)
		return new StringIterator(t)
	})
	!(function() {
		'use strict'
		function n() {
			return tn[q][B] || D
		}
		function t(n) {
			return n && 'object' == typeof n
		}
		function e(n) {
			return 'function' == typeof n
		}
		function r(n, t) {
			return n instanceof t
		}
		function o(n) {
			return r(n, A)
		}
		function i(n, t, e) {
			if (!t(n)) throw a(e)
		}
		function u() {
			try {
				return b.apply(R, arguments)
			} catch (n) {
				return (Y.e = n), Y
			}
		}
		function c(n, t) {
			return (b = n), (R = t), u
		}
		function f(n, t) {
			function e() {
				for (var e = 0; e < o; ) t(r[e], r[e + 1]), (r[e++] = T), (r[e++] = T)
				;(o = 0), r.length > n && (r.length = n)
			}
			var r = L(n),
				o = 0
			return function(n, t) {
				;(r[o++] = n), (r[o++] = t), 2 === o && tn.nextTick(e)
			}
		}
		function s(n, t) {
			var o,
				i,
				u,
				f,
				s = 0
			if (!n) throw a(N)
			var l = n[tn[q][z]]
			if (e(l)) i = l.call(n)
			else {
				if (!e(n.next)) {
					if (r(n, L)) {
						for (o = n.length; s < o; ) t(n[s], s++)
						return s
					}
					throw a(N)
				}
				i = n
			}
			for (; !(u = i.next()).done; ) if ((f = c(t)(u.value, s++)) === Y) throw (e(i[G]) && i[G](), f.e)
			return s
		}
		function a(n) {
			return new TypeError(n)
		}
		function l(n) {
			return (n ? '' : Q) + new A().stack
		}
		function h(n, t) {
			var e = 'on' + n.toLowerCase(),
				r = F[e]
			E && E.listeners(n).length
				? n === X ? E.emit(n, t._v, t) : E.emit(n, t)
				: r ? r({ reason: t._v, promise: t }) : tn[n](t._v, t)
		}
		function v(n) {
			return n && n._s
		}
		function _(n) {
			if (v(n)) return new n(Z)
			var t, r, o
			return (
				(t = new n(function(n, e) {
					if (t) throw a()
					;(r = n), (o = e)
				})),
				i(r, e),
				i(o, e),
				t
			)
		}
		function d(n, t) {
			var e = !1
			return function(r) {
				e || ((e = !0), I && (n[M] = l(!0)), t === U ? g(n, r) : y(n, t, r))
			}
		}
		function p(n, t, r, o) {
			return (
				e(r) && (t._onFulfilled = r),
				e(o) && (n[J] && h(W, n), (t._onRejected = o)),
				I && (t._p = n),
				(n[n._c++] = t),
				n._s !== $ && rn(n, t),
				t
			)
		}
		function m(n) {
			if (n._umark) return !0
			n._umark = !0
			for (var t, e = 0, r = n._c; e < r; ) if (((t = n[e++]), t._onRejected || m(t))) return !0
		}
		function w(n, t) {
			function e(n) {
				return r.push(n.replace(/^\s+|\s+$/g, ''))
			}
			var r = []
			return (
				I &&
					(t[M] && e(t[M]),
					(function o(n) {
						n && K in n && (o(n._next), e(n[K] + ''), o(n._p))
					})(t)),
				(n && n.stack ? n.stack : n) + ('\n' + r.join('\n')).replace(nn, '')
			)
		}
		function j(n, t) {
			return n(t)
		}
		function y(n, t, e) {
			var r = 0,
				i = n._c
			if (n._s === $)
				for (n._s = t, n._v = e, t === O && (I && o(e) && (e.longStack = w(e, n)), on(n)); r < i; ) rn(n, n[r++])
			return n
		}
		function g(n, r) {
			if (r === n && r) return y(n, O, a(V)), n
			if (r !== S && (e(r) || t(r))) {
				var o = c(k)(r)
				if (o === Y) return y(n, O, o.e), n
				e(o)
					? (I && v(r) && (n._next = r),
						v(r)
							? x(n, r, o)
							: tn.nextTick(function() {
									x(n, r, o)
								}))
					: y(n, U, r)
			} else y(n, U, r)
			return n
		}
		function k(n) {
			return n.then
		}
		function x(n, t, e) {
			var r = c(e, t)(
				function(e) {
					t && ((t = S), g(n, e))
				},
				function(e) {
					t && ((t = S), y(n, O, e))
				}
			)
			r === Y && t && (y(n, O, r.e), (t = S))
		}
		var T,
			b,
			R,
			S = null,
			C = 'object' == typeof self,
			F = self,
			P = F.Promise,
			E = F.process,
			H = F.console,
			I = !0,
			L = Array,
			A = Error,
			O = 1,
			U = 2,
			$ = 3,
			q = 'Symbol',
			z = 'iterator',
			B = 'species',
			D = q + '(' + B + ')',
			G = 'return',
			J = '_uh',
			K = '_pt',
			M = '_st',
			N = 'Invalid argument',
			Q = '\nFrom previous ',
			V = 'Chaining cycle detected for promise',
			W = 'rejectionHandled',
			X = 'unhandledRejection',
			Y = { e: S },
			Z = function() {},
			nn = /^.+\/node_modules\/yaku\/.+\n?/gm,
			tn = function(n) {
				var r,
					o = this
				if (!t(o) || o._s !== T) throw a('Invalid this')
				if (((o._s = $), I && (o[K] = l()), n !== Z)) {
					if (!e(n)) throw a(N)
					;(r = c(n)(d(o, U), d(o, O))), r === Y && y(o, O, r.e)
				}
			}
		;(tn['default'] = tn),
			(function en(n, t) {
				for (var e in t) n[e] = t[e]
			})(tn.prototype, {
				then: function(n, t) {
					if (this._s === undefined) throw a()
					return p(this, _(tn.speciesConstructor(this, tn)), n, t)
				},
				catch: function(n) {
					return this.then(T, n)
				},
				finally: function(n) {
					return this.then(
						function(t) {
							return tn.resolve(n()).then(function() {
								return t
							})
						},
						function(t) {
							return tn.resolve(n()).then(function() {
								throw t
							})
						}
					)
				},
				_c: 0,
				_p: S
			}),
			(tn.resolve = function(n) {
				return v(n) ? n : g(_(this), n)
			}),
			(tn.reject = function(n) {
				return y(_(this), O, n)
			}),
			(tn.race = function(n) {
				var t = this,
					e = _(t),
					r = function(n) {
						y(e, U, n)
					},
					o = function(n) {
						y(e, O, n)
					},
					i = c(s)(n, function(n) {
						t.resolve(n).then(r, o)
					})
				return i === Y ? t.reject(i.e) : e
			}),
			(tn.all = function(n) {
				function t(n) {
					y(o, O, n)
				}
				var e,
					r = this,
					o = _(r),
					i = []
				return (e = c(s)(n, function(n, u) {
					r.resolve(n).then(function(n) {
						;(i[u] = n), --e || y(o, U, i)
					}, t)
				})) === Y
					? r.reject(e.e)
					: (e || y(o, U, []), o)
			}),
			(tn.Symbol = F[q] || {}),
			c(function() {
				Object.defineProperty(tn, n(), {
					get: function() {
						return this
					}
				})
			})(),
			(tn.speciesConstructor = function(t, e) {
				var r = t.constructor
				return r ? r[n()] || e : e
			}),
			(tn.unhandledRejection = function(n, t) {
				H && H.error('Uncaught (in promise)', I ? t.longStack : w(n, t))
			}),
			(tn.rejectionHandled = Z),
			(tn.enableLongStackTrace = function() {
				I = !0
			}),
			(tn.nextTick = C
				? function(n) {
						P
							? new P(function(n) {
									n()
								}).then(n)
							: setTimeout(n)
					}
				: E.nextTick),
			(tn._s = 1)
		var rn = f(999, function(n, t) {
				var e, r
				return (r = n._s !== O ? t._onFulfilled : t._onRejected) === T
					? void y(t, n._s, n._v)
					: (e = c(j)(r, n._v)) === Y ? void y(t, O, e.e) : void g(t, e)
			}),
			on = f(9, function(n) {
				m(n) || ((n[J] = 1), h(X, n))
			})
		F.Promise = tn
	})()
	Object.defineProperty(Symbol, 'unscopables', { value: Symbol('unscopables') })
	!(function(e) {
		'use strict'
		function t(t) {
			return (
				!!t &&
				(('Symbol' in e && 'iterator' in e.Symbol && 'function' == typeof t[Symbol.iterator]) || !!Array.isArray(t))
			)
		}
		function n(e) {
			return 'from' in Array ? Array.from(e) : Array.prototype.slice.call(e)
		}
		!(function() {
			function r(e) {
				var t = '',
					n = !0
				return (
					e.forEach(function(e) {
						var r = encodeURIComponent(e.name),
							a = encodeURIComponent(e.value)
						n || (t += '&'), (t += r + '=' + a), (n = !1)
					}),
					t.replace(/%20/g, '+')
				)
			}
			function a(e, t) {
				var n = e.split('&')
				t && -1 === n[0].indexOf('=') && (n[0] = '=' + n[0])
				var r = []
				n.forEach(function(e) {
					if (0 !== e.length) {
						var t = e.indexOf('=')
						if (-1 !== t)
							var n = e.substring(0, t),
								a = e.substring(t + 1)
						else (n = e), (a = '')
						;(n = n.replace(/\+/g, ' ')), (a = a.replace(/\+/g, ' ')), r.push({ name: n, value: a })
					}
				})
				var a = []
				return (
					r.forEach(function(e) {
						a.push({ name: decodeURIComponent(e.name), value: decodeURIComponent(e.value) })
					}),
					a
				)
			}
			function i(e) {
				if (c) return new s(e)
				var t = document.createElement('a')
				return (t.href = e), t
			}
			function o(e) {
				var i = this
				;(this._list = []),
					e === undefined ||
						null === e ||
						(e instanceof o
							? (this._list = a(String(e)))
							: 'object' == typeof e && t(e)
								? n(e).forEach(function(e) {
										if (!t(e)) throw TypeError()
										var r = n(e)
										if (2 !== r.length) throw TypeError()
										i._list.push({ name: String(r[0]), value: String(r[1]) })
									})
								: 'object' == typeof e && e
									? Object.keys(e).forEach(function(t) {
											i._list.push({ name: String(t), value: String(e[t]) })
										})
									: ((e = String(e)), '?' === e.substring(0, 1) && (e = e.substring(1)), (this._list = a(e)))),
					(this._url_object = null),
					(this._setList = function(e) {
						u || (i._list = e)
					})
				var u = !1
				this._update_steps = function() {
					u ||
						((u = !0),
						i._url_object &&
							('about:' === i._url_object.protocol &&
								-1 !== i._url_object.pathname.indexOf('?') &&
								(i._url_object.pathname = i._url_object.pathname.split('?')[0]),
							(i._url_object.search = r(i._list)),
							(u = !1)))
				}
			}
			function u(e, t) {
				var n = 0
				this.next = function() {
					if (n >= e.length) return { done: !0, value: undefined }
					var r = e[n++]
					return { done: !1, value: 'key' === t ? r.name : 'value' === t ? r.value : [ r.name, r.value ] }
				}
			}
			function l(t, n) {
				function r() {
					var e = l.href.replace(/#$|\?$|\?(?=#)/g, '')
					l.href !== e && (l.href = e)
				}
				function u() {
					m._setList(l.search ? a(l.search.substring(1)) : []), m._update_steps()
				}
				if (!(this instanceof e.URL)) throw new TypeError("Failed to construct 'URL': Please use the 'new' operator.")
				n &&
					(t = (function() {
						if (c) return new s(t, n).href
						var e
						try {
							var r
							if (
								('[object OperaMini]' === Object.prototype.toString.call(window.operamini)
									? ((e = document.createElement('iframe')),
										(e.style.display = 'none'),
										document.documentElement.appendChild(e),
										(r = e.contentWindow.document))
									: document.implementation && document.implementation.createHTMLDocument
										? (r = document.implementation.createHTMLDocument(''))
										: document.implementation && document.implementation.createDocument
											? ((r = document.implementation.createDocument('http://www.w3.org/1999/xhtml', 'html', null)),
												r.documentElement.appendChild(r.createElement('head')),
												r.documentElement.appendChild(r.createElement('body')))
											: window.ActiveXObject &&
												((r = new window.ActiveXObject('htmlfile')), r.write('<head></head><body></body>'), r.close()),
								!r)
							)
								throw Error('base not supported')
							var a = r.createElement('base')
							;(a.href = n), r.getElementsByTagName('head')[0].appendChild(a)
							var i = r.createElement('a')
							return (i.href = t), i.href
						} finally {
							e && e.parentNode.removeChild(e)
						}
					})())
				var l = i(t || ''),
					f = (function() {
						if (!('defineProperties' in Object)) return !1
						try {
							var e = {}
							return (
								Object.defineProperties(e, {
									prop: {
										get: function() {
											return !0
										}
									}
								}),
								e.prop
							)
						} catch (t) {
							return !1
						}
					})(),
					h = f ? this : document.createElement('a'),
					m = new o(l.search ? l.search.substring(1) : null)
				return (
					(m._url_object = h),
					Object.defineProperties(h, {
						href: {
							get: function() {
								return l.href
							},
							set: function(e) {
								;(l.href = e), r(), u()
							},
							enumerable: !0,
							configurable: !0
						},
						origin: {
							get: function() {
								return 'origin' in l ? l.origin : this.protocol + '//' + this.host
							},
							enumerable: !0,
							configurable: !0
						},
						protocol: {
							get: function() {
								return l.protocol
							},
							set: function(e) {
								l.protocol = e
							},
							enumerable: !0,
							configurable: !0
						},
						username: {
							get: function() {
								return l.username
							},
							set: function(e) {
								l.username = e
							},
							enumerable: !0,
							configurable: !0
						},
						password: {
							get: function() {
								return l.password
							},
							set: function(e) {
								l.password = e
							},
							enumerable: !0,
							configurable: !0
						},
						host: {
							get: function() {
								var e = { 'http:': /:80$/, 'https:': /:443$/, 'ftp:': /:21$/ }[l.protocol]
								return e ? l.host.replace(e, '') : l.host
							},
							set: function(e) {
								l.host = e
							},
							enumerable: !0,
							configurable: !0
						},
						hostname: {
							get: function() {
								return l.hostname
							},
							set: function(e) {
								l.hostname = e
							},
							enumerable: !0,
							configurable: !0
						},
						port: {
							get: function() {
								return l.port
							},
							set: function(e) {
								l.port = e
							},
							enumerable: !0,
							configurable: !0
						},
						pathname: {
							get: function() {
								return '/' !== l.pathname.charAt(0) ? '/' + l.pathname : l.pathname
							},
							set: function(e) {
								l.pathname = e
							},
							enumerable: !0,
							configurable: !0
						},
						search: {
							get: function() {
								return l.search
							},
							set: function(e) {
								l.search !== e && ((l.search = e), r(), u())
							},
							enumerable: !0,
							configurable: !0
						},
						searchParams: {
							get: function() {
								return m
							},
							enumerable: !0,
							configurable: !0
						},
						hash: {
							get: function() {
								return l.hash
							},
							set: function(e) {
								;(l.hash = e), r()
							},
							enumerable: !0,
							configurable: !0
						},
						toString: {
							value: function() {
								return l.toString()
							},
							enumerable: !1,
							configurable: !0
						},
						valueOf: {
							value: function() {
								return l.valueOf()
							},
							enumerable: !1,
							configurable: !0
						}
					}),
					h
				)
			}
			var c,
				s = e.URL
			try {
				if (s) {
					if ('searchParams' in (c = new e.URL('http://example.com'))) {
						var f = new l('http://example.com')
						if (
							((f.search = 'a=1&b=2'),
							'http://example.com/?a=1&b=2' === f.href && ((f.search = ''), 'http://example.com/' === f.href))
						)
							return
					}
					'href' in c || (c = undefined), (c = undefined)
				}
			} catch (m) {}
			if (
				(Object.defineProperties(o.prototype, {
					append: {
						value: function(e, t) {
							this._list.push({ name: e, value: t }), this._update_steps()
						},
						writable: !0,
						enumerable: !0,
						configurable: !0
					},
					delete: {
						value: function(e) {
							for (var t = 0; t < this._list.length; ) this._list[t].name === e ? this._list.splice(t, 1) : ++t
							this._update_steps()
						},
						writable: !0,
						enumerable: !0,
						configurable: !0
					},
					get: {
						value: function(e) {
							for (var t = 0; t < this._list.length; ++t) if (this._list[t].name === e) return this._list[t].value
							return null
						},
						writable: !0,
						enumerable: !0,
						configurable: !0
					},
					getAll: {
						value: function(e) {
							for (var t = [], n = 0; n < this._list.length; ++n)
								this._list[n].name === e && t.push(this._list[n].value)
							return t
						},
						writable: !0,
						enumerable: !0,
						configurable: !0
					},
					has: {
						value: function(e) {
							for (var t = 0; t < this._list.length; ++t) if (this._list[t].name === e) return !0
							return !1
						},
						writable: !0,
						enumerable: !0,
						configurable: !0
					},
					set: {
						value: function(e, t) {
							for (var n = !1, r = 0; r < this._list.length; )
								this._list[r].name === e
									? n ? this._list.splice(r, 1) : ((this._list[r].value = t), (n = !0), ++r)
									: ++r
							n || this._list.push({ name: e, value: t }), this._update_steps()
						},
						writable: !0,
						enumerable: !0,
						configurable: !0
					},
					entries: {
						value: function() {
							return new u(this._list, 'key+value')
						},
						writable: !0,
						enumerable: !0,
						configurable: !0
					},
					keys: {
						value: function() {
							return new u(this._list, 'key')
						},
						writable: !0,
						enumerable: !0,
						configurable: !0
					},
					values: {
						value: function() {
							return new u(this._list, 'value')
						},
						writable: !0,
						enumerable: !0,
						configurable: !0
					},
					forEach: {
						value: function(e) {
							var t = arguments.length > 1 ? arguments[1] : undefined
							this._list.forEach(function(n) {
								e.call(t, n.value, n.name)
							})
						},
						writable: !0,
						enumerable: !0,
						configurable: !0
					},
					toString: {
						value: function() {
							return r(this._list)
						},
						writable: !0,
						enumerable: !1,
						configurable: !0
					},
					sort: {
						value: function p() {
							for (var e = this.entries(), t = e.next(), n = [], r = {}; !t.done; ) {
								var a = t.value,
									i = a[0]
								n.push(i), Object.prototype.hasOwnProperty.call(r, i) || (r[i] = []), r[i].push(a[1]), (t = e.next())
							}
							n.sort()
							for (var o = 0; o < n.length; o++) this['delete'](n[o])
							for (var u = 0; u < n.length; u++) (i = n[u]), this.append(i, r[i].shift())
						}
					}
				}),
				'Symbol' in e &&
					'iterator' in e.Symbol &&
					(Object.defineProperty(o.prototype, e.Symbol.iterator, {
						value: o.prototype.entries,
						writable: !0,
						enumerable: !0,
						configurable: !0
					}),
					Object.defineProperty(u.prototype, e.Symbol.iterator, {
						value: function() {
							return this
						},
						writable: !0,
						enumerable: !0,
						configurable: !0
					})),
				s)
			)
				for (var h in s) Object.prototype.hasOwnProperty.call(s, h) && 'function' == typeof s[h] && (l[h] = s[h])
			;(e.URL = l), (e.URLSearchParams = o)
		})(),
			(function() {
				if (
					'1' !== new e.URLSearchParams([ [ 'a', 1 ] ]).get('a') ||
					'1' !== new e.URLSearchParams({ a: 1 }).get('a')
				) {
					var r = e.URLSearchParams
					e.URLSearchParams = function(e) {
						if (e && 'object' == typeof e && t(e)) {
							var a = new r()
							return (
								n(e).forEach(function(e) {
									if (!t(e)) throw TypeError()
									var r = n(e)
									if (2 !== r.length) throw TypeError()
									a.append(r[0], r[1])
								}),
								a
							)
						}
						return e && 'object' == typeof e
							? ((a = new r()),
								Object.keys(e).forEach(function(t) {
									a.set(t, e[t])
								}),
								a)
							: new r(e)
					}
				}
			})()
	})(self)
	!(function(e) {
		var t = Symbol('undef'),
			r = function a() {
				if (!(this instanceof a)) throw new TypeError('Constructor WeakMap requires "new"')
				var e = OrdinaryCreateFromConstructor(this, a.prototype, { _keys: [], _values: [], _es6WeakMap: !0 }),
					t = arguments.length > 0 ? arguments[0] : undefined
				if (null === t || t === undefined) return e
				var r = Get(e, 'set')
				if (!IsCallable(r)) throw new TypeError('WeakMap.prototype.set is not a function')
				try {
					for (var o = GetIterator(t); ; ) {
						var p = IteratorStep(o)
						if (!1 === p) return e
						var n = IteratorValue(p)
						if ('object' !== Type(n))
							try {
								throw new TypeError('Iterator value ' + n + ' is not an entry object')
							} catch (s) {
								return IteratorClose(o, s)
							}
						try {
							var i = Get(n, '0'),
								l = Get(n, '1')
							Call(r, e, [ i, l ])
						} catch (u) {
							return IteratorClose(o, u)
						}
					}
				} catch (u) {
					if (Array.isArray(t) || '[object Arguments]' === Object.prototype.toString.call(t) || t.callee) {
						var y,
							c = t.length
						for (y = 0; y < c; y++) (i = t[y][0]), (l = t[y][1]), Call(r, e, [ i, l ])
					}
				}
				return e
			}
		Object.defineProperty(r, 'prototype', { configurable: !1, enumerable: !1, writable: !1, value: {} }),
			CreateMethodProperty(r.prototype, 'constructor', r),
			CreateMethodProperty(r.prototype, 'delete', function(e) {
				var r = this
				if ('object' !== Type(r))
					throw new TypeError(
						'Method WeakMap.prototype.clear called on incompatible receiver ' + Object.prototype.toString.call(r)
					)
				if (!0 !== r._es6WeakMap)
					throw new TypeError(
						'Method WeakMap.prototype.clear called on incompatible receiver ' + Object.prototype.toString.call(r)
					)
				var o = r._keys
				if ('object' !== Type(e)) return !1
				for (var a = 0; a < o.length; a++)
					if (r._keys[a] !== t && SameValue(r._keys[a], e))
						return (this._keys[a] = t), (this._values[a] = t), (this._size = --this._size), !0
				return !1
			}),
			CreateMethodProperty(r.prototype, 'get', function p(e) {
				var r = this
				if ('object' !== Type(r))
					throw new TypeError(
						'Method WeakMap.prototype.get called on incompatible receiver ' + Object.prototype.toString.call(r)
					)
				if (!0 !== r._es6WeakMap)
					throw new TypeError(
						'Method WeakMap.prototype.get called on incompatible receiver ' + Object.prototype.toString.call(r)
					)
				var o = r._keys
				if ('object' !== Type(e)) return undefined
				for (var a = 0; a < o.length; a++) if (r._keys[a] !== t && SameValue(r._keys[a], e)) return r._values[a]
				return undefined
			}),
			CreateMethodProperty(r.prototype, 'has', function n(e) {
				var r = this
				if ('object' != typeof r)
					throw new TypeError(
						'Method WeakMap.prototype.has called on incompatible receiver ' + Object.prototype.toString.call(r)
					)
				if (!0 !== r._es6WeakMap)
					throw new TypeError(
						'Method WeakMap.prototype.has called on incompatible receiver ' + Object.prototype.toString.call(r)
					)
				var o = r._keys
				if ('object' !== Type(e)) return !1
				for (var a = 0; a < o.length; a++) if (r._keys[a] !== t && SameValue(r._keys[a], e)) return !0
				return !1
			}),
			CreateMethodProperty(r.prototype, 'set', function i(e, r) {
				var o = this
				if ('object' !== Type(o))
					throw new TypeError(
						'Method WeakMap.prototype.set called on incompatible receiver ' + Object.prototype.toString.call(o)
					)
				if (!0 !== o._es6WeakMap)
					throw new TypeError(
						'Method WeakMap.prototype.set called on incompatible receiver ' + Object.prototype.toString.call(o)
					)
				var a = o._keys
				if ('object' !== Type(e)) throw new TypeError('Invalid value used as weak map key')
				for (var p = 0; p < a.length; p++)
					if (o._keys[p] !== t && SameValue(o._keys[p], e)) return (o._values[p] = r), o
				var n = { '[[Key]]': e, '[[Value]]': r }
				return o._keys.push(n['[[Key]]']), o._values.push(n['[[Value]]']), o
			}),
			'name' in r ||
				Object.defineProperty(r, 'name', { configurable: !0, enumerable: !1, writable: !1, value: 'WeakMap' })
		try {
			CreateMethodProperty(e, 'WeakMap', r)
		} catch (o) {
			e.WeakMap = r
		}
	})(self)
	!(function(e) {
		var t = Symbol('undef'),
			r = function a() {
				if (!(this instanceof a)) throw new TypeError('Constructor WeakSet requires "new"')
				var e = OrdinaryCreateFromConstructor(this, a.prototype, { _values: [], _size: 0, _es6WeakSet: !0 }),
					t = arguments.length > 0 ? arguments[0] : undefined
				if (null === t || t === undefined) return e
				var r = Get(e, 'add')
				if (!IsCallable(r)) throw new TypeError('WeakSet.prototype.add is not a function')
				try {
					for (var o = GetIterator(t); ; ) {
						var n = IteratorStep(o)
						if (!1 === n) return e
						var l = IteratorValue(n)
						try {
							Call(r, e, [ l ])
						} catch (c) {
							return IteratorClose(o, c)
						}
					}
				} catch (c) {
					if (IsArray(t) || '[object Arguments]' === Object.prototype.toString.call(t) || t.callee) {
						var p,
							i = t.length
						for (p = 0; p < i; p++) Call(r, e, [ t[p] ])
					}
				}
				return e
			}
		Object.defineProperty(r, 'prototype', { configurable: !1, enumerable: !1, writable: !1, value: {} }),
			CreateMethodProperty(r.prototype, 'add', function n(e) {
				var r = this
				if ('object' !== Type(r))
					throw new TypeError(
						'Method WeakSet.prototype.add called on incompatible receiver ' + Object.prototype.toString.call(r)
					)
				if (!0 !== r._es6WeakSet)
					throw new TypeError(
						'Method WeakSet.prototype.add called on incompatible receiver ' + Object.prototype.toString.call(r)
					)
				if ('object' !== Type(e)) throw new TypeError('Invalid value used in weak set')
				for (var o = r._values, a = 0; a < o.length; a++) {
					var n = o[a]
					if (n !== t && SameValueZero(n, e)) return r
				}
				return r._values.push(e), r
			}),
			CreateMethodProperty(r.prototype, 'constructor', r),
			CreateMethodProperty(r.prototype, 'delete', function(e) {
				var r = this
				if ('object' !== Type(r))
					throw new TypeError(
						'Method WeakSet.prototype.delete called on incompatible receiver ' + Object.prototype.toString.call(r)
					)
				if (!0 !== r._es6WeakSet)
					throw new TypeError(
						'Method WeakSet.prototype.delete called on incompatible receiver ' + Object.prototype.toString.call(r)
					)
				if ('object' !== Type(e)) return !1
				for (var o = r._values, a = 0; a < o.length; a++) {
					var n = o[a]
					if (n !== t && SameValueZero(n, e)) return (o[a] = t), !0
				}
				return !1
			}),
			CreateMethodProperty(r.prototype, 'has', function l(e) {
				var r = this
				if ('object' !== Type(r))
					throw new TypeError(
						'Method WeakSet.prototype.has called on incompatible receiver ' + Object.prototype.toString.call(r)
					)
				if (!0 !== r._es6WeakSet)
					throw new TypeError(
						'Method WeakSet.prototype.has called on incompatible receiver ' + Object.prototype.toString.call(r)
					)
				var o = r._values
				if ('object' !== Type(e)) return !1
				for (var a = 0; a < o.length; a++) {
					var n = o[a]
					if (n !== t && SameValueZero(n, e)) return !0
				}
				return !1
			}),
			'name' in r ||
				Object.defineProperty(r, 'name', { configurable: !0, enumerable: !1, writable: !1, value: 'WeakSet' })
		try {
			CreateMethodProperty(e, 'WeakSet', r)
		} catch (o) {
			e.WeakSet = r
		}
	})(self)
})(
	('object' === typeof window && window) ||
		('object' === typeof self && self) ||
		('object' === typeof global && global) ||
		{}
)

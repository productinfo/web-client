! function(t, e) {
  "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.ImageResize = e() : t.ImageResize = e()
}(this, function() {
  return function(t) {
    function e(o) {
      if (n[o]) return n[o].exports;
      var r = n[o] = {
        i: o,
        l: !1,
        exports: {}
      };
      return t[o].call(r.exports, r, r.exports, e), r.l = !0, r.exports
    }
    var n = {};
    return e.m = t, e.c = n, e.i = function(t) {
      return t
    }, e.d = function(t, n, o) {
      e.o(t, n) || Object.defineProperty(t, n, {
        configurable: !1,
        enumerable: !0,
        get: o
      })
    }, e.n = function(t) {
      var n = t && t.__esModule ? function() {
        return t.default
      } : function() {
        return t
      };
      return e.d(n, "a", n), n
    }, e.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "", e(e.s = 38)
  }([function(t, e) {
    function n(t) {
      var e = typeof t;
      return null != t && ("object" == e || "function" == e)
    }
    t.exports = n
  }, function(t, e, n) {
    var o = n(22),
      r = "object" == typeof self && self && self.Object === Object && self,
      i = o || r || Function("return this")();
    t.exports = i
  }, function(t, e) {
    function n(t) {
      return null != t && "object" == typeof t
    }
    t.exports = n
  }, function(t, e, n) {
    function o(t) {
      var e = -1,
        n = null == t ? 0 : t.length;
      for (this.clear(); ++e < n;) {
        var o = t[e];
        this.set(o[0], o[1])
      }
    }
    var r = n(75),
      i = n(76),
      a = n(77),
      s = n(78),
      u = n(79);
    o.prototype.clear = r, o.prototype.delete = i, o.prototype.get = a, o.prototype.has = s, o.prototype.set = u, t.exports = o
  }, function(t, e, n) {
    function o(t, e) {
      for (var n = t.length; n--;)
        if (r(t[n][0], e)) return n;
      return -1
    }
    var r = n(8);
    t.exports = o
  }, function(t, e, n) {
    function o(t) {
      return null == t ? void 0 === t ? u : s : c && c in Object(t) ? i(t) : a(t)
    }
    var r = n(16),
      i = n(64),
      a = n(87),
      s = "[object Null]",
      u = "[object Undefined]",
      c = r ? r.toStringTag : void 0;
    t.exports = o
  }, function(t, e, n) {
    function o(t, e) {
      var n = t.__data__;
      return r(e) ? n["string" == typeof e ? "string" : "hash"] : n.map
    }
    var r = n(73);
    t.exports = o
  }, function(t, e, n) {
    var o = n(11),
      r = o(Object, "create");
    t.exports = r
  }, function(t, e) {
    function n(t, e) {
      return t === e || t !== t && e !== e
    }
    t.exports = n
  }, function(t, e, n) {
    "use strict";

    function o(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    n.d(e, "a", function() {
      return r
    });
    var r = function t(e) {
      o(this, t), this.onCreate = function() {}, this.onDestroy = function() {}, this.onUpdate = function() {}, this.overlay = e.overlay, this.img = e.img, this.options = e.options, this.requestUpdate = e.onUpdate
    }
  }, function(t, e, n) {
    function o(t, e, n) {
      "__proto__" == e && r ? r(t, e, {
        configurable: !0,
        enumerable: !0,
        value: n,
        writable: !0
      }) : t[e] = n
    }
    var r = n(21);
    t.exports = o
  }, function(t, e, n) {
    function o(t, e) {
      var n = i(t, e);
      return r(n) ? n : void 0
    }
    var r = n(48),
      i = n(65);
    t.exports = o
  }, function(t, e, n) {
    function o(t) {
      return null != t && i(t.length) && !r(t)
    }
    var r = n(13),
      i = n(30);
    t.exports = o
  }, function(t, e, n) {
    function o(t) {
      if (!i(t)) return !1;
      var e = r(t);
      return e == s || e == u || e == a || e == c
    }
    var r = n(5),
      i = n(0),
      a = "[object AsyncFunction]",
      s = "[object Function]",
      u = "[object GeneratorFunction]",
      c = "[object Proxy]";
    t.exports = o
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
    var o = n(11),
      r = n(1),
      i = o(r, "Map");
    t.exports = i
  }, function(t, e, n) {
    var o = n(1),
      r = o.Symbol;
    t.exports = r
  }, function(t, e) {
    function n(t, e, n) {
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
    t.exports = n
  }, function(t, e, n) {
    function o(t, e, n) {
      (void 0 === n || i(t[e], n)) && (void 0 !== n || e in t) || r(t, e, n)
    }
    var r = n(10),
      i = n(8);
    t.exports = o
  }, function(t, e, n) {
    function o(t, e, n, l, f) {
      t !== e && a(e, function(a, c) {
        if (u(a)) f || (f = new r), s(t, e, c, n, o, l, f);
        else {
          var p = l ? l(t[c], a, c + "", t, e, f) : void 0;
          void 0 === p && (p = a), i(t, c, p)
        }
      }, c)
    }
    var r = n(41),
      i = n(18),
      a = n(46),
      s = n(51),
      u = n(0),
      c = n(32);
    t.exports = o
  }, function(t, e, n) {
    function o(t, e) {
      return a(i(t, e, r), t + "")
    }
    var r = n(26),
      i = n(89),
      a = n(90);
    t.exports = o
  }, function(t, e, n) {
    var o = n(11),
      r = function() {
        try {
          var t = o(Object, "defineProperty");
          return t({}, "", {}), t
        } catch (t) {}
      }();
    t.exports = r
  }, function(t, e, n) {
    (function(e) {
      var n = "object" == typeof e && e && e.Object === Object && e;
      t.exports = n
    }).call(e, n(107))
  }, function(t, e, n) {
    var o = n(88),
      r = o(Object.getPrototypeOf, Object);
    t.exports = r
  }, function(t, e) {
    function n(t, e) {
      return !!(e = null == e ? o : e) && ("number" == typeof t || r.test(t)) && t > -1 && t % 1 == 0 && t < e
    }
    var o = 9007199254740991,
      r = /^(?:0|[1-9]\d*)$/;
    t.exports = n
  }, function(t, e) {
    function n(t) {
      var e = t && t.constructor;
      return t === ("function" == typeof e && e.prototype || o)
    }
    var o = Object.prototype;
    t.exports = n
  }, function(t, e) {
    function n(t) {
      return t
    }
    t.exports = n
  }, function(t, e, n) {
    var o = n(47),
      r = n(2),
      i = Object.prototype,
      a = i.hasOwnProperty,
      s = i.propertyIsEnumerable,
      u = o(function() {
        return arguments
      }()) ? o : function(t) {
        return r(t) && a.call(t, "callee") && !s.call(t, "callee")
      };
    t.exports = u
  }, function(t, e) {
    var n = Array.isArray;
    t.exports = n
  }, function(t, e, n) {
    (function(t) {
      var o = n(1),
        r = n(102),
        i = "object" == typeof e && e && !e.nodeType && e,
        a = i && "object" == typeof t && t && !t.nodeType && t,
        s = a && a.exports === i,
        u = s ? o.Buffer : void 0,
        c = u ? u.isBuffer : void 0,
        l = c || r;
      t.exports = l
    }).call(e, n(14)(t))
  }, function(t, e) {
    function n(t) {
      return "number" == typeof t && t > -1 && t % 1 == 0 && t <= o
    }
    var o = 9007199254740991;
    t.exports = n
  }, function(t, e, n) {
    var o = n(49),
      r = n(54),
      i = n(86),
      a = i && i.isTypedArray,
      s = a ? r(a) : o;
    t.exports = s
  }, function(t, e, n) {
    function o(t) {
      return a(t) ? r(t, !0) : i(t)
    }
    var r = n(43),
      i = n(50),
      a = n(12);
    t.exports = o
  }, function(t, e, n) {
    "use strict";
    e.a = {
      modules: ["DisplaySize", "Resize", 'Toolbar'],
      overlayStyles: {
        position: "absolute",
        boxSizing: "border-box",
        pointerEvents : "none"
      },
      handleStyles: {
        position: "absolute",
        height: "12px",
        width: "12px",
        backgroundColor: "#363636",
        border: "0px solid #000",
        boxSizing: "border-box",
        opacity: "1",
        boxShadow: "0 0.25rem 0.5rem rgba(0,0,0,0.2)",
        borderRadius: "2rem",
        pointerEvents : "all"
      },
      displayStyles: {
        position: "absolute",
        padding: "4px 8px",
        textAlign: "center",
        backgroundColor: "#363636",
        color: "#F5F5F5",
        border: "0px solid #000",
        boxSizing: "border-box",
        borderRadius: "1rem",
        opacity: "1",
        cursor: "default",
        fontSize: "0.7rem",
        boxShadow: "0 0.5rem 1rem rgba(0,0,0,0.2)",
        pointerEvents : "all"
      },
      toolbarStyles: {
        position: "absolute",
        top: "-12px",
        right: "0",
        left: "0",
        height: "0",
        minWidth: "100px",
        textAlign: "center",
        color: "#333",
        boxSizing: "border-box",
        cursor: "default",
        pointerEvents : "all"
      },
      toolbarButtonStyles: {
        display: "inline-block",
        width: "24px",
        height: "24px",
        background: "#363636",
        border: "0px solid #ccc",
        verticalAlign: "middle",
        pointerEvents : "all"
      },
      toolbarButtonSvgStyles: {
        fill: "#F5F5F5",
        stroke: "#F5F5F5",
        strokeWidth: "2",
        padding: "3px",
        width: "100%",
        pointerEvents : "all"
      }
    }
  }, function(t, e, n) {
    "use strict";

    function o(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function r(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function i(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var a = n(9);
    n.d(e, "a", function() {
      return s
    });
    var s = function(t) {
      function e() {
        var t, n, i, a;
        o(this, e);
        for (var s = arguments.length, u = Array(s), c = 0; c < s; c++) u[c] = arguments[c];
        return n = i = r(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [this].concat(u))), i.onCreate = function() {
          i.display = document.createElement("div"), Object.assign(i.display.style, i.options.displayStyles), i.overlay.appendChild(i.display)
        }, i.onDestroy = function() {}, i.onUpdate = function() {
          if (i.display && i.img) {
            var t = i.getCurrentSize();
            if (i.display.innerHTML = t.join(" &times; "), t[0] > 120 && t[1] > 30) Object.assign(i.display.style, {
              right: "1rem",
              bottom: "1rem",
              left: "auto"
            });
            else if ("right" == i.img.style.float) {
              var e = i.display.getBoundingClientRect();
              Object.assign(i.display.style, {
                right: "auto",
                bottom: "-" + (e.height + 4) + "px",
                left: "-" + (e.width + 4) + "px"
              })
            } else {
              var n = i.display.getBoundingClientRect();
              Object.assign(i.display.style, {
                right: "-" + (n.width + 4) + "px",
                bottom: "-" + (n.height + 4) + "px",
                left: "auto"
              })
            }
          }
        }, i.getCurrentSize = function() {
          return [i.img.getAttribute("width") || i.img.width, i.img.getAttribute("height") || i.img.height]
        }, a = n, r(i, a)
      }
      return i(e, t), e
    }(a.a)
  }, function(t, e, n) {
    "use strict";

    function o(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function r(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function i(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var a = n(9);
    n.d(e, "a", function() {
      return s
    });
    var s = function(t) {
      function e() {
        var t, n, i, a;
        o(this, e);
        for (var s = arguments.length, u = Array(s), c = 0; c < s; c++) u[c] = arguments[c];
        return n = i = r(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [this].concat(u))), i.onCreate = function() {
          i.boxes = [], i.addBox("nwse-resize"), i.addBox("nesw-resize"), i.addBox("nwse-resize"), i.addBox("nesw-resize"), i.positionBoxes()
        }, i.onDestroy = function() {
          i.setCursor("")
        }, i.positionBoxes = function() {
          var t = -parseFloat(i.options.handleStyles.width) / 2 + "px",
            e = -parseFloat(i.options.handleStyles.height) / 2 + "px";
          [{
            left: t,
            top: e
          }, {
            right: t,
            top: e
          }, {
            right: t,
            bottom: e
          }, {
            left: t,
            bottom: e
          }].forEach(function(t, e) {
            Object.assign(i.boxes[e].style, t)
          })
        }, i.addBox = function(t) {
          var e = document.createElement("div");
          Object.assign(e.style, i.options.handleStyles), 
          e.style.cursor = t, 
          e.style.width = i.options.handleStyles.width + "px", 
          e.style.height = i.options.handleStyles.height + "px", 
          e.addEventListener("mousedown", i.handleMousedown, !1), 
          i.overlay.appendChild(e), i.boxes.push(e)
        }, i.handleMousedown = function(t) {
          i.dragBox = t.target, 
          i.dragStartX = t.clientX, 
          i.dragStartY = t.clientY, 
          i.preDragWidth = i.img.width || i.img.naturalWidth, 
          i.preDragHeight = i.img.height || i.img.naturalHeight, 
          i.setCursor(i.dragBox.style.cursor), 
          document.addEventListener("mousemove", i.handleDrag, !1), 
          document.addEventListener("mouseup", i.handleMouseup, !1)
        }, i.handleMouseup = function() {
          i.setCursor(""), document.removeEventListener("mousemove", i.handleDrag), document.removeEventListener("mouseup", i.handleMouseup)
        }, i.handleDrag = function(t) {
          if (i.img) {
            var widthChange = t.clientX - i.dragStartX;
            var heightChange = t.clientY - i.dragStartY;

            var maxHeight = 99999999;  
            var maxWidth = 99999999;

            var aspectRatio = i.img.naturalWidth / i.img.naturalHeight;

            if (isPaperMode()) {
              // get the top offset of the image, measure remaining space on page, this will be our max height
              
              var topOffsetPX = i.img.offsetTop || paper.marginsPX;
              var paperOverflowPointPX = paper.heightPX - paper.marginsPX - 32; // -32 to get one more line's worth of space after it & account for margins
              maxHeight = paperOverflowPointPX - topOffsetPX; 
              maxWidth = paper.widthPX - paper.marginsPX - paper.marginsPX;
            }

            if (i.dragBox === i.boxes[0] || i.dragBox === i.boxes[3]) {

              i.img.width = Math.round((i.preDragWidth - widthChange) * aspectRatio);
              i.img.height = Math.round((i.preDragWidth - widthChange) / aspectRatio);
              
            } else {
              
              var newWidth = clamp(Math.round((i.preDragWidth + widthChange) * aspectRatio), 50, maxWidth);
              var newHeight = clamp(Math.round((i.preDragWidth + widthChange) / aspectRatio), 50, maxHeight) ;
              
              i.img.width = newWidth;
              i.img.height = newHeight;
              
              i.img.style.setProperty("--max-width", newWidth + "px");
              i.img.style.setProperty("--max-height", newHeight + "px");
              
              i.requestUpdate();
            }
          }
        }, i.setCursor = function(t) {
          [document.body, i.img].forEach(function(e) {
            e.style.cursor = t
          })
        }, a = n, r(i, a)
      }
      return i(e, t), e
    }(a.a)
  }, function(t, e, n) {
    "use strict";

    function o(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function r(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function i(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    var a = n(105),
      s = n.n(a),
      u = n(104),
      c = n.n(u),
      l = n(106),
      f = n.n(l),
      p = n(9);
    n.d(e, "a", function() {
      return b
    });
    var d = window.Quill.imports.parchment,
      h = new d.Attributor.Style("float", "float"),
      y = new d.Attributor.Style("margin", "margin"),
      v = new d.Attributor.Style("display", "display"),
      b = function(t) {
        function e() {
          var t, n, i, a;
          o(this, e);
          for (var u = arguments.length, l = Array(u), p = 0; p < u; p++) l[p] = arguments[p];
          return n = i = r(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [this].concat(l))), i.onCreate = function() {
            i.toolbar = document.createElement("div"), Object.assign(i.toolbar.style, i.options.toolbarStyles), i.overlay.appendChild(i.toolbar), i._defineAlignments(), i._addToolbarButtons()
          }, i.onDestroy = function() {}, i.onUpdate = function() {}, i._defineAlignments = function() {
            i.alignments = [{
              icon: s.a,
              apply: function() {
                v.add(i.img, "inline"), h.add(i.img, "left"), y.add(i.img, "0 1em 1em 0")
              },
              isApplied: function() {
                return "left" == h.value(i.img)
              }
            }, {
              icon: c.a,
              apply: function() {
                v.add(i.img, "block"), h.remove(i.img), y.add(i.img, "auto")
              },
              isApplied: function() {
                return "auto" == y.value(i.img)
              }
            }, {
              icon: f.a,
              apply: function() {
                v.add(i.img, "inline"), h.add(i.img, "right"), y.add(i.img, "0 0 1em 1em")
              },
              isApplied: function() {
                return "right" == h.value(i.img)
              }
            }]
          }, i._addToolbarButtons = function() {
            var t = [];
            i.alignments.forEach(function(e, n) {
              var o = document.createElement("span");
              t.push(o), o.innerHTML = e.icon, o.addEventListener("click", function() {
                t.forEach(function(t) {
                  return t.style.filter = ""
                }), e.isApplied() ? (h.remove(i.img), y.remove(i.img), v.remove(i.img)) : (i._selectButton(o), e.apply()), i.requestUpdate()
              }), Object.assign(o.style, i.options.toolbarButtonStyles), n > 0 && (o.style.borderLeftWidth = "0"), Object.assign(o.children[0].style, i.options.toolbarButtonSvgStyles), e.isApplied() && i._selectButton(o), i.toolbar.appendChild(o)
            })
          }, i._selectButton = function(t) {
            t.style.filter = "invert(10%)"
          }, a = n, r(i, a)
        }
        return i(e, t), e
      }(p.a)
  }, function(t, e, n) {
    var o = n(17),
      r = n(20),
      i = n(63),
      a = n(101),
      s = r(function(t) {
        return t.push(void 0, i), o(a, void 0, t)
      });
    t.exports = s
  }, function(t, e, n) {
    "use strict";

    function o(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var r = n(37),
      i = n.n(r),
      a = n(33),
      s = n(34),
      u = n(36),
      c = n(35),
      l = {
        DisplaySize: s.a,
        Toolbar: u.a,
        Resize: c.a
      },
      f = function t(e) {
        var n = this,
          r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        o(this, t), this.initializeModules = function() {
          n.removeModules(), n.modules = n.moduleClasses.map(function(t) {
            return new(l[t] || t)(n)
          }), n.modules.forEach(function(t) {
            t.onCreate()
          }), n.onUpdate()
        }, this.onUpdate = function() {
          n.repositionElements(), n.modules.forEach(function(t) {
            t.onUpdate()
          })
        }, this.removeModules = function() {
          n.modules.forEach(function(t) {
            t.onDestroy()
          }), n.modules = []
        }, this.handleClick = function(t) {
          if (t.target && t.target.tagName && "IMG" === t.target.tagName.toUpperCase() && t.target.getAttribute("src") !== "//:0") {
            if (n.img === t.target) return;
            n.img && n.hide(), n.show(t.target)
          } else n.img && n.hide()
        }, this.show = function(t) {
          n.img = t, n.showOverlay(), n.initializeModules()
        }, this.showOverlay = function() {
          n.overlay && n.hideOverlay(), n.quill.setSelection(null), n.setUserSelect("none"), document.addEventListener("keyup", n.checkImage, !0), n.quill.root.addEventListener("input", n.checkImage, !0), n.overlay = document.createElement("div"), n.overlay.className += "imageResizeOverlay", Object.assign(n.overlay.style, n.options.overlayStyles), n.quill.root.parentNode.appendChild(n.overlay), n.repositionElements()
        }, this.hideOverlay = function() {
          n.overlay && (n.quill.root.parentNode.removeChild(n.overlay), n.overlay = void 0, document.removeEventListener("keyup", n.checkImage), n.quill.root.removeEventListener("input", n.checkImage), n.setUserSelect(""))
        }, this.repositionElements = function() {
          if (n.overlay && n.img) {
            var t = n.quill.root.parentNode,
              e = n.img.getBoundingClientRect(),
              o = t.getBoundingClientRect();
            Object.assign(n.overlay.style, {
              left: e.left - o.left - 1 + t.scrollLeft + "px",
              top: e.top - o.top + t.scrollTop + "px",
              width: e.width + "px",
              height: e.height + "px"
            })
          }
        }, this.hide = function() {
          n.hideOverlay(), n.removeModules(), n.img = void 0
        }, this.setUserSelect = function(t) {
          ["userSelect", "mozUserSelect", "webkitUserSelect", "msUserSelect"].forEach(function(e) {
            n.quill.root.style[e] = t, document.documentElement.style[e] = t
          })
        }, this.checkImage = function(t) {
          if (n.img) {
            if (t.keyCode === 46 || t.keyCode === 8) {
              var foundImg = window.Quill.find(n.img);
              if (foundImg) {
                foundImg.deleteAt(0); 
                n.hide();
              }
            }
            if (t.keyCode === 13 || t.keyCode === 32) {
              var img = window.Quill.find(n.img);
              var imgIndex = n.quill.getIndex(img);
              n.quill.setSelection(imgIndex + 1);
              n.quill.insertText(imgIndex + 1, '\n', 'user');
              n.hide();
            }
          }
        }, this.quill = e;
        var s = !1;
        r.modules && (s = r.modules.slice()), this.options = i()({}, r, a.a), s !== !1 && (this.options.modules = s), document.execCommand("enableObjectResizing", !1, "false"), this.quill.root.addEventListener("click", this.handleClick, !1), this.quill.root.addEventListener('scroll', this.hide, !1), this.quill.root.parentNode.style.position = this.quill.root.parentNode.style.position || "relative", this.moduleClasses = this.options.modules, this.modules = []
      };
    e.default = f, window.Quill && window.Quill.register("modules/imageResize", f)
  }, function(t, e, n) {
    function o(t) {
      var e = -1,
        n = null == t ? 0 : t.length;
      for (this.clear(); ++e < n;) {
        var o = t[e];
        this.set(o[0], o[1])
      }
    }
    var r = n(66),
      i = n(67),
      a = n(68),
      s = n(69),
      u = n(70);
    o.prototype.clear = r, o.prototype.delete = i, o.prototype.get = a, o.prototype.has = s, o.prototype.set = u, t.exports = o
  }, function(t, e, n) {
    function o(t) {
      var e = -1,
        n = null == t ? 0 : t.length;
      for (this.clear(); ++e < n;) {
        var o = t[e];
        this.set(o[0], o[1])
      }
    }
    var r = n(80),
      i = n(81),
      a = n(82),
      s = n(83),
      u = n(84);
    o.prototype.clear = r, o.prototype.delete = i, o.prototype.get = a, o.prototype.has = s, o.prototype.set = u, t.exports = o
  }, function(t, e, n) {
    function o(t) {
      var e = this.__data__ = new r(t);
      this.size = e.size
    }
    var r = n(3),
      i = n(92),
      a = n(93),
      s = n(94),
      u = n(95),
      c = n(96);
    o.prototype.clear = i, o.prototype.delete = a, o.prototype.get = s, o.prototype.has = u, o.prototype.set = c, t.exports = o
  }, function(t, e, n) {
    var o = n(1),
      r = o.Uint8Array;
    t.exports = r
  }, function(t, e, n) {
    function o(t, e) {
      var n = a(t),
        o = !n && i(t),
        l = !n && !o && s(t),
        p = !n && !o && !l && c(t),
        d = n || o || l || p,
        h = d ? r(t.length, String) : [],
        y = h.length;
      for (var v in t) !e && !f.call(t, v) || d && ("length" == v || l && ("offset" == v || "parent" == v) || p && ("buffer" == v || "byteLength" == v || "byteOffset" == v) || u(v, y)) || h.push(v);
      return h
    }
    var r = n(53),
      i = n(27),
      a = n(28),
      s = n(29),
      u = n(24),
      c = n(31),
      l = Object.prototype,
      f = l.hasOwnProperty;
    t.exports = o
  }, function(t, e, n) {
    function o(t, e, n) {
      var o = t[e];
      s.call(t, e) && i(o, n) && (void 0 !== n || e in t) || r(t, e, n)
    }
    var r = n(10),
      i = n(8),
      a = Object.prototype,
      s = a.hasOwnProperty;
    t.exports = o
  }, function(t, e, n) {
    var o = n(0),
      r = Object.create,
      i = function() {
        function t() {}
        return function(e) {
          if (!o(e)) return {};
          if (r) return r(e);
          t.prototype = e;
          var n = new t;
          return t.prototype = void 0, n
        }
      }();
    t.exports = i
  }, function(t, e, n) {
    var o = n(62),
      r = o();
    t.exports = r
  }, function(t, e, n) {
    function o(t) {
      return i(t) && r(t) == a
    }
    var r = n(5),
      i = n(2),
      a = "[object Arguments]";
    t.exports = o
  }, function(t, e, n) {
    function o(t) {
      return !(!a(t) || i(t)) && (r(t) ? d : u).test(s(t))
    }
    var r = n(13),
      i = n(74),
      a = n(0),
      s = n(97),
      u = /^\[object .+?Constructor\]$/,
      c = Function.prototype,
      l = Object.prototype,
      f = c.toString,
      p = l.hasOwnProperty,
      d = RegExp("^" + f.call(p).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    t.exports = o
  }, function(t, e, n) {
    function o(t) {
      return a(t) && i(t.length) && !!s[r(t)]
    }
    var r = n(5),
      i = n(30),
      a = n(2),
      s = {};
    s["[object Float32Array]"] = s["[object Float64Array]"] = s["[object Int8Array]"] = s["[object Int16Array]"] = s["[object Int32Array]"] = s["[object Uint8Array]"] = s["[object Uint8ClampedArray]"] = s["[object Uint16Array]"] = s["[object Uint32Array]"] = !0, s["[object Arguments]"] = s["[object Array]"] = s["[object ArrayBuffer]"] = s["[object Boolean]"] = s["[object DataView]"] = s["[object Date]"] = s["[object Error]"] = s["[object Function]"] = s["[object Map]"] = s["[object Number]"] = s["[object Object]"] = s["[object RegExp]"] = s["[object Set]"] = s["[object String]"] = s["[object WeakMap]"] = !1, t.exports = o
  }, function(t, e, n) {
    function o(t) {
      if (!r(t)) return a(t);
      var e = i(t),
        n = [];
      for (var o in t)("constructor" != o || !e && u.call(t, o)) && n.push(o);
      return n
    }
    var r = n(0),
      i = n(25),
      a = n(85),
      s = Object.prototype,
      u = s.hasOwnProperty;
    t.exports = o
  }, function(t, e, n) {
    function o(t, e, n, o, g, x, m) {
      var _ = t[n],
        j = e[n],
        w = m.get(j);
      if (w) return void r(t, n, w);
      var O = x ? x(_, j, n + "", t, e, m) : void 0,
        S = void 0 === O;
      if (S) {
        var E = l(j),
          A = !E && p(j),
          z = !E && !A && v(j);
        O = j, E || A || z ? l(_) ? O = _ : f(_) ? O = s(_) : A ? (S = !1, O = i(j, !0)) : z ? (S = !1, O = a(j, !0)) : O = [] : y(j) || c(j) ? (O = _, c(_) ? O = b(_) : (!h(_) || o && d(_)) && (O = u(j))) : S = !1
      }
      S && (m.set(j, O), g(O, j, o, x, m), m.delete(j)), r(t, n, O)
    }
    var r = n(18),
      i = n(56),
      a = n(57),
      s = n(58),
      u = n(71),
      c = n(27),
      l = n(28),
      f = n(99),
      p = n(29),
      d = n(13),
      h = n(0),
      y = n(100),
      v = n(31),
      b = n(103);
    t.exports = o
  }, function(t, e, n) {
    var o = n(98),
      r = n(21),
      i = n(26),
      a = r ? function(t, e) {
        return r(t, "toString", {
          configurable: !0,
          enumerable: !1,
          value: o(e),
          writable: !0
        })
      } : i;
    t.exports = a
  }, function(t, e) {
    function n(t, e) {
      for (var n = -1, o = Array(t); ++n < t;) o[n] = e(n);
      return o
    }
    t.exports = n
  }, function(t, e) {
    function n(t) {
      return function(e) {
        return t(e)
      }
    }
    t.exports = n
  }, function(t, e, n) {
    function o(t) {
      var e = new t.constructor(t.byteLength);
      return new r(e).set(new r(t)), e
    }
    var r = n(42);
    t.exports = o
  }, function(t, e, n) {
    (function(t) {
      function o(t, e) {
        if (e) return t.slice();
        var n = t.length,
          o = c ? c(n) : new t.constructor(n);
        return t.copy(o), o
      }
      var r = n(1),
        i = "object" == typeof e && e && !e.nodeType && e,
        a = i && "object" == typeof t && t && !t.nodeType && t,
        s = a && a.exports === i,
        u = s ? r.Buffer : void 0,
        c = u ? u.allocUnsafe : void 0;
      t.exports = o
    }).call(e, n(14)(t))
  }, function(t, e, n) {
    function o(t, e) {
      var n = e ? r(t.buffer) : t.buffer;
      return new t.constructor(n, t.byteOffset, t.length)
    }
    var r = n(55);
    t.exports = o
  }, function(t, e) {
    function n(t, e) {
      var n = -1,
        o = t.length;
      for (e || (e = Array(o)); ++n < o;) e[n] = t[n];
      return e
    }
    t.exports = n
  }, function(t, e, n) {
    function o(t, e, n, o) {
      var a = !n;
      n || (n = {});
      for (var s = -1, u = e.length; ++s < u;) {
        var c = e[s],
          l = o ? o(n[c], t[c], c, n, t) : void 0;
        void 0 === l && (l = t[c]), a ? i(n, c, l) : r(n, c, l)
      }
      return n
    }
    var r = n(44),
      i = n(10);
    t.exports = o
  }, function(t, e, n) {
    var o = n(1),
      r = o["__core-js_shared__"];
    t.exports = r
  }, function(t, e, n) {
    function o(t) {
      return r(function(e, n) {
        var o = -1,
          r = n.length,
          a = r > 1 ? n[r - 1] : void 0,
          s = r > 2 ? n[2] : void 0;
        for (a = t.length > 3 && "function" == typeof a ? (r--, a) : void 0, s && i(n[0], n[1], s) && (a = r < 3 ? void 0 : a, r = 1), e = Object(e); ++o < r;) {
          var u = n[o];
          u && t(e, u, o, a)
        }
        return e
      })
    }
    var r = n(20),
      i = n(72);
    t.exports = o
  }, function(t, e) {
    function n(t) {
      return function(e, n, o) {
        for (var r = -1, i = Object(e), a = o(e), s = a.length; s--;) {
          var u = a[t ? s : ++r];
          if (n(i[u], u, i) === !1) break
        }
        return e
      }
    }
    t.exports = n
  }, function(t, e, n) {
    function o(t, e, n, a, s, u) {
      return i(t) && i(e) && (u.set(e, t), r(t, e, void 0, o, u), u.delete(e)), t
    }
    var r = n(19),
      i = n(0);
    t.exports = o
  }, function(t, e, n) {
    function o(t) {
      var e = a.call(t, u),
        n = t[u];
      try {
        t[u] = void 0
      } catch (t) {}
      var o = s.call(t);
      return e ? t[u] = n : delete t[u], o
    }
    var r = n(16),
      i = Object.prototype,
      a = i.hasOwnProperty,
      s = i.toString,
      u = r ? r.toStringTag : void 0;
    t.exports = o
  }, function(t, e) {
    function n(t, e) {
      return null == t ? void 0 : t[e]
    }
    t.exports = n
  }, function(t, e, n) {
    function o() {
      this.__data__ = r ? r(null) : {}, this.size = 0
    }
    var r = n(7);
    t.exports = o
  }, function(t, e) {
    function n(t) {
      var e = this.has(t) && delete this.__data__[t];
      return this.size -= e ? 1 : 0, e
    }
    t.exports = n
  }, function(t, e, n) {
    function o(t) {
      var e = this.__data__;
      if (r) {
        var n = e[t];
        return n === i ? void 0 : n
      }
      return s.call(e, t) ? e[t] : void 0
    }
    var r = n(7),
      i = "__lodash_hash_undefined__",
      a = Object.prototype,
      s = a.hasOwnProperty;
    t.exports = o
  }, function(t, e, n) {
    function o(t) {
      var e = this.__data__;
      return r ? void 0 !== e[t] : a.call(e, t)
    }
    var r = n(7),
      i = Object.prototype,
      a = i.hasOwnProperty;
    t.exports = o
  }, function(t, e, n) {
    function o(t, e) {
      var n = this.__data__;
      return this.size += this.has(t) ? 0 : 1, n[t] = r && void 0 === e ? i : e, this
    }
    var r = n(7),
      i = "__lodash_hash_undefined__";
    t.exports = o
  }, function(t, e, n) {
    function o(t) {
      return "function" != typeof t.constructor || a(t) ? {} : r(i(t))
    }
    var r = n(45),
      i = n(23),
      a = n(25);
    t.exports = o
  }, function(t, e, n) {
    function o(t, e, n) {
      if (!s(n)) return !1;
      var o = typeof e;
      return !!("number" == o ? i(n) && a(e, n.length) : "string" == o && e in n) && r(n[e], t)
    }
    var r = n(8),
      i = n(12),
      a = n(24),
      s = n(0);
    t.exports = o
  }, function(t, e) {
    function n(t) {
      var e = typeof t;
      return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
    }
    t.exports = n
  }, function(t, e, n) {
    function o(t) {
      return !!i && i in t
    }
    var r = n(60),
      i = function() {
        var t = /[^.]+$/.exec(r && r.keys && r.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : ""
      }();
    t.exports = o
  }, function(t, e) {
    function n() {
      this.__data__ = [], this.size = 0
    }
    t.exports = n
  }, function(t, e, n) {
    function o(t) {
      var e = this.__data__,
        n = r(e, t);
      return !(n < 0) && (n == e.length - 1 ? e.pop() : a.call(e, n, 1), --this.size, !0)
    }
    var r = n(4),
      i = Array.prototype,
      a = i.splice;
    t.exports = o
  }, function(t, e, n) {
    function o(t) {
      var e = this.__data__,
        n = r(e, t);
      return n < 0 ? void 0 : e[n][1]
    }
    var r = n(4);
    t.exports = o
  }, function(t, e, n) {
    function o(t) {
      return r(this.__data__, t) > -1
    }
    var r = n(4);
    t.exports = o
  }, function(t, e, n) {
    function o(t, e) {
      var n = this.__data__,
        o = r(n, t);
      return o < 0 ? (++this.size, n.push([t, e])) : n[o][1] = e, this
    }
    var r = n(4);
    t.exports = o
  }, function(t, e, n) {
    function o() {
      this.size = 0, this.__data__ = {
        hash: new r,
        map: new(a || i),
        string: new r
      }
    }
    var r = n(39),
      i = n(3),
      a = n(15);
    t.exports = o
  }, function(t, e, n) {
    function o(t) {
      var e = r(this, t).delete(t);
      return this.size -= e ? 1 : 0, e
    }
    var r = n(6);
    t.exports = o
  }, function(t, e, n) {
    function o(t) {
      return r(this, t).get(t)
    }
    var r = n(6);
    t.exports = o
  }, function(t, e, n) {
    function o(t) {
      return r(this, t).has(t)
    }
    var r = n(6);
    t.exports = o
  }, function(t, e, n) {
    function o(t, e) {
      var n = r(this, t),
        o = n.size;
      return n.set(t, e), this.size += n.size == o ? 0 : 1, this
    }
    var r = n(6);
    t.exports = o
  }, function(t, e) {
    function n(t) {
      var e = [];
      if (null != t)
        for (var n in Object(t)) e.push(n);
      return e
    }
    t.exports = n
  }, function(t, e, n) {
    (function(t) {
      var o = n(22),
        r = "object" == typeof e && e && !e.nodeType && e,
        i = r && "object" == typeof t && t && !t.nodeType && t,
        a = i && i.exports === r,
        s = a && o.process,
        u = function() {
          try {
            return s && s.binding && s.binding("util")
          } catch (t) {}
        }();
      t.exports = u
    }).call(e, n(14)(t))
  }, function(t, e) {
    function n(t) {
      return r.call(t)
    }
    var o = Object.prototype,
      r = o.toString;
    t.exports = n
  }, function(t, e) {
    function n(t, e) {
      return function(n) {
        return t(e(n))
      }
    }
    t.exports = n
  }, function(t, e, n) {
    function o(t, e, n) {
      return e = i(void 0 === e ? t.length - 1 : e, 0),
        function() {
          for (var o = arguments, a = -1, s = i(o.length - e, 0), u = Array(s); ++a < s;) u[a] = o[e + a];
          a = -1;
          for (var c = Array(e + 1); ++a < e;) c[a] = o[a];
          return c[e] = n(u), r(t, this, c)
        }
    }
    var r = n(17),
      i = Math.max;
    t.exports = o
  }, function(t, e, n) {
    var o = n(52),
      r = n(91),
      i = r(o);
    t.exports = i
  }, function(t, e) {
    function n(t) {
      var e = 0,
        n = 0;
      return function() {
        var a = i(),
          s = r - (a - n);
        if (n = a, s > 0) {
          if (++e >= o) return arguments[0]
        } else e = 0;
        return t.apply(void 0, arguments)
      }
    }
    var o = 800,
      r = 16,
      i = Date.now;
    t.exports = n
  }, function(t, e, n) {
    function o() {
      this.__data__ = new r, this.size = 0
    }
    var r = n(3);
    t.exports = o
  }, function(t, e) {
    function n(t) {
      var e = this.__data__,
        n = e.delete(t);
      return this.size = e.size, n
    }
    t.exports = n
  }, function(t, e) {
    function n(t) {
      return this.__data__.get(t)
    }
    t.exports = n
  }, function(t, e) {
    function n(t) {
      return this.__data__.has(t)
    }
    t.exports = n
  }, function(t, e, n) {
    function o(t, e) {
      var n = this.__data__;
      if (n instanceof r) {
        var o = n.__data__;
        if (!i || o.length < s - 1) return o.push([t, e]), this.size = ++n.size, this;
        n = this.__data__ = new a(o)
      }
      return n.set(t, e), this.size = n.size, this
    }
    var r = n(3),
      i = n(15),
      a = n(40),
      s = 200;
    t.exports = o
  }, function(t, e) {
    function n(t) {
      if (null != t) {
        try {
          return r.call(t)
        } catch (t) {}
        try {
          return t + ""
        } catch (t) {}
      }
      return ""
    }
    var o = Function.prototype,
      r = o.toString;
    t.exports = n
  }, function(t, e) {
    function n(t) {
      return function() {
        return t
      }
    }
    t.exports = n
  }, function(t, e, n) {
    function o(t) {
      return i(t) && r(t)
    }
    var r = n(12),
      i = n(2);
    t.exports = o
  }, function(t, e, n) {
    function o(t) {
      if (!a(t) || r(t) != s) return !1;
      var e = i(t);
      if (null === e) return !0;
      var n = f.call(e, "constructor") && e.constructor;
      return "function" == typeof n && n instanceof n && l.call(n) == p
    }
    var r = n(5),
      i = n(23),
      a = n(2),
      s = "[object Object]",
      u = Function.prototype,
      c = Object.prototype,
      l = u.toString,
      f = c.hasOwnProperty,
      p = l.call(Object);
    t.exports = o
  }, function(t, e, n) {
    var o = n(19),
      r = n(61),
      i = r(function(t, e, n, r) {
        o(t, e, n, r)
      });
    t.exports = i
  }, function(t, e) {
    function n() {
      return !1
    }
    t.exports = n
  }, function(t, e, n) {
    function o(t) {
      return r(t, i(t))
    }
    var r = n(59),
      i = n(32);
    t.exports = o
  }, function(t, e) {
    t.exports = '<svg viewbox="0 0 18 18">\n  <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line>\n  <line class="ql-stroke" x1="14" x2="4" y1="14" y2="14"></line>\n  <line class="ql-stroke" x1="12" x2="6" y1="4" y2="4"></line>\n</svg>'
  }, function(t, e) {
    t.exports = '<svg viewbox="0 0 18 18">\n  <line class="ql-stroke" x1="3" x2="15" y1="9" y2="9"></line>\n  <line class="ql-stroke" x1="3" x2="13" y1="14" y2="14"></line>\n  <line class="ql-stroke" x1="3" x2="9" y1="4" y2="4"></line>\n</svg>'
  }, function(t, e) {
    t.exports = '<svg viewbox="0 0 18 18">\n  <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line>\n  <line class="ql-stroke" x1="15" x2="5" y1="14" y2="14"></line>\n  <line class="ql-stroke" x1="15" x2="9" y1="4" y2="4"></line>\n</svg>'
  }, function(t, e) {
    var n;
    n = function() {
      return this
    }();
    try {
      n = n || Function("return this")() || (0, eval)("this")
    } catch (t) {
      "object" == typeof window && (n = window)
    }
    t.exports = n
  }])
});

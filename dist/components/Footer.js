function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
import React from "react";
import PropTypes from "prop-types";
import { injectIntl, intlShape } from "@edx/frontend-platform/i18n";
import { sendTrackEvent } from "@edx/frontend-platform/analytics";
import { ensureConfig } from "@edx/frontend-platform";
import { AppContext } from "@edx/frontend-platform/react";
import messages from "./Footer.messages";
import LanguageSelector from "./LanguageSelector";
ensureConfig(["LMS_BASE_URL", "LOGO_TRADEMARK_URL"], "Footer component");
var EVENT_NAMES = {
  FOOTER_LINK: "edx.bi.footer.link"
};
var SiteFooter = /*#__PURE__*/function (_React$Component) {
  function SiteFooter(props) {
    var _this;
    _classCallCheck(this, SiteFooter);
    _this = _callSuper(this, SiteFooter, [props]);
    _this.externalLinkClickHandler = _this.externalLinkClickHandler.bind(_this);
    return _this;
  }
  _inherits(SiteFooter, _React$Component);
  return _createClass(SiteFooter, [{
    key: "externalLinkClickHandler",
    value: function externalLinkClickHandler(event) {
      var label = event.currentTarget.getAttribute("href");
      var eventName = EVENT_NAMES.FOOTER_LINK;
      var properties = {
        category: "outbound_link",
        label: label
      };
      sendTrackEvent(eventName, properties);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        supportedLanguages = _this$props.supportedLanguages,
        onLanguageSelected = _this$props.onLanguageSelected,
        logo = _this$props.logo,
        intl = _this$props.intl;
      var showLanguageSelector = supportedLanguages.length > 0 && onLanguageSelected;
      var config = this.context.config;
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("script", {
        src: "https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"
      }), /*#__PURE__*/React.createElement("footer", {
        "class": "bg-white border-t-8 border-sky-500",
        "aria-labelledby": "footer-heading",
        style: "direction: rtl;"
      }, /*#__PURE__*/React.createElement("h2", {
        id: "footer-heading",
        "class": "sr-only"
      }, "Footer"), /*#__PURE__*/React.createElement("div", {
        "class": "mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32"
      }, /*#__PURE__*/React.createElement("div", {
        "class": "xl:grid xl:grid-cols-3 xl:gap-8"
      }, /*#__PURE__*/React.createElement("div", {
        "class": "space-y-8"
      }, /*#__PURE__*/React.createElement("img", {
        "class": "h-11",
        src: "https://iranacademia.com/wp-content/uploads/2022/01/IA_Logo_Fa.svg",
        alt: "Academix"
      }), /*#__PURE__*/React.createElement("p", {
        "class": "text-sm leading-6 text-gray-600"
      }, "\u0633\u0627\u062E\u062A\u0647 \u0648 \u067E\u0631\u062F\u0627\u062E\u062A\u0647 \u0634\u062F\u0647 \u0628\u0627 \u0639\u0634\u0642 \u0628\u0647 \u062F\u0627\u0646\u0634 \u0648 \u06AF\u0633\u062A\u0631\u0634 \u0627\u0646\u062F\u06CC\u0634\u0647 \u0627\u0646\u062A\u0642\u0627\u062F\u06CC \u2013 \u062A\u06CC\u0645 \u0637\u0631\u0627\u062D\u06CC \u0627\u06CC\u0631\u0627\u0646 \u0622\u06A9\u0627\u062F\u0645\u06CC\u0627"), /*#__PURE__*/React.createElement("div", {
        "class": "flex space-x-6"
      }, /*#__PURE__*/React.createElement("a", {
        href: "https://facebook.com/IranAcademia",
        "class": "text-gray-400 hover:text-gray-500 ml-4",
        target: "_blank"
      }, /*#__PURE__*/React.createElement("span", {
        "class": "sr-only"
      }, "Facebook"), /*#__PURE__*/React.createElement("svg", {
        "class": "h-6 w-6",
        fill: "currentColor",
        viewBox: "0 0 24 24",
        "aria-hidden": "true"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"
      }))), /*#__PURE__*/React.createElement("a", {
        href: "https://www.instagram.com/IranAcademia/",
        "class": "text-gray-400 hover:text-gray-500",
        target: "_blank"
      }, /*#__PURE__*/React.createElement("span", {
        "class": "sr-only"
      }, "Instagram"), /*#__PURE__*/React.createElement("svg", {
        "class": "h-6 w-6",
        fill: "currentColor",
        viewBox: "0 0 24 24",
        "aria-hidden": "true"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
      }))), /*#__PURE__*/React.createElement("a", {
        href: "https://twitter.com/IranAcademia",
        "class": "text-gray-400 hover:text-gray-500",
        target: "_blank"
      }, /*#__PURE__*/React.createElement("span", {
        "class": "sr-only"
      }, "Twitter"), /*#__PURE__*/React.createElement("svg", {
        "class": "h-6 w-6",
        fill: "currentColor",
        viewBox: "0 0 24 24",
        "aria-hidden": "true"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
      }))), /*#__PURE__*/React.createElement("a", {
        href: "https://www.youtube.com/c/IranAcademia",
        "class": "text-gray-400 hover:text-gray-500",
        target: "_blank"
      }, /*#__PURE__*/React.createElement("span", {
        "class": "sr-only"
      }, "YouTube"), /*#__PURE__*/React.createElement("svg", {
        "class": "h-6 w-6",
        fill: "currentColor",
        viewBox: "0 0 24 24",
        "aria-hidden": "true"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
      }))), /*#__PURE__*/React.createElement("a", {
        href: "https://t.me/iranacademia",
        "class": "text-gray-400 hover:text-gray-500",
        target: "_blank"
      }, /*#__PURE__*/React.createElement("span", {
        "class": "sr-only"
      }, "Telegram"), /*#__PURE__*/React.createElement("svg", {
        "class": "h-6 w-6",
        fill: "currentColor",
        viewBox: "0 0 24 24",
        "aria-hidden": "true"
      }, /*#__PURE__*/React.createElement("path", {
        "fill-rule": "evenodd",
        d: "M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z",
        "clip-rule": "evenodd"
      }))), /*#__PURE__*/React.createElement("a", {
        href: "https://podcasters.spotify.com/pod/show/iran-academia",
        "class": "text-gray-400 hover:text-gray-500",
        target: "_blank"
      }, /*#__PURE__*/React.createElement("span", {
        "class": "sr-only"
      }, "Spotify"), /*#__PURE__*/React.createElement("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "class": "h-6 w-6"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M19.098 10.638c-3.868-2.297-10.248-2.508-13.941-1.387-.593.18-1.22-.155-1.399-.748-.18-.593.154-1.22.748-1.4 4.239-1.287 11.285-1.038 15.738 1.605.533.317.708 1.005.392 1.538-.316.533-1.005.709-1.538.392zm-.126 3.403c-.272.44-.847.578-1.287.308-3.225-1.982-8.142-2.557-11.958-1.399-.494.15-1.017-.129-1.167-.623-.149-.495.13-1.016.624-1.167 4.358-1.322 9.776-.682 13.48 1.595.44.27.578.847.308 1.286zm-1.469 3.267c-.215.354-.676.465-1.028.249-2.818-1.722-6.365-2.111-10.542-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.804.562-.896 4.571-1.045 8.492-.595 11.655 1.338.353.215.464.676.248 1.028zm-5.503-17.308c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z"
      }))), /*#__PURE__*/React.createElement("a", {
        href: "mailto:contact@iranacademia.education",
        "class": "text-gray-400 hover:text-gray-500",
        target: "_blank"
      }, /*#__PURE__*/React.createElement("span", {
        "class": "sr-only"
      }, "Email"), /*#__PURE__*/React.createElement("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "class": "h-6 w-6"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z"
      }))))), /*#__PURE__*/React.createElement("div", {
        "class": "mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0"
      }, /*#__PURE__*/React.createElement("div", {
        "class": "md:grid md:grid-cols-2 md:gap-8"
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
        "class": "text-base font-semibold leading-6 text-gray-900"
      }, "\u0622\u0634\u0646\u0627\u06CC\u06CC \u0648 \u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC"), /*#__PURE__*/React.createElement("ul", {
        role: "list",
        "class": "mt-6 space-y-4"
      }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "https://iranacademia.com/about",
        "class": "text-base leading-6 text-gray-600 hover:text-gray-900",
        target: "_blank"
      }, "\u0622\u0634\u0646\u0627\u06CC\u06CC \u0628\u0627 \u0627\u06CC\u0631\u0627\u0646 \u0622\u06A9\u0627\u062F\u0645\u06CC\u0627")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "https://iranacademia.com/donation/",
        "class": "text-base leading-6 text-gray-600 hover:text-gray-900",
        target: "_blank"
      }, "\u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u0627\u0632 \u0627\u06CC\u0631\u0627\u0646 \u0622\u06A9\u0627\u062F\u0645\u06CC\u0627")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "https://iranacademia.com/privacy-policy/",
        "class": "text-base leading-6 text-gray-600 hover:text-gray-900",
        target: "_blank"
      }, "\u0633\u06CC\u0627\u0633\u062A \u0645\u062D\u0631\u0645\u0627\u0646\u06AF\u06CC")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "https://iranacademia.com/sitemap",
        "class": "text-base leading-6 text-gray-600 hover:text-gray-900",
        target: "_blank"
      }, "\u0646\u0642\u0634\u0647 \u0633\u0627\u06CC\u062A")))), /*#__PURE__*/React.createElement("div", {
        "class": "mt-10 md:mt-0"
      }, /*#__PURE__*/React.createElement("h3", {
        "class": "text-base font-semibold leading-6 text-gray-900"
      }, "\u0645\u0634\u0627\u0631\u06A9\u062A"), /*#__PURE__*/React.createElement("ul", {
        role: "list",
        "class": "mt-6 space-y-4"
      }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "https://iranacademia.com/press/submission",
        "class": "text-base leading-6 text-gray-600 hover:text-gray-900",
        target: "_blank"
      }, "\u0641\u0631\u0633\u062A\u0627\u062F\u0646 \u0645\u0637\u0644\u0628 \u0628\u0647 \u0698\u0648\u0631\u0646\u0627\u0644")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "https://iranacademia.com/press/submission",
        "class": "text-base leading-6 text-gray-600 hover:text-gray-900",
        target: "_blank"
      }, "\u0641\u0631\u0633\u062A\u0627\u062F\u0646 \u0645\u0637\u0644\u0628 (\u06A9\u0646\u0641\u0631\u0627\u0646\u0633)")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "https://iranacademia.com/press/submission",
        "class": "text-base leading-6 text-gray-600 hover:text-gray-900",
        target: "_blank"
      }, "\u062B\u0628\u062A \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0627\u0646\u062A\u0634\u0627\u0631 \u06A9\u062A\u0627\u0628")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "https://iranacademia.com/agora-submission/",
        "class": "text-base leading-6 text-gray-600 hover:text-gray-900",
        target: "_blank"
      }, "\u0627\u0646\u062A\u0634\u0627\u0631 \u062F\u0631 \u0622\u06AF\u0648\u0631\u0627"))))), /*#__PURE__*/React.createElement("div", {
        "class": "md:grid md:grid-cols-2 md:gap-8"
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
        "class": "text-base font-semibold leading-6 text-gray-900"
      }, "\u0646\u0627\u0645\u200C\u0646\u0648\u06CC\u0633\u06CC"), /*#__PURE__*/React.createElement("ul", {
        role: "list",
        "class": "mt-6 space-y-4"
      }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "https://iranacademia.com/academia/apply/",
        "class": "text-base leading-6 text-gray-600 hover:text-gray-900",
        target: "_blank"
      }, "\u0646\u0627\u0645\u200C\u0646\u0648\u06CC\u0633\u06CC \u062F\u0631 \u0628\u0631\u0646\u0627\u0645\u0647 \u062A\u062D\u0635\u06CC\u0644\u06CC")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "https://courses.academix.iranacademia.com/register",
        "class": "text-base leading-6 text-gray-600 hover:text-gray-900",
        target: "_blank"
      }, "\u0646\u0627\u0645\u200C\u0646\u0648\u06CC\u0633\u06CC \u062F\u0631 \u0622\u06A9\u0627\u062F\u0645\u06CC\u06A9\u0633")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
        href: "https://iranacademia.com/newsletter-subscription/",
        "class": "text-base leading-6 text-gray-600 hover:text-gray-900",
        target: "_blank"
      }, "\u0646\u0627\u0645\u200C\u0646\u0648\u06CC\u0633\u06CC \u062F\u0631 \u062E\u0628\u0631\u0646\u0627\u0645\u0647")))), /*#__PURE__*/React.createElement("div", {
        "class": "mt-10 md:mt-0"
      }, /*#__PURE__*/React.createElement("ul", {
        "class": ""
      }, /*#__PURE__*/React.createElement("h3", {
        "class": "text-base font-semibold leading-6 text-gray-900 mb-4"
      }, "\u0627\u067E\u0644\u06CC\u06A9\u06CC\u0634\u0646 \u0647\u0627\u06CC \u0622\u06A9\u0627\u062F\u0645\u06CC\u06A9\u0633"), /*#__PURE__*/React.createElement("a", {
        href: "https://play.google.com/store/apps/details?id=org.academix.mobile",
        "class": "fa fa-android text-base leading-6 text-gray-600 hover:text-gray-900",
        target: "_blank",
        style: "font-size: 2.8rem !important;padding: 20px;"
      }), /*#__PURE__*/React.createElement("a", {
        href: "https://apps.apple.com/us/app/academix-persian-moocs/id1447267897?ls=1",
        "class": "fa fa-apple text-base leading-6 text-gray-600 hover:text-gray-900",
        target: "_blank",
        style: "font-size: 2.8rem !important;padding: 20px;"
      })))))), /*#__PURE__*/React.createElement("div", {
        "class": "mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24"
      }, /*#__PURE__*/React.createElement("p", {
        "class": "text-sm leading-5 text-gray-500"
      }, "\u06F2\u06F0\u06F1\u06F2 \u2013 \u06F2\u06F0\u06F2\u06F4 \xA9 \u0627\u06CC\u0631\u0627\u0646 \u0622\u06A9\u0627\u062F\u0645\u06CC\u0627")))), /*#__PURE__*/React.createElement("div", {
        "class": "bg-gray-900",
        style: "direction: ltr;"
      }, /*#__PURE__*/React.createElement("div", {
        "class": " max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8 "
      }, /*#__PURE__*/React.createElement("div", {
        "class": "flex justify-center space-x-6 md:order-2"
      }, /*#__PURE__*/React.createElement("a", {
        href: "https://cubite.io",
        "class": "text-gray-400 hover:text-gray-500"
      }, /*#__PURE__*/React.createElement("span", {
        "class": "sr-only"
      }, "Cubite"), /*#__PURE__*/React.createElement("img", {
        "class": "h-16",
        src: "https://cubite.s3.amazonaws.com/cubite_log_white.png",
        alt: "cubite logo"
      })), /*#__PURE__*/React.createElement("a", {
        href: "https://open.edx.org",
        "class": "text-gray-400 hover:text-gray-500"
      }, /*#__PURE__*/React.createElement("span", {
        "class": "sr-only"
      }, "Twitter"), /*#__PURE__*/React.createElement("img", {
        "class": "h-16",
        src: "https://files.edx.org/openedx-logos/open-edx-logo-tag-dark.png",
        alt: "openedx logo"
      }))), /*#__PURE__*/React.createElement("div", {
        "class": "mt-8 md:mt-0 md:order-1"
      }, /*#__PURE__*/React.createElement("p", {
        "class": "text-center text-base text-gray-400"
      }, "edX, Open edX and the edX and Open edX logos are trademarks or registered trademarks of edX Inc.")))));
    }
  }]);
}(React.Component);
SiteFooter.contextType = AppContext;
SiteFooter.propTypes = {
  intl: intlShape.isRequired,
  logo: PropTypes.string,
  onLanguageSelected: PropTypes.func,
  supportedLanguages: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  }))
};
SiteFooter.defaultProps = {
  logo: undefined,
  onLanguageSelected: undefined,
  supportedLanguages: []
};
export default injectIntl(SiteFooter);
export { EVENT_NAMES };
//# sourceMappingURL=Footer.js.map
webpackHotUpdate("main",{

/***/ "./src/views/ContactPage/Sections/ContactForm.js":
/*!*******************************************************!*\
  !*** ./src/views/ContactPage/Sections/ContactForm.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContactForm; });
/* harmony import */ var _Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emailjs-com */ "./node_modules/emailjs-com/source/index.js");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "./node_modules/@material-ui/core/esm/InputAdornment/index.js");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Icon */ "./node_modules/@material-ui/core/esm/Icon/index.js");
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Email */ "./node_modules/@material-ui/icons/Email.js");
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/People */ "./node_modules/@material-ui/icons/People.js");
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/Grid/GridContainer.js */ "./src/components/Grid/GridContainer.js");
/* harmony import */ var _components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/Grid/GridItem.js */ "./src/components/Grid/GridItem.js");
/* harmony import */ var _components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/CustomButtons/Button.js */ "./src/components/CustomButtons/Button.js");
/* harmony import */ var _components_Card_Card_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/Card/Card.js */ "./src/components/Card/Card.js");
/* harmony import */ var _components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/Card/CardBody.js */ "./src/components/Card/CardBody.js");
/* harmony import */ var _components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/Card/CardHeader.js */ "./src/components/Card/CardHeader.js");
/* harmony import */ var _components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../components/Card/CardFooter.js */ "./src/components/Card/CardFooter.js");
/* harmony import */ var _components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../components/CustomInput/CustomInput.js */ "./src/components/CustomInput/CustomInput.js");
/* harmony import */ var _assets_jss_material_kit_react_views_loginPage_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../assets/jss/material-kit-react/views/loginPage.js */ "./src/assets/jss/material-kit-react/views/loginPage.js");

var _jsxFileName = "/Users/adhigunarsa/Web-Development/gardening-site/src/views/ContactPage/Sections/ContactForm.js";

 // @material-ui/core components



 // @material-ui/icons


 // core components










var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(_assets_jss_material_kit_react_views_loginPage_js__WEBPACK_IMPORTED_MODULE_16__["default"]);
function ContactForm() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState("cardHidden"),
      _React$useState2 = Object(_Users_adhigunarsa_Web_Development_gardening_site_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      cardAnimaton = _React$useState2[0],
      setCardAnimation = _React$useState2[1];

  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  var classes = useStyles();

  function sendEmail(e) {
    e.preventDefault();
    emailjs_com__WEBPACK_IMPORTED_MODULE_2___default.a.sendForm('gmail', 'template_nBPVOlal', e.target, 'user_y6S4Mel3oZRuqVXEnXP6G').then(function (result) {
      console.log(result.text);
    }, function (error) {
      console.log(error.text);
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    justify: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
    xs: 12,
    sm: 12,
    md: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Card_Card_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: classes[cardAnimaton],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    className: "contact-form ".concat(classes.form),
    onSubmit: sendEmail,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Card_CardHeader_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
    color: "primary",
    className: classes.cardHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 33
    }
  }, "Contact us")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "hidden",
    name: "contact_number",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 29
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    labelText: "First Name...",
    id: "first",
    type: "text",
    name: "user_name",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      type: "text",
      endAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_4__["default"], {
        position: "end",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 45
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_7___default.a, {
        className: classes.inputIconsColor,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 49
        }
      }))
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 33
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    labelText: "Email...",
    id: "email",
    type: "email",
    name: "user_email",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      type: "email",
      endAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_4__["default"], {
        position: "end",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 45
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_6___default.a, {
        className: classes.inputIconsColor,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 49
        }
      }))
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 33
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_CustomInput_CustomInput_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
    labelText: "Message",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      type: "text",
      endAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_4__["default"], {
        position: "end",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 45
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: classes.inputIconsColor,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 49
        }
      }, "lock_outline")),
      autoComplete: "off"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 33
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Card_CardFooter_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.cardFooter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    simple: true,
    color: "primary",
    size: "lg",
    type: "submit",
    value: "Send",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 33
    }
  }, "Get started"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "submit",
    value: "Send",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 33
    }
  }))))));
}

/***/ })

})
//# sourceMappingURL=main.cbb12302323caf918dac.hot-update.js.map

require("core-js/modules/es.symbol.description.js");

var _react = _interopRequireDefault(require("react"));

require("./Slider2.css");

var _md = require("react-icons/md");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ReactCardSlider2 = props => {

    function clicko(id){
            window.location.href=`/product/${id}`
    }

  const slideLeft = () => {
    var slider = document.getElementById("slider1");
    slider.scrollLeft = slider.scrollLeft - 340;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider1");
    slider.scrollLeft = slider.scrollLeft + 340;
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "main-slider-container"
  }, /*#__PURE__*/_react.default.createElement(_md.MdChevronLeft, {
    size: 40,
    className: "slider-icon left1",
    onClick: slideLeft
  }), /*#__PURE__*/_react.default.createElement("div", {
    id: "slider1"
  }, props.slides.map((slide, index) => {
    return /*#__PURE__*/_react.default.createElement("div",{
      className: "slider-card",
      key: index,
      onClick: () => clicko(slide.id) ,
      
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "slider-card-image",
      style: {
        backgroundImage: "url(".concat(slide.imageURL, ")"),
        backgroundSize: 'cover'
      },
    }), /*#__PURE__*/_react.default.createElement("p", {
      className: "slider-card-title"
    }, slide.title), /*#__PURE__*/
      _react.default.createElement("p", {
        className: "slider-card-description"
      }, "Price " + "₹" + slide.price));
  })), /*#__PURE__*/_react.default.createElement(_md.MdChevronRight, {
    size: 40,
    className: "slider-icon right1",
    onClick: slideRight
  }));
};

export default ReactCardSlider2
"use strict";
let multiItemSlider = (function () {
  return function (selector, config) {
    let _mainElement = document.querySelector(selector);
    let _sliderWrapper = _mainElement.querySelector(".slider_wrapper");
    let _sliderItems = _mainElement.querySelectorAll(".slider_item");
    let _sliderControls = _mainElement.querySelectorAll(".slider_control");
    let _sliderControlLeft = _mainElement.querySelector(".slider_control_left");
    let _sliderControlRight = _mainElement.querySelector(
      ".slider_control_right"
    );
    let _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width);
    let _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width);
    let _positionLeftItem = 0;
    let _transform = 0;
    let _step = (_itemWidth / _wrapperWidth) * 100 * 3;
    let _items = [];
    _sliderItems.forEach(function (item, index) {
      _items.push({ item: item, position: index, transform: 0 });
    });
    let position = {
      getMin: 0,
      getMax: _items.length - 1,
    };
    let _transformItem = function (direction) {
      if (direction === "right") {
        if (
          _positionLeftItem + _wrapperWidth / _itemWidth - 1 >=
          position.getMax
        ) {
          return;
        }
        if (!_sliderControlLeft.classList.contains("slider_control_show")) {
          _sliderControlLeft.classList.add("slider_control_show");
        }
        if (
          _sliderControlRight.classList.contains("slider_control_show") &&
          _positionLeftItem + _wrapperWidth / _itemWidth >= position.getMax
        ) {
          _sliderControlRight.classList.remove("slider_control_show");
        }
        _positionLeftItem++;
        _transform -= _step;
      }
      if (direction === "left") {
        if (_positionLeftItem <= position.getMin) {
          return;
        }
        if (!_sliderControlRight.classList.contains("slider_control_show")) {
          _sliderControlRight.classList.add("slider_control_show");
        }
        if (
          _sliderControlLeft.classList.contains("slider_control_show") &&
          _positionLeftItem - 1 <= position.getMin
        ) {
          _sliderControlLeft.classList.remove("slider_control_show");
        }
        _positionLeftItem--;
        _transform += _step;
      }
      _sliderWrapper.style.transform = "translateX(" + _transform + "%)";
    };
    let _controlClick = function (e) {
      if (e.target.classList.contains("slider_control")) {
        e.preventDefault();
        let direction = e.target.classList.contains("slider_control_right")
          ? "right"
          : "left";
        _transformItem(direction);
      }
    };

    let _setUpListeners = function () {
      _sliderControls.forEach(function (item) {
        item.addEventListener("click", _controlClick);
      });
    };
    _setUpListeners();
    return {
      right: function () {
        _transformItem("right");
      },
      left: function () {
        _transformItem("left");
      },
    };
  };
})();
let slider = multiItemSlider(".slider");

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = ReactBootstrap.Button;
var REDEWENDUNG = 'REDEWENDUNG';
var ZITAT = 'ZITAT';
var zitatUrl = "data/zitate.json";
var redewendungUrl = "data/redewendungen.json";

function preload(arrayOfImages) {
  $(arrayOfImages).each(function () {
    $('<img />').attr('src', this).appendTo('body').css('display', 'none');
  });
}

var backdrops = ['images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg', 'images/image4.jpg'];

preload(backdrops);

$('body').css('background-image', 'url(' + backdrops[Math.floor(Math.random() * backdrops.length)] + ')');

var Presentational = function (_React$Component) {
  _inherits(Presentational, _React$Component);

  function Presentational(props) {
    _classCallCheck(this, Presentational);

    var _this = _possibleConstructorReturn(this, (Presentational.__proto__ || Object.getPrototypeOf(Presentational)).call(this, props));

    _this.state = {
      error: null,
      isLoaded: false,
      type: REDEWENDUNG,
      index: 0,
      items: []
    };
    _this.updateIndex = _this.updateIndex.bind(_this);
    _this.selectZitate = _this.selectZitate.bind(_this);
    _this.selectRedewendungen = _this.selectRedewendungen.bind(_this);
    _this.getData = _this.getData.bind(_this);
    _this.parseTweetText = _this.parseTweetText.bind(_this);
    return _this;
  }

  _createClass(Presentational, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.getData();
    }
  }, {
    key: 'getData',
    value: function getData() {
      var _this2 = this;

      var jsonUrl = void 0;
      var jsonArrayName = void 0;
      if (this.state.type == ZITAT) {
        jsonUrl = zitatUrl;
        jsonArrayName = 'Zitate';
      } else {
        jsonUrl = redewendungUrl;
        jsonArrayName = 'Redewendungen';
      }
      fetch(jsonUrl).then(function (res) {
        return res.json();
      }).then(function (result) {
        _this2.setState({
          isLoaded: true,
          items: result[jsonArrayName],
          index: Math.floor(Math.random() * result[jsonArrayName].length)
        });
      }, function (error) {
        _this2.setState({
          isLoaded: false,
          error: error
        });
      });
    }
  }, {
    key: 'updateIndex',
    value: function updateIndex() {
      $('body').css('background-image', 'url(' + backdrops[Math.floor(Math.random() * backdrops.length)] + ')');
      this.setState({
        index: Math.floor(Math.random() * this.state.items.length)
      });
    }
  }, {
    key: 'selectZitate',
    value: function selectZitate() {
      var _this3 = this;

      this.setState({
        type: ZITAT
      }, function () {
        _this3.getData();
      });
    }
  }, {
    key: 'selectRedewendungen',
    value: function selectRedewendungen() {
      var _this4 = this;

      this.setState({
        type: REDEWENDUNG
      }, function () {
        _this4.getData();
      });
    }
  }, {
    key: 'parseTweetText',
    value: function parseTweetText(item) {
      if (this.state.type == REDEWENDUNG) {
        var result = item.Redewendung + ' - ' + item.Bedeutung;
        result = result.replace(/\s/g, '%20');
        return result;
      } else {
        var _result = '"' + item.Zitat + '"' + ' - ' + item.Autor;
        _result = _result.replace(/\s/g, '%20');
        return _result;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          error = _state.error,
          isLoaded = _state.isLoaded,
          items = _state.items,
          index = _state.index;

      if (error) {
        return React.createElement(
          'div',
          null,
          'Error! ',
          error.message
        );
      }
      if (!isLoaded) {
        return React.createElement(
          'h1',
          { style: { width: '33vw', height: '45vh' } },
          'Loading....'
        );
      } else {
        var twitterUrl = 'https://twitter.com/intent/tweet?text=';
        twitterUrl = twitterUrl.concat(this.parseTweetText(items[index]));

        if (this.state.type == ZITAT) {
          return React.createElement(
            'div',
            { id: 'container' },
            React.createElement(
              'div',
              { 'class': 'toggle' },
              React.createElement('input', { id: 'redewendung-toggle', name: 'toggle-button', type: 'radio', 'class': 'option', onClick: this.selectRedewendungen }),
              React.createElement(
                'label',
                { 'for': 'redewendung-toggle' },
                'Redewendung'
              ),
              React.createElement('input', { id: 'zitat-toggle', name: 'toggle-button', type: 'radio', 'class': 'option', checked: true }),
              React.createElement(
                'label',
                { 'for': 'zitat-toggle' },
                'Zitat'
              )
            ),
            React.createElement(
              'div',
              { id: 'main-card' },
              React.createElement(
                'div',
                { id: 'contents' },
                React.createElement(
                  'div',
                  { id: 'zitat' },
                  React.createElement(
                    'p',
                    null,
                    React.createElement(
                      'mark',
                      null,
                      '"',
                      items[index].Zitat,
                      '"'
                    )
                  )
                ),
                React.createElement(
                  'div',
                  { id: 'autor' },
                  React.createElement(
                    'p',
                    null,
                    React.createElement(
                      'mark',
                      null,
                      '- ',
                      items[index].Autor
                    )
                  )
                ),
                React.createElement(
                  'div',
                  { id: 'buttons' },
                  React.createElement(
                    'a',
                    {
                      'class': 'twitter-share-button',
                      title: 'Tweet diese Redewendung!',
                      href: twitterUrl,
                      target: '_top',
                      rel: 'noopener noreferrer',
                      id: 'tweet-redewendung'
                    },
                    React.createElement('i', { id: 'icon', 'class': 'fa fa-twitter' })
                  ),
                  React.createElement(
                    Button,
                    {
                      id: 'new-button',
                      variant: 'light',
                      onClick: this.updateIndex },
                    'Neues Zitat'
                  )
                )
              )
            )
          );
        } else {
          return React.createElement(
            'div',
            { id: 'container' },
            React.createElement(
              'div',
              { 'class': 'toggle' },
              React.createElement('input', { id: 'redewendung-toggle', name: 'toggle-button', type: 'radio', 'class': 'option', checked: true }),
              React.createElement(
                'label',
                { 'for': 'redewendung-toggle' },
                'Redewendung'
              ),
              React.createElement('input', { id: 'zitat-toggle', name: 'toggle-button', type: 'radio', 'class': 'option', onClick: this.selectZitate }),
              React.createElement(
                'label',
                { 'for': 'zitat-toggle' },
                'Zitat'
              )
            ),
            React.createElement(
              'div',
              { id: 'main-card' },
              React.createElement(
                'div',
                { id: 'contents' },
                React.createElement(
                  'div',
                  { id: 'redewendung' },
                  React.createElement(
                    'h2',
                    null,
                    items[index].Redewendung
                  )
                ),
                React.createElement('hr', null),
                React.createElement(
                  'div',
                  { id: 'bedeutung' },
                  React.createElement(
                    'p',
                    null,
                    items[index].Bedeutung
                  )
                ),
                React.createElement(
                  'div',
                  { id: 'buttons' },
                  React.createElement(
                    'a',
                    {
                      'class': 'twitter-share-button',
                      title: 'Tweet diese Redewendung!',
                      href: twitterUrl,
                      target: '_top',
                      rel: 'noopener noreferrer',
                      id: 'tweet-redewendung'
                    },
                    React.createElement('i', { id: 'icon', 'class': 'fa fa-twitter' })
                  ),
                  React.createElement(
                    Button,
                    {
                      id: 'new-button',
                      variant: 'light',
                      onClick: this.updateIndex },
                    'Neue Redewendung'
                  )
                )
              )
            )
          );
        }
      }
    }
  }]);

  return Presentational;
}(React.Component);

;

ReactDOM.render(React.createElement(Presentational, null), document.getElementById('app'));
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = ReactBootstrap.Button;

function preload(arrayOfImages) {
  $(arrayOfImages).each(function () {
    $('<img />').attr('src', this).appendTo('body').css('display', 'none');
  });
}

/*let backdrops = ['https://lh3.googleusercontent.com/V7skn2zXKeFdYDlHJ2PthIgtEuHu-1PiOPCx_-zk25qOETOss6g2VNxcIYVulxrDZYEOL3OPdo4RJQQBblmleA9SMPQogKHwUW09O8LiJ6eckXNbvS2sfSW6jOnMeX7sBbLURpCr06CVjmKvgDmP-8SwN_FvUIAGPYJO5NUpn-Ztf_PdETtAm8D_81rjg7HnGnJsD-zpwbsK4JnaIXEBPGjuRQUjtPFub6DYLJvBU6rzh_W8ooy1eXlWR_pAPdBeFACP4hJ3twAvvCWWL4m5pv8hihxKikUqEB6y8qVNkar0lKZmX0cVFN4KrMMdy9voTtqVBk85obiYV67NKW4dbx5Fsqb__0mlNpDSUrI99hypoRe8MjF4a1enIh2J3M7oG36caXq0OnofppuiREOoaNThExeU1tywFmIKtQ5-0ZKVhuXMA5SYj0fdTbzQffiNNHezM1pTJEzojuNPqcuA1sM-0JRvBV8ZfRhy3crV7T2P5fLBLUl8TdPBcWEtD26uWc9BjFR6ECD169StXrHA5DZ2tIzeFS0zRSHZjd_jiDAZPTzIRr4Bx0KxSdIEQzHoMB6nFx7phqgFdmx5waGm92xpSDNHHqwsYwjC0kxTaliULB264mk6Un_OWoUkrJ1Z_IVJapStNy1TKQ_86KNNpObE667Vx1I8fsWd5pQr2Dwb3DquezVwtlnwY9ltr_8qXsM0ByTHj83fb8nupryHQQa5=w1298-h730-no?authuser=0',
                 
'https://lh3.googleusercontent.com/K3n-SD9H6GEZu-7vQeMePJoEHckxSohaAT_ajjwaf4aJa2C5ie6Ch8KP9o4bj-lsMuWaB5yhkd-9790Vjkr812JL1z4qrnGxqfzsmLz-H9-HTQhn00S8_ljvGOceiXhga8RBw-beOc6FyBAGG7bIRS3n9JhsAxvgkhYLMeAekHu8Kl3jCyZi-49SjdUJXG4rjT2hLaq4l_puRbX-CdztxDTPSh_EJSQM5JJfluX0pzIlDlbS_9yxvT2rOcXXE68nlxRmiPPaJpmwpnh0Qt2lXUTzWWJw9NjudkDxV0mTxdqnJ1knrEizucKPcFK6dOTGCte7dBCsfIwQlx5Rh0TCLMascwe_wfgqvG4Q97tUegNxiw4YfbiX3qMFR8N6Jxv5thsPaW-5GBeL7Ezy2fOYvA42gF7aoqxrcxTEpWBqbZPtElWGASCguP5yXsi56Xk3xERuvwLUyW_8_ujVhyRM7sNXCT6ysXq-Mk8LEje-A_XWHxYtJjavgNodT_1soUPY7AT7Vf2LKj3cBv2A1Jgm83i1Hub3aLXlw5lVXJJf0EJ4lPuB-tQ8XmjZtATjfwjvzCuPiIfayqGcaGj-Vyos3QGZwbrzZNZ-t2qXKadVBs-2qAORQv4ieeT_QOgxO3PBzuMIuCAdIp31o_pT6J9RPYdH2Qowzrlhf47AcKwUNX3sKAhmeEoLzslDqQi_fUh5cPl9ALIh-ODtTz9QYWy73o1P=w1298-h730-no?authuser=0',
                 
'https://lh3.googleusercontent.com/BflUlTPuUyUO7gsIxQWp3P9tM9PHk-wkJvyxfTrPao3UP2eku3hF0-gltlIZheW07p-qn1_0kUTiUmKbi3ZoVUc_1ZX8ohaVzV23gqTvsH4u28pWwD_FLXB1jmh488_72aFJiwVYTUIOdYKEjDgEoJDAu9tAD6rMzKt4_HqLqHSDcxVE1uDY2KH2k3ht-w3XJw_T0F3nEfk5GTa1yc2r0jYFGWuQXWj2JTaLThENh8bEJsbZWLV1xs4G8jkgEzFJgGf7pi9zcRq3u-lACCsgwdccq5AymLqIQyJtduGnfgbgqNUuhva3w9UM2uk4CSn5EgW3w3H4lpXKSHoHUEWTUPZDbZrqlEHArnI5g0_xIrmUr_GNQBaDNTLtWfGHtRRBqF6t3nJpkxwH9Zz24BiBcv5r_ES0JRYb-ap9ihqlPTb_dy_hX8NlLBIIIw5D5ovlZjZN2UYZYp2jkEVGG84mtXOVMlhZgByW5lU4msMCVUo3-qI9tu4bDteNSB2AidsDBnpzNaf4nAeaP4RENZiM9bzWHimEdAXiCxmaw8i93apNssxmk7HuX51Znc412DaecWX2AMG-3WFBslxaGOvhZHQyL0SsDzO68atI441useON569yPLyftT8XdNoT08fOO9kuwyXi6pay4rNv-ufD9REBRj51xfH4DHP9DIevFLJA6bMqi0qpLVpcyLWcRnpoG7gY1gxH1n3cPuSTBhtRh5wk=w1299-h730-no?authuser=0',
                 
'https://lh3.googleusercontent.com/0yGjfkbV2Ej2aZj7nucnuagiTxOsZdGxPzF9vhGZXIVXouapZjAn69RPUcPdz2JHtfyyZ72VzwcAnT7ayhXiZX0rvOgjScU1Q97s1p7P7Iv0RQIuKGt4yyyQQCEfiGBYUoH4icAFDAmK2tsb1ObBAwiI3DEIGuLZfo6Ys_2rjQDoSs562b5ps0VRjTrGKgON2OVP3dd_bZym3u7dn9QXT1ZFMgOXVXpDeDj0UucZiorBaDiq9iyPFDCiBx-OfPnTmxeQyN203lIExjoHslj3d9h-7rbAwvJZVyjuDdrCioXmdfwal6pLq51iGmsDiNz8jB130x7QJHQbqaiNlMj9pCgjDQY9naaBniGqWWSX_v9xCi94-hIIiBXCwtEMU01dGPjwUP86iuMpJm7AaSK5rzkiQMeHfkiflm8Ia_b9yPsH_WLiAAChkeSYgulXf26Dp0YgDMQx9XNT_1rWKJV1SJwrBYf4jWh7A9GR2hCVqP86BjMDnKEnUDFzApM5RHozI-OfsS0O_M-k4goQyHDn-32hHYmlSjUcZkQsZjzGBWIOq4DLO7h-jJjgQcK9gpamphDQ25JPgbMLm0G-jX8bnLhBkVqIPEG1WkAmhEYJbueQU2BpuCBRchmKNHQ6VFOyyRNKYcJfhEiYbx9nNPkV0GTdRkWuEg2GjlS2QDwILRPQnKnwbqlv39B_JJB-G5aIzccYmKGblrJvN9b88_9HgclZ=w1299-h730-no?authuser=0']  
*/

var backdrops = ['images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg', 'images/image4.jpg'];

preload(backdrops);

$('body').css('background-image', 'url(' + backdrops[Math.floor(Math.random() * backdrops.length)] + ')');

var parseTweetText = function parseTweetText(item) {
  var result = item.Redewendung + ' - ' + item.Bedeutung;
  result = result.replace(/\s/g, '%20');
  return result;
};

var Presentational = function (_React$Component) {
  _inherits(Presentational, _React$Component);

  function Presentational(props) {
    _classCallCheck(this, Presentational);

    var _this = _possibleConstructorReturn(this, (Presentational.__proto__ || Object.getPrototypeOf(Presentational)).call(this, props));

    _this.state = {
      error: null,
      isLoaded: false,
      items: [],
      index: 0
    };
    _this.updateIndex = _this.updateIndex.bind(_this);
    return _this;
  }

  _createClass(Presentational, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      fetch("data/redewendungen.json").then(function (res) {
        return res.json();
      }).then(function (result) {
        _this2.setState({
          isLoaded: true,
          items: result.Redewendungen,
          index: Math.floor(Math.random() * result.Redewendungen.length)
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
        twitterUrl = twitterUrl.concat(parseTweetText(items[index]));
        console.log(twitterUrl);

        return React.createElement(
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
        );
      }
    }
  }]);

  return Presentational;
}(React.Component);

;

ReactDOM.render(React.createElement(Presentational, null), document.getElementById('app'));
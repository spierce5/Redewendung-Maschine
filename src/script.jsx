const Button = ReactBootstrap.Button;
const REDEWENDUNG = 'REDEWENDUNG';
const ZITAT = 'ZITAT';
const zitatUrl = "data/zitate.json";
const redewendungUrl = "data/redewendungen.json";


function preload(arrayOfImages) {
    $(arrayOfImages).each(function () {
        $('<img />').attr('src',this).appendTo('body').css('display','none');
    });
}

let backdrops = ['images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg', 'images/image4.jpg'];

preload(backdrops);

$('body').css('background-image', 'url(' + backdrops[Math.floor(Math.random() * backdrops.length)] + ')');  

class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      type: REDEWENDUNG,
      index: 0,
      items: [] 
    }
    this.updateIndex = this.updateIndex.bind(this);
    this.selectZitate = this.selectZitate.bind(this);
    this.selectRedewendungen = this.selectRedewendungen.bind(this);
    this.getData = this.getData.bind(this);
    this.parseTweetText = this.parseTweetText.bind(this);
  }
  
  componentWillMount() {
    this.getData();
  }  

  getData() {
    let jsonUrl; 
    let jsonArrayName; 
    if(this.state.type == ZITAT){
      jsonUrl = zitatUrl;
      jsonArrayName = 'Zitate';
    }
    else {
      jsonUrl = redewendungUrl;
      jsonArrayName = 'Redewendungen';
    }
    fetch(jsonUrl)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result[jsonArrayName],
              index: Math.floor(Math.random() * result[jsonArrayName].length)
            });
          },
          (error) => {
            this.setState({
              isLoaded: false,
              error
            });
          }
        ) 
    }
  
  updateIndex() {
      $('body').css('background-image', 'url(' + backdrops[Math.floor(Math.random() * backdrops.length)] + ')');  
    this.setState({
      index: Math.floor(Math.random() * this.state.items.length)
    })
  }

  selectZitate() {
    this.setState({
      type: ZITAT
    }, () => {
      this.getData();
    })
  }
  
  selectRedewendungen() {
    this.setState({
      type:REDEWENDUNG
    }, () => {
      this.getData();
    })
  }

  parseTweetText(item) {
    if(this.state.type == REDEWENDUNG){
      let result = item.Redewendung + ' - ' + item.Bedeutung;
      result = result.replace(/\s/g, '%20');
      return result;
    }
    else {
      let result = '"' + item.Zitat + '"' + ' - ' + item.Autor;
      result = result.replace(/\s/g, '%20');
      return result;
    }
}
  
  render() {
    const { error, isLoaded, items, index } = this.state;
    if (error) {
      return <div>Error! {error.message}</div>;
    }
    if (!isLoaded) {
      return <h1 style={{width:'33vw', height:'45vh'}}>Loading....</h1>;
    }
    else{
      let twitterUrl = 'https://twitter.com/intent/tweet?text=';
      twitterUrl = twitterUrl.concat(this.parseTweetText(items[index]));
      
      if(this.state.type == ZITAT){
        return (
          <div id='container'>
            <div class='toggle'>
              <input id='redewendung-toggle' name='toggle-button' type='radio' class='option' onClick={this.selectRedewendungen} />
              <label for='redewendung-toggle'>Redewendung</label>
              <input id='zitat-toggle' name='toggle-button' type='radio' class='option' checked/>
              <label for='zitat-toggle'>Zitat</label>
            </div>
            <div id='main-card'>
              <div id='contents'>
                <div id='zitat'>
                  <p><mark>"{items[index].Zitat}"</mark></p> 
                </div>
                <div id='autor'>
                  <p><mark>- {items[index].Autor}</mark></p>
                </div>
                <div id='buttons'>
                  <a 
                  class='twitter-share-button' 
                  title='Tweet diese Redewendung!'
                  href={twitterUrl}
                  target='_top'
                  rel='noopener noreferrer'
                  id='tweet-redewendung' 
                    >
                  <i id='icon' class="fa fa-twitter"></i>
                  </a>
                  <Button 
                    id='new-button' 
                    variant="light" 
                    onClick={this.updateIndex}>Neues Zitat</Button>
                </div>
              </div>
            </div>
          </div>
          )
      }
      else { 
        return (
          <div id='container'>
            <div class='toggle'>
              <input id='redewendung-toggle' name='toggle-button' type='radio' class='option'  checked/>
              <label for='redewendung-toggle'>Redewendung</label>
              <input id='zitat-toggle' name='toggle-button' type='radio' class='option' onClick={this.selectZitate} />
              <label for='zitat-toggle'>Zitat</label>
            </div>
            <div id='main-card'>
              <div id='contents'>
                <div id='redewendung'>
                  <h2>{items[index].Redewendung}</h2>
                </div><hr/>
                <div id='bedeutung'>
                  <p>{items[index].Bedeutung}</p> 
                </div>
                <div id='buttons'>
                  <a 
                  class='twitter-share-button' 
                  title='Tweet diese Redewendung!'
                  href={twitterUrl}
                  target='_top'
                  rel='noopener noreferrer'
                  id='tweet-redewendung' 
                    >
                  <i id='icon' class="fa fa-twitter"></i>
                  </a>
                  <Button 
                    id='new-button' 
                    variant="light" 
                    onClick={this.updateIndex}>Neue Redewendung</Button>
                </div>
              </div>
            </div>
          </div>
        ); 
      }
    }
  }  
};

ReactDOM.render(
  <Presentational/>,
  document.getElementById('app')
);

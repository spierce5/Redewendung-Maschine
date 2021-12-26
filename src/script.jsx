const Button = ReactBootstrap.Button;

function preload(arrayOfImages) {
    $(arrayOfImages).each(function () {
        $('<img />').attr('src',this).appendTo('body').css('display','none');
    });
}

/*let backdrops = ['https://lh3.googleusercontent.com/V7skn2zXKeFdYDlHJ2PthIgtEuHu-1PiOPCx_-zk25qOETOss6g2VNxcIYVulxrDZYEOL3OPdo4RJQQBblmleA9SMPQogKHwUW09O8LiJ6eckXNbvS2sfSW6jOnMeX7sBbLURpCr06CVjmKvgDmP-8SwN_FvUIAGPYJO5NUpn-Ztf_PdETtAm8D_81rjg7HnGnJsD-zpwbsK4JnaIXEBPGjuRQUjtPFub6DYLJvBU6rzh_W8ooy1eXlWR_pAPdBeFACP4hJ3twAvvCWWL4m5pv8hihxKikUqEB6y8qVNkar0lKZmX0cVFN4KrMMdy9voTtqVBk85obiYV67NKW4dbx5Fsqb__0mlNpDSUrI99hypoRe8MjF4a1enIh2J3M7oG36caXq0OnofppuiREOoaNThExeU1tywFmIKtQ5-0ZKVhuXMA5SYj0fdTbzQffiNNHezM1pTJEzojuNPqcuA1sM-0JRvBV8ZfRhy3crV7T2P5fLBLUl8TdPBcWEtD26uWc9BjFR6ECD169StXrHA5DZ2tIzeFS0zRSHZjd_jiDAZPTzIRr4Bx0KxSdIEQzHoMB6nFx7phqgFdmx5waGm92xpSDNHHqwsYwjC0kxTaliULB264mk6Un_OWoUkrJ1Z_IVJapStNy1TKQ_86KNNpObE667Vx1I8fsWd5pQr2Dwb3DquezVwtlnwY9ltr_8qXsM0ByTHj83fb8nupryHQQa5=w1298-h730-no?authuser=0',
                 
'https://lh3.googleusercontent.com/K3n-SD9H6GEZu-7vQeMePJoEHckxSohaAT_ajjwaf4aJa2C5ie6Ch8KP9o4bj-lsMuWaB5yhkd-9790Vjkr812JL1z4qrnGxqfzsmLz-H9-HTQhn00S8_ljvGOceiXhga8RBw-beOc6FyBAGG7bIRS3n9JhsAxvgkhYLMeAekHu8Kl3jCyZi-49SjdUJXG4rjT2hLaq4l_puRbX-CdztxDTPSh_EJSQM5JJfluX0pzIlDlbS_9yxvT2rOcXXE68nlxRmiPPaJpmwpnh0Qt2lXUTzWWJw9NjudkDxV0mTxdqnJ1knrEizucKPcFK6dOTGCte7dBCsfIwQlx5Rh0TCLMascwe_wfgqvG4Q97tUegNxiw4YfbiX3qMFR8N6Jxv5thsPaW-5GBeL7Ezy2fOYvA42gF7aoqxrcxTEpWBqbZPtElWGASCguP5yXsi56Xk3xERuvwLUyW_8_ujVhyRM7sNXCT6ysXq-Mk8LEje-A_XWHxYtJjavgNodT_1soUPY7AT7Vf2LKj3cBv2A1Jgm83i1Hub3aLXlw5lVXJJf0EJ4lPuB-tQ8XmjZtATjfwjvzCuPiIfayqGcaGj-Vyos3QGZwbrzZNZ-t2qXKadVBs-2qAORQv4ieeT_QOgxO3PBzuMIuCAdIp31o_pT6J9RPYdH2Qowzrlhf47AcKwUNX3sKAhmeEoLzslDqQi_fUh5cPl9ALIh-ODtTz9QYWy73o1P=w1298-h730-no?authuser=0',
                 
'https://lh3.googleusercontent.com/BflUlTPuUyUO7gsIxQWp3P9tM9PHk-wkJvyxfTrPao3UP2eku3hF0-gltlIZheW07p-qn1_0kUTiUmKbi3ZoVUc_1ZX8ohaVzV23gqTvsH4u28pWwD_FLXB1jmh488_72aFJiwVYTUIOdYKEjDgEoJDAu9tAD6rMzKt4_HqLqHSDcxVE1uDY2KH2k3ht-w3XJw_T0F3nEfk5GTa1yc2r0jYFGWuQXWj2JTaLThENh8bEJsbZWLV1xs4G8jkgEzFJgGf7pi9zcRq3u-lACCsgwdccq5AymLqIQyJtduGnfgbgqNUuhva3w9UM2uk4CSn5EgW3w3H4lpXKSHoHUEWTUPZDbZrqlEHArnI5g0_xIrmUr_GNQBaDNTLtWfGHtRRBqF6t3nJpkxwH9Zz24BiBcv5r_ES0JRYb-ap9ihqlPTb_dy_hX8NlLBIIIw5D5ovlZjZN2UYZYp2jkEVGG84mtXOVMlhZgByW5lU4msMCVUo3-qI9tu4bDteNSB2AidsDBnpzNaf4nAeaP4RENZiM9bzWHimEdAXiCxmaw8i93apNssxmk7HuX51Znc412DaecWX2AMG-3WFBslxaGOvhZHQyL0SsDzO68atI441useON569yPLyftT8XdNoT08fOO9kuwyXi6pay4rNv-ufD9REBRj51xfH4DHP9DIevFLJA6bMqi0qpLVpcyLWcRnpoG7gY1gxH1n3cPuSTBhtRh5wk=w1299-h730-no?authuser=0',
                 
'https://lh3.googleusercontent.com/0yGjfkbV2Ej2aZj7nucnuagiTxOsZdGxPzF9vhGZXIVXouapZjAn69RPUcPdz2JHtfyyZ72VzwcAnT7ayhXiZX0rvOgjScU1Q97s1p7P7Iv0RQIuKGt4yyyQQCEfiGBYUoH4icAFDAmK2tsb1ObBAwiI3DEIGuLZfo6Ys_2rjQDoSs562b5ps0VRjTrGKgON2OVP3dd_bZym3u7dn9QXT1ZFMgOXVXpDeDj0UucZiorBaDiq9iyPFDCiBx-OfPnTmxeQyN203lIExjoHslj3d9h-7rbAwvJZVyjuDdrCioXmdfwal6pLq51iGmsDiNz8jB130x7QJHQbqaiNlMj9pCgjDQY9naaBniGqWWSX_v9xCi94-hIIiBXCwtEMU01dGPjwUP86iuMpJm7AaSK5rzkiQMeHfkiflm8Ia_b9yPsH_WLiAAChkeSYgulXf26Dp0YgDMQx9XNT_1rWKJV1SJwrBYf4jWh7A9GR2hCVqP86BjMDnKEnUDFzApM5RHozI-OfsS0O_M-k4goQyHDn-32hHYmlSjUcZkQsZjzGBWIOq4DLO7h-jJjgQcK9gpamphDQ25JPgbMLm0G-jX8bnLhBkVqIPEG1WkAmhEYJbueQU2BpuCBRchmKNHQ6VFOyyRNKYcJfhEiYbx9nNPkV0GTdRkWuEg2GjlS2QDwILRPQnKnwbqlv39B_JJB-G5aIzccYmKGblrJvN9b88_9HgclZ=w1299-h730-no?authuser=0']  
*/

let backdrops = ['images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg', 'images/image4.jpg'];

preload(backdrops);

$('body').css('background-image', 'url(' + backdrops[Math.floor(Math.random() * backdrops.length)] + ')');  

const parseTweetText = (item) => {
  let result = item.Redewendung + ' - ' + item.Bedeutung;
  result = result.replace(/\s/g, '%20');
  return result;
}

class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      index: 0
    }
    this.updateIndex = this.updateIndex.bind(this);
  }
  
  componentWillMount() {
    fetch("https://gist.githubusercontent.com/spierce5/06fb099a10d3d2b2ea942a6757f39b7c/raw/1a9821375c51cb6d0b74bf19c970af606e8da4c0/")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.Redewendungen,
            index: Math.floor(Math.random() * result.Redewendungen.length)
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
      twitterUrl = twitterUrl.concat(parseTweetText(items[index]));
      console.log(twitterUrl);
      
      return (
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
    );     
    }
  }  
};

ReactDOM.render(
  <Presentational/>,
  document.getElementById('app')
);

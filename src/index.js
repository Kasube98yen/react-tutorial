import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/* data list */
const imageList = ['amumu.png', 'lux.png', 'nami.png', 'taric.png','singed.png'];
const ChampionList = ['アムム', 'ラックス', 'ナミ', 'タリック', 'シンジド']

class Champion extends React.Component
{
  constructor(props){
    super(props);
    this.state = {
      imageSource: imageList,
    };
  }

  /* 画像を切り替える。 */
  /* https://qiita.com/mooriii/items/1f0f74efc3060cb25ecf */
  ChangePicture = (i) => {
    const champion_copy = this.state.imageSource.slice();
    if (champion_copy[i] === "black.png"){
      champion_copy[i] = imageList[i]
    }
    else{
      champion_copy[i] = "black.png"
    }
    this.setState({imageSource: champion_copy})
  } 

  render()
  {
    return (
      <button onClick = {() => this.ChangePicture(this.props.champion_number)}>
        <img src={this.state.imageSource[this.props.champion_number]} alt={ChampionList[this.props.champion_number]}></img>
      </button>
    )
  }
}

class Test extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = 
    {

    };
  }

  render()
  {
    /* チャンピオンごとをforで回す。 */
    /* https://qiita.com/konojunya/items/cb026a2aa3df1837d587 */
    const champion_seq = [];
    for(let i = 0; i < imageList.length; i++){
      champion_seq.push(<Champion champion_number={i}/>)
    }

    return (
      <div>
        <h1 className='title'>TFTシミュレーター</h1>
        {champion_seq}
      </div>
    );
  }
}

ReactDOM.render(
  <Test />,
  document.getElementById('root')
);
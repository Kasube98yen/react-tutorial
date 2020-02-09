import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Champion extends React.Component
{
  render()
  {
    return (
      <button>
        <img src={this.props.name} alt={this.props.nameJP}></img>
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
      imageSource1:'amumu.png',
      imageSource2:'lux.png', 
      imageSource3:'nami.png', 
      imageSource4:'taric.png', 
      imageSource5:'singed.png', 
    };
  }
  render()
  {
    const image6='black.png';



    return (
      <div>
        <h1 className='title'>TFTシミュレーター</h1>
        <Champion name={this.state.imageSource1} nameJP='アムム' />
        <button onClick = {()=>this.setState({imageSource2: image6})}>
          <img src={this.state.imageSource2} alt='ラックス'></img>
        </button>
        <button onClick = {()=>this.setState({imageSource3: image6})}>
          <img src={this.state.imageSource3} alt='ナミ'></img>
        </button>
        <button onClick = {()=>this.setState({imageSource4: image6})}>
          <img src={this.state.imageSource4} alt='タリック'></img>
        </button>
        <button onClick = {()=>this.setState({imageSource5: image6})}>
          <img src={this.state.imageSource5} alt='シンジド'></img>
        </button>
      </div>
    );

  }
}






ReactDOM.render(
  <Test />,
  document.getElementById('root')
);
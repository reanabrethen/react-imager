import React, { Component } from 'react'
import Display from './Display'
import Thumbnail from './Thumbnail'
import Button from './common/Button'


export class Imager extends Component {
    state = {
        imagePaths: [`images/BlueHoleJamaica.jpg`, `images/ColosseumRome.jpg`, `images/EifelTowerParis.jpg`, `images/Greece.jpg`,
      `images/JaguarAmazon.jpg`, `images/MountFuji.jpg`, `images/Jerusalem.jpg`, `images/MountKilimanjaro.jpg`, `images/NewZealandMountSefton.jpg`, `images/PyramidsOfGiza.jpg`, `images/Stonehenge.jpg`, `images/TajMahal.jpg`],
        imageNumber: 0,
        displayImage: ''
        
    }

    componentDidMount(){
      this.setState({
        displayImage: this.state.imagePaths[this.state.imageNumber]
      })
    }

    displayRandomImage=()=>{
       this.setState({
        imageNumber: Math.floor(Math.random() * 12)
       })
    }
    displayNextImage=()=>{
      this.setState({
        imageNumber: this.state.imageNumber+1
      })
    }
    displayLastImage=()=>{
      this.setState({
        imageNumber: this.state.imageNumber-1
      })
    }
    componentDidUpdate(prevProps, prevState){
      if(prevState.imageNumber !== this.state.imageNumber){
        this.setState({
          displayImage: this.state.imagePaths[this.state.imageNumber]
        })
      }
      if(this.state.imageNumber > 11){
        this.setState({
          imageNumber: 0
        })
      }
      if(this.state.imageNumber < 0){
        this.setState({
          imageNumber: 11
        })
      }
    }
    displayImageClicked=(index)=>{
      this.setState({
        imageNumber: index
      })
      
    }
  render() {
    return (
      <div>
        <Display path={this.state.displayImage} />
        <div style={{display: 'flex', justifyContent: "space-around"}} className="buttons">
          <Button clickFunc={this.displayRandomImage} text={'Random'} />
          <div className="arrows">
            <Button clickFunc={this.displayLastImage} text={'<'} />
            <Button clickFunc={this.displayNextImage} text={'>'} />
          </div>
          
        </div>
        <div style={{display: 'flex', flexWrap: 'wrap', width: '80vw', justifyContent: 'center'}} className="images">
        {this.state.imagePaths.map((path, i)=>{
            return (
                <Thumbnail imageNum={i} clickFunc={this.displayImageClicked} path={path} />
            )
        })}
        </div>
      </div>
    )
  }
}

export default Imager
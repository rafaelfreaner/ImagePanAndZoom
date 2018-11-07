import React, { Component } from 'react';
import logo from './logo.svg';
import zoomIn from './zoom-in.svg';
import zoomOut from './zoom-out.svg';
import './App.css';

const small = 'https://bonobos-prod-s3.imgix.net/products/18158/original/SHIRT_ShortSleeve_ZebraRun_JetBlack_hero1.jpg?h=768&w=768';
const medium = 'https://bonobos-prod-s3.imgix.net/products/18158/original/SHIRT_ShortSleeve_ZebraRun_JetBlack_hero1.jpg?h=1024&w=1024';
const large = 'https://bonobos-prod-s3.imgix.net/products/18158/original/SHIRT_ShortSleeve_ZebraRun_JetBlack_hero1.jpg?h=1530&w=1530';

class ImagePanAndZoom extends Component {

  generateResponsiveImage() {
    return (
      <picture className="responsive-image">
        <img src={small} srcSet={`${small} 320w, ${medium} 768w, ${large} 1280w`} />
      </picture>
    )
  }

  renderControls() {
    return (
      <div className="controls">
        <i className="image-zoom--in"/>
        <i className="image-zoom--out"/>
      </div>
    )
  }

  render() {
    return (
    	<div className="image-container">
        {this.generateResponsiveImage()}
        {this.renderControls()}
    	</div>
    )
  }
}

export default ImagePanAndZoom;

import React, { Component } from 'react';
import logo from './logo.svg';
import zoomIn from './zoom-in.svg';
import zoomOut from './zoom-out.svg';
import './App.css';

const small = 'https://bonobos-prod-s3.imgix.net/products/18158/original/SHIRT_ShortSleeve_ZebraRun_JetBlack_hero1.jpg?h=768&w=768';
const medium = 'https://bonobos-prod-s3.imgix.net/products/18158/original/SHIRT_ShortSleeve_ZebraRun_JetBlack_hero1.jpg?h=1024&w=1024';
const large = 'https://bonobos-prod-s3.imgix.net/products/18158/original/SHIRT_ShortSleeve_ZebraRun_JetBlack_hero1.jpg?h=1530&w=1530';


/**
 * ImagePanAndZoom component
 *
 * @returns {ReactElement} <div>
 */
class ImagePanAndZoom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      zoomed: false
    };

    this.toggleZoom = this.toggleZoom.bind(this);
  }

  toggleZoom() {
    this.setState({
      zoomed: !this.state.zoomed
    });
  }

  /**
   * Returns responsive image with different image sources
   *
   * @returns {ReactElement} <div>
   */
  generateResponsiveImage() {
    return (
      <picture onClick={this.toggleZoom} className={`responsive-image ${this.state.zoomed ? 'zoomed-in' : ''}`}>
        <img src={small} srcSet={`${small} 320w, ${medium} 768w, ${large} 1280w`} />
      </picture>
    )
  }

  /**
   * Renders zoom in and zoom out controls
   *
   * @returns {ReactElement} <div>
   */
  renderControls() {
    return (
      <div className="controls">
        <button onClick={this.toggleZoom} className={`control ${this.state.zoomed ? 'disabled' : ''}`}>
          <i className="image-zoom--in"/>
        </button>
        <button  onClick={this.toggleZoom} className={`control ${!this.state.zoomed ? 'disabled' : ''}`}>
         <i className="image-zoom--out"/>
        </button>
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

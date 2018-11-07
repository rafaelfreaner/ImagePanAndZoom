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

    this.zoomIn = this.zoomIn.bind(this);
    this.zoomOut = this.zoomOut.bind(this);
  }


  /**
   * Returns responsive image with different image sources
   *
   * @returns {ReactElement} <div>
   */
  generateResponsiveImage() {
    return (
      <picture className="responsive-image">
        <img src={small} srcSet={`${small} 320w, ${medium} 768w, ${large} 1280w`} />
      </picture>
    )
  }

  zoomIn() {
    this.setState({
      zoomed: true
    });
  }

  zoomOut() {
    if (this.state.zoomed) {
      this.setState({
        zoomed: !this.state.zoomed
      });
    }
  }

  /**
   * Renders zoom in and zoom out controls
   *
   * @returns {ReactElement} <div>
   */
  renderControls() {
    return (
      <div className="controls">
        <button onClick={this.zoomIn}className="control">
          <i className="image-zoom--in"/>
        </button>
        <button  onClick={this.zoomOut} className="control">
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

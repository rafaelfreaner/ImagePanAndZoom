import React, { Component } from 'react';
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
    this.panning = false;
    this.coordinates = {
      x: 0,
      y: 0,
    };

    this.state = {
      zoomed: false,
      x: 0,
      y: 0
    }

    this.toggleZoom = this.toggleZoom.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousemove', this.handlePan.bind(this), false);
  }

  componentWillUnmount() {
    document.addEventListener('mousemove', this.handlePan, false);
  }

  /**
   * Toggle Zoom
   *
   * @returns {undefined} undefined
   */
  toggleZoom(e) {
    if (this.state.zoomed && e.target.localName === 'img') {
      return;
    }

    this.setState({
      zoomed: !this.state.zoomed,
      x: 0,
      y: 0
    });

  }

  /**
   * Handles MouseDown Event
   *
   * @returns {undefined} undefined
   */
  handleMouseDown(e) {
    this.panning = true;
    this.coordinates = {
      x: e.pageX,
      y: e.pageY
    };
  }

  /**
   * Handles MouseUp Event
   *
   * @returns {undefined} undefined
   */
  handleMouseUp(e) {
    this.panning = false;
    this.coordinates = {
      x: 0,
      y: 0
    };
  }

  /**
   * Handles MouseMove event
   *
   * @returns {undefined} undefined
   */
  handlePan(e) {
    e.preventDefault();
    if (this.state.zoomed && this.panning) {
      // Get difference between coordinates and new location of page
      const xDiff = this.coordinates.x - e.pageX
      const yDiff = this.coordinates.y - e.pageY;

      // Update our coordinates
      this.coordinates.x = e.pageX;
      this.coordinates.y = e.pageY;

      this.setState({
        x: this.state.x - xDiff,
        y: this.state.y - yDiff,
        zoomed: this.state.zoomed
      });
    }

    return;
  }

  /**
   * Returns responsive image with different image sources
   *
   * @returns {ReactElement} <div>
   */
  generateResponsiveImage() {
    return (
      <picture
        className={`responsive-image ${this.state.zoomed ? 'zoomed-in' : ''}`}
        >
        <img
          onMouseDown={this.handleMouseDown}
          onMouseUp={this.handleMouseUp}
          onClick={this.toggleZoom}
          draggable="false"
          src={small}
          srcSet={`${small} 320w, ${medium} 768w, ${large} 1280w`}
          style={{transform: `matrix(${this.state.zoomed ? 3 : 1}, 0, 0, ${this.state.zoomed ? 3 : 1}, ${this.state.x}, ${this.state.y})`}}
          />
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

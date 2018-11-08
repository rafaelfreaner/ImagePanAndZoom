---
title: ImagePanAndZoom
---

A component used to display a responsive image. When a user clicks on the image, we zoom in 3x the image. When a user clicks on the zoom out button, the image will zoom out. The user can drag the image in any direction within its container.

## Build Instructions
npm i
npm start

## Approach
I decided to create a simple React application for the ImagePanAndZoom component.

This component includes a responsive image, with three different asset sources for different viewports.
I have listeners on the image for `mouseUp` and `mouseDown` events, as well document listeners for `mouseMove` events, this way we can tell if the user is currently `panning` or dragging an image. If the user is dragging an image, we can check for event proprties, `pageX` and `pageY`, and update our initial coordinates so we can then apply CSS that will position the image in the right location. 

Zooming: When a user clicks on the zoom in button, we scale the image 3x the initial image size. When you click on the zoom out button, it should scale the image back to its original size (1x). When a user clicks on the image, that will also trigger the zoom in effect.

Due to time restrictions, I wasn't able to fix the event logic to avoid triggering a zoom out when dragging the image. 


## Future Improvements

Fix issue with triggering zoom out when dragging an image.
Fix issue with image not being position at the top of the page when dragged.

## Component Usage

```jsx
const ImagePanAndZoom = require('./App.js');

<ImagePanAndZoom
/>;
```

## Style Classes

Here is the ImagePanAndZoom's public API for class names:

```scss
.image-container
  .responsive-image
    img
  .controls
    .control
      .image-zoom--in
    .control
      .image-zoom--out
```
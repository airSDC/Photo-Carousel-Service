import React, { Component } from 'react';
import './PhotoCarouselList.css';

import PhotoCarouselListItem from './PhotoCarouselListItem';

class PhotoCarouselList extends Component {
  render() {
    return (
      <div className="carousel-list fx">
        {this.props.photos.map((photo, idx) => (
          <PhotoCarouselListItem
            photo={photo}
            id={idx}
            key={idx}
            changePhoto={this.props.changePhoto}
          />
        ))}
      </div>
    );
  }
}

export default PhotoCarouselList;

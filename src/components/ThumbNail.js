import React from 'react';
import { ImageThumbNail } from '../styled/ImageThumbnail';

class ThumbNail extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>
        <ImageThumbNail data-index={this.props.index} src={this.props.src} />
        </div>;
  }
}

export default ThumbNail;

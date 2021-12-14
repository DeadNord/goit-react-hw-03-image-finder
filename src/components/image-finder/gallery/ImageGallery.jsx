import ImageGalleryItem from './ImageGalleryItem';
import React, { PureComponent } from 'react';
import Button from '../button/Button';
import LoaderCom from '../loader/Loader';

// import Loader from 'react-loader-spinner';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import s from './ImageGallery.module.css';


class ImageGallery extends PureComponent {
    state = {
      image: [],
      status: '',
      page: 1,
      myRef: React.createRef(),
    };
  
    componentDidUpdate(prevProps, prevState) {
      if (
        prevProps.searchName !== this.props.searchName ||
        prevState.page !== this.state.page
      ) {
        if (prevProps.searchName !== this.props.searchName)
          this.setState({ image: [], status: 'load' });
        this.fetchApi(this.props.searchName, this.state.page)
          .then(image => {
            image.hits[0] = { ...image.hits[0], myRef: this.state.myRef  };
            this.setState({
              image: [...this.state.image, ...image.hits],
              status: 'done',
            });
            this.scroll(this.state.myRef);
          })
      }
    }

fetchApi(value, page) {
    const BASE = 'https://pixabay.com/api/';
    const KEY = '24007253-6cc56fa6c42aef75df557ae25';
  const url =
    BASE +
    `?q=${value}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  return fetch(url).then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`Oops, something went wrong.`));
  });
}

    nextPage = () => {
      this.setState({
        page: this.state.page + 1,
      });
    };
  
    scroll = elem => {
      elem.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
    };
    render() {
  return (
<>
    <ul className={s.gallery}>
        {this.state.image.map(img => (
              <ImageGalleryItem
                key={img.id}
                onClick={this.props.onClick}
                srs={img.webformatURL}
                alt={img.tags}
                largeImageURL={img.largeImageURL}
                myRef={img.myRef}
              />
            ))}
             {this.state.status === 'load' && (
        <LoaderCom/>
        )}
</ul>
{this.state.status === 'done' &&
<div className={s.button}>
<Button onClick={this.nextPage} />
</div>
    }

</>

  );
    }
};


export default ImageGallery;

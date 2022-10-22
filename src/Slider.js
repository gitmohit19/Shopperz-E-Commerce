import React from 'react';


class Slider extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        pointer: 0,
        imgs: [
          'https://img.freepik.com/free-vector/flat-diwali-sale-with-candle_52683-27177.jpg?w=2000',
          'https://static.vecteezy.com/system/resources/previews/002/288/676/non_2x/women-in-fashion-banner-sale-discount-free-vector.jpg',
          'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/130465537/original/9a86b0ce50637918bba6c90487c11564a5939382/do-minimal-gradient-fashion-banner.jpg',
          
        ]
      };
      this.handleClick = this.handleClick.bind(this);
      this.prevClick = this.prevClick.bind(this);
    }
  
    handleClick() {
      const { length } = this.state.imgs;
      const { pointer } = this.state;
      const newPointer =  pointer === length - 1 ? 0 : pointer + 1;
      this.setState({ pointer: newPointer });
    }
    prevClick() {
      const { length } = this.state.imgs;
      const { pointer } = this.state;
      const newPointer =  pointer === 0 ? length - 1 : pointer - 1;
      this.setState({ pointer: newPointer });
    }
  
    render() {
  
      const { pointer, imgs } = this.state;
      
      return (
       
          <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={imgs[pointer]} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={imgs[pointer]} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
            </div>
          </div>
          <div className="carousel-item">
            <img src={imgs[pointer]} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" onClick={this.handleClick} type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" onClick={this.prevClick} type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      );
    }
  
  }
  

export default Slider;
//
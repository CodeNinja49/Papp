import React, { PureComponent } from "react";
import Slider from "react-slick";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import { Paper } from "@material-ui/core";
import Lightbox from "react-image-lightbox";

const dummyData = [
  "https://images.xlpat.com/attachments/images/6dbd08aef10443d4347ee54adf8b6dc1/7_CN105848088B.png",
  // "https://images.xlpat.com/attachments/images/6dbd08aef10443d4347ee54adf8b6dc1/5_CN105848088B.png",
  // "https://images.xlpat.com/attachments/images/6dbd08aef10443d4347ee54adf8b6dc1/4_CN105848088B.png",
  // "https://images.xlpat.com/attachments/images/6dbd08aef10443d4347ee54adf8b6dc1/5_CN105848088B.png",
  // "https://images.xlpat.com/attachments/images/6dbd08aef10443d4347ee54adf8b6dc1/4_CN105848088B.png",
  // "https://images.xlpat.com/attachments/images/6dbd08aef10443d4347ee54adf8b6dc1/0_CN105848088B.png",
];

export default class Carousel extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }
  onMoveNext = () => {
    const {
      images: { results = [] },
    } = this.props;
    const { photoIndex } = this.state;
    this.setState({
      photoIndex: (photoIndex + results.length - 1) % results.length,
    });
  };
  onMovePrevious = () => {
    const {
      images: { results = [] },
    } = this.props;
    const { photoIndex } = this.state;
    this.setState({
      photoIndex: (photoIndex + 1) % results.length,
    });
  };
  imageClickHandler = (idx) => {
    this.setState({ isOpen: true, photoIndex: idx });
  };
  render() {
    const { photoIndex, isOpen } = this.state;
    var settings = {
      infinite: false,
      speed: 500,
      className: "carousel",
      slidesToShow: 3,
      slidesToScroll: 1,
      swipeToSlide: true,
      initialSlide: 0,
      nextArrow: <ArrowBackIos />,
      prevArrow: <ArrowBackIos />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    const {
      images: { results = [] },
    } = this.props;
    return (
      <>
        <Slider {...settings}>
          {results.map((img, index) => (
            <Paper
              elevation={2}
              className="carousel_paper"
              key={index + "carousel"}
            >
              <div
                style={{ cursor: "pointer", maxWidth: "180px" }}
                onClick={() => this.imageClickHandler(index)}
              >
                <img
                  src={img}
                  alt="img"
                  style={{ width: "100%", height: "200px" }}
                />
              </div>
            </Paper>
          ))}
        </Slider>
        {isOpen && (
          <Lightbox
            mainSrc={results[photoIndex]}
            nextSrc={results[(photoIndex + 1) % results.length]}
            prevSrc={
              results[(photoIndex + results.length - 1) % results.length]
            }
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={this.onMoveNext}
            onMoveNextRequest={this.onMovePrevious}
          />
        )}
      </>
    );
  }
}

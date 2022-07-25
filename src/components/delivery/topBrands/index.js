import React from 'react';
import "./topBrands.css";
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import Slider from 'react-slick';


const topBrandsList=[
    {
        id: 1,
        time: "35 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/6743c2bf4409654a14320694e6e2f88a_1617984416.png?output-format=webp",
    },

    {
        id: 2,
        time: "29 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/76cee521f3905f01a515d71881ff70ae_1630687191.png?output-format=webp",
    },
    {
        id: 3,
        time: "32 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/72093a8b7046c690006fab2a9e269bde_1630661078.png?output-format=webp"
    },
    {
        id: 4,
        time: "30 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/e6f2085a4ed0cd750cac265574748f3f_1601467978.png?output-format=webp",
    },
    {
        id: 5,
        time: "31 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png?output-format=webp",
    },
    {
        id: 6,
        time: "30 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/eeb8a7423bd42e739b72876506d9c87e_1594960767.png?output-format=webp",
    },
    {
        id: 7,
        time: "28 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/2f03f8299adfedcc5b038433b948e11a_1584120081.png?output-format=webp",
    },
    {
        id: 8,
        time: "40 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/47c22bbd5043ef52b80a4e3d3409a368_1626810021.png?output-format=webp",
    },


];

const settings = {
      
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

const TopBrands = () => {
  return (
    <div className="top-brands max-width">
        <div className="collection-title">Top brands for you</div>
        <Slider {...settings}>
            {topBrandsList.map((brand)=> {
                return (
                    <div>
                    <div className="top-brands-cover">
                        <img
                        src={brand.cover}
                        className="top-brands-image"
                        alt={brand.time}
                        />

                    </div>
                    </div>
                );
            })}

        </Slider>

    </div>
  );
};

export default TopBrands;
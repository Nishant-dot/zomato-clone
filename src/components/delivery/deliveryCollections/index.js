import React from 'react';
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import "./deliveryCollections.css";
import Slider from "react-slick";
import DeliveryItem from './deliveryItem';

const deliveryItems=[
    {
    id: 1,
    title: "Pizza",
    cover:"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
    },
    
    {
        id: 2,
        title: "Burger",
        cover:"https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
        },
    {
       id: 3,
       title: "Rolls",
        cover:"https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
        },
    {
            id: 4,
            title: "Shake",
            cover:"https://b.zmtcdn.com/data/dish_images/8187d3223ac2cc42cc24f723c92877511634805403.png",
            },
    {
                id: 5,
                title: "Biryani",
                cover:"https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
                },        
                {
                    id: 6,
                    title: "Chaat",
                    cover:"https://b.zmtcdn.com/data/dish_images/1437bc204cb5c892cb22d78b4347f4651634827140.png",
                    },
                    {
                        id: 7,
                        title: "Momos",
                        cover:"https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png",
                        },
                        {
                            id: 8,
                            title: "Home style",
                            cover:"https://b.zmtcdn.com/data/dish_images/da37534e55d5f1450ea9771c0627a8d81641644205.png",
                            },
                            {
                                id: 9,
                                title: "Sandwich",
                                cover:"https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png",
                                },
                                {
                                    id: 10,
                                    title: "Paratha",
                                    cover:"https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png",
                                    },
                                    {
                                        id: 11,
                                        title: "Kachori",
                                        cover:"https://b.zmtcdn.com/data/o2_assets/f9d277eb1668d7abf9235302402b06001632716602.png",
                                        },
                                                                                     
                                           
];



    const settings = {
      
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };

const DeliveryCollections = () => {
  return (
    <div className="delivery-collections">
        <div className="max-width">
            <div className="collection-title">Eat what makes you happy</div>
            <Slider {...settings}>
                {deliveryItems.map((item) =>{
                    return <DeliveryItem item={item} />;
                })}

            </Slider>
            </div> 

    </div>
  );
};

export default DeliveryCollections;
import React from 'react';
import "./diningOut.css";
import Collection from '../common/collection';
import Filters from '../common/filters';
import ExploreSection from '../common/exploreSection';
// import { diningOut } from '../../data/diningOut';
import { diningOut } from '../../data/diningOut';

const collectionList=[
  {
    id:"1",
    title:"Trending This Week",
    cover: "https://b.zmtcdn.com/data/collections/176fd420edb8c9cdfd6b4d259c9e719f_1537335484.jpg",
    places:"12 places",

  },
  {
    id:"2",
    title:"Trending This Week",
    cover: "https://b.zmtcdn.com/data/collections/f60eb469dbcdadaaa48c8be4f5ba48b3_1646040541.png",
    places:"30 places",

  },
  {
    id:"3",
    title:"Trending This Week",
    cover: "https://b.zmtcdn.com/data/collections/a5da9440d06307eb45e20715c7e43a00_1618825302.jpg",
    places:"24 places",

  },
  {
    id:"4",
    title:"Trending This Week",
    cover: "https://b.zmtcdn.com/data/collections/395fdd943ef9cbe045375880e23e4bad_1618824860.jpg",
    places:"29 places",

  },
  {
    id:"5",
    title:"Trending This Week",
    cover: "https://b.zmtcdn.com/data/collections/bb455325350e11bff99e88ef68b3f89d_1614940676.jpg",
    places:"18 places",

  },
  {
    id:"6",
    title:"Trending This Week",
    cover: "https://b.zmtcdn.com/data/collections/b1e2e0efacf4247d137c805c55c208d8_1618828176.jpg",
    places:"30 places",

  },
  {
    id:"7",
    title:"Trending This Week",
    cover: "https://b.zmtcdn.com/data/collections/14fa741ee65b838680a95a4cd7b9faa4_1582201565.jpg",
    places:"32 places",

  },
  {
    id:"8",
    title:"Trending This Week",
    cover: "https://b.zmtcdn.com/data/collections/90999c2395ba9c9c40998607c8dd5af1_1581058174.jpg",
    places:"21 places",

  },
];

const diningFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Pro Offers",
  },
  {
    id: 3,
    title: "Distance",
    icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
  },
  {
    id: 4,
    title: "Outdoor Seating",
  },
  {
    id: 5,
    title: "Online Bookings",
  },
  {
    id: 6,
    title: "Rating: 4.0+",
  },
  {
    id: 7,
    title: "Cuisines",
    icon: <i className="fi fi-rr-angle-down absolute-center"></i>,
  },
  {
    id: 8,
    title: "Cafes",
  },
  {
    id: 9,
    title: "Open Now",
  },
  ];

const diningList= diningOut;
const DiningOut = () => {
  return (
   <div> 
    <Collection list={collectionList}/>
    <div className="max-width">
      <Filters filterList={diningFilters} />
    </div>
    <ExploreSection 
       list={diningList}
       collectionName="Best Dining Restaurants near you in MI Road Jaipur"
        />
  </div>
  );
};

export default DiningOut;
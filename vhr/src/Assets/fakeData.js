import poolImg from "./images/Pool-Filter.png";
import cabinImg from "./images/Cabin-Filter.png";
import homeImg from "./images/Listing-Feature.png";
import patioImg from "./images/Patio-Filter.jpg";
import hotTubImg from "./images/HotTub-Filter.jpg";
import chateau from "./images/chateau.jpg";
import villa from "./images/villa.jpg";

export let listings = [
  {
    id: 1,
    imgUrl: homeImg,
    imgs: [homeImg, poolImg],
    title: "Chicago Beach House",
    rating: 5,
    desc: "This is a beautiful beach house located on the cost of Lake Michigan. Located in Evanston, it is perfectly located for easy travel to downtown with the benefit of a quiet community",
    longDesc:
      "Welcome to our beautiful beach house in the heart of Chicago! Located just steps away from the picturesque Lake Michigan, our vacation rental offers the perfect blend of relaxation and urban excitement. With three spacious bedrooms, our beach house can comfortably accommodate up to six guests. The open-plan living area features a cozy fireplace, comfortable seating, and large windows that provide stunning views of the lake. The fully equipped kitchen is perfect for preparing delicious meals using fresh local ingredients. Enjoy your meals at the dining table while taking in the breathtaking views of the lake. Book your stay at our beautiful beach house today and experience the best that Chicago has to offer!",
    tags: ["Chicago", "Pools", "pool", "kids", "pets"],
    posAttr: ["pool", "kids", "pets"],
    negAttr: ["Smoking"],
    nearby: ["Something", "And another", "Rollercoasters", "Ferris Wheel"],
    price: 95,
  },
  {
    id: 2,
    imgUrl: villa,
    imgs: [villa, patioImg],
    title: "Tuscan Villa",
    rating: 4,
    desc: "This is a beautiful Italian villa located on the Amalfi Coast.",
    longDesc:
      "Welcome to our beautiful beach house in the heart of Chicago! Located just steps away from the picturesque Lake Michigan, our vacation rental offers the perfect blend of relaxation and urban excitement. With three spacious bedrooms, our beach house can comfortably accommodate up to six guests. The open-plan living area features a cozy fireplace, comfortable seating, and large windows that provide stunning views of the lake. The fully equipped kitchen is perfect for preparing delicious meals using fresh local ingredients. Enjoy your meals at the dining table while taking in the breathtaking views of the lake. Book your stay at our beautiful beach house today and experience the best that Chicago has to offer!",
    tags: ["italy", "patio/deck", "pool", "kids", "pets"],
    posAttr: ["pool", "kids", "pets"],
    negAttr: ["Smoking"],
    nearby: ["Something", "And another", "Rollercoasters", "Ferris Wheel"],
    price: 120,
  },
  {
    id: 3,
    imgUrl: chateau,
    imgs: [chateau, hotTubImg],
    title: "French Chateau",
    rating: 3,
    desc: "This is a beautiful beach house located on the cost of Lake Michigan. Located in Evanston, it is perfectly located for easy travel to downtown with the benefit of a quiet community",
    longDesc:
      "Welcome to our beautiful beach house in the heart of Chicago! Located just steps away from the picturesque Lake Michigan, our vacation rental offers the perfect blend of relaxation and urban excitement. With three spacious bedrooms, our beach house can comfortably accommodate up to six guests. The open-plan living area features a cozy fireplace, comfortable seating, and large windows that provide stunning views of the lake. The fully equipped kitchen is perfect for preparing delicious meals using fresh local ingredients. Enjoy your meals at the dining table while taking in the breathtaking views of the lake. Book your stay at our beautiful beach house today and experience the best that Chicago has to offer!",
    tags: ["France", "pools", "pool", "kids", "pets", "Chateau", "hot", "tub"],
    posAttr: ["pool", "kids", "pets", "hot tub"],
    negAttr: ["Smoking"],
    nearby: ["Something", "And another", "Rollercoasters", "Ferris Wheel"],
    price: 150,
  },
  {
    id: 4,
    imgUrl: chateau,
    imgs: [chateau, hotTubImg],
    title: "Some Place Else",
    rating: 2,
    desc: "This is a beautiful beach house located on the cost of Lake Michigan. Located in Evanston, it is perfectly located for easy travel to downtown with the benefit of a quiet community",
    longDesc:
      "Welcome to our beautiful beach house in the heart of Chicago! Located just steps away from the picturesque Lake Michigan, our vacation rental offers the perfect blend of relaxation and urban excitement. With three spacious bedrooms, our beach house can comfortably accommodate up to six guests. The open-plan living area features a cozy fireplace, comfortable seating, and large windows that provide stunning views of the lake. The fully equipped kitchen is perfect for preparing delicious meals using fresh local ingredients. Enjoy your meals at the dining table while taking in the breathtaking views of the lake. Book your stay at our beautiful beach house today and experience the best that Chicago has to offer!",
    tags: ["France", "kids", "pets"],
    posAttr: ["kids", "pets"],
    negAttr: ["Smoking"],
    nearby: ["Something", "And another", "Rollercoasters", "Ferris Wheel"],
    price: 50,
  },
  {
    id: 5,
    imgUrl: chateau,
    imgs: [chateau, hotTubImg],
    title: "Dream Home",
    rating: 5,
    desc: "This is a beautiful beach house located on the cost of Lake Michigan. Located in Evanston, it is perfectly located for easy travel to downtown with the benefit of a quiet community",
    longDesc:
      "Welcome to our beautiful beach house in the heart of Chicago! Located just steps away from the picturesque Lake Michigan, our vacation rental offers the perfect blend of relaxation and urban excitement. With three spacious bedrooms, our beach house can comfortably accommodate up to six guests. The open-plan living area features a cozy fireplace, comfortable seating, and large windows that provide stunning views of the lake. The fully equipped kitchen is perfect for preparing delicious meals using fresh local ingredients. Enjoy your meals at the dining table while taking in the breathtaking views of the lake. Book your stay at our beautiful beach house today and experience the best that Chicago has to offer!",
    tags: ["France", "pools", "pool", "kids", "pets"],
    posAttr: ["pool", "kids", "pets"],
    negAttr: ["Smoking"],
    nearby: ["Something", "And another", "Rollercoasters", "Ferris Wheel"],
    price: 1500,
  },
];

export function getListingById(id) {
  return listings.find((listing) => listing.id === id);
}

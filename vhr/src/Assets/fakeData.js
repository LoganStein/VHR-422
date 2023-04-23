import poolImg from "./images/Pool-Filter.png";
import poolView from "./images/Pool-Filter.png";
import cabinImg from "./images/Cabin-Filter.png";
import mountainCabin from "./images/Cabin-Filter.png";
import homeImg from "./images/Listing-Feature.png";
import patioImg from "./images/Patio-Filter.jpg";
import hotTubImg from "./images/HotTub-Filter.jpg";
import chateau from "./images/chateau.jpg";
import villa from "./images/villa.jpg";
import beachHouse from "./images/villa.jpg";
import beachView from "./images/Home-Feature.png";
import cityView from "./images/Pool-Filter.png";
import cityNight from "./images/Patio-Filter.jpg";
import mountainView from "./images/Pets-Filter.jpg";

export let listings = [
  {
    id: 1,
    imgUrl: homeImg,
    imgs: [homeImg, poolImg],
    title: "1 Chicago Beach House",
    rating: 5,
    desc: "This is a beautiful beach house located on the cost of Lake Michigan. Located in Evanston, it is perfectly located for easy travel to downtown with the benefit of a quiet community",
    longDesc:
      "Welcome to our beautiful beach house in the heart of Chicago! Located just steps away from the picturesque Lake Michigan, our vacation rental offers the perfect blend of relaxation and urban excitement. With three spacious bedrooms, our beach house can comfortably accommodate up to six guests. The open-plan living area features a cozy fireplace, comfortable seating, and large windows that provide stunning views of the lake. The fully equipped kitchen is perfect for preparing delicious meals using fresh local ingredients. Enjoy your meals at the dining table while taking in the breathtaking views of the lake. Book your stay at our beautiful beach house today and experience the best that Chicago has to offer!",
    tags: ["Chicago", "pools", "kids", "pets"],
    posAttr: ["pool", "kids", "pets"],
    negAttr: ["Smoking"],
    nearby: ["Something", "And another", "Rollercoasters", "Ferris Wheel"],
    price: 95,
  },
  {
    id: 2,
    imgUrl: villa,
    imgs: [villa, patioImg],
    title: "2 Tuscan Villa",
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
    title: "3 French Chateau",
    rating: 3,
    desc: "This is a beautiful beach house located on the cost of Lake Michigan. Located in Evanston, it is perfectly located for easy travel to downtown with the benefit of a quiet community",
    longDesc:
      "Welcome to our beautiful beach house in the heart of Chicago! Located just steps away from the picturesque Lake Michigan, our vacation rental offers the perfect blend of relaxation and urban excitement. With three spacious bedrooms, our beach house can comfortably accommodate up to six guests. The open-plan living area features a cozy fireplace, comfortable seating, and large windows that provide stunning views of the lake. The fully equipped kitchen is perfect for preparing delicious meals using fresh local ingredients. Enjoy your meals at the dining table while taking in the breathtaking views of the lake. Book your stay at our beautiful beach house today and experience the best that Chicago has to offer!",
    tags: [
      "France",
      "pools",
      "pool",
      "kids",
      "pets",
      "Chateau",
      "Hot Tub",
      "hot tubs",
      "hot",
      "tub",
    ],
    posAttr: ["pool", "kids", "pets", "hot tub"],
    negAttr: ["Smoking"],
    nearby: ["Something", "And another", "Rollercoasters", "Ferris Wheel"],
    price: 150,
  },
  {
    id: 4,
    imgUrl: chateau,
    imgs: [chateau, hotTubImg],
    title: "4 Some Place Else",
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
    title: "5 Dream Home",
    rating: 5,
    desc: "This is a beautiful beach house located on the cost of Lake Michigan. Located in Evanston, it is perfectly located for easy travel to downtown with the benefit of a quiet community",
    longDesc:
      "Welcome to our beautiful beach house in the heart of Chicago! Located just steps away from the picturesque Lake Michigan, our vacation rental offers the perfect blend of relaxation and urban excitement. With three spacious bedrooms, our beach house can comfortably accommodate up to six guests. The open-plan living area features a cozy fireplace, comfortable seating, and large windows that provide stunning views of the lake. The fully equipped kitchen is perfect for preparing delicious meals using fresh local ingredients. Enjoy your meals at the dining table while taking in the breathtaking views of the lake. Book your stay at our beautiful beach house today and experience the best that Chicago has to offer!",
    tags: ["France", "pools", "pool", "kids"],
    posAttr: ["pool", "kids", "pets"],
    negAttr: ["Smoking"],
    nearby: ["Something", "And another", "Rollercoasters", "Ferris Wheel"],
    price: 1500,
  },
  {
    id: 6,
    imgUrl: beachHouse,
    imgs: [beachHouse, beachView],
    title: "6 Beachfront Getaway",
    rating: 4,
    desc: "Escape to this beautiful beachfront house located in the heart of Santa Monica. Enjoy stunning ocean views and easy access to the beach and nearby attractions.",
    longDesc:
      "Welcome to our beautiful beachfront house in Santa Monica! Our vacation rental offers the perfect blend of relaxation and excitement. With four spacious bedrooms, our beach house can comfortably accommodate up to eight guests. The open-plan living area features comfortable seating, a large TV, and large windows that provide stunning views of the ocean. The fully equipped kitchen is perfect for preparing delicious meals using fresh local ingredients. Enjoy your meals at the dining table while taking in the breathtaking views of the ocean. Book your stay at our beautiful beachfront house today and experience the best that Santa Monica has to offer!",
    tags: ["beach", "ocean", "kids", "pets"],
    posAttr: ["beach", "ocean", "kids", "pets"],
    negAttr: ["Smoking"],
    nearby: [
      "Santa Monica Pier",
      "Third Street Promenade",
      "Venice Beach",
      "Getty Villa",
    ],
    price: 500,
  },
  {
    id: 7,
    imgUrl: mountainCabin,
    imgs: [mountainCabin, mountainView],
    title: "7 Cozy Mountain Cabin",
    rating: 5,
    desc: "Escape to this cozy mountain cabin located in the heart of the Rocky Mountains. Enjoy stunning views and easy access to nearby hiking trails and ski resorts.",
    longDesc:
      "Welcome to our cozy mountain cabin in the heart of the Rocky Mountains! Our vacation rental offers the perfect blend of relaxation and adventure. With two bedrooms and a loft, our cabin can comfortably accommodate up to six guests. The open-plan living area features a cozy fireplace, comfortable seating, and large windows that provide stunning views of the mountains. The fully equipped kitchen is perfect for preparing delicious meals using fresh local ingredients. Enjoy your meals at the dining table while taking in the breathtaking views of the mountains. Book your stay at our cozy mountain cabin today and experience the best that the Rocky Mountains have to offer!",
    tags: ["mountains", "hiking", "skiing", "kids", "pets"],
    posAttr: ["mountains", "hiking", "skiing", "kids", "pets"],
    negAttr: ["Smoking"],
    nearby: [
      "Rocky Mountain National Park",
      "Breckenridge Ski Resort",
      "Vail Ski Resort",
      "Estes Park",
    ],
    price: 1200,
  },
  {
    id: 8,
    imgUrl: cityView,
    imgs: [cityView, cityNight],
    title: "8 Luxury City Apartment",
    rating: 3,
    desc: "Experience luxury living in the heart of the city. Our apartment offers stunning views and easy access to nearby attractions.",
    longDesc:
      "Welcome to our luxury city apartment! Our vacation rental offers the perfect blend of relaxation and urban excitement. With two spacious bedrooms, our apartment can comfortably accommodate up to four guests. The open-plan living area features comfortable seating, a large TV, and large windows that provide stunning views of the city. The fully equipped kitchen is perfect for preparing delicious meals using fresh local ingredients. Enjoy your meals at the dining table while taking in the breathtaking views of the city. Book your stay at our luxury city apartment today and experience the best that the city has to offer!",
    tags: ["city", "luxury", "kids"],
    posAttr: ["city", "luxury", "kids"],
    negAttr: ["Smoking"],
    nearby: [
      "Empire State Building",
      "Central Park",
      "Times Square",
      "Museum of Modern Art",
    ],
    price: 2500,
  },
  {
    id: 9,
    imgUrl: villa,
    imgs: [villa, poolView],
    title: "9 Private Villa with Pool",
    rating: 4,
    desc: "Escape to this private villa with a pool located in the heart of Tuscany. Enjoy stunning views and easy access to nearby vineyards and historic towns.",
    longDesc:
      "Welcome to our private villa with a pool in the heart of Tuscany! Our vacation rental offers the perfect blend of relaxation and adventure. With four spacious bedrooms, our villa can comfortably accommodate up to eight guests. The open-plan living area features comfortable seating, a large TV, and large windows that provide stunning views of the countryside. The fully equipped kitchen is perfect for preparing delicious meals using fresh local ingredients. Enjoy your meals at the dining table while taking in the breathtaking views of the countryside. Book your stay at our private villa with a pool today and experience the best that Tuscany has to offer!",
    tags: ["Tuscany", "villa", "pool", "smoking"],
    posAttr: ["Tuscany", "villa", "pool", "smoking"],
    negAttr: ["kids"],
    nearby: ["Chianti vineyards", "Siena", "Florence", "San Gimignano"],
    price: 250,
  },
  {
    id: 10,
    imgUrl: cabinImg,
    imgs: [cabinImg, hotTubImg],
    title: "10 Rustic Lakefront Cabin",
    rating: 3,
    desc: "Escape to this rustic lakefront cabin located in the heart of the Adirondack Mountains. Enjoy stunning views and easy access to nearby hiking trails and fishing spots.",
    longDesc:
      "Welcome to our rustic lakefront cabin in the heart of the Adirondack Mountains! Our vacation rental offers the perfect blend of relaxation and adventure. With two bedrooms and a loft, our cabin can comfortably accommodate up to six guests. The open-plan living area features a cozy fireplace, comfortable seating, and large windows that provide stunning views of the lake. The fully equipped kitchen is perfect for preparing delicious meals using fresh local ingredients. Enjoy your meals at the dining table while taking in the breathtaking views of the lake. Book your stay at our rustic lakefront cabin today and experience the best that the Adirondack Mountains have to offer!",
    tags: ["Adirondack Mountains", "cabin", "lakefront", "kids", "pets"],
    posAttr: ["Adirondack Mountains", "cabin", "lakefront", "kids", "pets"],
    negAttr: ["Smoking"],
    nearby: [
      "Lake Placid",
      "Whiteface Mountain",
      "High Peaks Wilderness Area",
      "Saranac Lake",
    ],
    price: 250,
  },
];

export function getListingById(id) {
  return listings.find((listing) => listing.id === id);
}

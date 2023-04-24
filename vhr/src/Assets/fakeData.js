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
    title: "Chicago Beach House",
    rating: 5,
    desc: "This is a beautiful beach house located on the cost of Lake Michigan. Located in Evanston, it is perfectly located for easy travel to downtown with the benefit of a quiet community",
    longDesc:
      "<div><p>Welcome to our beautiful beach house in the heart of Chicago! Located just steps away from the picturesque Lake Michigan, our vacation rental offers the perfect blend of relaxation and urban excitement.</p> <p>With three spacious bedrooms, our beach house can comfortably accommodate up to six guests. The open-plan living area features a cozy fireplace, comfortable seating, and large windows that provide stunning views of the lake.</p> <p>The fully equipped kitchen is perfect for preparing delicious meals using fresh local ingredients. Enjoy your meals at the dining table while taking in the breathtaking views of the lake.</p> <p>Book your stay at our beautiful beach house today and experience the best that Chicago has to offer!</p></div>",
    tags: ["Chicago", "pools", "kids", "pets", "ac", "kitchen", "stove"],
    posAttr: ["pool", "kids", "pets", "wifi", "air conditioning"],
    negAttr: ["Smoking"],
    nearby: [
      "Downtown",
      "Magnificent Mile",
      "Jet Skis",
      "Grocery Stores",
      "Theaters",
      "Navy Pier",
      "Beach",
      "Parks",
      "Playground",
    ],
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
      "<div><p>Welcome to our beautiful beach house in the heart of Chicago! Located just steps away from the picturesque Lake Michigan, our vacation rental offers the perfect blend of relaxation and urban excitement.</p> <p>With three spacious bedrooms, our beach house can comfortably accommodate up to six guests. The open-plan living area features a cozy fireplace, comfortable seating, and large windows that provide stunning views of the lake.</p> <p>The fully equipped kitchen is perfect for preparing delicious meals using fresh local ingredients. Enjoy your meals at the dining table while taking in the breathtaking views of the lake.</p> <p>Book your stay at our beautiful beach house today and experience the best that Chicago has to offer!</p></div>",
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
      "<div><p>Welcome to our beautiful beach house in the heart of Chicago! Located just steps away from the picturesque Lake Michigan, our vacation rental offers the perfect blend of relaxation and urban excitement.</p> <p>With three spacious bedrooms, our beach house can comfortably accommodate up to six guests. The open-plan living area features a cozy fireplace, comfortable seating, and large windows that provide stunning views of the lake.</p> <p>The fully equipped kitchen is perfect for preparing delicious meals using fresh local ingredients. Enjoy your meals at the dining table while taking in the breathtaking views of the lake.</p> <p>Book your stay at our beautiful beach house today and experience the best that Chicago has to offer!</p></div>",
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
    title: "Some Place Else",
    rating: 2,
    desc: "This is a beautiful beach house located on the cost of Lake Michigan. Located in Evanston, it is perfectly located for easy travel to downtown with the benefit of a quiet community",
    longDesc:
      "<div><p>Welcome to our beautiful beach house in the heart of Chicago! Located just steps away from the picturesque Lake Michigan, our vacation rental offers the perfect blend of relaxation and urban excitement.</p> <p>With three spacious bedrooms, our beach house can comfortably accommodate up to six guests. The open-plan living area features a cozy fireplace, comfortable seating, and large windows that provide stunning views of the lake.</p> <p>The fully equipped kitchen is perfect for preparing delicious meals using fresh local ingredients. Enjoy your meals at the dining table while taking in the breathtaking views of the lake.</p> <p>Book your stay at our beautiful beach house today and experience the best that Chicago has to offer!</p></div>",
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
      "<div><p>Welcome to our beautiful beach house in the heart of Chicago! Located just steps away from the picturesque Lake Michigan, our vacation rental offers the perfect blend of relaxation and urban excitement.</p> <p>With three spacious bedrooms, our beach house can comfortably accommodate up to six guests. The open-plan living area features a cozy fireplace, comfortable seating, and large windows that provide stunning views of the lake.</p> <p>The fully equipped kitchen is perfect for preparing delicious meals using fresh local ingredients. Enjoy your meals at the dining table while taking in the breathtaking views of the lake.</p> <p>Book your stay at our beautiful beach house today and experience the best that Chicago has to offer!</p></div>",
    tags: ["France", "pools", "pool", "kids", "ac"],
    posAttr: ["pool", "kids", "pets"],
    negAttr: ["Smoking"],
    nearby: ["Something", "And another", "Rollercoasters", "Ferris Wheel"],
    price: 1500,
  },
  {
    id: 6,
    imgUrl: beachHouse,
    imgs: [beachHouse, beachView],
    title: "Beachfront Getaway",
    rating: 4,
    desc: "Escape to this beautiful beachfront house located in the heart of Santa Monica. Enjoy stunning ocean views and easy access to the beach and nearby attractions.",
    longDesc:
      "<div><p>Welcome to our beautiful beach house in the heart of Chicago! Located just steps away from the picturesque Lake Michigan, our vacation rental offers the perfect blend of relaxation and urban excitement.</p> <p>With three spacious bedrooms, our beach house can comfortably accommodate up to six guests. The open-plan living area features a cozy fireplace, comfortable seating, and large windows that provide stunning views of the lake.</p> <p>The fully equipped kitchen is perfect for preparing delicious meals using fresh local ingredients. Enjoy your meals at the dining table while taking in the breathtaking views of the lake.</p> <p>Book your stay at our beautiful beach house today and experience the best that Chicago has to offer!</p></div>",
    tags: ["beach", "ocean", "kids", "pets", "ac"],
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
    title: "Cozy Mountain Cabin",
    rating: 5,
    desc: "Escape to this cozy mountain cabin located in the heart of the Rocky Mountains. Enjoy stunning views and easy access to nearby hiking trails and ski resorts.",
    longDesc:
      "<div><p>Welcome to our beautiful beach house in the heart of Chicago! Located just steps away from the picturesque Lake Michigan, our vacation rental offers the perfect blend of relaxation and urban excitement.</p> <p>With three spacious bedrooms, our beach house can comfortably accommodate up to six guests. The open-plan living area features a cozy fireplace, comfortable seating, and large windows that provide stunning views of the lake.</p> <p>The fully equipped kitchen is perfect for preparing delicious meals using fresh local ingredients. Enjoy your meals at the dining table while taking in the breathtaking views of the lake.</p> <p>Book your stay at our beautiful beach house today and experience the best that Chicago has to offer!</p></div>",
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
    title: "Luxury City Apartment",
    rating: 3,
    desc: "Experience luxury living in the heart of the city. Our apartment offers stunning views and easy access to nearby attractions.",
    longDesc:
      "<div><p>Welcome to our beautiful beach house in the heart of Chicago! Located just steps away from the picturesque Lake Michigan, our vacation rental offers the perfect blend of relaxation and urban excitement.</p> <p>With three spacious bedrooms, our beach house can comfortably accommodate up to six guests. The open-plan living area features a cozy fireplace, comfortable seating, and large windows that provide stunning views of the lake.</p> <p>The fully equipped kitchen is perfect for preparing delicious meals using fresh local ingredients. Enjoy your meals at the dining table while taking in the breathtaking views of the lake.</p> <p>Book your stay at our beautiful beach house today and experience the best that Chicago has to offer!</p></div>",
    tags: [
      "city",
      "luxury",
      "kids",
      "ac",
      "kitchen",
      "oven",
      "stove",
      "washer",
    ],
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
    title: "Private Villa with Pool",
    rating: 4,
    desc: "Escape to this private villa with a pool located in the heart of Tuscany. Enjoy stunning views and easy access to nearby vineyards and historic towns.",
    longDesc:
      "<div><p>Welcome to our beautiful beach house in the heart of Chicago! Located just steps away from the picturesque Lake Michigan, our vacation rental offers the perfect blend of relaxation and urban excitement.</p> <p>With three spacious bedrooms, our beach house can comfortably accommodate up to six guests. The open-plan living area features a cozy fireplace, comfortable seating, and large windows that provide stunning views of the lake.</p> <p>The fully equipped kitchen is perfect for preparing delicious meals using fresh local ingredients. Enjoy your meals at the dining table while taking in the breathtaking views of the lake.</p> <p>Book your stay at our beautiful beach house today and experience the best that Chicago has to offer!</p></div>",
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
    title: "Rustic Lakefront Cabin",
    rating: 3,
    desc: "Escape to this rustic lakefront cabin located in the heart of the Adirondack Mountains. Enjoy stunning views and easy access to nearby hiking trails and fishing spots.",
    longDesc:
      "<div><p>Welcome to our beautiful beach house in the heart of Chicago! Located just steps away from the picturesque Lake Michigan, our vacation rental offers the perfect blend of relaxation and urban excitement.</p> <p>With three spacious bedrooms, our beach house can comfortably accommodate up to six guests. The open-plan living area features a cozy fireplace, comfortable seating, and large windows that provide stunning views of the lake.</p> <p>The fully equipped kitchen is perfect for preparing delicious meals using fresh local ingredients. Enjoy your meals at the dining table while taking in the breathtaking views of the lake.</p> <p>Book your stay at our beautiful beach house today and experience the best that Chicago has to offer!</p></div>",
    tags: [
      "adirondack",
      "mountains",
      "rustic",
      "lake",
      "cabin",
      "lakefront",
      "kids",
      "pets",
    ],
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

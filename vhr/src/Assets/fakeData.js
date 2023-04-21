import poolImg from "./images/Pool-Filter.png";
import cabinImg from "./images/Cabin-Filter.png";
let listings = [
  {
    id: 1,
    imgUrl: poolImg,
    imgs: [poolImg, cabinImg],
    title: "Chicago Beach House",
    rating: 5,
    desc: "This is a beautiful beach house located on the cost of Lake Michigan. Located in Evanston, it is perfectly located for easy travel to downtown with the benefit of a quiet community",
    longDesc:
      "Welcome to our beautiful beach house in the heart of Chicago! Located just steps away from the picturesque Lake Michigan, our vacation rental offers the perfect blend of relaxation and urban excitement. With three spacious bedrooms, our beach house can comfortably accommodate up to six guests. The open-plan living area features a cozy fireplace, comfortable seating, and large windows that provide stunning views of the lake. The fully equipped kitchen is perfect for preparing delicious meals using fresh local ingredients. Enjoy your meals at the dining table while taking in the breathtaking views of the lake. Book your stay at our beautiful beach house today and experience the best that Chicago has to offer!",
    tags: ["Chicago"],
    posAttr: ["pool", "kids", "pets"],
    negAttr: ["Smoking"],
    nearby: ["Something", "And another", "Rollercoasters", "Ferris Wheel"],
    price: 95,
  },
  {
    id: 2,
    imgUrl: poolImg,
    imgs: [poolImg, poolImg],
    title: "Tuscan Villa",
    rating: 4,
    desc: "This is a beautiful Italian villa located on the Amalfi Coast.",
    longDesc:
      "Welcome to our beautiful beach house in the heart of Chicago! Located just steps away from the picturesque Lake Michigan, our vacation rental offers the perfect blend of relaxation and urban excitement. With three spacious bedrooms, our beach house can comfortably accommodate up to six guests. The open-plan living area features a cozy fireplace, comfortable seating, and large windows that provide stunning views of the lake. The fully equipped kitchen is perfect for preparing delicious meals using fresh local ingredients. Enjoy your meals at the dining table while taking in the breathtaking views of the lake. Book your stay at our beautiful beach house today and experience the best that Chicago has to offer!",
    tags: ["italy"],
    posAttr: ["pool", "kids", "pets"],
    negAttr: ["Smoking"],
    nearby: ["Something", "And another", "Rollercoasters", "Ferris Wheel"],
    price: 120,
  },
  {
    id: 3,
    imgUrl: poolImg,
    imgs: [poolImg, poolImg],
    title: "French Chateau",
    rating: 3,
    desc: "This is a beautiful beach house located on the cost of Lake Michigan. Located in Evanston, it is perfectly located for easy travel to downtown with the benefit of a quiet community",
    longDesc:
      "Welcome to our beautiful beach house in the heart of Chicago! Located just steps away from the picturesque Lake Michigan, our vacation rental offers the perfect blend of relaxation and urban excitement. With three spacious bedrooms, our beach house can comfortably accommodate up to six guests. The open-plan living area features a cozy fireplace, comfortable seating, and large windows that provide stunning views of the lake. The fully equipped kitchen is perfect for preparing delicious meals using fresh local ingredients. Enjoy your meals at the dining table while taking in the breathtaking views of the lake. Book your stay at our beautiful beach house today and experience the best that Chicago has to offer!",
    tags: ["France"],
    posAttr: ["pool", "kids", "pets"],
    negAttr: ["Smoking"],
    nearby: ["Something", "And another", "Rollercoasters", "Ferris Wheel"],
    price: 150,
  },
];
export default listings;

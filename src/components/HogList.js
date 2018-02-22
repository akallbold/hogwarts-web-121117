import React from "react";
import Hog from "./Hog";
var snake = require("to-snake-case");

const HogList = ({ hogs_data }) => {
  let hogComponents = hogs_data.map(hog => {
    var hog_name = snake(hog.name)
    return <Hog name={hog.name}
            imgURL={`./hog-imgs/${hog_name}.jpg`}
            specialty={hog.specialty}
            greased={hog.greased}
            weight={hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}
            achieved={hog['highest medal achieved']}
          />
  })

  return (
    <div className="ui grid container">
      {hogComponents}
    </div>
  )
};


// const BookList = ({ books }) => (
//   <div className="book-list">
//     {books.map(book => <Book title="book.title" img_url="book.image_url" />)}
//   </div>
// );

export default HogList;

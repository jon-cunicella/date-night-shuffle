// import React from "react";

// class RandomPlaceComponent extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       place: {}
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(event) {
//     event.preventDefault();
//     fetch(
//       `http://localhost:4000/api/areas/5d4313ab4e41702ed0d671be/places/random`,
//       {
//         headers: {
//           "Access-Control-Allow-Origin": "*",
//           mode: "cors"
//         }
//       }
//     )
//       .then(res => res.json())
//       .then(place => {
//         this.setState({
//           place
//         });
//       });
//   }

//   render() {
//     const { place } = this.state;
//     return (
//       <main className="content">
//         <section className="content__item">
//           <h3 className="restaurant-content">{place.name}</h3>
//           <ul className="placeInfo">
//             <li className="placeInfo__price">Price: {place.price}</li>
//             <li className="placeInfo__category">Category: {place.category}</li>
//             <li className="placeInfo__rating">Rating: {place.rating / 10}</li>
//           </ul>
//         </section>
//         <button className="spinMeRightRoundBaby" onClick={this.handleClick}>
//           Spin to Win
//         </button>
//       </main>
//     );
//   }
// }

// export default RandomPlaceComponent;

import React, {useState} from 'react';
import StarRatings from 'react-star-ratings';
function StarRate(props) {
    const [rating , setRating] = useState(props.rating)

    const changeRating = ( newRating, name ) =>{
        setRating(newRating)
    }

    console.log(rating)
    return (
        <>
            <StarRatings
                rating={rating}
                starRatedColor="blue"
                starHoverColor={'blue'}
                changeRating={changeRating}
                numberOfStars={5}
                name='rating'
            />
        </>
    );
}

export default StarRate;






// class Rating extends React.PureComponent {
//     constructor(props) {
//         super(props);
//         console.log(props)
//         this.state = {
//             rating: props.rating || null,
//             temp_rating: null
//         };
//     }
//
//     changeRating( newRating, name ) {
//         console.log(newRating ,name)
//
//         this.setState({
//             [name]: newRating
//         });
//     }
//     // handleMouseover(rating) {
//     //     this.setState(prev => ({
//     //         rating,
//     //         temp_rating: prev.rating
//     //     }));
//     // }
//     //
//     // handleMouseout() {
//     //     // this.state.rating = this.state.temp_rating;
//     //     // this.setState({ rating: this.state.rating });
//     //     this.setState(prev => ({
//     //         rating: prev.temp_rating
//     //     }));
//     // }
//     //
//     // rate(rating) {
//     //     this.setState({
//     //         rating,
//     //         temp_rating: rating
//     //     });
//     // }
//
//     render() {
//         // const { rating } = this.state;
//         // let stars = [];
//         // for (let i = 0; i < rating; i++) {
//         //     console.log("i", i);
//         //     let klass = "ion-ios-star-outline";
//         //     if (this.state.rating >= i && this.state.rating !== null) {
//         //         klass = "ion-ios-star";
//         //     }
//         //     stars.push(
//         //         <i
//         //             style={{ display: "inline-block", width: "7px", overflow: "hidden", direction: (i%2===0) ? "ltr" : "rtl"}}
//         //             className={klass}
//         //             onMouseOver={() => this.handleMouseover(i)}
//         //             onClick={() => this.rate(i)}
//         //             onMouseOut={() => this.handleMouseout()}
//         //         />
//         //     );
//         // }
//         return (
//             <div className="rating">
//                 <StarRatings
//                 rating={this.state.rating}
//                 starRatedColor="blue"
//                 changeRating={this.changeRating}
//                 numberOfStars={6}
//                 name='rating'
//                 />
//             </div>
//         );
//     }
// }
//
// export default Rating;

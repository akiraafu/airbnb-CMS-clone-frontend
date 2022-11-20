import { urlFor } from "../sanity";

const Review = ({ review }) => {
  // console.log(review);
  return (
    <div className="review-box">
      <h2>{review.rating}</h2>
      <h3>{review.traveller.name}</h3>
      <p>{review.reviewDescription}</p>
      <img
        src={urlFor(review.traveller.image)
          .width(50)
          .height(50)
          .crop("focalpoint")
          .auto("format")}
      />
    </div>
  );
};

export default Review;

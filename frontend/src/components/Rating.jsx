function Rating(props) {
  const { rating, numReviews } = props;

  return (
    <div className="rating">
      <span>
        <i
          className={
            rating >= 1
              ? 'fas far-star'
              : rating > 0.5
              ? 'fas far-star-half-halt'
              : 'fa fa-star'
          }
        ></i>
      </span>

      <span>
        <i
          className={
            rating >= 2
              ? 'fas far-star'
              : rating > 1.5
              ? 'fas far-star-half-halt'
              : 'fa fa-star'
          }
        ></i>
      </span>

      <span>
        <i
          className={
            rating >= 3
              ? 'fas far-star'
              : rating > 2.5
              ? 'fas far-star-half-halt'
              : 'fa fa-star'
          }
        ></i>
      </span>

      <span>
        <i
          className={
            rating >= 4
              ? 'fas far-star'
              : rating > 3.5
              ? 'fas far-star-half-halt'
              : 'fa fa-star'
          }
        ></i>
      </span>

      <span>
        <i
          className={
            rating >= 5
              ? 'fas far-star'
              : rating > 4.5
              ? 'fas far-star-half-halt'
              : 'fa fa-star'
          }
        ></i>
      </span>
      <span> {numReviews} reviews</span>
    </div>
  );
}
export default Rating;

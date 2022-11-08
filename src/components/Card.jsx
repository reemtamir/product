const Card = (props) => {
  const { product } = props;
  return (
    <>
      <div className="col col-3" style={{ width: '15rem', marginLeft: 2 }}>
        <div className="card ">
          <img
            src={product.image}
            className="card-img-top"
            alt={`${product.title}'s image`}
          />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"> {`${product.price} 💲`}</li>
          </ul>
          <div className="card-body">
            <a href="#" className="card-link">
              Card link
            </a>
            <a href="#" className="card-link">
              Another link
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;

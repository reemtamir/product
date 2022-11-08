import Card from './Card';

const ProductsCardList = (props) => {
  const { products } = props;
  return (
    <>
      <div className="row">
        {products.map((product, index) => {
          return <Card key={index} product={product} />;
        })}
      </div>
    </>
  );
};

export default ProductsCardList;

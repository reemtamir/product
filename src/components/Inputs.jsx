import { useState } from 'react';

const Inputs = (props) => {
  const { products, setProducts } = props;
  const [{ title, price, description, image }, setValues] = useState({
    title: '',
    price: '',
    description: '',
    image: '',
  });

  const upload = (obj) => {
    setProducts([...products, obj]);
  };
  const submitValues = ({ target: { name, value, type } }) => {
    setValues((inputs) => {
      return { ...inputs, [name]: type === 'number' ? Number(value) : value };
    });
  };

  return (
    <>
      <div className="row  w-25 m-auto text-center mt-3">
        <label htmlFor="title">Product title</label>
        <input
          onChange={submitValues}
          type="text"
          name="title"
          id="title"
          value={title}
        />
        <label htmlFor="price">Product price</label>
        <input
          onChange={submitValues}
          type="number"
          name="price"
          value={price}
          id="price"
        />
        <label htmlFor="description">Product description</label>
        <textarea
          onChange={submitValues}
          name="description"
          id="description"
          cols="25"
          rows="3"
        ></textarea>
        <label htmlFor="image">Product image-url</label>
        <input
          onChange={submitValues}
          type="text"
          name="image"
          id="image"
          alt=""
          src={image}
        />

        <button
          onClick={() => {
            upload({ title, price, description, image });
          }}
          className="btn btn-primary mt-3"
        >
          Upload
        </button>
      </div>
    </>
  );
};
export default Inputs;

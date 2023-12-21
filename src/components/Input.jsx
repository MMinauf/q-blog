// eslint-disable-next-line no-unused-vars
import classes from './Input.module.css';

const Input = ({ handleSearch, innerRef }) => {
  return (
    <input
      name='search user'
      type='text'
      ref={innerRef}
      placeholder='Search by user name'
      onChange={(e) => handleSearch(e.target.value)}
    />
  );
};

export default Input;

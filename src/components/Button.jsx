function Button({ value, className, onClick }) {
  return (
    <>
      <button className={`${className}`} onClick={onClick}>
        {value}
      </button>
    </>
  );
}

export default Button;
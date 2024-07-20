function Button(prop) {
  return (
    <button className={prop.className}>
      <a href={prop.link} target={prop.target}>{prop.text}</a>
    </button>
  );
}

export default Button;
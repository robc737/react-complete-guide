export default function Product(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <div>{props.price}</div>
      <p>{props.description}</p>
    </div>
  );
}


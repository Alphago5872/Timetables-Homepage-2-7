const NewtonNewsCard = (props) => {
  return (
    <div className="news__card">
      <div className="news__card--info">
        <h1>{props.title}</h1>
        <h2>{props.description}</h2>
        <button>Learn More</button>
      </div>
    </div>
  );
};

export default NewtonNewsCard;

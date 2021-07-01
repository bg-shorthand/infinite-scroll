import { Link } from "react-router-dom";

const ListItem = ({ item }) => {
  const { id, title, content } = item;

  return (
    <li>
      <Link to={`read/${id}`}>
        <h1 key={id}>{id + ". " + title}</h1>
        <p>{content}</p>
      </Link>
    </li>
  );
};

export default ListItem;

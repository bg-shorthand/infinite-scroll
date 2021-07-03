import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ListItem = ({ item }) => {
  const { postType } = useSelector((state) => state.renderState);
  const { id, title, content } = item;

  return (
    <li>
      <Link to={`read/${postType + id}`}>
        <h1 key={id}>{id + ". " + title}</h1>
        <p>{content}</p>
      </Link>
    </li>
  );
};

export default ListItem;

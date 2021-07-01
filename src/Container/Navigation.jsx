import { useDispatch } from "react-redux";
import { createPostTypeAction } from "../redux/reducers/renderState";

const Navigation = () => {
  const dispatch = useDispatch();

  const changePostType = (type) => {
    dispatch(createPostTypeAction(type));
  };

  return (
    <ul>
      <li>
        <button onClick={() => changePostType("a")}>A Posts</button>
      </li>
      <li>
        <button onClick={() => changePostType("b")}>B Posts</button>
      </li>
    </ul>
  );
};

export default Navigation;

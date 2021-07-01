import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../api/api";
import ListItem from "../Components/ListItem";
import { setAListAction, setBListAction } from "../redux/reducers/renderList";
import {
  createAPageAction,
  createBPageAction,
} from "../redux/reducers/renderState";

const List = () => {
  const { aList, bList } = useSelector((state) => state.renderList);
  const { postType, aPage, bPage } = useSelector((state) => state.renderState);
  const dispatch = useDispatch();

  document.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      postType === "a"
        ? dispatch(createAPageAction())
        : dispatch(createBPageAction());
    }
  });

  useEffect(() => {
    const getList = async () => {
      const page = postType === "a" ? aPage : bPage;
      const res = await api.getList(postType, page);
      const list = await res.json();
      if (postType === "a") dispatch(setAListAction(list));
      else dispatch(setBListAction(list));
    };
    getList();
  }, [aPage, bPage]);

  return (
    <ul>
      {postType === "a"
        ? aList.map((item) => {
            return <ListItem key={item.id} item={item} />;
          })
        : bList.map((item) => {
            return <ListItem key={item.id} item={item} />;
          })}
    </ul>
  );
};

export default List;

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../api/api";
import {
  setSearchAListAction,
  setSearchBListAction,
} from "../redux/reducers/renderList";

const Search = () => {
  const { postType, aPage, bPage } = useSelector((state) => state.renderState);
  const dispatch = useDispatch();
  const [word, setWord] = useState("");

  const onChange = async (e) => {
    setWord(e.target.value);
    if (e.target.value) {
      const res = await api.getSearched(postType, word);
      const list = await res.json();
      console.log(list);
      postType === "a"
        ? dispatch(setSearchAListAction(list))
        : dispatch(setSearchBListAction(list));
    } else {
      const page = postType === "a" ? aPage : bPage;
      const res = await api.getList(postType, page);
      const list = await res.json();
      postType === "a"
        ? dispatch(setSearchAListAction(list))
        : dispatch(setSearchBListAction(list));
    }
  };

  return (
    <>
      <input type="text" id="searchInput" value={word} onChange={onChange} />
      <label htmlFor="searchInput">검색어를 입력하세요</label>
    </>
  );
};

export default Search;

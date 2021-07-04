import { useDispatch, useSelector } from "react-redux";
import api from "../api/api";
import debounce from "../module/debounce";
import {
  setSearchAListAction,
  setSearchBListAction,
} from "../redux/reducers/renderList";
import { createSetWordAction } from "../redux/reducers/searchWord";

const Search = () => {
  const { postType, aPage, bPage } = useSelector((state) => state.renderState);
  const searchWord = useSelector((state) => state.searchWord);
  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch(createSetWordAction(e.target.value));
    debounce(async () => {
      if (e.target.value) {
        const res = await api.getSearched(postType, searchWord);
        const list = await res.json();
        postType === "a"
          ? dispatch(setSearchAListAction(list))
          : dispatch(setSearchBListAction(list));
      } else {
        const newList = [];
        const page = postType === "a" ? aPage : bPage;
        for (let i = 0; i <= page; i++) {
          const res = await api.getList(postType, i);
          const list = await res.json();
          newList.push(...list);
        }
        postType === "a"
          ? dispatch(setSearchAListAction(newList))
          : dispatch(setSearchBListAction(newList));
      }
    })();
  };

  return (
    <>
      <input
        type="text"
        id="searchInput"
        value={searchWord}
        onChange={onChange}
      />
      <label htmlFor="searchInput">검색어를 입력하세요</label>
    </>
  );
};

export default Search;

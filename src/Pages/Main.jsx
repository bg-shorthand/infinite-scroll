import List from "../Container/List";
import Navigation from "../Container/Navigation";
import Search from "../Container/Search";

const Main = () => {
  return (
    <>
      <h1>게시물을 검색해보세요</h1>
      <Search />
      <Navigation />
      <List />
    </>
  );
};

export default Main;

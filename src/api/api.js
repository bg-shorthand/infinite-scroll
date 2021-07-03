const URL = "https://recruit-api.yonple.com/recruit/863921";

const api = {
  async getList(postType, page) {
    const res = await fetch(URL + "/" + postType + "-posts?page=" + page);
    return res;
  },
  async getPost(postType, id) {
    const res = await fetch(URL + "/" + postType + "-posts/" + id);
    return res;
  },
  async getSearched(postType, word) {
    const res = await fetch(URL + "/" + postType + "-posts?search=" + word);
    return res;
  },
};

export default api;

let actionFunctions = store => ({
  async loadArticles(state) {
    const res = await fetch('https://storage.googleapis.com/aller-structure-task/test_data.json')
    return { articles: await res.json() }
  },

  modifyArticleTitle(state, title, row, column) {
    const { articles } = state;
    const newArticles = [...articles];
    
    newArticles[0][row].columns[column].title = title;

    return {
      articles: newArticles
    }
  },

  deleteArticle(state, row, column) {
    const { articles } = state;
    const newArticles = [...articles];
    
    newArticles[0][row].columns.splice(column, 1);

    return {
      articles: newArticles
    }
  }
});

export default actionFunctions;
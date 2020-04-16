import React from 'react';

import Layout from './Layout';
import Article from './Article';

import { connect } from 'unistore/react';

import helpers from '../helpers/store-helpers';

class Home extends React.Component {
  componentDidMount() {
    if (this.props.articles && !this.props.articles.length) {
      this.props.loadArticles();
    }
  }

  renderGrid = (articles) => {
    return articles.map((row, i) => {
      return (
        <div className="flex flex-wrap pb-4" key={i}>
          {
            row.columns.map((column, j) => {
              return (
                <div className={`md:w-${column.width}/12 w-full px-1`} key={`${column.url}`}>
                  <Article 
                    article={column}
                    row={i}
                    column={j}
                    modifyArticleTitle={this.props.modifyArticleTitle}
                    deleteArticle={this.props.deleteArticle}
                  />
                </div>
              )
            })
          }
        </div>
      )
    });
  }
  
  render () {
    const { articles } = this.props;

    if (articles && !articles.length) return null;

    return (
      <Layout>
        <h1 className="md:text-5xl text-2xl text-center pb-14">
          Latest News
        </h1>
        <div className="mx-auto md:max-w-5xl">
          {
            this.renderGrid(...articles)
          }
        </div>
      </Layout>
    );
  }
}

export default connect('articles', helpers)(Home);

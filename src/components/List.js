import React from 'react';

import Layout from './Layout';

import { connect } from 'unistore/react';

import helpers from '../helpers/store-helpers';

class List extends React.Component {
  componentDidMount() {
    if (this.props.articles && !this.props.articles.length) {
      this.props.loadArticles();
    }
  }

  render() {
    if (this.props && this.props.articles && this.props.articles.length) {
      return (
        <Layout>
          <div className="flex flex-col">
            {
              this.props && this.props.articles && this.props.articles[0].map((row, i) => {
                return row.columns.map((column, j) => {
                  return (
                    <div className={`md:w-${column.width}/12 w-full px-2 mb-6`} key={`${column.url}`}>
                      {column.title}
                    </div>
                  )
                })
              })
            }
          </div>
        </Layout>
      );
    } else {
      return null;
    }
  }
};

export default connect('articles', helpers)(List);

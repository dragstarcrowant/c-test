import React from 'react';

import Img from './ImgWrap';

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.timeout = null;

    this.state = {
      editingArticle: false,
      removingArticle: false,
      url: undefined
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.article.url === nextState.url) {
      return true
    }
    return false;
  }

  handleChange = (e) => {
    this.props.modifyArticleTitle(e.currentTarget.value, this.props.row, this.props.column);
  }

  toggleEdit = () => {
    this.setState({
      editingArticle: !this.state.editingArticle,
      url: this.props.article.url
    });
  }

  removeArticle = () => {
    if (this.state.removingArticle) {
      clearTimeout(this.timeout);
    } else {
      this.timeout = setTimeout(() => {
        this.props.deleteArticle(this.props.row, this.props.column)
      }, 3000);
    }

    this.setState({
      removingArticle: !this.state.removingArticle,
      url: this.props.article.url
    });
  }
  

  render() {
    const { url, imageUrl, title, width } = this.props.article;

    return (
      <div className="relative md:flex md:flex-col md:h-full justify-stretch items-stretch pb-4">
        <div className="flex py-2">
          <button onClick={this.toggleEdit} className="text-xl text-gray-100 hover:text-gray-700 cursor-pointer hover:bg-gray-300 bg-gray-500 px-6 py-4 flex-1 text-center mr-2">
            Edit Title
          </button>
          <button className="text-xl cursor-pointer hover:text-black hover:bg-red bg-gray-500 px-6 py-4 flex-1 text-center" onClick={this.removeArticle}>
            {
              this.state.removingArticle ? 'Oh no': 'Delete Article'
            }
          </button>
        </div>
        {
          this.state.removingArticle ?
          <button onClick={this.removeArticle} className="z-10 absolute left-50 top-50 tranform-50 bg-white text-black text-xl rounded px-4 py-2 shadow-lg hover:text-red">
            Leave Article
          </button> : null
        }
        {
          <a href={this.state.editingArticle || this.state.removingArticle ? null : url}
            target="_blank"
            className={`rounded block group h-full hover:underline flex flex-col items-center justify-center ${this.state.removingArticle ? 'opacity-50' : 'opacity-100'} opacity-transition`}
          >
            <Img imageUrl={imageUrl} className="mb-4" />
            {
              this.state.editingArticle ? 
              <input type="text" value={title} className="border text-center group-hover:text-red px-2 break-all text-2xl" onChange={this.handleChange}/> :
              <h3 className={`text-center group-hover:text-red px-2 break-all text-${Math.abs((width - 2) % 6)}xl font-bold text-3xl pt-4`}>
                {title}
              </h3>
            }
          </a>
        }
      </div>
    )
  }
}

export default Article;
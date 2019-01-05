import React from 'react'
import {Link} from 'react-router-dom';

import * as BooksAPI from './BooksAPI';
import Shelf from './Shelf';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  componentDidMount() {
    BooksAPI.getAll().then(ajax => {
      this.setState({books: ajax});
    })
  }

  bookUpdater = (book, shelf) => {
    BooksAPI.update(book, shelf).then(resp => {
      book.shelf = shelf;
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat(book)
      }))
    })
  }

  render() {
    return (<div className="list-books">
      <div className="list-books-title">
        <h1>Goodreads</h1>
      </div>
      <div className="list-books-content">

        <div>
          <Shelf bookUpdater={this.bookUpdater} name="Currently Reading" book={this.state.books.filter(b => b.shelf === "currentlyReading")}/>
          <Shelf bookUpdater={this.bookUpdater} name="Want To Read" book={this.state.books.filter(b => b.shelf === "wantToRead")}/>
          <Shelf bookUpdater={this.bookUpdater} name="Read" book={this.state.books.filter(b => b.shelf === "read")}/>
        </div>

        <div className="open-search">
          <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
        </div>
      </div>
    </div>);
  }
}

export default Main;

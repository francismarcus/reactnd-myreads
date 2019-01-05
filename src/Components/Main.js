import React from 'react'
import * as BooksAPI from './BooksAPI';

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
      console.log(ajax);
    })
  }


  render() {
    return(
      <h1> Hello World </h1>
    )
  }
}
export default Main;

{/*
<div className="list-books">
  <div className="list-books-title">
    <h1>MyReads</h1>
  </div>
  <div className="list-books-content">

  <div className="open-search">
    <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
  </div>
</div>
)}
</div>
)
}
}
*/}

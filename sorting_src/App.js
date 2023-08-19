import React from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

function App({articles}) {
    const [articlesList, setArticlesList] = React.useState(articles);
    
    React.useEffect(() => {
        sortByUpvote(articles);
    },[]);

    
    const sortByUpvote = () => {
      let ret = articlesList.slice();
      ret.sort((article_st, article_nd) => {
        if (article_st.upvotes > article_nd.upvotes) {
          return -1;
        }
        if (article_st.upvotes < article_nd.upvotes) {
          return 1;
        }
        return 0;
      })

      setArticlesList(ret);
    }

    const sortByDate = () => {
      let ret = articlesList.slice();
      ret.sort((article_st, article_nd) => {
        const stDate = new Date(article_st.date);
        const ndDate = new Date(article_nd.date);
        if (stDate > ndDate) {
          return -1;
        }
        if (stDate < ndDate) {
          return 1;
        }
        return 0;
      })

      setArticlesList(ret);
    }

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button data-testid="most-upvoted-link" className="small" onClick={() => sortByUpvote()}>Most Upvoted</button>
                <button data-testid="most-recent-link" className="small" onClick={() => sortByDate()}>Most Recent</button>
            </div>
            <Articles articles={articlesList}/>
        </div>
    );

}

export default App;

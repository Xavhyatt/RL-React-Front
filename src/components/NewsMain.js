import React, { Component } from 'react';
import NewsArticle from './NewsArticle';


class NewsMain extends Component {
    constructor(props){
        super(props)

        this.state={
            news:[]
        }
            
        
    
    const NewsAPI = require('newsapi');
    const newsapi = new NewsAPI('a5b874ddda254d3d991545e38bb9a6cb');

    newsapi.v2.everything({
        q:'"rugby league" NOT ("six nations" OR "darts" OR "boxing" OR "news corp" OR "british indoor championships" OR "newcastle united" OR "Sevens")',
        language:'en',
        sortBy:'publishedAt',
        page:2
    }).then(response => {
        this.setState({news: response.articles});
        console.log(this.state.news);
    })
    



    }

    render() {
        
        return (
            <div className='newscontainer'>
               <NewsArticle data={this.state.news} />
            </div>
        );
    }
}

export default NewsMain;
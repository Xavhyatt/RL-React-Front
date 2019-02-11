import React, { Component } from 'react';
import NewsArticle from './NewsArticle';


class PlayerNews extends Component {
    constructor(props){
        super(props)

        this.state={
            news:[]
        }
            let pName= this.props.data.name + " " + this.props.data.surname;
        
    
    const NewsAPI = require('newsapi');
    const newsapi = new NewsAPI('a5b874ddda254d3d991545e38bb9a6cb');
  

    newsapi.v2.everything({
        q: '"'+pName+'"' ,
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

export default PlayerNews;
import React, {Component} from 'react';
 
class NewsArticle extends Component {
    render() {
               let article = this.props.data.map((element) => {
            return (
            
                <div className="col-sm-6">
                    <div className="card" >
                        <h4 className="card-header bg-dark text-white">{element.title}
                            {/* <div className="float-right small">
                                <a className="btn btn-raised btn-danger" title="Ver perfil de Miguel92"
                                    data-toggle="tooltip" data-placement="top" title="Tooltip on top"> 1 
                                    <i className="fa fa-user-circle" aria-hidden="true"></i>
                                </a>
                                <a className="btn btn-raised btn-danger" title="Enviar mensaje"> 2 
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                </a>
                                <a className="btn btn-raised btn-danger"  title="Seguir usuario"> 3 
                                    <i className="fa fa-eye" aria-hidden="true"></i>
                                </a>
                            </div> */}
                        </h4>
                        <div className="card-body">
                            <div className="image float-left user-l">
                                <img  src={element.urlToImage} className="img-thumbnail"
                                    alt="avatar" />
                            </div>
                            <div>
                            <h4><a className="card-title" href={element.url}>{element.title}</a></h4>
                            </div>
                            </div>
                            <div>
                            <p className="card-text">
                            {(element.content).substring(0,257)}<a href={element.url}>... [Continue reading]</a><br/>
                            <br/>
                            Date: {(element.publishedAt).substring(0,10)}   Source: {element.source.name}                         
                             </p>
                             </div>
                        </div>
                    
                </div>
              
            );
        });

        return (
            <div>
                    <div className="row">
                {article}
                </div>
            </div >
        );
        
    }
}

export default NewsArticle;
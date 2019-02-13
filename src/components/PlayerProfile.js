import React, { Component } from 'react';
import './css/popup.css';
// import PlayerNews from './PlayerNews';
import DefaultPProfile from './DefaultPProfile';

class PlayerProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            player: [],
            showMain: true,
            showNews: false
        } 
         console.log(this.props.profile)
    }


// componentDidMount(){
//     console.log(this.props.play);
//     fetch('http://localhost:8090/api/player/' + this.props.play)
//     .then(response => response.json())
//     .then(resData => {
//         // console.log(JSON.stringify(resData))
//         //do your logic here       
//         //let person = resData.results
//         this.setState({ player: resData }); //this is an asynchronous function
//         console.log(this.state.player)
//     })
    

//  }

handleNewsClick(){
    this.setState({showNews:true})
}
// showMain(params) {
//     if (this.state.showMain){
        
//              <DefaultPProfile playerdata={this.state.player}/>

//     }
// }
    

// shouldComponentUpdate(){
//     function Content(){
//         //     console.log(this.state.showMain)
//         // if(this.state.showMain ===true ){
//              return <DefaultPProfile info={this.state.player} />
//         //}
        
//         }
// }

    render() {
       
            return (

        
                
                    <div className="jumbotron p-3 text-center" >
                         <h4 className="display-4">{this.props.play.name} {this.props.play.surname}
                            <div className="float-centre small">
                                <button className="btn btn-raised btn-danger" 
                                    data-toggle="tooltip" data-placement="top" title="Tooltip on top"> Club History 
                                    <i className="fa fa-user-circle" aria-hidden="true"></i>
                                </button>
                                <button className="btn btn-raised btn-danger" title="Enviar mensaje"> Stats 
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                </button>
                                <button className="btn btn-raised btn-danger" onClick={this.showNews} title="Seguir usuario"> News 
                                    <i className="fa fa-eye" aria-hidden="true"></i>
                                </button>
                            </div>
                        </h4>
                        <div className="card-body">
                            <div className="image float-left user-l">
                                <img  src={this.props.play.pictureLink} className="img-thumbnail"
                                    alt="avatar" />
                            </div>
                            
                             {/* <Content />  */}
                              <DefaultPProfile info={this.props.play}/> 
                            
                        </div>
                      
                    </div>
                   
          

            );   
    }
}

export default PlayerProfile;


// function Content(){
// //     console.log(this.state.showMain)
// // if(this.state.showMain ===true ){
//      return <DefaultPProfile info={this.state.player} />
// //}

//}
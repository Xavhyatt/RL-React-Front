import React, { Component } from 'react';



class DefaultPProfile extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
       // console.log(this.props.info);
    }
    render() {
        return (
            <div>
            <h4 className="card-title" >{this.props.info.position}</h4>
            <p className="card-text" >
                Nationality: {this.props.info.nationality}<br />
                Height (cm): {this.props.info.height}<br />
                Weight (kg): {this.props.info.weight}<br />
                Birthday:  {(this.props.info.birth).substring(0,10)}<br /></p>
                </div>
);
    }
}
export default DefaultPProfile;
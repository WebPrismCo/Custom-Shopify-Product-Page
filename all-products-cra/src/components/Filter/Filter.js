import React from 'react';
import './Filter.css';

export default class Filter extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            client: props.client
        }
    }

    handleChange = (e) => {
        this.props.liftFilter(e.target.value)
    }

    componentDidUpdate(prevProps){
        if(prevProps !== this.props){
            this.setState({
                tags: this.props.tags
            })
        }
    }

    render(){
        let options;

        // if(this.state.tags !== undefined){
        //     options = this.state.tags.map((tag, index) => 
        //         <option key={index} value={tag}>{tag}</option>
        //     );
        // }

        if(this.state.tags !== undefined){
            options = this.state.tags.map((tag, index) => 
                <div key={index}>
                    <input type="radio" name="aup_filters" value={tag} />
                    <label>{tag}</label>
                </div>
            )
        }

        return(
            <div className="filter_container">
                <select>
                    <option>Featured</option>
                </select>
                <form onChange={this.handleChange}>
                    {options}
                </form>
            </div>
        )
    }
}
import React from 'react';
import Lay1 from './Lay1'
import LaySingle from './LaySingle';
import Lay2 from './Lay2';
import LayDouble from './LayDouble';

class Container extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            client: props.client,
            previousPages: [],
            page: 0
        };
    }

    getInitProducts = () => {
        this.state.client.product.fetchAll(9).then((products) => {
            this.setState({
                products: products
            });
        });
    }

    pageBack = () => {
        console.log(this.state.previousPages, this.state.page)
        if(this.state.page > 0){
            this.setState({
                products: this.state.previousPages[this.state.page - 1].products,
                page: this.state.page -1
            })
        } else {
            console.log("already at the beginning")
        }
    }

    pageNext = () => {
        let newPreviousPages = this.state.previousPages;
        newPreviousPages.push({
            id: newPreviousPages.length + 1,
            products: this.state.products,
        });

        this.state.client.fetchNextPage(this.state.products).then((data) => {
            this.setState({
                previousPages: newPreviousPages,
                products: data.model,
                page: this.state.page + 1
            }, () => console.log(this.state));
        });
    }

    componentDidMount(){
        this.getInitProducts();
    }

    render(){
        if(!this.state.products){
            return(<div />)
        }
        return(
            <div>
                <div className="aup_products_container">
                    <Lay1 prod1={this.state.products[0]} prod2={this.state.products[1]} />
                    <LaySingle prod={this.state.products[2]} />
                    <Lay2 prod1={this.state.products[3]} prod2={this.state.products[4]}/>
                    <LayDouble prod1={this.state.products[4]} prod2={this.state.products[5]} />
                    <LaySingle prod={this.state.products[6]} />
                    <Lay1 prod1={this.state.products[7]} prod2={this.state.products[8]} />
                </div>
                <div className="aup_products_pagination">
                    <button onClick={() => this.pageBack()}>Prev Page</button>
                        {/* <div>{this.state.previousPages.map((p) => {return (<span className="aup_products_pagination_page_number">{p.id}</span>)})}</div> */}
                    <button onClick={() => this.pageNext()}>Next Page</button>
                </div>
            </div>
        )
    }
}

export default Container
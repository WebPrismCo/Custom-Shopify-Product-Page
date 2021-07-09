import React from 'react';
import Client from 'shopify-buy/index.unoptimized.umd';
import Container from './components/ProductLayouts/Container';
import Filter from './components/Filter/Filter';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      filters: true,
      filter_value: "",
    }
  }

  client = Client.buildClient({
    domain: "frankrelle.myshopify.com",
    storefrontAccessToken: '50c29f9cb69bf6a23e89e19095c2333a'
  });

  productsQuery = this.client.graphQLClient.query((root) => {
    root.addConnection('products', {args: {first: 200}}, (product) => {
      // product.add('title');
      product.add('tags');// Add fields to be returned
    });
  });
  

  handleFilterLift = (data) => {
    this.setState({
      filter_value: data
    })
  }

  componentDidMount(){
    let tagSet = new Set();

    this.client.graphQLClient.send(this.productsQuery).then(({model, data}) => {
      // Do something with the products
      model.products.forEach((p) => {
        p.tags.forEach((t) => {
          tagSet.add(t.value);
        })
      });

      this.setState({
        tags: Array.from(tagSet)
      });
    });
  }

  render(){
    return (
      <div className="fr_app_container">
        <div>{this.state.filters === true ? <Filter client={this.client} liftFilter={this.handleFilterLift} tags={this.state.tags}/> : <span></span>}</div>
        <div className="fr_aup_products_container">
          <Container client={this.client} filter_value={this.state.filter_value}/>
        </div>
      </div>
    );
  }
}

export default App;

//next steps
/*
-- use unoptimized client to pull products w/ tags on Container
-- filter product state based on selected filter
-- restyle product layouts (and mobile style)
-- style filter components
-- change filter to radio buttons from <select>

*/
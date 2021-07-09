import React from 'react';
// import './Styles.css';

class LaySingle extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            products: props
        }

    }

    componentDidUpdate(prevProps){
        if(prevProps.prod.id !== this.props.prod.id){
            this.setState({
                products: this.props
            })
        }
    }


    findLowestPrice = (p) => {
        let prices = p.variants.map(v => parseInt(v.price));
    
        return Math.min(...prices)
    
    }
    
    findProductCollectionFromDescription = (descriptionHtml) => {
        let findSeries = descriptionHtml;
    
        let findStartSeries = findSeries.search("Series:");
        let startSeries = findSeries.substring(findStartSeries);
        let endSeries = startSeries.search("<");
    
        let collection = startSeries.substring(8,endSeries).trim();
    
        return collection;
    }

    render(){
        return (<div className="recent-work-wrapper">
                    <div className="recent-work-3">
                        <div className="recent-work-3-img-wrap">
                            <img src={this.state.products.prod.images[0].src} loading="lazy" width="980" sizes="(max-width: 479px) 75vw, (max-width: 767px) 84vw, (max-width: 991px) 88vw, 99vw" id="recent-work-large-img" alt="" className="image-4"/>
                        </div>
                    </div>
                    <div className="info-wrapper">
                        <h1 id="recent-work-large-title" className="recent_work_title">{this.state.products.prod.title}</h1>
                        <div id="recent-work-large-collection" className="recent_work_collection">{this.findProductCollectionFromDescription(this.state.products.prod.descriptionHtml)}</div>
                            <div id="recent-work-large-price" className="recent_work_price">${this.findLowestPrice(this.state.products.prod)}</div>
                            <a id="recent-work-large-purchase" href="#" className="recent_work_purchase_option">Purchase Options</a>
                            <div className="recent_work_purchase_decoration"></div>
                    </div>
            </div>);
    }
}

export default LaySingle;
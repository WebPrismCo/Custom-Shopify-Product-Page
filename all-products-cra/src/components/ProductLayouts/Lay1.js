import React from 'react';

class Lay1 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            products: props
        }

    }

    componentDidUpdate(prevProps){
        if(prevProps.prod1.id !== this.props.prod1.id){
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
                    <div className="w-layout-grid grid">
                        <div id="recent-work-left" className="recent_work_left w-node-_169b683b-d13b-61ce-8a0f-bd9da3a9e7e9-0f696565">
                            <img src={this.state.products.prod1.images[0].src} loading="lazy" width="812" id="recent-work-left-image" alt="" className="recent-work-left-img" />
                            <div className="info-wrapper">
                                <h1 id="recent-work-1" className="recent_work_title">{this.state.products.prod1.title}</h1>
                                <div id="recent-work-collection-left" className="recent_work_collection">{this.findProductCollectionFromDescription(this.state.products.prod1.descriptionHtml)}</div>
                                <div id="recent-work-price-left" className="recent_work_price">${this.findLowestPrice(this.state.products.prod1)}</div>
                                <a id="recent-work-purchase-left" href="#" className="recent_work_purchase_option">Purchase Options</a>
                                <div className="recent_work_purchase_decoration"></div>
                            </div>
                        </div>
                    <div id="recent-work-right" className="recent-work-right w-node-_13a1793f-6228-ada8-5ebc-13e502a0c893-0f696565">
                        <img src={this.state.products.prod2.images[0].src} loading="lazy" width="376" sizes="(max-width: 479px) 75vw, (max-width: 767px) 84vw, (max-width: 991px) 88vw, 99vw" id="recent-work-image-right" alt="" className="recent-work-right-img"/>
                        <div className="info-wrapper">
                            <h1 id="recent-work-title-right" className="recent_work_title">{this.state.products.prod2.title}</h1>
                            <div id="recent-work-collection-right" className="recent_work_collection">{this.findProductCollectionFromDescription(this.state.products.prod2.descriptionHtml)}</div>
                            <div id="recent-work-price-right" className="recent_work_price">${this.findLowestPrice(this.state.products.prod2)}</div>
                            <a id="recent-work-purchase-right" href="#" className="recent_work_purchase_option">Purchase Options</a>
                            <div className="recent_work_purchase_decoration"></div>
                            </div>
                        </div>
                    </div>
            </div>);
    }
}

export default Lay1;
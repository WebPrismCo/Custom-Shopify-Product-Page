import React from 'react';
import './Styles.css';

class Lay2 extends React.Component {
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
                        <div className="w-layout-grid grid-2">
                        <div id="w-node-d430a835-63f5-0995-8ed8-4fdebfb748a2-0d09bb43" className="rare-work-left">
                            <img src={this.state.products.prod1.images[0].src} loading="lazy" width="812" id="rare-work-left-img" alt="" className="recent-work-left-img" />
                            <div>
                                <h1 id="rare-work-left-title" className="recent_work_title">{this.state.products.prod1.title}</h1>
                            <div id="rare-work-left-collection" className="recent_work_collection">{this.findProductCollectionFromDescription(this.state.products.prod1.descriptionHtml)}</div>
                            <div id="rare-work-left-price" className="recent_work_price">${this.findLowestPrice(this.state.products.prod1)}</div>
                            <a id="rare-work-left-purchase" href="#" className="recent_work_purchase_option">Purchase Options</a>
                            <div className="recent_work_purchase_decoration"></div>
                            </div>
                        </div>
                        <div id="w-node-_2a2b7829-7cb7-215e-0883-8b24995eb0d7-0d09bb43" className="rare-work-right">
                            <img src={this.state.products.prod2.images[0].src} loading="lazy" width="376" sizes="(max-width: 479px) 75vw, (max-width: 767px) 84vw, (max-width: 991px) 88vw, 99vw" id="rare-work-right-img" alt="" className="recent-work-right-img" />
                            <div>
                                <h1 id="rare-work-right-title" className="recent_work_title">{this.state.products.prod2.title}</h1>
                                <div id="rare-work-right-collection" className="recent_work_collection">{this.findProductCollectionFromDescription(this.state.products.prod2.descriptionHtml)}</div>
                                <div id="rare-work-right-price" className="recent_work_price">${this.findLowestPrice(this.state.products.prod2)}</div>
                                <a id="rare-work-right-purchase" href="#" className="recent_work_purchase_option">Purchase Options</a>
                                <div className="recent_work_purchase_decoration"></div>
                            </div>
                        </div>
                    </div>
                </div>);
    }
}

export default Lay2;
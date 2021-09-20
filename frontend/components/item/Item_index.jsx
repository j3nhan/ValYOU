import React from 'react';
import LoadingPage from '../Loading_page';
import ItemCard from './Item_card';

class ItemIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rendered: false
        }
    }

    componentDidMount() {
        this.props.fetchItems()
            .done(() => this.setState({ rendered: true }))
    }

    render() {
        if (!this.props.items) return null;

        if (!this.state.rendered) {
            return (
                <div>
                    <LoadingPage/>
                </div>
            )
        } else {
            return (
                <div>
                    <div className="item-index-cont">
                        <h1 className="all-items-head">Recommended For You</h1> 
                        
                        <div className="home">
                            <div className="catagory-name">Farmers Market</div>   
                            <div className="home-row">
                                    {this.props.items.slice(0, 5).map((item, idx) => <ItemCard key={idx} item={item} />)}
                            </div>
                            

                            <div className="catagory-name">Women-Owned</div>
                            <div className="home-row">
                                    {this.props.items.slice(5, 10).map((item, idx) => <ItemCard key={idx} item={item} />)}
                            </div>

                            <div className="catagory-name">Veteran-Owned</div>
                            <div className="home-row">
                                    {this.props.items.slice(10, 15).map((item, idx) => <ItemCard key={idx} item={item} />)}
                            </div>

                            <div className="catagory-name">Mom & Pop</div>
                            <div className="home-row">
                                    {this.props.items.slice(15, 20).map((item, idx) => <ItemCard key={idx} item={item} />)}
                            </div>

                            
                            <div className="catagory-name">Disability-Owned</div>
                            <div className="home-row">
                                    {this.props.items.slice(20, 25).map((item, idx) => <ItemCard key={idx} item={item} />)}
                            </div>
                        </div>

                    </div>
                </div>
            )
        }
    }
};

export default ItemIndex;
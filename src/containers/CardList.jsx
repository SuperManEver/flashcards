import React from 'react';
import {connect} from 'react-redux';
import Card from '../components/Card.jsx';

const CardList = React.createClass({
  render () {
    let {cards}     = this.props;
    const allCards  = cards.map((card, idx) => <Card key={idx} card={card} />);
    return <div className="cards-container">
        {allCards}
      </div>;
  }  
});

function mapStateToProps (state, ownProps) {
  return {
    cards : state.cards
  };
}

export default connect(mapStateToProps)(CardList);

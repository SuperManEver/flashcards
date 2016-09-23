import React from 'react';
import {connect} from 'react-redux';

const Card = ({card}) => {
  return (
    <div className="col-sm-4 card-item">
      <p>{card.front}</p>
    </div>
  );
};

const CardList = React.createClass({
  render () {
    let {cards}     = this.props;
    const allCards  = cards.map((card) => <Card card={card} />);
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

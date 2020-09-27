import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div>
        <div>
          <div className='card'>
            <div className='card-category'>150 EUR</div>
            <div className='card-description'>
              <h2>Super 60m2 in trendy neighborhood!</h2>
            </div>
            <a className='card-link' href='#'></a>
          </div>
        </div>
      </div>
    );
  }
}
export default Card;

import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import SubmitEvent from '../components/submission/SubmitEvent';
import PropTypes from 'prop-types';
import { getContact, getName, getDate, getTime, getLocation, getPrice, getMinAge, getMaxAge, getCategory, getDescription, getReduced } from '../selectors/submitEvent';
import { createEvent, updateContact, updateEventName, updateDate, updateTime, updateLocation, updatePrice, updateMinAge, updateMaxAge, updateRr, updateCategory, updateDescription } from '../actions/submitEvent';

class SubmitContainer extends PureComponent {
  static propTypes = {
    contact: PropTypes.object,
    name: PropTypes.string,
    date: PropTypes.number,
    time: PropTypes.string,
    location: PropTypes.object,
    price: PropTypes.string,
    minAge: PropTypes.number,
    maxAge: PropTypes.number,
    reducedRate: PropTypes.bool,
    category: PropTypes.string,
    description: PropTypes.string
  };
  render()  {
    return (
      <SubmitEvent {...this.props}/>
    );
  }
}
const mapStateToProps = state => ({
  contact: getContact(state),
  name: getName(state),
  date: getDate(state),
  time: getTime(state),
  location: getLocation(state),
  price: getPrice(state),
  minAge: getMinAge(state),
  maxAge: getMaxAge(state),
  reducedRate: getReduced(state),
  category: getCategory(state),
  description: getDescription(state)
});

const mapDispatchToProps = dispatch => ({
  handleChange({ target }) {
    const factoryMethod = {
      contact: updateContact,
      name: updateEventName,
      date: updateDate,
      time: updateTime,
      location: updateLocation,
      price: updatePrice,
      minAge: updateMinAge,
      maxAge: updateMaxAge,
      reducedRate: updateRr,
      category: updateCategory,
      description: updateDescription,
    };
    dispatch(factoryMethod[target.name](target.value));
  },

  handleSubmit(contact, name, date, time, location, price, minAge, maxAge, reducedRate, category, description, event) {
    event.preventDefault();
    dispatch(createEvent({ contact, name, date, time, location, price, minAge, maxAge, reducedRate, category, description }));
  },
  
  rrSelect(event) {
    this.setState({
      reducedRate: event.target.value
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubmitContainer);

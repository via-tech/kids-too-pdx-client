import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import SubmitEvent from '../../components/submission/SubmitEvent';
import PropTypes from 'prop-types';
import { getContact, getName, getDate, getTime, getLocation, getPrice, getMinAge, getMaxAge, getCategory, getDescription, getReduced, getInsurance, getWebsite } from '../../selectors/submitEvent';
import {
  createEvent, updateEventName, updateDate, updateTime, updateLocationAddress, updateLocationCity, updateLocationState, updateLocationZipcode, updatePrice, updateMinAge, updateMaxAge, updateRr, updateInsurance, updateCategory, updateDescription, updateContactEmail, updateContactPhone, updateLocationVenue, updateContactName,
  clearForm, updateWebsite
} from '../../actions/submitEvent';

class SubmitContainer extends PureComponent {
  static propTypes = {
    contact: PropTypes.object,
    name: PropTypes.string,
    website: PropTypes.string,
    date: PropTypes.string,
    time: PropTypes.string,
    location: PropTypes.object,
    price: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    minAge: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    maxAge: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    reducedRate: PropTypes.bool,
    eventInsurance: PropTypes.bool,
    category: PropTypes.string,
    description: PropTypes.string,
    clear: PropTypes.func.isRequired
  };

  componentWillUnmount(){
    this.props.clear();
  }
  render() {
    return (
      <SubmitEvent {...this.props} />
    );
  }
}

const mapStateToProps = state => ({
  contact: getContact(state),
  name: getName(state),
  website: getWebsite(state),
  date: getDate(state),
  time: getTime(state),
  location: getLocation(state),
  price: getPrice(state),
  minAge: getMinAge(state),
  maxAge: getMaxAge(state),
  reducedRate: getReduced(state),
  eventInsurance: getInsurance(state),
  category: getCategory(state),
  description: getDescription(state)
});

const mapDispatchToProps = (dispatch, props) => ({
  handleChange({ target }) {
    console.log('HI', target.name);
    const factoryMethod = {
      contactName: updateContactName,
      contactEmail: updateContactEmail,
      contactPhone: updateContactPhone,
      name: updateEventName,
      website: updateWebsite,
      date: updateDate,
      time: updateTime,
      locationVenue: updateLocationVenue,
      locationAddress: updateLocationAddress,
      locationCity: updateLocationCity,
      locationState: updateLocationState,
      locationZipcode: updateLocationZipcode,
      price: updatePrice,
      minAge: updateMinAge,
      maxAge: updateMaxAge,
      reducedRate: updateRr,
      eventInsurance: updateInsurance,
      category: updateCategory,
      description: updateDescription,
    };
    dispatch(factoryMethod[target.name](target.value));
  },

  handleSubmit(contact, name, website, date, time, location, price, minAge, maxAge, reducedRate, category, description, event) {
    event.preventDefault();
    const action = createEvent({ contact, name, website, date, time, location, price, minAge, maxAge, reducedRate, category, description });
    dispatch(action);
    action.payload.then(({ _id }) => {
      props.history.push(`/events/${_id}`);
    });
  },
  
  clear() {
    dispatch(clearForm());
  },
  rrSelect({ target }) {
    dispatch(updateRr(target.checked));
  },
  insuranceSelect({ target }) {
    dispatch(updateInsurance(target.checked));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubmitContainer);

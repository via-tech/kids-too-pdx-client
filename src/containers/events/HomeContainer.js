import Events from '../../components/events/Events';
import { connect } from 'react-redux';
import { getEvents, isLoading } from '../../selectors/events';
import {
  fetchEvents,
  updateFilters,
  fetchFilteredEvents
} from '../../actions/events';
import { getFilters } from '../../selectors/events';
import { withFetch } from '../../components/withFetch';
import store from '../../store';

const mapStateToProps = state => ({
  events: getEvents(state),
  loading: isLoading(state),
  details: false
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    return dispatch(fetchEvents());
  },

  onChange({ target }) {
    return dispatch(updateFilters({
      [target.name]: target.value
    }));
  },

  onSubmit(event) {
    event.preventDefault();
    return dispatch(fetchFilteredEvents(getFilters(store.getState())));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withFetch(Events));

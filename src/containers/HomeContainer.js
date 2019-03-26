import Events from '../components/events/Events';
import { connect } from 'react-redux';
import { getEvents, isLoading } from '../selectors/events';
import { fetchEvents } from '../actions/events';
import { withFetch } from '../components/withFetch';

const mapStateToProps = state => ({
  events: getEvents(state),
  loading: isLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    return dispatch(fetchEvents());
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withFetch(Events));

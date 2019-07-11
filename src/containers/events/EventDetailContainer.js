import { connect } from 'react-redux';
import { fetchEventDetail } from '../../actions/eventDetail';
import { withRouter } from 'react-router-dom';
import { withFetch } from '../../components/wrappers/withFetch';
import Event from '../../components/events/Event';
import { getEventDetail } from '../../selectors/eventDetail';

const mapStateToProps = state => ({
  event: getEventDetail(state),
  details: true
});

const mapDispatchToProps = (dispatch, props) => ({
  fetch() {
    dispatch(fetchEventDetail(props.match.params.id));
  },
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(withFetch(Event)));

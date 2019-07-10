import Resources from '../../components/resources/Resources';
import { connect } from 'react-redux';
import { getOrgs } from '../../selectors/resources';
import { fetchOrgs } from '../../actions/resources';
import { withFetch } from '../../components/wrappers/withFetch';

const mapStateToProps = state => ({
  orgs: getOrgs(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    return dispatch(fetchOrgs());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withFetch(Resources));

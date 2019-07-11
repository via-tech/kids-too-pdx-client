import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { SyncLoader } from 'react-spinners';
import styles from './Wrappers.css';

export const withFetch = Component => {
  class WithFetch extends PureComponent {
    static propTypes = {
      fetch: PropTypes.func.isRequired,
      loading: PropTypes.bool.isRequired
    };

    static defaultProps = {
      loading: false
    };

    componentDidMount() {
      this.props.fetch();
    }

    render() {
      const { loading } = this.props;
      return (
        <div className={styles.Wrappers}>
          {loading ?
            <div className={styles.Loader}>
              <SyncLoader 
                sizeUnit={'px'}
                size={30}
                color={'#123abc'}
              />
            </div>
            : <Component {...this.props} />}
        </div>
      );
    }
  }
  return WithFetch;
};

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { SyncLoader } from 'react-spinners';
import Styles from './home/Home.css';

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
        <>
          {loading ?
            <div className={Styles.Loader}>
              <SyncLoader 
                sizeUnit={'px'}
                size={30}
                color={'#123abc'}
              />
            </div>
            : <Component {...this.props} />}
        </>
      );
    }
  }
  return WithFetch;
};

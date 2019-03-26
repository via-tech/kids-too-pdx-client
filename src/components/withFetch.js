import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

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
            <h1>LOADING!!!!</h1 >
            : <Component {...this.props} />}
        </>
      );
    }
  }
  return WithFetch;
};

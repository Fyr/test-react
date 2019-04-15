import {App} from './App';
import { connect } from 'react-redux';

const userClicked = (id) => ({
  type: 'USER_CLICKED',
  data: {id}
})

const mapStateToProps = (store) => {
  return {
    users: store.users
  };
}

const mapDispatchToProps = function(dispatch) {
  return {
    handleClick: (id) => dispatch(userClicked(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
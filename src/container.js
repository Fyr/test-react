import {App} from './App';
import { connect } from 'react-redux';

const userClicked = (id) => ({
  type: 'USER_CLICKED',
  data: {id}
})

/*
const mapStateToProps = (store) => {
  return {
    users: store.users
  };
}
*/
const mapDispatchToProps = function(dispatch, obj) {
  console.log('mapDispatchToProps', dispatch, obj);
  return {
    ...dispatch,
    handleClick: (id) => dispatch(userClicked(id))
  }
};

// export default connect(mapStateToProps, mapDispatchToProps)(App);


export default connect((state) => {
    console.log('Connect:', state);
    return state;
})(App);

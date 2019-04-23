import {App} from './App';
import { connect } from 'react-redux';
import { fetchDog, fetchCat } from './actions';

const userClicked = (id) => ({
  type: 'USER_CLICKED',
  data: {id}
})


const mapStateToProps = (state) => {
  return {
    users: state.userReducer.users,
    apiData: state.apiReducer
  };
}

const mapDispatchToProps = function(dispatch, obj) {
  console.log('mapDispatchToProps', dispatch, obj);
  return {
    fetchDog: () => dispatch(fetchDog()),
    fetchCat: () => dispatch(fetchCat()),
    handleClick: (id) => dispatch(userClicked(id))
  }
};

 export default connect(mapStateToProps, mapDispatchToProps)(App);


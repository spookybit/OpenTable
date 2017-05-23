import { connect } from 'react-redux';
import { postReview } from '../../actions/restaurant_actions';
import ReviewForm from './review_form';

const mapStateToProps = ({session}, ownProps) => ({
  currentUsername: session.currentUser.username,
  currentUserId: session.currentUser.id,
  restaurant: ownProps.restaurant
});

const mapDispatchToProps = dispatch => ({
  postReview: (restaurant_id, review) => dispatch(postReview(restaurant_id, review))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);

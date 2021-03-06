import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { connect } from "react-redux";
import { addLike, removeLike } from "../../redux/actions/post";

const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: {
    _id,
    Title,
    Author,
    Article_Link,
    likes,
    comments,
    Date,
    Description,
    Topic,
    user,
  },
}) => {
  return (
    <div className="post bg-white p-1 ">
      {/* <div>
        <Link to={`/profile/${user}`}>
          <img src={avatar} alt="Profile" className="round-img" />
          <h4>{name}</h4>
        </Link>
      </div> */}
      <div>
        <a href={Article_Link} target="_blank">
          <h3>{Title}</h3>
        </a>
        <p>{Description}</p>

        <p>
          {/* Posted on <Moment format="DD/MM/YYYY">{Date}</Moment> */}
          {Date}
        </p>
        <p>{Topic}</p>
        <p>{Author}</p>
        <button
          onClick={(e) => addLike(_id)}
          type="button"
          className="btn btn-light"
        >
          <i className="fas fa-thumbs-up"></i>{" "}
          <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
        </button>
        <button
          onClick={(e) => removeLike(_id)}
          type="button"
          className="btn btn-light"
        >
          <i className="fas fa-thumbs-down"></i>
        </button>
        <Link to={`/posts/${_id}`} className="btn btn-primary">
          Discussion{" "}
          {comments.length > 0 && (
            <span className="comment-count">{comments.length}</span>
          )}
        </Link>
        {/* {!auth.loading && user === auth.user._id && (
          <button
            onClick={(e) => deletePost(_id)}
            type="button"
            className="btn btn-danger"
          >
            <i className="fas fa-times"></i>
          </button>
        )} */}
      </div>
    </div>
  );
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  // deletePost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addLike, removeLike })(PostItem);

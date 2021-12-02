import axios from "axios";
import {
   CREATE_POST,
   GET_POST,
   GET_POSTS,
   UPDATE_POST,
   DELETE_POST,
   TOGGLE_POSTS_LOADING,
   TOGGLE_POST_LOADING,
   RESET_POST
} from "./types";

import { setErrors, clearErrors } from "./errorActions";

export const createPost = (postData, history) => dispatch => {
   dispatch(togglePostLoading());
   axios
      .post("/api/posts/create", postData)
      .then(res => {
         dispatch({
            type: CREATE_POST,
            payload: res.data
         });
         history.push("/index");
      })
      .catch(err => {
         dispatch(setErrors(err.response.data));
      });
};

export const getPostByID = id => dispatch => {
   dispatch(togglePostLoading());
   axios
      .get(`/api/posts/post/${id}`)
      .then(res => {
         dispatch({
            type: GET_POST,
            payload: res.data
         });
         dispatch(clearErrors());
         dispatch(togglePostLoading());
      })

      .catch(err => {
            console.log(err)
            dispatch(setErrors(err.response.data));
            dispatch(togglePostLoading());
      });
};

// export const getPostsByAuthor = author => dispatch => {
//    dispatch(togglePostsLoading());
//    axios
//       .get(`/api/posts/author/${author}`)
//       .then(res => {
//          dispatch({
//             type: GET_POSTS,
//             payload: res.data
//          });
//          dispatch(togglePostsLoading());
//       })
//       .catch(err => {
//          dispatch(setErrors(err.response.data));
//          dispatch(togglePostsLoading());
//       });
// };

export const getPosts = () => dispatch => {
   dispatch(togglePostsLoading());
   axios
      .get(`/api/posts/`)
      .then(res => {
         dispatch({
            type: GET_POSTS,
            payload: res.data
         });
         dispatch(clearErrors());
         dispatch(togglePostsLoading());
      })
      .catch(err => {
         dispatch(setErrors(err.response.data));
         dispatch(togglePostsLoading());
      });
};

export const addComment = (id, postData) => async (dispatch) => {
   dispatch(togglePostLoading());
   console.log("Inside addComment");
   try {
      let result = await axios.patch(          // any call like get
        `/api/posts/update/${id}`,         // your URL
        {                                     // data if post, put
          comments: postData.comments,
          title: postData.title,
          body: postData.body
        }
      );
      console.log(result.response.data);
    } catch (error) {
      console.error(error.response.data);     // NOTE - use "error.response.data` (not "error")
    }
}

export const updatePost = (id, postData, history) => dispatch => {
   dispatch(togglePostLoading());
   console.log("Inside updatePost");
   axios
      .patch(`/api/posts/update/${id}`, postData)
      .then(res => {
         console.log("Inside .then")
         dispatch({
            type: UPDATE_POST,
            payload: res.data
         });
         dispatch(togglePostLoading());
         history.push(`/page/${res.data._id}`);
      })
      .catch(err => {
         console.log(err);
         console.log(err.response.data)
         dispatch(setErrors(err.response.data));
         dispatch(togglePostLoading());
      });
};

export const deletePost = (id, history) => dispatch => {
   dispatch(togglePostLoading());
   axios
      .delete(`/api/posts/delete/${id}`)
      .then(res => {
         dispatch({
            type: DELETE_POST,
            payload: id
         });
         dispatch(togglePostLoading());
         history.push("/index");
      })
      .catch(err => {
         dispatch(setErrors(err.response.data));
         dispatch(togglePostLoading());
      });
};

export const resetPost = () => {
   return {
      type: RESET_POST
   };
};

export const togglePostLoading = () => {
   return {
      type: TOGGLE_POST_LOADING
   };
};

export const togglePostsLoading = () => {
   return {
      type: TOGGLE_POSTS_LOADING
   };
};
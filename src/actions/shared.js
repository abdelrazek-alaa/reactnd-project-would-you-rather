import {
  _getUsers,
  _getQuestions,
  _saveQuestionAnswer,
  _saveQuestion,
} from "../fakeDatabase/_DATA";
import {
  receiveQuestions,
  saveQuestionAnswer,
  removeQuestionAnswer,
  addQuestion,
} from "./questions";
import {
  receiveUsers,
  saveUserQuestionAnswer,
  removeUserQuestionAnswer,
  addUserQuestion,
} from "./users";
import { setAuthedUser } from "./authedUser";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return Promise.all([_getUsers(), _getQuestions()]).then(
      ([users, questions]) => {
        dispatch(receiveUsers(users));
        dispatch(receiveQuestions(questions));
        dispatch(setAuthedUser("johndoe")); // temporary dispatch for testing purpose
        dispatch(hideLoading());
      }
    );
  };
}

export function handleSaveQuestionAnswer(info) {
  // Optimistic Update technique is used here
  return (dispatch) => {
    dispatch(saveQuestionAnswer(info));
    dispatch(saveUserQuestionAnswer(info));

    return _saveQuestionAnswer(info).catch((e) => {
      console.warn("Error in handleSaveQuestionAnswer: ", e);
      dispatch(removeQuestionAnswer(info));
      dispatch(removeUserQuestionAnswer(info));
      alert("There was an error Answering the question. Try again.");
    });
  };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser: author } = getState();
    dispatch(showLoading());
    return _saveQuestion({ author, optionOneText, optionTwoText })
      .then((question) => {
        dispatch(addQuestion(question));
        dispatch(addUserQuestion({ qid: question.id, authedUser: author }));
      })
      .then(() => dispatch(hideLoading()));
  };
}

export const RECEIVE_USERS = "RECEIVE_USERS";
export const SAVE_USER_QUESTION_ANSWER = "SAVE_USER_QUESTION_ANSWER";
export const REMOVE_USER_QUESTION_ANSWER = "REMOVE_USER_QUESTION_ANSWER";
export const ADD_USER_QUESTION = "ADD_USER_QUESTION";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function saveUserQuestionAnswer({ authedUser, qid, answer }) {
  return {
    type: SAVE_USER_QUESTION_ANSWER,
    authedUser,
    qid,
    answer,
  };
}

export function removeUserQuestionAnswer({ authedUser, qid }) {
  return {
    type: REMOVE_USER_QUESTION_ANSWER,
    authedUser,
    qid,
  };
}

export function addUserQuestion({ authedUser, qid }) {
  return {
    type: ADD_USER_QUESTION,
    qid,
    authedUser,
  };
}

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER";
export const REMOVE_QUESTION_ANSWER = "REMOVE_QUESTION_ANSWER";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function saveQuestionAnswer({ authedUser, qid, answer }) {
  return {
    type: SAVE_QUESTION_ANSWER,
    authedUser,
    qid,
    answer,
  };
}

export function removeQuestionAnswer({ authedUser, qid, answer }) {
  return {
    type: REMOVE_QUESTION_ANSWER,
    authedUser,
    qid,
    answer,
  };
}

import {
  RECEIVE_USERS,
  SAVE_USER_QUESTION_ANSWER,
  REMOVE_USER_QUESTION_ANSWER,
} from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case SAVE_USER_QUESTION_ANSWER:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.qid]: action.answer,
          },
        },
      };
    case REMOVE_USER_QUESTION_ANSWER:
      // eslint-disable-next-line
      const { [action.qid]: excludedQid, ...authedUserAnswers } =
        state[action.authedUser].answers;

      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...authedUserAnswers,
          },
        },
      };
    default:
      return state;
  }
}

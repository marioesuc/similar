/* Types file that maps the type key located into the generated action,
it associates every string to a variable  This way, the syntax analizer is going to throw
an error in case we type a variable wrongly in other parts of the App
A String would be always accepted and we could be strugling with that until we 
find the cause of the error
*/

// Types for Auth
export const LOGIN_EMAIL_CHANGED = 'login_email_changed';
export const LOGIN_PASSWORD_CHANGED = 'login_password_changed';
export const LOGIN_USER = 'login_user';
export const LOGIN_USER_SUCCESS = 'login_user_success';
export const LOGIN_USER_FAIL = 'login_user_fail';
export const LOGOUT_USER = 'logout_user';
export const LOGOUT_USER_SUCCESS = 'logout_user_success';

// Types for Register
export const REGISTER_EMAIL_CHANGED = 'register_email_changed';
export const REGISTER_PASSWORD_CHANGED = 'register_password_changed';
export const REGISTER_CONFIRM_PASSWORD_CHANGED = 'register_confirm_password_changed';
export const REGISTER_USER = 'register_user';
export const REGISTER_USER_SUCCESS = 'register_user_success';
export const REGISTER_USER_FAIL = 'register_user_fail';

// Types for Vocab
export const LOAD_VOCAB = 'load_vocab';
export const LOAD_VOCAB_SUCCESS = 'load_vocab_success';
export const UPDATE_LEARNED_VOCAB_WORDS = 'update_learned_vocab_words';
export const UPDATE_LEARNED_VOCAB_WORDS_SUCCESS = 'update_learned_vocab_words_success';
export const DELETE_LEARNED_VOCAB_WORDS = 'delete_learned_vocab_words';

// Types for Speech
export const LOAD_SPEECH = 'load_speech';
export const LOAD_SPEECH_SUCCESS = 'load_speech_success';
export const UPDATE_LEARNED_SPEECH_WORDS = 'update_learned_speech_words';
export const UPDATE_LEARNED_SPEECH_WORDS_SUCCESS = 'update_learned_speech_words_success';
export const DELETE_LEARNED_SPEECH_WORDS = 'delete_learned_speech_words';

// Types for Grammar
export const LOAD_GRAMMAR = 'load_grammar';
export const LOAD_GRAMMAR_SUCCESS = 'load_grammar_success';

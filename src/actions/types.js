/* Types file that maps the type key located into the generated action,
it associates every string to a variable  This way, the syntax analizer is going to throw
an error in case we type a variable wrongly in other parts of the App
A String would be always accepted and we could be strugling with that until we 
find the cause of the error
*/
export const EMAIL_CHANGED = 'email_changed';
export const PASSWORD_CHANGED = 'password_changed';
export const CONFIRM_PASSWORD_CHANGED = 'confirm_password_changed';
export const LOGIN_USER_SUCCESS = 'login_user_success';
export const LOGIN_USER_FAIL = 'login_user_fail';
export const LOGIN_USER = 'login_user';
export const LOGOUT_USER = 'logout_user';
export const LOGOUT_USER_SUCCESS = 'logout_user_success';
export const REGISTER_USER = 'register_user';
export const REGISTER_USER_SUCCESS = 'register_user_success';
export const REGISTER_USER_FAIL = 'register_user_fail';

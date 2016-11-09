export const SHOW_USER = 'SHOW_USER';
export const HIDE_USER = 'HIDE_USER';

export function showUser() {
  return {
    type: SHOW_USER,
    visibility: true,
  };
}

export function hideUser() {
  return {
    type: SHOW_USER,
    visibility: false,
  };
}

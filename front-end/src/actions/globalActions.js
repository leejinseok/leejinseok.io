export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
export const HIDE_SIDEBAR = 'HIDE_SIDEBAR';

export function toggleSidebar () {
  return {
      type: TOGGLE_SIDEBAR
  }
}

export function hideSidebar () {
  return {
      type: HIDE_SIDEBAR
  }
}
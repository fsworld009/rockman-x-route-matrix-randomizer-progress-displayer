
const params = new URLSearchParams(window.location.search);

export const defaultDisplayMode = Number(params.get('s')) || 0;

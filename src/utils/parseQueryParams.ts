
const params = new URLSearchParams(window.location.search);

function parseBoolean(param: string | null, defaultVar: boolean) {
  if (!param) {
    return defaultVar;
  }
  return param === 'true' || param === '1';
}

export let progressMode = params.get('progress') || '';
if (!['current', 'off'].includes(progressMode)) {
  progressMode = 'all';
}

export let disableTitles = params.get('disabled_title') || '';
if (!['invisible', 'grayout', 'hidden'].includes(disableTitles)) {
  disableTitles = 'grayout';
}


export const showAllStats = parseBoolean(params.get('all_stats'), true);
export const showItemLog = parseBoolean(params.get('item_log'), true);

export const item_log_rows = Math.max(Number.parseInt(params.get('item_log_rows') || '0') || 5, 1);

//export const WEB_SITE = 'http://52.192.77.235';
 export const WEB_SITE = 'http://localhost:8080';

export const VERSION = 'Ver1.5.1';

export const METHOD = {
  GET: 'GET',
  POST: 'POST',
};

export const UPLOAD_STATUS = {
  READY: '0',
  STARTING: '1',
};

export const URL_TYPE = {
  COMMON: '0',
  USER_COMMON: '1',
  USER_TYPE: '2',
};

export const COMMAND = {
  USERS: 'users',
  USER_PROPS: 'userprops',
  NEXT_PAGE: 'nextpage',
  SAVE: 'save',
  DOWNLOAD: 'download',
  UPLOAD: 'upload',
  SETTINGS: 'settings',
  PLAYLIST: 'playlist',
  STATISTIC: 'statistic',
};

export const COMMAND_CALC = {
  NEXT: 'next',
  SCORE: 'score',
  ANSWER: 'answer',
};

export const CNDT = {
  ADD: 0,
  MINUS: 1,
  BUG: 4,
};

export const isIOS = function() {
  const ua = navigator.userAgent.toLowerCase();

  if(ua.indexOf('iphone') > 0 || ua.indexOf('ipad') > 0){
    return true;
  }

  return false;
};
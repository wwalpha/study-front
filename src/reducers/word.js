import { handleActions } from 'redux-actions';

const initialState = {
  offset: 7,
  pageIdx: 0,
  totalPages: 0,
  words: [],
  currPage: [],
  playlist: [],
};

const word = handleActions({

  NEXT_PAGE: (state, action) => {
    const pageIdx = state.pageIdx;
    const totalPages = state.totalPages;

    if (pageIdx < totalPages) {
      const prevPageIdx = state.pageIdx + 1;
      const stateIdx = (prevPageIdx - 1) * state.offset;
      const endIdx = prevPageIdx * state.offset;

      return Object.assign({}, state, {
        pageIdx: state.pageIdx + 1,
        currPage: state.words.slice(stateIdx, endIdx),
      });
    }

    const datas = action.payload.datas;
    datas.forEach(r => (r.checked = false));

    const newWords = state.words === undefined ? datas : state.words.concat(datas);

    return Object.assign({}, state, {
      words: newWords,
      currPage: action.payload.datas,
      pageIdx: state.pageIdx + 1,
      totalPages: state.totalPages + 1,
    });
  },

  PREV_PAGE: (state, action) => {
    if (state.pageIdx === 1) {
      return state;
    }

    const prevPageIdx = state.pageIdx - 1;
    const startIdx = (prevPageIdx - 1) * state.offset;
    const endIdx = prevPageIdx * state.offset;

    return Object.assign({}, state, {
      pageIdx: state.pageIdx - 1,
      currPage: state.words.slice(startIdx, endIdx),
    });
  },

  SAVE: (state, action) => Object.assign({}, state, {
    pageIdx: 1,
    totalPages: 1,
    currPage: action.payload.datas,
    words: action.payload.datas,
  }),

  CHECKED: (state, action) => {
    // copy array
    const p = [].concat(state.currPage);

    // find the same word instance
    const r1 = p.filter(row => (row.word === action.payload.word));

    // Check value changed
    r1.forEach(ra => (ra.checked = !ra.checked));

    return Object.assign({}, state, {
      currPage: p,
    });
  },

  FAVORITE: (state, action) => {
    // copy array
    const p = [].concat(state.currPage);

    // find the same word instance
    const r1 = p.filter(row => (row.word === action.payload.word));

    // Check value changed
    r1.forEach(ra => (ra.favorite = !ra.favorite));

    return Object.assign({}, state, {
      currPage: p,
    });
  },

  DOWNLOAD: (state, action) => Object.assign({}, state, {
    fileData: action.payload.datas[0],
  }),

  CLEAR_WORDS: (state, action) => Object.assign({}, state, {
    currPage: [],
    words: [],
  }),

  CLEAR_CURRENT: (state, action) => Object.assign({}, state, {
    currPage: [],
  }),

  PLAYLIST_REQUEST: (state, action) => Object.assign({}, state, {
    playlist: [],
  }),

  PLAYLIST_SUCCESS: (state, action) => Object.assign({}, state, {
    playlist: action.payload.datas,
  }),

  PLAYLIST_FAILED: (state, action) => Object.assign({}, state, {
    playlist: [],
  }),

}, initialState);

export default word;

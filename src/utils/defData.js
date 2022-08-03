export const locarStorageKeys = {
    currentUser: 'cardGameCurrentUser',
    allUser: 'cardGameAllUsers'
}

export const gameLevelInfo = {
    lvl1: {
        key: 'lvl-1',
        cards: 16
    },
    lvl2: {
        key: 'lvl-2',
        cards: 20
    },
    lvl3: {
        key: 'lvl-3',
        cards: 24
    }
}

export const gameLevelArr = [
    {
      name: 'game-level',
      id: 'game-lvl-1',
      data: gameLevelInfo.lvl1.key,
      value: '4 на 4'
    },
    {
      name: 'game-level',
      id: 'game-lvl-2',
      data: gameLevelInfo.lvl2.key,
      value: '5 на 4'
    },
    {
      name: 'game-level',
      id: 'game-lvl-3',
      data: gameLevelInfo.lvl3.key,
      value: '6 на 4'
    }
]

export const selectOptionsType = [
    {value: 'score', text: 'По Очкам'},
    {value: 'time', text: 'По Времени'},
    {value: 'steps', text: 'По Ходам'}
]

export const selectOptionsLvl = [
    {value: 'lvl_1', text: '4 на 4'},
    {value: 'lvl_2', text: '5 на 4'},
    {value: 'lvl_3', text: '6 на 4'}
]
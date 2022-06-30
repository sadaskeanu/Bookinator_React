const questions = {
  1: {
    title: 'Are you on the planet Earth',
    nextYes: '2',
    nextNo: '3'
  },

  2: {
    title: 'Has there been a Pandemic, War or Apocalypse recently?',
    nextYes: '1',
    nextNo: '2',
    isLast: true
  },

  3: {
    title: 'Are there aliens?',
    nextYes: '3',
    nextNo: '4',
    isLast: true
  }
}

export default questions

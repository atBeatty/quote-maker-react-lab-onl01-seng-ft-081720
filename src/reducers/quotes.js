// import uuid from 'uuid'

export default (state = [], action) => {
  switch(action.type) {
    case "ADD_QUOTE":
      console.log(state)
      return [...state, action.quote];
    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId)
    case "UPVOTE_QUOTE":
        let targetQuote = state.find(q => q.id === action.quoteId)
        targetQuote.votes += 1
      return [{...state[0], votes: targetQuote.votes}]

    case "DOWNVOTE_QUOTE":
      let votedDownQuote = state.find(q => q.id === action.quoteId)
        if (votedDownQuote.votes && votedDownQuote.votes > 0) {
          votedDownQuote = {...votedDownQuote, votes: votedDownQuote.votes -=1}
          

        // } else {
        //   votedDownQuote = {...votedDownQuote, votes: 0}
        }
        console.log(votedDownQuote)
      return state

    default:
      return state;
  }
  
}

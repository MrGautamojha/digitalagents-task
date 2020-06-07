/* eslint-disable no-new-object */
const initialState={
    post:new Object(),
    book:new Object(),
    view:false,
}

function rootReducer(state=initialState,action){
    switch(action.type)
    {
        case 'ADD_POST':
        state.post[action.payload[0]]=action.payload[1]
        console.log("redux",state.post)
        return {post:state.post,person:state.person}

        case 'ADD_BOOK_DETAILS':
        state.book[action.payload[0]]=action.payload[1]
        console.log("redux1",state.book);
        
        return {post:state.post,person:state.book}
        
        default:
        return state

      
    }
}

export default rootReducer

const redux = require('redux');
const createStore = redux.createStore;

// action is a object and action creator function return a object
const BUY_CAKE = "BUY_CAKE";

function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'first redux action'
    }
}


// reducer -> function -> processing action
// (previous state, action) = return newSate

const initialState = {
    numberOfCakes: 10
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numberOfCakes: state.numberOfCakes - 1
        }

        default: return state;
    }
}


// store
const store = createStore(reducer);
console.log("initial state : ", store.getState());
const unsubscribe = store.subscribe(()=> console.log("Update state : ", store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();
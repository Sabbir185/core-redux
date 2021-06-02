const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

// action is a object and action creator function return a object
const BUY_CAKE = "BUY_CAKE";
const BUY_ICE_CREAM = "BUY_ICE_CREAM";

function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'first redux action'
    }
}

function buyIceCream(){
    return {
        type: BUY_ICE_CREAM,
    }
}


// reducer -> function -> processing action
// (previous state, action) = return newSate

const initialCakeState = {
    numberOfCakes: 10
}

const initialIceCreamState = {
    numberOfIceCream: 20
}

const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numberOfCakes: state.numberOfCakes - 1
        }

        default: return state;
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type){
        case BUY_ICE_CREAM: return{
            ...state,
            numberOfIceCream: state.numberOfIceCream - 1
        }

        default: return state;
    }
}


// store
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

const store = createStore(rootReducer);
console.log("initial state : ", store.getState());
const unsubscribe = store.subscribe(()=> console.log("Update state : ", store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
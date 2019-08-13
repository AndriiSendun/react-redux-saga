interface RootState {
    title: String,
    name: String,
}

interface Action {
    type: String,
    payload?: any,
}

const initState: RootState = {
    title: '',
    name: 'User'
};

export default (state = initState, action: Action): RootState => {
    return state;
}
const initialStateUsers = {
    users: [
        {id: 1, username: 'User 1', count: 1},
        {id: 2, username: 'UseR 2', count: 1},
        {id: 3, username: 'User Longname 3', count: 1}
    ]
};

export const userReducer = (state = initialStateUsers, action) => {
    if (action.type === 'USER_CLICKED') {
        const i = state.users.findIndex((e) => { return e.id === action.data.id });
        //// TODO: it's not working if other ways to get immutable objects
        //// const users = Object.assign({}, state.users);
        //// const { users } = state;
        const users = JSON.parse(JSON.stringify(state.users));
        users[i].count++;
        return {...state, users};

    }
    return state;
}

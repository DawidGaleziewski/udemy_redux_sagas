

```javascript
// Benefot of this is untill this delete request resolves, the wile loop will ignore any other delete actions. Blocking it from beeing triggered multiple times.
// It will stop watching for those requests untill the call was resolved
function* watchDeleteUserRequest(){
    while(true){
        // We cannot pass a worker to take effect. It is lower level helper.
        const action = yield take(actions.Types.DELETE_USER_REQUEST);
        yield call (deleteUser, {
            userId: action.payload.userId
        })
    }
}


```
Always use try catch in requests!
```javascript
    try{
        const result = yield call(api.getUsers);
        console.log(result)
        yield put(actions.getUserSuccess({items: result.data.data}))
        // We should always try catch in requests. Otherwise the error could bubble up to other sagas causing issues
    } catch(e){
        
    }

```

Failed kinds of requests:
1. We try to delete non existing resource
2. No internet connection

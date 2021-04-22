Inside a saga worker we can call another saga

```javascript
function* test(){
    yield call(api.getUsersRequest, requestPayload)
    // Calling another saga
    yield call(getUsers);
}
```
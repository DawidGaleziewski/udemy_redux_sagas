takeLatest works similar to take every helper.
if we do a request, and then do a second request during it, take latest will cancel the last request!

Only the most recent call will proceed.
It is great for updating or creating records.

also if we change the tabs for example and want to display diffrent data the previous one can be canceled.
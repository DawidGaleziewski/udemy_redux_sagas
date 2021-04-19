- Call effect allows us to wait for a promise. Call is sequential so we dont have to write callback

- fork - creates a child process from current process.
We can create multiple forks.
In our design we will have a root saga. And all watcher sagas will be forked from root saga.

Each of those forks will be run in seperate processes.

thanks to this all our logic is seperated into its own forks. If any fails we can catch it in error whithout affesting other forks.

We can also run those in pararell

- all - similar to all in resolving promises. It is used when we want to run multiple promises and then act on them once, only when all of them will resolve.
But we are doing it with forked sagas
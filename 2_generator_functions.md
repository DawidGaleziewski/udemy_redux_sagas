Generator functions dont run and finish in one process.

Generator functions must always yield values.
When yield keyword is hit in a generator function it yealds a value.

After that generator will wait for us to instruct it to run again.

We can have one or multiple yield statments.
But we must write it this way that it iterates thru each yield. Up the point where is no more code to be run in the generator. At this point generator terminates.

In case of saga we never terminate the generator function

```javascript
function* testing(){
  yield 1;
  console.log('#111111')
  yield 2;
  console.log('#222222')
  yield 3;
  console.log('#333333')
}

  // After each call of generator function it will return a iterator
  const iterator = testing();
  // In order to get the value yielded by the generator we need to use next() method on the generator
  // Alongside the value we will recive a done flag to let us know when the generator has completed {value: 1, done: false}
  console.log(iterator.next())
  // Next the code will run between the first yield untill the second yield
  console.log(iterator.next())
  console.log(iterator.next())
  // Last next will run after the last yield and return {value: undefined, done: true}
  console.log(iterator.next())


```

# in context of saga
Important thing is to mind when we run a generator we are not blocking the UI.
We control when to enter and exit the function.

second important part is that we can create a generator that will never terminate in a wild loop

```javascript
function* testing(){
  // This will not break the web app due to fact it will enter and exit the web app each time.
  // This will also not terminate after we go to the 4th iteration
  while(true){
    yield 1;
    console.log('#111111')
    yield 2;
    console.log('#222222')
    yield 3;
    console.log('#333333')
  }
}

```

Under the hood this is how the redux saga watcher works. Watchers are all running in those while(true) loops
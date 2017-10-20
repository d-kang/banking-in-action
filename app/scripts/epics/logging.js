const loggingEpic = (console = window.console) => (action$) => action$
  .do(
    action => {
      console.log(`Dispatching [${action.type}]`, action)
    },
    err => console.error(err)
  )
  .ignoreElements();

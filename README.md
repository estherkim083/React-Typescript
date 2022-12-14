npx create-react-app rts --template typescript

npm install --save-exact react-redux redux @types/react-redux redux-thunk@2.3.0 axios@0.21.1

registry.npmjs.org/-/v1/search?text=react

searchRepositories action-> see a TS error in the catch block that says Object is of type 'unknown'

option #1
} catch (err: any) {

option #2
} catch (err) {
if (err instanceof Error) {
dispatch({
type: ActionType.SEARCH_REPOSITORIES_ERROR,
payload: err.message,
});
}
}

dispatch(actionCreators.searchRepositories(term) as any);

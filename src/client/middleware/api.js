import 'isomorphic-fetch';



export function API_CALL() {
  return fetch('/api/todo')
    .then(response =>
      response.json().then(json => ({ json, response }))
    ).then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json)
      }
      console.log('Todo', json);
      return json;
    })
}

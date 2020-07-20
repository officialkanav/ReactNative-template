function set(payLoad) {
  return {type: 'ACTION', payLoad};
}

export function get() {
  return function (dispatch) {
    const url = '';
    return fetch(url, {
      method: 'GET',
      headers: {
        // eslint-disable-next-line prettier/prettier
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.err) {
          throw new Error(json.err);
        }
        return dispatch(set(json));
      })
      .catch((err) => {
        // eslint-disable-next-line no-alert
        alert(err.message);
      });
  };
}

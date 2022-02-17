import fetch from 'isomorphic-unfetch'

export function apiHelper(url, method = 'GET', body = null) {
    if (url.includes('undefined')) {
      return
    }
    let header = null
    if (body) {
      header = {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    } else {
      header = {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    }
  
    return fetch(url, header)
      .then((res) => res.json())
      .then(
        (result) => {
          return result
        },
        (error) => ({
          success: false,
          error,
        })
      )
  }
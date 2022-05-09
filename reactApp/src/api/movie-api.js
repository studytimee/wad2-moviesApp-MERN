export const signup = (email, password, firstName, lastName) => {
    return fetch('/api/accounts', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ email: email, password: password, firstName: firstName, lastName: lastName })
    }).then(res => res.json())
};

export const login = (email, password) => {
    return fetch('/api/accounts/security/token', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ email: email, password: password })
    }).then(res => res.json())
};

// Security and Authentication: Check Valid Security token from local storage
export const getMovies = async () => {
    const res = await fetch(
        '/api/movies', {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
    }
    )
    return res.json();
  };

  export const getUpComingMovies = async () => {
    const res = await fetch(
        '/api/movies/upcoming', {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
    }
    )
    return res.json();
  };
  
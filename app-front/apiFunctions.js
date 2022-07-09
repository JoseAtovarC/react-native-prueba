




export const createUser = async (data) => {


    const res = await fetch(process.env.PLANSCAPE_API + "/auth/register", {
        method: 'POST',

        headers: {
            'Content-type': 'application/json',

        },
        body: JSON.stringify(data)
    }

    );
    if (!res.ok) throw new Error(res.status);
    return await res.json();
}









export const loginUser = async (data) => {


    const res = await fetch(process.env.PLANSCAPE_API + "/auth/login", {
        method: 'POST',

        headers: {
            'Content-type': 'application/json',

        },
        body: JSON.stringify(data)
    }

    );
    if (!res.ok) throw new Error(res.status);
    return await res.json();

}



export const userInfo = async (token) => {


    const res = await fetch(process.env.PLANSCAPE_API + "/user", {
        method: 'GET',

        headers: {
            'Content-type': 'application/json',
            Authorization: 'Bearer ' + token
        },

    }

    );
    if (!res.ok) throw new Error(res.status);
    return await res.json();

}
// loading,error,data


export async function userFetchMiddleWare(dispatch){
       try{
           let resp=await fetch("https://jsonplaceholder.typicode.com/users");
       let users=await resp.json();
    //    setLoading(false);
    //    setUsers(users);
    dispatch({
        type:"success_users",
        payload:users
    })
    }catch(err){
        // setLoading(false);
        // setError(err.message);
        dispatch({
            type:"error_users",
            payload:err.message
        })
    }
}
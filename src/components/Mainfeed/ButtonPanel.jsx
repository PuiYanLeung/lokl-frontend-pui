import axios from "axios";
import { useHistory } from "react-router-dom";

export default function ButtonPanel ({ post, user }) {
    const history = useHistory();
    let bttnshow = false;

    if (user.username === post.author){
        bttnshow = true;
    }else{
        bttnshow = false;
    }

    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            const id = post._id;
            console.log(user.token);
            console.log(post._id);
            const res = await axios.delete(`${process.env.REACT_APP_BACKEND}/post${user.token ? "?secret_token=" + user.token : ""}`, { data : {id} });
            console.log(res.data);
            if(res.data.response === "'Post deleted'"){
                //done something

                // const del = employees.filter(employee => id !== employee.id)
                // setEmployees(del)
            }
        } catch (err) {}
    };

    return (
        <>
         { bttnshow && 
            <div><button className="deleteButtion" onClick={handleDelete}> Delete </button></div>}
        </>
    );
};

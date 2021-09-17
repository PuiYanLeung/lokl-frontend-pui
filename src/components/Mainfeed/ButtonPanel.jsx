import axios from "axios";

export default function ButtonPanel ({ postitem, user, post, setPost }) {
    let bttnshow = false;

    if (user.username === postitem.author){
        bttnshow = true;
    }else{
        bttnshow = false;
    }

    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            const id = postitem._id;
            await axios.delete(`${process.env.REACT_APP_BACKEND}/post${user.token ? "?secret_token=" + user.token : ""}`, { data : {id} });
            setPost(post+1);
        } catch (err) {}
    };

    return (
        <>
         { bttnshow && 
            <div><button className="deleteButtion" onClick={handleDelete}> Delete </button></div>}
        </>
    );
};

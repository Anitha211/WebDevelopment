import { useDispatch, useSelector } from "react-redux"
import { decrease, increase, reset } from "./CounterSlice";
import { setUsers, clearUsers } from "./UserSlice";

function Reducer() {

    let d = useDispatch();

    let Count = useSelector((state) =>
        state.count.value);

    // 

    let users = useSelector((state) => state.users.users);

    let fetchUsers = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => {
                d(setUsers(data));
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (

        <div style={{ textAlign: "center" }}>
            <h2>Counter: {Count}</h2>

            <button onClick={() => d(increase())}> Increase </button>

            <button onClick={() => d(decrease())}> Decrease </button>

            <button onClick={() => d(reset())}> Reset </button>

            {/* / */}

            <h2> User List </h2>

            <button onClick={fetchUsers}>Fetch Users</button>

            <button onClick={() => d(clearUsers())}>Clear Users</button>

            {users.map((user) => (
                <div key={user.id}>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                </div>
            ))}

        </div>
    )
}

export default Reducer;


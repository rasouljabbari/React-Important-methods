import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const AddRemoveUser = () => {
    const [users, setUsers] = React.useState([
        { id: 'a', name: 'Rasoul' },
        { id: 'b', name: 'Dennis' },
    ]);

    const [text, setText] = React.useState('');

    const handleText = (event) => {
        setText(event.target.value);
    };

    const handleAddUser = (e)  =>{
        e.preventDefault()
        if(text){setUsers(users.concat({ id: uuidv4(), name: text }));}
        setText('')
    };

    const handleRemove = (id) => {
        setUsers(users.filter((user) => user.id !== id));
    };

    return (
        <div>
            <form onSubmit={handleAddUser}>
                <input type="text" value={text} onChange={handleText} />
                <button type="submit">
                    Add User
                </button>
            </form>

            <List list={users} onRemove={handleRemove} />
        </div>
    );
};

const List = ({ list, onRemove }) => {
    return (
        <ol>
            {list.map((item) => (
                <ListItem key={item.id} item={item} onRemove={onRemove} />
            ))}
        </ol>
    );
};

const ListItem = ({ item, onRemove }) => {
    return (
        <li>
            {item.name} - {item.id}
            <button type="button" onClick={() => onRemove(item.id)}>
                Remove
            </button>
        </li>
    );
};

export default AddRemoveUser;
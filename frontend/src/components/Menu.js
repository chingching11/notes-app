import React from 'react';
import { Menu, MenuItem } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import MenuIcon from '@material-ui/icons/Menu';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import RequireAuth from './RequireAuth'

const MenuSetting = (props) => {
    let history = useHistory()

    const handleDelete = async () => {
        const res = await axios.delete(`http://localhost:8000/notes/${props.id}`, { withCredentials: true })
        console.log(res)
        // reload the page: to fetch the updated the data after deleting
        // not the best way to handle to get the updated data, as it refreshes the whole page
        history.go(0)
    }

    const handleEdit = () => {
        history.push( { pathname: `/editNote/${props.id}`, noteId: props.id })
    }

    return (
        <Menu menuButton={<MenuIcon className="menu"/>}>
            <MenuItem onClick={handleEdit}>Edit</MenuItem>
            <MenuItem onClick={handleDelete}>Delete</MenuItem>
        </Menu>
    );
}

export default RequireAuth(MenuSetting)
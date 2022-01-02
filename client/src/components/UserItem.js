import PropTypes from 'prop-types';
import useCapitalize from '../custom_hooks/useCapitalize';

const UserItem = ({name, firstName, email, id, handleDetailBtn} ) => {
    let titleName = name || firstName;
    let capEmail = useCapitalize(email);
    // if email is too long to display, trim and append "..."
    if (capEmail.length > 23 && window.innerWidth < 850) {
        capEmail = capEmail.slice(0,22) + "..."
    } else if (capEmail.length > 30 && window.innerWidth > 850) {
        capEmail = capEmail.slice(0,30) + "..."
    }

    return (
        <div className='user-item'>
            <h1 className='card-titles ul'>{titleName ? titleName : "No User Name"}</h1>
            <h2 className='card-titles'>{capEmail}</h2>
            <button className='btn' onClick={() => handleDetailBtn(id)}>Details</button>
        </div>
    )
}

UserItem.propTypes = {
    name: PropTypes.string,
    firstName: PropTypes.string,
    email: PropTypes.string,
}

export default UserItem
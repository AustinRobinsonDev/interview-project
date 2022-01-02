import useCapitalize from '../custom_hooks/useCapitalize';
import PropTypes from 'prop-types';
import profile from '../assets/profile.jpg';

const UserDetails = (props) => {
    const { current, setCurrent, setIsCurrent } = props;
    const { user, address } = current;
    const { line_1, line_2, city, state } = address;
    // zip: possible variable naming issue
    // format address and emails
    let location = `${city}, ${state}, ${address.zip}`;
    let capEmail = useCapitalize(user.email);
    // back button re-renders user list conditionally 
    const handleClick = () => {
        setIsCurrent(false);
        setCurrent({});
    }
    return (
        <main className='user-details'>
            <section className='detail-header'>
                <h1 className='m-15'>{user.name || user.first_name ? user.name || user.first_name : "No user name available"}</h1>
                <h2 className='m-15 email'>{user.email ? `Email: ${capEmail}` : "No email address for this user"}</h2>   
                {(capEmail.length < 22) ? <img className='avatar' src={profile} alt="profile avatar" /> : <></>}           
            </section>
            <hr />
            <section className='detail-header'>
                {!address ? <h3>Address Unavailable</h3> : 
                    <article>
                        <h3 className='m-15'>Address:</h3>
                        <h4 className='m-15'>{line_1}</h4>
                        <h4 className='m-15'>{line_2}</h4>
                        <h4 className='m-15'>{location}</h4>
                    </article>
                }
                <button className='btn d-btn m-15' onClick={handleClick}>Back</button>
            </section>
        </main>
    )
}

UserDetails.propTypes = {
    current: PropTypes.object.isRequired,
}

export default UserDetails
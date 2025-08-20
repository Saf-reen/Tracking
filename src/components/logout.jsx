import { useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';

const LogoutButton = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('token');
    window.location.href = '/';
  };
  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
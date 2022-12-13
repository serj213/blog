import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export const useProfile = () => useSelector((state: RootState) => state.profile.user);

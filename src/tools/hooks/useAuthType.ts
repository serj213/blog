import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export const useAuthType = () => useSelector((state: RootState) => state.auth.typeAuth);

import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export const useNews = () => useSelector((state: RootState) => state.news);

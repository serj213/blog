import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export const usePostDetails = () => useSelector((state: RootState) => state.postDetails)
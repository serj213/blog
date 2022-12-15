import React from 'react';
import MainInfo from './components/MainInfo/MainInfo';
import GridSeconds from '../../Elements/GridSeconds/GridSeconds';
import Container from '../../Components/Container/Container';
import { useProfile } from '../../../tools/hooks/useProfile';
import { IUserData, IUserEditData } from '../../../types/profile';
import { useDispatch } from 'react-redux';
import { userActions } from '../../../redux/profile/actions';

const ProfileContainer: React.FC = () => {
  const user = useProfile() as IUserData;
  const dispatch = useDispatch();


  const onEditHandler = (data:IUserEditData) => {    
    dispatch(userActions.editProfile(data))
  }

  const onDeleteHandler = () => {
    dispatch(userActions.deleteProfile({id:user.id}))

  }

  return (
    <Container>
      <GridSeconds>
        <>{user !== null && <MainInfo deleteHandler={onDeleteHandler} editHandler={onEditHandler} user={user} />}</>
      </GridSeconds>
    </Container>
  );
};

export default ProfileContainer;

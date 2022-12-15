import React from 'react';
import AuthGuard from '../Guards/AuthGuard';
import ProfileContainer from '../views/Containers/ProfileContainer/ProfileContainer';

const ProfilePage: React.FC = () => {
  return (
    <>
      <AuthGuard>
        <ProfileContainer />
      </AuthGuard>
    </>
  );
};

export default ProfilePage;

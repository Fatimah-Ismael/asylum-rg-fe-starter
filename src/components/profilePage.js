import React from 'react';

import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;

  const profileCard = {
    display: 'flex',
    flexDirection: ' column',
    alignItems: ' center',
    padding: '4%',
  };

  return (
    <div>
      <div style={profileCard}>
        <div className="row align-items-center profile-header">
          <div className="col-md-2 mb-3">
            <img
              src={picture}
              alt="Profile"
              className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
            />
          </div>
          <div className="col-md text-center text-md-left">
            <h2>{name}</h2>
            <p className="lead text-muted">{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuthenticationRequired(Profile, {});

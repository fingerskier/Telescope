import React, { PropTypes, Component } from 'react';

import NovaForm from "meteor/nova:forms";

import Core from "meteor/nova:core";
const Messages = Core.Messages;

const UsersEdit = ({document, currentUser}) => {

  const user = document;
  //const label = `Edit profile for ${Users.getDisplayName(user)}`;

  ({CanEditUser} = Telescope.components);

  return (
    <div className="users-edit-form">
      <CanEditUser user={currentUser} userToEdit={user}>
        <h3>Edit Account</h3>
        <NovaForm 
          currentUser={currentUser}
          collection={Meteor.users} 
          document={user} 
          methodName="users.edit"
          labelFunction={(fieldName)=>Telescope.utils.getFieldLabel(fieldName, Meteor.users)}
          successCallback={(user)=>{
            Messages.flash("User updated.", "success");
          }}
        />
      </CanEditUser>
    </div>
  )
}

  
UsersEdit.propTypes = {
  document: React.PropTypes.object.isRequired,
  currentUser: React.PropTypes.object.isRequired
}

module.exports = UsersEdit;
export default UsersEdit;
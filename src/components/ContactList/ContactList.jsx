export const ContactList = ({ users, onDeleteContact }) => {
  return (
    <ul>
      {users.map(user => {
        return (
          <li key={user.id}>
            {user.name}: {user.number}{' '}
            <button type="button" onClick={() => onDeleteContact(user.id)}>
              X
            </button>
          </li>
        );
      })}
    </ul>
  );
};

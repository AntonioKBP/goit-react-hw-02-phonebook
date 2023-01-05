import { List, ListItem, ListItemBtn } from './ContactList.styled';

export const ContactList = ({ users, onDeleteContact }) => {
  return (
    <List>
      {users.map(user => {
        return (
          <ListItem key={user.id}>
            {user.name}: {user.number}{' '}
            <ListItemBtn type="button" onClick={() => onDeleteContact(user.id)}>
              X
            </ListItemBtn>
          </ListItem>
        );
      })}
    </List>
  );
};

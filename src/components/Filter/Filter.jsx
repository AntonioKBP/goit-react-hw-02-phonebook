export const Filter = ({ filterValue, onSearch }) => {
  return (
    <label>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={filterValue}
        name="filter"
        onChange={onSearch}
      />
    </label>
  );
};

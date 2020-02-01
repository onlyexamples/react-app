import React, { useContext, useState } from 'react';
import { AlertContext } from '../context/alert/AlertContext';
import { GithubContext } from '../context/github/GithubContext';

const Search = () => {
  const [value, setValue] = useState('');
  const alert = useContext(AlertContext);
  const github = useContext(GithubContext);

  const onSubmit = e => {
    if (e.key !== 'Enter') { return }
    github.clearUsers();

    if (value.trim()) {
      alert.hide();
      github.search(value.trim());
    } else {
      alert.show('Введите данные пользователя');
    }
  }

  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Введите ник пользователя..."
        value={value}
        onKeyPress={onSubmit}
        onChange={e => setValue(e.target.value)}
      />
    </div>
  );
};

export default Search;
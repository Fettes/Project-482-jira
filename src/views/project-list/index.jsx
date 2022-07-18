import { useState, useEffect } from 'react';
import { SearchPanel } from './search-panel';
import { List } from './list';
import qs from 'qs';
import { cleanObject, useDebounce } from '../../utils';

const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectList = () => {
  const [param, setParam] = useState({
    name: '',
    personId: '',
  });
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  //自定义hook
  const debouncedParam = useDebounce(param, 500);

  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`).then(
      async (response) => {
        if (response.ok) {
          setList(await response.json());
        }
      },
    );
  }, [debouncedParam]);

  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    });
  }, []);

  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List list={list} users={users} />
    </div>
  );
};

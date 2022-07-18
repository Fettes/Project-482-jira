import { useArray, useMount } from '../utils';

export const TsReactTest = () => {
  const persons: { name: string; age: number }[] = [
    { name: 'fts', age: 25 },
    { name: 'psj', age: 24 },
  ];
  const { value, clear, removeIndex, add } = useArray(persons);
  useMount(() => {
    // console.log(value.notExist);
    // add({ name: 'david' });
    // removeIndex('123');
  });

  return (
    <div>
      <button onClick={() => add({ name: 'mtd', age: 27 })}> add MJD</button>
      <button onClick={() => removeIndex(0)}>remove 0</button>
      <button onClick={() => clear()} style={{ marginBottom: '50px' }}>
        clear
      </button>
      {value.map((person, index) => (
        <div>
          <span style={{ color: 'red' }}>{index}</span>
          <span>{person.name}</span>
          <span>{person.age}</span>
        </div>
      ))}
    </div>
  );
};

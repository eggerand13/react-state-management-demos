import React from 'react';

function useRandomName() {
  const names = React.useMemo(() => {
    return [
      'Jim',
      'Marco',
      'Ivett',
      'Meike',
      'Janko',
      'Bukky',
      'Sabrina',
      'Domi',
      'Vinz',
      'Tim'
    ];
  }, []);

  const [name, setName] = React.useState();

  React.useEffect(() => {
    let interval1 = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * 10);
      setName(names[randomIndex]);
    }, 4000);

    return () => {
      clearInterval(interval1);
    };
  }, [names]);

  return name;
}

export default useRandomName;

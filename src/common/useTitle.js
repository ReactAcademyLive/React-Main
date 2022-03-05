import React from 'react';

export default function useTitle(newTitle) {
  React.useEffect(() => {
    console.log('title changed!');
    const savedTitle = document.title;
    document.title = newTitle;
    return () => {
      document.title = savedTitle;
    };
  }, [newTitle]);
}

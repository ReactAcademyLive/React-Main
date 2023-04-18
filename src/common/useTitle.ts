import React from 'react';

export default function useTitle(newTitle: string) {
  React.useEffect(() => {
    document.title = newTitle;
  }, [newTitle]);
}

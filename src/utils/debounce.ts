export default function debounce(func: any, wait: any, immediate?: any) {
  let timeout: any;

  return (query: any) => {
    const later = () => {
      timeout = null;
      if (!immediate) func(query);
    };

    const callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) func(query);
  };
}

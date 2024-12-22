```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs only after the first render
    console.log('Component mounted');
  }, []); // Empty dependency array

  useEffect(() => {
    // This effect runs whenever the count changes but avoids the loop
    console.log('Count changed:', count);
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```
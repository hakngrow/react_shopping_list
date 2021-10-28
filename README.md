## Shopping List component using React hooks

![Shopping List with React](/public/images/screenshot.JPG "Shopping List")

####  Features
1. Adding items
2. Increase/decrease quantity of item
3. Check off items
4. Displays the total number of items

#### Using `useState`
1. List of items
```
  const [items, setItems] = useState([
    { itemName: "Item 1", quantity: 1, isSelected: false },
    { itemName: "Item 2", quantity: 2, isSelected: false },
    { itemName: "Item 3", quantity: 3, isSelected: true },
  ]);
```
2. New input value
```
const [inputValue, setInputValue] = useState("");
```
3. Count of items in list
```
const [itemCount, setItemCount] = useState(6);
```

#### Using `useEffect`
1. Update count of items in list when new item is added or quantity of an item is increased/decreased.
```
  useEffect(() => {
	updateTotal();
  }, [items]);
```
Dependency on `[items]`: Item count is updated when state of `items` is changed

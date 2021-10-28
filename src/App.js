import React, { useState, useEffect } from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faCircle,
  faCheckCircle,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [items, setItems] = useState([
    { itemName: "Item 1", quantity: 1, isSelected: false },
    { itemName: "Item 2", quantity: 2, isSelected: false },
    { itemName: "Item 3", quantity: 3, isSelected: true },
  ]);

  const [inputValue, setInputValue] = useState("");
  const [itemCount, setItemCount] = useState(6);

  useEffect(() => {
	updateTotal();
  }, [items]);

  const handleAddButtonClick = () => {
	const newItem = {
		itemName: inputValue,
		quantity: 1,
		isSelected: false,
	}

	const newItems = [...items, newItem];
	setItems(newItems);
	setInputValue('');
  }

  const handleQuantityChange = (isIncrement, index) => {
	const newItems = [...items];

	if (isIncrement)
		newItems[index].quantity++;
	else if (newItems[index].quantity > 1)
		newItems[index].quantity--;

	setItems(newItems);
  }

  const handleItemSelected = (index) => {
	const newItems = [...items];

	newItems[index].isSelected = !newItems[index].isSelected;

	setItems(newItems);
  }

  const updateTotal = () => {
	  var count = items.reduce((total, item) => {return total + item.quantity;}, 0);
	  setItemCount(count);
  }

  return (
    <div className="app-background">
      <div className="main-container">
        <div className="add-item-box">
          <input
            className="add-item-input"
            placeholder="Add an item..."
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <FontAwesomeIcon icon={faPlus} onClick={() => handleAddButtonClick()}/>
        </div>
        <div className="item-list">
          {items.map((item, index) => (
            <div className="item-container">
              <div className="item-name">
                {item.isSelected ? (
                  <>
                    <FontAwesomeIcon icon={faCheckCircle} onClick={() => handleItemSelected(index)}/>
                    <span className="completed">{item.itemName}</span>
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faCircle} onClick={() => handleItemSelected(index)}/>
                    <span>{item.itemName}</span>
                  </>
                )}
              </div>
              <div className="quantity">
                <button>
                  <FontAwesomeIcon icon={faChevronLeft} onClick={() => handleQuantityChange(false, index)}/>
                </button>
                <span>{item.quantity}</span>
                <button>
                  <FontAwesomeIcon icon={faChevronRight} onClick={() => handleQuantityChange(true, index)}/>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="total">Total: {itemCount}</div>
      </div>
    </div>
  );
};

export default App;

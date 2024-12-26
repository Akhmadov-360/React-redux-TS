import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, updateItem } from "../../core/redux/features/crud/crudThunks";
import { AppDispatch } from "../../core/redux/store";

interface ItemFromProps {
  selectedItem: ICrudItem | null;
  onClear: () => void;
}

const ItemForm: React.FC<ItemFromProps> = ({ selectedItem, onClear }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (selectedItem) {
      setTitle(selectedItem.title);
    } else {
      setTitle("");
    }
  }, [selectedItem]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedItem) {
      dispatch(updateItem({ id: selectedItem.id, item: { title } }));
    } else {
      dispatch(addItem({ title }));
    }
    onClear();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter item title" />
      <button type="submit">{selectedItem ? "Update" : "Add"}</button>
      {selectedItem && (
        <button type="button" onClick={onClear}>
          Clear
        </button>
      )}
    </form>
  );
};

export default ItemForm;

import { useState } from "react";
import "./App.css";
import ItemForm from "./components/Form/ItemForm";
import ListItems from "./components/ListItems";

function App() {
  const [selectedItem, setSelectedItem] = useState<ICrudItem | null>(null);

  const handleClear = () => {
    setSelectedItem(null);
  };

  const handleEdit = (item: ICrudItem) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <ItemForm selectedItem={selectedItem} onClear={handleClear} />
      <ListItems onEdit={handleEdit} />
    </div>
  );
}

export default App;

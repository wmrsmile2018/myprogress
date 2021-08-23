import React, { useRef } from "react";

interface TodoFormProps {
  onAdd(title: string): void;
}

export const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
  const ref = useRef<HTMLInputElement>(null);

  const handleOnKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      onAdd(ref.current!.value);
      ref.current.value = "";
    }
  };

  return (
    <div className="input-field mt2">
      <input
        // onChange={handleOnChange}
        // value={title}
        ref={ref}
        type="text"
        id="title"
        placeholder="Введите новое дело"
        onKeyPress={handleOnKeyPress}
      />
      <label htmlFor="title" className="active">
        Введите новое дело
      </label>
    </div>
  );
};

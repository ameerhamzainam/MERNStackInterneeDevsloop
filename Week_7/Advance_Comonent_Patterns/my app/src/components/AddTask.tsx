import React, { useState } from 'react'

export interface AddTaskProp {
    onAdd: (title: string) => void
}

const AddTask: React.FC<AddTaskProp> = ( {onAdd} ) => {
    // console.log(onAdd);
    const [title, setTitle] = useState("");

    const HandleSubmitButton = (e: React.FormEvent) => {
        e.preventDefault();

        // console.log(title.trim());

        if (title.trim()) {
            onAdd(title.trim());
            setTitle("");
        }

    }


    return (
        <div>
            <form onSubmit={HandleSubmitButton} className="flex mb-4 gap-2">
                <input
                    type="text"
                    className="flex-1 border rounded-lg p-2"
                    placeholder="Add a new task..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
                >
                    Add Task
                </button>
            </form>
        </div>
    )
}

export default AddTask
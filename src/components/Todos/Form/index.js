import { useState } from 'react'

const initalState = {
    id: '',
    todo: ''
};
const Form = ({ todos, setTodos }) => {
    const [form, setForm] = useState(initalState);


    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setForm(initalState);
        setTodos([...todos, form]);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="todo" type="text" placeholder='Todoyu giriniz' onChange={handleChange} value={form.todo}/>
                <input type="submit" value="Kaydet" />
            </form>
        </div>
    )
}

export default Form;
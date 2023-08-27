import css from './Filter.module.css'

export const Filter = ({ value, onFilter }) => {
    return (
        <label className={css.label}>Find contacts by name
            <input className={css.input}
                type="text"
                value={value}
                onChange={onFilter}
            />
        </label>
    );
}
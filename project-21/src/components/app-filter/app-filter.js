import "./app-filter.css";

const AppFilter = (props) => {
    return (
        <div className="btn-group">
            <button type="button"
                    className="btn btn-light">
                    Все сотрудники
            </button>
            <button type="button"
                    className="btn btn-outline-light">
                    На повышение
            </button>
            <button type="button"
                    className="btn btn-outline-light"
                    onClock={props.filterOnSalary}>
                    З/П больше 1000$
            </button>
        </div>
    )
}

export default AppFilter;
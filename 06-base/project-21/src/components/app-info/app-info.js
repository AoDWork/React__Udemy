import "./app-info.css";

const AppInfo = ({totalEmloyee, emloyeeRise }) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {totalEmloyee()}</h2>
            <h2>Премию получат: {emloyeeRise()}</h2>
        </div>
    )
}

export default AppInfo;
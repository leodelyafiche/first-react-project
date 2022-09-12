import './app-info.css';

const AppInfo = ({employees, increased}) => {
    return (
        <div className='app-info'>
            <h1>Штат сотрудников компании</h1>
            <h2>Число сотрудников: {employees}   </h2>
            <h2>Премированные сотрудники: {increased} </h2>
        </div>
    )
}

export default AppInfo;
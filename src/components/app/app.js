import './app.css';
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

function App() {


    const data = [
        {name: 'Danny', salary:800, increase: false, id: 1},
        {name: 'Leo', salary:3000, increase: true, id: 2},
        {name: 'Sergey', salary:50400, increase: false, id: 3},
    ];

    return (<div className='app'>
            <AppInfo/>
            <div className='search-panel'>
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>)

}

// Main application

export default App;
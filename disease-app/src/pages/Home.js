import Navbar from "../layout/Navbar";
import SearchBar from "../layout/SearchBar";
import Disease from "./Disease";
import Records from '../data/outputFR.json';
import {useState} from "react";
import NoDisease from "./NoDisease";

const Home = () => {

    const [disease, setDisease] = useState(Records);
    const [searchTerm, setSearchTerm] = useState('');

    const onSubmit = (e) =>{
        e.preventDefault();
        const filteredDisease = Records?.filter((records)=>(
            records.data.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
        ))
        setDisease(filteredDisease);
    }
    const clearSearch = () => {
        setSearchTerm("");
        setDisease(Records);
    }
    const onChange = (e) => setSearchTerm(e.target.value);

    return(
        <div>
            <Navbar/>
            <SearchBar
            onSubmit={e =>onSubmit(e)}
            value={searchTerm}
            clearSearch={clearSearch}
            onChange={e =>onChange(e)}
            />
            {disease.length > 0 ? <Disease records = {disease}/> : <NoDisease />}

        </div>
    )
}
export default Home;
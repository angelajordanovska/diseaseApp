import React from 'react';
import {Link} from "react-router-dom";
import ViewDisease from "./ViewDisease";

const DiseaseItem = ({data}) => {

    const [isVisible, setIsVisible] = React.useState(false);
    const[addInfo,setAddInfo] = React.useState(false);
    const expand = () => {
        setIsVisible(!isVisible);
    };

    if (!data) {
        return null;
    }

    const menuClass = `dropdown-menu${!isVisible ? " show" : ""}` + "position:relative";
    const showMoreInfo = `dropdown-menu${!addInfo ? " show" : ""}` + "position:relative";

    const showMore = () => {
        setAddInfo(!addInfo);
    }

    return (
        <div key={data.code} className="m-3" >
            {data.children.length > 0 && (
                <i className={`${isVisible ?
                    "bi bi-arrow-down-circle m-2" :
                    "bi bi-arrow-right-circle m-2"}`}
                   onClick={expand}
                >
                </i>
            )}
            <Link onClick={showMore} >{data.data.code + ": " +data.data.name}</Link>
            <div className={showMoreInfo} style={{float:'right', width:'50%', margin:'20px'}}>
                <ViewDisease data = {data}/>
            </div>
            {data.children &&
                data.children.map((childData) => (
                    <div className={menuClass}
                         key={childData.code}>
                        <DiseaseItem  data={childData} />
                    </div>
                ))}
        </div>
    );
};

export default DiseaseItem;

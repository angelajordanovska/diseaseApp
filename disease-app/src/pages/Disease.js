import DiseaseItem from "./DiseaseItem";

const Disease = ({records}) => {

    return (

        <div>
            {
                records.map((el) => (
                    <DiseaseItem data={el}/>
                ))}
        </div>
    )
}
export default Disease;

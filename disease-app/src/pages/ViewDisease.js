const ViewDisease = ({data}) => {

    return (
        <div className="m-3">
            <h5>{data.data.code + " : " + data.data.name}</h5>
            <h5>Note: </h5>
            <p>
                Disease description....
            </p>
            {data.children &&
                data.children.map((childData) => (
                    <div key={childData.code}>
                        <ViewDisease data={childData}/>
                    </div>
                ))}
        </div>
    )
}
export default ViewDisease;
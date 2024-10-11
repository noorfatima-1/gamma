function Student(props){
return(
    <div className="bg-black  text-white p-6 font-bold border-yellow-50 ">
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
)



}
export default Student
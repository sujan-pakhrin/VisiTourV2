import Axios from "axios";
function Home(){
    Axios.post("http://localhost:5000/api/signup", values
        ).then((res) => {
            consle.log(res.data)
        })
    return(
        <div>
            Home
            
        </div>
    )
}

export default Home
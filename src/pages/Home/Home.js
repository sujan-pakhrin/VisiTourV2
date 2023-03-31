
import './Home.css'
const handle_homePage_featured_input = ()=>{

}
const home = () => {
  return (
    <div className='homePage_main_div'>
      <div className='homePage_featured_div'>
        <div className='homePage_featured_centerElement'>
          <h1>Find Your Next Destination</h1>
          <div className='homePage_featured_input_div'>
            <input className='homePage_featured_input' type={'text'} onChange={handle_homePage_featured_input}></input>
            <p>SEARCH</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default home
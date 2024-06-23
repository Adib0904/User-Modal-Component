import './commonSearch.css'

function CommonSearch({ handleChange }) {
  return (
    <>
      <div className='search-div'>
        <input onChange={handleChange} type="text" placeholder="Search" className="search-box" />
      </div>
    </>
  )
}

export default CommonSearch
import { useState } from 'react'
import './App.css'
import CommonCard from './component/CommonCard/CommonCard'
import { useEffect } from 'react'
import CircularIndeterminate from './component/CircularIndeterminate'
import CommonSearch from './component/CommomSearch/CommonSearch'

function App() {
  const [mapData, setMapData] = useState([])

  const [apiData, setData] = useState([])
  const [isLoading, setLoding] = useState(false)
  useEffect(() => {
    getdata()
  }, [])

  const getdata = async () => {
    setLoding(true)
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      const data = await response.json();
      setLoding(false)
      setMapData(data)
      setData(data)
    } catch (err) {
      console.log(err)
    }


  }
  const handleChange = (event) => {
    const searchText = event.target.value;
    const newData = apiData.filter(elem => elem.name.toLowerCase().includes(searchText.toLowerCase()) ? true : false)
    setMapData(newData)
    // console.log(searchText)
    // console.log(mapData)

  }


  if (isLoading) {
    return <div className='center-info'><CircularIndeterminate /> </div>
  }



  return (
    <>
      <div className='search-text'>
        <CommonSearch handleChange={handleChange} />
      </div>
      <div className='app-container' >

        {
          mapData.length > 0 ? mapData.map((elem) =>
            <CommonCard key={elem.id} elem={elem} />) : <h1 className='center-info'>NO DATA FOUND</h1>
        }




      </div>



    </>
  )
}

export default App

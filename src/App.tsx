import { useEffect, useState } from 'react'
import './App.css'

type Digimon = {
  name: string
  image: string
}

function App() {
  const [digimons, setDigimons] = useState<Digimon[]>([])

  useEffect(() => {
    const getDigimons = async () => {
      const response = await fetch('https://digi-api.com/api/v1/digimon?pageSize=10000')
      const digimons = await response.json()
      setDigimons(digimons.content)
    }

    getDigimons()
  }, [])

  return (
    <>
      <h1 className='title'>CLIENT SIDE Digimons</h1>
      <div className='container-images'>
        {digimons.map((digimon) => (
          <div className='border-image' key={digimon.name}>
            <h3 className='name'>{digimon.name}</h3>
            <img src={digimon.image} alt={digimon.name} />
          </div>
        ))}
      </div>
    </>
  )
}

export default App

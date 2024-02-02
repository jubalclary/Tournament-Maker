import './App.css'
import MainText from './Components/MainText'
import NumParticipantsButtonsContainer from './Components/NumParticipantsButtonsContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainText/>
      </header>      
      <main className="App-body">
        <NumParticipantsButtonsContainer />
      </main>
    </div>
  )
}

export default App

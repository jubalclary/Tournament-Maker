import './App.css'
import MainText from './Components/MainText'
import SubText from './Components/SubText'
import NumParticipantsButtonsContainer from './Components/NumParticipantsButtonsContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainText/>
        <SubText/>
      </header>      
      <main className="App-body">
        <NumParticipantsButtonsContainer />
      </main>
    </div>
  )
}

export default App

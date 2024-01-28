import './App.css'
import MainText from './Components/MainText'
import SubText from './Components/SubText'
import NumParticipantsButton from './Components/NumParticipantsButton'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainText/>
        <SubText/>
      </header>      
      <main className="App-body">
        <NumParticipantsButton participantNum='3 - 4' />
        <NumParticipantsButton participantNum='5 - 8' />
        <NumParticipantsButton participantNum='9 - 16' />
        <NumParticipantsButton participantNum='17 - 32' />
        <NumParticipantsButton participantNum='33 - 64' />
      </main>
    </div>
  )
}

export default App

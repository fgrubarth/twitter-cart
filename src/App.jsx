
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'fgrubarth',
    name: 'Federico Rubarth ',
    isFollowing: false,
  },
  {
    userName: 'pheralb',
    name: 'Marco Ruben',
    isFollowing: false
  },
  {
    userName: 'PacoHdezs',
    name: 'Di Maria',
    isFollowing: false
  },
  {
    userName: 'TMChein',
    name: 'Chacho',
    isFollowing: false
  }
]

export function App () {
  return (
    <section className="App">
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}

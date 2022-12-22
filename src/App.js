import {Component} from 'react'

import './App.css'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here

const Welcome = props => {
  const {userList, onDeleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = userList

  const onDelete = () => {
    onDeleteItem(id)
  }

  return (
    <div>
      <li>
        <p>{timeAccessed}</p>
        <img alt="domain logo" src={logoUrl} />
        <p>{title}</p>
        <p>{domainUrl}</p>
        <button onClick={onDelete}>
          <img
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          />
        </button>
      </li>
    </div>
  )
}

class App extends Component {
  state = {first: '', newList: initialHistoryList, last: ''}

  onChangeInput = event => {
    this.setState({first: event.target.value.toLowerCase()})
  }

  onDeleteItem = id => {
    const {newList} = this.state
    const fileteritem = newList.filter(each => each.id !== id)

    this.setState({newList: fileteritem})
  }

  render() {
    const {first, newList, last} = this.state
    const filterList = newList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(first),
    )
    if (filterList.length === 0) {
      return {last: 'Empty History View'}
    }
    return (
      <div>
        <div>
          <img
            alt="app logo"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
          />
          <img
            alt="search"
            src="https://assets.ccbp.in/frontend/react-js/search-img.png"
          />
          <input
            type="search"
            onChange={this.onChangeInput}
            placeholder="Search history"
          />
        </div>
        <ul>
          {filterList.map(each => (
            <Welcome onDeleteItem={this.onDeleteItem} userList={each} />
          ))}
        </ul>
        <p>{last}</p>
      </div>
    )
  }
}

export default App

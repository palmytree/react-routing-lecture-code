import React from 'react'
import Header from './Components/Header'
import router from './router'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
	
	return (
		<div className='App'>
			<Header />
			{router}
		</div>
	)
}

export default App

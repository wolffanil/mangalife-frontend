import React from 'react'

import Catalog from './Catalog'
import UseActionBlock from './UseActionBlock'
import Welcome from './Welcome'

function Home() {
	return (
		<>
			<UseActionBlock />
			<Welcome />
			<Catalog />
		</>
	)
}

export default Home

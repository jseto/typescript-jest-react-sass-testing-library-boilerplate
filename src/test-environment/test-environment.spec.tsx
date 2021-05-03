import React from 'react'
import { render } from '@testing-library/react'
import { App } from './test-environment'

describe('Main Index', ()=>{
	it('should show a test header', ()=>{
		const wrapper = render(<App />)

		const header = wrapper.getByText('Hi there!')
		
		expect( header ).toBeInTheDocument()
	})
})
import React, { Component } from 'react'
import { render } from 'react-dom'

import { ApolloProvider } from 'react-apollo'
import apolloClient from './utils/apollo'

import { Provider as ReduxProvider } from 'react-redux'
import store from './redux/store'

import PageConnection from './components/PageConnection'
import Page from './components/Page'

class App extends Component {
    render(){
        const {apollo} = this.props
        return <ApolloProvider client={apolloClient()}>
            <ReduxProvider store={store}>
                <PageConnection>
                    <Page/>
                </PageConnection>
            </ReduxProvider>
        </ApolloProvider>
    }
}

render(<App/>,document.getElementById('root'))
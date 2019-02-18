import React from 'react'
import Helmet from 'react-helmet'
import axios from 'axios'

// Styling
import styled from 'styled-components'
import colors from '../../styles/colors'

// Components
import Header from '../Header'
import MultiSelectFilter from '../MultiSelectFilter'

interface IState {
  dataJSON: string[]
}

class Home extends React.Component<IState> {
  public state: IState = {
    dataJSON: []
  }

  public async componentDidMount() {
    // Fetch Data
    await axios
      .get('./items.json')
      .then(result => {
        this.setState({
          dataJSON: Object.keys(result.data).map(key => result.data[key])[0]
        })
      })
      .catch(err => {
        console.error(`Something went wrong fetching data`, {
          details: err
        })
      })
  }

  public render() {
    return (
      <Wrapper>
        <Helmet title="Home" />
        <Header title="Multiple Select Filter" color={colors.creamy} />
        <Container>
          {this.state.dataJSON.length > 0 ? (
            <MultiSelectFilter data={this.state.dataJSON} />
          ) : (
            <div> Loading ... </div>
          )}
        </Container>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`
const Container = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;
  min-height: 100vh;
  background-color: ${colors.white};
  color: white;
`
export default Home

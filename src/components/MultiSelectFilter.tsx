import React from 'react'
import ReactHtmlParser from 'react-html-parser'

import Checkbox from './shared/checkbox'

// Styling
import styled from 'styled-components'
import colors from '../styles/colors'
import textStyles from '../styles/textStyles'
import { mqFrom } from '../styles/mediaQueries'
import Icon from './icons/Search'

interface IState {
  items: string[]
  filteredItems: string[]
  checkedItems: Map<string, boolean>
}
interface IProps {
  data: string[]
}

export default class MultiSelectFilter extends React.Component<IProps, IState> {
  public state: IState = {
    items: this.props.data,
    filteredItems: [],
    checkedItems: new Map()
  }

  public componentWillMount() {
    this.setState({ filteredItems: this.state.items })
  }

  public filterList(e: React.ChangeEvent<HTMLInputElement>) {
    let updatedList = this.state.items
    updatedList = updatedList.filter(
      item => item.toLowerCase().search(e.target.value.toLowerCase()) !== -1
    )
    this.setState({ filteredItems: updatedList })
  }

  public handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const item = e.target.name
    const isChecked = e.target.checked
    this.setState(prevState => ({
      checkedItems: prevState.checkedItems.set(item, isChecked)
    }))
  }

  public render() {
    const { filteredItems } = this.state
    return (
      <Wrapper>
        <SearchLabel>Product Group</SearchLabel>
        <Container>
          <SearchFilter>
            <SearchInput
              type="text"
              placeholder="Search ..."
              onChange={this.filterList.bind(this)}
            />
            <SearchIconW>
              <Icon />
            </SearchIconW>
          </SearchFilter>
          <ItemsList>
            {filteredItems.map((item, index) => {
              return (
                <Item key={index}>
                  <Checkbox name={item} onChange={this.handleChange.bind(this)}>
                    {ReactHtmlParser(item)}
                  </Checkbox>
                </Item>
              )
            })}
          </ItemsList>
          <Button
            onClick={() => {
              alert('Apply Xx')
            }}
          >
            apply
          </Button>
        </Container>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  position: relative;
  min-width: 320px;
  margin: 36px 16px;
  border: ${colors.gray} solid 1px;
  border-radius: 4px;
  background-color: ${colors.lightGray};

  ${mqFrom.XS`
    min-width: 290px;
  `};

  ${mqFrom.M`
    min-width: 640px;
  `};
`

const SearchLabel = styled.label`
  margin: 20px 24px;
  color: ${colors.black};
  ${textStyles.general}
  line-height: 2;
`

const Container = styled.div`
  margin: 0 26px;
`

const SearchFilter = styled.div`
  position: relative;
  width: 100%;
`
const SearchInput = styled.input`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 40px;
  padding: 0 30px 0 10px;
  border: ${colors.gray} solid 1px;
  border-radius: 4px;
  font-size: 14px;
`

const Button = styled.button`
  width: 100%;
  height: 40px;
  margin: 0 0 26px;
  padding: 0;
  border-radius: 4px;
  background-color: ${colors.blueSky};
  color: ${colors.white};
  font-size: 16px;
  font-weight: lighter;
`

const SearchIconW = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
`

const ItemsList = styled.ul`
  height: 234px;
  margin: 14px 0;
  padding: 0;
  list-style: none;
  text-align: left;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 4px;
    background-color: ${colors.grayish};
  }

  &::-webkit-scrollbar-thumb {
    outline: 1px solid ${colors.gray};
    background-color: ${colors.gray};
  }
`

const Item = styled.li`
  padding: 8px 0;
`

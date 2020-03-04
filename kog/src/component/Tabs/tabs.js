import React from 'react'
import { Tab } from 'semantic-ui-react'
import TabContent from '../../container/TabContent/tabcontent';

class Tabs extends React.Component
{
  state={
    key:'Continue Watching'
  }
  handleChange = (e, data) =>
  {
    if(data.activeIndex==0){
      this.setState({key:'Continue Watching'})
    }
    if(data.activeIndex==1){
      this.setState({key:'Favourites'})
    }
    if(data.activeIndex==2){
      this.setState({key:'History'})
    }
    if(data.activeIndex==3){
      this.setState({key:'Watch Later'})
    }
  }
render()
{
  const panes = [
    {
      menuItem: 'Continue Watching',
      render: (props) => <Tab.Pane ><TabContent key1="Continue Watching"/></Tab.Pane>,
    },
    { menuItem: 'Favourites', render: (props) => <Tab.Pane><TabContent key1="Favourites"/></Tab.Pane> },
    { menuItem: 'History', render: (props) => <Tab.Pane><TabContent key1="History"/></Tab.Pane> },
    { menuItem: 'Watch Later', render: (props) => <Tab.Pane><TabContent key1="Watch Later" /></Tab.Pane> },
  ]
  return( <div class="container"><Tab panes={panes} renderActiveOnly   {...this.props}/></div>)
}
}
export default Tabs

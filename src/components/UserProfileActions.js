import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Divider from 'material-ui/Divider'
import List, { ListItem, ListItemText } from 'material-ui/List'
import { withStyles } from 'material-ui/styles'
import { FormStyle } from './style'
import { cognitoSignout } from '../actions'

class UserProfileActions extends React.Component {
  handleSignout = () => {
    this.props.handleSignout(this.props.signoutFromEverywhere)
  }
  render() {
    const { signoutFromEverywhere } = this.props
    const text = `Sign out${signoutFromEverywhere ? ' from everywhere' : ''}`
    return (
      <List>
        <Divider />
        <ListItem button>
          <ListItemText primary={text} onClick={this.handleSignout} />
        </ListItem>
      </List>
    )
  }
}

UserProfileActions.propTypes = {
  handleSignout: PropTypes.func.isRequired,
  signoutFromEverywhere: PropTypes.bool,
}

UserProfileActions.defaultProps = {
  signoutFromEverywhere: true,
}

export const component = withStyles(FormStyle)(UserProfileActions)

const mapDispatchToProps = (dispatch) => ({
  handleSignout: (global) => dispatch(cognitoSignout(global)),
})

export default connect(null, mapDispatchToProps)(component)

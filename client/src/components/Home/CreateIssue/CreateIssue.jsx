import React from 'react';
import PropTypes from 'prop-types';

import IssueForm from './IssueForm/IssueForm.jsx';
import styles from './styles/createIssue.module.css';

class CreateIssue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formOpen: false,
    };
    this.openForm = this.openForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
  }

  openForm() {
    this.setState({ formOpen: true });
  }

  closeForm() {
    this.setState({ formOpen: false });
  }

  render() {
    const { formOpen } = this.state;
    const { user, location } = this.props;
    return (
      <div>
        <button type="button" id={styles.createIssue} onClick={this.openForm}>
          report an issue
        </button>
        { formOpen
          ? <IssueForm user={user} location={location} closeForm={this.closeForm} />
          : ''}
      </div>
    );
  }
}

CreateIssue.propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired,
  location: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default CreateIssue;

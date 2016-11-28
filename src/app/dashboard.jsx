import React from 'react';
import ReactDOM from 'react-dom';
import { getUserProjects, getAllProjects, authenticate } from '../lib/api-methods';
import '../scss/dashboard.scss';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      projects: [],
    };
  }

  componentWillMount() {
    return authenticate().then((status) => {
      if (status.data) {
        return getUserProjects().then(projects =>
          this.setState({
            loggedIn: true,
            projects: projects.data,
          })).catch(err => console.error(err));
      }
      window.location.href = '/';
      return 'Unauthorized';
    }).catch(err => console.error(err));
  }

  render() {
    return (
      <div className="dashboard">
        <div>
          {
            this.state.projects.map(project => (
              <a key={project.id} href={`/editor/${project.id}`}>{project.name}</a>
            ))
          }
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Dashboard />, document.getElementById('App'));

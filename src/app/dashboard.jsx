import React from 'react';
import ReactDOM from 'react-dom';
import { getUserProjects, getAllProjects, authenticate } from '../lib/api-methods';
import { handleProjectRemove } from '../lib/api-handlers';
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
        return getUserProjects().then((projects) => {
          if (projects.data) {
            return this.setState({
              loggedIn: true,
              projects: projects.data,
            });
          }
          return 'No Projects';
        }).catch(err => console.error(err));
      }
      window.location.href = '/';
      return 'Unauthorized';
    }).catch(err => console.error(err));
  }

  render() {
    return (
      <div className="dashboard">
        { console.log('this.stateprojects', this.state.projects) }
        {
          this.state.projects.map(project => (
            <div key={project.id}>
              <a href={`/editor/${project.id}`}>{project.name}</a>
              <button onClick={() => handleProjectRemove(project.id)}>
                Remove Project
              </button>
            </div>
          ))
        }
      </div>
    );
  }
}

ReactDOM.render(<Dashboard />, document.getElementById('App'));

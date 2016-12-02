import React from 'react';
import ReactDOM from 'react-dom';
import { getUserProjects } from '../lib/api-methods';
import { handleProjectRemove, handleProjectCreate } from '../lib/api-handlers';
import emptyCanvas from '../lib/emptyCanvas';
import '../scss/dashboard.scss';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.getProjects = this.getProjects.bind(this);
    this.newProjectClick = this.newProjectClick.bind(this);

    this.state = {
      projects: [],
    };
  }

  componentWillMount() {
    this.getProjects();
  }

  getProjects() {
    getUserProjects().then((projects) => {
      if (projects.data) {
        return this.setState({
          projects: projects.data,
        });
      }
      return 'No Projects';
    }).catch(err => console.error(err));
  }

  newProjectClick() {
    const v = this.newProjectName.value;
    handleProjectCreate(1, v, emptyCanvas.appPages, 1, this.getProjects);
    this.newProjectName.value = '';
  }


  render() {
    const getProjects = this.getProjects;

    return (
      <div className="dashboard">
        <div className="top-bar">
          <div className="logo">REACT-ION</div>
          <a
            className="link-icon"
            href="/"
          >
            <i
              className="fa fa-home"
              aria-hidden="true"
            />
          </a>
        </div>
        <div className="lower-bar">
          <input
            type="text"
            placeholder="New Project Name"
            ref={i => this.newProjectName = i}
          />
          <button onClick={this.newProjectClick}>
            <i className="fa fa-plus" aria-hidden="true" />
          </button>
        </div>
        <div className="projects">
          {
            this.state.projects.map(project => (
              <div
                className="project"
                key={project.id}
              >
                <a href={`/editor/${project.id}`}>
                  <i className="fa fa-file-code-o" aria-hidden="true" />
                  {project.name}
                </a>
                <button
                  className="remove-project"
                  onClick={() => handleProjectRemove(project.id, getProjects)}
                > <i className="fa fa-trash" aria-hidden="true" />
                </button>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Dashboard />, document.getElementById('App'));

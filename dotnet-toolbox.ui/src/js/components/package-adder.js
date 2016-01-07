var React = require('react');

var PackageAdder = React.createClass({
  handleChange(event) {
    this.setState({packageName: event.target.value});
  },
  getInitialState() {
    return {}
  },
  hasPackageName() {
    return !!this.state.packageName;
  },
  render() {
    return (
      <div className="container up-xxxl panel paxxxl bg-neutral-11 panel-shadow">
        <form className="form-inline">
          <div className="h3">
            Help others by sharing Nuget packages that have helped you
          </div>
          <div className="form-group">
            <label className="sr-only" htmlFor="package-name">Package Name</label>
            <input className="form-control" id="package-name" placeholder="Nuget Package Name" type="text"
                   onChange={this.handleChange}
                   value={this.state.packageName}/>
          </div>
          <button className="btn btn-default" disabled={!this.hasPackageName()} type="submit">add +</button>
        </form>
      </div>
    );
  }
});

export default PackageAdder;
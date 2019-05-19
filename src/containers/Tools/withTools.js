import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Creators as ToolsActions } from '../../store/ducks/tools';

const mapStateToProps = state => ({
  tools: state.tools
});

const mapDispatchToProps = dispatch => ({
  getTools: () => dispatch(ToolsActions.getTools()),
  addTool: payload => dispatch(ToolsActions.addTool(payload)),
  deleteTool: payload => dispatch(ToolsActions.deleteTool(payload))
});

export default function withTools(Composed) {
  class withToolsComponent extends PureComponent {
    componentDidMount() {
      this.props.getTools();
    }
    render = () => <Composed {...this.props} />;
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(withToolsComponent);
}

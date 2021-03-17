import React, { Component } from "react";
import Error from "components/Error";
import { withRouter, RouteComponentProps } from "react-router-dom";

type Props = RouteComponentProps;

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const { history } = this.props;

    history.listen(() => {
      if (this.state.hasError) {
        this.setState({ hasError: false });
      }
    });

    this.state = { hasError: false };
  }

  componentDidCatch(error: any, info: any) {
    // Display fallback UI
    this.setState({ hasError: true });
    // Log the error to an error reporting service
    console.log("error: ", error);
    console.log("info: ", info);
  }

  render() {
    if (this.state.hasError) return <Error />;
    return this.props.children;
  }
}

export default withRouter(ErrorBoundary);

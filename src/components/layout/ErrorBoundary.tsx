import React, { Component, ErrorInfo, ReactNode } from "react";
import { Button } from "../ui/button";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center space-y-4">
          <h1 className="text-2xl font-bold text-destructive">Something went wrong</h1>
          <p className="text-muted-foreground max-w-md">
            We apologize for the inconvenience. The application encountered an unexpected error.
          </p>
          {process.env.NODE_ENV === 'development' && this.state.error && (
             <pre className="bg-muted p-4 rounded text-left overflow-auto max-w-xl text-xs">
               {this.state.error.toString()}
             </pre>
          )}
          <Button onClick={() => window.location.reload()} variant="outline">
            Reload Application
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}

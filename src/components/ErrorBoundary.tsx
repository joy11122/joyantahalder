import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('A portfolio rendering error occurred.', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main
          role="alert"
          className="flex min-h-screen items-center justify-center bg-black px-6 py-16 text-center text-white"
        >
          <div className="max-w-xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-topaz">
              Something went wrong
            </p>
            <h1 className="mb-5 font-display text-4xl font-bold sm:text-5xl">
              This page hit an unexpected error.
            </h1>
            <p className="mb-8 leading-7 text-white/60">
              Try reloading the portfolio. If the problem continues, you can send me a message.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="rounded-full bg-gradient-to-r from-topaz to-golden px-6 py-3 font-semibold text-black transition hover:brightness-110"
              >
                Reload page
              </button>
              <a
                href="mailto:joyhaldar112233@gmail.com"
                className="rounded-full border border-topaz/60 px-6 py-3 font-semibold text-topaz transition hover:bg-topaz/10"
              >
                Contact me
              </a>
            </div>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

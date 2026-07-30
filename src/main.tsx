import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.css'

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: string }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props)
    this.state = { hasError: false, error: '' }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error: error.message + '\n' + (error.stack || '') }
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('React Error Boundary caught:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '40px', color: '#FF7EB6', background: '#1A1A40', minHeight: '100vh', fontFamily: 'monospace' }}>
          <h1 style={{ fontSize: '24px', marginBottom: '16px' }}>Something went wrong</h1>
          <pre style={{ color: '#F5D76E', whiteSpace: 'pre-wrap', fontSize: '14px' }}>{this.state.error}</pre>
        </div>
      )
    }
    return this.props.children
  }
}

const root = document.getElementById('root')
if (root) {
  try {
    ReactDOM.createRoot(root).render(
      <ErrorBoundary>
        <App />
      </ErrorBoundary>,
    )
  } catch (e) {
    root.innerHTML = `<div style="padding:40px;color:#FF7EB6;background:#1A1A40;min-height:100vh;font-family:monospace"><h1>Fatal Error</h1><pre style="color:#F5D76E">${e}</pre></div>`
  }
}

import React from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
    return (
        <div>
            <h1>Hello React</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, mollitia sunt. Totam minus necessitatibus id dolore,
                facere, voluptatum libero sunt numquam tempore atque a illum
                quisquam! Expedita autem nesciunt temporibus?
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, mollitia sunt. Totam minus necessitatibus id dolore,
                facere, voluptatum libero sunt numquam tempore atque a illum
                quisquam! Expedita autem nesciunt temporibus?
            </p>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

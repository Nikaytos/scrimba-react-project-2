import Header from "./components/Header.jsx";
import Entry from "./components/Entry.jsx";
import data from './data.js'

export default function App() {
    const entries = data.map((e, index) => (
        <>
            <Entry
                key={e.id}
                entry={e}
            />
            {index < data.length - 1 && <hr className="entry-divider" />}
        </>
    ))
    return (
        <>
            <Header/>
            <main>
                {entries}
            </main>
        </>
    )
}
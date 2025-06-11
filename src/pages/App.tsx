import './styles/App.css'   
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import  Home  from './pages/Home.tsx'
import  NoticeBoard from './pages/Notice-board.tsx'
import Inspection from './pages/Inspection.tsx'
import ReportandAnalisys from './pages/Report-and-Analisys.tsx'
import RouteManagement from './pages/Route-management.tsx'
function App() {
 
    
    return (

        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/notice-board" element={<NoticeBoard/>}/>
                <Route path="/inspection" element={<Inspection/>}/>
                <Route path="/report-and-analisys" element={<ReportandAnalisys/>}/>
                <Route path="/route-management" element={<RouteManagement/>}/>
            </Routes>
        </Router>

    )
}

export default App
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import  Home  from './Home.tsx'
import  NoticeBoard from './NoticeBoard.tsx'
import Inspection from './Inspection.tsx'
import ReportandAnalisys from './ReportAndAnalisys.tsx'
import RouteManagement from './RouteManagement.tsx'
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
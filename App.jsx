import Navbar from './components/navbar/navbar'
import Profile from './components/profile/profile'
import Projects from './components/projects/projects'
import Experiences from './components/experiences/experiences'
import About from './components/about/about'
import C4 from './assets/c4.png'
import './App.css'
import Chat from './components/chat/chat'

function App() {
    return (
        <>
            <Navbar/>
            
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div id="main">
                <Profile/>
                <About/>
                
            </div>
            <Chat/>
            
            
            <div id="exp">
                <h2>Experiences</h2>
                <Experiences 
                    title="Undergraduate Researcher" 
                    info="Hariri Institute for Computing and Computational Engineering, Boston University" 
                    dates="3/2025-Present" 
                    bullets={
                        [" Working on a project to examine international news coverage of COVID-19 and its impact"]}
                />
                <Experiences 
                    title="Co-founder/Lead Software Developer" 
                    info="Atlas Sports, Boston, MA" 
                    dates="2/2025-Present" 
                    bullets={
                        ["Working with non-profit founders of Untapped Potential","Doing fullstack app development of team communications app which makes getting kids to and from practice easier", "Through the app, parents, players, and coaches can seamlessly coordinate rides, communicate with their  team, and access a donation-based marketplace for equipment and player recruitment. Coaches can post team needs, search for players, and manage team interactions, while players and parents can connect, find gear, and arrange transportation"]}
                />
                <Experiences 
                    title="Intern" 
                    info="Fubon Bank, Hong Kong" 
                    dates="08/2023-12/2023; 07/2024-09/2024" 
                    bullets={["Compared large-scale language model solutions to Customer Due Diligence, Anti-Money Laundering, and Fraud-Monitoring", "Remodeled letter templates in company database", "Assisted in updating front end design of company database"]}
                />
                <Experiences 
                    title="Student-Participant" 
                    info="Amazon Web Services, Hong Kong" 
                    dates="07/2024-09/2024" 
                    bullets={["competed in developing an app using generative AI"]}
                />
                <Experiences 
                    title="Research Volunteer" 
                    info="Jefferson Hospital/RAD AI, Philadelphia, PA" 
                    dates="Dates - Dates" 
                    bullets={["Assisted in preparing data to train machine learning model", "Looked into patients with pulmonary embolisms and or lung nodules to find correlation between follow up appoints and further health issues", "For designing a better approach to connect with patients","Analyzed data from Einstein Hospital medical records; cross referenced patients’ symptoms with follow up appointment to identify potential correlations"]}
                />
                
                
            </div>
            <div id="projects">
                <h2>Projects</h2>
                {/* <Projects name="Vector Visualization" description="Project description here" github="https://github.com/"/> */}
                <Projects name="Optimized Matrix Multiplcation Algorithm" description="Repo built during my time taking a linear algebra course. Used to help visualize vectors in 2D and 3D space, also implements Matrix Algebra" github="https://github.com/elee05/Matrix-Algebra"/>
                <Projects name="Connect 4 Simulator" description="Fun terminal project using ASCII graphics built with Python. Supports 2 player and single player. Integrated AI opponent which implements recursive backtracking to predict best move." github="https://github.com/elee05/ASCII-Connect-Four"/>
                <Projects name="8 Puzzle Solver" description="Designed and developed an 8 puzzle solving algorithm in Python which uses a state space search method and heuristic function. Algorithm is based on based on quantity and degree of displaced positions. Capable of solving most complex permutations with 31 optimal moves to solve." github="https://github.com/elee05/8-puzzle-solver"/>
                <Projects name="Personal Tokenizer" description="Part of my ongoing crusade to devlop deeper knowledge of NLPs:Small scale tokenizer trained on Shakespear. Capable of holding up to 800 unique tokens" github="https://github.com/elee05/Tokenizer/tree/main"><img src={C4} ></img></Projects>
                {/* <Projects name="Stock Pricing Simulator" description="Project description here" github="https://github.com/"/> */}
            </div>
           

        </>
    )
}

export default App
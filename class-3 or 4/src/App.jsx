import './App.css'
import BlogCard from './components/blogCard'
import Card from './components/card'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <div className="d-flex bg-gray p-5">
        <Card src="./src/components/image/vector.png" heading="Web  Development" bodytet="Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network)." />
        <Card src="./src/components/image/vector (1).png" heading="Web  Design" bodytet="Web design is the creation of websites and pages to reflect a company's brand and information and ensure a user-friendly experience. ." />
        <Card src="./src/components/image/Group 14.png" heading="App  Design" bodytet="App design is the look and feel of a mobile application. This includes all of the visual elements and interactive elements that impact how the app functions." />
      </div>
      <h1 className="heading center">Blog</h1>
      <div className="d-flex row">
        <BlogCard blogHeading="Learn HTML" />
        <BlogCard blogHeading="Learn CSS" />
      </div>
      <div className="d-flex row">
        <BlogCard blogHeading="Learn Javascript" />
        <BlogCard blogHeading="Learn Go Lang" />
      </div>
    </>
  )
}

export default App

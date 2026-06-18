import '../styles/Spinner.css'

const Spinner = () => {

  return (
    <div className="loader-container">
      <div className="loader-wrapper">
        <div className="loader"></div>
        <div className="loader-ring"></div>
      </div>
    </div>
  )
}

export default Spinner
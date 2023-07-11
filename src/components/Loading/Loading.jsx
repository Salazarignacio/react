export default function Loading() {
    return(
  <div className="mh">
    <div className="d-flex justify-content-center mb-2">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
    <div className="d-flex justify-content-center" style={{ fontWeight: 600 }}>
      Loading
    </div>
  </div>)
}

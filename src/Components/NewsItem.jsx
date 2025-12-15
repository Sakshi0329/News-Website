import image from "../assets/news.jpg"
const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block m-3" style={{ maxWidth: "345px" }}>
      <img
        src={src?src:image}
        style={{ height: "200px", width: "360px" }}
        className="card-img-top img-fluid"
        alt={title}
      />
      <div className="card-body">
        <h5 className="card-title">
          {title ? title.slice(0, 50) + (title.length > 50 ? '...' : '') : 'Untitled'}
        </h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90) + (description.length > 90 ? '...' : '')
            : 'News is a current event. It provides information about something that has recently happened.'}
        </p>
        <a
          href={url}
          className="btn btn-primary"
        // target="_blank"
        // rel="noopener noreferrer"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;

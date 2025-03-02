import React from "react";

const Newsitem = (props) => {
    // let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div>
        <div className="card my-3">
          <div style={{display: 'flex', justifyContent: 'center', position: 'absolute', right: '0'}}>
            <span className="badge rounded-pill bg-danger">
                {props.source}
            </span>
          </div>
          <img src={props.imageUrl} className="card-img-top" alt="..." />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{props.title}...</h5>
            <p className="card-text">{props.description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {props.author ? props.author : "Unknown"} on{" "}
                    {new Date(props.date).toLocaleString("en-US", {
                        month: "2-digit",
                        day: "2-digit",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                        hour12: true,
                    })}
              </small>
            </p>
            <a
              href={props.newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}

export default Newsitem;

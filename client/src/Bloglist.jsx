import React from 'react';



function BlogList(props) {
    var content = props.content.substring(0, 100) + '...';
    
    return (

        <div className="col-sm-10 col-xl-8">
            <div className="row-md-3" > {/* `key` hinzufügen für bessere Performance */}
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-primary-emphasis">{props.category}</strong>
                        <h3 className="mb-0">{props.titel}</h3>
                        <div className="mb-1 text-body-secondary datum">Nov 12</div>
                        <p className="card-text mb-auto">
                             {content}
                        </p>
                        <a href="" className="icon-link gap-1 icon-link-hover stretched-link">
                            Continue reading
                        </a>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <titel>Placeholder</titel>
                            <rect width="100%" height="100%" fill="#55595c"></rect>
                            <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                        </svg>
                    </div>
                </div>
            </div>
    </div>
    

    )


}

export default BlogList;
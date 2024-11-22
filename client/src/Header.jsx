import React from "react";


function Header({filterPosts, selectedCategory}) {
    
  
  
  const categories = ["Alle", "Technologie", "Design", "Kultur", "Business", "Politik", "Wissenschaft", "Gesundheit", "Mode", "Reisen"];
  
  return (
  <div> 
    <header className="border-bottom lh-1 py-3">
      <div className="row flex-nowrap justify-content-center align-items-center">
        <div className="col-4 d-flex justify-content-center">
          <a className="blog-header-logo text-body-emphasis text-decoration-none" href="#">Large</a>
        </div>
      </div>
</header>
  
    <div className="nav-scroller py-1 mb-3 border-bottom">
      <nav className="nav nav-underline justify-content-between">
        {categories.map((category) => (
          <a className={`nav-item nav-link link-body-emphasis 
            ${selectedCategory === category ? "active-category" : ""}`}
           key={category} onClick={() => filterPosts(category)}>{category}</a>
        ))}
        
        
      </nav>
    </div>
  </div>
        
    )
}

export default Header;
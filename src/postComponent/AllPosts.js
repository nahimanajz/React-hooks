import React from 'react';
const AllPosts = (props) => {
    const {title, post, category, created_At } = props;
return (
    <div className="post-content dark-light">
        <h3>{title}</h3>
        <p>{ post }</p>
        <small>{category}</small>
        <small>{created_At}</small>
    </div>
)
};
export default AllPosts;
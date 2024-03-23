import React from 'react';
import './WrittenPosts.css';

interface WrittenPostsProps {
    posts: string[];
}

interface WrittenPostsProps {
    posts: string[];
}

const WrittenPosts: React.FC<WrittenPostsProps> = ({ posts }) => {
    return (
        <div className="written-posts-container">
            {posts.map((post, index) => (
                <div className="post" key={index}>
                    {post}
                </div>
            ))}
        </div>
    );
};

export default WrittenPosts;